const numbers =[1,2,3,4,5];

const sum = numbers.reduce((previous, current)=> previous + current ,0);
console.log(sum);

// here previos is the and of the operation 
// and current is the present element

const sum1 = numbers.reduce((previous, current)=> {
    return previous + current;
} ,0);
console.log(sum1);