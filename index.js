const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
};

function destructivelyPrependCat(name) {
    return cats.unshift(name);
};

function destructivelyRemoveLastCat(name) {
    return cats.pop(name);
};

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name);
};

function appendCat(name) {
    const catsAfter = [...cats, name];
    return catsAfter;
};

function prependCat(name) {
    const catsBefore = [name, ...cats];
    return catsBefore;
};

function removeLastCat() {
    return cats.slice(0, 2);
};

function removeFirstCat() {
    return cats.slice(1);
};