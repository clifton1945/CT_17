/**
 CV/src/main_UPDATE
 */
"use strict";

let R = require('ramda')
// , pipe = R.pipe
// , compose = R.compose
    , map = R.map
    , curry = R.curry
;


let update = curry
(
    (el, ndx, col) => {
        const CVSpace_VerseList = require('./SELECT_ChptVerses')(document);
        const dfltCSD = require('../../STYLE/Dflt_Style');
        // return map()
    }
);

module.exports.update = update;
