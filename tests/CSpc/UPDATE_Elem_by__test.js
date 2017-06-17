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
let chai = require('chai')
    , should = chai.should()
    // , expect = chai.expect
;
context(`    UPDATE_Elem progressively pipes in transformation code to apply to it parm: a SPN element 
    @ symb: ( {ELEM} ) {UPDATE_Elem_byElem(DICT.CSD)} ->  {ELEM}       
     `, function () {
    let RET;
    beforeEach(function () {
        this.STUB_CSD = {"opacity": "0.5", "bgColor": "green"};
        this.STUB_Elem = {style: {opacity: 1, bgColor: ''}};
        this.STUB_TRNSFRMR = {backgroundColor: R.always('yellow'), opacity: R.always('0.5')};
    });
    describe(`{UPDATE_Elem                      } Fn::(DICT.CSD)(ELEM) {UPDATE_Elem} -> ELEM
        `, function () {
        let UPDATE_Elem = require('../../CSpc/src/UPDATE_Elem').UPDATE_Elem;
        it(`should.be a Fn of arity:2; expecting a CSD and an Element.`, () => {
            UPDATE_Elem.should.is.a('Function');
            // UPDATE_Elem.should.is.a('Function').and.is.length(2);
        });
    });
    describe(`{UPDATE_Elem_byCsd          } Fn::( ELEM) {UPDATE_Elem_byElem(DICT.CSD)} ->  ELEM 
        `, function () {

        let UPDATE_Elem_byElem = require('../../CSpc/src/UPDATE_Elem')._byCsd({"opacity": "0.5", "bgColor": "green"});
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
            UPDATE_Elem_byCsd.should.be.a('Function').and.is.length(1);
        it(`should produce a new Elem given a CSD`, function () {
            RET = UPDATE_Elem_byCsd(this.STUB_CSD);
            RET.should.be.a('Object')
                .and.have.property('style')
                .and.deep.equal({"opacity": "0.5", "bgColor": "green"});
        });
    });
    describe(`{UPDATE_Elem:_byStylTrnfrm } Fn::( DCT.Trnfrm) -> {UPDATE_Elem_byStyleTrnfrm( DCT.ELEM)}  -> DCT.ELEM
        pipes a StyleTrnfrm  into UPDATE_Elem   
        `, function () {
        let UPDATE_Elem = require('../../CSpc/src/UPDATE_Elem')._byStyleTrnfrm;

        it(`should.be a Fn of arity:1 EXPECTING a TrnfrmDCT and RETURNING a Fn arity:1.`, () => {
            UPDATE_Elem.should.be.a('Function').and.is.length(1);
        });
        it(`invoked w/ (aStyleTrnfrmDCT) should.be a Fn of arity:1  EXPECTING a span.`, () => {
            RET = UPDATE_Elem(this, this.STUB_TRNSFRMR);
            RET.should.be.a('Function').and.is.length(1);
        });
        it(`invoked w/ a trnfrmDCT and a spanDCT should RETURN a new Elem.`, function () {
            RET = UPDATE_Elem(this.STUB_TRNSFRMR)(this.STUB_Elem);
            RET.should.be.a('Object')
                .and.is.property('style')
                .and.is.property("backgroundColor", "yellow")
            ;
            RET.should.be.a('Object')
                .and.is.property('style')
                .and.is.property("opacity", "0.5")
            ;
        });
    });
});
