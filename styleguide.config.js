const path = require("path");
module.exports = {
  title: "react-nes.css Docs",
  styleguideDir: "docs",
  require: [
    path.join(__dirname, "docs/nes.css"),
    path.join(__dirname, "docs/font.css")
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  }
};
