"use strict";
let C_in = require('./h/C_in_')
    , C_in_Console = C_in.Console
    , C_in_Both = C_in.Both
;
let R = require('ramda')
    , evolve = R.evolve
;
let mocha = require('mocha');
let chai = require('chai');
let should = require('chai').should();

// ************** MAIN ********
let TRK = "wbSample/main.js";
C_in_Console("< IN  " + TRK);

// ...................... get the CVList of Chapter Verses
let _chptVersesNL = require('./CSpc/src/SELECT_ChptVerses')._spansNL;

// CODE UNDER TEST
// invokeSelectorAll does get a NL
// let invokeSelectorAll = R.invoker(1, 'querySelectorAll');
// let verseNL = invokeSelectorAll('.chptr span')(document);
// C_in_Console(`sizeCspc: ${R.length(verseNL)}`);
//


C_in_Both(' OUT> ' + TRK);
