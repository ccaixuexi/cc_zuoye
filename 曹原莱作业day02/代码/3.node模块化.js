//这个文件是项目的js入口文件  在node环境中 模块化的方案是不一样的
//导入外部模块的内容
// const res = require('./3-1.a.js')/*  */
const {a,x} = require('./3-1.a.js')
console.log(a,x);