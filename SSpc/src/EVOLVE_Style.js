"use strict";

let R = require('ramda')
;
/**
 * EVOLVE_Style_byTrnfrm IS aFn.arity:1
 *  that WHEN provided its @param: csd
 * It RETURNS a Fn.artiy:1
 *  that WHEN provided its @param: styleTransform
 * It RETURNS a styleCsdObj
 */
module.exports.byTrnsfrm = csd => R.flip(R.evolve)(csd);
module.exports.SRV_evolvedStyle_byTrnsfrm = csd => R.flip(R.evolve)(csd);


