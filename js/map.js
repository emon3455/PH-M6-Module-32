const number = [1,2,3,4,5];
const doubleNumbers = number.map(x=> x*2);
 // it will take all the element and using this anonimous arrow fnction it will double the value.
// console.log(doubleNumbers); 

const  makeDouble = num => num *2;
//alternative way:
const doubleArray = number.map(makeDouble);
// console.log(doubleArray);

const arr=[10,20,30,40];
const half = arr.map(x=> x/2);
// console.log(half);

// get the first letter:
const friend = ["Emon","Elina","Farjana","Bristy"];

const firstLetters = friend.map( x => x[0]);
// console.log(firstLetters); 

const bigName = friend.map(x => x.length);

const big  = Math.max(...bigName);
console.log(big);

const products = [
    {id:1, name: "iphone", price: 16000},
    {id:2, name: "pc", price: 38000},
    {id:3, name: "laptop", price: 40000},
];

const name = products.map(p => p.name);
console.log(name);

const price = products.map(p => p.price);
console.log(price);


