
const spawn = require('child_process').spawn;
exe(['-jar','FbPageToDB.jar'
    ,'Shopping187'
    ,'EAAYt72PgZCS8BAAbGwf6ReZBBOQ3JRNSSjZBAPOnKEDAUxxMweWpyYS6boO4GpUW3ZAlE12hDjZBStWitDHXoAjjzsSgkjKVJOHOmF0KKdfWMWvZCFkXADtD64NoXeMzZCfF747syYukPrTNRrr7mM6dmGojZA792uYsR0fkOwYuGwZDZD']);

function exe(command) {
    const bat=spawn('java',command);
    bat.stdout.on('data', function (data) {
        console.log(data.toString());
    });

    bat.stderr.on('data', function (data) {
        console.log(data.toString());
    });

    bat.on('exit', function (code) {
        console.log('Child exited with code ${code}');
    });
}