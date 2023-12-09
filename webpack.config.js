const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const Dotenv = require('dotenv-webpack');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry:  path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: isProduction ? false : 'source-map',
  devServer: {
    hot: true,
  },
  plugins: [
    new Dotenv(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
  },
};

module.exports = () => {
  config.mode = 'development';

  if (isProduction) {
    config.mode = 'production';
  }

  return config;
};
