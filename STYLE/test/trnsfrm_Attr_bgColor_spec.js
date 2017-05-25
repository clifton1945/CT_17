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

// let context = describe;

let chai = require('chai')
    , expect = chai.expect
;

// CODE UNDER TEST
let trnsfrm_Attr_bgColor = require('../src/trnsfrm_Attrs').bgColor;

describe(`Fn: trnsfrm_Attr_bgColor[arity:1]: (STR.color -> Fn) 
    USAGE: evolve(Fn, ) 
    `, function () {
    let baseAttr;
    beforeEach(function () {
        baseAttr = {backgroundColor: "", opacity: '1', fontSize: '100%'};
    });
    it(`expects Fn to return a Function of arity:1`, function () {
        expect(trnsfrm_Attr_bgColor).is.a('function').and.is.length(1);
    });
    it(`expects Fn(N) to return a Object.`, function () {
        expect(trnsfrm_Attr_bgColor('red')).is.an('Object');
    });
    it(`expects evolve(Fn, baseAttr) to return a different backgroundColor:value.`, function () {
        // expect(R.evolve({backgroundColor: concatColor('red')}, baseAttr)).is.deep.equal({backgroundColor: 'red'});
        expect(R.evolve(trnsfrm_Attr_bgColor('red'), baseAttr).backgroundColor).is.equal('red');
    });
});