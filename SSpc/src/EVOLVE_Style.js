// /**
//  * EVOLVE_Style.js
//  */
"use strict";

let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
//     , always = R.always
    , curry = R.curry
;

let EVOLVE = curry(
    /**
     *  ..... EVOLVE:: DCT -> ( DCT -> DCT )
     *  DCT.dfltCSD -> ( DCT.csdTrnsfrms -> DCT.newCSD )
     * @param dfltCSD
     * @param csdTrnsfrms
     * @return newCSD
     *
     * USAGE:
     *  let dfltCSD = require('...
     *  let EVOLVE_CSD_from_Dflt = EVOLVE(dfltCSD);// DCT.trnsfrms -> DCT.CSD
     *
     */
    (dfltCSD, csdTrnsfrms) => R.evolve(csdTrnsfrms, dfltCSD)
);

let DfltCSD = require('../Dflt_CSDe').DfltCSD;// -> {backgroundColor: '', opacity: '1.0', fontSize: '100%'}
/**
 *  ..... EVOLVE_CSD_from_Dflt:: ( csdTrnsfrms -> newCSD )
 * @param csdTrnsfrms
 * @return newCSD
 // */
let EVOLVE_CSD = EVOLVE(DfltCSD);

module.exports.EVOLVE = EVOLVE;
module.exports.EVOLVE_CSD = EVOLVE_CSD;