const path = require('path');

module.exports = {
  entry: './client/index.js', // path to the file we want;
  output: {
    path: (path.join(__dirname, 'build')),
    filename: 'bundle.js',
  },
  mode: 'development',

  module: {
    rules: [
      { 
        test:/\.jsx?/,  
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']

        }
    ]
  },

  devServer: {
    publicPath: '/build/',
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
    }
  }
};