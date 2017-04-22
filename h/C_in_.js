/**
 * C_in_.js
 * Created by CLIF on 4/21/2017.
 */
const _inDoc = (txt) => document.querySelector(".console").textContent = txt;
const _inConsole = (txt) => console.log(txt);

module.exports._inDoc = _inDoc;
module.exports._inConsole = _inConsole;
module.exports._inBoth = (txt) => {
    _inConsole(txt);
    _inDoc(txt);
};
