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

module.exports.SRVa_DfltRSpcStyle__GVNa_RSpcKey = R.flip(R.prop)(require('../StyleCSDS').Dflt); //WORKS  expects: RSpcKey

module.exports.SRVa_DfltSpanAttr_s__GVNa_RSpcKey = R.flip(R.prop)(require('../StyleCSDS').Dflt); //WORKS  expects: RSpcKey

