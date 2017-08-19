/**
 * today: break this up into small pieces AND KEEP IT WORKING
 * then
 */
"use strict";
// ------- requires ------------
let R = require('ramda');
// , curry = R.curry
// , concat = R.concat
// , pipe = R.pipe
// , evolve = R.evolve
let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both
;

let srva_TrnfrmDCT_color;// Num -> Num -> {k:FN}
srva_TrnfrmDCT_color = require('./SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT;

let mutate_anElem;// CSD -> ( ELEM -> ELEM )
mutate_anElem = require('./CSpc/src/MUTATE_Elem').MUTATE_;

// -------- main starts here -------------

// This is the MouseEvent handler to select a readFocus span.
function CLICK_VerseToRead(e) {// ????
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        main(e.target)
    }
    e.stopPropagation();
}

// set the scope of the ClickEvent handler as the div.chpt
let ChptDIV = document.querySelector('.chpt');//
ChptDIV.addEventListener("click", CLICK_VerseToRead, false);


let main = function (aVTR) { // aVTR:VerseToRead

// ************** MAIN ********
    let TRK = "aTest.js";
    C_in_Console('IN> ' + TRK);

// use the aVTR Span to derive some data constants
    let versesCOLL; // ELEM -> COLL
    let vtrNdx;     // NUM -> NUM -> {k:FN}
    versesCOLL = aVTR.parentElement.children;
    vtrNdx = R.indexOf(aVTR, versesCOLL);

// need a serv_CSD for each Verse
    let srva_CSD = R.curry(
        /**
         * FN: srva_CSD evolves a styleCsd for a Element
         * @param vtr_ndx
         * @param e_ndx
         */
        (vtr_ndx, e_ndx) => R.evolve(// {k: (v → v)} → {k: v} → {k: v}
        srva_TrnfrmDCT_color(vtr_ndx, e_ndx),
        dfltCsds.noon
        ));
// use the default style DCT with on arbitrarily stubbed
    let dfltCsds = require('./SSpc/StyleCSDS');

// mutate each verseELT using an evolved CSD: for now just a stubCSD
    R.addIndex(R.map)(// Functor f => (a → b) → f a → f b
        (elem, e_ndx, e_coll) => {//
            // evolve a CSD
            let csd = srva_CSD(vtrNdx, e_ndx);
            C_in_Console(`  > VerseToRead.Index: ${vtrNdx}`);

            // now with a new style.Csd, mutate the aVTR Element
            mutate_anElem(csd, elem);
        }, versesCOLL);

    C_in_Console('OUT> ' + TRK);
};
