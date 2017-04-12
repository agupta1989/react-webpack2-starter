const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('node environment is: ', process.env.NODE_ENV);

function isExternal(module) {
  var context = module.context;

  if (typeof context !== 'string') {
    return false;
  }

  return context.indexOf('bower_components') >= 0 ||
         context.indexOf('node_modules') >= 0 ||
         context.indexOf('libraries') >= 0;
}

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'lodash']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          failOnError: true,
          failOnWarning: true
        },
        test: /(.js|.jsx)/,
        loader: 'eslint-loader'
      },
      {
        exclude: /node_modules/,
        test: /(.js|.jsx)/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
