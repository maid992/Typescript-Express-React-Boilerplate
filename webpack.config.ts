import { default as HtmlWebpackPlugin } from 'html-webpack-plugin'
import { Configuration } from 'webpack'

const config: Configuration = {
  entry: './src/entry/index.tsx',
  output: {
    filename: 'dist/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/entry/index.html' })]
}

export default config
