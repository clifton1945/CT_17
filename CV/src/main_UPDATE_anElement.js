/**
 CV/src/main_UPDATE_anElement
 */
"use strict";

let R = require('ramda')
// , pipe = R.pipe
// , compose = R.compose
    , map = R.map
    , curry = R.curry
;

let UPDATE_anElement = curry(
    /**
     *
     * @param elem
     * @param propertyObject
     */
    (elem, propertyObject) => {
        for (let property in propertyObject)
            elem.style[property] = propertyObject[property];
    }
);

module.exports.UPDATE = UPDATE_anElement;
