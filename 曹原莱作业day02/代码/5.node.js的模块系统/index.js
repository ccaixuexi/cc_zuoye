// 使用node.js的内置模块
const fs = require('fs') //引入内置模块，之前那个fill是第三方库lodash里面的，所以引入的东西不一样
fs.readFile('./1.txt',function(err,data){
    // console.log(err,data);
    //err 表示读取文件错误的结果
    // console.log(err,data);
    //data 表示读取文件的内容   默认是buffer格式存储的  可以通过toString方法转为字符串
    console.log(err,data.toString());  //这里是为了将计算机存储文字的语言在终端中显示真正的文字
})

console.log(123);   //node.js异步

//希望向2.txt里面写入一句话 node.js真好学
// fs.writeFile('./2.txt','node.js真难学',function(err,data){
//     // console.log(err,data);
//     if(err){
//         console.err(err);
//     }
// })

// fs.readFile('./1.txt',function(err,data){
//     fs.writeFile('./2.txt',data.toString(),function(a,b){
//         console.log();
//     })
// })
