
/**
 * EVOLVE_CSD.js
 */
"use strict";
let R = require('ramda')
    , evolve = R.evolve
    , curry = R.curry
;

module.exports.EVOLVE = evolve;
module.exports.EVOL_aStyle = curry(csd_trnsfrm => evolve(csd_trnsfrm));
module.exports.EVOL_aCSD = curry(csd => evolve(R.__, csd));