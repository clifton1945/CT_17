/**
 * Created by CLIF on 1/29/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;
// ***************************
/**
 *  ..... pureDocQuery1:: STR -> (DOC -> ELEM)
 *  usage: STR:querySelector
 */
let pureDocQuery1 = R.invoker(1, 'querySelector');// STR -> (DOC -> ELEM)
// ***************************
/**
 *  ..... getTheTitleElem:: DOC -> Elem
 */
let getTheTitleElem = pureDocQuery1('title');//DICT -> ELEM
/**
 * ..... getVersionStr:: DICT -> STR
 */
let VersionDct = require('../data/VersionDct');
let getVersion = R.prop('version');// DCT -> STR
let formatVersion = vers_str => "wbSample ver: " + vers_str;// STR -> STR
let getVersionStr = R.compose(formatVersion, getVersion);

/**
 * ..... setInnerHTML_value:: Elem -> Elem
 */
let setInnerHTML = el => el["innerHTML"] = getVersionStr(VersionDct);// EL -> EL

/**
 * ..... mutateTitle_VersionNumber:: DOC -> DOC
 *      sets document titleElement to
 *
 * getVersionStr:: DCT -> STR
 * getTheTitleElem:: DOC -> Elem
 * setInnerHTML_value:: Elem -> Elem
 * @param doc
 */
module.exports = doc => {
    // compose(R.tap(cb), setInnerHTML, R.tap(cb), getTheTitleElem)(doc);
    compose(setInnerHTML, getTheTitleElem)(doc);
    return doc
};