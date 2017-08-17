"use strict";

//  requires ---------------
let R = require('ramda')
    , curry = R.curry
;

let SRVa_byAlwaysTrnfrm = require('./SRVa_TRNFRM').by_always;

// CODE
let SRVa = R.curry(
    /**
     * NOTE  JUST A STUB TODO REFACT with parameters
     * returns a style Trnfrm_DCT typically for use in an R.evolve(DCT, CSD)
     *  NOTE: FIX for this testing the Attr: color has these values
     *      read:           red
     *      reading:        blue
     *      to read:        green
     *
     * @param vtr:      the Index of the focus Elem
     * @param ndx:      the Index of a Elem
     * @return dct:     a DCT:
     *      key: a style Attribute
     *      val: a Fn returning a style value
     * @usage: SRVa(3, 5) -> {color: R.always('green')}
     */
    (vtr, ndx) => (ndx < vtr)
        ? SRVa_byAlwaysTrnfrm('color', 'red')
        : (ndx > vtr )
            ? SRVa_byAlwaysTrnfrm('color', 'green')
            : SRVa_byAlwaysTrnfrm('color', 'blue')
);
module.exports.colorStyleTrnfrmDCT = SRVa;// Num -> Num -> {k:FN}