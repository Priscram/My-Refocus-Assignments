const shopping_list = [
    "bag", "newspaper", "pen"
];

for (let starting_index = 0; starting_index < 3; starting_index = starting_index + 1) {
    console.log(shopping_list[starting_index]);
}
//for of code
for (Item in shopping_list) {
    console.log(shopping_list[Item])
}

shopping_list.push("folder", "umbrella");
console.log(shopping_list);