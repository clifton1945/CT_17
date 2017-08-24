"use strict";

//  requires ---------------
let R = require('ramda')
    , curry = R.curry
;

let SRVa_byAlwaysTrnfrm = require('./SRVa_TRNFRM').by_always;

// CODE
let SRVa = R.curry(
    /**
     * returns a Trnfrm_DCT as f(a_ndx either lt, equal or gt focus_ndx)
     * @param focus_ndx:  the Index of the focus Elem
     * @param a_ndx:      the Index of a Elem
     * @return dct:     a DCT:
     *      key: a style Attribute
     *      val: a Fn returning a style value
     *
     * @usage: SRVa(3, 5) -> {color: R.always('green')}
     *
     * NOTE  JUST A STUB TODO REFACT with parameters
     *      typically for use in an R.evolve(thisDCT, CSD)
     */
    (focus_ndx, a_ndx) => (a_ndx < focus_ndx)
        ? SRVa_byAlwaysTrnfrm('color', 'red')
        : (a_ndx > focus_ndx )
            ? SRVa_byAlwaysTrnfrm('color', 'green')
            : SRVa_byAlwaysTrnfrm('color', 'blue')
);
module.exports.colorStyleTrnfrmDCT = SRVa;// Num -> Num -> {k:FN}