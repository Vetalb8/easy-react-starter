const path = require('path');

function getWebpackConfig(env) {
    let config;
    switch (env) {
        case 'production':
        case 'prod':
            config = require(path.resolve('./config/webpack.prod'))({env: 'production'});
            break;
        case 'test':
            config = require(path.resolve('./config/webpack.test'))({env: 'test'});
            break;
        case 'development':
        case 'dev':
        default:
            config = require(path.resolve('./config/webpack.dev'))({env: 'development'});
            break;
    }
    return config;
}

module.exports = getWebpackConfig(process.env.NODE_ENV);
