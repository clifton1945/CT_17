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
module.exports.SRVa = SRVa_;
module.exports.b = SRVa_;

