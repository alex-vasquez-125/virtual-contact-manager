pipeline {
  agent {
    docker { image 'node:14-alpine3.12' }
  }
  stages {
    stage('Unit test') {
      steps {
        sh 'pwd'
        echo 'running unit tests'
        sh 'npm install'
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
