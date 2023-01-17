const normalBMI = {
    minNormal: 18.5,
    maxNormal: 24.5,
    weight: "",
    height: "",
    actualBMI: "",
    belowMinNormalBMI() {

        return (`Your weight is ${this.weight}Kg and your height is ${this.height}m. Your BMI is ${this.actualBMI}Kg/m2 which indicates below minimum normal of ${this.minNormal}Kg/m2`);
    },
    aboveMaxNormalBMI() {

        return (`Your weight is ${this.weight}Kg and your height is ${this.height}m. Your BMI is ${this.actualBMI}Kg/m2 which indicates above maximum normal of ${this.maxNormal}Kg/m2`);
    },
    withinNormalBMI() {

        return (`Your weight is ${this.weight}Kg and your height is ${this.height}m. Your BMI is ${this.actualBMI}Kg/m2 which indicates within range of normal BMI from ${this.minNormal}Kg/m2 to ${this.maxNormal}Kg/m2`);
    }


};

//let meters = 3.2808399;
//let feet = 1;

function checkBMI(weight, height) {
    let BMI = Math.max(weight / (height * height)).toFixed(2);
    normalBMI.weight = weight;
    normalBMI.height = height;
    normalBMI.actualBMI = BMI;
    if (normalBMI.actualBMI < normalBMI.minNormal) {
        console.log(normalBMI.belowMinNormalBMI());

    } else if (normalBMI.actualBMI > normalBMI.maxNormal) {
        console.log(normalBMI.aboveMaxNormalBMI());
    } else {
        console.log(`${normalBMI.withinNormalBMI()}`);
    }
}
const checkUpBMI = checkBMI(60, 1.80);