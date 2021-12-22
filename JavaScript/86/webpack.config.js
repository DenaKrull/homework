const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.js',

    plugins: [
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
        new webpack.ProgressPlugin({
            activeModules: false,
            entries: true,
            handler(percentage, message, ...args) {
                // custom logic
            },
            modules: true,
            modulesCount: 5000,
            profile: false,
            dependencies: true,
            dependenciesCount: 10000,
            percentBy: null,
        })
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