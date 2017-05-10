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

let EVOLVE = curry(
    /**
     *  ..... EVOLVE:: CSD_dflt -> ( OBJ_trnsfrms -> CSD_new )
     * @param CSD_dflt
     * @param OBJ_trnsfrms
     * @return CSD_new
     */
    (CSD_dflt, OBJ_trnsfrms) => R.evolve(OBJ_trnsfrms, CSD_dflt)
);

let DfltCSD = require('../Dflt_Style').DfltCSD;
/**
 *  ..... EVOLVE_CSD:: ( OBJ_trnsfrms -> CSD_new )
 * @param OBJ_trnsfrms
 * @return CSD_new
 */
let EVOLVE_CSD = EVOLVE(DfltCSD);

module.exports.EVOLVE = EVOLVE;
module.exports.EVOLVE_CSD = EVOLVE_CSD;