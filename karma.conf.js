// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
var path = require('path');
process.env.CHROME_BIN = require('puppeteer').executablePath();

console.log('process.env.CHROME_BIN: ', process.env.CHROME_BIN);

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-junit-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: path.join(__dirname, './coverage/virtual-contacts-angular'),
      reports: ['cobertura'],
      fixWebpackSourcePaths: true
    },
    reporters: ['junit'],
    junitReporter: {
      outputDir: path.join(__dirname, '/reports/unit/')
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromiumHeadless',
        flags: [
          '--disable-web-security',
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--remote-debugging-port=9223',
          '--headless',
          '--disable-gpu'
        ]
      }
    },
    singleRun: false,
    restartOnFileChange: true
  });
};
