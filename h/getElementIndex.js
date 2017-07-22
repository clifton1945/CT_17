"use strict";


module.exports = function getElementIndex(elem) { // usage: Fn(element) -> N
    let index = 0;
    while ((elem = elem.previousElementSibling)) {
        index++;
    }
    return index;
};

// NOTE this works and is similar to R.indexOf( elem, noseList) an arity:2 function
