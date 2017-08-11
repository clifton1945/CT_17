"use strict";

let R = require('ramda')
    , curry = R.curry
;
let SRVa = R.curry(
    /**
     * NOTE  JUST A STUB TODO exand with parameters
     * returns a style Trnfrm_DCT typically for use in an R.evolve(DCT, CSD)
     *  NOTE: FIX for this testing the Attr: color has these values
     *      read:           red
     *      reading:        green
     *      to read:        blue
     * @param vtr:      the Index of the focus Elem
     * @param ndx:      the Index of a Elem
     * @return dct:     a DCT:
     *      key: a style Attribute
     *      val: a Fn returning a style value
     */
    (vtr, ndx) => (ndx < vtr)
        ? {color: R.always('red')}
        : (ndx > vtr )
            ? {color: R.always('green')}
            : {color: R.always('blue')}
);
module.exports.colorStyleTrnfrmDCT = SRVa;