/**
 ./src/SELECT_ChptVerses
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
    , curry = R.curry
;

const _spansNL = curry(
    /**
     *  _spansNL:: Fn(DOC -> LIST)
     */
    doc => doc.querySelectorAll('.chptr span')
);
module.exports._spansNL = _spansNL;
