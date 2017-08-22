/**
 * 170822
 * Somehow this works - can select a focus Verse and mutate all the verse style attributes.
 * BUT WHY?
 *  WHAT IS theMain() function
 *  IT DOES NOT HAVE A starting default focus verse among other things
 *  NOTE: THE fn srva_TrnfrmDCT_color IS A STUB !!
 *  ??? WHERE should the Event Handler be in relation to the main() ???
 */
"use strict";
// ------- requires ------------
let R = require('ramda');
let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both;

// ------- CodeUnderTest requires
let srva_chptDiv = require('./CSpc/src/SRVa_CSpc')('.chpt');// (Doc)Fn->(Elem)
let srva_SpanColl = require('./CSpc/src/SRVa_CSpc').srva_SpanColl;//  (Doc)((Span)Fn->)(Coll)
let srva_SpanNdx = require('./CSpc/src/SRVa_CSpc').srva_SpanNdx;//(Doc)((Span)Fn->)(Ndx)
let srva_TrnfrmDCT_color =
    require('./SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT;
let mutate_anElem =
    require('./CSpc/src/MUTATE_Elem').MUTATE_;

// -------- main starts here -------------

// select a DIV in the DOM: I call it the div.chpr
let ChptDIV = srva_chptDiv(document);

// This is the MouseEvent handler to select a readFocus span.
function CLICK_VerseToRead(e) {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        main(e.target)
    }
    e.stopPropagation();
}
ChptDIV.addEventListener("click", CLICK_VerseToRead, false);

// ************** MAIN ********
let TRK = "wbSample/main.js";
C_in_Console('IN> ' + TRK);

let main = function (aVTR) { // aVTR:VerseToRead

// use the aVTR Span to derive some data constants
    let versesCOLL = srva_SpanColl(aVTR, document);
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
