/**
 * today: convert Fn: srva_Trnfrm_Dct to evolving a style CSD: the true use of this function
 *  OK @0815 (1) show and prove the returned DCT works with R.evolve
 *  OK @1008(2) demonstrate that an Element.style.color can be evolved GVN focusIndex and elementIndex
 */
"use strict";

let C_in = require('./h/C_in_')
    // , C_in_Doc = C_in.Doc
    , C_in_Console = C_in.Console
    // , C_in_Both = C_in.Both
;
let R = require('ramda')
    // , curry = R.curry
    // , concat = R.concat
    // , pipe = R.pipe
    // , evolve = R.evolve
;
const assert = require('assert');

// CODE UNDER TEST
let srva_Trnfrm_Dct = R.curry(
    /**
     * NOTE  JUST A STUB TODO exand with parameters
     * returns a Trnfrm_DCT an Elem
     * @param vtr:      the Index of the focus Elem
     * @param ndx:      the Index of a Elem
     * @return dct:     a DCT:
     *      key: a style Attribute
     *      val: a Fn returning a style value
     */
    (vtr, ndx) => (ndx < vtr)
        ? {color: R.always('red')}
        : (ndx > vtr )
            ? {color: R.always('green')}
            : {color: R.always('blue')}
);

describe(` an invoked triage_aTrnfrmDct(n1, n2) RETURNS DCT object of key:trnfrm transformations. `, function () {
    it('should return one of three transforms when INVOKED:   past, current, future', function () {
        let cut = R.curry(srva_Trnfrm_Dct(5));
        let tst = cut(0).color();
        assert.equal(
            tst,
            'red',
            'srva_Trnfrm_Dct(5)(0) should be already read: red');
        tst = cut(5).color();
        assert.equal(tst, 'blue', 'srva_Trnfrm_Dct(5,5) should be currently reading');
        tst = cut(6).color();
        assert.equal(tst, 'green', 'srva_Trnfrm_Dct(5,60) should be will read');
    });
});
describe(`evolve(triage_aTrnfrmDct(n1, n2), someObject) RETURNS a new someObject. `, function () {
    it(`should return a modified Object `, function () {
        let cut = R.evolve(
            srva_Trnfrm_Dct(5, 0),
            {color: 'original'} // NOTE: this Attr will be changed!
        );
        let tst = ( typeof cut === 'object' );
        assert.ok(tst, `expect an object: key: valu`);
    });
    it(`should return a modified Object.color != 'original `, function () {
        let cut = R.evolve(
            srva_Trnfrm_Dct(5, 0),
            {color: 'oyyyyriginal'}
        );
        let tst = cut.color;
        assert.notEqual(tst, 'original', `expect returned DCT != 'original'`);
    });
});