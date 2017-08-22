"use strict";
// requires
let R = require('ramda');
// let myTap = require('../../h/myTap');
let C_inConsole = require('../../h/C_in_').Console;
C_inConsole(' Yeah, you can you see me!');

// NEW CODE UNDER TEST -
module.exports = str => R.pipe(R.invoker(1, 'querySelector'))(str)
; // (Doc)((Str)Fn->)(Elem)
module.exports.srva_SpanColl = span => R.path(['parentElement', 'children'])(span)
; // (Doc)((Span)Fn->)(Coll)
module.exports.srva_SpanNdx = span => R.indexOf(span, span.parentElement.children)
; // (Doc)((Span)Fn->)(Ndx)


