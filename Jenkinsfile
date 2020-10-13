pipeline {
  agent {
    docker {
      image 'node:14-alpine'
    }
  }
  stages {
    stage('Unit test') {
      steps {
        sh 'env'
        sh 'rm -r node_modules'
        sh 'rm package-lock.json'
        sh 'export CHROME_BIN=/var/jenkins_home/workspace/virtual-contact-manager_master/node_modules/puppeteer/.local-chromium/linux-800071/chrome-linux/chrome'
        echo 'running npm install'
        sh 'npm install'
        echo 'running unit tests'
        sh 'npm run test'
      }
    }
    stage('Build') {
      steps {
        echo 'building..'
      }
    }
    stage('Deploy') {
      steps {
        echo 'deploying..'
      }
    }
  }
  post {
    always {
      echo 'done!'
    }
  }
}
