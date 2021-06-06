<script>/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/*
 * Copyright (c) 2020, Jeff Hlywa (jhlywa@gmail.com)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 *----------------------------------------------------------------------------*/

var Chess = function(fen) {
    var BLACK = 'b'
    var WHITE = 'w'

    var EMPTY = -1

    var PAWN = 'p'
    var KNIGHT = 'n'
    var BISHOP = 'b'
    var ROOK = 'r'
    var QUEEN = 'q'
    var KING = 'k'

    var SYMBOLS = 'pnbrqkPNBRQK'

    var DEFAULT_POSITION =
        'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

    var POSSIBLE_RESULTS = ['1-0', '0-1', '1/2-1/2', '*']

    var PAWN_OFFSETS = {
        b: [16, 32, 17, 15],
        w: [-16, -32, -17, -15]
    }

    var PIECE_OFFSETS = {
        n: [-18, -33, -31, -14, 18, 33, 31, 14],
        b: [-17, -15, 17, 15],
        r: [-16, 1, 16, -1],
        q: [-17, -16, -15, 1, 17, 16, 15, -1],
        k: [-17, -16, -15, 1, 17, 16, 15, -1]
    }

    // prettier-ignore
    var ATTACKS = [
        20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20, 0,
        0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
        0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
        0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
        0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
        24,24,24,24,24,24,56,  0, 56,24,24,24,24,24,24, 0,
        0, 0, 0, 0, 0, 2,53, 56, 53, 2, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,20, 2, 24,  2,20, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0,20, 0, 0, 24,  0, 0,20, 0, 0, 0, 0, 0,
        0, 0, 0,20, 0, 0, 0, 24,  0, 0, 0,20, 0, 0, 0, 0,
        0, 0,20, 0, 0, 0, 0, 24,  0, 0, 0, 0,20, 0, 0, 0,
        0,20, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0,20, 0, 0,
        20, 0, 0, 0, 0, 0, 0, 24,  0, 0, 0, 0, 0, 0,20
    ];

    // prettier-ignore
    var RAYS = [
        17,  0,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0,  0, 15, 0,
        0, 17,  0,  0,  0,  0,  0, 16,  0,  0,  0,  0,  0, 15,  0, 0,
        0,  0, 17,  0,  0,  0,  0, 16,  0,  0,  0,  0, 15,  0,  0, 0,
        0,  0,  0, 17,  0,  0,  0, 16,  0,  0,  0, 15,  0,  0,  0, 0,
        0,  0,  0,  0, 17,  0,  0, 16,  0,  0, 15,  0,  0,  0,  0, 0,
        0,  0,  0,  0,  0, 17,  0, 16,  0, 15,  0,  0,  0,  0,  0, 0,
        0,  0,  0,  0,  0,  0, 17, 16, 15,  0,  0,  0,  0,  0,  0, 0,
        1,  1,  1,  1,  1,  1,  1,  0, -1, -1,  -1,-1, -1, -1, -1, 0,
        0,  0,  0,  0,  0,  0,-15,-16,-17,  0,  0,  0,  0,  0,  0, 0,
        0,  0,  0,  0,  0,-15,  0,-16,  0,-17,  0,  0,  0,  0,  0, 0,
        0,  0,  0,  0,-15,  0,  0,-16,  0,  0,-17,  0,  0,  0,  0, 0,
        0,  0,  0,-15,  0,  0,  0,-16,  0,  0,  0,-17,  0,  0,  0, 0,
        0,  0,-15,  0,  0,  0,  0,-16,  0,  0,  0,  0,-17,  0,  0, 0,
        0,-15,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,-17,  0, 0,
        -15,  0,  0,  0,  0,  0,  0,-16,  0,  0,  0,  0,  0,  0,-17
    ];

    var SHIFTS = { p: 0, n: 1, b: 2, r: 3, q: 4, k: 5 }

    var FLAGS = {
        NORMAL: 'n',
        CAPTURE: 'c',
        BIG_PAWN: 'b',
        EP_CAPTURE: 'e',
        PROMOTION: 'p',
        KSIDE_CASTLE: 'k',
        QSIDE_CASTLE: 'q'
    }

    var BITS = {
        NORMAL: 1,
        CAPTURE: 2,
        BIG_PAWN: 4,
        EP_CAPTURE: 8,
        PROMOTION: 16,
        KSIDE_CASTLE: 32,
        QSIDE_CASTLE: 64
    }

    var RANK_1 = 7
    var RANK_2 = 6
    var RANK_3 = 5
    var RANK_4 = 4
    var RANK_5 = 3
    var RANK_6 = 2
    var RANK_7 = 1
    var RANK_8 = 0

    // prettier-ignore
    var SQUARES = {
        a8:   0, b8:   1, c8:   2, d8:   3, e8:   4, f8:   5, g8:   6, h8:   7,
        a7:  16, b7:  17, c7:  18, d7:  19, e7:  20, f7:  21, g7:  22, h7:  23,
        a6:  32, b6:  33, c6:  34, d6:  35, e6:  36, f6:  37, g6:  38, h6:  39,
        a5:  48, b5:  49, c5:  50, d5:  51, e5:  52, f5:  53, g5:  54, h5:  55,
        a4:  64, b4:  65, c4:  66, d4:  67, e4:  68, f4:  69, g4:  70, h4:  71,
        a3:  80, b3:  81, c3:  82, d3:  83, e3:  84, f3:  85, g3:  86, h3:  87,
        a2:  96, b2:  97, c2:  98, d2:  99, e2: 100, f2: 101, g2: 102, h2: 103,
        a1: 112, b1: 113, c1: 114, d1: 115, e1: 116, f1: 117, g1: 118, h1: 119
    };

    var ROOKS = {
        w: [
            { square: SQUARES.a1, flag: BITS.QSIDE_CASTLE },
            { square: SQUARES.h1, flag: BITS.KSIDE_CASTLE }
        ],
        b: [
            { square: SQUARES.a8, flag: BITS.QSIDE_CASTLE },
            { square: SQUARES.h8, flag: BITS.KSIDE_CASTLE }
        ]
    }

    var board = new Array(128)
    var kings = { w: EMPTY, b: EMPTY }
    var turn = WHITE
    var castling = { w: 0, b: 0 }
    var ep_square = EMPTY
    var half_moves = 0
    var move_number = 1
    var history = []
    var header = {}
    var comments = {}

    /* if the user passes in a fen string, load it, else default to
     * starting position
     */
    if (typeof fen === 'undefined') {
        load(DEFAULT_POSITION)
    } else {
        load(fen)
    }

    function clear(keep_headers) {
        if (typeof keep_headers === 'undefined') {
            keep_headers = false
        }

        board = new Array(128)
        kings = { w: EMPTY, b: EMPTY }
        turn = WHITE
        castling = { w: 0, b: 0 }
        ep_square = EMPTY
        half_moves = 0
        move_number = 1
        history = []
        if (!keep_headers) header = {}
        comments = {}
        update_setup(generate_fen())
    }

    function prune_comments() {
        var reversed_history = [];
        var current_comments = {};
        var copy_comment = function(fen) {
            if (fen in comments) {
                current_comments[fen] = comments[fen];
            }
        };
        while (history.length > 0) {
            reversed_history.push(undo_move());
        }
        copy_comment(generate_fen());
        while (reversed_history.length > 0) {
            make_move(reversed_history.pop());
            copy_comment(generate_fen());
        }
        comments = current_comments;
    }

    function reset() {
        load(DEFAULT_POSITION)
    }

    function load(fen, keep_headers) {
        if (typeof keep_headers === 'undefined') {
            keep_headers = false
        }

        var tokens = fen.split(/\s+/)
        var position = tokens[0]
        var square = 0

        if (!validate_fen(fen).valid) {
            return false
        }

        clear(keep_headers)

        for (var i = 0; i < position.length; i++) {
            var piece = position.charAt(i)

            if (piece === '/') {
                square += 8
            } else if (is_digit(piece)) {
                square += parseInt(piece, 10)
            } else {
                var color = piece < 'a' ? WHITE : BLACK
                put({ type: piece.toLowerCase(), color: color }, algebraic(square))
                square++
            }
        }

        turn = tokens[1]

        if (tokens[2].indexOf('K') > -1) {
            castling.w |= BITS.KSIDE_CASTLE
        }
        if (tokens[2].indexOf('Q') > -1) {
            castling.w |= BITS.QSIDE_CASTLE
        }
        if (tokens[2].indexOf('k') > -1) {
            castling.b |= BITS.KSIDE_CASTLE
        }
        if (tokens[2].indexOf('q') > -1) {
            castling.b |= BITS.QSIDE_CASTLE
        }

        ep_square = tokens[3] === '-' ? EMPTY : SQUARES[tokens[3]]
        half_moves = parseInt(tokens[4], 10)
        move_number = parseInt(tokens[5], 10)

        update_setup(generate_fen())

        return true
    }

    /* TODO: this function is pretty much crap - it validates structure but
     * completely ignores content (e.g. doesn't verify that each side has a king)
     * ... we should rewrite this, and ditch the silly error_number field while
     * we're at it
     */
    function validate_fen(fen) {
        var errors = {
            0: 'No errors.',
            1: 'FEN string must contain six space-delimited fields.',
            2: '6th field (move number) must be a positive integer.',
            3: '5th field (half move counter) must be a non-negative integer.',
            4: '4th field (en-passant square) is invalid.',
            5: '3rd field (castling availability) is invalid.',
            6: '2nd field (side to move) is invalid.',
            7: "1st field (piece positions) does not contain 8 '/'-delimited rows.",
            8: '1st field (piece positions) is invalid [consecutive numbers].',
            9: '1st field (piece positions) is invalid [invalid piece].',
            10: '1st field (piece positions) is invalid [row too large].',
            11: 'Illegal en-passant square'
        }

        /* 1st criterion: 6 space-seperated fields? */
        var tokens = fen.split(/\s+/)
        if (tokens.length !== 6) {
            return { valid: false, error_number: 1, error: errors[1] }
        }

        /* 2nd criterion: move number field is a integer value > 0? */
        if (isNaN(tokens[5]) || parseInt(tokens[5], 10) <= 0) {
            return { valid: false, error_number: 2, error: errors[2] }
        }

        /* 3rd criterion: half move counter is an integer >= 0? */
        if (isNaN(tokens[4]) || parseInt(tokens[4], 10) < 0) {
            return { valid: false, error_number: 3, error: errors[3] }
        }

        /* 4th criterion: 4th field is a valid e.p.-string? */
        if (!/^(-|[abcdefgh][36])$/.test(tokens[3])) {
            return { valid: false, error_number: 4, error: errors[4] }
        }

        /* 5th criterion: 3th field is a valid castle-string? */
        if (!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(tokens[2])) {
            return { valid: false, error_number: 5, error: errors[5] }
        }

        /* 6th criterion: 2nd field is "w" (white) or "b" (black)? */
        if (!/^(w|b)$/.test(tokens[1])) {
            return { valid: false, error_number: 6, error: errors[6] }
        }

        /* 7th criterion: 1st field contains 8 rows? */
        var rows = tokens[0].split('/')
        if (rows.length !== 8) {
            return { valid: false, error_number: 7, error: errors[7] }
        }

        /* 8th criterion: every row is valid? */
        for (var i = 0; i < rows.length; i++) {
            /* check for right sum of fields AND not two numbers in succession */
            var sum_fields = 0
            var previous_was_number = false

            for (var k = 0; k < rows[i].length; k++) {
                if (!isNaN(rows[i][k])) {
                    if (previous_was_number) {
                        return { valid: false, error_number: 8, error: errors[8] }
                    }
                    sum_fields += parseInt(rows[i][k], 10)
                    previous_was_number = true
                } else {
                    if (!/^[prnbqkPRNBQK]$/.test(rows[i][k])) {
                        return { valid: false, error_number: 9, error: errors[9] }
                    }
                    sum_fields += 1
                    previous_was_number = false
                }
            }
            if (sum_fields !== 8) {
                return { valid: false, error_number: 10, error: errors[10] }
            }
        }

        if (
            (tokens[3][1] == '3' && tokens[1] == 'w') ||
            (tokens[3][1] == '6' && tokens[1] == 'b')
        ) {
            return { valid: false, error_number: 11, error: errors[11] }
        }

        /* everything's okay! */
        return { valid: true, error_number: 0, error: errors[0] }
    }

    function generate_fen() {
        var empty = 0
        var fen = ''

        for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
            if (board[i] == null) {
                empty++
            } else {
                if (empty > 0) {
                    fen += empty
                    empty = 0
                }
                var color = board[i].color
                var piece = board[i].type

                fen += color === WHITE ? piece.toUpperCase() : piece.toLowerCase()
            }

            if ((i + 1) & 0x88) {
                if (empty > 0) {
                    fen += empty
                }

                if (i !== SQUARES.h1) {
                    fen += '/'
                }

                empty = 0
                i += 8
            }
        }

        var cflags = ''
        if (castling[WHITE] & BITS.KSIDE_CASTLE) {
            cflags += 'K'
        }
        if (castling[WHITE] & BITS.QSIDE_CASTLE) {
            cflags += 'Q'
        }
        if (castling[BLACK] & BITS.KSIDE_CASTLE) {
            cflags += 'k'
        }
        if (castling[BLACK] & BITS.QSIDE_CASTLE) {
            cflags += 'q'
        }

        /* do we have an empty castling flag? */
        cflags = cflags || '-'
        var epflags = ep_square === EMPTY ? '-' : algebraic(ep_square)

        return [fen, turn, cflags, epflags, half_moves, move_number].join(' ')
    }

    function set_header(args) {
        for (var i = 0; i < args.length; i += 2) {
            if (typeof args[i] === 'string' && typeof args[i + 1] === 'string') {
                header[args[i]] = args[i + 1]
            }
        }
        return header
    }

    /* called when the initial board setup is changed with put() or remove().
     * modifies the SetUp and FEN properties of the header object.  if the FEN is
     * equal to the default position, the SetUp and FEN are deleted
     * the setup is only updated if history.length is zero, ie moves haven't been
     * made.
     */
    function update_setup(fen) {
        if (history.length > 0) return

        if (fen !== DEFAULT_POSITION) {
            header['SetUp'] = '1'
            header['FEN'] = fen
        } else {
            delete header['SetUp']
            delete header['FEN']
        }
    }

    function get(square) {
        var piece = board[SQUARES[square]]
        return piece ? { type: piece.type, color: piece.color } : null
    }

    function put(piece, square) {
        /* check for valid piece object */
        if (!('type' in piece && 'color' in piece)) {
            return false
        }

        /* check for piece */
        if (SYMBOLS.indexOf(piece.type.toLowerCase()) === -1) {
            return false
        }

        /* check for valid square */
        if (!(square in SQUARES)) {
            return false
        }

        var sq = SQUARES[square]

        /* don't let the user place more than one king */
        if (
            piece.type == KING &&
            !(kings[piece.color] == EMPTY || kings[piece.color] == sq)
        ) {
            return false
        }

        board[sq] = { type: piece.type, color: piece.color }
        if (piece.type === KING) {
            kings[piece.color] = sq
        }

        update_setup(generate_fen())

        return true
    }

    function remove(square) {
        var piece = get(square)
        board[SQUARES[square]] = null
        if (piece && piece.type === KING) {
            kings[piece.color] = EMPTY
        }

        update_setup(generate_fen())

        return piece
    }

    function build_move(board, from, to, flags, promotion) {
        var move = {
            color: turn,
            from: from,
            to: to,
            flags: flags,
            piece: board[from].type
        }

        if (promotion) {
            move.flags |= BITS.PROMOTION
            move.promotion = promotion
        }

        if (board[to]) {
            move.captured = board[to].type
        } else if (flags & BITS.EP_CAPTURE) {
            move.captured = PAWN
        }
        return move
    }

    function generate_moves(options) {
        function add_move(board, moves, from, to, flags) {
            /* if pawn promotion */
            if (
                board[from].type === PAWN &&
                (rank(to) === RANK_8 || rank(to) === RANK_1)
            ) {
                var pieces = [QUEEN, ROOK, BISHOP, KNIGHT]
                for (var i = 0, len = pieces.length; i < len; i++) {
                    moves.push(build_move(board, from, to, flags, pieces[i]))
                }
            } else {
                moves.push(build_move(board, from, to, flags))
            }
        }

        var moves = []
        var us = turn
        var them = swap_color(us)
        var second_rank = { b: RANK_7, w: RANK_2 }

        var first_sq = SQUARES.a8
        var last_sq = SQUARES.h1
        var single_square = false

        /* do we want legal moves? */
        var legal =
            typeof options !== 'undefined' && 'legal' in options
                ? options.legal
                : true

        /* are we generating moves for a single square? */
        if (typeof options !== 'undefined' && 'square' in options) {
            if (options.square in SQUARES) {
                first_sq = last_sq = SQUARES[options.square]
                single_square = true
            } else {
                /* invalid square */
                return []
            }
        }

        for (var i = first_sq; i <= last_sq; i++) {
            /* did we run off the end of the board */
            if (i & 0x88) {
                i += 7
                continue
            }

            var piece = board[i]
            if (piece == null || piece.color !== us) {
                continue
            }

            if (piece.type === PAWN) {
                /* single square, non-capturing */
                var square = i + PAWN_OFFSETS[us][0]
                if (board[square] == null) {
                    add_move(board, moves, i, square, BITS.NORMAL)

                    /* double square */
                    var square = i + PAWN_OFFSETS[us][1]
                    if (second_rank[us] === rank(i) && board[square] == null) {
                        add_move(board, moves, i, square, BITS.BIG_PAWN)
                    }
                }

                /* pawn captures */
                for (j = 2; j < 4; j++) {
                    var square = i + PAWN_OFFSETS[us][j]
                    if (square & 0x88) continue

                    if (board[square] != null && board[square].color === them) {
                        add_move(board, moves, i, square, BITS.CAPTURE)
                    } else if (square === ep_square) {
                        add_move(board, moves, i, ep_square, BITS.EP_CAPTURE)
                    }
                }
            } else {
                for (var j = 0, len = PIECE_OFFSETS[piece.type].length; j < len; j++) {
                    var offset = PIECE_OFFSETS[piece.type][j]
                    var square = i

                    while (true) {
                        square += offset
                        if (square & 0x88) break

                        if (board[square] == null) {
                            add_move(board, moves, i, square, BITS.NORMAL)
                        } else {
                            if (board[square].color === us) break
                            add_move(board, moves, i, square, BITS.CAPTURE)
                            break
                        }

                        /* break, if knight or king */
                        if (piece.type === 'n' || piece.type === 'k') break
                    }
                }
            }
        }

        /* check for castling if: a) we're generating all moves, or b) we're doing
         * single square move generation on the king's square
         */
        if (!single_square || last_sq === kings[us]) {
            /* king-side castling */
            if (castling[us] & BITS.KSIDE_CASTLE) {
                var castling_from = kings[us]
                var castling_to = castling_from + 2

                if (
                    board[castling_from + 1] == null &&
                    board[castling_to] == null &&
                    !attacked(them, kings[us]) &&
                    !attacked(them, castling_from + 1) &&
                    !attacked(them, castling_to)
                ) {
                    add_move(board, moves, kings[us], castling_to, BITS.KSIDE_CASTLE)
                }
            }

            /* queen-side castling */
            if (castling[us] & BITS.QSIDE_CASTLE) {
                var castling_from = kings[us]
                var castling_to = castling_from - 2

                if (
                    board[castling_from - 1] == null &&
                    board[castling_from - 2] == null &&
                    board[castling_from - 3] == null &&
                    !attacked(them, kings[us]) &&
                    !attacked(them, castling_from - 1) &&
                    !attacked(them, castling_to)
                ) {
                    add_move(board, moves, kings[us], castling_to, BITS.QSIDE_CASTLE)
                }
            }
        }

        /* return all pseudo-legal moves (this includes moves that allow the king
         * to be captured)
         */
        if (!legal) {
            return moves
        }

        /* filter out illegal moves */
        var legal_moves = []
        for (var i = 0, len = moves.length; i < len; i++) {
            make_move(moves[i])
            if (!king_attacked(us)) {
                legal_moves.push(moves[i])
            }
            undo_move()
        }

        return legal_moves
    }

    /* convert a move from 0x88 coordinates to Standard Algebraic Notation
     * (SAN)
     *
     * @param {boolean} sloppy Use the sloppy SAN generator to work around over
     * disambiguation bugs in Fritz and Chessbase.  See below:
     *
     * r1bqkbnr/ppp2ppp/2n5/1B1pP3/4P3/8/PPPP2PP/RNBQK1NR b KQkq - 2 4
     * 4. ... Nge7 is overly disambiguated because the knight on c6 is pinned
     * 4. ... Ne7 is technically the valid SAN
     */
    function move_to_san(move, sloppy) {
        var output = ''

        if (move.flags & BITS.KSIDE_CASTLE) {
            output = 'O-O'
        } else if (move.flags & BITS.QSIDE_CASTLE) {
            output = 'O-O-O'
        } else {
            var disambiguator = get_disambiguator(move, sloppy)

            if (move.piece !== PAWN) {
                output += move.piece.toUpperCase() + disambiguator
            }

            if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
                if (move.piece === PAWN) {
                    output += algebraic(move.from)[0]
                }
                output += 'x'
            }

            output += algebraic(move.to)

            if (move.flags & BITS.PROMOTION) {
                output += '=' + move.promotion.toUpperCase()
            }
        }

        make_move(move)
        if (in_check()) {
            if (in_checkmate()) {
                output += '#'
            } else {
                output += '+'
            }
        }
        undo_move()

        return output
    }

    // parses all of the decorators out of a SAN string
    function stripped_san(move) {
        return move.replace(/=/, '').replace(/[+#]?[?!]*$/, '')
    }

    function attacked(color, square) {
        for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
            /* did we run off the end of the board */
            if (i & 0x88) {
                i += 7
                continue
            }

            /* if empty square or wrong color */
            if (board[i] == null || board[i].color !== color) continue

            var piece = board[i]
            var difference = i - square
            var index = difference + 119

            if (ATTACKS[index] & (1 << SHIFTS[piece.type])) {
                if (piece.type === PAWN) {
                    if (difference > 0) {
                        if (piece.color === WHITE) return true
                    } else {
                        if (piece.color === BLACK) return true
                    }
                    continue
                }

                /* if the piece is a knight or a king */
                if (piece.type === 'n' || piece.type === 'k') return true

                var offset = RAYS[index]
                var j = i + offset

                var blocked = false
                while (j !== square) {
                    if (board[j] != null) {
                        blocked = true
                        break
                    }
                    j += offset
                }

                if (!blocked) return true
            }
        }

        return false
    }

    function king_attacked(color) {
        return attacked(swap_color(color), kings[color])
    }

    function in_check() {
        return king_attacked(turn)
    }

    function in_checkmate() {
        return in_check() && generate_moves().length === 0
    }

    function in_stalemate() {
        return !in_check() && generate_moves().length === 0
    }

    function insufficient_material() {
        var pieces = {}
        var bishops = []
        var num_pieces = 0
        var sq_color = 0

        for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
            sq_color = (sq_color + 1) % 2
            if (i & 0x88) {
                i += 7
                continue
            }

            var piece = board[i]
            if (piece) {
                pieces[piece.type] = piece.type in pieces ? pieces[piece.type] + 1 : 1
                if (piece.type === BISHOP) {
                    bishops.push(sq_color)
                }
                num_pieces++
            }
        }

        /* k vs. k */
        if (num_pieces === 2) {
            return true
        } else if (
            /* k vs. kn .... or .... k vs. kb */
            num_pieces === 3 &&
            (pieces[BISHOP] === 1 || pieces[KNIGHT] === 1)
        ) {
            return true
        } else if (num_pieces === pieces[BISHOP] + 2) {
            /* kb vs. kb where any number of bishops are all on the same color */
            var sum = 0
            var len = bishops.length
            for (var i = 0; i < len; i++) {
                sum += bishops[i]
            }
            if (sum === 0 || sum === len) {
                return true
            }
        }

        return false
    }

    function in_threefold_repetition() {
        /* TODO: while this function is fine for casual use, a better
         * implementation would use a Zobrist key (instead of FEN). the
         * Zobrist key would be maintained in the make_move/undo_move functions,
         * avoiding the costly that we do below.
         */
        var moves = []
        var positions = {}
        var repetition = false

        while (true) {
            var move = undo_move()
            if (!move) break
            moves.push(move)
        }

        while (true) {
            /* remove the last two fields in the FEN string, they're not needed
             * when checking for draw by rep */
            var fen = generate_fen()
                .split(' ')
                .slice(0, 4)
                .join(' ')

            /* has the position occurred three or move times */
            positions[fen] = fen in positions ? positions[fen] + 1 : 1
            if (positions[fen] >= 3) {
                repetition = true
            }

            if (!moves.length) {
                break
            }
            make_move(moves.pop())
        }

        return repetition
    }

    function push(move) {
        history.push({
            move: move,
            kings: { b: kings.b, w: kings.w },
            turn: turn,
            castling: { b: castling.b, w: castling.w },
            ep_square: ep_square,
            half_moves: half_moves,
            move_number: move_number
        })
    }

    function make_move(move) {
        var us = turn
        var them = swap_color(us)
        push(move)

        board[move.to] = board[move.from]
        board[move.from] = null

        /* if ep capture, remove the captured pawn */
        if (move.flags & BITS.EP_CAPTURE) {
            if (turn === BLACK) {
                board[move.to - 16] = null
            } else {
                board[move.to + 16] = null
            }
        }

        /* if pawn promotion, replace with new piece */
        if (move.flags & BITS.PROMOTION) {
            board[move.to] = { type: move.promotion, color: us }
        }

        /* if we moved the king */
        if (board[move.to].type === KING) {
            kings[board[move.to].color] = move.to

            /* if we castled, move the rook next to the king */
            if (move.flags & BITS.KSIDE_CASTLE) {
                var castling_to = move.to - 1
                var castling_from = move.to + 1
                board[castling_to] = board[castling_from]
                board[castling_from] = null
            } else if (move.flags & BITS.QSIDE_CASTLE) {
                var castling_to = move.to + 1
                var castling_from = move.to - 2
                board[castling_to] = board[castling_from]
                board[castling_from] = null
            }

            /* turn off castling */
            castling[us] = ''
        }

        /* turn off castling if we move a rook */
        if (castling[us]) {
            for (var i = 0, len = ROOKS[us].length; i < len; i++) {
                if (
                    move.from === ROOKS[us][i].square &&
                    castling[us] & ROOKS[us][i].flag
                ) {
                    castling[us] ^= ROOKS[us][i].flag
                    break
                }
            }
        }

        /* turn off castling if we capture a rook */
        if (castling[them]) {
            for (var i = 0, len = ROOKS[them].length; i < len; i++) {
                if (
                    move.to === ROOKS[them][i].square &&
                    castling[them] & ROOKS[them][i].flag
                ) {
                    castling[them] ^= ROOKS[them][i].flag
                    break
                }
            }
        }

        /* if big pawn move, update the en passant square */
        if (move.flags & BITS.BIG_PAWN) {
            if (turn === 'b') {
                ep_square = move.to - 16
            } else {
                ep_square = move.to + 16
            }
        } else {
            ep_square = EMPTY
        }

        /* reset the 50 move counter if a pawn is moved or a piece is captured */
        if (move.piece === PAWN) {
            half_moves = 0
        } else if (move.flags & (BITS.CAPTURE | BITS.EP_CAPTURE)) {
            half_moves = 0
        } else {
            half_moves++
        }

        if (turn === BLACK) {
            move_number++
        }
        turn = swap_color(turn)
    }

    function undo_move() {
        var old = history.pop()
        if (old == null) {
            return null
        }

        var move = old.move
        kings = old.kings
        turn = old.turn
        castling = old.castling
        ep_square = old.ep_square
        half_moves = old.half_moves
        move_number = old.move_number

        var us = turn
        var them = swap_color(turn)

        board[move.from] = board[move.to]
        board[move.from].type = move.piece // to undo any promotions
        board[move.to] = null

        if (move.flags & BITS.CAPTURE) {
            board[move.to] = { type: move.captured, color: them }
        } else if (move.flags & BITS.EP_CAPTURE) {
            var index
            if (us === BLACK) {
                index = move.to - 16
            } else {
                index = move.to + 16
            }
            board[index] = { type: PAWN, color: them }
        }

        if (move.flags & (BITS.KSIDE_CASTLE | BITS.QSIDE_CASTLE)) {
            var castling_to, castling_from
            if (move.flags & BITS.KSIDE_CASTLE) {
                castling_to = move.to + 1
                castling_from = move.to - 1
            } else if (move.flags & BITS.QSIDE_CASTLE) {
                castling_to = move.to - 2
                castling_from = move.to + 1
            }

            board[castling_to] = board[castling_from]
            board[castling_from] = null
        }

        return move
    }

    /* this function is used to uniquely identify ambiguous moves */
    function get_disambiguator(move, sloppy) {
        var moves = generate_moves({ legal: !sloppy })

        var from = move.from
        var to = move.to
        var piece = move.piece

        var ambiguities = 0
        var same_rank = 0
        var same_file = 0

        for (var i = 0, len = moves.length; i < len; i++) {
            var ambig_from = moves[i].from
            var ambig_to = moves[i].to
            var ambig_piece = moves[i].piece

            /* if a move of the same piece type ends on the same to square, we'll
             * need to add a disambiguator to the algebraic notation
             */
            if (piece === ambig_piece && from !== ambig_from && to === ambig_to) {
                ambiguities++

                if (rank(from) === rank(ambig_from)) {
                    same_rank++
                }

                if (file(from) === file(ambig_from)) {
                    same_file++
                }
            }
        }

        if (ambiguities > 0) {
            /* if there exists a similar moving piece on the same rank and file as
             * the move in question, use the square as the disambiguator
             */
            if (same_rank > 0 && same_file > 0) {
                return algebraic(from)
            } else if (same_file > 0) {
                /* if the moving piece rests on the same file, use the rank symbol as the
                 * disambiguator
                 */
                return algebraic(from).charAt(1)
            } else {
                /* else use the file symbol */
                return algebraic(from).charAt(0)
            }
        }

        return ''
    }

    function ascii() {
        var s = '   +------------------------+\n'
        for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
            /* display the rank */
            if (file(i) === 0) {
                s += ' ' + '87654321'[rank(i)] + ' |'
            }

            /* empty piece */
            if (board[i] == null) {
                s += ' . '
            } else {
                var piece = board[i].type
                var color = board[i].color
                var symbol = color === WHITE ? piece.toUpperCase() : piece.toLowerCase()
                s += ' ' + symbol + ' '
            }

            if ((i + 1) & 0x88) {
                s += '|\n'
                i += 8
            }
        }
        s += '   +------------------------+\n'
        s += '     a  b  c  d  e  f  g  h\n'

        return s
    }

    // convert a move from Standard Algebraic Notation (SAN) to 0x88 coordinates
    function move_from_san(move, sloppy) {
        // strip off any move decorations: e.g Nf3+?!
        var clean_move = stripped_san(move)

        // if we're using the sloppy parser run a regex to grab piece, to, and from
        // this should parse invalid SAN like: Pe2-e4, Rc1c4, Qf3xf7
        if (sloppy) {
            var matches = clean_move.match(
                /([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/
            )
            if (matches) {
                var piece = matches[1]
                var from = matches[2]
                var to = matches[3]
                var promotion = matches[4]
            }
        }

        var moves = generate_moves()
        for (var i = 0, len = moves.length; i < len; i++) {
            // try the strict parser first, then the sloppy parser if requested
            // by the user
            if (
                clean_move === stripped_san(move_to_san(moves[i])) ||
                (sloppy && clean_move === stripped_san(move_to_san(moves[i], true)))
            ) {
                return moves[i]
            } else {
                if (
                    matches &&
                    (!piece || piece.toLowerCase() == moves[i].piece) &&
                    SQUARES[from] == moves[i].from &&
                    SQUARES[to] == moves[i].to &&
                    (!promotion || promotion.toLowerCase() == moves[i].promotion)
                ) {
                    return moves[i]
                }
            }
        }

        return null
    }

    /*****************************************************************************
     * UTILITY FUNCTIONS
     ****************************************************************************/
    function rank(i) {
        return i >> 4
    }

    function file(i) {
        return i & 15
    }

    function algebraic(i) {
        var f = file(i),
            r = rank(i)
        return 'abcdefgh'.substring(f, f + 1) + '87654321'.substring(r, r + 1)
    }

    function swap_color(c) {
        return c === WHITE ? BLACK : WHITE
    }

    function is_digit(c) {
        return '0123456789'.indexOf(c) !== -1
    }

    /* pretty = external move object */
    function make_pretty(ugly_move) {
        var move = clone(ugly_move)
        move.san = move_to_san(move, false)
        move.to = algebraic(move.to)
        move.from = algebraic(move.from)

        var flags = ''

        for (var flag in BITS) {
            if (BITS[flag] & move.flags) {
                flags += FLAGS[flag]
            }
        }
        move.flags = flags

        return move
    }

    function clone(obj) {
        var dupe = obj instanceof Array ? [] : {}

        for (var property in obj) {
            if (typeof property === 'object') {
                dupe[property] = clone(obj[property])
            } else {
                dupe[property] = obj[property]
            }
        }

        return dupe
    }

    function trim(str) {
        return str.replace(/^\s+|\s+$/g, '')
    }

    /*****************************************************************************
     * DEBUGGING UTILITIES
     ****************************************************************************/
    function perft(depth) {
        var moves = generate_moves({ legal: false })
        var nodes = 0
        var color = turn

        for (var i = 0, len = moves.length; i < len; i++) {
            make_move(moves[i])
            if (!king_attacked(color)) {
                if (depth - 1 > 0) {
                    var child_nodes = perft(depth - 1)
                    nodes += child_nodes
                } else {
                    nodes++
                }
            }
            undo_move()
        }

        return nodes
    }

    return {
        /***************************************************************************
         * PUBLIC CONSTANTS (is there a better way to do this?)
         **************************************************************************/
        WHITE: WHITE,
        BLACK: BLACK,
        PAWN: PAWN,
        KNIGHT: KNIGHT,
        BISHOP: BISHOP,
        ROOK: ROOK,
        QUEEN: QUEEN,
        KING: KING,
        SQUARES: (function() {
            /* from the ECMA-262 spec (section 12.6.4):
             * "The mechanics of enumerating the properties ... is
             * implementation dependent"
             * so: for (var sq in SQUARES) { keys.push(sq); } might not be
             * ordered correctly
             */
            var keys = []
            for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
                if (i & 0x88) {
                    i += 7
                    continue
                }
                keys.push(algebraic(i))
            }
            return keys
        })(),
        FLAGS: FLAGS,

        /***************************************************************************
         * PUBLIC API
         **************************************************************************/
        load: function(fen) {
            return load(fen)
        },

        reset: function() {
            return reset()
        },

        moves: function(options) {
            /* The internal representation of a chess move is in 0x88 format, and
             * not meant to be human-readable.  The code below converts the 0x88
             * square coordinates to algebraic coordinates.  It also prunes an
             * unnecessary move keys resulting from a verbose call.
             */

            var ugly_moves = generate_moves(options)
            var moves = []

            for (var i = 0, len = ugly_moves.length; i < len; i++) {
                /* does the user want a full move object (most likely not), or just
                 * SAN
                 */
                if (
                    typeof options !== 'undefined' &&
                    'verbose' in options &&
                    options.verbose
                ) {
                    moves.push(make_pretty(ugly_moves[i]))
                } else {
                    moves.push(move_to_san(ugly_moves[i], false))
                }
            }

            return moves
        },

        in_check: function() {
            return in_check()
        },

        in_checkmate: function() {
            return in_checkmate()
        },

        in_stalemate: function() {
            return in_stalemate()
        },

        in_draw: function() {
            return (
                half_moves >= 100 ||
                in_stalemate() ||
                insufficient_material() ||
                in_threefold_repetition()
            )
        },

        insufficient_material: function() {
            return insufficient_material()
        },

        in_threefold_repetition: function() {
            return in_threefold_repetition()
        },

        game_over: function() {
            return (
                half_moves >= 100 ||
                in_checkmate() ||
                in_stalemate() ||
                insufficient_material() ||
                in_threefold_repetition()
            )
        },

        validate_fen: function(fen) {
            return validate_fen(fen)
        },

        fen: function() {
            return generate_fen()
        },

        board: function() {
            var output = [],
                row = []

            for (var i = SQUARES.a8; i <= SQUARES.h1; i++) {
                if (board[i] == null) {
                    row.push(null)
                } else {
                    row.push({ type: board[i].type, color: board[i].color })
                }
                if ((i + 1) & 0x88) {
                    output.push(row)
                    row = []
                    i += 8
                }
            }

            return output
        },

        pgn: function(options) {
            /* using the specification from http://www.chessclub.com/help/PGN-spec
             * example for html usage: .pgn({ max_width: 72, newline_char: "<br />" })
             */
            var newline =
                typeof options === 'object' && typeof options.newline_char === 'string'
                    ? options.newline_char
                    : '\n'
            var max_width =
                typeof options === 'object' && typeof options.max_width === 'number'
                    ? options.max_width
                    : 0
            var result = []
            var header_exists = false

            /* add the PGN header headerrmation */
            for (var i in header) {
                /* TODO: order of enumerated properties in header object is not
                 * guaranteed, see ECMA-262 spec (section 12.6.4)
                 */
                result.push('[' + i + ' "' + header[i] + '"]' + newline)
                header_exists = true
            }

            if (header_exists && history.length) {
                result.push(newline)
            }

            var append_comment = function(move_string) {
                var comment = comments[generate_fen()]
                if (typeof comment !== 'undefined') {
                    var delimiter = move_string.length > 0 ? ' ' : '';
                    move_string = `${move_string}${delimiter}{${comment}}`
                }
                return move_string
            }

            /* pop all of history onto reversed_history */
            var reversed_history = []
            while (history.length > 0) {
                reversed_history.push(undo_move())
            }

            var moves = []
            var move_string = ''

            /* special case of a commented starting position with no moves */
            if (reversed_history.length === 0) {
                moves.push(append_comment(''))
            }

            /* build the list of moves.  a move_string looks like: "3. e3 e6" */
            while (reversed_history.length > 0) {
                move_string = append_comment(move_string)
                var move = reversed_history.pop()

                /* if the position started with black to move, start PGN with 1. ... */
                if (!history.length && move.color === 'b') {
                    move_string = move_number + '. ...'
                } else if (move.color === 'w') {
                    /* store the previous generated move_string if we have one */
                    if (move_string.length) {
                        moves.push(move_string)
                    }
                    move_string = move_number + '.'
                }

                move_string = move_string + ' ' + move_to_san(move, false)
                make_move(move)
            }

            /* are there any other leftover moves? */
            if (move_string.length) {
                moves.push(append_comment(move_string))
            }

            /* is there a result? */
            if (typeof header.Result !== 'undefined') {
                moves.push(header.Result)
            }

            /* history should be back to what it was before we started generating PGN,
             * so join together moves
             */
            if (max_width === 0) {
                return result.join('') + moves.join(' ')
            }

            var strip = function() {
                if (result.length > 0 && result[result.length - 1] === ' ') {
                    result.pop();
                    return true;
                }
                return false;
            };

            /* NB: this does not preserve comment whitespace. */
            var wrap_comment = function(width, move) {
                for (var token of move.split(' ')) {
                    if (!token) {
                        continue;
                    }
                    if (width + token.length > max_width) {
                        while (strip()) {
                            width--;
                        }
                        result.push(newline);
                        width = 0;
                    }
                    result.push(token);
                    width += token.length;
                    result.push(' ');
                    width++;
                }
                if (strip()) {
                    width--;
                }
                return width;
            };

            /* wrap the PGN output at max_width */
            var current_width = 0
            for (var i = 0; i < moves.length; i++) {
                if (current_width + moves[i].length > max_width) {
                    if (moves[i].includes('{')) {
                        current_width = wrap_comment(current_width, moves[i]);
                        continue;
                    }
                }
                /* if the current move will push past max_width */
                if (current_width + moves[i].length > max_width && i !== 0) {
                    /* don't end the line with whitespace */
                    if (result[result.length - 1] === ' ') {
                        result.pop()
                    }

                    result.push(newline)
                    current_width = 0
                } else if (i !== 0) {
                    result.push(' ')
                    current_width++
                }
                result.push(moves[i])
                current_width += moves[i].length
            }

            return result.join('')
        },

        load_pgn: function(pgn, options) {
            // allow the user to specify the sloppy move parser to work around over
            // disambiguation bugs in Fritz and Chessbase
            var sloppy =
                typeof options !== 'undefined' && 'sloppy' in options
                    ? options.sloppy
                    : false

            function mask(str) {
                return str.replace(/\\/g, '\\')
            }

            function has_keys(object) {
                for (var key in object) {
                    return true
                }
                return false
            }

            function parse_pgn_header(header, options) {
                var newline_char =
                    typeof options === 'object' &&
                    typeof options.newline_char === 'string'
                        ? options.newline_char
                        : '\r?\n'
                var header_obj = {}
                var headers = header.split(new RegExp(mask(newline_char)))
                var key = ''
                var value = ''

                for (var i = 0; i < headers.length; i++) {
                    key = headers[i].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/, '$1')
                    value = headers[i].replace(/^\[[A-Za-z]+\s"(.*)"\ *\]$/, '$1')
                    if (trim(key).length > 0) {
                        header_obj[key] = value
                    }
                }

                return header_obj
            }

            var newline_char =
                typeof options === 'object' && typeof options.newline_char === 'string'
                    ? options.newline_char
                    : '\r?\n'

            // RegExp to split header. Takes advantage of the fact that header and movetext
            // will always have a blank line between them (ie, two newline_char's).
            // With default newline_char, will equal: /^(\[((?:\r?\n)|.)*\])(?:\r?\n){2}/
            var header_regex = new RegExp(
                '^(\\[((?:' +
                mask(newline_char) +
                ')|.)*\\])' +
                '(?:' +
                mask(newline_char) +
                '){2}'
            )

            // If no header given, begin with moves.
            var header_string = header_regex.test(pgn)
                ? header_regex.exec(pgn)[1]
                : ''

            // Put the board in the starting position
            reset()

            /* parse PGN header */
            var headers = parse_pgn_header(header_string, options)
            for (var key in headers) {
                set_header([key, headers[key]])
            }

            /* load the starting position indicated by [Setup '1'] and
             * [FEN position] */
            if (headers['SetUp'] === '1') {
                if (!('FEN' in headers && load(headers['FEN'], true))) {
                    // second argument to load: don't clear the headers
                    return false
                }
            }

            /* NB: the regexes below that delete move numbers, recursive
             * annotations, and numeric annotation glyphs may also match
             * text in comments. To prevent this, we transform comments
             * by hex-encoding them in place and decoding them again after
             * the other tokens have been deleted.
             *
             * While the spec states that PGN files should be ASCII encoded,
             * we use {en,de}codeURIComponent here to support arbitrary UTF8
             * as a convenience for modern users */

            var to_hex = function(string) {
                return Array
                    .from(string)
                    .map(function(c) {
                        /* encodeURI doesn't transform most ASCII characters,
                         * so we handle these ourselves */
                        return c.charCodeAt(0) < 128
                            ? c.charCodeAt(0).toString(16)
                            : encodeURIComponent(c).replace(/\%/g, '').toLowerCase()
                    })
                    .join('')
            }

            var from_hex = function(string) {
                return string.length == 0
                    ? ''
                    : decodeURIComponent('%' + string.match(/.{1,2}/g).join('%'))
            }

            var encode_comment = function(string) {
                string = string.replace(new RegExp(mask(newline_char), 'g'), ' ')
                return `{${to_hex(string.slice(1, string.length - 1))}}`
            }

            var decode_comment = function(string) {
                if (string.startsWith('{') && string.endsWith('}')) {
                    return from_hex(string.slice(1, string.length - 1))
                }
            }

            /* delete header to get the moves */
            var ms = pgn
                .replace(header_string, '')
                .replace(
                    /* encode comments so they don't get deleted below */
                    new RegExp(`(\{[^}]*\})+?|;([^${mask(newline_char)}]*)`, 'g'),
                    function(match, bracket, semicolon) {
                        return bracket !== undefined
                            ? encode_comment(bracket)
                            : ' ' + encode_comment(`{${semicolon.slice(1)}}`)
                    }
                )
                .replace(new RegExp(mask(newline_char), 'g'), ' ')

            /* delete recursive annotation variations */
            var rav_regex = /(\([^\(\)]+\))+?/g
            while (rav_regex.test(ms)) {
                ms = ms.replace(rav_regex, '')
            }

            /* delete move numbers */
            ms = ms.replace(/\d+\.(\.\.)?/g, '')

            /* delete ... indicating black to move */
            ms = ms.replace(/\.\.\./g, '')

            /* delete numeric annotation glyphs */
            ms = ms.replace(/\$\d+/g, '')

            /* trim and get array of moves */
            var moves = trim(ms).split(new RegExp(/\s+/))

            /* delete empty entries */
            moves = moves
                .join(',')
                .replace(/,,+/g, ',')
                .split(',')
            var move = ''

            for (var half_move = 0; half_move < moves.length - 1; half_move++) {
                var comment = decode_comment(moves[half_move])
                if (comment !== undefined) {
                    comments[generate_fen()] = comment
                    continue
                }
                move = move_from_san(moves[half_move], sloppy)

                /* move not possible! (don't clear the board to examine to show the
                 * latest valid position)
                 */
                if (move == null) {
                    return false
                } else {
                    make_move(move)
                }
            }

            comment = decode_comment(moves[moves.length - 1])
            if (comment !== undefined) {
                comments[generate_fen()] = comment
                moves.pop()
            }

            /* examine last move */
            move = moves[moves.length - 1]
            if (POSSIBLE_RESULTS.indexOf(move) > -1) {
                if (has_keys(header) && typeof header.Result === 'undefined') {
                    set_header(['Result', move])
                }
            } else {
                move = move_from_san(move, sloppy)
                if (move == null) {
                    return false
                } else {
                    make_move(move)
                }
            }
            return true
        },

        header: function() {
            return set_header(arguments)
        },

        ascii: function() {
            return ascii()
        },

        turn: function() {
            return turn
        },

        move: function(move, options) {
            /* The move function can be called with in the following parameters:
             *
             * .move('Nxb7')      <- where 'move' is a case-sensitive SAN string
             *
             * .move({ from: 'h7', <- where the 'move' is a move object (additional
             *         to :'h8',      fields are ignored)
             *         promotion: 'q',
             *      })
             */

            // allow the user to specify the sloppy move parser to work around over
            // disambiguation bugs in Fritz and Chessbase
            var sloppy =
                typeof options !== 'undefined' && 'sloppy' in options
                    ? options.sloppy
                    : false

            var move_obj = null

            if (typeof move === 'string') {
                move_obj = move_from_san(move, sloppy)
            } else if (typeof move === 'object') {
                var moves = generate_moves()

                /* convert the pretty move object to an ugly move object */
                for (var i = 0, len = moves.length; i < len; i++) {
                    if (
                        move.from === algebraic(moves[i].from) &&
                        move.to === algebraic(moves[i].to) &&
                        (!('promotion' in moves[i]) ||
                            move.promotion === moves[i].promotion)
                    ) {
                        move_obj = moves[i]
                        break
                    }
                }
            }

            /* failed to find move */
            if (!move_obj) {
                return null
            }

            /* need to make a copy of move because we can't generate SAN after the
             * move is made
             */
            var pretty_move = make_pretty(move_obj)

            make_move(move_obj)

            return pretty_move
        },

        undo: function() {
            var move = undo_move()
            return move ? make_pretty(move) : null
        },

        clear: function() {
            return clear()
        },

        put: function(piece, square) {
            return put(piece, square)
        },

        get: function(square) {
            return get(square)
        },

        remove: function(square) {
            return remove(square)
        },

        perft: function(depth) {
            return perft(depth)
        },

        square_color: function(square) {
            if (square in SQUARES) {
                var sq_0x88 = SQUARES[square]
                return (rank(sq_0x88) + file(sq_0x88)) % 2 === 0 ? 'light' : 'dark'
            }

            return null
        },

        history: function(options) {
            var reversed_history = []
            var move_history = []
            var verbose =
                typeof options !== 'undefined' &&
                'verbose' in options &&
                options.verbose

            while (history.length > 0) {
                reversed_history.push(undo_move())
            }

            while (reversed_history.length > 0) {
                var move = reversed_history.pop()
                if (verbose) {
                    move_history.push(make_pretty(move))
                } else {
                    move_history.push(move_to_san(move))
                }
                make_move(move)
            }

            return move_history
        },

        get_comment: function() {
            return comments[generate_fen()];
        },

        set_comment: function(comment) {
            comments[generate_fen()] = comment.replace('{', '[').replace('}', ']');
        },

        delete_comment: function() {
            var comment = comments[generate_fen()];
            delete comments[generate_fen()];
            return comment;
        },

        get_comments: function() {
            prune_comments();
            return Object.keys(comments).map(function(fen) {
                return {fen: fen, comment: comments[fen]};
            });
        },

        delete_comments: function() {
            prune_comments();
            return Object.keys(comments)
                .map(function(fen) {
                    var comment = comments[fen];
                    delete comments[fen];
                    return {fen: fen, comment: comment};
                });
        }
    }
}

