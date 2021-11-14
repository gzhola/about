const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack中所有的配置信息
module.exports = {
  mode: 'development',
  // 入口文件
  entry: "./src/app.ts",

  // 指定打包文件目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    // 打包后的文件名称
    filename: 'app.js'
  },
   resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
  },
  // 指定打包所需的模块
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            // 设置babel
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    // 要兼容的浏览器
                    targets: {
                      "chrome": "88"
                    },
                    "corejs": "3",
                    // 使用corejs的方式，usage表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          {
            loader: 'ts-loader',
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // 构建前先清空输出目录
    new CleanWebpackPlugin(),
    // 使用HtmlWebPackPlugin
    new HtmlWebpackPlugin({
      // 指定模板文件
      template: './public/index.html'
    }),
  ],
}