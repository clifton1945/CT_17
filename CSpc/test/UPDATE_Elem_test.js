/**
 // UPDATE_Element_test
 */
"use strict";
//
// let R = require('ramda')
;
let chai = require('chai')
    , should = chai.should()
    // , expect = chai.expect
;
context(` Fn: UPDATE_ anElem applies each style CSD property to Elem's style object. 
    @ symb: ( {ELEM} ) {UPDATE_anElem(DICT.CSD)} ->  {ELEM}       
     `, function () {
});
describe(`{UPDATE_} Fn:(DICT.CSD)(ELEM) {UPDATE_} -> ELEM
        `, function () {

    let UPDATE_ = require('../src/UPDATE_Elem');
    beforeEach(function () {
        this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
        this.STUB_Elem = {style: {opacity: 1, bgColor: ''}};
    });
    it(`should.be a Fn of arity:2 and Expect an Element.`, () => {
        // noinspection Annotator
        UPDATE_.should.be.a('Function').and.is.length(2);
    });
});
describe(`{UPDATE_anElem} Fn:( ELEM) {UPDATE_anElem(DICT.CSD)} ->  ELEM 
        `, function () {

    let UPDATE_anElem = require('../src/UPDATE_Elem').anElem({"opacity": "0.5", "bgColor": "green"});
    beforeEach(function () {
        this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
        this.STUB_Elem = {style: {opacity: 1, bgColor: ''}};
    });
    it(`should.be a Fn of arity:1 and Expect an Element.`, () => {
        UPDATE_anElem.should.be.a('Function').and.is.length(1);
    });
    it(`should.produce a new Elem given an Element: .`, function () {
        UPDATE_anElem(this.STUB_Elem).should.be.a('Object')
            .and.have.property('style')
            .and.deep.equal({"opacity": "0.5", "bgColor": "green"});
    });
});
describe(`{UPDATE_byCSD} Fn:( DICT.CSD) {UPDATE_anElem( ELEM)}  -> ELEM
        `, function () {

    let UPDATE_byCSD = require('../src/UPDATE_Elem').byCSD({style: {opacity: 1, bgColor: ''}});
    beforeEach(function () {
        this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
    });
    it(`should.be a Fn of arity:1 and Expect a CSD.`, () => {
        UPDATE_byCSD.should.be.a('Function').and.is.length(1);
    });
    it(`should produce a new Elem given a CSD`, function () {
        let RET = UPDATE_byCSD(this.STUB_CSD);
        RET.should.be.a('Object')
            .and.have.property('style')
            .and.deep.equal({"opacity": "0.5", "bgColor": "green"});
    });
});