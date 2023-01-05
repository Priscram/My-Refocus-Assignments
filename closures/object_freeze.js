var myBankAccount = {
    user: {
        fullname: "Bruce wayne",
        age: 26,
        occupation: {
            day: "Philanthropist billionaire",
            night: "I'm Batman"
        }
    },
    multipleAccounts: true,
    accounts: [{
            money: (9999999999999999),
            currency: "EUR"
        },
        {
            money: (9999999999999999),
            currency: "USD"
        }
    ]
};

// Add a property before being frozen
myBankAccount.bankName = "Gotham Merchant Bank";

// Shows the value in the object as the property
// was created before the object has been frozen
console.log(myBankAccount.bankName);

// Freeze the object
Object.freeze(myBankAccount);
/**
 * Now the object cannot be modified, deleted written
 */
myBankAccount.flushMethod = function() {
    SendAllMoneyToJokerAccount();
};

// Will be neither deleted !
delete myBankAccount.bankName;

// Throws error, method doesn't exist.
myBankAccount.flushMethod();

// Freeze object
Object.freeze(myBankAccount);

// The user property is an object, and you didn't freeze it Too
// to solve use Object.freeze(myBankAccount.user)
myBankAccount.user.flushMethod = function() {
    SendAllMoneyToJokerAccount();
};

// Money succesfully transfered :(
// You disappoint Batman
myBankAccount.user.flushMethod();