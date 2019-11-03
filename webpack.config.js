var path = require('path')

module.exports = {
	mode: 'production',
	entry: './assets/js/document-setting-panels.js',
	output: {
		filename: 'document-setting-panels.build.js',
		path: path.resolve(__dirname, 'assets/js')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			}
		]
	}
};