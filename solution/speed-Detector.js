
// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let speed = "";

// question user to enter name
rl.question("What is your Speed", function (speed) {

  function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed <= speedLimit) {
      console.log("Ok");
      return;
    }
    
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
  checkSpeed(speed)

  console.log("Your speed is  " + speed);

  // close input stream
  rl.close();
});

