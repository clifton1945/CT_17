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

let rc = {
    pstLen (cv_len, cv_rc) {
        // minuend - subtrahend  = difference
        //NOTE:  In general, "-nd" will carry the meaning "about to be ---ed".
        return R.subtract(cv_len, cv_rc)
    }
};
context(`The corresponding RC_Ndx = ( a given minuend:CV_Ndx) => CV_Ndx - {one of 3 subtrahends: {pst:0, cur:?, fur:?} }
    These three subtrahends ae derived using curLen

 In general, "-nd" will carry the meaning "about to be ---ed".
    minuend - subtrahend  = difference
    augend + addend (strict sense)`, () => {
    describe(`pstLen `, () => {
        beforeEach(function () { // TODO MAKE these OBJECTS {k,v}
            this.cvLen = 5;
            this.curBeg = 1;
            this.curLen = 3;
        });
        it(`should not exist if cvLen: 0`, () => {
            expect(rc.pstLen(3, 2)).to.be.below(3);
        });
    });
});
C._inConsole(rc.pstLen(3, 2));