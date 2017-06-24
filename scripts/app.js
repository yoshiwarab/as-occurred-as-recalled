function loopAnimation(e){turnedOn=e,$occurred.toggleClass("expand"),setTimeout(function(){e?animateInRecalled(0):animateOutRecalled(),setTimeout(function(){loopAnimation(!e)},speed*$recalledSpans.length+5e3)},800)}function animateInRecalled(e){switch(e){case 0:shuffleFade(DIR_IN);break;default:shuffleFade(DIR_IN)}}function animateOutRecalled(e){switch(e){case 0:shuffleFade(DIR_OUT);break;default:shuffleFade(DIR_OUT)}}function shuffleFade(e){$recalledSpans.each(function(t,n){setTimeout(function(){e===DIR_IN?turnedOn&&$(n).addClass("fade-in"):turnedOn||$(n).removeClass("fade-in")},t*speed)})}function shuffle(e){var t=0,n=0,r=null;for(t=e.length-1;t>0;t-=1)n=Math.floor(Math.random()*(t+1)),r=e[t],e[t]=e[n],e[n]=r}window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function o(e,t){return r(x.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&g[o]!==n)return"pfx"!=t||o}return!1}function s(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return!1===r?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+w.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+S.join(r+" ")+r).split(" "),s(o,t,n))}var u,d,f={},p=t.documentElement,m="modernizr",h=t.createElement(m),g=h.style,v=t.createElement("input"),y=":)",b={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),E="Webkit Moz O ms",w=E.split(" "),S=E.toLowerCase().split(" "),C={svg:"http://www.w3.org/2000/svg"},T={},$={},k={},N=[],M=N.slice,O=function(e,n,r,o){var a,i,c,s,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:m+(r+1),l.appendChild(c);return a=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),l.id=m,(u?l:d).innerHTML+=a,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",s=p.style.overflow,p.style.overflow="hidden",p.appendChild(d)),i=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),p.style.overflow=s),!!i},j=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return O("@media "+t+" { #"+m+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},R=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),z={}.hasOwnProperty;d=a(z,"undefined")||a(z.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return z.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=M.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(M.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(M.call(arguments)))};return r}),T.flexbox=function(){return l("flexWrap")},T.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},T.canvastext=function(){return!!f.canvas&&!!a(t.createElement("canvas").getContext("2d").fillText,"function")},T.webgl=function(){return!!e.WebGLRenderingContext},T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:O(["@media (",x.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.geolocation=function(){return"geolocation"in navigator},T.postmessage=function(){return!!e.postMessage},T.websqldatabase=function(){return!!e.openDatabase},T.indexedDB=function(){return!!l("indexedDB",e)},T.hashchange=function(){return R("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},T.history=function(){return!!e.history&&!!history.pushState},T.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},T.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},T.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(g.backgroundColor,"rgba")},T.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(g.backgroundColor,"rgba")||i(g.backgroundColor,"hsla")},T.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(g.background)},T.backgroundsize=function(){return l("backgroundSize")},T.borderimage=function(){return l("borderImage")},T.borderradius=function(){return l("borderRadius")},T.boxshadow=function(){return l("boxShadow")},T.textshadow=function(){return""===t.createElement("div").style.textShadow},T.opacity=function(){return o("opacity:.55"),/^0.55$/.test(g.opacity)},T.cssanimations=function(){return l("animationName")},T.csscolumns=function(){return l("columnCount")},T.cssgradients=function(){var e="background-image:";return r((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+x.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),i(g.backgroundImage,"gradient")},T.cssreflections=function(){return l("boxReflect")},T.csstransforms=function(){return!!l("transform")},T.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in p.style&&O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},T.csstransitions=function(){return l("transition")},T.fontface=function(){var e;return O('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},T.generatedcontent=function(){var e;return O(["#",m,"{font:0/0 a}#",m,':after{content:"',y,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},T.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},T.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},T.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(e){return!1}},T.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(e){return!1}},T.webworkers=function(){return!!e.Worker},T.applicationcache=function(){return!!e.applicationCache},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(C.svg,"svg").createSVGRect},T.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==C.svg},T.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(b.call(t.createElementNS(C.svg,"animate")))},T.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(b.call(t.createElementNS(C.svg,"clipPath")))};for(var F in T)d(T,F)&&(u=F.toLowerCase(),f[u]=T[F](),N.push((f[u]?"":"no-")+u));return f.input||function(){f.input=function(n){for(var r=0,o=n.length;r<o;r++)k[n[r]]=n[r]in v;return k.list&&(k.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),k}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var r,o,a,i=0,c=e.length;i<c;i++)v.setAttribute("type",o=e[i]),r="text"!==v.type,r&&(v.value=y,v.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&v.style.WebkitAppearance!==n?(p.appendChild(v),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(v,null).WebkitAppearance&&0!==v.offsetHeight,p.removeChild(v)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?v.checkValidity&&!1===v.checkValidity():v.value!=y)),$[e[i]]=!!r;return $}("search tel url email datetime date month week time datetime-local number range color".split(" "))}(),f.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,p.className+=" "+(t?"":"no-")+e,f[e]=t}return f},r(""),h=v=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=g[e[m]];return t||(t={},h++,e[m]=h,g[h]=t),t}function a(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||f.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),s=c.length;i<s;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function s(e){e||(e=t);var r=o(e);return v.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var l,u,d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",h=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){l=!0,u=!0}}();var v={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==d.shivCSS,supportsUnknownElements:u,shivMethods:!1!==d.shivMethods,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i};e.html5=v,s(t)}(this,t),f._version="2.8.3",f._prefixes=x,f._domPrefixes=S,f._cssomPrefixes=w,f.mq=j,f.hasEvent=R,f.testProp=function(e){return c([e])},f.testAllProps=l,f.testStyles=O,f.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+N.join(" "),f}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,r,o,a,s,l){function u(t){if(!p&&i(d.readyState)&&(b.r=p=1,!y&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){E.removeChild(d)},50);for(var r in $[n])$[n].hasOwnProperty(r)&&$[n][r].onload()}}var l=l||f.errorTimeout,d=t.createElement(e),p=0,g=0,b={t:r,s:n,e:a,a:s,x:l};1===$[n]&&(g=1,$[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===$[n]?(E.insertBefore(d,x?null:h),m(u,l)):$[n].push(d))}function l(e,t,n,r,a){return y=0,t=t||"j",o(e)?s("c"==t?S:w,e,t,this.i++,n,r,a):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,E=x?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,w=b?"object":p?"script":"img",S=p?"script":w,C=Array.isArray||function(e){return"[object Array]"==g.call(e)},T=[],$={},k={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),o=T.length,a=e.pop(),i=e.length,a={url:a,origUrl:a,prefixes:e};for(n=0;n<i;n++)r=e[n].split("="),(t=k[r.shift()])&&(a=t(a,r));for(n=0;n<o;n++)a=T[n](a);return a}function i(e,o,a,i,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,a,i,c):($[s.url]?s.noexec=!0:$[s.url]=1,a.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&a.load(function(){u(),o&&o(s.origUrl,c,i),l&&l(s.origUrl,c,i),$[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),i(e,d,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[s])),i(e[s],d,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,d=e.callback||a,f=d,p=e.complete||a;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,d=this.yepnope.loader;if(o(e))i(e,0,d,0);else if(C(e))for(s=0;s<e.length;s++)l=e[s],o(l)?i(l,0,d,0):C(l)?f(l):Object(l)===l&&c(l,d);else Object(e)===e&&c(e,d)},f.addPrefix=function(e,t){k[e]=t},f.addFilter=function(e){T.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,d,p=t.createElement("script"),o=o||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=l?c:n||a,p.onreadystatechange=p.onload=function(){!u&&i(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,i,s){var l,o=t.createElement("link"),n=s?c:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);i||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(e){"use strict";e.matchMedia=e.matchMedia||function(e,t){var n,r=e.documentElement,o=r.firstElementChild||r.firstChild,a=e.createElement("body"),i=e.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",a.style.background="none",a.appendChild(i),function(e){return i.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',r.insertBefore(a,o),n=42===i.offsetWidth,r.removeChild(a),{matches:n,media:e}}}(e.document)}(this),function(e){"use strict";function t(){x(!0)}var n={};e.respond=n,n.update=function(){};var r=[],o=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),a=function(e,t){var n=o();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},i=function(e){return e.replace(n.regex.minmaxwh,"").match(n.regex.other)};if(n.ajax=a,n.queue=r,n.unsupportedmq=i,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^\/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var c,s,l,u=e.document,d=u.documentElement,f=[],p=[],m=[],h={},g=u.getElementsByTagName("head")[0]||d,v=u.getElementsByTagName("base")[0],y=g.getElementsByTagName("link"),b=function(){var e,t=u.createElement("div"),n=u.body,r=d.style.fontSize,o=n&&n.style.fontSize,a=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=a=u.createElement("body"),n.style.background="none"),d.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),a&&d.insertBefore(n,d.firstChild),e=t.offsetWidth,a?d.removeChild(n):n.removeChild(t),d.style.fontSize=r,o&&(n.style.fontSize=o),e=l=parseFloat(e)},x=function(t){var n=d.clientWidth,r="CSS1Compat"===u.compatMode&&n||u.body.clientWidth||n,o={},a=y[y.length-1],i=(new Date).getTime();if(t&&c&&i-c<30)return e.clearTimeout(s),void(s=e.setTimeout(x,30));c=i;for(var h in f)if(f.hasOwnProperty(h)){var v=f[h],E=v.minw,w=v.maxw,S=null===E,C=null===w;E&&(E=parseFloat(E)*(E.indexOf("em")>-1?l||b():1)),w&&(w=parseFloat(w)*(w.indexOf("em")>-1?l||b():1)),v.hasquery&&(S&&C||!(S||r>=E)||!(C||r<=w))||(o[v.media]||(o[v.media]=[]),o[v.media].push(p[v.rules]))}for(var T in m)m.hasOwnProperty(T)&&m[T]&&m[T].parentNode===g&&g.removeChild(m[T]);m.length=0;for(var $ in o)if(o.hasOwnProperty($)){var k=u.createElement("style"),N=o[$].join("\n");k.type="text/css",k.media=$,g.insertBefore(k,a.nextSibling),k.styleSheet?k.styleSheet.cssText=N:k.appendChild(u.createTextNode(N)),m.push(k)}},E=function(e,t,r){var o=e.replace(n.regex.comments,"").replace(n.regex.keyframes,"").match(n.regex.media),a=o&&o.length||0;t=t.substring(0,t.lastIndexOf("/"));var c=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},s=!a&&r;t.length&&(t+="/"),s&&(a=1);for(var l=0;l<a;l++){var u,d,m,h;s?(u=r,p.push(c(e))):(u=o[l].match(n.regex.findStyles)&&RegExp.$1,p.push(RegExp.$2&&c(RegExp.$2))),m=u.split(","),h=m.length;for(var g=0;g<h;g++)d=m[g],i(d)||f.push({media:d.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:p.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}x()},w=function(){if(r.length){var t=r.shift();a(t.href,function(n){E(n,t.href,t.media),h[t.href]=!0,e.setTimeout(function(){w()},0)})}},S=function(){for(var t=0;t<y.length;t++){var n=y[t],o=n.href,a=n.media,i=n.rel&&"stylesheet"===n.rel.toLowerCase();o&&i&&!h[o]&&(n.styleSheet&&n.styleSheet.rawCssText?(E(n.styleSheet.rawCssText,o,a),h[o]=!0):(/^([a-zA-Z:]*\/\/)/.test(o)||v)&&o.replace(RegExp.$1,"").split("/")[0]!==e.location.host||("//"===o.substring(0,2)&&(o=e.location.protocol+o),r.push({href:o,media:a})))}w()};S(),n.update=S,n.getEmValue=b,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this),function(e){return}(),function(e){e.fn.spanLetters=function(){this.each(function(){var t,n,r;for(t=e(this).text().trim().split(""),console.log(t),n=0;n in t;n++)t[n]='<span class="sl'+(n+1)+' span-letter">'+t[n]+"</span>";r=t.join(""),e(this).html(r)})}}(Zepto);var DIR_IN=1,DIR_OUT=0,FADE_IN=0,turnedOn=!0,currentAnimation=FADE_IN,speed=200,loop=!0,$occurred=$(".occurred"),$recalled=$(".recalled");$recalled.spanLetters();var $recalledSpans=$(".recalled span");shuffle($recalledSpans),loop&&loopAnimation(!0),$(".logo-container").on("mouseenter",function(){loop||(turnedOn=!0,$occurred.addClass("expand"),setTimeout(function(){animateInRecalled(0)},800))}),$(".logo-container").on("mouseleave",function(){loop||(turnedOn=!1,$occurred.removeClass("expand"),setTimeout(function(){animateOutRecalled(0)},800))});