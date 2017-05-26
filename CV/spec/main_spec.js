/**
 .CV//spec/main_spec.js HOLD 26 May. hold on strColor_in_SSpc development and testing
 UNTIL DEVELOP a clsName_in_RSpc. Then I will use the name to do all the triage of STYLE stuff
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


// CODE UNDER TEST

context(`Fn: main 
    The ChptSpace modules are only responsible for mutating the DOM: the div.chptr in this case.
        I am not testing ChptSpace functions
    In ReadSpace each span.Verse continually get a new contexts [indexes an place in family], as the Reader changes focus, changes Verses.
    In StylSpace those context reassignments are reflected onto each element's style attributes. 

    `, function () {
    describe(`ReadSpace.resizeRSpcFn(arity:2) -> RSpcSizeObj
    it is PARTIALED with the FocusNnd in the main_keyEventFn, thus RETURNING a Fn
    it will be FULFILLED with the CSpcListLength [at the final invoking]
    it will RETURN a dictObj of three RClss object: keyName: keySize
    `, function () {
    });
    describe(`ReadSpace.transformIndexFn(arity:2) -> RSpcIndex
    it is PARTIALED with the CSpcIndex
    it will be FULFILLED with the RSpcSizeObj [at the final invoking]
    it will RETURN the appropriate RSpcIndex associated w/ the CSpcIndex argument.
    `, function () {
    });

    describe(`StylSpace.transformStyl_bgColorFn(arity:2) -> {bgColor:{Fn -> bgColor:value}}
    it is PARTIALED with the RSpcIndex
    it will be FULFILLED with the SSpc.evolveFn [at the final invoking]
    it will RETURN a new bgColorCSD.
    `, function () {
    });
    describe(`StylSpace.transformStyl_opacity(arity:2) -> {opacity:{Fn -> {opacity:value}}
    it is PARTIALED with the RSpcIndex
    it will be FULFILLED with the SSpc.evolveFn [at the final invoking]
    it will RETURN a new bgColorCSD.
    `, function () {
    });
    describe(`StylSpace.transformStyl_fontSize(arity:2) -> {fontSize: (Fn -> {fontSize:value}}
    it is PARTIALED with the RSpcIndex
    it will be FULFILLED with the SSpc.evolveFn [at the final invoking]
    it will RETURN a new fontSizeCSD.
    `, function () {
    });
    describe(`StylSpace.EVOLVE_Style??????? TODO COMPLETE THIS. iT COMES AFTER THE ABOVE TRANSFORMS.
    `, function () {
    })
});

