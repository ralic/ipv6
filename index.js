// start of index.js



var GIGO = {}; // We will use this as a name space.
GIGO.lang = "en";
GIGO.langUC = "EN";
GIGO.locale = "en_US";

/*!
 * Copyright 2010 Jason Fesler.  All rights reserved.
 * Author: Jason Fesler <jfesler@gigo.com>
 * Code deployed at:  http:/test-ipv6.com
 * Source: http://code.google.com/p/falling-sky/
 *
 * The following were also used:
 *
 * http://geekswithblogs.net/svanvliet/archive/2006/03/23/simple-javascript-object-dump-function.aspx - Scott Van Vliet
 * http://jquery.com/ - John Resig
 * http://sizzlejs.com/ - The Dojo Foundation
 * http://code.google.com/p/jquery-jsonp/ - Julian Aubourg
 * http://t.wits.sg (progress bar) - Gary Teo
 * http://mootools.net -  The MooTools production team
 *
 * Full credit is in the source, see
 * http://code.google.com/p/falling-sky/source/browse/trunk/source/js/ext/NOTICE?r=HEAD
 *
 * Most of what you see below will be heavily compressed, including obfuscation
 * to reduce the served content size.  Use the source tree instead to browse
 * the source.
 *
 * Alternately, view http://beta.test-ipv6.com/index.js,
 * and scroll down.
 */

