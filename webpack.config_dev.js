const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const Dotenv = require("dotenv-webpack");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (envVars) => {
  const config = merge(common, {
    mode: "development",
    // devtool: 'eval',
    devtool: "source-map",
    devServer: {
      open: false,
      port: 3013,
      historyApiFallback: true,
    },
    output: {
      filename: "[name].[contenthash].js",
      publicPath: "/",
    },
    module: {
      rules: [
        // style-loader, css-loader 구성
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i, // 모듈 파일 제외 설정
          use: ["style-loader", "css-loader"],
        },
        // CSS Module ([filename].module.css)
        {
          test: /\.module\.css$/i,
          use: [
            "style-loader",
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
      // new BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: true })
      new ReactRefreshWebpackPlugin(),
      new Dotenv({ path: `./.env.${envVars.env}`, systemvars: true }),
    ],
  });
  return config;
};
