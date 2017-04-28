/**
 * NOTE: CLIF on 4/28/2017.
 * Dropped the concept of curLen in RCSpace; it is always = 1;
 */

"use strict";

let R = require('ramda')
    , curry = R.curry
//     , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
;
let context = describe;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;


context(`the three isRC's Fns: isPst(), isCur() and isFut(), effectively define the rcWeights 
        and are used to weight the Style Attributes of an Element.  
    `, function () {
});
/**
 *      IS_xxxRC.js:: N.curRC index in CVSpace -> N. -> Bool
 * @param ndxBegCurRC
 * @constructor
 */
const is_xxx = require('../src/IS_xxxRC');
const IS_PstRC = is_xxx.IS_PstRC;
const IS_CurRC = is_xxx.IS_CurRC;
const IS_FutRC = is_xxx.IS_FutRC;

context(`the three is_RClss boundries: pst, cur, fut.  
    `, function () {
    let curBeg, cvLen, IS;
    beforeEach(function () {
        cvLen = 5;
        curBeg = 1;
    });

    describe(`Fn: IS_PstRC `, () => {
        it(`should always be less than curBeg.`, function () {
            IS = IS_PstRC(curBeg);
            expect(IS(0)).to.be.true;
            expect(IS(1)).to.be.not.true;
            expect(IS(5)).to.be.not.true;
        });
    });

    describe(`Fn: IS_CurRC `, () => {
        it(`should always be equal to curBeg.`, function () {
            IS = IS_CurRC(curBeg);
            expect(IS(0)).to.be.not.true;
            expect(IS(1)).to.be.true;
            expect(IS(2)).to.be.not.true;
        });
    });
    describe(`Fn: IS_FutRC `, () => {
        it(`should always be more than curBeg.`, function () {
            IS = IS_FutRC(curBeg);
            expect(IS(0)).to.be.not.true;
            expect(IS(1)).to.be.not.true;
            expect(IS(2)).to.be.true;
            expect(IS(5)).to.be.true;
        });
    });
});


