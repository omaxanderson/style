const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   mode: 'production',
   entry: './src/index.scss',
   output: {
      path: path.join(__dirname, './dist/'),
      //filename: '[name].css' // output js file name is identical to css file name
   },
   module: {
      rules: [
         {
            test: /\.s[ac]ss$/i,
            exclude: path.join(__dirname, './node_modules'),
            use: [
               // Compiles Sass to CSS
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader',
            ],
         },
      ],
   },
   plugins: [
      new MiniCssExtractPlugin({
         // Options similar to the same options in webpackOptions.output
         // all options are optional
         filename: '[name].css',
         chunkFilename: '[id].css',
         ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
   ],

};

