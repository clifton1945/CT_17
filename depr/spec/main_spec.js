/**
 spec/main_spec.js
 */
"use strict";

let R = require('ramda')
    // , pipe = R.pipe
    // , curry = R.curry
//     , compose = R.compose
//     , map = R.map
;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;
let mocha = require('mocha')
;

describe(`Fn: main 
    The Chpter Space module[CSpc] is the ONLY code mutating the DOM: 
        The Dflt_ChptVerses.js selects all of the spans directly descendant from the div.chpt.
        They, the spans, ARE MUTATED by UPDATE_Elem.js. 

    `, function () {
    describe(` ??????????????
    
    `, function () {
        // CODE UNDER TEST
        let main = require('../../main');

        beforeEach(function () {
            loadFixtures('index.html'); //REMEMBER this BREAKS a mocha test !!
        });
        it(`should ?????????? `, function () {
            main.verseNL.length.should.equal(52);
        });
    });

    // describe(`ReadSpace.transformIndexFn(arity:2) -> RSpcIndex
    // it is PARTIALED with the CSpcIndex
    // it will be FULFILLED with the RSpcSizeObj [at the final invoking]
    // it will RETURN the appropriate RSpcIndex associated w/ the CSpcIndex argument.
    // `, function () {
    // });
    //
    // describe(`StylSpace.transformStyl_bgColorFn(arity:2) -> {bgColor:{Fn -> bgColor:value}}
    // it is PARTIALED with the RSpcIndex
    // it will be FULFILLED with the SSpc.evolveFn [at the final invoking]
    // it will RETURN a new bgColorCSD.
    // `, function () {
    // });
    // describe(`StylSpace.transformStyl_opacity(arity:2) -> {opacity:{Fn -> {opacity:value}}
    // it is PARTIALED with the RSpcIndex
    // it will be FULFILLED with the SSpc.evolveFn [at the final invoking]
    // it will RETURN a new bgColorCSD.
    // `, function () {
    // });
    // describe(`StylSpace.transformStyl_fontSize(arity:2) -> {fontSize: (Fn -> {fontSize:value}}
    // it is PARTIALED with the RSpcIndex
    // it will be FULFILLED with the SSpc.evolveFn [at the final invoking]
    // it will RETURN a new fontSizeCSD.
    // `, function () {
    // });
    // describe(`StylSpace.EVOLVE_CSD??????? TODO COMPLETE THIS. iT COMES AFTER THE ABOVE TRANSFORMS.
    // `, function () {
    // })
});

