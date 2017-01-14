const autoprefixer = require('autoprefixer');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: {
        main: './app/main',
    },
    output: {
        path: './dist',
        filename: '[name].js',
        chunkFilename: '[id].js',
        //publicPath: '/dist/'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader'],
        }, {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader'],
        }],
    },
    postcss() {
        return [autoprefixer({ browsers: [] })];
    },
    plugins: [
        new WebpackNotifierPlugin({ alwaysNotify: true }),
    ],
};
