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
let concatColor = R.curry(
    (valu, str) => str.concat(valu)
);

let trnsfrm_Attr_bgColor;

trnsfrm_Attr_bgColor = (valu) => {
    let concatColor = R.curry(
        (valu, str) => str.concat(valu)
    );
    return {backgroundColor: concatColor(valu)}
};


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
    it(`expects Fn(N) to return a Object.`, function () {
        expect(trnsfrm_Attr_bgColor('red')).is.a('Object');
    });
    it(`expects evolve(Fn, baseAttr) to return a different backgroundColor:value.`, function () {
        // expect(R.evolve({backgroundColor: concatColor('red')}, baseAttr)).is.deep.equal({backgroundColor: 'red'});
        expect(R.evolve(trnsfrm_Attr_bgColor('red'), baseAttr)).is.deep.equal({backgroundColor: 'red'});
    });
});