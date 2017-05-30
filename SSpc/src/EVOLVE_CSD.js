/**
 * EVOLVE_CSD.js
 */
"use strict";
let R = require('ramda')
    , curry = R.curry
;
let EVOLVE = curry(
    /**
     *  ..... EVOLVE_CSD:: DCT -> ( DCT -> DCT )
     *      DCT.dfltCSD -> ( DCT.csdTrnsfrm -> DCT.newCSD )
     *  CONTEXT: the fully evolved form of this arity:2 Function RETURNS a new CSD.
     *  BUT EVOLVE_Dflt form is a partialed, arity:1, form; is the more useful form:
     *      It seeks a different csdTrnsfrm each invoking.
     *
     * @param dfltCSD
     * @param csdTrnsfrm
     * @return newCSD
     *
     * USAGE:
     *  let dfltCSD = require('...
     *  let trnsfrm = require('...
     *  let someTrnsfrm = trnsfrm('someKey');
     *
     *  let EVOLVE_dfltCSD = EVOLVE(dfltCSD);// DCT.trnsfrms -> DCT.CSD
     *  THEN
     *  EVOLVE_someAttr = EVOLVE_dfltCSD(someTrnsfrm); // ->  {backgroundColor: "green", opacity: '1', fontSize: '100%'}
     *
     */
    (dfltCSD, csdTrnsfrm) => R.evolve(csdTrnsfrm, dfltCSD)
);
/**
 *  ..... EVOLVE_Dflt: ( DCT -> DCT )
 *      ( DCT.csdTrnsfrm -> DCT.newCSD )
 *  CONTEXT: the partialed form of this arity:1 Fn:EVOLVE returns a Fn -> CSD.
 *  the dflt_CSD is coded in.
 *  It is the more useful form:
 *      It seeks a different csdTrnsfrm each invoking.
 *
 * @param csdTrnsfrm
 * @return newCSD
 *
 * USAGE:
 *  let dfltCSD = require('...
 *  let trnsfrm = require('...
 *  let someTrnsfrm = trnsfrm('someKey');
 *
 *  let EVOLVE_dfltCSD = EVOLVE(dfltCSD);// DCT.trnsfrms -> DCT.CSD
 *  THEN
 *  EVOLVE_someAttr = EVOLVE_dfltCSD(someTrnsfrm); // ->  {backgroundColor: "green", opacity: '1', fontSize: '100%'}
 *
 */

let EVOLVE_Dflt = EVOLVE(require('../Dflt_CSD').DfltCSD);

module.exports.EVOLVE_CSD = EVOLVE;
module.exports.EVOLVE_Dflt = EVOLVE_Dflt;