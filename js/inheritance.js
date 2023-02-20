class Employee{
    name;
    designation;
    constructor(name,designation){
        this.name = name;
        this.designation = designation
    }
    givFidback(){
        console.log(`Feed Back is giver by ${this.name}`);
    }
}

class Instructor extends Employee{
  
    team="Web Team";
    constructor(name,designation){
       super(name, designation);
    }
    supportSession(time){
        console.log(`Support session will start at ${time} by instructor ${this.name}`);
    }
    makeQuix(module){
        console.log(`Quiz is created for module ${module}`);
    }

}

class developer extends Employee{

    team="Developer Team";
    skills;
    constructor(name,designation,skills){
        super(name , designation);
        this.skills = skills;
    }
    lounchUpdate(version){
        console.log(`New version ${version} is uploaded by Developer ${this.name}`);
    }
    check(time){
        console.log(`Routine check is done at ${module}`);
    }
   
}

class jobPlacement extends Employee{

    team="Job Placement Team";
    region;
    constructor(name,designation,region){
        super(name,designation);
        this.region = region;
    }
    selectArea(region){
        console.log(`New Region is ${region} selected by by instructor ${this.name}`);
    }
    submitCV(Sname){
        console.log(`Cv Submitted for student ${Sname}`);
    }
  
}

const emon = new Instructor("Emon","Web instructor");
console.log(emon);
emon.givFidback();

const elina = new developer("Elina","Developer","JS");
console.log(elina);
elina.givFidback();
elina.lounchUpdate("2.0");

const mimi = new jobPlacement("Afsana", "Job Commando", "Asia");
console.log(mimi);
mimi.givFidback();
mimi.submitCV("Aminul");

