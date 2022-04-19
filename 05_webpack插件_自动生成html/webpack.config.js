const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({  // 插件
    template: './public/index.html' //告诉webpack使用
    // 插件时候，用我们自己的html文件作为模板去生成一个dist/html 文件
  })],
};