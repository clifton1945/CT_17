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

describe(`Fn: SRVa_StyleCsd             SERVES a styleCsd given      
    (1) a StyleCsd_Dflt
    (2) a StyleCsd_byReadClassKey given byReadClassKey
    `, () => {
    // TEST DATA
    // CODE UNDER TEST
    let SRVa_StyleCsd_Dflt = require('../src/SRVa_StyleCsd').Dflt; // -> {{},{},{}}
    it(`expects SRVa_StyleCsd_Dflt             -> an CSD Object with keys.
    `, function () {
        expect(SRVa_StyleCsd_Dflt).is.a('Object').is.keys('am', 'noon', 'pm');
    });
    // CODE UNDER TEST
    let SRVa_StyleCsd_byReadClassKey = require('../src/SRVa_StyleCsd').byReadClassKey; // -> {{},{},{}}
    it(`expects SRVa_StyleCsd_frmKey( key )  -> a style Csd.
    `, function () {
        expect(SRVa_StyleCsd_byReadClassKey('pm')).is.a('Object').has.property('opacity')
            .and.equal('0.9')
        ;
    });
    it(`expects SRVa_DfltRSpcCsd__GVNa_RSpcKey( key)  -> one of three DfltStyleCsds.
    `, function () {
        let SRVa_DfltRSpcCsd__GVNa_RSpcKey = require('../src/SRVa_StyleCsd').SRVa_DfltRSpcCsd__GVNa_RSpcKey;
        expect(SRVa_DfltRSpcCsd__GVNa_RSpcKey('pm')).is.a('Object').has.property('opacity')
            .and.equal('0.9')
    });
});


