
const personalRelief=2400;
const insuranceRelief=5000;
const AllowablePensionFundContribution=20000;
const allowableHOSPContribution=0;
const AffordableHousingRelief=9000;
const AllowableOwnerOccupierInterest=25000;
const DisabilityExemption=150000;
function CalculatePAYE(Salary) {
  let PAYE;
  if (Salary <= 24000) {
    PAYE = Salary * 0.01;
  } else if ((Salary > 24000 && Salary <= 32333)) {
    PAYE = Salary * 0.25;
  } else if ((Salary > 32333)) {
  }
  return PAYE;
}

// Calculate NHIF deductions
function CalculateNhif(grossPay) {
  let nhif;
  if (grossPay <= 5999) {
    nhif = 150;
  } else if (grossPay <= 7999) {
    nhif = 300;
  } else if (grossPay <= 11999) {
    nhif = 400;
  } else if (grossPay <= 14999) {
    nhif = 500;
  } else if (grossPay <= 19999) {
    nhif = 600;
  } else if (grossPay <= 24999) {
    nhif = 750;
  } else if (grossPay <= 29999) {
    nhif = 850;
  } else if (grossPay <= 34999) {
    nhif = 900;
  } else if (grossPay <= 39999) {
    nhif = 950;
  } else if (grossPay <= 44999) {
    nhif = 1000;
  } else if (grossPay <= 49999) {
    nhif = 1100;
  } else if (grossPay <= 59999) {
    nhif = 1200;
  } else if (grossPay <= 69999) {
    nhif = 1300;
  } else if (grossPay <= 79999) {
    nhif = 1400;
  } else if (grossPay <= 89999) {
    nhif = 1500;
  } else if (grossPay <= 99999) {
    nhif = 1600;
  } else {
    nhif = 1700;
  }
  return nhif;
}

console.log(CalculateNhif(24000))

//This function takes your yearly deduction and returns the total deductions made in a year based on tier batch
function CalculateNSSF(nssfdeduction){
if(nssfdeduction>0 && nssdeduction <72000){
    totaldeductions=grossPay*0.06
//this else condition takes care of people using tire II model to make their nssf deductions 
}else if(nssfdeduction>72001&& nssdeduction <216801){

}
}
