function myMainFunction(status) {
    if (status <= 0) {
        console.log(true);
        return true;
    } else {
        return myMainFunction(status - 1);

    }
}
myMainFunction(10);