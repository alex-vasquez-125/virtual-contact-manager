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
        sh 'ls -la'
        sh 'pwd'
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
