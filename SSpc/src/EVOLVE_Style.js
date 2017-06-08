
/**
 * EVOLVE_Style.js
 */
"use strict";
let R = require('ramda')
    , evolve = R.evolve
    , curry = R.curry
;

module.exports.EVOLVE_Style = evolve;       // (D.csdTrnsfrmD)(D.D.Csd){ EVOLVE_} -> D.D.Csd

module.exports._byCsd = curry(
    csd => evolve(R.__, csd));              // ( D.Csd )=>{EVOL_aStyle}(D.Trnsfrm)} -> D.Csd

module.exports._byTrnsfrm = curry(
    csd_trnsfrm => evolve(csd_trnsfrm));    // ( D.Trnsfrm )=>{ {_byCsd} (aCSD) } -> D.Csd

// TODO maybe RENAME  CSD_byTrnsfrm
module.exports.Csd_byTrnsfrm = curry(
    csd_trnsfrm => evolve(csd_trnsfrm));    // ( D.Csd )=>{EVOL_aTrnsfrm}(D.Trnsfrm)} -> D.Csd
