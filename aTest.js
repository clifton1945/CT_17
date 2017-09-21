"use strict";
let TRK = "wbSample/aTest.js";

// ------- requires ------------
let R = require('ramda');
let C_in = require('./h/C_in_')
;
// ************** MAIN ********
C_in.Both('> IN  ' + TRK);
// ------- CodeUnderTest requires
let UPDATE_ChptSpans = require('./CSpc/src/UPDATE_ChprDIV').update_;
let CLICK_toRead_aVerse = require('./CSpc/src/CLICK_toRead_aVerse').CLICK(UPDATE_ChptSpans);

/**
 *      FIRST wait for content loaded
 *      BEFORE UPDATE_ChptSpans
 * @type {Element}
 */
document.addEventListener("DOMContentLoaded", function (event) {
    /**
     * the ChptDiv will be the scope Verses to be read
     * @type {Element}
     */
    let ChptDIV = document.querySelector('.chpt');
    // WIP
    // let f = R.invoker(1, 'querySelector'); // STR -> (DOC -> ELEM);
    // let ret = f('.chpt')(document);
    /**
     *      INIT  Chapter Verse Spans to the default focus span: span index 0.
     */
    UPDATE_ChptSpans(ChptDIV.firstElementChild);
    /**
     *      On Mouse, and later Key, Events UPDATE all Chpt Verse Spans
     */
    ChptDIV.addEventListener('click',
        CLICK_toRead_aVerse, false);
});
C_in.Both('> WAITING ...' + TRK);