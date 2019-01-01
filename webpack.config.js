"use strict"

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssOptions = require('./postcss.config');

module.exports = {
	entry: {
		bundle: "./src/index.js",
		vendor: [
			"@babel/polyfill",
		]
	},
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "/",
		filename: '[name].[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [{
					loader: "html-loader",
					options: {}
				}]
			},
			{
				test: /.(j|t)sx?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader",
					{
							loader: "postcss-loader",
						 options: postcssOptions
					}
			 	]
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin()
	]
};