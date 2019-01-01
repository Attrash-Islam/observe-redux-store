var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	devtool: 'none',
	resolve: {
    	extensions: ['.webpack.js', '.web.js', '.js']
  	},
	module : {
	    rules : [
			{ 
				test: /\.js$/, 
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				exclude: [
					/node_modules/,
					/dist/
				] 
			}
	    ]
	},
	plugins: [
		new UglifyJSPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
}
