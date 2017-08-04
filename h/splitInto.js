"use strict";
let R = require('ramda');
module.exports = R.curry(
    /**
     * ---- splitInto_: triage a List into three subLists
     * @param elem_list:  a List
     * @param splitAt_elem: an Elem
     * @return list of sublist :[[], [],...]
     * @USAGE: splitInto_readStateLists =
     *  splitInto_(chptSpansList)(splitAtSpan) -> [
     *      [spanListBefore], [splitAtSpan], spanListAfter]]
     */
    (elem_list, splitAt_elem) => {
        let splitAt_Ndx = (R.indexOf(splitAt_elem, elem_list));
        let splits = R.splitAt(splitAt_Ndx, elem_list);
        let readLsts = [[splitAt_elem]];
        readLsts = R.prepend(splits[0])(readLsts);
        readLsts = R.append(R.drop(1, splits[1]), readLsts);
        return readLsts
    }
);