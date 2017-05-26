/**
 *clsName_in_RSpc.js
 */
"use strict";
let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , always = R.always
;
const RSpcNdx = curry(
    /**
     *  Fn: strName  RETURNS -> strName, <- FROM ndxInCSpc
     *
     * @param obj:  RSpc Name Object: e.g.{pst: 2, cur: 1, fut: 2}
     * @param ndx:  Element Index in CSpc
     * @return {number} : this Element Index in RSpc
     *
     */
    function (obj, ndx) {
        let pst = obj.pst;
        return (ndx < 0) ? -9999 :
            (ndx < pst) ? "pst" :
                (ndx === pst) ? "cur" :
                    (ndx < (pst + 1 + obj.fut)) ? "fut" :
                        9999
    }); // OBJ.rSpcSizes -> (N.cSpcNdx -> N.rSpcNdx)

module.exports = RSpcNdx;