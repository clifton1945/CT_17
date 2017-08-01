"use strict";

let R = require('ramda')
    , curry = R.curry
;
// let roundTo_2 = require('../../h/roundTo_').roundTo_2;
let roundTo_2 = require('../../h/roundTo_');
let roundTo_3 = require('../../h/roundTo_').roundTo_3;

let weighterFn = curry( // note use ElemNdxLst -> elem, ndx, lst
    /**
     * Fn: weighterFn
     * @param wtCnst B in x^^b
     * @param E Element
     * @param N Ndx
     * @param L List
     * @return weight
     */
    (wtCnst, E, N, L) => roundTo_2(
        Math.pow(
            (N / L.length), wtCnst)
    )
);
let SRV_WtFn__GVNa_Cnst = curry(
    cnst => weighterFn(cnst));

module.exports.SRV_WtFn__GVNa_Cnst = SRV_WtFn__GVNa_Cnst;


let weightedElem = curry( // note use ElemNdxLst -> elem, ndx, lst
    /**
     * Fn: weighterFn
     * @param wtCnst B in x^^b
     * @param E Element
     * @param N Ndx
     * @param L List
     * @return Elem w/ a weighted opacity
     */
    (wtCnst, E, N, L) => {
        let wt = roundTo_2(
            Math.pow(
                (N / L.length), wtCnst)
        );
        return E.style.opacity = wt;
    }
);
module.exports.weightedElem = weightedElem;// Fn(wtCnst) -> (e, n, l) -> e)


