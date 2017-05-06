/**
 * EVOLVE_Style.js
 */
"use strict";

let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
    , curry = R.curry
;

let EVOLVE_Style = curry(
    () => {
        let dflt = require('.Dflt_Style');
        //STUB
        return dflt
    }
);
module.exports.EVOLVE_Style = EVOLVE_Style;
