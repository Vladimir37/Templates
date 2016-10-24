var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/..',

	entry: './src/temp/index.js',

	output: {
		path: path.join(__dirname, 'files/builds'),
        filename: "scripts.js"
	},

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ],
};