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

describe(`the Fn: EVOLVE_RCBounds IS EVOLVE_this( WITH a hard coded Default_RCBounds argument)

    GIVEN an DICT.alterFns IT WILL RETURN a new EVOLVED_RCBounds.  
    `, function () {
    beforeEach(function () {
        this.STUB_alterFns = {focus: {beg: R.add(20)}};
    });
    describe(`CONFIRM [EVOLVE_DICT is a function wanting a DICT.alterFns.]`, function () {
        it(`should be a function with one argument.    `, function () {
            expect(EVOLVE_RCBounds).to.be.a('function').and.to.have.lengthOf(1);
        });
    });
    describe(`CONFIRM EVOLVE_DICT(STUB_alterFns) CAN alterFns the RCBounds DICT.    `, function () {
        it(`can return an altered RCBounds `, function () {
            expect(EVOLVE_RCBounds(this.STUB_alterFns).focus).to.be.an('object').and.to.have.any.keys(['beg', 'len']);
        });
        it(`should see an altered key:value    `, function () {
            expect(EVOLVE_RCBounds(this.STUB_alterFns).focus.beg).to.equal(20);
        });
    });
});