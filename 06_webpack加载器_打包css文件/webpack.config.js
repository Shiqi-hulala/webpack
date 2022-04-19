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
  module: { //加载器
    rules: [ //规则
      {     //一个具体的对象
        test: /\.css$/, //正则 匹配.css 结尾的文件
        use: ['style-loader', 'css-loader'] //让webpack使用
        // 这两个 loader处理css文件
        // 从右到左使用装备，不能颠倒顺序
        // css-loader ：webpack解析css代码 把css代码一起打包进js中
        // style-loader ： css代码插入到DOM上 （style标签） 
      }
    ]
  },
};