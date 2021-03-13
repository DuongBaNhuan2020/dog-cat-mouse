var chalk=require('chalk');
function dog(){
	this.name=name;
	this.stomach=[];
}
dogprototype.eat = function(cat){
	// body... 
	this.stomach.push(cat)
};
dog.prototype.sayhi = function(){
	console.log('Hi '+chalk.red(this.name ))
	// body... 
};
module.exports=dog;