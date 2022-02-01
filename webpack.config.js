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
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'REACT_APP_EVENT_API_KEY': JSON.stringify(process.env.REACT_APP_EVENT_API_KEY),
      'REACT_APP_FLIGHT_API_CLIENT_SECRET': JSON.stringify(process.env.REACT_APP_FLIGHT_API_CLIENT_SECRET),
      'REACT_APP_FLIGHT_API_CLIENT_ID': JSON.stringify(process.env.REACT_APP_FLIGHT_API_CLIENT_ID),
      'REACT_APP_HOTEL_API_KEY': JSON.stringify(process.env.REACT_APP_HOTEL_API_KEY),
      'REACT_APP_HOTEL_HOST': JSON.stringify(process.env.REACT_APP_HOTEL_HOST),
    })
  ],
};

// new webpack.DefinePlugin({
//   'EVENT_API_KEY': JSON.stringify(process.env.REACT_APP_EVENT_API_KEY),
// }),