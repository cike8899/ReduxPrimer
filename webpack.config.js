var webpack = require('webpack'),
  autoprefixer = require('autoprefixer'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  devtool: "inline-sourcemap",
  entry: {
    app: './index.js',
    lib: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        exclude: path.resolve(__dirname, './node_modules'),
        loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[local]' +
            '__[hash:base64:5]!postcss-loader!less-loader'
      }, {
        test: /\.css$/,
        exclude: path.resolve(__dirname, './node_modules'),
        loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[local]' +
            '__[hash:base64:5]!postcss-loader'
      }, {
        test: /\.less$/,
        include: path.resolve(__dirname, './node_modules'),
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      }, {
        test: /\.css$/,
        include: path.resolve(__dirname, './node_modules'),
        loader: 'style-loader!css-loader!postcss-loader'
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      },
      // { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader:
      // 'url-loader?limit=8192&name=[path][name].[ext]'}
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=60000&name=[name]_[hash:5].[ext]'
      }
      //inline base64 URLs for <=8k images, direct URLs for the rest
    ]
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx', '.less'
    ],
    alias: {
      'styles': __dirname + '/src/styles',
      'imgs': __dirname + '/src/imgs/',
      'fonts': __dirname + '/src/fonts/'
    }
  },
  postcss: [autoprefixer({
      browsers: [
        'Android >= 4',
        'iOS > 6',
        'last 10 Chrome versions',
        'last 4 Firefox versions',
        'Safari >= 6',
        'ie > 8'
      ]
    })],
  plugins: [
    new webpack
      .optimize
      .CommonsChunkPlugin('lib', 'lib.js'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new HtmlWebpackPlugin({template: './index.html'}),
    new webpack.ProvidePlugin({"_": "lodash"})
  ],
  devServer: { // 配置服务器
    stats: {
      chunks: false
    },
    contentBase: './src', //最好写上，否则报错
    hot: true
  }
}
