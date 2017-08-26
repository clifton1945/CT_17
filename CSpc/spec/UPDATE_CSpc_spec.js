"use strict";
// requires
let R = require('ramda');
// let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;
let C_inBoth = require('../../h/C_in_').Both;

let assert = require('assert');

// let chai = require('chai')
//     , expect = chai.expect
// ;
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
    require('../../CSpc/src/MUTATE_Elem').MUTATE_
;// (CSD)(ELEM)FN->(ELEM)

// ------------ CODE UNDER TEST ----------------

let update_ChptSpans = R.curry(
    /**
     * FN:update_ChptSpans (anySpan)FN-> mutates all CSpc.span.styles
     * SOV: (FN:update_ChptSpans) updates (every_Span) using (a_focus_span)
     *  DG: (every_span)->FN:update_Chpt->(focus_span)
     *
     * @param a_span: the focus Span
     *
     * @usage: update_ChptSpans( focus_span)
     *      update  receives a CSpc: click EventHandler span: the VerseToRead )
     *      update_ChptSpans( a_span) is the final FN in CeeThought app
     */
    (a_span) => { // a_span:VerseToRead Span
        // from the param: a_span can use vtrNdx and vtrSibs
        // mutate each verseSpan by evolving a styleDCT
        return R.addIndex(R.map)(
            (e, n, a) => {
                // evolve a CSD
                //---------------- CODE UNDER TEST ---------------------------
                let aCSD = R.evolve(
                    srva_TrnfrmDCT_color(srva_SpanNdx(a_span), n),
                    {color: ''}
                );
                C_inConsole(`  > VerseToRead.Index: ${srva_SpanNdx(a_span)}`);

                // now with an evolved style.Csd, mutate the a_span Element
                mutate_anElem(aCSD, e);
            }
        )(srva_SpanColl(a_span));
    }
);

// --------------------- TESTS -------------------------------------
describe(`UPDATE_CSpc_spec`, () => {
    describe(` begin setup for update--------------------`, () => {
        describe(` FN: srva_ChptSpan0 will be used as Test input to UPDATE_CSpc.
                `, function () {
            beforeEach(function () {
                loadFixtures('index.html');
                this.span0 = srva_ChptSpan0(document);
            });
            it(`********** srva_ChptSpan0 IS a span
                    `, function () {
                assert.equal(R.type(this.span0), 'HTMLSpanElement');
            });
        });
        describe(` FN: update RETURNS aVerse Ndx for this 1st test ?? GIVEN aSpan.
                `, function () {
            beforeEach(function () {
                loadFixtures('index.html');
                this.span0 = srva_ChptSpan0(document);
            });
            it(`********** srva_ChptSpan0 IS a span
                    `, function () {
                assert.equal(R.type(update_ChptSpans(this.span0)), 'Array');
            });
        });
    });
});