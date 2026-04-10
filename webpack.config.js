const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app/index.tsx",
  output: {
    filename: "bundle.[contenthash].js",
    chunkFilename: "chunks/[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  devServer: {
    static: "./dist",
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              typescript: true,
              icon: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
      {
        test: /^((?!\.module).)*\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.module\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                namedExport: false,
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".js",
      ".css",
      ".png",
      ".svg",
      ".jpg",
      ".jpeg",
      ".gif",
      ".webp",
    ],
    alias: {
      "@shared": path.resolve(__dirname, "src/shared"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@app": path.resolve(__dirname, "src/app"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@slices": path.resolve(__dirname, "src/slices"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devtool: false,
};
