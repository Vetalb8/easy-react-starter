const path = require('path');
const webpack = require('webpack');
const argv = require('yargs').argv;

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const WebpackBrowserPlugin = require('webpack-browser-plugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

const METADATA = webpackMerge(commonConfig().metadata, {
    host: HOST,
    port: PORT,
    ENV,
    API_ROOT: '/api'
});

const devTools = !!argv.devTools || false;

const plugins = [];

if (argv.browser) {
    plugins.push(new WebpackBrowserPlugin({
        port: PORT,
        url: 'http://localhost'
    }));
}

module.exports = webpackMerge(commonConfig(), {
    metadata: METADATA,
    debug: true,
    devtool: 'source-map',
    output: {
        publicPath: '/',
        path: path.resolve('./dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel!eslint',
                exclude: [/node_modules/, path.resolve('./dist')]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            '__ENV__': JSON.stringify(METADATA.ENV),
            '__DEVTOOLS__': devTools,
            'process.env': {
                NODE_ENV: JSON.stringify(METADATA.ENV)
            }
        }),
        ...plugins
    ],
    devServer: {
        port: PORT,
        host: HOST,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: path.resolve('./dist')
    }
});
