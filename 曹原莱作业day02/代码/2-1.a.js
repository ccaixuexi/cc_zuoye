let a = 10
let b = 5

function fn(){
    return a + b
}
export{a,b}  //将a和b这2个变量导出去
export default fn  //默认导出只能能有一个，但可以和分别导出共存