/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
(function(){function N(p,r){function q(a){if(q[a]!==w)return q[a];var c;if("bug-string-char-index"==a)c="a"!="a"[0];else if("json"==a)c=q("json-stringify")&&q("json-parse");else{var e;if("json-stringify"==a){c=r.stringify;var b="function"==typeof c&&s;if(b){(e=function(){return 1}).toJSON=e;try{b="0"===c(0)&&"0"===c(new t)&&'""'==c(new A)&&c(u)===w&&c(w)===w&&c()===w&&"1"===c(e)&&"[1]"==c([e])&&"[null]"==c([w])&&"null"==c(null)&&"[null,null,null]"==c([w,u,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==
c({a:[e,!0,!1,null,"\x00\b\n\f\r\t"]})&&"1"===c(null,e)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new C(-864E13))&&'"+275760-09-13T00:00:00.000Z"'==c(new C(864E13))&&'"-000001-01-01T00:00:00.000Z"'==c(new C(-621987552E5))&&'"1969-12-31T23:59:59.999Z"'==c(new C(-1))}catch(f){b=!1}}c=b}if("json-parse"==a){c=r.parse;if("function"==typeof c)try{if(0===c("0")&&!c(!1)){e=c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var n=5==e.a.length&&1===e.a[0];if(n){try{n=!c('"\t"')}catch(d){}if(n)try{n=
1!==c("01")}catch(g){}if(n)try{n=1!==c("1.")}catch(m){}}}}catch(X){n=!1}c=n}}return q[a]=!!c}p||(p=k.Object());r||(r=k.Object());var t=p.Number||k.Number,A=p.String||k.String,H=p.Object||k.Object,C=p.Date||k.Date,G=p.SyntaxError||k.SyntaxError,K=p.TypeError||k.TypeError,L=p.Math||k.Math,I=p.JSON||k.JSON;"object"==typeof I&&I&&(r.stringify=I.stringify,r.parse=I.parse);var H=H.prototype,u=H.toString,v,B,w,s=new C(-0xc782b5b800cec);try{s=-109252==s.getUTCFullYear()&&0===s.getUTCMonth()&&1===s.getUTCDate()&&
10==s.getUTCHours()&&37==s.getUTCMinutes()&&6==s.getUTCSeconds()&&708==s.getUTCMilliseconds()}catch(Q){}if(!q("json")){var D=q("bug-string-char-index");if(!s)var x=L.floor,M=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,c){return M[c]+365*(a-1970)+x((a-1969+(c=+(1<c)))/4)-x((a-1901+c)/100)+x((a-1601+c)/400)};(v=H.hasOwnProperty)||(v=function(a){var c={},e;(c.__proto__=null,c.__proto__={toString:1},c).toString!=u?v=function(a){var c=this.__proto__;a=a in(this.__proto__=null,this);this.__proto__=
c;return a}:(e=c.constructor,v=function(a){var c=(this.constructor||e).prototype;return a in this&&!(a in c&&this[a]===c[a])});c=null;return v.call(this,a)});B=function(a,c){var e=0,b,f,n;(b=function(){this.valueOf=0}).prototype.valueOf=0;f=new b;for(n in f)v.call(f,n)&&e++;b=f=null;e?B=2==e?function(a,c){var e={},b="[object Function]"==u.call(a),f;for(f in a)b&&"prototype"==f||v.call(e,f)||!(e[f]=1)||!v.call(a,f)||c(f)}:function(a,c){var e="[object Function]"==u.call(a),b,f;for(b in a)e&&"prototype"==
b||!v.call(a,b)||(f="constructor"===b)||c(b);(f||v.call(a,b="constructor"))&&c(b)}:(f="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),B=function(a,c){var e="[object Function]"==u.call(a),b,h=!e&&"function"!=typeof a.constructor&&F[typeof a.hasOwnProperty]&&a.hasOwnProperty||v;for(b in a)e&&"prototype"==b||!h.call(a,b)||c(b);for(e=f.length;b=f[--e];h.call(a,b)&&c(b));});return B(a,c)};if(!q("json-stringify")){var U={92:"\\\\",34:'\\"',8:"\\b",
12:"\\f",10:"\\n",13:"\\r",9:"\\t"},y=function(a,c){return("000000"+(c||0)).slice(-a)},R=function(a){for(var c='"',b=0,h=a.length,f=!D||10<h,n=f&&(D?a.split(""):a);b<h;b++){var d=a.charCodeAt(b);switch(d){case 8:case 9:case 10:case 12:case 13:case 34:case 92:c+=U[d];break;default:if(32>d){c+="\\u00"+y(2,d.toString(16));break}c+=f?n[b]:a.charAt(b)}}return c+'"'},O=function(a,c,b,h,f,n,d){var g,m,k,l,p,r,s,t,q;try{g=c[a]}catch(z){}if("object"==typeof g&&g)if(m=u.call(g),"[object Date]"!=m||v.call(g,
"toJSON"))"function"==typeof g.toJSON&&("[object Number]"!=m&&"[object String]"!=m&&"[object Array]"!=m||v.call(g,"toJSON"))&&(g=g.toJSON(a));else if(g>-1/0&&g<1/0){if(E){l=x(g/864E5);for(m=x(l/365.2425)+1970-1;E(m+1,0)<=l;m++);for(k=x((l-E(m,0))/30.42);E(m,k+1)<=l;k++);l=1+l-E(m,k);p=(g%864E5+864E5)%864E5;r=x(p/36E5)%24;s=x(p/6E4)%60;t=x(p/1E3)%60;p%=1E3}else m=g.getUTCFullYear(),k=g.getUTCMonth(),l=g.getUTCDate(),r=g.getUTCHours(),s=g.getUTCMinutes(),t=g.getUTCSeconds(),p=g.getUTCMilliseconds();
g=(0>=m||1E4<=m?(0>m?"-":"+")+y(6,0>m?-m:m):y(4,m))+"-"+y(2,k+1)+"-"+y(2,l)+"T"+y(2,r)+":"+y(2,s)+":"+y(2,t)+"."+y(3,p)+"Z"}else g=null;b&&(g=b.call(c,a,g));if(null===g)return"null";m=u.call(g);if("[object Boolean]"==m)return""+g;if("[object Number]"==m)return g>-1/0&&g<1/0?""+g:"null";if("[object String]"==m)return R(""+g);if("object"==typeof g){for(a=d.length;a--;)if(d[a]===g)throw K();d.push(g);q=[];c=n;n+=f;if("[object Array]"==m){k=0;for(a=g.length;k<a;k++)m=O(k,g,b,h,f,n,d),q.push(m===w?"null":
m);a=q.length?f?"[\n"+n+q.join(",\n"+n)+"\n"+c+"]":"["+q.join(",")+"]":"[]"}else B(h||g,function(a){var c=O(a,g,b,h,f,n,d);c!==w&&q.push(R(a)+":"+(f?" ":"")+c)}),a=q.length?f?"{\n"+n+q.join(",\n"+n)+"\n"+c+"}":"{"+q.join(",")+"}":"{}";d.pop();return a}};r.stringify=function(a,c,b){var h,f,n,d;if(F[typeof c]&&c)if("[object Function]"==(d=u.call(c)))f=c;else if("[object Array]"==d){n={};for(var g=0,k=c.length,l;g<k;l=c[g++],(d=u.call(l),"[object String]"==d||"[object Number]"==d)&&(n[l]=1));}if(b)if("[object Number]"==
(d=u.call(b))){if(0<(b-=b%1))for(h="",10<b&&(b=10);h.length<b;h+=" ");}else"[object String]"==d&&(h=10>=b.length?b:b.slice(0,10));return O("",(l={},l[""]=a,l),f,n,h,"",[])}}if(!q("json-parse")){var V=A.fromCharCode,W={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},b,J,l=function(){b=J=null;throw G();},z=function(){for(var a=J,c=a.length,e,h,f,k,d;b<c;)switch(d=a.charCodeAt(b),d){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=
D?a.charAt(b):a[b],b++,e;case 34:e="@";for(b++;b<c;)if(d=a.charCodeAt(b),32>d)l();else if(92==d)switch(d=a.charCodeAt(++b),d){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=W[d];b++;break;case 117:h=++b;for(f=b+4;b<f;b++)d=a.charCodeAt(b),48<=d&&57>=d||97<=d&&102>=d||65<=d&&70>=d||l();e+=V("0x"+a.slice(h,b));break;default:l()}else{if(34==d)break;d=a.charCodeAt(b);for(h=b;32<=d&&92!=d&&34!=d;)d=a.charCodeAt(++b);e+=a.slice(h,b)}if(34==a.charCodeAt(b))return b++,e;l();default:h=
b;45==d&&(k=!0,d=a.charCodeAt(++b));if(48<=d&&57>=d){for(48==d&&(d=a.charCodeAt(b+1),48<=d&&57>=d)&&l();b<c&&(d=a.charCodeAt(b),48<=d&&57>=d);b++);if(46==a.charCodeAt(b)){for(f=++b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}d=a.charCodeAt(b);if(101==d||69==d){d=a.charCodeAt(++b);43!=d&&45!=d||b++;for(f=b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}return+a.slice(h,b)}k&&l();if("true"==a.slice(b,b+4))return b+=4,!0;if("false"==a.slice(b,b+5))return b+=5,!1;if("null"==a.slice(b,
b+4))return b+=4,null;l()}return"$"},P=function(a){var c,b;"$"==a&&l();if("string"==typeof a){if("@"==(D?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(c=[];;b||(b=!0)){a=z();if("]"==a)break;b&&(","==a?(a=z(),"]"==a&&l()):l());","==a&&l();c.push(P(a))}return c}if("{"==a){for(c={};;b||(b=!0)){a=z();if("}"==a)break;b&&(","==a?(a=z(),"}"==a&&l()):l());","!=a&&"string"==typeof a&&"@"==(D?a.charAt(0):a[0])&&":"==z()||l();c[a.slice(1)]=P(z())}return c}l()}return a},T=function(a,b,e){e=S(a,b,e);e===
w?delete a[b]:a[b]=e},S=function(a,b,e){var h=a[b],f;if("object"==typeof h&&h)if("[object Array]"==u.call(h))for(f=h.length;f--;)T(h,f,e);else B(h,function(a){T(h,a,e)});return e.call(a,b,h)};r.parse=function(a,c){var e,h;b=0;J=""+a;e=P(z());"$"!=z()&&l();b=J=null;return c&&"[object Function]"==u.call(c)?S((h={},h[""]=e,h),"",c):e}}}r.runInContext=N;return r}var K=typeof define==="function"&&define.amd,F={"function":!0,object:!0},G=F[typeof exports]&&exports&&!exports.nodeType&&exports,k=F[typeof window]&&
window||this,t=G&&F[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;!t||t.global!==t&&t.window!==t&&t.self!==t||(k=t);if(G&&!K)N(k,G);else{var L=k.JSON,Q=k.JSON3,M=!1,A=N(k,k.JSON3={noConflict:function(){M||(M=!0,k.JSON=L,k.JSON3=Q,L=Q=null);return A}});k.JSON={parse:A.parse,stringify:A.stringify}}K&&define(function(){return A})}).call(this);

/*! jQuery v1.12.2 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.2",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){
return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){
return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

/*
---
MooTools: the javascript framework

web build:
 - http://mootools.net/core/21ecee8cf9f9a4471a45ae1bb3f26e12

packager build:
 - packager build Core/Browser Core/JSON

...
*/

/*
---

name: Core

description: The heart of MooTools.

license: MIT-style license.

copyright: Copyright (c) 2006-2012 [Valerio Proietti](http://mad4milk.net/).

authors: The MooTools production team (http://mootools.net/developers/)

inspiration:
  - Class implementation inspired by [Base.js](http://dean.edwards.name/weblog/2006/03/base/) Copyright (c) 2006 Dean Edwards, [GNU Lesser General Public License](http://opensource.org/licenses/lgpl-license.php)
  - Some functionality inspired by [Prototype.js](http://prototypejs.org) Copyright (c) 2005-2007 Sam Stephenson, [MIT License](http://opensource.org/licenses/mit-license.php)

provides: [Core, MooTools, Type, typeOf, instanceOf, Native]

...
*/

(function(){

this.MooTools = {
	version: '1.4.5',
	build: 'ab8ea8824dc3b24b6666867a2c4ed58ebb762cf0'
};

// typeOf, instanceOf

var typeOf = this.typeOf = function(item){
	if (item == null) return 'null';
	if (item.$family != null) return item.$family();

	if (item.nodeName){
		if (item.nodeType == 1) return 'element';
		if (item.nodeType == 3) return (/\S/).test(item.nodeValue) ? 'textnode' : 'whitespace';
	} else if (typeof item.length == 'number'){
		if (item.callee) return 'arguments';
		if ('item' in item) return 'collection';
	}

	return typeof item;
};

var instanceOf = this.instanceOf = function(item, object){
	if (item == null) return false;
	var constructor = item.$constructor || item.constructor;
	while (constructor){
		if (constructor === object) return true;
		constructor = constructor.parent;
	}
	/*<ltIE8>*/
	if (!item.hasOwnProperty) return false;
	/*</ltIE8>*/
	return item instanceof object;
};

// Function overloading

var Function = this.Function;

var enumerables = true;
for (var i in {toString: 1}) enumerables = null;
if (enumerables) enumerables = ['hasOwnProperty', 'valueOf', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'constructor'];

Function.prototype.overloadSetter = function(usePlural){
	var self = this;
	return function(a, b){
		if (a == null) return this;
		if (usePlural || typeof a != 'string'){
			for (var k in a) self.call(this, k, a[k]);
			if (enumerables) for (var i = enumerables.length; i--;){
				k = enumerables[i];
				if (a.hasOwnProperty(k)) self.call(this, k, a[k]);
			}
		} else {
			self.call(this, a, b);
		}
		return this;
	};
};

Function.prototype.overloadGetter = function(usePlural){
	var self = this;
	return function(a){
		var args, result;
		if (typeof a != 'string') args = a;
		else if (arguments.length > 1) args = arguments;
		else if (usePlural) args = [a];
		if (args){
			result = {};
			for (var i = 0; i < args.length; i++) result[args[i]] = self.call(this, args[i]);
		} else {
			result = self.call(this, a);
		}
		return result;
	};
};

Function.prototype.extend = function(key, value){
	this[key] = value;
}.overloadSetter();

Function.prototype.implement = function(key, value){
	this.prototype[key] = value;
}.overloadSetter();

// From

var slice = Array.prototype.slice;

Function.from = function(item){
	return (typeOf(item) == 'function') ? item : function(){
		return item;
	};
};

Array.from = function(item){
	if (item == null) return [];
	return (Type.isEnumerable(item) && typeof item != 'string') ? (typeOf(item) == 'array') ? item : slice.call(item) : [item];
};

Number.from = function(item){
	var number = parseFloat(item);
	return isFinite(number) ? number : null;
};

String.from = function(item){
	return item + '';
};

// hide, protect

Function.implement({

	hide: function(){
		this.$hidden = true;
		return this;
	},

	protect: function(){
		this.$protected = true;
		return this;
	}

});

// Type

var Type = this.Type = function(name, object){
	if (name){
		var lower = name.toLowerCase();
		var typeCheck = function(item){
			return (typeOf(item) == lower);
		};

		Type['is' + name] = typeCheck;
		if (object != null){
			object.prototype.$family = (function(){
				return lower;
			}).hide();
			
		}
	}

	if (object == null) return null;

	object.extend(this);
	object.$constructor = Type;
	object.prototype.$constructor = object;

	return object;
};

var toString = Object.prototype.toString;

Type.isEnumerable = function(item){
	return (item != null && typeof item.length == 'number' && toString.call(item) != '[object Function]' );
};

var hooks = {};

var hooksOf = function(object){
	var type = typeOf(object.prototype);
	return hooks[type] || (hooks[type] = []);
};

var implement = function(name, method){
	if (method && method.$hidden) return;

	var hooks = hooksOf(this);

	for (var i = 0; i < hooks.length; i++){
		var hook = hooks[i];
		if (typeOf(hook) == 'type') implement.call(hook, name, method);
		else hook.call(this, name, method);
	}

	var previous = this.prototype[name];
	if (previous == null || !previous.$protected) this.prototype[name] = method;

	if (this[name] == null && typeOf(method) == 'function') extend.call(this, name, function(item){
		return method.apply(item, slice.call(arguments, 1));
	});
};

var extend = function(name, method){
	if (method && method.$hidden) return;
	var previous = this[name];
	if (previous == null || !previous.$protected) this[name] = method;
};

Type.implement({

	implement: implement.overloadSetter(),

	extend: extend.overloadSetter(),

	alias: function(name, existing){
		implement.call(this, name, this.prototype[existing]);
	}.overloadSetter(),

	mirror: function(hook){
		hooksOf(this).push(hook);
		return this;
	}

});

new Type('Type', Type);

// Default Types

var force = function(name, object, methods){
	var isType = (object != Object),
		prototype = object.prototype;

	if (isType) object = new Type(name, object);

	for (var i = 0, l = methods.length; i < l; i++){
		var key = methods[i],
			generic = object[key],
			proto = prototype[key];

		if (generic) generic.protect();
		if (isType && proto) object.implement(key, proto.protect());
	}

	if (isType){
		var methodsEnumerable = prototype.propertyIsEnumerable(methods[0]);
		object.forEachMethod = function(fn){
			if (!methodsEnumerable) for (var i = 0, l = methods.length; i < l; i++){
				fn.call(prototype, prototype[methods[i]], methods[i]);
			}
			for (var key in prototype) fn.call(prototype, prototype[key], key)
		};
	}

	return force;
};

force('String', String, [
	'charAt', 'charCodeAt', 'concat', 'indexOf', 'lastIndexOf', 'match', 'quote', 'replace', 'search',
	'slice', 'split', 'substr', 'substring', 'trim', 'toLowerCase', 'toUpperCase'
])('Array', Array, [
	'pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'concat', 'join', 'slice',
	'indexOf', 'lastIndexOf', 'filter', 'forEach', 'every', 'map', 'some', 'reduce', 'reduceRight'
])('Number', Number, [
	'toExponential', 'toFixed', 'toLocaleString', 'toPrecision'
])('Function', Function, [
	'apply', 'call', 'bind'
])('RegExp', RegExp, [
	'exec', 'test'
])('Object', Object, [
	'create', 'defineProperty', 'defineProperties', 'keys',
	'getPrototypeOf', 'getOwnPropertyDescriptor', 'getOwnPropertyNames',
	'preventExtensions', 'isExtensible', 'seal', 'isSealed', 'freeze', 'isFrozen'
])('Date', Date, ['now']);

Object.extend = extend.overloadSetter();

Date.extend('now', function(){
	return +(new Date);
});

new Type('Boolean', Boolean);

// fixes NaN returning as Number

Number.prototype.$family = function(){
	return isFinite(this) ? 'number' : 'null';
}.hide();

// Number.random

Number.extend('random', function(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
});

// forEach, each

var hasOwnProperty = Object.prototype.hasOwnProperty;
Object.extend('forEach', function(object, fn, bind){
	for (var key in object){
		if (hasOwnProperty.call(object, key)) fn.call(bind, object[key], key, object);
	}
});

Object.each = Object.forEach;

Array.implement({

	forEach: function(fn, bind){
		for (var i = 0, l = this.length; i < l; i++){
			if (i in this) fn.call(bind, this[i], i, this);
		}
	},

	each: function(fn, bind){
		Array.forEach(this, fn, bind);
		return this;
	}

});

// Array & Object cloning, Object merging and appending

var cloneOf = function(item){
	switch (typeOf(item)){
		case 'array': return item.clone();
		case 'object': return Object.clone(item);
		default: return item;
	}
};

Array.implement('clone', function(){
	var i = this.length, clone = new Array(i);
	while (i--) clone[i] = cloneOf(this[i]);
	return clone;
});

var mergeOne = function(source, key, current){
	switch (typeOf(current)){
		case 'object':
			if (typeOf(source[key]) == 'object') Object.merge(source[key], current);
			else source[key] = Object.clone(current);
		break;
		case 'array': source[key] = current.clone(); break;
		default: source[key] = current;
	}
	return source;
};

Object.extend({

	merge: function(source, k, v){
		if (typeOf(k) == 'string') return mergeOne(source, k, v);
		for (var i = 1, l = arguments.length; i < l; i++){
			var object = arguments[i];
			for (var key in object) mergeOne(source, key, object[key]);
		}
		return source;
	},

	clone: function(object){
		var clone = {};
		for (var key in object) clone[key] = cloneOf(object[key]);
		return clone;
	},

	append: function(original){
		for (var i = 1, l = arguments.length; i < l; i++){
			var extended = arguments[i] || {};
			for (var key in extended) original[key] = extended[key];
		}
		return original;
	}

});

// Object-less types

['Object', 'WhiteSpace', 'TextNode', 'Collection', 'Arguments'].each(function(name){
	new Type(name);
});

// Unique ID

var UID = Date.now();

String.extend('uniqueID', function(){
	return (UID++).toString(36);
});



})();


/*
---

name: Array

description: Contains Array Prototypes like each, contains, and erase.

license: MIT-style license.

requires: Type

provides: Array

...
*/

Array.implement({

	/*<!ES5>*/
	every: function(fn, bind){
		for (var i = 0, l = this.length >>> 0; i < l; i++){
			if ((i in this) && !fn.call(bind, this[i], i, this)) return false;
		}
		return true;
	},

	filter: function(fn, bind){
		var results = [];
		for (var value, i = 0, l = this.length >>> 0; i < l; i++) if (i in this){
			value = this[i];
			if (fn.call(bind, value, i, this)) results.push(value);
		}
		return results;
	},

	indexOf: function(item, from){
		var length = this.length >>> 0;
		for (var i = (from < 0) ? Math.max(0, length + from) : from || 0; i < length; i++){
			if (this[i] === item) return i;
		}
		return -1;
	},

	map: function(fn, bind){
		var length = this.length >>> 0, results = Array(length);
		for (var i = 0; i < length; i++){
			if (i in this) results[i] = fn.call(bind, this[i], i, this);
		}
		return results;
	},

	some: function(fn, bind){
		for (var i = 0, l = this.length >>> 0; i < l; i++){
			if ((i in this) && fn.call(bind, this[i], i, this)) return true;
		}
		return false;
	},
	/*</!ES5>*/

	clean: function(){
		return this.filter(function(item){
			return item != null;
		});
	},

	invoke: function(methodName){
		var args = Array.slice(arguments, 1);
		return this.map(function(item){
			return item[methodName].apply(item, args);
		});
	},

	associate: function(keys){
		var obj = {}, length = Math.min(this.length, keys.length);
		for (var i = 0; i < length; i++) obj[keys[i]] = this[i];
		return obj;
	},

	link: function(object){
		var result = {};
		for (var i = 0, l = this.length; i < l; i++){
			for (var key in object){
				if (object[key](this[i])){
					result[key] = this[i];
					delete object[key];
					break;
				}
			}
		}
		return result;
	},

	contains: function(item, from){
		return this.indexOf(item, from) != -1;
	},

	append: function(array){
		this.push.apply(this, array);
		return this;
	},

	getLast: function(){
		return (this.length) ? this[this.length - 1] : null;
	},

	getRandom: function(){
		return (this.length) ? this[Number.random(0, this.length - 1)] : null;
	},

	include: function(item){
		if (!this.contains(item)) this.push(item);
		return this;
	},

	combine: function(array){
		for (var i = 0, l = array.length; i < l; i++) this.include(array[i]);
		return this;
	},

	erase: function(item){
		for (var i = this.length; i--;){
			if (this[i] === item) this.splice(i, 1);
		}
		return this;
	},

	empty: function(){
		this.length = 0;
		return this;
	},

	flatten: function(){
		var array = [];
		for (var i = 0, l = this.length; i < l; i++){
			var type = typeOf(this[i]);
			if (type == 'null') continue;
			array = array.concat((type == 'array' || type == 'collection' || type == 'arguments' || instanceOf(this[i], Array)) ? Array.flatten(this[i]) : this[i]);
		}
		return array;
	},

	pick: function(){
		for (var i = 0, l = this.length; i < l; i++){
			if (this[i] != null) return this[i];
		}
		return null;
	},

	hexToRgb: function(array){
		if (this.length != 3) return null;
		var rgb = this.map(function(value){
			if (value.length == 1) value += value;
			return value.toInt(16);
		});
		return (array) ? rgb : 'rgb(' + rgb + ')';
	},

	rgbToHex: function(array){
		if (this.length < 3) return null;
		if (this.length == 4 && this[3] == 0 && !array) return 'transparent';
		var hex = [];
		for (var i = 0; i < 3; i++){
			var bit = (this[i] - 0).toString(16);
			hex.push((bit.length == 1) ? '0' + bit : bit);
		}
		return (array) ? hex : '#' + hex.join('');
	}

});




/*
---

name: Function

description: Contains Function Prototypes like create, bind, pass, and delay.

license: MIT-style license.

requires: Type

provides: Function

...
*/

Function.extend({

	attempt: function(){
		for (var i = 0, l = arguments.length; i < l; i++){
			try {
				return arguments[i]();
			} catch (e){}
		}
		return null;
	}

});

Function.implement({

	attempt: function(args, bind){
		try {
			return this.apply(bind, Array.from(args));
		} catch (e){}

		return null;
	},

	/*<!ES5-bind>*/
	bind: function(that){
		var self = this,
			args = arguments.length > 1 ? Array.slice(arguments, 1) : null,
			F = function(){};

		var bound = function(){
			var context = that, length = arguments.length;
			if (this instanceof bound){
				F.prototype = self.prototype;
				context = new F;
			}
			var result = (!args && !length)
				? self.call(context)
				: self.apply(context, args && length ? args.concat(Array.slice(arguments)) : args || arguments);
			return context == that ? result : context;
		};
		return bound;
	},
	/*</!ES5-bind>*/

	pass: function(args, bind){
		var self = this;
		if (args != null) args = Array.from(args);
		return function(){
			return self.apply(bind, args || arguments);
		};
	},

	delay: function(delay, bind, args){
		return setTimeout(this.pass((args == null ? [] : args), bind), delay);
	},

	periodical: function(periodical, bind, args){
		return setInterval(this.pass((args == null ? [] : args), bind), periodical);
	}

});




/*
---

name: Number

description: Contains Number Prototypes like limit, round, times, and ceil.

license: MIT-style license.

requires: Type

provides: Number

...
*/

Number.implement({

	limit: function(min, max){
		return Math.min(max, Math.max(min, this));
	},

	round: function(precision){
		precision = Math.pow(10, precision || 0).toFixed(precision < 0 ? -precision : 0);
		return Math.round(this * precision) / precision;
	},

	times: function(fn, bind){
		for (var i = 0; i < this; i++) fn.call(bind, i, this);
	},

	toFloat: function(){
		return parseFloat(this);
	},

	toInt: function(base){
		return parseInt(this, base || 10);
	}

});

Number.alias('each', 'times');

(function(math){
	var methods = {};
	math.each(function(name){
		if (!Number[name]) methods[name] = function(){
			return Math[name].apply(null, [this].concat(Array.from(arguments)));
		};
	});
	Number.implement(methods);
})(['abs', 'acos', 'asin', 'atan', 'atan2', 'ceil', 'cos', 'exp', 'floor', 'log', 'max', 'min', 'pow', 'sin', 'sqrt', 'tan']);


/*
---

name: String

description: Contains String Prototypes like camelCase, capitalize, test, and toInt.

license: MIT-style license.

requires: Type

provides: String

...
*/

String.implement({

	test: function(regex, params){
		return ((typeOf(regex) == 'regexp') ? regex : new RegExp('' + regex, params)).test(this);
	},

	contains: function(string, separator){
		return (separator) ? (separator + this + separator).indexOf(separator + string + separator) > -1 : String(this).indexOf(string) > -1;
	},

	trim: function(){
		return String(this).replace(/^\s+|\s+$/g, '');
	},

	clean: function(){
		return String(this).replace(/\s+/g, ' ').trim();
	},

	camelCase: function(){
		return String(this).replace(/-\D/g, function(match){
			return match.charAt(1).toUpperCase();
		});
	},

	hyphenate: function(){
		return String(this).replace(/[A-Z]/g, function(match){
			return ('-' + match.charAt(0).toLowerCase());
		});
	},

	capitalize: function(){
		return String(this).replace(/\b[a-z]/g, function(match){
			return match.toUpperCase();
		});
	},

	escapeRegExp: function(){
		return String(this).replace(/([-.*+?^${}()|[\]\/\\])/g, '\\$1');
	},

	toInt: function(base){
		return parseInt(this, base || 10);
	},

	toFloat: function(){
		return parseFloat(this);
	},

	hexToRgb: function(array){
		var hex = String(this).match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
		return (hex) ? hex.slice(1).hexToRgb(array) : null;
	},

	rgbToHex: function(array){
		var rgb = String(this).match(/\d{1,3}/g);
		return (rgb) ? rgb.rgbToHex(array) : null;
	},

	substitute: function(object, regexp){
		return String(this).replace(regexp || (/\\?\{([^{}]+)\}/g), function(match, name){
			if (match.charAt(0) == '\\') return match.slice(1);
			return (object[name] != null) ? object[name] : '';
		});
	}

});


/*
---

name: Browser

description: The Browser Object. Contains Browser initialization, Window and Document, and the Browser Hash.

license: MIT-style license.

requires: [Array, Function, Number, String]

provides: [Browser, Window, Document]

...
*/

(function(){

var document = this.document;
var window = document.window = this;

var ua = navigator.userAgent.toLowerCase(),
	platform = navigator.platform.toLowerCase(),
	UA = ua.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, 'unknown', 0],
	mode = UA[1] == 'ie' && document.documentMode;

var Browser = this.Browser = {

	extend: Function.prototype.extend,

	name: (UA[1] == 'version') ? UA[3] : UA[1],

	version: mode || parseFloat((UA[1] == 'opera' && UA[4]) ? UA[4] : UA[2]),

	Platform: {
		name: ua.match(/ip(?:ad|od|hone)/) ? 'ios' : (ua.match(/(?:webos|android)/) || platform.match(/mac|win|linux/) || ['other'])[0]
	},

	Features: {
		xpath: !!(document.evaluate),
		air: !!(window.runtime),
		query: !!(document.querySelector),
		json: !!(window.JSON)
	},

	Plugins: {}

};

Browser[Browser.name] = true;
Browser[Browser.name + parseInt(Browser.version, 10)] = true;
Browser.Platform[Browser.Platform.name] = true;

// Request

Browser.Request = (function(){

	var XMLHTTP = function(){
		return new XMLHttpRequest();
	};

	var MSXML2 = function(){
		return new ActiveXObject('MSXML2.XMLHTTP');
	};

	var MSXML = function(){
		return new ActiveXObject('Microsoft.XMLHTTP');
	};

	return Function.attempt(function(){
		XMLHTTP();
		return XMLHTTP;
	}, function(){
		MSXML2();
		return MSXML2;
	}, function(){
		MSXML();
		return MSXML;
	});

})();

Browser.Features.xhr = !!(Browser.Request);

// Flash detection

var version = (Function.attempt(function(){
	return navigator.plugins['Shockwave Flash'].description;
}, function(){
	return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');
}) || '0 r0').match(/\d+/g);

Browser.Plugins.Flash = {
	version: Number(version[0] || '0.' + version[1]) || 0,
	build: Number(version[2]) || 0
};

// String scripts

Browser.exec = function(text){
	if (!text) return text;
	if (window.execScript){
		window.execScript(text);
	} else {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.text = text;
		document.head.appendChild(script);
		document.head.removeChild(script);
	}
	return text;
};

String.implement('stripScripts', function(exec){
	var scripts = '';
	var text = this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function(all, code){
		scripts += code + '\n';
		return '';
	});
	if (exec === true) Browser.exec(scripts);
	else if (typeOf(exec) == 'function') exec(scripts, text);
	return text;
});

// Window, Document

Browser.extend({
	Document: this.Document,
	Window: this.Window,
	Element: this.Element,
	Event: this.Event
});

this.Window = this.$constructor = new Type('Window', function(){});

this.$family = Function.from('window').hide();

Window.mirror(function(name, method){
	window[name] = method;
});

this.Document = document.$constructor = new Type('Document', function(){});

document.$family = Function.from('document').hide();

Document.mirror(function(name, method){
	document[name] = method;
});

document.html = document.documentElement;
if (!document.head) document.head = document.getElementsByTagName('head')[0];

if (document.execCommand) try {
	document.execCommand("BackgroundImageCache", false, true);
} catch (e){}

/*<ltIE9>*/
if (this.attachEvent && !this.addEventListener){
	var unloadEvent = function(){
		this.detachEvent('onunload', unloadEvent);
		document.head = document.html = document.window = null;
	};
	this.attachEvent('onunload', unloadEvent);
}

// IE fails on collections and <select>.options (refers to <select>)
var arrayFrom = Array.from;
try {
	arrayFrom(document.html.childNodes);
} catch(e){
	Array.from = function(item){
		if (typeof item != 'string' && Type.isEnumerable(item) && typeOf(item) != 'array'){
			var i = item.length, array = new Array(i);
			while (i--) array[i] = item[i];
			return array;
		}
		return arrayFrom(item);
	};

	var prototype = Array.prototype,
		slice = prototype.slice;
	['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift', 'concat', 'join', 'slice'].each(function(name){
		var method = prototype[name];
		Array[name] = function(item){
			return method.apply(Array.from(item), slice.call(arguments, 1));
		};
	});
}
/*</ltIE9>*/



})();


/*
---

name: JSON

description: JSON encoder and decoder.

license: MIT-style license.

SeeAlso: <http://www.json.org/>

requires: [Array, String, Number, Function]

provides: JSON

...
*/

if (typeof JSON == 'undefined') this.JSON = {};



(function(){

var special = {'\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"' : '\\"', '\\': '\\\\'};

var escape = function(chr){
	return special[chr] || '\\u' + ('0000' + chr.charCodeAt(0).toString(16)).slice(-4);
};

JSON.validate = function(string){
	string = string.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
					replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
					replace(/(?:^|:|,)(?:\s*\[)+/g, '');

	return (/^[\],:{}\s]*$/).test(string);
};

JSON.encode = JSON.stringify ? function(obj){
	return JSON.stringify(obj);
} : function(obj){
	if (obj && obj.toJSON) obj = obj.toJSON();

	switch (typeOf(obj)){
		case 'string':
			return '"' + obj.replace(/[\x00-\x1f\\"]/g, escape) + '"';
		case 'array':
			return '[' + obj.map(JSON.encode).clean() + ']';
		case 'object': case 'hash':
			var string = [];
			Object.each(obj, function(value, key){
				var json = JSON.encode(value);
				if (json) string.push(JSON.encode(key) + ':' + json);
			});
			return '{' + string + '}';
		case 'number': case 'boolean': return '' + obj;
		case 'null': return 'null';
	}

	return null;
};

JSON.decode = function(string, secure){
	if (!string || typeOf(string) != 'string') return null;

	if (secure || JSON.secure){
		if (JSON.parse) return JSON.parse(string);
		if (!JSON.validate(string)) throw new Error('JSON could not decode the input; security is enabled and the value is not secure.');
	}

	return eval('(' + string + ')');
};

})();


/*
 * 
 * TableSorter 2.0 - Client-side table sorting with ease!
 * Version 2.0.5b
 * @requires jQuery v1.2.3
 * 
 * Copyright (c) 2007 Christian Bach
 * Examples and docs at: http://tablesorter.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 */
/**
 * 
 * @description Create a sortable table with multi-column sorting capabilitys
 * 
 * @example $('table').tablesorter();
 * @desc Create a simple tablesorter interface.
 * 
 * @example $('table').tablesorter({ sortList:[[0,0],[1,0]] });
 * @desc Create a tablesorter interface and sort on the first and secound column column headers.
 * 
 * @example $('table').tablesorter({ headers: { 0: { sorter: false}, 1: {sorter: false} } });
 *          
 * @desc Create a tablesorter interface and disableing the first and second  column headers.
 *      
 * 
 * @example $('table').tablesorter({ headers: { 0: {sorter:"integer"}, 1: {sorter:"currency"} } });
 * 
 * @desc Create a tablesorter interface and set a column parser for the first
 *       and second column.
 * 
 * 
 * @param Object
 *            settings An object literal containing key/value pairs to provide
 *            optional settings.
 * 
 * 
 * @option String cssHeader (optional) A string of the class name to be appended
 *         to sortable tr elements in the thead of the table. Default value:
 *         "header"
 * 
 * @option String cssAsc (optional) A string of the class name to be appended to
 *         sortable tr elements in the thead on a ascending sort. Default value:
 *         "headerSortUp"
 * 
 * @option String cssDesc (optional) A string of the class name to be appended
 *         to sortable tr elements in the thead on a descending sort. Default
 *         value: "headerSortDown"
 * 
 * @option String sortInitialOrder (optional) A string of the inital sorting
 *         order can be asc or desc. Default value: "asc"
 * 
 * @option String sortMultisortKey (optional) A string of the multi-column sort
 *         key. Default value: "shiftKey"
 * 
 * @option String textExtraction (optional) A string of the text-extraction
 *         method to use. For complex html structures inside td cell set this
 *         option to "complex", on large tables the complex option can be slow.
 *         Default value: "simple"
 * 
 * @option Object headers (optional) An array containing the forces sorting
 *         rules. This option let's you specify a default sorting rule. Default
 *         value: null
 * 
 * @option Array sortList (optional) An array containing the forces sorting
 *         rules. This option let's you specify a default sorting rule. Default
 *         value: null
 * 
 * @option Array sortForce (optional) An array containing forced sorting rules.
 *         This option let's you specify a default sorting rule, which is
 *         prepended to user-selected rules. Default value: null
 * 
 * @option Boolean sortLocaleCompare (optional) Boolean flag indicating whatever
 *         to use String.localeCampare method or not. Default set to true.
 * 
 * 
 * @option Array sortAppend (optional) An array containing forced sorting rules.
 *         This option let's you specify a default sorting rule, which is
 *         appended to user-selected rules. Default value: null
 * 
 * @option Boolean widthFixed (optional) Boolean flag indicating if tablesorter
 *         should apply fixed widths to the table columns. This is usefull when
 *         using the pager companion plugin. This options requires the dimension
 *         jquery plugin. Default value: false
 * 
 * @option Boolean cancelSelection (optional) Boolean flag indicating if
 *         tablesorter should cancel selection of the table headers text.
 *         Default value: true
 * 
 * @option Boolean debug (optional) Boolean flag indicating if tablesorter
 *         should display debuging information usefull for development.
 * 
 * @type jQuery
 * 
 * @name tablesorter
 * 
 * @cat Plugins/Tablesorter
 * 
 * @author Christian Bach/christian.bach@polyester.se
 */

(function ($) {
    $.extend({
        tablesorter: new
        function () {

            var parsers = [],
                widgets = [];

            this.defaults = {
                cssHeader: "header",
                cssAsc: "headerSortUp",
                cssDesc: "headerSortDown",
                cssChildRow: "expand-child",
                sortInitialOrder: "asc",
                sortMultiSortKey: "shiftKey",
                sortForce: null,
                sortAppend: null,
                sortLocaleCompare: true,
                textExtraction: "simple",
                parsers: {}, widgets: [],
                widgetZebra: {
                    css: ["even", "odd"]
                }, headers: {}, widthFixed: false,
                cancelSelection: true,
                sortList: [],
                headerList: [],
                dateFormat: "us",
                decimal: '/\.|\,/g',
                onRenderHeader: null,
                selectorHeaders: 'thead th',
                debug: false
            };

            /* debuging utils */

            function benchmark(s, d) {
                log(s + "," + (new Date().getTime() - d.getTime()) + "ms");
            }

            this.benchmark = benchmark;

            function log(s) {
                if (typeof console != "undefined" && typeof console.debug != "undefined") {
                    console.log(s);
                } else {
                    alert(s);
                }
            }

            /* parsers utils */

            function buildParserCache(table, $headers) {

                if (table.config.debug) {
                    var parsersDebug = "";
                }

                if (table.tBodies.length == 0) return; // In the case of empty tables
                var rows = table.tBodies[0].rows;

                if (rows[0]) {

                    var list = [],
                        cells = rows[0].cells,
                        l = cells.length;

                    for (var i = 0; i < l; i++) {

                        var p = false;

                        if ($.metadata && ($($headers[i]).metadata() && $($headers[i]).metadata().sorter)) {

                            p = getParserById($($headers[i]).metadata().sorter);

                        } else if ((table.config.headers[i] && table.config.headers[i].sorter)) {

                            p = getParserById(table.config.headers[i].sorter);
                        }
                        if (!p) {

                            p = detectParserForColumn(table, rows, -1, i);
                        }

                        if (table.config.debug) {
                            parsersDebug += "column:" + i + " parser:" + p.id + "\n";
                        }

                        list.push(p);
                    }
                }

                if (table.config.debug) {
                    log(parsersDebug);
                }

                return list;
            };

            function detectParserForColumn(table, rows, rowIndex, cellIndex) {
                var l = parsers.length,
                    node = false,
                    nodeValue = false,
                    keepLooking = true;
                while (nodeValue == '' && keepLooking) {
                    rowIndex++;
                    if (rows[rowIndex]) {
                        node = getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex);
                        nodeValue = trimAndGetNodeText(table.config, node);
                        if (table.config.debug) {
                            log('Checking if value was empty on row:' + rowIndex);
                        }
                    } else {
                        keepLooking = false;
                    }
                }
                for (var i = 1; i < l; i++) {
                    if (parsers[i].is(nodeValue, table, node)) {
                        return parsers[i];
                    }
                }
                // 0 is always the generic parser (text)
                return parsers[0];
            }

            function getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex) {
                return rows[rowIndex].cells[cellIndex];
            }

            function trimAndGetNodeText(config, node) {
                return $.trim(getElementText(config, node));
            }

            function getParserById(name) {
                var l = parsers.length;
                for (var i = 0; i < l; i++) {
                    if (parsers[i].id.toLowerCase() == name.toLowerCase()) {
                        return parsers[i];
                    }
                }
                return false;
            }

            /* utils */

            function buildCache(table) {

                if (table.config.debug) {
                    var cacheTime = new Date();
                }

                var totalRows = (table.tBodies[0] && table.tBodies[0].rows.length) || 0,
                    totalCells = (table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length) || 0,
                    parsers = table.config.parsers,
                    cache = {
                        row: [],
                        normalized: []
                    };

                for (var i = 0; i < totalRows; ++i) {

                    /** Add the table data to main data array */
                    var c = $(table.tBodies[0].rows[i]),
                        cols = [];

                    // if this is a child row, add it to the last row's children and
                    // continue to the next row
                    if (c.hasClass(table.config.cssChildRow)) {
                        cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1].add(c);
                        // go to the next for loop
                        continue;
                    }

                    cache.row.push(c);

                    for (var j = 0; j < totalCells; ++j) {
                        cols.push(parsers[j].format(getElementText(table.config, c[0].cells[j]), table, c[0].cells[j]));
                    }

                    cols.push(cache.normalized.length); // add position for rowCache
                    cache.normalized.push(cols);
                    cols = null;
                };

                if (table.config.debug) {
                    benchmark("Building cache for " + totalRows + " rows:", cacheTime);
                }

                return cache;
            };

            function getElementText(config, node) {

                var text = "";

                if (!node) return "";

                if (!config.supportsTextContent) config.supportsTextContent = node.textContent || false;

                if (config.textExtraction == "simple") {
                    if (config.supportsTextContent) {
                        text = node.textContent;
                    } else {
                        if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
                            text = node.childNodes[0].innerHTML;
                        } else {
                            text = node.innerHTML;
                        }
                    }
                } else {
                    if (typeof(config.textExtraction) == "function") {
                        text = config.textExtraction(node);
                    } else {
                        text = $(node).text();
                    }
                }
                return text;
            }

            function appendToTable(table, cache) {

                if (table.config.debug) {
                    var appendTime = new Date()
                }

                var c = cache,
                    r = c.row,
                    n = c.normalized,
                    totalRows = n.length,
                    checkCell = (n[0].length - 1),
                    tableBody = $(table.tBodies[0]),
                    rows = [];


                for (var i = 0; i < totalRows; i++) {
                    var pos = n[i][checkCell];

                    rows.push(r[pos]);

                    if (!table.config.appender) {

                        //var o = ;
                        var l = r[pos].length;
                        for (var j = 0; j < l; j++) {
                            tableBody[0].appendChild(r[pos][j]);
                        }

                        // 
                    }
                }



                if (table.config.appender) {

                    table.config.appender(table, rows);
                }

                rows = null;

                if (table.config.debug) {
                    benchmark("Rebuilt table:", appendTime);
                }

                // apply table widgets
                applyWidget(table);

                // trigger sortend
                setTimeout(function () {
                    $(table).trigger("sortEnd");
                }, 0);

            };

            function buildHeaders(table) {

                if (table.config.debug) {
                    var time = new Date();
                }

                var meta = ($.metadata) ? true : false;
                
                var header_index = computeTableHeaderCellIndexes(table);

                $tableHeaders = $(table.config.selectorHeaders, table).each(function (index) {

                    this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
                    // this.column = index;
                    this.order = formatSortingOrder(table.config.sortInitialOrder);
                    
					
					this.count = this.order;

                    if (checkHeaderMetadata(this) || checkHeaderOptions(table, index)) this.sortDisabled = true;
					if (checkHeaderOptionsSortingLocked(table, index)) this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table, index);

                    if (!this.sortDisabled) {
                        var $th = $(this).addClass(table.config.cssHeader);
                        if (table.config.onRenderHeader) table.config.onRenderHeader.apply($th);
                    }

                    // add cell to headerList
                    table.config.headerList[index] = this;
                });

                if (table.config.debug) {
                    benchmark("Built headers:", time);
                    log($tableHeaders);
                }

                return $tableHeaders;

            };

            // from:
            // http://www.javascripttoolbox.com/lib/table/examples.php
            // http://www.javascripttoolbox.com/temp/table_cellindex.html


            function computeTableHeaderCellIndexes(t) {
                var matrix = [];
                var lookup = {};
                var thead = t.getElementsByTagName('THEAD')[0];
                var trs = thead.getElementsByTagName('TR');

                for (var i = 0; i < trs.length; i++) {
                    var cells = trs[i].cells;
                    for (var j = 0; j < cells.length; j++) {
                        var c = cells[j];

                        var rowIndex = c.parentNode.rowIndex;
                        var cellId = rowIndex + "-" + c.cellIndex;
                        var rowSpan = c.rowSpan || 1;
                        var colSpan = c.colSpan || 1
                        var firstAvailCol;
                        if (typeof(matrix[rowIndex]) == "undefined") {
                            matrix[rowIndex] = [];
                        }
                        // Find first available column in the first row
                        for (var k = 0; k < matrix[rowIndex].length + 1; k++) {
                            if (typeof(matrix[rowIndex][k]) == "undefined") {
                                firstAvailCol = k;
                                break;
                            }
                        }
                        lookup[cellId] = firstAvailCol;
                        for (var k = rowIndex; k < rowIndex + rowSpan; k++) {
                            if (typeof(matrix[k]) == "undefined") {
                                matrix[k] = [];
                            }
                            var matrixrow = matrix[k];
                            for (var l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
                                matrixrow[l] = "x";
                            }
                        }
                    }
                }
                return lookup;
            }

            function checkCellColSpan(table, rows, row) {
                var arr = [],
                    r = table.tHead.rows,
                    c = r[row].cells;

                for (var i = 0; i < c.length; i++) {
                    var cell = c[i];

                    if (cell.colSpan > 1) {
                        arr = arr.concat(checkCellColSpan(table, headerArr, row++));
                    } else {
                        if (table.tHead.length == 1 || (cell.rowSpan > 1 || !r[row + 1])) {
                            arr.push(cell);
                        }
                        // headerArr[row] = (i+row);
                    }
                }
                return arr;
            };

            function checkHeaderMetadata(cell) {
                if (($.metadata) && ($(cell).metadata().sorter === false)) {
                    return true;
                };
                return false;
            }

            function checkHeaderOptions(table, i) {
                if ((table.config.headers[i]) && (table.config.headers[i].sorter === false)) {
                    return true;
                };
                return false;
            }
			
			 function checkHeaderOptionsSortingLocked(table, i) {
                if ((table.config.headers[i]) && (table.config.headers[i].lockedOrder)) return table.config.headers[i].lockedOrder;
                return false;
            }
			
            function applyWidget(table) {
                var c = table.config.widgets;
                var l = c.length;
                for (var i = 0; i < l; i++) {

                    getWidgetById(c[i]).format(table);
                }

            }

            function getWidgetById(name) {
                var l = widgets.length;
                for (var i = 0; i < l; i++) {
                    if (widgets[i].id.toLowerCase() == name.toLowerCase()) {
                        return widgets[i];
                    }
                }
            };

            function formatSortingOrder(v) {
                if (typeof(v) != "Number") {
                    return (v.toLowerCase() == "desc") ? 1 : 0;
                } else {
                    return (v == 1) ? 1 : 0;
                }
            }

            function isValueInArray(v, a) {
                var l = a.length;
                for (var i = 0; i < l; i++) {
                    if (a[i][0] == v) {
                        return true;
                    }
                }
                return false;
            }

            function setHeadersCss(table, $headers, list, css) {
                // remove all header information
                $headers.removeClass(css[0]).removeClass(css[1]);

                var h = [];
                $headers.each(function (offset) {
                    if (!this.sortDisabled) {
                        h[this.column] = $(this);
                    }
                });

                var l = list.length;
                for (var i = 0; i < l; i++) {
                    h[list[i][0]].addClass(css[list[i][1]]);
                }
            }

            function fixColumnWidth(table, $headers) {
                var c = table.config;
                if (c.widthFixed) {
                    var colgroup = $('<colgroup>');
                    $("tr:first td", table.tBodies[0]).each(function () {
                        colgroup.append($('<col>').css('width', $(this).width()));
                    });
                    $(table).prepend(colgroup);
                };
            }

            function updateHeaderSortCount(table, sortList) {
                var c = table.config,
                    l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var s = sortList[i],
                        o = c.headerList[s[0]];
                    o.count = s[1];
                    o.count++;
                }
            }

            /* sorting methods */

            function multisort(table, sortList, cache) {

                if (table.config.debug) {
                    var sortTime = new Date();
                }

                var dynamicExp = "var sortWrapper = function(a,b) {",
                    l = sortList.length;

                // TODO: inline functions.
                for (var i = 0; i < l; i++) {

                    var c = sortList[i][0];
                    var order = sortList[i][1];
                    // var s = (getCachedSortType(table.config.parsers,c) == "text") ?
                    // ((order == 0) ? "sortText" : "sortTextDesc") : ((order == 0) ?
                    // "sortNumeric" : "sortNumericDesc");
                    // var s = (table.config.parsers[c].type == "text") ? ((order == 0)
                    // ? makeSortText(c) : makeSortTextDesc(c)) : ((order == 0) ?
                    // makeSortNumeric(c) : makeSortNumericDesc(c));
                    var s = (table.config.parsers[c].type == "text") ? ((order == 0) ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c)) : ((order == 0) ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c));
                    var e = "e" + i;

                    dynamicExp += "var " + e + " = " + s; // + "(a[" + c + "],b[" + c
                    // + "]); ";
                    dynamicExp += "if(" + e + ") { return " + e + "; } ";
                    dynamicExp += "else { ";

                }

                // if value is the same keep orignal order
                var orgOrderCol = cache.normalized[0].length - 1;
                dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";

                for (var i = 0; i < l; i++) {
                    dynamicExp += "}; ";
                }

                dynamicExp += "return 0; ";
                dynamicExp += "}; ";

                if (table.config.debug) {
                    benchmark("Evaling expression:" + dynamicExp, new Date());
                }

                eval(dynamicExp);

                cache.normalized.sort(sortWrapper);

                if (table.config.debug) {
                    benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime);
                }

                return cache;
            };

            function makeSortFunction(type, direction, index) {
                var a = "a[" + index + "]",
                    b = "b[" + index + "]";
                if (type == 'text' && direction == 'asc') {
                    return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));";
                } else if (type == 'text' && direction == 'desc') {
                    return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));";
                } else if (type == 'numeric' && direction == 'asc') {
                    return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));";
                } else if (type == 'numeric' && direction == 'desc') {
                    return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));";
                }
            };

            function makeSortText(i) {
                return "((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i + "] > b[" + i + "]) ? 1 : 0));";
            };

            function makeSortTextDesc(i) {
                return "((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i + "] > a[" + i + "]) ? 1 : 0));";
            };

            function makeSortNumeric(i) {
                return "a[" + i + "]-b[" + i + "];";
            };

            function makeSortNumericDesc(i) {
                return "b[" + i + "]-a[" + i + "];";
            };

            function sortText(a, b) {
                if (table.config.sortLocaleCompare) return a.localeCompare(b);
                return ((a < b) ? -1 : ((a > b) ? 1 : 0));
            };

            function sortTextDesc(a, b) {
                if (table.config.sortLocaleCompare) return b.localeCompare(a);
                return ((b < a) ? -1 : ((b > a) ? 1 : 0));
            };

            function sortNumeric(a, b) {
                return a - b;
            };

            function sortNumericDesc(a, b) {
                return b - a;
            };

            function getCachedSortType(parsers, i) {
                return parsers[i].type;
            }; /* public methods */
            this.construct = function (settings) {
                return this.each(function () {
                    // if no thead or tbody quit.
                    if (!this.tHead || !this.tBodies) return;
                    // declare
                    var $this, $document, $headers, cache, config, shiftDown = 0,
                        sortOrder;
                    // new blank config object
                    this.config = {};
                    // merge and extend.
                    config = $.extend(this.config, $.tablesorter.defaults, settings);
                    // store common expression for speed
                    $this = $(this);
                    // save the settings where they read
                    $.data(this, "tablesorter", config);
                    // build headers
                    $headers = buildHeaders(this);
                    // try to auto detect column type, and store in tables config
                    this.config.parsers = buildParserCache(this, $headers);
                    // build the cache for the tbody cells
                    cache = buildCache(this);
                    // get the css class names, could be done else where.
                    var sortCSS = [config.cssDesc, config.cssAsc];
                    // fixate columns if the users supplies the fixedWidth option
                    fixColumnWidth(this);
                    // apply event handling to headers
                    // this is to big, perhaps break it out?
                    $headers.click(

                    function (e) {
                        var totalRows = ($this[0].tBodies[0] && $this[0].tBodies[0].rows.length) || 0;
                        if (!this.sortDisabled && totalRows > 0) {
                            // Only call sortStart if sorting is
                            // enabled.
                            $this.trigger("sortStart");
                            // store exp, for speed
                            var $cell = $(this);
                            // get current column index
                            var i = this.column;
                            // get current column sort order
                            this.order = this.count++ % 2;
							// always sort on the locked order.
							if(this.lockedOrder) this.order = this.lockedOrder;
							
							// user only whants to sort on one
                            // column
                            if (!e[config.sortMultiSortKey]) {
                                // flush the sort list
                                config.sortList = [];
                                if (config.sortForce != null) {
                                    var a = config.sortForce;
                                    for (var j = 0; j < a.length; j++) {
                                        if (a[j][0] != i) {
                                            config.sortList.push(a[j]);
                                        }
                                    }
                                }
                                // add column to sort list
                                config.sortList.push([i, this.order]);
                                // multi column sorting
                            } else {
                                // the user has clicked on an all
                                // ready sortet column.
                                if (isValueInArray(i, config.sortList)) {
                                    // revers the sorting direction
                                    // for all tables.
                                    for (var j = 0; j < config.sortList.length; j++) {
                                        var s = config.sortList[j],
                                            o = config.headerList[s[0]];
                                        if (s[0] == i) {
                                            o.count = s[1];
                                            o.count++;
                                            s[1] = o.count % 2;
                                        }
                                    }
                                } else {
                                    // add column to sort list array
                                    config.sortList.push([i, this.order]);
                                }
                            };
                            setTimeout(function () {
                                // set css for headers
                                setHeadersCss($this[0], $headers, config.sortList, sortCSS);
                                appendToTable(
	                                $this[0], multisort(
	                                $this[0], config.sortList, cache)
								);
                            }, 1);
                            // stop normal event by returning false
                            return false;
                        }
                        // cancel selection
                    }).mousedown(function () {
                        if (config.cancelSelection) {
                            this.onselectstart = function () {
                                return false
                            };
                            return false;
                        }
                    });
                    // apply easy methods that trigger binded events
                    $this.bind("update", function () {
                        var me = this;
                        setTimeout(function () {
                            // rebuild parsers.
                            me.config.parsers = buildParserCache(
                            me, $headers);
                            // rebuild the cache map
                            cache = buildCache(me);
                        }, 1);
                    }).bind("updateCell", function (e, cell) {
                        var config = this.config;
                        // get position from the dom.
                        var pos = [(cell.parentNode.rowIndex - 1), cell.cellIndex];
                        // update cache
                        cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(
                        getElementText(config, cell), cell);
                    }).bind("sorton", function (e, list) {
                        $(this).trigger("sortStart");
                        config.sortList = list;
                        // update and store the sortlist
                        var sortList = config.sortList;
                        // update header count index
                        updateHeaderSortCount(this, sortList);
                        // set css for headers
                        setHeadersCss(this, $headers, sortList, sortCSS);
                        // sort the table and append it to the dom
                        appendToTable(this, multisort(this, sortList, cache));
                    }).bind("appendCache", function () {
                        appendToTable(this, cache);
                    }).bind("applyWidgetId", function (e, id) {
                        getWidgetById(id).format(this);
                    }).bind("applyWidgets", function () {
                        // apply widgets
                        applyWidget(this);
                    });
                    if ($.metadata && ($(this).metadata() && $(this).metadata().sortlist)) {
                        config.sortList = $(this).metadata().sortlist;
                    }
                    // if user has supplied a sort list to constructor.
                    if (config.sortList.length > 0) {
                        $this.trigger("sorton", [config.sortList]);
                    }
                    // apply widgets
                    applyWidget(this);
                });
            };
            this.addParser = function (parser) {
                var l = parsers.length,
                    a = true;
                for (var i = 0; i < l; i++) {
                    if (parsers[i].id.toLowerCase() == parser.id.toLowerCase()) {
                        a = false;
                    }
                }
                if (a) {
                    parsers.push(parser);
                };
            };
            this.addWidget = function (widget) {
                widgets.push(widget);
            };
            this.formatFloat = function (s) {
                var i = parseFloat(s);
                return (isNaN(i)) ? 0 : i;
            };
            this.formatInt = function (s) {
                var i = parseInt(s);
                return (isNaN(i)) ? 0 : i;
            };
            this.isDigit = function (s, config) {
                // replace all an wanted chars and match.
                return /^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g, '')));
            };
            this.clearTableBody = function (table) {
                if ($.browser.msie) {
                    function empty() {
                        while (this.firstChild)
                        this.removeChild(this.firstChild);
                    }
                    empty.apply(table.tBodies[0]);
                } else {
                    table.tBodies[0].innerHTML = "";
                }
            };
        }
    });

    // extend plugin scope
    $.fn.extend({
        tablesorter: $.tablesorter.construct
    });

    // make shortcut
    var ts = $.tablesorter;

    // add default parsers
    ts.addParser({
        id: "text",
        is: function (s) {
            return true;
        }, format: function (s) {
            return $.trim(s.toLocaleLowerCase());
        }, type: "text"
    });

    ts.addParser({
        id: "digit",
        is: function (s, table) {
            var c = table.config;
            return $.tablesorter.isDigit(s, c);
        }, format: function (s) {
            return $.tablesorter.formatFloat(s);
        }, type: "numeric"
    });

    ts.addParser({
        id: "currency",
        is: function (s) {
            return /^[£$€?.]/.test(s);
        }, format: function (s) {
            return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g), ""));
        }, type: "numeric"
    });

    ts.addParser({
        id: "ipAddress",
        is: function (s) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);
        }, format: function (s) {
            var a = s.split("."),
                r = "",
                l = a.length;
            for (var i = 0; i < l; i++) {
                var item = a[i];
                if (item.length == 2) {
                    r += "0" + item;
                } else {
                    r += item;
                }
            }
            return $.tablesorter.formatFloat(r);
        }, type: "numeric"
    });

    ts.addParser({
        id: "url",
        is: function (s) {
            return /^(https?|ftp|file):\/\/$/.test(s);
        }, format: function (s) {
            return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//), ''));
        }, type: "text"
    });

    ts.addParser({
        id: "isoDate",
        is: function (s) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);
        }, format: function (s) {
            return $.tablesorter.formatFloat((s != "") ? new Date(s.replace(
            new RegExp(/-/g), "/")).getTime() : "0");
        }, type: "numeric"
    });

    ts.addParser({
        id: "percent",
        is: function (s) {
            return /\%$/.test($.trim(s));
        }, format: function (s) {
            return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g), ""));
        }, type: "numeric"
    });

    ts.addParser({
        id: "usLongDate",
        is: function (s) {
            return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));
        }, format: function (s) {
            return $.tablesorter.formatFloat(new Date(s).getTime());
        }, type: "numeric"
    });

    ts.addParser({
        id: "shortDate",
        is: function (s) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);
        }, format: function (s, table) {
            var c = table.config;
            s = s.replace(/\-/g, "/");
            if (c.dateFormat == "us") {
                // reformat the string in ISO format
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2");
            } else if (c.dateFormat == "uk") {
                // reformat the string in ISO format
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
            } else if (c.dateFormat == "dd/mm/yy" || c.dateFormat == "dd-mm-yy") {
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3");
            }
            return $.tablesorter.formatFloat(new Date(s).getTime());
        }, type: "numeric"
    });
    ts.addParser({
        id: "time",
        is: function (s) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);
        }, format: function (s) {
            return $.tablesorter.formatFloat(new Date("2000/01/01 " + s).getTime());
        }, type: "numeric"
    });
    ts.addParser({
        id: "metadata",
        is: function (s) {
            return false;
        }, format: function (s, table, cell) {
            var c = table.config,
                p = (!c.parserMetadataName) ? 'sortValue' : c.parserMetadataName;
            return $(cell).metadata()[p];
        }, type: "numeric"
    });
    // add default widgets
    ts.addWidget({
        id: "zebra",
        format: function (table) {
            if (table.config.debug) {
                var time = new Date();
            }
            var $tr, row = -1,
                odd;
            // loop through the visible rows
            $("tr:visible", table.tBodies[0]).each(function (i) {
                $tr = $(this);
                // style children rows the same way the parent
                // row was styled
                if (!$tr.hasClass(table.config.cssChildRow)) row++;
                odd = (row % 2 == 0);
                $tr.removeClass(
                table.config.widgetZebra.css[odd ? 0 : 1]).addClass(
                table.config.widgetZebra.css[odd ? 1 : 0])
            });
            if (table.config.debug) {
                $.tablesorter.benchmark("Applying Zebra widget", time);
            }
        }
    });
})(jQuery);
/*
 * jQuery JSONP Core Plugin 2.0.2 (2010-05-21)
 * 
 * http://code.google.com/p/jquery-jsonp/
 *
 * Copyright (c) 2010 Julian Aubourg
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
 
 /* 
   Sections marked OLD OPERA  indicate original 2.0.2 code.
   Lines immediately after are suggested by Daniel Bratell <bratell@opera.com>.
   Old lines reflect Opera workarounds for the old Opera browser;
   the new Opera parser chokes up on those workarounds.
   */
   
 
 
