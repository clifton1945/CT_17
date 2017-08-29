/**
 */
"use strict";
// ------- requires ------------
let R = require('ramda');
let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both;

// ------- CodeUnderTest requires
let update_ChptSpans = require('./CSpc/src/UPDATE_CSpc').update_;
//
// let srva_TrnfrmDCT_color =
//     require('./SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT;
// let mutate_anElem =
//     require('./CSpc/src/MUTATE_Elem').MUTATE_;
// -------- main starts here -------------


// USE this MouseEvent handler to select a readFocus span.
function CLICK_VerseToRead(e) {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        update_ChptSpans(e.target);
        // main(e.target);
    }
    e.stopPropagation();
}

// select a DIV in the DOM as theLight
let ChptDIV;
let selectFrom = R.invoker(1, 'querySelector');
ChptDIV = selectFrom('.chpt')(document);//Number → String → (a → b → … → n → Object → *)
ChptDIV.addEventListener("click", CLICK_VerseToRead, false);

// ************** MAIN ********
let TRK = "wbSample/aTest.js";
let main = function (aVTR) { // aVTR:VerseToRead

// use the aVTR Span to derive some data constants
    let versesCOLL = aVTR.parentElement.children;
    let vtrNdx = R.indexOf(aVTR, versesCOLL);

// mutate each verseELT by evolving a CSD
    R.addIndex(R.map)(
        (e, n, a) => {
            // evolve a CSD
            let aCSD = R.evolve(srva_TrnfrmDCT_color(vtrNdx, n), {color: ''});
            C_in_Both(`  > VerseToRead.Index: ${vtrNdx}`);

            // now with an evolved style.Csd, mutate the aVTR Element
            mutate_anElem(aCSD, e);
            // let ret = mutate_anElem(aCSD, e);
            // C_in_Console(`  > element.style.color: ${ret.style.color}`);
        }
    )(versesCOLL);

    C_in_Console('OUT> ' + TRK);
};

C_in_Console('IN> ' + TRK);
