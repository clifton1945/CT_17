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

const SpanStyl_MUTATOR = curry(/**
     *     SpanStyl_MUTATOR :: String -> ( Elt -> Elt )
     */
    (csd, elem) => {
        // let cssQueryAll = R.invoker(1, 'querySelectorAll');
        let cssQueryOne = R.invoker(1, 'querySelector');
    let SpanStyl_MUTATOR = require('UPDATE_Elem');

        // Make all elts
        return R.pipe(
            cssQueryOne('.chpt > span'),
            R.map(MUTATE_(csd))
        )(elem);
    }
);
module.exports.MUTATE_allElts = SpanStyl_MUTATOR;

/**
 * //`MUTATE_ = (CSD)(ELEM) {Fn:MUTATE_} -> ELEM
 */
module.exports.MUTATE_ = MUTATE_;  // (CSD) (ELEM) {Fn:MUTATE_} -> ELEM
// NAMED UPDATE_
module.exports.UPDATE_ = MUTATE_;  // (CSD) (ELEM) {Fn:MUTATE_} -> ELEM
module.exports.UPDATE_Elem = MUTATE_;// (CSD) (ELEM) {Fn:MUTATE_} -> ELEM
module.exports._byCsd = curry(csd => MUTATE_(csd));                          //(CSD) {Fn:MUTATE_((ELEM))} -> ELEM
module.exports._byElem = curry(el => MUTATE_(R.__, el));                          // (ELEM) {Fn:MUTATE_((CSD))} -> ELEM


let EVOLVE_aStyle = require('../SSpc/src/EVOLVEa_Csd')._use_TrnfrmD_on_DfltCsd;
let _byStyleTrnfrm = pipe(EVOLVE_aStyle, MUTATE_);
module.exports._byStyleTrnfrm = _byStyleTrnfrm;