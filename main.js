/**
 *  170805 - Peace is Progress towards a known Destination.
 *  Today the Destination is
 *  GoDownAnd ORGANIZE a Document into a Set of SPANs as children of a DIV Map.
 *      CALL the Map a ChptMap:     M01
 *      CALL the Set a VersesSet:   S01
 *  ReportAndCallThis Day1.
 *
 *  GoDownAnd CODE an EventHandler Function to select a SPAN from ChptMap:M01
 *      call the SPAN the verseVerseMap
 *      call the Handler select_aVerseFn
 *  ReportAndCallThis Day2.
 *
 * GoDownAnd MUTATE the readVerse
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
let rVerseM = new Map();

// TEST  DATA

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
    // can DEPR
    let sibColl = item.parentElement.children;
    // rVerseM
    //     .set('verse', item)
    //     .set('ndx', R.indexOf(item, sibColl))
    //     .set('sibs', sibColl)
    // ;
    C_in_Console(`     readSpan.Index:  ${R.indexOf(item, sibColl)}`);

// CODE UNDER TEST:
    /**
     * GoDownAnd
     *  EVOLVE a readVerseStyle && CALL it bgColorAttr
     *      for this time evolve(bgColor,
     *
     */
        // let aDct = () => {};
    let aCsd = {
            AR: {backgroundColor: "rgba(255, 7, 109, 0.17)"},
            RR: {backgroundColor: "rgba(247, 241, 6, 0.09)"},
            BR: {backgroundColor: "rgba(57, 255, 6, 0.10)"}
        };
    // let evolve_aCsd = R.evolve(aTrnfrm, R.__);
    // let aCsd = evolve_aCsd(readVerse.style); // no need for a default Csd use this
    //
    // let bgColorMap = new Map([
    //     ['AR', {backgroundColor: "rgba(255, 7, 109, 0.17)"}],
    //     ['RR', {backgroundColor: "rgba(247, 241, 6, 0.09)"}],
    //     ['BR', {backgroundColor: "rgba(57, 255, 6, 0.10)"}]
    // ]);
    // let SRVa_bgColor = require('./SSpc/src/SRVa_Attr')(bgColorMap);
    // let bgColorAttr = SRVa_bgColor(5, 5); // NOTE I am forcing this to RR i.e. the verse is the  read Verse

    // NEW CODE here
    let Fn_bgColor = curry(
        (csd, elt) => {
            elt.style['backgroundColor'] = csd['backgroundColor'];
            return elt
        }
    );

    let ret = Fn_bgColor(aCsd.RR, item);

    C_in_Console(` ret> ${ret.style.backgroundColor}`);

    C_in_Console(' OUT> ' + TRK);
};