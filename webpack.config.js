const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: "development",
  mode: process.env.NODE_ENV,
  devtool: "eval",
  // Webpack :
  // is a tool which can take all the files we have written
  // and combine / bundle them into a single.js file

  // tell webpack where to start bundling js files
  entry: path.join(__dirname, "src", "index.js"),

  // tell webpack to create the final bundled file in dist folder in root
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  // Babel
  // is a transpiler so we need to tell it what to transpile.

  // configure webpack to use babel
  // tell webpack to use babel-loader to transpile(compile) files
  // that end with .js
  //
  module: {
    rules: [
      {
        // test: /\.?js$/,
        test: /\.(js|jsx|ts|tsx)/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",

          // transpiling by using preset
          // which is predefined configuration
          // that is used to transpile different type to javascript
          // to browsers understandable one.

          options: {
            // preset-env for transpiling ES2015+ syntax
            // prset-react for transpiling react code
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              ["@babel/preset-typescript", { allowNamespaces: true }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // add the bundled js file to the HTML file
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      minify: true,
    }),
  ],

  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
};