( function( $ , setTimeout ) {
	
	// ###################### UTILITIES ##
	
	// Noop
	function noop() {
	}
	
	// Generic callback for firefox & opera
	function genericCallback( data ) {
		lastValue = [ data ];
	}

	// Add script to document
	function appendScript( node ) {
		head.insertBefore( node , head.firstChild );
	}
	
	// Call if defined
	function callIfDefined( method , object , parameters ) {
		method && method.apply( object , parameters );
	}
	
	// Give joining character given url
	function qMarkOrAmp( url ) {
		return /\?/ .test( url ) ? "&" : "?";
	}
	
	var // String constants (for better minification)
		STR_ASYNC = "async",
		STR_EMPTY = "",
		STR_ERROR = "error",
		STR_JQUERY_JSONP = "_jqjsp",
		STR_ON = "on",
		STR_ONERROR = STR_ON + STR_ERROR,
		STR_ONLOAD = STR_ON + "load",
		STR_ONREADYSTATECHANGE = STR_ON + "readystatechange",
		STR_REMOVE_CHILD = "removeChild",
		STR_SCRIPT_TAG = "<script/>",
		STR_SUCCESS = "success",
		STR_TIMEOUT = "timeout",
		
		// Head element (for faster use)
		head = $( "head" )[ 0 ] || document.documentElement,
		// Page cache
		pageCache = {},
		// Counter
		count = 0,
		// Last returned value
		lastValue,
		
		// ###################### DEFAULT OPTIONS ##
		xOptionsDefaults = {
			//beforeSend: undefined,
			//cache: false,
			callback: STR_JQUERY_JSONP,
			//callbackParameter: undefined,
			//complete: undefined,
			//data: ""
			//dataFilter: undefined,
			//error: undefined,
			//pageCache: false,
			//success: undefined,
			//timeout: 0,
			//traditional: false,		
			url: location.href
		};
	
	// ###################### MAIN FUNCTION ##
	function jsonp( xOptions ) {
		
		// Build data with default
		xOptions = $.extend( {} , xOptionsDefaults , xOptions );
		
		// References to xOptions members (for better minification)
		var completeCallback = xOptions.complete,
			dataFilter = xOptions.dataFilter,
			callbackParameter = xOptions.callbackParameter,
			successCallbackName = xOptions.callback,
			cacheFlag = xOptions.cache,
			pageCacheFlag = xOptions.pageCache,
			url = xOptions.url,
			data = xOptions.data,
			timeout = xOptions.timeout,
			pageCached,
			
			// References to beforeSend (for better minification)
			beforeSendCallback = xOptions.beforeSend,
		
			// Abort/done flag
			done = 0,
			
			// Life-cycle functions
			cleanUp = noop;
		
		// Create the abort method
		xOptions.abort = function() { 
			! done++ &&	cleanUp(); 
		};

		// Call beforeSend if provided (early abort if false returned)
		if ( beforeSendCallback
			&& ( beforeSendCallback( xOptions , xOptions ) === false || done ) ) {
			return xOptions;
		}
			
		// Control entries
		url = url || STR_EMPTY;
		data = data ? ( (typeof data) == "string" ? data : $.param( data , xOptions.traditional ) ) : STR_EMPTY;
			
		// Build final url
		url += data ? ( qMarkOrAmp( url ) + data ) : STR_EMPTY;
		
		// Add callback parameter if provided as option
		callbackParameter && ( url += qMarkOrAmp( url ) + escape(callbackParameter) + "=?" );
		
		// Add anticache parameter if needed
		! cacheFlag && ! pageCacheFlag && ( url += qMarkOrAmp( url ) + "_" + ( new Date() ).getTime() + "=" );
		
		// Replace last ? by callback parameter
		url = url.replace( /=\?(&|$)/ , "=" + successCallbackName + "$1" );
		
		// Success notifier
		function notifySuccess( json ) {
			! done++ && setTimeout( function() {
				cleanUp();
				// Pagecache if needed
				pageCacheFlag && ( pageCache [ url ] = { s: [ json ] } );
				// Apply the data filter if provided
				dataFilter && ( json = dataFilter.apply( xOptions , [ json ] ) );
				// Call success then complete
				callIfDefined( xOptions.success , xOptions , [ json , STR_SUCCESS ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , STR_SUCCESS ] );
			} , 0 );
		}
		
		// Error notifier
	    function notifyError( type ) {
	    	! done++ && setTimeout( function() {
	    		// Clean up
	    		cleanUp();
				// If pure error (not timeout), cache if needed
				pageCacheFlag && type != STR_TIMEOUT && ( pageCache[ url ] = type );
				// Call error then complete
				callIfDefined( xOptions.error , xOptions , [ xOptions , type ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , type ] );
	    	} , 0 );
	    }
	    
		// Check page cache
		pageCacheFlag && ( pageCached = pageCache[ url ] ) 
			? ( pageCached.s ? notifySuccess( pageCached.s[ 0 ] ) : notifyError( pageCached ) )
			:
			// Initiate request
			setTimeout( function( script , scriptAfter , timeoutTimer ) {
				
				if ( ! done ) {
				
					// If a timeout is needed, install it
					timeoutTimer = timeout > 0 && setTimeout( function() {
						notifyError( STR_TIMEOUT );
					} , timeout );
					
					// Re-declare cleanUp function
					cleanUp = function() {
						timeoutTimer && clearTimeout( timeoutTimer );
						script[ STR_ONREADYSTATECHANGE ]
							= script[ STR_ONLOAD ]
							= script[ STR_ONERROR ]
							= null;
						head[ STR_REMOVE_CHILD ]( script );
						// OLD OPERA: scriptAfter && head[ STR_REMOVE_CHILD ]( scriptAfter );
						scriptAfter && scriptAfter.parentNode && head[ STR_REMOVE_CHILD ]( scriptAfter );
						
					};
					
					// Install the generic callback
					// (BEWARE: global namespace pollution ahoy)
					window[ successCallbackName ] = genericCallback;

					// Create the script tag
					script = $( STR_SCRIPT_TAG )[ 0 ];
					
					// Callback function
					function callback( result ) {
						result = lastValue;
						lastValue = undefined;
						result ? notifySuccess( result[ 0 ] ) : notifyError( STR_ERROR );
					}
										
					// IE: onreadystatechange handler
					script[ STR_ONREADYSTATECHANGE ] = function() {
					
						/loaded|complete/.test( script.readyState ) && callback();
						
					};
					
					// All: standard handlers
					script[ STR_ONERROR ] = script[ STR_ONLOAD ] = callback;
					
					//ORIGINAL: $.browser.opera ?
					// NOW NEEDS MOOTOOLS
					Browser.opera ? 
						
						// Opera: onerror is not called, use synchronized script execution
						( ( scriptAfter = $( STR_SCRIPT_TAG )[ 0 ] ).text = "jQuery('#" + ( script.id = STR_JQUERY_JSONP + count++ ) + "')[0]." + STR_ONERROR + "()" )
						
						// Firefox: set script as async to avoid blocking scripts
						: script[ STR_ASYNC ] = STR_ASYNC;
						
					;
					
					// Set source
					script.src = url;
					
					// Append main script
					appendScript( script );
					
					// Opera: Append trailing script
					// OLD OPERA: scriptAfter && appendScript( scriptAfter );
					setTimeout(function(){scriptAfter && appendScript( scriptAfter )},1000);
				}
				
			} , 0 );
		
		return xOptions;
	}
	
	// ###################### SETUP FUNCTION ##
	jsonp.setup = function( xOptions ) {
		$.extend( xOptionsDefaults , xOptions );
	};

	// ###################### INSTALL in jQuery ##
	$.jsonp = jsonp;
	
} )( jQuery , setTimeout );
/*
 * jQuery MD5 Plugin 1.2.1
 * https://github.com/blueimp/jQuery-MD5
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://creativecommons.org/licenses/MIT/
 * 
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */

/*jslint bitwise: true */
/*global unescape, jQuery */

(function ($) {
    'use strict';

    /*
    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
    * to work around bugs in some JS interpreters.
    */
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    /*
    * Bitwise rotate a 32-bit number to the left.
    */
    function bit_rol(num, cnt) {
        return (num << cnt) | (num >>> (32 - cnt));
    }

    /*
    * These functions implement the four basic operations the algorithm uses.
    */
    function md5_cmn(q, a, b, x, s, t) {
        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
    }

    /*
    * Calculate the MD5 of an array of little-endian words, and a bit length.
    */
    function binl_md5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << ((len) % 32);
        x[(((len + 64) >>> 9) << 4) + 14] = len;

        var i, olda, oldb, oldc, oldd,
            a =  1732584193,
            b = -271733879,
            c = -1732584194,
            d =  271733878;

        for (i = 0; i < x.length; i += 16) {
            olda = a;
            oldb = b;
            oldc = c;
            oldd = d;

            a = md5_ff(a, b, c, d, x[i],       7, -680876936);
            d = md5_ff(d, a, b, c, x[i +  1], 12, -389564586);
            c = md5_ff(c, d, a, b, x[i +  2], 17,  606105819);
            b = md5_ff(b, c, d, a, x[i +  3], 22, -1044525330);
            a = md5_ff(a, b, c, d, x[i +  4],  7, -176418897);
            d = md5_ff(d, a, b, c, x[i +  5], 12,  1200080426);
            c = md5_ff(c, d, a, b, x[i +  6], 17, -1473231341);
            b = md5_ff(b, c, d, a, x[i +  7], 22, -45705983);
            a = md5_ff(a, b, c, d, x[i +  8],  7,  1770035416);
            d = md5_ff(d, a, b, c, x[i +  9], 12, -1958414417);
            c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
            b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
            a = md5_ff(a, b, c, d, x[i + 12],  7,  1804603682);
            d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
            c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
            b = md5_ff(b, c, d, a, x[i + 15], 22,  1236535329);

            a = md5_gg(a, b, c, d, x[i +  1],  5, -165796510);
            d = md5_gg(d, a, b, c, x[i +  6],  9, -1069501632);
            c = md5_gg(c, d, a, b, x[i + 11], 14,  643717713);
            b = md5_gg(b, c, d, a, x[i],      20, -373897302);
            a = md5_gg(a, b, c, d, x[i +  5],  5, -701558691);
            d = md5_gg(d, a, b, c, x[i + 10],  9,  38016083);
            c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
            b = md5_gg(b, c, d, a, x[i +  4], 20, -405537848);
            a = md5_gg(a, b, c, d, x[i +  9],  5,  568446438);
            d = md5_gg(d, a, b, c, x[i + 14],  9, -1019803690);
            c = md5_gg(c, d, a, b, x[i +  3], 14, -187363961);
            b = md5_gg(b, c, d, a, x[i +  8], 20,  1163531501);
            a = md5_gg(a, b, c, d, x[i + 13],  5, -1444681467);
            d = md5_gg(d, a, b, c, x[i +  2],  9, -51403784);
            c = md5_gg(c, d, a, b, x[i +  7], 14,  1735328473);
            b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

            a = md5_hh(a, b, c, d, x[i +  5],  4, -378558);
            d = md5_hh(d, a, b, c, x[i +  8], 11, -2022574463);
            c = md5_hh(c, d, a, b, x[i + 11], 16,  1839030562);
            b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
            a = md5_hh(a, b, c, d, x[i +  1],  4, -1530992060);
            d = md5_hh(d, a, b, c, x[i +  4], 11,  1272893353);
            c = md5_hh(c, d, a, b, x[i +  7], 16, -155497632);
            b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
            a = md5_hh(a, b, c, d, x[i + 13],  4,  681279174);
            d = md5_hh(d, a, b, c, x[i],      11, -358537222);
            c = md5_hh(c, d, a, b, x[i +  3], 16, -722521979);
            b = md5_hh(b, c, d, a, x[i +  6], 23,  76029189);
            a = md5_hh(a, b, c, d, x[i +  9],  4, -640364487);
            d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
            c = md5_hh(c, d, a, b, x[i + 15], 16,  530742520);
            b = md5_hh(b, c, d, a, x[i +  2], 23, -995338651);

            a = md5_ii(a, b, c, d, x[i],       6, -198630844);
            d = md5_ii(d, a, b, c, x[i +  7], 10,  1126891415);
            c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
            b = md5_ii(b, c, d, a, x[i +  5], 21, -57434055);
            a = md5_ii(a, b, c, d, x[i + 12],  6,  1700485571);
            d = md5_ii(d, a, b, c, x[i +  3], 10, -1894986606);
            c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
            b = md5_ii(b, c, d, a, x[i +  1], 21, -2054922799);
            a = md5_ii(a, b, c, d, x[i +  8],  6,  1873313359);
            d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
            c = md5_ii(c, d, a, b, x[i +  6], 15, -1560198380);
            b = md5_ii(b, c, d, a, x[i + 13], 21,  1309151649);
            a = md5_ii(a, b, c, d, x[i +  4],  6, -145523070);
            d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
            c = md5_ii(c, d, a, b, x[i +  2], 15,  718787259);
            b = md5_ii(b, c, d, a, x[i +  9], 21, -343485551);

            a = safe_add(a, olda);
            b = safe_add(b, oldb);
            c = safe_add(c, oldc);
            d = safe_add(d, oldd);
        }
        return [a, b, c, d];
    }

    /*
    * Convert an array of little-endian words to a string
    */
    function binl2rstr(input) {
        var i,
            output = '';
        for (i = 0; i < input.length * 32; i += 8) {
            output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
        }
        return output;
    }

    /*
    * Convert a raw string to an array of little-endian words
    * Characters >255 have their high-byte silently ignored.
    */
    function rstr2binl(input) {
        var i,
            output = [];
        output[(input.length >> 2) - 1] = undefined;
        for (i = 0; i < output.length; i += 1) {
            output[i] = 0;
        }
        for (i = 0; i < input.length * 8; i += 8) {
            output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << (i % 32);
        }
        return output;
    }

    /*
    * Calculate the MD5 of a raw string
    */
    function rstr_md5(s) {
        return binl2rstr(binl_md5(rstr2binl(s), s.length * 8));
    }

    /*
    * Calculate the HMAC-MD5, of a key and some data (raw strings)
    */
    function rstr_hmac_md5(key, data) {
        var i,
            bkey = rstr2binl(key),
            ipad = [],
            opad = [],
            hash;
        ipad[15] = opad[15] = undefined;                        
        if (bkey.length > 16) {
            bkey = binl_md5(bkey, key.length * 8);
        }
        for (i = 0; i < 16; i += 1) {
            ipad[i] = bkey[i] ^ 0x36363636;
            opad[i] = bkey[i] ^ 0x5C5C5C5C;
        }
        hash = binl_md5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
        return binl2rstr(binl_md5(opad.concat(hash), 512 + 128));
    }

    /*
    * Convert a raw string to a hex string
    */
    function rstr2hex(input) {
        var hex_tab = '0123456789abcdef',
            output = '',
            x,
            i;
        for (i = 0; i < input.length; i += 1) {
            x = input.charCodeAt(i);
            output += hex_tab.charAt((x >>> 4) & 0x0F) +
                hex_tab.charAt(x & 0x0F);
        }
        return output;
    }

    /*
    * Encode a string as utf-8
    */
    function str2rstr_utf8(input) {
        return unescape(encodeURIComponent(input));
    }

    /*
    * Take string arguments and return either raw or hex encoded strings
    */
    function raw_md5(s) {
        return rstr_md5(str2rstr_utf8(s));
    }
    function hex_md5(s) {
        return rstr2hex(raw_md5(s));
    }
    function raw_hmac_md5(k, d) {
        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
    }
    function hex_hmac_md5(k, d) {
        return rstr2hex(raw_hmac_md5(k, d));
    }
    
    $.md5 = function (string, key, raw) {
        if (!key) {
            if (!raw) {
                return hex_md5(string);
            } else {
                return raw_md5(string);
            }
        }
        if (!raw) {
            return hex_hmac_md5(key, string);
        } else {
            return raw_hmac_md5(key, string);
        }
    };
    
}(typeof jQuery === 'function' ? jQuery : this));

// test-ipv6.com javascript
var dummyConsole = [];
var console = console || {};
if (!console.log) {
  console.log = function (message) {
    dummyConsole.push(message);
  };
}
                

/*global GIGO, MirrorConfig, $gt, jQuery,  window,  alert,  Browser */

/* TODO consider having something on the debug screen for missing variables */

GIGO.mirrorconfig = function (key1, key2, fallback) {
    var ret;
    try {
        ret = MirrorConfig[key1][key2]; 
        if (typeof ret === "undefined") {
          ret = fallback;
        }
    } catch (e) {
        ret = fallback;
    }
    return ret;
};

/* Look for <span lookup=site.name>x</span> and replace "x" wih the config.js values */

GIGO.fix_logo_as_html = function () {
    if (MirrorConfig.footer.html) {
        jQuery("#logo").load(MirrorConfig.footer.html);
    }
};

GIGO.fix_logo_generic = function () {
    // logo, operator, link
    if (MirrorConfig.footer.logo || MirrorConfig.footer.operator) {
        if (MirrorConfig.footer.logo) {
            jQuery("#logo_img").append(jQuery("<img>", {
                src: MirrorConfig.footer.logo
            }));
        }
        if (MirrorConfig.footer.operator) {
            if (MirrorConfig.footer.transparent) {
              jQuery("#logo_operator").append("This instance of test-ipv6.com is provided by " + " ");
            } else {
              jQuery("#logo_operator").append("This mirror is provided by" + " ");
            }
            if (MirrorConfig.footer.link) {
                jQuery("#logo_operator").append(jQuery("<a>", {
                    text: MirrorConfig.footer.operator,
                    href: MirrorConfig.footer.link,
                    target: "_blank"
                }));
            } else {
                jQuery("#logo_operator").append(jQuery("<span>").text(MirrorConfig.footer.operator));
            }
        }
    }
};


// This is called very late, after the test completes
// but before "Other Sites" are checked.  We will by default
// wait until "late", to avoid interfering with the 
// actual tests, since those are purely timing based.
GIGO.fix_footer_late = function () {
    if (MirrorConfig.footer) {
      if (!(MirrorConfig.footer.early)) {
        GIGO.fix_logo_as_html();
        GIGO.fix_logo_generic();
      }
    }
};

// This is called very early into the site startup.
// This gives the option of displaying any footer information
// at the risk of interfering with results.
GIGO.fix_footer_early = function() {
    if (MirrorConfig.footer) {
      if (MirrorConfig.footer.early) {
        GIGO.fix_logo_as_html();
        GIGO.fix_logo_generic();
      }
    }
}


GIGO.fixup_html_per_site_config = function () {
    var key1, key2, find, sel;
    // First, do search/replace stuff.
    for (key1 in MirrorConfig) {
        if (MirrorConfig.hasOwnProperty(key1)) {
            for (key2 in MirrorConfig[key1]) {
                if (MirrorConfig[key1].hasOwnProperty(key2)) {
                    find = key1 + "." + key2;
                    sel = "span[lookup='" + find + "']";
                    jQuery(sel).text(MirrorConfig[key1][key2]);

                    sel = "div[lookup='" + find + "']";
                    jQuery(sel).html(MirrorConfig[key1][key2]);

                    sel = "a[linkup='" + find + "']";
                    jQuery(sel).attr("href", MirrorConfig[key1][key2]);

                    sel = "img[src='" + find + "']";
                    jQuery(sel).attr("src", MirrorConfig[key1][key2]);

                    sel = "a[mailto='" + find + "']";
                    jQuery(sel).attr("href", "mailto:" + MirrorConfig[key1][key2]);


                }
            }
        }
    }

};


/*
** Report errors centrally, if not using IE6.
** Do this as a fake image fetch - avoids any risk
** of loading foreign code into the browser.
*/
window.onerror = function(message, url, linenumber) {
    var eurl;
    if (/\bMSIE 6/.test(navigator.userAgent) && !window.opera) {
        if (linenumber && parseInt(linenumber) < 100) {
            return;
        }
    }
    if (url && linenumber) {
        eurl = "http://ds.master.test-ipv6.com/errors.php?";
        eurl = eurl + "message=" + encodeURIComponent(message);
        eurl = eurl + "&url=" + encodeURIComponent(url);
        eurl = eurl + "&linenumber=" + encodeURIComponent(linenumber);
        eurl = eurl + "&lang=" + encodeURIComponent("EN");
        eurl = eurl + "&version=" + encodeURIComponent("1.1.548");
        new Image().src = eurl;
    }
    return false;
};



/*global GIGO, MirrorConfig, jQuery, alert, $gt */
/*jslint nomen: true */


GIGO.messages = {
    "bad": "bad",
    "ok": "ok",
    "slow": "slow",
    "timeout": "timeout",
    
    "No Direct IP": "Connections to urls with IP addresses appear to be blocked; perhaps by a web filter such as \'NoScript\' or \'RequestPolicy\' installed into your browser, or filtering in your proxy server. This limits some of the functionality of this test site.",
    "No Direct IPv4": "IPv4 Connections using DNS work; but literal IP addresses in urls do not. These are rarely used on the web today.",
    "No Direct IPv6": "IPv6 Connections using DNS work; but literal IP addresses in urls do not. These are rarely used on the web today.",
    "6to4": "You appear to be using a public 6to4 gateway; your router may be providing this to you automatically. Such public gateways have no service level agreements; you may see performance problems using such. Better would be to get a native IPv6 address from your ISP.",
    "teredo": "Your IPv6 connection appears to be using Teredo, a type of IPv4/IPv6 translation using a public gateway. The quality for this <i>may</i> suffer, as you are using a public gateway to reach IPv6 based sites.",
    "teredo-minimum": "Your IPv6 connection appears to be using Teredo, a type of IPv4/IPv6 gateway; currently it connects only to direct IP\'s. Your browser will not be able to go to IPv6 sites by name. This means the current configuration is not useful for browsing IPv6 web sites.",
    "teredo-v4pref": "Your IPv6 connection appears to be using Teredo, a type of IPv4/IPv6 gateway. Your particular teredo configuration is only used as a protocol of last resort. When visiting a site with both IPv4 and IPv6, IPv4 will be preferred.",
    "IPv6 MTU": "Danger! IPv6 sorta works - however, large packets appear to fail, giving the appearance of a broken website. If a publisher publishes to IPv6, you will believe their web site to be broken. Ask your ISP about MTU issues; possibly with your tunnel. Check your firewall to make sure that ICMPv6 messages are allowed (in particular, Type 2 or Packet Too Big).",
    "confused:ASK": "Test results inconclusive; they were not consistent with expectations. Please rerun the test, and if the results are the same, please fill out the contact form.",
    "dualstack:ipv4_preferred": "-",
    "dualstack:ipv6_preferred": "-",
    "dualstack:slow": "For unknown reasons, your browser appears to operate slower when given the option of connecting to both IPv4 and IPv6. Please rerun the test, and if the results are the same, please fill out the contact form.",
    "ipv4_only": "You appear to be able to browse the IPv4 Internet only. You will not be able to reach IPv6-only sites.",
    "ipv4_only:ds_good": "When a publisher offers both IPv4 and IPv6, your browser appears to be happy to take the IPv4 site without delay.",
    "ipv4_only:ds_slow": "When a publisher offers both IPv4 and IPv6, your browser appears to slow down signficantly compared to an IPv4-only site. You may even believe the destination web site to be broken. This may be due to your IPv6 configuration.",
    "ipv4_only:ds_timeout": "When a publisher offers both IPv4 and IPv6, your browser will time out trying to connect. You may believe the site is down. This may be due to your IPv6 configuration. Consider disabling IPv6, or seeking help.",
    "ipv4_slow": "Connections to IPv4 are slow, but functional. Perhaps you or your ISP put you behind an IP sharing device (NAT) that is currently slow.",
    "ipv6_only": "You appear to be able to browse the IPv6 Internet only. You have no access to IPv4. That\'s pretty bold!",
    "ipv6_slow": "Connections to IPv6 are slow, but functional. Perhaps you are using a public IPv6 tunnel that is either slow, or not located near you.",
    "ipv6_timeout": "Connections to IPv6-only sites are timing out. Any web site that is IPv6 only, will appear to be down to you.",
    "broken_ipv6": "Connections to IPv6-capable web sites hang. It appears that you may have IPv6 configured; and your computer believes that your IPv6 is working, with a route. It is however completely failing. Any web site that adds IPv6, will become unreachable to you. If you are unable to fix your IPv6 routing or connectivity, seek help. If all else fails, strongly consider disabling IP6 on host.",
    "webfilter:blocked": "We are unable to test your system; it appears that a firewall or browser filter is preventing the test from running. Critical tests are failing. Try disabling any browser plugins, extensions, or add-ons (such as ad blockers); and reloading this page. If that still fails, you can leave a comment requesting help.",
    "webfilter:dsboth": "We are unable to test your system; it appears that a firewall or browser filter is preventing the test from running. The dual-stack tests are failing. Try disabling any browser plugins, extensions, or add-ons (such as ad blockers); and reloading this page. If that still fails, you can leave a comment requesting help.",
    "webfilter:addons": "Your browser is blocking the test urls. We will try alternate methods, but they may fail to show your IP address; and may affect the quality of the advice given.",
    "webfilter:firefox": "The most likely cause is NoScript or AdBlock+. NoScript can be told to permit all scripts on this page (you may need to do this more than once). At minimum, permit the urls listed below.",
    "NAT64": "NAT64 detected. IPv6 works. IPv4 works for most purposes. Applications that are hard-coded for IPv4-only will fail. We are aware of at least one major voice-over-ip program that falls into this category. Your application\'s support staff may need a nudge to add proper IPv6 support.",
    "v6ns:ok": "Your DNS server (possibly run by your ISP) appears to have IPv6 Internet access.",
    "v6ns:bad": "Your DNS server (possibly run by your ISP) appears to have no access to the IPv6 Internet, or is not configured to use it. This may in the future restrict your ability to reach IPv6-only sites.",
    "ip_timeout:firefox": "You are likely using a FireFox plugin that is causing IP based tests to fail. Examples: RequestPolicy. Please disable those while using this site.",
    "confused:obbo": "A lookup for an IPv6-only name failed; yet the lookup and connect for dual-stack connected via IPv6. Something appears to be confused with the DNS lookups.",
    "apple:dnsbug_aaaa": "A lookup for an IPv6-only name failed; yet the lookup and connect for dual-stack connected via IPv6. The IPv6-only lookup should have worked. Apple has a bug that sporadically causes some IPv6 lookups to fail. We saw evidence of it on this test. You can reload the page and try the test again. For more details, see <a href=\'http://openradar.appspot.com/7333104\'>http://openradar.appspot.com/7333104</a>.",
    "apple:dnsbug_ds": "A lookup for an dual-stack IPv4 and IPv6 name failed (at minimum it should have connected via IPv4). Apple has a bug that sporadically causes some IPv6 lookups to fail. We saw evidence of it on this test. You can reload the page and try the test again. For more details, see <a href=\'http://openradar.appspot.com/7333104\'>http://openradar.appspot.com/7333104</a>.",
    "ipv4:no_address": "No IPv4 address detected",
    "ipv6:no_address": "No IPv6 address detected",
    "no_address": "Your IP address(es) could not be detected due to inteference from browser add-ons.",
    "opera": "The Opera web browser seems to be break on this site frequently. <b>If you have trouble, try another browser</b>.",
    "opera:turbo": "<b>Disable turbo mode on Opera, and try again.</b> Turbo mode is not compatible with the needs of this site.",
    "dualstack:safe": "<b>Good news!</b> Your current configuration will continue to work as web sites enable IPv6.",
    "dualstack:unsafe": "<b>Our tests show that you will have a broken or misconfigured IPv6 setup, and this will cause problems as web sites enable IPv6.</b>",
    "dualstack:mtu": "<b>Our tests show that you may have MTU problems with IPv6; this can cause web sites to load slow (or not at all) when web sites enable IPv6.</b>",
    "buggydns1": "We looked up an IPv6 address, but your DNS server (possibly your home router) mangled the response, and is treating it as (broken) IPv4.",
    "tunnel_dumb": "It appears that you use a tunnel mechanism for either IPv4 or IPv6.",
    "tunnel_6rd_dumb": "It appears that you use a managed tunnel mechanism, 6RD, to transport IPv6 over IPv4.",
    "proxy_via": "We have detected that you are using a proxy. This means we are testing your proxy server, not your computer. Proxy details (as reported by your proxy \'Via\' header): %details",
    "proxy_via_dumb": "We have detected that you are using a proxy. This means we are testing your proxy server, not your computer.",
    "ipv6:nodns": "IPv6 connections work, but connections using DNS names do not use IPv6. For some reason, your browser or your OS is not doing IPv6 DNS \'AAAA\' lookups.",
    "broken": "We have suggestions to help you fix your system.",
    "sites": "Since you have IPv6, we are including a tab that shows how well you can reach other IPv6 sites. %sites",
    "avoids_ipv6": "Your browser has real working IPv6 address - but is avoiding using it. We\'re concerned about this."
};

GIGO.messages_popups = {
// These are not just strings, but arrays,
// #1: url
// #2: link text to show (translate this!)
// Between the first and second string, there must be a comma and a space.
    "dualstack:mtu": ["faq_pmtud.html", "faq: MTU"],
    "IPv6 MTU": ["faq_pmtud.html", "faq: MTU"],
//    "ipv4:no_address": ["faq_ipv4_only.html", "faq: No IPv4"],
    "ipv6:no_address": ["faq_no_ipv6.html", "faq: No IPv6"],
    "6to4": ["faq_6to4.html", "faq: 6to4"],
    "teredo-minimum": ["faq_teredo_minimum.html", "faq: Teredo Minimum"],
    "v6ns:bad": ["faq_v6ns_bad.html", "faq: v6ns Bad"],
    "webfilter:blocked":  ["faq_browser_plugins.html", "faq: Browser Plugins"],
    "webfilter:dsboth":   ["faq_browser_plugins.html", "faq: Browser Plugins"],
    "webfilter:firefox":  ["faq_firefox_plugins.html", "faq: Firefox Add-Ons"],
    "webfilter:addons":   ["faq_browser_plugins.html", "faq: Browser Plugins"],
    "ip_timeout:firefox": ["faq_firefox_plugins.html", "faq: Firefox Add-Ons"],
    "opera": ["faq_opera.html", "faq: Opera"],
    "buggydns1": ["faq_buggydns1.html", "faq: Buggy DNS"],
    "broken": ["broken.html", "faq: Broken!"],
    "ipv6:nodns": ["faq_broken_aaaa.html", "faq: Broken DNS Lookups"],
    "avoids_ipv6": ["faq_avoids_ipv6.html", "faq: Avoiding IPv6?"],
    "tunnel_6rd_dumb": ["faq_tunnel_6rd.html", "faq: 6RD tunnel"]
};



/*global GIGO, jQuery, alert, $gt:true*/

/* Used to fetch external strings, to make localization a bit easier. */

GIGO.gettext = function (a, b) {
    var c;
    try {
        c = GIGO.gettext_messages[a][b];
    } catch (e) {
        return "[NO TEXT: " + a + " " + b + "]";
    }
    if (c) {
        return c;
    }
    return "[NO TEXT: " + a + " " + b + "]";
};

/* global $gt(a,b) polution - for gettext */
$gt = GIGO.gettext;

$gt = function () {
    console.log("whoops still using $gt");
};


// Original source:
// http://geekswithblogs.net/svanvliet/archive/2006/03/23/simple-javascript-object-dump-function.aspx
// Modified for:
//  GIGO name space
//  Wrapper function
/*global GIGO, jQuery, window, top */
/*jslint nomen: true */
/*jslint browser: true */




GIGO.dumpObj = function (obj, name) {
    var s = GIGO._dumpObj(obj, name, "  ", 0);
    s = jQuery('<div/>').text(s).html();
    GIGO.writeConsole("<pre>" + s + "</pre>");
};


GIGO._dumpObj_MAX_DUMP_DEPTH = 3;

GIGO._dumpObj = function (obj, name, indent, depth) { /*jslint forin: false */

    var s = JSON.stringify(obj,null,"  ");
    return s;
    
  // The rest of this is obsolete
  // (needs to be proven)
    var child, output, item;
    if (depth > GIGO._dumpObj_MAX_DUMP_DEPTH) {
        return indent + name + ": <Maximum Depth Reached>\n";
    }
    if (typeof obj === "object") {
        child = null;
        output = indent + name + "\n";
        indent += "\t";
        for (item in obj) {
            if (obj.hasOwnProperty(item)) {


                try {
                    child = obj[item];
                } catch (e) {
                    child = "<Unable to Evaluate>";
                }
                if (typeof child === "object") {
                    output += GIGO._dumpObj(child, item, indent, depth + 1);
                } else {
                    output += indent + item + ": " + child + "\n";
                }
            }
        }
        return output;
    }
    return obj;
};

// From http://www.javascripter.net/faq/writingt.htm
// Use this instead of "alert"; you can scroll the window this produces.
// It also sucks a bit less CPU generating this output, since
// a real browser window was designed for large output.
GIGO.writeConsole = function (content) {
    top.consoleRef = window.open('', 'myconsole', 'width=550,height=450' + ',menubar=1' + ',toolbar=1' + ',status=1' + ',scrollbars=1' + ',resizable=1');
    top.consoleRef.document.writeln('<html><head><title>Console</title></head>' + '<body bgcolor=white onLoad="self.focus()">' + content + '</body></html>');
    top.consoleRef.document.close();
};

/*global GIGO, Browser, unescape */
/*jslint browser: true */

GIGO.getms = function () {
    // Helper function to get the current date/time as milliseconds.
    var d = new Date();
    return d.getTime();
};


