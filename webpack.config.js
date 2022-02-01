const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new webpack.EnvironmentPlugin({
      // NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      EVENT_API_KEY: process.env.REACT_APP_EVENT_API_KEY,
    })
  ],
};

// new webpack.DefinePlugin({
//   'EVENT_API_KEY': JSON.stringify(process.env.REACT_APP_EVENT_API_KEY),
// }),