var events = require('events');

class MyEmitter extends events {}
var count=0;
MyEmitter.prototype.hi =  ()　=> {
    console.log(count);
    myEmitter.emit('yaya')
}
var myEmitter = new MyEmitter();

myEmitter.on('yaya', () => {
    count++;
});
myEmitter.hi()
myEmitter.hi()
myEmitter.hi()
myEmitter.hi()
