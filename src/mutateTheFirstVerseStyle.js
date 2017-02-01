/**
 * Created by CLIF on 1/29/2017.
 */
"use strict";

let R = require('ramda'),
    curry = R.curry,
    compose = R.compose;

/**
 *  ..... pureElemQuery:: DOC -> STR -> ELEM
 */
let pureElemQuery1 = R.invoker(1, 'querySelector'); // N-> STR -> (DICT -> ELEM);
let pureElemQuery2 = R.invoker(2, 'querySelector'); // N-> STR -> (DICT -> ELEM);
/**
 *      ..... getTheFirstVerse:: DOC -> ELEM
 */
const getTheFirstVerse = pureElemQuery1('#theFirst');
/**
 *      ..... getElemStyleCsd:: ELEM -> CSD
 */
const getElemStyleCsd = R.prop('style');
/**
 *  ..... getFirstVerseStyleCsd:: DOC -> CSD
 */
const getFirstElemStyleCsd = compose(getElemStyleCsd, getTheFirstVerse);
/**
 *  ..... setStyleProperty:: STR -> (STR -> CSD)
 */
let setStyleProperty = R.invoker(2, 'setProperty');// STR -> (STR -> CSD)
let setStyleColor = setStyleProperty('color');// STR -> CSD
let setStyleOpacity = setStyleProperty('opacity');// STR -> CSD

/**
 *  ..... mutateTheFirstVerseStyle:: DOC -> DOC
 */
module.exports = curry(
    doc => {
        let styleCSD = getFirstElemStyleCsd(doc);
        setStyleColor('green')(styleCSD);
        setStyleOpacity(0.4)(styleCSD);
        return doc
    }
);

