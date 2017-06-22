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
context(`EVOLVE_Style.. are functions to return an evolved style.Csd OR functions that return one.`, () => {
    before(function () {
        this.STUB_Csd = require('../../SSpc/Dflt_Csd');
        this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
    });
    describe(` EVOL_Style_use_TrnfrmD_on_DfltCsd:  (D.csdTrnsfrmD)->{ EVOLVE_Style( D.csdD )} -> D.csdD
        RETURNS a Function, arity:1, that RETURNS a TRANSFORMED DfltCsd using the STUB Transforms
    `, function () {

        let EVOL_use_Trnsfrm_useDfltCsd = require('../../SSpc/src/EVOLVE_Style')._use_TrnfrmD_on_DfltCsd

        beforeEach(function () {
            this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
            // this.CUT = EVOL_use_Trnsfrm_useDfltCsd;
        });

        it(`expects Fn:EVOL_use_Trnsfrm_useDfltCsd to be a Function of arity:1`, function () {
            expect(EVOL_use_Trnsfrm_useDfltCsd).is.a('Function').and.is.length(1);
        });
        it(`expects Fn:EVOL_Style INVOKED w/ a CsdDCT to RETURN a new Csd DCT.`, function () {
            EVOL_use_Trnsfrm_useDfltCsd(this.STUB_TRNSFRMR).should.be.a('Object')
                .and.have.property('backgroundColor')
                .and.equal('yellow')
            ;
        });
    });
});

