/**
 *  main.js
 *
 */
"use strict";

let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both
;
let R = require('ramda')
    // , curry = R.curry
    , pipe = R.pipe
    // , evolve = R.evolve
;

let main;

// EventHandler
let theParent = document.querySelector('.chpt');
theParent.addEventListener("click", doSomething, false);

function doSomething(e) {
    if (e.target !== e.currentTarget) {
        // let clickedItem = e.target;
        e.stopPropagation();
        main(e.target)
    }
    e.stopPropagation();
}
main = function (item) {
    // ************** MAIN ********

    let TRK = "wbSample/main.js";
    C_in_Console('  IN> ' + TRK);


// Data: ChapterSpace: allVerses, noonVerse
    let SELECT_All = require('./CSpc/src/SELECT_ChptVerses')
        .SELECT_All; //                     SELECT_All(documentDCT) -> Fn:( querySTR -> divSpanLST )
    let querySERVER = SELECT_All(document);     // querySERVER( querySTR ) -> divSpanLST
    let ChptVerses = querySERVER('chpt, span'); // ChptVerses isA divSpanLST
    let indexSERVER = R.flip(R.indexOf)(ChptVerses);   // indexSERVER( span )  -> ndx
    // now select the noonVerse span
    // let noonVerse = item;
    let n = indexSERVER(noonVerse);

// Data: StyleSpace
    let STUB_CSD = require('./SSpc/StyleCSDs').Test;
// Fn: ChapterSpace
    let MUTATE_Elem = require('./CSpc/src/MUTATE_Elem').MUTATE_;// csdDCT -> Fn(  eltDCT -> eltDCT )

    let ret = MUTATE_Elem(STUB_CSD)(noonVerse);
    C_in_Both(`  The selected Verse is Verse.Index[${ n}]`);
    // C_in_Both(`   color:${ret.style.color}, opacity:${ret.style.opacity}`);
    C_in_Console(' OUT> ' + TRK);
};