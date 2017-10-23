module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node-modules/,
        options: {
          compact: false,
          presets: [
            'react',
            'es2015',
            ['env', { targets: { browsers: ['last 2 versions'] }}],
            'stage-0'
          ]
        }
      }
    ]
  }
}