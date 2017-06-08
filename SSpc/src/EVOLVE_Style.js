
/**
 * EVOLVE_Style.js
 */
"use strict";
let R = require('ramda')
    , evolve = R.evolve
    , curry = R.curry
;

module.exports.EVOLVE = evolve;             // (csdTrnsfrmD)(csdD){ EVOLVE_} -> csdD

module.exports.EVOL_aCSD = curry(
    csd => evolve(R.__, csd));              // ( trnsfrmD )=>{ EVOL_aCSD }(aCSD) -> csdD

module.exports.EVOL_aStyle = curry(
    csd_trnsfrm => evolve(csd_trnsfrm));    // ( csdD )=>{EVOL_aStyle}(trnsfrmD)} -> csdD

// TODO maybe RENAME  CSD_byTrnsfrm
module.exports.CSD_byTrnsfrm = curry(
    csd_trnsfrm => evolve(csd_trnsfrm));      // ( csdD )=>{EVOL_aTrnsfrm}(trnsfrmD)} -> csdD
