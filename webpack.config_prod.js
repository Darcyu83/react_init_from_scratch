const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (envVars) => {
  const config = merge(common, {
    mode: "production",
    devtool: "hidden-source-map",
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/",
      clean: true,
    },
    module: {
      rules: [
        // {
        //   test: /\.(c)ss$/i,
        //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
        // },
        // style-loader, css-loader 구성
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i, // 모듈 파일 제외 설정
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        // CSS Module ([filename].module.css)
        {
          test: /\.module\.css$/i,
          use: [
            // 'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new Dotenv({ path: `./.env.${envVars.env}`, systemvars: true }),
      new MiniCssExtractPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "../public/assets"),
            to: path.resolve(__dirname, "../dist/assets"),
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    optimization: {
      usedExports: true,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: "all",
      },
    },
  });
  return config;
};
