module.exports=function(r,e){var t={};function __webpack_require__(e){if(t[e]){return t[e].exports}var u=t[e]={i:e,l:false,exports:{}};r[e].call(u.exports,u,u.exports,__webpack_require__);u.l=true;return u.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(383)}return startup()}({383:function(r,e,t){const u=t(747);let n;function hasDockerEnv(){try{u.statSync("/.dockerenv");return true}catch(r){return false}}function hasDockerCGroup(){try{return u.readFileSync("/proc/self/cgroup","utf8").includes("docker")}catch(r){return false}}r.exports=(()=>{if(n===undefined){n=hasDockerEnv()||hasDockerCGroup()}return n})},747:function(r){r.exports=require("fs")}});