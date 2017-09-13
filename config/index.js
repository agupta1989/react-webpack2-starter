const env = process.env.NODE_ENV;

const common = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'lodash']
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
  }
};


const factory = () => {
  let _envConfiguration = null;
  switch (env) {
    case 'development':
      _envConfiguration = require('./dev');
      break;
    case 'production':
      _envConfiguration = require('./prod');
      break;
    default:
      _envConfiguration = require('./dev');
  }

  common.output = _envConfiguration.output;
  return common;
};

module.exports = factory();
