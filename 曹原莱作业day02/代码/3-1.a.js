let a = 1
let x = 10
//将a和x导出去   方式一(这种方式用的更多一点)
module.exports = {
    // a:a,
    // x:x
    a,
    x
}//这里是exports而之前的是export

//方式二
exports.a = 1
exports.x = 10

//导入方式只有一种import，但是导出方式有两种