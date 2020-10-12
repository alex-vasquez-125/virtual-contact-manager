pipeline {
  agent {
    docker { image 'node:14-alpine' }
  }
  stages {
    stage('Unit test') {
      steps {
        sh 'pwd'
        sh 'ls -la'
        sh 'ls -la ./virtual-contacts-angular'
        sh 'cat package.json'
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
