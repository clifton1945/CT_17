/**
 * UPDATE_Elem_by_.js
 * DO NOT DELETE - the function form is good; do not loose it! 170605
 */
"use strict";

let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
;
let UPDATE_ = curry(
    /**
     * ..... UPDATE_():; DICT -> ELEM -> ELEM is the base Fn that updates EACH  Element's style.
     * SYMB: {UPDATE_byCsd} Fn:( ELEM) {UPDATE_byCsd(DICT.CSD)} ->  ELEM
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
module.exports.UPDATE_ = UPDATE_;  // (CSD) (ELEM) {Fn:UPDATE_} -> ELEM
module.exports.UPDATE_Elem = UPDATE_;   // (CSD) (ELEM) {Fn:UPDATE_} -> ELEM
module.exports._byCsd = curry(csd => UPDATE_(csd));                          //(CSD) {Fn:UPDATE_((ELEM))} -> ELEM
module.exports._byElem = curry(el => UPDATE_(R.__, el));                          // (ELEM) {Fn:UPDATE_((CSD))} -> ELEM

let STUB_CSD = {"opacity": "0.5", "backgroundColor": "blue"};

let _byTrnfrm = curry(UPDATE_(STUB_CSD, R.__));
module.exports._byTrnfrm = _byTrnfrm;

let EVOLVE_aStyle = require('../../SSpc/src/EVOLVE_Style')._frmDfltCSD;
let _byStyleTrnfrm = pipe(EVOLVE_aStyle, UPDATE_);
module.exports._byStyleTrnfrm = _byStyleTrnfrm;