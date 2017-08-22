/**
 * 2017/08/22 @
 *  confirm
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
let myTap = require('./h/myTap')
;
let assert = require('assert')
;

let srva_TrnfrmDCT_color;// Num -> Num -> {k:FN}
srva_TrnfrmDCT_color = require('./SSpc/src/SRVa_TrnfrmDCT').colorStyleTrnfrmDCT;

let mutate_anElem;// CSD -> ( ELEM -> ELEM )
mutate_anElem = require('./CSpc/src/MUTATE_Elem').MUTATE_;

// -------- main starts here -------------

// FN: select a DIV in the DOM as theLight
let srva_ChptDIV = R.pipe(R.invoker(1, 'querySelector')
    ('.chpt')
);// (Doc)Fn->(div)

// This is the MouseEvent handler to select a readFocus span a.k.a theLight
function CLICK_VerseToRead(e) {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        main(e.target)
    }
    e.stopPropagation();
}
// SET the EVENT LISTENER in the ChprDIV:: the Light
srva_ChptDIV(document).addEventListener("click", CLICK_VerseToRead, false);


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
    ;
    /*
     * mutate each verseElem using an evolved CSD:
     * NOTE: the evolved CSD is using a STUB:  dfltCsds.noon
    */
// mutate each verseELT by evolving a CSD
    R.addIndex(R.map)(
        (e, n, a) => {
            // evolve a CSD
            let aCSD = R.evolve(srva_TrnfrmDCT_color(vtrNdx, n), {color: ''});
            C_in_Both(`  > VerseToRead.Index: ${vtrNdx}`);

            // now with a style.Csd, mutate the aVTR Element
            let ret = mutate_anElem(aCSD, e);
        }
    )(versesCOLL);

    C_in_Console('OUT> ' + TRK);
};
