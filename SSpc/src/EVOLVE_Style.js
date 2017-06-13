
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


let EVOLVE_Style_wStyleTrnfrm_on_aCsd = curry(csd => evolve(R.__, csd));
module.exports._frmTrnsfrm = EVOLVE_Style_wStyleTrnfrm_on_aCsd;

const DfltCsd = require('../Dflt_CSD');
let EVOLVE_Style_wStyleTrnfrm_on_CsdDflt = EVOLVE_Style_wStyleTrnfrm_on_aCsd(DfltCsd);
module.exports._frmDfltCSD = EVOLVE_Style_wStyleTrnfrm_on_CsdDflt;    // ( D.Csd )=>{EVOL_aStyle}(D.Trnsfrm)} -> D.Csd

