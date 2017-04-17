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

let DEFINES_curEnd_Ndx = (cvLen, curLen, curBeg_Ndx) => {// (N.len,N.len,N.ndx,) -> N.ndx
    let sum = curLen + curBeg_Ndx;
    return sum > cvLen ? cvLen : sum
};
module.exports.DEFINES_curEnd_Ndx = DEFINES_curEnd_Ndx;

// const _RClss = curry(
// (cvLen, curLen, curBeg_Ndx) => {
let gte_0 = curry(R.gte(R.__, 0));
module.exports.gte_0 = gte_0;
let lt_Beg = curry((beg, x) => x < beg);
module.exports.lt_Beg = lt_Beg;
let gte_Beg = curry(beg => R.gte(R.__, beg));
let lte_End = curry(end => R.lte(R.__, end));
let gt_End = curry(end => R.gt(R.__, end));
let lte_cvLen = curry(cvl => R.lte(R.__, cvl));

// the 3 is_xxxRClss Fns.
let is_pstRClss = curry((beg, ndx) => gte_0(ndx) && lt_Beg(beg, ndx));// N.beg -> N.cvNdx -> BOOL
let is_curRClss = curry((beg, end, ndx) => gte_Beg(beg, ndx) && lte_End(end, ndx));// -> N.cvNdx -> BOOL
const is_futRClss = curry((end, cvl, ndx) => gt_End(end, ndx) && lte_cvLen(cvl, ndx));// -> N.cvNdx -> BOOL

module.exports.is_pstRClss = is_pstRClss;
module.exports.is_curRClss = is_curRClss;
module.exports.is_futRClss = is_futRClss;
// });

