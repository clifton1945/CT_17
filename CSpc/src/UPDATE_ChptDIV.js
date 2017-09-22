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
        // this is a test stub. REPLACE IT with some (aSpan)FN
        let srva_TrnfrmDCT_color =
            require('../../SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT
        ; //(Num, Num)FN-> (FN{k:FN}) //red, green, blue
        let Dflt_ReadStyle =
            require('../../RSpc/Dflt_ReadStyles')
        ; // -> DCT
        let MUTATE_anElem =
            require('../../CSpc/src/MUTATE_Elem').MUTATE_
        ;// (CSD)(ELEM)FN->(ELEM)

        return R.addIndex(R.map)(
            (elem, n, a) => {
                let EVOLVE_aCSD = R.curry(
                    (focus_ndx, span_ndx) => R.evolve(
                        srva_TrnfrmDCT_color(focus_ndx, span_ndx),
                        {color: ''} // fix this to essentially be Dflt_ReadStyle
                    ))(focusNdx);
                MUTATE_anElem(EVOLVE_aCSD(n), elem);
                return elem
            },
        )(srva_SpanColl(focus_span));
    }
);
module.exports.update_ = UPDATE_;
module.exports.srva_ = UPDATE_;
