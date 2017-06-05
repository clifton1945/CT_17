/**
 * EVOLVE_CSD.js
 */
"use strict";
let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
//     , always = R.always
//     , curry = R.curry
;
let chai = require('chai')
    , should = chai.should()
    , expect = chai.expect
;

describe(`CUT-> EVOLVE:: is the full form arity:2 form Fn: DCT.CSD -> ( DCT.TRNSFRMS -> DCT.CSD )
    which RETURNS-> an evolved copy of the param:DCT.CSD.
    
     USAGE: typical use it in a partialed arity:1 form: 
        EVOL_aStyle partialed w/ DCT.TRNSFRMS
        EVOL_aCSD   partialed w/ DCT.CSD
    `, function () {

    let EVOLVE = require('../src/EVOLVE_CSD.js').EVOLVE; //Fn(DCT.CSD ->  DCT.TRNSFRM -> DCT.CSD -> )

    beforeEach(function () {
        this.STUB_CSD = require('../Dflt_CSD');
        this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        this.CUT = EVOLVE;
        this.CSD = R.evolve(this.STUB_TRNSFRMR, this.STUB_CSD);
    });
    it(`expects basic Fn to return a Function of arity:2`, function () {
        expect(this.CUT).is.a('Function').and.is.length(2);
    });
    it(`expects Fn(DCT, DCT) to return a CUT Object.`, function () {
        this.CSD.should.be.a('Object')
            .and.have.property('backgroundColor')
            .and.equal('yellow')
        // ;
    });
});
describe(`CUT-> EVOL_aStyle:: is a arity:1 form w/ a DCT.TRNSFRMS partialed:  CSD.in -> CSD.our.
    `, function () {

    let EVOL_aStyle = require('../src/EVOLVE_CSD').EVOL_aStyle; //Fn(DCT.trnsfrmr -> DCT.styleCSD )
    beforeEach(function () {
        this.STUB_CSD = require('../Dflt_CSD');
        this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        this.CUT = EVOL_aStyle(this.STUB_TRNSFRMR);
        this.CSD = this.CUT(this.STUB_CSD);
    });
    it(`expects EVOL_aStyle to return a Function of arity:1`, function () {
        expect(this.CUT).is.a('Function').and.is.length(1);
    });
    it(`expects EVOL_aStyle( DCT.CSD in ) to return CSD out.`, function () {
        this.CSD.should.be.a('Object')
            .and.have.property('backgroundColor')
            .and.equal('yellow')
        ;
    });
});
describe(`CUT-> EVOL_aCSD:: is a arity:1 form w/ a DCT.TRNSFRMS partialed:  CSD.in -> CSD.our.
    `, function () {

    let EVOL_aCSD = require('../src/EVOLVE_CSD').EVOL_aCSD; //Fn(DCT.trnsfrmr -> DCT.styleCSD )
    beforeEach(function () {
        this.STUB_CSD = require('../Dflt_CSD');
        this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        this.CUT = EVOL_aCSD(this.STUB_CSD);
        this.CSD = this.CUT(this.STUB_TRNSFRMR);
    });
    it(`expects EVOL_aCSD to return a Function of arity:1`, function () {
        expect(this.CUT).is.a('Function').and.is.length(1);
    });
    it(`expects EVOL_aCSD( DCT.CSD in ) to return CSD out.`, function () {
        this.CSD.should.be.a('Object')
            .and.have.property('opacity')
            .and.equal('0.5')
        ;
    });
});