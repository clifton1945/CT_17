/**
 *  170805 - Peace is Progress towards a known Destination.
 *  Today the Destination is
 *  GoDownAnd organize a Document into a Set of SPANs as children of a DIV Map.
 *      call the Map a ChptMap:     M01
 *      call the Set a VersesSet:   S01
 *                  and report.
 *  GoDownAnd code an EventHandler Function to select a SPAN from ChptMap:M01
 *      call the SPAN the focusVerseMap
 *      call the Handler select_aVerseFn
 *
 *
 */
"use strict";

let C_in = require('./h/C_in_')
    // , C_in_Doc = C_in.Doc
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both
;
let R = require('ramda')
    , curry = R.curry
    , concat = R.concat
    , pipe = R.pipe
    // , evolve = R.evolve
;
// ------- requires ------------
// let roundToTwoPlaces = require('./h/roundTo_');
// let DfltCsd = require('./RSpc/Dflt_RSpcStyles').Dflt;
let SRV_ChptVerses_Dflt = require('./CSpc/src/SRVa_NodeListOf_ChptVerses').SRV_ChptVerses_Dflt;
// let SRVa_WtFn__GVNa_Cnst = require('./RSpc/src/SRVa_WtFn').SRV_WtFn__GVNa_Cnst;
//
// let EVOL_aCsd = require('./SSpc/src/EVOLVEa_Csd');
// let SRVa_TRNFRM = require('./SSpc/src/SRVa_TRNFRM').by_always; // key -> valu -> Fn:TRNFRM
// let SRVa_Span = require('./CSpc/src/MUTATE_Elem').SRVa_Span__WTHa_Csd__GVNa_Span;

// -------- main starts here -------------


let main;
const VersesSet = new Set();
const ChptMap = new Map();
let focusMap = new Map();


function SELECT_readVerse(e) {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        main(e.target)
    }
    e.stopPropagation();
}

let theChptMap = document.querySelector('.chpt');
theChptMap.addEventListener("click", SELECT_readVerse, false);

main = function (item) {
    // ************** MAIN ********
    let TRK = "wbSample/main.js";
    C_in_Console('  IN> ' + TRK);

// select the readVerse span
    let readVerse = item;
    let sibColl = item.parentElement.children;
    focusMap
        .set('sibs', sibColl)
        .set('ndx', R.indexOf(item, sibColl))
        .set('focus', item)
    ;
    C_in_Console(`     readSpan.Index:  ${focusMap.get('ndx')}`);


// SPLIT into three ReadLists
    // first get a list of all spanVerses
    let SRV_spanIndex = pipe(
        SRV_ChptVerses_Dflt
        , R.flip(R.indexOf)
    )(document);
    let n = SRV_spanIndex(readVerse);
    let chptList = document.querySelectorAll('.chpt span');
    // now split them into three readClass lists: am, read. pm

    let lst = R.splitAt(n, chptList); // -> [[],...]
    let AmList = lst[0]; // -> [[],...]
    lst = R.splitAt(1)(lst[1]);
    let readList = lst[0];
    let PmList = lst[1];

// CODE UNDER TEST:
    /**
     * TASK: SET && SEE the backgroundColor of each spanVerse of each of the three RClsses
     *
     * ??? HOW INJECT / MUTATE / EVOLVE the base/default StyleAttributeCsd FOR each Class/List ???
     * ??? HOW map(an Attribute to a list of Attributes for each ReadClassList in a list of ReadClasses ???
     *
     * GVNa a baseDict of StyleAttributes by keyReadClass
     *  e.g. {am:{backgroundColor: 'red', color:'green', ...}. read:{}, pm:{]}
     *  map(SRVa_readStyle)()
     */



// I can Cee them All together
    let AllList = concat(concat(AmList, readList), PmList);
    C_in_Both(`     lengths:[${AmList.length}/${readList.length}/${PmList.length}], AllLists:${AllList.length}`);

//  apply WEIGHTING TO EACH Verse
//     let mapIndexed = R.addIndex(R.map);
//     C_in_Console(`    SRV_Wts -> [${ mapIndexed(SRV_mutatedElem)(AmList) }]`);

    C_in_Console('OUT> ' + TRK);
};