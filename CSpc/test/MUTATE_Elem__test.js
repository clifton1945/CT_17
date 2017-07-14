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
describe(`Fn: MUTATE_Elem::     sets and returns - mutates - an Element.style.
    This final Fn RENDERS the visual Effects of a new CSD.
        `, function () {
    describe(`Fn: MUTATE_Elem_byElem( Elt )         -> RETURNS ( csdDCT -> Elt )   
        `, function () {

        let MUTATE_Elem_byElem = require('../src/MUTATE_Elem')
            .byElem; // Fn(CSD) -> ELEM // ELEM -> ( CSD ->  ELEM )

        let STUB_Elem = {style: {opacity: 1, color: 'red'}}
            , TEST_Csd = require('../../SSpc/StyleCSDS').Test.noon;

        beforeEach(function () {
            // loadFixtures('index.html'); //REMEMBER this BREAKS a mocha test !!
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
