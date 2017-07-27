/**
 * Created by CLIF on 1/19/2017.
 */

"use strict";
let R = require('ramda');
let compose = R.compose;

const roundTo_3 = compose(
    R.divide(R.__, 1000), Math.round, R.multiply(1000)
);// N -> N
const roundTo_2 = compose(
    R.divide(R.__, 100), Math.round, R.multiply(100)
);// N -> N

module.exports = compose(
    R.divide(R.__, 100), Math.round, R.multiply(100)
);// N -> N; // i.e. the default
module.exports.roundTo_2 = roundTo_2;
module.exports.roundTo_3 = roundTo_3;