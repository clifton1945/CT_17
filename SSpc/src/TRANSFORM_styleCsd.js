/**
 * TRANSFORM_styleCsd.js
 */
"use strict";

let R = require('ramda')
    // , curry = R.curry
    // , always = R.always
    // , evolve = R.evolve
;
let TRNFRM_ = R.curry(
    /**
     *  ..... TRANSFORM_styleCsd[arity:2] STR.key -> ( STR.val -> DICT.csd )
     * IS a transformer Fn artity:2  to RETURN a D.Trnsfrm for use in evolving a D.Csd
     *
     */
    (key, val) => {
        return {[key]: R.always(val)}
    }
);
module.exports.TRNFRM_ = TRNFRM_; // TRNFRM_( STR.key ) (STR.valu )  -> newTRNFRM


module.exports.by_backgroundColor = TRNFRM_('backgroundColor'); // ( STR.color -> Fn.TRNFRM_backgroundColor )
module.exports.by_opacity = TRNFRM_('opacity'); // ( STR.valu -> Fn.TRNFRM_backgroundColor )