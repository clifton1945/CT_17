/**
 *  DEPR --- 170805 - Peace is Progress towards a known Destination.
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
// const VersesSet = new Set();
// const ChptMap = new Map();
// let rVerseM = new Map();

// TEST  DATA

function SELECT_VerseToRead(e) {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        main(e.target)
    }
    e.stopPropagation();
}

let ChptDCT = document.querySelector('.chpt');
ChptDCT.addEventListener("click", SELECT_VerseToRead, false);

main = function (vtr) { // vtr:VerseToRead
    // ************** MAIN ********
    let TRK = "wbSample/main.js";
    C_in_Console('  IN> ' + TRK);

// select the VerseToRead: a span
    let VersesColl = vtr.parentElement.children;
    let vtrNdx = R.indexOf(vtr, VersesColl);
    C_in_Console(`     VerseToRead.Index:  ${vtrNdx}`);

// CODE UNDER TEST:
    /**
     * GoDownAnd
     *  EVOLVE an Element's Style Attributes, its CSD, as a function of it's Index and SiblingList.
     *      Define an EventListener within the chapter div.chpt
     *          and call it SELECT_VerseToRead
     *
     *      Organize a dictionary of element style Attributes to be MODIFIED||EVOLVED
     *          and call it StyleAttrsDCT:
     *          it should look like  {k:v, k:v, ...}
     *              for example: {color:"", fontSize:"50%", backgroundColor:"", ...}
     *
     *      TRIAGE any combination of Index and SiblSize TO one of three States:
     *          AfterReading, NowReading, BeforeReading
     *      Somehow pass the readState to all the
     *          the StyleAttrDCT needs to be Trnfrm ed
     *
     *
     */
    let backgroundColor_ReadStatesDct = {
        AR: "rgba(255, 7, 109, 0.17)",
        NR: "rgba(247, 241, 6, 0.09)",
        BR: "rgba(57, 255, 6, 0.10)"
        };
    let Attr_TrnfrmDCT = {
        color: R.always('green'),
        backgroundColor: R.always(backgroundColor_ReadStatesDct.AR)
    };
    let readDCT = {backgroundColor: '', color: ''};

    let evolve_aReadDct = R.evolve(R.__, readDCT);//Fn
    let aCsd = evolve_aReadDct(Attr_TrnfrmDCT);

// now have a new style.Csd, mutate an element
    let mutate_anElem = require('./CSpc/src/MUTATE_Elem').MUTATE_;//Fn
    let ret = mutate_anElem(aCsd, vtr);
    C_in_Console(`  .... ret > ${ret.style.backgroundColor}`);

    C_in_Console(' OUT> ' + TRK);
};