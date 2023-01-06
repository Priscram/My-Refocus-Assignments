let yearExample = 2000;

function calculateAge(year) {
    return 2022 - year; // calculates the age

}

function checkIfEligibleToVote(year) {
    return (2022 - year) >= 18; //is user age 18 and above for vote eligibility
}

function varCalc(year, fn) {
    let newValue;
    newValue = fn(year);
    console.log('Using ' + fn);
    console.log('The new value is ' + newValue)
    return newValue;

}

let age = varCalc(yearExample, calculateAge);
let isEligible = varCalc(yearExample, checkIfEligibleToVote);