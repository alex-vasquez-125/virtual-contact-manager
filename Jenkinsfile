pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
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
      sh 'pwd'
      sh 'ls -la'
      junit 'reports/unit/*.xml'
      cobertura(
        coberturaReportFile: 'reports/coverage/*.xml'
      )
    }
  }
}
