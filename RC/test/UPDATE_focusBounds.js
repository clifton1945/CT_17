/**
 * Created by CLIF on 4/4/2017.
 */
"use strict";

let R = require('ramda')
    , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
    , curry = R.curry
    , always = R.always
;

let chai = require('chai')
    , should = chai.should()
    , expect = chai.expect
;

// let RCBounds_TRSFRMS = curry(
//     /**
//      *  ..... RCBounds_TRSFRMS:: N->DICT
//      *  USAGE:
//      * @param focus_ndx
//      * @return {{old: {len: *}, focus: {beg: *}, new: {beg: *, len: *}}}
//      * @param cv_set
//      */
//     function (cv_set, focus_ndx) {
//         let cv_len = R.subtract(R.length(cv_set)); // N -> N
//         return {
//             old: {len: always(focus_ndx - 1)},
//             focus: {beg: always(focus_ndx)},
//             new: {
//                 beg: always(focus_ndx + 2),
//                 len: always(cv_len(focus_ndx))
//             }
//         }
//     }
// );
// let STUB_CVRange = R.range(0, 8);
// let defaultRCB = require('../src/Dflt_RCBounds');
//
// let EVOLVE_ChptVerse_RCBounds_1 = n => R.evolve(RCBounds_TRSFRMS(STUB_CVRange, n), defaultRCB); // N -> DICT
//
// let hold = 0;

//CODE UNDER TEST
// let defaultRCB = require('../src/Dflt_RCBounds');
// let focusLen = defaultRCB.focus.len;
// let focusNdx;

// const isFocus = curry(
//     (f_ndx) => {
//         let dict = require('../src/Dflt_RCBounds');
//         let gteFocusNdx0 = R.gte(R.__, f_ndx);
//         let lteFocusNdx1 = R.lte(R.__, dict.focus.len + f_ndx - 1);
//         return  R.both(gteFocusNdx0, lteFocusNdx1);
//     });

//PLAN to REPLACE mutating the RCBounds WITH converting everything on the fly to return any cvIndex's Weight
describe(`..UPDATE_Weight: a Function w/ params(N.newFocus, NL.chptverses) that
        REASSIGN RClss lengths, then CONVERT a cvNdx to its rcNdx, then RETRIEVES RCBound, then RETURN its Weight.`, () => {
    describe(` USE Fn: isFocus TO begin triage of a cvNdx`, () => {
        beforeEach(function () {
            // loadFixtures('index.html'); //NOTE remember this breaks a mocha test
            // this.doc = document;
            this.isFocus = curry(
                (f_ndx) => {
                    let dict = require('../src/Dflt_RCBounds');
                    let gteFocusNdx0 = R.gte(R.__, f_ndx);
                    let lteFocusNdx1 = R.lte(R.__, dict.focus.len + f_ndx - 1);
                    return R.both(gteFocusNdx0, lteFocusNdx1);
                });
        });
        it(`should define and triage aCV_Ndx ReadClss.`, () => {

            // expect(this.CUT(0)).be.false;
            // expect(this.CUT(1)).be.false;
            expect(this.isFocus(2)(2)).be.true;
            // expect(this.CUT(3)).be.true;
            // expect(this.CUT(4)).be.true
        });
    });
});

