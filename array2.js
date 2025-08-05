//high order fumction

//filter
const num1 = [1, 2, 3, 4, 5];
const xm=num1.filter((res,ind)=>{if(res%2==0){
    console.log(`${res} value at index ${ind}`);
    return res
}})
console.log(xm);


//reduce
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {return accumulator + currentValue});

console.log(sum); 

const num2=[18,12,13,13,15,16,21];

const unique=num2.reduce((accumulator,currentValue)=>{
    if(accumulator.indexOf(currentValue)===-1)
    {
        accumulator.push(currentValue);
    }
    return accumulator;
},[]);
console.log(unique);
