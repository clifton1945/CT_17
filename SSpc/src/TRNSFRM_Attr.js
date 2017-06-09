/**
 * TRNSFRM_Attr.js
 */
"use strict";

let R = require('ramda')
    // , curry = R.curry
    // , always = R.always
    // , evolve = R.evolve
;
let TRNSFRM_ = R.curry(
    /**
     *  ..... TRNSFRM_Attr[arity:2] STR.key -> ( STR.val -> DICT.csd )
     * IS a transformer Fn artity:2  to RETURN a D.Trnsfrm for use in evolving a D.Csd
     *
     */
    (key, val) => {
        return {[key]: R.always(val)}
    }
);
module.exports.TRNSFRM_ = TRNSFRM_; // ( STR.key ) (STR.valu ) { TRNSFRM_ } -> Fn.TRNSFRM_Key )
module.exports.by_backgroundColor = TRNSFRM_('backgroundColor'); // ( STR.color -> Fn.TRNSFRM_backgroundColor )
module.exports.by_opacity = TRNSFRM_('opacity'); // ( STR.valu -> Fn.TRNSFRM_backgroundColor )