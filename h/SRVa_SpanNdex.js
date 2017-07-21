"use strict";

let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , evolve = R.evolve
;

let isSame = function (el) {
    // return (Object.is(el, 2)) ? el : -5
    return (el === 2) ? el : -5
};

function isBigEnough(element) {
    return element >= 15;
}

let n = [1, 2, 3, 20, 40].findIndex(isBigEnough);

C_inConsole(`_N = ${n}`); // -> 4
