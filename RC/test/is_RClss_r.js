/**
 * Created by CLIF on 4/14/2017.
 */

"use strict";

let R = require('ramda')
//     , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
    , curry = R.curry
;
let context = describe;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;


let rc = require('../src/is_RClss')
    , cut = rc.cut
    , DEFINES_curEnd = rc.DEFINES_curEnd
    , is_pstRClss = rc.is_pstRClss
    , gte_0 = rc.gte_0
;

context(`the three isRC's Fns: isPst(), isCur() and isFut() effectively define the rcWeights 
        and are used to weight the Style Attributes of an Element.  
    `, function () {
});

context(`the beginning{curBeg} and the end{curEnd} define the three is_RClss boundries: pst, cur, fut.  
    `, function () {
    let curBeg, curLen, cvLen, newLen;
    beforeEach(function () {
        cvLen = 5;
        curLen = 3;
        curBeg = 1;
        newLen = rc.DEFINES_curEnd(cvLen, curLen, curBeg)
    });

    describe(`Fn: DEFINE_curEnd() shortens the default curLen by 
        not allowing the curEnd to extend beyond the cvLength. `, () => {
        it(`should normally set curEnd === curBeg + curLen`, function () {
            expect(newLen == 4).is.ok;//.and.to.be.equal(curBeg + curLen);
        });
        it(`should however never set curEnd beyond the end of the cvLen.`, function () {
            expect(DEFINES_curEnd(3, curLen, curBeg)).is.equal(3).and.is.equal(curBeg + 2).to.not.equal(curBeg + curLen);
        });
    });
});
context(`The is_xxxRClss DEFINE the RCWeightBounds.

`, () => {
    xdescribe(`Fn: is_pstClss( cvNdx ) IS gte 0 && lt curBeg`, () => {
        let curBeg, curLen, curEnd, cvLen, lt_curBeg, gte_0;
        beforeEach(function () {
            cvLen = 5;
            curLen = 3;
            curBeg = 1;
            this.cut = rc.cut(cvLen, curLen, curBeg);
        });
        it(`should cut ....`, () => {
            (this.cut.is_pstRClss(0)).should.equal(true);// FIX BROKEN >>>
        });
        //
        // it(`should be true for SIMPLE a cvNdx that is gte 0 && lte curBeg.`, () => {
        //     expect(rc.gte_0(0)).to.be.true; // 0 gte 0
        //     expect(R.lt(0, curBeg)).to.be.true;// 0 lt  1
        //    expect(is_pstRClss(0)).to.be.true;
        // });
        it(`should be false for a cvNdx that is gte curBeg BUT NOT lt curBeg.`, () => {
            // expect(is_pstRClss(1)).to.be.false
        });
    });
    xdescribe(`Fn: is_curClss( cvNdx ) IS gte curBeg && lte curEnd..`, () => {
        let curBeg, curLen, curEnd, cvLen, gte_curBeg, lte_curEnd;
        // let curBeg, curLen, curEnd, cvLen, lte_curEnd;
        beforeEach(function () {
            cvLen = 5;
            curLen = 3;
            curBeg = 1;
            gte_curBeg = gte_Beg(curBeg);
            curEnd = DEFINES_curEnd(cvLen, curLen, curBeg);
            lte_curEnd = lte_End(curEnd);
        });
        it(`should be true for SIMPLE a cvNdx that is gte curBeg && lte curEnd.`, () => {
            expect(gte_curBeg(1)).to.be.true;
            expect(lte_curEnd(1)).to.be.true;
            // expect(is_curRClss(1)).to.be.true;
        });
        xit(`should be false for a cvNdx that is NOT gte curBeg && lte curEnd.`, () => {
            expect(is_curRClss(0)).to.be.false;
        });
        xit(`should be false for a cvNdx that is gte curBeg BUT NOT lte curEnd.`, () => {
            expect(is_curRClss(0)).to.be.false;
        });
    });
});

