const tempLoan = require('./data/data.json');

function Calculate(amount,interest,years) {
    //const months = years*12
    const months = years*12;
    //calculate i = interest/12
    const interests = interest/12;
    //Calculate the PV
    const PV = Math.round((amount/(interests)) * (1-(1/((1+((interests)))**(months))))*100)/100;
    return PV
}

tempLoan.forEach(function(item) {
    item.calculatedLoanAmount = (Calculate(item.loanAmount,item.interest,item.loanTermYears)).toString();
})
// const dataObj = tempLoan;
console.log(tempLoan)