GIGO.slow = 5000; // milliseconds . If a test takes longer than this, it is considered "slow" (if good) or "timeout" (if error)
GIGO.max_time = 15 * 1000; // milliseconds . Max time to allow a test to try and run, before giving up on it.
GIGO.retry_until = 15 * 1000; // milliseconds.  If we want multiple passes, this says to stop new passes after this time.
GIGO.retry_min = 1; // Minimum time_ms to reload images, trying to differentiate service quality.
GIGO.retry_max = 3; // Max time_ms to allow reloading, no matter how fast.
GIGO.repeat_only_if_slow = 1; // If 1: only repeat tests if at least one test was slow.  If 0: always repeat until retry_min/retry_max.
GIGO.repeated = 0; // How many time_ms we've tried so far.

GIGO.results = {}; // what we want to expose as "this" to callback functions


GIGO.results.ipv4 = {
    ip: "",
    subtype: ""
}; // Customer IP information, per our web service call 
GIGO.results.ipv6 = {
    ip: "",
    subtype: ""
}; // Customer IP information, per our web service call

GIGO.results.tests = {}; // Store test specific data here.

GIGO.tabhistory = ["main"]; // History of what tab we go to and when; used for GIGO.goback()

GIGO.tests_planned = 0; // As we add tests, this will be incremented.  Used by progress bar.
GIGO.tests_finished = 0; // As we finish tests, this will be incremented. Used by progress bar. 
GIGO.start_time = GIGO.getms(); // Starting time.  Used by progress bar as well as by retry_until
GIGO.finished = 0; // When we're done with all tests, set to 1 to hide the progress bar
GIGO.slowcount = 0; // How many background jsonp we spawned so far. Used when we execute tasks in parallel to stagger load.

// If we rig the test, don't report the results to the status surver.
// This is what happens when the page is called with
// ?test=oooooooo  (all "ok", and technically impossible).
// ?test=oobooooo  (more likely result)
// Main purpose is to test the display logic for given patterns of
// "ok", "slow", "bad", "timeout".
GIGO.test_rigged = 0;

GIGO.tests = []; // The list of all tests we will run.
GIGO.queue = []; // If use_queue then this is the list of pending jobs to start.
GIGO.dequeued = []; // Tests we have dequeued
GIGO.use_queue = 0; // Set to 1 for force serial execution. Set to 0 to permit parallel execution.
if (Browser.firefox) {
    GIGO.use_queue = 1; // Always do serial execution for Firefox and friends, due to funky socks behavior.
}
if (Browser.opera) {
    GIGO.use_queue = 1; // Any blocking thread, blocks all.
    GIGO.max_time = 15 * 1000; // Hmm.
}

GIGO.helpdesk = {}; // Test results will pass data to the helpdesk page
GIGO.helpdesk.other_sites = {};
GIGO.helpdesk.other_sites.finished = 0;
GIGO.helpdesk.other_sites.count = 0;
GIGO.helpdesk.other_sites.good = [];
GIGO.helpdesk.other_sites.bad = [];


// http://mootools.net/docs/core/Core/Browser
GIGO.slowcount_delay = 20; // How long (ms) to delay between backgrounding jsonp if use_queue==0
if (Browser.ie) {
    GIGO.slowcount_delay = 200; // Slow down spawning of ajax queries
}

// Symbian appears to be particularly bad.
// DNS lookups for some people appear to slow things down by nearly 5 seconds
if (navigator.userAgent.match(/SymbianOS|SymbOS/)) {
    GIGO.slowcount_delay = 500; // Slow down on Symbian phones
    GIGO.slow = 9000;
}



GIGO.parseGetVars = function () {
    var getVars, returnVars, i, newVar;
    getVars = location.search.substring(1).split("&"); // From the browser URL
    returnVars = [];
    i = 0;

    for (i = 0; i < getVars.length; i = i + 1) {
        newVar = getVars[i].split("=");
        returnVars[unescape(newVar[0])] = unescape(newVar[1]);
    }
    return returnVars;
};


GIGO.CGI = GIGO.parseGetVars(); // Parse CGI arguements
GIGO.contact_wanted = GIGO.CGI.contact; // Do we want to force the contact form?

// If we found overrides, we will set GIGO.override
// as we as prepared each override into GIGO.overrides
GIGO.override = 0;
GIGO.overrides = {};

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== "number" || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.lastIndexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}

GIGO.CheckTransparentDomain = function(s) {
    return s == "test-ipv6.com" || s.endsWith(".test-ipv6.com");
};

GIGO.CheckTransparent = function() {
    if (GIGO.CheckTransparentDomain(document.location.hostname)) {
        if (!GIGO.CheckTransparentDomain(MirrorConfig.load.domain)) {
            delete MirrorConfig.footer.html;
            delete MirrorConfig.footer.logo;
            MirrorConfig.footer.transparent = 1;
            MirrorConfig.site = {
                name: "test-ipv6.com",
                contact: "Jason Fesler",
                mailto: "jfesler@test-ipv6.com"
            };
            MirrorConfig.orig_options = JSON.parse(JSON.stringify(MirrorConfig.options))
            MirrorConfig.options.show_stats = "http://master.test-ipv6.com/stats.html";
            MirrorConfig.options.survey = "/survey.php";
            MirrorConfig.options.comment = "/comment.php";
            MirrorConfig.options.comment_html = 1;
            MirrorConfig.options.v6mtu = "mtu1280." + MirrorConfig.load.domain;
            MirrorConfig.options.userdata = "master.test-ipv6.com";
        }
    }
};

GIGO.CheckTransparent();

/*global GIGO, MirrorConfig, jQuery,  Browser,  setTimeout,  alert, document */
/*jslint nomen: true */
/*jslint regexp: true */


GIGO.generate_share_link_entry = function (name, def) {
    var s, t, id, p;
    s = "";
    try {
        id = "test_" + name;
        t = GIGO.results.tests[id];
        if ((t.status === "ok") || (t.status === "slow")) {
            s = "&" + name + "=" + encodeURIComponent(t.status) + "," + encodeURIComponent(t.time_ms);
            p = t.ipinfo.type.replace(/^ipv/, "");
            s = s + "," + encodeURIComponent(p);
        }
        if ((t.status === "bad") || (t.status === "timeout")) {
            s = "&" + name + "=" + encodeURIComponent(t.status) + "," + encodeURIComponent(t.time_ms);
        }
    } catch (e) {
        noop = 1;
    }
    return s;
};



GIGO.generate_share_link = function () {
    var url;
    url = location.href.replace(/[?].*$/,'') + "?";
    if (GIGO.results.ipv4.ip) {
        url = url + "ip4=" + encodeURIComponent(GIGO.results.ipv4.ip);
    } else {
        url = url + "ip4=";
    }
    if (GIGO.results.ipv6.ip) {
        url = url + "&ip6=" + encodeURIComponent(GIGO.results.ipv6.ip).replace(/%3a/ig, ":");
    } else {
        url = url + "&ip6=";
    }
    url = url + GIGO.generate_share_link_entry("a", "4");
    url = url + GIGO.generate_share_link_entry("aaaa", "6");
    url = url + GIGO.generate_share_link_entry("ds", "6");
    url = url + GIGO.generate_share_link_entry("ipv4", "4");
    url = url + GIGO.generate_share_link_entry("ipv6", "6");
    url = url + GIGO.generate_share_link_entry("v6mtu", "6");
    url = url + GIGO.generate_share_link_entry("v6ns", "6");
    url = url + GIGO.generate_share_link_entry("dsmtu", "6");


    // Working/Failed sites
    if (GIGO.isdef(GIGO.failed_sites)) {
        url = url + "&failed_sites=" + GIGO.failed_sites.join(",");
    }

    return url;
};


GIGO.show_share_link = function () {
    var url, a, t, te;
    url = GIGO.generate_share_link();
    a = jQuery("<a>");

    t = jQuery("<p>");
    t.text(url);
    te = t.html();
    te = te.replace(/&amp;/g, "<wbr>&amp;");
    a.html(te);
    a.attr("href", url);
    a.attr("target", "_blank");
    d = jQuery("<p id=replayurl>").append(a);
    jQuery("#replayurl").replaceWith(d);
};

GIGO.show_debug = function () {
    var s, url;

    s = GIGO._dumpObj(GIGO.results.tests, "GIGO.results.tests.", "  ", 0);
    s = jQuery('<div/>').text(s).html();
    jQuery("#debug_dump").html("<pre>" + s + "</pre>");

    GIGO.show_share_link();
};

// Return a table with left side colored and with a symbol; right side, informative text.
GIGO.results_table_wrapper = function (color, text) {
    var table;
    color = color.toLowerCase();

    table = "";
    table = "<table class=\"results_wrapper\">";
    table = table + "<tr>";

    table = table + "<td class=\"results_left\"><p style=\"margin: 0;\">";

    switch (color) {
    case "green":
        table = table + '<img src="/images/knob_valid_green.png"/>';
        break;
    case "red":
        table = table + '<img src="/images/knob_cancel.png"/>';
        break;
    case "blue":
        table = table + '<img src="/images/knob_info.png"/>';
        break;
    case "orange":
        table = table + '<img src="/images/knob_attention.png"/>';
        break;
    default:
        table = table + "&nbsp;";
        break;
    }

    table = table + "</p></td>";

    table = table + "<td class=\"results_right\">" + text + "</td>";
    table = table + "</tr></table>";

    return table;
};


GIGO.showdebug = function () {
    jQuery("#debuglink").show();
    GIGO.tabnav("debug");
};

GIGO.start_sites = function () {
    var t, moreinfo, link, table;
    jQuery("#siteslink").show();
    GIGO.test_sites(2);
    t = "Since you have IPv6, we are including a tab that shows how well you can reach other IPv6 sites. %sites";
    moreinfo = "[more info]";

    link = '<a href="#" class="help_popup" onclick="return GIGO.tabnav(\'sites\');">' + moreinfo + '</a>';

    t = t.replace(/%sites/, link);
    table = GIGO.results_table_wrapper("blue", t);
    jQuery("#results_eof").before(table);
};


GIGO.update_ip = function (id) {
    // G = the GIGO object
    var s, ipinfo, escaped, name;

    ipinfo = GIGO.results.tests[id].ipinfo;


    GIGO.show_debug();
    if (GIGO.results.ipv4.ip !== "") {
        s = "Your IPv4 address on the public Internet appears to be" + " " + GIGO.results.ipv4.ip;
        if (GIGO.results.ipv4.subtype) {
            s = s + " (" + GIGO.results.ipv4.subtype + ")";
        }
        if (GIGO.results.ipv4.via) {
            s = s + "<br/>" + "Proxied" + ", <code>" + jQuery('<div/>').text("Via: " + GIGO.results.ipv4.via).html() + "</code>";
        }

        if ((GIGO.results.ipv4.asn_name) && (GIGO.results.ipv6.asn_name) && (GIGO.results.ipv4.asn_name !== GIGO.results.ipv6.asn_name)) {
            escaped = jQuery('<div/>').text(GIGO.results.ipv4.asn_name).html();
            s = s + "<br/>(" + escaped + ")";
            jQuery("#your_isp").html("");
        }

        s = GIGO.results_table_wrapper("blue", s);
        jQuery("#your_ipv4").html(s);
    }
    if (GIGO.results.ipv6.ip !== "") {
        s = "Your IPv6 address on the public Internet appears to be" + " " + GIGO.results.ipv6.ip;
        if (GIGO.results.ipv6.subtype) {
            s = s + "<br/>" + "Your IPv6 service appears to be" + ": " + GIGO.results.ipv6.subtype;
        }
        if (GIGO.results.ipv6.via) {
            s = s + "<br/>" + "Proxied" + ", <code>" + jQuery('<div/>').text("Via: " + GIGO.results.ipv6.via).html() + "</code>";
        }
        if ((GIGO.results.ipv4.asn_name) && (GIGO.results.ipv6.asn_name) && (GIGO.results.ipv4.asn_name !== GIGO.results.ipv6.asn_name)) {
            escaped = jQuery('<div/>').text(GIGO.results.ipv6.asn_name).html();
            s = s + "<br/>(" + escaped + ")";
            jQuery("#your_isp").html("");
        }
        s = GIGO.results_table_wrapper("blue", s);
        jQuery("#your_ipv6").html(s);
    }

    if (
        ((GIGO.results.ipv4.asn_name) && (GIGO.results.ipv6.asn_name) && (GIGO.results.ipv4.asn_name === GIGO.results.ipv6.asn_name)) || (GIGO.results.ipv4.asn_name && (!GIGO.results.ipv6.asn_name)) || (GIGO.results.ipv6.asn_name && (!GIGO.results.ipv4.asn_name))
    ) {
        name = GIGO.results.ipv4.asn_name || GIGO.results.ipv6.asn_name;
        escaped = jQuery('<div/>').text(name).html();
        s = "Your Internet Service Provider (ISP) appears to be" + " " + escaped;
        s = GIGO.results_table_wrapper("blue", s);
        jQuery("#your_isp").html(s);
    }




};


GIGO.update_status = function (id) {
    // G = the GIGO object
    // url = the URL we just received
    // id = the update we just received (ie, "test_a", "test_aaaa")
    // ipinfo.ip  = text form of ip;  ipinfo.type = "ipv4" or "ipv6";  ipinfo.subtype MAY say "Teredo" or "6to4"
    var status, status_translated, time_ms, ipinfo, content, url, proxied;
    status = GIGO.results.tests[id].status; // This should be ok/bad/slow/timeout
    status_translated = GIGO.messages[status];
    time_ms = GIGO.results.tests[id].time_ms; // This should be number of milliseconds spent
    ipinfo = GIGO.results.tests[id].ipinfo; // This may be "undef"
    url = GIGO.results.tests[id].url;

    if (!time_ms) {
        content = "Started";

    } else if (GIGO.isdef(ipinfo)) {
        // TODO: Localize number formats
        proxied = "";
        if (ipinfo.via) {
            proxied = " " + "proxied" + " ";
        }



        content = "<span class=status_" + status + ">" + status_translated + "</span> " + "(" + (time_ms / 1000.0).toFixed(3) + "s) " + "using" + " " + proxied + ipinfo.type;
        if (ipinfo.subtype) {
            content = content + " " + ipinfo.subtype;
        }
        if (ipinfo.asn) {
            content = content + " ASN " + ipinfo.asn;
        }
    } else {
        // TODO: Localize number formats
        content = "<span class=status_" + status + ">" + status_translated + "</span> " + "(" + (time_ms / 1000.0).toFixed(3) + "s)";
    }

    jQuery("#" + id).html(content);
    jQuery("#sum_" + id).html(content);
};

GIGO.update_url = function (id) {
    var url, showurl, res;
    url = GIGO.results.tests[id].url;
    showurl = url.replace(/fill=xxxx*/, "fill=xxx...xxx"); // Obscene to show a nearly 2k url
    showurl = showurl.replace(/&testdomain=[^&]+&testname=[^&]+/,""); // Also remove the test name and test domain
    showurl = showurl.replace(/(gif|png|jpg)\?$/i,"$1"); // hmm
    res = id.replace(/test_/, "results_"); // Deterine which span to show this in
    jQuery("#" + res).html("<a id=url href='" + url + "'>" + showurl + " </a>");
};

GIGO.browser_tweaks = function (G) {
    // Finish setting up the contact form
    if (Browser.Platform.win) {
        jQuery("#help_windows").show();
    } else if (Browser.Platform.linux) {
        jQuery("#help_linux").show();
    } else {
        jQuery("#help_generic").show();
    }
};

GIGO.update_progress = function (G) {
    // G = the GIGO object
    // Now a spinner or "throbber" instead;
    // indicates how many tests have finished.
    // Prelude to being more flexible on dynamically adding tests.
    // Implements a progress bar
    // Based on:
    //     G.queue.length  - number of tests we have left to start
    //     G.dequeued.length - number of tests we started already
    //     G.tests_finished - number of tests completed (good or bad)
    //     G.retry_max     - maximum number of retries
    //     G.start_time    - time test started
    //     G.retry_until   - the point we stop running new tests
    // pct1 : percent done based on number of tests ran
    var sofar, outof;

    sofar = G.tests_finished;
    outof = G.queue.length + G.dequeued.length;

    jQuery(".pb1_text").html(" " + sofar + "/" + outof + " " + "tests run");
    if (sofar === outof) {
        jQuery("#progress_bar").hide();
        jQuery("#progress_bar").html("");
    }

};

GIGO.send_survey_global = function (tokens) {
  // Only if we are in transparent mode..
  if (MirrorConfig.orig_options) {
    if (MirrorConfig.options.survey !== MirrorConfig.orig_options.survey  ||
     MirrorConfig.options.userdata !== MirrorConfig.orig_options.userdata ) { 
        MirrorConfig.options.survey = MirrorConfig.orig_options.survey;
        MirrorConfig.options.userdata =  MirrorConfig.orig_options.userdata;
        GIGO.send_survey(tokens);
     }
  }
}


GIGO.send_survey = function (tokens) {

    var url = MirrorConfig.options.survey;
    if (!url) {
        return;
    }

    if (MirrorConfig.options.userdata) {
        // We're going to completely override "url"
        if (GIGO.results.ipv4.ip) {
            url = "http://ipv4." + MirrorConfig.options.userdata + MirrorConfig.options.survey;
        } else {
            url = "http://ipv6." + MirrorConfig.options.userdata + MirrorConfig.options.survey;
        }
    }


    if (GIGO.is_replay()) {
       return;
    }

    if (GIGO.override) {
        jQuery("#survey").html("(Survey posting skipped; test was rigged)");
        return;
    }


    tokens = tokens.join(",");
    url += "?x&" + GIGO.cgistats("a") + GIGO.cgistats("aaaa") + GIGO.cgistats("ds4") + GIGO.cgistats("ds6") + GIGO.cgistats("ipv4") + GIGO.cgistats("ipv6") + GIGO.cgistats("v6ns") + GIGO.cgistats("dsmtu") + GIGO.cgistats("v6mtu") + "&tokens=" + encodeURI(tokens) + "&rand=" + Math.floor(Math.random() * 2000000000);

    if (MirrorConfig.options.survey_ip) {
        if (GIGO.results.ipv4.ip) {
            url += "&ip4="+GIGO.results.ipv4.ip;
        } else {
            url += "&ip4=";
        }
        if (GIGO.results.ipv6.ip) {
            url += "&ip6="+GIGO.results.ipv6.ip;
        } else {
            url += "&ip6=";
        }
    } else {
        if (GIGO.results.ipv4.ip) {
            url += "&ip4=a29";
        } else {
            url += "&ip4=";
        }

        if (GIGO.results.ipv6.ip) {
            url += "&ip6=a29";
        } else {
            url += "&ip6=";
        }
    }
    url += "&load=" + encodeURI(MirrorConfig.load.domain);


    url += "&ip6subtype=" + encodeURI(GIGO.results.ipv6.subtype);
    url += "&callback=?";


    jQuery("#survey").html("(Updating server side IPv6 readiness stats)");


    jQuery.jsonp({
        "url": url,
        "cache": true,
        "pageCache": false,
        "timeout": GIGO.max_time,

        "success": function (stuff) {
            jQuery("#survey").html("(Updated server side IPv6 readiness stats)");
        },
        "error": function (d, msg) {
            jQuery("#survey").html("(Survey posting failed; the above information is accurate, but not recorded.)" + " " + url);
        }
    });

};

GIGO.gen_help_link = function (token) {
    var page, title, code;
    // GIGO.gettext_messages.messages_popups has the urls and translated titles
    code = "";
    if (GIGO.messages_popups.hasOwnProperty(token)) {
        page = GIGO.messages_popups[token][0];
        title = GIGO.messages_popups[token][1];
        code = "<a href=\"#\" onclick=\"GIGO.help_popup('" + page + "','" + title + "'); return false;\" class=\"help_popup\">" + "[more info]" + "</a>";
    }
    return code;
};

GIGO.testing_ipv4 = function () {
    var s;
    s = String(location.hostname);
    return (s.match(/ipv4/i) || s.match(/testv4/i) || s.match(/test-v4/i));
};


GIGO.show_results = function () {
    var tokens_hash, i, table, token_expanded, help, s4, s6, sid4, sid6;


    // GIGO.dumpObj(this); // requires popups enabled
    // Check for some specific issues; and possibly either show
    // extra content panels (already in the HTML)  and/or
    // highlight our contact form.
    tokens_hash = GIGO.oc(GIGO.results.tokens);
    if (tokens_hash.hasOwnProperty("Unliklely")) {
        GIGO.contact_wanted = 1;
        jQuery("#help_plugins").show(); // Encourage more feedback.
    }
    if (tokens_hash.hasOwnProperty("confused:ASK")) {
        if (MirrorConfig.options.comment) {
            GIGO.contact_wanted = 1;
            jQuery("#help_plugins").show(); // Encourage more feedback.
        }
    }
    if (tokens_hash.hasOwnProperty("webfilter:dsboth")) {
        jQuery("#help_plugins").show(); // Less encouraging of soliciting comments on this one.
    }
    if (tokens_hash.hasOwnProperty("webfilter:blocked")) {
        jQuery("#help_plugins").show(); // Less encouraging of soliciting comments on this one.
    }

    GIGO.check_versions(); // Check OS, Browser, etc
    // Show the results to the user
    for (i = 0; i < GIGO.results.tokens_expanded.length; i = i + 1) {
        token_expanded = GIGO.results.tokens_expanded[i];
        if (token_expanded.text !== "-") {

            help = GIGO.gen_help_link(token_expanded.token);
            if (help) {
                token_expanded.text = token_expanded.text + " " + help;
            }

            // token_expanded.token
            // token_expanded.color
            // token_expanded.text

            table = GIGO.results_table_wrapper(token_expanded.color, token_expanded.text);
            jQuery("#results_eof").before(table);
        }
    }

    // Show summary table.  TODO: Make this even simpler for people.
    s4 = " " + GIGO.results.score_transition + "/10";
    sid4 = "score" + GIGO.results.score_transition;
    s6 = " " + GIGO.results.score_strict + "/10";
    sid6 = "score" + GIGO.results.score_strict;

    if (GIGO.results.score_transition === -1) {
        s4 = "n/a";
        sid4 = "score0";
    }
    if (GIGO.results.score_strict === -1) {
        s6 = "n/a";
        sid6 = "score0";
    }

    table = "<div id=\"debugtable\"><table width=100%><tr><th colspan=2>" + "Your readiness score" + "</th></tr>";
    if (GIGO.testing_ipv4(GIGO.results.score_transition)) {
        table += "<tr><td><span id=" + sid4 + ">" + s4 + "</span></td><td>" + "for your IPv4 stability and readiness, when publishers offer both IPv4 and IPv6" + "</td></tr>";
    }
    table += "<tr><td><span id=" + sid6 + ">" + s6 + "</span></td><td>" + "for your IPv6 stability and readiness, when publishers are forced to go IPv6 only" + "</td></tr>";
    table += "</table></div>";
    table += "<div class='next'><p>" + "Click to see" + " <a href=\"#\" class=\"tabbutton_tests\"  onclick='return GIGO.tabnav(\"tests\")'>" + "test data" + "</a></p></div>";
    jQuery("#results_eof").before(table);


    // Update specific fields in above table.
    jQuery("[name=score_transition]").val(GIGO.results.score_transition);
    jQuery("[name=score_strict]").val(GIGO.results.score_strict);

    //
    // jQuery("#results_eof").before("<div class=\"small\">" + GIGO.results.tokens.join(",") + "</div>");
    //

    GIGO.show_faq_link(GIGO.results.tokens);

    if ((GIGO.results.score_transition === "?") || (GIGO.results.score_transition > 10) || (GIGO.contact_wanted)) {
        // I really want to talk to them.
        if (MirrorConfig.options.comment) {
            GIGO.showform();
        }
    }
};

GIGO.show_faq_link = function (tokens) {
    var html, faqs, page, title, linktext, m;

    faqs = {
        'dualstack:safe,ipv4_only,v6ns:bad': 'faq_ipv4_only.html',
        'dualstack:safe,ipv4_only,v6ns:ok': 'faq_ipv4_only.html',
        'ipv6:no_address,dualstack:safe,ipv4_only,v6ns:bad': 'faq_ipv4_only.html',
        'ipv6:no_address,dualstack:safe,ipv4_only,v6ns:ok': 'faq_ipv4_only.html',
        'ipv6:no_address,dualstack:safe,ipv4_only:ds_good,ipv6_timeout,v6ns:bad': 'faq_ipv4_only.html',
        'ipv6:no_address,dualstack:safe,ipv4_only:ds_good,ipv6_timeout,v6ns:ok': 'faq_ipv4_only.html',
        'dualstack:safe,ipv4_only,teredo-minimum,v6ns:bad': 'faq_teredo_minimum.html',
        'dualstack:safe,ipv4_only,teredo-minimum,v6ns:ok': 'faq_teredo_minimum.html',

        'dualstack:unsafe,broken': 'broken.html',
        'ipv6:no_address,dualstack:unsafe,broken': 'broken.html',
        'proxy_via,dualstack:unsafe,broken': 'broken.html',
        'ipv6:no_address,proxy_via,dualstack:unsafe,broken': 'broken.html'

    };

    try {
        tokens = tokens.replace(/,webfilter:[^,]+/g, ""); // These really make a mess of the tokens string.
    } catch (e) {
        // do nothing
    }

    if (faqs[tokens]) {
        jQuery("#comments_unwanted").hide();
        jQuery("#comments_faq").show();

        page = faqs[tokens];
        title = "Your FAQ";
        linktext = "Frequently Asked Questions";

        //        handle = GIGO.help_popup(page, title, 0); // Don't auto-switch to this
        html = '<a href="#" onclick="return GIGO.help_popup(\'' + page + '\', \'' + title + '\');">' + linktext + '</a>';

        m = jQuery("#comments_faq_link");
        m.html(html);

    }
};




GIGO.help_popup = function (file, tabname, popup) {

    var o, handle, t, hostname, lfile;
    if (popup === undefined) {
        popup = 1;
    }
    o = GIGO.newtab(file, tabname, popup);
    handle = "#tab_" + o.handle;

    if (popup) {
        GIGO.tabnav(o.handle);
    }

    if (!o.loaded) {
        o.loaded = 1;

        // Because we are doing bad things with base hrefs, we must
        // force the help popups to show the original, user-entered
        // hostname (instead of the 'current server');  This is to
        // avoid cross-domain problems.
        hostname = String(document.location.hostname);
        file = "http://" + hostname + "/" + file;
        lfile = file + '.en_US';


        jQuery(handle).html("loading..."); // Loading indicator.    
        jQuery(handle).load(lfile + " #content", function (responseText, textStatus) {
            if (textStatus !== 'success') {
                jQuery(handle).html("failed to load" + " " + lfile);
            }
            t = "<p>";
            t = t + "<a href='#' onclick='return GIGO.goback()' class='goback'>";
            t = t + "[go back]" + "</a> ";
            t = t + "<a target='_blank' href='" + file + "' class='permalink'>";
            t = t + "[permalink]" + "</a> ";
            t = t + "</p>";

            jQuery(handle).append(t);
        });
        if (!popup) {
            jQuery(handle).hide();
        }
    }
    return (o.handle);
};

/*global GIGO, jQuery, alert, $gt, Browser, navigator */

GIGO.fix_version = function (underscored) {
    var t;
    t = underscored.replace(/_/g, ".");
    return t;
};

GIGO.zeropad = function (version) {
    // Take a version number like 4.10 and return back 00004.00010
    // Pad any sequence of digits to 10 points
    // So, for every matching set of \d+
    // create new string
    // replace \b(original string)\b with new string
    var smallnumber, mymatch, mymatched, myindex, newstring, replace_re;

    smallnumber = /\b(\d{1,9})\b/;
    while (smallnumber.test(version)) {
        mymatch = smallnumber.exec(version);
        mymatched = mymatch[0];
        myindex = mymatch.index;

        newstring = mymatched;
        while (newstring.length < 10) {
            newstring = "0" + newstring;
        }
        replace_re = new RegExp("\\b" + mymatched + "\\b");
        version = version.replace(replace_re, newstring);
    }
    return version;
};

GIGO.check_version = function (appname, current, suggested) {
    var t, table, current_compare, suggested_compare;
    // Convert 10_6_7 to 10.6.7 before doing comparisons.
    if (current) {
        current = current.toString();
        current = current.replace(/_/g, ".");
        suggested = suggested.replace(/_/g, ".");

        current_compare = GIGO.zeropad(current);
        suggested_compare = GIGO.zeropad(suggested);

        if (current_compare < suggested_compare) {
            t = "%app: You are running version %found; we recommend %suggest or newer.";
            t = t.replace(/%app/, appname);
            t = t.replace(/%found/, current);
            t = t.replace(/%suggest/, suggested);
            table = GIGO.results_table_wrapper("orange", t);
            jQuery("#results_eof").before(table);
        }
    }
};

GIGO.check_mac_os_version = function () {
    // Firefox will only return "10.6" not "10.6.7".
    // Safari and Chrome appear to do the right thing.
    if (navigator.userAgent.search(/(FireX|SilkX)/) < 0) {
        if (navigator.userAgent.search(/Intel Mac OS X ([0123456789]+[._][0123456789]+[._][0123456789]+)/) >= 0) {
            if (RegExp.$1) {
                GIGO.check_version("Mac OS X", RegExp.$1, "10.6.7");
            }
        } else if (navigator.userAgent.search(/Intel Mac OS X ([0123456789]+[._][0123456789]+)/) >= 0) {
            if (RegExp.$1) {
                GIGO.check_version("Mac OS X", RegExp.$1, "10.6.7");
            }
        }
    }
};



GIGO.check_browser_firefox = function () {
    if (Browser.firefox) {
        // Firefox only reports "4.0" not "4.0.1"
        if (Browser.Platform.mac) {
            GIGO.check_version("Firefox", Browser.version, "14");
        }
    }
};

GIGO.check_browser_safari = function () {
    if (Browser.safari) {
        GIGO.check_version("Safari", Browser.version, "5.0.5");
    }
};

GIGO.check_browser_opera = function () {
    if (Browser.opera) {
        // Browser.version for opera reports "11.1" not "11.10"
        if (navigator.userAgent.search(/Version\/([0-9.]+)$/) >= 0) {
            if (RegExp.$1) {
                GIGO.check_version("Opera", RegExp.$1, "11.10");
            }
        }
    }
};


GIGO.check_versions = function () {
    GIGO.check_mac_os_version();
    GIGO.check_browser_firefox();
    GIGO.check_browser_opera();
};

/*global GIGO, jQuery, alert */
/*jslint browser: true */
/*jslint regexp: true */

GIGO.goback = function () {
    var prev;

    // Remove the latest window from history.
    if (GIGO.tabhistory.length > 0) {
        GIGO.tabhistory.pop();
    }

    // Try and go to the window before that.
    if (GIGO.tabhistory.length > 0) {
        prev = GIGO.tabhistory.pop();
        GIGO.tabnav(prev);
    }
    return false;
};

GIGO.extra_tabs = {};
GIGO.newtab = function (which, title) {
    // INPUT:  name of document or handle
    // INPUT:  title to give tab
    // OUTPUT: object.   object.handle = the name we should use.
    //          can be altered later by other functions.
    //  If the handle already exists, no new tab is created.
    //  New tab is NOT made the foreground tab - use GIGO.tabnav
    var w, html, m;


    if (GIGO.extra_tabs.hasOwnProperty(which)) {
        return GIGO.extra_tabs[which];
    }


    w = which.replace(/[^a-z0-9]/g, "_");
    GIGO.extra_tabs[which] = {
        "original": which,
        "handle": w,
        "title": title
    };

    html = '<li><a href="#" class="tabbutton_' + w + '" onclick="return GIGO.tabnav(\'' + w + '\');">' + title + '</a></li>';
    m = jQuery("ul#tabnavlist");
    m.append(html);

    //html = '<div id="tab_' + w + ' style="display:none"></div>';
    html = '<div id="tab_' + w + '" ></div>';

    m = jQuery("div#tabbox_inside");
    m.append(html);


    return (GIGO.extra_tabs[which]);

};

