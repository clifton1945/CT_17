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
     * ..... UPDATE_():; DICT -> ELEM -> ELEM is the base Fn that updates EACH  Element's style.
     * SYMB: {UPDATE_anElem} Fn:( ELEM) {UPDATE_anElem(DICT.CSD)} ->  ELEM
     *
     * @param a_csd  : a DICT of the new style.CSD
     * @param elem  : a HTML Elem WITH a Style attribute
     * @return {*} : updated_elem
     */
    (a_csd, elem) => {
        for (let property in a_csd)
            elem.style[property] = a_csd[property];
        return elem
    }
);

/**
 * //`UPDATE_ = (CSD)(ELEM) {Fn:UPDATE_} -> ELEM
 */
module.exports = UPDATE_;   // (CSD) (ELEM) {Fn:UPDATE_} -> ELEM

module.exports.anElem = curry(
    csd => UPDATE_(csd)
);                          //(CSD) {Fn:UPDATE_((ELEM))} -> ELEM
module.exports.byCSD = curry(
    el => UPDATE_(R.__, el)
);                          // (CSD) {Fn:UPDATE_((ELEM))} -> ELEM
