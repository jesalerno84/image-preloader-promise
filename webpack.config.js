var path = require('path');

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		main: [
			'./src/image-preloader.js'
		]
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'lib')
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				include: path.join(__dirname, 'src'),
				loader: "babel-loader"
			}
		]
	}
};