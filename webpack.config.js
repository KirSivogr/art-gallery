const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const dotenv = require('dotenv-webpack');

module.exports = {
   entry: path.resolve(__dirname, 'src/index.tsx'),
   devtool: 'inline-source-map',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'build'),
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'ts-loader'],
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                     outputPath: 'images',
                  },
               },
            ],
         },
      ],
   },
   devServer: {
      static: {
         directory: path.join(__dirname, 'build'),
      },
      port: 3001,
   },
   resolve: {
      fallback: {
         process: require.resolve('process/browser'),
      },
      plugins: [
         new TsconfigPathsPlugin({
            configFile: path.join(__dirname, './tsconfig.json'),
         }),
      ],
      alias: {
         '@/*': path.resolve(__dirname, 'src'),
      },
      extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'B1 Art',
         template: path.join(__dirname, 'public', 'index.html'),
      }),
      new dotenv(),
   ],
};
