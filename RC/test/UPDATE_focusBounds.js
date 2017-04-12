/**
 * Created by CLIF on 4/4/2017.
 */
"use strict";

let R = require('ramda')
    , pipe = R.pipe
    , map = R.map
    , curry = R.curry
    // , always = R.always
;

let chai = require('chai')
    , should = chai.should()
    , expect = chai.expect
;

//CODE UNDER TEST
const isCur = curry(
    (curLen, curNdx) => {
        let dict = require('../src/Dflt_RCBounds');
        let gteCurNdx0 = R.gte(R.__, curNdx);
        let lteCurNdx1 = R.lte(R.__, curLen + curNdx - 1);
        return R.both(gteCurNdx0, lteCurNdx1);
    });

describe(`USE boolean functions: isOld, isCur, isNew TO TRIAGE a cvNdx in RC Space.
        They DEPEND ON the curNdx
        `, () => {
    let pred, STUB_cvNdxs;
    beforeEach(function () {
        // loadFixtures('index.html'); //NOTE remember this breaks a mocha test
        // this.doc = document;
        STUB_cvNdxs = [0, 1, 2, 3, 4];
        pred = pipe(isCur(2), map(R.__, STUB_cvNdxs)); //
    });
    describe(`..Fn: isCur(len, ndx) -> Bool `, () => {
        describe(` Fn:isCur CENTRAL CASE: 0 <= curNdx <= cvLen AND 0 <= curLen :????
    `, () => {
            it(`should TRIAGE a CV_Ndx AS BOOL`, () => {
                expect(pred(0)).to.eql([true, true, false, false, false]);
                expect(pred(1)).to.eql([false, true, true, false, false]);
                expect(pred(2)).to.eql([false, false, true, true, false]);
                expect(pred(3)).to.eql([false, false, false, true, true]);
                expect(pred(4)).to.eql([false, false, false, false, true]);
                expect(pred(5)).to.eql([false, false, false, false, false]);
            })
        });
    });
});