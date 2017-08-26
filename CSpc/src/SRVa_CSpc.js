"use strict";
// requires
let R = require('ramda');
let C_inConsole = require('../../h/C_in_').Console;
// let myTap = require('../../h/myTap');
// C_inConsole(' IN SRVa_CSpc.   Yeah, you can you see me!');

// NEW CODE UNDER TEST -

// module.exports = R.invoker(1, 'querySelector')
// ; // (Doc)((Str)Fn->)(Elem)
module.exports = R.curry(
    str => R.invoker(1, 'querySelector')(str)
);

module.exports.SpanColl = span => R.path(['parentElement', 'children'])(span)

; // (Span)Fn->(Coll)   FIX args (span)(Doc)  BREAKS
module.exports.ChptSpan0 = R.pipe(
    R.invoker(1, 'querySelector')
    ('.chpt'),
    R.prop('firstElementChild')
);// (Doc)FN->(ChptSpan) .. span implying one of many
/**
 * srva_SpanNdx
 * @param span
 *
 * I am trying to firm up a FN signature format for my understanding:
 *
 *  I am trying for some mutation of Predicate Grammar
 *    something that results in (param[s])FN->(return)
 * so WHAT IS THE {PREDICATE} ??
 * #1:SVO: (a ndxNUM)) {IS SERVED/RETURNED BY APPLYING}  (a spanElem).
 * #2 (aSPAN)APPLIED TO thisFN: SERVES/RETURNS -> (its NdxNUM).
 * (SPN)FN->(NUM)
 */
module.exports.SpanNdx = R.curry(
    span => R.indexOf(span, span.parentElement.children)
); // (SPN)FN->(NUM)   FIX args (span)(Doc)  BREAKS


