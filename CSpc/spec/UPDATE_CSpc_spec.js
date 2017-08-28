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
//-------------- NOTE this is embedded code, not yet ADDED to /src/

let update_ChptSpans = require('../src/UPDATE_CSpc').update_;

// --------------------- TESTS -------------------------------------
describe(`FN: UPDATE_CSpc_spec ... `, () => {
    describe(` FN: UPDATE_CSpc's    ARGUMENT should be a 'HTMLSpanElement'
    `, function () {
        beforeEach(function () {
            loadFixtures('index.html');
            this.span0 = srva_ChptSpan0(document);
        });
        it(` UPDATE_CSpc's Argument is the span0 of the chapter spans collection.'
                    `, function () {
            assert.equal(R.type(this.span0), 'HTMLSpanElement');
            assert.equal(srva_SpanNdx(this.span0), 0);
        });
    });
    describe(` FN: UPDATE_CSpc   RETURNS an array of verseSpans each with its own new style.
    `, function () {
        let span0, arr, span3;
        beforeEach(function () {
            loadFixtures('index.html');
            span0 = srva_ChptSpan0(document);
            arr = update_ChptSpans(span0);
            span3 = R.nth(3, arr)
        });
        it(` should return an array of Spans
                    `, function () {
            assert.equal(R.type(arr), 'Array');
            assert.equal(R.gt(arr.length, 0), true);
            console.log(`>>>>>>>>>> ${R.head(arr)}`);
            assert.equal(R.type(span3), 'Span');
        });
    });
});