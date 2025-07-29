//4. This keyword
// for general function they can locate to object
const obj={
   value:20,
 myfunction:function()
   {
      console.log(this);
   }
}

obj.myfunction();

//this keyword for the arrow function they can locate to window object

const obj1={
   value:20,
 myfunction :()=>
   {
      console.log(this);
   }
}

obj1.myfunction();


