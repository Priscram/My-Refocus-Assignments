let caloriesBurnedPerDay = 225; //cycling burns 225 calories everyday for 30 minutes

let numTimesSamCycles = 15; //number of times sam cycles for 15 days

let cyclingHoursPerDay = .5; //number of hours per day to cycling

let totalHoursCycling = numTimesSamCycles * cyclingHoursPerDay; //total number of hours cycling

let totalCaloriesBurned = caloriesBurnedPerDay * numTimesSamCycles;

let totalMinutesSam = numTimesSamCycles * cyclingHoursPerDay;

console.log(`Great work, Sam! After ${cyclingHoursPerDay} of running everyday for a week, you may loose a toal of ${totalCaloriesBurned} calories.`);