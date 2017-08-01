
"use strict";

let R = require('ramda')
    , curry = R.curry
    , pipe = R.pipe
    // , always = R.always
;
let MUTATE_ = curry(
    /**
     * ..... MUTATE_:: mutates, [sets and returns], an Element: for each attribute in a GVN style csd object.
     * This is an arity:2 version.
     * @sig  csdDCT -> ( SPAN -> SPAN )
     *
     * @param csd
     * @param elt
     * @return {*}
     *
     * The MUTATE_frmCsdDCT arity:1 form; MUTATE_(a_csd) useful in iterating all verse spans.
     * The verbose form of arity:1 IS SRVa_Span__WTHa_Csd__GVNa_Span
     */
    (csd, elt) => {

        let _mutElt = prop => elt.style[prop] = csd[prop];

        for (let property in csd)
            if (csd.hasOwnProperty(property)) {
                _mutElt(property)
            }
        return elt
    }
);
module.exports.MUTATE_ = pipe(MUTATE_);             // CSD -> ( ELEM -> ELEM )
module.exports.byElem = R.flip(MUTATE_);            // (ELEM)-> ( CSD ->  ELEM )
// 170724 ADD an arity:1 form. SRVa_Span__WTHa_Csd__GVNa_Span
module.exports.SRVa_ = MUTATE_;
module.exports.SRVa_Span__WTHa_Csd__GVNa_Span = curry(csd => MUTATE_(csd));
// TODO confirm I need the curry here; will it work w/o curry ??
