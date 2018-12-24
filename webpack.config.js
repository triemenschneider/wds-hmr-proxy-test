const webpack = require('webpack');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    open: true,
    hot: true,
    publicPath: '/',
    disableHostCheck: true,
    proxy: {
      '/': {
        target: 'http://mamp-server:8888/',
        secure: false,
        changeOrigin: true,
        autoRewrite: true,
        headers: {
          'X-ProxiedBy-Webpack': true
        }
      }
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
