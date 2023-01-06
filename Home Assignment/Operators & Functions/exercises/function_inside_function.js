function getFruits() {
    return "fruit_tomatoe";
}

function displayItem(input_func) {
    console.log("We got an " + input_func());
}

displayItem(getFruits);