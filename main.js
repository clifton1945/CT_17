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
// Test Data: StyleSpace
    let STUB_CSD = require('./SSpc/StyleCSDs').Test;
// Fn: MUTATE_Elem
    let MUTATE_Elem = require('./CSpc/src/MUTATE_Elem').MUTATE_;// csdDCT -> Fn(  eltDCT -> eltDCT )
// CODE UNDER TEST
    let ret = MUTATE_Elem(STUB_CSD)(noonVerse);

// all that follows is just to return a span mdx, it is in a span list, AND see it in the HTML output
    let SRV_DfltChptVerses = require('./CSpc/src/SELECT_ChptVerses').SRV_DfltChptVerses;
    let SRV_spanIndex = pipe(SRV_DfltChptVerses, R.flip(R.indexOf))(document);
    let n = SRV_spanIndex(noonVerse);
    C_in_Both(`     The selected Verse is Verse.Index[${ n}]
        color:${ret.style.color}, opacity:${ret.style.opacity} `);

    C_in_Console(' OUT> ' + TRK);
};