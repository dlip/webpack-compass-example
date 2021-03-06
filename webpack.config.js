var path = require('path');

var imagePath = path.resolve(__dirname, './images'),
    spriteOutput = imagePath;

console.log(imagePath);
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.scss$/,
              // Query parameters are passed to node-sass
              loader: "style!css!compass?outputStyle=expanded&" +
                "includePaths[]=" +
                  (path.resolve(__dirname, "./bower_components")) + "&" +
                "includePaths[]=" +
                  (path.resolve(__dirname, "./node_modules")) + "&" +
                  "imagePath=" + imagePath + "&" +
                  "spriteOutput=" + __dirname
            },
            { test: /\.png$/, loader: "url-loader?name=images/[hash].png&limit=10mimetype=image/png" }
        ]
    }
};