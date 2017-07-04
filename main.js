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

// Data: ChapterSpace
    let aVersSELECTED = item;
// Data: StyleSpace
    let STUB_CSD = require('./SSpc/StyleCSDs').Test;
// Fn: ChapterSpace
    let MUTATE_Elem = require('./CSpc/src/MUTATE_Elem').MUTATE_;// csdDCT -> Fn(  eltDCT -> eltDCT )

    let ret = MUTATE_Elem(STUB_CSD)(aVersSELECTED);

    C_in_Both(`  OUTSIDE: Verse begins with [${ R.take(5, item.innerText)}]`);
    // C_in_Both(`   color:${ret.style.color}, opacity:${ret.style.opacity}`);
    C_in_Console(' OUT> ' + TRK);
};
