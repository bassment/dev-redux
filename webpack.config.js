'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT = path.resolve(__dirname, 'client');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'client/main.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'client/index.tpl.html', inject: 'body', filename: 'index.html'}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})
    ],
    resolve: {
        alias: {
            components: path.resolve(ROOT, 'components'),
            containers: path.resolve(ROOT, 'containers'),
            styles: path.resolve(ROOT, 'scss'),
            actions: path.resolve(ROOT, 'actions'),
            staticData: path.resolve(ROOT, 'staticData'),
            helpers: path.resolve(ROOT, 'helpers')
        },
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.json?$/,
                loader: 'json'
            }, {
                test: /\.scss$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'sass?sourceMap'
                ]
            }
        ]
    }
};
