// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function resetCatsArray(array) {
    array.length = 0;
    array.push("Milo", "Otis", "Garfield");
    return array;
}

function destructivelyAppendCat(name) {
    const resetCats = resetCatsArray(cats);
    resetCats.push(name);
    return resetCats;
}

function destructivelyPrependCat(name) {
    const resetCats = resetCatsArray(cats);
    resetCats.unshift(name);
    return resetCats;
}

function destructivelyRemoveLastCat() {
    const resetCats = resetCatsArray(cats);
    resetCats.pop();
    return resetCats;
}

function destructivelyRemoveFirstCat() {
    const resetCats = resetCatsArray(cats);
    resetCats.shift();
    return resetCats;
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    const copyOfCatsArray = [...cats];
    return copyOfCatsArray.slice(0, 2);
}

function removeFirstCat() {
    const copyOfCatsArray = [...cats];
    return copyOfCatsArray.slice(1);
}

console.log(removeFirstCat())
// console.log(resetCatsArray(cats))
console.log(cats)
