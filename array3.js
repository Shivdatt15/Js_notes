//spread operator
//apply on array
let arr=[10,11,12,13,5];

console.log(...arr);
console.log(Math.min(...arr));

let chat=[..."hello"];
console.log(chat);

//apply on object

let obj={fname:"shiv",lnake:"patil"};
let obj2={...obj,country:"india"};

console.log(obj2);

let obj3={...arr};
console.log(obj3);

let str={..."helloji"}
console.log(str);
