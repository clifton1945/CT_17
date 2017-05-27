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

context(`sizesDict: An Element has three RSpcs Classes, each will have a SIZE depending on the current CSpcFocusNdx:
    SIZE: { pstSize: N||0, curSize:N, fur:N||0 }
    `, function () {
    let sizesDict_fromSize = require('../src/evolve_SizesDict').fromSize; // size_chpr -> (  ndx_focus -> sizesDict_in_RSpc )
    describe(`sizesDict_fromSize::  size_chpr -> (  ndx_focus -> sizesDict_fromSize_in_RSpc: Obj.{{},{},{}}) )`, () => {
        let dflt, _CUT;
        beforeEach(function () {
            dflt = {pst: 0, cur: 0, fut: 0};
            _CUT = sizesDict_fromSize(5);
        });
        it(`should have 3 lengths { pst:n, cur:1, fut:n } GIVEN focusNdx > 1 && focusNdx < CSpcSize`, () => {
            expect(_CUT(1)).is.deep.equal({pst: 1, cur: 1, fut: 3});
            expect(_CUT(2)).is.deep.equal({pst: 2, cur: 1, fut: 2});
            expect(_CUT(3)).is.deep.equal({pst: 3, cur: 1, fut: 1});
        });
        it(`should have 2 lengths { pst:n, cur:1, fut:0 } IF focusNdx > 1 && focusNdx == CSpcSize`, () => {
            expect(_CUT(0)).is.deep.equal({pst: 0, cur: 1, fut: 4});
            expect(_CUT(4)).is.deep.equal({pst: 4, cur: 1, fut: 0});
        });
        it(`should usually have 1 lengths { pst:0, cur:1, fut:0} for focusNdx == 0 && CSpcSize == 1`, () => {
            expect(sizesDict_fromSize(1, 0)).is.deep.equal({pst: 0, cur: 1, fut: 0});
        });
        it(`should usually have 0 lengths { pst:0, cur:0, fut:0} for focusNdx == 0 && focusNdx == CSpcSize`, () => {
            expect(sizesDict_fromSize(0, 0)).is.deep.equal({pst: 0, cur: 1, fut: 0});
            expect(sizesDict_fromSize(0, 77)).is.deep.equal({pst: 0, cur: 1, fut: 0});
        });
    });
    let sizesDict_fromArray = require('../src/evolve_SizesDict').fromArray; // chptArray -> (  ndx_focus -> sizesDict_in_RSpc )
    describe(`sizesDict_fromArray:: RETURNS Fn(CSpc_FocusNdx -> RSpc_SizesOBJ)
        FROM Arg: CSpc_VersArr
        note: THIS IS A PREFERRED CONFIG that uses R.pipe`, function () {
        let cUT, ChptArray;
        beforeEach(function () {
            cUT = sizesDict_fromArray([0, 1, 2, 3, 4]); //STUB
        });
        it(`should have 3 lengths { pst:n, cur:1, fut:n } GIVEN focusNdx > 1 && focusNdx < ChptArray`, () => {
            cUT = sizesDict_fromArray([0, 1, 2, 3, 4]); //STUB
            expect(cUT(3)).is.deep.equal({pst: 3, cur: 1, fut: 1});
        });
        it(`should usually have 0 lengths { pst:0, cur:0, fut:0} for focusNdx == 0 && focusNdx == ChptArray`, () => {
            cUT = sizesDict_fromArray([]); //STUB
            expect(cUT(0)).is.deep.equal({pst: 0, cur: 1, fut: 0});
        });
    })
});