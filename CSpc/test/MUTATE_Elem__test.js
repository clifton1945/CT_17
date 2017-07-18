/**
 // UPDATE_Elem_By____test
 */
"use strict";
//
// let R = require('ramda')
// , evolve = R.evolve
// , curry = R.curry
// , pipe = R.pipe
// ;
// let mocha = require('mocha')
// ;
// noinspection Annotator
let chai = require('chai')
    , expect = chai.expect
;
describe(`Fn: MUTATE_Elem::         mutates - sets and returns - an Element.style.
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
        it(`Fn: MUTATE_Elem_byElem  should be a function of artity:2.`,
            function () {
                expect(MUTATE_Elem_byElem).is.a('Function').and.has.length(2);
        });
        it(`Fn: MUTATE_Elem_byElem ( Elt )   should be a function of artity:1.`, function () {
            expect(MUTATE_Elem_byElem(STUB_Elem)).is.a('Function').and.has.length(1);
        });
        it(`DCT: MUTATE_Elem_byElem( Elt )( csdDCT )    should be a DCT object with a style and properties.`,
            function () {
                expect(MUTATE_Elem_byElem(STUB_Elem)(TEST_Csd)).is.a('Object')
                .and.is.property('style')
                .and.is.property("opacity", "0.5")
            ;
        });
    });
});
