/**
 // UPDATE_Element_test
 */
"use strict";
//
let R = require('ramda')
;
let chai = require('chai')
    , should = chai.should()
    // , expect = chai.expect
;
context(` Fn: _ELEM anElem applies each style CSD property to Elem's style object.
 
    @ symb: ( {ELEM } ) {_ELEManElem(DICT.CSD)} ->  {ELEM }       
     `, function () {
});
describe(`{_ELEM_byTrnsfrm}::  (ELEM ) { _ELEM_byTrnsfrm( STUB_CSD) } -> ELEM 
        `, function () {

    //      (ELEM) {Fn:_ELEM(Fn:(Trnsfrm))} -> ELEM
    let _ELEM_byTrnsfrm = require('../src/UPDATE_Elem')._byTrnsfrm;

    beforeEach(function () {
        // this.STUB_CSD = {"opacity": "0.5", "backgroundColor": "green"};
        // this.STUB_TRNSFRMR = {
        //     backgroundColor: R.always('yellow'),
        //     opacity: R.always('0.5')
        // };
        this.STUB_Elem = {style: {opacity: 1, backgroundColor: ''}};
        this.CUT = _ELEM_byTrnsfrm(this.STUB_Elem)
    });
    it(`should.be a Fn of arity:1 expecting an ELEM.`, () => {
        _ELEM_byTrnsfrm.should.be.a('Function').and.is.length(1);
    });
    it(`should return a new Elem WHEN invoked w/ an Element`, function () {
        this.CUT.should.be.an('Object')
        // .and.have.property('style')
            .and.deep.equal(
            {style: {opacity: "0.5", backgroundColor: "blue"}}
        )
    });
});
describe(`{_ELEM_byTrnsfrm}::  (ELEM ) { _ELEM_byTrnsfrm( STUB_CSD) } -> ELEM 
        `, function () {

    //      (ELEM) {Fn:_ELEM(Fn:(Trnsfrm))} -> ELEM
    let _ELEM_byTrnsfrm = require('../src/UPDATE_Elem')._byTrnsfrm;

    beforeEach(function () {
        // this.STUB_CSD = {"opacity": "0.5", "backgroundColor": "green"};
        // this.STUB_TRNSFRMR = {
        //     backgroundColor: R.always('yellow'),
        //     opacity: R.always('0.5')
        // };
        this.STUB_Elem = {style: {opacity: 1, backgroundColor: ''}};
        this.CUT = _ELEM_byTrnsfrm(this.STUB_Elem)
    });
    it(`should.be a Fn of arity:1 expecting an ELEM.`, () => {
        _ELEM_byTrnsfrm.should.be.a('Function').and.is.length(1);
    });
    it(`should return a new Elem WHEN invoked w/ an Element`, function () {
        this.CUT.should.be.an('Object')
        // .and.have.property('style')
            .and.deep.equal(
            {style: {opacity: "0.5", backgroundColor: "blue"}}
        )
    });
});