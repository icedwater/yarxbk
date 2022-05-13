const path = require("path")
const webpack = require("webpack")
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development",        // sets process.env.NODE_ENV to production by default
    devtool: "eval-source-map", // maps compressed code to source to aid debugging
    entry: [
        "react-hot-loader/patch",
        "webpack-hot-middleware/client?reload=true",
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
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),   // for react-hot-loader?
        new webpack.NoEmitOnErrorsPlugin()          // skip emitting on compile errors?
    ]
}

module.exports = config
