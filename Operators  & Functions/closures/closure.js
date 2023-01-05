//closure is a function as an output
//inside an outer function
//closure means using function as an output

//function1(){
// function2;
//}

function packBox(item, name) {
    console.log(`Put the ${item} in the box`);

    function addressPackage(address) {
        console.log(`Address the box to ${address}
        and ready to send the ${item} gift to ${name} `)
    }
    return (addressPackage);
}
let brotherGift = packBox("shirt", "Dominic");
console.log(typeof brotherGift); //function
brotherGift("Philippines");