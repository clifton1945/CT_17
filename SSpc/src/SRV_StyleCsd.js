"use strict";
let R = require('ramda')
;
/**
 * SRV_RClass_StyleCsd IS aFn.arity:1
 *  that WHEN provided its @param: readClass Key
 * RETURNS a readClass Csd valu
 */
module.exports.Dflt = require('../StyleCSDS').Dflt;
module.exports.Test = require('../StyleCSDS').Test;

module.exports.byReadClassKey = key => require('../StyleCSDS').Dflt[key];

