import * as webpack from "webpack"
import * as path from "path"

export default <webpack.Configuration>{
    entry: ["./src/index.tsx"],

    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, "src"),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: ["> 1%"]
                                    }
                                ]
                            ],
                            cacheDirectory: true
                        }
                    },
                    "ts-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    devtool: process.env.NODE_ENV === "production" ? "nosources-source-map" : "eval-source-map",

    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, "public/"),
        watchOptions: {
            ignored: /node_modules|public/
        }
    }
}
