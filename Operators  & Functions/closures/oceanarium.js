function startAnAquarium(numFishes) {
    //initialize the value of numFishes
    console.log("There are " + numFishes + ' fishes in this acquarium');

    function addFish() {
        //updates the number of numFishes by incrementing it by 1
        numFishes = numFishes + 1;
        console.log('One fish added we now have ' + numFishes + ' in the aquarium')
    }
    return addFish;
}
//test startAnAquarium
let aquarium_example = startAnAquarium(23);
aquarium_example();
aquarium_example();
aquarium_example();