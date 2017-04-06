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

let EVOLVE_RCBounds = require('../src/EVOLVE_RCBounds');
let UPDATE_focus_beg = n => R.identity({focus: {beg: (R.always(n))}});
let UPDATE_new_beg = n => R.identity({new: {beg: (R.always(n + 2))}}); // TODO USE some reference to the focus.len INSTEAD OF hard coded 2.

describe(`the Fn: UPDATE_focusBounds(focus-ndx) -> DICT -> DICT 

    CALLS UPDATE_focus.ndx TO CREATE a new focus.ndx  IN a new RCBounds Obj 
    `, function () {
    // beforeEach(function () {
    //     this.alterFns = (UPDATE_focus_beg(18));
    //     this.alterFns = (UPDATE_new_beg(18));
    // });
    describe(`CONFIRM arguments:UPDATE_focus_beg() && UPDATE_new_beg() APPLIED TO EVOLVE_RCBounds() UPDATE the RCBounds.
    `, function () {
        it(`should see an altered key:value    `, function () {
            expect(EVOLVE_RCBounds(UPDATE_focus_beg(18)).focus.beg).to.equal(18);
            expect(EVOLVE_RCBounds(UPDATE_new_beg(18)).new.beg).to.equal(20);
        });
    });
});