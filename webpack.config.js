const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		bundle: './src/index.js',
		vendor: [
			"react",
			"react-dom",
			"react-redux",
			"react-router",
			"react-router-dom",
			"redux",
			"redux-thunk",
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[hash].js'
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
			filename: 'vendor.js',
			minChunks: Infinity
		}),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
};