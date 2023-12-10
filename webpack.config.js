const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const Dotenv = require('dotenv-webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { DefinePlugin } = require('webpack')

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
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: isProduction ? 'disabled' : 'server',
      openAnalyzer: false,
      analyzerPort: 8088,
    }),
    new Dotenv(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      favicon: path.resolve(__dirname, './src/assets/frog-icon.png'),
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
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
      },
      {
        test: /\.vue\.(s?[ac]ss)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /(?<!\.vue)\.(s?[ac]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.vue', '.tsx', '.ts', '.jsx', '.js', '...'],
    alias: {
      'vue': '@vue/runtime-dom'
    }
  },
};

module.exports = () => {
  config.mode = 'development';

  if (isProduction) {
    config.mode = 'production';
  }

  return config;
};
