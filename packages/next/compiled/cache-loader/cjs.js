module.exports=function(e,t){var n={};function __webpack_require__(t){if(n[t]){return n[t].exports}var r=n[t]={i:t,l:false,exports:{}};e[t].call(r.exports,r,r.exports,__webpack_require__);r.l=true;return r.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(688)}return startup()}({87:function(e){e.exports=require("os")},134:function(e){e.exports=require("schema-utils")},177:function(e){e.exports={name:"cache-loader",version:"4.1.0",description:"Caches the result of following loaders on disk.",license:"MIT",repository:"webpack-contrib/cache-loader",author:"Tobias Koppers @sokra",homepage:"https://github.com/webpack-contrib/cache-loader",bugs:"https://github.com/webpack-contrib/cache-loader/issues",main:"dist/cjs.js",engines:{node:">= 8.9.0"},scripts:{start:"npm run build -- -w",prebuild:"npm run clean",build:'cross-env NODE_ENV=production babel src -d dist --ignore "src/**/*.test.js" --copy-files',clean:"del-cli dist",commitlint:"commitlint --from=master","lint:prettier":'prettier "{**/*,*}.{js,json,md,yml,css}" --list-different',"lint:js":"eslint --cache src test",lint:'npm-run-all -l -p "lint:**"',prepare:"npm run build",release:"standard-version",security:"npm audit","test:only":"cross-env NODE_ENV=test jest","test:watch":"cross-env NODE_ENV=test jest --watch","test:coverage":'cross-env NODE_ENV=test jest --collectCoverageFrom="src/**/*.js" --coverage',pretest:"npm run lint",test:"cross-env NODE_ENV=test npm run test:coverage",defaults:"webpack-defaults"},files:["dist"],peerDependencies:{webpack:"^4.0.0"},dependencies:{"buffer-json":"^2.0.0","find-cache-dir":"^3.0.0","loader-utils":"^1.2.3",mkdirp:"^0.5.1","neo-async":"^2.6.1","schema-utils":"^2.0.0"},devDependencies:{"@babel/cli":"^7.5.5","@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","@commitlint/cli":"^8.1.0","@commitlint/config-conventional":"^8.1.0","@webpack-contrib/defaults":"^5.0.2","@webpack-contrib/eslint-config-webpack":"^3.0.0","babel-jest":"^24.8.0","babel-loader":"^8.0.6","commitlint-azure-pipelines-cli":"^1.0.2","cross-env":"^5.2.0",del:"^5.0.0","del-cli":"^2.0.0",eslint:"^6.0.1","eslint-config-prettier":"^6.0.0","eslint-plugin-import":"^2.18.0","file-loader":"^4.1.0",husky:"^3.0.0",jest:"^24.8.0","jest-junit":"^6.4.0","lint-staged":"^9.2.0","memory-fs":"^0.4.1","normalize-path":"^3.0.0","npm-run-all":"^4.1.5",prettier:"^1.18.2","standard-version":"^6.0.1",uuid:"^3.3.2",webpack:"^4.36.1","webpack-cli":"^3.3.6"},keywords:["webpack"]}},240:function(e){e.exports=require("find-cache-dir")},247:function(e){e.exports={type:"object",properties:{cacheContext:{description:"The default cache context in order to generate the cache relatively to a path. By default it will use absolute paths.",type:"string"},cacheKey:{description:"Allows you to override default cache key generator.",instanceof:"Function"},cacheIdentifier:{description:"Provide a cache directory where cache items should be stored (used for default read/write implementation).",type:"string"},cacheDirectory:{description:"Provide an invalidation identifier which is used to generate the hashes. You can use it for extra dependencies of loaders (used for default read/write implementation).",type:"string"},compare:{description:"Allows you to override default comparison function between the cached dependency and the one is being read. Return true to use the cached resource.",instanceof:"Function"},precision:{description:"Round mtime by this number of milliseconds both for stats and deps before passing those params to the comparing function.",type:"number"},read:{description:"Allows you to override default read cache data from file.",instanceof:"Function"},readOnly:{description:"Allows you to override default value and make the cache read only (useful for some environments where you don't want the cache to be updated, only read from it).",type:"boolean"},write:{description:"Allows you to override default write cache data to file (e.g. Redis, memcached).",instanceof:"Function"}},additionalProperties:false}},343:function(e){e.exports=require("neo-async")},417:function(e){e.exports=require("crypto")},622:function(e){e.exports=require("path")},687:function(e,t,n){Object.defineProperty(t,"__esModule",{value:true});t.default=loader;t.pitch=pitch;t.raw=void 0;const r=n(747);const i=n(87);const s=n(622);const o=n(343);const c=n(417);const a=n(841);const u=n(240);const d=n(727);const{getOptions:l}=n(710);const p=n(134);const f=n(177);const h=process.env.NODE_ENV||"development";const m=n(247);const b={cacheContext:"",cacheDirectory:u({name:"cache-loader"})||i.tmpdir(),cacheIdentifier:`cache-loader:${f.version} ${h}`,cacheKey:cacheKey,compare:compare,precision:0,read:read,readOnly:false,write:write};function pathWithCacheContext(e,t){if(!e){return t}if(t.includes(e)){return t.split("!").map(t=>s.relative(e,t)).join("!")}return t.split("!").map(t=>s.resolve(e,t)).join("!")}function roundMs(e,t){return Math.floor(e/t)*t}function loader(...e){const t=Object.assign({},b,l(this));p(m,t,{name:"Cache Loader",baseDataPath:"options"});const{readOnly:n,write:i}=t;if(n){this.callback(null,...e);return}const s=this.async();const{data:c}=this;const a=this.getDependencies().concat(this.loaders.map(e=>e.path));const u=this.getContextDependencies();let d=true;const f=this.fs||r;const h=(e,n)=>{f.stat(e,(r,i)=>{if(r){n(r);return}const s=i.mtime.getTime();if(s/1e3>=Math.floor(c.startTime/1e3)){d=false}n(null,{path:pathWithCacheContext(t.cacheContext,e),mtime:s})})};o.parallel([e=>o.mapLimit(a,20,h,e),e=>o.mapLimit(u,20,h,e)],(n,r)=>{if(n){s(null,...e);return}if(!d){s(null,...e);return}const[o,a]=r;i(c.cacheKey,{remainingRequest:pathWithCacheContext(t.cacheContext,c.remainingRequest),dependencies:o,contextDependencies:a,result:e},()=>{s(null,...e)})})}function pitch(e,t,n){const i=Object.assign({},b,l(this));p(m,i,{name:"Cache Loader (Pitch)",baseDataPath:"options"});const{cacheContext:s,cacheKey:c,compare:a,read:u,readOnly:d,precision:f}=i;const h=this.async();const y=n;y.remainingRequest=e;y.cacheKey=c(i,y.remainingRequest);u(y.cacheKey,(e,t)=>{if(e){h();return}if(pathWithCacheContext(i.cacheContext,t.remainingRequest)!==y.remainingRequest){h();return}const n=this.fs||r;o.each(t.dependencies.concat(t.contextDependencies),(e,t)=>{const r={...e,path:pathWithCacheContext(i.cacheContext,e.path)};n.stat(r.path,(n,i)=>{if(n){t(n);return}if(d){t();return}const s=i;const o=r;if(f>1){["atime","mtime","ctime","birthtime"].forEach(e=>{const t=`${e}Ms`;const n=roundMs(i[t],f);s[t]=n;s[e]=new Date(n)});o.mtime=roundMs(e.mtime,f)}if(a(s,o)!==true){t(true);return}t()})},e=>{if(e){y.startTime=Date.now();h();return}t.dependencies.forEach(e=>this.addDependency(pathWithCacheContext(s,e.path)));t.contextDependencies.forEach(e=>this.addContextDependency(pathWithCacheContext(s,e.path)));h(null,...t.result)})})}function digest(e){return c.createHash("md5").update(e).digest("hex")}const y=new Set();function write(e,t,n){const i=s.dirname(e);const o=d.stringify(t);if(y.has(i)){r.writeFile(e,o,"utf-8",n)}else{a(i,t=>{if(t){n(t);return}y.add(i);r.writeFile(e,o,"utf-8",n)})}}function read(e,t){r.readFile(e,"utf-8",(e,n)=>{if(e){t(e);return}try{const e=d.parse(n);t(null,e)}catch(e){t(e)}})}function cacheKey(e,t){const{cacheIdentifier:n,cacheDirectory:r}=e;const i=digest(`${n}\n${t}`);return s.join(r,`${i}.json`)}function compare(e,t){return e.mtime.getTime()===t.mtime}const g=true;t.raw=g},688:function(e,t,n){e.exports=n(687)},710:function(e){e.exports=require("loader-utils")},727:function(e){function stringify(e,t){return JSON.stringify(e,replacer,t)}function parse(e){return JSON.parse(e,reviver)}function replacer(e,t){if(isBufferLike(t)){if(isArray(t.data)){if(t.data.length>0){t.data="base64:"+Buffer.from(t.data).toString("base64")}else{t.data=""}}}return t}function reviver(e,t){if(isBufferLike(t)){if(isArray(t.data)){return Buffer.from(t.data)}else if(isString(t.data)){if(t.data.startsWith("base64:")){return Buffer.from(t.data.slice("base64:".length),"base64")}return Buffer.from(t.data)}}return t}function isBufferLike(e){return isObject(e)&&e.type==="Buffer"&&(isArray(e.data)||isString(e.data))}function isArray(e){return Array.isArray(e)}function isString(e){return typeof e==="string"}function isObject(e){return typeof e==="object"&&e!==null}e.exports={stringify:stringify,parse:parse,replacer:replacer,reviver:reviver}},747:function(e){e.exports=require("fs")},841:function(e){e.exports=require("mkdirp")}});