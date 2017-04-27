/**
 * Created by CLIF on 4/25/2017.
 */
"use strict";
let R = require('ramda')
;
let context = describe
;
let chai = require('chai')
    , should = chai.should()
    , expect = chai.expect
;

let C = require('../../h/C_in_');

let rcNdx = R.curry(
    (cur_beg, cur_len, cv_len, cv_ndx) => {
        // triage by cvNdx < = > the current Beg and End
        // WIP get the thing working first with STUBS, then replace them with functions
        let real_len = cur_len; // FIX this is a variable not constant
        let subtra = (cv_ndx < cur_beg) ? 0 :
            (cv_ndx >= cur_beg) && (cv_ndx <= (cur_beg + real_len)) ? cur_beg :
                cv_ndx + real_len;
        return R.subtract(cv_ndx, subtra)
    }
);

context(`An Element's Ndx in RCSpace, generally, IS its Ndx in CVSpace minus {one of 3 subtrahends)
    pst: 0, cur: cur_beg, fur: cur_beg + cur_len} }
    
    These three subtrahends are sometimes modified depending on the CVSpace cur_beg Ndx value.
    NOTE:  In general, an operand ending in "-nd" will carry the meaning "about to be ---ed".
    e.g. minuend - subtrahend  = difference
    e.g. augend + addend`, () => {

    describe(`rcNdx `, () => {
        let cur_beg, cur_len, cv_len, trsnfrm, exp, cv_ndx;
        beforeEach(function () {
            cur_beg = 1;
            cur_len = 2;
            cv_len = 5;
            trsnfrm = rcNdx(
                cur_beg, cur_len, cv_len);
            exp = {'0': 0, '1': 0, '2': 1, '3': 2, '4': 0, '5': 1}
        });
        it(`should equal (cv_ndx - 0) IF cv_ndx < cur_beg`, () => {
            expect(trsnfrm(0)).to.be.equal(0); // 0 == 0
            expect(trsnfrm(1)).to.be.not.equal(1); // 0 < 1
        });
        it(`should equal (cv_ndx - cur_beg) IF cv_ndx >= cur_beg & <= "cur_end"`, () => {
            expect(trsnfrm(1)).to.be.equal(exp['1']);
            expect(trsnfrm(2)).to.be.equal(exp['2']);
            expect(trsnfrm(3)).to.be.equal(exp['3']);
            expect(trsnfrm(4)).to.be.not.equal(4);
        });
        it(`should equal (cv_ndx - cur_beg - cur_len) IF cv_ndx >"cur_end"`, () => {
            expect(trsnfrm(4)).to.be.equal(exp['4']);
            expect(trsnfrm(5)).to.be.equal(exp['5']);
            expect(trsnfrm(5)).to.be.not.equal(5);
        });
    });
});