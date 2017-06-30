
/**
 * EVOLVE_Style.js
 */
"use strict";
let R = require('ramda')
    , evolve = R.evolve
    , curry = R.curry
;
module.exports.EVOLVE_ = evolve;             // EVOLVE_( stylCsd ) -> EVOL_Style
module.exports.EVOL_Style = evolve;          // EVOL_Styl (csdTrnsfrm


module.exports.EVOLVE_Style = evolve;       // (D.csdTrnsfrmD)(DfltCsd){ EVOLVE_} -> stylCsd
module.exports._frmCsd = curry(
    csd_trnsfrm => evolve(csd_trnsfrm));    // ( D.Csd )=>{EVOL_aStyle}(D.Trnsfrm)} -> D.Csd


let EVOLVE_Style_wStyleTrnfrm_on_aCsd = curry(csd => evolve(R.__, csd));
module.exports._frmTrnsfrm = EVOLVE_Style_wStyleTrnfrm_on_aCsd;

const DfltCsd = require('../StyleCSDs').Dflt;

let _Style_use_TrnfrmD_on_DfltCsd = EVOLVE_Style_wStyleTrnfrm_on_aCsd(DfltCsd);
module.exports._use_TrnfrmD_on_DfltCsd = _Style_use_TrnfrmD_on_DfltCsd;    // ( D.Csd )=>{EVOL_aStyle}(D.Trnsfrm)} -> D.Csd

