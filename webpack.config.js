module.exports = {
  // jsのエントリーポイント
  // デフォルトはsrc/index.js
  entry: './src/index.js',
  // 出力設定
  // デフォルトはdist/main.js
  output: {
    // 出力先のディレクトリ
    path: `${__dirname}/dist`,
    // 出力先のファイル
    filename: 'main.js'
  }
}
