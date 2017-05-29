/**
 * Attributes_Transforms.js
 */
"use strict";

let R = require('ramda')
    // , curry = R.curry
    // , always = R.always
    // , evolve = R.evolve
;
let bgColor = R.curry(
    /**
     *  ..... bgColor: ( STR -> DICT)
     * USAGE:
     * a transformerFn applied to the Dflt_StyleDict results in an evolved backgroundColor
     *
     *
     * evolve( bgColor('green'))({{backgroundColor:""}, {opacity:"1"}, {}})
     */
    (valu) => {
        let concatColor = R.curry(
        (valu, str) => str.concat(valu)
    );
        return {['background' + 'Color']: concatColor(valu)}
    });

let backgroundColor = R.curry(
    /**
     *  ..... bgColor: ( STR -> DICT)
     * USAGE:
     * a transformerFn applied to the Dflt_StyleDict results in an evolved backgroundColor
     *
     *
     * evolve( bgColor('green'))({{backgroundColor:""}, {opacity:"1"}, {}})
     */
    (key, val) => {
        return {[key]: R.always(val)}
    });

module.exports.bgColor = bgColor; // ( STR.color -> Fn.transformerToEvolveBackgroundColor )
module.exports.backgroundColor = backgroundColor; // ( STR.color -> Fn.transformerToEvolveBackgroundColor )
