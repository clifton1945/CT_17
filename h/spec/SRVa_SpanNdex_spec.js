"use strict";

let R = require('ramda')
    , curry = R.curry
    // , pipe = R.pipe
    // , evolve = R.evolve
;
let mocha = require('mocha')
;
let chai = require('chai')
    , expect = chai.expect
;
// let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;

describe(`Fn: SRVa_SpanNdx    `, () => {
    let isSame = function (el) {
        // return (Object.is(el, 2)) ? el : -5
        return (el === 2) ? el : -5
    };


    let n = [1, 2, 5, 8, 130, 44].indexOf(130);
    it(`expect indexOf n -> 4 .`, () => {
        expect(n).is.equal(4);
    });

    // it(`expect findIndex n -> 4 .`, () => {
    //     let isBigEnough = function (element) {
    //         return element >= 15
    //     };
    //     let n = [1, 2, 5, 8, 130, 44].findIndex(isBigEnough);
    //     expect(n).is.equal(4);
    // });
    C_inConsole(`_N = ${n}`); // -> 4
});
