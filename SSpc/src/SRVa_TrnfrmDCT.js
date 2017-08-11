"use strict";

let R = require('ramda')
    , curry = R.curry
;
let srva_TrnfrmDCT = R.curry(
    /**
     * NOTE  JUST A STUB TODO exand with parameters
     * returns a style Trnfrm_DCT typicaly for use in an R.evolve(DCT, CSD)
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
module.exports.colorStyleTrnfrmDCT = srva_TrnfrmDCT;