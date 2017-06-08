/**
 // UPDATE_byTrns_test
 */
"use strict";
//
let R = require('ramda')
;
let chai = require('chai')
    , should = chai.should()
    // , expect = chai.expect
;
context(` UPDATE_byTrns is a Fn that RETURNS a Fn with a partialled new CSD CREATED BY a new Transfrom DICT.
 
    @ symb: ( {ELEM } ) {UPDATE_byTrns(DICT.Trnsfrms)} ->  {ELEM }       
     `, function () {
});
describe(`{UPDATE_byTrnsfrm   } Fn::(ELEM ) { UPDATE_byTrnsfrm( STUB_CSD) } -> ELEM 
        `, function () {

    //      (ELEM) {Fn:UPDATE_(Fn:(Trnsfrm))} -> ELEM
    let UPDATE_byTrnsfrm = require('../src/UPDATE_Elem_by_')._byTrnsfrm;

    beforeEach(function () {
        this.STUB_Elem = {style: {opacity: 1, backgroundColor: ''}};
        this.CUT = UPDATE_byTrnsfrm(this.STUB_Elem)
    });
    it(`should.be a Fn of arity:1 expecting an ELEM.`, () => {
        UPDATE_byTrnsfrm.should.be.a('Function').and.is.length(1);
    });
    it(`should return a new Elem WHEN invoked w/ an Element`, function () {
        this.CUT.should.be.an('Object')
        // .and.have.property('style')
            .and.deep.equal(
            {style: {opacity: "0.5", backgroundColor: "blue"}}
        )
    });
})