module.exports=function(r,e){var t={};function __webpack_require__(e){if(t[e]){return t[e].exports}var s=t[e]={i:e,l:false,exports:{}};r[e].call(s.exports,s,s.exports,__webpack_require__);s.l=true;return s.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(394)}return startup()}({87:function(r){r.exports=require("os")},394:function(r,e,t){const s=t(87);const o=t(747);const n=()=>{if(process.platform!=="linux"){return false}if(s.release().toLowerCase().includes("microsoft")){return true}try{return o.readFileSync("/proc/version","utf8").toLowerCase().includes("microsoft")}catch(r){return false}};if(process.env.__IS_WSL_TEST__){r.exports=n}else{r.exports=n()}},747:function(r){r.exports=require("fs")}});