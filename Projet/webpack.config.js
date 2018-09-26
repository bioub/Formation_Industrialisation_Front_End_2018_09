const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_, { mode }) => {

  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: (mode ==='production') ? {
        collapseWhitespace: true,
        removeComments: true,
      } : false,
    }),
  ];

  if (mode === 'production') {
    plugins.push(new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[chunkHash].css",
    }));
  }


  return {
    devtool: false,
    entry: './src/index.js',
    output: {
      filename: (mode === 'production') ? '[name].[chunkHash].js' : '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            (mode === 'production') ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        }
      ],
    },
    plugins,
  };
};
