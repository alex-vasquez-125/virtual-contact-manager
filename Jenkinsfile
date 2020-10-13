pipeline {
  agent {
    docker {
      image 'node:14-alpine'
    }
  }
  environment {
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
    PUPPETEER_EXECUTABLE_PATH='/usr/bin/chromium-browser'
  }
  stages {
    stage('Unit test') {
      steps {
        sh 'whoami'
        echo 'installing chromium and required deps'
        sh 'sudo apk add --no-cache chromium nss freetype freetype-dev harfbuzz ca-certificates ttf-freefont nodejs yarn'
        sh 'yarn add puppeteer@1.19.0'
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
