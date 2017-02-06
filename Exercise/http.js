var http=require('http');
var url=require('url');
var path=require('path');
var fs=require('fs');
var FAVICON = path.join(__dirname, 'public', 'big.ico');
var server=http.createServer(function (req,res) {
    var fileName=url.parse(req.url).pathname;
    var filePath=path.join(__dirname,fileName)
    fs.exists(filePath,function (exists) {
        if(!exists && fileName!='/favicon.ico'){
            res.writeHeader(404,{'Content-Type':'text/plain'});
            res.end('找不到\n');
            return;
        }
    })
    fs.readFile(filePath,function (err,content) {
        if(!err){
           /* res.writeHeader(200,{'Content-Type':'text/plain'});*/
            res.writeHeader(200,{'Content-Type':'image/png'});
            res.end(content)
        }
    })

})

server.listen(12345);
console.log('開囉')