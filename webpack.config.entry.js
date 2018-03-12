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
    }
};
