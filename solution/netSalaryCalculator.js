
//a function to calculate PAYE
function calculateTax(grossSalary, contributionBenefit, disability=false, haveMortgage=false, mortgageInterest=0, haveLifeInsurancePolicy=false, insurancePremium=0, homeOwnershipSavings=false, homeOwnershipTotalDeposit=0) {

  let taxableIncome = grossSalary - contributionBenefit

  if (disability) {
    taxableIncome = taxableIncome * 0.75
  }

  if (haveMortgage) {
    taxableIncome = taxableIncome - mortgageInterest
  }

  if (haveLifeInsurancePolicy) {
    taxableIncome = taxableIncome - insurancePremium
  }

  if (homeOwnershipSavings) {
    taxableIncome = taxableIncome - homeOwnershipTotalDeposit
  }

 
  const annualIncome = paymentFrequency === 'monthly' ? taxableIncome * 12 : taxableIncome

  let taxPayable = 0

  if (annualIncome > 2) {
    const incomeAboveThreshold = annualIncome - taxRates[yearOfTaxation].threshold
    taxPayable = incomeAboveThreshold * taxRates[yearOfTaxation].rate
  }

  return taxPayable
}

const taxPayable = calculateTax(2022, 'monthly', 50000, 1000, true, true, 5000, true, 1000, true, 2000)
console.log(taxPayable)



