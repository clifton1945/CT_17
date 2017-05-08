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

let UPDATE_ElemStyle = curry(
    /**
     * ..... UPDATE_ElemStyle: (ELEM -> OBJ.old) -> OBJ.new
     * @param propertyObject
     * @param elem
     * @return new propertyObject
     */
    (propertyObject, elem) => {
        for (let property in propertyObject)
            elem.style[property] = propertyObject[property];
    }
);

module.exports.UPDATE_ElemStyle = UPDATE_ElemStyle;
