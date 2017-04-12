/**
 * Created by CLIF on 4/4/2017.
 */
"use strict";

let R = require('ramda')
    , pipe = R.pipe
//     , compose = R.compose
    , map = R.map
    , curry = R.curry
    // , always = R.always
;

let chai = require('chai')
    , should = chai.should()
    , expect = chai.expect
;

// let RCBounds_TRSFRMS = curry(
//     /**
//      *  ..... RCBounds_TRSFRMS:: N->DICT
//      *  USAGE:
//      * @param cur_ndx
//      * @return {{old: {len: *}, cur: {beg: *}, new: {beg: *, len: *}}}
//      * @param cv_set
//      */
//     function (cv_set, cur_ndx) {
//         let cv_len = R.subtract(R.length(cv_set)); // N -> N
//         return {
//             old: {len: always(cur_ndx - 1)},
//             cur: {beg: always(cur_ndx)},
//             new: {
//                 beg: always(cur_ndx + 2),
//                 len: always(cv_len(cur_ndx))
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
// let curLen = defaultRCB.cur.len;
// let curNdx;

const isCur = curry(
    (f_ndx) => {
        let dict = require('../src/Dflt_RCBounds');
        let gteCurNdx0 = R.gte(R.__, f_ndx);
        let lteCurNdx1 = R.lte(R.__, dict.cur.len + f_ndx - 1);
        return R.both(gteCurNdx0, lteCurNdx1);
    });

describe(`USE boolean functions: isOld, isCur, isNew TO TRIAGE a cvNdx in RC Space.
        They DEPEND ON the curNdx
        `, () => {
    let isThisCur, pred, STUB_cvNdxs, STUB_curNdx;
    beforeEach(function () {
        // loadFixtures('index.html'); //NOTE remember this breaks a mocha test
        // this.doc = document;
        STUB_cvNdxs = [0, 1, 2, 3, 4];
        pred = pipe(isCur, map(R.__, STUB_cvNdxs)); //
    });
    describe(`  Fn: isCENTRAL CASE: curNdx > 0 AND curNdx < cvLen
    `, () => {
        it(`should define and triage aCV_Ndx ReadClss.`, () => {
            STUB_curNdx = 2;
            expect(pred(STUB_curNdx)).to.eql([false, false, true, true, false])
        })
    });
});

