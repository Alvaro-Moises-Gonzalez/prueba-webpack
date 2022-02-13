const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const DotEnv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: "assets/images/¨[hash][ext][query]",
  },
  mode:'development',//configuracion para modo desarrollo.
  watch: true,//compila de manera automatica los cambios realizados
  resolve: {
    extensions: ['.js'],
    alias:{
      '@utils': path.resolve(__dirname,'src/utils/'),//alias.
      '@templates': path.resolve(__dirname,'src/templates'),
      '@styles': path.resolve(__dirname,'src/styles/'),
      '@images': path.resolve(__dirname,'src/assets/images/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test:/\.css|.styl$/i,
        use:[MiniCssExtractPlugin.loader, 
          'css-loader',
          'stylus-loader'
        ],
      },
      {
        test: /\.png/,
        type:'asset/resource'
      },
      {
        test:/\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options:{
            limit: 10000,
            mimetype: "application/font-woff",
            name: "[name].[ext]",//respeta nombre y extension.
            outputPath: "./assets/fonts/",
            publicPath: "../assets/fonts/",
            isModule: false,
          }
        }
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          inject: true,
          template: './public/index.html',
          filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/[name].[contenthash].css'
      }),
      new CopyPlugin({
        patterns:[
          {
            from: path.resolve(__dirname, "src", "assets/images"),
            to: "assets/images"
          }
        ]
      }),
      new DotEnv(),
  ]
  
}