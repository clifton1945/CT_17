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
 */
let pureDocQuery1 = R.invoker(1, 'querySelector');// STR -> (DOC -> ELEM)
// ***************************
/**
 *      ..... getTheFirstVerseElem:: DOC -> ELEM
 *      USAGE: pureDocQuery1('#theFirst')(doc) -> theFirst Element
 */
const getTheFirstVerseElem = pureDocQuery1('#theFirst');
/**
 *      ..... getElemStyleCsd:: ELEM -> CSD
 */
const getElemStyleCsd = R.prop('style');
/**
 *  ..... getFirstVerseStyleCsd:: DOC -> CSD
 */
const getFirstElemStyleCsd = compose(getElemStyleCsd, getTheFirstVerseElem);
// ***************************
/**
 *  ..... setThisProperty:: STR -> (STR -> CSD)
 */
let setThisProperty = R.invoker(2, 'setProperty');// STR -> (STR -> CSD)
let setStyleColor = setThisProperty('color');// STR -> CSD
let setStyleOpacity = setThisProperty('opacity');// STR -> CSD

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

