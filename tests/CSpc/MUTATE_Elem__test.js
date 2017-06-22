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
//////////////// WIP ///////////////////////////////////
describe(`MUTATE_Elem:: mutates, i.e. sets and returns, a given Element.style.
     * SYMB  eltDCT -> (csdDCT -> eltDCT)   
        `, function () {

    let MUTATE_Elem = require('../../CSpc/src/MUTATE_Elem')
        .anElem; // (ELEM)-> ( CSD ->  ELEM )

    describe(`{MUTATE_Elem:: changes with arguments
        * SYMB  eltDCT -> (csdDCT -> eltDCT)   
        `, function () {
        let STUB_CSD, STUB_Elem;
        let MUTATE_Elem_byCsd, MUTATED_Elt;
        beforeEach(function () {
            STUB_CSD = {opacity: "0.5", color: "green"};
            STUB_Elem = {style: {opacity: 1, color: 'red'}};
            MUTATE_Elem_byCsd = MUTATE_Elem(STUB_Elem);
            MUTATED_Elt = MUTATE_Elem(STUB_Elem, STUB_CSD);
        });
        it(`Fn: MUTATE_Elem  should be a function of artity:2.`, () => {
            MUTATE_Elem.should.be.a('Function').and.is.length(2);
        });
        it(`Fn: MUTATE_Elem  should be a function of artity:1.`, () => {
            MUTATE_Elem(STUB_Elem).should.be.a('Function').and.is.length(1);
        });
        it(`DCT: MUTATE_Elem( Elem )( CSD )    should be a DCT object with a style and properties.`, () => {
            MUTATE_Elem(STUB_Elem)(STUB_CSD).should.is.a('Object')
                .and.is.property('style')
                .and.is.property("opacity", "0.5")
            ;
        });
    });
});
