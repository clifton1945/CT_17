/**
 * Attr_Trnsfrms.js
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
    }
);
let Attr = R.curry(
    /**
     *  ..... trnsfrmAttr: ( STR.key -> STR.val -> DICT.csd)
     * a transformer Fn to evolve an element.style.
     * USAGE:
     *  let Transforms = require('../src/Attr_Trnsfrms')
     *  let trnsfrm = Transforms.Attr; // STR.key -> STR.val -> DCT.CSD
     *  let trnsfrm_backgroundColor = trnsfrmAttr('backgroundColor');
     *  let _backgroundColor = trnsfrm_backgroundColor;
     *  // now use the Fn by
     *  evolve(trnsfrm_backgroundColor('green'), Dflt_CSD; // ->  {backgroundColor: "green", opacity: '1', fontSize: '100%'}
     */
    (key, val) => {
        return {[key]: R.always(val)}
    });
module.exports.bgColor = Attr('backgroundColor'); // ( STR.Valu -> Fn.trnsfrm_backgroundColor )
module.exports.Attr = Attr; // ( STR.color -> Fn.trnsfrm_backgroundColor )
