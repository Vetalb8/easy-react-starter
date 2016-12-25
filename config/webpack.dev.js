const path = require('path');
const webpack = require('webpack');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

const METADATA = webpackMerge(commonConfig().metadata, {
    host: HOST,
    port: PORT,
    ENV
});

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
                loader: 'react-hot!babel!eslint',
                exclude: [/node_modules/, path.resolve('./dist')]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV)
        }),
        new WebpackBrowserPlugin({
            port: PORT,
            url: 'http://localhost'
        })
    ],
    devServer: {
        port: PORT,
        host: HOST,
        historyApiFallback: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        outputPath: path.resolve('./dist')
    }
});
