/**
 ./src/SELECT_ChptVerses
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
    , curry = R.curry
;

let SELECT_DivSpans = curry(
    /**
     *  SELECT_DivSpans: Fn( DOC -> dfltChptVersesNL )
     */
    function (doc) {
        let DfltSelector = require('../Dflt_ChptVerses');
        return doc.querySelectorAll(DfltSelector); // (invoked) -> div.span NodeList
    });
module.exports.SELECT_DivSpans = SELECT_DivSpans; //

let DivSpans_SELECTOR = curry(
    doc => {
        let qSA = R.invoker(1, 'querySelectorAll');
        return qSA(require('../Dflt_ChptVerses'))(doc)
        // this should be a Fn arity:1  docDCT -> nodeLST
    });
module.exports.DivSpans_SELECTOR = DivSpans_SELECTOR;// Fn: ( docDCT -> divSpanLST )