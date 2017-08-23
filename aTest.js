/**
 * 170822
 * Somehow this works - can select a focus Verse and mutate all the verse style attributes.
 * the problem has to do w/ the CLICK_VerseToRead
 *  which has within it the call to main(e.target)
 *  passing the span into main.
 *
 *  ??? (1) put CLICK_Verse.... INSIDE main
 *      thus not needing to pass it to main???
 */
"use strict";

let TRK = "wbSample/aTest.js";

// ------- requires ------------
let R = require('ramda');
let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both;

// ------- CodeUnderTest requires
let srva_chptDiv = require('./CSpc/src/SRVa_CSpc')('.chpt');// (Doc)Fn->(Elem)
let srva_SpanColl = require('./CSpc/src/SRVa_CSpc').srva_SpanColl;//  (Doc)((Span)Fn->)(Coll)
let srva_SpanNdx = require('./CSpc/src/SRVa_CSpc').srva_SpanNdx;//(Span)Fn->(Ndx)
let srva_TrnfrmDCT_color =
    require('./SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT;
let mutate_anElem =
    require('./CSpc/src/MUTATE_Elem').MUTATE_;

// -------- main starts here -------------

// select a DIV in the DOM: I call it the div.chpr
let ChptDIV = srva_chptDiv(document);

// These 2 ARE GLOBAL: the MouseEvent handler to select a readFocus span.

function CLICK_VerseToRead(e) {
    if (e.target !== e.currentTarget) {
        main(e.target);
        srva_Ndx(e.target);    // TESTING #1
        e.stopPropagation();
    }
    e.stopPropagation();
}

// this fixes the click event to just div.chpt scope.
ChptDIV.addEventListener("click", CLICK_VerseToRead, false);

// ************** MAIN ********
let srva_Ndx = x => C_in_Console(`>>>> SELECTED Index[${srva_SpanNdx(x)}]`); // TESTING #1

C_in_Console('IN> ' + TRK);

let main = function (aVTR) { // aVTR:VerseToRead

// use the aVTR Span to derive some data constants
    let span0 = R.pipe(
        R.invoker(1, 'querySelector')
        ('.chpt'),
        R.prop('firstElementChild'))(document);
    // aVTR = span0;
    // suppose we
    // aVTR = XXX(); // TESTING #1

    let versesCOLL = srva_SpanColl(span0, document); // FIX (aVTR)(document) BREAKS

    let vtrNdx = srva_SpanNdx(aVTR, document); // FIX (aVTR)(document) BREAKS

// mutate each verseELT by evolving a CSD
    R.addIndex(R.map)(
        (e, n, a) => {
            // evolve a CSD
            let aCSD = R.evolve(srva_TrnfrmDCT_color(vtrNdx, n), {color: ''});
            C_in_Both(`  > VerseToRead.Index: ${vtrNdx}`);

            // now with an evolved style.Csd, mutate the aVTR Element
            mutate_anElem(aCSD, e);
        }
    )(versesCOLL);

    C_in_Console('OUT> ' + TRK);
};

