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
    // , should = chai.should()
    , expect = chai.expect
;

// CODE UNDER TEST
let trnsfrm_Attr_bgColor;

trnsfrm_Attr_bgColor = (clr) => {
    return clr
};

let concatColor = R.curry(
    (valu, str) => str.concat(valu)
);


describe(`Fn: trnsfrm_Attr_bgColor[arity:1]: (STR.color -> Fn) 
    USAGE: evolve(Fn, ) 
    `, function () {
    let baseAttr;
    beforeEach(function () {
        baseAttr = {backgroundColor: ""};
    });
    it(`expects Fn to return a Function of arity:1`, function () {
        expect(trnsfrm_Attr_bgColor).is.a('function').and.to.have.length(1);
    });
    it(`expects Fn(N) to return a String.`, function () {
        expect(trnsfrm_Attr_bgColor('red')).is.a('string').and.is.equal('red');
    });
    it(`expects evolve(Fn, baseAttr) to return a different backgroundColor:value.`, function () {
        // expect(evolve(trnsfrm_Attr_bgColor('red'), baseAttr)).is.equal({backgroundColor:'red'});
        expect(R.evolve({backgroundColor: concatColor('red')}, baseAttr)).is.deep.equal({backgroundColor: 'red'});
    });
});