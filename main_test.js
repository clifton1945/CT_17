/**
 * today: convert Fn: triage_aTrnfrmDct to evolving a style CSD: the true use of this function
 *  OK @0815 (1) show and prove the returned DCT works with R.evolve
 *  (2) demonstrate that an Element.style.color can be evolved GVN focusIndex and elementIndex
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
let triage_aTrnfrmDct = R.curry(
    /**
     * returns a Trnfrm_DCT an Elem
     * @param vtr:      the Index of the focus Elem
     * @param ndx:      the Index of a Elem
     * @return dct:     a TrnfrmDCT
     */
    (vtr, ndx) => (ndx < vtr)
        ? {color: R.always('red')}
        : (ndx > vtr )
            ? {color: R.always('green')}
            : {color: R.always('blue')}
);

describe(` an invoked triage_aTrnfrmDct(n1, n2) RETURNS DCT object of key:trnfrm transformations. `, function () {
    it('should return one of three transforms when INVOKED:   past, current, future', function () {
        let cut = triage_aTrnfrmDct(5, 0).color;
        let tst = R.pipe(R.split(' '), R.last)(cut());
        assert.equal(tst, 'past', 'triage_aTrnfrmDct(5,0) should be already read');
    });
});
describe(`evolve(triage_aTrnfrmDct(n1, n2), someObject) RETURNS a new someObject. `, function () {
    it(`should return a modified Object `, function () {
        let cut = R.evolve(
            triage_aTrnfrmDct(5, 0),
            {color: 'original'} // NOTE: this Attr will be changed!
        );
        let tst = ( typeof cut === 'object' );
        assert.ok(tst, `expect an object: key: valu`);
    });
    it(`should return a modified Object.color != 'original `, function () {
        let cut = R.evolve(
            triage_aTrnfrmDct(5, 0),
            {color: 'original'}
        );
        let tst = cut.color;
        assert.notEqual(tst, 'original', `expect returned DCT != 'original'`);
    });
});