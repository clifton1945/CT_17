/**
 * Created by CLIF on 4/14/2017.
 */

"use strict";

let R = require('ramda')
    // , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
    , curry = R.curry
;
let context = describe;
let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

// CODE UNDER TEST
let DEFINES_curEnd_Ndx = (cvLen, curLen, curBeg) => {
    let maybeEnd = curLen + curBeg;
    return maybeEnd > cvLen ? cvLen : maybeEnd
};

let gte_0 = R.gte(0);
let lt_Beg = curry(beg => R.lt(R.__, beg));
let gte_Beg = curry(beg => R.gte(R.__, beg));
let lte_End = curry(end => R.lte(R.__, end));
let gt_End = curry(end => R.gt(R.__, end));
let lte_cvLen = curry(cvl => R.lte(R.__, cvl));

let is_pstR = (gte_0, lt_Beg) => R.both(gte_0, lt_Beg);// -> N.cvNdx -> BOOL
let is_curR = (gte_curBeg, lte_curEnd) => R.both(gte_curBeg, lte_curEnd);// -> N.cvNdx -> BOOL

context(`the three isRC's Fns: isPst(), isCur() and isFut() effectively define the rcWeights 
        and are used to weight the Style Attributes of an Element.  
    `, function () {
});

context(`the beginning{curBeg} and the end{curEnd} define the three is_RClss boundries: pst, cur, fut.  
    `, function () {
    let curBeg, curLen, cvLen;
    beforeEach(function () {
        cvLen = 5;
        curLen = 3;
        curBeg = 1
    });

    describe(`Fn: DEFINE_curEnd() shortens the default curLen by 
        not allowing the curEnd to extend beyond the cvLength. `, () => {
        it(`should normally set curEnd === curBeg + curLen`, function () {
            expect(DEFINES_curEnd_Ndx(cvLen, curLen, curBeg)).to.equal(4).and.to.equal(curBeg + curLen);
        });
        it(`should however never set curEnd beyond the end of the cvLen.`, function () {
            expect(DEFINES_curEnd_Ndx(3, curLen, curBeg)).to.equal(3).and.to.equal(curBeg + 2).to.not.equal(curBeg + curLen);
        });
    });
});
context(`The is_xxxRClss DEFINE the RCWeightBounds.
`, () => {
    describe(`Fn: is_pstClss( cvNdx ) IS gte 0 && lt curBeg`, () => {
        let curBeg, curLen, curEnd, cvLen, lt_curBeg, lte_curEnd, is_pstRClss;
        beforeEach(function () {
            cvLen = 5;
            curLen = 3;
            curBeg = 1;
            lt_curBeg = lt_Beg(curBeg);
            curEnd = DEFINES_curEnd_Ndx(cvLen, curLen, curBeg);
            lte_curEnd = lte_End(curEnd);
            is_pstRClss = is_curR(lt_curBeg, lte_curEnd);
        });
        it(`should be true for SIMPLE a cvNdx that is gte 0 && lte curBeg.`, () => {
            expect(is_pstRClss(0)).to.be.true;
        });
        it(`should be false for a cvNdx that is gte curBeg BUT NOT lt curBeg.`, () => {
            expect(is_pstRClss(1)).to.be.false
        });
    });
    describe(`Fn: is_curClss(cvNdx ) IS  gte curBeg && lte curEnd..`, () => {
        let curBeg, curLen, curEnd, cvLen, gte_curBeg, lte_curEnd, is_curRClss;
        beforeEach(function () {
            cvLen = 5;
            curLen = 3;
            curBeg = 1;
            gte_curBeg = gte_Beg(curBeg);
            curEnd = DEFINES_curEnd_Ndx(cvLen, curLen, curBeg);
            lte_curEnd = lte_End(curEnd);
            is_curRClss = is_curR(gte_curBeg, lte_curEnd);
        });
        it(`should be true for SIMPLE a cvNdx that is gte curBeg && lte curEnd.`, () => {
            expect(is_curRClss(1)).to.be.true;
        });
        it(`should be false for a cvNdx that is NOT gte curBeg && lte curEnd.`, () => {
            expect(is_curRClss(0)).to.be.false;
        });
        it(`should be false for a cvNdx that is gte curBeg BUT NOT lte curEnd.`, () => {
            expect(is_curRClss(0)).to.be.false;
        });
    });
});

