// fs.readFile 就是用来读取文件的
// 1.使用require 方法加载fs 核心模块
var fs = require('fs');

// 2.读取文件
//   第一个参数就是要读取的文件路径
//   第二个参数是一个回调函数

//   成功
//       data  数据
//       error  null
//   失败
//       data  null
//       error 错误对象
fs.readFile('../data/hello.txt',function(error,data){
    //  <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 6a 73>
    //   文件中存储的是二进制数据 0 1
    //   这里看到的不是二进制  而是16进制
    //   所以我们可以通过toString 方法把它转成字符串
    if(error){
        console.log('读取文件失败');
    }else{
        console.log(data.toString());
    }
})