function makeBag(name) {
    function getNotebook() {
        return "get notebook of " + name;
    }
    return getNotebook
}
const bagOfMarc = makeBag("Marc");
console.log(typeof makeBag);
console.log(bagOfMarc());