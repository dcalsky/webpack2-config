var base = require('../webpack.config.js');
var path = require('path');
var webpack = require('webpack');
var ProgressPlugin = require('webpack/lib/ProgressPlugin');
var CleanPlugin = require('clean-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

base.plugins.unshift(
    new CleanPlugin(path.resolve(__dirname, "../dist"), {
        verbose: true
    }),
    new ProgressPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        },
        output: {
            comments: false
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.[hash].js',
        minSize: Infinity
    })
)

module.exports = base