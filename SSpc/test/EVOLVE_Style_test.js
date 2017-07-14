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

describe(`Fn: EVOLVE_Style_byTrnfrm          IS aFn.arity:1
        that WHEN provided its @param: csd  
     RETURNS a Fn.artiy:1
        that WHEN provided its @param: styleTransform 
     RETURNS a styleCsdObj
      
     It is also available by the name of .SRV_evolvedStyle_byTrnsfrm
    `, () => {
    // TEST DATA

    let TEST_CSD;
    TEST_CSD = require('../src/SRV_StyleCsd').Dflt;
    let STUB_TRNFRM = {am: {backgroundColor: R.always('yellow'), opacity: R.always('0.5')}};
    // CODE UNDER TEST
    let EVOLVE_Style_byTrnfrm = require('../src/EVOLVE_Style').byTrnsfrm(TEST_CSD);

    it(`expects EVOLVE_Style_byTrnfrm             -> a function to return an evolved styleCsd.`, function () {
        expect(EVOLVE_Style_byTrnfrm).is.a('Function').is.length(1);
    });
    it(`expects _EVOLVE_Style_byTrnfrm( trnsfrm )  -> a new style Csd.`, function () {
        expect(EVOLVE_Style_byTrnfrm(STUB_TRNFRM)).is.a('Object')
            .and.has.property('am')
            .and.has.property('opacity')
            .and.equal('0.5') // new valu
        ;
    });
});

