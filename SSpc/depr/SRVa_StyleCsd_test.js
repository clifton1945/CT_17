/**
 * EVOLVE_Csd.js
 */
"use strict";
let R = require('ramda')
    // , evolve = R.evolve
    // , curry = R.curry
// , pipe = R.pipe
//     , compose = R.compose
;
let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

describe(`Fn: SRVa_DfltRSpcCsd__GVNa_RSpcKey             SERVES a default styleCsd given      
    (1) a StyleCsd_Dflt
    (2) a StyleCsd_byReadClassKey given byReadClassKey
    `, () => {
    // TEST DATA
    let SRVa_StyleCsd_Dflt = require('./SRVa_StyleCsd').Dflt; // -> {{},{},{}}
    it(`expects SRVa_StyleCsd_Dflt             -> an CSD Object with keys.
    `, function () {
        expect(SRVa_StyleCsd_Dflt).is.a('Object').is.keys('am', 'noon', 'pm');
    });
    // CODE UNDER TEST
    it(`expects Fn: SRVa_DfltRSpcStyle__GVNa_RSpcKey(key)  -> one of three DfltStyleCsds.
    NOTE:: SRVa_DfltSpanAttr_s__GVNa_RSpcKey IS another Name for the above Fn: SRVa_DfltRSpcStyle__GVNa_RSpcKey
    `, function () {
        let SRVa_DfltRSpcStyle__GVNa_RSpcKey = require('./SRVa_StyleCsd').SRVa_DfltRSpcStyle__GVNa_RSpcKey;
        expect(SRVa_DfltRSpcStyle__GVNa_RSpcKey('pm')).is.a('Object').has.property('opacity')
            .and.equal('0.9')
    });
});


