/**
 */
"use strict";

let C_in = require('./h/C_in_')
    // , C_in_Doc = C_in.Doc
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both
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
     * returns a TrnfrmDCT an Elem
     * @param vtr:      the Index of the focus Elem
     * @param ndx:      the Index of a Elem
     * @return dct:     a TrnfrmDCT
     */
    (vtr, ndx) => (ndx < vtr)
        ? R.always(`verseNdx:${ndx} was read in the past`)
        : (ndx > vtr )
            ? R.always(`verseNdx:${ndx} is to be read in the future`)
            : R.always(`verseNdx:${ndx} is currently being read`)
);


describe('triage_aTrnfrmDct', function () {
    it('expect one of three transforms:   past, current, future', function () {
        let cut = triage_aTrnfrmDct(5, 0)();
        let tst = R.pipe(R.split(' '), R.last)(cut);
        assert.equal(tst, 'past', 'triage_aTrnfrmDct(5,0) should be already read');
    });
});