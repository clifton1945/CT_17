/**
 * UPDATE_Elem_by_.js
 * DO NOT DELETE - the function form is good; do not loose it! 170605
 */
"use strict";

let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
    // , always = R.always
;

let MUTATE_ = curry(
    (csd, elt) => {
        /**
         * ..... MUTATE_():: mutates, i.e. sets and returns, a mutated span.style.
         * @sig  SPAN -> ( csdDCT -> SPAN )
         * @param csd  : a new style.CSD
         * @param elt  : a html.span
         * @return {*} : updated_elem
         * @usage Fn(csd) -> Fn:(elt -> elt )
         *
         */
        let _mutElt = prop => elt.style[prop] = csd[prop];

        for (let property in csd)
            if (csd.hasOwnProperty(property)) {
                _mutElt(property)
            }
        return elt
    }
);
module.exports.byElem = R.flip(MUTATE_);   // (ELEM)-> ( CSD ->  ELEM )
module.exports.byCsd = pipe(R.identity, MUTATE_);    // CSD -> ( ELEM -> ELEM )

//module.exports.MUTATE_ = pipe(MUTATE_);     // CSD -> ( ELEM -> ELEM )
