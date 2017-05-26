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
     * USAGE: evolve( trnsfrm_Attr.bgColor('green'))({{backgroundColor:""}, {opacity:"1"}, {}})
     */
    let concatColor = R.curry(
        (valu, str) => str.concat(valu)
    );
    return {backgroundColor: concatColor(valu)}
};

module.exports.bgColor = bgColor; // ( STR.color -> Fn.transformerForEvolve)
