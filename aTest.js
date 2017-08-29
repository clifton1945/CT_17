/**
 */
"use strict";
// ------- requires ------------
let R = require('ramda');
let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    // , C_in_Both = C_in.Both
;
// ************** MAIN ********
let TRK = "wbSample/aTest.js";
console.log('>  IN ' + TRK);
// C_in_Console(' IN> ' + TRK);

// ------- CodeUnderTest requires
// let update_ChptSpans = require('./CSpc/src/UPDATE_CSpc').update_;

// first init the index.html
// let ChptDIV = document.getElementById('.chpt');

// update_ChptSpans(ChptDIV.firstElementChild);
// also set listener
// USE this MouseEvent handler to select a readFocus span.
// function CLICK_VerseToRead(e) {
//     if (e.target !== e.currentTarget) {
//         e.stopPropagation();
//         update_ChptSpans(e.target);
//     }
//     e.stopPropagation();
// }
// ChptDIV.addEventListener('click', CLICK_VerseToRead, false);

document.addEventListener("DOMContentLoaded", function (event) {
    let ChptDIV = document.getElementById('.chpt', false);
    console.log('this is the ChptDiv:' + ChptDIV);
});
console.log('> OUT ' + TRK);
// C_in_Console('OUT> ' + TRK);
