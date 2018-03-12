const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        coreA: './src/bundles/core-a.js',
        coreB: './src/bundles/core-b.js',
        a: './src/bundles/a.js',
        b: './src/bundles/b.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        open: true,
        port: 3001
    }
};
