module.exports = {
  context: __dirname,
  entry: './frontend/main.js',
  output: {
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};