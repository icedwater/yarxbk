const path = require("path")
const webpack = require("webpack")
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    mode: "production", 
    entry: [
        path.join(CURRENT_WORKING_DIR, "client/main.js")    // start bundling here
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, "/dist"),      // sets bundle path
        filename: "bundle.js",
        publicPath: "/dist/"                                // base path for assets
    },
    module: {
        rules: [                    // regex for extensions of files to transpile
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,        // and for things not to transpile
                use: [
                    "babel-loader"              // using this/these transpiler(s)
                ]
            }
        ]
    }
}

module.exports = config
