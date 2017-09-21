"use strict";
// let R = require('ramda')
// ;

let UPDATE_ChptSpans = require('./UPDATE_ChprDIV').update_;

let CLICK_aVerseToRead;
CLICK_aVerseToRead = (e) => {
    if (e.target !== e.currentTarget) {
        e.stopPropagation();
        UPDATE_ChptSpans(e.target);
    }
    e.stopPropagation();
    return e
};  // USE mouse select a readFocus span.

module.exports.CLICK_aVerseToRead = CLICK_aVerseToRead;