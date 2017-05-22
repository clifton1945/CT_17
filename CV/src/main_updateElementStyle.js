/**
 CV/src/main_updateElementStyle_test
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
     * @param propertyCSD:   IS AN OBJECT of form {"op":"0.5", "bgColor":"green"}
     * @param elem: IS an Obj WITH a style Attribute.
     * @return Fn:  ELEM.style.propertyCS
     *
     * BIG NOTE the updateStyle Fn REQUIRES I USE 'var' NOT 'let' TO WORK
     */
    (propertyCSD, elem) => {
        for (var property in propertyCSD)
            elem.style[property] = propertyCSD[property];
        return elem
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


module.exports.updateStyle = updateStyle;
module.exports.updateElemStyle = updateElementStyle;
