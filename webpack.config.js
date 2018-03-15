const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssOptions = require('./postcss.config');

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
		loaders: [
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader',
					options: {}
				}
			},
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
				    fallback: 'style-loader',
				    use: [
				           'css-loader',
				           {
				           		loader: 'postcss-loader',
				                options: postcssOptions
				           }
				    ]
				})
			}
		]
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
		}),
		new ExtractTextPlugin({
            filename: '[name].[hash].css'
        })
	]
};