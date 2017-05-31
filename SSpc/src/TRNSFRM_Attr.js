/**
 * TRNSFRM_Attr.js
 */
"use strict";

let R = require('ramda')
    // , curry = R.curry
    // , always = R.always
    // , evolve = R.evolve
;
let Attr = R.curry(
    /**
     *  ..... TRNSFRM_Attr[arity:2] STR.key -> ( STR.val -> DICT.csd )
     * arity:2 RETURNS a transformer Fn to evolve an element.style.
     * USAGE:
     *  let Trnsfrms = require('../src/TRNSFRM_Attr')
     *  let TRNSFRM_Attr = Trnsfrms.Attr; // STR.key -> ( STR.val -> DCT.CSD )
     *  let TRNSFRM_backgroundColor = TRNSFRM_Attr('backgroundColor');
     *  // now use the Fn
     *  evolve(TRNSFRM_backgroundColor('green'), Dflt_CSD; // ->  {backgroundColor: "green", opacity: '1', fontSize: '100%'}
     */
    (key, val) => {
        return {[key]: R.always(val)}
    }
);
module.exports.Attr = Attr; // ( STR.key -> STR.valu -> Fn.TRNSFRM_Key )
module.exports.bgColor = Attr('backgroundColor'); // ( STR.color -> Fn.TRNSFRM_backgroundColor )
module.exports.opacity = Attr('opacity'); // ( STR.valu -> Fn.TRNSFRM_backgroundColor )
