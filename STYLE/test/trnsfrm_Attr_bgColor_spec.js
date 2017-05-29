/**
 * trnsfrm_Attr_bgColor.js
 * ...
 */
"use strict";

let R = require('ramda')
    // , curry = R.curry
    // , always = R.always
    // , evolve = R.evolve
;
let context = describe;
let chai = require('chai')
    , expect = chai.expect
;

// CODE UNDER TEST
context(`NOW move back up the pipe chain to progressively include earlier functions.
    in this case I want a f RETURN Str.color INPUT ndxRSpc`, () => {
});

let trnsfrm_Attr_bgColor = require('../src/trnsfrm_Attrs').bgColorFrmStr;

describe(`Fn: trnsfrm_Attr_bgColor[arity:1]: (STR.color -> Fn) 
    USAGE: evolve(Fn,dfltCSD) 
    `, function () {
    let baseAttr;
    beforeEach(function () {
        baseAttr = {backgroundColor: "", opacity: '1', fontSize: '100%'};
    });
    it(`expects Fn to return a Function of arity:1`, function () {
        expect(trnsfrm_Attr_bgColor).is.a('function').and.is.length(1);
    });
    it(`expects Fn(N) to return a CSD Object.`, function () {
        expect(trnsfrm_Attr_bgColor('red')).is.an('Object');
    });
    it(`expects evolve(Fn, baseAttr) to return a different backgroundColor:value.`, function () {
        expect(R.evolve(trnsfrm_Attr_bgColor('red'), baseAttr).backgroundColor).is.equal('red');
    });
});

