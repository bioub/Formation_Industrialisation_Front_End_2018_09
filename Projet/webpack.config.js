const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

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
            (mode === 'production') ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'postcss-loader',
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
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.json5$/,
          use: 'json5-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ],
    },
    plugins,
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
  };
};
