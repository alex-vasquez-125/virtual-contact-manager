pipeline {
  agent {
    docker {
      image 'node:14-alpine'
    }
  }
  stages {
    stage('Unit test') {
      steps {
        sh 'whoami'
        sh 'pwd'
        sh 'ls -la'
        sh 'rm -r node_modules'
        sh 'rm package-lock.json'
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
