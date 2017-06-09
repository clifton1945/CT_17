/**
 // UPDATE_Elem_By____test
 */
"use strict";
//
// let R = require('ramda')
;
let chai = require('chai')
    , should = chai.should()
    // , expect = chai.expect
;
context(` Fn: UPDATE_Elem_ byElem applies each style CSD property to Elem's style object. 
    @ symb: ( {ELEM} ) {UPDATE_Elem_byElem(DICT.CSD)} ->  {ELEM}       
     `, function () {
});
describe(`{UPDATE_Elem                      } Fn::(DICT.CSD)(ELEM) {UPDATE_Elem} -> ELEM
        `, function () {

    let UPDATE_Elem = require('../../CSpc/src/UPDATE_Elem').UPDATE_Elem;
    beforeEach(function () {
        this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
        this.STUB_Elem = {style: {opacity: 1, bgColor: ''}};
    });
    it(`should.be a Fn of arity:2; expecting a CSD and an Element.`, () => {
        UPDATE_Elem.should.is.a('Function');
        // UPDATE_Elem.should.is.a('Function').and.is.length(2);
    });
});
describe(`{UPDATE_Elem_byCsd          } Fn::( ELEM) {UPDATE_Elem_byElem(DICT.CSD)} ->  ELEM 
        `, function () {

    let UPDATE_Elem_byElem = require('../../CSpc/src/UPDATE_Elem')._byCsd({"opacity": "0.5", "bgColor": "green"});
    beforeEach(function () {
        this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
        this.STUB_Elem = {style: {opacity: 1, bgColor: ''}};
    });
    it(`should.be a Fn of arity:1 and Expect an Element.`, () => {
        UPDATE_Elem_byElem.should.is.a('Function').and.is.length(1);
    });
    it(`should.produce a new Elem given an Element: .`, function () {
        UPDATE_Elem_byElem(this.STUB_Elem).should.is.a('Object')
            .and.have.property('style')
            .and.is.deep.equal({"opacity": "0.5", "bgColor": "green"});
    });
});
describe(`{UPDATE_Elem_byElem        } Fn::( DICT.CSD) {UPDATE_Elem_byElem( ELEM)}  -> ELEM
        `, function () {

    let UPDATE_Elem_byCsd = require('../../CSpc/src/UPDATE_Elem')._byElem({style: {opacity: 1, bgColor: ''}});
    beforeEach(function () {
        this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
    });
    it(`should.be a Fn of arity:1 and Expect a CSD.`, () => {
        UPDATE_Elem_byCsd.should.be.a('Function').and.is.length(1);
    });
    it(`should produce a new Elem given a CSD`, function () {
        let RET = UPDATE_Elem_byCsd(this.STUB_CSD);
        RET.should.be.a('Object')
            .and.have.property('style')
            .and.deep.equal({"opacity": "0.5", "bgColor": "green"});
    });
});