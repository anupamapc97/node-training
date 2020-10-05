const http=require('http')
http.createServer(function(req,res){
    res.write("Welcome to Htttp Server")
    res.end();
}).listen(8080)