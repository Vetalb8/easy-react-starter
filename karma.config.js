const path = require('path');

const webpackConfig = require('./config/webpack.test');

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['coverage', 'mocha'],
        browsers: ['Chrome'],
        basePath: '.',
        autoWatch: false,
        singleRun: true,
        browserNoActivityTimeout: 60000,
        colors: true,
        logLevel: config.LOG_DISABLE,

        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            'test-bundler.js'
        ],

        plugins: [
            require("karma-webpack"),
            require("karma-jasmine"),
            require("karma-coverage"),
            require("karma-mocha-reporter"),
            require("karma-chrome-launcher"),
            require("karma-sourcemap-loader")
        ],

        preprocessors: {
            ['test-bundler.js']: ['webpack', 'sourcemap'] // eslint-disable-line no-useless-computed-key
        },

        webpack: webpackConfig,

        // make Webpack bundle generation quiet
        webpackMiddleware: {
            noInfo: true,
            stats: 'errors-only'
        },

        coverageReporter: {
            dir: path.join(process.cwd(), 'coverage'),
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'text-summary' }
            ]
        }
    });
};
