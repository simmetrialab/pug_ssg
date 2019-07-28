const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const templatesConfig = require('./webpack.template');
// const HtmlWebpackInjector = require('html-webpack-injector');
module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.bundle.js',
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            assets: path.resolve(__dirname, '../src/assets/'),
            js: path.resolve(__dirname, '../src/js/'),
            pages: path.resolve(__dirname, '../src/pages/'),
            scss: path.resolve(__dirname, '../src/scss/'),
            templates: path.resolve(__dirname, '../src/templates/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                        ],
                    },
                },
            },
            {
                test: /\.pug/,
                use: [
                    {
                        loader: 'pug-loader',
                    },
                ],
            },
        ],
    },
    plugins: templatesConfig.plugins,
};
