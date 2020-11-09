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
          changeSetList.eachWithIndex { changeSet, index ->
            println "index: $index"
            println "changeSet: $changeSet"
          }
          
          println currentBuild.getCurrentResult()
          println currentBuild.getDescription()
          println currentBuild.getDisplayName()
          println currentBuild.getFullDisplayName()
          println currentBuild.getFullProjectName()
          println currentBuild.getId()
          println currentBuild.getNumber()
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
