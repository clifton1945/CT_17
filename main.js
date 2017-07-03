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


// ************** MAIN ********
let TRK = "wbSample/main.js";
C_in_Console('  IN> ' + TRK);

// Data: ChapterSpace
let DivSpans_SELECTOR = require('./CSpc/src/SELECT_ChptVerses')
    .DivSpans_SELECTOR;// Fn: ( docDCT -> dicSpanLST )
let aVersSELECTED = pipe(DivSpans_SELECTOR)(document)[1];
// Data: StyleSpace
let STUB_CSD = require('./SSpc/StyleCSDs').Test;
// Fn: ChapterSpace
let MUTATE_Elem = require('./CSpc/src/MUTATE_Elem')
    .anElem;// eltDCT -> ( csdDCT -> eltDCT )

let ret = MUTATE_Elem(aVersSELECTED)(STUB_CSD);
C_in_Both(`   color:${ret.style.color}, opacity:${ret.style.opacity}`);


// let g = document.querySelector('.chpt > span');
// for (var i = 0, len = g.children.length; i < len; i++)
// {
//     (function(index){
//         g.children[i].onclick = function(){
//             C_in_Both(`index is ${index}`)  ;
//         }
//     })(i);
// }


C_in_Console(' OUT> ' + TRK);
