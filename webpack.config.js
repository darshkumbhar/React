const path = require('path');
module.exports = {
	mode: 'development',

	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'output.js',
	},
	//loader
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
	},
	//loader
};
