const arr=[10,20,33,19,27,29,33,42,9,7,8];

const firstOdd = arr.find(num => num%2 !==0);
console.log(firstOdd); // 33

const firstEven = arr.find(num => num%2 ===0);
console.log(firstEven); //10