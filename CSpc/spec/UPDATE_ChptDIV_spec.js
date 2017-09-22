"use strict";
// requires
let R = require('ramda');
let assert = require('assert');
let C_inConsole = require('../../h/C_in_').Console;
// ------------ CODE UNDER TEST ----------------
// let srva_ = require('../src/SRVa_CSpc') //
// ;
let UPDATE_DIV = require('../src/UPDATE_ChptDIV').update_
;
// --------------------- TESTS ----------------------------------
describe(`module: UPDATE_ChptDIV.js  updates all of the div.chpt span Verses.
    `, () => {
    describe(`UPDATE_ChptDIV EXPECTS a focusSPAN, RETURNS ARRAY of updated Spans
   `, () => {
        /**
         * FN: SRV_aSpan  (document)FN->(SPAN)
         * @type {Function}
         */
        let SRV_aSpan_children = R.pipe(
            R.invoker(1, 'querySelector')
            ('.chpt'),
            R.prop('children')
        );
        // let CUT_Array;
        beforeEach(function () {
            loadFixtures('index.html');
            this.spanFocus = SRV_aSpan_children(document)[0];
            this.origSpan3 = SRV_aSpan_children(document)[3];
        });
        describe(` UPDATE_ChptDIV: ARGUMENT should be a HTMLSpanElement.'
        `, function () {
            it(`, this Argument, IS a HTMLSpanElement  DEFINING  theReadSpace:
            (SpanElement)FN.'
                    `, function () {
                assert.equal(R.type(this.spanFocus), 'HTMLSpanElement');
            });
        });
        describe(` UPDATE_ChptDIV:  RETURNS Array of verseSpans, not a Collection NOR NodeList.
        `, function () {
            beforeEach(function () {
                this.CUT_Array = UPDATE_DIV(this.spanFocus);
            });
            it(` should return an Array of Spans, NOT a HTMLCollection NOR a NodeList
                    `, function () {
                assert.equal(R.type(this.CUT_Array), 'Array');
                assert.equal(R.gt(this.CUT_Array.length, 0), true);
                assert.notEqual(R.type(this.CUT_Array), 'HTMLCollection');
                assert.notEqual(R.type(this.CUT_Array), 'HTMLNodeList');
            });

        });
        describe(` UPDATE_ChptDIV: with each Element.style.Attributes different
        `, function () {
            beforeEach(function () {
                this.spanFocus = SRV_aSpan_children(document)[0];
                this.origSpan3 = SRV_aSpan_children(document)[3];
                this.CUT_Array = UPDATE_DIV(this.spanFocus);
            });
            it(` should have returned a Span.style.attributes dependent upon the span's ReadSpace.
                    `, function () {
                assert.equal(R.gt(this.CUT_Array.length, 0), true);

                assert.equal(this.spanFocus.style.color, 'blue');
                assert.equal(this.CUT_Array[0].style.color, 'blue');
                assert.equal(this.origSpan3.style.color, 'green');
                assert.equal(this.CUT_Array[1].style.color, 'green');
                assert.notEqual(this.CUT_Array[0].style.fontsize, 'undefined');
            });
        });

    });
});
