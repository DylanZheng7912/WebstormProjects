
var http=require('http'),
    url = require('url'),
    httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
http.createServer(function (request,response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });

    //POST
    var POST = {};
    if (request.method == 'POST') {
        request.on('data', function(data) {
            data = data.toString();
            data = data.split('&');
            for (var i = 0; i < data.length; i++) {
                var _data = data[i].split("=");
                POST[_data[0]] = _data[1];
            }

            const spawn = require('child_process').spawn;

            exe(['-jar','FbPageToDB.jar',POST['userName'],POST['token']],exeBack);
            var num=0;
            //call jar檔
            function exe(command,callback) {
                var bat=spawn('java',command);

                bat.stdout.on('data', function (resultData) {

                    console.log("resultData"+(num+1)+"  =  "+resultData+"\n")
                    callback&&callback(resultData,POST['token'])
                    if(num==0){
                        if( resultData!='Error'){
                            response.writeHead(302, {
                                'Location': 'http://localhost:8080/fbbotweb'
                            });

                            response.end();
                        }else{
                            response.write(resultData)
                            response.end();
                        }
                    }
                });

                bat.stderr.on('data', function (data) {

                });
                bat.on('close', function (code) {
                    num++;
                   /* if(num>3){
                        response.end();
                    }*/
                });
            }
            //ID取得後要做得事情
            function exeBack(id,token) {
                exe(['-jar','FbPostToDB.jar',id,token]);
                exe(['-jar','FbCommentToDB.jar',id,token]);
                exe(['-jar','FbRecommentToDB.jar',id,token]);
            }


        })
    }
   /* proxy.web(request, response, { target: 'http://localhost:8080/fbbotweb' });*/
}).listen(8081);




