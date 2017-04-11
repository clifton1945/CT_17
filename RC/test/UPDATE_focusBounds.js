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
    // , should = chai.should()
    , expect = chai.expect
;

let RCBounds_TRSFRMS = curry(
    /**
     *  ..... RCBounds_TRSFRMS:: N->DICT
     *  USAGE:
     * @param focus_ndx
     * @return {{old: {len: *}, focus: {beg: *}, new: {beg: *, len: *}}}
     * @param cv_set
     */
    function (cv_set, focus_ndx) {
        let cv_len = R.subtract(R.length(cv_set)); // N -> N
        return {
            old: {len: always(focus_ndx - 1)},
            focus: {beg: always(focus_ndx)},
            new: {
                beg: always(focus_ndx + 2),
                len: always(cv_len(focus_ndx))
            }
        }
    }
);
let STUB_CVRange = R.range(0, 8);
let defaultRCB = require('../src/Dflt_RCBounds');

let EVOLVE_ChptVerse_RCBounds_1 = n => R.evolve(RCBounds_TRSFRMS(STUB_CVRange, n), defaultRCB); // N -> DICT

let hold = 0;

describe(`the Fn: UPDATE_focusBounds(focus-ndx) -> DICT -> DICT 

    CALLS APPLYS RCBounds_TRSFRMS TO EVOLVE_RCBounds WITH a new focus.ndx  TO RETURN a new RCBounds Obj 
    `, function () {
    beforeEach(function () {
        let STUB_CVRange = R.range(0, 8);
        let ChptVerse_RCBounds_TRSFRMS = RCBounds_TRSFRMS(STUB_CVRange, R.__);// N -> OBJ
        // let EVOLVE_RCBounds = require('../src/EVOLVE_RCBounds'); // N -> DICT
        // let EVOLVE_ChptVerse_RCBounds = EVOLVE_RCBounds(ChptVerse_RCBounds_TRSFRMS); // N -> DICT
        let EVOLVE_ChptVerse_RCBounds = R.evolve(ChptVerse_RCBounds_TRSFRMS); // N -> DICT
        this.newRCB = EVOLVE_ChptVerse_RCBounds(4);//
    });
    describe(`CONFIRM RCBounds_TRSFRMS APPLIED TO EVOLVE_RCBounds() RETURNS a new RCBounds.
    `, function () {
        xit(`should see an altered key:value    `, function () {
            expect(this.newRCB.old.beg).to.equal(0);
            expect(this.newRCB.old.len).to.equal(3);
            expect(this.newRCB.focus.beg).to.equal(4);
            expect(this.newRCB.focus.len).to.equal(2);
            expect(this.newRCB.new.beg).to.equal(6);
            expect(this.newRCB.new.len).to.equal(4);
        });
    });
});