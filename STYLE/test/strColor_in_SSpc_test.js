/**
 *_StrColor_in_RSpc
 * HOLD UNTIL DEVELOP a clsName_in_RSpc
 *
 */
"use strict";


// let R = require('ramda')
// , curry = R.curry
// , pipe = R.pipe
// , always = R.always
// ;
let context = describe
;
let chai = require('chai')
    , expect = chai.expect
    // , should = chai.should()
;

let RSpace_SizeObj = require('../../RSpc/src/RSpace_Sizes').RSpace_SizeObj; // CSpc_Arr -> ( CSpc_FocusN -> RSpc_LengthsOBJ)
let _StrColor = require('../src/strColor_in_SSpc'); //

context.skip(`Fn:: _StrColor 
    RETURNS a color STR for use in evolve style attributes: backgroundColor
    GIVEN a dfltStrColorObj 
    GIVEN the Elem index in RSpc.
    USAGE:: the Fn will be piped to trnsfrm_Attr . _bgColor Fn 
    `, function () {

    describe(`_StrColor_in_RSpcj -> ( objColors -> ndxRSpc -> strColor )
        `, function () {
        let _Obj, _CUT;
        beforeEach(function () {
            _Obj = RSpace_SizeObj([0, 1, 2, 3, 4]);
            _CUT = _StrColor
        });
        it.only(`expects Fn to return a Function of varity:1`, function () {
            expect(_CUT).is.a('function').and.is.length(1);
        });

        it(`expects _CUT(N) TO RETURN a String`, () => {
            expect(_CUT(555)).is.a('number');
        });
        it(`expects a CSpcNdx argument <  CSpcFocus TO RETURN CSpcNdx`, () => {
            expect(_CUT(1)).is.equal(1);
            expect(_CUT(3)).is.not.equal(3);
        });
        it(`expects a CSpcNdx argument == CSpcFocus TO RETURN 0`, () => {
            expect(_CUT(1)).is.equal(1);
            expect(_CUT(2)).is.equal(0);
            expect(_CUT(3)).is.not.equal(3);
        });
        it(`expects a CSpcNdx argument >  CSpcFocus TO RETURN CSpcNdx - pst Siz - cur Siz. `, () => {
            expect(_CUT(0)).is.equal(0);
            expect(_CUT(1)).is.equal(1);
            expect(_CUT(2)).is.equal(0);
            expect(_CUT(3)).is.equal(0);
            expect(_CUT(4)).is.equal(1);
        });
        it(`expects TO NOT HAVE BOUNDARY conditions Problems; i.e. a CSpcNdx < 0 OR CSpcNdx >= CSpcArrSize.
            GOOD LUCK ON THAT SO a first step fail indicator is RETURNING -9999 & 9999 `, () => {
            expect(_CUT(-1)).is.equal(-9999);
            expect(_CUT(5)).is.equal(9999); // 5 IS the Size of the Array
        });
    });
});