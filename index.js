function receivesAFunction(callback) {
    return callback();
}


function returnsANamedFunction() {
    const namedFunction = function x() {return "I figured it out"};
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return a => a * a;
}

console.log(returnsAnAnonymousFunction());
console.log(returnsANamedFunction());