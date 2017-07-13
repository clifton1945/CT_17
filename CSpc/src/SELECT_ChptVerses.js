/**
 ./src/SELECT_ChptVerses
 TODO  0600   FIGURE OUT a way to test this and change it to SRV_DfltChptVerses
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
    , curry = R.curry
;

let SELECT_DivSpans = curry(
    /**
     *  SRV_DfltChptVerses: Fn( DOC -> dfltChptVersesNL )
     */
    function (doc) {
        let DfltSelector = require('../Dflt_ChptVerses');
        return doc.querySelectorAll(DfltSelector); // Fn(invoked w/ document) -> div.span NodeList
    });
module.exports.SELECT_DivSpans = SELECT_DivSpans;
module.exports.SRV_DfltChptVerses = SELECT_DivSpans; // Fn( DOC -> dfltChptVersesNL )

