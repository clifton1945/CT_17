/**
 *  170729 - Peace is progress towards a known destination.
 *  Today the destination is main reflects the backgroundColor of each Verse GVNa noonSpan
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
// let roundToTwoPlaces = require('./h/roundTo_');
let DfltCsd = require('./RSpc/Dflt_RSpcStyles').Dflt;
let SRV_ChptVerses_Dflt = require('./CSpc/depr/SRVa_NodeListOf_ChptVerses').SRV_ChptVerses_Dflt;
let SRVa_WtFn__GVNa_Cnst = require('./RSpc/src/SRVa_WtFn').SRV_WtFn__GVNa_Cnst;

let EVOL_aCsd = require('./SSpc/src/EVOLVEa_Csd');
let SRVa_TRNFRM = require('./SSpc/src/SRVa_TRNFRM').by_always; // key -> valu -> Fn:TRNFRM
// let SRVa_Span = require('./CSpc/src/MUTATE_Elem').SRVa_Span__WTHa_Csd__GVNa_Span;

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


    /**
     *     ------------ apply normalized weighting Fn: -------------
     *     (ndx / lst.length) ** shapeCnst to each VerseSpan
     *     I will need
     *      a dictionary of span Attributes associated with the spans's ReadSpc: am||noon||pm
     *
     *      So begin w/
     *      SRV all the defaultRSpc Styles GIVEN nothing:
     *          e.g.  {am:{color:....}, noon:{}, pm:{}}
     *
     *      SELECT the defaultRSpc Style GIVEN a (span, ndx, list)
     *          ~ SRVa_defaultRSpc Style__GIVENa (span, ndx, list)
     *          it can now be called
     *          ~ SRVa_dfltSpanAttrsObj__GVNa (span, ndx, lst)
     *          e.g. {am: {color:'red', fontSize:'75%',...}}
     *
     *      BUILD some trnfrmObjS to weight SpanAttributeS GVNa( span, ndx, lst)
     *          e.g. trnfrmObj = {fontSize: R.always('0.67%')
 *
 *      EVOLVE a SpanAttr_sObj__GVNa_trnfrmObjS
 *
 *          e.g. R.evolve( trnfrmObjS )(spanObj)
 */
        // TODO   below is a STUB_Trnfrm; GENERATE IT!!
    let x = 'red', y = 'yellow', z = '0.7';
    let STUB_Trnfrm = R.mergeAll(
        [SRVa_TRNFRM('opacity')(z)
            , SRVa_TRNFRM('color')(x)
            , SRVa_TRNFRM('backgroundColor')(y)
        ]
    );
    let EVOL_aCsd__GVNa_ = EVOL_aCsd.SRVa_Csd__WTHa_Csd__GVNa_Trnsfrm;

    let testCsd = EVOL_aCsd__GVNa_(DfltCsd.am)(STUB_Trnfrm);// THIS IS A TEST

    let modFn25 = SRVa_WtFn__GVNa_Cnst(0.25); // Fn( el, ndx, lst ) -> TrnfrmObj

    // FIX modFn25 IS NOT USED YET; using STUB_Trnfrm above
    let X = modFn25({}, 0, [0, 1, 2, 3]);

// --------- OK BACK TO STANDARD CODE ---------------------------------
// Fn: SRV_mutatedElem  USING testCsd!!
    let SRV_mutatedElem = require('./CSpc/src/MUTATE_Elem').SRVa_(testCsd);
    //       csdDCT -> Fn(  eltDCT -> eltDCT )

// CODE UNDER TEST: STABLE
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