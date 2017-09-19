/**
 ./src/SRV_ChptVerses
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
        let DfltSelector = require('../Dflt_ChptSelector');
        return doc.querySelectorAll(DfltSelector); // Fn(invoked w/ document) -> div.span NodeList
    });
module.exports.SELECT_DivSpans = SELECT_DivSpans;
module.exports.SRV_ChptVerses_Dflt = SELECT_DivSpans; // Fn( DOC -> dfltChptVersesNL )

