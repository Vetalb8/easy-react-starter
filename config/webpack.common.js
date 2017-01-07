global.Promise = require('bluebird');

const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.ENV || process.env.NODE_ENV;

module.exports = () => {
    return {
        metadata: {
            title: 'Easy react starter',
            baseUrl: '/'
        },
        entry: {
            'app': './src/app.js',
            'vendor': './src/vendor.js'
        },
        resolve: {
            root: path.resolve('./src'),
            modulesDirectories: ['node_modules'],
            extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style', 'css!postcss')
                },
                {
                    test: /\.scss/,
                    loader: ExtractTextPlugin.extract('style', 'css!postcss!resolve-url!sass?sourceMap')
                },
                { test: /\.gif$/, loader: 'url?limit=10000&mimetype=image/gif' },
                { test: /\.jpg$/, loader: 'url?limit=10000&mimetype=image/jpg' },
                { test: /\.png$/, loader: 'url?limit=10000&mimetype=image/png' },
                { test: /\.svg/, loader: 'url?limit=26000&mimetype=image/svg+xml' },
                { test: /\.json$/, loader: 'json' },
                {
                    test: /\.(woff|woff2|ttf|eot|svg)$/,
                    loader: 'url?limit=1&name=fonts/[name].[ext]?[hash]'
                }
            ]
        },
        postcss: [
            require('autoprefixer')({
                browsers: [
                    'last 2 versions',
                    'ie >= 10'
                ]
            })
        ],
        plugins: [
            new ExtractTextPlugin('[name].[contenthash:20].css', {
                allChunks: true,
                disable: ENV === 'development'
            }),
            new CopyWebpackPlugin([{
                from: path.resolve('src/assets'),
                to: 'assets'
            }]),
            new HtmlWebpackPlugin({
                template: path.resolve('./src/index.html'),
                chunksSortMode: 'dependency'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.NoErrorsPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    };
};