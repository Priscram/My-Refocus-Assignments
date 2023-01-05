(function() {
    let str = "\u20B1";
    let bankName = "Grow Savings Bank:";
    console.log(bankName);

    function createBankAccount(openAccount, name, deposit, withdraw, callback) {
        console.log(`Mr. ${name}, your account is active with initial deposit of ${str} ${openAccount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
        callback(openAccount, name, deposit, withdraw);

    }

    function depositAndWithdraw(openAccount, name, deposit, withdraw) {

        let balance = openAccount + deposit - withdraw;
        console.log(`Mr. ${name} you\'ve added savings to your account in the amount of ${deposit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
        for (let i = balance; balance > 0; i--) {
            if (balance === 0) {
                console.log(`You have insufficient fund`);
                break;
            } else if (balance < 0) {
                console.log(`This action is not allowed`);
                break;
            } else if (withdraw > 10000) {
                console.log(`You have withdrawn this amount ${withdraw.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
                break;
            } else if (withdraw == 10000) {
                console.log(`You are in your maintaining balance`);
                break;
            } else if (withdraw == 0) {
                console.log(`Can not be ${withdraw.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
                break;
            }
        }
        console.log(`Here\'s your current balance ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
    }

    createBankAccount(10000, "Marco Ty", 5000000, 1000000, depositAndWithdraw);
    //console.log(typeof createBankAccount); //checking typeof displays a function
    Object.freeze(createBankAccount); //since creteBankAccount is a function and a function is an object it can be freezed
    //console.log(typeof depositAndWithdraw);//since it is a function it is also another object inside the object it must also be freezed
    Object.freeze(depositAndWithdraw); //object inside the already freezed object should also be freezed
    /**
     * Now the object cannot be modified, deleted written
     */
    // Disallow new properties to the bank account
    Object.preventExtensions(createBankAccount);
    Object.preventExtensions(depositAndWithdraw)
    Object.seal(createBankAccount);
    Object.seal(depositAndWithdraw);

})(); //prevents a variable from being accessible in the console using anonymous function