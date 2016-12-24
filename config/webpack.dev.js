const path = require('path');
const webpack = require('webpack');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig({}), {
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
        new webpack.HotModuleReplacementPlugin()
    ]
});
