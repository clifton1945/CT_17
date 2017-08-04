"use strict";

let R = require('ramda');

module.exports.SRVa_CollectionOf_ChptVerses = R.curry(
    function (doc) {
        let DfltSelector = '.chpt';
        return doc.querySelector(DfltSelector).children; //
    }
);

