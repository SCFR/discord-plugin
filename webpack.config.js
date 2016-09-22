var webpack = require("webpack");


module.exports = {
    entry: "./bundle.js",
    context: __dirname,
    node: {
      __dirname: true,
    },
    output: {
        path: 'C:\\Users\\david\\AppData\\Roaming\\BetterDiscord\\plugins\\',
        filename: "StarCitizenFR.plugin.js",
        //libraryTarget: "var",
        //library: "StarCitizenFR",
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new webpack.BannerPlugin('var StarCitizenFR = function(){};', {raw:true}),
      //new webpack.optimize.UglifyJsPlugin({compress:true}),
      new webpack.BannerPlugin('//META{"name":"StarCitizenFR"}*//', {raw:true}),
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('dev'),
          'API_URL': JSON.stringify('https://5b3bdab3.ngrok.io/wp-json/')
        }
      }),
    ],
};
