  // build bundle for nodeJS on server
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js') 

const config = {
  // runtime target
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = merge(baseConfig, config) 