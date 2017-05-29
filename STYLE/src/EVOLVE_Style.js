/**
 * EVOLVE_Style.js
 */
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
     *  ..... EVOLVE:: dfltCSD -> ( _trnsfrm_CSD -> newCSD )
     * @param dfltCSD
     * @param _trnsfrm_CSD
     * @return newCSD
     */
    (dfltCSD, _trnsfrm_CSD) => R.evolve(_trnsfrm_CSD, dfltCSD)
);

let DfltCSD = require('../Dflt_Style').DfltCSD;// -> {backgroundColor: '', opacity: '1.0', fontSize: '100%'}
/**
 *  ..... EVOLVE_CSD:: ( _trnsfrm_CSD -> newCSD )
 * @param _trnsfrm_CSD
 * @return newCSD
 // */
let EVOLVE_CSD = EVOLVE(DfltCSD);

module.exports.EVOLVE = EVOLVE;
module.exports.EVOLVE_CSD = EVOLVE_CSD;