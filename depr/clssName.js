/**
 *clsName.js
 * TODO PLAN NEXT is convert this over to returning a name then use it in a pipe BEFORE all the STYLE transforms
 */
"use strict";
let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , always = R.always
;
const clssName = curry(
    /**
     *  Fn: strName  RETURNS -> strName, <- FROM ndxInCSpc
     *
     * @param obj:  sizesObj: e.g.{pst: 2, cur: 1, fut: 2}
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
    }); // OBJ.rSpcSizes -> (N.ndxRSpc -> N.rSpcNdx)

module.exports = clssName;