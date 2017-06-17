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
        let mutElt = prop => elem.style[prop] = a_csd[prop];
        for (let property in a_csd)
            if (a_csd.hasOwnProperty(property)) {
                mutElt(property)
            }
        return elem
    }
);

const mutateElt = curry( // this is a TEST STUB
    doc => {
// Get all descendants that match selector
// Note: NodeList is array-like so you can run ramda list functions on it.
//  cssQuery :: String -> Node -> NodeList
        let cssQuery = R.invoker(1, 'querySelectorAll');

// Mutate style properties on an element
//  setStyle :: String -> String -> Element -> Element
        let setStyle = R.assoc('style');

// Make all paragraphs red
        R.pipe(
            cssQuery('.chpt > span'),
            R.map(setStyle(
                {color: 'red'}))
        )(doc)
    }
);
module.exports.mutateElt = mutateElt;

/**
 * //`UPDATE_ = (CSD)(ELEM) {Fn:UPDATE_} -> ELEM
 */
module.exports.UPDATE_ = UPDATE_;  // (CSD) (ELEM) {Fn:UPDATE_} -> ELEM
module.exports.UPDATE_Elem = UPDATE_;   // (CSD) (ELEM) {Fn:UPDATE_} -> ELEM
module.exports._byCsd = curry(csd => UPDATE_(csd));                          //(CSD) {Fn:UPDATE_((ELEM))} -> ELEM
module.exports._byElem = curry(el => UPDATE_(R.__, el));                          // (ELEM) {Fn:UPDATE_((CSD))} -> ELEM

// let STUB_CSD = {"opacity": "0.5", "backgroundColor": "blue"};
//
// let _byTrnfrm = curry(UPDATE_(STUB_CSD, R.__));
// module.exports._byTrnfrm = _byTrnfrm;

let EVOLVE_aStyle = require('../../SSpc/src/EVOLVE_Style')._use_TrnfrmD_on_DfltCsd;
let _byStyleTrnfrm = pipe(EVOLVE_aStyle, UPDATE_);
module.exports._byStyleTrnfrm = _byStyleTrnfrm;