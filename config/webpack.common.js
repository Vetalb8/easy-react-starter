global.Promise = require('bluebird');

const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (options) {
    return {
        entry: {
            'app': './src/main.js',
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
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
                },
                {
                    test: /\.scss/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
                },
                { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
                { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
                { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
                { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
                { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' }
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
            new ExtractTextPlugin('styles.css'),
            new HtmlWebpackPlugin({
                template: path.resolve('./src/index.html'),
                chunksSortMode: 'dependency'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
        ],
        devServer: {
            port: 3001,
            host: '0.0.0.0',
            historyApiFallback: false,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            outputPath: path.resolve('./dist')
        }
    };
};