"use strict";

let R = require('ramda')
    // , curry = R.curry
    // , always = R.always
    // , evolve = R.evolve
;
let BUILD_aTRNFRM = R.curry(
    /**
     *  ..... BUILD_aTRNFRM IS aFn.arity:2 of @Sign Fn strAtt -> ( strValu -> objTable )
     *  USAGE: with a partialed strAttr it RETURNS a transformer Fn( strValu ->  objTable )
     *
     */
    (key, val) => {
        return {[key]: R.always(val)} //
    }
);
module.exports.BUILD_aTRNFRM = BUILD_aTRNFRM; // BUILD_aTRNFRM( STR.key ) -> Fn( STR.valu  -> newTRNFRM )


// DEPRECATED
// module.exports.by_backgroundColor = BUILD_aTRNFRM('backgroundColor'); // ( STR.color -> Fn.TRNFRM_backgroundColor )
// module.exports.by_opacity = BUILD_aTRNFRM('opacity'); // ( STR.valu -> Fn.TRNFRM_backgroundColor )