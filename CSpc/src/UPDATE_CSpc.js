"use strict";
// requires
let R = require('ramda');
let assert = require('assert');

// let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;

// ------------ CODE UNDER TEST ----------------
let srva_ = require('../src/SRVa_CSpc') //
    // , srva_ChptSpan0 = srva_.ChptSpan0
    , srva_SpanNdx = srva_.SpanNdx
    , srva_SpanColl = srva_.SpanColl
;
const update_ = R.curry(
    /**
     * FN: update_ChptSpans mutates all CSpc.span.styles
     * @param focus_span: the focus_span
     *
     *** SVO ****************
     *  {FN:update_ChptSpans}
     *  UPDATES (every_ChptSpan)
     *  BY APPLYING ( the focus_span )
     *  TO FN:update_ChptSpans
     *
     *** SOV-passive and DG ***
     *  (every_ChptSpan)
     *  IS UPDATED BY APPLYING
     *  (the focus_span)
     *  TO (FN:update_ChptSpans)
     *
     *  @usage: update_ChptSpans( focus_span)
     *      receives a CSpc:click EventHandler Span: the focus VerseToRead )
     *      This FN is the final FN in CeeThought app.
     *      It updates each Span's.style.Attributes
     */
    (focus_span) => { // focus_span:VerseToRead Span
        let focusNdx = srva_SpanNdx(focus_span);

        // TODO NEXT  - this is a test stub. REPLACE IT with some (aSpan)FN
        let srva_TrnfrmDCT_color =
            require('../../SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT
        ; //(Num, Num)FN-> (FN{k:FN})
        let Dflt_ReadStyle =
            require('../../RSpc/Dflt_ReadStyles')
        ; // -> DCT
        let mutate_anElem =
            require('../../CSpc/src/MUTATE_Elem').MUTATE_
        ;// (CSD)(ELEM)FN->(ELEM)

        return R.addIndex(R.map)(
            (elem, n, a) => {
                // evolve a CSD
                let aCSD = R.evolve(
                    srva_TrnfrmDCT_color(focusNdx, n),
                    {color: ''}
                );
                C_inConsole(`  >>> VerseToRead.Index: ${focusNdx}`);

                // now with an evolved style.Csd, mutate the elem Element
                mutate_anElem(aCSD, elem);
                return elem
            }
        )(srva_SpanColl(focus_span));
    }
);
module.exports.update_ = update_;
module.exports.srva_ = update_;
