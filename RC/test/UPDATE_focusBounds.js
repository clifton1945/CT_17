/**
 * Created by CLIF on 4/4/2017.
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
//     , curry = R.curry
//     , always = R.always
;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

/**
 *  ..... EVOLVE_RCBounds_TRSFRMS:: N->DICT
 *  USAGE:
 * @param focus_ndx
 * @return {{focus: {beg: *}, new: {beg: *, len: *}}}
 * @param cv_set
 */
let EVOLVE_RCBounds_TRSFRMS = function (cv_set, focus_ndx) {
    // let cv_len = R.length(cv_set);
    return {
        focus: {beg: R.always(focus_ndx)},
        new: {
            beg: R.always(focus_ndx + 2),
            len: R.always(focus_ndx + 2)
        }
    }
};

describe(`the Fn: UPDATE_focusBounds(focus-ndx) -> DICT -> DICT 

    CALLS APPLYS EVOLVE_RCBounds_TRSFRMS TO EVOLVE_RCBounds WITH a new focus.ndx  TO RETURN a new RCBounds Obj 
    `, function () {
    let EVOLVE_RCBounds = require('../src/EVOLVE_RCBounds');
    beforeEach(function () {
        this.newRCB = EVOLVE_RCBounds(EVOLVE_RCBounds_TRSFRMS([1, 2, 3, 4], 18));
    });
    describe(`CONFIRM EVOLVE_RCBounds_TRSFRMS APPLIED TO EVOLVE_RCBounds() RETURNS a new RCBounds.
    `, function () {
        it(`should see an altered key:value    `, function () {
            expect(this.newRCB.focus.beg).to.equal(18);
            expect(this.newRCB.new.beg).to.equal(20);
        });
    });
});