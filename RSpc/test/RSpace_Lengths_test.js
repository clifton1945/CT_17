/**
 *RSpace_Lengths
 */
"use strict";
let R = require('ramda')
    , curry = R.curry
    , always = R.always
;
let context = describe
;
let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

// let RSpace_Lengths = require('../src/RSpace_Lengths');
let RSpace_Lengths = curry(
    /**
     *
     * @param cspc_len
     * @param cspc_focus
     * @return {*}
     */
    (cspc_len, cspc_focus) => {
        let dflt = {pst: 0, cur: 0, fut: 0};
        let trnsfrms = {
            pst: (cspc_focus < 0 || cspc_focus >= cspc_len) ? 0 : always(cspc_focus),
            cur: (cspc_focus < 0 ) ? 0 : always(1),
            fut: (cspc_focus > (cspc_len - 1)) ? 0 : always(cspc_len - cspc_focus - 1)
        }
        return R.evolve(trnsfrms, dflt);
    }
);


context(`An Element's ReadSpaceObject {} ->> Lengths ARE DETERMINED BY <<- (the chptFocusNdx && chptArrayLength).
     { pstLen: N||0, curLen:N, fur:N||0 }
    
    NOTE 2017.04.28 I have dropped the currentRC_ Len for a while. The curLen || lenCUR is always 1.
    `, () => {

    describe(`RSpcLens:: N.CSpc_Len -> (N.CSpc_Focus -> {{},{}, {}})`, () => {
        let dflt, CUT, CSpcFocus, CSpcLen;
        beforeEach(function () {
            dflt = {pst: 0, cur: 0, fut: 0};
            // CSpcFocus = 1;
            // CSpcLen = R.length(0, 1, 2, 3, 4);
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