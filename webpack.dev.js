const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map", // kad kai sukompiliuojam development eitu geriau suprasti kada
  devServer: {
    contentBase: "./dist",
  },
  entry: {
    // nurodom musu programos pagrindini js faila
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i, // pritaikom taisykle tik *.css failams
        //TODO: production env MiniCssExtractPlugin
        use: ["style-loader", "css-loader"], // perdarom .css failus i dist folderi
      },
      {
        test: /\.js$/, // .js
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // kokia senumo js mes norim paversti veikianciu senesne narsyklese
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "This is dynamic Webpack Title",
      template: "src/template.html",
    }),
  ],
};
