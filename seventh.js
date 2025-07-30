
// Stack memory (premitives) and heap memory (non-premitives) 

//premitives are string,numbers,variable
let hii="hello"
bye=hii  //In premitives they not access same location they creates the copy
bye="see you"
console.log(hii)
console.log(bye)


//Non-premitives are array,function,object

const objOne=
{  name:"hello", email:"shiv@email.com"    }

objTwo=objOne; //both access the same location in heap

objTwo.name="bye"

console.log(objOne.name)
console.log(objTwo.name)
