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

    let MUTATE_ = require('../../CSpc/src/MUTATE_Elem').anElem;

    describe(`{MUTATE_:: changes with arguments
        * SYMB  eltDCT -> (csdDCT -> eltDCT)   
        `, function () {
        let STUB_CSD, STUB_Elem;
        let MUT_anElt_byCsd, MUTATED_Elt;
        beforeEach(function () {
            STUB_CSD = {opacity: "0.5", color: "green"};
            STUB_Elem = {style: {opacity: 1, color: 'red'}};

            MUT_anElt_byCsd = MUTATE_(STUB_Elem);
            MUTATED_Elt = MUTATE_(STUB_Elem, STUB_CSD);
        });


        it(`Fn:MUTATE_  should be a function of artity:2.`, () => {
            MUTATE_.should.be.a('Function').and.is.length(2);
        });
        it(`Fn:MUT_anElt_byCsd  should be a function of artity:1.`, () => {
            MUT_anElt_byCsd.should.be.a('Function').and.is.length(1);
        });
        it(`DCT: MUTATED_Elt    should be a DCT object with a style and properties.`, () => {
            MUTATED_Elt.should.is.a('Object')
                .and.is.property('style')
                .and.is.property("opacity", "0.5")
            ;
        });
    });
});
