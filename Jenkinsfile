pipeline {
  agent {
    docker { image 'node:14-alpine3.12' }
  }
  stages {
    stage('Unit test') {
      steps {
        sh 'pwd'
        sh 'ls -la'
        dir('virtual-contacts-angular/src') {
          sh 'pwd'
          sh 'ls -la'
        }
        dir('virtual-contacts-angular/src/app') {
          sh 'pwd'
          sh 'ls -la'        
        }
        dir('virtual-contacts-angular') {
          sh 'pwd'
          sh 'ls -la'
          sh 'npm -v'
          sh 'node -v'
          echo 'running unit tests'
          sh 'npm install'
          sh 'npm run test'
        }
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
