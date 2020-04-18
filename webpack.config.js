const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // ビルド時のモード
  // development: ビルド時間が短くソースマップに対応しているが容量の圧縮がかからない。
  // production: 本番用build、コメント削除等の圧縮がかかり容量が少ない(デフォルト)
  mode: "development",
  // jsのエントリーポイント
  // デフォルトはsrc/index.js
  entry: {
    main: './src/index.js',
    home: './src/home.js'
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
      // stylesheetのbuild用の設定
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    // distのHTMLを自動生成するplugin、digest等をよしなに対応してくれる
    new HtmlWebpackPlugin(),
    // 個別のbuild後のjsを読み込むHTMLを生成
    new HtmlWebpackPlugin({
      filename: 'main.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'home.html',
      chunks: ['home']
    })
  ]
}
