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

let transforms;
let EVOLVE_this = require('../src/EVOLVE_this');

describe(`the Fn: EVOLVE_this( alterFn )(default_RCB) -> newRCB
    
    USAGE: EVOLVE_RCBounds = EVOLVE_this(WITH a partialed default_RCBounds argument)
    then EVOLVE_RCBounds( with an alterFn)  -> new_RCBounds
    `, function () {
    beforeEach(function () {
        this.default_DICT = {focus: {beg: 0, len: 2}};
        this.alterFn_validKey = {focus: {beg: R.add(20)}};
        this.alterFn_invalidKey = {new: {beg: R.add(20)}};
        this.EVOLVE_default_DICT = EVOLVE_this(R.__, this.default_DICT);
    });
    describe(`CONFIRM EVOLVE_this is a function wanting a Transforms Fn.`, function () {
        it(`should be a function with one argument.    `, function () {
            expect(this.EVOLVE_default_DICT).to.be.a('function').and.to.have.lengthOf(1);
        });
    });
    describe(`CONFIRM EVOLVE_this(alterFn_validKey) CAN alter the default_DICT.    `, function () {
        it(`can return an altered RCBounds `, function () {
            expect(this.EVOLVE_default_DICT(this.alterFn_validKey).focus).to.be.an('object').and.to.have.all.keys(['beg', 'len']);
        });
        it(`should see an altered key:value    `, function () {
            // transforms = {focus: {beg: R.always(20)}};
            expect(this.EVOLVE_default_DICT(this.alterFn_validKey).focus.beg).to.equal(20);
        });
    });
    describe(`CONFIRM EVOLVE_this(alterFn_invalidKey W/O AN EXISTING Key) WILL NOT ALTER the RCBounds DICT.    `, function () {
        it(`should see UNALTERED key:value    `, function () {
            expect(this.EVOLVE_default_DICT(this.alterFn_invalidKey).focus.beg).to.not.equal(20);
            expect(this.EVOLVE_default_DICT(this.alterFn_invalidKey).focus.beg).to.equal(0);
        });
    });
});