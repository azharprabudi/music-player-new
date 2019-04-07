const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const config = require("./utils/config");
const location = require("./utils/location");

module.exports = {
  mode: config.DEVELOPMENT,
  name: "music-player",
  entry: [
    "@babel/polyfill",
    path.resolve(location.ROOT_PATH, "./src/index.js")
  ],
  output: {
    path: path.resolve(location.ROOT_PATH, "dist"),
    publicPath: location.PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "stylus-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "images",
              publicPath: location.PUBLIC_PATH
            }
          }
        ]
      }
    ]
  },
  devtool: "eval",
  devServer: {
    hot: true,
    inline: true,
    host: "localhost",
    port: config.DEV_PORT
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
      cwd: location.CURRENT_PATH_TERMINAL
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      MUSIC_PLAYER_NODE_ENV: config.DEVELOPMENT,
      MUSIC_PLAYER_NODE_PORT: config.DEV_PORT
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(location.ROOT_PATH, "src/index.html")
    })
  ]
};
