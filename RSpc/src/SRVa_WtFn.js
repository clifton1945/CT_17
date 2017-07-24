"use strict";

let R = require('ramda')
    , curry = R.curry
    // , prop = R.prop
    // , indexOf = R.indexOf()
;
let roundToTwoPlaces = require('../../h/roundToTwoPlaces');
let weighterFn = curry( // note use ElemNdxLst -> elem, ndx, lst
    (wtCnst, E, N, L) => roundToTwoPlaces(Math.pow(N / L.length, wtCnst))
);
let SRV_WtFn__GVNa_Cnst = curry( // actually this is SRV_WtFn__WTHa_Cnst__GVN_Ndx
    cnst => weighterFn(cnst)
);

module.exports.SRV_WtFn__GVNa_Cnst = SRV_WtFn__GVNa_Cnst;

