var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'ngShare.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                compact: false,
                presets: ['es2015']
            }
        }]
    }
};
