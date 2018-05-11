const path=require('path')
const webpack=require('webpack')
const HTMLWebpackPlugin=require('html-webpack-plugin')

const config={
    devtool: 'eval-source-map',
    entry:path.join(__dirname,'/src/js/index.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    devServer: {
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true,
        },
        inline: true
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options: {
                            limit:300,
                            name:'[name]-my.[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname,'/src/index.tmpl.html'),
            // inject: true
        })
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        }
    }
}

module.exports=config