GIGO.tabnav = function (which) {
    // "which" is which tab to show.
    var prev, i, m;
    prev = "";

    // Find out what the previous window was
    if (GIGO.tabhistory.length > 0) {
        prev = GIGO.tabhistory.pop();
        GIGO.tabhistory.push(prev);
    }
    // Update the history, only if the previous window was different
    if (prev !== which) {
        GIGO.tabhistory.push(which);
    }

    // Hide everything.
    jQuery("#tab_main").hide();
    jQuery("#tab_tests").hide();
    jQuery("#tab_tech").hide();
    jQuery("#tab_stats").hide();
    jQuery("#tab_helpdesk").hide();
    jQuery("#tab_mail").hide();
    jQuery("#tab_debug").hide();
    jQuery("#tab_faq").hide();
    jQuery("#tab_popup").hide();
    jQuery("#tab_sites").hide();


    // Remove any highlight attributes on tabs.
    jQuery("a.tabbutton_main").removeAttr("id");
    jQuery("a.tabbutton_tests").removeAttr("id");
    jQuery("a.tabbutton_tech").removeAttr("id");
    jQuery("a.tabbutton_stats").removeAttr("id");
    jQuery("a.tabbutton_helpdesk").removeAttr("id");
    jQuery("a.tabbutton_mail").removeAttr("id");
    jQuery("a.tabbutton_debug").removeAttr("id");
    jQuery("a.tabbutton_faq").removeAttr("id");
    jQuery("a.tabbutton_popup").removeAttr("id");
    jQuery("a.tabbutton_sites").removeAttr("id");


    // Same thing for all the extra tabs.  TODO: Merge the above into just GIGO.extra_tabs or GIGO.tabs    
    for (i in GIGO.extra_tabs) {
        if (GIGO.extra_tabs.hasOwnProperty(i)) {

            m = jQuery("#tab_" + GIGO.extra_tabs[i].handle);
            m.hide();

            m = jQuery("a.tabbutton_" + GIGO.extra_tabs[i].handle);
            m.removeAttr("id");
        }
    }


    // Re-highlight and show the desirable tab.
    jQuery("#tab_" + which).show();
    jQuery("a.tabbutton_" + which).attr("id", "tabcurrent");

    // Possibly, really make the contact tab button stand out.
    if (GIGO.contact_wanted) {
        jQuery("a.tabbutton_mail").attr("id", "contactme");
    }

    return false;

};

GIGO.tabnav_tests = function (which) {
    // Change detail of "tests" page
    GIGO.tabnav("tests");
    jQuery("#tab_tests_simple").hide();
    jQuery("#tab_tests_tech").hide();
    jQuery("#tab_tests_" + which).show();
    return false;
};

/*global GIGO */
/*jslint maxlen: 100 */
/* Stop bothering me about long lines */
/*jslint sub: true */
/* Stop bothering me about   "foo"] */

// Scores:
//   #1: Readiness for content providers to go IPv6
//   #2: Readiness for content providers to give up IPv4

// GREEN = success, green block with check mark
// RED = big caution symbol, red block
// BLUE = info symbol, blue block
// ORANGE = ? symbol

// TEXT is now in source/text/text.en-us  and similiar; to be compiled in at build time.
GIGO.scores = {
    "No Direct IP": [10, 10, "ORANGE"],
    "No Direct IPv4": [9, 10, "BLUE"],
    "No Direct IPv6": [10, 10, "BLUE"],
    "6to4": [7, 7, "BLUE"],
    "teredo": [7, 7, "BLUE"],
    "teredo-v4pref": [10, 7, "BLUE"],
    "teredo-minimum": [10, 0, "BLUE"],
    "IPv6 MTU": [1, 1, "RED"],
    "confused:ASK": [0, 0, "ORANGE"],
    "dualstack:ipv4_preferred": [10, 10, "GREEN"],
    "dualstack:ipv6_preferred": [10, 10, "GREEN"],
    "dualstack:slow": [7, 7, "BLUE"],
    "ipv4_only": [10, 0, "BLUE"],
    "ipv4_only:ds_good": [10, 0, "BLUE"],
    "ipv4_only:ds_slow": [5, 0, "RED"],
    "ipv4_only:ds_timeout": [5, 0, "RED"],
    "ipv4_slow": [5, 10, "RED"],
    "ipv6_only": [0, 10, "BLUE"],
    "ipv6_slow": [10, 5, "RED"],
    "ipv6_timeout": [10, 0, "RED"],
    "ipv6:nodns": [10, 0, "RED"],
    "broken_ipv6": [0, 0, "RED"],
    "webfilter:blocked": [-1, -1, "ORANGE"],
    "webfilter:dsboth": [10, 10, "ORANGE"],
    "webfilter:addons": [10, 10, "ORANGE"],
    "webfilter:firefox": [10, 10, "ORANGE"],
    "NAT64": [7, 10, "ORANGE"],
    "v6ns:ok": [10, 10, "GREEN"],
    "v6ns:bad": [10, 9, "BLUE"],
    "ip_timeout:firefox": [10, 10, "RED"],
    "confused:obbo": [10, 9, "BLUE"],
    "apple:dnsbug_aaaa": [10, 7, "BLUE"],
    "apple:dnsbug_ds": [10, 7, "BLUE"],
    "ipv4:no_address": [10, 10, "BLUE"],
    "ipv6:no_address": [10, 10, "RED"],
    "no_address": [10, 10, "RED"],
    "opera": [10, 10, "ORANGE"],
    "opera:turbo": [0, 0, "RED"],
    "dualstack:safe": [10, 10, "GREEN"],
    "dualstack:unsafe": [10, 10, "RED"],
    "dualstack:mtu": [10, 10, "RED"],
    "buggydns1": [9, 0, "RED"],
    "tunnel_dumb": [10, 10, "ORANGE"],
    "he_tunnel_dumb": [10, 10, "BLUE"],
    "tunnel_6rd_dumb": [10, 10, "BLUE"],
    "proxy_via": [10, 10, "ORANGE"],
    "proxy_via_dumb": [10, 10, "ORANGE"],
    "broken": [0, 0, "BLUE"],
    "avoids_ipv6": [10, 10, "ORANGE"]
};

/*global GIGO, MirrorConfig, jQuery, alert, $gt */
/*jslint nomen: true */

GIGO.form_setup_value = function (r) {
    var s;
    s = r.status + "," + r.time_ms / 1000.0;

    if (r.ipinfo) {
        if (r.ipinfo.via) {
            s = s + " " + r.ipinfo.via;
        }
    }
    return s;
};


GIGO.form_setup = function (tokens) {
    tokens = tokens.join(",");
    jQuery("[name=a]").val(GIGO.form_setup_value(GIGO.results.tests.test_a));
    jQuery("[name=aaaa]").val(GIGO.form_setup_value(GIGO.results.tests.test_aaaa));
    jQuery("[name=ds4]").val(GIGO.form_setup_value(GIGO.results.tests.test_ds4));
    jQuery("[name=ds6]").val(GIGO.form_setup_value(GIGO.results.tests.test_ds6));
    jQuery("[name=ipv4]").val(GIGO.form_setup_value(GIGO.results.tests.test_ipv4));
    jQuery("[name=ipv6]").val(GIGO.form_setup_value(GIGO.results.tests.test_ipv6));
    jQuery("[name=v6mtu]").val(GIGO.form_setup_value(GIGO.results.tests.test_v6mtu));
    jQuery("[name=v6ns]").val(GIGO.form_setup_value(GIGO.results.tests.test_v6ns));
    jQuery("[name=dsmtu]").val(GIGO.form_setup_value(GIGO.results.tests.test_dsmtu));
    jQuery("[name=ip4]").val(GIGO.results.ipv4.ip);
    jQuery("[name=ip6]").val(GIGO.results.ipv6.ip);
    jQuery("[name=ip6subtype]").val(GIGO.results.ipv6.subtype);
    jQuery("[name=tokens]").val(tokens);

    jQuery("[name=subdomain]").val(GIGO.mirrorconfig("site", "name"));

    jQuery(".progress_bar").remove();

    jQuery("[name=form_tab_main]").val(jQuery("#tab_main_inside")[0].outerHTML);
    jQuery("[name=form_config]").val(JSON.encode(MirrorConfig));
    jQuery("[name=form_results]").val(JSON.encode(GIGO.results));


};


GIGO.showform = function () {
    var msgs, share_text, share_link;

    // Highlight the tab
    jQuery("a.tabbutton_mail").attr("id", "contactme");
    GIGO.contact_wanted = 1;
    jQuery("#comments_wanted").show();
    jQuery("#comments_unwanted").hide();

    jQuery("#contact_form").show();
    jQuery("[name=purpose]").val("bug");

    share_text = "share your results";
    share_link = "<a href='#' onclick='return GIGO.tabnav(\"mail\");'>%1</a>";
    share_link = share_link.replace(/%1/, share_text);

    msgs = "I am most interested in discussing your setup with you, because it was been determined that <B>your IPv6 connectivity is broken</b>, or at least not fully understood. This is not normal; would you be willing to %share?";
    msgs = msgs.replace(/%share/, share_link);

    msgs = "<div><p><span id='highlighter'>" + msgs + "</span></p></div>";

    jQuery("#results_eof").before(msgs);

    // Add fields to the contact form
};


GIGO.showconfused = function (s) {
    var msgs, share_text, share_link, retest_text, retest_link;

    // Highlight the tab
    jQuery("a.tabbutton_mail").attr("id", "contactme");
    GIGO.contact_wanted = 1;
    jQuery("#comments_wanted").show();
    jQuery("#comments_unwanted").hide();
    share_text = "share your results";
    share_link = "<a href='#' onclick='return GIGO.tabnav(\"mail\");'>%1</a>";
    share_link = share_link.replace(/%1/, share_text);

    retest_text = "retest";
    retest_link = "<a href='#' onclick='return GIGO.retest();'>%1</a>";
    retest_link = retest_link.replace(/%1/, retest_text);


    msgs = "I am most interested in discussing your setup with you, because it was been determined that <B>your IPv6 connectivity is broken</b>, or at least not fully understood. This is not normal; would you be willing to %share?";
    msgs = msgs.replace(/%share/, share_link);
    msgs = msgs.replace(/%retest/, retest_link);
    msgs = "<div><p><span id='highlighter'>" + msgs + "</span></p></div>";

    msgs = msgs + "<div><p>" + "Result code" + " " + s + "</p></div>";


    jQuery("#results_eof").before(msgs);

    // Add fields to the contact form
    return false;
};

GIGO.debuggercomments = function (thisform) {

    var s = "[Debug info follows]\n" + GIGO._dumpObj(GIGO.results, ".", " ", 0);

    GIGO.showform();
    GIGO.tabnav("mail");
    // "notes" for top box.  "comments" for bottom box.
    jQuery("[name=notes]").val(s);
    return false;
};


GIGO.validate_form = function (thisform) {

    if ((thisform.contact.value === null) || (thisform.contact.value === "")) {
        if (!GIGO.validate_form.asked) {
            GIGO.validate_form.asked = 1;
            alert("Note: I can\'t contact you, if the contact info is blank. If you really want to submit this anonymously, hit Send Results again.");
            thisform.contact.focus();
            return false;
        }
    }
    return true;
};
GIGO.validate_form.asked = 0;

/*global GIGO jQuery */
/*jslint browser: true */


// Based on these variablse : status_a  status_aaaa  status_ds4  status_ds6
// which have values of  ok, slow, bad, timeout  (o,s,b,t)
// what is the primary diagnosis of the person's connectivity?
// Implemented as a table instead of a giant if/else  (which was not terribly maintainable)
// confused:ASK should ask the user to fill out the form; it will replace ASK with the initials
// of the status that was used to consult this table.  From there a human can better
// attempt to classify that user's experience.

GIGO.sym_primary = {
    "bbbb": "webfilter:blocked",
    "bbbo": "webfilter:blocked",
    "bbbs": "webfilter:blocked",
    "bbbt": "webfilter:blocked",
    "bbob": "webfilter:blocked",
    "bboo": "webfilter:blocked",
    "bbos": "webfilter:blocked",
    "bbot": "webfilter:blocked",
    "bbsb": "webfilter:blocked",
    "bbso": "webfilter:blocked",
    "bbss": "webfilter:blocked",
    "bbst": "webfilter:blocked",
    "bbtb": "webfilter:blocked",
    "bbto": "webfilter:blocked",
    "bbts": "webfilter:blocked",
    "bbtt": "webfilter:blocked",
    "bobb": "confused:ASK",
    "bobo": "ipv6_only",
    "bobs": "ipv6_only",
    "bobt": "confused:ASK",
    "boob": "confused:ASK",
    "booo": "ipv6_only,webfilter:addons",
    "boos": "webfilter:dsboth",
    "boot": "confused:ASK",
    "bosb": "confused:ASK",
    "boso": "webfilter:dsboth",
    "boss": "ipv6_only,webfilter:addons",
    "bost": "confused:ASK",
    "botb": "confused:ASK",
    "boto": "confused:ASK",
    "bots": "confused:ASK",
    "bott": "confused:ASK",
    "bsbb": "confused:ASK",
    "bsbo": "ipv6_only",
    "bsbs": "ipv6_only",
    "bsbt": "confused:ASK",
    "bsob": "confused:ASK",
    "bsoo": "ipv6_only,ipv6_slow,webfilter:addons",
    "bsos": "webfilter:dsboth",
    "bsot": "confused:ASK",
    "bssb": "confused:ASK",
    "bsso": "webfilter:dsboth",
    "bsss": "ipv6_only,ipv6_slow,webfilter:addons",
    "bsst": "confused:ASK",
    "bstb": "confused:ASK",
    "bsto": "confused:ASK",
    "bsts": "confused:ASK",
    "bstt": "confused:ASK",
    "btbb": "webfilter:blocked",
    "btbo": "webfilter:blocked",
    "btbs": "webfilter:blocked",
    "btbt": "webfilter:blocked",
    "btob": "webfilter:blocked",
    "btoo": "webfilter:blocked",
    "btos": "webfilter:blocked",
    "btot": "webfilter:blocked",
    "btsb": "webfilter:blocked",
    "btso": "webfilter:blocked",
    "btss": "webfilter:blocked",
    "btst": "webfilter:blocked",
    "bttb": "webfilter:blocked",
    "btto": "webfilter:blocked",
    "btts": "webfilter:blocked",
    "bttt": "webfilter:blocked",
    "obbb": "broken",
    "obbo": "confused:obbo",
    "obbs": "confused:obbs",
    "obbt": "confused:ASK",
    "obob": "ipv4_only",
    "oboo": "ipv4_only,webfilter:addons",
    "obos": "webfilter:dsboth",
    "obot": "confused:ASK",
    "obsb": "ipv4_only:ds_slow",
    "obso": "webfilter:dsboth",
    "obss": "ipv4_only,webfilter:addons",
    "obst": "confused:ASK",
    "obtb": "ipv4_only:ds_timeout",
    "obto": "confused:ASK",
    "obts": "confused:ASK",
    "obtt": "broken",
    "oobb": "confused:ASK",
    "oobo": "dualstack:ipv6_preferred",
    "oobs": "confused:ASK",
    "oobt": "confused:ASK",
    "ooob": "dualstack:ipv4_preferred",
    "oooo": "dualstack:safe,webfilter:addons",
    "ooos": "webfilter:dsboth",
    "ooot": "dualstack:ipv4_preferred",
    "oosb": "dualstack:slow",
    "ooso": "webfilter:dsboth",
    "ooss": "dualstack:safe,webfilter:addons",
    "oost": "confused:ASK",
    "ootb": "confused:ASK",
    "ooto": "dualstack:ipv6_preferred",
    "oots": "confused:ASK",
    "oott": "confused:ASK",
    "osbb": "confused:ASK",
    "osbo": "confused:ASK",
    "osbs": "confused:ASK",
    "osbt": "confused:ASK",
    "osob": "dualstack:ipv4_preferred,ipv6_slow",
    "osoo": "dualstack:ipv4_prefered,webfilter:addons",
    "osos": "webfilter:dsboth",
    "osot": "confused:ASK",
    "ossb": "dualstack:ipv4_preferred,ipv6_slow",
    "osso": "webfilter:dsboth",
    "osss": "dualstack:ipv4_prefered,webfilter:addons",
    "osst": "confused:ASK",
    "ostb": "confused:ASK",
    "osto": "confused:ASK",
    "osts": "confused:ASK",
    "ostt": "confused:ASK",
    "otbb": "broken",
    "otbo": "confused:ASK",
    "otbs": "confused:ASK",
    "otbt": "broken",
    "otob": "ipv4_only:ds_good,ipv6_timeout",
    "otoo": "ipv4_only,webfilter:addons",
    "otos": "webfilter:dsboth",
    "otot": "confused:ASK",
    "otsb": "ipv4_only:ds_slow,ipv6_timeout",
    "otso": "webfilter:dsboth",
    "otss": "ipv4_only,webfilter:addons",
    "otst": "confused:ASK",
    "ottb": "broken",
    "otto": "confused:ASK",
    "otts": "confused:ASK",
    "ottt": "broken", // symptoms.js will overrule this
    "sbbb": "confused:ASK",
    "sbbo": "confused:ASK",
    "sbbs": "confused:ASK",
    "sbbt": "confused:ASK",
    "sbob": "ipv4_only,ipv4_slow",
    "sboo": "ipv4_only,webfilter:addons",
    "sbos": "webfilter:dsboth",
    "sbot": "confused:ASK",
    "sbsb": "ipv4_only,ipv4_slow",
    "sbso": "webfilter:dsboth",
    "sbss": "ipv4_only,webfilter:addons",
    "sbst": "confused:ASK",
    "sbtb": "confused:ASK",
    "sbto": "confused:ASK",
    "sbts": "confused:ASK",
    "sbtt": "confused:ASK",
    "sobb": "dualstack:ipv4_preferred,ipv4_slow",
    "sobo": "confused:ASK",
    "sobs": "confused:ASK",
    "sobt": "confused:ASK",
    "soob": "dualstack:ipv4_preferred,ipv4_slow",
    "sooo": "dualstack_ipv6_preferred,ipv4_slow,webfilter:addons",
    "soos": "webfilter:dsboth",
    "soot": "confused:ASK",
    "sosb": "dualstack:ipv4_preferred,ipv4_slow",
    "soso": "webfilter:dsboth",
    "soss": "dualstack_ipv6_preferred,ipv4_slow,webfilter:addons",
    "sost": "confused:ASK",
    "sotb": "confused:ASK",
    "soto": "confused:ASK",
    "sots": "confused:ASK",
    "sott": "confused:ASK",
    "ssbb": "confused:ASK",
    "ssbo": "confused:ASK",
    "ssbs": "confused:ASK",
    "ssbt": "confused:ASK",
    "ssob": "confused:ASK",
    "ssoo": "dualstack,ipv4_slow,ipv6_slow,webfilter:addons",
    "ssos": "webfilter:dsboth",
    "ssot": "confused:ASK",
    "sssb": "dualstack:ipv4_preferred,ipv4_slow,ipv6_slow",
    "ssso": "webfilter:dsboth",
    "ssss": "dualstack,ipv4_slow,ipv6_slow,webfilter:addons",
    "ssst": "confused:ASK",
    "sstb": "confused:ASK",
    "ssto": "confused:ASK",
    "ssts": "confused:ASK",
    "sstt": "confused:ASK",
    "stbb": "confused:ASK",
    "stbo": "confused:ASK",
    "stbs": "confused:ASK",
    "stbt": "confused:ASK",
    "stob": "ipv4_only:ds_good,ipv6_timeout",
    "stoo": "ipv4_only:ds_good,webfilter:addons",
    "stos": "webfilter:dsboth",
    "stot": "confused:ASK",
    "stsb": "ipv4_only:ds_slow,ipv6_timeout",
    "stso": "webfilter:dsboth",
    "stss": "ipv4_only:ds_good,webfilter:addons",
    "stst": "confused:ASK",
    "sttb": "confused:ASK",
    "stto": "confused:ASK",
    "stts": "confused:ASK",
    "sttt": "confused:ASK",
    "tbbb": "webfilter:blocked",
    "tbbo": "webfilter:blocked",
    "tbbs": "webfilter:blocked",
    "tbbt": "webfilter:blocked",
    "tbob": "webfilter:blocked",
    "tboo": "webfilter:blocked",
    "tbos": "webfilter:blocked",
    "tbot": "webfilter:blocked",
    "tbsb": "webfilter:blocked",
    "tbso": "webfilter:blocked",
    "tbss": "webfilter:blocked",
    "tbst": "webfilter:blocked",
    "tbtb": "webfilter:blocked",
    "tbto": "webfilter:blocked",
    "tbts": "webfilter:blocked",
    "tbtt": "webfilter:blocked",
    "tobb": "confused:ASK",
    "tobo": "ipv6_only",
    "tobs": "confused:ASK",
    "tobt": "confused:ASK",
    "toob": "confused:ASK",
    "tooo": "ipv6_only,webfilter:both",
    "toos": "webfilter:dsboth",
    "toot": "confused:ASK",
    "tosb": "confused:ASK",
    "toso": "webfilter:dsboth",
    "toss": "ipv6_only,webfilter:both",
    "tost": "confused:ASK",
    "totb": "confused:ASK",
    "toto": "confused:ASK",
    "tots": "confused:ASK",
    "tott": "confused:ASK",
    "tsbb": "confused:ASK",
    "tsbo": "confused:ASK",
    "tsbs": "confused:ASK",
    "tsbt": "confused:ASK",
    "tsob": "confused:ASK",
    "tsoo": "ipv6_only,webfilter:addons",
    "tsos": "webfilter:dsboth",
    "tsot": "confused:ASK",
    "tssb": "confused:ASK",
    "tsso": "webfilter:dsboth",
    "tsss": "ipv6_only,webfilter:addons",
    "tsst": "confused:ASK",
    "tstb": "confused:ASK",
    "tsto": "confused:ASK",
    "tsts": "confused:ASK",
    "tstt": "confused:ASK",
    "ttbb": "webfilter:blocked",
    "ttbo": "webfilter:blocked",
    "ttbs": "webfilter:blocked",
    "ttbt": "webfilter:blocked",
    "ttob": "webfilter:blocked",
    "ttoo": "webfilter:blocked",
    "ttos": "webfilter:blocked",
    "ttot": "webfilter:blocked",
    "ttsb": "webfilter:blocked",
    "ttso": "webfilter:blocked",
    "ttss": "webfilter:blocked",
    "ttst": "webfilter:blocked",
    "tttb": "webfilter:blocked",
    "ttto": "webfilter:blocked",
    "ttts": "webfilter:blocked",
    "tttt": "webfilter:blocked"
};

/*global GIGO jQuery */
/*jslint browser: true */

// IPv4 by DNS, and IP    (values: ok or bad)
// IPV6 by DNS, and IP (values,ok or bad), and IPV6 type (global, 6[6to4], t[teredo],a[asn]

GIGO.sym_helpdesk = {
//   +------ IPv4 by DNS (good,bad)
//   |+----- IPv4 by IP (good,bad)
//   ||:+--- IPv6 by DNS (good,bad)
//   ||:|+-- IPv6 by IP (global, bad, teredo, 6to4, asn)
//   ||:||
    'gg:gg': "Dual Stack",
    'gg:gt': "IPv4 plus Teredo",
    'gg:g6': "6to4",
    'gg:ga': "Dual Stack, Possible Tunnel",
    'gg:bg': "Dual Stack - but no Quad-A's (AAAA's)",
    'gg:bb': "IPv4 Only",
    'gg:bt': "IPv4 Only (Teredo Detected)",
    'gg:b6': null,
    'gg:ba': null,
    'gb:gg': "NAT64",
    'gt:gg': "NAT64",
    'gg:tb': "IPv4, plus Broken IPv6",
    'gb:gt': null,
    'gb:g6': null,
    'gb:ga': "NAT64, Possible Tunnel",
    'gt:ga': "NAT64, Possible Tunnel",
    'gb:bg': null,
    'gb:bb': null,
    'gb:bt': null,
    'gb:b6': null,
    'gb:ba': null,
    'gb:tb': null,
    'bb:gg': "IPv6 Only",
    'bb:gt': null,
    'bb:g6': null,
    'bb:ga': null,
    'bb:bg': null,
    'bb:bb': null,
    'bb:bt': null,
    'bb:b6': null,
    'bb:ba': null,
    'bb:tb': null
};

GIGO.sym_helpdesk_qcode = {
  null: null,
  "Dual Stack": "46",
  "IPv4 plus Teredo": "4t",
  "6to4": "624",
  "Dual Stack, Possible Tunnel": "46t",
  "IPv4 Only": "4",
  "IPv4 Only (Teredo Detected)": "4",
  "NAT64": "64",
  "IPv4, plus Broken IPv6": "112",
  "NAT64, Possible Tunnel": "64t",
  "IPv6 Only": 6
};

// Input: an array.  Returns: a "hash" (as best as javascript allows).
/*global GIGO, jQuery, alert, Browser, $gt */
/*jslint browser: true */


GIGO.oc = function (a) {
    var o, i;
    o = {};
    for (i = 0; i < a.length; i = i + 1) {
        o[a[i]] = '';
    }
    return o;
};

GIGO.isdef = function (x) {
    return (typeof x !== "undefined");
};


GIGO.cgistats = function (name) {
    var s, status, time_ms, id;
    id = "test_" + name;
    status = GIGO.results.tests[id].status;
    time_ms = GIGO.results.tests[id].time_ms;
    s = "&" + name + "=" + status + "," + time_ms;
    return s;
};



GIGO.expand_abbreviation = function (c) {
    if (c === "o") {
        return "ok";
    }
    if (c === "b") {
        return "bad";
    }
    if (c === "t") {
        return "timeout";
    }
    if (c === "s") {
        return "slow";
    }
    return "[" + "unknown expansion" + " " + c + "]";
};


GIGO.check_precheck = function () {
    // Dummy function at this time.
    // We could decide, based on something we saw, schedule further testing.
    return;
};

GIGO.check_results = function () {

    var delta, mini_primary, mini_secondary, tokens, score_transition, score_strict, msgs, i, token, messages_plaintext, token_expanded, tokens_expanded;

    tokens_expanded = [];
    GIGO.check_precheck();
    if (GIGO.queue.length > 0) {
        return; // New tasks were added.
    }


    GIGO.show_debug();
    GIGO.repeated = GIGO.repeated + 1;
    delta = GIGO.getms() - GIGO.start_time;


    // We *could* repeat the tests. This will be sure to get connection times
    // versus DNS times.   However, I expect more bandwidth/hits from
    // the IPv6 Day announcement; lets try and do this only when it is worth
    // bothering.
    // In this case, lets do it only if one or more of our tests ran "slow".
    if ((GIGO.repeated <= GIGO.retry_min) || ((GIGO.repeated <= GIGO.retry_max) && (GIGO.delta < GIGO.retry_until))) {
        if ((GIGO.repeat_only_if_slow === 0) || (GIGO.ministates(["a", "aaaa", "ds4", "ds6", "ipv4", "ipv6", "v6mtu", "v6ns"]).match(/s/))) {
            GIGO.restart_tests(); // Minimum number of retries needed
            return;
        }
    }

    GIGO.finished = 1;
    GIGO.update_progress(GIGO);
    GIGO.fix_comment_form_and_tab(); // Fix up the comments tab 


    tokens = GIGO.identify_symptoms();
    mini_primary = GIGO.ministates(["a", "aaaa", "ds4", "ds6"]);
    mini_secondary = GIGO.ministates(["ipv4", "ipv6", "v6mtu", "v6ns"]);



    score_transition = 100;
    score_strict = 100;
    msgs = ""; // HTML form of messages to give user
    messages_plaintext = []; // Array of plaintext in case some one prefers this format
    for (i = 0; i < tokens.length; i = i + 1) {
        token = tokens[i];


        if (GIGO.isdef(GIGO.scores[token])) {
            token_expanded = {};
            token_expanded.token = token;
            token_expanded.score_ipv4 = GIGO.scores[token][0];
            token_expanded.score_ipv6 = GIGO.scores[token][1];
            token_expanded.color = GIGO.scores[token][2];
            token_expanded.text = GIGO.messages[token];
            tokens_expanded.push(token_expanded);




            if (token_expanded.score_ipv4 <= score_transition) {
                score_transition = token_expanded.score_ipv4;
            }

            if (token_expanded.score_ipv6 <= score_strict) {
                score_strict = token_expanded.score_ipv6;
            }

            msgs = msgs + "<div><p>" + token_expanded.text + "</p></div>";
            messages_plaintext.push(token_expanded.text);




        } else {
            token_expanded = {};
            token_expanded.token = token;
            token_expanded.color = "YELLOW";
            token_expanded.score_ipv4 = 10;
            token_expanded.score_ipv6 = 10;
            token_expanded.text = "(" + "unknown result code" + ": " + token + ")";
            tokens_expanded.push(token_expanded);
            msgs = msgs + "<div><p>" + token_expanded.text + "</p></div>";
            messages_plaintext.push(token_expanded.text);
        }
    }


    if (GIGO.oc(tokens).hasOwnProperty("confused:ASK")) {
        tokens.push("confused:" + mini_primary + ":" + mini_secondary);
    }

    if (score_transition === 100) {
        score_transition = "?";
    }
    if (score_strict === 100) {
        score_strict = "?";
    }

    if (score_strict > 7) {
        GIGO.start_sites(); // Check other sites for connections too.  Starts a new on-page tab.
    }

    // Copy the results into a place that other people might find them
    // particularly if they just use the javascript and not the entire
    // test-ipv6.com site code
    // GIGO.results = {};

    GIGO.results.tokens = tokens;
    GIGO.results.score_transition = score_transition;
    GIGO.results.score_strict = score_strict;
    GIGO.results.divs = msgs;
    GIGO.results.messages_plaintext = messages_plaintext;
    GIGO.results.debug_code = mini_primary + ":" + mini_secondary;
    GIGO.results.tokens_expanded = tokens_expanded;

    GIGO.show_debug();
    GIGO.finish_helpdesk();


    // Callbacks
    GIGO.fix_footer_late();
    GIGO.facebook_like();
    GIGO.twitter_tweet();
    GIGO.send_survey(tokens);
    GIGO.send_survey_global(tokens);
    GIGO.show_results();
    GIGO.form_setup(tokens);
    GIGO.show_debug();

};

GIGO.facebook_like = function () {
    if (GIGO.mirrorconfig("facebook", "enable", 0)) {
        jQuery('#facebook_like').replaceWith('<div id="fb-root"></div><fb:like href="http://' + GIGO.mirrorconfig("site", "name", null) + '" send="false" width="450" show_faces="false" font=""></fb:like>');

        // http://techoctave.com/c7/posts/40-xhtml-strict-tweet-button-and-facebook-like-button
        // Tian Valdemar Davis
        var s = document.createElement('SCRIPT'),
            s1 = document.getElementsByTagName('SCRIPT')[0];
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'http://connect.facebook.net/en_US/all.js#xfbml=1';
        s1.parentNode.insertBefore(s, s1);
    }
};

GIGO.twitter_tweet = function () {
    if (GIGO.mirrorconfig("twitter", "enable", 0)) {

        jQuery('#twitter_tweet').replaceWith('<a href="http://twitter.com/share" class="twitter-share-button" data-count="horizontal" data-via="' + GIGO.mirrorconfig("twitter", "name") + '">Tweet</a>');

        // http://techoctave.com/c7/posts/40-xhtml-strict-tweet-button-and-facebook-like-button
        // Tian Valdemar Davis
        var s = document.createElement('SCRIPT'),
            s1 = document.getElementsByTagName('SCRIPT')[0];
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'http://platform.twitter.com/widgets.js';
        s1.parentNode.insertBefore(s, s1);
    }
};

/*global GIGO, jQuery, alert, Browser, $gt */
/*jslint browser: true */

/*jslint regexp: true */

/* Map equivalents of ASNs that arent really tunnels or distinct ISPS.
   First level: asn4
     Second level: asn6
        Third level: "1"  
        */

GIGO.asn_same = {
    "comcast": [7922, 7853, 7757, 7725, 7016, 7015, 6161, 53297, 393232, 36733, 36732, 36377, 36196, 33668, 33667, 33666, 33665, 33664, 33663, 33662, 33661, 33660, 33659, 33658, 33657, 33656, 33655, 33654, 33653, 33652, 33651, 33650, 33542, 33491, 33490, 33489, 33287, 23266, 23253, 22909, 22258, 21508, 20214, 16748, 14668, 13385, 13367, 11025],
    "surewest": [14051],
    "aarnet": [757, 56132],
    "tmobile-usa": [21928, 22140],
    "att": [7132, 7018, 6389]
};

GIGO.asn_native = {
    668: 1 /* DREN, native non-tunnel provider */
};


GIGO.ministates = function (which) {
    var s, i, key, v, tests;

    tests = GIGO.results.tests; // Convenience
    s = ""; // Build up return value
    for (i = 0; i < which.length; i = i + 1) {
        key = which[i];
        try {
            v = GIGO.results.tests["test_" + key].status.charAt(0);
        } catch (e) {
            v = "?";
        }
        s = s + v;
    }
    return s;
};

