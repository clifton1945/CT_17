/**
 *clsName
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

let Dflt_clsNames = require('../Dflt_clsNames'); // -> {pst: 'pst', cur: 'cur', fut: 'fut'}
let clsName = require('../src/clssName'); // OBJ.clsNames -> ( N.ndxRSpc -> STR.clsName )

context(`An Element's clsName_in_RSpc::
    RETURNS its name in RSpc 
    PARTIALED with a default clsName Obj
    GIVEN its ndx_in_RSpc
    `, function () {

    describe(`_CUT:: clsName:: rSpcObj -> ( cSpcNdx -> clsName )
        `, function () {
        let _Obj, _CUT;
        beforeEach(function () {
            _Obj = Dflt_clsNames;
            _CUT = clsName(Dflt_clsNames); //  {pst: 2, cur: 1, fut: 2}
        });
        it(`expects a well formed Dflt_clsNames as a partial Argument `, () => {
            expect(Dflt_clsNames).is.deep.equal({pst: 'pst', cur: 'cur', fut: 'fut'});
        });
        it(`expects _CUT after partial to return a Function of arity:1`, function () {
            expect(_CUT).is.a('function').and.is.length(1);
        });
        it.skip(`expects a CSpcNdx argument  <  CSpcFocus TO RETURN CSpcNdx`, () => {
            expect(_CUT(1)).is.equal(1);
            expect(_CUT(3)).is.not.equal(3);
        });
        it.skip(`expects a CSpcNdx argument == CSpcFocus TO RETURN 0`, () => {
            expect(_CUT(1)).is.equal(1);
            expect(_CUT(2)).is.equal(0);
            expect(_CUT(3)).is.not.equal(3);
        });
        it.skip(`expects a CSpcNdx argument >  CSpcFocus TO RETURN CSpcNdx - pst Siz - cur Siz. `, () => {
            expect(_CUT(0)).is.equal(0);
            expect(_CUT(1)).is.equal(1);
            expect(_CUT(2)).is.equal(0);
            expect(_CUT(3)).is.equal(0);
            expect(_CUT(4)).is.equal(1);
        });
        it.skip(`expects TO NOT HAVE BOUNDARY conditions Problems; i.e. a CSpcNdx < 0 OR CSpcNdx >= CSpcArrSize.
            GOOD LUCK ON THAT SO a first step fail indicator is RETURNING -9999 & 9999 `, () => {
            expect(_CUT(-1)).is.equal(-9999);
            expect(_CUT(5)).is.equal(9999); // 5 IS the Size of the Array
        });
    });
});