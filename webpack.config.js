const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output:{
    path: path.join(__dirname, 'dist'),
    filename: 'todo-list.js'
  },
  module:{
    rules:[
      {
        test: /jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets:['babel-preset-react','babel-preset-env']
            }
          }
        ]
      }
    ]
  }
}