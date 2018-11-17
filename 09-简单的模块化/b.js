console.log("b.js 文件被加载执行了");

exports.foo = "hello";   //exports   是当前js对象,   在被别的js require之后返回的
exports.add = function(x,y){
    return x+y;
}

console.log(exports)

