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
            root: path.join(__dirname, 'src'),
            modulesDirectories: ['node_modules'],
            extensions: ['', '.js', '.jsx']
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: [/node_modules/, `${__dirname}/dist`]
                },
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
        postcss: function () {
            return [
                require('postcss-import')({addDependencyTo: bundler}),
                require('autoprefixer')({
                    browsers: [
                        'last 2 versions',
                        'ie >= 10',
                        'edge',
                        'chrome',
                        'firefox',
                        'safari'
                    ]
                })
            ];
        },
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new HtmlWebpackPlugin({
                template: path.resolve('src/index.html'),
                chunksSortMode: 'dependency'
            }),
            new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
            new webpack.optimize.OccurrenceOrderPlugin(),
        ]
    };
};