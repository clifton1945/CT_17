/**
 // UPDATE_Element_test
 */
"use strict";
//
let R = require('ramda')
;
let chai = require('chai')
    , should = chai.should()
    , expect = chai.expect
;
context(` Fn: UPDATE_Elem.js      
    USAGE: 
        let UPDATE_Verse = UPDATE_anElem( aCSD )
        UPDATE(aVerse) // -> an updated Verse
     `, function () {
    //CODE UNDER TEST
    // let UPDATE_ = require('../src/UPDATE_Elem');
    // let UPDATE_anElem = UPDATE_.anElem;
    // let CUT;

    describe(`{UPDATE_} Fn:(DICT.CSD)(ELEM) {UPDATE_} -> ELEM
        `, function () {
        beforeEach(function () {
            this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
            this.STUB_Elem = {style: {opacity: 1, bgColor: ''}};
        });

        let UPDATE_ = require('../src/UPDATE_Elem');
        it(`should.be a Fn of arity:2 and Expect an Element.`, () => {
            UPDATE_.should.be.a('Function').and.is.length(2);
        });
    });
    describe(`{UPDATE_anElem} Fn:( ELEM) {UPDATE_anElem(DICT.CSD)} ->  ELEM 
        `, function () {
        beforeEach(function () {
            this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
            this.STUB_Elem = {style: {opacity: 1, bgColor: ''}};
        });

        let UPDATE_anElem = require('../src/UPDATE_Elem').anElem({"opacity": "0.5", "bgColor": "green"});

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
        beforeEach(function () {
            this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
            this.STUB_Elem = {style: {opacity: 1, bgColor: ''}};
        });

        let UPDATE_byCSD = require('../src/UPDATE_Elem').byCSD(this.STUB_Elem);
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
});

