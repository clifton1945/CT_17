"use strict";
let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
;
let chai = require('chai')
    , expect = chai.expect
;
context(`Fn: SRV_TRNFRM_byAlways( keyStr )       RETURNS a transformer OBJECT for the param:  key.
    It is a R.always Fn ( given a key, wanting a valu) 
    the valu should be a noun.)   
       `, () => {

    let SRV_TRNFRM_byAlways, thisTrnfrm;           //CODE UNDER TEST
    SRV_TRNFRM_byAlways = require('../src/SRV_aTRNFRM').by_always;

    let TEST_Attr = {backgroundColor: 'purple'}; // TEST OBJECT

    beforeEach(function () {
        thisTrnfrm = SRV_TRNFRM_byAlways('backgroundColor', 'yellow');
    });
    describe(`SRV_TRNFRM_byAlways      STRUCTURE`, () => {
        it(`expects SRV_.arity:2          is a Function `, function () {
            expect(SRV_TRNFRM_byAlways).is.a('Function').length(2);
        });
        it(`expects SRV_( strKey ).arity:1 is a Function RETURNING an R.always Function`, function () {
            expect(SRV_TRNFRM_byAlways('backgroudColor')).is.a('Function').length(1);
        });
    });
    describe(`SRV_TRNFRM_byAlways       RETURNING a transform VALUE`, () => {
        it(`expects SRV_( strKey, strValu )  returns a transform OBJECT with a transform FUNCTION valu.`, function () {
            expect(SRV_TRNFRM_byAlways('backgroundColor', 'yellow')).is.a('Object').has.property('backgroundColor').is.a('Function');
        });
        it(`expects SRV_( strKey, strValu ) USED by evolve thisTnsfrm .`, function () {
            expect(R.evolve(
                thisTrnfrm, TEST_Attr)).is.a('Object')
                .has.property('backgroundColor')
                .is.equal('yellow');
        });
    });
});

describe(`Fn: SRV_TRNFRM_byFn( keyStr)        RETURNS another transform FUNCTION`, () => {
    let thisTrnfrm;
    let SRV_TRNFRM_byFn = require('../src/SRV_aTRNFRM')._by_Fn; //CODE UNDER TEST
    let TEST_Attr = {opacity: 1.0, backgroundColor: 'purple'};              // TEST OBJECT
    it(`expects SRV_TRNFRM_byFn.arity:2          is a Function `, function () {
        expect(SRV_TRNFRM_byFn).is.a('Function').length(2);
    });
    it(`expects SRV_TRNFRM_byFn( strKey ) is a Function RETURNING an R.assoc Function`, function () {
        expect(SRV_TRNFRM_byFn('opacity')).is.a('Function').length(1);
    });
    it(`expects evolve( {opacity: R.add(-0.2)}, TEST_Attr) RETURNS an evolved Attr .`, function () {
        expect(
            R.evolve(
                {opacity: R.add(-0.2)}
                , TEST_Attr
            )
        ).is.a('Object')
            .has.property('opacity')
            .is.equal(.8);
    });
    it(`expects evolve( SRV_TRNFRM_byFn({opacity: R.add(-0.2)}), ) ) USED by evolve thisTrnfrm .`, function () {
        expect(
            R.evolve(
                SRV_TRNFRM_byFn('opacity', R.add(-0.2))
                , TEST_Attr
            )
        ).is.a('Object')
            .has.property('opacity')
            .is.equal(.8);
    });
});


