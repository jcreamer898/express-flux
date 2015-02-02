/* jshint node:true */

var path = require("path");

module.exports = [{
    context: path.join(__dirname, "public", "javascripts"),
    entry: "app",
    output: {
        path: path.join(__dirname, "public", "javascripts"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html$/, loader: "html" },
            { test: /\.es6\.js$/, loader: "6to5-loader"},
            { test: /\.jsx$/, loader: "jsx-loader?harmony"},
            { test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ["", ".js", ".json", ".jsx", ".es6.js"],
        root: [
            path.join(__dirname, "public", "javascripts")
        ],
        modulesDirectories: ["node_modules"]
    }
}];