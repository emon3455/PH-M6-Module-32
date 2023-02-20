const student = {
    id : 101,
    name: "Emon",
    gpa:{
        first: 3.43,
        second: 3.75,
        third: 3.75,
        fourth: 3.96,
        fifth: 3.92,
        sixth: 4.00,
    },
    favourit:{
      subject: "Computer Science",
      game: "cricket",  
    }
}

// dot notation:
const favouritSports = student.favourit.game;
console.log(favouritSports);

// bracket notation:
const favouritSubject = student["favourit"]["subject"];
console.log(favouritSubject);

// another way:
const semister = "sixth";
const result = student.gpa[semister];
console.log(result);