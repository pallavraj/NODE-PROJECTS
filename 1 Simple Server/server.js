const http = require('http');
http.createServer(funtion(req,res))
{
    res.writeHead(200,{'content-Type': 'text/html'});
    res.end(`<h1>HELLO WORLD</h1>`);

}

res.listen(4000,'127.0.0.1');

console.log("SERVER RUNNING ")