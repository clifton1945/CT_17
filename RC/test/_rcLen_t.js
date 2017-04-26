/**
 * Created by CLIF on 4/25/2017.
 */
"use strict";
let R = require('ramda')
;
let context = describe
;
let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

let C = require('../../h/C_in_');

let rcNdx = R.curry(
    (cur_Beg, curEnd, cvLen, cv_ndx) => {
        // triage by cvNdx < = > the current Beg and End
        // WIP get the thing working first with STUBS, then repalce them with functions
        let realLen = curLen; // FIX this is a variable not constant
        let subtra = (cv_ndx < curBeg) ? 0 :
            (cv_ndx >= curBeg) ? curBeg :
                cv_ndx + realLen;

        return R.subtract(cv_ndx, subtra)
    }
})
;
context(`An Element's Ndx in RCSpace, generally, IS its Ndx in CVSpace minus {one of 3 subtrahends)
    pst: 0, cur: curBEG, fur: curBEG + curLen} }
    
    These three subtrahends are sometimes modifieddepending on the CVSpace curBeg Ndx value.
    NOTE:  In general, an operand ending in "-nd" will carry the meaning "about to be ---ed".
    e.g. minuend - subtrahend  = difference
    e.g. augend + addend`, () => {

    describe(`rcNdx `, () => {
        beforeEach(function () {
            this.curBeg = 1;
            this.curLen = 2;
            this.cvLen = 5;
        });
        it(`should not exist if cvLen: 0`, () => {
            expect(rc.rcNdx(3, 2)).to.be.below(3);
        });
    });
});
C._inConsole(rc.rcNdx(3, 2));