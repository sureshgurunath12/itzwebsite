const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  experiments: {
    topLevelAwait: true
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
    fallback: { 
      buffer: false,
      util: require.resolve("util/"),
      path: false,
      fs:false
    },
    
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-top-level-await'],
          }
        }
      },
      
      {
        test: /\.(svg|png|jpg|gif?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader', options: {name: './assets/images/[name].[ext]'}
        }]
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    
  ]
  
};