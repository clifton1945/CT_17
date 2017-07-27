"use strict";

let R = require('ramda')
    , curry = R.curry
;
let roundTo_2 = require('../../h/roundToTwoPlaces').roundTo_2;
let roundTo_3 = require('../../h/roundToTwoPlaces').roundTo_3;

let weighterFn = curry( // note use ElemNdxLst -> elem, ndx, lst
    /**
     * Fn: weighterFn
     * @param wtCnst B in x^^b
     * @param E Element
     * @param N Ndx
     * @param L List
     */
    (wtCnst, E, N, L) => roundTo_2(
        Math.pow(
            (N / L.length), wtCnst)
    )
);

let SRV_WtFn__GVNa_Cnst = curry( // actually this is SRV_WtFn__WTHa_Cnst__GVN_Ndx
    cnst => weighterFn(cnst)
);

module.exports.SRV_WtFn__GVNa_Cnst = SRV_WtFn__GVNa_Cnst;

