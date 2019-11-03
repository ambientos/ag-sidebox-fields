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
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};