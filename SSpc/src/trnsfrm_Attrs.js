/**
 * trnsfrm_Attr_bgColor.js
 * ...
 */

"use strict";

let R = require('ramda')
    // , curry = R.curry
    // , always = R.always
    // , evolve = R.evolve
;

let bgColor = (valu) => {
    /**
     * USAGE:
     * this RETURNS a transfrm function for a specific Attribute; in his case backgroundColor???
     * hey how is this used??? look at its use in evolve
     *
     * evolve( trnsfrm_Attr.bgColor('green'))({{backgroundColor:""}, {opacity:"1"}, {}})
     */
    let concatColor = R.curry(
        (valu, str) => str.concat(valu)
    );
    return {backgroundColor: concatColor(valu)}
};

let bgColorFrmStr = bgColor;

module.exports.bgColor = bgColor; // ( STR.color -> Fn.transformerToEvolveBackgroundColor )
module.exports.bgColorFrmStr = bgColorFrmStr; // ( STR.color -> Fn.transformerToEvolveBackgroundColor )
