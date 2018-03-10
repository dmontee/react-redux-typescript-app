const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		bundle: './src/index.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	module: {
		loaders: [{
			test: /\.(html)$/,
			use: {
				loader: 'html-loader',
				options: {}
			}
		}, {
			test: /.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
		}),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
};