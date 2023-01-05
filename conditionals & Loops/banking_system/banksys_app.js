const bankAccount = {
    bankAccountId: (Math.random() * 1000000).toFixed(0),
    accountNumber: '',
    credentials: {
        username: "JaysyN4",
        password: "qJSDexA24",
        pin: 341269
    },
    balance: [],
    createdAt: "Jan 7 2021 09:04:00 AM",
};
const userAccount = {
    bankAccount,
    debitCard: '241-12345-234567',
    firstName: '',
    lastName: '',
    birthDate: '',
    validId: {
        passport: [
            "yes", "no"
        ],
        passportNum: "",
        driverLicense: [
            "yes", "no"
        ],
        driverLicenseNum: ""
    },

    address: ""

};
const transRecord = {
    transType: {
        withdrawal: {
            dateWithdrawn: ['Jan 14 2021', 'Jan 21, 2021', 'Jan 28, 2021'],
            amountWithdrawn: [1000, 300000, 200000]
        },
        deposit: {

            dateDeposited: ['Jan 7 2021 09:04:00 AM', 'Jan 11 2021 09:45:00 AM', 'Jan 15 2021 01:30:02 PM'],
            amountDeposited: [10000, 500000, 750000]
        },
        dateBalanceInquired: {
            withdrawalUpdate: ["yes", "no"],
            depositUpdate: ["yes", "no"],
            inquiryIntent: ["yes", "no"],
            dateBalUpdated: ['Jan 7 2021 09:04:00 AM', 'Jan 11 2021 09:45:00 AM', 'Jan 14 2021 02:10:00 PM', 'Jan 15 2021 01:30:02 PM', 'Jan 21 2021 03:00:08 PM', 'Jan 28 2021 02:43:01 PM']
        }
    }
}

const dateViewTransactions = [];

let str = "\u20B1";
let strHtml = "this includes<a> html in</a> in <strong>here</strong>.";
let openAccount = 10000;
let balance = 0 + openAccount;
let bankName = "Bank of Bankers";
let dateOpenned = new Date(transRecord.transType.deposit.dateDeposited[0]);
let timeStamp = dateOpenned.getTime();
let transDate = new Date();
//dateStamp = Math.floor(Math.ceil(timeStamp / 1000 * 3600 * 24));
var elapsed = Math.floor(Math.ceil((transDate.getTime() - dateOpenned.getTime()) / (1000 * 60 * 60 * 24)));
let i = transRecord.transType.deposit.dateDeposited.indexOf();
let date = new Date(transRecord.transType.deposit.dateDeposited[i]);
let daysElapsed = (dateOpenned, transDate) => {
    for (let i = 0; i < elapsed; i++) {
        let dayNameDateOpenned = dateOpenned.getDay();
        let dayNameTransDate = transDate.getDay();
        if (elapsed == 1) {
            console.log(`Deposited on account `)
        }
        if (dayNameTransDate == 0) {
            console.log(`We won\'t accept deposit during Sundays`);
            break;
        } else if (dayNameTransDate == 6) {
            console.log(`We won\'t accept  deposit during Saturdays`);
            break;
        } else if (dayNameTransDate == 1) {
            console.log(`Today is Monday, we will accept deposits`);
            break;
        } else if (dayNameTransDate == 2) {
            console.log(`today is Tuesday, we will accept deposits`);
            break;
        } else if (dayNameTransDate == 3) {
            console.log(`Today is Wednesday, we will accept deposits`);
            break;
        } else if (dayNameTransDate == 4) {
            console.log(`Today is Thursday, we will accept deposits`);
            break;
        } else if (dayNameTransDate == 5) {
            console.log(`Today is Friday, we will accept deposits`);
            break;
        }
    }
    return `Account openned for the past ${elapsed} days since ${dateOpenned}`;
}

