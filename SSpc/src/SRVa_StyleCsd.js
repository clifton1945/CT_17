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

//  170724  new verbose style named Fn
let dfltStyleCsd = require('../StyleCSDS').Dflt;

// module.exports.SRVa_DfltRSpcCsd__GVNa_RSpcKey = key => {
//     // let dflt = require('../StyleCSDS').Dflt;
//     return R.prop(R.__,  require('../StyleCSDS').Dflt)(key)
// }; // works
module.exports.SRVa_DfltRSpcCsd__GVNa_RSpcKey = R.prop(R.__, require('../StyleCSDS').Dflt); //WORKS  R.__ IS RSpcKey

