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
describe(`{_ELEM_byTrnsfrm}::  (ELEM ) {Fn:_ELEM((CSD))} -> ELEM 
        `, function () {

    //      (ELEM) {Fn:_ELEM(Fn:(Trnsfrm))} -> ELEM
    let _ELEM_byTrnsfrm = require('../src/UPDATE_Elem')._byTrnsfrm;

    beforeEach(function () {

        this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
        this.STUB_TRNSFRMR = {
            backgroundColor: R.always('yellow'),
            opacity: R.always('0.5')
        };
        this.STUB_Elem = {style: {opacity: 1, bgColor: ''}};
        // this.ELEM_byTrnsfrm = _ELEM_byTrnsfrm(this.STUB_TRNSFRMR)
    });
    it.only(`should.be a Fn of arity:1.`, () => {
        _ELEM_byTrnsfrm.should.be.a('Function').and.is.length(1);
    });
    it.skip(`should.be a Fn of arity:1 and Expect a CSD.`, () => {
        _ELEM_byTrnsfrm.should.be.a('Function').and.is.length(1);
    });
    it.skip(`should produce a new Elem given a CSD`, function () {
        this._ELEM_byTrnsfrm().should.isObject('Object')
        // .and.have.property('opacity')
        // .and.deep.equal({style: {opacity: "0.5", backgroundColor: "green"}
    })
})
;