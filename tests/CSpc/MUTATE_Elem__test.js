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
    , expect = chai.expect
;
//////////////// WIP ///////////////////////////////////
describe(`Fn: MUTATE_Elem::     sets and returns - mutates - an Element.style.
    This final Fn RENDERS the visual Effects of a new CSD.
        `, function () {

    describe(`Fn MUTATE_Elem_byCsd ( Csd )         -> RETURNS a Fn( Elt -> Elt )
    
        NOTE: this is the Preferred signature: it waits till end to apply REAL HTML data: spans
        `, function () {

        let MUTATE_Elem_byCsd = require('../../CSpc/src/MUTATE_Elem').byCsd;

        let STUB_Elem = {style: {opacity: 1, color: 'red'}};
        let TEST_Csd = require('../../SSpc/StyleCSDs').Test;
        let DFLT_Csd = require('../../SSpc/StyleCSDs').Dflt;
        ;
        beforeEach(function () {
        });
        it(`expects MUTATE_Elem_byCsd (invoked w/ TEST_Csd )   to be a Function of artity:1.`, () => {
            expect(MUTATE_Elem_byCsd(TEST_Csd)).is.a('Function').and.length(1);
        });
        it(`expects MUTATE_Elem_byCsd(TEST_Csd)(STUB_Elem)    to be an Object with a style and properties.`, () => {
            expect(MUTATE_Elem_byCsd(TEST_Csd)(STUB_Elem)).is.a('Object')
                .has.property('style')
                .has.property("opacity", "0.5")
            ;
        });
    });
    describe(`Fn: MUTATE_Elem_byElem( Elt )         -> RETURNS ( csdDCT -> Elt )   
        `, function () {

        let MUTATE_Elem_byElem = require('../../CSpc/src/MUTATE_Elem')
            .byElem; // Fn(CSD) -> ELEM // ELEM -> ( CSD ->  ELEM )

        let STUB_Elem = {style: {opacity: 1, color: 'red'}}
            , TEST_Csd = require('../../SSpc/StyleCSDs').Test;
        ;
        beforeEach(function () {
        });
        it(`Fn: MUTATE_Elem_byElem  should be a function of artity:2.`, () => {
            MUTATE_Elem_byElem.should.be.a('Function').and.is.length(2);
        });
        it(`Fn: MUTATE_Elem_byElem ( Elt )   should be a function of artity:1.`, () => {
            MUTATE_Elem_byElem(STUB_Elem).should.be.a('Function').and.is.length(1);
        });
        it(`DCT: MUTATE_Elem_byElem( Elt )( csdDCT )    should be a DCT object with a style and properties.`, () => {
            MUTATE_Elem_byElem(STUB_Elem)(TEST_Csd).should.is.a('Object')
                .and.is.property('style')
                .and.is.property("opacity", "0.5")
            ;
        });
    });
});
