const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  name: "custom-webpack-config",
  mode: "development", // production, development
  devtool: "eval",
  entry: {
    app: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // 템플릿 설정
      minify: true, // 압축 설정
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
};
