/**
 * Created by bstojchevski on 5/16/2017.
 */
import path              from "path";
import webpack           from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import WebpackMd5Hash    from "webpack-md5-hash";
import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
   devtool: 'source-map',
  // noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
    // sourceMapFilename: '[name].map'
  },
  plugins: [
  //  Generate an external CSS file with a hash in the filename
    new ExtractTextPlugin("[name].[contenthash].css"),

  //  Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),

  //  Use CommonsChunkPlugin to create a separate bundle
  //  of vendor librarioes so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),

  //  Create HTML file that includes reference to the bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmplyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,

    //  Properties you define hera are available in index.html
    //  Using htmlWebpackPlugin.options.varname
      trackJSToken: "12345"  // the trackjs.com token goes here...
    }),
  //  Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

  //  Minify JS
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false,
      sourceMap: true
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      // {test: /\.css$/, loaders: ['style-loader','css-loader']}
      {test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader?sourceMap")}
    ]
  }
}
