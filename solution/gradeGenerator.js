`Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
`;
//marks = prompt("Enter grade");
//a function to calculate the students grade based on the marks inputed
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let marks = "";

// question user to enter name
rl.question("What is the student's Marks", function (marks) {

function gradeGenerator(marks) {
  //this first condition checks whether the grade is between 0 and 40
  if (marks>=0&&marks < 40) {
    console.log("E");
    console.log("student'Grade is E");

  } 
  //this second condition checks the grade to be between 41 and 49
  else if (marks > 40 && marks <= 49) {
    console.log("D");
    console.log("Student's Grade is D");
  } 
  else if (marks >= 49 && marks <= 59) {
    console.log('Grade is C')
  } else if (marks >= 60 && marks <= 79) {
    console.log('student grade is a B')
  } else if (marks > 79 &&marks<=100) {
    console.log("The student Grade is an A");
  }else{
    console.log('no such grade')
  }
  return;
}

gradeGenerator(marks)

//console.log("Your speed is  " + speed);

// close input stream
rl.close();
});
