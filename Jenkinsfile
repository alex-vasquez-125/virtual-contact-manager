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
        echo 'running unit tests'
        sh 'ng test --no-watch --code-coverage'
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