/* export Chess object if using node or any other CommonJS compatible
 * environment */
if (typeof exports !== 'undefined') exports.Chess = Chess
/* export Chess object for any RequireJS compatible environment */
if (typeof define !== 'undefined')
    define(function() {
        return Chess
    })
// chessboard.js v1.0.0
// https://github.com/oakmac/chessboardjs/
//
// Copyright (c) 2019, Chris Oakman
// Released under the MIT license
// https://github.com/oakmac/chessboardjs/blob/master/LICENSE.md

// start anonymous scope
    ;(function () {
    'use strict'

    var $ = window['jQuery']

    // ---------------------------------------------------------------------------
    // Constants
    // ---------------------------------------------------------------------------

    var COLUMNS = 'abcdefgh'.split('')
    var DEFAULT_DRAG_THROTTLE_RATE = 20
    var ELLIPSIS = '…'
    var MINIMUM_JQUERY_VERSION = '1.8.3'
    var RUN_ASSERTS = false
    var START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
    var START_POSITION = fenToObj(START_FEN)

    // default animation speeds
    var DEFAULT_APPEAR_SPEED = 200
    var DEFAULT_MOVE_SPEED = 200
    var DEFAULT_SNAPBACK_SPEED = 60
    var DEFAULT_SNAP_SPEED = 30
    var DEFAULT_TRASH_SPEED = 100

    // use unique class names to prevent clashing with anything else on the page
    // and simplify selectors
    // NOTE: these should never change
    var CSS = {}
    CSS['alpha'] = 'alpha-d2270'
    CSS['black'] = 'black-3c85d'
    CSS['board'] = 'board-b72b1'
    CSS['chessboard'] = 'chessboard-63f37'
    CSS['clearfix'] = 'clearfix-7da63'
    CSS['highlight1'] = 'highlight1-32417'
    CSS['highlight2'] = 'highlight2-9c5d2'
    CSS['notation'] = 'notation-322f9'
    CSS['numeric'] = 'numeric-fc462'
    CSS['piece'] = 'piece-417db'
    CSS['row'] = 'row-5277c'
    CSS['sparePieces'] = 'spare-pieces-7492f'
    CSS['sparePiecesBottom'] = 'spare-pieces-bottom-ae20f'
    CSS['sparePiecesTop'] = 'spare-pieces-top-4028b'
    CSS['square'] = 'square-55d63'
    CSS['white'] = 'white-1e1d7'

    // ---------------------------------------------------------------------------
    // Misc Util Functions
    // ---------------------------------------------------------------------------

    function throttle (f, interval, scope) {
        var timeout = 0
        var shouldFire = false
        var args = []

        var handleTimeout = function () {
            timeout = 0
            if (shouldFire) {
                shouldFire = false
                fire()
            }
        }

        var fire = function () {
            timeout = window.setTimeout(handleTimeout, interval)
            f.apply(scope, args)
        }

        return function (_args) {
            args = arguments
            if (!timeout) {
                fire()
            } else {
                shouldFire = true
            }
        }
    }

    // function debounce (f, interval, scope) {
    //   var timeout = 0
    //   return function (_args) {
    //     window.clearTimeout(timeout)
    //     var args = arguments
    //     timeout = window.setTimeout(function () {
    //       f.apply(scope, args)
    //     }, interval)
    //   }
    // }

    function uuid () {
        return 'xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function (c) {
            var r = (Math.random() * 16) | 0
            return r.toString(16)
        })
    }

    function deepCopy (thing) {
        return JSON.parse(JSON.stringify(thing))
    }

    function parseSemVer (version) {
        var tmp = version.split('.')
        return {
            major: parseInt(tmp[0], 10),
            minor: parseInt(tmp[1], 10),
            patch: parseInt(tmp[2], 10)
        }
    }

    // returns true if version is >= minimum
    function validSemanticVersion (version, minimum) {
        version = parseSemVer(version)
        minimum = parseSemVer(minimum)

        var versionNum = (version.major * 100000 * 100000) +
            (version.minor * 100000) +
            version.patch
        var minimumNum = (minimum.major * 100000 * 100000) +
            (minimum.minor * 100000) +
            minimum.patch

        return versionNum >= minimumNum
    }

    function interpolateTemplate (str, obj) {
        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) continue
            var keyTemplateStr = '{' + key + '}'
            var value = obj[key]
            while (str.indexOf(keyTemplateStr) !== -1) {
                str = str.replace(keyTemplateStr, value)
            }
        }
        return str
    }

    if (RUN_ASSERTS) {
        console.assert(interpolateTemplate('abc', {a: 'x'}) === 'abc')
        console.assert(interpolateTemplate('{a}bc', {}) === '{a}bc')
        console.assert(interpolateTemplate('{a}bc', {p: 'q'}) === '{a}bc')
        console.assert(interpolateTemplate('{a}bc', {a: 'x'}) === 'xbc')
        console.assert(interpolateTemplate('{a}bc{a}bc', {a: 'x'}) === 'xbcxbc')
        console.assert(interpolateTemplate('{a}{a}{b}', {a: 'x', b: 'y'}) === 'xxy')
    }

    // ---------------------------------------------------------------------------
    // Predicates
    // ---------------------------------------------------------------------------

    function isString (s) {
        return typeof s === 'string'
    }

    function isFunction (f) {
        return typeof f === 'function'
    }

    function isInteger (n) {
        return typeof n === 'number' &&
            isFinite(n) &&
            Math.floor(n) === n
    }

    function validAnimationSpeed (speed) {
        if (speed === 'fast' || speed === 'slow') return true
        if (!isInteger(speed)) return false
        return speed >= 0
    }

    function validThrottleRate (rate) {
        return isInteger(rate) &&
            rate >= 1
    }

    function validMove (move) {
        // move should be a string
        if (!isString(move)) return false

        // move should be in the form of "e2-e4", "f6-d5"
        var squares = move.split('-')
        if (squares.length !== 2) return false

        return validSquare(squares[0]) && validSquare(squares[1])
    }

    function validSquare (square) {
        return isString(square) && square.search(/^[a-h][1-8]$/) !== -1
    }

    if (RUN_ASSERTS) {
        console.assert(validSquare('a1'))
        console.assert(validSquare('e2'))
        console.assert(!validSquare('D2'))
        console.assert(!validSquare('g9'))
        console.assert(!validSquare('a'))
        console.assert(!validSquare(true))
        console.assert(!validSquare(null))
        console.assert(!validSquare({}))
    }

    function validPieceCode (code) {
        return isString(code) && code.search(/^[bw][KQRNBP]$/) !== -1
    }

    if (RUN_ASSERTS) {
        console.assert(validPieceCode('bP'))
        console.assert(validPieceCode('bK'))
        console.assert(validPieceCode('wK'))
        console.assert(validPieceCode('wR'))
        console.assert(!validPieceCode('WR'))
        console.assert(!validPieceCode('Wr'))
        console.assert(!validPieceCode('a'))
        console.assert(!validPieceCode(true))
        console.assert(!validPieceCode(null))
        console.assert(!validPieceCode({}))
    }

    function validFen (fen) {
        if (!isString(fen)) return false

        // cut off any move, castling, etc info from the end
        // we're only interested in position information
        fen = fen.replace(/ .+$/, '')

        // expand the empty square numbers to just 1s
        fen = expandFenEmptySquares(fen)

        // FEN should be 8 sections separated by slashes
        var chunks = fen.split('/')
        if (chunks.length !== 8) return false

        // check each section
        for (var i = 0; i < 8; i++) {
            if (chunks[i].length !== 8 ||
                chunks[i].search(/[^kqrnbpKQRNBP1]/) !== -1) {
                return false
            }
        }

        return true
    }

    if (RUN_ASSERTS) {
        console.assert(validFen(START_FEN))
        console.assert(validFen('8/8/8/8/8/8/8/8'))
        console.assert(validFen('r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R'))
        console.assert(validFen('3r3r/1p4pp/2nb1k2/pP3p2/8/PB2PN2/p4PPP/R4RK1 b - - 0 1'))
        console.assert(!validFen('3r3z/1p4pp/2nb1k2/pP3p2/8/PB2PN2/p4PPP/R4RK1 b - - 0 1'))
        console.assert(!validFen('anbqkbnr/8/8/8/8/8/PPPPPPPP/8'))
        console.assert(!validFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/'))
        console.assert(!validFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBN'))
        console.assert(!validFen('888888/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'))
        console.assert(!validFen('888888/pppppppp/74/8/8/8/PPPPPPPP/RNBQKBNR'))
        console.assert(!validFen({}))
    }

    function validPositionObject (pos) {
        if (!$.isPlainObject(pos)) return false

        for (var i in pos) {
            if (!pos.hasOwnProperty(i)) continue

            if (!validSquare(i) || !validPieceCode(pos[i])) {
                return false
            }
        }

        return true
    }

    if (RUN_ASSERTS) {
        console.assert(validPositionObject(START_POSITION))
        console.assert(validPositionObject({}))
        console.assert(validPositionObject({e2: 'wP'}))
        console.assert(validPositionObject({e2: 'wP', d2: 'wP'}))
        console.assert(!validPositionObject({e2: 'BP'}))
        console.assert(!validPositionObject({y2: 'wP'}))
        console.assert(!validPositionObject(null))
        console.assert(!validPositionObject('start'))
        console.assert(!validPositionObject(START_FEN))
    }

    function isTouchDevice () {
        return 'ontouchstart' in document.documentElement
    }

    function validJQueryVersion () {
        return typeof window.$ &&
            $.fn &&
            $.fn.jquery &&
            validSemanticVersion($.fn.jquery, MINIMUM_JQUERY_VERSION)
    }

    // ---------------------------------------------------------------------------
    // Chess Util Functions
    // ---------------------------------------------------------------------------

    // convert FEN piece code to bP, wK, etc
    function fenToPieceCode (piece) {
        // black piece
        if (piece.toLowerCase() === piece) {
            return 'b' + piece.toUpperCase()
        }

        // white piece
        return 'w' + piece.toUpperCase()
    }

    // convert bP, wK, etc code to FEN structure
    function pieceCodeToFen (piece) {
        var pieceCodeLetters = piece.split('')

        // white piece
        if (pieceCodeLetters[0] === 'w') {
            return pieceCodeLetters[1].toUpperCase()
        }

        // black piece
        return pieceCodeLetters[1].toLowerCase()
    }

    // convert FEN string to position object
    // returns false if the FEN string is invalid
    function fenToObj (fen) {
        if (!validFen(fen)) return false

        // cut off any move, castling, etc info from the end
        // we're only interested in position information
        fen = fen.replace(/ .+$/, '')

        var rows = fen.split('/')
        var position = {}

        var currentRow = 8
        for (var i = 0; i < 8; i++) {
            var row = rows[i].split('')
            var colIdx = 0

            // loop through each character in the FEN section
            for (var j = 0; j < row.length; j++) {
                // number / empty squares
                if (row[j].search(/[1-8]/) !== -1) {
                    var numEmptySquares = parseInt(row[j], 10)
                    colIdx = colIdx + numEmptySquares
                } else {
                    // piece
                    var square = COLUMNS[colIdx] + currentRow
                    position[square] = fenToPieceCode(row[j])
                    colIdx = colIdx + 1
                }
            }

            currentRow = currentRow - 1
        }

        return position
    }

    // position object to FEN string
    // returns false if the obj is not a valid position object
    function objToFen (obj) {
        if (!validPositionObject(obj)) return false

        var fen = ''

        var currentRow = 8
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var square = COLUMNS[j] + currentRow

                // piece exists
                if (obj.hasOwnProperty(square)) {
                    fen = fen + pieceCodeToFen(obj[square])
                } else {
                    // empty space
                    fen = fen + '1'
                }
            }

            if (i !== 7) {
                fen = fen + '/'
            }

            currentRow = currentRow - 1
        }

        // squeeze the empty numbers together
        fen = squeezeFenEmptySquares(fen)

        return fen
    }

    if (RUN_ASSERTS) {
        console.assert(objToFen(START_POSITION) === START_FEN)
        console.assert(objToFen({}) === '8/8/8/8/8/8/8/8')
        console.assert(objToFen({a2: 'wP', 'b2': 'bP'}) === '8/8/8/8/8/8/Pp6/8')
    }

    function squeezeFenEmptySquares (fen) {
        return fen.replace(/11111111/g, '8')
            .replace(/1111111/g, '7')
            .replace(/111111/g, '6')
            .replace(/11111/g, '5')
            .replace(/1111/g, '4')
            .replace(/111/g, '3')
            .replace(/11/g, '2')
    }

    function expandFenEmptySquares (fen) {
        return fen.replace(/8/g, '11111111')
            .replace(/7/g, '1111111')
            .replace(/6/g, '111111')
            .replace(/5/g, '11111')
            .replace(/4/g, '1111')
            .replace(/3/g, '111')
            .replace(/2/g, '11')
    }

    // returns the distance between two squares
    function squareDistance (squareA, squareB) {
        var squareAArray = squareA.split('')
        var squareAx = COLUMNS.indexOf(squareAArray[0]) + 1
        var squareAy = parseInt(squareAArray[1], 10)

        var squareBArray = squareB.split('')
        var squareBx = COLUMNS.indexOf(squareBArray[0]) + 1
        var squareBy = parseInt(squareBArray[1], 10)

        var xDelta = Math.abs(squareAx - squareBx)
        var yDelta = Math.abs(squareAy - squareBy)

        if (xDelta >= yDelta) return xDelta
        return yDelta
    }

    // returns the square of the closest instance of piece
    // returns false if no instance of piece is found in position
    function findClosestPiece (position, piece, square) {
        // create array of closest squares from square
        var closestSquares = createRadius(square)

        // search through the position in order of distance for the piece
        for (var i = 0; i < closestSquares.length; i++) {
            var s = closestSquares[i]

            if (position.hasOwnProperty(s) && position[s] === piece) {
                return s
            }
        }

        return false
    }

    // returns an array of closest squares from square
    function createRadius (square) {
        var squares = []

        // calculate distance of all squares
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var s = COLUMNS[i] + (j + 1)

                // skip the square we're starting from
                if (square === s) continue

                squares.push({
                    square: s,
                    distance: squareDistance(square, s)
                })
            }
        }

        // sort by distance
        squares.sort(function (a, b) {
            return a.distance - b.distance
        })

        // just return the square code
        var surroundingSquares = []
        for (i = 0; i < squares.length; i++) {
            surroundingSquares.push(squares[i].square)
        }

        return surroundingSquares
    }

    // given a position and a set of moves, return a new position
    // with the moves executed
    function calculatePositionFromMoves (position, moves) {
        var newPosition = deepCopy(position)

        for (var i in moves) {
            if (!moves.hasOwnProperty(i)) continue

            // skip the move if the position doesn't have a piece on the source square
            if (!newPosition.hasOwnProperty(i)) continue

            var piece = newPosition[i]
            delete newPosition[i]
            newPosition[moves[i]] = piece
        }

        return newPosition
    }

    // TODO: add some asserts here for calculatePositionFromMoves

    // ---------------------------------------------------------------------------
    // HTML
    // ---------------------------------------------------------------------------

    function buildContainerHTML (hasSparePieces) {
        var html = '<div class="{chessboard}">'

        if (hasSparePieces) {
            html += '<div class="{sparePieces} {sparePiecesTop}"></div>'
        }

        html += '<div class="{board}"></div>'

        if (hasSparePieces) {
            html += '<div class="{sparePieces} {sparePiecesBottom}"></div>'
        }

        html += '</div>'

        return interpolateTemplate(html, CSS)
    }

    // ---------------------------------------------------------------------------
    // Config
    // ---------------------------------------------------------------------------

    function expandConfigArgumentShorthand (config) {
        if (config === 'start') {
            config = {position: deepCopy(START_POSITION)}
        } else if (validFen(config)) {
            config = {position: fenToObj(config)}
        } else if (validPositionObject(config)) {
            config = {position: deepCopy(config)}
        }

        // config must be an object
        if (!$.isPlainObject(config)) config = {}

        return config
    }

    // validate config / set default options
    function expandConfig (config) {
        // default for orientation is white
        if (config.orientation !== 'black') config.orientation = 'white'

        // default for showNotation is true
        if (config.showNotation !== false) config.showNotation = true

        // default for draggable is false
        if (config.draggable !== true) config.draggable = false

        // default for dropOffBoard is 'snapback'
        if (config.dropOffBoard !== 'trash') config.dropOffBoard = 'snapback'

        // default for sparePieces is false
        if (config.sparePieces !== true) config.sparePieces = false

        // draggable must be true if sparePieces is enabled
        if (config.sparePieces) config.draggable = true

        // default piece theme is wikipedia
        if (!config.hasOwnProperty('pieceTheme') ||
            (!isString(config.pieceTheme) && !isFunction(config.pieceTheme))) {
            config.pieceTheme = 'img/chesspieces/wikipedia/{piece}.png'
        }

        // animation speeds
        if (!validAnimationSpeed(config.appearSpeed)) config.appearSpeed = DEFAULT_APPEAR_SPEED
        if (!validAnimationSpeed(config.moveSpeed)) config.moveSpeed = DEFAULT_MOVE_SPEED
        if (!validAnimationSpeed(config.snapbackSpeed)) config.snapbackSpeed = DEFAULT_SNAPBACK_SPEED
        if (!validAnimationSpeed(config.snapSpeed)) config.snapSpeed = DEFAULT_SNAP_SPEED
        if (!validAnimationSpeed(config.trashSpeed)) config.trashSpeed = DEFAULT_TRASH_SPEED

        // throttle rate
        if (!validThrottleRate(config.dragThrottleRate)) config.dragThrottleRate = DEFAULT_DRAG_THROTTLE_RATE

        return config
    }

    // ---------------------------------------------------------------------------
    // Dependencies
    // ---------------------------------------------------------------------------

    // check for a compatible version of jQuery
    function checkJQuery () {
        if (!validJQueryVersion()) {
            var errorMsg = 'Chessboard Error 1005: Unable to find a valid version of jQuery. ' +
                'Please include jQuery ' + MINIMUM_JQUERY_VERSION + ' or higher on the page' +
                '\n\n' +
                'Exiting' + ELLIPSIS
            window.alert(errorMsg)
            return false
        }

        return true
    }

    // return either boolean false or the $container element
    function checkContainerArg (containerElOrString) {
        if (containerElOrString === '') {
            var errorMsg1 = 'Chessboard Error 1001: ' +
                'The first argument to Chessboard() cannot be an empty string.' +
                '\n\n' +
                'Exiting' + ELLIPSIS
            window.alert(errorMsg1)
            return false
        }

        // convert containerEl to query selector if it is a string
        if (isString(containerElOrString) &&
            containerElOrString.charAt(0) !== '#') {
            containerElOrString = '#' + containerElOrString
        }

        // containerEl must be something that becomes a jQuery collection of size 1
        var $container = $(containerElOrString)
        if ($container.length !== 1) {
            var errorMsg2 = 'Chessboard Error 1003: ' +
                'The first argument to Chessboard() must be the ID of a DOM node, ' +
                'an ID query selector, or a single DOM node.' +
                '\n\n' +
                'Exiting' + ELLIPSIS
            window.alert(errorMsg2)
            return false
        }

        return $container
    }

    // ---------------------------------------------------------------------------
    // Constructor
    // ---------------------------------------------------------------------------

    function constructor (containerElOrString, config) {
        // first things first: check basic dependencies
        if (!checkJQuery()) return null
        var $container = checkContainerArg(containerElOrString)
        if (!$container) return null

        // ensure the config object is what we expect
        config = expandConfigArgumentShorthand(config)
        config = expandConfig(config)

        // DOM elements
        var $board = null
        var $draggedPiece = null
        var $sparePiecesTop = null
        var $sparePiecesBottom = null

        // constructor return object
        var widget = {}

        // -------------------------------------------------------------------------
        // Stateful
        // -------------------------------------------------------------------------

        var boardBorderSize = 2
        var currentOrientation = 'white'
        var currentPosition = {}
        var draggedPiece = null
        var draggedPieceLocation = null
        var draggedPieceSource = null
        var isDragging = false
        var sparePiecesElsIds = {}
        var squareElsIds = {}
        var squareElsOffsets = {}
        var squareSize = 16

        // -------------------------------------------------------------------------
        // Validation / Errors
        // -------------------------------------------------------------------------

        function error (code, msg, obj) {
            // do nothing if showErrors is not set
            if (
                config.hasOwnProperty('showErrors') !== true ||
                config.showErrors === false
            ) {
                return
            }

            var errorText = 'Chessboard Error ' + code + ': ' + msg

            // print to console
            if (
                config.showErrors === 'console' &&
                typeof console === 'object' &&
                typeof console.log === 'function'
            ) {
                console.log(errorText)
                if (arguments.length >= 2) {
                    console.log(obj)
                }
                return
            }

            // alert errors
            if (config.showErrors === 'alert') {
                if (obj) {
                    errorText += '\n\n' + JSON.stringify(obj)
                }
                window.alert(errorText)
                return
            }

            // custom function
            if (isFunction(config.showErrors)) {
                config.showErrors(code, msg, obj)
            }
        }

        function setInitialState () {
            currentOrientation = config.orientation

            // make sure position is valid
            if (config.hasOwnProperty('position')) {
                if (config.position === 'start') {
                    currentPosition = deepCopy(START_POSITION)
                } else if (validFen(config.position)) {
                    currentPosition = fenToObj(config.position)
                } else if (validPositionObject(config.position)) {
                    currentPosition = deepCopy(config.position)
                } else {
                    error(
                        7263,
                        'Invalid value passed to config.position.',
                        config.position
                    )
                }
            }
        }

        // -------------------------------------------------------------------------
        // DOM Misc
        // -------------------------------------------------------------------------

        // calculates square size based on the width of the container
        // got a little CSS black magic here, so let me explain:
        // get the width of the container element (could be anything), reduce by 1 for
        // fudge factor, and then keep reducing until we find an exact mod 8 for
        // our square size
        function calculateSquareSize () {
            var containerWidth = parseInt($container.width(), 10)

            // defensive, prevent infinite loop
            if (!containerWidth || containerWidth <= 0) {
                return 0
            }

            // pad one pixel
            var boardWidth = containerWidth - 1

            while (boardWidth % 8 !== 0 && boardWidth > 0) {
                boardWidth = boardWidth - 1
            }

            return boardWidth / 8
        }

        // create random IDs for elements
        function createElIds () {
            // squares on the board
            for (var i = 0; i < COLUMNS.length; i++) {
                for (var j = 1; j <= 8; j++) {
                    var square = COLUMNS[i] + j
                    squareElsIds[square] = square + '-' + uuid()
                }
            }

            // spare pieces
            var pieces = 'KQRNBP'.split('')
            for (i = 0; i < pieces.length; i++) {
                var whitePiece = 'w' + pieces[i]
                var blackPiece = 'b' + pieces[i]
                sparePiecesElsIds[whitePiece] = whitePiece + '-' + uuid()
                sparePiecesElsIds[blackPiece] = blackPiece + '-' + uuid()
            }
        }

        // -------------------------------------------------------------------------
        // Markup Building
        // -------------------------------------------------------------------------

        function buildBoardHTML (orientation) {
            if (orientation !== 'black') {
                orientation = 'white'
            }

            var html = ''

            // algebraic notation / orientation
            var alpha = deepCopy(COLUMNS)
            var row = 8
            if (orientation === 'black') {
                alpha.reverse()
                row = 1
            }

            var squareColor = 'white'
            for (var i = 0; i < 8; i++) {
                html += '<div class="{row}">'
                for (var j = 0; j < 8; j++) {
                    var square = alpha[j] + row

                    html += '<div class="{square} ' + CSS[squareColor] + ' ' +
                        'square-' + square + '" ' +
                        'style="width:' + squareSize + 'px;height:' + squareSize + 'px;" ' +
                        'id="' + squareElsIds[square] + '" ' +
                        'data-square="' + square + '">'

                    if (config.showNotation) {
                        // alpha notation
                        if ((orientation === 'white' && row === 1) ||
                            (orientation === 'black' && row === 8)) {
                            html += '<div class="{notation} {alpha}">' + alpha[j] + '</div>'
                        }

                        // numeric notation
                        if (j === 0) {
                            html += '<div class="{notation} {numeric}">' + row + '</div>'
                        }
                    }

                    html += '</div>' // end .square

                    squareColor = (squareColor === 'white') ? 'black' : 'white'
                }
                html += '<div class="{clearfix}"></div></div>'

                squareColor = (squareColor === 'white') ? 'black' : 'white'

                if (orientation === 'white') {
                    row = row - 1
                } else {
                    row = row + 1
                }
            }

            return interpolateTemplate(html, CSS)
        }

        function buildPieceImgSrc (piece) {
            if (isFunction(config.pieceTheme)) {
                return config.pieceTheme(piece)
            }

            if (isString(config.pieceTheme)) {
                return interpolateTemplate(config.pieceTheme, {piece: piece})
            }

            // NOTE: this should never happen
            error(8272, 'Unable to build image source for config.pieceTheme.')
            return ''
        }

        function buildPieceHTML (piece, hidden, id) {
            var html = '<img src="' + buildPieceImgSrc(piece) + '" '
            if (isString(id) && id !== '') {
                html += 'id="' + id + '" '
            }
            html += 'alt="" ' +
                'class="{piece}" ' +
                'data-piece="' + piece + '" ' +
                'style="width:' + squareSize + 'px;' + 'height:' + squareSize + 'px;'

            if (hidden) {
                html += 'display:none;'
            }

            html += '" />'

            return interpolateTemplate(html, CSS)
        }

        function buildSparePiecesHTML (color) {
            var pieces = ['wK', 'wQ', 'wR', 'wB', 'wN', 'wP']
            if (color === 'black') {
                pieces = ['bK', 'bQ', 'bR', 'bB', 'bN', 'bP']
            }

            var html = ''
            for (var i = 0; i < pieces.length; i++) {
                html += buildPieceHTML(pieces[i], false, sparePiecesElsIds[pieces[i]])
            }

            return html
        }

        // -------------------------------------------------------------------------
        // Animations
        // -------------------------------------------------------------------------

        function animateSquareToSquare (src, dest, piece, completeFn) {
            // get information about the source and destination squares
            var $srcSquare = $('#' + squareElsIds[src])
            var srcSquarePosition = $srcSquare.offset()
            var $destSquare = $('#' + squareElsIds[dest])
            var destSquarePosition = $destSquare.offset()

            // create the animated piece and absolutely position it
            // over the source square
            var animatedPieceId = uuid()
            $('body').append(buildPieceHTML(piece, true, animatedPieceId))
            var $animatedPiece = $('#' + animatedPieceId)
            $animatedPiece.css({
                display: '',
                position: 'absolute',
                top: srcSquarePosition.top,
                left: srcSquarePosition.left
            })

            // remove original piece from source square
            $srcSquare.find('.' + CSS.piece).remove()

            function onFinishAnimation1 () {
                // add the "real" piece to the destination square
                $destSquare.append(buildPieceHTML(piece))

                // remove the animated piece
                $animatedPiece.remove()

                // run complete function
                if (isFunction(completeFn)) {
                    completeFn()
                }
            }

            // animate the piece to the destination square
            var opts = {
                duration: config.moveSpeed,
                complete: onFinishAnimation1
            }
            $animatedPiece.animate(destSquarePosition, opts)
        }

        function animateSparePieceToSquare (piece, dest, completeFn) {
            var srcOffset = $('#' + sparePiecesElsIds[piece]).offset()
            var $destSquare = $('#' + squareElsIds[dest])
            var destOffset = $destSquare.offset()

            // create the animate piece
            var pieceId = uuid()
            $('body').append(buildPieceHTML(piece, true, pieceId))
            var $animatedPiece = $('#' + pieceId)
            $animatedPiece.css({
                display: '',
                position: 'absolute',
                left: srcOffset.left,
                top: srcOffset.top
            })

            // on complete
            function onFinishAnimation2 () {
                // add the "real" piece to the destination square
                $destSquare.find('.' + CSS.piece).remove()
                $destSquare.append(buildPieceHTML(piece))

                // remove the animated piece
                $animatedPiece.remove()

                // run complete function
                if (isFunction(completeFn)) {
                    completeFn()
                }
            }

            // animate the piece to the destination square
            var opts = {
                duration: config.moveSpeed,
                complete: onFinishAnimation2
            }
            $animatedPiece.animate(destOffset, opts)
        }

        // execute an array of animations
        function doAnimations (animations, oldPos, newPos) {
            if (animations.length === 0) return

            var numFinished = 0
            function onFinishAnimation3 () {
                // exit if all the animations aren't finished
                numFinished = numFinished + 1
                if (numFinished !== animations.length) return

                drawPositionInstant()

                // run their onMoveEnd function
                if (isFunction(config.onMoveEnd)) {
                    config.onMoveEnd(deepCopy(oldPos), deepCopy(newPos))
                }
            }

            for (var i = 0; i < animations.length; i++) {
                var animation = animations[i]

                // clear a piece
                if (animation.type === 'clear') {
                    $('#' + squareElsIds[animation.square] + ' .' + CSS.piece)
                        .fadeOut(config.trashSpeed, onFinishAnimation3)

                    // add a piece with no spare pieces - fade the piece onto the square
                } else if (animation.type === 'add' && !config.sparePieces) {
                    $('#' + squareElsIds[animation.square])
                        .append(buildPieceHTML(animation.piece, true))
                        .find('.' + CSS.piece)
                        .fadeIn(config.appearSpeed, onFinishAnimation3)

                    // add a piece with spare pieces - animate from the spares
                } else if (animation.type === 'add' && config.sparePieces) {
                    animateSparePieceToSquare(animation.piece, animation.square, onFinishAnimation3)

                    // move a piece from squareA to squareB
                } else if (animation.type === 'move') {
                    animateSquareToSquare(animation.source, animation.destination, animation.piece, onFinishAnimation3)
                }
            }
        }

        // calculate an array of animations that need to happen in order to get
        // from pos1 to pos2
        function calculateAnimations (pos1, pos2) {
            // make copies of both
            pos1 = deepCopy(pos1)
            pos2 = deepCopy(pos2)

            var animations = []
            var squaresMovedTo = {}

            // remove pieces that are the same in both positions
            for (var i in pos2) {
                if (!pos2.hasOwnProperty(i)) continue

                if (pos1.hasOwnProperty(i) && pos1[i] === pos2[i]) {
                    delete pos1[i]
                    delete pos2[i]
                }
            }

            // find all the "move" animations
            for (i in pos2) {
                if (!pos2.hasOwnProperty(i)) continue

                var closestPiece = findClosestPiece(pos1, pos2[i], i)
                if (closestPiece) {
                    animations.push({
                        type: 'move',
                        source: closestPiece,
                        destination: i,
                        piece: pos2[i]
                    })

                    delete pos1[closestPiece]
                    delete pos2[i]
                    squaresMovedTo[i] = true
                }
            }

            // "add" animations
            for (i in pos2) {
                if (!pos2.hasOwnProperty(i)) continue

                animations.push({
                    type: 'add',
                    square: i,
                    piece: pos2[i]
                })

                delete pos2[i]
            }

            // "clear" animations
            for (i in pos1) {
                if (!pos1.hasOwnProperty(i)) continue

                // do not clear a piece if it is on a square that is the result
                // of a "move", ie: a piece capture
                if (squaresMovedTo.hasOwnProperty(i)) continue

                animations.push({
                    type: 'clear',
                    square: i,
                    piece: pos1[i]
                })

                delete pos1[i]
            }

            return animations
        }

        // -------------------------------------------------------------------------
        // Control Flow
        // -------------------------------------------------------------------------

        function drawPositionInstant () {
            // clear the board
            $board.find('.' + CSS.piece).remove()

            // add the pieces
            for (var i in currentPosition) {
                if (!currentPosition.hasOwnProperty(i)) continue

                $('#' + squareElsIds[i]).append(buildPieceHTML(currentPosition[i]))
            }
        }

        function drawBoard () {
            $board.html(buildBoardHTML(currentOrientation, squareSize, config.showNotation))
            drawPositionInstant()

            if (config.sparePieces) {
                if (currentOrientation === 'white') {
                    $sparePiecesTop.html(buildSparePiecesHTML('black'))
                    $sparePiecesBottom.html(buildSparePiecesHTML('white'))
                } else {
                    $sparePiecesTop.html(buildSparePiecesHTML('white'))
                    $sparePiecesBottom.html(buildSparePiecesHTML('black'))
                }
            }
        }

        function setCurrentPosition (position) {
            var oldPos = deepCopy(currentPosition)
            var newPos = deepCopy(position)
            var oldFen = objToFen(oldPos)
            var newFen = objToFen(newPos)

            // do nothing if no change in position
            if (oldFen === newFen) return

            // run their onChange function
            if (isFunction(config.onChange)) {
                config.onChange(oldPos, newPos)
            }

            // update state
            currentPosition = position
        }

        function isXYOnSquare (x, y) {
            for (var i in squareElsOffsets) {
                if (!squareElsOffsets.hasOwnProperty(i)) continue

                var s = squareElsOffsets[i]
                if (x >= s.left &&
                    x < s.left + squareSize &&
                    y >= s.top &&
                    y < s.top + squareSize) {
                    return i
                }
            }

            return 'offboard'
        }

        // records the XY coords of every square into memory
        function captureSquareOffsets () {
            squareElsOffsets = {}

            for (var i in squareElsIds) {
                if (!squareElsIds.hasOwnProperty(i)) continue

                squareElsOffsets[i] = $('#' + squareElsIds[i]).offset()
            }
        }

        function removeSquareHighlights () {
            $board
                .find('.' + CSS.square)
                .removeClass(CSS.highlight1 + ' ' + CSS.highlight2)
        }

        function snapbackDraggedPiece () {
            // there is no "snapback" for spare pieces
            if (draggedPieceSource === 'spare') {
                trashDraggedPiece()
                return
            }

            removeSquareHighlights()

            // animation complete
            function complete () {
                drawPositionInstant()
                $draggedPiece.css('display', 'none')

                // run their onSnapbackEnd function
                if (isFunction(config.onSnapbackEnd)) {
                    config.onSnapbackEnd(
                        draggedPiece,
                        draggedPieceSource,
                        deepCopy(currentPosition),
                        currentOrientation
                    )
                }
            }

            // get source square position
            var sourceSquarePosition = $('#' + squareElsIds[draggedPieceSource]).offset()

            // animate the piece to the target square
            var opts = {
                duration: config.snapbackSpeed,
                complete: complete
            }
            $draggedPiece.animate(sourceSquarePosition, opts)

            // set state
            isDragging = false
        }

        function trashDraggedPiece () {
            removeSquareHighlights()

            // remove the source piece
            var newPosition = deepCopy(currentPosition)
            delete newPosition[draggedPieceSource]
            setCurrentPosition(newPosition)

            // redraw the position
            drawPositionInstant()

            // hide the dragged piece
            $draggedPiece.fadeOut(config.trashSpeed)

            // set state
            isDragging = false
        }

        function dropDraggedPieceOnSquare (square) {
            removeSquareHighlights()

            // update position
            var newPosition = deepCopy(currentPosition)
            delete newPosition[draggedPieceSource]
            newPosition[square] = draggedPiece
            setCurrentPosition(newPosition)

            // get target square information
            var targetSquarePosition = $('#' + squareElsIds[square]).offset()

            // animation complete
            function onAnimationComplete () {
                drawPositionInstant()
                $draggedPiece.css('display', 'none')

                // execute their onSnapEnd function
                if (isFunction(config.onSnapEnd)) {
                    config.onSnapEnd(draggedPieceSource, square, draggedPiece)
                }
            }

            // snap the piece to the target square
            var opts = {
                duration: config.snapSpeed,
                complete: onAnimationComplete
            }
            $draggedPiece.animate(targetSquarePosition, opts)

            // set state
            isDragging = false
        }

        function beginDraggingPiece (source, piece, x, y) {
            // run their custom onDragStart function
            // their custom onDragStart function can cancel drag start
            if (isFunction(config.onDragStart) &&
                config.onDragStart(source, piece, deepCopy(currentPosition), currentOrientation) === false) {
                return
            }

            // set state
            isDragging = true
            draggedPiece = piece
            draggedPieceSource = source

            // if the piece came from spare pieces, location is offboard
            if (source === 'spare') {
                draggedPieceLocation = 'offboard'
            } else {
                draggedPieceLocation = source
            }

            // capture the x, y coords of all squares in memory
            captureSquareOffsets()

            // create the dragged piece
            $draggedPiece.attr('src', buildPieceImgSrc(piece)).css({
                display: '',
                position: 'absolute',
                left: x - squareSize / 2,
                top: y - squareSize / 2
            })

            if (source !== 'spare') {
                // highlight the source square and hide the piece
                $('#' + squareElsIds[source])
                    .addClass(CSS.highlight1)
                    .find('.' + CSS.piece)
                    .css('display', 'none')
            }
        }

        function updateDraggedPiece (x, y) {
            // put the dragged piece over the mouse cursor
            $draggedPiece.css({
                left: x - squareSize / 2,
                top: y - squareSize / 2
            })

            // get location
            var location = isXYOnSquare(x, y)

            // do nothing if the location has not changed
            if (location === draggedPieceLocation) return

            // remove highlight from previous square
            if (validSquare(draggedPieceLocation)) {
                $('#' + squareElsIds[draggedPieceLocation]).removeClass(CSS.highlight2)
            }

            // add highlight to new square
            if (validSquare(location)) {
                $('#' + squareElsIds[location]).addClass(CSS.highlight2)
            }

            // run onDragMove
            if (isFunction(config.onDragMove)) {
                config.onDragMove(
                    location,
                    draggedPieceLocation,
                    draggedPieceSource,
                    draggedPiece,
                    deepCopy(currentPosition),
                    currentOrientation
                )
            }

            // update state
            draggedPieceLocation = location
        }

        function stopDraggedPiece (location) {
            // determine what the action should be
            var action = 'drop'
            if (location === 'offboard' && config.dropOffBoard === 'snapback') {
                action = 'snapback'
            }
            if (location === 'offboard' && config.dropOffBoard === 'trash') {
                action = 'trash'
            }

            // run their onDrop function, which can potentially change the drop action
            if (isFunction(config.onDrop)) {
                var newPosition = deepCopy(currentPosition)

                // source piece is a spare piece and position is off the board
                // if (draggedPieceSource === 'spare' && location === 'offboard') {...}
                // position has not changed; do nothing

                // source piece is a spare piece and position is on the board
                if (draggedPieceSource === 'spare' && validSquare(location)) {
                    // add the piece to the board
                    newPosition[location] = draggedPiece
                }

                // source piece was on the board and position is off the board
                if (validSquare(draggedPieceSource) && location === 'offboard') {
                    // remove the piece from the board
                    delete newPosition[draggedPieceSource]
                }

                // source piece was on the board and position is on the board
                if (validSquare(draggedPieceSource) && validSquare(location)) {
                    // move the piece
                    delete newPosition[draggedPieceSource]
                    newPosition[location] = draggedPiece
                }

                var oldPosition = deepCopy(currentPosition)

                var result = config.onDrop(
                    draggedPieceSource,
                    location,
                    draggedPiece,
                    newPosition,
                    oldPosition,
                    currentOrientation
                )
                if (result === 'snapback' || result === 'trash') {
                    action = result
                }
            }

            // do it!
            if (action === 'snapback') {
                snapbackDraggedPiece()
            } else if (action === 'trash') {
                trashDraggedPiece()
            } else if (action === 'drop') {
                dropDraggedPieceOnSquare(location)
            }
        }

        // -------------------------------------------------------------------------
        // Public Methods
        // -------------------------------------------------------------------------

        // clear the board
        widget.clear = function (useAnimation) {
            widget.position({}, useAnimation)
        }

        // remove the widget from the page
        widget.destroy = function () {
            // remove markup
            $container.html('')
            $draggedPiece.remove()

            // remove event handlers
            $container.unbind()
        }

        // shorthand method to get the current FEN
        widget.fen = function () {
            return widget.position('fen')
        }

        // flip orientation
        widget.flip = function () {
            return widget.orientation('flip')
        }

        // move pieces
        // TODO: this method should be variadic as well as accept an array of moves
        widget.move = function () {
            // no need to throw an error here; just do nothing
            // TODO: this should return the current position
            if (arguments.length === 0) return

            var useAnimation = true

            // collect the moves into an object
            var moves = {}
            for (var i = 0; i < arguments.length; i++) {
                // any "false" to this function means no animations
                if (arguments[i] === false) {
                    useAnimation = false
                    continue
                }

                // skip invalid arguments
                if (!validMove(arguments[i])) {
                    error(2826, 'Invalid move passed to the move method.', arguments[i])
                    continue
                }

                var tmp = arguments[i].split('-')
                moves[tmp[0]] = tmp[1]
            }

            // calculate position from moves
            var newPos = calculatePositionFromMoves(currentPosition, moves)

            // update the board
            widget.position(newPos, useAnimation)

            // return the new position object
            return newPos
        }

        widget.orientation = function (arg) {
            // no arguments, return the current orientation
            if (arguments.length === 0) {
                return currentOrientation
            }

            // set to white or black
            if (arg === 'white' || arg === 'black') {
                currentOrientation = arg
                drawBoard()
                return currentOrientation
            }

            // flip orientation
            if (arg === 'flip') {
                currentOrientation = currentOrientation === 'white' ? 'black' : 'white'
                drawBoard()
                return currentOrientation
            }

            error(5482, 'Invalid value passed to the orientation method.', arg)
        }

        widget.position = function (position, useAnimation) {
            // no arguments, return the current position
            if (arguments.length === 0) {
                return deepCopy(currentPosition)
            }

            // get position as FEN
            if (isString(position) && position.toLowerCase() === 'fen') {
                return objToFen(currentPosition)
            }

            // start position
            if (isString(position) && position.toLowerCase() === 'start') {
                position = deepCopy(START_POSITION)
            }

            // convert FEN to position object
            if (validFen(position)) {
                position = fenToObj(position)
            }

            // validate position object
            if (!validPositionObject(position)) {
                error(6482, 'Invalid value passed to the position method.', position)
                return
            }

            // default for useAnimations is true
            if (useAnimation !== false) useAnimation = true

            if (useAnimation) {
                // start the animations
                var animations = calculateAnimations(currentPosition, position)
                doAnimations(animations, currentPosition, position)

                // set the new position
                setCurrentPosition(position)
            } else {
                // instant update
                setCurrentPosition(position)
                drawPositionInstant()
            }
        }

        widget.resize = function () {
            // calulate the new square size
            squareSize = calculateSquareSize()

            // set board width
            $board.css('width', squareSize * 8 + 'px')

            // set drag piece size
            $draggedPiece.css({
                height: squareSize,
                width: squareSize
            })

            // spare pieces
            if (config.sparePieces) {
                $container
                    .find('.' + CSS.sparePieces)
                    .css('paddingLeft', squareSize + boardBorderSize + 'px')
            }

            // redraw the board
            drawBoard()
        }

        // set the starting position
        widget.start = function (useAnimation) {
            widget.position('start', useAnimation)
        }

        // -------------------------------------------------------------------------
        // Browser Events
        // -------------------------------------------------------------------------

        function stopDefault (evt) {
            evt.preventDefault()
        }

        function mousedownSquare (evt) {
            // do nothing if we're not draggable
            if (!config.draggable) return

            // do nothing if there is no piece on this square
            var square = $(this).attr('data-square')
            if (!validSquare(square)) return
            if (!currentPosition.hasOwnProperty(square)) return

            beginDraggingPiece(square, currentPosition[square], evt.pageX, evt.pageY)
        }

        function touchstartSquare (e) {
            // do nothing if we're not draggable
            if (!config.draggable) return

            // do nothing if there is no piece on this square
            var square = $(this).attr('data-square')
            if (!validSquare(square)) return
            if (!currentPosition.hasOwnProperty(square)) return

            e = e.originalEvent
            beginDraggingPiece(
                square,
                currentPosition[square],
                e.changedTouches[0].pageX,
                e.changedTouches[0].pageY
            )
        }

        function mousedownSparePiece (evt) {
            // do nothing if sparePieces is not enabled
            if (!config.sparePieces) return

            var piece = $(this).attr('data-piece')

            beginDraggingPiece('spare', piece, evt.pageX, evt.pageY)
        }

        function touchstartSparePiece (e) {
            // do nothing if sparePieces is not enabled
            if (!config.sparePieces) return

            var piece = $(this).attr('data-piece')

            e = e.originalEvent
            beginDraggingPiece(
                'spare',
                piece,
                e.changedTouches[0].pageX,
                e.changedTouches[0].pageY
            )
        }

        function mousemoveWindow (evt) {
            if (isDragging) {
                updateDraggedPiece(evt.pageX, evt.pageY)
            }
        }

        var throttledMousemoveWindow = throttle(mousemoveWindow, config.dragThrottleRate)

        function touchmoveWindow (evt) {
            // do nothing if we are not dragging a piece
            if (!isDragging) return

            // prevent screen from scrolling
            evt.preventDefault()

            updateDraggedPiece(evt.originalEvent.changedTouches[0].pageX,
                evt.originalEvent.changedTouches[0].pageY)
        }

        var throttledTouchmoveWindow = throttle(touchmoveWindow, config.dragThrottleRate)

        function mouseupWindow (evt) {
            // do nothing if we are not dragging a piece
            if (!isDragging) return

            // get the location
            var location = isXYOnSquare(evt.pageX, evt.pageY)

            stopDraggedPiece(location)
        }

        function touchendWindow (evt) {
            // do nothing if we are not dragging a piece
            if (!isDragging) return

            // get the location
            var location = isXYOnSquare(evt.originalEvent.changedTouches[0].pageX,
                evt.originalEvent.changedTouches[0].pageY)

            stopDraggedPiece(location)
        }

        function mouseenterSquare (evt) {
            // do not fire this event if we are dragging a piece
            // NOTE: this should never happen, but it's a safeguard
            if (isDragging) return

            // exit if they did not provide a onMouseoverSquare function
            if (!isFunction(config.onMouseoverSquare)) return

            // get the square
            var square = $(evt.currentTarget).attr('data-square')

            // NOTE: this should never happen; defensive
            if (!validSquare(square)) return

            // get the piece on this square
            var piece = false
            if (currentPosition.hasOwnProperty(square)) {
                piece = currentPosition[square]
            }

            // execute their function
            config.onMouseoverSquare(square, piece, deepCopy(currentPosition), currentOrientation)
        }

        function mouseleaveSquare (evt) {
            // do not fire this event if we are dragging a piece
            // NOTE: this should never happen, but it's a safeguard
            if (isDragging) return

            // exit if they did not provide an onMouseoutSquare function
            if (!isFunction(config.onMouseoutSquare)) return

            // get the square
            var square = $(evt.currentTarget).attr('data-square')

            // NOTE: this should never happen; defensive
            if (!validSquare(square)) return

            // get the piece on this square
            var piece = false
            if (currentPosition.hasOwnProperty(square)) {
                piece = currentPosition[square]
            }

            // execute their function
            config.onMouseoutSquare(square, piece, deepCopy(currentPosition), currentOrientation)
        }

        // -------------------------------------------------------------------------
        // Initialization
        // -------------------------------------------------------------------------

        function addEvents () {
            // prevent "image drag"
            $('body').on('mousedown mousemove', '.' + CSS.piece, stopDefault)

            // mouse drag pieces
            $board.on('mousedown', '.' + CSS.square, mousedownSquare)
            $container.on('mousedown', '.' + CSS.sparePieces + ' .' + CSS.piece, mousedownSparePiece)

            // mouse enter / leave square
            $board
                .on('mouseenter', '.' + CSS.square, mouseenterSquare)
                .on('mouseleave', '.' + CSS.square, mouseleaveSquare)

            // piece drag
            var $window = $(window)
            $window
                .on('mousemove', throttledMousemoveWindow)
                .on('mouseup', mouseupWindow)

            // touch drag pieces
            if (isTouchDevice()) {
                $board.on('touchstart', '.' + CSS.square, touchstartSquare)
                $container.on('touchstart', '.' + CSS.sparePieces + ' .' + CSS.piece, touchstartSparePiece)
                $window
                    .on('touchmove', throttledTouchmoveWindow)
                    .on('touchend', touchendWindow)
            }
        }

        function initDOM () {
            // create unique IDs for all the elements we will create
            createElIds()

            // build board and save it in memory
            $container.html(buildContainerHTML(config.sparePieces))
            $board = $container.find('.' + CSS.board)

            if (config.sparePieces) {
                $sparePiecesTop = $container.find('.' + CSS.sparePiecesTop)
                $sparePiecesBottom = $container.find('.' + CSS.sparePiecesBottom)
            }

            // create the drag piece
            var draggedPieceId = uuid()
            $('body').append(buildPieceHTML('wP', true, draggedPieceId))
            $draggedPiece = $('#' + draggedPieceId)

            // TODO: need to remove this dragged piece element if the board is no
            // longer in the DOM

            // get the border size
            boardBorderSize = parseInt($board.css('borderLeftWidth'), 10)

            // set the size and draw the board
            widget.resize()
        }

        // -------------------------------------------------------------------------
        // Initialization
        // -------------------------------------------------------------------------

        setInitialState()
        initDOM()
        addEvents()

        // return the widget object
        return widget
    } // end constructor

    // TODO: do module exports here
    window['Chessboard'] = constructor

    // support legacy ChessBoard name
    window['ChessBoard'] = window['Chessboard']

    // expose util functions
    window['Chessboard']['fenToObj'] = fenToObj
    window['Chessboard']['objToFen'] = objToFen
})() // end anonymous wrapper
</script>