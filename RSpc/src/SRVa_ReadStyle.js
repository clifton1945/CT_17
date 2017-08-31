"use strict";

let R = require('ramda')
    , curry = R.curry
    , prop = R.prop
    // , indexOf = R.indexOf()
;
// let chai = require('chai')
//     , expect = chai.expect
// ;
let SRVa_Style = curry(
    /**
     * SRVa_Style  TRIAGES_aReadStyle to apply to a specific span with its specific ReadClass
     *
     * Fn_1: SRVa_Style(spanNdx) -> StyleCsd e.g. am:{backgroundColor: 'red', color:'green', ...}
     * Fn_2: SRVa_Style(noonNdx, spanNdx) -> StyleCsd e.g. am:{backgroundColor: 'red', color:'green', ...}
     * Fn_3: SRVa_Style(noonNdx, spanNdx, readStyles)
     *
     * @param baseStyles e.g. {am:{color:val, ...}, noon:{},
     * @param noonNdx
     * @param spanNdx
     * @return a CSD
     */
    (baseStyles, noonNdx, spanNdx) => {
        return (spanNdx < noonNdx ) ? prop('am', baseStyles) :
            (spanNdx > noonNdx) ? prop('pm', baseStyles) :
                prop('noon', baseStyles)
    }
);

module.exports.RSpcCsd = SRVa_Style;
module.exports.ReadStyle = SRVa_Style;
module.exports.Style = SRVa_Style;



