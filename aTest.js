/**
 * today: break this up into small pieces AND KEEP IT WORKING
 * then
 * () maybe practice some compose/pipe with existing
 * () start piping in more TrnfrmDCTs before the final R.al
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

// mutate each verseELT using an evolved CSD: for now just a stubCSD
    R.addIndex(R.map)(// Functor f => (a → b) → f a → f b
        (elem, e_ndx, e_coll) => {
            // evolve a CSD
            let srva_CSD = R.evolve(// {k: (v → v)} → {k: v} → {k: v}
                srva_TrnfrmDCT_color(vtrNdx, e_ndx),
                {color: ''}
            );
            C_in_Console(`  > VerseToRead.Index: ${vtrNdx}`);

            // now with a style.Csd, mutate the aVTR Element
            mutate_anElem(srva_CSD, elem);
        }, versesCOLL);

    C_in_Console('OUT> ' + TRK);
};
