/**
 * UPDATE_Elem_by_.js
 * DO NOT DELETE - the function form is good; do not loose it! 170605
 */
"use strict";

let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
;

let MUTATE_ = curry(
    /**
     * ..... MUTATE_():: mutates, i.e. sets and returns, a given Element.style.
     * SYMB  eltDCT -> (csdDCT -> eltDCT)
     *
     * @param csd  : a DICT of the new style.CSD
     * @return {*} : updated_elem
     * @param elt
     */
    (elt, csd) => {
        let _mutElt = prop => elt.style[prop] = csd[prop];

        for (let property in csd)
            if (csd.hasOwnProperty(property)) {
                _mutElt(property)
            }
        return elt
    }
);
module.exports.MUTATE_ = MUTATE_;  // (CSD) (ELEM) {Fn:MUTATE_} -> ELEM
module.exports.anElem = MUTATE_;   // (CSD) (ELEM) {Fn:MUTATE_} -> ELEM
