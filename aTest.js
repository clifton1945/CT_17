/**
 *  Peace is Progress towards a known Destination.

 *  170804 -  the destination today is
 *   Go down and with a List||Collection of Chapter spanVerses
 *      (1) chptSpanVerses.splitInto three readState Lists || Collections
 *          @1130 (1) works for NodeList and for Collection
 *          End up with a List of three lists of spans ]
 *      (2) iterate over a LIST of three Lists||Dictionaries of styleATrribute
 *          (1) ALTERING some || all style Attribute Csds GVN the Csd readState
 *          End up with a List
 *
 *      (3) MUTATE each Verse now that each spanVerse has an evolved stylCsd
 *      Do this by iterating over the List:[ [||{ span, csd }||] ]
 *
 *  NOTE: I purposely do not combine steps 2 and 3 to
 *      separate and isolate document non pure code, 1 & 3, from any other code.
 *      This may have a tiny bit of double iterating, step 2 and 3, but tough;
 */
"use strict";

// ------------------- requires -------
let C_in = require('./h/C_in_')
    // , C_in_Doc = C_in.Doc
    , C_in_Console = C_in.Console
    // , C_in_Both = C_in.Both
;
// let myTap = require('./h/myTap');
let R = require('ramda')
    , append = R.append
    , curry = R.curry
    // , concat = R.concat
    // , pipe = R.pipe
    // , evolve = R.evolve
;
// NOTE: both SRVa_Collection && SRVa_Collection WORK!!
let SRV_ChptVerses_Dflt = require('./CSpc/src/SRVa_CollectionOf_ChptVerses').SRVa_CollectionOf_ChptVerses;
// let SRV_ChptVerses_Dflt = require('./CSpc/src/SRVa_NodeListOf_ChptVerses').SRV_ChptVerses_Dflt;
// CODE UNDER TEST
let splitInto = require('./h/splitInto');
//  -------------- a test

let TRK = "wbSample/aTest.js";
C_in_Console('  IN> ' + TRK);

// get a actual spanVerses List

// ----- TEST_STUBS First use just some of the verseSpans in a list.
let STUB_spans = R.take(12)(SRV_ChptVerses_Dflt(document));
let STUB_noonNdx = 8;
let STUB_noonSpan = STUB_spans[STUB_noonNdx];

//CODE UNDER TEST
let splitInto_Lists = splitInto(STUB_spans);

let readLists = splitInto_Lists(STUB_noonSpan);
let amLst = readLists[0];
let noonLst = readLists[1];
let pmLst = readLists[2];

/**
 * Now use the ReadState lists to set ReadState Attributes
 * for instance some weighted Attribute for a given read class
 */
let mapIndexed = R.addIndex(R.map);
let SRVa_WtFn__GVNa_Cnst = require('./RSpc/src/SRVa_WtFn').SRV_WtFn__GVNa_Cnst;

// weight am elements opacity
let SRVa_weight = require('./RSpc/src/SRVa_WtFn').weightedElem;

let SRVa_weightedElem_Opacity = {};
//am
SRVa_weightedElem_Opacity = SRVa_weight(0.9);
amLst = mapIndexed(SRVa_weightedElem_Opacity)(amLst);

//noon
SRVa_weightedElem_Opacity = SRVa_weight(0.15);
noonLst = mapIndexed(SRVa_weightedElem_Opacity)(noonLst);
//pm
SRVa_weightedElem_Opacity = SRVa_weight(0.9);
pmLst = mapIndexed(SRVa_weightedElem_Opacity)(R.reverse(pmLst));

// NOW
// let _newVals = R.pipe(R.concat, R.concat);
// let NewVals = _newVals(amLst, noonLst)(R.reverse(pmLst));
// C_in_Console(JSON.stringify(NewVals));
let noop = 0;


C_in_Console(' OUT> ' + TRK);


