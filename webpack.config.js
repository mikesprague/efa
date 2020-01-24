const path = require('path');
const WebPackBar = require('webpackbar');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const mode = process.env.NODE_ENV || 'production';

const config = {
  entry: [
    './public/javascripts/main.js',
  ],
  // devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        // sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  mode,
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    // we can use "substitutions" in file names like [name] and [hash]
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      exclude: [
        /node_modules/,
      ],
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'],
        },
      }],
    },
    {
      rules: [{
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // sourceMap: true,
              plugins() {
                return [
                  autoprefixer(),
                  cssnano({ preset: 'default' }),
                  purgecss({
                    content: ['./views/**/*.pug', './js/**/*.js'],
                    fontFace: true,
                    whitelistPatterns: [/alert/],
                    whitelistPatternsChildren: [/alert/],
                  }),
                ];
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // sourceMap: true,
            },
          },
        ],
      }],
    }],
  },
  plugins: [
    new WebPackBar(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 8192,
      minRatio: 0.8,
    }),
  ],
};

module.exports = config;
