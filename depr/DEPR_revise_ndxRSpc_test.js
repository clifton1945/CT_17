/**
 *RSpace_Indices
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

let RSpace_SizeDict = require('../RSpc/src/RESIZE_Rspc').fromArray;
let RSpcNdx = require('./DEPR_revise_ndxRSpc'); // OBJ.rSpcSizes -> ( N.cSpcNdx -> N.RSpcNdx )

context(`An Element's RSpace_Indices::
    RETURNS its RSpc_Index 
    GIVEN its CSpc_Index.
    `, function () {

    describe(`RSpcNdx:: rSpcObj -> ( cSpcNdx -> RSpcNdx )
        `, function () {
        let _Focus, _Obj, _CUT;
        beforeEach(function () {
            _Obj = RSpace_SizeDict([0, 1, 2, 3, 4]);
            _Focus = 2;
            _CUT = RSpcNdx(_Obj(_Focus)); //  {pst: 2, cur: 1, fut: 2}
        });
        it(`expects a well formed RSpcSize_Obj as an Argument `, () => {
            expect(_Obj(1)).is.deep.equal({pst: 1, cur: 1, fut: 3});
        });
        it(`expects TO RETURN a Num`, () => {
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