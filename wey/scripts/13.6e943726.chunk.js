(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(d,f,l){d!=Array.prototype&&d!=Object.prototype&&(d[f]=l.value)};$jscomp.getGlobal=function(d){return"undefined"!=typeof window&&window===d?d:"undefined"!=typeof global&&null!=global?global:d};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(d,f,l,r){if(f){l=$jscomp.global;d=d.split(".");for(r=0;r<d.length-1;r++){var g=d[r];g in l||(l[g]={});l=l[g]}d=d[d.length-1];r=l[d];f=f(r);f!=r&&null!=f&&$jscomp.defineProperty(l,d,{configurable:!0,writable:!0,value:f})}};$jscomp.polyfill("Math.imul",function(d){return d?d:function(f,d){f=Number(f);d=Number(d);var l=f&65535,g=d&65535;return l*g+((f>>>16&65535)*g+l*(d>>>16&65535)<<16>>>0)|0}},"es6","es3");
$jscomp.polyfill("Math.clz32",function(d){return d?d:function(f){f=Number(f)>>>0;if(0===f)return 32;var d=0;0===(f&4294901760)&&(f<<=16,d+=16);0===(f&4278190080)&&(f<<=8,d+=8);0===(f&4026531840)&&(f<<=4,d+=4);0===(f&3221225472)&&(f<<=2,d+=2);0===(f&2147483648)&&d++;return d}},"es6","es3");$jscomp.polyfill("Math.trunc",function(d){return d?d:function(d){d=Number(d);if(isNaN(d)||Infinity===d||-Infinity===d||0===d)return d;var f=Math.floor(Math.abs(d));return 0>d?-f:f}},"es6","es3");
$jscomp.arrayIteratorImpl=function(d){var f=0;return function(){return f<d.length?{done:!1,value:d[f++]}:{done:!0}}};$jscomp.arrayIterator=function(d){return{next:$jscomp.arrayIteratorImpl(d)}};$jscomp.makeIterator=function(d){var f="undefined"!=typeof Symbol&&Symbol.iterator&&d[Symbol.iterator];return f?f.call(d):$jscomp.arrayIterator(d)};$jscomp.FORCE_POLYFILL_PROMISE=!1;
$jscomp.polyfill("Promise",function(d){function f(){this.batch_=null}function l(d){return d instanceof g?d:new g(function(A,f){A(d)})}if(d&&!$jscomp.FORCE_POLYFILL_PROMISE)return d;f.prototype.asyncExecute=function(d){null==this.batch_&&(this.batch_=[],this.asyncExecuteBatch_());this.batch_.push(d);return this};f.prototype.asyncExecuteBatch_=function(){var d=this;this.asyncExecuteFunction(function(){d.executeBatch_()})};var r=$jscomp.global.setTimeout;f.prototype.asyncExecuteFunction=function(d){r(d,
0)};f.prototype.executeBatch_=function(){for(;this.batch_&&this.batch_.length;){var d=this.batch_;this.batch_=[];for(var f=0;f<d.length;++f){var g=d[f];d[f]=null;try{g()}catch(u){this.asyncThrow_(u)}}}this.batch_=null};f.prototype.asyncThrow_=function(d){this.asyncExecuteFunction(function(){throw d;})};var g=function(d){this.state_=0;this.result_=void 0;this.onSettledCallbacks_=[];var f=this.createResolveAndReject_();try{d(f.resolve,f.reject)}catch(W){f.reject(W)}};g.prototype.createResolveAndReject_=
function(){function d(d){return function(A){g||(g=!0,d.call(f,A))}}var f=this,g=!1;return{resolve:d(this.resolveTo_),reject:d(this.reject_)}};g.prototype.resolveTo_=function(d){if(d===this)this.reject_(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof g)this.settleSameAsPromise_(d);else{a:switch(typeof d){case "object":var f=null!=d;break a;case "function":f=!0;break a;default:f=!1}f?this.resolveToNonPromiseObj_(d):this.fulfill_(d)}};g.prototype.resolveToNonPromiseObj_=function(d){var f=
void 0;try{f=d.then}catch(W){this.reject_(W);return}"function"==typeof f?this.settleSameAsThenable_(f,d):this.fulfill_(d)};g.prototype.reject_=function(d){this.settle_(2,d)};g.prototype.fulfill_=function(d){this.settle_(1,d)};g.prototype.settle_=function(d,f){if(0!=this.state_)throw Error("Cannot settle("+d+", "+f+"): Promise already settled in state"+this.state_);this.state_=d;this.result_=f;this.executeOnSettledCallbacks_()};g.prototype.executeOnSettledCallbacks_=function(){if(null!=this.onSettledCallbacks_){for(var d=
0;d<this.onSettledCallbacks_.length;++d)fa.asyncExecute(this.onSettledCallbacks_[d]);this.onSettledCallbacks_=null}};var fa=new f;g.prototype.settleSameAsPromise_=function(d){var f=this.createResolveAndReject_();d.callWhenSettled_(f.resolve,f.reject)};g.prototype.settleSameAsThenable_=function(d,f){var g=this.createResolveAndReject_();try{d.call(f,g.resolve,g.reject)}catch(u){g.reject(u)}};g.prototype.then=function(d,f){function l(d,f){return"function"==typeof d?function(f){try{u(d(f))}catch(M){A(M)}}:
f}var u,A,r=new g(function(d,f){u=d;A=f});this.callWhenSettled_(l(d,u),l(f,A));return r};g.prototype.catch=function(d){return this.then(void 0,d)};g.prototype.callWhenSettled_=function(d,f){function g(){switch(l.state_){case 1:d(l.result_);break;case 2:f(l.result_);break;default:throw Error("Unexpected state: "+l.state_);}}var l=this;null==this.onSettledCallbacks_?fa.asyncExecute(g):this.onSettledCallbacks_.push(g)};g.resolve=l;g.reject=function(d){return new g(function(f,g){g(d)})};g.race=function(d){return new g(function(f,
g){for(var u=$jscomp.makeIterator(d),r=u.next();!r.done;r=u.next())l(r.value).callWhenSettled_(f,g)})};g.all=function(d){var f=$jscomp.makeIterator(d),r=f.next();return r.done?l([]):new g(function(d,g){function u(f){return function(g){A[f]=g;T--;0==T&&d(A)}}var A=[],T=0;do A.push(void 0),T++,l(r.value).callWhenSettled_(u(A.length-1),g),r=f.next();while(!r.done)})};return g},"es6","es3");
var GizmoDecoderModule=function(d){function f(a,b){b||(b=16);return Math.ceil(a/b)*b}function l(a,b){a||M("Assertion failed: "+b)}function r(a,b){if(0===b||!a)return"";for(var c=0,e,d=0;;){e=U[a+d>>0];c|=e;if(0==e&&!b)break;d++;if(b&&d==b)break}b||(b=d);e="";if(128>c){for(;0<b;)c=String.fromCharCode.apply(String,U.subarray(a,a+Math.min(b,1024))),e=e?e+c:c,a+=1024,b-=1024;return e}return g(U,a)}function g(a,b){for(var c=b;a[c];)++c;if(16<c-b&&a.subarray&&Ha)return Ha.decode(a.subarray(b,c));for(c=
"";;){var e=a[b++];if(!e)return c;if(e&128){var d=a[b++]&63;if(192==(e&224))c+=String.fromCharCode((e&31)<<6|d);else{var f=a[b++]&63;if(224==(e&240))e=(e&15)<<12|d<<6|f;else{var g=a[b++]&63;if(240==(e&248))e=(e&7)<<18|d<<12|f<<6|g;else{var h=a[b++]&63;if(248==(e&252))e=(e&3)<<24|d<<18|f<<12|g<<6|h;else{var k=a[b++]&63;e=(e&1)<<30|d<<24|f<<18|g<<12|h<<6|k}}}65536>e?c+=String.fromCharCode(e):(e-=65536,c+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else c+=String.fromCharCode(e)}}function fa(a,b){0<
a%b&&(a+=b-a%b);return a}function A(){a.HEAP8=ha=new Int8Array(C);a.HEAP16=Ia=new Int16Array(C);a.HEAP32=D=new Int32Array(C);a.HEAPU8=U=new Uint8Array(C);a.HEAPU16=new Uint16Array(C);a.HEAPU32=new Uint32Array(C);a.HEAPF32=new Float32Array(C);a.HEAPF64=new Float64Array(C)}function ka(e){for(;0<e.length;){var b=e.shift();if("function"==typeof b)b();else{var c=b.func;"number"===typeof c?void 0===b.arg?a.dynCall_v(c):a.dynCall_vi(c,b.arg):c(void 0===b.arg?null:b.arg)}}}function W(a){return String.prototype.startsWith?
a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}function u(){return!!u.uncaught_exception}function la(){var e=x.last;if(!e)return(ra(0),0)|0;var b=x.infos[e],c=b.type;if(!c)return(ra(0),e)|0;var n=Array.prototype.slice.call(arguments);a.___cxa_is_pointer_type(c);la.buffer||(la.buffer=Ja(4));D[la.buffer>>2]=e;e=la.buffer;for(var d=0;d<n.length;d++)if(n[d]&&a.___cxa_can_catch(n[d],c,e))return e=D[e>>2],b.adjusted=e,(ra(n[d]),e)|0;e=D[e>>2];
return(ra(c),e)|0}function X(e,b){v.varargs=b;try{var c=v.get(),n=v.get(),d=v.get();e=0;X.buffers||(X.buffers=[null,[],[]],X.printChar=function(b,c){var e=X.buffers[b];l(e);0===c||10===c?((1===b?a.print:a.printErr)(g(e,0)),e.length=0):e.push(c)});for(b=0;b<d;b++){for(var f=D[n+8*b>>2],h=D[n+(8*b+4)>>2],k=0;k<h;k++)X.printChar(c,U[f+k]);e+=h}return e}catch(xa){return"undefined"!==typeof FS&&xa instanceof FS.ErrnoError||M(xa),-xa.errno}}function ma(e,b){ma.seen||(ma.seen={});e in ma.seen||(a.dynCall_v(b),
ma.seen[e]=1)}function T(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}function va(e){function b(){if(!a.calledRun&&(a.calledRun=!0,!na)){Ka||(Ka=!0,ka(La));ka(Ma);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)Na.unshift(a.postRun.shift());ka(Na)}}if(!(0<da)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)Oa.unshift(a.preRun.shift());
ka(Oa);0<da||a.calledRun||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}function M(e){if(a.onAbort)a.onAbort(e);void 0!==e?(a.print(e),a.printErr(e),e=JSON.stringify(e)):e="";na=!0;throw"abort("+e+"). Build with -s ASSERTIONS=1 for more info.";}function p(){}function t(a){return(a||p).__cache__}function Q(a,b){var c=t(b),e=c[a];if(e)return e;e=Object.create((b||p).prototype);e.ptr=a;return c[a]=e}function R(a){if("string"===
typeof a){for(var b=0,c=0;c<a.length;++c){var e=a.charCodeAt(c);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++c)&1023);127>=e?++b:b=2047>=e?b+2:65535>=e?b+3:2097151>=e?b+4:67108863>=e?b+5:b+6}b=Array(b+1);c=0;e=b.length;if(0<e){e=c+e-1;for(var d=0;d<a.length;++d){var f=a.charCodeAt(d);55296<=f&&57343>=f&&(f=65536+((f&1023)<<10)|a.charCodeAt(++d)&1023);if(127>=f){if(c>=e)break;b[c++]=f}else{if(2047>=f){if(c+1>=e)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=e)break;b[c++]=224|f>>12}else{if(2097151>=
f){if(c+3>=e)break;b[c++]=240|f>>18}else{if(67108863>=f){if(c+4>=e)break;b[c++]=248|f>>24}else{if(c+5>=e)break;b[c++]=252|f>>30;b[c++]=128|f>>24&63}b[c++]=128|f>>18&63}b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0}a=k.alloc(b,ha);k.copy(b,ha,a)}return a}function Pa(a){if("object"===typeof a){var b=k.alloc(a,ha);k.copy(a,ha,b);return b}return a}function y(){throw"cannot construct a Status, no constructor in IDL";}function E(){this.ptr=Wa();t(E)[this.ptr]=this}function F(){this.ptr=
Xa();t(F)[this.ptr]=this}function G(){this.ptr=Ya();t(G)[this.ptr]=this}function m(){this.ptr=Za();t(m)[this.ptr]=this}function N(){this.ptr=$a();t(N)[this.ptr]=this}function w(){this.ptr=ab();t(w)[this.ptr]=this}function q(){this.ptr=bb();t(q)[this.ptr]=this}function S(){this.ptr=cb();t(S)[this.ptr]=this}function O(){this.ptr=db();t(O)[this.ptr]=this}function h(){this.ptr=eb();t(h)[this.ptr]=this}function H(){this.ptr=fb();t(H)[this.ptr]=this}function B(){this.ptr=gb();t(B)[this.ptr]=this}function I(){this.ptr=
hb();t(I)[this.ptr]=this}function V(){throw"cannot construct a VoidPtr, no constructor in IDL";}function J(){this.ptr=ib();t(J)[this.ptr]=this}function K(){this.ptr=jb();t(K)[this.ptr]=this}function L(){this.ptr=kb();t(L)[this.ptr]=this}function P(){this.ptr=lb();t(P)[this.ptr]=this}d=d||{};var a="undefined"!==typeof d?d:{},Qa=!1,Ra=!1;a.onRuntimeInitialized=function(){Qa=!0;if(Ra&&"function"===typeof a.onModuleLoaded)a.onModuleLoaded(a)};a.onModuleParsed=function(){Ra=!0;if(Qa&&"function"===typeof a.onModuleLoaded)a.onModuleLoaded(a)};
a.isVersionSupported=function(a){if("string"!==typeof a)return!1;a=a.split(".");return 2>a.length||3<a.length?!1:1==a[0]&&0<=a[1]&&3>=a[1]?!0:0!=a[0]||10<a[1]?!1:!0};var oa={},Y;for(Y in a)a.hasOwnProperty(Y)&&(oa[Y]=a[Y]);a.arguments=[];a.thisProgram="./this.program";a.quit=function(a,b){throw b;};a.preRun=[];a.postRun=[];var ia=!1,ea=!1,pa=!1,ya=!1;if(a.ENVIRONMENT)if("WEB"===a.ENVIRONMENT)ia=!0;else if("WORKER"===a.ENVIRONMENT)ea=!0;else if("NODE"===a.ENVIRONMENT)pa=!0;else if("SHELL"===a.ENVIRONMENT)ya=
!0;else throw Error("Module['ENVIRONMENT'] value is not valid. must be one of: WEB|WORKER|NODE|SHELL.");else ia="object"===typeof window,ea="function"===typeof importScripts,pa="object"===typeof process&&"function"==="function"&&!ia&&!ea,ya=!ia&&!pa&&!ea;if(pa){var za,Aa;a.read=function(a,b){za||(za=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'fs'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));Aa||(Aa=__webpack_require__(564));a=Aa.normalize(a);a=za.readFileSync(a);return b?a:a.toString()};a.readBinary=function(e){e=a.read(e,!0);e.buffer||(e=new Uint8Array(e));l(e.buffer);return e};
1<process.argv.length&&(a.thisProgram=process.argv[1].replace(/\\/g,"/"));a.arguments=process.argv.slice(2);process.on("uncaughtException",function(a){if(!(a instanceof T))throw a;});process.on("unhandledRejection",function(a,b){process.exit(1)});a.inspect=function(){return"[Emscripten Module object]"}}else if(ya)"undefined"!=typeof read&&(a.read=function(a){return read(a)}),a.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");l("object"===
typeof a);return a},"undefined"!=typeof scriptArgs?a.arguments=scriptArgs:"undefined"!=typeof arguments&&(a.arguments=arguments),"function"===typeof quit&&(a.quit=function(a,b){quit(a)});else if(ia||ea)a.read=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},ea&&(a.readBinary=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),a.readAsync=function(a,b,c){var e=new XMLHttpRequest;
e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?b(e.response):c()};e.onerror=c;e.send(null)},a.setWindowTitle=function(a){document.title=a};a.print="undefined"!==typeof console?console.log.bind(console):"undefined"!==typeof print?print:null;a.printErr="undefined"!==typeof printErr?printErr:"undefined"!==typeof console&&console.warn.bind(console)||a.print;a.print=a.print;a.printErr=a.printErr;for(Y in oa)oa.hasOwnProperty(Y)&&(a[Y]=oa[Y]);
oa=void 0;var na=0,Ha="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var ha,U,Ia,D,Z,Ba,sa,ta,Ca,ja;var Da=Z=Ba=sa=ta=Ca=ja=0;var Sa=!1;a.reallocBuffer||(a.reallocBuffer=function(a){try{if(ArrayBuffer.transfer)var b=ArrayBuffer.transfer(C,a);else{var c=ha;b=new ArrayBuffer(a);(new Int8Array(b)).set(c)}}catch(n){return!1}return mb(b)?b:!1});try{var Ta=Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,
"byteLength").get);Ta(new ArrayBuffer(4))}catch(e){Ta=function(a){return a.byteLength}}var Ea=a.TOTAL_STACK||5242880,z=a.TOTAL_MEMORY||16777216;z<Ea&&a.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+z+"! (TOTAL_STACK="+Ea+")");if(a.buffer)var C=a.buffer;else"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(a.wasmMemory=new WebAssembly.Memory({initial:z/65536}),C=a.wasmMemory.buffer):C=new ArrayBuffer(z),a.buffer=C;A();D[0]=1668509029;Ia[1]=25459;if(115!==U[2]||
99!==U[3])throw"Runtime error: expected the system to be little-endian!";var Oa=[],La=[],Ma=[],nb=[],Na=[],Ka=!1,ob=Math.floor,da=0,Fa=null,qa=null;a.preloadedImages={};a.preloadedAudios={};(function(){function e(){try{if(a.wasmBinary)return new Uint8Array(a.wasmBinary);if(a.readBinary)return a.readBinary(f);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";}catch(Va){M(Va)}}function b(){return a.wasmBinary||
!ia&&!ea||"function"!==typeof fetch?new Promise(function(a,b){a(e())}):fetch(f,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+f+"'";return a.arrayBuffer()}).catch(function(){return e()})}function c(c,e,d){function n(b,c){k=b.exports;k.memory&&(b=k.memory,c=a.buffer,b.byteLength<c.byteLength&&a.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here"),c=new Int8Array(c),(new Int8Array(b)).set(c),
a.buffer=C=b,A());a.asm=k;a.usingWasm=!0;da--;a.monitorRunDependencies&&a.monitorRunDependencies(da);0==da&&(null!==Fa&&(clearInterval(Fa),Fa=null),qa&&(b=qa,qa=null,b()))}function g(a){n(a.instance,a.module)}function l(c){b().then(function(a){return WebAssembly.instantiate(a,h)}).then(c).catch(function(b){a.printErr("failed to asynchronously prepare wasm: "+b);M(b)})}if("object"!==typeof WebAssembly)return a.printErr("no native wasm support detected"),!1;if(!(a.wasmMemory instanceof WebAssembly.Memory))return a.printErr("no native wasm Memory in use"),
!1;e.memory=a.wasmMemory;h.global={NaN:NaN,Infinity:Infinity};h["global.Math"]=Math;h.env=e;da++;a.monitorRunDependencies&&a.monitorRunDependencies(da);if(a.instantiateWasm)try{return a.instantiateWasm(h,n)}catch(pb){return a.printErr("Module.instantiateWasm callback failed with error: "+pb),!1}a.wasmBinary||"function"!==typeof WebAssembly.instantiateStreaming||W(f)||"function"!==typeof fetch?l(g):WebAssembly.instantiateStreaming(fetch(f,{credentials:"same-origin"}),h).then(g).catch(function(b){a.printErr("wasm streaming compile failed: "+
b);a.printErr("falling back to ArrayBuffer instantiation");l(g)});return{}}var d="gizmo_decoder.wast",f="gizmo_decoder.wasm",g="gizmo_decoder.temp.asm.js";"function"===typeof a.locateFile&&(W(d)||(d=a.locateFile(d)),W(f)||(f=a.locateFile(f)),W(g)||(g=a.locateFile(g)));var h={global:null,env:null,asm2wasm:{"f64-rem":function(a,b){return a%b},"debugger":function(){debugger}},parent:a},k=null;a.asmPreload=a.asm;var l=a.reallocBuffer;a.reallocBuffer=function(b){if("asmjs"===m)var c=l(b);else a:{b=fa(b,
a.usingWasm?65536:16777216);var e=a.buffer.byteLength;if(a.usingWasm)try{c=-1!==a.wasmMemory.grow((b-e)/65536)?a.buffer=a.wasmMemory.buffer:null;break a}catch(vd){c=null;break a}c=void 0}return c};var m="";a.asm=function(b,e,d){if(!e.table){var n=a.wasmTableSize;void 0===n&&(n=1024);var f=a.wasmMaxTableSize;e.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==f?new WebAssembly.Table({initial:n,maximum:f,element:"anyfunc"}):new WebAssembly.Table({initial:n,element:"anyfunc"}):
Array(n);a.wasmTable=e.table}e.memoryBase||(e.memoryBase=a.STATIC_BASE);e.tableBase||(e.tableBase=0);(b=c(b,e,d))||M("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return b}})();Da=1024;Z=Da+17808;La.push();a.STATIC_BASE=Da;a.STATIC_BUMP=17808;var qb=Z;Z+=16;var x={last:0,caught:[],infos:{},deAdjust:function(a){if(!a||x.infos[a])return a;for(var b in x.infos){var c=+b;if(x.infos[c].adjusted===
a)return c}return a},addRef:function(a){a&&x.infos[a].refcount++},decRef:function(e){if(e){var b=x.infos[e];l(0<b.refcount);b.refcount--;0!==b.refcount||b.rethrown||(b.destructor&&a.dynCall_vi(b.destructor,e),delete x.infos[e],___cxa_free_exception(e))}},clearRef:function(a){a&&(x.infos[a].refcount=0)}},v={varargs:0,get:function(a){v.varargs+=4;return D[v.varargs-4>>2]},getStr:function(){return r(v.get())},get64:function(){var a=v.get(),b=v.get();0<=a?l(0===b):l(-1===b);return a},getZero:function(){l(0===
v.get())}},ua={},Ga=1;ja=function(a){l(!Sa);var b=Z;Z=Z+a+15&-16;return b}(4);Ba=sa=f(Z);ta=Ba+Ea;Ca=f(ta);D[ja>>2]=Ca;Sa=!0;a.wasmTableSize=492;a.wasmMaxTableSize=492;a.asmGlobalArg={};a.asmLibraryArg={abort:M,assert:l,enlargeMemory:function(){var e=a.usingWasm?65536:16777216,b=2147483648-e;if(D[ja>>2]>b)return!1;var c=z;for(z=Math.max(z,16777216);z<D[ja>>2];)z=536870912>=z?fa(2*z,e):Math.min(fa((3*z+2147483648)/4,e),b);e=a.reallocBuffer(z);if(!e||e.byteLength!=z)return z=c,!1;a.buffer=C=e;A();return!0},
getTotalMemory:function(){return z},abortOnCannotGrowMemory:function(){M("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+z+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")},invoke_ii:function(e,b){try{return a.dynCall_ii(e,b)}catch(c){if("number"!==typeof c&&"longjmp"!==c)throw c;a.setThrew(1,
0)}},invoke_iii:function(e,b,c){try{return a.dynCall_iii(e,b,c)}catch(n){if("number"!==typeof n&&"longjmp"!==n)throw n;a.setThrew(1,0)}},invoke_iiii:function(e,b,c,d){try{return a.dynCall_iiii(e,b,c,d)}catch(aa){if("number"!==typeof aa&&"longjmp"!==aa)throw aa;a.setThrew(1,0)}},invoke_iiiiiii:function(e,b,c,d,f,g,h){try{return a.dynCall_iiiiiii(e,b,c,d,f,g,h)}catch(ca){if("number"!==typeof ca&&"longjmp"!==ca)throw ca;a.setThrew(1,0)}},invoke_v:function(e){try{a.dynCall_v(e)}catch(b){if("number"!==
typeof b&&"longjmp"!==b)throw b;a.setThrew(1,0)}},invoke_vi:function(e,b){try{a.dynCall_vi(e,b)}catch(c){if("number"!==typeof c&&"longjmp"!==c)throw c;a.setThrew(1,0)}},invoke_vii:function(e,b,c){try{a.dynCall_vii(e,b,c)}catch(n){if("number"!==typeof n&&"longjmp"!==n)throw n;a.setThrew(1,0)}},invoke_viii:function(e,b,c,d){try{a.dynCall_viii(e,b,c,d)}catch(aa){if("number"!==typeof aa&&"longjmp"!==aa)throw aa;a.setThrew(1,0)}},invoke_viiii:function(e,b,c,d,f){try{a.dynCall_viiii(e,b,c,d,f)}catch(wa){if("number"!==
typeof wa&&"longjmp"!==wa)throw wa;a.setThrew(1,0)}},invoke_viiiii:function(e,b,c,d,f,g){try{a.dynCall_viiiii(e,b,c,d,f,g)}catch(ba){if("number"!==typeof ba&&"longjmp"!==ba)throw ba;a.setThrew(1,0)}},invoke_viiiiii:function(e,b,c,d,f,g,h){try{a.dynCall_viiiiii(e,b,c,d,f,g,h)}catch(ca){if("number"!==typeof ca&&"longjmp"!==ca)throw ca;a.setThrew(1,0)}},__ZSt18uncaught_exceptionv:u,___cxa_allocate_exception:function(a){return Ja(a)},___cxa_begin_catch:function(a){var b=x.infos[a];b&&!b.caught&&(b.caught=
!0,u.uncaught_exception--);b&&(b.rethrown=!1);x.caught.push(a);x.addRef(x.deAdjust(a));return a},___cxa_find_matching_catch:la,___cxa_pure_virtual:function(){na=!0;throw"Pure virtual function called!";},___cxa_throw:function(a,b,c){x.infos[a]={ptr:a,adjusted:a,type:b,destructor:c,refcount:0,caught:!1,rethrown:!1};x.last=a;"uncaught_exception"in u?u.uncaught_exception++:u.uncaught_exception=1;throw a+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
},___gxx_personality_v0:function(){},___resumeException:function(a){x.last||(x.last=a);throw a+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";},___setErrNo:function(e){a.___errno_location&&(D[a.___errno_location()>>2]=e);return e},___syscall140:function(a,b){v.varargs=b;try{var c=v.getStreamFromFD();v.get();var e=v.get(),d=v.get(),f=v.get();FS.llseek(c,e,f);D[d>>2]=c.position;c.getdents&&
0===e&&0===f&&(c.getdents=null);return 0}catch(ba){return"undefined"!==typeof FS&&ba instanceof FS.ErrnoError||M(ba),-ba.errno}},___syscall146:X,___syscall6:function(a,b){v.varargs=b;try{var c=v.getStreamFromFD();FS.close(c);return 0}catch(n){return"undefined"!==typeof FS&&n instanceof FS.ErrnoError||M(n),-n.errno}},_abort:function(){a.abort()},_emscripten_memcpy_big:function(a,b,c){U.set(U.subarray(b,b+c),a);return a},_llvm_floor_f64:ob,_llvm_trap:function(){M("trap!")},_pthread_getspecific:function(a){return ua[a]||
0},_pthread_key_create:function(a,b){if(0==a)return 22;D[a>>2]=Ga;ua[Ga]=0;Ga++;return 0},_pthread_once:ma,_pthread_setspecific:function(a,b){if(!(a in ua))return 22;ua[a]=b;return 0},flush_NO_FILESYSTEM:function(){var e=a._fflush;e&&e(0);if(e=X.printChar){var b=X.buffers;b[1].length&&e(1,10);b[2].length&&e(2,10)}},DYNAMICTOP_PTR:ja,tempDoublePtr:qb,ABORT:na,STACKTOP:sa,STACK_MAX:ta};var Ua=a.asm(a.asmGlobalArg,a.asmLibraryArg,C);a.asm=Ua;a.___cxa_can_catch=function(){return a.asm.___cxa_can_catch.apply(null,
arguments)};a.___cxa_is_pointer_type=function(){return a.asm.___cxa_is_pointer_type.apply(null,arguments)};var Ya=a._emscripten_bind_AttributeOctahedronTransform_AttributeOctahedronTransform_0=function(){return a.asm._emscripten_bind_AttributeOctahedronTransform_AttributeOctahedronTransform_0.apply(null,arguments)},rb=a._emscripten_bind_AttributeOctahedronTransform_InitFromAttribute_1=function(){return a.asm._emscripten_bind_AttributeOctahedronTransform_InitFromAttribute_1.apply(null,arguments)},
sb=a._emscripten_bind_AttributeOctahedronTransform___destroy___0=function(){return a.asm._emscripten_bind_AttributeOctahedronTransform___destroy___0.apply(null,arguments)},tb=a._emscripten_bind_AttributeOctahedronTransform_quantization_bits_0=function(){return a.asm._emscripten_bind_AttributeOctahedronTransform_quantization_bits_0.apply(null,arguments)},ab=a._emscripten_bind_AttributeQuantizationTransform_AttributeQuantizationTransform_0=function(){return a.asm._emscripten_bind_AttributeQuantizationTransform_AttributeQuantizationTransform_0.apply(null,
arguments)},ub=a._emscripten_bind_AttributeQuantizationTransform_InitFromAttribute_1=function(){return a.asm._emscripten_bind_AttributeQuantizationTransform_InitFromAttribute_1.apply(null,arguments)},vb=a._emscripten_bind_AttributeQuantizationTransform___destroy___0=function(){return a.asm._emscripten_bind_AttributeQuantizationTransform___destroy___0.apply(null,arguments)},wb=a._emscripten_bind_AttributeQuantizationTransform_min_value_1=function(){return a.asm._emscripten_bind_AttributeQuantizationTransform_min_value_1.apply(null,
arguments)},xb=a._emscripten_bind_AttributeQuantizationTransform_quantization_bits_0=function(){return a.asm._emscripten_bind_AttributeQuantizationTransform_quantization_bits_0.apply(null,arguments)},yb=a._emscripten_bind_AttributeQuantizationTransform_range_0=function(){return a.asm._emscripten_bind_AttributeQuantizationTransform_range_0.apply(null,arguments)},$a=a._emscripten_bind_AttributeTransformData_AttributeTransformData_0=function(){return a.asm._emscripten_bind_AttributeTransformData_AttributeTransformData_0.apply(null,
arguments)},zb=a._emscripten_bind_AttributeTransformData___destroy___0=function(){return a.asm._emscripten_bind_AttributeTransformData___destroy___0.apply(null,arguments)},Ab=a._emscripten_bind_AttributeTransformData_transform_type_0=function(){return a.asm._emscripten_bind_AttributeTransformData_transform_type_0.apply(null,arguments)},db=a._emscripten_bind_DecoderBuffer_DecoderBuffer_0=function(){return a.asm._emscripten_bind_DecoderBuffer_DecoderBuffer_0.apply(null,arguments)},Bb=a._emscripten_bind_DecoderBuffer_Init_2=
function(){return a.asm._emscripten_bind_DecoderBuffer_Init_2.apply(null,arguments)},Cb=a._emscripten_bind_DecoderBuffer___destroy___0=function(){return a.asm._emscripten_bind_DecoderBuffer___destroy___0.apply(null,arguments)},Db=a._emscripten_bind_Decoder_DecodeBufferToMesh_2=function(){return a.asm._emscripten_bind_Decoder_DecodeBufferToMesh_2.apply(null,arguments)},Eb=a._emscripten_bind_Decoder_DecodeBufferToPointCloud_2=function(){return a.asm._emscripten_bind_Decoder_DecodeBufferToPointCloud_2.apply(null,
arguments)},eb=a._emscripten_bind_Decoder_Decoder_0=function(){return a.asm._emscripten_bind_Decoder_Decoder_0.apply(null,arguments)},Fb=a._emscripten_bind_Decoder_GetAllFacesFromMesh_2=function(){return a.asm._emscripten_bind_Decoder_GetAllFacesFromMesh_2.apply(null,arguments)},Gb=a._emscripten_bind_Decoder_GetAttributeByUniqueId_2=function(){return a.asm._emscripten_bind_Decoder_GetAttributeByUniqueId_2.apply(null,arguments)},Hb=a._emscripten_bind_Decoder_GetAttributeFloatForAllPoints_3=function(){return a.asm._emscripten_bind_Decoder_GetAttributeFloatForAllPoints_3.apply(null,
arguments)},Ib=a._emscripten_bind_Decoder_GetAttributeFloat_3=function(){return a.asm._emscripten_bind_Decoder_GetAttributeFloat_3.apply(null,arguments)},Jb=a._emscripten_bind_Decoder_GetAttributeIdByMetadataEntry_3=function(){return a.asm._emscripten_bind_Decoder_GetAttributeIdByMetadataEntry_3.apply(null,arguments)},Kb=a._emscripten_bind_Decoder_GetAttributeIdByName_2=function(){return a.asm._emscripten_bind_Decoder_GetAttributeIdByName_2.apply(null,arguments)},Lb=a._emscripten_bind_Decoder_GetAttributeId_2=
function(){return a.asm._emscripten_bind_Decoder_GetAttributeId_2.apply(null,arguments)},Mb=a._emscripten_bind_Decoder_GetAttributeInt32ForAllPoints_3=function(){return a.asm._emscripten_bind_Decoder_GetAttributeInt32ForAllPoints_3.apply(null,arguments)},Nb=a._emscripten_bind_Decoder_GetAttributeInt8ForAllPoints_3=function(){return a.asm._emscripten_bind_Decoder_GetAttributeInt8ForAllPoints_3.apply(null,arguments)},Ob=a._emscripten_bind_Decoder_GetAttributeIntForAllPoints_3=function(){return a.asm._emscripten_bind_Decoder_GetAttributeIntForAllPoints_3.apply(null,
arguments)},Pb=a._emscripten_bind_Decoder_GetAttributeMetadata_2=function(){return a.asm._emscripten_bind_Decoder_GetAttributeMetadata_2.apply(null,arguments)},Qb=a._emscripten_bind_Decoder_GetAttributeUInt32ForAllPoints_3=function(){return a.asm._emscripten_bind_Decoder_GetAttributeUInt32ForAllPoints_3.apply(null,arguments)},Rb=a._emscripten_bind_Decoder_GetAttributeUInt8ForAllPoints_3=function(){return a.asm._emscripten_bind_Decoder_GetAttributeUInt8ForAllPoints_3.apply(null,arguments)},Sb=a._emscripten_bind_Decoder_GetAttribute_2=
function(){return a.asm._emscripten_bind_Decoder_GetAttribute_2.apply(null,arguments)},Tb=a._emscripten_bind_Decoder_GetEncodedGeometryType_1=function(){return a.asm._emscripten_bind_Decoder_GetEncodedGeometryType_1.apply(null,arguments)},Ub=a._emscripten_bind_Decoder_GetFaceFromMesh_3=function(){return a.asm._emscripten_bind_Decoder_GetFaceFromMesh_3.apply(null,arguments)},Vb=a._emscripten_bind_Decoder_GetMetadata_1=function(){return a.asm._emscripten_bind_Decoder_GetMetadata_1.apply(null,arguments)},
Wb=a._emscripten_bind_Decoder_GetTriangleStripsFromMesh_2=function(){return a.asm._emscripten_bind_Decoder_GetTriangleStripsFromMesh_2.apply(null,arguments)},Xb=a._emscripten_bind_Decoder_SkipAttributeTransform_1=function(){return a.asm._emscripten_bind_Decoder_SkipAttributeTransform_1.apply(null,arguments)},Yb=a._emscripten_bind_Decoder___destroy___0=function(){return a.asm._emscripten_bind_Decoder___destroy___0.apply(null,arguments)},hb=a._emscripten_bind_Decrypter_Decrypter_0=function(){return a.asm._emscripten_bind_Decrypter_Decrypter_0.apply(null,
arguments)},Zb=a._emscripten_bind_Decrypter_GetAt_1=function(){return a.asm._emscripten_bind_Decrypter_GetAt_1.apply(null,arguments)},$b=a._emscripten_bind_Decrypter_Init_1=function(){return a.asm._emscripten_bind_Decrypter_Init_1.apply(null,arguments)},ac=a._emscripten_bind_Decrypter___destroy___0=function(){return a.asm._emscripten_bind_Decrypter___destroy___0.apply(null,arguments)},cb=a._emscripten_bind_GeometryAttribute_GeometryAttribute_0=function(){return a.asm._emscripten_bind_GeometryAttribute_GeometryAttribute_0.apply(null,
arguments)},bc=a._emscripten_bind_GeometryAttribute___destroy___0=function(){return a.asm._emscripten_bind_GeometryAttribute___destroy___0.apply(null,arguments)},cc=a._emscripten_bind_GizmoFloat32Array_GetValue_1=function(){return a.asm._emscripten_bind_GizmoFloat32Array_GetValue_1.apply(null,arguments)},jb=a._emscripten_bind_GizmoFloat32Array_GizmoFloat32Array_0=function(){return a.asm._emscripten_bind_GizmoFloat32Array_GizmoFloat32Array_0.apply(null,arguments)},dc=a._emscripten_bind_GizmoFloat32Array___destroy___0=
function(){return a.asm._emscripten_bind_GizmoFloat32Array___destroy___0.apply(null,arguments)},ec=a._emscripten_bind_GizmoFloat32Array_size_0=function(){return a.asm._emscripten_bind_GizmoFloat32Array_size_0.apply(null,arguments)},fc=a._emscripten_bind_GizmoInt32Array_GetValue_1=function(){return a.asm._emscripten_bind_GizmoInt32Array_GetValue_1.apply(null,arguments)},kb=a._emscripten_bind_GizmoInt32Array_GizmoInt32Array_0=function(){return a.asm._emscripten_bind_GizmoInt32Array_GizmoInt32Array_0.apply(null,
arguments)},gc=a._emscripten_bind_GizmoInt32Array___destroy___0=function(){return a.asm._emscripten_bind_GizmoInt32Array___destroy___0.apply(null,arguments)},hc=a._emscripten_bind_GizmoInt32Array_size_0=function(){return a.asm._emscripten_bind_GizmoInt32Array_size_0.apply(null,arguments)},ic=a._emscripten_bind_GizmoInt8Array_GetValue_1=function(){return a.asm._emscripten_bind_GizmoInt8Array_GetValue_1.apply(null,arguments)},ib=a._emscripten_bind_GizmoInt8Array_GizmoInt8Array_0=function(){return a.asm._emscripten_bind_GizmoInt8Array_GizmoInt8Array_0.apply(null,
arguments)},jc=a._emscripten_bind_GizmoInt8Array___destroy___0=function(){return a.asm._emscripten_bind_GizmoInt8Array___destroy___0.apply(null,arguments)},kc=a._emscripten_bind_GizmoInt8Array_size_0=function(){return a.asm._emscripten_bind_GizmoInt8Array_size_0.apply(null,arguments)},lc=a._emscripten_bind_GizmoUInt32Array_GetValue_1=function(){return a.asm._emscripten_bind_GizmoUInt32Array_GetValue_1.apply(null,arguments)},fb=a._emscripten_bind_GizmoUInt32Array_GizmoUInt32Array_0=function(){return a.asm._emscripten_bind_GizmoUInt32Array_GizmoUInt32Array_0.apply(null,
arguments)},mc=a._emscripten_bind_GizmoUInt32Array___destroy___0=function(){return a.asm._emscripten_bind_GizmoUInt32Array___destroy___0.apply(null,arguments)},nc=a._emscripten_bind_GizmoUInt32Array_size_0=function(){return a.asm._emscripten_bind_GizmoUInt32Array_size_0.apply(null,arguments)},oc=a._emscripten_bind_GizmoUInt8Array_GetValue_1=function(){return a.asm._emscripten_bind_GizmoUInt8Array_GetValue_1.apply(null,arguments)},Wa=a._emscripten_bind_GizmoUInt8Array_GizmoUInt8Array_0=function(){return a.asm._emscripten_bind_GizmoUInt8Array_GizmoUInt8Array_0.apply(null,
arguments)},pc=a._emscripten_bind_GizmoUInt8Array___destroy___0=function(){return a.asm._emscripten_bind_GizmoUInt8Array___destroy___0.apply(null,arguments)},qc=a._emscripten_bind_GizmoUInt8Array_size_0=function(){return a.asm._emscripten_bind_GizmoUInt8Array_size_0.apply(null,arguments)},gb=a._emscripten_bind_Mesh_Mesh_0=function(){return a.asm._emscripten_bind_Mesh_Mesh_0.apply(null,arguments)},rc=a._emscripten_bind_Mesh___destroy___0=function(){return a.asm._emscripten_bind_Mesh___destroy___0.apply(null,
arguments)},sc=a._emscripten_bind_Mesh_num_attributes_0=function(){return a.asm._emscripten_bind_Mesh_num_attributes_0.apply(null,arguments)},tc=a._emscripten_bind_Mesh_num_faces_0=function(){return a.asm._emscripten_bind_Mesh_num_faces_0.apply(null,arguments)},uc=a._emscripten_bind_Mesh_num_points_0=function(){return a.asm._emscripten_bind_Mesh_num_points_0.apply(null,arguments)},vc=a._emscripten_bind_MetadataQuerier_GetDoubleEntry_2=function(){return a.asm._emscripten_bind_MetadataQuerier_GetDoubleEntry_2.apply(null,
arguments)},wc=a._emscripten_bind_MetadataQuerier_GetEntryName_2=function(){return a.asm._emscripten_bind_MetadataQuerier_GetEntryName_2.apply(null,arguments)},xc=a._emscripten_bind_MetadataQuerier_GetIntEntry_2=function(){return a.asm._emscripten_bind_MetadataQuerier_GetIntEntry_2.apply(null,arguments)},yc=a._emscripten_bind_MetadataQuerier_GetStringEntry_2=function(){return a.asm._emscripten_bind_MetadataQuerier_GetStringEntry_2.apply(null,arguments)},zc=a._emscripten_bind_MetadataQuerier_HasDoubleEntry_2=
function(){return a.asm._emscripten_bind_MetadataQuerier_HasDoubleEntry_2.apply(null,arguments)},Ac=a._emscripten_bind_MetadataQuerier_HasEntry_2=function(){return a.asm._emscripten_bind_MetadataQuerier_HasEntry_2.apply(null,arguments)},Bc=a._emscripten_bind_MetadataQuerier_HasIntEntry_2=function(){return a.asm._emscripten_bind_MetadataQuerier_HasIntEntry_2.apply(null,arguments)},Cc=a._emscripten_bind_MetadataQuerier_HasStringEntry_2=function(){return a.asm._emscripten_bind_MetadataQuerier_HasStringEntry_2.apply(null,
arguments)},bb=a._emscripten_bind_MetadataQuerier_MetadataQuerier_0=function(){return a.asm._emscripten_bind_MetadataQuerier_MetadataQuerier_0.apply(null,arguments)},Dc=a._emscripten_bind_MetadataQuerier_NumEntries_1=function(){return a.asm._emscripten_bind_MetadataQuerier_NumEntries_1.apply(null,arguments)},Ec=a._emscripten_bind_MetadataQuerier___destroy___0=function(){return a.asm._emscripten_bind_MetadataQuerier___destroy___0.apply(null,arguments)},lb=a._emscripten_bind_Metadata_Metadata_0=function(){return a.asm._emscripten_bind_Metadata_Metadata_0.apply(null,
arguments)},Fc=a._emscripten_bind_Metadata___destroy___0=function(){return a.asm._emscripten_bind_Metadata___destroy___0.apply(null,arguments)},Gc=a._emscripten_bind_PointAttribute_GetAttributeTransformData_0=function(){return a.asm._emscripten_bind_PointAttribute_GetAttributeTransformData_0.apply(null,arguments)},Za=a._emscripten_bind_PointAttribute_PointAttribute_0=function(){return a.asm._emscripten_bind_PointAttribute_PointAttribute_0.apply(null,arguments)},Hc=a._emscripten_bind_PointAttribute___destroy___0=
function(){return a.asm._emscripten_bind_PointAttribute___destroy___0.apply(null,arguments)},Ic=a._emscripten_bind_PointAttribute_attribute_type_0=function(){return a.asm._emscripten_bind_PointAttribute_attribute_type_0.apply(null,arguments)},Jc=a._emscripten_bind_PointAttribute_byte_offset_0=function(){return a.asm._emscripten_bind_PointAttribute_byte_offset_0.apply(null,arguments)},Kc=a._emscripten_bind_PointAttribute_byte_stride_0=function(){return a.asm._emscripten_bind_PointAttribute_byte_stride_0.apply(null,
arguments)},Lc=a._emscripten_bind_PointAttribute_data_type_0=function(){return a.asm._emscripten_bind_PointAttribute_data_type_0.apply(null,arguments)},Mc=a._emscripten_bind_PointAttribute_normalized_0=function(){return a.asm._emscripten_bind_PointAttribute_normalized_0.apply(null,arguments)},Nc=a._emscripten_bind_PointAttribute_num_components_0=function(){return a.asm._emscripten_bind_PointAttribute_num_components_0.apply(null,arguments)},Oc=a._emscripten_bind_PointAttribute_size_0=function(){return a.asm._emscripten_bind_PointAttribute_size_0.apply(null,
arguments)},Pc=a._emscripten_bind_PointAttribute_unique_id_0=function(){return a.asm._emscripten_bind_PointAttribute_unique_id_0.apply(null,arguments)},Xa=a._emscripten_bind_PointCloud_PointCloud_0=function(){return a.asm._emscripten_bind_PointCloud_PointCloud_0.apply(null,arguments)},Qc=a._emscripten_bind_PointCloud___destroy___0=function(){return a.asm._emscripten_bind_PointCloud___destroy___0.apply(null,arguments)},Rc=a._emscripten_bind_PointCloud_num_attributes_0=function(){return a.asm._emscripten_bind_PointCloud_num_attributes_0.apply(null,
arguments)},Sc=a._emscripten_bind_PointCloud_num_points_0=function(){return a.asm._emscripten_bind_PointCloud_num_points_0.apply(null,arguments)},Tc=a._emscripten_bind_Status___destroy___0=function(){return a.asm._emscripten_bind_Status___destroy___0.apply(null,arguments)},Uc=a._emscripten_bind_Status_code_0=function(){return a.asm._emscripten_bind_Status_code_0.apply(null,arguments)},Vc=a._emscripten_bind_Status_error_msg_0=function(){return a.asm._emscripten_bind_Status_error_msg_0.apply(null,arguments)},
Wc=a._emscripten_bind_Status_ok_0=function(){return a.asm._emscripten_bind_Status_ok_0.apply(null,arguments)},Xc=a._emscripten_bind_VoidPtr___destroy___0=function(){return a.asm._emscripten_bind_VoidPtr___destroy___0.apply(null,arguments)},Yc=a._emscripten_enum_gizmo_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM=function(){return a.asm._emscripten_enum_gizmo_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM.apply(null,arguments)},Zc=a._emscripten_enum_gizmo_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM=
function(){return a.asm._emscripten_enum_gizmo_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM.apply(null,arguments)},$c=a._emscripten_enum_gizmo_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM=function(){return a.asm._emscripten_enum_gizmo_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM.apply(null,arguments)},ad=a._emscripten_enum_gizmo_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM=function(){return a.asm._emscripten_enum_gizmo_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM.apply(null,
arguments)},bd=a._emscripten_enum_gizmo_EncodedGeometryType_INVALID_GEOMETRY_TYPE=function(){return a.asm._emscripten_enum_gizmo_EncodedGeometryType_INVALID_GEOMETRY_TYPE.apply(null,arguments)},cd=a._emscripten_enum_gizmo_EncodedGeometryType_POINT_CLOUD=function(){return a.asm._emscripten_enum_gizmo_EncodedGeometryType_POINT_CLOUD.apply(null,arguments)},dd=a._emscripten_enum_gizmo_EncodedGeometryType_TRIANGULAR_MESH=function(){return a.asm._emscripten_enum_gizmo_EncodedGeometryType_TRIANGULAR_MESH.apply(null,
arguments)},ed=a._emscripten_enum_gizmo_GeometryAttribute_Type_BLEND_INDEX=function(){return a.asm._emscripten_enum_gizmo_GeometryAttribute_Type_BLEND_INDEX.apply(null,arguments)},fd=a._emscripten_enum_gizmo_GeometryAttribute_Type_BLEND_WEIGHT=function(){return a.asm._emscripten_enum_gizmo_GeometryAttribute_Type_BLEND_WEIGHT.apply(null,arguments)},gd=a._emscripten_enum_gizmo_GeometryAttribute_Type_COLOR=function(){return a.asm._emscripten_enum_gizmo_GeometryAttribute_Type_COLOR.apply(null,arguments)},
hd=a._emscripten_enum_gizmo_GeometryAttribute_Type_GENERIC=function(){return a.asm._emscripten_enum_gizmo_GeometryAttribute_Type_GENERIC.apply(null,arguments)},id=a._emscripten_enum_gizmo_GeometryAttribute_Type_INVALID=function(){return a.asm._emscripten_enum_gizmo_GeometryAttribute_Type_INVALID.apply(null,arguments)},jd=a._emscripten_enum_gizmo_GeometryAttribute_Type_NORMAL=function(){return a.asm._emscripten_enum_gizmo_GeometryAttribute_Type_NORMAL.apply(null,arguments)},kd=a._emscripten_enum_gizmo_GeometryAttribute_Type_POSITION=
function(){return a.asm._emscripten_enum_gizmo_GeometryAttribute_Type_POSITION.apply(null,arguments)},ld=a._emscripten_enum_gizmo_GeometryAttribute_Type_TANGENT0=function(){return a.asm._emscripten_enum_gizmo_GeometryAttribute_Type_TANGENT0.apply(null,arguments)},md=a._emscripten_enum_gizmo_GeometryAttribute_Type_TANGENT1=function(){return a.asm._emscripten_enum_gizmo_GeometryAttribute_Type_TANGENT1.apply(null,arguments)},nd=a._emscripten_enum_gizmo_GeometryAttribute_Type_TEX_COORD=function(){return a.asm._emscripten_enum_gizmo_GeometryAttribute_Type_TEX_COORD.apply(null,
arguments)},od=a._emscripten_enum_gizmo_GeometryAttribute_Type_TEX_COORD1=function(){return a.asm._emscripten_enum_gizmo_GeometryAttribute_Type_TEX_COORD1.apply(null,arguments)},pd=a._emscripten_enum_gizmo_StatusCode_ERROR=function(){return a.asm._emscripten_enum_gizmo_StatusCode_ERROR.apply(null,arguments)},qd=a._emscripten_enum_gizmo_StatusCode_INVALID_PARAMETER=function(){return a.asm._emscripten_enum_gizmo_StatusCode_INVALID_PARAMETER.apply(null,arguments)},rd=a._emscripten_enum_gizmo_StatusCode_IO_ERROR=
function(){return a.asm._emscripten_enum_gizmo_StatusCode_IO_ERROR.apply(null,arguments)},sd=a._emscripten_enum_gizmo_StatusCode_OK=function(){return a.asm._emscripten_enum_gizmo_StatusCode_OK.apply(null,arguments)},td=a._emscripten_enum_gizmo_StatusCode_UNKNOWN_VERSION=function(){return a.asm._emscripten_enum_gizmo_StatusCode_UNKNOWN_VERSION.apply(null,arguments)},ud=a._emscripten_enum_gizmo_StatusCode_UNSUPPORTED_VERSION=function(){return a.asm._emscripten_enum_gizmo_StatusCode_UNSUPPORTED_VERSION.apply(null,
arguments)},mb=a._emscripten_replace_memory=function(){return a.asm._emscripten_replace_memory.apply(null,arguments)};a._free=function(){return a.asm._free.apply(null,arguments)};a._llvm_bswap_i32=function(){return a.asm._llvm_bswap_i32.apply(null,arguments)};var Ja=a._malloc=function(){return a.asm._malloc.apply(null,arguments)};a._memcpy=function(){return a.asm._memcpy.apply(null,arguments)};a._memmove=function(){return a.asm._memmove.apply(null,arguments)};a._memset=function(){return a.asm._memset.apply(null,
arguments)};a._sbrk=function(){return a.asm._sbrk.apply(null,arguments)};a.establishStackSpace=function(){return a.asm.establishStackSpace.apply(null,arguments)};a.getTempRet0=function(){return a.asm.getTempRet0.apply(null,arguments)};a.runPostSets=function(){return a.asm.runPostSets.apply(null,arguments)};var ra=a.setTempRet0=function(){return a.asm.setTempRet0.apply(null,arguments)};a.setThrew=function(){return a.asm.setThrew.apply(null,arguments)};a.stackAlloc=function(){return a.asm.stackAlloc.apply(null,
arguments)};a.stackRestore=function(){return a.asm.stackRestore.apply(null,arguments)};a.stackSave=function(){return a.asm.stackSave.apply(null,arguments)};a.dynCall_ii=function(){return a.asm.dynCall_ii.apply(null,arguments)};a.dynCall_iii=function(){return a.asm.dynCall_iii.apply(null,arguments)};a.dynCall_iiii=function(){return a.asm.dynCall_iiii.apply(null,arguments)};a.dynCall_iiiiiii=function(){return a.asm.dynCall_iiiiiii.apply(null,arguments)};a.dynCall_v=function(){return a.asm.dynCall_v.apply(null,
arguments)};a.dynCall_vi=function(){return a.asm.dynCall_vi.apply(null,arguments)};a.dynCall_vii=function(){return a.asm.dynCall_vii.apply(null,arguments)};a.dynCall_viii=function(){return a.asm.dynCall_viii.apply(null,arguments)};a.dynCall_viiii=function(){return a.asm.dynCall_viiii.apply(null,arguments)};a.dynCall_viiiii=function(){return a.asm.dynCall_viiiii.apply(null,arguments)};a.dynCall_viiiiii=function(){return a.asm.dynCall_viiiiii.apply(null,arguments)};a.asm=Ua;a.then=function(e){if(a.calledRun)e(a);
else{var b=a.onRuntimeInitialized;a.onRuntimeInitialized=function(){b&&b();e(a)}}return a};T.prototype=Error();T.prototype.constructor=T;qa=function b(){a.calledRun||va();a.calledRun||(qa=b)};a.run=va;a.exit=function(b,c){if(!c||!a.noExitRuntime||0!==b){if(!a.noExitRuntime&&(na=!0,sa=void 0,ka(nb),a.onExit))a.onExit(b);pa&&process.exit(b);a.quit(b,new T(b))}};a.abort=M;if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();a.noExitRuntime=!0;va();
p.prototype=Object.create(p.prototype);p.prototype.constructor=p;p.prototype.__class__=p;p.__cache__={};a.WrapperObject=p;a.getCache=t;a.wrapPointer=Q;a.castObject=function(a,c){return Q(a.ptr,c)};a.NULL=Q(0);a.destroy=function(a){if(!a.__destroy__)throw"Error: Cannot destroy object. (Did you create it yourself?)";a.__destroy__();delete t(a.__class__)[a.ptr]};a.compare=function(a,c){return a.ptr===c.ptr};a.getPointer=function(a){return a.ptr};a.getClass=function(a){return a.__class__};var k={buffer:0,
size:0,pos:0,temps:[],needed:0,prepare:function(){if(k.needed){for(var b=0;b<k.temps.length;b++)a._free(k.temps[b]);k.temps.length=0;a._free(k.buffer);k.buffer=0;k.size+=k.needed;k.needed=0}k.buffer||(k.size+=128,k.buffer=a._malloc(k.size),l(k.buffer));k.pos=0},alloc:function(b,c){l(k.buffer);b=b.length*c.BYTES_PER_ELEMENT;b=b+7&-8;k.pos+b>=k.size?(l(0<b),k.needed+=b,c=a._malloc(b),k.temps.push(c)):(c=k.buffer+k.pos,k.pos+=b);return c},copy:function(a,c,d){switch(c.BYTES_PER_ELEMENT){case 2:d>>=1;
break;case 4:d>>=2;break;case 8:d>>=3}for(var b=0;b<a.length;b++)c[d+b]=a[b]}};y.prototype=Object.create(p.prototype);y.prototype.constructor=y;y.prototype.__class__=y;y.__cache__={};a.Status=y;y.prototype.code=y.prototype.code=function(){return Uc(this.ptr)};y.prototype.ok=y.prototype.ok=function(){return!!Wc(this.ptr)};y.prototype.error_msg=y.prototype.error_msg=function(){return r(Vc(this.ptr))};y.prototype.__destroy__=y.prototype.__destroy__=function(){Tc(this.ptr)};E.prototype=Object.create(p.prototype);
E.prototype.constructor=E;E.prototype.__class__=E;E.__cache__={};a.GizmoUInt8Array=E;E.prototype.GetValue=E.prototype.GetValue=function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);return oc(b,a)};E.prototype.size=E.prototype.size=function(){return qc(this.ptr)};E.prototype.__destroy__=E.prototype.__destroy__=function(){pc(this.ptr)};F.prototype=Object.create(p.prototype);F.prototype.constructor=F;F.prototype.__class__=F;F.__cache__={};a.PointCloud=F;F.prototype.num_attributes=F.prototype.num_attributes=
function(){return Rc(this.ptr)};F.prototype.num_points=F.prototype.num_points=function(){return Sc(this.ptr)};F.prototype.__destroy__=F.prototype.__destroy__=function(){Qc(this.ptr)};G.prototype=Object.create(p.prototype);G.prototype.constructor=G;G.prototype.__class__=G;G.__cache__={};a.AttributeOctahedronTransform=G;G.prototype.InitFromAttribute=G.prototype.InitFromAttribute=function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);return!!rb(b,a)};G.prototype.quantization_bits=G.prototype.quantization_bits=
function(){return tb(this.ptr)};G.prototype.__destroy__=G.prototype.__destroy__=function(){sb(this.ptr)};m.prototype=Object.create(p.prototype);m.prototype.constructor=m;m.prototype.__class__=m;m.__cache__={};a.PointAttribute=m;m.prototype.size=m.prototype.size=function(){return Oc(this.ptr)};m.prototype.GetAttributeTransformData=m.prototype.GetAttributeTransformData=function(){return Q(Gc(this.ptr),N)};m.prototype.attribute_type=m.prototype.attribute_type=function(){return Ic(this.ptr)};m.prototype.data_type=
m.prototype.data_type=function(){return Lc(this.ptr)};m.prototype.num_components=m.prototype.num_components=function(){return Nc(this.ptr)};m.prototype.normalized=m.prototype.normalized=function(){return!!Mc(this.ptr)};m.prototype.byte_stride=m.prototype.byte_stride=function(){return Kc(this.ptr)};m.prototype.byte_offset=m.prototype.byte_offset=function(){return Jc(this.ptr)};m.prototype.unique_id=m.prototype.unique_id=function(){return Pc(this.ptr)};m.prototype.__destroy__=m.prototype.__destroy__=
function(){Hc(this.ptr)};N.prototype=Object.create(p.prototype);N.prototype.constructor=N;N.prototype.__class__=N;N.__cache__={};a.AttributeTransformData=N;N.prototype.transform_type=N.prototype.transform_type=function(){return Ab(this.ptr)};N.prototype.__destroy__=N.prototype.__destroy__=function(){zb(this.ptr)};w.prototype=Object.create(p.prototype);w.prototype.constructor=w;w.prototype.__class__=w;w.__cache__={};a.AttributeQuantizationTransform=w;w.prototype.InitFromAttribute=w.prototype.InitFromAttribute=
function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);return!!ub(b,a)};w.prototype.quantization_bits=w.prototype.quantization_bits=function(){return xb(this.ptr)};w.prototype.min_value=w.prototype.min_value=function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);return wb(b,a)};w.prototype.range=w.prototype.range=function(){return yb(this.ptr)};w.prototype.__destroy__=w.prototype.__destroy__=function(){vb(this.ptr)};q.prototype=Object.create(p.prototype);q.prototype.constructor=q;q.prototype.__class__=
q;q.__cache__={};a.MetadataQuerier=q;q.prototype.HasEntry=q.prototype.HasEntry=function(a,c){var b=this.ptr;k.prepare();a&&"object"===typeof a&&(a=a.ptr);c=c&&"object"===typeof c?c.ptr:R(c);return!!Ac(b,a,c)};q.prototype.HasIntEntry=q.prototype.HasIntEntry=function(a,c){var b=this.ptr;k.prepare();a&&"object"===typeof a&&(a=a.ptr);c=c&&"object"===typeof c?c.ptr:R(c);return!!Bc(b,a,c)};q.prototype.GetIntEntry=q.prototype.GetIntEntry=function(a,c){var b=this.ptr;k.prepare();a&&"object"===typeof a&&(a=
a.ptr);c=c&&"object"===typeof c?c.ptr:R(c);return xc(b,a,c)};q.prototype.HasDoubleEntry=q.prototype.HasDoubleEntry=function(a,c){var b=this.ptr;k.prepare();a&&"object"===typeof a&&(a=a.ptr);c=c&&"object"===typeof c?c.ptr:R(c);return!!zc(b,a,c)};q.prototype.GetDoubleEntry=q.prototype.GetDoubleEntry=function(a,c){var b=this.ptr;k.prepare();a&&"object"===typeof a&&(a=a.ptr);c=c&&"object"===typeof c?c.ptr:R(c);return vc(b,a,c)};q.prototype.HasStringEntry=q.prototype.HasStringEntry=function(a,c){var b=
this.ptr;k.prepare();a&&"object"===typeof a&&(a=a.ptr);c=c&&"object"===typeof c?c.ptr:R(c);return!!Cc(b,a,c)};q.prototype.GetStringEntry=q.prototype.GetStringEntry=function(a,c){var b=this.ptr;k.prepare();a&&"object"===typeof a&&(a=a.ptr);c=c&&"object"===typeof c?c.ptr:R(c);return r(yc(b,a,c))};q.prototype.NumEntries=q.prototype.NumEntries=function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);return Dc(b,a)};q.prototype.GetEntryName=q.prototype.GetEntryName=function(a,c){var b=this.ptr;a&&
"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);return r(wc(b,a,c))};q.prototype.__destroy__=q.prototype.__destroy__=function(){Ec(this.ptr)};S.prototype=Object.create(p.prototype);S.prototype.constructor=S;S.prototype.__class__=S;S.__cache__={};a.GeometryAttribute=S;S.prototype.__destroy__=S.prototype.__destroy__=function(){bc(this.ptr)};O.prototype=Object.create(p.prototype);O.prototype.constructor=O;O.prototype.__class__=O;O.__cache__={};a.DecoderBuffer=O;O.prototype.Init=O.prototype.Init=
function(a,c){var b=this.ptr;k.prepare();"object"==typeof a&&(a=Pa(a));c&&"object"===typeof c&&(c=c.ptr);Bb(b,a,c)};O.prototype.__destroy__=O.prototype.__destroy__=function(){Cb(this.ptr)};h.prototype=Object.create(p.prototype);h.prototype.constructor=h;h.prototype.__class__=h;h.__cache__={};a.Decoder=h;h.prototype.GetEncodedGeometryType=h.prototype.GetEncodedGeometryType=function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);return Tb(b,a)};h.prototype.DecodeBufferToPointCloud=h.prototype.DecodeBufferToPointCloud=
function(a,c){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);return Q(Eb(b,a,c),y)};h.prototype.DecodeBufferToMesh=h.prototype.DecodeBufferToMesh=function(a,c){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);return Q(Db(b,a,c),y)};h.prototype.GetAttributeId=h.prototype.GetAttributeId=function(a,c){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);return Lb(b,a,c)};h.prototype.GetAttributeIdByName=
h.prototype.GetAttributeIdByName=function(a,c){var b=this.ptr;k.prepare();a&&"object"===typeof a&&(a=a.ptr);c=c&&"object"===typeof c?c.ptr:R(c);return Kb(b,a,c)};h.prototype.GetAttributeIdByMetadataEntry=h.prototype.GetAttributeIdByMetadataEntry=function(a,c,d){var b=this.ptr;k.prepare();a&&"object"===typeof a&&(a=a.ptr);c=c&&"object"===typeof c?c.ptr:R(c);d=d&&"object"===typeof d?d.ptr:R(d);return Jb(b,a,c,d)};h.prototype.GetAttribute=h.prototype.GetAttribute=function(a,c){var b=this.ptr;a&&"object"===
typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);return Q(Sb(b,a,c),m)};h.prototype.GetAttributeByUniqueId=h.prototype.GetAttributeByUniqueId=function(a,c){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);return Q(Gb(b,a,c),m)};h.prototype.GetMetadata=h.prototype.GetMetadata=function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);return Q(Vb(b,a),P)};h.prototype.GetAttributeMetadata=h.prototype.GetAttributeMetadata=function(a,c){var b=this.ptr;a&&"object"===
typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);return Q(Pb(b,a,c),P)};h.prototype.GetFaceFromMesh=h.prototype.GetFaceFromMesh=function(a,c,d){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);d&&"object"===typeof d&&(d=d.ptr);return!!Ub(b,a,c,d)};h.prototype.GetAllFacesFromMesh=h.prototype.GetAllFacesFromMesh=function(a,c){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);return!!Fb(b,a,c)};h.prototype.GetTriangleStripsFromMesh=
h.prototype.GetTriangleStripsFromMesh=function(a,c){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);return Wb(b,a,c)};h.prototype.GetAttributeFloat=h.prototype.GetAttributeFloat=function(a,c,d){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);d&&"object"===typeof d&&(d=d.ptr);return!!Ib(b,a,c,d)};h.prototype.GetAttributeFloatForAllPoints=h.prototype.GetAttributeFloatForAllPoints=function(a,c,d){var b=this.ptr;a&&"object"===typeof a&&
(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);d&&"object"===typeof d&&(d=d.ptr);return!!Hb(b,a,c,d)};h.prototype.GetAttributeIntForAllPoints=h.prototype.GetAttributeIntForAllPoints=function(a,c,d){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);d&&"object"===typeof d&&(d=d.ptr);return!!Ob(b,a,c,d)};h.prototype.GetAttributeInt8ForAllPoints=h.prototype.GetAttributeInt8ForAllPoints=function(a,c,d){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&
(c=c.ptr);d&&"object"===typeof d&&(d=d.ptr);return!!Nb(b,a,c,d)};h.prototype.GetAttributeUInt8ForAllPoints=h.prototype.GetAttributeUInt8ForAllPoints=function(a,c,d){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);d&&"object"===typeof d&&(d=d.ptr);return!!Rb(b,a,c,d)};h.prototype.GetAttributeInt32ForAllPoints=h.prototype.GetAttributeInt32ForAllPoints=function(a,c,d){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);d&&"object"===typeof d&&
(d=d.ptr);return!!Mb(b,a,c,d)};h.prototype.GetAttributeUInt32ForAllPoints=h.prototype.GetAttributeUInt32ForAllPoints=function(a,c,d){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);c&&"object"===typeof c&&(c=c.ptr);d&&"object"===typeof d&&(d=d.ptr);return!!Qb(b,a,c,d)};h.prototype.SkipAttributeTransform=h.prototype.SkipAttributeTransform=function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);Xb(b,a)};h.prototype.__destroy__=h.prototype.__destroy__=function(){Yb(this.ptr)};H.prototype=Object.create(p.prototype);
H.prototype.constructor=H;H.prototype.__class__=H;H.__cache__={};a.GizmoUInt32Array=H;H.prototype.GetValue=H.prototype.GetValue=function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);return lc(b,a)};H.prototype.size=H.prototype.size=function(){return nc(this.ptr)};H.prototype.__destroy__=H.prototype.__destroy__=function(){mc(this.ptr)};B.prototype=Object.create(p.prototype);B.prototype.constructor=B;B.prototype.__class__=B;B.__cache__={};a.Mesh=B;B.prototype.num_faces=B.prototype.num_faces=
function(){return tc(this.ptr)};B.prototype.num_attributes=B.prototype.num_attributes=function(){return sc(this.ptr)};B.prototype.num_points=B.prototype.num_points=function(){return uc(this.ptr)};B.prototype.__destroy__=B.prototype.__destroy__=function(){rc(this.ptr)};I.prototype=Object.create(p.prototype);I.prototype.constructor=I;I.prototype.__class__=I;I.__cache__={};a.Decrypter=I;I.prototype.Init=I.prototype.Init=function(a){var b=this.ptr;k.prepare();"object"==typeof a&&(a=Pa(a));$b(b,a)};I.prototype.GetAt=
I.prototype.GetAt=function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);return Zb(b,a)};I.prototype.__destroy__=I.prototype.__destroy__=function(){ac(this.ptr)};V.prototype=Object.create(p.prototype);V.prototype.constructor=V;V.prototype.__class__=V;V.__cache__={};a.VoidPtr=V;V.prototype.__destroy__=V.prototype.__destroy__=function(){Xc(this.ptr)};J.prototype=Object.create(p.prototype);J.prototype.constructor=J;J.prototype.__class__=J;J.__cache__={};a.GizmoInt8Array=J;J.prototype.GetValue=
J.prototype.GetValue=function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);return ic(b,a)};J.prototype.size=J.prototype.size=function(){return kc(this.ptr)};J.prototype.__destroy__=J.prototype.__destroy__=function(){jc(this.ptr)};K.prototype=Object.create(p.prototype);K.prototype.constructor=K;K.prototype.__class__=K;K.__cache__={};a.GizmoFloat32Array=K;K.prototype.GetValue=K.prototype.GetValue=function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);return cc(b,a)};K.prototype.size=K.prototype.size=
function(){return ec(this.ptr)};K.prototype.__destroy__=K.prototype.__destroy__=function(){dc(this.ptr)};L.prototype=Object.create(p.prototype);L.prototype.constructor=L;L.prototype.__class__=L;L.__cache__={};a.GizmoInt32Array=L;L.prototype.GetValue=L.prototype.GetValue=function(a){var b=this.ptr;a&&"object"===typeof a&&(a=a.ptr);return fc(b,a)};L.prototype.size=L.prototype.size=function(){return hc(this.ptr)};L.prototype.__destroy__=L.prototype.__destroy__=function(){gc(this.ptr)};P.prototype=Object.create(p.prototype);
P.prototype.constructor=P;P.prototype.__class__=P;P.__cache__={};a.Metadata=P;P.prototype.__destroy__=P.prototype.__destroy__=function(){Fc(this.ptr)};(function(){function b(){a.OK=sd();a.ERROR=pd();a.IO_ERROR=rd();a.INVALID_PARAMETER=qd();a.UNSUPPORTED_VERSION=ud();a.UNKNOWN_VERSION=td();a.ATTRIBUTE_INVALID_TRANSFORM=Yc();a.ATTRIBUTE_NO_TRANSFORM=Zc();a.ATTRIBUTE_QUANTIZATION_TRANSFORM=ad();a.ATTRIBUTE_OCTAHEDRON_TRANSFORM=$c();a.INVALID=id();a.POSITION=kd();a.NORMAL=jd();a.COLOR=gd();a.TEX_COORD=
nd();a.TEX_COORD1=od();a.BLEND_INDEX=ed();a.BLEND_WEIGHT=fd();a.TANGENT0=ld();a.TANGENT1=md();a.GENERIC=hd();a.INVALID_GEOMETRY_TYPE=bd();a.POINT_CLOUD=cd();a.TRIANGULAR_MESH=dd()}a.calledRun?b():Ma.unshift(b)})();if("function"===typeof a.onModuleParsed)a.onModuleParsed();return d};
 true?module.exports=GizmoDecoderModule:undefined;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(102), __webpack_require__(563)))

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(563)))

/***/ })

}]);