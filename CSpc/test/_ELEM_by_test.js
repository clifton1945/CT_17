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
    @ symb: ( {ELEM} ) {_ELEManElem(DICT.CSD)} ->  {ELEM}       
     `, function () {
});
describe.only(`{_ELEM_byTrnsfrm}  // (ELEM) {Fn:_ELEM((CSD))} -> ELEM
        `, function () {

    let _ELEM_byTrnsfrm = require('../src/UPDATE_Elem')._byTrnsfrm(
        {backgroundColor: R.always('yellow'), opacity: R.always('0.5')}
    );
    beforeEach(function () {
        this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
        this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
    });
    it(`should.be a Fn of arity:1 and Expect a CSD.`, () => {
        _ELEM_byTrnsfrm.should.be.a('Function').and.is.length(1);
    });
    it(`should produce a new Elem given a CSD`, function () {
        let RET = _ELEM_byTrnsfrm(this.STUB_CSD);
        RET.should.be.a('Object')
            .and.have.property('style')
            .and.deep.equal({"opacity": "0.5", "bgColor": "green"});
    });
});