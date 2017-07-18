"use strict";

let R = require('ramda')
    , curry = R.curry
    , indexOf = R.indexOf()
;
let chai = require('chai')
    , expect = chai.expect
;
// CODE UNDER TEST
let TRIAGE_ = curry(
    /**
     * Fn.
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
    });

module.exports.SRV_aReadClssStyle = TRIAGE_;            //