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
// noinspection Annotator
let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

describe(`Fn: EVOLVEa_Csd__GVNa_Trnsfrm      ISa Fn.arity:1 ( Trnsfrm -> Csd )
    resulting from R.evolve 
    `, () => {

    //TEST DATA
    let Dflt_Csd = require('../src/SRVa_StyleCsd').Dflt;
    let STUB_TRNFRM = {am: {backgroundColor: R.always('yellow'), opacity: R.always('0.5')}};
    // CODE UNDER TEST
    let EVOLVE_Csd = require('../src/EVOLVEa_Csd');
    let EVOLVE_Csd__GVNa_Trnsfrm = EVOLVE_Csd.SRVa_Csd__WTHa_Csd__GVNa_Trnsfrm(Dflt_Csd);
    it(`expects EVOLVE_Csd__GVNa_TrnsfrmE             -> a function to return an evolved styleCsd.`, function () {
        expect(EVOLVE_Csd__GVNa_Trnsfrm).is.a('Function').and.has.length(1);
    });
    it(`expects _EVOLVE_Csd__GVNa_Trnsfrm(trnsfrm )  -> a new style Csd.`, function () {
        expect(EVOLVE_Csd__GVNa_Trnsfrm(STUB_TRNFRM)).is.a('Object')
            .and.has.property('am')
            .and.has.property('opacity')
            .and.equal('0.5') // new valu
        ;
    });
});

