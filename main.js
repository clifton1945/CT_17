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
theParent.addEventListener("click", SELECT_noonVerse, false);

function SELECT_noonVerse(e) {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        main(e.target)
    }
    e.stopPropagation();
}

main = function (item) {
    // ************** MAIN ********
    let TRK = "wbSample/main.js";
    C_in_Console('  IN> ' + TRK);

// select the noonVerse span
    let noonVerse = item;
// use it to create three readClass Lists

    let testCSD;  // Test Data: StyleSpace
    testCSD = require('./SSpc/src/SRV_StyleCSD').byReadClassKey('pm');
    //      am: paleRed , noon: paleYellow , pm: paleGreen
// Fn: MUTATE_Elem
    let MUTATE_Elem = require('./CSpc/src/MUTATE_Elem').MUTATE_;
    //       csdDCT -> Fn(  eltDCT -> eltDCT )
// CODE UNDER TEST
    let ret = MUTATE_Elem(testCSD)(noonVerse);

// all that follows is just to return a span mdx, it is in a span list, AND see it in the HTML output
    let SRV_ChptVerses_Dflt = require('./CSpc/src/SRV_ChptVerses').SRV_ChptVerses_Dflt;
    let SRV_spanIndex = pipe(SRV_ChptVerses_Dflt, R.flip(R.indexOf))(document);
    let n = SRV_spanIndex(noonVerse);
    C_in_Both(`     The selected Verse.Index[${ n}]
         backgroundColor:${ret.style.backgroundColor}, color:${ret.style.color}, opacity:${ret.style.opacity}`);

    C_in_Console(' OUT> ' + TRK);
};