const path = require('path');

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
    }
};
