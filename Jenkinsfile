pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
  }
  stages {
    stage('Unit test') {
      steps {
        sh 'env'
        echo 'running npm install'
        sh 'npm install'
        echo 'running unit tests'
        sh 'npm run test'
        sh 'env'
        script {
          def causes = currentBuild.getBuildCauses()
          def specificCause = currentBuild.getBuildCauses('hudson.model.Cause$UserIdCause')
          println causes
          println specificCause
          println "currentBuild"
          println currentBuild
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
