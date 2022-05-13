const path = require("path")
const webpack = require("webpack")
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "server",
    // mode: "development",        // not set here to allow for dev/prod servers
    entry: [
        path.join(CURRENT_WORKING_DIR, "./server/server.js")    // start bundling here
    ],
    target: "node",
    output: {
        path: path.join(CURRENT_WORKING_DIR, "/dist"),      // sets bundle path
        filename: "server.generated.js",
        libraryTarget: "commonjs2",
        publicPath: "/dist/"                                // base path for assets
    },
    externals: [
        nodeExternals()
    ],
    module: {
        rules: [                    // regex for extensions of files to transpile
            {
                test: /\.js$/,
                exclude: /node_modules/,        // and for things not to transpile
                use: [
                    "babel-loader"              // using this/these transpiler(s)
                ]
            }
        ]
    }
}

module.exports = config
