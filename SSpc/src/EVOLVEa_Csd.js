"use strict";

let R = require('ramda')
;
/**
 * EVOLVEa_:: Csd__GVNa_Trnsfrm IS a Fn.arity:1
 *  RESULTING FROM provided its @param: csd
 * It RETURNS a Fn.artiy:1
 *  that WHEN provided its @param: styleTransform
 * It RETURNS a styleCsdObj
 */
module.exports.byTrnsfrm = csd => R.flip(R.evolve)(csd);
// 20170724
module.exports.SRVa_Csd__WTHa_Csd__GVNa_Trnsfrm = R.curry(
    csd => R.flip(R.evolve)(csd)
); // -> Fn(Trnsfrm -> evolvedCsd




