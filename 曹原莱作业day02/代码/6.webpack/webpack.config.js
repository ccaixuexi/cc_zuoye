
//webpack的配置文件
const path = require('path')  //这个path是用来拼接路径的
module.exports = {
    mode:'development',
    //打包入口 相对路径
    entry:'./src/index.js',
    //打包出口 对象
    output:{  //出口必须使用绝对路径
        //path表示打包后的路径
        path:path.resolve(__dirname,'output'),
        filename:'my-webpack.js'
    },

    //配置loader处理其他类型的文件
    module:{
        rules:[
            {
                test:/\.css$/,  //用来匹配.css结尾的文件
                use:['css-loader','style-loader']
            }
        ]
    },
    plugins:{
        
    }
    
}