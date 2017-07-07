
"use strict";

let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
    // , always = R.always
;

let MUTATE_ = curry(
    /**
     * ..... MUTATE_():: mutates, i.e. sets and returns, a span which has a new .style.
     * @sig  csdDCT -> ( SPAN -> SPAN )
     * @param csd
     * @param elt
     * @return {*}
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
