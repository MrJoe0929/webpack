
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const config = {
    entry: `${__dirname}/src/app.js`,
    output: {
        path: `${__dirname}/dist`,
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "html-loader"
            },{
                test: /\.ejs$/,
                use: "ejs-loader"
            },{
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: "./template/index.html",
            filename: "index.html",
            title: '我是主页面'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8888,
        proxy: {
            "/web20": {
                target: "https://as-vip.missfresh.cn",
                changeOrigin: true
            },
            "/rexxar": {
                target: "https://m.douban.com",
                changeOrigin: true
            }
        },
        setup(app){
            app.get('/api/list', function(req, res) {
                res.json({
                    name: '张三',
                    age: 20,
                    sex: "男"
                });
            })
            app.post('/api/login', function(req, res) {
                res.json({
                    name: '李四',
                    pwd: "123456",
                    sex: "男"
                });
            })
        }
    }
}

module.exports = config;