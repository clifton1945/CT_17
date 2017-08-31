//todo next I am currently working on replacing
//  the {color: ''}
// IN  let aCSD = R.evolve(
//     srva_TrnfrmDCT_color(focusNdx, n),
//     {color: ''}
// );
//  WITH RSpc/SRVa_Dflt_ReadStyles


"use strict";
let TRK = "wbSample/aTest.js";


// ------- requires ------------
let R = require('ramda');
let C_in = require('./h/C_in_')
;
// ************** MAIN ********
C_in.Both('> IN  ' + TRK);

// ------- CodeUnderTest requires
let update_ChptSpans = require('./CSpc/src/UPDATE_CSpc').update_;
let CLICK_VerseToRead = (e) => {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        update_ChptSpans(e.target);
    }
    e.stopPropagation();
    return e
};  // USE mouse select a readFocus span.

document.addEventListener("DOMContentLoaded", function (event) {
    /**
     *      SET the scope of the focus read verses
     * @type {Element}
     */
    let ChptDIV = document.querySelector('.chpt');

    /**
     *      INIT  Chapter Verse Spans
     */
    update_ChptSpans(ChptDIV.firstElementChild);//

    /**
     *      SELECT the RSpc focusVerse Span
     */
    ChptDIV.addEventListener('click',
        CLICK_VerseToRead, false);//
});
C_in.Console('> OUT> ' + TRK);
