const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  entry: './src',
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/src',
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            ["@babel/env", {
              "targets": {
                'browsers': ['Chrome >=59']
              },
              "modules": false,
              "loose": true
            }]],
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              localIdentName: '[name]__[local]___[hash:base64]'
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
};