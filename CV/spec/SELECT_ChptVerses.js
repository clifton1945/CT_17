/**
 * SELECT_ChptVerses
 */
"use strict";

let R = require('ramda')
    , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
//     , curry = R.curry
;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

// CODE UNDER TEST
// const SELECT_ChptVerses = require('../src/SELECT_ChptVerses'); // LST.[a] -> LST>[N]
let SELECT_ChptVerses = () => {
};

xdescribe(`the Fn:  SELECT_ChptVerses() returns a NodeList of DIV.chptr SPANS.verse.
    
    USAGE: the NL will map over the NL w/ a MUTATE_this FN to change each ELEM.style
    `, function () {
    beforeEach(function () {
        this.stubCV = ['verse1', 'verse2', 'verse3', 'verse4'];
    });
    it(`should be an NL of length > 0 with a parent named 'chptr'.`, function () {
        expect(SELECT_ChptVerses(this.stubCV)).to.be.an('array').with.lengthOf(4);
    });
    xit(`should be ???.`, function () {
        let ret = SELECT_ChptVerses(this.stubCV);
        expect(R.reduce(R.add, 0)(ret)).equals(6);
    });
});