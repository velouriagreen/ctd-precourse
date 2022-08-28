const path = require('path');
const SRC_DIR = path.resolve(__dirname, 'client/src');
const DIST_DIR = path.resolve(__dirname, 'client/dist');


module.exports = {
  mode: 'development',

  entry: `${SRC_DIR}/index.tsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },

  watch: true,
  module: {
    rules: [
      {
        test: /\.(jsx|js|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          // }
        },

      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
  }
};