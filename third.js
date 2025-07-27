
//1. syntax of Arrow function

const hii=()=>
{
   console.log("hello buddy");
}

hii();

const add=(a,b)=>{
   return a+b;
}

console.log(add(5,6));


const add2=(a,b)=>a+b;

console.log(add2(5,6));


//2. Arguments keywords

const addup= () =>
   {
      console.log(arguments)
   }
addup(100,200,300,400)   


// spread operator (with this we can gets access the whole parameter)

const addup2= (...hello) =>
   {
      console.log(hello)
   }
addup2(100,200,300,400)  


//3. Hoisting 

 now(25,26);
function now(a,b)
{
   console.log(a+b) 
}


//but in case of arrow function is not possible.


const now2 = (a,b) =>
{
   console.log(a+b) 
}

now2(25,26);


