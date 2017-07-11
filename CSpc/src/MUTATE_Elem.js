
"use strict";

let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
    // , always = R.always
;
let MUTATE_ = curry(
    /**
     * ..... MUTATE_:: mutates [sets and returns], a span, typically because its style CSD is new.
     * This is an arity:2 version.
     * @sig  csdDCT -> ( SPAN -> SPAN )
     *
     * @param csd
     * @param elt
     * @return {*}
     *
     * The MUTATE_frmCsdDCT arity:1 form is MUTATE_(a_csd) useful in iterating all verse spans.
     */
    (csd, elt) => {

        let _mutElt = prop => elt.style[prop] = csd[prop];

        for (let property in csd)
            if (csd.hasOwnProperty(property)) {
                _mutElt(property)
            }
        return elt
    }
);
module.exports.MUTATE_ = pipe(MUTATE_);             // CSD -> ( ELEM -> ELEM )

module.exports.byElem = R.flip(MUTATE_);            // (ELEM)-> ( CSD ->  ELEM )
