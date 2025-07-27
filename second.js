
let ans=0
function addnum()
{
     for(let i=0;i<arguments.length;i++)
     {
        ans=ans+arguments[i];
     }

     return ans;
}

let result=addnum(10,22,33,44,55)
console.log(result)


function add2(...hi)//spread operator
{
    let ans=0;
     for(let i=0;i<hi.length;i++)
     {
        ans=ans+hi[i];
     }

     return ans;
}

let sum=add2(1,2,3,4,5)
console.log(sum)