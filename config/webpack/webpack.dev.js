process.env.NODE_ENV = "development";

const { merge } = require("webpack-merge");
const common = require("../../webpack.common.js");

module.exports = merge(common, {
  mode: process.env.NODE_ENV,
});
