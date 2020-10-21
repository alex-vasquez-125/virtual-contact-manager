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
      steps {
        echo 'building..'
        when {
          branch 'master'
        }
        echo 'should only build on master'
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
    // this next block gets executed on PRs also
    stage('Every stage but master') {
      when {
        not { branch 'master' }
      }
      steps {
        echo 'This branch is not master'
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
      junit 'reports/unit/*.xml'
      cobertura(
        coberturaReportFile: 'reports/coverage/*.xml'
      )
    }
  }
}
