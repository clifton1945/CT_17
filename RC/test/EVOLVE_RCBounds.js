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

let EVOLVE_this;
let transforms;
EVOLVE_this = (alterFn, dict) => R.evolve(alterFn, dict); // DICT -> DICT

describe(`the Fn: EVOLVE_this( alterFn )(default_RCB) -> newRCB
    
    USAGE: EVOLVE_RCBounds = EVOLVE_this(WITH a partialed default_RCBounds argument) -> new_RCBounds
    then EVOLVE_RCBounds( with an alterFn)  
    `, function () {
    beforeEach(function () {
        this.default_RCB = {focus: {beg: 0, len: 2}};
        this.CUT = EVOLVE_this(R.__, this.default_RCB);
    });
    describe(`CONFIRM [default_RCB] the defaultReadClssBounds IS Valid.
    `, function () {
        it(`should be a DICTionary with at least 2 keys.
    `, function () {
            expect(this.default_RCB.focus).to.be.an('object').and.to.have.all.keys(['beg', 'len']);
        });
    });
    describe(`CONFIRM EVOLVE_this is a function wanting a Transforms Fn.`, function () {
        it(`should be a function with one argument.    `, function () {
            expect(this.CUT).to.be.a('function').and.to.have.lengthOf(1);
        });
    });
    describe(`CONFIRM EVOLVE_this(aTransforms) CAN alterFn the RCBounds DICT.    `, function () {
        it(`can return an altered RCBounds `, function () {
            transforms = {focus: {beg: R.add(20)}};
            expect(this.CUT(transforms).focus).to.be.an('object').and.to.have.all.keys(['beg', 'len']);
        });
        it(`should see an altered key:value    `, function () {
            transforms = {focus: {beg: R.always(20)}};
            expect(this.CUT(transforms).focus.beg).to.equal(20);
        });
    });
    describe(`CONFIRM EVOLVE_this(aTransforms W/O AN EXISTING Key) WILL NOT ALTER the RCBounds DICT.    `, function () {
        it(`should see UNALTERED key:value    `, function () {
            transforms = {focus: {WRONG: R.always(20)}};
            //
            expect(this.CUT(transforms).focus.beg).to.not.equal(20);
            expect(this.CUT(transforms).focus.beg).to.equal(0);
        });
    });
});