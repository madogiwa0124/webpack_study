# Webpack Study Template

Webpack勉強用のリポジトリ

今のところできること

* digest付きのcss、jsのビルド
  - 指定したディレクトリ(`/src/javascripts/entries`)配下のjs,tsファイルを自動的にエントリーとする
    例) /entries/foo.ts => { foo: "/entries/foo.ts" }
* scssのcssへのビルド
* babelを通したjsのビルド
* htmlのビルド
  - エントリーファイルと自動的に結びつくように
    例) pages/home.htmlだったらentries/home.jsが読み込まれる
* typescriptのビルド
* webpack-dev-serverでのビルド
* vueのビルド
* eslint(`eslint-plugin-vue`, `@typescript-eslint/eslint-plugin`)による静的解析
* pritterによるコードフォーマット
* jsonのビルド

# コマンド

* `npm run build` : webpackの本番用ビルド
* `npm run buld:dev` : webpackの開発用のビルド
* `npm run buld:dev-watch` : webpackにwatchオプションを付けて開発用のビルド

# 構成

```
src
 ├ javascripts
 │ ├ entries    // webpackのエントリーファイル
 │ ├ components // コンポーネント格納用
 │ └ types      // typescriptの型定義ファイル格納用
 ├ styles        // stylesheet格納用(scss)
 └ pages         // htmlのtamplate格納用
```
