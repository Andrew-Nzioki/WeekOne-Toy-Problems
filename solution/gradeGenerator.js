`Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
`;
//marks = prompt("Enter grade");
function gradeGenerator(marks) {
  if (marks>=0&&marks < 40) {
    console.log("E");
    console.log("student'Grade is E");
  } else if (marks > 40 && marks <= 40) {
    console.log("D");
    console.log("Student's Grade is D");
  } else if (marks >= 49 && marks <= 59) {
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
gradeGenerator(39);
