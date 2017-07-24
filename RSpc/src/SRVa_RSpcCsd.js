"use strict";

let R = require('ramda')
    , curry = R.curry
    , prop = R.prop
    // , indexOf = R.indexOf()
;
// let chai = require('chai')
//     , expect = chai.expect
// ;
let SRVa_ = curry(
    /**
     * Fn: SRVa_RSpcCsd__GVNa_spanNdx
     * Fn: TRIAGE_1
     *
     * @param rspcCsdDict
     * @param noonNdx
     * @param spanNdx
     * @return a CSD
     */
    (rspcCsdDict, noonNdx, spanNdx) => {
        return (spanNdx < noonNdx ) ? prop('am', rspcCsdDict) :
            (spanNdx > noonNdx) ? prop('pm', rspcCsdDict) :
                prop('noon', rspcCsdDict)
    }
);
module.exports.RSpcCsd = SRVa_;
module.exports.SRVa_ = SRVa_;
module.exports.b = SRVa_;
// 20170724

module.exports.SRVa_RSpcCsd__WTHa_SSpcStyles__GVNa_noonNdx__GVNa_spanNdx = curry((styles) => SRVa_(styles, R.__, R.__));
module.exports.SRVa_RSpcCsd__WTHa_SSpc__WTHa_noonNdx__GVNa_spanNdx = curry((styles, noonNdx) => SRVa_(styles, noonNdx, R.__));