function createBankAccount(firstName, lastName, birthDate, address, accountNumber) {


    console.log(bankName);
    strHtml = firstName;
    firstName = firstName.replace(/(<([^>]+)>)/gi, "");
    userAccount.firstName = firstName;
    strHtml = lastName;
    lastName = lastName.replace(/(<([^>]+)>)/gi, "");
    userAccount.lastName = lastName;
    let fullname = (`${firstName} ${lastName}`);
    userAccount.birthDate = birthDate;
    strHtml = address;
    address = address.toString().replace(/(<([^>]+)>)/gi, "");
    userAccount.address = address;
    strHtml = accountNumber;
    bankAccount.accountNumber = accountNumber;
    console.log(`Welcome  to  ${bankName} ${fullname}`);
    console.log(`Your account is now activated`);
    console.log(`Initial deposit:   ${str} ${openAccount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);


    function uploadDocuments(validId, passport, driverLicense, passportNum, driverLicenseNum) {
        console.log(`Documents Submitted`);
        if (driverLicense == "yes") {
            console.log(`Driver License is submitted`);

        } else if (driverLicense != "yes") {
            console.log(`Driver License is not submitted`);
        } else if (passport == "yes") {
            console.log(`Passport is submitted`);
        } else if (passport != "yes") {
            console.log(`Passport is not submitted`);
        } else if ((driverLicense == "yes") && (passport == "yes")) {
            console.log(`Both Passport and Driver License are submitted`);
        } else {
            console.log(`I can\'t read your documents`);
        }
        //GETTING RID OF HTML INPUTS
        strHtml = validId;
        validId = validId.toString().replace(/(<([^>]+)>)/gi, "").replace(/\B(?=(\d{3})+(?!\d))/g, "");
        userAccount.validId = validId;
        //checking html input 
        //console.log(validId);//valId with html input will be stripped out
        strHtml = driverLicenseNum;
        driverLicenseNum = driverLicenseNum.toString().replace(/(<([^>]+)>)/gi, ""); //.replace(/\B(?=(\d{3})+(?!\d))/g, "");
        userAccount.validId.driverLicenseNum = driverLicenseNum;
        console.log(`Your driver license number is ${driverLicenseNum}`);

        //Only saves in the console not in the object
        let p = passportSubmit(passportNum);
        let d = driverLicenseSubmit(driverLicenseNum);

        function passportSubmit(p) {
            if (strHtml = passportNum) {
                userAccount.validId.passportNum = passportNum;
                return passportNum.toString().replace(/(<([^>]+)>)/gi, "").replace(/\B(?=(\d{3})+(?!\d))/g, "");
            } else if (passport != "yes") {
                console.log(`Valid ID presented is not passport`);
            }
            console.log(`Passport Number:   ${passportSubmit()}`); //returns value of driverLicenseNum

        }
        console.log(`Passport Number:   ${passportSubmit()}`); //returns value of passportNum
        function driverLicenseSubmit(d) {
            if (strHtml = driverLicenseNum) {
                userAccount.validId.driverLicenseNum = driverLicenseNum;
                return driverLicenseNum.toString().replace(/(<([^>]+)>)/gi, "").replace(/\B(?=(\d{3})+(?!\d))/g, "");

            } else if (driverLicense != "yes") {
                console.log(`Valid ID presented is not Driver License`);

            }
            console.log(`Driver License Number:   ${driverLicenseSubmit()}`); //returns value of driverLicenseNum

        }


    }

    function getBankAccountDetails(username, password) {

        // STRING WITH HTML IN IT
        strHtml = username;
        username = username.toString().replace(/(<([^>]+)>)/gi, "");
        var usernameSanitized = username;
        strHtml = password;
        password = password.toString().replace(/(<([^>]+)>)/gi, "");
        var passwordSanitized = password;

        if (username != bankAccount.credentials.username) {
            console.log(`Our system doesn\'t recognize your username: ${username}`);
            console.log(bankAccount.credentials.username);
            return false;
        } else if (username == bankAccount.credentials.username) {
            console.log(`Username accepted`);

        }
        if (password != bankAccount.credentials.password) {
            console.log(`Our system doesn\'t recognize your password: ${password}`);
            return false;
        } else if (password == bankAccount.credentials.password) {
            console.log(`Password accepted`);

        }
        //username verification
        if (usernameSanitized == "") {
            console.log(`please fill the username`);
            return false;

        } else if (usernameSanitized.length > 8) {
            console.log(`username must be not more than 8 alpha numeric characters`);
            return false;
        } else if (usernameSanitized.length > 18) {
            console.log(`username must not be more than 18 alpha numeric characters long`);
            return false;
        }
        //password validation
        if (passwordSanitized == "") {
            console.log(`password can not be empty`);
            return false;
        } else if (passwordSanitized.length < 8) {
            console.log(`password can not be less than 8 alpha numeric characters long`);
            return false;
        } else if (passwordSanitized.length > 18) {
            console.log(`password can not be more than 18 alpha numeric characters long `);
            return false;
        }
        //Login verification
        if ((usernameSanitized != usernameSanitized) || (passwordSanitized != passwordSanitized)) {
            console.log(`Something is wrong please try again`);
            return false;

        } else if ((usernameSanitized === usernameSanitized) && (passwordSanitized === passwordSanitized)) {
            bankAccount.balance.push(balance);
            console.log(`Access Granted To Your Bank Account Details`);

            console.log(daysElapsed(dateOpenned, transDate));
            console.log(`Account ID         : ${bankAccount.bankAccountId}`);
            console.log(`Account Number     : ${bankAccount.accountNumber}`);
            console.log(`Debit Card Number  : ${userAccount.debitCard}`);
            console.log(`Pin                : ${bankAccount.credentials.pin}`);
            console.log(`Account Balance    : ${str}${bankAccount.balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);
            console.log(`Time Created       : ${bankAccount.createdAt}`);

        }

    }


    function withdrawMoney(amount, accountNumber) {
        console.log(`We record transactions on actual time based on user actions`);
        console.log(`You may click view transactions if you want to view more of your account\'s activity`);
        bankAccount.accountNumber = accountNumber;
        let withdrawal = amount;
        balance = balance - withdrawal;
        date = new Date(transRecord.transType.withdrawal.dateWithdrawn[i]);
        if ((balance != withdrawal) && (withdrawal = true && balance < withdrawal)) {
            console.log('You can not withdraw more than your funds');

            console.log(bankAccount.accountNumber);
        } else if ((balance != 0) && (withdrawal = true && balance > withdrawal)) {
            console.log(`Withdrawal: ${str} ${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}   Date: ${transDate.getHours() + ":" + transDate.getMinutes() + ":" + transDate.getSeconds() + " " + transDate.toDateString()}`);
            transRecord.transType.withdrawal.amountWithdrawn.push(amount);
            transRecord.transType.withdrawal.dateWithdrawn.push(transDate.getHours() + ":" + transDate.getMinutes() + ":" + transDate.getSeconds() + " " + transDate.toDateString());
            let dW = transRecord.transType.withdrawal.dateWithdrawn;
            // console.log(dW);




        }

        return balance;

    }


    function depositMoney(amount, accountNumber) {
        additionalDeposit = amount;
        balance = balance + additionalDeposit;
        for (instance of transRecord.transType.deposit.dateDeposited) {
            date = new Date(transRecord.transType.deposit.dateDeposited[i]);
            if (accountNumber != accountNumber) {
                console.log("Account number is incorrect");
                return false;
            } else if (accountNumber == accountNumber) {
                transRecord.transType.deposit.dateDeposited.push(transDate);
                transRecord.transType.dateBalanceInquired.depositUpdate.push("yes");
                transRecord.transType.dateBalanceInquired.dateBalUpdated.push(transDate);
                transRecord.transType.deposit.amountDeposited.push(additionalDeposit);
                console.log('Thank you, Mr. ' + fullname + ' you\'ve made an additional deposit of ' + str + additionalDeposit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                console.log('New balance: ' + str + balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                //console.log(` ${str} ${transRecord.transType.deposit.amountDeposited}`); //checks arrays update on deposits
                //console.log(`${transRecord.transType.deposit.dateDeposited}`); //checks arrays update on dates of deposits
                if (date != transRecord.transType.deposit.dateDeposited[i])
                    i = transRecord.transType.deposit.dateDeposited.indexOf()
                transRecord.transType.deposit.dateDeposited[i] = transDate;
                console.log(`Transaction Date: ${transRecord.transType.deposit.dateDeposited[i]}`);
            }
            return date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "AM " + date.toDateString();
        }
        return balance;



    }

    function checkBalance(withdrawAmount, depositAmount) {

        if (balance < openAccount) {
            console.log("Your account is below maintaining balance");
            console.log(`Current Balance: ${str} ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }`);
            console.log(`Date Inquired: ${Date(transDate)}`);
            return false;
        } else if (balance > openAccount) {
            console.log(`Current Balance: ${str} ${balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }`);
            console.log(`Date Inquired: ${Date(transDate)}`);
            return true;
        }
    }

    function viewTransactions(pin, date) {

        let dateInquired = dateOpenned;
        dateInquired = date;
        date = new Date(date);

        let aW = transRecord.transType.withdrawal.amountWithdrawn;
        let dW = transRecord.transType.withdrawal.dateWithdrawn;
        let aD = transRecord.transType.deposit.amountDeposited;
        let dD = transRecord.transType.deposit.dateDeposited;

        console.log(`ACCOUNT ACTIVITY SECTION`);

        let iterator = aW.values();
        for (let elements of iterator) {

            console.log(`Amount of Withdrawal: ${str} ${elements.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);

        }

        iterator = dW.values();
        for (let elements of iterator) {


            console.log(`Date of Withdrawal: ${elements}`);

        }
        iterator = aD.values();
        for (let elements of iterator) {


            console.log(`Amount of Deposit: ${str} ${elements.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`);

        }

        iterator = dD.values();
        for (let elements of iterator) {


            console.log(`Date of Deposit: ${elements}`);

        }

        /*
                if (date != elements) {
                    console.log(`We don\'t have such date in your records`);
                    break;

                } else if (pin != pin) {
                    console.log(`Sorry you have incorrect pin`);
                    break;
                } else if (pin == pin) {
                    console.log(`Account Statement of ${fullname}`);

                    transRecord.transType.deposit.amountDeposited.forEach(element => {
                        console.log(`Deposits:${element}`);

                    });
                    transRecord.transType.deposit.dateDeposited.forEach(element => {
                        console.log(`Date of deposit:${element}`);
                    });
                    transRecord.transType.withdrawal.amountWithdrawn.forEach(element => {
                        console.log(`Amount of withdrawal: ${element}`);
                    });
                    transRecord.transType.withdrawal.dateWithdrawn.forEach(element => {
                        console.log(`Date of withdrawal: ${element}`);
                    });
                }
                break;

                */

        return date;

    }











    return {
        uploadDocuments,
        getBankAccountDetails,
        withdrawMoney,
        depositMoney,
        checkBalance,
        viewTransactions
    }

}

const clientregistered = createBankAccount('Jay<a></a>son', 'Le<a>e', 12 - 04 - 1989, "Calumpang, General Santos City", 4341780432, );
clientregistered.uploadDocuments("dr<a>iver lic</a>ense", "no", "yes", "none", "Lq743-347-1345");
clientregistered.getBankAccountDetails("JaysyN4", "qJSDexA24");
clientregistered.withdrawMoney(1000, 4341780432);
clientregistered.depositMoney(700000, 4341780432);
clientregistered.withdrawMoney(5000, 4341780432);
clientregistered.checkBalance(); // if can withdraw then checks balance
clientregistered.viewTransactions(341269, 'Jan 11 2021 09:45:00 AM') //correct pin reveals history of deposits and withdrawals