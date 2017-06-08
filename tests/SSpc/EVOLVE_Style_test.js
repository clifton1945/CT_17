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

describe(` EVOLVE_Style:: (D.csdTrnsfrmD)(D.csdD){ EVOLVE_} -> D.csdD
    is the full form arity:2 to RETURN an evolved copy of a D.Csd

    `, function () {

    let EVOLVE = require('../../SSpc/src/EVOLVE_Style.js').EVOLVE_Style; // Fn(D.Csd ->  D.TRNSFRM -> {} -> D.Csd -> )

    beforeEach(function () {
        this.STUB_Csd = require('../../SSpc/Dflt_Csd');
        this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        this.CUT = EVOLVE;
        this.Csd = R.evolve(this.STUB_TRNSFRMR, this.STUB_Csd);
    });
    it(`expects basic Fn to return a Function of arity:2`, function () {
        expect(this.CUT).is.a('Function').and.is.length(2);
    });
    it(`expects Fn(DCT, DCT) to return a CUT Object.`, function () {
        this.Csd.should.be.a('Object')
            .and.have.property('backgroundColor')
            .and.equal('yellow')
        // ;
    });
});
describe(` EVOL_Style_byTrnsfrm::  (D.csdTrnsfrmD)->{ EVOLVE_( D.csdD )} -> D.csdD
    is an arity:1 to RETURN a Function that RETURNS a D.Csd
    `, function () {

    let EVOL_byTrnsfrm = require('../../SSpc/src/EVOLVE_Style')._byTrnsfrm;
    beforeEach(function () {
        this.STUB_Csd = require('../../SSpc/Dflt_Csd');
        this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        this.CUT = EVOL_byTrnsfrm(this.STUB_TRNSFRMR);
        this.Csd = this.CUT(this.STUB_Csd);
    });
    it(`expects Fn:EVOL_byTrnsfrm to be a Function of arity:1`, function () {
        expect(this.CUT).is.a('Function').and.is.length(1);
    });
    it(`expects Fn:EVOL_byTrnsfrm( D.Csd in ) to return Csd out.`, function () {
        this.Csd.should.be.a('Object')
            .and.have.property('backgroundColor')
            .and.equal('yellow')
        ;
    });
});
describe(` EVOL_Style_byCsd:: is a arity:1 form w/ a D.TRNSFRMS partialed:  Csd.in -> Csd.our.
    `, function () {

    let EVOL_aCsd = require('../../SSpc/src/EVOLVE_Style')._byCsd;
    beforeEach(function () {
        let STUB_Csd = require('../../SSpc/Dflt_Csd');
        let STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        this.CUT = EVOL_aCsd(STUB_Csd);
        this.Csd = this.CUT(STUB_TRNSFRMR);
    });
    it(`expects EVOL_aCsd to return a Function of arity:1`, function () {
        expect(this.CUT).is.a('Function').and.is.length(1);
    });
    it(`expects EVOL_aCsd( D.Csd in ) to return Csd out.`, function () {
        this.Csd.should.be.a('Object')
            .and.have.property('opacity')
            .and.equal('0.5')
        ;
    });
});

describe(`EVOL_Style_byTrnsfrm:: Csd.in -> Csd.our.
    is a arity:1 form w/ a D.TRNSFRMS partialed:  
    `, function () {

    let Csd_byTrnsfrm = require('../../SSpc/src/EVOLVE_Style').Csd_byTrnsfrm; //Fn(D.trnsfrmr -> D.styleCsd )
    beforeEach(function () {
        this.STUB_Csd = require('../../SSpc/Dflt_Csd');
        this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        this.CUT = Csd_byTrnsfrm(this.STUB_TRNSFRMR);
        this.Csd = this.CUT(this.STUB_Csd);
    });
    it(`expects Csd_byTrnsfrm to return a Function of arity:1`, function () {
        expect(this.CUT).is.a('Function').and.is.length(1);
    });
    it(`expects Csd_byTrnsfrm( D.Csd in ) to return Csd out.`, function () {
        this.Csd.should.be.a('Object')
            .and.have.property('backgroundColor')
            .and.equal('yellow')
        ;
    });
});