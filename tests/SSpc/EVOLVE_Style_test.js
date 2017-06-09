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
context(`EVOLVE_Style.. are functions to return an evolved style.Csd OR functins that return one.`, () => {
    before(function () {
        this.STUB_Csd = require('../../SSpc/Dflt_Csd');
        this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
    });

    describe(` EVOLVE_Style:: (D.csdTrnsfrmD)(D.csdD){ EVOLVE_} -> D.csdD
        IS the full form arity:2 to RETURN an evolved copy of a D.Csd

    `, function () {

        let EVOLVE = require('../../SSpc/src/EVOLVE_Style.js').EVOLVE_Style; // Fn(D.Csd ->  D.TRNSFRM -> {} -> D.Csd -> )

        beforeEach(function () {
            this.CUT = EVOLVE;
            this.RET = R.evolve(this.STUB_TRNSFRMR, this.STUB_Csd);
        });
        it(`expects basic Fn to return a Function of arity:2`, function () {
            expect(this.CUT).is.a('Function').and.is.length(2);
        });
        it(`expects Fn(DCT, DCT) to return a CUT Object.`, function () {
            this.RET.should.be.a('Object')
                .and.have.property('backgroundColor')
                .and.equal('yellow')
            // ;
        });
    });
    describe(` EVOL_Style_frmTrnsfrm::  (D.csdTrnsfrmD)->{ EVOLVE_( D.csdD )} -> D.csdD
        RETURNS a Function, arity:1, that RETURNS a D.Csd
    `, function () {

        let EVOL_frmTrnsfrm = require('../../SSpc/src/EVOLVE_Style')._frmTrnsfrm;
        beforeEach(function () {
            this.CUT = EVOL_frmTrnsfrm(this.STUB_Csd);
            this.RET = this.CUT(this.STUB_TRNSFRMR);
        });
        it(`expects Fn:EVOL_frmTrnsfrm to be a Function of arity:1`, function () {
            expect(this.CUT).is.a('Function').and.is.length(1);
        });
        it(`expects Fn:EVOL_frmTrnsfrm( D.Csd in ) to return Csd out.`, function () {
            this.RET.should.be.a('Object')
                .and.have.property('backgroundColor')
                .and.equal('yellow')
            ;
        });
    });
    describe(` EVOL_Style_frmCsd: ( D.Csd )=>{EVOL_aStyle}(D.Trnsfrm)} -> D.Csd
        RETURNS a Function, arity:1, that RETURNS a D.Csd.
    `, function () {

        let EVOL_aCsd = require('../../SSpc/src/EVOLVE_Style')._frmCsd;
        beforeEach(function () {
            this.CUT = EVOL_aCsd(this.STUB_TRNSFRMR);
            this.RET = this.CUT(this.STUB_Csd)
        });
        it(`expects EVOL_aCsd to return a Function of arity:1`, function () {
            expect(this.CUT).is.a('Function').and.is.length(1);
        });
        it(`expects EVOL_aCsd( D.Csd in ) to return Csd out.`, function () {
            this.RET.should.be.a('Object')
                .and.have.property('opacity')
                .and.equal('0.5')
            ;
        });
    });

    describe.skip(`EVOL_Style_frm_EvolveTrnsfrm::??????  
    `, function () {

        let Csd_frmTrnsfrm = require('../../SSpc/src/EVOLVE_Style').Csd_frmTrnsfrm; //Fn(D.trnsfrmr -> D.styleCsd )
        beforeEach(function () {
            this.CUT = Csd_frmTrnsfrm(this.STUB_TRNSFRMR);
            this.RET = this.CUT(this.STUB_Csd);
        });
        it(`expects Csd_frmTrnsfrm to return a Function of arity:1`, function () {
            expect(this.CUT).is.a('Function').and.is.length(1);
        });
        it(`expects Csd_frmTrnsfrm( D.Csd in ) to return Csd out.`, function () {
            this.RET.should.be.a('Object')
                .and.have.property('backgroundColor')
                .and.equal('yellow')
            ;
        });
    });

});