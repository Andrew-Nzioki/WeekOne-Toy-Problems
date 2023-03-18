
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
console.log(CalculateNhif(80000))