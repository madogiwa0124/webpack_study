const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // ビルド時のモード
  // development: ビルド時間が短くソースマップに対応しているが容量の圧縮がかからない。
  // production: 本番用build、コメント削除等の圧縮がかかり容量が少ない(デフォルト)
  mode: "development",
  // jsのエントリーポイント
  // デフォルトはsrc/index.js
  entry: './src/index.js',
  // 出力設定
  // デフォルトはdist/main.js
  output: {
    // 出力先のディレクトリ
    path: `${__dirname}/dist`,
    // 出力先のファイル
    filename: 'main-[hash].js'
  },
  // webpack-dev-server用の設定
  devServer: {
    // webpackのoutput pathを指定
    contentBase: `${__dirname}/dist`,
    // 実行時にブラウザを開く
    open: true
  },
  plugins: [
    // distのHTMLを自動生成するplugin、digest等をよしなに対応してくれる
    new HtmlWebpackPlugin()
  ]
}
