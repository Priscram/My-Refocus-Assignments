let caloriesBurnedPerHour = 1000; //reduce 1000 calories per hour

let numTimesSamRuns = 7; //number of times in a week to run


let runHoursPerDay = 1; //number of hours per day to run
let totalHoursRunning = numTimesSamRuns * runHoursPerDay; //total number of hours ran

let totalCaloriesBurned = caloriesBurnedPerHour * totalHoursRunning;

let totalMinutesSam = numTimesSamRuns * runHoursPerDay;

console.log(`Great work, Sam! After running ${runHoursPerDay} hour/s of running everyday in a week, you loose a toal of ${totalCaloriesBurned} calories.`);