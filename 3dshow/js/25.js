(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i,r,o,s,a,h=n(5),c=n(7),u=n(3);function l(t,e,n){this.x=t||0,this.y=e||0,this.z=n||0}l.prototype={constructor:l,isVector3:!0,set:function(t,e,n){return this.x=t,this.y=e,this.z=n,this},setScalar:function(t){return this.x=t,this.y=t,this.z=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setZ:function(t){return this.z=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},add:function(t,e){return void 0!==e?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)},addScalar:function(t){return this.x+=t,this.y+=t,this.z+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this},sub:function(t,e){return void 0!==e?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)},subScalar:function(t){return this.x-=t,this.y-=t,this.z-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this},multiply:function(t,e){return void 0!==e?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)},multiplyScalar:function(t){return isFinite(t)?(this.x*=t,this.y*=t,this.z*=t):(this.x=0,this.y=0,this.z=0),this},multiplyVectors:function(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this},applyEuler:function(t){return!1===(t&&t.isEuler)&&console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),void 0===a&&(a=new u.a),this.applyQuaternion(a.setFromEuler(t))},applyAxisAngle:function(){var t;return function(e,n){return void 0===t&&(t=new u.a),this.applyQuaternion(t.setFromAxisAngle(e,n))}}(),applyMatrix3:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this},applyMatrix4:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12],this.y=r[1]*e+r[5]*n+r[9]*i+r[13],this.z=r[2]*e+r[6]*n+r[10]*i+r[14],this},applyProjection:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this},applyQuaternion:function(t){var e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,s=t.z,a=t.w,h=a*e+o*i-s*n,c=a*n+s*e-r*i,u=a*i+r*n-o*e,l=-r*e-o*n-s*i;return this.x=h*a+l*-r+c*-s-u*-o,this.y=c*a+l*-o+u*-r-h*-s,this.z=u*a+l*-s+h*-o-c*-r,this},project:function(t){return void 0===s&&(s=new c.a),s.multiplyMatrices(t.projectionMatrix,s.getInverse(t.matrixWorld)),this.applyProjection(s)},unproject:function(){var t;return function(e){return void 0===t&&(t=new c.a),t.multiplyMatrices(e.matrixWorld,t.getInverse(e.projectionMatrix)),this.applyProjection(t)}}(),transformDirection:function(t){var e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()},divide:function(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this},divideScalar:function(t){return this.multiplyScalar(1/t)},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this},clampScalar:function(t,e){return void 0===r&&(r=new l,o=new l),r.set(t,t,t),o.set(e,e,e),this.clamp(r,o)},clampLength:function(t,e){var n=this.length();return this.multiplyScalar(Math.max(t,Math.min(e,n))/n)},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(t){return this.multiplyScalar(t/this.length())},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this},lerpVectors:function(t,e,n){return this.subVectors(e,t).multiplyScalar(n).add(t)},cross:function(t,e){if(void 0!==e)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e);var n=this.x,i=this.y,r=this.z;return this.x=i*t.z-r*t.y,this.y=r*t.x-n*t.z,this.z=n*t.y-i*t.x,this},crossVectors:function(t,e){var n=t.x,i=t.y,r=t.z,o=e.x,s=e.y,a=e.z;return this.x=i*a-r*s,this.y=r*o-n*a,this.z=n*s-i*o,this},projectOnVector:function(t){var e=t.dot(this)/t.lengthSq();return this.copy(t).multiplyScalar(e)},projectOnPlane:function(t){return void 0===i&&(i=new l),i.copy(this).projectOnVector(t),this.sub(i)},reflect:function(){var t;return function(e){return void 0===t&&(t=new l),this.sub(t.copy(e).multiplyScalar(2*this.dot(e)))}}(),angleTo:function(t){var e=this.dot(t)/Math.sqrt(this.lengthSq()*t.lengthSq());return Math.acos(h.a.clamp(e,-1,1))},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i},distanceToManhattan:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)},setFromSpherical:function(t){var e=Math.sin(t.phi)*t.radius;return this.x=e*Math.sin(t.theta),this.y=Math.cos(t.phi)*t.radius,this.z=e*Math.cos(t.theta),this},setFromMatrixPosition:function(t){return this.setFromMatrixColumn(t,3)},setFromMatrixScale:function(t){var e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this},setFromMatrixColumn:function(t,e){if("number"==typeof t){console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");var n=t;t=e,e=n}return this.fromArray(t.elements,4*e)},equals:function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},fromArray:function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this.z=t[e+2],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t},fromAttribute:function(t,e,n){return void 0===n&&(n=0),e=e*t.itemSize+n,this.x=t.array[e],this.y=t.array[e+1],this.z=t.array[e+2],this}}},17:function(t,e,n){"use strict";function i(t,e){this.x=t||0,this.y=e||0}var r,o;n.d(e,"a",function(){return i}),i.prototype={constructor:i,isVector2:!0,get width(){return this.x},set width(t){this.x=t},get height(){return this.y},set height(t){this.y=t},set:function(t,e){return this.x=t,this.y=e,this},setScalar:function(t){return this.x=t,this.y=t,this},setX:function(t){return this.x=t,this},setY:function(t){return this.y=t,this},setComponent:function(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}},getComponent:function(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(t){return this.x=t.x,this.y=t.y,this},add:function(t,e){return void 0!==e?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)},addScalar:function(t){return this.x+=t,this.y+=t,this},addVectors:function(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this},addScaledVector:function(t,e){return this.x+=t.x*e,this.y+=t.y*e,this},sub:function(t,e){return void 0!==e?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)},subScalar:function(t){return this.x-=t,this.y-=t,this},subVectors:function(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this},multiply:function(t){return this.x*=t.x,this.y*=t.y,this},multiplyScalar:function(t){return isFinite(t)?(this.x*=t,this.y*=t):(this.x=0,this.y=0),this},divide:function(t){return this.x/=t.x,this.y/=t.y,this},divideScalar:function(t){return this.multiplyScalar(1/t)},min:function(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this},max:function(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this},clamp:function(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this},clampScalar:function(t,e){return void 0===r&&(r=new i,o=new i),r.set(t,t),o.set(e,e),this.clamp(r,o)},clampLength:function(t,e){var n=this.length();return this.multiplyScalar(Math.max(t,Math.min(e,n))/n)},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(t){return this.x*t.x+this.y*t.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},angle:function(){var t=Math.atan2(this.y,this.x);return t<0&&(t+=2*Math.PI),t},distanceTo:function(t){return Math.sqrt(this.distanceToSquared(t))},distanceToSquared:function(t){var e=this.x-t.x,n=this.y-t.y;return e*e+n*n},distanceToManhattan:function(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)},setLength:function(t){return this.multiplyScalar(t/this.length())},lerp:function(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this},lerpVectors:function(t,e,n){return this.subVectors(e,t).multiplyScalar(n).add(t)},equals:function(t){return t.x===this.x&&t.y===this.y},fromArray:function(t,e){return void 0===e&&(e=0),this.x=t[e],this.y=t[e+1],this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this.x,t[e+1]=this.y,t},fromAttribute:function(t,e,n){return void 0===n&&(n=0),e=e*t.itemSize+n,this.x=t.array[e],this.y=t.array[e+1],this},rotateAround:function(t,e){var n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}}},206:function(t,e){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var i=t.__flags||(t.__flags=Object.create(null));if(3!==arguments.length)return i[e];i[e]=n}},207:function(t,e,n){t.exports=n(223)},221:function(t,e){
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var i=t.__flags||(t.__flags=Object.create(null));for(var r in e.__flags||(e.__flags=Object.create(null)),n=3!==arguments.length||n,i)(n||"object"!==r&&"ssfi"!==r&&"lockSsfi"!==r&&"message"!=r)&&(e.__flags[r]=i[r])}},222:function(t,e){t.exports={includeStack:!1,showDiff:!0,truncateThreshold:40,useProxy:!0,proxyExcludedKeys:["then","inspect","toJSON"]}},223:function(t,e,n){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var i=[];
/*!
 * Chai version
 */e.version="4.1.2",
/*!
 * Assertion Error
 */
e.AssertionError=n(316);
/*!
 * Utils for plugins (not exported)
 */
var r=n(391);e.use=function(t){return~i.indexOf(t)||(t(e,r),i.push(t)),e},
/*!
 * Utility Functions
 */
e.util=r;
/*!
 * Configuration
 */
var o=n(222);e.config=o;
/*!
 * Primary `Assertion` prototype
 */
var s=n(374);e.use(s);
/*!
 * Core Assertions
 */
var a=n(373);e.use(a);
/*!
 * Expect interface
 */
var h=n(372);e.use(h);
/*!
 * Should interface
 */
var c=n(371);e.use(c);
/*!
 * Assert interface
 */
var u=n(370);e.use(u)},249:function(t,e,n){var i=n(222),r=n(206),o=n(313),s=n(251),a=["__flags","__methods","_obj","assert"];function h(t,e,n){if(!n){n=[];for(var i=0;i<=t.length;i++)n[i]=[]}return n[t.length]&&n[t.length][e.length]||(0===t.length||0===e.length?n[t.length][e.length]=Math.max(t.length,e.length):n[t.length][e.length]=Math.min(h(t.slice(0,-1),e,n)+1,h(t,e.slice(0,-1),n)+1,h(t.slice(0,-1),e.slice(0,-1),n)+(t.slice(-1)===e.slice(-1)?0:1))),n[t.length][e.length]}t.exports=function(t,e){return s()?new Proxy(t,{get:function t(n,s){if("string"==typeof s&&-1===i.proxyExcludedKeys.indexOf(s)&&!Reflect.has(n,s)){if(e)throw Error("Invalid Chai property: "+e+"."+s+'. See docs for proper usage of "'+e+'".');var c=o(n).filter(function(t){return!Object.prototype.hasOwnProperty(t)&&-1===a.indexOf(t)}).sort(function(t,e){return h(s,t)-h(s,e)});throw c.length&&h(c[0],s)<4?Error("Invalid Chai property: "+s+'. Did you mean "'+c[0]+'"?'):Error("Invalid Chai property: "+s)}return-1!==a.indexOf(s)||r(n,"lockSsfi")||r(n,"ssfi",t),Reflect.get(n,s)}}):t}},250:function(t,e,n){n(222);var i=Object.getOwnPropertyDescriptor(function(){},"length");
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){return i.configurable?(Object.defineProperty(t,"length",{get:function(){if(n)throw Error("Invalid Chai property: "+e+'.length. Due to a compatibility issue, "length" cannot directly follow "'+e+'". Use "'+e+'.lengthOf" instead.');throw Error("Invalid Chai property: "+e+'.length. See docs for proper usage of "'+e+'".')}}),t):t}},251:function(t,e,n){var i=n(222);
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */t.exports=function(){return i.useProxy&&"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect}},252:function(t,e,n){var i=n(314),r=n(313),o=n(386),s=n(222);t.exports=function(t,e,n,i){return h({showHidden:e,seen:[],stylize:function(t){return t}},t,void 0===n?2:n)};var a=function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&"nodeType"in t&&1===t.nodeType&&"string"==typeof t.nodeName};function h(t,n,y){if(n&&"function"==typeof n.inspect&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var m=n.inspect(y,t);return"string"!=typeof m&&(m=h(t,m,y)),m}var b=function(t,e){switch(typeof e){case"undefined":return t.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string");case"number":return 0===e&&1/e==-1/0?t.stylize("-0","number"):t.stylize(""+e,"number");case"boolean":return t.stylize(""+e,"boolean");case"symbol":return t.stylize(e.toString(),"symbol")}if(null===e)return t.stylize("null","null")}(t,n);if(b)return b;if(a(n)){if("outerHTML"in n)return n.outerHTML;try{if(document.xmlVersion)return(new XMLSerializer).serializeToString(n);var w=document.createElementNS("http://www.w3.org/1999/xhtml","_");w.appendChild(n.cloneNode(!1));var x=w.innerHTML.replace("><",">"+n.innerHTML+"<");return w.innerHTML="",x}catch(t){}}var g,v,M=o(n),z=t.showHidden?r(n):M;if(0===z.length||d(n)&&(1===z.length&&"stack"===z[0]||2===z.length&&"description"===z[0]&&"stack"===z[1])){if("function"==typeof n)return v=(g=i(n))?": "+g:"",t.stylize("[Function"+v+"]","special");if(l(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(f(n))return t.stylize(Date.prototype.toUTCString.call(n),"date");if(d(n))return c(n)}var _,O,j="",S=!1,E=!1,k=["{","}"];if("object"==typeof(_=n)&&/\w+Array]$/.test(p(_))&&(E=!0,k=["[","]"]),function(t){return Array.isArray(t)||"object"==typeof t&&"[object Array]"===p(t)}(n)&&(S=!0,k=["[","]"]),"function"==typeof n&&(j=" [Function"+(v=(g=i(n))?": "+g:"")+"]"),l(n)&&(j=" "+RegExp.prototype.toString.call(n)),f(n)&&(j=" "+Date.prototype.toUTCString.call(n)),d(n))return c(n);if(0===z.length&&(!S||0==n.length))return k[0]+j+k[1];if(y<0)return l(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special");if(t.seen.push(n),S)O=function(t,e,n,i,r){for(var o=[],s=0,a=e.length;s<a;++s)Object.prototype.hasOwnProperty.call(e,String(s))?o.push(u(t,e,n,i,String(s),!0)):o.push("");return r.forEach(function(r){r.match(/^\d+$/)||o.push(u(t,e,n,i,r,!0))}),o}(t,n,y,M,z);else{if(E)return function(t){for(var e="[ ",n=0;n<t.length;++n){if(e.length>=s.truncateThreshold-7){e+="...";break}e+=t[n]+", "}-1!==(e+=" ]").indexOf(",  ]")&&(e=e.replace(",  ]"," ]"));return e}(n);O=z.map(function(e){return u(t,n,y,M,e,S)})}return t.seen.pop(),function(t,e,n){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.length+1},0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(O,j,k)}function c(t){return"["+Error.prototype.toString.call(t)+"]"}function u(t,e,n,i,r,o){var s,a,c=Object.getOwnPropertyDescriptor(e,r);if(c&&(c.get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special"))),i.indexOf(r)<0&&(s="["+r+"]"),a||(t.seen.indexOf(e[r])<0?(a=h(t,e[r],null===n?null:n-1)).indexOf("\n")>-1&&(a=o?a.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+a.split("\n").map(function(t){return"   "+t}).join("\n")):a=t.stylize("[Circular]","special")),void 0===s){if(o&&r.match(/^\d+$/))return a;(s=JSON.stringify(""+r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function l(t){return"object"==typeof t&&"[object RegExp]"===p(t)}function f(t){return"object"==typeof t&&"[object Date]"===p(t)}function d(t){return"object"==typeof t&&"[object Error]"===p(t)}function p(t){return Object.prototype.toString.call(t)}},269:function(t,e,n){(function(e){var n;n=function(){"use strict";var t="function"==typeof Promise,n="object"==typeof self?self:e,i="undefined"!=typeof Symbol,r="undefined"!=typeof Map,o="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,a="undefined"!=typeof WeakSet,h="undefined"!=typeof DataView,c=i&&void 0!==Symbol.iterator,u=i&&void 0!==Symbol.toStringTag,l=o&&"function"==typeof Set.prototype.entries,f=r&&"function"==typeof Map.prototype.entries,d=l&&Object.getPrototypeOf((new Set).entries()),p=f&&Object.getPrototypeOf((new Map).entries()),y=c&&"function"==typeof Array.prototype[Symbol.iterator],m=y&&Object.getPrototypeOf([][Symbol.iterator]()),b=c&&"function"==typeof String.prototype[Symbol.iterator],w=b&&Object.getPrototypeOf(""[Symbol.iterator]()),x=8,g=-1;return function(e){var i=typeof e;if("object"!==i)return i;if(null===e)return"null";if(e===n)return"global";if(Array.isArray(e)&&(!1===u||!(Symbol.toStringTag in e)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&e===window.location)return"Location";if("object"==typeof window.document&&e===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var c=u&&e[Symbol.toStringTag];if("string"==typeof c)return c;var l=Object.getPrototypeOf(e);return l===RegExp.prototype?"RegExp":l===Date.prototype?"Date":t&&l===Promise.prototype?"Promise":o&&l===Set.prototype?"Set":r&&l===Map.prototype?"Map":a&&l===WeakSet.prototype?"WeakSet":s&&l===WeakMap.prototype?"WeakMap":h&&l===DataView.prototype?"DataView":r&&l===p?"Map Iterator":o&&l===d?"Set Iterator":y&&l===m?"Array Iterator":b&&l===w?"String Iterator":null===l?"Object":Object.prototype.toString.call(e).slice(x,g)}},t.exports=n()}).call(this,n(67))},3:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i,r,o=n(1);function s(t,e,n,i){this._x=t||0,this._y=e||0,this._z=n||0,this._w=void 0!==i?i:1}s.prototype={constructor:s,get x(){return this._x},set x(t){this._x=t,this.onChangeCallback()},get y(){return this._y},set y(t){this._y=t,this.onChangeCallback()},get z(){return this._z},set z(t){this._z=t,this.onChangeCallback()},get w(){return this._w},set w(t){this._w=t,this.onChangeCallback()},set:function(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this.onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this.onChangeCallback(),this},setFromEuler:function(t,e){if(!1===(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var n=Math.cos(t._x/2),i=Math.cos(t._y/2),r=Math.cos(t._z/2),o=Math.sin(t._x/2),s=Math.sin(t._y/2),a=Math.sin(t._z/2),h=t.order;return"XYZ"===h?(this._x=o*i*r+n*s*a,this._y=n*s*r-o*i*a,this._z=n*i*a+o*s*r,this._w=n*i*r-o*s*a):"YXZ"===h?(this._x=o*i*r+n*s*a,this._y=n*s*r-o*i*a,this._z=n*i*a-o*s*r,this._w=n*i*r+o*s*a):"ZXY"===h?(this._x=o*i*r-n*s*a,this._y=n*s*r+o*i*a,this._z=n*i*a+o*s*r,this._w=n*i*r-o*s*a):"ZYX"===h?(this._x=o*i*r-n*s*a,this._y=n*s*r+o*i*a,this._z=n*i*a-o*s*r,this._w=n*i*r+o*s*a):"YZX"===h?(this._x=o*i*r+n*s*a,this._y=n*s*r+o*i*a,this._z=n*i*a-o*s*r,this._w=n*i*r-o*s*a):"XZY"===h&&(this._x=o*i*r-n*s*a,this._y=n*s*r-o*i*a,this._z=n*i*a+o*s*r,this._w=n*i*r+o*s*a),!1!==e&&this.onChangeCallback(),this},setFromAxisAngle:function(t,e){var n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this.onChangeCallback(),this},setFromRotationMatrix:function(t){var e,n=t.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],h=n[9],c=n[2],u=n[6],l=n[10],f=i+a+l;return f>0?(e=.5/Math.sqrt(f+1),this._w=.25/e,this._x=(u-h)*e,this._y=(o-c)*e,this._z=(s-r)*e):i>a&&i>l?(e=2*Math.sqrt(1+i-a-l),this._w=(u-h)/e,this._x=.25*e,this._y=(r+s)/e,this._z=(o+c)/e):a>l?(e=2*Math.sqrt(1+a-i-l),this._w=(o-c)/e,this._x=(r+s)/e,this._y=.25*e,this._z=(h+u)/e):(e=2*Math.sqrt(1+l-i-a),this._w=(s-r)/e,this._x=(o+c)/e,this._y=(h+u)/e,this._z=.25*e),this.onChangeCallback(),this},setFromUnitVectors:function(t,e){return void 0===i&&(i=new o.a),(r=t.dot(e)+1)<1e-6?(r=0,Math.abs(t.x)>Math.abs(t.z)?i.set(-t.y,t.x,0):i.set(0,-t.z,t.y)):i.crossVectors(t,e),this._x=i.x,this._y=i.y,this._z=i.z,this._w=r,this.normalize()},inverse:function(){return this.conjugate().normalize()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this},dot:function(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this.onChangeCallback(),this},multiply:function(t,e){return void 0!==e?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)},premultiply:function(t){return this.multiplyQuaternions(t,this)},multiplyQuaternions:function(t,e){var n=t._x,i=t._y,r=t._z,o=t._w,s=e._x,a=e._y,h=e._z,c=e._w;return this._x=n*c+o*s+i*h-r*a,this._y=i*c+o*a+r*s-n*h,this._z=r*c+o*h+n*a-i*s,this._w=o*c-n*s-i*a-r*h,this.onChangeCallback(),this},slerp:function(t,e){if(0===e)return this;if(1===e)return this.copy(t);var n=this._x,i=this._y,r=this._z,o=this._w,s=o*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;var a=Math.sqrt(1-s*s);if(Math.abs(a)<.001)return this._w=.5*(o+this._w),this._x=.5*(n+this._x),this._y=.5*(i+this._y),this._z=.5*(r+this._z),this;var h=Math.atan2(a,s),c=Math.sin((1-e)*h)/a,u=Math.sin(e*h)/a;return this._w=o*c+this._w*u,this._x=n*c+this._x*u,this._y=i*c+this._y*u,this._z=r*c+this._z*u,this.onChangeCallback(),this},equals:function(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w},fromArray:function(t,e){return void 0===e&&(e=0),this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this.onChangeCallback(),this},toArray:function(t,e){return void 0===t&&(t=[]),void 0===e&&(e=0),t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t},onChange:function(t){return this.onChangeCallback=t,this},onChangeCallback:function(){}},Object.assign(s,{slerp:function(t,e,n,i){return n.copy(t).slerp(e,i)},slerpFlat:function(t,e,n,i,r,o,s){var a=n[i+0],h=n[i+1],c=n[i+2],u=n[i+3],l=r[o+0],f=r[o+1],d=r[o+2],p=r[o+3];if(u!==p||a!==l||h!==f||c!==d){var y=1-s,m=a*l+h*f+c*d+u*p,b=m>=0?1:-1,w=1-m*m;if(w>Number.EPSILON){var x=Math.sqrt(w),g=Math.atan2(x,m*b);y=Math.sin(y*g)/x,s=Math.sin(s*g)/x}var v=s*b;if(a=a*y+l*v,h=h*y+f*v,c=c*y+d*v,u=u*y+p*v,y===1-s){var M=1/Math.sqrt(a*a+h*h+c*c+u*u);a*=M,h*=M,c*=M,u*=M}}t[e]=a,t[e+1]=h,t[e+2]=c,t[e+3]=u}})},311:function(t,e){
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){return"function"!=typeof Object.getOwnPropertySymbols?[]:Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})}},312:function(t,e,n){
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var i=n(252),r=n(222);t.exports=function(t){var e=i(t),n=Object.prototype.toString.call(t);if(r.truncateThreshold&&e.length>=r.truncateThreshold){if("[object Function]"===n)return t.name&&""!==t.name?"[Function: "+t.name+"]":"[Function]";if("[object Array]"===n)return"[ Array("+t.length+") ]";if("[object Object]"===n){var o=Object.keys(t);return"{ Object ("+(o.length>2?o.splice(0,2).join(", ")+", ...":o.join(", "))+") }"}return e}return e}},313:function(t,e){
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){var e=Object.getOwnPropertyNames(t);function n(t){-1===e.indexOf(t)&&e.push(t)}for(var i=Object.getPrototypeOf(t);null!==i;)Object.getOwnPropertyNames(i).forEach(n),i=Object.getPrototypeOf(i);return e}},314:function(t,e,n){"use strict";var i=Function.prototype.toString,r=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;t.exports=function(t){if("function"!=typeof t)return null;var e="";if(void 0===Function.prototype.name&&void 0===t.name){var n=i.call(t).match(r);n&&(e=n[1])}else e=t.name;return e}},315:function(t,e){
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){return e.length>4?e[4]:t._obj}},316:function(t,e){
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function n(){var t=[].slice.call(arguments);function e(e,n){Object.keys(n).forEach(function(i){~t.indexOf(i)||(e[i]=n[i])})}return function(){for(var t=[].slice.call(arguments),n=0,i={};n<t.length;n++)e(i,t[n]);return i}}function i(t,e,r){var o=n("name","message","stack","constructor","toJSON")(e||{});for(var s in this.message=t||"Unspecified AssertionError",this.showDiff=!1,o)this[s]=o[s];if(r=r||i,Error.captureStackTrace)Error.captureStackTrace(this,r);else try{throw new Error}catch(t){this.stack=t.stack}}
/*!
 * Inherit from Error.prototype
 */
/*!
 * Primary Exports
 */
t.exports=i,i.prototype=Object.create(Error.prototype),
/*!
 * Statically set name
 */
i.prototype.name="AssertionError",
/*!
 * Ensure correct constructor
 */
i.prototype.constructor=i,i.prototype.toJSON=function(t){var e=n("constructor","toJSON","stack")({name:this.name},this);return!1!==t&&this.stack&&(e.stack=this.stack),e}},370:function(t,e){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){
/*!
   * Chai dependencies.
   */
var n=t.Assertion,i=e.flag,r=t.assert=function(e,i){new n(null,null,t.assert,!0).assert(e,i,"[ negation message unavailable ]")};
/*!
   * Module export.
   */r.fail=function(e,n,i,o){throw i=i||"assert.fail()",new t.AssertionError(i,{actual:e,expected:n,operator:o},r.fail)},r.isOk=function(t,e){new n(t,e,r.isOk,!0).is.ok},r.isNotOk=function(t,e){new n(t,e,r.isNotOk,!0).is.not.ok},r.equal=function(t,e,o){var s=new n(t,o,r.equal,!0);s.assert(e==i(s,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",e,t,!0)},r.notEqual=function(t,e,o){var s=new n(t,o,r.notEqual,!0);s.assert(e!=i(s,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",e,t,!0)},r.strictEqual=function(t,e,i){new n(t,i,r.strictEqual,!0).to.equal(e)},r.notStrictEqual=function(t,e,i){new n(t,i,r.notStrictEqual,!0).to.not.equal(e)},r.deepEqual=r.deepStrictEqual=function(t,e,i){new n(t,i,r.deepEqual,!0).to.eql(e)},r.notDeepEqual=function(t,e,i){new n(t,i,r.notDeepEqual,!0).to.not.eql(e)},r.isAbove=function(t,e,i){new n(t,i,r.isAbove,!0).to.be.above(e)},r.isAtLeast=function(t,e,i){new n(t,i,r.isAtLeast,!0).to.be.least(e)},r.isBelow=function(t,e,i){new n(t,i,r.isBelow,!0).to.be.below(e)},r.isAtMost=function(t,e,i){new n(t,i,r.isAtMost,!0).to.be.most(e)},r.isTrue=function(t,e){new n(t,e,r.isTrue,!0).is.true},r.isNotTrue=function(t,e){new n(t,e,r.isNotTrue,!0).to.not.equal(!0)},r.isFalse=function(t,e){new n(t,e,r.isFalse,!0).is.false},r.isNotFalse=function(t,e){new n(t,e,r.isNotFalse,!0).to.not.equal(!1)},r.isNull=function(t,e){new n(t,e,r.isNull,!0).to.equal(null)},r.isNotNull=function(t,e){new n(t,e,r.isNotNull,!0).to.not.equal(null)},r.isNaN=function(t,e){new n(t,e,r.isNaN,!0).to.be.NaN},r.isNotNaN=function(t,e){new n(t,e,r.isNotNaN,!0).not.to.be.NaN},r.exists=function(t,e){new n(t,e,r.exists,!0).to.exist},r.notExists=function(t,e){new n(t,e,r.notExists,!0).to.not.exist},r.isUndefined=function(t,e){new n(t,e,r.isUndefined,!0).to.equal(void 0)},r.isDefined=function(t,e){new n(t,e,r.isDefined,!0).to.not.equal(void 0)},r.isFunction=function(t,e){new n(t,e,r.isFunction,!0).to.be.a("function")},r.isNotFunction=function(t,e){new n(t,e,r.isNotFunction,!0).to.not.be.a("function")},r.isObject=function(t,e){new n(t,e,r.isObject,!0).to.be.a("object")},r.isNotObject=function(t,e){new n(t,e,r.isNotObject,!0).to.not.be.a("object")},r.isArray=function(t,e){new n(t,e,r.isArray,!0).to.be.an("array")},r.isNotArray=function(t,e){new n(t,e,r.isNotArray,!0).to.not.be.an("array")},r.isString=function(t,e){new n(t,e,r.isString,!0).to.be.a("string")},r.isNotString=function(t,e){new n(t,e,r.isNotString,!0).to.not.be.a("string")},r.isNumber=function(t,e){new n(t,e,r.isNumber,!0).to.be.a("number")},r.isNotNumber=function(t,e){new n(t,e,r.isNotNumber,!0).to.not.be.a("number")},r.isFinite=function(t,e){new n(t,e,r.isFinite,!0).to.be.finite},r.isBoolean=function(t,e){new n(t,e,r.isBoolean,!0).to.be.a("boolean")},r.isNotBoolean=function(t,e){new n(t,e,r.isNotBoolean,!0).to.not.be.a("boolean")},r.typeOf=function(t,e,i){new n(t,i,r.typeOf,!0).to.be.a(e)},r.notTypeOf=function(t,e,i){new n(t,i,r.notTypeOf,!0).to.not.be.a(e)},r.instanceOf=function(t,e,i){new n(t,i,r.instanceOf,!0).to.be.instanceOf(e)},r.notInstanceOf=function(t,e,i){new n(t,i,r.notInstanceOf,!0).to.not.be.instanceOf(e)},r.include=function(t,e,i){new n(t,i,r.include,!0).include(e)},r.notInclude=function(t,e,i){new n(t,i,r.notInclude,!0).not.include(e)},r.deepInclude=function(t,e,i){new n(t,i,r.deepInclude,!0).deep.include(e)},r.notDeepInclude=function(t,e,i){new n(t,i,r.notDeepInclude,!0).not.deep.include(e)},r.nestedInclude=function(t,e,i){new n(t,i,r.nestedInclude,!0).nested.include(e)},r.notNestedInclude=function(t,e,i){new n(t,i,r.notNestedInclude,!0).not.nested.include(e)},r.deepNestedInclude=function(t,e,i){new n(t,i,r.deepNestedInclude,!0).deep.nested.include(e)},r.notDeepNestedInclude=function(t,e,i){new n(t,i,r.notDeepNestedInclude,!0).not.deep.nested.include(e)},r.ownInclude=function(t,e,i){new n(t,i,r.ownInclude,!0).own.include(e)},r.notOwnInclude=function(t,e,i){new n(t,i,r.notOwnInclude,!0).not.own.include(e)},r.deepOwnInclude=function(t,e,i){new n(t,i,r.deepOwnInclude,!0).deep.own.include(e)},r.notDeepOwnInclude=function(t,e,i){new n(t,i,r.notDeepOwnInclude,!0).not.deep.own.include(e)},r.match=function(t,e,i){new n(t,i,r.match,!0).to.match(e)},r.notMatch=function(t,e,i){new n(t,i,r.notMatch,!0).to.not.match(e)},r.property=function(t,e,i){new n(t,i,r.property,!0).to.have.property(e)},r.notProperty=function(t,e,i){new n(t,i,r.notProperty,!0).to.not.have.property(e)},r.propertyVal=function(t,e,i,o){new n(t,o,r.propertyVal,!0).to.have.property(e,i)},r.notPropertyVal=function(t,e,i,o){new n(t,o,r.notPropertyVal,!0).to.not.have.property(e,i)},r.deepPropertyVal=function(t,e,i,o){new n(t,o,r.deepPropertyVal,!0).to.have.deep.property(e,i)},r.notDeepPropertyVal=function(t,e,i,o){new n(t,o,r.notDeepPropertyVal,!0).to.not.have.deep.property(e,i)},r.ownProperty=function(t,e,i){new n(t,i,r.ownProperty,!0).to.have.own.property(e)},r.notOwnProperty=function(t,e,i){new n(t,i,r.notOwnProperty,!0).to.not.have.own.property(e)},r.ownPropertyVal=function(t,e,i,o){new n(t,o,r.ownPropertyVal,!0).to.have.own.property(e,i)},r.notOwnPropertyVal=function(t,e,i,o){new n(t,o,r.notOwnPropertyVal,!0).to.not.have.own.property(e,i)},r.deepOwnPropertyVal=function(t,e,i,o){new n(t,o,r.deepOwnPropertyVal,!0).to.have.deep.own.property(e,i)},r.notDeepOwnPropertyVal=function(t,e,i,o){new n(t,o,r.notDeepOwnPropertyVal,!0).to.not.have.deep.own.property(e,i)},r.nestedProperty=function(t,e,i){new n(t,i,r.nestedProperty,!0).to.have.nested.property(e)},r.notNestedProperty=function(t,e,i){new n(t,i,r.notNestedProperty,!0).to.not.have.nested.property(e)},r.nestedPropertyVal=function(t,e,i,o){new n(t,o,r.nestedPropertyVal,!0).to.have.nested.property(e,i)},r.notNestedPropertyVal=function(t,e,i,o){new n(t,o,r.notNestedPropertyVal,!0).to.not.have.nested.property(e,i)},r.deepNestedPropertyVal=function(t,e,i,o){new n(t,o,r.deepNestedPropertyVal,!0).to.have.deep.nested.property(e,i)},r.notDeepNestedPropertyVal=function(t,e,i,o){new n(t,o,r.notDeepNestedPropertyVal,!0).to.not.have.deep.nested.property(e,i)},r.lengthOf=function(t,e,i){new n(t,i,r.lengthOf,!0).to.have.lengthOf(e)},r.hasAnyKeys=function(t,e,i){new n(t,i,r.hasAnyKeys,!0).to.have.any.keys(e)},r.hasAllKeys=function(t,e,i){new n(t,i,r.hasAllKeys,!0).to.have.all.keys(e)},r.containsAllKeys=function(t,e,i){new n(t,i,r.containsAllKeys,!0).to.contain.all.keys(e)},r.doesNotHaveAnyKeys=function(t,e,i){new n(t,i,r.doesNotHaveAnyKeys,!0).to.not.have.any.keys(e)},r.doesNotHaveAllKeys=function(t,e,i){new n(t,i,r.doesNotHaveAllKeys,!0).to.not.have.all.keys(e)},r.hasAnyDeepKeys=function(t,e,i){new n(t,i,r.hasAnyDeepKeys,!0).to.have.any.deep.keys(e)},r.hasAllDeepKeys=function(t,e,i){new n(t,i,r.hasAllDeepKeys,!0).to.have.all.deep.keys(e)},r.containsAllDeepKeys=function(t,e,i){new n(t,i,r.containsAllDeepKeys,!0).to.contain.all.deep.keys(e)},r.doesNotHaveAnyDeepKeys=function(t,e,i){new n(t,i,r.doesNotHaveAnyDeepKeys,!0).to.not.have.any.deep.keys(e)},r.doesNotHaveAllDeepKeys=function(t,e,i){new n(t,i,r.doesNotHaveAllDeepKeys,!0).to.not.have.all.deep.keys(e)},r.throws=function(t,e,o,s){("string"==typeof e||e instanceof RegExp)&&(o=e,e=null);var a=new n(t,s,r.throws,!0).to.throw(e,o);return i(a,"object")},r.doesNotThrow=function(t,e,i,o){("string"==typeof e||e instanceof RegExp)&&(i=e,e=null),new n(t,o,r.doesNotThrow,!0).to.not.throw(e,i)},r.operator=function(o,s,a,h){var c;switch(s){case"==":c=o==a;break;case"===":c=o===a;break;case">":c=o>a;break;case">=":c=o>=a;break;case"<":c=o<a;break;case"<=":c=o<=a;break;case"!=":c=o!=a;break;case"!==":c=o!==a;break;default:throw h=h?h+": ":h,new t.AssertionError(h+'Invalid operator "'+s+'"',void 0,r.operator)}var u=new n(c,h,r.operator,!0);u.assert(!0===i(u,"object"),"expected "+e.inspect(o)+" to be "+s+" "+e.inspect(a),"expected "+e.inspect(o)+" to not be "+s+" "+e.inspect(a))},r.closeTo=function(t,e,i,o){new n(t,o,r.closeTo,!0).to.be.closeTo(e,i)},r.approximately=function(t,e,i,o){new n(t,o,r.approximately,!0).to.be.approximately(e,i)},r.sameMembers=function(t,e,i){new n(t,i,r.sameMembers,!0).to.have.same.members(e)},r.notSameMembers=function(t,e,i){new n(t,i,r.notSameMembers,!0).to.not.have.same.members(e)},r.sameDeepMembers=function(t,e,i){new n(t,i,r.sameDeepMembers,!0).to.have.same.deep.members(e)},r.notSameDeepMembers=function(t,e,i){new n(t,i,r.notSameDeepMembers,!0).to.not.have.same.deep.members(e)},r.sameOrderedMembers=function(t,e,i){new n(t,i,r.sameOrderedMembers,!0).to.have.same.ordered.members(e)},r.notSameOrderedMembers=function(t,e,i){new n(t,i,r.notSameOrderedMembers,!0).to.not.have.same.ordered.members(e)},r.sameDeepOrderedMembers=function(t,e,i){new n(t,i,r.sameDeepOrderedMembers,!0).to.have.same.deep.ordered.members(e)},r.notSameDeepOrderedMembers=function(t,e,i){new n(t,i,r.notSameDeepOrderedMembers,!0).to.not.have.same.deep.ordered.members(e)},r.includeMembers=function(t,e,i){new n(t,i,r.includeMembers,!0).to.include.members(e)},r.notIncludeMembers=function(t,e,i){new n(t,i,r.notIncludeMembers,!0).to.not.include.members(e)},r.includeDeepMembers=function(t,e,i){new n(t,i,r.includeDeepMembers,!0).to.include.deep.members(e)},r.notIncludeDeepMembers=function(t,e,i){new n(t,i,r.notIncludeDeepMembers,!0).to.not.include.deep.members(e)},r.includeOrderedMembers=function(t,e,i){new n(t,i,r.includeOrderedMembers,!0).to.include.ordered.members(e)},r.notIncludeOrderedMembers=function(t,e,i){new n(t,i,r.notIncludeOrderedMembers,!0).to.not.include.ordered.members(e)},r.includeDeepOrderedMembers=function(t,e,i){new n(t,i,r.includeDeepOrderedMembers,!0).to.include.deep.ordered.members(e)},r.notIncludeDeepOrderedMembers=function(t,e,i){new n(t,i,r.notIncludeDeepOrderedMembers,!0).to.not.include.deep.ordered.members(e)},r.oneOf=function(t,e,i){new n(t,i,r.oneOf,!0).to.be.oneOf(e)},r.changes=function(t,e,i,o){3===arguments.length&&"function"==typeof e&&(o=i,i=null),new n(t,o,r.changes,!0).to.change(e,i)},r.changesBy=function(t,e,i,o,s){if(4===arguments.length&&"function"==typeof e){var a=o;o=i,s=a}else 3===arguments.length&&(o=i,i=null);new n(t,s,r.changesBy,!0).to.change(e,i).by(o)},r.doesNotChange=function(t,e,i,o){return 3===arguments.length&&"function"==typeof e&&(o=i,i=null),new n(t,o,r.doesNotChange,!0).to.not.change(e,i)},r.changesButNotBy=function(t,e,i,o,s){if(4===arguments.length&&"function"==typeof e){var a=o;o=i,s=a}else 3===arguments.length&&(o=i,i=null);new n(t,s,r.changesButNotBy,!0).to.change(e,i).but.not.by(o)},r.increases=function(t,e,i,o){return 3===arguments.length&&"function"==typeof e&&(o=i,i=null),new n(t,o,r.increases,!0).to.increase(e,i)},r.increasesBy=function(t,e,i,o,s){if(4===arguments.length&&"function"==typeof e){var a=o;o=i,s=a}else 3===arguments.length&&(o=i,i=null);new n(t,s,r.increasesBy,!0).to.increase(e,i).by(o)},r.doesNotIncrease=function(t,e,i,o){return 3===arguments.length&&"function"==typeof e&&(o=i,i=null),new n(t,o,r.doesNotIncrease,!0).to.not.increase(e,i)},r.increasesButNotBy=function(t,e,i,o,s){if(4===arguments.length&&"function"==typeof e){var a=o;o=i,s=a}else 3===arguments.length&&(o=i,i=null);new n(t,s,r.increasesButNotBy,!0).to.increase(e,i).but.not.by(o)},r.decreases=function(t,e,i,o){return 3===arguments.length&&"function"==typeof e&&(o=i,i=null),new n(t,o,r.decreases,!0).to.decrease(e,i)},r.decreasesBy=function(t,e,i,o,s){if(4===arguments.length&&"function"==typeof e){var a=o;o=i,s=a}else 3===arguments.length&&(o=i,i=null);new n(t,s,r.decreasesBy,!0).to.decrease(e,i).by(o)},r.doesNotDecrease=function(t,e,i,o){return 3===arguments.length&&"function"==typeof e&&(o=i,i=null),new n(t,o,r.doesNotDecrease,!0).to.not.decrease(e,i)},r.doesNotDecreaseBy=function(t,e,i,o,s){if(4===arguments.length&&"function"==typeof e){var a=o;o=i,s=a}else 3===arguments.length&&(o=i,i=null);return new n(t,s,r.doesNotDecreaseBy,!0).to.not.decrease(e,i).by(o)},r.decreasesButNotBy=function(t,e,i,o,s){if(4===arguments.length&&"function"==typeof e){var a=o;o=i,s=a}else 3===arguments.length&&(o=i,i=null);new n(t,s,r.decreasesButNotBy,!0).to.decrease(e,i).but.not.by(o)}
/*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */,r.ifError=function(t){if(t)throw t},r.isExtensible=function(t,e){new n(t,e,r.isExtensible,!0).to.be.extensible},r.isNotExtensible=function(t,e){new n(t,e,r.isNotExtensible,!0).to.not.be.extensible},r.isSealed=function(t,e){new n(t,e,r.isSealed,!0).to.be.sealed},r.isNotSealed=function(t,e){new n(t,e,r.isNotSealed,!0).to.not.be.sealed},r.isFrozen=function(t,e){new n(t,e,r.isFrozen,!0).to.be.frozen},r.isNotFrozen=function(t,e){new n(t,e,r.isNotFrozen,!0).to.not.be.frozen},r.isEmpty=function(t,e){new n(t,e,r.isEmpty,!0).to.be.empty},r.isNotEmpty=function(t,e){new n(t,e,r.isNotEmpty,!0).to.not.be.empty},
/*!
   * Aliases.
   */
function t(e,n){return r[n]=r[e],t}("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")("isEmpty","empty")("isNotEmpty","notEmpty")}},371:function(t,e){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){var n=t.Assertion;function i(){Object.defineProperty(Object.prototype,"should",{set:function(t){Object.defineProperty(this,"should",{value:t,enumerable:!0,configurable:!0,writable:!0})},get:function t(){return this instanceof String||this instanceof Number||this instanceof Boolean||"function"==typeof Symbol&&this instanceof Symbol?new n(this.valueOf(),null,t):new n(this,null,t)},configurable:!0});var e={fail:function(n,i,r,o){throw r=r||"should.fail()",new t.AssertionError(r,{actual:n,expected:i,operator:o},e.fail)},equal:function(t,e,i){new n(t,i).to.equal(e)},Throw:function(t,e,i,r){new n(t,r).to.Throw(e,i)},exist:function(t,e){new n(t,e).to.exist},not:{}};return e.not.equal=function(t,e,i){new n(t,i).to.not.equal(e)},e.not.Throw=function(t,e,i,r){new n(t,r).to.not.Throw(e,i)},e.not.exist=function(t,e){new n(t,e).to.not.exist},e.throw=e.Throw,e.not.throw=e.not.Throw,e}t.should=i,t.Should=i}},372:function(t,e){
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){t.expect=function(e,n){return new t.Assertion(e,n)},t.expect.fail=function(e,n,i,r){throw i=i||"expect.fail()",new t.AssertionError(i,{actual:e,expected:n,operator:r},t.expect.fail)}}},373:function(t,e){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){var n=t.Assertion,i=t.AssertionError,r=e.flag;function o(t,n){n&&r(this,"message",n),t=t.toLowerCase();var i=r(this,"object"),o=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an ":"a ";this.assert(t===e.type(i).toLowerCase(),"expected #{this} to be "+o+t,"expected #{this} not to be "+o+t)}function s(t,n){return e.isNaN(t)&&e.isNaN(n)||t===n}function a(){r(this,"contains",!0)}function h(t,o){o&&r(this,"message",o);var a=r(this,"object"),h=e.type(a).toLowerCase(),c=r(this,"message"),u=r(this,"negate"),l=r(this,"ssfi"),f=r(this,"deep"),d=f?"deep ":"";c=c?c+": ":"";var p=!1;switch(h){case"string":p=-1!==a.indexOf(t);break;case"weakset":if(f)throw new i(c+"unable to use .deep.include with WeakSet",void 0,l);p=a.has(t);break;case"map":var y=f?e.eql:s;a.forEach(function(e){p=p||y(e,t)});break;case"set":f?a.forEach(function(n){p=p||e.eql(n,t)}):p=a.has(t);break;case"array":p=f?a.some(function(n){return e.eql(n,t)}):-1!==a.indexOf(t);break;default:if(t!==Object(t))throw new i(c+"object tested must be an array, a map, an object, a set, a string, or a weakset, but "+h+" given",void 0,l);var m=Object.keys(t),b=null,w=0;if(m.forEach(function(o){var s=new n(a);if(e.transferFlags(this,s,!0),r(s,"lockSsfi",!0),u&&1!==m.length)try{s.property(o,t[o])}catch(t){if(!e.checkError.compatibleConstructor(t,i))throw t;null===b&&(b=t),w++}else s.property(o,t[o])},this),u&&m.length>1&&w===m.length)throw b;return}this.assert(p,"expected #{this} to "+d+"include "+e.inspect(t),"expected #{this} to not "+d+"include "+e.inspect(t))}function c(){var t=r(this,"object"),n=e.type(t);this.assert("Arguments"===n,"expected #{this} to be arguments but got "+n,"expected #{this} to not be arguments")}function u(t,e){e&&r(this,"message",e);var n=r(this,"object");if(r(this,"deep"))return this.eql(t);this.assert(t===n,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",t,this._obj,!0)}function l(t,n){n&&r(this,"message",n),this.assert(e.eql(t,r(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",t,this._obj,!0)}function f(t,o){o&&r(this,"message",o);var s=r(this,"object"),a=r(this,"doLength"),h=r(this,"message"),c=h?h+": ":"",u=r(this,"ssfi"),l=e.type(s).toLowerCase(),f=e.type(t).toLowerCase(),d=!0;if(a&&new n(s,h,u,!0).to.have.property("length"),a||"date"!==l||"date"===f)if("number"===f||!a&&"number"!==l)if(a||"date"===l||"number"===l)d=!1;else{errorMessage=c+"expected "+("string"===l?"'"+s+"'":s)+" to be a number or a date"}else errorMessage=c+"the argument to above must be a number";else errorMessage=c+"the argument to above must be a date";if(d)throw new i(errorMessage,void 0,u);if(a){var p=s.length;this.assert(p>t,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",t,p)}else this.assert(s>t,"expected #{this} to be above #{exp}","expected #{this} to be at most #{exp}",t)}function d(t,o){o&&r(this,"message",o);var s=r(this,"object"),a=r(this,"doLength"),h=r(this,"message"),c=h?h+": ":"",u=r(this,"ssfi"),l=e.type(s).toLowerCase(),f=e.type(t).toLowerCase(),d=!0;if(a&&new n(s,h,u,!0).to.have.property("length"),a||"date"!==l||"date"===f)if("number"===f||!a&&"number"!==l)if(a||"date"===l||"number"===l)d=!1;else{errorMessage=c+"expected "+("string"===l?"'"+s+"'":s)+" to be a number or a date"}else errorMessage=c+"the argument to least must be a number";else errorMessage=c+"the argument to least must be a date";if(d)throw new i(errorMessage,void 0,u);if(a){var p=s.length;this.assert(p>=t,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",t,p)}else this.assert(s>=t,"expected #{this} to be at least #{exp}","expected #{this} to be below #{exp}",t)}function p(t,o){o&&r(this,"message",o);var s=r(this,"object"),a=r(this,"doLength"),h=r(this,"message"),c=h?h+": ":"",u=r(this,"ssfi"),l=e.type(s).toLowerCase(),f=e.type(t).toLowerCase(),d=!0;if(a&&new n(s,h,u,!0).to.have.property("length"),a||"date"!==l||"date"===f)if("number"===f||!a&&"number"!==l)if(a||"date"===l||"number"===l)d=!1;else{errorMessage=c+"expected "+("string"===l?"'"+s+"'":s)+" to be a number or a date"}else errorMessage=c+"the argument to below must be a number";else errorMessage=c+"the argument to below must be a date";if(d)throw new i(errorMessage,void 0,u);if(a){var p=s.length;this.assert(p<t,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",t,p)}else this.assert(s<t,"expected #{this} to be below #{exp}","expected #{this} to be at least #{exp}",t)}function y(t,o){o&&r(this,"message",o);var s=r(this,"object"),a=r(this,"doLength"),h=r(this,"message"),c=h?h+": ":"",u=r(this,"ssfi"),l=e.type(s).toLowerCase(),f=e.type(t).toLowerCase(),d=!0;if(a&&new n(s,h,u,!0).to.have.property("length"),a||"date"!==l||"date"===f)if("number"===f||!a&&"number"!==l)if(a||"date"===l||"number"===l)d=!1;else{errorMessage=c+"expected "+("string"===l?"'"+s+"'":s)+" to be a number or a date"}else errorMessage=c+"the argument to most must be a number";else errorMessage=c+"the argument to most must be a date";if(d)throw new i(errorMessage,void 0,u);if(a){var p=s.length;this.assert(p<=t,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",t,p)}else this.assert(s<=t,"expected #{this} to be at most #{exp}","expected #{this} to be above #{exp}",t)}function m(t,n){n&&r(this,"message",n);var o=r(this,"object"),s=r(this,"ssfi"),a=r(this,"message");try{var h=o instanceof t}catch(n){if(n instanceof TypeError)throw new i((a=a?a+": ":"")+"The instanceof assertion needs a constructor but "+e.type(t)+" was given.",void 0,s);throw n}var c=e.getName(t);null===c&&(c="an unnamed constructor"),this.assert(h,"expected #{this} to be an instance of "+c,"expected #{this} to not be an instance of "+c)}function b(t,n,o){o&&r(this,"message",o);var s=r(this,"nested"),a=r(this,"own"),h=r(this,"message"),c=r(this,"object"),u=r(this,"ssfi");if(s&&a)throw new i((h=h?h+": ":"")+'The "nested" and "own" flags cannot be combined.',void 0,u);if(null==c)throw new i((h=h?h+": ":"")+"Target cannot be null or undefined.",void 0,u);var l,f=r(this,"deep"),d=r(this,"negate"),p=s?e.getPathInfo(c,t):null,y=s?p.value:c[t],m="";f&&(m+="deep "),a&&(m+="own "),s&&(m+="nested "),m+="property ",l=a?Object.prototype.hasOwnProperty.call(c,t):s?p.exists:e.hasProperty(c,t),d&&1!==arguments.length||this.assert(l,"expected #{this} to have "+m+e.inspect(t),"expected #{this} to not have "+m+e.inspect(t)),arguments.length>1&&this.assert(l&&(f?e.eql(n,y):n===y),"expected #{this} to have "+m+e.inspect(t)+" of #{exp}, but got #{act}","expected #{this} to not have "+m+e.inspect(t)+" of #{act}",n,y),r(this,"object",y)}function w(t,e,n){r(this,"own",!0),b.apply(this,arguments)}function x(t,n,i){"string"==typeof n&&(i=n,n=null),i&&r(this,"message",i);var o=r(this,"object"),s=Object.getOwnPropertyDescriptor(Object(o),t);s&&n?this.assert(e.eql(n,s),"expected the own property descriptor for "+e.inspect(t)+" on #{this} to match "+e.inspect(n)+", got "+e.inspect(s),"expected the own property descriptor for "+e.inspect(t)+" on #{this} to not match "+e.inspect(n),n,s,!0):this.assert(s,"expected #{this} to have an own property descriptor for "+e.inspect(t),"expected #{this} to not have an own property descriptor for "+e.inspect(t)),r(this,"object",s)}function g(){r(this,"doLength",!0)}function v(t,e){e&&r(this,"message",e);var i=r(this,"object"),o=r(this,"message"),s=r(this,"ssfi");new n(i,o,s,!0).to.have.property("length");var a=i.length;this.assert(a==t,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",t,a)}function M(t,e){e&&r(this,"message",e);var n=r(this,"object");this.assert(t.exec(n),"expected #{this} to match "+t,"expected #{this} not to match "+t)}function z(t){var n,o=r(this,"object"),s=e.type(o),a=e.type(t),h=r(this,"ssfi"),c=r(this,"deep"),u="",l=!0,f=r(this,"message"),d=(f=f?f+": ":"")+"when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";if("Map"===s||"Set"===s)u=c?"deeply ":"",p=[],o.forEach(function(t,e){p.push(e)}),"Array"!==a&&(t=Array.prototype.slice.call(arguments));else{switch(p=e.getOwnEnumerableProperties(o),a){case"Array":if(arguments.length>1)throw new i(d,void 0,h);break;case"Object":if(arguments.length>1)throw new i(d,void 0,h);t=Object.keys(t);break;default:t=Array.prototype.slice.call(arguments)}t=t.map(function(t){return"symbol"==typeof t?t:String(t)})}if(!t.length)throw new i(f+"keys required",void 0,h);var p,y=t.length,m=r(this,"any"),b=r(this,"all"),w=t;if(m||b||(b=!0),m&&(l=w.some(function(t){return p.some(function(n){return c?e.eql(t,n):t===n})})),b&&(l=w.every(function(t){return p.some(function(n){return c?e.eql(t,n):t===n})}),r(this,"contains")||(l=l&&t.length==p.length)),y>1){var x=(t=t.map(function(t){return e.inspect(t)})).pop();b&&(n=t.join(", ")+", and "+x),m&&(n=t.join(", ")+", or "+x)}else n=e.inspect(t[0]);n=(y>1?"keys ":"key ")+n,n=(r(this,"contains")?"contain ":"have ")+n,this.assert(l,"expected #{this} to "+u+n,"expected #{this} to not "+u+n,w.slice(0).sort(e.compareByInspect),p.sort(e.compareByInspect),!0)}function _(t,i,o){o&&r(this,"message",o);var s,a=r(this,"object"),h=r(this,"ssfi"),c=r(this,"message"),u=r(this,"negate")||!1;new n(a,c,h,!0).is.a("function"),(t instanceof RegExp||"string"==typeof t)&&(i=t,t=null);try{a()}catch(t){s=t}var l=void 0===t&&void 0===i,f=Boolean(t&&i),d=!1,p=!1;if(l||!l&&!u){var y="an error";t instanceof Error?y="#{exp}":t&&(y=e.checkError.getConstructorName(t)),this.assert(s,"expected #{this} to throw "+y,"expected #{this} to not throw an error but #{act} was thrown",t&&t.toString(),s instanceof Error?s.toString():"string"==typeof s?s:s&&e.checkError.getConstructorName(s))}if(t&&s){if(t instanceof Error)e.checkError.compatibleInstance(s,t)===u&&(f&&u?d=!0:this.assert(u,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(s&&!u?" but #{act} was thrown":""),t.toString(),s.toString()));e.checkError.compatibleConstructor(s,t)===u&&(f&&u?d=!0:this.assert(u,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(s?" but #{act} was thrown":""),t instanceof Error?t.toString():t&&e.checkError.getConstructorName(t),s instanceof Error?s.toString():s&&e.checkError.getConstructorName(s)))}if(s&&null!=i){var m="including";i instanceof RegExp&&(m="matching"),e.checkError.compatibleMessage(s,i)===u&&(f&&u?p=!0:this.assert(u,"expected #{this} to throw error "+m+" #{exp} but got #{act}","expected #{this} to throw error not "+m+" #{exp}",i,e.checkError.getMessage(s)))}d&&p&&this.assert(u,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}"+(s?" but #{act} was thrown":""),t instanceof Error?t.toString():t&&e.checkError.getConstructorName(t),s instanceof Error?s.toString():s&&e.checkError.getConstructorName(s)),r(this,"object",s)}function O(t,n){n&&r(this,"message",n);var i=r(this,"object"),o=r(this,"itself"),s="function"!=typeof i||o?i[t]:i.prototype[t];this.assert("function"==typeof s,"expected #{this} to respond to "+e.inspect(t),"expected #{this} to not respond to "+e.inspect(t))}function j(t,n){n&&r(this,"message",n);var i=t(r(this,"object"));this.assert(i,"expected #{this} to satisfy "+e.objDisplay(t),"expected #{this} to not satisfy"+e.objDisplay(t),!r(this,"negate"),i)}function S(t,e,o){o&&r(this,"message",o);var s=r(this,"object"),a=r(this,"message"),h=r(this,"ssfi");if(new n(s,a,h,!0).is.a("number"),"number"!=typeof t||"number"!=typeof e)throw new i((a=a?a+": ":"")+"the arguments to closeTo or approximately must be numbers",void 0,h);this.assert(Math.abs(s-t)<=e,"expected #{this} to be close to "+t+" +/- "+e,"expected #{this} not to be close to "+t+" +/- "+e)}function E(t,e,i){i&&r(this,"message",i);var o,s=r(this,"object"),a=r(this,"message"),h=r(this,"ssfi");new n(s,a,h,!0).is.a("function"),e?(new n(t,a,h,!0).to.have.property(e),o=t[e]):(new n(t,a,h,!0).is.a("function"),o=t()),s();var c=null==e?t():t[e],u=null==e?o:"."+e;r(this,"deltaMsgObj",u),r(this,"initialDeltaValue",o),r(this,"finalDeltaValue",c),r(this,"deltaBehavior","change"),r(this,"realDelta",c!==o),this.assert(o!==c,"expected "+u+" to change","expected "+u+" to not change")}function k(t,e,i){i&&r(this,"message",i);var o,s=r(this,"object"),a=r(this,"message"),h=r(this,"ssfi");new n(s,a,h,!0).is.a("function"),e?(new n(t,a,h,!0).to.have.property(e),o=t[e]):(new n(t,a,h,!0).is.a("function"),o=t()),new n(o,a,h,!0).is.a("number"),s();var c=null==e?t():t[e],u=null==e?o:"."+e;r(this,"deltaMsgObj",u),r(this,"initialDeltaValue",o),r(this,"finalDeltaValue",c),r(this,"deltaBehavior","increase"),r(this,"realDelta",c-o),this.assert(c-o>0,"expected "+u+" to increase","expected "+u+" to not increase")}function P(t,e,i){i&&r(this,"message",i);var o,s=r(this,"object"),a=r(this,"message"),h=r(this,"ssfi");new n(s,a,h,!0).is.a("function"),e?(new n(t,a,h,!0).to.have.property(e),o=t[e]):(new n(t,a,h,!0).is.a("function"),o=t()),new n(o,a,h,!0).is.a("number"),s();var c=null==e?t():t[e],u=null==e?o:"."+e;r(this,"deltaMsgObj",u),r(this,"initialDeltaValue",o),r(this,"finalDeltaValue",c),r(this,"deltaBehavior","decrease"),r(this,"realDelta",o-c),this.assert(c-o<0,"expected "+u+" to decrease","expected "+u+" to not decrease")}["to","be","been","is","and","has","have","with","that","which","at","of","same","but","does"].forEach(function(t){n.addProperty(t)}),n.addProperty("not",function(){r(this,"negate",!0)}),n.addProperty("deep",function(){r(this,"deep",!0)}),n.addProperty("nested",function(){r(this,"nested",!0)}),n.addProperty("own",function(){r(this,"own",!0)}),n.addProperty("ordered",function(){r(this,"ordered",!0)}),n.addProperty("any",function(){r(this,"any",!0),r(this,"all",!1)}),n.addProperty("all",function(){r(this,"all",!0),r(this,"any",!1)}),n.addChainableMethod("an",o),n.addChainableMethod("a",o),n.addChainableMethod("include",h,a),n.addChainableMethod("contain",h,a),n.addChainableMethod("contains",h,a),n.addChainableMethod("includes",h,a),n.addProperty("ok",function(){this.assert(r(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),n.addProperty("true",function(){this.assert(!0===r(this,"object"),"expected #{this} to be true","expected #{this} to be false",!r(this,"negate"))}),n.addProperty("false",function(){this.assert(!1===r(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!r(this,"negate"))}),n.addProperty("null",function(){this.assert(null===r(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),n.addProperty("undefined",function(){this.assert(void 0===r(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),n.addProperty("NaN",function(){this.assert(e.isNaN(r(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")}),n.addProperty("exist",function(){var t=r(this,"object");this.assert(null!=t,"expected #{this} to exist","expected #{this} to not exist")}),n.addProperty("empty",function(){var t,n=r(this,"object"),o=r(this,"ssfi"),s=r(this,"message");switch(s=s?s+": ":"",e.type(n).toLowerCase()){case"array":case"string":t=n.length;break;case"map":case"set":t=n.size;break;case"weakmap":case"weakset":throw new i(s+".empty was passed a weak collection",void 0,o);case"function":var a=s+".empty was passed a function "+e.getName(n);throw new i(a.trim(),void 0,o);default:if(n!==Object(n))throw new i(s+".empty was passed non-string primitive "+e.inspect(n),void 0,o);t=Object.keys(n).length}this.assert(0===t,"expected #{this} to be empty","expected #{this} not to be empty")}),n.addProperty("arguments",c),n.addProperty("Arguments",c),n.addMethod("equal",u),n.addMethod("equals",u),n.addMethod("eq",u),n.addMethod("eql",l),n.addMethod("eqls",l),n.addMethod("above",f),n.addMethod("gt",f),n.addMethod("greaterThan",f),n.addMethod("least",d),n.addMethod("gte",d),n.addMethod("below",p),n.addMethod("lt",p),n.addMethod("lessThan",p),n.addMethod("most",y),n.addMethod("lte",y),n.addMethod("within",function(t,o,s){s&&r(this,"message",s);var a=r(this,"object"),h=r(this,"doLength"),c=r(this,"message"),u=c?c+": ":"",l=r(this,"ssfi"),f=e.type(a).toLowerCase(),d=e.type(t).toLowerCase(),p=e.type(o).toLowerCase(),y=!0,m="date"===d&&"date"===p?t.toUTCString()+".."+o.toUTCString():t+".."+o;if(h&&new n(a,c,l,!0).to.have.property("length"),h||"date"!==f||"date"===d&&"date"===p)if("number"===d&&"number"===p||!h&&"number"!==f)if(h||"date"===f||"number"===f)y=!1;else{errorMessage=u+"expected "+("string"===f?"'"+a+"'":a)+" to be a number or a date"}else errorMessage=u+"the arguments to within must be numbers";else errorMessage=u+"the arguments to within must be dates";if(y)throw new i(errorMessage,void 0,l);if(h){var b=a.length;this.assert(b>=t&&b<=o,"expected #{this} to have a length within "+m,"expected #{this} to not have a length within "+m)}else this.assert(a>=t&&a<=o,"expected #{this} to be within "+m,"expected #{this} to not be within "+m)}),n.addMethod("instanceof",m),n.addMethod("instanceOf",m),n.addMethod("property",b),n.addMethod("ownProperty",w),n.addMethod("haveOwnProperty",w),n.addMethod("ownPropertyDescriptor",x),n.addMethod("haveOwnPropertyDescriptor",x),n.addChainableMethod("length",v,g),n.addChainableMethod("lengthOf",v,g),n.addMethod("match",M),n.addMethod("matches",M),n.addMethod("string",function(t,i){i&&r(this,"message",i);var o=r(this,"object"),s=r(this,"message"),a=r(this,"ssfi");new n(o,s,a,!0).is.a("string"),this.assert(~o.indexOf(t),"expected #{this} to contain "+e.inspect(t),"expected #{this} to not contain "+e.inspect(t))}),n.addMethod("keys",z),n.addMethod("key",z),n.addMethod("throw",_),n.addMethod("throws",_),n.addMethod("Throw",_),n.addMethod("respondTo",O),n.addMethod("respondsTo",O),n.addProperty("itself",function(){r(this,"itself",!0)}),n.addMethod("satisfy",j),n.addMethod("satisfies",j),n.addMethod("closeTo",S),n.addMethod("approximately",S),n.addMethod("members",function(t,i){i&&r(this,"message",i);var o=r(this,"object"),s=r(this,"message"),a=r(this,"ssfi");new n(o,s,a,!0).to.be.an("array"),new n(t,s,a,!0).to.be.an("array");var h,c,u,l=r(this,"contains"),f=r(this,"ordered");l?(c="expected #{this} to be "+(h=f?"an ordered superset":"a superset")+" of #{exp}",u="expected #{this} to not be "+h+" of #{exp}"):(c="expected #{this} to have the same "+(h=f?"ordered members":"members")+" as #{exp}",u="expected #{this} to not have the same "+h+" as #{exp}");var d=r(this,"deep")?e.eql:void 0;this.assert(function(t,e,n,i,r){if(!i){if(t.length!==e.length)return!1;e=e.slice()}return t.every(function(t,o){if(r)return n?n(t,e[o]):t===e[o];if(!n){var s=e.indexOf(t);return-1!==s&&(i||e.splice(s,1),!0)}return e.some(function(r,o){return!!n(t,r)&&(i||e.splice(o,1),!0)})})}(t,o,d,l,f),c,u,t,o,!0)}),n.addMethod("oneOf",function(t,e){e&&r(this,"message",e);var i=r(this,"object"),o=r(this,"message"),s=r(this,"ssfi");new n(t,o,s,!0).to.be.an("array"),this.assert(t.indexOf(i)>-1,"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",t,i)}),n.addMethod("change",E),n.addMethod("changes",E),n.addMethod("increase",k),n.addMethod("increases",k),n.addMethod("decrease",P),n.addMethod("decreases",P),n.addMethod("by",function(t,e){e&&r(this,"message",e);var n,i=r(this,"deltaMsgObj"),o=r(this,"initialDeltaValue"),s=r(this,"finalDeltaValue"),a=r(this,"deltaBehavior"),h=r(this,"realDelta");n="change"===a?Math.abs(s-o)===Math.abs(t):h===Math.abs(t),this.assert(n,"expected "+i+" to "+a+" by "+t,"expected "+i+" to not "+a+" by "+t)}),n.addProperty("extensible",function(){var t=r(this,"object"),e=t===Object(t)&&Object.isExtensible(t);this.assert(e,"expected #{this} to be extensible","expected #{this} to not be extensible")}),n.addProperty("sealed",function(){var t=r(this,"object"),e=t!==Object(t)||Object.isSealed(t);this.assert(e,"expected #{this} to be sealed","expected #{this} to not be sealed")}),n.addProperty("frozen",function(){var t=r(this,"object"),e=t!==Object(t)||Object.isFrozen(t);this.assert(e,"expected #{this} to be frozen","expected #{this} to not be frozen")}),n.addProperty("finite",function(t){var e=r(this,"object");this.assert("number"==typeof e&&isFinite(e),"expected #{this} to be a finite number","expected #{this} to not be a finite number")})}},374:function(t,e,n){
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var i=n(222);t.exports=function(t,e){
/*!
   * Module dependencies.
   */
var n=t.AssertionError,r=e.flag;
/*!
   * Module export.
   */
/*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   *   contain `numKittens` so that the `equal` assertion can reference it when
   *   needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   *   prepended to the error message that's generated by the assertion when it
   *   fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   *   contains a function reference that serves as the starting point for
   *   removing frames from the stack trace of the error that's created by the
   *   assertion when it fails. The goal is to provide a cleaner stack trace to
   *   end users by removing Chai's internal functions. Note that it only works
   *   in environments that support `Error.captureStackTrace`, and only when
   *   `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   *   should retain its current value, even as assertions are chained off of
   *   this object. This is usually set to `true` when creating a new assertion
   *   from within another assertion. It's also temporarily set to `true` before
   *   an overwritten assertion gets called by the overwriting assertion.
   *
   * @param {Mixed} obj target of the assertion
   * @param {String} msg (optional) custom error message
   * @param {Function} ssfi (optional) starting point for removing stack frames
   * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
   * @api private
   */
function o(t,n,i,s){return r(this,"ssfi",i||o),r(this,"lockSsfi",s),r(this,"object",t),r(this,"message",n),e.proxify(this)}t.Assertion=o,Object.defineProperty(o,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),i.includeStack},set:function(t){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),i.includeStack=t}}),Object.defineProperty(o,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),i.showDiff},set:function(t){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),i.showDiff=t}}),o.addProperty=function(t,n){e.addProperty(this.prototype,t,n)},o.addMethod=function(t,n){e.addMethod(this.prototype,t,n)},o.addChainableMethod=function(t,n,i){e.addChainableMethod(this.prototype,t,n,i)},o.overwriteProperty=function(t,n){e.overwriteProperty(this.prototype,t,n)},o.overwriteMethod=function(t,n){e.overwriteMethod(this.prototype,t,n)},o.overwriteChainableMethod=function(t,n,i){e.overwriteChainableMethod(this.prototype,t,n,i)},o.prototype.assert=function(t,o,s,a,h,c){var u=e.test(this,arguments);if(!1!==c&&(c=!0),void 0===a&&void 0===h&&(c=!1),!0!==i.showDiff&&(c=!1),!u){o=e.getMessage(this,arguments);var l=e.getActual(this,arguments);throw new n(o,{actual:l,expected:a,showDiff:c},i.includeStack?this.assert:r(this,"ssfi"))}},
/*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
Object.defineProperty(o.prototype,"_obj",{get:function(){return r(this,"object")},set:function(t){r(this,"object",t)}})}},375:function(t,e){t.exports=Number.isNaN||
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
function(t){return t!=t}},376:function(t,e,n){"use strict";var i=/\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;function r(t){var e="";if(void 0===t.name){var n=String(t).match(i);n&&(e=n[1])}else e=t.name;return e}t.exports={compatibleInstance:function(t,e){return e instanceof Error&&t===e},compatibleConstructor:function(t,e){return e instanceof Error?t.constructor===e.constructor||t instanceof e.constructor:(e.prototype instanceof Error||e===Error)&&(t.constructor===e||t instanceof e)},compatibleMessage:function(t,e){var n="string"==typeof t?t:t.message;return e instanceof RegExp?e.test(n):"string"==typeof e&&-1!==n.indexOf(e)},getMessage:function(t){var e="";return t&&t.message?e=t.message:"string"==typeof t&&(e=t),e},getConstructorName:function(t){var e=t;return t instanceof Error?e=r(t.constructor):"function"==typeof t&&(e=r(t).trim()||r(new t)),e}}},377:function(t,e,n){
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var i=n(311);t.exports=function(t){return Object.keys(t).concat(i(t))}},378:function(t,e,n){
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var i=n(252);t.exports=function(t,e){return i(t)<i(e)?-1:1}},379:function(t,e,n){
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var i=n(223),r=n(221);t.exports=function(t,e,n,o){var s=t.__methods[e],a=s.chainingBehavior;s.chainingBehavior=function(){var t=o(a).call(this);if(void 0!==t)return t;var e=new i.Assertion;return r(this,e),e};var h=s.method;s.method=function(){var t=n(h).apply(this,arguments);if(void 0!==t)return t;var e=new i.Assertion;return r(this,e),e}}},380:function(t,e,n){
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var i=n(250),r=n(223),o=n(206),s=n(249),a=n(221),h="function"==typeof Object.setPrototypeOf,c=function(){},u=Object.getOwnPropertyNames(c).filter(function(t){var e=Object.getOwnPropertyDescriptor(c,t);return"object"!=typeof e||!e.configurable}),l=Function.prototype.call,f=Function.prototype.apply;t.exports=function(t,e,n,c){"function"!=typeof c&&(c=function(){});var d={method:n,chainingBehavior:c};t.__methods||(t.__methods={}),t.__methods[e]=d,Object.defineProperty(t,e,{get:function(){d.chainingBehavior.call(this);var n=function(){o(this,"lockSsfi")||o(this,"ssfi",n);var t=d.method.apply(this,arguments);if(void 0!==t)return t;var e=new r.Assertion;return a(this,e),e};if(i(n,e,!0),h){var c=Object.create(this);c.call=l,c.apply=f,Object.setPrototypeOf(n,c)}else{Object.getOwnPropertyNames(t).forEach(function(e){if(-1===u.indexOf(e)){var i=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(n,e,i)}})}return a(this,n),s(n)},configurable:!0})}},381:function(t,e,n){
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var i=n(250),r=n(223),o=n(206),s=n(249),a=n(221);t.exports=function(t,e,n){var h=t[e],c=function(){throw new Error(e+" is not a function")};h&&"function"==typeof h&&(c=h);var u=function(){o(this,"lockSsfi")||o(this,"ssfi",u);var t=o(this,"lockSsfi");o(this,"lockSsfi",!0);var e=n(c).apply(this,arguments);if(o(this,"lockSsfi",t),void 0!==e)return e;var i=new r.Assertion;return a(this,i),i};i(u,e,!1),t[e]=s(u,e)}},382:function(t,e,n){
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var i=n(223),r=n(206),o=n(251),s=n(221);t.exports=function(t,e,n){var a=Object.getOwnPropertyDescriptor(t,e),h=function(){};a&&"function"==typeof a.get&&(h=a.get),Object.defineProperty(t,e,{get:function t(){o()||r(this,"lockSsfi")||r(this,"ssfi",t);var e=r(this,"lockSsfi");r(this,"lockSsfi",!0);var a=n(h).call(this);if(r(this,"lockSsfi",e),void 0!==a)return a;var c=new i.Assertion;return s(this,c),c},configurable:!0})}},383:function(t,e,n){
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var i=n(250),r=n(223),o=n(206),s=n(249),a=n(221);t.exports=function(t,e,n){var h=function(){o(this,"lockSsfi")||o(this,"ssfi",h);var t=n.apply(this,arguments);if(void 0!==t)return t;var e=new r.Assertion;return a(this,e),e};i(h,e,!1),t[e]=s(h,e)}},384:function(t,e,n){
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var i=n(223),r=n(206),o=n(251),s=n(221);t.exports=function(t,e,n){n=void 0===n?function(){}:n,Object.defineProperty(t,e,{get:function t(){o()||r(this,"lockSsfi")||r(this,"ssfi",t);var e=n.call(this);if(void 0!==e)return e;var a=new i.Assertion;return s(this,a),a},configurable:!0})}},385:function(t,e,n){"use strict";
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */var i=n(269);function r(){this._key="chai/deep-eql__"+Math.random()+Date.now()}r.prototype={get:function(t){return t[this._key]},set:function(t,e){Object.isExtensible(t)&&Object.defineProperty(t,this._key,{value:e,configurable:!0})}};var o="function"==typeof WeakMap?WeakMap:r;
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/function s(t,e,n){if(!n||m(t)||m(e))return null;var i=n.get(t);if(i){var r=i.get(e);if("boolean"==typeof r)return r}return null}
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/function a(t,e,n,i){if(n&&!m(t)&&!m(e)){var r=n.get(t);r?r.set(e,i):((r=new o).set(e,i),n.set(t,r))}}
/*!
 * Primary Export
 */function h(t,e,n){if(n&&n.comparator)return u(t,e,n);var i=c(t,e);return null!==i?i:u(t,e,n)}function c(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e||!m(t)&&!m(e)&&null}
