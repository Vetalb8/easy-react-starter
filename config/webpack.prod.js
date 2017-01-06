const path = require('path');
const webpack = require('webpack');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const WebpackMd5Hash = require('webpack-md5-hash');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

const METADATA = webpackMerge(commonConfig().metadata, {
    ENV,
    API_ROOT: '/api'
});

module.exports = webpackMerge(commonConfig(), {
    metadata: METADATA,
    debug: false,
    devtool: false,
    output: {
        publicPath: '/',
        path: path.resolve('./dist'),
        filename: '[name].[chunkhash:6].bundle.js',
        sourceMapFilename: '[name].[chunkhash:6].bundle.map',
        chunkFilename: '[id].[chunkhash:6].chunk.js'
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
        new WebpackMd5Hash(),
        new webpack.DefinePlugin({
            '__ENV__': JSON.stringify(METADATA.ENV)
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: { 'screw_ie8': true, 'keep_fnames': true },
            compress: { 'screw_ie8': true, 'warnings': true },
            comments: false
        })
    ]
});
