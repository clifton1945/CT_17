/**
 * EVOLVE_Style.js
 */
"use strict";


let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
    , always = R.always
    , curry = R.curry
;

// let dflt = require('../Dflt_Style').dfltCSD;
// let transformations = {
//     backgroundColor:always('yellow')
//     , opacity: always('0.5')
// };
let EVOLVE = curry(
    /**
     *  ..... EVOLVE:: OBJ -> OBJ -> OBJ
     * @param trnsfrm
     * @param dflt
     */
    (trnsfrm, dflt) => R.evolve(trnsfrm, dflt)
);

module.exports.EVOLVE = EVOLVE;