/**
 * CVSpace_TO_RCSpace_t.
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

const cvTOrc = require('../src/CVSpace_TO_RCSpace').cvTOrc;

context(`An Element's Ndx in RCSpace IS generally its Ndx in CVSpace minus {one of 3 subtrahends)
    { pst: 0, cur: cur_beg, fur: cur_beg + 1
    }
    
    NOTE 2017.04.28 I have dropped the currentRC_ Len for a while. The curLen || lenCUR is always 1.
    
    NOTE:  In general, an operand ending in "-nd" will carry the meaning "about to be ---ed".
    e.g. minuend - subtrahend  = difference
    e.g. augend + addend`, () => {

    describe(`cvTOrc `, () => {
        let cur_beg, trsnfrm, cv_ndx;
        beforeEach(function () {
            cur_beg = 1;
            trsnfrm = cvTOrc(cur_beg, R.__);
        });
        it(`should equal (cv_ndx - subtra: pst:0; cur:cur_beg; fut:cur_beg+1`, () => {
            expect(trsnfrm(0)).to.equal(0);
            expect(trsnfrm(1)).to.equal(0);
            expect(trsnfrm(2)).to.equal(0);
            expect(trsnfrm(3)).to.equal(1);
            expect(trsnfrm(4)).to.equal(2);
            expect(trsnfrm(5)).to.equal(3);
        });
    });
    ``
});