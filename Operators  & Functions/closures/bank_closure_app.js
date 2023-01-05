(function() {

    let str = "\u20B1";
    let bankName = "Grow Savings Bank:";

    function createBankAccount(name) {

        let balance = 0;
        let openAccount = 10000; //initial deposit
        balance = 0 + openAccount;
        console.log(bankName);
        console.log(name + " your account is activated with initial deposit of " + str + openAccount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));


        function depositAmount(amount) {
            additionalDeposit = amount;
            balance = balance + additionalDeposit;
            console.log('Thank you, Mr. ' + name + ' you\'ve made an additional deposit of ' + str + additionalDeposit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            console.log('Your new balance now is ' + str + balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

        }

        function withdrawAmount(amount) {

            let withdrawal = amount;
            balance = balance - withdrawal;
            if ((balance != withdrawal) && (withdrawal = true && balance < withdrawal)) {
                console.log('You can not withdraw more than your funds');
            } else if ((balance != 0) && (withdrawal = true && balance > withdrawal)) {
                console.log('You have withdrawn this amount of ' + str + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));


            }
            return balance;




        }

        function checkBalance(withdrawAmount, depositAmount) {
            for (var i = openAccount; i < balance; i++) {
                if (balance < openAccount) {
                    console.log(`Your account is below maintaining balance`);
                } else if (balance > openAccount) {
                    console.log(`Your current balance is ${str} ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}. As always thank you for your trust.`);
                }
                return balance;
            }


        }







        return {

            depositAmount,
            withdrawAmount,
            checkBalance,



        }

    }

    const bankClientMercoTy = createBankAccount("Merco Ty");
    bankClientMercoTy.depositAmount(5000000);
    bankClientMercoTy.withdrawAmount(10000);
    bankClientMercoTy.checkBalance();
    bankClientMercoTy.withdrawAmount(5000000); //If can not withdraw change amount of withdrawals to re check the current balance below
    bankClientMercoTy.checkBalance(); // if can withdraw then checks balance
    console.log(typeof bankClientMercoTy); //Object, checking typeof displays a function
    Object.freeze(bankClientMercoTy); //since bankClientMercoTy is an object it can be freezed to prevent variable access
    /**
     * Now the object cannot be modified, deleted written
     */
    // Disallow new properties to the bank account
    Object.preventExtensions(bankClientMercoTy);
    Object.seal(bankClientMercoTy);

})(); //prevents a variable from being accessible in the console using anonymous function