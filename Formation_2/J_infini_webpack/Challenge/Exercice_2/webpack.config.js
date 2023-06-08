const path = require('path');

module.exports = (env) => {

  return {
    mode: env.NODE_ENV ?? "development",
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devtool : 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
      open: true,
    },
  }
};
