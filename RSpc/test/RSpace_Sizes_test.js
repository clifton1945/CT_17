//
/**
 *RSpace_Sizes
 */
"use strict";


let R = require('ramda')
    // , curry = R.curry
    // , always = R.always
;
let context = describe
;
let chai = require('chai')
    , expect = chai.expect
    // , should = chai.should()
;

let RSpace_Lengths = require('../src/RSpace_Sizes').RSpace_Lengths; // ( CSpcFocusN ->  CSpcSizeN ) -> RSpcSizesOBJ )
let RSpace_Sizes = require('../src/RSpace_Sizes').RSpace_Sizes; // CSpcFocusN -> ( CSpcSizeN -> RSpcSizesOBJ )
let RSpace_SizeObj = require('../src/RSpace_Sizes').RSpace_SizeObj; // CSpc_Arr -> ( CSpc_FocusN -> RSpc_LengthsOBJ)

context(`RSpcRSpace_Sizes: An Element has three RSpcs Classes, each will have a size depending on the current CSpcFocusNdx;  { pstSize: N||0, curSize:N, fur:N||0 }
    `, function () {
    describe(`RSpcSizes:: N.CSpc_Size -> (N.CSpc_Focus -> Obj.{{},{},{}})`, () => {
        let dflt, _Sizes, _Obj, CSpcSize;
        beforeEach(function () {
            dflt = {pst: 0, cur: 0, fut: 0};
            _Sizes = RSpace_Sizes(5); // NOTE: 5 IS a testStub Size
            _Obj = RSpace_SizeObj([0, 1, 2, 3, 4]);
        });
        it(`should have 3 lengths { pst:n, cur:1, fut:n } GIVEN focusNdx > 1 && focusNdx < CSpcSize`, () => {
            expect(RSpace_Lengths(1, 5)).to.deep.equal({pst: 1, cur: 1, fut: 3});
            expect(_Sizes(1)).to.deep.equal(RSpace_Lengths(1, 5));
            expect(RSpace_Lengths(2, 5)).to.deep.equal({pst: 2, cur: 1, fut: 2});
            expect(_Sizes(2)).to.deep.equal({pst: 2, cur: 1, fut: 2});
            expect(RSpace_Lengths(3, 5)).to.deep.equal({pst: 3, cur: 1, fut: 1});
        });
        it(`should have 2 lengths { pst:n, cur:1, fut:0 } IF focusNdx > 1 && focusNdx == CSpcSize`, () => {
            expect(RSpace_Lengths(0, 5)).to.deep.equal({pst: 0, cur: 1, fut: 4});
            expect(RSpace_Lengths(4, 5)).to.deep.equal({pst: 4, cur: 1, fut: 0});
        });
        it(`should usually have 1 lengths { pst:0, cur:1, fut:0} for focusNdx == 0 && CSpcSize == 1`, () => {
            expect(RSpace_Lengths(0, 1)).to.deep.equal({pst: 0, cur: 1, fut: 0});
        });
        it(`should usually have 0 lengths { pst:0, cur:0, fut:0} for focusNdx == 0 && focusNdx == CSpcSize`, () => {
            expect(RSpace_Lengths(0, 0)).to.deep.equal({pst: 0, cur: 1, fut: 0});
            expect(RSpace_Lengths(77, 0)).to.deep.equal({pst: 0, cur: 1, fut: 0});
        });
    });
    describe(`RSpcSize_Obj:: RETURNS Fn(CSpc_FocusNdx -> RSpc_SizesOBJ)
        FROM Arg: CSpc_VersArr
        note: THIS IS A PREFERRED CONFIG that uses R.pipe`, function () {
        let _Obj, CSpcSize;
        beforeEach(function () {
            _Obj = RSpace_SizeObj([0, 1, 2, 3, 4]); //STUB
        });
        it(`should have 3 lengths { pst:n, cur:1, fut:n } GIVEN focusNdx > 1 && focusNdx < CSpcSize`, () => {
            _Obj = RSpace_SizeObj([0, 1, 2, 3, 4]); //STUB
            expect(_Obj(3)).to.deep.equal({pst: 3, cur: 1, fut: 1});
        });
        it(`should usually have 0 lengths { pst:0, cur:0, fut:0} for focusNdx == 0 && focusNdx == CSpcSize`, () => {
            _Obj = RSpace_SizeObj([]); //STUB
            expect(_Obj(0)).to.deep.equal({pst: 0, cur: 1, fut: 0});
        });
    })
});