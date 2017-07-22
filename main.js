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
    , C_in_Doc = C_in.Doc
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

    C_in_Both(`     The selected Verse is Index[${ n}]
         , backgroundColor:${ret.style.backgroundColor}
         , color:${ret.style.color}
         , opacity:${ret.style.opacity}`
    );

// ***************** take the first split as a list of AM spans
//      apply a weighting Fn
    let chptList = document.querySelectorAll('.chpt span');
    let aAmList = R.splitAt(8, chptList)[0]; // -> [[],...]
    let mapIndexed = R.addIndex(R.map);
    let modFn0 = (el, ndx, lst) => Math.pow(ndx / lst.length, 0);
    // -> [1,1,1,...
    let modFn25 = (el, ndx, lst) => Math.pow(ndx / lst.length, 0.25);
    //   0,0.5946035575013605,0.7071067811865476,
    let modFn80 = (el, ndx, lst) => Math.pow(ndx / lst.length, 0.80);
    // 0,0.18946457081379975,0.3298769776932235
    let modFn100 = (el, ndx, lst) => Math.pow(ndx / lst.length, 1); // ->
    // [0,0.125,0.25, 0.375.
    let ret2 = fn => mapIndexed(
        fn, aAmList);
    C_in_Console(`     -> ${ret2(modFn80)}`);
};