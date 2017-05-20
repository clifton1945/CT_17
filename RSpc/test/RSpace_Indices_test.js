/**
 *RSpace_Indices
 */
"use strict";


let R = require('ramda')
    // , curry = R.curry
    , always = R.always
;
let context = describe
;
let chai = require('chai')
    , expect = chai.expect
    // , should = chai.should()
;


let RSpace_Lengths = require('../src/RSpace_Lengths');
// CSpc_Length -> ( CSpc_Focus -> RSpc_Lengths )

let RSpace_Index = () => {
};

context(`An Element's ReadSpace Indices RETURNS a RSpc_Index  ->> Ndx NUM
    WITH  <<- ( RSpc_LengthsCSpc Index ARG).
    `, () => {

    describe(`RSpc_Indices:: 
        N.CSpc_Len -> (RSpace_Lengths`, () => {
        let dflt, CSpcLen;
        beforeEach(function () {
            dflt = {pst: 0, cur: 0, fut: 0};
        });
        it.only(`should == CSpc_Ndx IF CSpc_Ndx < CSpc_Focus `, () => {
            expect(RSpace_Lengths(5, 1)).to.deep.equal({pst: 1, cur: 1, fut: 3});
        });
        it(`should have 2 lengths { pst:n, cur:1, fut:0 } IF focusNdx > 1 && focusNdx == CSpcLen`, () => {
            expect(RSpace_Lengths(5, 0)).to.deep.equal({pst: 0, cur: 1, fut: 4});
        });
        // it.skip(`should usually have 1 lengths { pst:0, cur:1, fut:0} for focusNdx == 0 && CSpcLen == 1`, () => {
        //     expect(RSpace_Lengths(1, 0)).to.deep.equal({pst: 0, cur: 1, fut: 0});
        // });
        // it.skip(`should usually have 0 lengths { pst:0, cur:0, fut:0} for focusNdx == 0 && focusNdx == CSpcLen`, () => {
        //     expect(RSpace_Lengths(2, 77)).to.deep.equal({pst: 0, cur: 1, fut: 0});
        // });
    });
});