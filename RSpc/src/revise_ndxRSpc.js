/**
 * revise_ndxRSpc
 */
"use strict";

let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , always = R.always
;
const revise_ndxRSpc = curry(
    /**
     * Fn .... revise_ndxRSpc::  DCT -> ( N -> N )
     *
     * this function TRANSFORMS a CSpc index INO a RScp index.
     *  it REQUIRES, in addition, the current RSpc SizeDCT
     *      which typically is partialled.
     *
     * @param dct:  sizesDct in RSpc: e.g.{pst: 2, cur: 1, fut: 2}
     * @param ndx:  an Element's Index in CSpc
     * @return {number} : this Elements Index in RSpc
     *
     * // USAGE:
     * let revise_ndxRSpc = require('...path/revise_ndxRSpc')( sizeDCT );
     *
     * // IF NEEDED THEN
     * let REVISED_ndxRSpc = revise_ndxRSpc( ndxCSpc );
     *
     * NOTE: this Fn is a special case where the current ReadSpace Size is always just 1.
     */
    function (dct, ndx) {//  DICT -> ( N -> N)
        let pst = dct.pst;
        return (ndx < 0) ? -9999 :
            (ndx < pst) ? ndx :
                (ndx === pst) ? 0 :
                    (ndx < (pst + 1 + dct.fut)) ? ndx - pst - 1 :
                        9999
    } // DCT.sizesDct -> ( N.ndxInCSpc -> N.ndxInRSpc )
);

module.exports = revise_ndxRSpc; // DCT.sizesDct -> ( N.ndxInCSpc -> N.ndxInRSpc )