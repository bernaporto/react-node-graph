const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  devServer: {
    hot: true,
    historyApiFallback: true,
  }, 

  entry: [
    './src/index.tsx',
  ],

  output: {
    path: resolve('./dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
          tsconfigRaw: require('./tsconfig.json'),
        }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin(),
  ],
};