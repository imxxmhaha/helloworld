function ajax(url){
    var promise = new Promise(function (resolve, reject) {
        // 异步操作
        var xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);//true 代表异步

        xhr.send();
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                if (xhr.status === 200 ){
                    // 请求成功
                    resolve(xhr.responseText);
                }else{
                    reject(xhr.status);
                }
            }
        }
    });

    return promise; // 将封装了异步操作的Promise对象返回给使用者
}