/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/function u(t,e,n){(n=n||{}).memoize=!1!==n.memoize&&(n.memoize||new o);var r=n&&n.comparator,u=s(t,e,n.memoize);if(null!==u)return u;var m=s(e,t,n.memoize);if(null!==m)return m;if(r){var b=r(t,e);if(!1===b||!0===b)return a(t,e,n.memoize,b),b;var w=c(t,e);if(null!==w)return w}var x=i(t);if(x!==i(e))return a(t,e,n.memoize,!1),!1;a(t,e,n.memoize,!0);var g=function(t,e,n,i){switch(n){case"String":case"Number":case"Boolean":case"Date":return h(t.valueOf(),e.valueOf());case"Promise":case"Symbol":case"function":case"WeakMap":case"WeakSet":case"Error":return t===e;case"Arguments":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"Array":return f(t,e,i);case"RegExp":
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
return function(t,e){return t.toString()===e.toString()}
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */(t,e);case"Generator":
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
return function(t,e,n){return f(p(t),p(e),n)}
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */(t,e,i);case"DataView":return f(new Uint8Array(t.buffer),new Uint8Array(e.buffer),i);case"ArrayBuffer":return f(new Uint8Array(t),new Uint8Array(e),i);case"Set":case"Map":return l(t,e,i);default:
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
return function(t,e,n){var i=y(t),r=y(e);if(i.length&&i.length===r.length)return i.sort(),r.sort(),!1!==f(i,r)&&
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
function(t,e,n,i){var r=n.length;if(0===r)return!0;for(var o=0;o<r;o+=1)if(!1===h(t[n[o]],e[n[o]],i))return!1;return!0}(t,e,i,n);var o=d(t),s=d(e);if(o.length&&o.length===s.length)return o.sort(),s.sort(),f(o,s,n);if(0===i.length&&0===o.length&&0===r.length&&0===s.length)return!0;return!1}
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */(t,e,i)}}(t,e,x,n);return a(t,e,n.memoize,g),g}function l(t,e,n){if(t.size!==e.size)return!1;if(0===t.size)return!0;var i=[],r=[];return t.forEach(function(t,e){i.push([t,e])}),e.forEach(function(t,e){r.push([t,e])}),f(i.sort(),r.sort(),n)}
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */function f(t,e,n){var i=t.length;if(i!==e.length)return!1;if(0===i)return!0;for(var r=-1;++r<i;)if(!1===h(t[r],e[r],n))return!1;return!0}
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
function d(t){if(function(t){return"undefined"!=typeof Symbol&&"object"==typeof t&&void 0!==Symbol.iterator&&"function"==typeof t[Symbol.iterator]}(t))try{return p(t[Symbol.iterator]())}catch(t){return[]}return[]}
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */function p(t){for(var e=t.next(),n=[e.value];!1===e.done;)e=t.next(),n.push(e.value);return n}
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */function y(t){var e=[];for(var n in t)e.push(n);return e}function m(t){return null===t||"object"!=typeof t}t.exports=h,t.exports.MemoizeMap=o},386:function(t,e){
/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){var e=[];for(var n in t)e.push(n);return e}},387:function(t,e,n){
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var i=n(206),r=n(315),o=(n(252),n(312));t.exports=function(t,e){var n=i(t,"negate"),s=i(t,"object"),a=e[3],h=r(t,e),c=n?e[2]:e[1],u=i(t,"message");return"function"==typeof c&&(c=c()),c=(c=c||"").replace(/#\{this\}/g,function(){return o(s)}).replace(/#\{act\}/g,function(){return o(h)}).replace(/#\{exp\}/g,function(){return o(a)}),u?u+": "+c:c}},388:function(t,e,n){
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var i=n(316),r=n(206),o=n(269);t.exports=function(t,e){var n=r(t,"message"),s=r(t,"ssfi");n=n?n+": ":"",t=r(t,"object"),(e=e.map(function(t){return t.toLowerCase()})).sort();var a=e.map(function(t,n){var i=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an":"a";return(e.length>1&&n===e.length-1?"or ":"")+i+" "+t}).join(", "),h=o(t).toLowerCase();if(!e.some(function(t){return h===t}))throw new i(n+"object tested must be "+a+", but "+h+" given",void 0,s)}},389:function(t,e,n){
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var i=n(206);t.exports=function(t,e){var n=i(t,"negate"),r=e[0];return n?!r:r}},390:function(t,e,n){"use strict";function i(t,e){return null!=t&&e in Object(t)}function r(t){return t.replace(/([^\\])\[/g,"$1.[").match(/(\\\.|[^.]+?)+/g).map(function(t){var e=/^\[(\d+)\]$/.exec(t);return e?{i:parseFloat(e[1])}:{p:t.replace(/\\([.\[\]])/g,"$1")}})}function o(t,e,n){var i=t,r=null;n=void 0===n?e.length:n;for(var o=0;o<n;o++){var s=e[o];i&&(i=void 0===s.p?i[s.i]:i[s.p],o===n-1&&(r=i))}return r}function s(t,e){var n=r(e),s=n[n.length-1],a={parent:n.length>1?o(t,n,n.length-1):t,name:s.p||s.i,value:o(t,n)};return a.exists=i(a.parent,a.name),a}t.exports={hasProperty:i,getPathInfo:s,getPathValue:function(t,e){return s(t,e).value},setPathValue:function(t,e,n){return function(t,e,n){for(var i=t,r=n.length,o=null,s=0;s<r;s++){var a=null,h=null;if(o=n[s],s===r-1)i[a=void 0===o.p?o.i:o.p]=e;else if(void 0!==o.p&&i[o.p])i=i[o.p];else if(void 0!==o.i&&i[o.i])i=i[o.i];else{var c=n[s+1];a=void 0===o.p?o.i:o.p,h=void 0===c.p?[]:{},i[a]=h,i=i[a]}}}(t,n,r(e)),t}}},391:function(t,e,n){
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Dependencies that are used for multiple exports are required here only once
 */
var i=n(390);
/*!
 * test utility
 */e.test=n(389),
/*!
 * type utility
 */
e.type=n(269),
/*!
 * expectTypes utility
 */
e.expectTypes=n(388),
/*!
 * message utility
 */
e.getMessage=n(387),
/*!
 * actual utility
 */
e.getActual=n(315),
/*!
 * Inspect util
 */
e.inspect=n(252),
/*!
 * Object Display util
 */
e.objDisplay=n(312),
/*!
 * Flag utility
 */
e.flag=n(206),
/*!
 * Flag transferring utility
 */
e.transferFlags=n(221),
/*!
 * Deep equal utility
 */
e.eql=n(385),
/*!
 * Deep path info
 */
e.getPathInfo=i.getPathInfo,
/*!
 * Check if a property exists
 */
e.hasProperty=i.hasProperty,
/*!
 * Function name
 */
e.getName=n(314),
/*!
 * add Property
 */
e.addProperty=n(384),
/*!
 * add Method
 */
e.addMethod=n(383),
/*!
 * overwrite Property
 */
e.overwriteProperty=n(382),
/*!
 * overwrite Method
 */
e.overwriteMethod=n(381),
/*!
 * Add a chainable method
 */
e.addChainableMethod=n(380),
/*!
 * Overwrite chainable method
 */
e.overwriteChainableMethod=n(379),
/*!
 * Compare by inspect method
 */
e.compareByInspect=n(378),
/*!
 * Get own enumerable property symbols method
 */
e.getOwnEnumerablePropertySymbols=n(311),
/*!
 * Get own enumerable properties method
 */
e.getOwnEnumerableProperties=n(377),
/*!
 * Checks error against a given set of criteria
 */
e.checkError=n(376),
/*!
 * Proxify util
 */
e.proxify=n(249),
/*!
 * addLengthGuard util
 */
e.addLengthGuard=n(250),
/*!
 * isProxyEnabled helper
 */
e.isProxyEnabled=n(251),
/*!
 * isNaN method
 */
e.isNaN=n(375)},5:function(t,e,n){"use strict";var i,r,o,s,a;n.d(e,"a",function(){return i}),i={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:(o="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),s=new Array(36),a=0,function(){for(var t=0;t<36;t++)8===t||13===t||18===t||23===t?s[t]="-":14===t?s[t]="4":(a<=2&&(a=33554432+16777216*Math.random()|0),r=15&a,a>>=4,s[t]=o[19===t?3&r|8:r]);return s.join("")}),clamp:function(t,e,n){return Math.max(e,Math.min(n,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)},smoothstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*(3-2*t)},smootherstep:function(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e))*t*t*(t*(6*t-15)+10)},random16:function(){return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),Math.random()},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},degToRad:function(t){return t*i.DEG2RAD},radToDeg:function(t){return t*i.RAD2DEG},isPowerOfTwo:function(t){return 0==(t&t-1)&&0!==t},nearestPowerOfTwo:function(t){return Math.pow(2,Math.round(Math.log(t)/Math.LN2))},nextPowerOfTwo:function(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t}}},7:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var i,r,o,s,a,h,c=n(5),u=n(1);function l(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}l.prototype={constructor:l,isMatrix4:!0,set:function(t,e,n,i,r,o,s,a,h,c,u,l,f,d,p,y){var m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=s,m[13]=a,m[2]=h,m[6]=c,m[10]=u,m[14]=l,m[3]=f,m[7]=d,m[11]=p,m[15]=y,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return(new l).fromArray(this.elements)},copy:function(t){return this.elements.set(t.elements),this},copyPosition:function(t){var e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this},extractBasis:function(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this},makeBasis:function(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this},extractRotation:function(t){void 0===h&&(h=new u.a);var e=this.elements,n=t.elements,i=1/h.setFromMatrixColumn(t,0).length(),r=1/h.setFromMatrixColumn(t,1).length(),o=1/h.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,this},makeRotationFromEuler:function(t){!1===(t&&t.isEuler)&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),s=Math.sin(n),a=Math.cos(i),h=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if("XYZ"===t.order){var l=o*c,f=o*u,d=s*c,p=s*u;e[0]=a*c,e[4]=-a*u,e[8]=h,e[1]=f+d*h,e[5]=l-p*h,e[9]=-s*a,e[2]=p-l*h,e[6]=d+f*h,e[10]=o*a}else if("YXZ"===t.order){var y=a*c,m=a*u,b=h*c,w=h*u;e[0]=y+w*s,e[4]=b*s-m,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-s,e[2]=m*s-b,e[6]=w+y*s,e[10]=o*a}else if("ZXY"===t.order){y=a*c,m=a*u,b=h*c,w=h*u;e[0]=y-w*s,e[4]=-o*u,e[8]=b+m*s,e[1]=m+b*s,e[5]=o*c,e[9]=w-y*s,e[2]=-o*h,e[6]=s,e[10]=o*a}else if("ZYX"===t.order){l=o*c,f=o*u,d=s*c,p=s*u;e[0]=a*c,e[4]=d*h-f,e[8]=l*h+p,e[1]=a*u,e[5]=p*h+l,e[9]=f*h-d,e[2]=-h,e[6]=s*a,e[10]=o*a}else if("YZX"===t.order){var x=o*a,g=o*h,v=s*a,M=s*h;e[0]=a*c,e[4]=M-x*u,e[8]=v*u+g,e[1]=u,e[5]=o*c,e[9]=-s*c,e[2]=-h*c,e[6]=g*u+v,e[10]=x-M*u}else if("XZY"===t.order){x=o*a,g=o*h,v=s*a,M=s*h;e[0]=a*c,e[4]=-u,e[8]=h*c,e[1]=x*u+M,e[5]=o*c,e[9]=g*u-v,e[2]=v*u-g,e[6]=s*c,e[10]=M*u+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},makeRotationFromQuaternion:function(t){var e=this.elements,n=t.x,i=t.y,r=t.z,o=t.w,s=n+n,a=i+i,h=r+r,c=n*s,u=n*a,l=n*h,f=i*a,d=i*h,p=r*h,y=o*s,m=o*a,b=o*h;return e[0]=1-(f+p),e[4]=u-b,e[8]=l+m,e[1]=u+b,e[5]=1-(c+p),e[9]=d-y,e[2]=l-m,e[6]=d+y,e[10]=1-(c+f),e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this},lookAt:function(t,e,n){void 0===o&&(o=new u.a,s=new u.a,a=new u.a);var i=this.elements;return a.subVectors(t,e).normalize(),0===a.lengthSq()&&(a.z=1),o.crossVectors(n,a).normalize(),0===o.lengthSq()&&(a.z+=1e-4,o.crossVectors(n,a).normalize()),s.crossVectors(a,o),i[0]=o.x,i[4]=s.x,i[8]=a.x,i[1]=o.y,i[5]=s.y,i[9]=a.y,i[2]=o.z,i[6]=s.z,i[10]=a.z,this},multiply:function(t,e){return void 0!==e?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)},premultiply:function(t){return this.multiplyMatrices(t,this)},multiplyMatrices:function(t,e){var n=t.elements,i=e.elements,r=this.elements,o=n[0],s=n[4],a=n[8],h=n[12],c=n[1],u=n[5],l=n[9],f=n[13],d=n[2],p=n[6],y=n[10],m=n[14],b=n[3],w=n[7],x=n[11],g=n[15],v=i[0],M=i[4],z=i[8],_=i[12],O=i[1],j=i[5],S=i[9],E=i[13],k=i[2],P=i[6],N=i[10],A=i[14],D=i[3],C=i[7],T=i[11],V=i[15];return r[0]=o*v+s*O+a*k+h*D,r[4]=o*M+s*j+a*P+h*C,r[8]=o*z+s*S+a*N+h*T,r[12]=o*_+s*E+a*A+h*V,r[1]=c*v+u*O+l*k+f*D,r[5]=c*M+u*j+l*P+f*C,r[9]=c*z+u*S+l*N+f*T,r[13]=c*_+u*E+l*A+f*V,r[2]=d*v+p*O+y*k+m*D,r[6]=d*M+p*j+y*P+m*C,r[10]=d*z+p*S+y*N+m*T,r[14]=d*_+p*E+y*A+m*V,r[3]=b*v+w*O+x*k+g*D,r[7]=b*M+w*j+x*P+g*C,r[11]=b*z+w*S+x*N+g*T,r[15]=b*_+w*E+x*A+g*V,this},multiplyToArray:function(t,e,n){var i=this.elements;return this.multiplyMatrices(t,e),n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this},multiplyScalar:function(t){var e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this},applyToVector3Array:function(){var t;return function(e,n,i){void 0===t&&(t=new u.a),void 0===n&&(n=0),void 0===i&&(i=e.length);for(var r=0,o=n;r<i;r+=3,o+=3)t.fromArray(e,o),t.applyMatrix4(this),t.toArray(e,o);return e}}(),applyToBuffer:function(){var t;return function(e,n,i){void 0===t&&(t=new u.a),void 0===n&&(n=0),void 0===i&&(i=e.length/e.itemSize);for(var r=0,o=n;r<i;r++,o++)t.x=e.getX(o),t.y=e.getY(o),t.z=e.getZ(o),t.applyMatrix4(this),e.setXYZ(t.x,t.y,t.z);return e}}(),determinant:function(){var t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],s=t[5],a=t[9],h=t[13],c=t[2],u=t[6],l=t[10],f=t[14];return t[3]*(+r*a*u-i*h*u-r*s*l+n*h*l+i*s*f-n*a*f)+t[7]*(+e*a*f-e*h*l+r*o*l-i*o*f+i*h*c-r*a*c)+t[11]*(+e*h*u-e*s*f-r*o*u+n*o*f+r*s*c-n*h*c)+t[15]*(-i*s*c-e*a*u+e*s*l+i*o*u-n*o*l+n*a*c)},transpose:function(){var t,e=this.elements;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this},flattenToArrayOffset:function(t,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."),this.toArray(t,e)},getPosition:function(){var t;return function(){return void 0===t&&(t=new u.a),console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),t.setFromMatrixColumn(this,3)}}(),setPosition:function(t){var e=this.elements;return e[12]=t.x,e[13]=t.y,e[14]=t.z,this},getInverse:function(t,e){var n=this.elements,i=t.elements,r=i[0],o=i[1],s=i[2],a=i[3],h=i[4],c=i[5],u=i[6],l=i[7],f=i[8],d=i[9],p=i[10],y=i[11],m=i[12],b=i[13],w=i[14],x=i[15],g=d*w*l-b*p*l+b*u*y-c*w*y-d*u*x+c*p*x,v=m*p*l-f*w*l-m*u*y+h*w*y+f*u*x-h*p*x,M=f*b*l-m*d*l+m*c*y-h*b*y-f*c*x+h*d*x,z=m*d*u-f*b*u-m*c*p+h*b*p+f*c*w-h*d*w,_=r*g+o*v+s*M+a*z;if(0===_){var O="THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";if(!0===e)throw new Error(O);return console.warn(O),this.identity()}var j=1/_;return n[0]=g*j,n[1]=(b*p*a-d*w*a-b*s*y+o*w*y+d*s*x-o*p*x)*j,n[2]=(c*w*a-b*u*a+b*s*l-o*w*l-c*s*x+o*u*x)*j,n[3]=(d*u*a-c*p*a-d*s*l+o*p*l+c*s*y-o*u*y)*j,n[4]=v*j,n[5]=(f*w*a-m*p*a+m*s*y-r*w*y-f*s*x+r*p*x)*j,n[6]=(m*u*a-h*w*a-m*s*l+r*w*l+h*s*x-r*u*x)*j,n[7]=(h*p*a-f*u*a+f*s*l-r*p*l-h*s*y+r*u*y)*j,n[8]=M*j,n[9]=(m*d*a-f*b*a-m*o*y+r*b*y+f*o*x-r*d*x)*j,n[10]=(h*b*a-m*c*a+m*o*l-r*b*l-h*o*x+r*c*x)*j,n[11]=(f*c*a-h*d*a-f*o*l+r*d*l+h*o*y-r*c*y)*j,n[12]=z*j,n[13]=(f*b*s-m*d*s+m*o*p-r*b*p-f*o*w+r*d*w)*j,n[14]=(m*c*s-h*b*s-m*o*u+r*b*u+h*o*w-r*c*w)*j,n[15]=(h*d*s-f*c*s+f*o*u-r*d*u-h*o*p+r*c*p)*j,this},scale:function(t){var e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this},getMaxScaleOnAxis:function(){var t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))},makeTranslation:function(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this},makeRotationX:function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this},makeRotationY:function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this},makeRotationZ:function(t){var e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(t,e){var n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,s=t.y,a=t.z,h=r*o,c=r*s;return this.set(h*o+n,h*s-i*a,h*a+i*s,0,h*s+i*a,c*s+n,c*a-i*o,0,h*a-i*s,c*a+i*o,r*a*a+n,0,0,0,0,1),this},makeScale:function(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this},compose:function(t,e,n){return this.makeRotationFromQuaternion(e),this.scale(n),this.setPosition(t),this},decompose:function(t,e,n){void 0===i&&(i=new u.a,r=new l);var o=this.elements,s=i.set(o[0],o[1],o[2]).length(),a=i.set(o[4],o[5],o[6]).length(),h=i.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),t.x=o[12],t.y=o[13],t.z=o[14],r.elements.set(this.elements);var c=1/s,f=1/a,d=1/h;return r.elements[0]*=c,r.elements[1]*=c,r.elements[2]*=c,r.elements[4]*=f,r.elements[5]*=f,r.elements[6]*=f,r.elements[8]*=d,r.elements[9]*=d,r.elements[10]*=d,e.setFromRotationMatrix(r),n.x=s,n.y=a,n.z=h,this},makeFrustum:function(t,e,n,i,r,o){var s=this.elements,a=2*r/(e-t),h=2*r/(i-n),c=(e+t)/(e-t),u=(i+n)/(i-n),l=-(o+r)/(o-r),f=-2*o*r/(o-r);return s[0]=a,s[4]=0,s[8]=c,s[12]=0,s[1]=0,s[5]=h,s[9]=u,s[13]=0,s[2]=0,s[6]=0,s[10]=l,s[14]=f,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this},makePerspective:function(t,e,n,i){var r=n*Math.tan(c.a.DEG2RAD*t*.5),o=-r,s=o*e,a=r*e;return this.makeFrustum(s,a,o,r,n,i)},makeOrthographic:function(t,e,n,i,r,o){var s=this.elements,a=1/(e-t),h=1/(n-i),c=1/(o-r),u=(e+t)*a,l=(n+i)*h,f=(o+r)*c;return s[0]=2*a,s[4]=0,s[8]=0,s[12]=-u,s[1]=0,s[5]=2*h,s[9]=0,s[13]=-l,s[2]=0,s[6]=0,s[10]=-2*c,s[14]=-f,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this},equals:function(t){for(var e=this.elements,n=t.elements,i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0},fromArray:function(t,e){void 0===e&&(e=0);for(var n=0;n<16;n++)this.elements[n]=t[n+e];return this},toArray:function(t,e){void 0===t&&(t=[]),void 0===e&&(e=0);var n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}}}]);