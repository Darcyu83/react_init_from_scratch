const path = require("path");
// const svgToMiniDataURI = require("mini-svg-data-uri");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: "development",
  mode: process.env.NODE_ENV,
  devtool: "eval-cheap-source-map",

  // 개발서버 핫 리로딩
  devServer: {
    static: "./dist",
    hot: true,
  },

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
  performance: {
    // hints: "error",
    // maxAssetSize: 51 * 1024,
    // maxEntrypointSize: 250 * 1024,
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
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
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        // generator: {
        //   publicPath: "http://localhost:3000/assets/",
        //   outputPath: "assets/",
        // },
      },

      // {
      //   test: /\.svg/,
      //   type: "asset/inline",
      // generator: {
      //   dataUrl: (content) => {
      //     content = content.toString();
      //     return svgToMiniDataURI(content);
      //   },
      // },
      // },

      // {
      //   test: /\.svg$/i,
      //   type: "asset",
      //   resourceQuery: /url/, // *.svg?url
      // },

      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        // resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ["@svgr/webpack"],
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
