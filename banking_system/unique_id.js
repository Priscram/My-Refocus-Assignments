let firstName = "";

function uniqueId(firstName) {
    firstName = firstName + "_" + firstName;
    const firstItem = {
        value: "0"
    };
    /*length can be increased for lists with more items.*/

    let counter = firstName.split('')
        .reduce((acc, curValue, curIndex, arr) => {
            const curObj = {};
            curObj.value = curValue;
            curObj.prev = acc;

            return curObj;
        }, firstItem);
    firstItem.prev = counter;

    return function() {
        let now = Date.now();
        if (typeof performance === "object" && typeof performance.now === "function") {
            now = performance.now().toString().replace('.', '');
        }
        counter = counter.prev;
        return `${now}${Math.random().toString(16)}${counter.value}`;
    }
}

const randomIdGenerator = uniqueId("Rey.");

randomIdGenerator(); // 3519936476425aaa4f2a048 
randomIdGenerator(); // 3519936472474f1e8119427
randomIdGenerator(); // 35199364800000017a40a2d1eaa226