GIGO.find_evidence_of_noscript = function (tests, res) {
    var i, key_json, key_img, test_json, test_img, key, keys, blocked;
    keys = ["a", "aaaa", "ds", "ipv4", "ipv6", "v6mtu", "v6ns", "dsmtu"];
    for (i = 0; i < keys.length; i = i + 1) {
        key = keys[i];
        key_json = "test_" + key;
        key_img = "test_" + key + "_img";
        if (tests.hasOwnProperty(key_img)) {
            test_json = tests[key_json].status;
            test_img = tests[key_img].status;
            if (test_img.match(/^[os]/)) {
                if (test_json.match(/^[bt]/)) {
                    blocked = tests[key_json].url;
                    //alert("test " + key + "was blocked by a browser add-on.  Please configure your browser plugins (such as NoScript or AdBlock) to permit " + blocked + " and try this site again.");
                    res.push("webfilter:addons");
                    if (Browser.firefox) {
                        res.push("webfilter:firefox");
                    }
                    if (Browser.opera) {
                        res.push("opera");
                    }
                    res.push("webfilter:test_" + key);
                    blocked = blocked.replace(/fill=xxxx*/, "fill=xxx...xxx"); // Obscene to show a nearly 2k url
                    // Fake the gettext portion.  We need to insert text into that dynamically based on local conditions.
                    GIGO.messages["webfilter:test_" + key] = "Your browser blocked" + " " + blocked;

                    GIGO.scores["webfilter:test_" + key] = [10, 10, "ORANGE"];

                }
            }
        }
    }


};

GIGO.fallback_to_image_tests = function (tests, res) {
    // If the json was bad, but we have an image that worked, fudge it all.
    var keys, i, key, key_json, key_img, test_json, test_img;
    keys = ["a", "aaaa", "ds", "ipv4", "ipv6", "v6mtu", "v6ns", "dsmtu"];
    for (i = 0; i < keys.length; i = i + 1) {
        key = keys[i];
        key_json = "test_" + key;
        key_img = "test_" + key + "_img";
        if (tests.hasOwnProperty(key_img)) {

            test_json = tests[key_json].status;
            test_img = tests[key_img].status;
            if (test_img.match(/^[os]/)) {
                if (test_json.match(/^[bt]/)) {
                    // Copy the IMAGE result data.
                    tests["failed_" + key] = tests[key_json];
                    tests[key_json] = tests[key_img];
                    GIGO.update_status("test_" + key);
                    GIGO.update_url("test_" + key);
                    GIGO.show_debug();

                    if (key === "ds") {
                        tests.failed_test_ds4 = tests.test_ds4;
                        tests.failed_test_ds6 = tests.test_ds6;
                        tests.test_ds4 = tests.test_ds_img;
                        tests.test_ds6 = tests.test_ds_img;
                        GIGO.update_status("test_ds4");
                        GIGO.update_status("test_ds6");
                        GIGO.update_url("test_ds4");
                        GIGO.update_url("test_ds6");
                        GIGO.show_debug();
                    }


                }
            }
        }
    }


};

GIGO.dedupe_res = function (res) {
    var ret, unique, i;
    ret = [];
    unique = {};
    if (res.length) {
        for (i = 0; i < res.length; i = i + 1) {
            if (!(unique).hasOwnProperty(res[i])) {
                ret.push(res[i]);
                unique[res[i]] = 1;
            }
        }
    }
    return ret;
};


GIGO.ipinfo_in_tests = function (tests, name) {
    var keys, key, i;
    keys = ["a", "aaaa", "ds", "ipv4", "ipv6", "v6mtu", "v6ns", "dsmtu"];
    for (i = 0; i < keys.length; i = i + 1) {
        key = "test_" + keys[i];
        if (tests.hasOwnProperty(key)) {
            if (tests[key].hasOwnProperty("ipinfo")) {
                if (tests[key].ipinfo.hasOwnProperty(name)) {
                    return tests[key].ipinfo[name];
                }
            }
        }
    }
    return null;
};

GIGO.check6RD = function (addr4, addr6) {
    var i, bytes, addr4Bits, addr6Bits, chunk, index;

    // Now process the IPv4 address by generating a string of 32 '0' or '1' based on the host address
    bytes = addr4.split('.');
    addr4Bits = '';
    for (i = 0; i < 4; i = i + 1) {
        chunk = parseInt(bytes[i], 10).toString(2);
        while (chunk.length < 8)
            chunk = '0' + chunk;
        addr4Bits = addr4Bits + chunk;
    }

    // Now process the IPv6 address by generating a string of 64 '0' or '1' based on the /64 prefix
    bytes = addr6.split(':');
    // We will however skip the first IPv6::/32 
    addr6Bits = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

    // And include instead only the second //32
    for (i = 2; i < 4; i = i + 1) {
        chunk = parseInt(bytes[i], 16).toString(2);
        while (chunk.length < 16)
            chunk = '0' + chunk;
        addr6Bits = addr6Bits + chunk;
    }

    // Now check whether full or at least 16 bits of the IPv4 is embedded into the IPv6 prefix
    while (addr4Bits.length >= 16) {
        index = addr6Bits.indexOf(addr4Bits); // Is part of the IPv4 address embedded in the /64 of IPv6?
        if (index >= 0)
            return addr4Bits.length + " bits of the IPv4 address are embedded in the IPv6 address starting at " + index;
        // Else, remove one leading bit of addr4
        addr4Bits = addr4Bits.substr(1, addr4Bits.length - 1);
    }
    return 0
}

GIGO.identify_symptoms = function () {
    var a, aaaa, ds4, ds6, ipv4, ipv6, v6mtu, v6ns, tunnel, tunnel_6rd, teredo, sixfour, mini_primary, mini_secondary, res, failed_pmtud, x, x_array, i, tests, via, dsmtu, a, b, ia, ib, a4, a6, k, i, r, f4, f6;

    res = [];
    tests = GIGO.results.tests; // Convenience
    GIGO.find_evidence_of_noscript(tests, res);
    GIGO.fallback_to_image_tests(tests, res); // Hmm, we might use image connection data instead.
    a = tests.test_a.status;
    aaaa = tests.test_aaaa.status;
    ds4 = tests.test_ds4.status;
    ds6 = tests.test_ds6.status;
    ipv4 = tests.test_ipv4.status;
    ipv6 = tests.test_ipv6.status;
    v6mtu = tests.test_v6mtu.status;
    v6ns = tests.test_v6ns.status;
    dsmtu = tests.test_dsmtu.status;

    // HTTP proxies?
    via = GIGO.ipinfo_in_tests(tests, "via");

    // Tunnels?
    tunnel = (GIGO.results.ipv4.asn !== GIGO.results.ipv6.asn) && GIGO.results.ipv4.asn && GIGO.results.ipv6.asn;
    teredo = (GIGO.results.ipv6.subtype === "Teredo");
    sixfour = (GIGO.results.ipv6.subtype === "6to4");
    if (GIGO.results.ipv4.ip && GIGO.results.ipv6.ip)
        tunnel_6rd = GIGO.check6RD(GIGO.results.ipv4.ip, GIGO.results.ipv6.ip);
    else
        tunnel_6rd = 0;





    // ASN similarities?  Based on mod_ip ASN list
    if ((GIGO.results.ipv4.asnlist) && (GIGO.results.ipv6.asnlist)) {
        a = GIGO.results.ipv4.asnlist.split(";");
        b = GIGO.results.ipv6.asnlist.split(";");
        for (ia = 0; ia < a.length; ia = ia + 1) {
            for (ib = 0; ib < b.length; ib = ib + 1) {
                if (a[ia] === b[ib]) {
                    //alert("No tunnel. asn match found with asn" + a[ia]);
                    tunnel = 0;
                }
            }
        }
    }

    // ASN equivalents?  Based on static GIGO.asn_same table  (yuck!)
    if ((GIGO.results.ipv4.asn) && (GIGO.results.ipv6.asn)) {
        a4 = parseInt(GIGO.results.ipv4.asn, 10);
        a6 = parseInt(GIGO.results.ipv6.asn, 10);
        for (k in GIGO.asn_same) {
            if (GIGO.asn_same.hasOwnProperty(k)) {
                r = GIGO.asn_same[k];
                for (i = 0; i < r.length; i = i + 1) {
                    if (r[i] === a4) f4 = 1;
                    if (r[i] === a6) f6 = 1;
                }
                if (f4 && f6) tunnel = 0;
            }
        }
    }

    // Sometimes we know that there is an IPv6 provider that is not a tunnel.
    // DREN for example.
    if (GIGO.results.ipv6.ip) {
        a6 = parseInt(GIGO.results.ipv6.asn, 10);
        if (GIGO.asn_native[a6]) {
            tunnel = 0;
        }
    }
    GIGO.helpdesk.tunnel = tunnel; // Save for later.
    GIGO.helpdesk.teredo = teredo; // save for later
    GIGO.helpdesk.sixfour = sixfour; // save for later




    mini_primary = GIGO.ministates(["a", "aaaa", "ds4", "ds6"]);
    mini_secondary = GIGO.ministates(["ipv4", "ipv6", "v6mtu", "v6ns"]);

    GIGO.helpdesk.mini_primary = mini_primary;
    GIGO.helpdesk.mini_secondary = mini_secondary;


    //    alert("mini_primary " + mini_primary + " secondary " + mini_secondary);


    // Convert the JSON table entry to a series of initial elements
    x = GIGO.sym_primary[mini_primary];
    x_array = x.split(",");

    for (i = 0; i < x_array.length; i = i + 1) {
        res.push(x_array[i]);
    }



    // IPv6 Flag Day  - does DUAL STACK choke?
    // Only do this, if IPv4 appears to work, or IPv6 appears to work.
    // (Otherwise, some Firefox plugin is screwing us again.)
    if (dsmtu === "ok") {
        res.unshift("dualstack:safe");
    } else {
        res.unshift("dualstack:unsafe");
    }

    if ((!teredo) && (!sixfour)) {
        if (tunnel) {
            res.unshift("tunnel_dumb");
        } else if (tunnel_6rd) {
            res.unshift("tunnel_6rd_dumb");
        }
    }

    if (via) {
        res.unshift("proxy_via_dumb");
    }


    // Do we have IP addresses?
    if ((!GIGO.results.ipv4.ip) && (!GIGO.results.ipv6.ip)) {
        res.unshift("no_address");
    } else if (!GIGO.results.ipv4.ip) {
        res.unshift("ipv4:no_address");
    } else if (!GIGO.results.ipv6.ip) {
        res.unshift("ipv6:no_address");
    }


    // IPv4 preferred despite dual stack (and not teredo or fixfour)
    if ((!teredo) && (!sixfour)) {
        if ((GIGO.results.ipv4.ip) && (GIGO.results.ipv6.ip)) {
            if (mini_primary.match(/^[os][os][os][bt]/)) {
                res.unshift("avoids_ipv6");
            }
        }
    }


    // Do we have direct IP access?
    if (mini_secondary.match(/^[bst][bst]/)) {
        res.push("No Direct IP"); // Not at all!     
    } else if ((mini_secondary.match(/^[bt]./)) && (mini_primary.match(/^[os]./))) {
        0; // res.push("No Direct IPv4");  // Leave this for the NAT64 messaging
    } else if ((mini_secondary.match(/^.[bt]/)) && (mini_primary.match(/^.[os]/))) {
        res.push("No Direct IPv6");
    }

    if ((mini_primary.match(/o/)) && (mini_secondary.match(/^ttt/))) {
        // If at least a single name-based lookup worked, but all IP based ones were timeouts
        // both IPv4 and IPv6, then we more strongly suspect a filtering plugin.
        //  RequestPolicy follows this pattern.
        if (Browser.Engine.gecko) {
            res.push("ip_timeout:firefox");
        }
        // Specifically, those were TIMEOUTS
    }

    // NAT64?
    if ((mini_primary.match(/^[os][os]/)) && (mini_secondary.match(/^[bt][os]/))) {
        res.push("NAT64");
    }

    // Other transition technologies
    if (teredo) {
        if (aaaa === "bad") {
            res.push("teredo-minimum");
        } else if (mini_primary.match(/^..[os]b/)) {
            // a aaaa ds4 ds6
            // If IPv4 is preferred, don't penalize the scores so hard.
            res.unshift("teredo-v4pref");
        } else {
            res.push("teredo");
        }
    }
    if (sixfour) {
        res.push("6to4");
    }
    if ((!teredo) && (aaaa === "bad") && (ipv6 === "ok")) {
        // Sort of like teredo-minimum.  But with a global address.
        res.push("ipv6:nodns");
    }

    // What about IPv6 only DNS server
    if ((ds4 === "ok") || (ds4 === "slow") || (ds6 === "ok") || (ds6 === "slow")) {
        if ((v6ns === "ok") || (v6ns === "slow")) {
            res.push("v6ns:ok");
        } else {
            res.push("v6ns:bad");
        }
    }


    // Buggy DNS server, mangling first AAAA 32 bits into A?
    if (tests.hasOwnProperty("test_buggydns1")) {
        if (tests.test_buggydns1.status === "affected") {
            res.push("buggydns1");
        }
    }

    // Did our larger request work ok?
    if (Browser.opera) {
        // Opera always fails the 1600 byte test.  WTF?
        if ((aaaa === "ok") && ((v6mtu === "timeout") || (v6mtu === "slow"))) {
            res.push("IPv6 MTU"); // Uh oh, MTU problems.
            failed_pmtud = 1;
        }
    } else {
        if ((aaaa === "ok") && ((v6mtu === "bad") || (v6mtu === "timeout") || (v6mtu === "slow") || (dsmtu === "bad") || (dsmtu === "timeout") || (dsmtu === "slow"))) {
            res.push("IPv6 MTU"); // Uh oh, MTU problems.
            failed_pmtud = 1;
        }
    }
    GIGO.helpdesk.failed_pmtud = failed_pmtud;


    for (i = 0; i < res.length; i += 1) {

        if (failed_pmtud) {
            if (res[i] === "dualstack:safe") {
                res[i] = "dualstack:mtu";
            }
            if (res[i] === "dualstack:unsafe") {
                res[i] = "dualstack:mtu";
            }
        }

        // Apple DNS bug.  "A" record was fine.
        // Dual stack , for some reason, is bad.
        if (Browser.Platform.mac || Browser.Platform.ios) {
            if (res[i] === 'confused:obbo') {
                res[i] = "apple:dnsbug_aaaa"; // Failed to connect to AAAA but dual stack says it shoulda
            }
            if (res[i] === 'confused:ASK') {
                if (mini_primary.match(/^obb[sob]/)) {
                    res[i] = "apple:dnsbug_aaaa"; // Failed to connect to AAAA but dual stack says it shoulda
                }
            }
        }
        if (res[i] === 'confused:ASK') {
            if ((mini_primary.match(/^ottt/)) && (mini_secondary.match(/^ottt/))) {
                res[i] = "broken_ipv6";
            }
        }
    }

    if (res.length === 0) {
        res.push("Unknown");
    }
    res = GIGO.dedupe_res(res);
    return res;

};

/*global GIGO:true, jQuery,  window,  alert,  Browser */
/*jslint browser: true */

try {
    GIGO.tryme = 1;
} catch (e) {
    GIGO = {};
}

GIGO.hide_os_osx = function () {
    jQuery(".os_osx").hide(250);
};
GIGO.hide_os_ios = function () {
    jQuery(".os_ios").hide(250);
};
GIGO.hide_os_other = function () {
    jQuery(".os_other").hide(250);
};
GIGO.hide_os_windows = function () {
    jQuery(".os_windows").hide(250);
};
GIGO.hide_os_linux = function () {
    jQuery(".os_linux").hide(250);
};

GIGO.hide_os_all = function () {
    GIGO.hide_os_other();
    GIGO.hide_os_osx();
    GIGO.hide_os_ios();
    GIGO.hide_os_windows();
    GIGO.hide_os_linux();
};

GIGO.show_os_osx = function () {
    jQuery(".os_osx").show(250);
};
GIGO.show_os_ios = function () {
    jQuery(".os_ios").show(250);
};
GIGO.show_os_windows = function () {
    jQuery(".os_windows").show(250);
};
GIGO.show_os_linux = function () {
    jQuery(".os_linux").show(250);
};
GIGO.show_os_other = function () {
    jQuery(".os_other").show(250);
};

GIGO.show_os_all = function () {
    GIGO.show_os_other();
    GIGO.show_os_osx();
    GIGO.show_os_ios();
    GIGO.show_os_windows();
    GIGO.show_os_linux();
};

GIGO.show_os_only_osx = function () {
    GIGO.hide_os_all();
    GIGO.show_os_osx();
};
GIGO.show_os_only_ios = function () {
    GIGO.hide_os_all();
    GIGO.show_os_ios();
};
GIGO.show_os_only_windows = function () {
    GIGO.hide_os_all();
    GIGO.show_os_windows();
};
GIGO.show_os_only_linux = function () {
    GIGO.hide_os_all();
    GIGO.show_os_linux();
};

GIGO.show_os_start = function () {
    if (Browser.Platform.mac) {
        GIGO.show_os_only_osx();
    } else if (Browser.Platform.windows) {
        GIGO.show_os_only_windows();
    } else if (Browser.Platform.linux) {
        GIGO.show_os_only_linux();
    } else if (Browser.Platform.ios) {
        GIGO.show_os_only_ios();
    } else {
        // Be aware we will show ALL platforms we know about.  
    }
};

