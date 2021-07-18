const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const getEntries = require("./config/webpack/utils/getEntries");
const buildHtmlWebpackPlugins = require("./config/webpack/utils/buildHtmlWebpackPlugins.js");

const JAVASCRIPT_ENTRY_PATH = "./src/javascripts/entries/";
const HTML_TEMPLATE_PATH = "./src/pages/";
const entries = getEntries(JAVASCRIPT_ENTRY_PATH);

module.exports = {
  // jsのエントリーポイント
  // デフォルトはsrc/index.js
  // ここではJAVASCRIPT_ENTRY_PATH配下のjs/tsをentryとするようにしている
  entry: entries,
  // 出力設定
  // デフォルトはdist/main.js
  output: {
    // 出力先のディレクトリ
    path: `${__dirname}/dist`,
    // 出力先のファイル
    filename: "[name]-[hash].js",
  },
  module: {
    rules: [
      // stylesheetのbuild用の設定
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|ts)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        loader: "ts-loader",
        options: {
          // /vueをtypescriptとして扱う
          appendTsSuffixTo: [/\.vue/],
          transpileOnly: true,
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: "vue-style-loader!css-loader!sass-loader",
          },
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
      "@js": `${__dirname}/src/javascripts`,
      "@css": `${__dirname}/src/styles`,
    },
    extensions: [".ts", ".js"],
  },
  plugins: [
    // 個別のbuild後のjsを読み込むHTMLを生成
    ...buildHtmlWebpackPlugins(entries, HTML_TEMPLATE_PATH),
    // CSSを別ファイルでbuildする
    new MiniCssExtractPlugin({ filename: "[name]-[contenthash].css" }),
    // build後に古いファイルを消す
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
  ],
};
