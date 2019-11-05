const merge = require("webpack-merge");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = merge(webpackConfig, {
  mode: "development",
  devtool: "sourcemaps",

  output: {
    path: path.join(__dirname, "/dist_dev"),
    publicPath: "/",
    filename: "bundle.js"
  },

  devServer: {
    contentBase: path.join(__dirname, "/dist_dev"),
    port: 9003,
    historyApiFallback: {
      index: '/'
    }
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: "src/assets", to: "assets" },
      { from: "public/dev/index.html", to: "index.html" },
    ])
  ]
});
