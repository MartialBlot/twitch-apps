const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = path.resolve(__dirname, 'src')

function getPackageDir(package) {
  return path.dirname(require.resolve(path.join(package, 'package.json')))
}

module.exports = {
  entry: path.resolve(src, 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      components: path.resolve(src, 'components'),
      "@emotion/core": getPackageDir("@emotion/react"),
      "@emotion/styled": getPackageDir("@emotion/styled")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  watch: true
}

