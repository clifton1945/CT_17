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
const UPDATE_ = R.curry(
    /**
     *
     * @param focus_span
     */
    (focus_span) => { // focus_span:VerseToRead Span
        let focusNdx = srva_SpanNdx(focus_span);

        // TODO NEXT  - ISOLATE the update FROM the srv_aSpan
        // this is a test stub. REPLACE IT with some (aSpan)FN
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
                    {color: ''} // fix this to essentially be Dflt_ReadStyle
                );
                // now mutate the Element w/ the evolved style.Csd,
                mutate_anElem(aCSD, elem);
                return elem
            }
        )(srva_SpanColl(focus_span));
    }
);
module.exports.update_ = UPDATE_;
module.exports.srva_ = UPDATE_;
