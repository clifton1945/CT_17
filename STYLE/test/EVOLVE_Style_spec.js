/**
 * EVOLVE_Style.js
 * ...
 */
"use strict";

let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
//     , always = R.always
    , curry = R.curry
;

// CODE UNDER TEST

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

let objSize = obj => Object.keys(obj).length;

let EVOLVE;
EVOLVE = curry((trnsfrm, dflt) => R.evolve(trnsfrm, dflt));
// EVOLVE = require('../src/EVOLVE_Style').EVOLVE; //Fn(Obj.trnsfrmr -> Obj.styleCSD -> )

describe(`the Fn: EVOLVE_Style( transformFn, dflt_CSD) -> an evolved copy of the Dflt_CSD.
    
    USAGE: EVOLVED_Style will then be applied to each Verse of some Iterator VerseList
    `, function () {
    beforeEach(function () {
        // loadFixtures('index.html'); //REMEMBER this BREAKS a mocha test !!
        this.DfltCSD = require('../Dflt_Style').DfltCSD;
        let transformFn = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
        this.EVOLVED = EVOLVE(transformFn, transformFn)
    });
    it(`should be like Dflt_Style.`, function () {
        expect(this.EVOLVED).is.a('object');
        expect(objSize(this.EVOLVED)).is.equal(3); // FIX fontSize from dfltCSD shoulkd still be seen
        expect(objSize(this.EVOLVED)).is.equal(objSize(this.DfltCSD));
    });
    it(`should return a mutated CSD.`, function () {
        expect(this.EVOLVED.backgroundColor).to.not.be.equal('');
        expect(this.EVOLVED.backgroundColor).to.be.equal('yellow');
        expect(this.EVOLVED.opacity).to.be.equal('0.5');
        expect(this.EVOLVED.fontSize).to.be.not.equal('100%');
    });
});