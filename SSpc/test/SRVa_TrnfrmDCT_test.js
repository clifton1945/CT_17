/**
 * today: convert Fn: srva_Trnfrm_Dct to evolving a style CSD: the true use of this function
 *  OK @0815 (1) show and prove the returned DCT works with R.evolve
 *  OK @1008(2) demonstrate that an Element.style.color can be evolved GVN focusIndex and elementIndex
 */
"use strict";

let C_in = require('../../h/C_in_')
    , C_in_Console = C_in.Console
;
let R = require('ramda')
;
const assert = require('assert');

// CODE UNDER TEST
let srva_colorTrnfrm = require('../src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT;

describe(` an invoked srva_colorTrnfrm(n1, n2) RETURNS DCT object of key:trnfrm transformations. `, function () {
    it('should return one of three transforms when INVOKED:   past, current, future', function () {
        let cut = R.curry(srva_colorTrnfrm(5));
        let tst = evolvedDCT(0).color();
        assert.equal(
            tst,
            'red',
            'srva_Trnfrm_Dct(5)(0) should be already read: red');
        tst = evolvedDCT(5).color();
        assert.equal(tst, 'blue', 'srva_Trnfrm_Dct(5,5) should be currently reading');
        tst = evolvedDCT(6).color();
        assert.equal(tst, 'green', 'srva_Trnfrm_Dct(5,60) should be will read');
    });
});
describe(`evolve(srva_colorTrnfrm(n1, n2), someObject) RETURNS a new someObject. `, function () {
    it(`should return a modified Object `, function () {
        let cut = R.evolve(
            srva_colorTrnfrm(5, 0),
            {color: 'original'} // NOTE: this Attr will be changed!
        );
        let tst = ( typeof evolvedDCT === 'object' );
        assert.ok(tst, `expect an object: key: valu`);
    });
    it(`should return a modified Object.color != 'original `, function () {
        let cut = R.evolve(
            srva_colorTrnfrm(5, 10),
            {color: 'original'}
        );
        let tst = evolvedDCT.color;
        assert.notEqual(tst, 'original', `expect returned DCT != 'original'`);
        assert.equal(tst, 'green', `expect returned DCT == 'green'`);
    });
});