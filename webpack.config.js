
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
//配置 webpack.config.js  针对.js结尾的文件除了node_modules都用babel解析
module.exports = {
    mode   : 'production',
    entry  : {
        es6  : ['./demo/es6/index.js'],
        main : ['./demo/webpack/index.js'],
    },
    output : {
        path     : __dirname + '/dist',
        filename : '[name].js'
    },
    module : {
        rules : [
            {
                test    : /\.js?$/,
                exclude : /(node_modules)/,
                loader  : 'babel-loader'
            },
            {
                test   : /\.less$/,
                use : 'vue-style-loader!css-loader!less-loader'
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({template: './webpack/index.html'})
    ]
}
