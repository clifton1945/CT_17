/**
 CV/src/main_updateElementStyle
 */
"use strict";

let R = require('ramda')
// , pipe = R.pipe
// , compose = R.compose
//     , map = R.map
    , curry = R.curry
;

let updateStyle = curry(
    /**
     * ..... updateStyle:: OBJ.propertyCSD -> ( ELEM.el -> ELEM.el w/ new style.propertyCSD )
     * @param propertyCSD
     * @param elem
     * @return Fn:  ELEM.style.propertyCS
     */
    (propertyCSD, elem) => {
        for (let property in propertyCSD)
            elem.style[property] = propertyCSD[property];
    }
);// OBJ.propertyCSD -> ( ELEM.el -> ELEM.el  w/ new style.propertyCSD )

let updateElementStyle = curry(
    /**
     * ..... updateElementStyle:: ( ELEM.elem -> ELEM.style.propertyCSD )
     * @param elem
     * @return ELEM
     */
    elem => updateStyle(elem)
);//  ELEM.elem -> ELEM.style


module.exports.UPDATE_ElemStyle = updateStyle;
module.exports.UPDATE_ElemStyle = updateElementStyle;
