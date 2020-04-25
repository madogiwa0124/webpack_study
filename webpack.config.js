const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const JAVASCRIPT_ENTRY_PATH = './src/javascripts/entries/'
const HTML_TEMPLATE_PATH = './src/pages/'

module.exports = {
  // ビルド時のモード
  // development: ビルド時間が短くソースマップに対応しているが容量の圧縮がかからない。
  // production: 本番用build、コメント削除等の圧縮がかかり容量が少ない(デフォルト)
  mode: "development",
  // jsのエントリーポイント
  // デフォルトはsrc/index.js
  entry: {
    main: `${JAVASCRIPT_ENTRY_PATH}index.js`,
    home: `${JAVASCRIPT_ENTRY_PATH}home.js`
  },
  // 出力設定
  // デフォルトはdist/main.js
  output: {
    // 出力先のディレクトリ
    path: `${__dirname}/dist`,
    // 出力先のファイル
    filename: '[name]-[hash].js'
  },
  // webpack-dev-server用の設定
  devServer: {
    // webpackのoutput pathを指定
    contentBase: `${__dirname}/dist`,
    // 実行時にブラウザを開く
    open: true
  },
  module: {
    rules: [
      {
        test: /\.html/,
        use: ["html-loader"]
      },
      // stylesheetのbuild用の設定
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              // NOTE: `ReferenceError regeneratorRuntime is not defined`が発生していたので解消
              // https://github.com/babel/babel/issues/9849#issuecomment-612595221
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    // distのHTMLを自動生成するplugin、digest等をよしなに対応してくれる
    new HtmlWebpackPlugin(),
    // 個別のbuild後のjsを読み込むHTMLを生成
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: `${HTML_TEMPLATE_PATH}main.html`,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'home.html',
      template: `${HTML_TEMPLATE_PATH}home.html`,
      chunks: ['home']
    }),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css'
    }),
    new CleanWebpackPlugin(),
  ]
}
