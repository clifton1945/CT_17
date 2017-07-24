"use strict";

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

// ----   CODE UNDER TEST:  build and test a WeighterFn to be applied to  each verseSpan
let SRV_WtFn__GVNa_Cnst = require('../src/SRVa_WtFn').SRV_WtFn__GVNa_Cnst;

describe(`Fn:SRVa_WtFn__WTHa_Cnst_GVNa_( ElemNdxLst )     should RETURN a normalized, rounded NUM between 0 and 1`, () => {
    // let SRV_WtFn__GVNa_Cnst =  require('../src/SRVa_WtFn');
    describe(`Fn:SRVa_WtFn_25        returns Fn: SRV_WtFn__GVNa_Cnst(0.25)`, () => {
        let SRVa_WtFn_25 = SRV_WtFn__GVNa_Cnst(0.25);
        it(`should be a function.Arity:3  waiting for ElemNdxLst.`, () => {
            expect(SRVa_WtFn_25).is.a('Function').is.length(3);
        });
        it(`w/ Argument ({}, 1, 7) should be a NUMBER ElemNdxLst.`, () => {
            expect(SRVa_WtFn_25({}, 1, [0, 1, 2, 3, 4, 5, 6, 7]))
                .is.a('Number').is.equal(0.59);
        });
    });
    describe(`each SRVa_WtFn_xxx        returns different weight values`, () => {
        let SRVa_WtFn_0 = SRV_WtFn__GVNa_Cnst(0);
        it(`w/ Argument ({}, 1, 7) should ALWAYS be a NUMBER: 1.`, () => {
            expect(SRVa_WtFn_0({}, 1, [0, 1, 2, 3, 4, 5, 6, 7]))
                .is.a('Number').is.equal(1);
            //  {el,n,l) -> 1,1,1,... always 1
        });
        let SRVa_WtFn_25 = SRV_WtFn__GVNa_Cnst(0.25);
        it(`w/ Argument ({}, 1, 7) should be a NUMBER.`, () => {
            expect(SRVa_WtFn_25({}, 1, [0, 1, 2, 3, 4, 5, 6, 7]))
                .is.a('Number').is.equal(0.59);
            //   0,0.5946035575013605,0.7071067811865476,
        });
        let SRVa_WtFn_80 = SRV_WtFn__GVNa_Cnst(0.80);
        it(`w/ Argument ({}, 1, 7) should be a NUMBER.`, () => {
            expect(SRVa_WtFn_80({}, 1, [0, 1, 2, 3, 4, 5, 6, 7]))
                .is.a('Number').is.equal(0.19);
            // 0,0.18946457081379975,0.3298769776932235
        });
        let SRVa_WtFn_100 = SRV_WtFn__GVNa_Cnst(1.0);
        it(`w/ Argument ({}, 1, 7) should ALWAYS be the normalized value of Element's Index.
            In this case Index:1 divided by list size:8 is 0.125 rounded to 0.13.`, () => {
            expect(SRVa_WtFn_100({}, 1, [0, 1, 2, 3, 4, 5, 6, 7]))
                .is.a('Number').is.equal(0.13);
            // [0,0.125,0.25, 0.375. always linear: that is wt === ndx / length
        });
    });
});

describe(`Fn: SRVa_Csd__WTHa_CsdTtrnmogFn__GVNa_Csd   IS   CeeingThought's CORE function.
    This verbose name explicitly says
        SRVa_ means it is a Function returning a new Something: Csd
        WTHa_ means it already has a needed something:  CsdTrnmogFn Fn. 
        GVNa_ means it requires a Something: Csd to be transformed.        
`, () => {
});