GIGO.sites_parsed={
 "8n1.org": {
  "site": "8n1.org",
  "mirror": false,
  "hide": false,
  "v4": "http://ip4.8n1.org/test.gif",
  "v6": "http://ip6.8n1.org/test.gif",
  "loc": "NL",
  "provider": "8n1.org - a simple pastebin",
  "monitor": "Sander Smeenk \u003csander@bit.nl\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "aa.net.uk": {
  "site": "aa.net.uk",
  "mirror": false,
  "hide": false,
  "v4": "http://ip4.aa.net.uk/images/aaisp_logo.png",
  "v6": "http://ip6.aa.net.uk/images/aaisp_logo.png",
  "loc": "UK",
  "provider": "AAISP (UK IPv6 ISP)",
  "monitor": "support@aa.net.uk",
  "contact": "Adrian Kennard \u003ca@k.gg\u003e",
  "reason": "",
  "transparent": false
 },
 "bvconline.com.ar": {
  "site": "bvconline.com.ar",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.bvconline.com.ar/knob_green.png",
  "v6": "http://ipv6.test-ipv6.bvconline.com.ar/knob_green.png",
  "loc": "AR",
  "provider": "BVNET S.A",
  "monitor": "Ariel Cuesta \u003carielc@vianet.com.ar\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "campaya.co.uk": {
  "site": "campaya.co.uk",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4.campaya.co.uk/apple-touch-icon.png",
  "v6": "http://ipv6.campaya.co.uk/apple-touch-icon.png",
  "loc": "UK",
  "provider": "Campaya",
  "monitor": "Claus Pedersen \u003cclausp@campaya.com\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "chelloo.nl": {
  "site": "chelloo.nl",
  "mirror": false,
  "hide": false,
  "v4": "https://ipv4.chelloo.nl/images/pixel.gif",
  "v6": "https://ipv6.chelloo.nl/images/pixel.gif",
  "loc": "NL",
  "provider": "Chelloo",
  "monitor": "Rene Kemp \u003crene.kemp@outlook.com\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "duplimaster.com": {
  "site": "duplimaster.com",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4.duplimaster.com/public/images/logo-sombra.png",
  "v6": "http://ipv6.duplimaster.com/public/images/logo-sombra.png",
  "loc": "ES",
  "provider": "duplimaster.com",
  "monitor": "Jesus Vara \u003cjvara@e-impresion.es\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "eurobilltracker.com": {
  "site": "eurobilltracker.com",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.eurobilltracker.com/img/1x1.gif",
  "v6": "http://ipv6.test-ipv6.eurobilltracker.com/img/1x1.gif",
  "loc": "FI",
  "provider": "EuroBillTracker",
  "monitor": "Anssi Johansson \u003canssi@miuku.net\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "google.com": {
  "site": "google.com",
  "mirror": false,
  "hide": false,
  "v4": "http://test-ipv6-dot-com-v6exp3-v4.metric.gstatic.com/v6exp3/6.gif",
  "v6": "http://test-ipv6-dot-com-v6exp3-v6.metric.gstatic.com/v6exp3/6.gif",
  "loc": "global",
  "provider": "Google",
  "monitor": "",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "he.net": {
  "site": "he.net",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4.tunnelbroker.net/images/helogo.gif",
  "v6": "http://ipv6.tunnelbroker.net/images/helogo.gif",
  "loc": "US (CA)",
  "provider": "HE.net",
  "monitor": "Hurricane Electric \u003cnoc@he.net\u003e",
  "contact": "Mike Tindle \u003cmtindle@he.net\u003e",
  "reason": "",
  "transparent": false
 },
 "ipv6-test.ch": {
  "site": "ipv6-test.ch",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4.ipv6-test.ch/images-nc/knob_green.png",
  "v6": "http://ipv6.ipv6-test.ch/images-nc/knob_green.png",
  "loc": "UK",
  "provider": "BSC-Telecom",
  "monitor": "Ken Booth \u003cken@ipv6-test.ch\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "ipv6-test.pl": {
  "site": "ipv6-test.pl",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.ipv6-test.pl/images-nc/knob_green.png",
  "v6": "http://ipv6.ipv6-test.pl/images-nc/knob_green.png",
  "loc": "PL",
  "provider": "Net-Admin",
  "monitor": "noc@net-admin.pl",
  "contact": "Net-Admin \u003cipv6@goodhost.eu\u003e",
  "reason": "",
  "transparent": false
 },
 "ipv6ready.me": {
  "site": "test-ipv6.epic.network",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.ipv6ready.me/images-nc/knob_green.png",
  "v6": "http://ipv6.ipv6ready.me/images-nc/knob_green.png",
  "loc": "JP",
  "provider": "Kazuhide Takahashi",
  "monitor": "kazuhide.t@ipv6ready.me",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "nic.br": {
  "site": "nic.br",
  "mirror": false,
  "hide": false,
  "v4": "http://v4.ipv6.br/img/logo-ipv6.png",
  "v6": "http://v6.ipv6.br/img/logo-ipv6.png",
  "loc": "BR",
  "provider": "NIC.br",
  "monitor": "Antonio M. Moreiras \u003cmoreiras@nic.br\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "nsx.de": {
  "site": "nsx.de",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4.nsx.de/images/knob_valid_green.png",
  "v6": "http://ipv6.nsx.de/images/knob_valid_green.png",
  "loc": "DE",
  "provider": "Stephan Fiebrandt (personal)",
  "monitor": "Stephan Fiebrandt \u003cstephan@nsx.de\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "sixte.st": {
  "site": "sixte.st",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.sixte.st/images-nc/knob_green.png",
  "v6": "http://ipv6.sixte.st/images-nc/knob_green.png",
  "loc": "SG",
  "provider": "Delan Azabani",
  "monitor": "Delan Azabani \u003cdelan@azabani.com\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "snozzages.com": {
  "site": "snozzages.com",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4.v6test.snozzages.com/1x1.gif",
  "v6": "http://ipv6.v6test.snozzages.com/1x1.gif",
  "loc": "US (VA)",
  "provider": "Warren Kumari",
  "monitor": "Warren Kumari \u003cwarren@kumari.net\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "stdio.be": {
  "site": "stdio.be",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4.stdio.be/images/knob_valid_green.png",
  "v6": "http://ipv6.stdio.be/images/knob_valid_green.png",
  "loc": "DE",
  "provider": "Andrew Yourtchenko (personal)",
  "monitor": "Andrew Yourtchenko \u003cayourtch@gmail.com\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6-ct.comcast.net": {
  "site": "test-ipv6-ct.comcast.net",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6-ct.comcast.net/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6-ct.comcast.net/images-nc/knob_green.png",
  "loc": "US",
  "provider": "Comcast",
  "monitor": "Comcast IPv6 Team \u003ccomcast-ipv6@cable.comcast.com\u003e",
  "contact": "",
  "reason": "",
  "transparent": true
 },
 "test-ipv6-pa.comcast.net": {
  "site": "test-ipv6-pa.comcast.net",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6-pa.comcast.net/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6-pa.comcast.net/images-nc/knob_green.png",
  "loc": "US",
  "provider": "Comcast",
  "monitor": "Comcast IPv6 Team \u003ccomcast-ipv6@cable.comcast.com\u003e",
  "contact": "",
  "reason": "",
  "transparent": true
 },
 "test-ipv6.alpinedc.ch": {
  "site": "test-ipv6.alpinedc.ch",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.alpinedc.ch/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.alpinedc.ch/images-nc/knob_green.png",
  "loc": "CH",
  "provider": "AlpineDC",
  "monitor": "Sebastien Morier \u003csmorier@alpinedc.ch\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.ams.vr.org": {
  "site": "test-ipv6.ams.vr.org",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.ams.vr.org/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.ams.vr.org/images-nc/knob_green.png",
  "loc": "NL",
  "provider": "vr.org",
  "monitor": "jfesler@gigo.com",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.arauc.br": {
  "site": "test-ipv6.arauc.br",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.arauc.br/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.arauc.br/images-nc/knob_green.png",
  "loc": "BR",
  "provider": "PoP-PR/RNP",
  "monitor": "equipe@pop-pr.rnp.br",
  "contact": "PoP-PR/RNP \u003cadmnet@pop-pr.rnp.br\u003e",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.arbor.net": {
  "site": "test-ipv6.arbor.net",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.arbor.net/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.arbor.net/images-nc/knob_green.png",
  "loc": "US",
  "provider": "Arbor Networks",
  "monitor": "Bill Cerveny \u003cadmin@v6research.net\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.azstarnet.az": {
  "site": "test-ipv6.azstarnet.az",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.azstarnet.az/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.azstarnet.az/images-nc/knob_green.png",
  "loc": "AZ",
  "provider": "AZSTARNET LLC",
  "monitor": "Nadir M. Aliyev \u003cnadir@azstarnet.az\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.carnet.hr": {
  "site": "test-ipv6.carnet.hr",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.carnet.hr/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.carnet.hr/images-nc/knob_green.png",
  "loc": "HR",
  "provider": "Croatian Academic and Research Network",
  "monitor": "CARNet \u003csysadm@carnet.hr\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.cl": {
  "site": "test-ipv6.cl",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.cl/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.cl/images-nc/knob_green.png",
  "loc": "CL",
  "provider": "NIC Chile",
  "monitor": "NIC Chile \u003csoporte@nic.cl\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.cmd.net.br": {
  "site": "test-ipv6.cmd.net.br",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.cmd.net.br/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.cmd.net.br/images-nc/knob_green.png",
  "loc": "BR",
  "provider": "CMD Informatica",
  "monitor": "Cesar Scoassabia \u003csuporte@cmd.net.br\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.co.za": {
  "site": "test-ipv6.co.za",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.co.za/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.co.za/images-nc/knob_green.png",
  "loc": "ZA",
  "provider": "Multisource Telecoms",
  "monitor": "Multisource Support \u003csupport@multisource.co.za\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.com": {
  "site": "test-ipv6.com",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.com/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.com/images-nc/knob_green.png",
  "loc": "Varies",
  "provider": "Several locations around the world",
  "monitor": "",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.com.au": {
  "site": "test-ipv6.com.au",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.com.au/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.com.au/images-nc/knob_green.png",
  "loc": "AU",
  "provider": "Futzle Industries",
  "monitor": "Deborah Pickett \u003cdebbiep@icemoonprison.com\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.csclub.uwaterloo.ca": {
  "site": "test-ipv6.csclub.uwaterloo.ca",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.csclub.uwaterloo.ca/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.csclub.uwaterloo.ca/images-nc/knob_green.png",
  "loc": "CA",
  "provider": "University of Waterloo Computer Science Club",
  "monitor": "systems-committee@csclub.uwaterloo.ca",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.cz": {
  "site": "test-ipv6.cz",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.cz/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.cz/images-nc/knob_green.png",
  "loc": "CZ",
  "provider": "nic.cz",
  "monitor": "NOC NIC \u003cnoc@nic.cz\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.epic.network": {
  "site": "test-ipv6.epic.network",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.epic.network/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.epic.network/images-nc/knob_green.png",
  "loc": "US",
  "provider": "epic.network",
  "monitor": "test-ipv6@qpg.us",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.ernet.in": {
  "site": "test-ipv6.ernet.in",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.ernet.in/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.ernet.in/images-nc/knob_green.png",
  "loc": "IN",
  "provider": "IPv6 Division of ERNET India",
  "monitor": "praveen.misra@eis.ernet.in",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.fratec.net": {
  "site": "test-ipv6.fratec.net",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.fratec.net/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.fratec.net/images-nc/knob_green.png",
  "loc": "CR",
  "provider": "Sistemas Fratec S.A.",
  "monitor": "Jorge Frater \u003cjfrater@fratec.com\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.go6.si": {
  "site": "test-ipv6.go6.si",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.go6.si/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.go6.si/images-nc/knob_green.png",
  "loc": "SI",
  "provider": "Go6 Lab - Slovenian IPv6 Iniciative",
  "monitor": "Jan Zorz \u003cjan@go6.si\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.hkg.vr.org": {
  "site": "test-ipv6.hkg.vr.org",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.hkg.vr.org/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.hkg.vr.org/images-nc/knob_green.png",
  "loc": "HK",
  "provider": "vr.org",
  "monitor": "jfesler@gigo.com",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.hu": {
  "site": "test-ipv6.hu",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.hu/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.hu/images-nc/knob_green.png",
  "loc": "HU",
  "provider": "Polaris-N Systems",
  "monitor": "Polaris-N Systems \u003cinfo@polaris-n.hu\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.jp": {
  "site": "test-ipv6.jp",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.jp/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.jp/images-nc/knob_green.png",
  "loc": "JP",
  "provider": "BIGLOBE, Inc/Fullroute Pte. Ltd",
  "monitor": "Shin Shirahata \u003cinquiry@test-ipv6.jp\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.ke.liquidtelecom.net": {
  "site": "test-ipv6.ke.liquidtelecom.net",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.ke.liquidtelecom.net/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.ke.liquidtelecom.net/images-nc/knob_green.png",
  "loc": "KE",
  "provider": "Liquid Telecom",
  "monitor": "ipv6@liquidtelecom.com",
  "contact": "Liquid Telecom \u003cipv6@liquidtelecom.com\u003e",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.netiter.dk": {
  "site": "test-ipv6.netiter.dk",
  "mirror": false,
  "hide": false,
  "v4": "http://test-ipv6.com.i42.test-ipv6.easyv6.net/ipv6-test.png",
  "v6": "http://test-ipv6.com.i32.test-ipv6.easyv6.net/ipv6-test.png",
  "loc": "DE",
  "provider": "Netiter ApS",
  "monitor": "Netiter Aps \u003ckontakt@netiter.dk\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.nl": {
  "site": "test-ipv6.nl",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.nl/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.nl/images-nc/knob_green.png",
  "loc": "NL",
  "provider": "BIT BV",
  "monitor": "Teun Vink \u003cteun@bit.nl\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.no": {
  "site": "test-ipv6.no",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.no/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.no/images-nc/knob_green.png",
  "loc": "NO",
  "provider": "Availo AS",
  "monitor": "Brynjar Eide \u003ctest-ipv6@availo.no\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.noroutetohost.net": {
  "site": "test-ipv6.noroutetohost.net",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.noroutetohost.net/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.noroutetohost.net/images-nc/knob_green.png",
  "loc": "GB",
  "provider": "NoRouteToHost",
  "monitor": "test-ipv6@noroutetohost.net",
  "contact": "David Wilkinson \u003ctest-ipv6@noroutetohost.net\u003e",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.orbyta.com": {
  "site": "test-ipv6.orbyta.com",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.orbyta.com/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.orbyta.com/images-nc/knob_green.png",
  "loc": "CL",
  "provider": "Orbyta S.A.",
  "monitor": "javier campos \u003cjaviersource@gmail.com\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.polkam.go.id": {
  "site": "test-ipv6.polkam.go.id",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.polkam.go.id/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.polkam.go.id/images-nc/knob_green.png",
  "loc": "ID",
  "provider": "Coordinating Ministry For Political, Legal, and Security Affairs of Indonesia",
  "monitor": "vicky@polkam.go.id",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.ro": {
  "site": "test-ipv6.ro",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.ro/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.ro/images-nc/knob_green.png",
  "loc": "RO",
  "provider": "RCS \u0026 RDS",
  "monitor": "Liviu Pislaru \u003cliviu.pislaru@rcs-rds.ro\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.roedu.net": {
  "site": "test-ipv6.roedu.net",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.roedu.net/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.roedu.net/images-nc/knob_green.png",
  "loc": "RO",
  "provider": "RoEduNet",
  "monitor": "IPv6 @ RoEduNet \u003cipv6@roedu.net\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.se": {
  "site": "test-ipv6.se",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.se/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.se/images-nc/knob_green.png",
  "loc": "SE",
  "provider": "Interlan Gefle AB",
  "monitor": "torbjorn.eklov@interlan.se \u003ctorbjorn.eklov@interlan.se\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.showmyip.ca": {
  "site": "test-ipv6.showmyip.ca",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.showmyip.ca/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.showmyip.ca/images-nc/knob_green.png",
  "loc": "CA",
  "provider": "Christopher Munz-Michielin",
  "monitor": "Christopher Munz-Michielin \u003cchristopher@showmyip.ca\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.si": {
  "site": "test-ipv6.si",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.si/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.si/images-nc/knob_green.png",
  "loc": "SI",
  "provider": "Damjan Sirnik",
  "monitor": "Damjan Sirnik \u003cdamjan@sirnik.si\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.sin.vr.org": {
  "site": "test-ipv6.sin.vr.org",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.sin.vr.org/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.sin.vr.org/images-nc/knob_green.png",
  "loc": "SG",
  "provider": "vr.org",
  "monitor": "jfesler@gigo.com",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.tld.sk": {
  "site": "test-ipv6.tld.sk",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.tld.sk/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.tld.sk/images-nc/knob_green.png",
  "loc": "SK",
  "provider": "Sk-nic",
  "monitor": "\"SK-NIC, a.s.\" \u003chostmaster@sk-nic.sk\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.tni-au.mil.id": {
  "site": "test-ipv6.tni-au.mil.id",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.tni-au.mil.id/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.tni-au.mil.id/images-nc/knob_green.png",
  "loc": "ID",
  "provider": "Indonesian Air Force",
  "monitor": "Vicky Ezra Imanuel \u003cvicky@tni-au.mil.id\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.vtt.net": {
  "site": "test-ipv6.vtt.net",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.vtt.net/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.vtt.net/images-nc/knob_green.png",
  "loc": "RU",
  "provider": "JSC \"Volgatranstelecom\"",
  "monitor": "VTT Network Operations Centre \u003cnoc@vtt.net\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.vyncke.org": {
  "site": "test-ipv6.vyncke.org",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.vyncke.org/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.vyncke.org/images-nc/knob_green.png",
  "loc": "FR",
  "provider": "Éric Vyncke",
  "monitor": "Eric Vyncke \u003ceric@vyncke.org\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "test-ipv6.zw.liquidtelecom.net": {
  "site": "test-ipv6.zw.liquidtelecom.net",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.test-ipv6.zw.liquidtelecom.net/images-nc/knob_green.png",
  "v6": "http://ipv6.test-ipv6.zw.liquidtelecom.net/images-nc/knob_green.png",
  "loc": "ZW",
  "provider": "Liquid Telecom",
  "monitor": "ipv6@liquidtelecom.com",
  "contact": "Liquid Telecom \u003cipv6@liquidtelecom.com\u003e",
  "reason": "",
  "transparent": false
 },
 "testipv6.de": {
  "site": "testipv6.de",
  "mirror": true,
  "hide": false,
  "v4": "http://ipv4.testipv6.de/images-nc/knob_green.png",
  "v6": "http://ipv6.testipv6.de/images-nc/knob_green.png",
  "loc": "DE",
  "provider": "COSIMO Vertriebs -und Beratungs GmbH",
  "monitor": "COSIMO WebTeam \u003ckontakt@testipv6.de\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "www.ctbc.com.br": {
  "site": "www.ctbc.com.br",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4only.ctbc.net.br/ctbc/pixel.gif",
  "v6": "http://ipv6only.ctbc.net.br/ctbc/pixel.gif",
  "loc": "BR",
  "provider": "Algar Telecom / CTBC",
  "monitor": "Tiago Carrijo Setti \u003ctiagoc@algartelecom.com.br\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "www.duiadns.net": {
  "site": "www.duiadns.net",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4.duiadns.net/1x1.gif",
  "v6": "http://ipv6.duiadns.net/1x1.gif",
  "loc": "NL",
  "provider": "Duiadns",
  "monitor": "Liviu Pislaru \u003cliviu.pislaru@duiadns.net\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "www.excathedra.co": {
  "site": "www.excathedra.co",
  "mirror": false,
  "hide": false,
  "v4": "https://ipv4.excathedra.co/knob_valid_green.png",
  "v6": "https://ipv6.excathedra.co/knob_valid_green.png",
  "loc": "UK",
  "provider": "Ex Cathedra Photography",
  "monitor": "Steve Durbin \u003csteved@excathedra.co\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "www.heise.de": {
  "site": "www.heise.de",
  "mirror": false,
  "hide": false,
  "v4": "http://www.four.heise.de/icons/ho/heise.gif",
  "v6": "http://www.six.heise.de/icons/ho/heise.gif",
  "loc": "DE",
  "provider": "Heise",
  "monitor": "Johannes Endres, c't \u003cje@heise.de\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "www.joram.it": {
  "site": "www.joram.it",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4.joram.it/oggetti/immagini/ipv4.png",
  "v6": "http://ipv6.joram.it/oggetti/immagini/ipv6.jpg",
  "loc": "IT",
  "provider": "Joram.IT",
  "monitor": "Servizio Partners - Joram.IT \u003ccontact@joram.it\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "www.radioradicale.it": {
  "site": "www.radioradicale.it",
  "mirror": false,
  "hide": false,
  "v4": "http://ipv4.radioradicale.it/sites/www.radioradicale.it/files/pagine/2015/12/ipv6.png",
  "v6": "http://ipv6.radioradicale.it/sites/www.radioradicale.it/files/pagine/2015/12/ipv6.png",
  "loc": "IT",
  "provider": "Centro di Produzione Spa - AS57329",
  "monitor": "Dario Centofanti \u003cdario@popinga.net\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "www.rascom.ru": {
  "site": "www.rascom.ru",
  "mirror": false,
  "hide": false,
  "v4": "http://wood.rascom.ru/ipv4.jpg",
  "v6": "http://wood6.rascom.ru/logo2.png",
  "loc": "RU",
  "provider": "RASCOM",
  "monitor": "Андрей Сафонов \u003cas@rascom.ru\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "www.steffann.nl": {
  "site": "www.steffann.nl",
  "mirror": false,
  "hide": false,
  "v4": "http://v4-only.steffann.nl/v4-only.png",
  "v6": "http://v6-only.steffann.nl/v6-only.png",
  "loc": "NL",
  "provider": "SJM Steffann Consultancy",
  "monitor": "Sander Steffann \u003csander@steffann.nl\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "www.tecpeu.com.br": {
  "site": "www.tecpeu.com.br",
  "mirror": false,
  "hide": false,
  "v4": "http://www.ipv4.tecpeu.com.br/img/logo-big.png",
  "v6": "http://www.ipv6.tecpeu.com.br/img/logo-big.png",
  "loc": "BR",
  "provider": "Tecpeu Informática",
  "monitor": "Ricardo Peu Grassi \u003ccontato@tecpeu.com.br\u003e",
  "contact": "",
  "reason": "",
  "transparent": false
 },
 "www.vyncke.org/ipv6status/": {
  "site": "www.vyncke.org/ipv6status/",
  "mirror": false,
  "hide": false,
  "v4": "https://test4.vyncke.org/knob_valid_green.png",
  "v6": "https://test6.vyncke.org/knob_valid_green.png",
  "loc": "FR",
  "provider": "Eric Vyncke (personal)",
  "monitor": "Eric Vyncke \u003ceric@vyncke.org\u003e",
  "contact": "",
  "reason": "letsencrypt SSL certs don't support AAAA only",
  "transparent": false
 },
 "www.yahoo.com": {
  "site": "www.yahoo.com",
  "mirror": false,
  "hide": false,
  "v4": "http://v4test.yahoo.com/eng/test/eye-test.png",
  "v6": "http://v6test.yahoo.com/eng/test/eye-test.png",
  "loc": "global",
  "provider": "Yahoo!",
  "monitor": "ipv6@yahoo-inc.com",
  "contact": "",
  "reason": "",
  "transparent": false
 }
};
/*global GIGO, jQuery, $, window, alert, Browser */
/*jslint browser: true */


/* Need to vary this a bit.  

Each host should:

  try IPv4.
  try IPv4 again, if needed.
  On success, 
  
    try IPv6.
    try IPv6 again, if needed.
    
The icky part is the "if needed".

*/


GIGO.sites_image_size = 24;

GIGO.url_to_hash = function (url) {
    var hash;
    url = url.replace(/\?nocache.*$/, "");
    hash = jQuery.md5(url);
    hash = hash.replace(/[^a-zA-Z0-9]/g, '');
    hash = hash.substring(0, 4);
    return hash;
};

GIGO.fail_url = function (url) {
    var hash = GIGO.url_to_hash(url);


    // Create object, if needed.
    if (!GIGO.isdef(GIGO.failed_sites)) {
        GIGO.failed_sites = [];
    }

    // Add hash, but only if not already found
    if (GIGO.failed_sites.indexOf(hash) < 0) {
        GIGO.failed_sites.push(hash);
    }
    GIGO.show_share_link();
};

GIGO.was_failed_url = function (url) {
    var hash = GIGO.url_to_hash(url);
    if (!GIGO.isdef(GIGO.failed_sites)) {
        if (GIGO.isdef(GIGO.CGI.failed_sites)) {
          GIGO.failed_sites = GIGO.CGI.failed_sites.split(",");
        } else {
          GIGO.failed_sites = [];
        }
    }
    return (GIGO.failed_sites.indexOf(hash) >= 0);
};


GIGO.is_replay = function () {
    return (GIGO.CGI.ip4 || GIGO.CGI.ip6);
};



GIGO.sites_table_init_1 = function (mode) {
    //  Create a table, replace #sitestablediv
    //  THIS IS FOR MIRRORS
    var newhtml;
    newhtml = '<div id="sitestablediv">';
    newhtml = newhtml + '<table summary="sites" id="sites" class="tablesorter">';
    newhtml = newhtml + "<thead><tr><th>link</th><th>location</th><th>provider</th><th>ipv6?</th><th>info</th></tr></thead>";
    newhtml = newhtml + "<tbody>";
    newhtml = newhtml + "</tbody></table>";
    newhtml = newhtml + "</div>";

    // Make a table, keep the reference?
    jQuery("#sitestablediv").replaceWith($('<div>').html(newhtml));
};

GIGO.sites_table_init_2 = function (mode) {
    //  Create a table, replace #sitestablediv
    //  THIS IS FOR MIRRORS+SITES, NO LANGUAGE INFO ETC
    var newhtml;
    newhtml = '<div id="sitestablediv">';
    newhtml = newhtml + '<table summary="sites" id="sites" class="tablesorter">';
    newhtml = newhtml + "<thead><tr><th>link</th><th>location</th><th>provider</th><th>ipv6?</th><th>info</th><th>mirror</th></tr></thead>";
    newhtml = newhtml + "<tbody>";
    newhtml = newhtml + "</tbody></table>";
    newhtml = newhtml + "</div>";

    // Make a table, keep the reference?
    jQuery("#sitestablediv").replaceWith($('<div>').html(newhtml));
};

GIGO.sites_table_init = function (mode) {
    if (mode === 1) {
        GIGO.sites_table_init_1(mode);
    } else if (mode === 2) {
        GIGO.sites_table_init_2(mode);
    } else {
        alert("bad GIGO.sites_table_init()");
    }
};


GIGO.sites_table_populate_1 = function (mode) {
    var i;
    for (i = 0; i < GIGO.sites_queue.length; i = i + 1) {
        GIGO.sites_display_add_record(GIGO.sites_queue[i], mode);
    }


    $("#sites").tablesorter({
        textExtraction: "complex",
        sortInitialOrder: "asc",
        headers: {
            0: {
                sorter: "text"
            },
            1: {
                sorter: "text"
            },
            2: {
                sorter: "text"
            },
            3: {
                sorter: "text"
            },
            4: {
                sorter: "text"
            },
            5: {
                sorter: false
            },
            6: {
                sorter: false
            }
        }
    });

};

GIGO.sites_table_populate_2 = function (mode) {
    var i;
    for (i = 0; i < GIGO.sites_queue.length; i = i + 1) {
        GIGO.sites_display_add_record(GIGO.sites_queue[i], mode);
    }


    $("#sites").tablesorter({
        textExtraction: "complex",
        sortInitialOrder: "asc",
        headers: {
            0: {
                sorter: "text"
            },
            1: {
                sorter: "text"
            },
            2: {
                sorter: "text"
            },
            3: {
                sorter: false
            },
            4: {
                sorter: false
            }
        }
    });

};

GIGO.sites_table_populate = function (mode) {
    if (mode === 1) {
        GIGO.sites_table_populate_1(mode);
    } else if (mode === 2) {
        GIGO.sites_table_populate_2(mode);
    } else {
        alert("bad GIGO.sites_table_populate()");
    }
};



GIGO.sites_init = function () {
    GIGO.sites_queue = [];
};

GIGO.sites_queue_entry = function (r) {
    if (!r.v4) {
        r.v4 = "http://ipv4." + r.site + "/images-nc/knob_valid_green.png";
    }
    if (!r.v6) {
        r.v6 = "http://ipv6." + r.site + "/images-nc/knob_valid_green.png";
    }
    
    // Mark up r.v4 for site analytics
    if (r.v4.search(/\?/)<0) {
      r.v4 = r.v4 + "?";
    }
    if (r.v6.search(/\?/)<0) {
      r.v6 = r.v6 + "?";
    }

    // This might actually fail; the mirrors page does 
    // not load GIGO.options.domain .
    try { 
      r.v4 = r.v4 + "&testdomain=" + GIGO.options.domain;
      r.v6 = r.v6 + "&testdomain=" + GIGO.options.domain;
    } catch (e) {
      r.v4 = r.v4 + "&testdomain=" + document.location.hostname;
      r.v6 = r.v6 + "&testdomain=" + document.location.hostname;
    };
    r.v4 = r.v4 + "&testname=sites";
    r.v6 = r.v6 + "&testname=sites";
    
    GIGO.sites_queue.push(r);
};

GIGO.sites_queue_all = function (mode) {
    var r, siteName;
    
    // mirrors only if mode=1
    // all sites if mode=2 
    for (siteName in GIGO.sites_parsed) {
      r = GIGO.sites_parsed[siteName];
      if (mode === 1) {
        if (! r.mirror) continue;
      }
      GIGO.sites_queue_entry(r);
    }
    
};

GIGO.sites_prepare_helpdesk = function (mode) {
    GIGO.helpdesk.other_sites = {};
    GIGO.helpdesk.other_sites.finished = 0;
    GIGO.helpdesk.other_sites.count = 0;
    GIGO.helpdesk.other_sites.good = [];
    GIGO.helpdesk.other_sites.bad = [];
    if (mode > 1) {
        GIGO.helpdesk.other_sites.count = GIGO.sites_queue.length;
    }

};

GIGO.other_sites_info = function () {
    var g, b, f, c, o, text;
    g = GIGO.helpdesk.other_sites.good.length;
    b = GIGO.helpdesk.other_sites.bad.length;
    f = GIGO.helpdesk.other_sites.finished;
    c = GIGO.helpdesk.other_sites.count;
    o = g + b;
    text = "";

    if (!c) {
        return "";
    }

    if (f != c) {
        text = "(Global IPv6 connectivity being tested; " + f + "/" + c + ")";
        // text = text + "b=" + b + " g=" + g + " f=" + f + " c=" + c + " o=" + o + "";
        return text;
    }


    text = "OtherSites: " + g + "/" + o + " good";
    if (b) {
        text = text + ", " + b + "/" + o + " bad";
    }


    return text;
};

GIGO.other_sites_failures = function () {
    var div, table, i;
    if (!GIGO.helpdesk.other_sites.bad.length) {
        return jQuery("<div>"); // morally, "nothing to show"
    }
    div = jQuery("<div>");
    div.append(jQuery("<p><span style='color: red'>Site(s) with failed connectivity</p>"));
    table = jQuery("<table>");
    table.append(jQuery("<tr><td>Site</td><td>Failed URL</td></tr>"));
    for (i = 0; i < GIGO.helpdesk.other_sites.bad.length; i = i + 1) {
        table.append(GIGO.sites_display_bad_r_to_tr(GIGO.helpdesk.other_sites.bad[i]));
    }
    div.append(table);
    return div;
};

GIGO.sites_display_bad_r_to_tr = function (r) {
    var tr, a, parts;
    // r.site;
    // r.loc
    // r.provider
    // r.v6
    tr = jQuery("<tr>");

    parts = r.v6.split("/");

    tr.append(jQuery("<td>").text(parts[0]));

    a = jQuery("<a>");
    a.text(r.v6);
    a.attr("href", r.v6);
    a.attr("target", "_blank");

    tr.append(jQuery("<td>").append(a));
    return tr;

};

GIGO.sites_display_td_provider_div_update = function (r) {
    var i, td_provider_div;
    td_provider_div = r.refs.td_provider_div;
    td_provider_div.text(r.provider);
    for (i in arguments) {
        if (i > 0) {
            td_provider_div.append("<br/>");
            td_provider_div.append(arguments[i]);
        }
    }
};

GIGO.sites_display_add_record = function (r, mode) {
    // Create new table row
    // Append it to existing table
    // Make sure that the row elements are easy to find by id
    var tr, td_link, td_loc, td_provider, td_status, td_info, td_mirror, mirror_button, site, td_provider_div;


    site = $("<a>", {
        text: r.site,
        href: "http://" + r.site,
        target: r.site
    });
    tr = $('<tr></tr>'); // Don't use .hide here.  Instead, lets show the table.  Only .hide() on failure?
    td_link = $("<td>").append(site);
    td_loc = $("<td>").text(r.loc);
    td_provider_div = $("<div>").text(r.provider);
    td_provider = $("<td>").append(td_provider_div);

    td_status = $("<td>").append($("<img>", {
        src: "/images/spinner.gif",
        height: GIGO.sites_image_size,
        width: GIGO.sites_image_size
    }).css("opacity", "0.1").css("filter", "alpha(opacity=10)"));
    td_info = $("<td>").append($("<img>", {
        src: "/images/knob_info.png",
        height: GIGO.sites_image_size,
        width: GIGO.sites_image_size
    }));


    td_info.click(function () {
        GIGO.sites_display_td_provider_div_update(r, $("<a>", {
            text: r.v4,
            href: r.v4,
            target: "_blank"
        }), $("<a>", {
            text: r.v6,
            href: r.v6,
            target: "_blank"
        }));
    });

    if ((mode === 2) && (r.mirror)) {

        // This should be done with jquery to avoid any potential abuse in mirrors.js, but
        // I can't find the right incantation.
        mirror_button = $("<a target='" + r.site + "' href='http://" + r.site + "'><img border=0 src='/images/knob_play.png'/></a>");
        mirror_button.find("img").attr("width", GIGO.sites_image_size);
        mirror_button.find("img").attr("height", GIGO.sites_image_size);

        td_mirror = $("<td>").append(mirror_button);
    } else {
        td_mirror = $("<td>").html("&nbsp;");
    }




    if (mode === 1) {
        tr.append(td_link, td_loc, td_provider, td_status, td_info);
    } else if (mode === 2) {
        tr.append(td_link, td_loc, td_provider, td_status, td_info, td_mirror);
    } else {
        return; // We should have had plenty of alerts already. 
    }

    //<img src="/images/spinner.gif" style="display:none" alt="preload" />
    //<img src="/images/knob_valid_green.png" style="display:none" alt="preload" />
    //<img src="/images/knob_cancel.png" style="display:none" alt="preload" />
    $('#sites > tbody:last').append(tr);
    $('#sites').find('tbody:last').append(tr);



    // Copy references to "r" object.
    r.refs = {};
    r.refs.tr = tr;
    r.refs.td_link = td_link;
    r.refs.td_loc = td_loc;
    r.refs.td_provider = td_provider;
    r.refs.td_provider_div = td_provider_div;
    r.refs.td_status = td_status;
    r.refs.td_info = td_info;
    r.refs.td_mirror = td_mirror;
};

GIGO.sites_display_success = function (r) {
    var new_td;
    new_td = $("<td>").append($("<img>", {
        src: "/images/knob_valid_green.png",
        height: GIGO.sites_image_size,
        width: GIGO.sites_image_size
    }));
    r.refs.td_status.replaceWith(new_td);
    GIGO.helpdesk.other_sites.finished = GIGO.helpdesk.other_sites.finished + 1;
    GIGO.helpdesk.other_sites.good.push(r);
    GIGO.sites_update_helpdesk();
};
GIGO.sites_display_failure = function (r) {
    var new_td;
    new_td = $("<td>").append($("<img>", {
        src: "/images/knob_cancel.png",
        height: GIGO.sites_image_size,
        width: GIGO.sites_image_size
    }));
    r.refs.td_status.replaceWith(new_td);
    GIGO.helpdesk.other_sites.finished = GIGO.helpdesk.other_sites.finished + 1;
    GIGO.helpdesk.other_sites.bad.push(r);
    GIGO.sites_update_helpdesk();
};

GIGO.sites_display_giveup = function (r) {
    var new_td;
    new_td = $("<td>").append($("<img>", {
        src: "/images/knob_graphite.png",
        height: GIGO.sites_image_size,
        width: GIGO.sites_image_size
    }));
    r.refs.td_status.replaceWith(new_td);
    GIGO.sites_display_td_provider_div_update(r, "IPv4 site down, skipping IPv6 test");
    GIGO.helpdesk.other_sites.finished = GIGO.helpdesk.other_sites.finished + 1;
    GIGO.sites_update_helpdesk();
};

GIGO.sites_update_helpdesk = function () {
    if (GIGO.helpdesk.other_sites.count) {
        GIGO.finish_helpdesk();
    }
};


GIGO.sites_start_ipv6_take2 = function (r) {
    var url, img, img_pending;

    if (!r.v6) {
        return;
    }

    url = r.v6 + "?nocache=" + Math.random();


    if (GIGO.is_replay()) {
        img_pending = 0;
        if (GIGO.was_failed_url(url)) {
            GIGO.fail_url(url);
            GIGO.sites_display_failure(r);
        } else {
            GIGO.sites_display_success(r);
        }
        GIGO.sites_next_in_queue();
        return;
    }

    setTimeout(function () {

        // We have all the details we need to know.
        // We have a freshly incremented "id".
        // What we need now is to start an image
        // with handlers on it.
        // Finalize the URL.  
        // Include a random number to defeat the browser cache.

        // Create the image object.
        // We will keep this "off screen".
        img = jQuery('<img style="display:none" />');
        img_pending = 1;


        jQuery(img).bind({
            load: function () {
                if (img_pending) {
                    img_pending = 0;
                    GIGO.sites_display_success(r);
                    GIGO.sites_next_in_queue();
                }
            },
            error: function () {
                if (img_pending) {
                    img_pending = 0;
                    GIGO.fail_url(url);
                    GIGO.sites_display_failure(r);
                    GIGO.sites_next_in_queue();
                }
            }
        });
        // Fake timeout here since IE doesn't pass errors
        setTimeout(function () {
            // TODO show FAIL
            if (img_pending) {
                img_pending = 0;
                GIGO.fail_url(url);
                GIGO.sites_display_failure(r);
                GIGO.sites_next_in_queue();
            }
        }, GIGO.max_time);
        jQuery(img).attr("src", url); // Start the image loading!
    }, 1000);


};

GIGO.sites_start_ipv6 = function (r) {
    var url, img, img_pending;

    if (!r.v6) {
        return;
    }

    if (GIGO.is_replay()) {
        GIGO.sites_start_ipv6_take2(r);
        return;
    }


    // We have all the details we need to know.
    // We have a freshly incremented "id".
    // What we need now is to start an image
    // with handlers on it.
    // Finalize the URL.  
    // Include a random number to defeat the browser cache.
    url = r.v6 + "?nocache=" + Math.random();

    // Create the image object.
    // We will keep this "off screen".
    img = jQuery('<img style="display:none" />');
    img_pending = 1;


    jQuery(img).bind({
        load: function () {
            if (img_pending) {
                img_pending = 0;
                GIGO.sites_display_success(r);
                GIGO.sites_next_in_queue();
            }
        },
        error: function () {
            if (img_pending) {
                img_pending = 0;
                GIGO.sites_start_ipv6_take2(r);
            }
        }
    });
    // Fake timeout here since IE doesn't pass errors
    setTimeout(function () {
        // TODO show FAIL
        if (img_pending) {
            img_pending = 0;
            GIGO.sites_start_ipv6_take2(r);
        }
    }, GIGO.max_time);
    jQuery(img).attr("src", url); // Start the image loading!
};


GIGO.sites_start_ipv4_take2 = function (r) {
    var url, img, img_pending;

    if (!r.v4) {
        return;
    }


    url = r.v4 + "?nocache=" + Math.random();


    if (GIGO.is_replay()) {
        img_pending = 0;
        if (GIGO.was_failed_url(url)) {
            GIGO.fail_url(url);
            GIGO.sites_display_giveup(r);
        } else {
            GIGO.sites_start_ipv6(r);
        }
        GIGO.sites_next_in_queue();
        return;
    }




    // Intentionally delay by a second
    // This gives a chance for the DNS to eventually
    // resolve, in case that was the source of the error.
    setTimeout(function () {

        r.refs.td_status.find('img').css("opacity", "1.0").css("filter", "alpha(opacity=100)");

        img = jQuery('<img style="display:none" />');
        img_pending = 1;

        jQuery(img).bind({
            load: function () {
                img_pending = 0;
                GIGO.sites_start_ipv6(r);
            },
            error: function () {
                if (img_pending) {
                    img_pending = 0;
                    GIGO.fail_url(url);
                    GIGO.sites_display_giveup(r);
                    GIGO.sites_next_in_queue();
                }
            }
        });
        setTimeout(function () {
            // TODO show FAIL
            if (img_pending) {
                img_pending = 0;
                GIGO.fail_url(url);
                GIGO.sites_display_giveup(r);
                GIGO.sites_next_in_queue();
            }
        }, GIGO.max_time);
        // Fake timeout here since IE doesn't pass errors
        jQuery(img).attr("src", url); // Start the image loading!
    }, 1000);
};



GIGO.sites_start_ipv4 = function (r) {
    var url, img, img_pending;

    if (!r.v4) {
        return;
    }


    // IPv6 only? Brave fellow.
    if ((!GIGO.results.ipv4.ip) && (GIGO.results.ipv6.ip)) {
        GIGO.sites_start_ipv6(r);
        return;
    }

    if (GIGO.is_replay()) {
        GIGO.sites_start_ipv4_take2(r);
        return;
    }


    r.refs.td_status.find('img').css("opacity", "1.0").css("filter", "alpha(opacity=100)");

    url = r.v4 + "?nocache=" + Math.random();
    img = jQuery('<img style="display:none" />');
    img_pending = 1;
    

    jQuery(img).bind({
        load: function () {
            if (img_pending) {
                img_pending = 0;
                GIGO.sites_start_ipv6(r);
            }
        },
        error: function () {
            if (img_pending) {
                img_pending = 0;
                GIGO.sites_start_ipv4_take2(r);
            }
        }
    });
    setTimeout(function () {
        // TODO show FAIL
        if (img_pending) {
            img_pending = 0;
            GIGO.sites_start_ipv4_take2(r);
        }
    }, GIGO.max_time);
    // Fake timeout here since IE doesn't pass errors
    jQuery(img).attr("src", url); // Start the image loading!
};


GIGO.sites_next_in_queue = function () {
    var r;
    if (GIGO.sites_queue.length > 0) {
        r = GIGO.sites_queue.shift();
        GIGO.sites_start_ipv4(r);
    }
};

GIGO.sites_start_tests = function () {
    // 9 parallel runs, spaced a bit a part.
    if (0 && GIGO.is_replay()) {
        while (GIGO.sites_queue.length > 0) {
            GIGO.sites_next_in_queue();
        }
    } else {
        setTimeout(GIGO.sites_next_in_queue, 1);
        setTimeout(GIGO.sites_next_in_queue, 75);
        setTimeout(GIGO.sites_next_in_queue, 150);
        setTimeout(GIGO.sites_next_in_queue, 225);
        setTimeout(GIGO.sites_next_in_queue, 300);
        setTimeout(GIGO.sites_next_in_queue, 375);
        setTimeout(GIGO.sites_next_in_queue, 450);
        setTimeout(GIGO.sites_next_in_queue, 525);
        setTimeout(GIGO.sites_next_in_queue, 600);
    }
};

GIGO.test_sites = function (mode) {
    GIGO.sites_init(mode);
    GIGO.sites_queue_all(mode);
    GIGO.fisherYates(GIGO.sites_queue);
    GIGO.sites_prepare_helpdesk(mode);
    GIGO.sites_table_init(mode);
    GIGO.sites_table_populate(mode);
    GIGO.sites_start_tests(mode);
};


GIGO.fisherYates = function (myArray) {
    var i, j, tempi, tempj;
    i = myArray.length;
    if (i === 0) {
        return;
    }
    while (i > 0) {
        i = i - 1;
        j = Math.floor(Math.random() * (i + 1));
        tempi = myArray[i];
        tempj = myArray[j];
        myArray[i] = tempj;
        myArray[j] = tempi;
    }
};

/*global GIGO, Browser, unescape */
/*jslint browser: true */

// Call this early, to enable the isp helpdesk tab

//GIGO.list_of_ipv4 = ["a", "ds4", "test_ipv4"];
//GIGO.list_of_ipv6 = ["aaaa", "ds6", "test_ipv6","test_v6mtu"];


GIGO.start_helpdesk = function () {
    var want_helpdesk = 0;
    if (GIGO.CGI.isp) {
        want_helpdesk = 1;
    }
    if (GIGO.CGI.helpdesk) {
        want_helpdesk = 1;
    }
    if (String(location.pathname).match(/\b(isp|helpdesk)\b/i)) {
        want_helpdesk = 1;
    }
    if (String(location.hostname).match(/\b(isp|helpdesk)\b/i)) {
        want_helpdesk = 1;
    }
    if (String(location.hash).match(/^(isp|helpdesk)\$/i)) {
        want_helpdesk = 1;
    }

    if (want_helpdesk) {
        GIGO.tabnav("helpdesk");
    } else {
        $("#tabbutton_helpdesk_link").addClass("navright");
    }

};



GIGO.helpdesk_ob_status = function (n) {
    var s = GIGO.results.tests[n].status;
    if (s === "ok") return "g";
    if (s === "slow") return "g";
    if (s === "bad") return "b";
    if (s === "timeout") return "t";
};
GIGO.helpdesk_ob_type = function () {
    //# global,bad,teredo,6to4,asn(different)
    var t = "b";
    if ((GIGO.results.ipv6) && (GIGO.results.ipv6.ip)) {
        t = "g"; // By default it must have a global address, right?
        if (GIGO.helpdesk.teredo) {
            t = "t"; // teredo
        }
        if (GIGO.helpdesk.sixfour) {
            t = "6"; // 6to4
        }
        if (GIGO.helpdesk.tunnel) {
            t = "a"; // Check the ASN
        }
    }
    return t;
};


GIGO.helpdesk_score = function () {
    var mini_helpdesk, score;

    // GIGO.results.tests[x].status
    var status_a = GIGO.helpdesk_ob_status("test_a");
    var status_ipv4 = GIGO.helpdesk_ob_status("test_ipv4");
    var status_aaaa = GIGO.helpdesk_ob_status("test_aaaa");
    var status_ipv6_type = GIGO.helpdesk_ob_type();

    var status = status_a + status_ipv4 + ":" + status_aaaa + status_ipv6_type;
    var ob = new Object;

    ob.found = GIGO.sym_helpdesk[status];
    ob.qcode = GIGO.sym_helpdesk_qcode[ob.found];

    if (ob.found) {
        if (GIGO.helpdesk.failed_pmtud) {
            ob.found = ob.found + ", Potential MTU issues";
            ob.qcode = ob.qcode + ",mtu";
        }
        if (GIGO.helpdesk.mini_primary.match(/s/)) {
            ob.found = ob.found + ", Slow";
            ob.qcode = ob.qcode + ",slow"
        }
        return ob;
    }
    return;
};

GIGO.helpdesk_good_bad_slow = function (a) {
    var slow = 0;
    var good = 0;
    var tout = 0;
    var i = 0;
    for (i = 0; i < a.length; i = i + 1) {
        if (GIGO.results.tests[a[i]].status === "ok") {
            good = 1;
        }
        if (GIGO.results.tests[a[i]].status === "slow") {
            slow = 1;
        }
        if (GIGO.results.tests[a[i]].status === "timeout") {
            tout = 1;
        }
    }
    if (tout) return "Timeout";
    if (slow) return "Slow";
    if (good) return "Good";
    return "Bad";
};

GIGO.helpdesk_ipv4_info = function () {
    var test_a, test_asn4, s;
    test_a = GIGO.results.tests.test_a;
    test_asn4 = GIGO.results.tests.test_asn4;

    // status
    // ipinfo.ip
    // ipinfo.asn
    // ipinfo.asn_name
    // time_ms

    if ((test_a.ipinfo) && (test_a.ipinfo.ip)) {
        s = "IPv4: ";
        s = s + GIGO.helpdesk_good_bad_slow(["test_a", "test_ds4", "test_ipv4"]);
        if (test_asn4 && test_asn4.ipinfo && test_asn4.ipinfo.asn) {
            s = s + ", AS" + test_asn4.ipinfo.asn + " - ";
            s = s + test_asn4.ipinfo.asn_name;
        }
        return s;
    } else {
        return "IPv4: no";
    }
};

GIGO.helpdesk_ipv6_info = function () {
    var test_aaaa, test_asn6, s;
    test_aaaa = GIGO.results.tests.test_aaaa;
    test_asn6 = GIGO.results.tests.test_asn6;


    // status
    // ipinfo.ip
    // ipinfo.asn
    // ipinfo.asn_name
    // time_ms


    // We need to warn if any of the IPv6 tries timed out

    if ((test_aaaa.ipinfo) && (test_aaaa.ipinfo.ip)) {
        s = "IPv6: ";
        s = s + GIGO.helpdesk_good_bad_slow(["test_aaaa", "test_ds6", "test_ipv6", "test_v6mtu"]);
        if (test_asn6 && test_asn6.ipinfo && test_asn6.ipinfo.asn) {
            s = s + ", AS" + test_asn6.ipinfo.asn + " - ";
            s = s + test_asn6.ipinfo.asn_name;
        }
        return s;
    } else {

        if ((GIGO.results.tests.test_aaaa) && (GIGO.results.tests.test_aaaa.status) && (GIGO.results.tests.test_aaaa.status === "timeout")) {
            return "IPv6: broken";
        }
        if ((GIGO.results.tests.test_ds) && (GIGO.results.tests.test_ds.status) && (GIGO.results.tests.test_ds.status === "timeout")) {
            return "IPv6: broken";
        }
        if ((GIGO.results.tests.test_ipv6) && (GIGO.results.tests.test_ipv6.status) && (GIGO.results.tests.test_ipv6.status === "timeout")) {
            return "IPv6: broken";
        }
        return "IPv6: no";
    }
};


// call this late to populate the helpdesk tab
GIGO.finish_helpdesk = function () {
    var code, div;
    if (!GIGO.results.debug_code) {
        return; // Too soon.
    }

    // Show the replay url
    jQuery("#replayurldiv").show();

    code = GIGO.helpdesk_score();

    div = jQuery("<div>", {
        id: "helpdesk_content"
    });

    //  div.append("<div class=beta>BETA  -This tab is a work in progress.</div>");

    div.append(jQuery("<p>").append("Your Internet help desk may ask you for the information below."));

    if ((code) && (code.qcode)) {
        div.append(jQuery("<p>").append(jQuery("<span class=helpdeskcode>").text("Help desk code: " + code.qcode)));
    }
    if ((code) && (code.found)) {
        div.append(jQuery("<p>").append(jQuery("<b>").text(code.found)));
    }

    // GIGO.results.ipv4 and ipv6, have our ASN info.

    //    div.append(jQuery("<div>").text(s));
    div.append(jQuery("<div>").text(GIGO.helpdesk_ipv4_info()));
    div.append(jQuery("<div>").text(GIGO.helpdesk_ipv6_info()));
    if (GIGO.helpdesk.other_sites && GIGO.helpdesk.other_sites.count) {
        div.append(jQuery("<div>").text(GIGO.other_sites_info()));
    }

    div.append("<div><p></p></div>"); // Space.
    if ((GIGO.results.ipv4) && (GIGO.results.ipv4.ip)) {
        div.append(jQuery("<div>").text("IPv4 address: " + GIGO.results.ipv4.ip));
    }
    if ((GIGO.results.ipv6) && (GIGO.results.ipv6.ip)) {
        div.append(jQuery("<div>").text("IPv6 address: " + GIGO.results.ipv6.ip));
    }
    div.append("<div><p></p></div>"); // Space.

    if (GIGO.helpdesk.other_sites) {
        div.append(GIGO.other_sites_failures());
    }


    //  IPv4: Good, AS1234, CableCo
    // IPv6: Good, Teredo, Not Preferred
    // OtherSites: 40/40 Good

    // IPv4 address: 192.0.2.1
    // IPv6 address: 2001:0c000:201::1


    $("#helpdesk_content").replaceWith(div);




    //     $("#helpdesk_content")

    // GIGO.results.tokens
    // GIGO.results.score_transition
    // GIGO.results.score_strict
    // GIGO.results.debug_code
    // GIGO.results.tokens_expanded
    // GIGO.results.mini_primary
    // GIGO.results.mini_secondary

    // This is meant to be ran several times; each time will replace 
    // #helpdesk_content 

    // First time replaced, will be before the "other sites" tab starts.
    // If we have IPV6, then it should say "checking other sites.."
    // And perhaps update only when done?

};

/* We will pulse specific CSS elements, 
cycling through colors ranging from yellow to white */

GIGO.pulse_background_speed = 250;
GIGO.pulse_background_colors = [
"#fffeee",
"#fffeee",
"#fffddd",
"#fffccc",
"#fffbbb",
'#fffbbb',
"#fffccc",
"#fffddd",
"#fffeee",
"#fffeee"];


GIGO.pulse_on = function () {
 var n = GIGO.pulse_background_colors.shift();
 GIGO.pulse_background_colors.push(n);
 jQuery(".help_popup").css("background-color",n);
 jQuery("#comments_faq_link").css("background-color",n);
 setTimeout( function() {
    GIGO.pulse_on();
 }, GIGO.pulse_background_speed);   
}
/*global GIGO, MirrorConfig, jQuery,  window,  alert,  Browser */
/*jslint browser: true */
/*jslint regexp: true */


GIGO.prepare_fake = function () {
    var i, funcname, shortname;
    for (i = 0; i < GIGO.queue.length; i = i + 1) {
        funcname = GIGO.queue[i][2];
        shortname = funcname.replace(/^test_/, "");
        if (GIGO.CGI[shortname]) {
            GIGO.override = 1;
            GIGO.overrides[funcname] = GIGO.CGI[shortname];
            GIGO.use_queue = 1;
        }
    }
    if ((GIGO.isdef(GIGO.CGI.ip4)) || (GIGO.isdef(GIGO.CGI.ip6))) {
        GIGO.override = 1;
    }
};


GIGO.override_id = function (id, url) {
    var tests, this_test, parts, status, protocol, whichasn;
    tests = GIGO.results.tests; // Convenience    
    if (!(tests.hasOwnProperty(id))) {
        tests[id] = {};
    }

    tests[id] = {};
    this_test = tests[id];
    this_test.url = url;
    this_test.start_time = GIGO.getms();
    this_test.ipinfo = {};

    GIGO.update_url(id);

    // TODO  copy from ipinfo
    parts = GIGO.overrides[id].split(/,/);

    // parts[0] = status
    // parts[1] = time
    // parts[2] = protocol

    // TODO I know this is totally gonna cause problems when the url is missing data
    status = parts[0];
    protocol = parts[2];
    if (!protocol) {
        if ((id === "test_aaaa") || (id === "test_ipv6") || (id === "test_v6mtu") || (id === "test_v6ns") || (id === "test_dsmtu") || (id === "test_ds")) {
            protocol = "ipv6";
        } else {
            protocol = "ipv4";
        }
    }

    whichasn = "test_asn" + protocol.replace(/^ipv/, "");

    if (status === "ok") {
        for (var key in tests[whichasn].ipinfo) {
            if (!key.match(/^asn/)) {
                this_test.ipinfo[key] = tests[whichasn].ipinfo[key];
            }
        }
        this_test.status = status;
        this_test.time_ms = parseInt(parts[1]) || 1;
    }
    if (status === "slow") {
        for (var key in tests[whichasn].ipinfo) {
            if (!key.match(/^asn/)) {
                this_test.ipinfo[key] = tests[whichasn].ipinfo[key];
            }
        }
        this_test.status = status;
        this_test.time_ms = parseInt(parts[1]) || (GIGO.slow + 1);
    }
    if (status === "bad") {
        this_test.ipinfo = {};
        this_test.status = status;
        this_test.time_ms = parseInt(parts[1]) || 1;
    }
    if (status === "timeout") {
        this_test.ipinfo = {};
        this_test.status = status;
        this_test.time_ms = parseInt(parts[1]) || (GIGO.max_time + 1);
    }


    if (id === "test_ds") {
        // We need to populate test_ds4 and test_ds6  in much the same way that GIGO.test_type_json() does
        if (this_test.ipinfo.type === "ipv6") {
            tests.test_ds6 = {
                url: this_test.url,
                time_ms: this_test.time_ms,
                status: this_test.status
            };
            tests.test_ds4 = {
                url: this_test.url,
                time_ms: this_test.time_ms,
                status: "bad"
            };
        } else {
            tests.test_ds4 = {
                url: this_test.url,
                time_ms: this_test.time_ms,
                status: this_test.status
            };
            tests.test_ds6 = {
                url: this_test.url,
                time_ms: this_test.time_ms,
                status: "bad"
            };
        }
    }

};

GIGO.override_id_ip = function (id) {
    var tests, this_test, parts, status, protocol, whichasn;
    tests = GIGO.results.tests; // Convenience    
    this_test = tests[id];
    if (!this_test) {
        return;
    }
    if (!this_test.ipinfo.type) {
        return;
    }
    whichasn = "test_asn" + this_test.ipinfo.type.replace(/^ipv/, "");

    this_test.ipinfo = {};


    for (var key in tests[whichasn].ipinfo) {
        if (!key.match(/^asn/)) {
            this_test.ipinfo[key] = tests[whichasn].ipinfo[key];
        }
    }
};

/*global GIGO, MirrorConfig, jQuery,  window,  alert,  Browser */
/*jslint browser: true */
/*jslint regexp: true */


GIGO.update_ipaddress = function (ipinfo) {
    // ipinfo:  callback({"ip":"69.62.233.151","type":"ipv4","subtype":"","public":1,"filler":""});


    if (ipinfo.type === "ipv4") {
        if (!GIGO.results.ipv4.asn) {
            GIGO.results.ipv4 = ipinfo;
        }
    }
    if (ipinfo.type === "ipv6") {
        if (!GIGO.results.ipv6.asn) {
            GIGO.results.ipv6 = ipinfo;
        }
    }
};

GIGO.test_type_delayed = function (url, id) {

    // We will use this to stagger the start time_ms.
    // Since javascript has no "sleep" the next best
    // thing appears to be to set a timeout, and on timeout,
    // do what we really wanted.
    // We increase the timeout value each time we run this, so 
    // that each thread time_ms out at a later time, to prevent
    // all tests from running INSTANTLY.
    // This is principally to work around IE problems
    // with too many jsonP queries initiating at once.
    GIGO.slowcount = GIGO.slowcount + 1;
    setTimeout(function () {
        GIGO.test_type(url, id);
    }, GIGO.slowcount * GIGO.slowcount_delay);
};

GIGO.finish_test = function (id) {
    var total_tests = GIGO.queue.length + GIGO.dequeued.length; // Once for main text, once for fallback image test
    GIGO.tests_finished = GIGO.tests_finished + 1;
    GIGO.update_progress(GIGO);
    GIGO.update_status(id);
    if (GIGO.tests_finished >= total_tests) {
        GIGO.check_results();
    }
    GIGO.next_in_queue(); // Start next test, if available
    GIGO.show_debug();
};



GIGO.test_type_json = function (url, id) {
    // name = dns name to fetch 
    // id = which <div> to update
    var tests, this_test;



    // Let us also add in some hints for mirror operators
    if (url.search(/\?/) < 0) {
      url = url + "?";
    }
    url = url + "&testdomain=" + GIGO.options.domain;
    url = url + "&testname=" + id;
    if (Browser.opera) {
            url = url + "&random=" + Math.random();
    }


    tests = GIGO.results.tests; // Convenience    
    if (!(tests.hasOwnProperty(id))) {
        tests[id] = {};
    }
    this_test = tests[id];

    this_test.start_time = GIGO.getms(); // Will use to find how long we ran 
    this_test.url = url; // For later display of test urls
    // Update status to "Started" if we don't have any time for this yet


    if (GIGO.overrides && GIGO.overrides[id]) {
        // oh, we're faking this one.  TODO
        // we can take a lot of short cuts.
        GIGO.override_id(id, url);
        GIGO.finish_test(id);
        GIGO.update_url(id);
        GIGO.show_debug();
        return;
    }


    GIGO.update_url(id);

    // Initiate new query.  Based on pass/fail, update status.
    jQuery.jsonp({
        "url": url,
        "cache": true,
        "pageCache": false,
        "timeout": GIGO.max_time,

        "success": function (ipinfo) {
            // Keep track of IP information we receive
            var delta;

            delete ipinfo.full; // Don't need this polluting anything.
            delete ipinfo.padding; // Don't need this polluting anything.
            this_test.ipinfo = ipinfo; // Record the IP address reported from this test
            if (GIGO.override) {
                GIGO.override_id_ip(id);
            }
            GIGO.update_ipaddress(this_test.ipinfo); // Make note of our IPv4 or IPv6 address based on the test
            GIGO.update_ip(id); // callback for presentation
            delta = GIGO.getms() - this_test.start_time;
            if (GIGO.isdef(this_test.time_ms)) {
                if (delta < this_test.time_ms) {
                    this_test.time_ms = delta;
                }
            } else {
                this_test.time_ms = delta;
            }
            this_test.status = (this_test.time_ms < GIGO.slow) ? "ok" : "slow";


            // Look for dual stack
            if (id === "test_ds") {
                // ds4 and ds6 have the same time; but if one is good, the other must be bad,
                // since we can't possibly connect to both with a single DNS name
                if (ipinfo.type === "ipv6") {
                    tests.test_ds6 = {
                        url: this_test.url,
                        time_ms: this_test.time_ms,
                        status: this_test.status
                    };
                    tests.test_ds4 = {
                        url: this_test.url,
                        time_ms: this_test.time_ms,
                        status: "bad"
                    };
                } else {
                    tests.test_ds4 = {
                        url: this_test.url,
                        time_ms: this_test.time_ms,
                        status: this_test.status
                    };
                    tests.test_ds6 = {
                        url: this_test.url,
                        time_ms: this_test.time_ms,
                        status: "bad"
                    };
                }
            }

            GIGO.finish_test(id);


        },
        "error": function (d, msg) {
            var delta;

            delta = GIGO.getms() - this_test.start_time;
            if (GIGO.isdef(this_test.time_ms)) {
                if (delta < this_test.time_ms) {
                    this_test.time_ms = delta;
                }
            } else {
                this_test.time_ms = delta;
            }
            this_test.status = (this_test.time_ms < GIGO.slow) ? "bad" : "timeout";


            // Look for dual stack
            if (id === "test_ds") {
                tests.test_ds6 = {
                    url: this_test.url,
                    time_ms: this_test.time_ms,
                    status: this_test.status
                };
                tests.test_ds4 = {
                    url: this_test.url,
                    time_ms: this_test.time_ms,
                    status: this_test.status
                };

                // Dual stack connection failed. Is it due to buggy DNS?
                // Queue the buggydns1 check!
                GIGO.queue.push(["test_buggydns1", GIGO.options.url.test_buggydns1_img, "test_buggydns1"]);
            }


            // Fallback to image test, if the primary tests fail.  Just in case some filter blocked the script fetches.
            GIGO.finish_test(id);
            GIGO.queue.push(["test_type_img", GIGO.options.url[id + "_img"], id + "_img"]);
        }
    });

    // Perform callback for presentation
    GIGO.update_url(id);
    GIGO.show_debug();


};

GIGO.test_type_json_only = function (url, id) {
    // name = dns name to fetch 
    // id = which <div> to update
    var tests, this_test;


    if (url.search(/\?/) < 0) {
      url = url + "?";
    }
    url = url + "&testdomain=" + GIGO.options.domain;
    url = url + "&testname=" + id;
    if (Browser.opera) {
            url = url + "&random=" + Math.random();
    }




    tests = GIGO.results.tests; // Convenience    
    if (!(tests.hasOwnProperty(id))) {
        tests[id] = {};
    }
    this_test = tests[id];

    this_test.start_time = GIGO.getms(); // Will use to find how long we ran 
    this_test.url = url; // For later display of test urls
    // Update status to "Started" if we don't have any time for this yet
    GIGO.update_url(id);



    if ((id === "test_asn4") && (GIGO.isdef(GIGO.CGI.ip4))) {
        if ((GIGO.CGI.ip4) && (GIGO.CGI.ip4.match(/^[0-9abcdef.:]+$/))) {
            url = "/ip/?callback=?&asn=1&testip=" + GIGO.CGI.ip4;
            url = url + "&testdomain=" + GIGO.options.domain;
            url = url + "&testname=" + id;
            this_test.url = url; // For later display of test urls
            GIGO.update_url(id);
        } else {
            this_test.ipinfo = {};
            this_test.status = "bad";
            this_test.time_ms = 1;
            GIGO.finish_test(id);
            GIGO.update_url(id);
            GIGO.show_debug();
            return;
        }
    }
    if ((id === "test_asn6") && (GIGO.isdef(GIGO.CGI.ip6))) {
        if ((GIGO.CGI.ip6) && (GIGO.CGI.ip6.match(/^[0-9abcdef.:]+$/))) {
            url = "/ip/?callback=?&asn=1&testip=" + GIGO.CGI.ip6;
            url = url + "&testdomain=" + GIGO.options.domain;
            url = url + "&testname=" + id;
            this_test.url = url; // For later display of test urls
            GIGO.update_url(id);
        } else {
            this_test.ipinfo = {};
            this_test.status = "bad";
            this_test.time_ms = 1;
            GIGO.finish_test(id);
            GIGO.update_url(id);
            GIGO.show_debug();
            return;
        }
    }





    // Initiate new query.  Based on pass/fail, update status.
    jQuery.jsonp({
        "url": url,
        "cache": true,
        "pageCache": false,
        "timeout": GIGO.max_time,

        "success": function (ipinfo) {
            // Keep track of IP information we receive
            var delta;

            delete ipinfo.full; // Don't need this polluting anything.
            delete ipinfo.padding; // Don't need this polluting anything.
            this_test.ipinfo = ipinfo; // Record the IP address reported from this test
            GIGO.update_ipaddress(this_test.ipinfo); // Make note of our IPv4 or IPv6 address based on the test
            GIGO.update_ip(id); // callback for presentation
            delta = GIGO.getms() - this_test.start_time;
            if (GIGO.isdef(this_test.time_ms)) {
                if (delta < this_test.time_ms) {
                    this_test.time_ms = delta;
                }
            } else {
                this_test.time_ms = delta;
            }
            this_test.status = (this_test.time_ms < GIGO.slow) ? "ok" : "slow";



            GIGO.finish_test(id);


        },
        "error": function (d, msg) {
            var delta;

            delta = GIGO.getms() - this_test.start_time;
            if (GIGO.isdef(this_test.time_ms)) {
                if (delta < this_test.time_ms) {
                    this_test.time_ms = delta;
                }
            } else {
                this_test.time_ms = delta;
            }
            this_test.status = (this_test.time_ms < GIGO.slow) ? "bad" : "timeout";


            GIGO.finish_test(id);
        }
    });

    // Perform callback for presentation
    GIGO.update_url(id);
    GIGO.show_debug();
};


GIGO.test_buggydns1 = function (url, id) {
    // name = dns name to fetch 
    // id = which <div> to update
    var tests, this_test, img, img_pending, max_time;
    jQuery(".optional_buggydns1").show();

    max_time = (GIGO.max_time > 5000) ? 5000 : GIGO.max_time; // Shorten this test. 
    if (url.search(/\?/) < 0) {
          url = url + "?";
    }
    url = url + "&testdomain=" + GIGO.options.domain;
    url = url + "&testname=" + id;
    if (Browser.opera) {
            url = url + "&random=" + Math.random();
    }


    tests = GIGO.results.tests; // Convenience    
    if (!(tests.hasOwnProperty(id))) {
        tests[id] = {};
    }
    this_test = tests[id];

    this_test.start_time = GIGO.getms(); // Will use to find how long we ran 
    this_test.url = url; // For later display of test urls
    // Update status to "Started" if we don't have any time for this yet
    GIGO.update_url(id);

    // Create image.
    // Attach handlers to the image.   
    // Create a timer to artificially timeout imgs
    img_pending = 1;

    img = jQuery('<img style="display:none" />');

    // INVERSE LOGIC HERE !!! 
    jQuery(img).bind({
        load: function () {
            var delta;
            if (img_pending) {
                img_pending = 0;
                delta = GIGO.getms() - this_test.start_time;
                if (GIGO.isdef(this_test.time_ms)) {
                    if (delta < this_test.time_ms) {
                        this_test.time_ms = delta;
                    }
                } else {
                    this_test.time_ms = delta;
                }
                this_test.image = 1;
                this_test.status = "affected"; // INVERSE LOGIC!
                GIGO.finish_test(id);
            }
        },
        error: function () {
            var delta;
            if (img_pending) {
                img_pending = 0;
                delta = GIGO.getms() - this_test.start_time;
                if (GIGO.isdef(this_test.time_ms)) {
                    if (delta < this_test.time_ms) {
                        this_test.time_ms = delta;
                    }
                } else {
                    this_test.time_ms = delta;
                }
                this_test.image = 1;
                this_test.status = "safe"; // INVERSE LOGIC!
                GIGO.finish_test(id);
            }
        }
    });

    // FAKE IMAGE TIMEOUT HANDLER 
    setTimeout(function () {
        var delta;
        if (img_pending) {
            img_pending = 0;
            // replace failing image url with one that should work, so that browser can call this done.
            // we tried setting to "" but safari at minimum treats that as replacing src
            // with the value of document.location (!).
            jQuery(img).attr("src", "/images/knob_red.png");

            delta = GIGO.getms() - this_test.start_time;
            if (GIGO.isdef(this_test.time_ms)) {
                if (delta < this_test.time_ms) {
                    this_test.time_ms = delta;
                }
            } else {
                this_test.time_ms = delta;
            }
            this_test.image = 1;
            this_test.status = "safe"; // INVERSE LOGIC!
            GIGO.finish_test(id);
        }
    }, max_time);


    //jQuery('body').append(img);        
    jQuery(img).attr("src", url);

    // Perform callback for presentation
    GIGO.update_url(id);
    GIGO.show_debug();
};

GIGO.test_type_img = function (url, id) {
    // name = dns name to fetch 
    // id = which <div> to update
    var tests, this_test, img, img_pending;

    if (url.search(/\?/) < 0) {
          url = url + "?";
    }
    url = url + "&testdomain=" + GIGO.options.domain;
    url = url + "&testname=" + id;
    if (Browser.opera) {
            url = url + "&random=" + Math.random();
    }

    tests = GIGO.results.tests; // Convenience    
    if (!(tests.hasOwnProperty(id))) {
        tests[id] = {};
    }
    this_test = tests[id];

    this_test.start_time = GIGO.getms(); // Will use to find how long we ran 
    this_test.url = url; // For later display of test urls
    // Update status to "Started" if we don't have any time for this yet
    GIGO.update_url(id);

    // Create image.
    // Attach handlers to the image.   
    // Create a timer to artificially timeout imgs
    img_pending = 1;

    img = jQuery('<img style="display:none" />');

    jQuery(img).bind({
        load: function () {
            var delta;

            if (img_pending) {
                img_pending = 0;
                delta = GIGO.getms() - this_test.start_time;
                if (GIGO.isdef(this_test.time_ms)) {
                    if (delta < this_test.time_ms) {
                        this_test.time_ms = delta;
                    }
                } else {
                    this_test.time_ms = delta;
                }
                this_test.image = 1;
                this_test.status = (this_test.time_ms < GIGO.slow) ? "ok" : "slow";
                if (this_test.test_ms > GIGO.max_time) {
                    this_test.status = "timeout";
                }
                GIGO.finish_test(id);
            }
        },
        error: function () {
            var delta;
            if (img_pending) {
                img_pending = 0;
                delta = GIGO.getms() - this_test.start_time;
                if (GIGO.isdef(this_test.time_ms)) {
                    if (delta < this_test.time_ms) {
                        this_test.time_ms = delta;
                    }
                } else {
                    this_test.time_ms = delta;
                }
                this_test.image = 1;
                this_test.status = (this_test.time_ms < GIGO.slow) ? "bad" : "timeout";
                GIGO.finish_test(id);
            }
        }
    });

    // FAKE IMAGE TIMEOUT HANDLER 
    setTimeout(function () {
        var delta;
        if (img_pending) {
            img_pending = 0;
            // replace failing image url with one that should work, so that browser can call this done.
            // we tried setting to "" but safari at minimum treats that as replacing src
            // with the value of document.location (!).
            jQuery(img).attr("src", "/images/knob_red.png");

            delta = GIGO.getms() - this_test.start_time;
            if (GIGO.isdef(this_test.time_ms)) {
                if (delta < this_test.time_ms) {
                    this_test.time_ms = delta;
                }
            } else {
                this_test.time_ms = delta;
            }
            this_test.image = 1;
            this_test.status = (this_test.time_ms < GIGO.slow) ? "bad" : "timeout";
            GIGO.finish_test(id);
        }
    }, GIGO.max_time);


    //jQuery('body').append(img);        
    jQuery(img).attr("src", url);

    // Perform callback for presentation
    GIGO.update_url(id);
    GIGO.show_debug();
};



GIGO.retest = function () {
    window.location.reload();
};



GIGO.next_in_queue = function () {
    var fname, a;
    if (GIGO.queue.length > 0) {
        a = GIGO.queue.shift(); // Dequeue the next test.
        GIGO.dequeued.push(a.slice(0)); // Save a COPY.
        try {
            fname = a.shift(); // Remove first field, the function name (in the GIGO namespace).  This changes array "a".           
        } catch (e) {
            alert("ERROR: GIGO.next_in_queue: not an array; value=" + a);
        }

        // fname = function name
        // a = args array to pass.
        GIGO[fname].apply(GIGO, a);

        // If we are permitted parallel execution,
        // set a timer to start the next job.
        if (!GIGO.use_queue) {
            setTimeout(GIGO.next_in_queue, GIGO.slowcount_delay);
        }
    }
    GIGO.update_progress(GIGO);
};

GIGO.start_tests = function () {
    GIGO.browser_tweaks(GIGO); // In case we want to do tweak the document
    GIGO.next_in_queue(); // Get the ball rolling!  
};
GIGO.restart_tests = function () {
    var i, l;
    l = GIGO.dequeued.length;
    for (i = 0; i < l; i = i + 1) {
        GIGO.queue.push(GIGO.dequeued[i]);
    }
    GIGO.update_progress(GIGO);
    GIGO.start_tests();
};



GIGO.setup_tests = function () {

    asn_lookup_broken = 0
    if (asn_lookup_broken) {
      jQuery('#sum_test_asn4').parent().parent().hide();
      jQuery('#sum_test_asn6').parent().parent().hide();
      jQuery('#test_asn4').parent().parent().hide();
      jQuery('#test_asn6').parent().parent().hide();
    } else {
      GIGO.queue.push(["test_type_json_only", GIGO.options.url.test_asn4, "test_asn4"]);
      GIGO.queue.push(["test_type_json_only", GIGO.options.url.test_asn6, "test_asn6"]);
    }


    GIGO.queue.push(["test_type_json", GIGO.options.url.test_a, "test_a"]);
    GIGO.queue.push(["test_type_json", GIGO.options.url.test_aaaa, "test_aaaa"]);
    GIGO.queue.push(["test_type_json", GIGO.options.url.test_ds, "test_ds"]);
    GIGO.queue.push(["test_type_json", GIGO.options.url.test_ipv4, "test_ipv4"]);
    GIGO.queue.push(["test_type_json", GIGO.options.url.test_ipv6, "test_ipv6"]);
    GIGO.queue.push(["test_type_json", GIGO.options.url.test_v6mtu, "test_v6mtu"]);
    GIGO.queue.push(["test_type_json", GIGO.options.url.test_v6ns, "test_v6ns"]);
    GIGO.queue.push(["test_type_json", GIGO.options.url.test_dsmtu, "test_dsmtu"]);
    GIGO.show_debug();
    GIGO.prepare_fake();

};

GIGO.fill = function (size, str) {
    var s = "";
    while (s.length < size) {
        s = s + str;
    }
    s = s.substring(0, size);
    return s;
};




GIGO.set_default_options = function (options) {

    options.url = (options.hasOwnProperty("url")) ? options.url : {};

    options.domain = GIGO.mirrorconfig("site", "name", null);
    options.subdomain = GIGO.mirrorconfig("load", "domain", options.domain);
    options.ipv4 = GIGO.mirrorconfig("load", "ipv4", null);
    options.ipv6 = GIGO.mirrorconfig("load", "ipv6", null);
    options.uri = GIGO.mirrorconfig("options", "ip", "/ip/") + "?callback=?";
    options.img_uri = "/images-nc/bg.gif";
    options.img_uri_big = "/images-nc/knob_valid_green.png?&fill=" + GIGO.fill(1600, "x");
    options.img_bad_uri = "/images-nc/knob_cancel.png";
    
    // Determine if we can use an alternate v6mtu defined by the site config (options -> v6mtu)
//    options.v6mtu = GIGO.mirrorconfig("options","v6mtu","ipv6." + options.subdomain);



    // options.uri = "/report-ip.php?callback=?";  // Alternative to mod_ip
    options.url.test_a = "http://ipv4." + options.subdomain + options.uri;
    options.url.test_aaaa = "http://ipv6." + options.subdomain + options.uri;
    options.url.test_ds = "http://ds." + options.subdomain + options.uri;
    options.url.test_ipv4 = "http://" + options.ipv4 + options.uri;
    options.url.test_ipv6 = "http://[" + options.ipv6 + "]:80" + options.uri;
    options.url.test_v6ns = "http://ds.v6ns." + options.subdomain + options.uri;
    options.url.test_v6mtu = "http://mtu1280." + options.subdomain + options.uri + "&size=1600&fill=" + GIGO.fill(1600, "x");
    options.url.test_dsmtu = "http://ds." + options.subdomain + options.uri + "&size=1600&fill=" + GIGO.fill(1600, "x");
    options.url.test_buggydns1 = "http://buggydns1." + options.subdomain + options.uri;


    // ASN lookups are corrently broken.
    options.url.test_asn4 = "http://ipv4." + options.subdomain + options.uri + "&asn=1";
    options.url.test_asn6 = "http://ipv6." + options.subdomain + options.uri + "&asn=1";


    options.url.test_a_img = "http://ipv4." + options.subdomain + options.img_uri;
    options.url.test_aaaa_img = "http://ipv6." + options.subdomain + options.img_uri;
    options.url.test_ds_img = "http://ds." + options.subdomain + options.img_uri;
    options.url.test_ipv4_img = "http://" + options.ipv4 + options.img_uri;
    options.url.test_ipv6_img = "http://[" + options.ipv6 + "]:80" + options.img_uri;
    options.url.test_v6ns_img = "http://ds.v6ns." + options.subdomain + options.img_uri;
    options.url.test_v6mtu_img = "http://mtu1280." + options.subdomain + options.img_uri_big;
    options.url.test_dsmtu_img = "http://ds." + options.subdomain + options.img_uri_big;
    options.url.test_buggydns1_img = "http://buggydns1." + options.subdomain + options.img_uri;



};

GIGO.fix_comment_form_and_tab = function () {
    if (MirrorConfig.options.comment) {
        jQuery("#tabbutton_mail_link").show();

        var url = MirrorConfig.options.comment;
        if (MirrorConfig.options.userdata) {
            if (GIGO.results.ipv4.ip) {
                url = "http://ipv4." + MirrorConfig.options.userdata + "/comment.php";
            } else if (GIGO.results.ipv6.ip) {
                url = "http://ipv6." + MirrorConfig.options.userdata + "/comment.php";
            } else {
                url = "http://ds." + MirrorConfig.options.userdata + "/comment.php";
            }
        }

        $('#commentform').get(0).setAttribute('action', url);

    } else {
        jQuery("#tabbutton_mail_link").hide();
        jQuery("a.tabbutton_mail").hide();
    }

};


GIGO.test_ipv6_gui = function (options) {
    // Check options
    if (!GIGO.isdef(options)) {
        options = {};
    }
    GIGO.options = options;
    GIGO.set_default_options(options);

    // Start real workload
    jQuery(document).ready(function () {
        // Primitive hack to avoid the web bots from comment spamming
        jQuery("[name=nobots]").val("serious");
        if (GIGO.is_replay()) {
          jQuery("#replay").show();
        }

        // Possibly, kill that tab instead.
        // GIGO.fix_comment_form_and_tab();
        GIGO.fix_footer_early();
        GIGO.start_helpdesk();
        GIGO.setup_tests();
        GIGO.start_tests();
        GIGO.pulse_on();
    });
};

GIGO.redirect = function (page) {
    var newurl, oldpath, newpath;
    newurl = document.location.protocol;
    newurl = newurl + "://";
    newurl = newurl + document.location.hostname;
    if (document.location.port !== 80) {
        newurl = newurl + ":" + document.location.port;
    }

    oldpath = String(document.location.pathname);
    newpath = oldpath.replace(/[^\/]+$/, "");
    newpath = newpath + page;
    newpath = newpath.replace(/\/+/g, "/");

    document.location = newpath;


};


// end of base.js
