/**
 *  CSpc/src/SpanStyle_MUTATOR.js
 * DO NOT DELETE - the function form is good; do not loose it! 170605
 */
"use strict";

let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
    , compose = R.compose
    , always = R.always
;


let _MUTATOR = curry(
    /**
     * ..... _MUTATOR():: mutates, i.e. sets and returns, a given Element.style.
     * SYMB   csdDCT -> ( eltDCT -> eltDCT )
     *
     * @return {*} : updated_elem
     * @param csd  : a DICT of the new style.CSD
     * @param elt
     */
    (csd, elt) => {
        // const _mutElt = prop => elt.style[prop] = csd[prop];

        for (let prop in csd)
            if (csd.hasOwnProperty(prop)) {
                // _mutElt(property)
                elt.style[prop] = csd[prop];
            }
        return elt
    }
); // csd -> ( elt -> elt )

module.exports._MUTATOR = _MUTATOR;// csdDCT -> ( eltDCT -> eltDCT )

const DfltCsd = require('../readClassTable');// {backgroundColor: '', opacity: '1.0', fontSize: '100%', color: ""};
let newCsd = {color: "green", opacity: "0.5"};

module.exports.SpanStyl_MUTATOR = curry(
    // csd => _MUTATOR(csd,  R.__) // works (a, b)
    // csd => _MUTATOR(csd) (R.__) // works(a)(b)
    // ................. now with compose
    // csd => compose(_MUTATOR (csd, R.__)) // works a, b)
    // csd => compose(_MUTATOR,  always({color: "green", opacity: "0.5"}))( R.__) // works(a)(b)
    // compose(_MUTATOR, always(newCsd))(R.__) // WORKS
    // compose(_MUTATOR,
    //     R.tap(x => console.log('x.color is ' + x.color)),
    //     always( R.identity(newCsd))
    // )(R.__) // WORKS
    compose(
        _MUTATOR,
        // the next two work to DELIVER a Csd TO _MONITOR
        R.tap(x => console.log('x.color is ' + x.color)),
        always(newCsd)
    )(R.__) // WIP
);

