/**
 * Created by CLIF on 4/4/2017.
 */
"use strict";

let R = require('ramda')
;
/**
 * EVOLVE_RCBounds:: DICT.alter_Fns -> DICT.new_RCBounds REQUIRES a DICT of RCBounds transformations.
 * is a specific subset of EVOLVE_this. Its dict parameter is the default_RCBounds.
 * @param alterFns
 */
let dflt_RCBounds = require('./Dflt_RCBounds');
module.exports = R.curry(alterFns => R.evolve(alterFns, dflt_RCBounds)); //  DICT.alter_Fns -> DICT.new_RCBounds
