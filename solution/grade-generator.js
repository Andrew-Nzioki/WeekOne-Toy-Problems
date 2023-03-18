`Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
`;
marks = prompt("Enter grade");
function gradeGenerator(marks) {
 
  if (marks < 40) {
    console.log("E");
    alert("student'Grade is E");
  } else if (marks > 40 && marks <= 40) {
    console.log("D");
    alert("Student's Grade is D");
  }
}
gradeGenerator(marks)