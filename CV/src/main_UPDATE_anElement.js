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
     * ..... UPDATE_ElemStyle:: OBJ.propertyCSD -> ( ELEM.elem -> ELEM.style.propertyCSD )
     * @param propertyCSD
     * @param elem
     * @return Fn:  ELEM.style.propertyCS
     */
    (propertyCSD, elem) => {
        for (let property in propertyCSD)
            elem.style[property] = propertyCSD[property];
    }
);

module.exports.UPDATE_ElemStyle = UPDATE_ElemStyle;
