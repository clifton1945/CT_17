/**
 // ./spec/_spansNL
 // */
"use strict";
//
let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
    , curry = R.curry
;

let chai = require('chai')
    , expect = chai.expect
    , should = chai.should()
;
// CODE UNDER TEST
describe(`the Fn: _spansNL(document) returns a NodeList of DIV.chptr SPAN.verses.
    
    USAGE: the returned NL  will be mapped over w/ a MUTATE_this FN to change each ELEM.style
    `, function () {

    let _spansNL = require('../src/SELECT_ChptVerses')._spansNL;
    let spanNL;
    let invokeSelectorAll = R.invoker(1, 'querySelectorAll');
    let verseNL;

    beforeEach(function () {
        loadFixtures('index.html'); //REMEMBER this BREAKS a mocha test !!
        verseNL = invokeSelectorAll('.chptr span')(document);
        // spanNL = _spanNL(document);
    });
    it(`should be a Fn returning w/arity:1. Expecting the DOM document.`, function () {
        expect(_spansNL).is.a('function').and.has.length(1);
    });
    it(`should, when invoked w/ the document, return a NL of length > 0 with a parent named 'chptr'.`, function () {
        // let isNodeList = require('../../h/isNodeList');
        verseNL.length.should.equal(52);
    });
});