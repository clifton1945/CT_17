/**
 * today: use Fn: srva_Trnfrm_Dct to evolving a style CSD for each verse.
 * () maybe practice some compose/pipe with existing
 * () start piping in more TrnfrmDCTs before the final R.always.
 * () add more Attributes to the final CSD
 *  OK (4) iterate over some subset of verseSPANS to demonstrate srva_TrnfrmDCT    can alter a verseSpan styleCSD on the fly.
 *  OK (3) use Fn:srva_TrnfrmDCT_color(ndx, ndx) to prepare for iterating over all the chptDIV verseSPANS
 *  OK (2) demonstrate that an Element.style.color can be evolved GVN focusIndex and elementIndex
 *  OK (1) show and prove the returned DCT works with R.evolve
 */
"use strict";
// ------- requires ------------
let R = require('ramda');
// , curry = R.curry
// , concat = R.concat
// , pipe = R.pipe
// , evolve = R.evolve
let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console;
let srva_TrnfrmDCT_color = require('./SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT;
let mutate_anElem = require('./CSpc/src/MUTATE_Elem')
    .MUTATE_;
// -------- main starts here -------------

// This is the MouseEvent handler to select a readFocus span.
function CLICK_VerseToRead(e) {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        main(e.target)
    }
    e.stopPropagation();
}

let ChptDIV = document.querySelector('.chpt'); // needed to limit click to just div.chptr
ChptDIV.addEventListener("click", CLICK_VerseToRead, false);

// ------------ CODE UNDER TEST -----------------

let main = function (aVTR) { // aVTR:VerseToRead

// ************** MAIN ********
    let TRK = "wbSample/main.js";
    C_in_Console('IN> ' + TRK);

// use the aVTR Span to derive some data constants
    let versesCOLL = aVTR.parentElement.children;
    let vtrNdx = R.indexOf(aVTR, versesCOLL);
    C_in_Console(`  > VerseToRead.Index: ${vtrNdx}`);


// mutate each verseELT by evolving a CSD
    R.addIndex(R.map)(
        (e, n, a) => {
            // evolve a CSD
            let aCSD = R.pipe(
                R.evolve,
                R.flip,
                srva_TrnfrmDCT_color({color: ''}))
            (vtrNdx, n)

            // now with a style.Csd, mutate the aVTR Element
            let ret = mutate_anElem(aCSD, e);
            // C_in_Console(`  > element.style.color: ${ret.style.color}`);
        }
    )(versesCOLL);

    C_in_Console('OUT> ' + TRK);
};
