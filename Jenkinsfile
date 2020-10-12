pipeline {
  agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Unit test') {
      steps {
        sh 'whoami'
        sh 'pwd'
        sh 'ls -la'
        sh 'ls -la ./virtual-contacts-angular'
        sh 'cat package.json'
        echo 'chmod'
        sh 'chmod -R 777'
        sh 'ls -la'
        echo 'installing angular cli globally'
        sh 'npm install -g @angular/cli'
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
