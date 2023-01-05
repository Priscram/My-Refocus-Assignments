let oxygenSaturations = 92; //initialize variable
let pulseRateBPMs = 30; //initialize variable
let observations = "Normal reading"; //initialize variable


function showOxygenSaturations(oxygenSaturations) {
    oxygenSaturationPercentage = oxygenSaturations + "%";
    if (oxygenSaturations >= 96) {
        console.log(`Your oxygen saturation is ${oxygenSaturationPercentage} and above, ${observations = "Normal reading"}`);
    }
    if ((oxygenSaturations < 96 && oxygenSaturations != 92) && (oxygenSaturations = 95) && (oxygenSaturations != 94)) {
        console.log(`Your oxygen saturation is ${oxygenSaturationPercentage}, ${observations = "Acceptable to continue home monitoring"}`);

    }
    if ((oxygenSaturations < 95 && oxygenSaturations != 92) && (oxygenSaturations = 94) && (oxygenSaturations != 93)) {
        console.log(`Your oxygen saturation is ${oxygenSaturationPercentage}, ${observations = "Seek advice from health professionals"}`);

    }
    if ((oxygenSaturations < 94 && oxygenSaturations != 92) && (oxygenSaturations = 93) && (oxygenSaturations != 92)) {
        console.log(`Your oxygen saturation is ${oxygenSaturationPercentage}, ${observations = "Seek advice from health professionals"}`);

    }
    if (oxygenSaturations <= 92) {
        console.log(`Your oxygen saturation is ${oxygenSaturationPercentage} and below, ${observations = "Seek urgent medical advice"}`);

    }
}



function showPulseRate(pulseRateBPMs) {
    beatsPerMinute = pulseRateBPMs + " " + "BPM";
    if ((pulseRateBPMs >= 40) && (pulseRateBPMs <= 100)) {
        console.log(`Your pulse rate is ${beatsPerMinute}, ${observations = "Normal reading"}`);

    }
    if ((pulseRateBPMs >= 101) && (pulseRateBPMs <= 109)) {
        console.log(`Your pulse rate is ${beatsPerMinute}, ${observations = "Acceptable continue home monitoring"}`);
    }
    if ((pulseRateBPMs >= 110) && (pulseRateBPMs <= 130)) {
        console.log(`Your pulse rate is ${beatsPerMinute}, ${observations = "Seek advice from health professionals"}`);
    }
    if (pulseRateBPMs >= 131) {
        console.log(`Your pulse rate is ${beatsPerMinute}, ${observations = "Seek urgent medical advice"}`);
    }

}


showOxygenSaturations(92); //input possible number here from sensor data to log to the console the response
showPulseRate(131); //input any number here to show the pulse rate beats per minute into the console