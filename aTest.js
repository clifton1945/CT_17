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
    C_in_Both(`  > VerseToRead.Ndx: ${vtrNdx}`);


// use the default style DCT with on arbitrarily stubbed
    let dfltCsds = require('./SSpc/StyleCSDS');

// need a srva_CSD(vtrNdx) for each Verse now that a VerseToRead::vtrNdx is available.
    let srva_CSD = R.curry(
        /**
         * FN: srva_CSD EVOLVES & SERVES a styleCsd for this Element
         * @param vtr_ndx
         * @param e_ndx
         */
        (vtr_ndx, e_ndx) => R.evolve(// {k: (v → v)} → {k: v} → {k: v}
            srva_TrnfrmDCT_color(vtr_ndx, e_ndx),
            dfltCsds.noon
        ))(vtrNdx); // NOTE vtrNdx is invoked here.

// will need FN: mutate_thisElement
    let mutate_thisElem = R.curry(
        (elem, e_ndx, e_coll) => {
            mutate_anElem(srva_CSD(e_ndx))(elem);
            return elem
        }
    );

    /*
     * mutate each verseElem using an evolved CSD:
     * NOTE: the evolved CSD is using a STUB:  dfltCsds.noon
    */
    R.addIndex(R.map)(// Functor f => (a → b) → f a → f b

        (elem, e_ndx, e_coll) => {//
            // evolve a CSD
            // let csd = srva_CSD(vtrNdx, e_ndx);

            // now with a new style.Csd, mutate the aVTR Element
            // mutate_anElem( srva_CSD(e_ndx)(elem));//broken
            // mutate_anElem( srva_CSD(e_ndx))(elem); // GOOD
            mutate_anElem(srva_CSD(e_ndx))(elem); // GOOD
            // mutate_thisElem(elem, e_ndx);// BROKEN
        }, versesCOLL);

    C_in_Console('OUT> ' + TRK);
};
