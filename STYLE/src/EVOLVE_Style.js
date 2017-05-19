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
     *  ..... EVOLVE:: CSD_dflt -> ( CSD_trnsfrms -> CSD_new )
     * @param CSD_dflt
     * @param CSD_trnsfrms
     * @return CSD_new
     */
    (CSD_dflt, CSD_trnsfrms) => R.evolve(CSD_trnsfrms, CSD_dflt)
);

let DfltCSD = require('..\\STYLE\\Dflt_Style').DfltCSD;//
/**
 *  ..... EVOLVE_CSD:: ( CSD_trnsfrms -> CSD_new )
 * @param CSD_trnsfrms
 * @return CSD_new
 */
let EVOLVE_CSD = EVOLVE(DfltCSD);

module.exports.EVOLVE = EVOLVE; // TODO maybe REFACT to eliminate; not used in main.js
module.exports.EVOLVE_CSD = EVOLVE_CSD;