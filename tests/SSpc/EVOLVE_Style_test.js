/**
 * EVOLVE_Csd.js
 */
"use strict";
let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
;
let chai = require('chai')
    , should = chai.should()
    , expect = chai.expect
;

describe(`Fn: EVOLVE_csdStyle requires a transformerFn and a csdStyle. 
    The pipe version wants a 
        RETURNS a Function, arity:1, that RETURNS a TRANSFORMED DfltCsd using the STUB Transforms
    `, function () {

    let EVOL_use_Trnsfrm_useDfltCsd = require('../../SSpc/src/EVOLVE_Style')._use_TrnfrmD_on_DfltCsd

    beforeEach(function () {
        this.STUB_TRNFRMOR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
    });

    it(`expects Fn:EVOL_use_Trnsfrm_useDfltCsd to be a Function of arity:1`, function () {
        expect(EVOL_use_Trnsfrm_useDfltCsd).is.a('Function').and.is.length(1);
    });
    it(`expects Fn:EVOL_Style INVOKED w/ a CsdDCT to RETURN a new Csd DCT.`, function () {
        EVOL_use_Trnsfrm_useDfltCsd(this.STUB_TRNFRMOR).should.be.a('Object')
            .and.have.property('backgroundColor')
            .and.equal('yellow')
        ;
    });
});

