//convert Fahrenheit to Celcius

function convertToCelcius(tempFahrenhiet) {
    tempCelcius = (tempFahrenhiet - 32) / 1.8;
    return tempCelcius;
}
console.log(convertToCelcius(84));
console.log(convertToCelcius(95));

//convert Celcius to Kelvin

function convertToKelvin(tempCelcius) {
    tempKelvin = (tempCelcius + 273.15);
    return tempKelvin;
}

console.log(convertToKelvin(75));
console.log(convertToKelvin(127));

//convert Fahrenheit to Kelvin

function convertToKelvin(tempFahrenheit) {
    tempKelvin = (tempFahrenheit - 32) / 1.8 + 273.15;
    return tempKelvin;
}

console.log(convertToKelvin(500));
console.log(convertToKelvin(200));