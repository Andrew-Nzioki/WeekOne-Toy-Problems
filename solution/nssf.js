

//This function takes your yearly deduction and returns the total deductions made in a year based on tier batch
function CalculateNSSF(nssfdeduction,grossPay){

if(nssfdeduction>0 && nssfdeduction <72000){
    totaldeductions=grossPay*0.06
//this else condition takes care of people using tire II model to make their nssf deductions 
}else if(nssfdeduction>72001&& nssfdeduction <216801){
totaldeductions=grossPay*0.06
}else{
    return totaldeductions=`The deductions are neither in Tire I or II`
}
return totaldeductions;
}
console.log(CalculateNSSF(1000000,200000))