/*global module */
/*jslint indent: 2 */

// Karma configuration
// Generated on Fri Jan 03 2014 22:31:12 GMT+0100 (CET)

module.exports = function (config) {
  'use strict';
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-resource/angular-resource.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/app.js',
      'app/**/*.js',
      'app/**/*.html'
    ],


    // list of files to exclude
    exclude: [
      'app/**/example.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    preprocessors: {
      '**/*.html': ['ng-html2js'],
      'app/**/!(*.spec).js': 'coverage'
    },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'app/.*/',
      // prepend this to the
      prependPrefix: ''
    }
  });
};
