const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/snake.js',
    plugins:

        [new HtmlWebpackPlugin({
            title: "PCS Webpack Demo",
            template: "./src/snake.html",
        }),
        new ESLintPlugin()
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [{
                test: /\.html$/i,
                loader: "html-loader",
            }, {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|wav|mp3)$/i,
                type: 'asset/resource',
            },
        ],
    }
};