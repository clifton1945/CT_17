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
     * ..... MUTATE_():; DICT -> ( ELEM -> ELEM ) is the base Fn that updates EACH  Element's style.
     * SYMB: {UPDATE_byCsd} Fn:( ELEM) {UPDATE_byCsd(DICT.CSD)} ->  ELEM
     *
     * @param csd  : a DICT of the new style.CSD
     * @param elem  : a HTML Elem WITH a Style attribute
     * @return {*} : updated_elem
     */
    (csd, elem) => {
        let _mutElt = prop => elem.style[prop] = csd[prop];

        for (let property in csd)
            if (csd.hasOwnProperty(property)) {
                _mutElt(property)
            }
        return elem
    }
);

const MUTATE_allElts = curry(
    /**
     *     MUTATE_allElts :: String -> ( Elt -> Elt )
     */

    (csd, elem) => {
        let cssQueryAll = R.invoker(1, 'querySelectorAll');
        let cssQueryOne = R.invoker(1, 'querySelector');

        // Make all elts
        return R.pipe(
            cssQueryAll('.chpt > span'),
            R.map(MUTATE_(csd))
        )(elem);
    }
);
module.exports.MUTATE_allElts = MUTATE_allElts;

/**
 * //`MUTATE_ = (CSD)(ELEM) {Fn:MUTATE_} -> ELEM
 */
module.exports.UPDATE_ = MUTATE_;  // (CSD) (ELEM) {Fn:MUTATE_} -> ELEM
module.exports.UPDATE_Elem = MUTATE_;   // (CSD) (ELEM) {Fn:MUTATE_} -> ELEM
module.exports._byCsd = curry(csd => MUTATE_(csd));                          //(CSD) {Fn:MUTATE_((ELEM))} -> ELEM
module.exports._byElem = curry(el => MUTATE_(R.__, el));                          // (ELEM) {Fn:MUTATE_((CSD))} -> ELEM


let EVOLVE_aStyle = require('../../SSpc/src/EVOLVE_Style')._use_TrnfrmD_on_DfltCsd;
let _byStyleTrnfrm = pipe(EVOLVE_aStyle, MUTATE_);
module.exports._byStyleTrnfrm = _byStyleTrnfrm;