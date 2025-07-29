
//higher order function(because of we passed the function ) and callback (cb)

function add(a,b,cb)
{
   let result=a+b;
   cb(result);
}

add(2,3,function(value){console.log(value)});


//both are same
function show(sum)
{
    console.log(sum)
}
add(2,3,show)


//arrow function passed
add(410,1,(res)=>console.log(res))