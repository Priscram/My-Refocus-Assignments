let invoiceList = [
    "invoice 008",
    "invoice 007",
    "invoice 006",
    "invoice 005"
];

let str = "invoice";
let i = invoiceList.indexOf();
let numStr = invoiceList[i = 0].substring(8, 11);
//console.log(numStr);
let invoiceNum = str + numStr;
const num = numStr.substring(0, 4); // using string method substring
invoiceNum = str + " " + numStr[0] + numStr[1] + numStr[2]; // using string method square brackets
const checkInvNum = invoiceNum.substring(8, 11);
const addIn = numStr.replace(numStr, numStr++);

//console.log(num);
//console.log(invoiceNum);
const invoiceNumLessThanFive = invoiceList.find(insertToBottom);

function insertToBottom(invoiceNum) {
    let empty = [];
    if (invoiceNum[10] < 5) {
        let seq = invoiceList.push(invoiceNum);
        console.log(invoiceList.join(" "));
        return seq;
    } else if (invoiceNum[10] >= 5) {
        insertToBottom(num === null);
        return false;
    } else if ((invoiceList === empty) || (checkInvNum === 000)) {
        let changeArrContent = str + addIn;
        invoiceList.push(changeArrContent);
        return addIn;
    }
    return insertToBottom
}

insertToBottom("invoice 004");
insertToBottom("invoice 003");
insertToBottom("invoice 002");
insertToBottom("invoice 001");

function reverseList() {
    //console.log(invoiceList.reverse());
    if (numStr > invoiceList[i = 1].substring(8, 11)) {
        //invoiceList.push("invoice 004");
        //invoiceList.push("invoice 003");
        //invoiceList.push("invoice 002");
        //invoiceList.push("invoice 001");
        console.log(invoiceList.reverse().join(" "));
    } else if (numStr < invoiceList[i = 1].substring(8, 11)) {

        console.log(invoiceList.reverse().join(" "));

    }
    return reverseList
}


//console.log(invoiceList.join(" "));
reverseList();