const path = require("path");
const rootPath = path.resolve(__dirname, "../");

module.exports = ({ config }) => {
  config.resolve.alias["@"] = rootPath;
  config.resolve.alias["~"] = rootPath;
  config.resolve.alias["@js"] = `${rootPath}/src/javascripts`;
  config.resolve.alias["@css"] = `${rootPath}/src/styles`;

  config.module.rules.push({
    test: /\.(scss|css)/,
    use: ["style-loader", "css-loader", "sass-loader"],
  });
  return config;
};
