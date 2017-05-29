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
     *  it REQUIRES, in addition to CSpc index, the current RSpc SizesDCT
     *      which typically is partialled.
     *
     * @param dct:  sizesDct in RSpc: e.g.{pst: 2, cur: 1, fut: 2}
     * @param ndx:  an Element's Index in CSpc: e.g. 3
     * @return {number} : this Elements Index in RSpc: e.g. 0
     *
     * // USAGE:
     * let revise = require('...path/revise_ndxRSpc');//  DCT -> ( N -> N )
     * let revise_ndxRSpc = revise( sizeDCT );//  DCT -> ( N -> N )
     *
     * // IF NEEDED THEN
     * let REVISED_ndxRSpc = revise_ndxRSpc( ndxCSpc ); // ( N -> N )
     *
     */
    function (dct, ndx) {//  DICT -> ( N -> N )
        //NOTE: this Fn is a special case where the current ReadSpace Size is always just 1.
        let pst = dct.pst;
        return (ndx < 0) ? -9999 :
            (ndx < pst) ? ndx :
                (ndx === pst) ? 0 :
                    (ndx < (pst + 1 + dct.fut)) ? ndx - pst - 1 :
                        9999
    } // DCT.sizesDct -> ( N.ndxInCSpc -> N.ndxInRSpc )
);

module.exports = revise_ndxRSpc; // DCT.sizesDct -> ( N.ndxInCSpc -> N.ndxInRSpc )