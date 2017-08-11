/**
 * today: convert Fn: srva_Trnfrm_Dct to evolving a style CSD: the true use of this function
 *  OK @0815 (1) show and prove the returned DCT works with R.evolve
 *  OK @1008(2) demonstrate that an Element.style.color can be evolved GVN focusIndex and elementIndex
 */
"use strict";

let C_in = require('./h/C_in_')
    // , C_in_Doc = C_in.Doc
    , C_in_Console = C_in.Console
    // , C_in_Both = C_in.Both
;
let R = require('ramda')
    // , curry = R.curry
    // , concat = R.concat
    // , pipe = R.pipe
    // , evolve = R.evolve
;
const assert = require('assert');

// CODE UNDER TEST
