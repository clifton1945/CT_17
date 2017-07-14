"use strict";
let R = require('ramda')
;
/**
 * SRV_RClass_StyleCsd IS aFn.arity:1
 *  that WHEN provided its @param: readClass Key
 * RETURNS a readClass Csd valu
 */
module.exports.Dflt = require('../StyleCSDs').Dflt;
module.exports.byReadClassKey = key => {
    // let dfltCsd = require('../StyleCSDs').Dflt[key];
    // return dfltCsd[key]
    return require('../StyleCSDs').Dflt[key];
};

