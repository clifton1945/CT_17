/**
 // UPDATE_Elem_By____test
 */
"use strict";
//
let R = require('ramda')
// , evolve = R.evolve
// , curry = R.curry
// , pipe = R.pipe
;
// let mocha = require('mocha');
// noinspection Annotator
let chai = require('chai')
    , expect = chai.expect
;
describe(`Fn: MUTATE_Elem::         mutates - sets and returns - an Element.style.
        `, function () {
    describe(`Fn: MUTATE_Elem_byElem( Elt )         -> RETURNS ( csdDCT -> Elt )   
        `, function () {
        // CODE UNDER TEST: (ELEM)-> ( CSD ->  ELEM )
        let MUTATE_Elem_byElem = require('../src/MUTATE_Elem').byElem
        ;
        // TEST DATA
        let TEST_Elem = {}, TEST_Csd = {};
        beforeEach(function () {
            loadFixtures('index.html');
            //REMEMBER this BREAKS a mocha test !!
            TEST_Elem = document.querySelector('.chpt span');
            TEST_Csd = {color: 'red', opacity: 0.5};
        });
        it(`Fn: MUTATE_Elem_byElem  should be a function of artity:2.`,
            function () {
                expect(MUTATE_Elem_byElem).is.a('Function').and.has.length(2);
            });
        it(`Fn: MUTATE_Elem_byElem ( Elt )   should be a function of artity:1.`, function () {
            expect(MUTATE_Elem_byElem(TEST_Elem)).is.a('Function').and.has.length(1);
        });
        it(`DCT: MUTATE_Elem_byElem( Elt )( csdDCT )    should be a DCT object with a style and properties.`, function () {
            expect(MUTATE_Elem_byElem(TEST_Elem)(TEST_Csd).style).is.property('color').equals('red')
            ;
        });
    });
    describe(`Fn: MUTATE_Elem( Elt )         -> RETURNS ( csdDCT -> Elt )   
        `, function () {
        // CODE UNDER TEST: (ELEM)-> ( CSD ->  ELEM )
        let MUTATE_Elem = require('../src/MUTATE_Elem').MUTATE_
        ;
        // TEST DATA
        let TEST_Elem = {}, TEST_Csd = {};
        beforeEach(function () {
            loadFixtures('index.html');
            //REMEMBER this BREAKS a mocha test !!
            TEST_Elem = document.querySelector('.chpt span');
            TEST_Csd = {color: 'red', opacity: 0.5};
        });
        it(`DCT: MUTATE_Elem( Elt )( csdDCT )    should be a DCT object with a style and properties.`, function () {
            expect(MUTATE_Elem(TEST_Csd)(TEST_Elem).style).is.property('color').equals('red')
            ;
        });
    })
});