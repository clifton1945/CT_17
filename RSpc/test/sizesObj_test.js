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
;

context(`sizesObj: An Element has three RSpcs Classes, each will have a SIZE depending on the current CSpcFocusNdx:
    SIZE: { pstSize: N||0, curSize:N, fur:N||0 }
    `, function () {
    let sizesObj_fromSize = require('../src/sizesObj').fromSize; // size_chpr -> (  ndx_focus -> sizesObj_in_RSpc )
    describe(`sizesObj_fromSize::  size_chpr -> (  ndx_focus -> sizesObj_fromSize_in_RSpc: Obj.{{},{},{}}) )`, () => {
        let dflt;
        beforeEach(function () {
            dflt = {pst: 0, cur: 0, fut: 0};
        });
        it(`should have 3 lengths { pst:n, cur:1, fut:n } GIVEN focusNdx > 1 && focusNdx < CSpcSize`, () => {
            expect(sizesObj_fromSize(5, 1)).is.deep.equal({pst: 1, cur: 1, fut: 3});
            expect(sizesObj_fromSize(5, 2)).is.deep.equal({pst: 2, cur: 1, fut: 2});
            expect(sizesObj_fromSize(5, 3)).is.deep.equal({pst: 3, cur: 1, fut: 1});
        });
        it(`should have 2 lengths { pst:n, cur:1, fut:0 } IF focusNdx > 1 && focusNdx == CSpcSize`, () => {
            expect(sizesObj_fromSize(5, 0)).is.deep.equal({pst: 0, cur: 1, fut: 4});
            expect(sizesObj_fromSize(5, 4)).is.deep.equal({pst: 4, cur: 1, fut: 0});
        });
        it(`should usually have 1 lengths { pst:0, cur:1, fut:0} for focusNdx == 0 && CSpcSize == 1`, () => {
            expect(sizesObj_fromSize(1, 0)).is.deep.equal({pst: 0, cur: 1, fut: 0});
        });
        it(`should usually have 0 lengths { pst:0, cur:0, fut:0} for focusNdx == 0 && focusNdx == CSpcSize`, () => {
            expect(sizesObj_fromSize(0, 0)).is.deep.equal({pst: 0, cur: 1, fut: 0});
            expect(sizesObj_fromSize(0, 77)).is.deep.equal({pst: 0, cur: 1, fut: 0});
        });
    });
    let sizesObj_fromArray = require('../src/sizesObj').fromArray; // chptArray -> (  ndx_focus -> sizesObj_in_RSpc )
    describe(`RSpcSizecUT:: RETURNS Fn(CSpc_FocusNdx -> RSpc_SizesOBJ)
        FROM Arg: CSpc_VersArr
        note: THIS IS A PREFERRED CONFIG that uses R.pipe`, function () {
        let cUT, ChptArray;
        beforeEach(function () {
            cUT = sizesObj_fromArray([0, 1, 2, 3, 4]); //STUB
        });
        it(`should have 3 lengths { pst:n, cur:1, fut:n } GIVEN focusNdx > 1 && focusNdx < ChptArray`, () => {
            cUT = sizesObj_fromArray([0, 1, 2, 3, 4]); //STUB
            expect(cUT(3)).is.deep.equal({pst: 3, cur: 1, fut: 1});
        });
        it(`should usually have 0 lengths { pst:0, cur:0, fut:0} for focusNdx == 0 && focusNdx == ChptArray`, () => {
            cUT = sizesObj_fromArray([]); //STUB
            expect(cUT(0)).is.deep.equal({pst: 0, cur: 1, fut: 0});
        });
    })
});