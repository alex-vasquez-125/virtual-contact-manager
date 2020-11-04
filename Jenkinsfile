pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
  }
  environment {
    NEW_VERSION = ''
  }
  stages {
    stage('Unit test') {
      steps {
        sh 'env'
        echo 'running npm install'
        sh 'npm install'
        echo 'running unit tests'
        sh 'npm run test'
        echo 'about to try if block'
        sh "if [ -z \"$NEW_VERSION\" ]; then echo \"nothing in new version\"; else echo \"new version is $NEW_VERSION\"; fi"
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
