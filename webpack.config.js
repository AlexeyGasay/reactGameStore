const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
    },

    devServer: {
        port: 5000
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new CleanWebpackPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                      loader: "sass-loader",
                      options: {
                        // Prefer `dart-sass`
                        implementation: require.resolve("sass"),
                      },
                    },
                  ],
            },

            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ["file-loader"]
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", '@babel/preset-env']
                    }
                }
            },

            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", '@babel/preset-env']
                    }
                }
            }
        ]
    }


}