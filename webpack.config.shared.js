const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    index: './src/ts/index.ts'
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: 'maps/[name].js.map',
    path: path.resolve(__dirname, './src/dist'),
    // library: ['yyz', '[name]'],
    library: '_yyz',
    libraryTarget: 'var'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx' ],
  }
};