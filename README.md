# Webpack Study Template

Webpack勉強用のリポジトリ

今のところできること

* digest付きのcss、jsのビルド
* scssのcssへのビルド
* babelを通したjsのビルド
* htmlのビルド
* typescriptのビルド
* webpack-dev-serverでのビルド

# コマンド

* `npm run build` : webpackのビルド
* `npm run build-watch` : webpackにwatchオプションを付けてビルド
* `npm run build-dev-server` : webpack-dev-serverの起動

# 構成

```
src
 ├ javascripts
 │ ├ entries    // webpackのエントリーファイル
 │ └ components // コンポーネント格納用
 ├ styles        // stylesheet格納用(scss)
 └ pages         // htmlのtamplate格納用
```
