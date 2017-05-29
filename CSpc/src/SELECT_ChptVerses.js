/**
 ./src/SELECT_ChptVerses
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
    , curry = R.curry
;

const _CVList = curry(
    /**
     *  _CVList:: Fn(DOC -> LIST)
     */
    doc => doc.querySelectorAll('.chptr span')
);
module.exports._CVList = _CVList;
