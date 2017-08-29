"use strict";
let TRK = "wbSample/main.js";


// ------- requires ------------
let R = require('ramda');
let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    // , C_in_Both = C_in.Both
;
// ************** MAIN ********
C_in.Both('> IN  ' + TRK);

// ------- CodeUnderTest requires
let update_ChptSpans = require('./CSpc/src/UPDATE_CSpc').update_;
let CLICK_VerseToRead = (e) => {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        update_ChptSpans(e.target);
    }
    e.stopPropagation();
    return e
};  // USE this MouseEvent handler to select a readFocus span.

document.addEventListener("DOMContentLoaded", function (event) {
    let ChptDIV = document.querySelector('.chpt');
    update_ChptSpans(ChptDIV.firstElementChild);
    ChptDIV.addEventListener('click', CLICK_VerseToRead, false);
});
C_in_Console('> OUT> ' + TRK);
