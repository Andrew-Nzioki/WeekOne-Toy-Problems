let grossSalary;
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
console.log(calculateTaxRate(299999))

module.exports={taxRates,calculateTaxRate}