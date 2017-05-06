/**
 * EVOLVE_Style.js
 */
"use strict";

let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
    , always = R.always
    , curry = R.curry
;

// CODE UNDER TEST

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

let objSize = obj => Object.keys(obj).length;

let EVOLVE_Style;
EVOLVE_Style = curry((trnsfrm, dflt) => R.evolve(trnsfrm, dflt));
EVOLVE_Style = require('../src/EVOLVE_Style').EVOLVE; //Fn(Obj.trnsfrmr -> Obj.styleCSD)

describe(`the Fn: EVOLVE_Style( weightValue) -> and evolved copy of the Dflt_CSD.
    
    USAGE: EVOLVED_Style will then be applied to each Verse of some Iterator VerseList
    `, function () {
    beforeEach(function () {
        // loadFixtures('index.html'); //REMEMBER this BREAKS a mocha test !!
        this.dfltCSD = require('../Dflt_Style').dfltCSD;
        let transformations = {backgroundColor: always('Clifton'), opacity: always('0.5')};
        this.EVOLVED = require('../src/EVOLVE_Style').EVOLVE;
    });
    it(`should be like Dflt_Style.`, function () {
        expect(this.EVOLVED).is.a('object');
        expect(objSize(this.EVOLVED)).is.equal(3);
        expect(objSize(this.EVOLVED)).is.equal(objSize(this.dfltCSD));
    });
    it(`should return a mutated CSD.`, function () {
        expect(this.EVOLVED.backgroundColor).to.not.be.equal('');
        expect(this.EVOLVED.backgroundColor).to.be.equal('Clifton');
        expect(this.EVOLVED.opacity).to.be.equal('0.5');
        expect(this.EVOLVED.fontSize).to.be.equal('100%');
    });
});