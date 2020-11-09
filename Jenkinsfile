pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
  }
  stages {
    stage('Unit test') {
      steps {
        echo 'running npm install'
        sh 'npm install'
        echo 'running unit tests'
        sh 'npm run test'
        sh 'env'
        script {
          def causes = currentBuild.getBuildCauses()
          println causes
          println "checking currentBuild"
          println currentBuild.getBuildVariables()

          def changeSetList = currentBuild.getChangeSets()
          println "changeSetList class"
          println changeSetList.getClass()
          println changeSetList.getKind()



          changeSetList.eachWithIndex { changeSet, index ->
            println "index: $index"
            println "changeSet: $changeSet"
            println changeSet
            println changeSet.getAuthor()
            println changeSet.getAuthorEmail()
            println changeSet.getBranch()
            println changeSet.getComment()
            println changeSet.getCommentAnnotated()
            println changeSet.getCommitId()
            println changeSet.getId()
            println changeSet.getMsg()
            println changeSet.getParentCommit()
            println changeSet.getRevision()
            // script not permitted to access this def gitChangeSetList = changeSet.getLogs()
            changeSet.eachWithIndex { innerChangeSet, innerIndex ->
              println "innerChangeSet"
              println innerChangeSet
              println innerIndex
            }

          } // 0 & hudson.plugins.git.GitChangeSetList@2fe172db

          println currentBuild.getCurrentResult() // SUCCESS
          println currentBuild.getDescription() // null
          println currentBuild.getDisplayName() // build number #19
          println currentBuild.getFullDisplayName() // virtual-contact-manager >> random-branch #19
          println currentBuild.getFullProjectName() // virtual-contact-manager/random-branch
          println currentBuild.getId() // build number 19
          println currentBuild.getNumber() // build number 19
          println "done checking currentBuild"
          // script not permitted to use this method println currentBuild.rawBuild.getClass()
          // script not permitted to use this method println currentBuild.getRawBuild()
        }
      }
    }
    stage('Build') {
      steps {
        echo 'building..'
        // this script block should only execute on master
        script {
          if (env.BRANCH_NAME == 'master') {
            echo 'building in master'
          }
        }
        echo 'finished building..'
      }
    }
    stage('Promoting code to master branch') {
      when {
        changeRequest target: 'master'
      }
      steps {
        echo 'Promoting code to master..'
      }
    }
    // this next block gets executed on PRs also
    stage('Every stage but master') {
      when {
        not { branch 'master' }
      }
      steps {
        echo 'This branch is not master'
        echo BRANCH_NAME
      }
    }
    stage('Deploy') {
      when {
        anyOf {
          branch 'master';
          branch 'jenkins-multi-branch'
        }
      }
      steps {
        echo 'deploying..'
      }
    }
  }
  post {
    always {
      junit 'reports/unit/*.xml'
      cobertura(
        coberturaReportFile: 'reports/coverage/*.xml'
      )
    }
  }
}
