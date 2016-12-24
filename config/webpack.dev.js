const path = require('path');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig({}), {
    debug: true,
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js',
        library: 'ac_[name]',
        libraryTarget: 'var',
    }
});
