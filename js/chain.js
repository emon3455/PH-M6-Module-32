const student={
    name: "Emon",
    institution: {
        school: "MMHS",
        colleg: "TC",
        versity: "GUB"
    }
};

//console.log(student.institution.versity);

const product=[
    {name: "Shirt", price: 1200},
    {name: "pant", price: 800},
    {name: "shoes", price: 1800}
];
//console.log(product[2].price);

const user = {
    id: 1401,
    location: {
        first:{
            house:"gp/ga-48/4",
            flor: "3rd",
            side: "left"
        },
        second: "mohakhali",
        third: "dhaka"
    },
    salary:4800,
    mail: "emon.mhk69@gmail.com"
};

const address = user.location.firt?.house;
console.log(address);