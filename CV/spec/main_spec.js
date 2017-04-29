/**
 .CV//spec/main_spec.js
 THIS IS A wallaby TEST!!
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
const main = require('../../main');

describe(`Fn: main UPDATE.
    USAGE: main INVOKES Fn: EVOLVE_Verse that UPDATES each Verse's Style Attributes.
        This includes a CVSpace_VerseList, a RCSpace_Weight, a StyleSpace_CSD
            a keyEvent UPDATES the RCSpace;
            a {NOT YET memoized} querySelect RETREIVES CVSpace_VerseList
            the Fn is  ITERATED onto each Verse of CVSpace_VerseList || Index_List
               which TRANSFORMS its CVNdx into -> RCNdex
               which TRANSFORMS into -> RCWeight
               which TRANSFORMS into -> StyleSpace_CSD
               which EVOLVES a verse_Style
    `, function () {
    beforeEach(function () {
        loadFixtures('index.html');
        this.doc = document;
    });
    it(`should have a DOM document.`, function () {
        expect(this.doc.body.tagName).to.be.equal('BODY');
    });
    it(`should have a take a CVList and return a CVList.`, function () {
        expect(this.doc.body.tagName).to.be.equal('BODY');
    });
});
describe(`Fn: main INITIALIZING.
    USAGE: main will INITIALIZE a CVSpace && a RCSpace && a StyleSpace.
        CVSpace involves 
            SELECTING a Verse[span] List USING the default querySelector Str
        RCSpace involves 
            DEFINING the 3 RClss bounds USING the default focusNdx.
        StyleSpace involves
            RETRIEVING the default StyleCSD 
    `, function () {
    beforeEach(function () {
        loadFixtures('index.html'); //REMEMBER this BREAKS a mocha test !!
        this.doc = document;
    });
    it(`should be the DOM document.`, function () {
        console.log(this.doc.body.title);
        expect(this.doc.body.tagName).to.be.equal('BODY');
    });

});
describe(`Fn: main UPDATED BY keyEvents.
    USAGE: main will UPDATE the RCSpace && EVOLVE the StyleSpace.
    
        RCSpace involves 
            UPDATING the 3 RClss bounds FROM a NEW focusNdx REDEFINED BY keyEvents.
        StyleSpace involves
            EVOLVING the default StyleCSD 
    `, function () {
    beforeEach(function () {
        loadFixtures('index.html'); //REMEMBER this BREAKS a mocha test !!
        this.doc = document;
    });
    xit(`should be the DOM document.`, function () {
        console.log(this.doc.body.title);
        expect(this.doc.body.tagName).to.be.equal('BODY');
    });
});