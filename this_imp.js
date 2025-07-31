let obj={
	name:"shivdatt",
	roll_No:25,
	hii:this,
	getname1:function(){
		console.log(this.name);
	},
	getname2:()=>{
		console.log(this);
	},
	sety:function(){
       setTimeout(function(){console.log(this);},2000);
	},
	sety1:function (){
       setTimeout(()=>{console.log(this);},2000);
	},
	sety2:()=>{
        setTimeout(()=>{console.log(this);},2000);
	}

}

console.log(obj);
obj.getname1()
obj.getname2()
obj.sety()
obj.sety1()
obj.sety2()