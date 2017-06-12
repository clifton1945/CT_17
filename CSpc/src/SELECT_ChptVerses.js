/**
 ./src/SELECT_ChptVerses
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
    , curry = R.curry
;

let _spansNL = curry(
    /**
     *  selectChptVerses_byQueryDocFN: Fn(DOC -> LIST)
     *  select_DfltDivSpans: Fn(DOC -> LIST)
     */
    function () {
        let DfltSelector = require('./Dflt_CV_Selector');
        let invokeSelectorAll = R.invoker(1, 'querySelectorAll');

        return doc => doc.querySelectorAll('.chptr span')
    });

module.exports._spansNL = _spansNL;
