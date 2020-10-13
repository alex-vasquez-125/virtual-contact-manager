pipeline {
  agent {
    docker {
      image 'node:12-alpine'
    }
  }
  stages {
    stage('Unit test') {
      steps {
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
