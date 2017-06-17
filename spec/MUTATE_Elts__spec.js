/**
 // UPDATE_Elem_By____test
 */
"use strict";
//
let R = require('ramda')
    , evolve = R.evolve
    , curry = R.curry
    , pipe = R.pipe
;
let M = require('mocha')
;
let chai = require('chai')
    , should = chai.should()
    // , expect = chai.expect
;
describe(`    MUTATE_Elt   test wip from Cookbook    
     `, function () {
    let mutateElt = require('../CSpc/src/UPDATE_Elem').mutateElt;
    beforeEach(function () {
        loadFixtures('index.html'); //REMEMBER this BREAKS a mocha test !!
        // this.STUB_CSD = {"opacity": "0.5", "color": "green"};
        // this.STUB_Elem = {style: {opacity: 1, color: ''}};
        // this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
    });
    describe(`{MUTATE_Elt                      } Fn::(Doc) {mutateElt}  Document -> Document
        `, function () {
        it(`should.be a Fn of arity:1; expecting a documentDCT.`, () => {
            mutateElt.should.is.a('Function').and.is.length(1);
        });
    });
    describe(`{MUTATE_Elt( Document )           } Fn::(Doc) {mutateElt}  Document -> Document
        `, function () {
        it(`should.be a mutated document.`, () => {
            mutateElt(document).should.is.a('Object');
        });
    });
});