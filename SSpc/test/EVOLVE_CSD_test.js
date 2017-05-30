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

describe(`CUT-> EVOLVE:: is the full form Fn: EVOLVE_CSD( DCT.CSD -> ( DCT.FN -> DCT.CSD )
    which RETURNS-> an evolved copy of a CSD.
     USAGE: the resultant EVOLVED CSD typically is applied to some verse.
    `, function () {

    let EVOLVE = require('../src/EVOLVE_CSD.js').EVOLVE_CSD; //Fn( DCT.trnsfrmr -> DCT.styleCSD -> )

    beforeEach(function () {
        this.DfltCSD = require('../Dflt_CSD').DfltCSD;
        this.transformFn = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        this.Attr_Trnsfrm = require('../Dflt_CSD');
        this.EVOLVE = EVOLVE;
        this.CSD = EVOLVE(this.DfltCSD, this.transformFn);
    });

    it(`expects basic Fn to return a Function of arity:2`, function () {
        expect(this.EVOLVE).is.a('Function').and.is.length(2);
    });
    it(`expects Fn(DCT) to return a Function of arity:1.`, function () {
        expect(EVOLVE(this.DfltCSD)).is.a('Function').and.is.length(1);
    });
    it(`expects Fn(DCT, DCT) to return a CSD Object.`, function () {
        this.CSD.should.be.a('Object')
            .and.have.property('backgroundColor')
            .and.equal('yellow')
        ;
    });
});
describe(`CUT-> EVOLVE_Dflt:: is the partial form Fn: EVOLVE_Dflt(  DCT.FN -> DCT.CSD ) which RETURNS an evolved copy of a CSD.
     USAGE: the resultant Fn EXPECTS .
    `, function () {
    let EVOLVE_Dflt = require('../src/EVOLVE_CSD').EVOLVE_Dflt; //Fn(DCT.trnsfrmr -> DCT.styleCSD )
    beforeEach(function () {
        // this.DfltCSD = require('../Dflt_CSD').DfltCSD;
        this.transformFn = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        this.EVOLVE_Dflt = EVOLVE_Dflt;
        this.CSD = EVOLVE_Dflt(this.transformFn);
    });

    it(`expects basic Fn to return a Function of arity:1`, function () {
        expect(EVOLVE_Dflt).is.a('Function').and.is.length(1);
    });
    it(`expects Fn( DCT.trnsfrm ) to return a CSD Object.`, function () {
        this.CSD.should.be.a('Object')
            .and.have.property('backgroundColor')
            .and.equal('yellow')
        ;
    });
    it(`expects a different trnsfrmFn to return a different Value`, function () {
        let trnsfrm_bgColor = require('../src/Attr_Trnsfrms').bgColor;
        let EVOLVE_DfltD_bgColor;
        EVOLVE_DfltD_bgColor = EVOLVE_Dflt(trnsfrm_bgColor('blue'));
        expect(EVOLVE_DfltD_bgColor.backgroundColor).is.equal('blue');
        EVOLVE_DfltD_bgColor = EVOLVE_Dflt(trnsfrm_bgColor('red'));
        expect(EVOLVE_DfltD_bgColor.backgroundColor).is.equal('red');
    });
});