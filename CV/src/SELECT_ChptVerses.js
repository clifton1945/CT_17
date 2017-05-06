/**
 ./src/SELECT_ChptVerses
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
    , curry = R.curry
//     , compose = R.compose
//     , map = R.map
;

const _CVList = curry(
    /**
     *  _CVList:: (DOC -> LIST)
     */
    doc => doc.querySelectorAll('.chptr span')
);
module.exports._CVList = _CVList;
