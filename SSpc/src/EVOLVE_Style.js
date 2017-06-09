
/**
 * EVOLVE_Style.js
 */
"use strict";
let R = require('ramda')
    , evolve = R.evolve
    , curry = R.curry
;

module.exports.EVOLVE_Style = evolve;       // (D.csdTrnsfrmD)(D.D.Csd){ EVOLVE_} -> D.D.Csd

module.exports._frmCsd = curry(
    csd_trnsfrm => evolve(csd_trnsfrm));    // ( D.Csd )=>{EVOL_aStyle}(D.Trnsfrm)} -> D.Csd

module.exports._frmTrnsfrm = curry(
    csd => evolve(R.__, csd));              // ( D.Trnsfrm )=>{ {_frmCsd} (aCSD) } -> D.Csd

module.exports._frmEvolTrnsfrm = curry(
    evol_trnsfrm => evolve(evol_trnsfrm));  // ( D.Csd )=>{??????} -> D.Csd
