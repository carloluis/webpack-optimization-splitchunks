const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, 'dist');

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
        path: DIST_PATH
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                default: {
                    enforce: true,
                    priority: 1
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: 2,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        })
    ],
    devServer: {
        contentBase: DIST_PATH,
        compress: true,
        open: true,
        port: 3000
    }
};
