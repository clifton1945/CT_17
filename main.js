/**
 /**
 * today: convert Fn: srva_Trnfrm_Dct to evolving a style CSD: the true use of this function
 *  OK @0815 (1) show and prove the returned DCT works with R.evolve
 *  OK @1008 (2) demonstrate that an Element.style.color can be evolved GVN focusIndex and elementIndex
 *  OK @1530 (3) use Fn:srva_TrnfrmDCT_color(ndx, ndx) to prepare for iterating over all the chptDIV verseSPANS
 *  (4) iterate over some subset of verseSPANS to demonstrate srva_TrnfrmDCT can alter a verseSpan styleCSD on the fly.
 */
"use strict";

let C_in = require('./h/C_in_')
    // , C_in_Doc = C_in.Doc
    , C_in_Console = C_in.Console
    // , C_in_Both = C_in.Both
;
let R = require('ramda')
    // , curry = R.curry
    // , concat = R.concat
    // , pipe = R.pipe
    // , evolve = R.evolve
;

// ------- requires ------------
let srva_TrnfrmDCT_color =
    require('./SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT;
let mutate_anElem = require('./CSpc/src/MUTATE_Elem').MUTATE_;//Fn

// -------- main starts here -------------

// This is the MouseEvent handler to select a readFocus span.
function SELECT_VerseToRead(e) {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        main(e.target)
    }
    e.stopPropagation();
}
let ChptDCT = document.querySelector('.chpt');
ChptDCT.addEventListener("click", SELECT_VerseToRead, false);

let main = function (vtr) { // vtr:VerseToRead
    // ************** MAIN ********
    let TRK = "wbSample/main.js";
    C_in_Console('  IN> ' + TRK);

// // requires
//         let srva_TrnfrmDCT_color =
//             require('./SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT;
//         let mutate_anElem = require('./CSpc/src/MUTATE_Elem').MUTATE_;//Fn

// use the vtr Span to derive some data constants
    let VersesColl = vtr.parentElement.children;
    let vtrNdx = R.indexOf(vtr, VersesColl);
    C_in_Console(`     >VerseToRead.Index:  ${vtrNdx}`);

// evolve the VerseToRead:vtr styleDCT
//  using the Fn srva_TrnfrmDCT_color
//      NOTE:  srva_TrnfrmDCT_color IS invoked w/(vtr, vtr)
//      which will result in the 'reading' color:blue
//         let evolve_aReadDct = R.evolve(R.__, {});//Fn
    let aCsd = R.evolve(srva_TrnfrmDCT_color(vtrNdx, vtrNdx), {color: ''});

// now with a style.Csd, mutate the vtr Element
    let ret = mutate_anElem(aCsd, vtr);
        C_in_Console(`  .... ret > ${ret.style.color}`);

    C_in_Console(' OUT> ' + TRK);
};