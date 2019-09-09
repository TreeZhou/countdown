// 配置参数
require('../.env.js');
let sourceMap = process.env.NODE_ENV === 'development' ? true : false;
let libraryName = require('../package.json').name;
libraryName = libraryName.split('/')[1]
  ? libraryName.split('/')[1]
  : libraryName.split('/')[0];
const path = require('path');
const merge = require('webpack-merge');
let config = {
  mode: 'development',
  devServer: {
    open: 'Google Chrome',
    hot: true,
    hotOnly: true,
    openPage: './demo/'
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: libraryName + '.js',
    library: libraryName,
    libraryTarget: 'umd',
  },
  devtool: sourceMap ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: []
};

// 编译vue文件
if (process.env.VUE === 'true') {
  const vueConfig = require('./webpack.vue.config.js');
  config = merge(config, vueConfig);
}

// 压缩版本
if (process.env.NODE_ENV === 'production') {
  const uglifyConfig = require('./webpack.uglify.config.js');
  config = merge(config, uglifyConfig, {
    output: {
      filename: libraryName + '.min.js'
    }
  });
}

module.exports = config;
