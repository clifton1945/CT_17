/**
 *RSpace_Indices
 */
"use strict";
let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , always = R.always
;
const ndxInRSpc = curry(
    /**
     *  Fn .... ndxInRSpc  RETURNS -> ndxInRSpc, <- FROM ndxInCSpc
     *
     * @param obj:  sizesObj in RSpc: e.g.{pst: 2, cur: 1, fut: 2}
     * @param ndx:  this Elements Index in CSpc
     * @return {number} : this Elements Index in RSpc
     *
     *  NOTE: this is a special case because the current ReadSpace Size is always just 1.
     */
    function (obj, ndx) {//  OBJ.sizesObj -> (N.ndxInRSpc -> N.ndxInCSpc
        let pst = obj.pst;
        return (ndx < 0) ? -9999 :
            (ndx < pst) ? ndx :
                (ndx === pst) ? 0 :
                    (ndx < (pst + 1 + obj.fut)) ? ndx - pst - 1 :
                        9999
    }); // OBJ.sizesObj -> (N.ndxInRSpc -> N.ndxInCSpc

module.exports = ndxInRSpc;