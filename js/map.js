const number = [1,2,3,4,5];
const doubleNumbers = number.map(x=> x*2);
 // it will take all the element and using this anonimous arrow fnction it will double the value.
console.log(doubleNumbers); 

const  makeDouble = num => num *2;
//alternative way:
const doubleArray = number.map(makeDouble);
console.log(doubleArray);