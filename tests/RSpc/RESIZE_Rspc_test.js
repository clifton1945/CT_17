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
chai.should();
context(`RESIZE_inRSpc returns Functions to RESIZE - rebuild - the Rspc DICT of Read Class sizes - lengths.
        `, function () {

    //SOMEDAY  chnage names FROM fromNNNN TO usingNNNN or better
    describe(`RESIZE_fromSize  returns Fn (  ndx_focus -> RESIZE_fromSize ) given partial: size_chpr. `, function () {

        let RESIZE_fromSize = require('../../RSpc/src/RESIZE_Rspc').fromSize; // size_chpr -> (  ndx_focus -> RESIZE_in_RSpc )

        let _CUT;
        beforeEach(function () {
            _CUT = RESIZE_fromSize(5);
        });
        it(`should RESIZE RspcSizes given a fixed CspcSize: 5`, () => {
            _CUT(0).should.deep.equal({pst: 0, cur: 1, fut: 4});
            expect(_CUT(1)).is.deep.equal({pst: 1, cur: 1, fut: 3});
            expect(_CUT(2)).is.deep.equal({pst: 2, cur: 1, fut: 2});
            expect(_CUT(3)).is.deep.equal({pst: 3, cur: 1, fut: 1});
            expect(_CUT(4)).is.deep.equal({pst: 4, cur: 1, fut: 0});
        });
        it(`should RESIZE RspcSizes given a fixed CspcSize: 1`, () => {
            expect(RESIZE_fromSize(1, 0)).is.deep.equal({pst: 0, cur: 1, fut: 0});
        });
        it(`should RESIZE RspcSizes given a fixed CspcSize: 0 -> IS ALWAYS {pst: 0, cur: 1, fut: 0}`, () => {
            expect(RESIZE_fromSize(0, 0)).is.deep.equal({pst: 0, cur: 1, fut: 0});
            expect(RESIZE_fromSize(0, 77)).is.deep.equal({pst: 0, cur: 1, fut: 0});
        });
    });
    describe(`RESIZE_fromArray:: returns Fn (  ndx_focus -> RESIZE_fromArray )  given partial: array_chpr. `, function () {

        let RESIZE_fromArray = require('../../RSpc/src/RESIZE_Rspc').fromArray; // chptArray -> (  ndx_focus -> RESIZE_in_RSpc )

        let _CUT;
        beforeEach(function () {
            _CUT = RESIZE_fromArray([0, 1, 2, 3, 4]); //STUB
        });
        it(`should RESIZE RspcSizes given a fixed CspcArray: [0, 1, 2, 3, 4]`, () => {
            _CUT = RESIZE_fromArray([0, 1, 2, 3, 4]); //STUB
            expect(_CUT(3)).is.deep.equal({pst: 3, cur: 1, fut: 1});
        });
        it(`should RESIZE RspcSizes given a fixed CspcArray: [] -> IS ALWAYS {pst: 0, cur: 1, fut: 0}`, () => {
            _CUT = RESIZE_fromArray([]); //STUB
            expect(_CUT(0)).is.deep.equal({pst: 0, cur: 1, fut: 0});
        });
    });
    describe(`RESIZE_fromFocus: 3  returns Fn (  size_chpr -> RESIZE_fromFocus )  given partial: ndx_focus. `, function () {

        let RESIZE_fromFocus = require('../../RSpc/src/RESIZE_Rspc').fromFocus; // ndx_focus -> ( chptArray -> RESIZE_in_RSpc )
        let _CUT;
        beforeEach(function () {
            let focusNdx = 3;
            _CUT = RESIZE_fromFocus(focusNdx); // now expects a chpt Size
        });
        it(`should RESIZE RspcSizes given a fixed focusNdx: 3 `, () => {
            expect(_CUT(3)).is.not.deep.equal({pst: 3, cur: 1, fut: 0}); // OOPS, this returns default 0,1,0
            expect(_CUT(4)).is.deep.equal({pst: 3, cur: 1, fut: 0});
            expect(_CUT(5)).is.deep.equal({pst: 3, cur: 1, fut: 1});
            expect(_CUT(6)).is.deep.equal({pst: 3, cur: 1, fut: 2});
        });
    });
    describe(`RESIZE_fromFocus: 1  returns Fn (  size_chpr -> RESIZE_fromFocus )  given partial: ndx_focus. `, function () {

        let RESIZE_fromFocus = require('../../RSpc/src/RESIZE_Rspc').fromFocus; // ndx_focus -> ( chptArray -> RESIZE_in_RSpc )
        let _CUT;
        beforeEach(function () {
            let focusNdx = 1;
            _CUT = RESIZE_fromFocus(focusNdx); // now expects a chpt Size
        });

        it(`should RESIZE RspcSizes given a fixed focusNdx: 1 which is less than the ChptSize. `, () => {
            // expect(_CUT(3)).is.deep.equal({pst: 1, cur: 1, fut: 1});
            expect(_CUT(2)).is.deep.equal({pst: 1, cur: 1, fut: 0});
            expect(_CUT(3)).is.deep.equal({pst: 1, cur: 1, fut: 1});
            expect(_CUT(4)).is.deep.equal({pst: 1, cur: 1, fut: 2});
            expect(_CUT(5)).is.deep.equal({pst: 1, cur: 1, fut: 3});
            expect(_CUT(6)).is.deep.equal({pst: 1, cur: 1, fut: 4});
        });
    });
});