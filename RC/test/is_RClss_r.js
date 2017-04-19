/**
 * Created by CLIF on 4/14/2017.
 */

"use strict";

let R = require('ramda')
//     , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
//    , curry = R.curry
;
let context = describe;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;


let rc = require('../src/is_RClss')
    // , cut = rc.cut
    , DEFINES_curEnd_Ndx = rc.DEFINES_curEnd_Ndx
    // , is_pstRClss = rc.is_pstRClss
    // , gte_0 = rc.gte_0
;
// let is= rc.RClss;

context(`the three isRC's Fns: isPst(), isCur() and isFut() effectively define the rcWeights 
        and are used to weight the Style Attributes of an Element.  
    `, function () {
});

context(`the beginning{curBeg} and the end{curEnd} define the three is_RClss boundries: pst, cur, fut.  
    `, function () {
    let curBeg, curLen, cvLen, curEnd_Ndx;
    beforeEach(function () {
        cvLen = 5;
        curLen = 3;
        curBeg = 1;
        curEnd_Ndx = rc.DEFINES_curEnd_Ndx(cvLen, curLen, curBeg)
    });

    describe(`Fn: DEFINE_curEnd() shortens the default curLen by 
        not allowing the curEnd to extend beyond the cvLength. `, () => {
        it(`should normally set curEnd === curBeg + curLen`, function () {
            expect(curEnd_Ndx).to.be.equal(4).and.to.be.equal(curBeg + curLen);
        });
        it(`should however never set curEnd beyond the end of the cvLen.`, function () {
            expect(DEFINES_curEnd_Ndx(3, curLen, curBeg)).is.equal(3).and.is.equal(curBeg + 2).to.not.equal(curBeg + curLen);
        });
    });
});
context(`The is_xxxRClss DEFINE the RCWeightBounds.
`, () => {
    describe(`Fn: is_pstClss( cvNdx ) IS gte 0 && lt curBeg`, () => {
        let cvLen, curBeg, curLen, is_pstClss;
        beforeEach(function () {
            cvLen = 5;
            curLen = 3;
            curBeg = 1;
        });
        it(`should be true:: individual tests:  cvNdx:0 is gte curBeg:1 && cvNdx:0 is lte curEnd:3.`, () => {
            expect(rc.gte_0(0)).to.be.true; // 0 gte 0
            expect(rc.lt_Beg(curBeg, 0)).to.be.true;// 0 lt  1
            expect(rc.lt_Beg(curBeg, 1)).to.be.false;// 0 ==  1
        });
        it(`should be true::is_pstClss(cvNdx:0) is gte 0 && lt curBeg:1.`, () => {
            expect(rc.is_pstRClss(curBeg, 0)).to.be.true;
        });
        it(`should be falseis_pstClss(cvNdx:1) is gte 0 && lt curBeg:1.`, () => {
            expect(rc.is_pstRClss(curBeg, 1)).to.be.false
        });
    });
    describe(`Fn: is_curClss( cvNdx ) IS gte curBeg && lte curEnd..`, () => {
        let curBeg, curLen, curEnd, cvLen;
        beforeEach(function () {
            cvLen = 5;
            curLen = 3;
            curBeg = 1;
        });
        xit(`should be true for SIMPLE cvNdx:1 that is gte curBeg:1 && lte curEnd:3.`, () => {
            expect(rc.gte_curBeg(curBeg, 1)).to.be.true;
            expect(rc.lte_curEnd(1)).to.be.true;
            expect(is_curRClss(1)).to.be.true;
        });
        xit(`should be false for a cvNdx that is NOT gte curBeg && lte curEnd.`, () => {
            expect(rc.is_curRClss(0)).to.be.false;
        });
        xit(`should be false for a cvNdx that is gte curBeg BUT NOT lte curEnd.`, () => {
            expect(is_curRClss(0)).to.be.false;
        });
    });
});

