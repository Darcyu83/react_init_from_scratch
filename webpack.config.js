const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // tell webpack where to start bundling js files
  entry: path.join(__dirname, "src", "index.js"),

  // tell webpack to create the final bundled file in dist folder in root
  output: { path: path.resolve(__dirname, "dist") },

  // add the bundled js file to the HTML file
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
