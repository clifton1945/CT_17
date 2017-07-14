/**
 ./src/SRV_ChptVerses
 TODO  0600   FIGURE OUT a way to test this and change it to SRV_ChptVerses_Dflt
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
    , curry = R.curry
;

let SELECT_DivSpans = curry(
    /**
     *  SRV_ChptVerses_Dflt: Fn( DOC -> dfltChptVersesNL )
     */
    function (doc) {
        let DfltSelector = require('../DfltSelector_ChptVerses');
        return doc.querySelectorAll(DfltSelector); // Fn(invoked w/ document) -> div.span NodeList
    });
module.exports.SELECT_DivSpans = SELECT_DivSpans;
module.exports.SRV_ChptVerses_Dflt = SELECT_DivSpans; // Fn( DOC -> dfltChptVersesNL )

