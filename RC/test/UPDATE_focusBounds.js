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
        pred = pipe(isCur, map(R.__, STUB_cvNdxs)); //
    });
    1
    describe(`..Fn: isCur(len, ndx) -> Bool `, () => {
        describe(` Fn:isCur(currentLength, currentNdx)  0 <= curNdx <= cvLen AND 0 <= curLen :????
    `, () => {
            it(`should TRIAGE a CV_Ndx AS BOOL`, () => {

                expect(pred(0, 0)).to.eql([false, false, false, false, false]);
                expect(pred(0, 1)).to.eql([false, false, false, false, false]);
                expect(pred(0, 2)).to.eql([false, false, false, false, false]);
                expect(pred(0, 3)).to.eql([false, false, false, false, false]);
                expect(pred(0, 4)).to.eql([false, false, false, false, false]);
                expect(pred(0, 5)).to.eql([false, false, false, false, false]);
                //
                expect(pred(1, 0)).to.eql([true, false, false, false, false]);
                expect(pred(1, 1)).to.eql([false, true, false, false, false]);
                expect(pred(1, 2)).to.eql([false, false, true, false, false]);
                expect(pred(1, 3)).to.eql([false, false, false, true, false]);
                expect(pred(1, 4)).to.eql([false, false, false, false, true]);
                expect(pred(1, 5)).to.eql([false, false, false, false, false]);
                //
                expect(pred(2, 0)).to.eql([true, true, false, false, false]);
                expect(pred(2, 1)).to.eql([false, true, true, false, false]);
                expect(pred(2, 2)).to.eql([false, false, true, true, false]);
                expect(pred(2, 3)).to.eql([false, false, false, true, true]);
                expect(pred(2, 4)).to.eql([false, false, false, false, true]);
                expect(pred(2, 5)).to.eql([false, false, false, false, false]);
                //
                expect(pred(3, 0)).to.eql([true, true, true, false, false]);
                expect(pred(3, 1)).to.eql([false, true, true, true, false]);
                expect(pred(3, 2)).to.eql([false, false, true, true, true]);
                expect(pred(3, 3)).to.eql([false, false, false, true, true]);
                expect(pred(3, 4)).to.eql([false, false, false, false, true]);
                expect(pred(3, 5)).to.eql([false, false, false, false, false]);
                //
                expect(pred(4, 0)).to.eql([true, true, true, true, false]);
                expect(pred(4, 1)).to.eql([false, true, true, true, true]);
                expect(pred(4, 2)).to.eql([false, false, true, true, true]);
                expect(pred(4, 3)).to.eql([false, false, false, true, true]);
                expect(pred(4, 4)).to.eql([false, false, false, false, true]);
                expect(pred(4, 5)).to.eql([false, false, false, false, false]);
                //
                expect(pred(5, 0)).to.eql([true, true, true, true, true]);
                expect(pred(5, 1)).to.eql([false, true, true, true, true]);
                expect(pred(5, 2)).to.eql([false, false, true, true, true]);
                expect(pred(5, 3)).to.eql([false, false, false, true, true]);
                expect(pred(5, 4)).to.eql([false, false, false, false, true]);
                expect(pred(5, 5)).to.eql([false, false, false, false, false]);

            })
        });
    });
});