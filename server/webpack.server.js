  // build bundle for nodeJS on server
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js') 
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  // runtime target
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // don't include node_modules in bundle for server
  externals: [ webpackNodeExternals() ]
}

module.exports = merge(baseConfig, config) 