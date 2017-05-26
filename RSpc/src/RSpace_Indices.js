/**
 *RSpace_Indices
 */
"use strict";
let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , always = R.always
;
const RSpcNdx = curry(// TODO name change to ndxInRSpc_From_ndxInCSpc
    /**
     *  Fn: RSpcNdx  RETURNS -> NdxInRSpc, <- FROM NdxInCSpc
     *
     * @param obj:  RSpc Size Object: e.g.{pst: 2, cur: 1, fut: 2}
     * @param ndx:  Element Index in CSpc
     * @return {number} : this Element Index in RSpc
     *
     *  NOTE: this is a special case because the current ReadSpace Size is always just 1.
     */
    function (obj, ndx) {
        let pst = obj.pst;
        return (ndx < 0) ? -9999 :
            (ndx < pst) ? ndx :
                (ndx === pst) ? 0 :
                    (ndx < (pst + 1 + obj.fut)) ? ndx - pst - 1 :
                        9999
    }); // OBJ.rSpcSizes -> (N.cSpcNdx -> N.rSpcNdx

module.exports = RSpcNdx;