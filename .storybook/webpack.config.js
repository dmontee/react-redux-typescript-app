"use strict";

module.exports = {
    module: {
        rules: [
            {
                test: /.(j|t)sx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
};
