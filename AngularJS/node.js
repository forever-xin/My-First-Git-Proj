 'use strict';
 var http=require('http');//可以用来创建一个http的服务器
 var server=http.createServer(function (request, response) {//接收请求的创建一个服务

    //只要有人来了就会执行此函数
    console.log(request.url);
//处理请求和响应
response.writeHead(200, {'Content-Type': 'text/html',
'key1':'value1'
});// 告诉客户端给你的html是页面
    response.write('<h1>aaaaa<h1>');//往响应体中放数据（只能是字符串）
    response.end()//结束了回去吧
 });

 //启动服务
 server.listen(8080,function(error){
     console.log('成功监听端口');
 });