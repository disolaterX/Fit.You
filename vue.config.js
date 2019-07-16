const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
module.exports = {
    // loaders: [
    //     { test: /\.css$/, loader: "css-loader" }
    //  ],
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ]
  }
}