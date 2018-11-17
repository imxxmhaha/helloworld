// require 是一个方法
// 它的作用是用来加载模块的
// 在node中,模块有三种
//    具名的核心模块,例如fs,http
//    用户自己编写的文件模块

//  require作用
var bExports = require("./b");//expotrs空对象 {}
console.log(bExports)
console.log(bExports.foo)
console.log(bExports.add(3,5))



