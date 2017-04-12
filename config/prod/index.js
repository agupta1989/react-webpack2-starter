import {resolve} from 'path';

const config = {
  output: {
    filename: '[name].[chunkhash].js',
    path: resolve(__dirname, 'build')
  }
};

export default config;
