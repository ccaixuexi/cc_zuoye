//如何使用第三方包？

//1，确认一下js的运行环境（是node环境还是web环境）
//如果是引入node_modules下统一管理的第三方包，直接写包名即可，不用找具体的路径
const _ = require('lodash')  //lodash大家一般习惯用_来表示lodash这个库，但其实你也可以用别的变量名定义  
let arr = [1,2,3]
_.fill(arr,'peiqi')  //注意，这里并没有创建一个新数组，而是在原数组的基础上进行了修改
console.log(arr);

// 不要再傻了吧唧的Ait+B了，注意这里的是在node环境中，要右键点击这个index.js文档在终端中打开，并用node .\路径打印

const _ = require('lodash')
let arr1 = [12,3,45,6]
_fill(arr1,'*',0,4)
console.log(arr1);
/* _.fill(array, value, [start=0], [end=array.length])

    array (Array): 要填充改变的数组。
    value (*): 填充给 array 的值。
    [start=0] (number): 开始位置（默认0）。
    [end=array.length] (number):结束位置（默认array.length）

    使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
*/