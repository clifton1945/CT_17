/**
 // ./spec/_CVList
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
    // , should = chai.should()
    , expect = chai.expect
;

// CODE UNDER TEST

const _CVList = require('../src/SELECT_ChptVerses')._CVList;


describe(`the Fn: _CVList(document) returns a NodeList of DIV.chptr SPAN.verses.
    
    USAGE: the returned NL  will be mapped over w/ a MUTATE_this FN to change each ELEM.style
    `, function () {
    beforeEach(function () {
        loadFixtures('index.html'); //REMEMBER this BREAKS a mocha test !!
        this.doc = document;
        this.CUT = _CVList(this.doc);
    });
    it(`should be a Fn returning w/arity:1. Expecting the DOM document.`, function () {
        expect(_CVList).is.a('function').and.has.length(1);
    });
    it(`should, when invoked w/ the document, return a NL of length > 0 with a parent named 'chptr'.`, function () {
        let isNodeList = require('../../h/isNodeList');
        expect(isNodeList(this.CUT)).to.be.true;
    });
});