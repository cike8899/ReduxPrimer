var webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'), //抽取CSS文件插件
  autoprefixer = require('autoprefixer'),
  HtmlWebpackPlugin = require('html-webpack-plugin'), //抽取html
  path = require('path')

module.exports = {
  context: path.join(__dirname, './src'), //上下文，下面'./index.js'的当前目录就是src目录
  entry: {
    app: './index.js', //将src/index.js文件打包输出到index.html文件的app.js
    lib: [ //将数组中的几个依赖项打包输出到index.html的lib.js
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux'
    ]
  },
  output: {
    path: path.join(__dirname, './dist'), //编译打包好的文件要放到的目录
    filename: '[name].[hash:5].js', //打包压缩后的文件的名字，这里有app.js和lib.js
    publicPath: '/' //todo:http://localhost/
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        exclude: path.resolve(__dirname, './node_modules'),
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&minimize&camelCase&importLoaders=1&localIdentName=[local]__[h' +
            'ash:base64:5]!postcss-loader!less-loader')
      }, {
        test: /\.css$/,
        exclude: path.resolve(__dirname, './node_modules'),
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&minimize&camelCase&importLoaders=1&localIdentName=[local]__[h' +
            'ash:base64:5]!postcss-loader')
      }, {
        test: /\.less$/,
        include: path.resolve(__dirname, './node_modules'),
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader')
      }, {
        test: /\.css$/,
        include: path.resolve(__dirname, './node_modules'),
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      },
      // { test: /\.(png|jpg)$/, loader:
      // 'url-loader?limit=8192&name=[name]_[hash:5].[ext]' }
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=60000&name=[name]_[hash:5].[ext]'
      }
    ]
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx'
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
      .CommonsChunkPlugin('lib', 'lib.[hash:5].js'),
    new ExtractTextPlugin("[name].[hash:5].css"), //
    new webpack.DefinePlugin({
      // 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV ||
      // 'development') }
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack
      .optimize
      .OccurrenceOrderPlugin(),
    new webpack
      .optimize
      .DedupePlugin(),
    new webpack
      .optimize
      .UglifyJsPlugin({sourceMap: false, unused: true, dead_code: true, warnings: false}),
    new HtmlWebpackPlugin({minify: {}, template: './index.html'}), //minify:压缩HTML文件
    new webpack.ProvidePlugin({"_": "lodash"})
  ]
}
