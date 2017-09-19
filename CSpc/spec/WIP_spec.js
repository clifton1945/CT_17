"use strict";
// requires
let R = require('ramda');
let assert = require('assert');

// let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;

// ------------ CODE UNDER TEST ----------------
let srva_ = require('../src/SRVa_CSpc') //
;
/**
 * FN: CodeUnderTest
 * @type {Function}
 */
let SRV_aChptDIV = R.pipe(
    R.invoker(1, 'querySelector'))
    ('.chpt')
;
let UPDATE_CSpc = require('../src/UPDATE_ChprSpc').update_
;

// --------------------- TESTS -------------------------------------
describe(`WIP: CodeUnderTest
    `, () => {
    describe(` DELIVERS_aChptDIV
   `, () => {
        /**
         * FN: CodeUnderTest
         * @type {Function}
         */
        let SRV_aChptDIV = R.pipe(
            R.invoker(1, 'querySelector'))
        ('.chpt');

        beforeEach(function () {
            loadFixtures('index.html');
            this.Chpt = SRV_aChptDIV(document);
        });
        describe(` SRV_aChptDIV: ARGUMENT should be a HTMLDivElement.
        '
        `, function () {
            it(` SRV_aChptDIV's Argument is a HTMLDivElement: the Document
                    `, function () {
                assert.equal(R.type(this.Chpt), 'HTMLDivElement');
            });
        });
        describe(` SRV_aChptDIV:  RETURNS Array of verseSpans, not a Collection NOR NodeList.
        `, function () {
            // beforeEach(function () {
            //     this.CUT_Array = UPDATE_CSpc(this.Chpt);
            // });
            // it(` should return an Array of Spans, NOT a HTMLCollection NOR a NodeList
            //         `, function () {
            //     assert.equal(R.type(this.CUT_Array), 'Array');
            //     assert.equal(R.gt(this.CUT_Array.length, 0), true);
            //     assert.notEqual(R.type(this.CUT_Array), 'HTMLCollection');
            //     assert.notEqual(R.type(this.CUT_Array), 'HTMLNodeList');
            // });
        });
        describe(` SRV_aChptDIV: with each Element.style.Attributes different
        `, function () {
            // beforeEach(function () {
            //     this.Chpt = SRV_aChptDIV(document)[0];
            //     this.origSpan3 = SRV_aChptDIV(document)[3];
            //     this.CUT_Array = UPDATE_CSpc(this.Chpt);
            // });
            // it(` should have returned a Span.style.attributes dependent upon the span's ReadSpace.
            //         `, function () {
            //     assert.equal(R.gt(this.CUT_Array.length, 0), true);
            //
            //     assert.equal(this.Chpt.style.color, 'blue');
            //     assert.equal(this.CUT_Array[0].style.color, 'blue');
            //     assert.equal(this.origSpan3.style.color, 'green');
            //     assert.equal(this.CUT_Array[1].style.color, 'green');
            //     assert.notEqual(this.CUT_Array[0].style.fontsize, 'undefined');
            // });
        });

    });
});
