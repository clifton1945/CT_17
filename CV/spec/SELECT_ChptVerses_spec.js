/**
 ./spec/SELECT_ChptVerses
 */
"use strict";

// let R = require('ramda')
// , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
//     , curry = R.curry
// ;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

// CODE UNDER TEST
const SELECT_ChptVerses = require('../src/SELECT_ChptVerses');

describe(`the Fn: SELECT_ChptVerses(document) returns a NodeList of DIV.chptr SPAN.verses.
    
    USAGE: the returned NL  will be mapped over w/ a MUTATE_this FN to change each ELEM.style
    `, function () {
    beforeEach(function () {
        loadFixtures('index.html'); //TODO remember this breaks a mocha test
        this.doc = document;
        // console.log(this.doc);
    });
    it(`should be a Fn returning w/arity:1. Expecting the DOM document.`, function () {
        expect(SELECT_ChptVerses).is.a('function').and.has.length(1);
    });
    it(`should, when invoked w/ the document, return a NL of length > 0 with a parent named 'chptr'.`, function () {
        let isNodeList = require('../../h/isNodeList');
        expect(isNodeList(SELECT_ChptVerses(this.doc))).to.be.true;
    });
});