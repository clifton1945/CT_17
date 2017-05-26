/**
 *strColor_in_RSpc
 */
"use strict";
let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , always = R.always
;
const strColor = curry(
    /**
     *  Fn: strColor  RETURNS -> strColorInStyleSpc, <- FROM ndxInRSpc
     *
     * @param str:  RSpc Size Object: e.g.{pst: 2, cur: 1, fut: 2}
     * @param ndx:  Element Index in CSpc
     * @return {number} : this Element Index in RSpc
     *
     *  NOTE: this is a special case because the current ReadSpace Size is always just 1.
     */
    function (str, ndx) {
        let pst = str.pst;
        return (ndx < 0) ? -9999 :
            (ndx < pst) ? ndx :
                (ndx === pst) ? 0 :
                    (ndx < (pst + 1 + str.fut)) ? ndx - pst - 1 :
                        9999
    }); // OBJ.rSpcSizes -> (N.cSpcNdx -> N.rSpcNdx

module.exports = strColor;