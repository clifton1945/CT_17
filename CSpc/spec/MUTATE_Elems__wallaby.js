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
describe(`    MUTATE_:: mutates one span with its updated.style property.
        
        This is function that returns a Fn: MUTATE_thisElement
        It is the result of already supplying an updated style Property CSD to the       
     `, function () {
    let MUTATE_ = require('../src/MUTATE_Elem').MUTATE_;
    beforeEach(function () {
        loadFixtures('index.html'); //REMEMBER this BREAKS a mocha test !!
        // this.STUB_CSD = {"opacity": "0.5", "color": "green"};
        // this.STUB_Elem = {style: {opacity: 1, color: ''}};
        // this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
    });
    describe(`{MUTATE_                      } Fn::(Doc) {mutateElt}  Document -> Document
        `, function () {
        it(`should.be a Fn of arity:1; expecting a documentDCT.`, () => {
            MUTATE_.should.is.a('Function').and.is.length(2);
        });
    });
    describe(`{MUTATE_( Document )           } Fn::(Doc) {mutateElt}  Document -> Document
        `, function () {
        it(`should.be a mutated document.`, () => {
            MUTATE_(document).should.is.a('Function');
        });
    });
});