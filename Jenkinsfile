pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }
  }
  stages {
    stage('Unit test') {
      steps {
        sh 'env'
        echo 'running npm install'
        sh 'npm install'
        echo 'running unit tests'
        sh 'npm run test'
      }
    }
    stage('Build') {
      when {
        branch 'master'
      }
      steps {
        echo 'building..'
      }
    }
    stage('Promoting code to master branch') {
      when {
        changeRequest target: 'master'
      }
      steps {
        echo 'Promoting code to master..'
      }
    }
    stage('Every stage but master') {
      when {
        not { branch 'master' }
      }
      steps {
        echo 'This branch is not master '
        echo BRANCH_NAME
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
