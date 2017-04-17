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
// module.exports.cut = curry((cvLen, curLen, curBeg_Ndx) => {

let DEFINES_curEnd_Ndx = (cvLen, curLen, curBeg_Ndx) => {// (N.len,N.len,N.ndx,) -> N.ndx
    let sum = curLen + curBeg_Ndx;
    return sum > cvLen ? cvLen : sum
};
module.exports.DEFINES_curEnd_Ndx = DEFINES_curEnd_Ndx;

let gte_0 = curry(R.gte(R.__, 0));
module.exports.gte_0 = gte_0;
let lt_Beg = curry(beg => R.lt(R.__, beg));
module.exports.lt_Beg = lt_Beg;
let gte_Beg = curry(beg => R.gte(R.__, beg));
let lte_End = curry(end => R.lte(R.__, end));
let gt_End = curry(end => R.gt(R.__, end));
let lte_cvLen = curry(cvl => R.lte(R.__, cvl));

// the 3 is_xxxRClss Fns.
let is_pstRClss = R.both(gte_0, lt_Beg);// -> N.cvNdx -> BOOL
let is_curRClss = R.both(gte_Beg, lte_End);// -> N.cvNdx -> BOOL
const is_futRClss = R.both(gt_End, lte_cvLen);// -> N.cvNdx -> BOOL


module.exports.is_pstRClss = is_pstRClss;
module.exports.is_curRClss = is_curRClss;
module.exports.is_futRClss = is_futRClss;
// });

