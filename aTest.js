"use strict";
let TRK = "wbSample/aTest.js";

// ------- requires ------------
let R = require('ramda');
let C_in = require('./h/C_in_')
;
// ************** MAIN ********
C_in.Both('> IN  ' + TRK);

// ------- CodeUnderTest requires
let UPDATE_ChptSpans = require('./CSpc/src/UPDATE_ChprSpc').update_;
let CLICK_VerseToRead = (e) => {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        UPDATE_ChptSpans(e.target);
    }
    e.stopPropagation();
    return e
};  // USE mouse select a readFocus span.


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

    /**
     *      INIT  Chapter Verse Spans to the default focus span: span index 0.
     */
    UPDATE_ChptSpans(ChptDIV.firstElementChild);//

    /**
     *      On Mouse, and later Key, Events UPDATE all Chpt Verse Spans
     */
    ChptDIV.addEventListener('click',
        CLICK_VerseToRead, false);//
});
C_in.Console('> OUT> ' + TRK);
