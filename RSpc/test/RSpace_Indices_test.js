/**
 *RSpace_Indices
 */
"use strict";


let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
    // , always = R.always
;
let context = describe
;
let chai = require('chai')
    , expect = chai.expect
    // , should = chai.should()
;


let RSpaceSize_Obj = require('../src/RSpace_Sizes').RSpaceSize_Obj;
// :: CSpc_Array -> CSpc_Focus -> RSpc_Size_Obj

const rSpcNdx = curry(function (_Obj) {

});

context(`An Element's RSpace_Indices RETURNS its RSpc_Index GIVEN its CSpc_Index.
    `, function () {

    describe(`rSpcNdx:: rSpcObj -> ( cSpcNdx -> rSpcNdx )
        `, function () {
        let dflt, _Obj, _CUT, Focus;
        beforeEach(function () {
            dflt = {pst: 0, cur: 0, fut: 0};
            _Obj = RSpaceSize_Obj([0, 1, 2, 3, 4]);
            // _CUT = pipe();
        });
        it.only(`expects a well formed RSpcSize_Obj as an Argument `, () => {
            expect(_Obj(1)).to.deep.equal({pst: 1, cur: 1, fut: 3});
        });
        it(`expects to returns a Num`, () => {
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