/**
 * EVOLVE_Style.js
 * ...
 */


"use strict";

let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
//     , always = R.always
//     , curry = R.curry
;

// CODE UNDER TEST

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

let EVOLVE;
describe(`Fn: EVOLVE_Style( transformFn, Dflt_CSD) -> an evolved copy of the Dflt_CSD.
    USAGE: EVOLVED_Style will then be applied to each Verse of some Iterator VerseList
    `, function () {
    EVOLVE = require('../src/EVOLVE_Style').EVOLVE; //Fn(DCT.trnsfrmr -> DCT.styleCSD -> )

    let objSize = obj => Object.keys(obj).length;// WHAT AND WHY

    beforeEach(function () {
        this.DfltCSD = require('../Dflt_CSD').DfltCSD;
        let transformFn = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        this.EVOLVED = EVOLVE(transformFn, transformFn)
    });
    it(`should be like DfltCSD.`, function () {
        expect(this.EVOLVED).is.an('object');
        expect(objSize(this.EVOLVED)).is.equal(2);
    });
    it(`should return a new CSD.`, function () {
        expect(this.EVOLVED.backgroundColor).is.not.equal('');
        expect(this.EVOLVED.backgroundColor).is.equal('yellow');
        expect(this.EVOLVED.opacity).is.equal('0.5');
        expect(this.EVOLVED.fontSize).is.not.equal('100%');
    });
});