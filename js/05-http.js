// 在Node 中专门提供了一个核心模块:http
// 在http这个模块的职责就是帮你创建编写服务器的


// 1. 加载http核心模块
var http = require("http")

// 2. 使用http.createServer()方法创建一个  web服务器
//     返回一个Server  实例
var server = http.createServer(http);

// 3.  服务器要干嘛
//     提供服务: 对数据的服务
//     发请求
//     处理请求
//     给个反馈(发送响应)
//     注册request请求事件
server.on('request',function(request,response){
        console.log('收到客户端的请求了');
        console.log("客户端请求路径是:"+request.url);
    var url = request.url;
    if(url == "/hello"){
        var products = [
            {
                name:"苹果 xs max",
                price:11999,
                color:"gold"
            },
            {
                name:"苹果 xs ",
                price:8999,
                color:"gold"
            },
            {
                name:"苹果 xr ",
                price:6400,
                color:"gold"
            }
        ]

        //响应内容只能是字符串或者二进制
        response.setHeader("Content-Type","application/json;charset=utf-8")
        response.end(JSON.stringify(products));
    }else{
        //一定要加上response.end();
        response.end("hello nodejs");
    }



})

// 4.  绑定端口号,启动服务器
server.listen(80,function () {
    console.log('服务器启动成功,可以通过http://127.0.0.1/ 来进行访问');
})
