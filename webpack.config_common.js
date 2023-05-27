const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  module: {
    rules: [
      {
        test: [/\.js$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/],
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource",
      },

      // {
      //   test: /\.json$/i,
      //   type: 'asset/resource',
      // }, 추가하면 lottie 구동 안됨.

      // {
      //   test: /\.svg$/,
      //   type: 'asset/inline',
      // },

      // svg 파일 inline 설정 : import 해서 컴포넌트 형태로 사용
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        // resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ["@svgr/webpack"],
      },

      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                modules: false,
                useBuiltIns: "usage",
                corejs: 3,
              },
            ],
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      // eslint: {
      //   files: "./src/**/*",
      // },
    }),
  ],
  resolve: {
    alias: {
      //TODO import시 간단하게 표시될 경로를 명시.
      // '@': path.resolve(__dirname, '../src'),
      "@components": path.resolve(__dirname, "/src/components/"),
      "@hooks": path.resolve(__dirname, "/src/hooks/"),
      "@layout": path.resolve(__dirname, "/src/layout/"),
      "@pages": path.resolve(__dirname, "/src/pages/"),
      "@routes": path.resolve(__dirname, "/src/routes/"),
      "@styles": path.resolve(__dirname, "/src/styles/"),
      "@utils": path.resolve(__dirname, "/src/utils/"),
      "@slices": path.resolve(__dirname, "/src/slices/"),
      "@sagas": path.resolve(__dirname, "/src/sagas/"),
      "@store": path.resolve(__dirname, "/src/store/"),
      "@api": path.resolve(__dirname, "/src/api"),
    },

    extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
  },
};
