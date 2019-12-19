const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
  entry : './src/index.js',
  output : {
    path : path.resolve(__dirname,'dist'),
    filename : 'bundle.js'
  },
  mode : 'development',
  plugins :[
    new HtmlWebpackPlugin({
      template : './index.html'
    })
  ],
  module :{
    rules :[
      { test : /\.(js)$/,use : 'babel-loader'},
      { test : /\.(css)$/,use:['style-loader','css-loader']}
    ]
  }
};
