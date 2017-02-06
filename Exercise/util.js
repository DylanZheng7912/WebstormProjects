



var obj1=[{'apple':2},{'orange':['a','c']}];
var util=require('util');

console.log(util.inspect(obj1))
//判斷是否為此型態
console.log(util.isArray(obj1))
console.log(util.isRegExp(obj1))
console.log(util.isDate(obj1))
console.log(util.isError(obj1))

var MyParentObject=function(){};
MyParentObject.prototype.hit=function(who){
    console.log(who+'Is pain')
}
var obj2=new MyParentObject();
obj2.hit('parent');
var MyChildObject=function(){};
//util 繼承
util.inherits(MyChildObject,MyParentObject)
var obj3=new MyChildObject();
obj3.hit('Children');



