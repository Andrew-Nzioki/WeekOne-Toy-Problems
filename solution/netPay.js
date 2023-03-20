const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let grossPay = "";

// question user to enter name
rl.question("What is your grossPay", function (grossPay) {

//Get the tax Rate section
let grossSalary=grossPay;
let taxRates;
function calculateTaxRate(grossSalary=0){
if(grossSalary>=24000&&grossSalary<=288000){
  return taxRates=0.01
}else if(grossSalary>288000&&grossSalary<=388000){
  return taxRates=0.25
}else {
  return taxRates=0.30
}
}


//Get the NHIF deduction here
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

  //get the NSSF deduction here
  function CalculateNSSF(nssfdeduction, grossPay) {
    let totalDeductions;
  
    if (nssfdeduction > 0 && nssfdeduction <= 6000) {
      totalDeductions = grossPay * 0.06;
    } else if (nssfdeduction > 6000 && nssfdeduction <= 216800) {
      totalDeductions =
        (grossPay * 0.06 + (nssfdeduction - 6000) * 0.08) > 2400 ? 2400 : (grossPay * 0.06 + (nssfdeduction - 6000) * 0.08);
    } else {
      totalDeductions = "The deductions are neither in Tire I or II";
    }
  
    return totalDeductions;
  }

    //The taxable income is calculated in this section
    function calculateTaxableIncome(grossSalary, contributionBenefit=0, disability=0, haveMortgage=0, mortgageInterest=0, haveLifeInsurancePolicy=0, insurancePremium=0, homeOwnershipSavings=0, homeOwnershipTotalDeposit=0) {

        let taxableIncome = grossSalary - contributionBenefit
      
        if (disability>=150000&& disability<=1800000) {
          taxableIncome = Math.abs( taxableIncome - homeOwnershipTotalDeposit- insurancePremium- mortgageInterest-disability)
        }else{
          taxableIncome =  taxableIncome - homeOwnershipTotalDeposit- insurancePremium- mortgageInterest-disability
        }
       return taxableIncome
      }
      //console.log(calculateTaxableIncome(40000,2000))



    //Final calculation for PAYE, DEDUCTIONS AND THE NETPAY
 
let TaxablePay=calculateTaxableIncome(grossSalary, contributionBenefit=0, disability=0, haveMortgage=0, mortgageInterest=0, haveLifeInsurancePolicy=0, insurancePremium=0, homeOwnershipSavings=0, homeOwnershipTotalDeposit=0)
let TaxRate=calculateTaxRate(grossSalary=0)
let Relief=24000;
let nssfdeduction;
let PAYE = (TaxablePay*TaxRate) - Relief
let nssf=CalculateNSSF(nssfdeduction,grossPay)
let nhif=CalculateNhif(grossPay)
let StatutoryDeductions=nssf+nhif

//Taxableamoun= GrossPay - StatutoryDeductions - PersonalRelief
const  NetIncome = grossPay - StatutoryDeductions - PAYE


console.log(TaxablePay)
PAYE=(TaxablePay*TaxRate)-Relief
console.log(NetIncome)
console.log(PAYE)


// close input stream
rl.close();
});