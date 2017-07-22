"use strict";

let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , evolve = R.evolve
;
let mocha = require('mocha')
    , context = mocha.describe;
// noinspection Annotator
let chai = require('chai')
    , expect = chai.expect
;
context(`Fn: SRVa_Csd__WTHa_CsdTtrnmogFn__GVNa_Csd is CeeingThought's CORE function.
    This verbose name explicitly says
        SRVa_ means it is a Function returning a new something: Csd
        WTHa_ means it already has a needed something:  CsdTrnmogFn Fn. 
        GVNa_ means it requires a something: Csd to be transformed.        
    How can I compose 
    SRVa_Csd = compose( 
        SRVa_Csd__WTHa_CsdTtrnmogFn__GVNa_Csd
            , SRVa_StyleCsd__WTHa_SRVa_FnX__GVNa_StyleCsd
            , SRVa_StyleCsd__WTHa_SRVa_FnY__GVNa_Dflt_StyleCsd
        )(Dflt_StyleCsd)
    Where FnY would needs be a TRIAGE_: 
        GVNa verse  -> verseNdx
        WTHa partialled noonSpan-> noonNdx -> trnmogFn(Csd -> Csd)
        SRVa trnmog
`, () => {
});