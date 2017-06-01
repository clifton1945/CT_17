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
context(`RESIZE_: Using different arrangements of arity:2 params fromChptSpace, returns Functions: RESIZE_fromSize, RESIZE_fromArray, RESIZE_fromFocus
        `, function () {

    describe(`RESIZE_fromSize  returns Fn (  ndx_focus -> RESIZE_fromSize )  given partial: size_chpr
    `, function () {

        let RESIZE_fromSize = require('../src/RESIZE_Rspc').fromSize; // size_chpr -> (  ndx_focus -> RESIZE_in_RSpc )

        let _CUT;
        beforeEach(function () {
            _CUT = RESIZE_fromSize(5);
        });
        it(`should RESIZE RspcSizes given a fixed CspcSize: 5`, () => {
            expect(_CUT(0)).is.deep.equal({pst: 0, cur: 1, fut: 4});
            expect(_CUT(1)).is.deep.equal({pst: 1, cur: 1, fut: 3});
            expect(_CUT(2)).is.deep.equal({pst: 2, cur: 1, fut: 2});
            expect(_CUT(3)).is.deep.equal({pst: 3, cur: 1, fut: 1});
            expect(_CUT(4)).is.deep.equal({pst: 4, cur: 1, fut: 0});
        });
        it(`should RESIZE RspcSizes given a fixed CspcSize: 1`, () => {
            expect(RESIZE_fromSize(1, 0)).is.deep.equal({pst: 0, cur: 1, fut: 0});
        });
        it(`RESIZE RspcSizes given a fixed CspcSize: 0 -> IS ALWAYS {pst: 0, cur: 1, fut: 0}`, () => {
            expect(RESIZE_fromSize(0, 0)).is.deep.equal({pst: 0, cur: 1, fut: 0});
            expect(RESIZE_fromSize(0, 77)).is.deep.equal({pst: 0, cur: 1, fut: 0});
        });
    });
    let RESIZE_fromArray = require('../src/RESIZE_Rspc').fromArray; // chptArray -> (  ndx_focus -> RESIZE_in_RSpc )
    describe(`RESIZE_fromArray:: RETURNS Fn (CSpc_FocusNdx -> RSpc_SizesOBJ)
        FROM Arg: CSpc_VersArr
        note: THIS IS A PREFERRED CONFIG that uses R.pipe`, function () {
        let CUT, ChptArray;
        beforeEach(function () {
            CUT = RESIZE_fromArray([0, 1, 2, 3, 4]); //STUB
        });
        it(`should have 3 lengths { pst:n, cur:1, fut:n } GIVEN focusNdx > 1 && focusNdx < ChptArray`, () => {
            CUT = RESIZE_fromArray([0, 1, 2, 3, 4]); //STUB
            expect(CUT(3)).is.deep.equal({pst: 3, cur: 1, fut: 1});
        });
        it(`should usually have 0 lengths { pst:0, cur:0, fut:0} for focusNdx == 0 && focusNdx == ChptArray`, () => {
            CUT = RESIZE_fromArray([]); //STUB
            expect(CUT(0)).is.deep.equal({pst: 0, cur: 1, fut: 0});
        });
    })
});