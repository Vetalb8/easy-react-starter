global.Promise = require('bluebird');

const path = require('path');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        metadata: {
            title: 'Easy react starter',
            baseUrl: '/'
        },
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
                { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
                { test: /\.json$/, loader: 'json' }
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
        ]
    };
};