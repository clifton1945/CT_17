/**
 * Created by CLIF on 4/14/2017.
 */

"use strict";

let R = require('ramda')
//     , pipe = R.pipe
//     , compose = R.compose
//     , map = R.map
    , curry = R.curry
;

// CODE UNDER TEST
// module.exports.cut =

/**
 *      IS_xxxRC:: N.curRC index in CVSpace -> N. -> Bool
 * @param ndxBegCurRC
 * @constructor
 */
const IS_PstRC = ndxBegCurRC => R.gt(ndxBegCurRC);
const IS_CurRC = ndxBegCurRC => R.equals(ndxBegCurRC);
const IS_FutRC = ndxBegCurRC => R.lt(ndxBegCurRC);

module.exports.IS_PstRC = IS_PstRC;
module.exports.IS_CurRC = IS_CurRC;
module.exports.IS_FutRC = IS_FutRC;

