/**
 * trnsfrm_Attr_bgColor.js
 * ...
 */

"use strict";

let R = require('ramda')
    , curry = R.curry
// , pipe = R.pipe
//     , compose = R.compose
//     , always = R.always
;

// let context = describe;

let chai = require('chai')
    , should = chai.should()
    , expect = chai.expect
;

// CODE UNDER TEST
let trnsfrm_Attr_bgColor;
trnsfrm_Attr_bgColor = curry(
    (wt, ndx_rspc) => {
        return {}
    }
);

describe(`Fn: trnsfrm_Attr_bgColor[arity:2]: wt -> (ndx -> fnObj) 
    (wt, ndx) -> attrTrnsfrmObj
    will be one of the transform Fns used in EVOLVE_Style.js  
    USAGE: Fn1 = Fn0(wt)
    `, function () {
    // // beforeEach(function () {
    // // });
    it(`expects Fn to return a Function of arity:2`, function () {
        expect(trnsfrm_Attr_bgColor).is.a('function').and.to.have.length(2);
    });
    it(`expects Fn(N) to return a Function of arity:1`, function () {
        expect(trnsfrm_Attr_bgColor(1)).is.a('function').and.to.have.length(1);
    });
    it(`expects Fn to return an Obj`, function () {
        expect(trnsfrm_Attr_bgColor(1, 2)).is.a('object');
    });
});