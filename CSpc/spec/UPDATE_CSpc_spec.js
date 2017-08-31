"use strict";
// requires
let R = require('ramda');
let assert = require('assert');

// let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;

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
    describe(` FN: update_ChptSpans   RETURNS Array of verseSpans, each individual ReadSpace style.attributes.
    `, function () {
        let span0, cut_ret, span3;
        beforeEach(function () {
            loadFixtures('index.html');
            span0 = srva_.ChptSpan0(document);
            cut_ret = update_ChptSpans(span0);
            span3 = R.nth(3, cut_ret)
        });
        it(` should return an Array of Spans, NOT a HTMLCollection NOR a NodeList
                    `, function () {
            assert.equal(R.type(cut_ret), 'Array');
            assert.equal(R.gt(cut_ret.length, 0), true);
            assert.notEqual(R.type(cut_ret), 'HTMLCollection');
            assert.notEqual(R.type(cut_ret), 'HTMLNodeList');

            assert.equal(R.type(cut_ret[3]), 'HTMLSpanElement');
            console.log('>>>>>>>>>> cut_ret:' + cut_ret[0]);
        });
        it(` should have Span.style.attributes dependent upon the span's ReadSpace.
                    `, function () {
            assert.equal(R.gt(cut_ret.length, 0), true);
            assert.equal(cut_ret[0].style.color, 'blue');
            assert.equal(cut_ret[1].style.color, 'green');
            assert.notEqual(cut_ret[0].style.fontsize, 'undefined');
        });
    });
});
