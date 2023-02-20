const products = [
    {id:1, name: "iphone", price: 16000},
    {id:2, name: "pc", price: 38000},
    {id:3, name: "laptop", price: 40000},
    {id:4, name: "tab", price: 25000},
];

const arr=[10,20,33,19,27,29,33,42,9,7,8];

const adult = arr.filter( num => num > 18 );
console.log(adult);

const expensive = products.filter(p => p.price > 30000);
console.log(expensive);

const even = arr.filter( num => num % 2 === 0 );
console.log(even);

const odd = arr.filter( num => num % 2 !== 0 );
console.log(odd);