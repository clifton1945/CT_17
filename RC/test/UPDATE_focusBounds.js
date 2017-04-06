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
// let UPDATE_focusBounds = require('../src/UPDATE_focusBounds');
let UPDATE_focusBounds = R.always;

describe(`the Fn: UPDATE_focusBounds(focus-ndx) -> DICT -> DICT 

    CALLS UPDATE_focus.ndx TO CREATE a new focus.ndx  IN a new RCBounds Obj 
    `, function () {
    beforeEach(function () {
        this.alterFns = {focus: {beg: UPDATE_focusBounds(19)}};
    });
    describe(`CONFIRM EVOLVE_DICT(STUB_alterFns) CAN alterFns the RCBounds DICT WHEN APPLIED TO EVOLVE_RCBounds().
    `, function () {
        it(`should see an altered key:value    `, function () {
            expect(EVOLVE_RCBounds(this.alterFns).focus.beg).to.equal(19);
        });
    });
});