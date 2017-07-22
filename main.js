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

// use it to create a Test Stub Csd to apply to the selected noonVerse spam item.
    let testCSD;  // Test Data: StyleSpace
    testCSD = require('./SSpc/src/SRV_StyleCSD').byReadClassKey('am');
    //      am: paleRed , noon: paleYellow , pm: paleGreen

// Fn: SRV_mutatedElem
    let SRV_mutatedElem = require('./CSpc/src/MUTATE_Elem').MUTATE_((testCSD));
    //       csdDCT -> Fn(  eltDCT -> eltDCT )

// CODE UNDER TEST
    let ret = SRV_mutatedElem(noonVerse);

// ******************  all that follows is JUST TO RETURN the Index of the selected span.
    let SRV_ChptVerses_Dflt = require('./CSpc/src/SRV_ChptVerses').SRV_ChptVerses_Dflt;
    let SRV_spanIndex = pipe(SRV_ChptVerses_Dflt, R.flip(R.indexOf))(document);
    let n = SRV_spanIndex(noonVerse);
    C_in_Both(`     The selected Verse.Index[${ n}]
         backgroundColor:${ret.style.backgroundColor}, color:${ret.style.color}, opacity:${ret.style.opacity}`);

// This is finding out that wallaby document is not the real document, this the tests did not work
    let aNodeList = document.querySelectorAll('.chpt span')
        , aNodeArray = Array.apply(null, aNodeList)
    ;
    let getElementIndex = require('./h/getElementIndex'); // USING new h/getElementIndex function.

    let n1 = getElementIndex(item);
    let n2 = R.indexOf(item, aNodeArray);
    C_in_Both(`js N = ${n1} ramda N = ${n2}`);
    C_in_Console(' OUT> ' + TRK);
};