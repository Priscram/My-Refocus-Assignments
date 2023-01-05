let str = "\u20B1";
let samCurrentSavings = 7500;
let samSavingsGoal = 10000;
let percentageToSavingsGoal = (samSavingsGoal - samCurrentSavings) / 100 + "%";
console.log(`Thank you for your descipline and hardwork Sam! You are now ${percentageToSavingsGoal} away from your goal of saving ${str} ${samSavingsGoal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.`);