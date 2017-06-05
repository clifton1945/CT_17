/**
 * C_in_.js
 * Created by CLIF on 4/21/2017.
 */
const Doc = (txt) => document.querySelector(".console").textContent = txt;
const Console = (txt) => console.log(txt);
const Both = (txt) => {
    Console(txt);
    Doc(txt);
};
module.exports.Doc = Doc;
module.exports.Console = Console;
module.exports.Both = Both;