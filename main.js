/**
 *  170722 - concentrate of applying a NEW Weighted csd to a selected verse.
 *  Weighted being a Fn(elem, ndx, sibLst) of the element Index and its relative position in the parent.list of siblings.
 *  Here is my plan:
 *  Go down and
 *      (0) try R.mapObjectIndexed on the selected Item.
 *          alter the element.style.backgroundColor
 *      (1) get a sub list Chapter spans with index < 7.
 *          call them 'amList'
 *      (2)
 *      (3) apply a Fn:(elem, ndx, lst) to each elem in the amList.
 *          where Fn returns a shapeValue
 *              where W = n^^b
 *                   n = normalIndex: ndx/lst.length
 *                   b = some shape constant
 *                      such that W( b:0, n: 0->1 ) = 1. It is a constant:1
 *                      such that W( b:1, n: 0->1 ) = n. It is linear
 *
 */
"use strict";

let C_in = require('./h/C_in_')
    , C_in_Doc = C_in.Doc
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both
;
let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
    // , evolve = R.evolve
;

// ------- requires ------------
let roundToTwoPlaces = require('./h/roundToTwoPlaces');
let SRVa_WtFn__GVNa_Cnst = require('./RSpc/src/SRVa_WtFn').SRV_WtFn__GVNa_Cnst;
let EVOL_aCsd = require('./SSpc/src/EVOLVEa_Csd');
let DfltCsd = require('./RSpc/Dflt_RSpcStyles').Dflt;
let SRVa_Span = require('./CSpc/src/MUTATE_Elem').SRVa_Span__WTHa_Csd__GVNa_Span;

// ***************** take the first split as a list of AM spans
//      apply a normalized weighting Fn: (ndx / lst.length) ** shapeCnst
let chptList = document.querySelectorAll('.chpt span');
let aAmList = R.splitAt(8, chptList)[0]; // -> [[],...]
let mapIndexed = R.addIndex(R.map);

// ------------ apply a weighter to each VerseSpan
let modFn25 = SRVa_WtFn__GVNa_Cnst(0.5);
// C_in_Console(`    SRV_Wt__GVN_Cnst -> ${ mapIndexed(modFn25)(aAmList) }`);


// -------- main starts here -------------
let main;

function SELECT_noonVerse(e) {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        main(e.target)
    }
    e.stopPropagation();
}

let theChapterDiv = document.querySelector('.chpt');
theChapterDiv.addEventListener("click", SELECT_noonVerse, false);

main = function (item) {
    // ************** MAIN ********
    let TRK = "wbSample/main.js";
    C_in_Console('  IN> ' + TRK);

// select the noonVerse span
    let noonVerse = item;

    // Test Data: StyleSpace
    // use a Test StubCsd to apply to the selected noonVerse span item.
    let testCsd;
    // am: ~paleRed , noon: ~paleYellow , pm: ~paleGreen
// Fn: EVOL_aCsd
    let EVOL_aCsd__GVNa_ = EVOL_aCsd.SRVa_Csd__WTHa_Csd__GVNa_Trnsfrm;
    let STUB_Trnsfrm = {color: R.always('blue')};
    testCsd = EVOL_aCsd__GVNa_(DfltCsd.am, STUB_Trnsfrm);
//TODO FIGURE AND FIX pipe????
    // testCsd = R.pipe(EVOL_aCsd__GVNa_, STUB_Trnsfrm)(DfltCsd.am);


// Fn: SRV_mutatedElem
    let SRV_mutatedElem = require('./CSpc/src/MUTATE_Elem').MUTATE_((testCsd));
    //       csdDCT -> Fn(  eltDCT -> eltDCT )

// CODE UNDER TEST
    let ret = SRV_mutatedElem(noonVerse);

// ******************  all that follows is JUST TO RETURN and SEE the Index and attributes of the selected span.
    let SRV_ChptVerses_Dflt = require('./CSpc/src/SRVa_ChptVerseList').SRV_ChptVerses_Dflt;
    let SRV_spanIndex = pipe(SRV_ChptVerses_Dflt, R.flip(R.indexOf))(document);
    let n = SRV_spanIndex(noonVerse);

    C_in_Both(`     The selected Verse is Index[${ n}]
         , backgroundColor:${ret.style.backgroundColor}
         , color:${ret.style.color}
         , opacity:${ret.style.opacity}`
    );
};