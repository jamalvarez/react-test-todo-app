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
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets:['babel-preset-react','babel-preset-env'],
              plugins:['transform-object-rest-spread']
            }
          }
        ]
      }
    ]
  }
}