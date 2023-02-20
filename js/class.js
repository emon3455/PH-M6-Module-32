class Instructor{
    name;
    designation;
    team="Web Team";
    constructor(name,designation){
        this.name = name;
        this.designation = designation;
    }
    supportSession(time){
        console.log(`Support session will start at ${time} by instructor ${this.name}`);
    }
    makeQuix(module){
        console.log(`Quiz is created for module ${module}`);
    }

}

const emon = new Instructor("emon","Web Instructor");
console.log(emon);

emon.makeQuix(40);
emon.supportSession("9.00pm");