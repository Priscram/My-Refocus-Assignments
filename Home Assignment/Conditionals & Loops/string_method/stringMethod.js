let news1 = "there is a storm coming to the East of the Philippines";
let news = news1;
let news2 = "no more rainy days here, sun is about to show up";
//news = news2;

function checkFirstUppercaseLetter(news) {
    let length = news.length;
    for (let i = 0; i < length; i++) {
        news = news1;
        let uppercaseMatch = news.match(/[A-Z]/g);
        if (uppercaseMatch !== null) {
            console.log(uppercaseMatch[0]);
            //console.log(`Climate is stormy`);
            break;
        } else if (uppercaseMatch === null) {
            console.log(news2); //if news1 has no uppercase news2 comes in
            break;
        }
    }
    // for (let i = 0; i < length; i++) {
    //     news = news2;
    //     let uppercaseMatch = news.match(/[A-Z]/g);
    //     if (uppercaseMatch === null) {
    //         console.log(news2);
    //         //console.log(`Climate is sunny`);
    //     }
    //     break;
    // }
}

checkFirstUppercaseLetter(news);