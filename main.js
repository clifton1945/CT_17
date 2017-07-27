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
    // , C_in_Doc = C_in.Doc
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both
;
let R = require('ramda')
    // , curry = R.curry
    , pipe = R.pipe
    // , evolve = R.evolve
;

// ------- requires ------------
let roundToTwoPlaces = require('./h/roundTo_');
let SRVa_WtFn__GVNa_Cnst = require('./RSpc/src/SRVa_WtFn').SRV_WtFn__GVNa_Cnst;
let EVOL_aCsd = require('./SSpc/src/EVOLVEa_Csd');
let DfltCsd = require('./RSpc/Dflt_RSpcStyles').Dflt;
let SRV_ChptVerses_Dflt = require('./CSpc/src/SRVa_ChptVerseList').SRV_ChptVerses_Dflt;
let SRVa_TRNFRM = require('./SSpc/src/SRVa_TRNFRM').by_always; // key -> valu -> Fn:TRNFRM
let SRVa_Span = require('./CSpc/src/MUTATE_Elem').SRVa_Span__WTHa_Csd__GVNa_Span;

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

// SPLIT into three ReadLists
    let SRV_spanIndex = pipe(SRV_ChptVerses_Dflt, R.flip(R.indexOf))(document);
    let n = SRV_spanIndex(noonVerse);
    let chptList = document.querySelectorAll('.chpt span');
    // This is the AM verseList
    let lst = R.splitAt(n, chptList); // -> [[],...]
    let AmList = lst[0]; // -> [[],...]
    // This is the Noon verseList
    lst = R.splitAt(1)(lst[1]);
    let NoonL1st = lst[0];
    // this is the PM verseList
    let PmList = lst[1];

// ------------ apply normalized weighting Fn: (ndx / lst.length) ** shapeCnst to each VerseSpan
    // FIX modFn25 IS NOT USED YET; USusing STUB_Trnsfrm below
    let x = 'red', y = 'yellow', z = '0.7';
    let STUB_Trnsfrm = R.mergeAll(
        [SRVa_TRNFRM('opacity')(z)
            , SRVa_TRNFRM('color')(x)
            , SRVa_TRNFRM('backgroundColor')(y)
        ]
    );

    let EVOL_aCsd__GVNa_ = EVOL_aCsd.SRVa_Csd__WTHa_Csd__GVNa_Trnsfrm;
    let testCsd = EVOL_aCsd__GVNa_(DfltCsd.am)(STUB_Trnsfrm);// THIS IS A TEST


    let modFn25 = SRVa_WtFn__GVNa_Cnst(0.25); // Fn( el, ndx, lst ) -> TrnsfrmObj
    // FIX modFn25 IS NOT USED YET; using STUB_Trnsfrm below
    let Fn = R.curry(
        (el, ndx, lst) => {
            (modFn25(R.__, ndx, lst), R.toString, SRVa_TRNFRM('opacity'))
        }
    ); // -> Fn:(-> n


// Fn: SRV_mutatedElem  USING testCsd!!
    let SRV_mutatedElem = require('./CSpc/src/MUTATE_Elem').SRVa_(testCsd);
    //       csdDCT -> Fn(  eltDCT -> eltDCT )

// CODE UNDER TEST
    let ret = SRV_mutatedElem(noonVerse);
    // NOW see the selected noonVerse info
    C_in_Both(`     The selected Verse is Index[${ n}]
         , backgroundColor:${ret.style.backgroundColor}
         , color:${ret.style.color}
         , opacity:${ret.style.opacity}`
    );
//  apply WEIGHTING TO EACH Verse
    let mapIndexed = R.addIndex(R.map);
    C_in_Console(`    SRV_Wts -> [${ mapIndexed(SRV_mutatedElem)(AmList) }]`);

};