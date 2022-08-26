(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function l(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ba(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ea=da(this),n;
if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var fa={a:!0},ha={};try{ha.__proto__=fa;p=ha.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=n;function r(){this.l=!1;this.j=null;this.u=void 0;this.g=1;this.i=this.m=0;this.s=this.h=null}function t(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}r.prototype.o=function(a){this.u=a};
function u(a,b){a.h={V:b,O:!0};a.g=a.m||a.i}r.prototype.return=function(a){this.h={return:a};this.g=this.i};function v(a,b,c){a.g=c;return{value:b}}r.prototype.I=function(a){this.g=a};function ja(a){this.g=new r;this.h=a}function ka(a,b){t(a.g);var c=a.g.j;if(c)return w(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return x(a)}
function w(a,b,c,d){try{var e=b.call(a.g.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.l=!1,e;var f=e.value}catch(g){return a.g.j=null,u(a.g,g),x(a)}a.g.j=null;d.call(a.g,f);return x(a)}function x(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.l=!1,{value:b.value,done:!1}}catch(c){a.g.u=void 0,u(a.g,c)}a.g.l=!1;if(a.g.h){b=a.g.h;a.g.h=null;if(b.O)throw b.V;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function la(a){this.next=function(b){t(a.g);a.g.j?b=w(a,a.g.j.next,b,a.g.o):(a.g.o(b),b=x(a));return b};this.throw=function(b){t(a.g);a.g.j?b=w(a,a.g.j["throw"],b,a.g.o):(u(a.g,b),b=x(a));return b};this.return=function(b){return ka(a,b)};this[Symbol.iterator]=function(){return this}}function ma(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}f(a.next())})}var y=this||self;
function na(){}function oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function pa(a,b){function c(){}c.prototype=b.prototype;a.J=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.na=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}function qa(a){return a};function z(a,b,c){return a.hasAttribute(b)?a.getAttribute(b):c};var ra=["ICALENDAR","GOOGLE","WINDOWS_LIVE","YAHOO"],A={ba:"description",da:"end-date",ea:"end-time",fa:"event-title",LOCATION:"location",ha:"start-date",ia:"start-time",ja:"timezone",ICALENDAR:"icalendar",GOOGLE:"google",WINDOWS_LIVE:"windows-live",YAHOO:"yahoo",BG_COLOR:"bg-color",FONT_COLOR:"font-color",L:"font-family",M:"font-size",N:"font-weight",U:"highlight-color"},sa={ICALENDAR:"gwd-icalendar-",GOOGLE:"gwd-google-calendar-",WINDOWS_LIVE:"gwd-windows-live-calendar-",YAHOO:"gwd-yahoo-calendar-"},
ta={ICALENDAR:"iCalendar",GOOGLE:"Google",WINDOWS_LIVE:"Windows Live",YAHOO:"Yahoo"},ua={BG_COLOR:"#fff",FONT_COLOR:"#000",$:"0px 5px 10px rgba(0, 0, 0, 0.292969)",aa:"0px -5px 10px rgba(0, 0, 0, 0.292969)",L:"arial, helvetica, sans-serif",M:"12pt",N:"normal",ga:"hidden",U:"#e0e0e0",ma:"visible"},va={X:"background-color",Y:"border-color",Z:"box-shadow",COLOR:"color",ca:"display",L:"font-family",M:"font-size",N:"font-weight",ka:"top",la:"visibility"};function wa(a,b,c){c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d);return d};function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}pa(B,Error);B.prototype.name="CustomError";function xa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");B.call(this,c+a[d])}pa(xa,B);xa.prototype.name="AssertionError";var ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function za(a){return Array.prototype.concat.apply([],arguments)};var Aa={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var C;function Ba(){if(void 0===C){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){y.console&&y.console.error(c.message)}C=a}else C=a}return C};function D(a,b){this.h=a===Ca&&b||"";this.i=Da}D.prototype.v=!0;D.prototype.g=function(){return this.h};function Ea(a){return a instanceof D&&a.constructor===D&&a.i===Da?a.h:"type_error:Const"}var Da={},Ca={};var Fa={};function E(a,b){this.h=b===Fa?a:"";this.v=!0}E.prototype.g=function(){return this.h.toString()};function Ga(a){var b=Ba();a=b?b.createScript(a):a;return new E(a,Fa)}E.prototype.toString=function(){return this.h.toString()};var Ha=Ga("");function F(a,b){this.i=b===Ia?a:""}F.prototype.v=!0;F.prototype.g=function(){return this.i.toString()};F.prototype.j=!0;F.prototype.h=function(){return 1};F.prototype.toString=function(){return this.i+""};function Ja(a){return a instanceof F&&a.constructor===F?a.i:"type_error:TrustedResourceUrl"}var Ia={};function Ka(a){if(!La.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ma,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Na,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Oa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Pa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Qa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ra,"&#0;"));return a}var Ma=/&/g,Na=/</g,Oa=/>/g,Pa=/"/g,Qa=/'/g,Ra=/\x00/g,La=/[\x00&<>"']/;function G(a,b){this.i=b===H?a:""}G.prototype.v=!0;G.prototype.g=function(){return this.i.toString()};G.prototype.j=!0;G.prototype.h=function(){return 1};G.prototype.toString=function(){return this.i.toString()};function Sa(a){return a instanceof G&&a.constructor===G?a.i:"type_error:SafeUrl"}
var Ta=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),Ua=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Va=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function Wa(a){if(a instanceof G)return a;a="object"==typeof a&&a.v?a.g():String(a);if(Va.test(a))a=new G(a,H);else{a=String(a);a=a.replace(/(%0A|%0D)/g,"");var b=a.match(Ua);a=b&&Ta.test(b[1])?new G(a,H):null}return a}var H={},Xa=new G("about:invalid#zClosurez",H);var Ya={};function I(a,b){this.h=b===Ya?a:"";this.v=!0}I.prototype.g=function(){return this.h};I.prototype.toString=function(){return this.h.toString()};var Za=new I("",Ya);
function $a(a){if(a instanceof G)return'url("'+Sa(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof D)a=Ea(a);else{a=String(a);var b=a.replace(ab,"$1").replace(ab,"$1").replace(bb,"url");if(cb.test(b)){if(b=!db.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&eb(a)}a=b?fb(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new xa("Value does not allow [{;}], got: %s.",[a]);return a}
function eb(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var cb=RegExp("^[-,.\"'%_!# a-zA-Z0-9\\[\\]]+$"),bb=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),ab=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-z.%\\[\\], ]+\\)","g"),db=/\/\*/;
function fb(a){return a.replace(bb,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,q){f=h;return q});b=(Wa(d)||Xa).g();return c+f+b+f+e})};var J;a:{var gb=y.navigator;if(gb){var hb=gb.userAgent;if(hb){J=hb;break a}}J=""};var ib={};function K(a,b,c){this.i=c===ib?a:"";this.l=b;this.v=this.j=!0}K.prototype.h=function(){return this.l};K.prototype.g=function(){return this.i.toString()};K.prototype.toString=function(){return this.i.toString()};function L(a){return a instanceof K&&a.constructor===K?a.i:"type_error:SafeHtml"}function jb(a){if(a instanceof K)return a;var b="object"==typeof a,c=null;b&&a.j&&(c=a.h());return M(Ka(b&&a.v?a.g():String(a)),c)}
function kb(a){if(!lb.test(a))throw Error("");if(a.toUpperCase()in mb)throw Error("");}function nb(a){function b(f){Array.isArray(f)?f.forEach(b):(f=jb(f),e.push(L(f).toString()),f=f.h(),0==d?d=f:0!=f&&d!=f&&(d=null))}var c=jb(ob),d=c.h(),e=[];a.forEach(b);return M(e.join(L(c).toString()),d)}function pb(a){return nb(Array.prototype.slice.call(arguments))}function M(a,b){var c=Ba();a=c?c.createHTML(a):a;return new K(a,b,ib)}
function qb(a,b,c){var d=null,e="";if(b)for(m in b)if(Object.prototype.hasOwnProperty.call(b,m)){if(!lb.test(m))throw Error("");var f=b[m];if(null!=f){var g=m;if(f instanceof D)f=Ea(f);else if("style"==g.toLowerCase()){var h=f;if(!oa(h))throw Error("");if(!(h instanceof I)){f=void 0;var q="";for(f in h)if(Object.prototype.hasOwnProperty.call(h,f)){if(!/^[-_a-zA-Z0-9]+$/.test(f))throw Error("Name allows only [-_a-zA-Z0-9], got: "+f);var k=h[f];null!=k&&(k=Array.isArray(k)?k.map($a).join(" "):$a(k),
q+=f+":"+k+";")}h=q?new I(q,Ya):Za}f=h instanceof I&&h.constructor===I?h.h:"type_error:SafeStyle"}else{if(/^on/i.test(g))throw Error("");if(g.toLowerCase()in rb)if(f instanceof F)f=Ja(f).toString();else if(f instanceof G)f=Sa(f);else if("string"===typeof f)f=(Wa(f)||Xa).g();else throw Error("");}f.v&&(f=f.g());g=g+'="'+Ka(String(f))+'"';e+=" "+g}}var m="<"+a+e;null==c?c=[]:Array.isArray(c)||(c=[c]);!0===Aa[a.toLowerCase()]?m+=">":(d=pb(c),m+=">"+L(d).toString()+"</"+a+">",d=d.h());(a=b&&b.dir)&&(/^(ltr|rtl|auto)$/i.test(a)?
d=0:d=null);return M(m,d)}var lb=/^[a-zA-Z0-9-]+$/,rb={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},mb={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},sb=M("<!DOCTYPE html>",0),ob=new K(y.trustedTypes&&y.trustedTypes.emptyHTML||"",0,ib);var tb=/^[\w+/_-]+[=]{0,2}$/;function N(){return window.navigator.userAgent||""};function ub(){return"ontouchstart"in window||0<window.navigator.MaxTouchPoints||0<window.navigator.msMaxTouchPoints};function vb(a){vb[" "](a);return a}vb[" "]=na;var wb=-1!=J.indexOf("Gecko")&&!(-1!=J.toLowerCase().indexOf("webkit")&&-1==J.indexOf("Edge"))&&!(-1!=J.indexOf("Trident")||-1!=J.indexOf("MSIE"))&&-1==J.indexOf("Edge");function xb(a,b){this.type=a;this.target=b}xb.prototype.g=function(){};var yb=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{y.addEventListener("test",na,b),y.removeEventListener("test",na,b)}catch(c){}return a}();function O(a){xb.call(this,a?a.type:"");this.relatedTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;if(a){var b=this.type=a.type,c=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;var d=a.relatedTarget;if(d){if(wb){a:{try{vb(d.nodeName);var e=!0;break a}catch(f){}e=!1}e||(d=
null)}}else"mouseover"==b?d=a.fromElement:"mouseout"==b&&(d=a.toElement);this.relatedTarget=d;c?(this.clientX=void 0!==c.clientX?c.clientX:c.pageX,this.clientY=void 0!==c.clientY?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=
a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:zb[a.pointerType]||"";this.state=a.state;this.h=a;a.defaultPrevented&&O.J.g.call(this)}}pa(O,xb);var zb={2:"touch",3:"pen",4:"mouse"};O.prototype.g=function(){O.J.g.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ab="closure_listenable_"+(1E6*Math.random()|0);var Bb=0;function Cb(a,b,c,d,e){this.listener=a;this.g=null;this.src=b;this.type=c;this.capture=!!d;this.j=e;this.key=++Bb;this.h=this.H=!1}function Db(a){a.h=!0;a.listener=null;a.g=null;a.src=null;a.j=null};function P(a){this.src=a;this.g={};this.h=0}P.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.g[f];a||(a=this.g[f]=[],this.h++);var g=Eb(a,b,d,e);-1<g?(b=a[g],c||(b.H=!1)):(b=new Cb(b,this.src,f,!!d,e),b.H=c,a.push(b));return b};P.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.g))return!1;var e=this.g[a];b=Eb(e,b,c,d);return-1<b?(Db(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.g[a],this.h--),!0):!1};
function Eb(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.h&&f.listener==b&&f.capture==!!c&&f.j==d)return e}return-1};var Fb="closure_lm_"+(1E6*Math.random()|0),Gb={},Hb=0;function Ib(){function a(c){return b.call(a.src,a.listener,c)}var b=Jb;return a}
function Kb(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Kb(a,b[f],c,d,e);else if(c=Lb(c),a&&a[Ab])a.K(b,c,oa(d)?!!d.capture:!!d,e);else{if(!b)throw Error("Invalid event type");f=oa(d)?!!d.capture:!!d;var g=Mb(a);g||(a[Fb]=g=new P(a));c=g.add(b,c,!0,f,e);if(!c.g){e=Ib();c.g=e;e.src=a;e.listener=c;if(a.addEventListener)yb||(d=f),void 0===d&&(d=!1),a.addEventListener(b.toString(),e,d);else if(a.attachEvent)a.attachEvent(Nb(b.toString()),e);else if(a.addListener&&a.removeListener)a.addListener(e);
else throw Error("addEventListener and attachEvent are unavailable.");Hb++}}}function Nb(a){return a in Gb?Gb[a]:Gb[a]="on"+a}
function Jb(a,b){if(a.h)a=!0;else{b=new O(b,this);var c=a.listener,d=a.j||a.src;if(a.H&&"number"!==typeof a&&a&&!a.h){var e=a.src;if(e&&e[Ab])e.g(a);else{var f=a.type,g=a.g;e.removeEventListener?e.removeEventListener(f,g,a.capture):e.detachEvent?e.detachEvent(Nb(f),g):e.addListener&&e.removeListener&&e.removeListener(g);Hb--;if(f=Mb(e)){g=a.type;var h;if(h=g in f.g){h=f.g[g];var q=ya(h,a),k;(k=0<=q)&&Array.prototype.splice.call(h,q,1);h=k}h&&(Db(a),0==f.g[g].length&&(delete f.g[g],f.h--));0==f.h&&
(f.src=null,e[Fb]=null)}else Db(a)}}a=c.call(d,b)}return a}function Mb(a){a=a[Fb];return a instanceof P?a:null}var Ob="__closure_events_fn_"+(1E9*Math.random()>>>0);function Lb(a){if("function"===typeof a)return a;a[Ob]||(a[Ob]=function(b){return a.handleEvent(b)});return a[Ob]};function Pb(){this.port=this.g=null;this.h=[]}Pb.prototype.load=function(){var a=this,b=Qb();this.g=Rb(b);Sb().then(function(){document.body.appendChild(a.g)});return Tb(this.g,b).then(function(c){for(a.port=c.ports[0];0<a.h.length;)c=a.h.shift(),a.port.postMessage(c.data,c.W)})};
function Ub(a,b){return new Promise(function(c,d){var e=new MessageChannel;e.port1.onmessage=function(m){e.port1.onmessage=null;m=m.data;null!=m.error?d(new EvalError(m.error)):c(m.result)};for(var f=[],g=[],h=[],q=l(null!=b?b:[]),k=q.next();!k.done;k=q.next())k=k.value,f.push(k.name),g.push(k.value),k.R&&h.push(k.value);f={code:'var url=URL.createObjectURL(blob);var a=document.createElement("a");if(!("download" in a)){throw new Error("Downloading not supported on this browser");}a.href=url;a.download=filename;document.body.appendChild(a);a.click();setTimeout(function(){document.body.removeChild(a);URL.revokeObjectURL(url);},250);',
paramNames:f,values:g};a.port?a.port.postMessage(f,[e.port2].concat(h instanceof Array?h:ba(l(h)))):a.h.push({data:f,W:[e.port2].concat(h instanceof Array?h:ba(l(h)))})})}function Qb(){var a=(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(16));return Array.prototype.join.call(a,".")}function Tb(a,b){return new Promise(function(c){function d(e){e.source===a.contentWindow&&e.data===b&&(window.removeEventListener("message",d),c(e))}window.addEventListener("message",d)})}
function Rb(a){var b=document;var c="IFRAME";"application/xhtml+xml"===b.contentType&&(c=c.toLowerCase());c=b.createElement(c);if(!c.sandbox)throw Error("iframe sandboxes not supported");c.sandbox.value="allow-scripts";c.sandbox.supports&&c.sandbox.add&&c.sandbox.supports("allow-downloads")&&c.sandbox.add("allow-downloads");b=Ea(new D(Ca,'/*\n\n Copyright The Closure Library Authors.\n SPDX-License-Identifier: Apache-2.0\n*/\nvar e=this||self,h=function(a){return a};var k;var l={},n=function(a,b){this.g=b===l?a:""},p=function(a){return a instanceof n&&a.constructor===n?a.g:"type_error:SafeScript"},q=function(a){if(void 0===k){var b=null;var c=e.trustedTypes;if(c&&c.createPolicy)try{b=c.createPolicy("goog#html",{createHTML:h,createScript:h,createScriptURL:h})}catch(d){e.console&&e.console.error(d.message)}k=b}a=(b=k)?b.createScript(a):a;return new n(a,l)};n.prototype.toString=function(){return this.g.toString()};var r=function(a,b){a.textContent=p(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;(c=(b=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var t=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];var m,f;"evalCspCompatiblyData"in window||(window.evalCspCompatiblyData={index:0});d=window.evalCspCompatiblyData.index++;window.evalCspCompatiblyData[d]={args:c,callback:function(g,u){m=g;f=u}};c=document.createElement("script");c.async=!1;c.setAttribute("data-index",d);d=q(\'"use strict";\\x0B(function(){var idx=parseInt((document.currentScript||Array.prototype.slice.call(document.querySelectorAll("head script[data-index]"),-1)[0]).getAttribute("data-index"),10),curEvalData=evalCspCompatiblyData[idx];delete evalCspCompatiblyData[idx];(function(){var callback=curEvalData.callback;try{callback(true,(\'+\np(a).toString()+"\\n));}catch(ex){callback(false, ex);}}).apply(this, curEvalData.args);})()");r(c,d);d=function(g){m=!1;f=g.error||g};window.addEventListener("error",d);document.head.appendChild(c);window.removeEventListener("error",d);document.head.removeChild(c);if(!m)throw f;return f};var v=document.getElementById("nonce"),w=v?v.value:(new URL(location.href)).searchParams.get("nonce");function x(){if(self.origin)return"null"==self.origin;if(""!=location.host)return!1;try{return window.parent.escape(""),!1}catch(a){return!0}}\n(function(){if(!x())throw"sandboxing error";var a=new MessageChannel;a.port1.onmessage=function(b){try{var c=t.apply(null,[q("(function("+b.data.paramNames.join(", ")+") {\\n"+b.data.code+"\\n}).apply(null, arguments)")].concat(b.data.values));b.ports[0].postMessage({result:c})}catch(d){b.ports[0].postMessage({error:d.toString()})}};window.parent.postMessage(w,"*",[a.port2])})();\n'));
b=0===b.length?Ha:Ga(b);a={type:"hidden",id:"nonce",value:a};kb("input");a=qb("input",a,void 0);a:{var d=y.document;if(d.querySelector&&(d=d.querySelector("script[nonce]"))&&(d=d.nonce||d.getAttribute("nonce"))&&tb.test(d))break a;d=""}d={nonce:d};for(f in d)if(Object.prototype.hasOwnProperty.call(d,f)){var e=f.toLowerCase();if("language"==e||"src"==e||"text"==e||"type"==e)throw Error("");}var f="";b=za(b);for(e=0;e<b.length;e++){var g=b[e];f+=(g instanceof E&&g.constructor===E?g.h:"type_error:SafeScript").toString()}f=
M(f,0);f=qb("script",d,f);a=[a,f];kb("body");a=qb("body",{},a);a=pb(sb,a);f="data:text/html;charset=UTF-8;base64,"+btoa(L(a).toString());f=(b=Ba())?b.createScriptURL(f):f;f=new F(f,Ia);c.srcdoc=L(a);c.src=Ja(f).toString();c.style.cssText="height: 0; left: 0; position: absolute; top: 0; width: 0;";c.setAttribute("aria-hidden","true");return c}function Sb(){return new Promise(function(a){"loading"!=document.readyState?a():Kb(document,"DOMContentLoaded",function(){a()})})};function Vb(){this.g=new Pb}function Wb(a,b){var c=void 0===c?"":c;var d;ma(new la(new ja(function(e){switch(e.g){case 1:return d=new Vb,e.m=0,e.i=2,v(e,d.g.load(),4);case 4:return v(e,Xb(d,a,b,c),2);case 2:e.s=[e.h];e.m=0;e.i=0;var f=d.g;null!=f.g&&(document.body.removeChild(f.g),f.g=null);return v(e,void 0,6);case 6:f=e.s.splice(0)[0],(f=e.h=e.h||f)?f.O?e.g=e.m||e.i:void 0!=f.I&&e.i<f.I?(e.g=f.I,e.h=null):e.g=e.i:e.g=0}})))}
function Xb(a,b,c,d){b=b instanceof Blob?b:new Blob([b],{type:void 0===d?"":d});return navigator.msSaveOrOpenBlob?(navigator.msSaveOrOpenBlob(b,c),Yb()):Ub(a.g,[{name:"blob",value:b,R:!1},{name:"filename",value:c,R:!1}]).then(function(){return Yb()})}function Yb(){return new Promise(function(a){setTimeout(a,500)})}var Q=["SafeDownloader"],R=y;Q[0]in R||"undefined"==typeof R.execScript||R.execScript("var "+Q[0]);
for(var S;Q.length&&(S=Q.shift());)Q.length||void 0===Vb?R[S]&&R[S]!==Object.prototype[S]?R=R[S]:R=R[S]={}:R[S]=Vb;var Zb=/-|:|\..*\d/g,$b=/^\D|^$/,ac=/\d(?=pt|px|em|%)/i,bc=/8_1_3|8_2/;function cc(a,b,c,d,e){return c?"https://calendar.yahoo.com/?v=60&title="+a+"&st="+b+"&dur="+c+"&desc="+d+"&in_loc="+e:"https://calendar.yahoo.com/"}function T(a,b,c){wa(b,c,{url:a}).detail.handled||(a instanceof G||a instanceof G||(a="object"==typeof a&&a.v?a.g():String(a),Va.test(a)||(a="about:invalid#zClosurez"),a=new G(a,H)),y.open(Sa(a),""))}
function dc(){var a=!ub()&&-1==N().indexOf("Chrome")&&-1!=N().indexOf("WebKit"),b=-1!=N().indexOf("iPad")&&bc.test(N());return!!window.navigator.msSaveBlob||!a&&!b&&-1==N().indexOf("CriOS")}
function ec(a,b){if(dc()){var c=a.F,d=a.A,e=a.B,f=a.description;a=a.location;var g=(new Date).toISOString().replace(Zb,"");Wb(new Blob(["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Add To Calendar//\nBEGIN:VEVENT\nUID:"+g+"@*.2mdn.net\nDTSTAMP:"+g+"\nDTSTART:"+d+"\nDTEND:"+e+"\nSUMMARY:"+c+"\nDESCRIPTION:"+f+"\nLOCATION:"+a+"\nEND:VEVENT\nEND:VCALENDAR"],{type:"text/calendar;charset="+document.characterSet}),c+".ics");wa("icalendar",b)}}
function fc(a,b){a="&text="+a.F+"&dates="+a.A+"/"+a.B+"&details="+a.description+"&location="+a.location;T(-1==N().indexOf("WebKit")&&-1==N().indexOf("Android")||-1==N().indexOf("Mobile")||-1!=N().indexOf("iPad")?"https://www.google.com/calendar/render?action=TEMPLATE"+a:"https://www.google.com/calendar/gpcal?#~calendar:view=e"+a,"google",b)}
function gc(a,b){T("https://calendar.live.com/calendar/calendar.aspx?rru=addevent&summary="+a.F+"&dtstart="+a.A+"&dtend="+a.B+"&description="+a.description+"&location="+a.location,"windowslive",b)};var hc=["-ms-","-moz-","-webkit-",""];function U(a,b,c){var d=void 0===d?!1:d;for(var e,f,g=0;g<hc.length;g++)e=hc[g]+b,f=(d?hc[g]:"")+c,a.style.setProperty(e,f)};function V(a,b,c,d){this.u=a;this.C=b;this.D=c;this.h=d;this.m=this.o=this.s=this.l=this.g=null;this.j=["click","touchend"];this.i=Math.random().toString(36).substring(2,6);this.g=document.createElement("div");this.l=this.G.bind(this);this.s=this.T.bind(this);this.o=this.S.bind(this);for(a=0;a<this.D.length;a++)if(c=this.D[a],b=c.className,dc()||"gwd-icalendar-"!=b)c=document.createTextNode(c.text),d=document.createElement("gwd-taparea"),d.setAttribute("class",b+this.i),d.appendChild(c),d.addEventListener("action",
this.l),ub()||d.addEventListener("mouseover",this.s),d.addEventListener("mouseout",this.o),this.g.appendChild(d);ic(this);this.h.appendChild(this.g);this.m=this.K.bind(this);for(a=0;a<this.j.length;a++)document.body.addEventListener(this.j[a],this.m,!0)}
function jc(a){for(var b=0;b<a.j.length;b++)document.body.removeEventListener(a.j[b],a.m,!0);for(b=a.g.firstChild;b;b=b.nextSibling)b.removeEventListener("action",a.l),b.removeEventListener("mouseover",a.s),b.removeEventListener("mouseout",a.o);a.j.length=0;a.m=null;a.l=null;a.s=null;a.o=null;a.h.removeChild(a.g);a.g=null;a.C=null;a.D=null;a.u=null}
function ic(a){for(var b in va){var c=va[b];if("visibility"!=c){"background-color"==c||"border-color"==c?b="BG_COLOR":"color"==c&&(b="FONT_COLOR");var d=z(a.h,A[b],ua[b]);"font-size"==c&&(d=$b.test(d)||ac.test(d)?d:d+"pt");U(a.g,c,d)}}}
function kc(a,b){var c=a.h.offsetHeight+a.g.offsetHeight+3;c+a.h.offsetTop>a.h.parentElement.clientHeight?(U(a.g,"top","-"+c+"px"),U(a.g,"box-shadow","0px -5px 10px rgba(0, 0, 0, 0.292969)")):(U(a.g,"box-shadow","0px 5px 10px rgba(0, 0, 0, 0.292969)"),a.g.style.removeProperty("top"));U(a.g,"visibility",b?"visible":"hidden")}V.prototype.K=function(a){"visible"==this.g.style.visibility&&(a.preventDefault(),kc(this,!1))};
V.prototype.G=function(a){var b=this.u;switch(a.target.className){case "gwd-icalendar-"+this.i:ec(b,this.h);break;case "gwd-google-calendar-"+this.i:fc(b,this.h);break;case "gwd-windows-live-calendar-"+this.i:gc(b,this.h);break;case "gwd-yahoo-calendar-"+this.i:T(cc(b.F,b.A,this.C,b.description,b.location),"yahoo",this.h)}};V.prototype.T=function(a){var b=z(this.h,"highlight-color","#e0e0e0");U(a.target,"background-color",b)};V.prototype.S=function(a){a.target.style.removeProperty("background-color")};var lc=[],mc=0,nc;for(nc in A)lc[mc++]=A[nc];function W(){var a=HTMLElement.call(this)||this;a.g=null;a.s=null;a.o=null;a.h=null;a.i=!1;a.j=!1;a.l=!1;a.m=!1;a.D=a.G.bind(a);a.u=!1;return a}var X=HTMLElement;W.prototype=ca(X.prototype);W.prototype.constructor=W;if(ia)ia(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var oc=Object.getOwnPropertyDescriptor(X,Y);oc&&Object.defineProperty(W,Y,oc)}else W[Y]=X[Y];W.J=X.prototype;
W.prototype.connectedCallback=function(){if(!this.u){if(0<this.childNodes.length)for(this.s=this.innerHTML;this.firstChild;)this.removeChild(this.firstChild);this.C=document.createElement("gwd-taparea");this.appendChild(this.C);this.u=!0}pc(this);qc(this);this.C.addEventListener("action",this.D)};W.prototype.disconnectedCallback=function(){this.C.removeEventListener("action",this.D);this.h&&(jc(this.h),this.h=null);Z(this)};
W.prototype.attributeChangedCallback=function(a){if(this.u)switch(a){case "description":case "event-title":case "end-date":case "end-time":case "location":case "start-date":case "start-time":case "timezone":pc(this);break;case "icalendar":case "google":case "windows-live":case "yahoo":qc(this);break;case "bg-color":case "font-color":case "font-family":case "font-size":case "font-weight":this.h&&ic(this.h)}};
W.prototype.G=function(){if(this.g){var a=this.j&&!this.i&&!this.l&&!this.m,b=this.l&&!this.i&&!this.j&&!this.m,c=this.m&&!this.i&&!this.j&&!this.l;!this.i||this.j||this.l||this.m?a?fc(this.g,this):b?gc(this.g,this):c?(a=this.g,T(cc(a.F,a.A,this.o,a.description,a.location),"yahoo",this)):this.h&&kc(this.h,!0):ec(this.g,this)}};function Z(a){a.o=null;a.g=null}
function pc(a){a.g={F:z(a,"event-title",""),description:z(a,"description",""),A:z(a,"start-date",""),B:z(a,"end-date",""),location:z(a,"location",""),startTime:z(a,"start-time",""),endTime:z(a,"end-time",""),P:z(a,"timezone","")};if(""==a.g.F)Z(a);else{""==a.g.B&&(a.g.B=a.g.A);""==a.g.endTime&&(a.g.endTime=a.g.startTime);var b=new Date(a.g.A+" "+a.g.startTime+" "+a.g.P),c=new Date(a.g.B+" "+a.g.endTime+" "+a.g.P);if(isNaN(b)||isNaN(c))Z(a);else if(b.getTime()>c.getTime())Z(a);else{var d=c.getTime()-
b.getTime();var e=Math.floor(d/36E5);d=(Math.floor(d/6E4)-60*e).toString();e=e.toString();2<e.length?e=null:(2>e.length&&(e="0"+e),2>d.length&&(d="0"+d),e+=d);a.o=e;a.s&&(a.g.description=a.s);a.g.A=b.toISOString().replace(Zb,"");a.g.B=c.toISOString().replace(Zb,"");a.h&&(b=a.h,c=a.o,b.u=a.g,b.C=c)}}}
function qc(a){var b=0;a.i=a.hasAttribute("icalendar");a.i&&b++;a.j=a.hasAttribute("google");a.j&&b++;a.l=a.hasAttribute("windows-live");a.l&&b++;a.m=a.hasAttribute("yahoo");a.m&&b++;a.h&&(jc(a.h),a.h=null);if(1<b){b=[];for(var c=0;c<ra.length;c++){var d=ra[c];a.hasAttribute(A[d])&&b.push({className:sa[d],text:ta[d]})}0!=b.length&&(a.h=new V(a.g,a.o,b,a))}}ea.Object.defineProperties(W,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return lc}}});
customElements.define("gwd-addtocalendar",W);}).call(this);
