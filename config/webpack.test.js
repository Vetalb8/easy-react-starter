const path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    resolve: {
        root: path.resolve('src'),
        modules: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/node_modules/, path.resolve('./dist')]
            },
            { test: /\.(css|scss|jpe?g|gif|png|svg|woff|woff2|ttf|eot)$/, loader: 'null' },
            { test: /\.json$/, loader: 'json' }
        ],
        postLoaders: [{
            // delays coverage til after tests are run, fixing transpiled source coverage error
            test: /\.js$/,
            exclude: [/node_modules/, /spec.js$/, /test-bundler.js/],
            loader: 'istanbul-instrumenter'
        }]
    },
    // required for enzyme to work properly
    externals: {
        jsdom: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
    }
};
