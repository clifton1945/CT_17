/**
 * UPDATE_Element_test
 * DO NOT DELETE - the function form is good; do not loose it! 170605
 */
"use strict";

let R = require('ramda')
    , curry = R.curry
;

/**
 *
 */
let UPDATE_ = curry(
    /**
     * ..... UPDATE_():; DICT -> ELEM -> ELEM is the base Fn that updates an Element.style.
     *  PARTIALED w/ a DICT.CSD make this into UPDATE_Elem:: -> ELEM -> ELEM
     * @param a_csd : DICT of the new style.CSD
     * @param elem  : a HTML Elem WITH a Style attribute
     * @return {*} : updated_elem
     */
    (a_csd, elem) => {
        for (let property in a_csd)
            elem.style[property] = a_csd[property];
        return elem
        //* now DEPRECATED -   BIG NOTE the UPDATE_ Fn REQUIRES I USE 'var' NOT 'let' TO WORK
    }
);
module.exports = UPDATE_; //@sig: DICT.CSD -> ELEM -> ELEM
module.exports.anElem = curry(csd => UPDATE_(csd, R.__)); // DICT.CSD -> Fn( ELEM -> ELEM )
