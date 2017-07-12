/**
 // UPDATE_Elem_By____test
 */
"use strict";
//
let R = require('ramda')
    , evolve = R.evolve
    , curry = R.curry
    , compose = R.compose
    , pipe = R.pipe
;
let chai = require('chai')
    , should = chai.should()
    // , expect = chai.expect
;
describe(`SpanStyl_MUTATOR::always returns  Fn( SPN -> SPN )
     * SYMB:  a -> ( eltDCT -> ( eltDCT)   
     NOTE: for this test SS_Mutator  ===  SpanStyl_MUTATOR;
        `, function () {
    let SS_MUTATOR = require('../../SSpc/depr/SpanStyl_MUTATOR').SpanStyl_MUTATOR;

    describe(`{SpanStyl_MUTATOR:: SIGNATURE changes
        * SYMB  csdDCT ->  eltDCT -> eltDCT)  
        * SYMB  a -> ( eltDCT ->  eltDCT)   
        // `, function () {

        let STUB_CSD, STUB_Elem;
        beforeEach(function () {
            STUB_CSD = {color: "green", opacity: "0.5"};
            STUB_Elem = {style: {opacity: '1.0', color: 'red'}};
        });
        it(`SpanStyl_MUTATOR( STUB_Elem ):  should be a DCT object with a style and properties.`, () => {
            SS_MUTATOR(STUB_Elem).should.is.a('Object')
                .and.is.property('style')
                .and.is.property("opacity", "0.5")
            ;
            SS_MUTATOR(STUB_Elem).should.is.a('Object')
                .and.is.property('style')
                .and.is.property("color", "green")
            ;
        });
    });
});
