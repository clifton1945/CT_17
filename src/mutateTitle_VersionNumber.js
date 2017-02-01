/**
 * comment 170201: innerHTML IS A PROPERTY NOT AN ATTRIBUTE!!
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;
// ***************************
let cb = x => console.log(`  => ${x}`);
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
let setInnerHTML = el => {
    el['innerText'] = getVersionStr(VersionDct);
    // BREAKS R.assoc('innerText', getVersionStr(VersionDct, el));
    return el
};

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
    compose(setInnerHTML, getTheTitleElem)(doc);
    // R.compose(
    //     R.tap(cb),
    //     setInnerHTML,
    //     R.tap(cb),
    //     getTheTitleElem,
    //     R.tap(cb))
    // (doc);
    return doc
};