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

let DfltCSD = require('../Dflt_Style').DfltCSD;// -> {backgroundColor: '', opacity: '1.0', fontSize: '100%'}
/**
 *  ..... EVOLVE_CSD:: ( CSD_trnsfrms -> CSD_new )
 * @param CSD_trnsfrms
 * @return CSD_new
 // */
let EVOLVE_CSD = EVOLVE(DfltCSD);

// module.exports.EVOLVE = EVOLVE;
module.exports.EVOLVE_CSD = EVOLVE_CSD;