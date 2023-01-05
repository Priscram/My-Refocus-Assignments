const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
];

const counts = {};
for (const num of arr) {

    counts[num] = counts[num] ? counts[num] + 1 : 1;

    console.log(counts);
    //console.log(counts["Web Developer"], counts["Refocus"], counts["Awesome"]);
}