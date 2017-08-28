"use strict";
// requires
let R = require('ramda');
let assert = require('assert');

// let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;

// ------------ CODE UNDER TEST ----------------
let srva_ = require('../src/SRVa_CSpc') //
    , srva_ChptSpan0 = srva_.ChptSpan0
    , srva_SpanNdx = srva_.SpanNdx
    , srva_SpanColl = srva_.SpanColl
;
let srva_TrnfrmDCT_color =
    require('../../SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT
; //(Num, Num)FN-> (FN{k:FN})
let mutate_anElem =
    require('../src/MUTATE_Elem').MUTATE_
;// (CSD)(ELEM)FN->(ELEM)

// ------------ CODE UNDER TEST ----------------
let update_ChptSpans = require('../src/UPDATE_CSpc').update_;

// --------------------- TESTS -------------------------------------
describe(`module: UPDATE_CSpc.js  ... `, () => {
    describe(` FN: update_ChptSpans's    ARGUMENT should be a 'HTMLSpanElement'
    `, function () {
        beforeEach(function () {
            loadFixtures('index.html');
            this.span0 = srva_.ChptSpan0(document);
        });
        it(` UPDATE_CSpc's Argument is the span0 of the chapter spans collection.'
                    `, function () {
            assert.equal(R.type(this.span0), 'HTMLSpanElement');
            assert.equal(srva_.SpanNdx(this.span0), 0);
        });
    });
    describe(` FN: update_ChptSpans   RETURNS an array of verseSpans PLAN: eventually each with its own new style.
    `, function () {
        let span0, cut_ret, span3;
        beforeEach(function () {
            loadFixtures('index.html');
            span0 = srva_.ChptSpan0(document);
            cut_ret = update_ChptSpans(span0);
            span3 = R.nth(3, cut_ret)
        });
        it(` should return an array of Spans, NOT a HTMLCollection NOR a NodeList
                    `, function () {
            assert.equal(R.type(cut_ret), 'Array'); // the invoked FN:update_ChptSpans returns an Array
            assert.notEqual(R.type(cut_ret), '  !==HTMLCollection');
            assert.equal(R.type(span3), 'HTMLSpanElement');
            assert.equal(R.gt(cut_ret.length, 0), true);
            assert.equal(cut_ret.length, 52);
            console.log(`>>>>>>>>>> ${(cut_ret[0])}`);
            // assert.equal(R.type(span3), 'Span');
        });
    });
});