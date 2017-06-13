/**
 * EVOLVE_Csd.js
 */
"use strict";
let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
//     ,
let chai = require('chai')
    , should = chai.should()
    , expect = chai.expect
;
context(`EVOLVE_Style.. are functions to return an evolved style.Csd OR functions that return one.`, () => {
    before(function () {
        this.STUB_Csd = require('../../SSpc/Dflt_Csd');
        this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
    });
    describe(` EVOLVE_Style:: (D.csdTrnsfrmD)(D.csdD){ EVOLVE_} -> D.csdD
        IS the full form arity:2 to RETURN an evolved copy of a D.Csd
    `, function () {

        let EVOL_Style = require('../../SSpc/src/EVOLVE_Style.js').EVOLVE_Style; // Fn(D.Csd ->  D.TRNSFRM -> {} -> D.Csd -> )

        beforeEach(function () {
            this.CUT = EVOL_Style;
            this.RET = EVOL_Style(this.STUB_TRNSFRMR, this.STUB_Csd);
        });
        it(`expects basic Fn to return a Function of arity:2`, function () {
            expect(EVOL_Style).is.a('Function').and.is.length(2);
        });
        it(`expects Fn(DCT, DCT) to return a CSD DCT.`, function () {
            this.RET.should.is.a('Object')
                .and.is.property('backgroundColor')
                .and.equal('yellow')
            // ;
        });
    });

    describe(` EVOL_Style  FROM _frmTrnfrm :  (D.csdTrnsfrmD)->{ EVOLVE_Style( D.csdD )} -> D.csdD
        RETURNS a Function, arity:1, that RETURNS a D.Csd
    `, function () {

        let EVOL_frmTrnsfrm = require('../../SSpc/src/EVOLVE_Style')._frmDfltCSD;
        beforeEach(function () {
            this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
            // this.CUT = EVOL_frmTrnsfrm;
        });

        it(`expects Fn:EVOL_frmTrnsfrm to be a Function of arity:1`, function () {
            expect(EVOL_frmTrnsfrm).is.a('Function').and.is.length(1);
        });
        it(`expects Fn:EVOL_Style INVOKED w/ a CsdDCT to RETURN a new Csd DCT.`, function () {
            EVOL_frmTrnsfrm(this.STUB_TRNSFRMR).should.be.a('Object')
                .and.have.property('backgroundColor')
                .and.equal('yellow')
            ;
        });
    });
});

