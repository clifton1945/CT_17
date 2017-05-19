
/**
 *RSpace_Lengths
 */
"use strict";


let R = require('ramda')
    // , curry = R.curry
    , always = R.always
;
let context = describe
;
let chai = require('chai')
    , expect = chai.expect
    // , should = chai.should()
;

let RSpace_Lengths = require('../src/RSpace_Lengths');

context(`An Element's ReadSpaceObject {} ->> Lengths ARE DETERMINED BY <<- (the chptFocusNdx && chptArrayLength).
     { pstLen: N||0, curLen:N, fur:N||0 }
    `, () => {

    describe(`RSpcLens:: N.CSpc_Len -> (N.CSpc_Focus -> {{},{}, {}})`, () => {
        let dflt, CSpcLen;
        beforeEach(function () {
            dflt = {pst: 0, cur: 0, fut: 0};
        });
        it(`should usually have 3 lengths { pst:n, cur:1, fut:n } for focusNdx > 1 && focusNdx < CSpcLen`, () => {
            expect(RSpace_Lengths(5, 1)).to.deep.equal({pst: 1, cur: 1, fut: 3});
            expect(RSpace_Lengths(5, 2)).to.deep.equal({pst: 2, cur: 1, fut: 2});
            expect(RSpace_Lengths(5, 3)).to.deep.equal({pst: 3, cur: 1, fut: 1});
        });
        it(`should have 2 lengths { pst:n, cur:1, fut:0 } IF focusNdx > 1 && focusNdx == CSpcLen`, () => {
            expect(RSpace_Lengths(5, 0)).to.deep.equal({pst: 0, cur: 1, fut: 4});
            expect(RSpace_Lengths(5, 4)).to.deep.equal({pst: 4, cur: 1, fut: 0});
        });
        it(`should usually have 1 lengths { pst:0, cur:1, fut:0} for focusNdx == 0 && CSpcLen == 1`, () => {
            expect(RSpace_Lengths(1, 0)).to.deep.equal({pst: 0, cur: 1, fut: 0});
        });
        it(`should usually have 0 lengths { pst:0, cur:0, fut:0} for focusNdx == 0 && focusNdx == CSpcLen`, () => {
            expect(RSpace_Lengths(0, 0)).to.deep.equal({pst: 0, cur: 1, fut: 0});
            expect(RSpace_Lengths(2, 77)).to.deep.equal({pst: 0, cur: 1, fut: 0});
        });
    });
});