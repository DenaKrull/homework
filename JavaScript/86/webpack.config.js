const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.js',

    plugins: [
        new webpack.ProgressPlugin((percentage, message, ...args) => {
            console.log('percentage', percentage, 'message', message, 'args', args);
        }),
        new HtmlWebpackPlugin({
            title: "PCS Webpack Demo",
            template: "./src/index.html",
        }),
        new webpack.BannerPlugin({
            banner: 'This is your banner'

        }),
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
        }),

    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
            },
        ],
    },
};