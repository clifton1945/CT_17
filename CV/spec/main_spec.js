/**
 .CV//spec/main_spec.js
 THIS IS A wallaby TEST!!
 */
"use strict";

let R = require('ramda')
    , pipe = R.pipe
    , curry = R.curry
//     , compose = R.compose
//     , map = R.map
;

let chai = require('chai')
    // , should = chai.should()
    , expect = chai.expect
;

//THESE FUNCTIONS ARE AVAILABLE
// ...................... get the CVList of Chapter Verses
/**
 *  _CVList:: Fn(DOC -> LIST)
 */
// let _CVList = require('../src/SELECT_ChptVerses')._CVList
// ; //  Fn(DOC -> LIST)

// ..................... BUILD a new Verse Property CSD
/**
 *  ..... EVOLVE_CSD:: ( OBJ_trnsfrms -> CSD_new )
 * @param OBJ_trnsfrms
 * @return CSD_new
 */
let EVOLVE_CSD = require('../../STYLE/src/EVOLVE_Style').EVOLVE_CSD
; //  Fn( OBJ_trnsfrms -> CSD_new )

// ..................... now the CSD_trnsfrms
/**
 *  ..... CSD_trnsfrms
 * @type {{backgroundColor: *, opacity: *, fontSize: *}}
 */
let CSD_trnsfrms = {
        backgroundColor: R.always('lavender')
        , opacity: R.always('0.50')
        , fontSize: R.always('70%')
    }
; // -> DICT.styleTransforms

// ..................... UPDATE Elements
/**
 * ..... UPDATE_ElemStyle:: OBJ.propertyCSD -> ( ELEM.elem -> ELEM.style.propertyCSD )
 * @param propertyCSD
 * @param elem
 * @return Fn:  ELEM.style.propertyCS
 */
let UPDATE_ElemStyle = require('../src/main_updateElementStyle').updateStyle
; //  OBJ.CSD_trnsfrms -> ( ELEM.elem -> ELEM.style.propertyCSD )
/**
 * ..... UPDATE_anElem::  ( ELEM.elem -> ELEM.elem w/ elem.style.propertyCSD )
 * @param elem
 * @return Elem w/new propertyObject
 */
let UPDATE_anElem = R.pipe(EVOLVE_CSD, UPDATE_ElemStyle)(CSD_trnsfrms)
; // Fn( ELEM.elem -> ELEM.style.propertyCSD )


// CODE UNDER TEST   TODO  RE WRITE THIS TEST FOR JUST THE ReadSpace and StylSpace
const main = require('../../main');

describe(`Fn: main UPDATE .
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
        // loadFixtures('index.html'); THIS BREAKS a mocha test
        // this.doc = document;
    });
    it(`should have a take a CVList and return a CVList.`, function () {
        // expect(this.doc.body.tagName).to.be.equal('BODY');
    });
});

