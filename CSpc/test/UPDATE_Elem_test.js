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
    let UPDATE_ = require('../src/UPDATE_Elem');
    let UPDATE_anElem = UPDATE_.anElem;
    let CUT;
    beforeEach(function () {
        this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
        CUT = UPDATE_anElem(this.STUB_CSD);
    });

    describe(`FnCUT: UPDATE_anElem = DICT:CSD -> ( ELEM.CSpc -> ELEM.CSpc )
        `, function () {
        // CODE UNDER TEST
        let UPDATE_anElem = require('../src/UPDATE_Elem').anElem;
        it(`should.be a Fn of arity:1 and Expect an Element.`, () => {
            CUT.should.be.a('Function').and.is.length(1);
        });
    });
    describe(`FnCUT: UPDATE_anElem( ELEM.CSpc )  -> ELEM.CSpc)
        `, function () {
        // CODE UNDER TEST
        beforeEach(function () {
            this.STUB_Elem = {style: {opacity: 1, bgColor: ''}};
            this.Elem = CUT(this.STUB_Elem);
        });
        it(`should.be a Elem w/ a new style dictionary: .`, function () {
            this.Elem.should.be.a('Object')
                .and.have.property('style')
                .and.deep.equal({"opacity": "0.5", "bgColor": "green"});
        });

    });
});

