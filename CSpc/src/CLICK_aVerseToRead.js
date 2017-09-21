"use strict";
let R = require('ramda')
;
// let UPDATE_ChptSpans = require('./UPDATE_ChprDIV').update_;
let CLICK_aVerseToRead;
CLICK_aVerseToRead = R.curry(
    (fn, e) => {
        if (e.target !== e.currentTarget) {
            e.stopPropagation();
            fn(e.target);
        }
        e.stopPropagation();
        return e
    }
);  // USE mouse select a readFocus span.

module.exports.CLICK = CLICK_aVerseToRead;