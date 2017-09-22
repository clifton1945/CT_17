"use strict";
// requires
let R = require('ramda');
let assert = require('assert');
let C_inConsole = require('../../h/C_in_').Console;
// ------------ CODE UNDER TEST ----------------
// let srva_ = require('../src/SRVa_CSpc') //
// ;
let UPDATE_ChptDIV = require('../src/UPDATE_ChptDIV').update_
;
// --------------------- TESTS ----------------------------------
describe(`module: UPDATE_ChptDIV.js  updates all of the div.chpt span Verses.
    `, () => {
    describe(`UPDATE_ChptDIV EXPECTS a focusSPAN && RETURNS ARRAY of updated Spans
   `, () => {
        /**
         * FN: SRV_aSpan  (document)FN->(SPAN)
         * @type {Function}
         */
        let SRV_aSpan_Collection = R.pipe(
            R.invoker(1, 'querySelector')
            ('.chpt'),
            R.prop('children')
        );
        // let CUT_Array;
        beforeEach(function () {
            loadFixtures('index.html');
            this.spanFocus = SRV_aSpan_Collection(document)[0];
            // this.spanCollection = SRV_aSpan_Collection(document);
        });
        describe(` the FN: UPDATE_ChptDIV REQUIRES a HTMLSpanElement ARGUMENT`, function () {
            it(` the test stub: this.spanFocus IS a HTMLSpanElement'
                    `, function () {
                assert.equal(R.type(this.spanFocus), 'HTMLSpanElement');
            });
        });
        describe(` the Array: (spanFocus)FN:UPDATE_ChptDIV   ->  IS an Array of verseSpans, not a Collection NOR NodeList.
        `, function () {
            beforeEach(function () {
                this.CUT_Array = UPDATE_ChptDIV(this.spanFocus);
            });
            it(` should return an Array of Spans, NOT a HTMLCollection NOR a NodeList
                    `, function () {
                assert.equal(R.type(this.CUT_Array), 'Array');
                assert.equal(R.gt(this.CUT_Array.length, 0), true);
                assert.notEqual(R.type(this.CUT_Array), 'HTMLCollection');
                assert.notEqual(R.type(this.CUT_Array), 'HTMLNodeList');
            });
        });
        describe(` the Element: (spanFocus)FN:UPDATE_ChptDIV[Index]  -> IS an Element.style.Attribute color depending on the array Index.
        `, function () {
            beforeEach(function () {
                this.spanFocus = SRV_aSpan_Collection(document)[1];
                this.CUT_Array = UPDATE_ChptDIV(this.spanFocus);
            });
            it(` should return  Span.style.attribute.color dependent upon the span's Index: color: red/blue/green
                    `, function () {
                assert.equal(this.CUT_Array[0].style.color, 'red');
                assert.equal(this.CUT_Array[1].style.color, 'blue');
                assert.equal(this.CUT_Array[2].style.color, 'green');
            });
        });
    });
});
