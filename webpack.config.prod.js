const merge = require("webpack-merge");
const webpackConfig = require("./webpack.config");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = merge(webpackConfig, {
  mode: "production",

  output: {
    path: path.join(__dirname, "/dist_prod"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [

    new CopyWebpackPlugin([
      { from: "src/assets", to: "assets" },
      { from: "public/prod/index.html", to: "index.html" },
    ])
  ]
});
