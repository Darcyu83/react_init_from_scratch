const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
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

  // add the bundled js file to the HTML file
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],

  // Babel
  // is a transpiler so we need to tell it what to transpile.

  // configure webpack to use babel
  // tell webpack to use babel-loader to transpile(compile) files
  // that end with .js
  //
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",

          // transpiling by useing preset
          // which is predefined configuration
          // that is used to transpile different type to javascript
          // to browsers understandable one.

          options: {
            // preset-env for transpiling ES2015+ syntax
            // prset-react for transpiling react code
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
  mode: "development",
};
