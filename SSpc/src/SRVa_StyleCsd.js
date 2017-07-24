"use strict";
let R = require('ramda')
;
/**
 * SRVa_RClass_StyleCsd IS aFn.arity:1
 *  that WHEN provided its @param: readClass Key
 * RETURNS a Dflt OR Test ReadClass Csd valu.
 *
 *
 */
module.exports.Dflt = require('../StyleCSDS').Dflt;
module.exports.Test = require('../StyleCSDS').Test;

module.exports.byReadClassKey = key => require('../StyleCSDS').Dflt[key];
//  170724  new verbose named Fn
let x = require('../StyleCSDS').Dflt;
module.exports.SRVa_DfltRSpcCsd_GVNa_Key = R.curry(key => R.path(key, x));

