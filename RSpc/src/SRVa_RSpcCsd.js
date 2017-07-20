"use strict";

let R = require('ramda')
    , curry = R.curry
    , prop = R.prop
    , indexOf = R.indexOf()
;
let chai = require('chai')
    , expect = chai.expect
;
// CODE UNDER TEST
let TRIAGE_ = curry(
    /**
     * Fn: TRIAGE_
     * @param parent
     * @param noon
     * @param spn
     * @return {{color: string}}
     */
    (parent, noon, spn) => {
        let _f = indexOf(R.__, parent)
            , n = _f(noon)
            , s = _f(spn)
        ;
        return (s < n ) ? {color: 'red'} :
            (s > n) ? {color: 'blue'} :
                {color: 'green'}
    }
);
module.exports.TRIAGE_ = TRIAGE_;
module.exports.SRV_aReadClssStyle = TRIAGE_;

// new TRIAGE_

let SRVa_ = curry(
    /**
     * Fn: SRVa_rspcCsd__GVNa_spanNdx
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
module.exports.SRVa_ = SRVa_;
// module.exports.__GVNa_spanNdx = SRVa_rspcCsd__GVNa_spanNdx;

