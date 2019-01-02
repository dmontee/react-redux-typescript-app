"use strict"
const defaultConfig = require("./webpack.config");
const merge = require("webpack-merge");

const devConfig = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    }
}

module.exports = merge(defaultConfig, devConfig);
