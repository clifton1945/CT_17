"use strict";
// requires
let R = require('ramda');
let assert = require('assert');

// let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;
// ------------ CODE UNDER TEST ----------------
let srva_ = require('../src/SRVa_CSpc') //
;
let UPDATE_CSpc = require('../src/UPDATE_ChprSpc').update_
;

// --------------------- TESTS -------------------------------------
describe(`module: UPDATE_ChptSpc.js  updates all Verse Spans w/ FNs:
    _BY_Evnt_MOUSE, _BY_Evnt_CLICK, _BY_DFLT_focus
    `, () => {
    describe(`FN: UPDATE_ChptSpc_BY_SRV_aSpan()
        EXPECTS a SPAN 
        RETURNS a ARRAY of updated Spans
   `, () => {
        /**
         * FN: SRV_aSpan  (document)FN->(SPAN)
         * @type {Function}
         */
        let SRV_aSpan_ndx0 = R.pipe(
            R.invoker(1, 'querySelector')
            ('.chpt'),
            R.prop('firstElementChild')
        );
        beforeEach(function () {
            loadFixtures('index.html');
            this.span0 = SRV_aSpan_ndx0(document);
        });
        describe(` FN: ARGUMENT should be a FN returning a  'HTMLSpanElement.'
        `, function () {
            it(` UPDATE_ChptSpc's Argument is a HTMLSpanElement.'
                    `, function () {
                assert.equal(R.type(this.span0), 'HTMLSpanElement');
            });
        });
        describe(` FN:  RETURNS Array of verseSpans, each with individual ReadSpace style.attributes.
    `, function () {
            let span0, cut_ret, span3;
            beforeEach(function () {
                loadFixtures('index.html');
                span0 = srva_.ChptSpan0(document);
                cut_ret = UPDATE_CSpc(span0);
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
});
