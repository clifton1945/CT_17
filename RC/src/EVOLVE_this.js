/**
 * Created by CLIF on 4/4/2017.
 */
"use strict";

let R = require('ramda')
;

const EVOLVE_this = (alterFn, dict) => R.evolve(alterFn, dict); // Fn.alterFn -> DICT.0 -> DICT.1
module.exports = EVOLVE_this; // // Fn.alterFn -> DICT.0 -> DICT.1
