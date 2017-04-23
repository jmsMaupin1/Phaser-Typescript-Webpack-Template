var path = require('path')
var glob = require('glob')
module.exports = {
	entry: glob.sync('./src/*.ts'),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, './build')
	},
	module: {
		rules: [
			{
				test: /\.ts$/, 
				loader: 'ts-loader', 
				exclude: '/node_modules/'
			},
			{
		        test: /\.(png|gif|jpe?g)$/,
		        loader: 'file-loader?name=/assets/[name].[ext]'
   			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
}