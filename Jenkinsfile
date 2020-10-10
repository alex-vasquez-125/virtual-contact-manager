pipeline {
  agent any
  stages {
    stage('Unit test') {
      steps {
        echo 'running unit tests'
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
    post {
      always {
        echo 'done!'
      }
    }
  }
}
