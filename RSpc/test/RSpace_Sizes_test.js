
/**
 *RSpace_Sizes
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

let RSpace_Lengths = require('../src/RSpace_Sizes').RSpace_Lengths; // ( CSpcFocusN ->  CSpcSizeN ) -> RSpcSizesOBJ )
let RSpace_Sizes = require('../src/RSpace_Sizes').RSpace_Sizes; // CSpcFocusN -> ( CSpcSizeN -> RSpcSizesOBJ )
let RSpaceSize_Obj = require('../src/RSpace_Sizes').RSpaceSize_Obj; // CSpcArr -> ( CSpcSizeN -> RSpcSizesOBJ )

context(`RSpcRSpace_Sizes: An Element has three RSpcs Classes, each will have a size depending on the current CSpcFocusNdx;  { pstSize: N||0, curSize:N, fur:N||0 }
    `, () => {

    describe(`RSpcSizes:: N.CSpc_Size -> (N.CSpc_Focus -> {{},{}, {}})`, () => {
        let dflt, _Sizes, _Obj, CSpcSize;
        beforeEach(function () {
            dflt = {pst: 0, cur: 0, fut: 0};
            _Sizes = RSpace_Sizes(5);
            _Obj = RSpaceSize_Obj([0, 1, 2, 3, 4]);
        });
        it(`should have 3 lengths { pst:n, cur:1, fut:n } for focusNdx > 1 && focusNdx < CSpcSize`, () => {
            expect(RSpace_Lengths(1, 5)).to.deep.equal({pst: 1, cur: 1, fut: 3});
            expect(_Sizes(1)).to.deep.equal({pst: 1, cur: 1, fut: 3});
            expect(RSpace_Lengths(2, 5)).to.deep.equal({pst: 2, cur: 1, fut: 2});
            expect(RSpace_Lengths(3, 5)).to.deep.equal({pst: 3, cur: 1, fut: 1});
            expect(_Obj(3)).to.deep.equal({pst: 3, cur: 1, fut: 1});
        });
        it(`should have 2 lengths { pst:n, cur:1, fut:0 } IF focusNdx > 1 && focusNdx == CSpcSize`, () => {
            expect(RSpace_Lengths(0, 5)).to.deep.equal({pst: 0, cur: 1, fut: 4});
            expect(RSpace_Lengths(4, 5)).to.deep.equal({pst: 4, cur: 1, fut: 0});
        });
        it(`should usually have 1 lengths { pst:0, cur:1, fut:0} for focusNdx == 0 && CSpcSize == 1`, () => {
            expect(RSpace_Lengths(0, 1)).to.deep.equal({pst: 0, cur: 1, fut: 0});
        });
        it(`should usually have 0 lengths { pst:0, cur:0, fut:0} for focusNdx == 0 && focusNdx == CSpcSize`, () => {
            expect(RSpace_Lengths(0, 0)).to.deep.equal({pst: 0, cur: 1, fut: 0});
            expect(RSpace_Lengths(77, 0)).to.deep.equal({pst: 0, cur: 1, fut: 0});
        });
    });
});