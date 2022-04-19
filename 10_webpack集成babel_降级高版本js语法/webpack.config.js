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
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {  // 图片文件的配置 （仅适用于webpack 5 版本）
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset', // 匹配到上面的文件后 webpack会把他们当成
        // 静态资源处理打包
        // 如果你设置的是asset模式 以8kb大小区分图片文件
        // 小于8kb 把图片文件转base64  打包进js中
        // 大于8kb 直接把图片文件输出到dist下面
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',// 所有的字体图标 都输出道 dist下
        generator: { // 生成文件名字  -- 定义规则
          filename: 'fonts/[name].[hash:6][ext]'  //[ext]会替换为 .eot / .woff
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/, //不去匹配这些文件夹下的文件
        use: {
          loader: 'babel-loader', // 使用这个loader 处理js文件
          options: { // 加载器 选项
            presets: ['@babel/preset-env'] // 预设 ：@babel/preset-env 降级规则
            // 按照这里的规矩降级我们的js语法
          }
        }
      },
    ]
  }
};