const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: false,
        mangle: true,
        output: {
          comments: false,
          beautify: false
        }
      },
      sourceMap: false
    })
  ]
};
