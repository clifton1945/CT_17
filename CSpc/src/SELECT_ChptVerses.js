/**
 ./src/SELECT_ChptVerses
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
    , curry = R.curry
;

let SELECT_DivSpans_useDflt = curry(
    /**
     *  selectChptVerses_byQueryDocFN: Fn(DOC -> LIST)
     *  select_DfltDivSpans: Fn(DOC -> LIST)
     */
    function (doc) {
        let DfltSelector = require('../Dflt_ChptVerses');
        return doc.querySelectorAll(DfltSelector); // this should be a Fn arity:1
    });

module.exports.SELECT_DivSpans = SELECT_DivSpans_useDflt;
