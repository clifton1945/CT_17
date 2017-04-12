/**
 ./src/SELECT_ChptVerses
 */
"use strict";

let R = require('ramda')
    , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
    , curry = R.curry
;


module.exports = curry(
    /**
     *  ..... SELECT_ChptVerses(document) -> NodeList of ChptVerses
     * @param doc
     * @return {*}
     */
    (doc) => { // DOC -> NL
        let CVName = require('../src/Dflt_ChptVersesSelector');
        let selectAll = R.invoker(1, 'querySelectorAll');
        console.log(CVName);
        return selectAll(CVName)(doc)
    });
