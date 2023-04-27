/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 175:
/***/ (function(module) {

(function(t,e){ true?module.exports=e():0})("undefined"!==typeof self?self:this,(function(){return function(){var t={9662:function(t,e,n){var r=n(614),o=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),c=function(t){return function(e,n,c){var u,a=r(e),f=i(a),s=o(c,f);if(t&&n!=n){while(f>s)if(u=a[s++],u!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),o=n(3157),i=TypeError,c=Object.getOwnPropertyDescriptor,u=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=u?function(t,e){if(o(t)&&!c(t,"length").writable)throw i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),c=n(3070);t.exports=function(t,e,n){for(var u=o(e),a=c.f,f=i.f,s=0;s<u.length;s++){var l=u[s];r(t,l)||n&&r(n,l)||a(t,l,f(e,l))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),o=n(3070),i=n(6339),c=n(3072);t.exports=function(t,e,n,u){u||(u={});var a=u.enumerable,f=void 0!==u.name?u.name:e;if(r(n)&&i(n,f,u),u.global)a?t[e]=n:c(e,n);else{try{u.unsafe?t[e]&&(a=!0):delete t[e]}catch(s){}a?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,o,i=n(7854),c=n(8113),u=i.process,a=i.Deno,f=u&&u.versions||a&&a.version,s=f&&f.v8;s&&(r=s.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),c=n(8052),u=n(3072),a=n(9920),f=n(4705);t.exports=function(t,e){var n,s,l,p,d,h,v=t.target,y=t.global,g=t.stat;if(s=y?r:g?r[v]||u(v,{}):(r[v]||{}).prototype,s)for(l in e){if(d=e[l],t.dontCallGetSet?(h=o(s,l),p=h&&h.value):p=s[l],n=f(y?l:v+(g?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof d==typeof p)continue;a(d,p)}(t.sham||p&&p.sham)&&i(d,"sham",!0),c(s,l,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),a=u&&"something"===function(){}.name,f=u&&(!r||r&&c(i,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:f}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.call,c=r&&o.bind.bind(i,i);t.exports=r?c:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),o=n(8554);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),o=n(7293),i=n(4326),c=Object,u=r("".split);t.exports=o((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?u(t,""):c(t)}:c},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),c=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return c(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,c=n(4811),u=n(7854),a=n(111),f=n(8880),s=n(2597),l=n(5465),p=n(6200),d=n(3501),h="Object already initialized",v=u.TypeError,y=u.WeakMap,g=function(t){return i(t)?o(t):r(t,{})},m=function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw v("Incompatible receiver, "+t+" required");return n}};if(c||l.state){var b=l.state||(l.state=new y);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw v(h);return e.facade=t,b.set(t,e),e},o=function(t){return b.get(t)||{}},i=function(t){return b.has(t)}}else{var x=p("state");d[x]=!0,r=function(t,e){if(s(t,x))throw v(h);return e.facade=t,f(t,x,e),e},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:g,getterFor:m}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,c=function(t,e){var n=a[u(t)];return n==s||n!=f&&(o(e)?r(e):!!e)},u=c.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=c.data={},f=c.NATIVE="N",s=c.POLYFILL="P";t.exports=c},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),o=n(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),o=n(614),i=n(7976),c=n(3307),u=Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,u(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),o=n(7293),i=n(614),c=n(2597),u=n(9781),a=n(6530).CONFIGURABLE,f=n(2788),s=n(9909),l=s.enforce,p=s.get,d=String,h=Object.defineProperty,v=r("".slice),y=r("".replace),g=r([].join),m=u&&!o((function(){return 8!==h((function(){}),"length",{value:8}).length})),b=String(String).split("String"),x=t.exports=function(t,e,n){"Symbol("===v(d(e),0,7)&&(e="["+y(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!c(t,"name")||a&&t.name!==e)&&(u?h(t,"name",{value:e,configurable:!0}):t.name=e),m&&n&&c(n,"arity")&&t.length!==n.arity&&h(t,"length",{value:n.arity});try{n&&c(n,"constructor")&&n.constructor?u&&h(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=l(t);return c(r,"source")||(r.source=g(b,"string"==typeof e?e:"")),t};Function.prototype.toString=x((function(){return i(this)&&p(this).source||f(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(3353),c=n(9670),u=n(4948),a=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",d="writable";e.f=r?i?function(t,e,n){if(c(t),e=u(e),c(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=s(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:l in n?n[l]:r[l],writable:!1})}return f(t,e,n)}:f:function(t,e,n){if(c(t),e=u(e),c(n),o)try{return f(t,e,n)}catch(r){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),c=n(9114),u=n(5656),a=n(4948),f=n(2597),s=n(4664),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=u(t),e=a(e),s)try{return l(t,e)}catch(n){}if(f(t,e))return c(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),c=n(1318).indexOf,u=n(3501),a=r([].push);t.exports=function(t,e){var n,r=i(t),f=0,s=[];for(n in r)!o(u,n)&&o(r,n)&&a(s,n);while(e.length>f)o(r,n=e[f++])&&(~c(s,n)||a(s,n));return s}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(6916),o=n(614),i=n(111),c=TypeError;t.exports=function(t,e){var n,u;if("string"===e&&o(n=t.toString)&&!i(u=r(n,t)))return u;if(o(n=t.valueOf)&&!i(u=r(n,t)))return u;if("string"!==e&&o(n=t.toString)&&!i(u=r(n,t)))return u;throw c("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),c=n(5181),u=n(9670),a=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(u(t)),n=c.f;return n?a(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),i=n(2190),c=n(8173),u=n(2140),a=n(5112),f=TypeError,s=a("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,a=c(t,s);if(a){if(void 0===e&&(e="default"),n=r(a,t,e),!o(n)||i(n))return n;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),c=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+c(++o+i,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),o=n(614),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),c=n(9711),u=n(6293),a=n(3307),f=r.Symbol,s=o("wks"),l=a?f["for"]||f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(s[t]=u&&i(f,t)?f[t]:l("Symbol."+t)),s[t]}},7658:function(t,e,n){"use strict";var r=n(2109),o=n(7908),i=n(6244),c=n(3658),u=n(7207),a=n(7293),f=a((function(){return 4294967297!==[].push.call({length:4294967296},1)})),s=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},l=f||!s();r({target:"Array",proto:!0,arity:1,forced:l},{push:function(t){var e=o(this),n=i(e),r=arguments.length;u(n+r);for(var a=0;a<r;a++)e[n]=arguments[a],n++;return c(e,n),n}})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}!function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}();var r={};return function(){"use strict";if(n.r(r),n.d(r,{default:function(){return v}}),"undefined"!==typeof window){var t=window.document.currentScript,e=t&&t.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);e&&(n.p=e[1])}n(7658);let o=[],i="default";function c(t,e,n,r="default",l=0,d="right_click"){s(l),o.push({el:document.createElement("div"),menu_items:n,type:d});const h=o[l].el;document.body.appendChild(h),h.classList.add("custom_menu_div"),h.style.zIndex=99999,0===l&&(i=r||"default"),h.setAttribute("theme",i);let v=document.createElement("ul");return h.appendChild(v),Array.isArray(n)&&n.forEach(((t,e)=>{const o=document.createElement("li");if(o.id=`li-${l}-${e}`,o.classList.add("menu-ul-li"),"object"===typeof t.custom_style)for(const n in t.custom_style)o.style[n]=t.custom_style[n];t.custom_class&&t.custom_class.split&&t.custom_class.split(" ").forEach((t=>{o.classList.add(t.trim())})),t.border_top&&o.classList.add("border-top");const i=document.createElement("div");if(i.classList&&i.classList.add("menu-i-div"),t.icon_class){const e=document.createElement("i");t.icon_class.split(" ").forEach((t=>{e.classList.add(t.trim())})),i.appendChild(e)}else if(t.icon_img){const e=document.createElement("img");e.src=t.icon_img,i.appendChild(e)}const u=document.createElement("div");u.classList&&u.classList.add("menu-text-div"),o.appendChild(i),o.appendChild(u);const a=document.createElement("div");if(a.classList.add("menu-right-div"),o.appendChild(a),Array.isArray(t.children)&&t.children.length>0?a.classList.add("i-right"):a.classList.add("i-check"),t.checked&&o.classList.add("li-checked"),v.appendChild(o),u.innerText=t.text,t.children){const e=t.trigger||"click";"hover"===e?(o.onmouseenter=e=>{e.stopPropagation(),e.preventDefault();const n=f(e.target,"menu-ul-li"),{top:o,right:i}=n.getBoundingClientRect();c(i,o,t.children,r,l+1,"hover")},o.onclick=e=>{e.stopPropagation(),e.preventDefault(),"function"===typeof t.click&&t.click(t,e,o)}):"click"===e&&(o.onmouseenter=t=>{t.stopPropagation(),t.preventDefault(),s(l+1)},o.onclick=e=>{e.stopPropagation(),e.preventDefault();const n=f(e.target,"menu-ul-li"),{top:i,right:u}=n.getBoundingClientRect();c(u,i,t.children,r,l+1,"click"),"function"===typeof t.click&&t.click(t,e,o)})}else o.onmouseenter=t=>{t.stopPropagation(),t.preventDefault(),s(l+1)},o.onclick=e=>{e.stopPropagation(),e.preventDefault(),t.selector&&(t.group?(n.forEach(((e,n)=>{if(e.group===t.group){const t=document.getElementById(`li-${l}-${n}`);e.checked=!1,t.classList.remove("li-checked")}})),t.checked=!0,o.classList.add("li-checked")):(t.checked=!t.checked,t.checked?o.classList.add("li-checked"):o.classList.remove("li-checked"))),"function"===typeof t.click&&t.click(t,e,o),t.click_keep||(s(0),document.onclick=null)}})),h.style.left=t+"px",h.style.top=e+"px",p(),0===l&&a(),{setTheme:u}}function u(t){i=t,o.length>0&&o.forEach((e=>{e.el.setAttribute("theme",t)}))}function a(){document.onclick&&(document.onclick=null),document.onclick=t=>{if(o.length>0){let e=!1;const{clientX:n,clientY:r}=t;for(let t=0;t<o.length;t++){const i=o[t].el,{top:c,bottom:u,left:a,right:f}=i.getBoundingClientRect();a<n&&f>n&&c<r&&u>r&&(e=!0)}e||(s(0),document.onclick=null)}}}function f(t,e){return t.classList.contains(e)?t:t.parentElement?f(t.parentElement,e):{}}function s(t){if(o[t]){const e=o.pop();document.body.removeChild(e.el),t<o.length&&s(t)}}function l(){const t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return{width:t,height:e}}function p(){const{width:t,height:e}=l(),n=o[o.length-1],{right:r,bottom:i}=n.el.getBoundingClientRect();if(r>t)for(let c=0;c<o.length;c++){const{left:e}=o[c].el.getBoundingClientRect();o[c].el.style.right="auto",o[c].el.style.left=e-(r-t)+"px"}if(i>e)for(let c=0;c<o.length;c++){const{top:t}=o[c].el.getBoundingClientRect();o[c].el.style.bottom="auto",o[c].el.style.top=t-(i-e)+"px"}}const d=function(t){t.prototype&&(t.prototype.$createRightMenu=c),t.config.globalProperties&&(t.config.globalProperties.$createRightMenu=c)};window.createRightMenu=c;var h=d,v=h}(),r}()}));
//# sourceMappingURL=hycontextmenu.umd.min.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(639);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 239:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(705),
    getRawTag = __webpack_require__(607),
    objectToString = __webpack_require__(333);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 561:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(990);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 957:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 607:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(705);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 333:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 639:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(957);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 990:
/***/ (function(module) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 279:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(218),
    now = __webpack_require__(771),
    toNumber = __webpack_require__(841);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 218:
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 5:
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 448:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(239),
    isObjectLike = __webpack_require__(5);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 771:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(639);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 493:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var debounce = __webpack_require__(279),
    isObject = __webpack_require__(218);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 841:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTrim = __webpack_require__(561),
    isObject = __webpack_require__(218),
    isSymbol = __webpack_require__(448);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

(typeof navigator !== "undefined") && (function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  var svgNS = 'http://www.w3.org/2000/svg';
  var locationHref = '';
  var _useWebWorker = false;
  var initialDefaultFrame = -999999;

  var setWebWorker = function setWebWorker(flag) {
    _useWebWorker = !!flag;
  };

  var getWebWorker = function getWebWorker() {
    return _useWebWorker;
  };

  var setLocationHref = function setLocationHref(value) {
    locationHref = value;
  };

  var getLocationHref = function getLocationHref() {
    return locationHref;
  };

  function createTag(type) {
    // return {appendChild:function(){},setAttribute:function(){},style:{}}
    return document.createElement(type);
  }

  function extendPrototype(sources, destination) {
    var i;
    var len = sources.length;
    var sourcePrototype;

    for (i = 0; i < len; i += 1) {
      sourcePrototype = sources[i].prototype;

      for (var attr in sourcePrototype) {
        if (Object.prototype.hasOwnProperty.call(sourcePrototype, attr)) destination.prototype[attr] = sourcePrototype[attr];
      }
    }
  }

  function getDescriptor(object, prop) {
    return Object.getOwnPropertyDescriptor(object, prop);
  }

  function createProxyFunction(prototype) {
    function ProxyFunction() {}

    ProxyFunction.prototype = prototype;
    return ProxyFunction;
  }

  // import Howl from '../../3rd_party/howler';
  var audioControllerFactory = function () {
    function AudioController(audioFactory) {
      this.audios = [];
      this.audioFactory = audioFactory;
      this._volume = 1;
      this._isMuted = false;
    }

    AudioController.prototype = {
      addAudio: function addAudio(audio) {
        this.audios.push(audio);
      },
      pause: function pause() {
        var i;
        var len = this.audios.length;

        for (i = 0; i < len; i += 1) {
          this.audios[i].pause();
        }
      },
      resume: function resume() {
        var i;
        var len = this.audios.length;

        for (i = 0; i < len; i += 1) {
          this.audios[i].resume();
        }
      },
      setRate: function setRate(rateValue) {
        var i;
        var len = this.audios.length;

        for (i = 0; i < len; i += 1) {
          this.audios[i].setRate(rateValue);
        }
      },
      createAudio: function createAudio(assetPath) {
        if (this.audioFactory) {
          return this.audioFactory(assetPath);
        }

        if (window.Howl) {
          return new window.Howl({
            src: [assetPath]
          });
        }

        return {
          isPlaying: false,
          play: function play() {
            this.isPlaying = true;
          },
          seek: function seek() {
            this.isPlaying = false;
          },
          playing: function playing() {},
          rate: function rate() {},
          setVolume: function setVolume() {}
        };
      },
      setAudioFactory: function setAudioFactory(audioFactory) {
        this.audioFactory = audioFactory;
      },
      setVolume: function setVolume(value) {
        this._volume = value;

        this._updateVolume();
      },
      mute: function mute() {
        this._isMuted = true;

        this._updateVolume();
      },
      unmute: function unmute() {
        this._isMuted = false;

        this._updateVolume();
      },
      getVolume: function getVolume() {
        return this._volume;
      },
      _updateVolume: function _updateVolume() {
        var i;
        var len = this.audios.length;

        for (i = 0; i < len; i += 1) {
          this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1));
        }
      }
    };
    return function () {
      return new AudioController();
    };
  }();

  var createTypedArray = function () {
    function createRegularArray(type, len) {
      var i = 0;
      var arr = [];
      var value;

      switch (type) {
        case 'int16':
        case 'uint8c':
          value = 1;
          break;

        default:
          value = 1.1;
          break;
      }

      for (i = 0; i < len; i += 1) {
        arr.push(value);
      }

      return arr;
    }

    function createTypedArrayFactory(type, len) {
      if (type === 'float32') {
        return new Float32Array(len);
      }

      if (type === 'int16') {
        return new Int16Array(len);
      }

      if (type === 'uint8c') {
        return new Uint8ClampedArray(len);
      }

      return createRegularArray(type, len);
    }

    if (typeof Uint8ClampedArray === 'function' && typeof Float32Array === 'function') {
      return createTypedArrayFactory;
    }

    return createRegularArray;
  }();

  function createSizedArray(len) {
    return Array.apply(null, {
      length: len
    });
  }

  function _typeof$6(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }
  var subframeEnabled = true;
  var expressionsPlugin = null;
  var expressionsInterfaces = null;
  var idPrefix$1 = '';
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  var _shouldRoundValues = false;
  var bmPow = Math.pow;
  var bmSqrt = Math.sqrt;
  var bmFloor = Math.floor;
  var bmMax = Math.max;
  var bmMin = Math.min;
  var BMMath = {};

  (function () {
    var propertyNames = ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh', 'atan2', 'ceil', 'cbrt', 'expm1', 'clz32', 'cos', 'cosh', 'exp', 'floor', 'fround', 'hypot', 'imul', 'log', 'log1p', 'log2', 'log10', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc', 'E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2'];
    var i;
    var len = propertyNames.length;

    for (i = 0; i < len; i += 1) {
      BMMath[propertyNames[i]] = Math[propertyNames[i]];
    }
  })();

  function ProjectInterface$1() {
    return {};
  }

  BMMath.random = Math.random;

  BMMath.abs = function (val) {
    var tOfVal = _typeof$6(val);

    if (tOfVal === 'object' && val.length) {
      var absArr = createSizedArray(val.length);
      var i;
      var len = val.length;

      for (i = 0; i < len; i += 1) {
        absArr[i] = Math.abs(val[i]);
      }

      return absArr;
    }

    return Math.abs(val);
  };

  var defaultCurveSegments = 150;
  var degToRads = Math.PI / 180;
  var roundCorner = 0.5519;

  function roundValues(flag) {
    _shouldRoundValues = !!flag;
  }

  function bmRnd(value) {
    if (_shouldRoundValues) {
      return Math.round(value);
    }

    return value;
  }

  function styleDiv(element) {
    element.style.position = 'absolute';
    element.style.top = 0;
    element.style.left = 0;
    element.style.display = 'block';
    element.style.transformOrigin = '0 0';
    element.style.webkitTransformOrigin = '0 0';
    element.style.backfaceVisibility = 'visible';
    element.style.webkitBackfaceVisibility = 'visible';
    element.style.transformStyle = 'preserve-3d';
    element.style.webkitTransformStyle = 'preserve-3d';
    element.style.mozTransformStyle = 'preserve-3d';
  }

  function BMEnterFrameEvent(type, currentTime, totalTime, frameMultiplier) {
    this.type = type;
    this.currentTime = currentTime;
    this.totalTime = totalTime;
    this.direction = frameMultiplier < 0 ? -1 : 1;
  }

  function BMCompleteEvent(type, frameMultiplier) {
    this.type = type;
    this.direction = frameMultiplier < 0 ? -1 : 1;
  }

  function BMCompleteLoopEvent(type, totalLoops, currentLoop, frameMultiplier) {
    this.type = type;
    this.currentLoop = currentLoop;
    this.totalLoops = totalLoops;
    this.direction = frameMultiplier < 0 ? -1 : 1;
  }

  function BMSegmentStartEvent(type, firstFrame, totalFrames) {
    this.type = type;
    this.firstFrame = firstFrame;
    this.totalFrames = totalFrames;
  }

  function BMDestroyEvent(type, target) {
    this.type = type;
    this.target = target;
  }

  function BMRenderFrameErrorEvent(nativeError, currentTime) {
    this.type = 'renderFrameError';
    this.nativeError = nativeError;
    this.currentTime = currentTime;
  }

  function BMConfigErrorEvent(nativeError) {
    this.type = 'configError';
    this.nativeError = nativeError;
  }

  function BMAnimationConfigErrorEvent(type, nativeError) {
    this.type = type;
    this.nativeError = nativeError;
  }

  var createElementID = function () {
    var _count = 0;
    return function createID() {
      _count += 1;
      return idPrefix$1 + '__lottie_element_' + _count;
    };
  }();

  function HSVtoRGB(h, s, v) {
    var r;
    var g;
    var b;
    var i;
    var f;
    var p;
    var q;
    var t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0:
        r = v;
        g = t;
        b = p;
        break;

      case 1:
        r = q;
        g = v;
        b = p;
        break;

      case 2:
        r = p;
        g = v;
        b = t;
        break;

      case 3:
        r = p;
        g = q;
        b = v;
        break;

      case 4:
        r = t;
        g = p;
        b = v;
        break;

      case 5:
        r = v;
        g = p;
        b = q;
        break;

      default:
        break;
    }

    return [r, g, b];
  }

  function RGBtoHSV(r, g, b) {
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var d = max - min;
    var h;
    var s = max === 0 ? 0 : d / max;
    var v = max / 255;

    switch (max) {
      case min:
        h = 0;
        break;

      case r:
        h = g - b + d * (g < b ? 6 : 0);
        h /= 6 * d;
        break;

      case g:
        h = b - r + d * 2;
        h /= 6 * d;
        break;

      case b:
        h = r - g + d * 4;
        h /= 6 * d;
        break;

      default:
        break;
    }

    return [h, s, v];
  }

  function addSaturationToRGB(color, offset) {
    var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
    hsv[1] += offset;

    if (hsv[1] > 1) {
      hsv[1] = 1;
    } else if (hsv[1] <= 0) {
      hsv[1] = 0;
    }

    return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
  }

  function addBrightnessToRGB(color, offset) {
    var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
    hsv[2] += offset;

    if (hsv[2] > 1) {
      hsv[2] = 1;
    } else if (hsv[2] < 0) {
      hsv[2] = 0;
    }

    return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
  }

  function addHueToRGB(color, offset) {
    var hsv = RGBtoHSV(color[0] * 255, color[1] * 255, color[2] * 255);
    hsv[0] += offset / 360;

    if (hsv[0] > 1) {
      hsv[0] -= 1;
    } else if (hsv[0] < 0) {
      hsv[0] += 1;
    }

    return HSVtoRGB(hsv[0], hsv[1], hsv[2]);
  }

  var rgbToHex = function () {
    var colorMap = [];
    var i;
    var hex;

    for (i = 0; i < 256; i += 1) {
      hex = i.toString(16);
      colorMap[i] = hex.length === 1 ? '0' + hex : hex;
    }

    return function (r, g, b) {
      if (r < 0) {
        r = 0;
      }

      if (g < 0) {
        g = 0;
      }

      if (b < 0) {
        b = 0;
      }

      return '#' + colorMap[r] + colorMap[g] + colorMap[b];
    };
  }();

  var setSubframeEnabled = function setSubframeEnabled(flag) {
    subframeEnabled = !!flag;
  };

  var getSubframeEnabled = function getSubframeEnabled() {
    return subframeEnabled;
  };

  var setExpressionsPlugin = function setExpressionsPlugin(value) {
    expressionsPlugin = value;
  };

  var getExpressionsPlugin = function getExpressionsPlugin() {
    return expressionsPlugin;
  };

  var setExpressionInterfaces = function setExpressionInterfaces(value) {
    expressionsInterfaces = value;
  };

  var getExpressionInterfaces = function getExpressionInterfaces() {
    return expressionsInterfaces;
  };

  var setDefaultCurveSegments = function setDefaultCurveSegments(value) {
    defaultCurveSegments = value;
  };

  var getDefaultCurveSegments = function getDefaultCurveSegments() {
    return defaultCurveSegments;
  };

  var setIdPrefix = function setIdPrefix(value) {
    idPrefix$1 = value;
  };

  var getIdPrefix = function getIdPrefix() {
    return idPrefix$1;
  };

  function createNS(type) {
    // return {appendChild:function(){},setAttribute:function(){},style:{}}
    return document.createElementNS(svgNS, type);
  }

  function _typeof$5(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

  var dataManager = function () {
    var _counterId = 1;
    var processes = [];
    var workerFn;
    var workerInstance;
    var workerProxy = {
      onmessage: function onmessage() {},
      postMessage: function postMessage(path) {
        workerFn({
          data: path
        });
      }
    };
    var _workerSelf = {
      postMessage: function postMessage(data) {
        workerProxy.onmessage({
          data: data
        });
      }
    };

    function createWorker(fn) {
      if (window.Worker && window.Blob && getWebWorker()) {
        var blob = new Blob(['var _workerSelf = self; self.onmessage = ', fn.toString()], {
          type: 'text/javascript'
        }); // var blob = new Blob(['self.onmessage = ', fn.toString()], { type: 'text/javascript' });

        var url = URL.createObjectURL(blob);
        return new Worker(url);
      }

      workerFn = fn;
      return workerProxy;
    }

    function setupWorker() {
      if (!workerInstance) {
        workerInstance = createWorker(function workerStart(e) {
          function dataFunctionManager() {
            function completeLayers(layers, comps) {
              var layerData;
              var i;
              var len = layers.length;
              var j;
              var jLen;
              var k;
              var kLen;

              for (i = 0; i < len; i += 1) {
                layerData = layers[i];

                if ('ks' in layerData && !layerData.completed) {
                  layerData.completed = true;

                  if (layerData.hasMask) {
                    var maskProps = layerData.masksProperties;
                    jLen = maskProps.length;

                    for (j = 0; j < jLen; j += 1) {
                      if (maskProps[j].pt.k.i) {
                        convertPathsToAbsoluteValues(maskProps[j].pt.k);
                      } else {
                        kLen = maskProps[j].pt.k.length;

                        for (k = 0; k < kLen; k += 1) {
                          if (maskProps[j].pt.k[k].s) {
                            convertPathsToAbsoluteValues(maskProps[j].pt.k[k].s[0]);
                          }

                          if (maskProps[j].pt.k[k].e) {
                            convertPathsToAbsoluteValues(maskProps[j].pt.k[k].e[0]);
                          }
                        }
                      }
                    }
                  }

                  if (layerData.ty === 0) {
                    layerData.layers = findCompLayers(layerData.refId, comps);
                    completeLayers(layerData.layers, comps);
                  } else if (layerData.ty === 4) {
                    completeShapes(layerData.shapes);
                  } else if (layerData.ty === 5) {
                    completeText(layerData);
                  }
                }
              }
            }

            function completeChars(chars, assets) {
              if (chars) {
                var i = 0;
                var len = chars.length;

                for (i = 0; i < len; i += 1) {
                  if (chars[i].t === 1) {
                    // var compData = findComp(chars[i].data.refId, assets);
                    chars[i].data.layers = findCompLayers(chars[i].data.refId, assets); // chars[i].data.ip = 0;
                    // chars[i].data.op = 99999;
                    // chars[i].data.st = 0;
                    // chars[i].data.sr = 1;
                    // chars[i].w = compData.w;
                    // chars[i].data.ks = {
                    //   a: { k: [0, 0, 0], a: 0 },
                    //   p: { k: [0, -compData.h, 0], a: 0 },
                    //   r: { k: 0, a: 0 },
                    //   s: { k: [100, 100], a: 0 },
                    //   o: { k: 100, a: 0 },
                    // };

                    completeLayers(chars[i].data.layers, assets);
                  }
                }
              }
            }

            function findComp(id, comps) {
              var i = 0;
              var len = comps.length;

              while (i < len) {
                if (comps[i].id === id) {
                  return comps[i];
                }

                i += 1;
              }

              return null;
            }

            function findCompLayers(id, comps) {
              var comp = findComp(id, comps);

              if (comp) {
                if (!comp.layers.__used) {
                  comp.layers.__used = true;
                  return comp.layers;
                }

                return JSON.parse(JSON.stringify(comp.layers));
              }

              return null;
            }

            function completeShapes(arr) {
              var i;
              var len = arr.length;
              var j;
              var jLen;

              for (i = len - 1; i >= 0; i -= 1) {
                if (arr[i].ty === 'sh') {
                  if (arr[i].ks.k.i) {
                    convertPathsToAbsoluteValues(arr[i].ks.k);
                  } else {
                    jLen = arr[i].ks.k.length;

                    for (j = 0; j < jLen; j += 1) {
                      if (arr[i].ks.k[j].s) {
                        convertPathsToAbsoluteValues(arr[i].ks.k[j].s[0]);
                      }

                      if (arr[i].ks.k[j].e) {
                        convertPathsToAbsoluteValues(arr[i].ks.k[j].e[0]);
                      }
                    }
                  }
                } else if (arr[i].ty === 'gr') {
                  completeShapes(arr[i].it);
                }
              }
            }

            function convertPathsToAbsoluteValues(path) {
              var i;
              var len = path.i.length;

              for (i = 0; i < len; i += 1) {
                path.i[i][0] += path.v[i][0];
                path.i[i][1] += path.v[i][1];
                path.o[i][0] += path.v[i][0];
                path.o[i][1] += path.v[i][1];
              }
            }

            function checkVersion(minimum, animVersionString) {
              var animVersion = animVersionString ? animVersionString.split('.') : [100, 100, 100];

              if (minimum[0] > animVersion[0]) {
                return true;
              }

              if (animVersion[0] > minimum[0]) {
                return false;
              }

              if (minimum[1] > animVersion[1]) {
                return true;
              }

              if (animVersion[1] > minimum[1]) {
                return false;
              }

              if (minimum[2] > animVersion[2]) {
                return true;
              }

              if (animVersion[2] > minimum[2]) {
                return false;
              }

              return null;
            }

            var checkText = function () {
              var minimumVersion = [4, 4, 14];

              function updateTextLayer(textLayer) {
                var documentData = textLayer.t.d;
                textLayer.t.d = {
                  k: [{
                    s: documentData,
                    t: 0
                  }]
                };
              }

              function iterateLayers(layers) {
                var i;
                var len = layers.length;

                for (i = 0; i < len; i += 1) {
                  if (layers[i].ty === 5) {
                    updateTextLayer(layers[i]);
                  }
                }
              }

              return function (animationData) {
                if (checkVersion(minimumVersion, animationData.v)) {
                  iterateLayers(animationData.layers);

                  if (animationData.assets) {
                    var i;
                    var len = animationData.assets.length;

                    for (i = 0; i < len; i += 1) {
                      if (animationData.assets[i].layers) {
                        iterateLayers(animationData.assets[i].layers);
                      }
                    }
                  }
                }
              };
            }();

            var checkChars = function () {
              var minimumVersion = [4, 7, 99];
              return function (animationData) {
                if (animationData.chars && !checkVersion(minimumVersion, animationData.v)) {
                  var i;
                  var len = animationData.chars.length;

                  for (i = 0; i < len; i += 1) {
                    var charData = animationData.chars[i];

                    if (charData.data && charData.data.shapes) {
                      completeShapes(charData.data.shapes);
                      charData.data.ip = 0;
                      charData.data.op = 99999;
                      charData.data.st = 0;
                      charData.data.sr = 1;
                      charData.data.ks = {
                        p: {
                          k: [0, 0],
                          a: 0
                        },
                        s: {
                          k: [100, 100],
                          a: 0
                        },
                        a: {
                          k: [0, 0],
                          a: 0
                        },
                        r: {
                          k: 0,
                          a: 0
                        },
                        o: {
                          k: 100,
                          a: 0
                        }
                      };

                      if (!animationData.chars[i].t) {
                        charData.data.shapes.push({
                          ty: 'no'
                        });
                        charData.data.shapes[0].it.push({
                          p: {
                            k: [0, 0],
                            a: 0
                          },
                          s: {
                            k: [100, 100],
                            a: 0
                          },
                          a: {
                            k: [0, 0],
                            a: 0
                          },
                          r: {
                            k: 0,
                            a: 0
                          },
                          o: {
                            k: 100,
                            a: 0
                          },
                          sk: {
                            k: 0,
                            a: 0
                          },
                          sa: {
                            k: 0,
                            a: 0
                          },
                          ty: 'tr'
                        });
                      }
                    }
                  }
                }
              };
            }();

            var checkPathProperties = function () {
              var minimumVersion = [5, 7, 15];

              function updateTextLayer(textLayer) {
                var pathData = textLayer.t.p;

                if (typeof pathData.a === 'number') {
                  pathData.a = {
                    a: 0,
                    k: pathData.a
                  };
                }

                if (typeof pathData.p === 'number') {
                  pathData.p = {
                    a: 0,
                    k: pathData.p
                  };
                }

                if (typeof pathData.r === 'number') {
                  pathData.r = {
                    a: 0,
                    k: pathData.r
                  };
                }
              }

              function iterateLayers(layers) {
                var i;
                var len = layers.length;

                for (i = 0; i < len; i += 1) {
                  if (layers[i].ty === 5) {
                    updateTextLayer(layers[i]);
                  }
                }
              }

              return function (animationData) {
                if (checkVersion(minimumVersion, animationData.v)) {
                  iterateLayers(animationData.layers);

                  if (animationData.assets) {
                    var i;
                    var len = animationData.assets.length;

                    for (i = 0; i < len; i += 1) {
                      if (animationData.assets[i].layers) {
                        iterateLayers(animationData.assets[i].layers);
                      }
                    }
                  }
                }
              };
            }();

            var checkColors = function () {
              var minimumVersion = [4, 1, 9];

              function iterateShapes(shapes) {
                var i;
                var len = shapes.length;
                var j;
                var jLen;

                for (i = 0; i < len; i += 1) {
                  if (shapes[i].ty === 'gr') {
                    iterateShapes(shapes[i].it);
                  } else if (shapes[i].ty === 'fl' || shapes[i].ty === 'st') {
                    if (shapes[i].c.k && shapes[i].c.k[0].i) {
                      jLen = shapes[i].c.k.length;

                      for (j = 0; j < jLen; j += 1) {
                        if (shapes[i].c.k[j].s) {
                          shapes[i].c.k[j].s[0] /= 255;
                          shapes[i].c.k[j].s[1] /= 255;
                          shapes[i].c.k[j].s[2] /= 255;
                          shapes[i].c.k[j].s[3] /= 255;
                        }

                        if (shapes[i].c.k[j].e) {
                          shapes[i].c.k[j].e[0] /= 255;
                          shapes[i].c.k[j].e[1] /= 255;
                          shapes[i].c.k[j].e[2] /= 255;
                          shapes[i].c.k[j].e[3] /= 255;
                        }
                      }
                    } else {
                      shapes[i].c.k[0] /= 255;
                      shapes[i].c.k[1] /= 255;
                      shapes[i].c.k[2] /= 255;
                      shapes[i].c.k[3] /= 255;
                    }
                  }
                }
              }

              function iterateLayers(layers) {
                var i;
                var len = layers.length;

                for (i = 0; i < len; i += 1) {
                  if (layers[i].ty === 4) {
                    iterateShapes(layers[i].shapes);
                  }
                }
              }

              return function (animationData) {
                if (checkVersion(minimumVersion, animationData.v)) {
                  iterateLayers(animationData.layers);

                  if (animationData.assets) {
                    var i;
                    var len = animationData.assets.length;

                    for (i = 0; i < len; i += 1) {
                      if (animationData.assets[i].layers) {
                        iterateLayers(animationData.assets[i].layers);
                      }
                    }
                  }
                }
              };
            }();

            var checkShapes = function () {
              var minimumVersion = [4, 4, 18];

              function completeClosingShapes(arr) {
                var i;
                var len = arr.length;
                var j;
                var jLen;

                for (i = len - 1; i >= 0; i -= 1) {
                  if (arr[i].ty === 'sh') {
                    if (arr[i].ks.k.i) {
                      arr[i].ks.k.c = arr[i].closed;
                    } else {
                      jLen = arr[i].ks.k.length;

                      for (j = 0; j < jLen; j += 1) {
                        if (arr[i].ks.k[j].s) {
                          arr[i].ks.k[j].s[0].c = arr[i].closed;
                        }

                        if (arr[i].ks.k[j].e) {
                          arr[i].ks.k[j].e[0].c = arr[i].closed;
                        }
                      }
                    }
                  } else if (arr[i].ty === 'gr') {
                    completeClosingShapes(arr[i].it);
                  }
                }
              }

              function iterateLayers(layers) {
                var layerData;
                var i;
                var len = layers.length;
                var j;
                var jLen;
                var k;
                var kLen;

                for (i = 0; i < len; i += 1) {
                  layerData = layers[i];

                  if (layerData.hasMask) {
                    var maskProps = layerData.masksProperties;
                    jLen = maskProps.length;

                    for (j = 0; j < jLen; j += 1) {
                      if (maskProps[j].pt.k.i) {
                        maskProps[j].pt.k.c = maskProps[j].cl;
                      } else {
                        kLen = maskProps[j].pt.k.length;

                        for (k = 0; k < kLen; k += 1) {
                          if (maskProps[j].pt.k[k].s) {
                            maskProps[j].pt.k[k].s[0].c = maskProps[j].cl;
                          }

                          if (maskProps[j].pt.k[k].e) {
                            maskProps[j].pt.k[k].e[0].c = maskProps[j].cl;
                          }
                        }
                      }
                    }
                  }

                  if (layerData.ty === 4) {
                    completeClosingShapes(layerData.shapes);
                  }
                }
              }

              return function (animationData) {
                if (checkVersion(minimumVersion, animationData.v)) {
                  iterateLayers(animationData.layers);

                  if (animationData.assets) {
                    var i;
                    var len = animationData.assets.length;

                    for (i = 0; i < len; i += 1) {
                      if (animationData.assets[i].layers) {
                        iterateLayers(animationData.assets[i].layers);
                      }
                    }
                  }
                }
              };
            }();

            function completeData(animationData) {
              if (animationData.__complete) {
                return;
              }

              checkColors(animationData);
              checkText(animationData);
              checkChars(animationData);
              checkPathProperties(animationData);
              checkShapes(animationData);
              completeLayers(animationData.layers, animationData.assets);
              completeChars(animationData.chars, animationData.assets);
              animationData.__complete = true;
            }

            function completeText(data) {
              if (data.t.a.length === 0 && !('m' in data.t.p)) {// data.singleShape = true;
              }
            }

            var moduleOb = {};
            moduleOb.completeData = completeData;
            moduleOb.checkColors = checkColors;
            moduleOb.checkChars = checkChars;
            moduleOb.checkPathProperties = checkPathProperties;
            moduleOb.checkShapes = checkShapes;
            moduleOb.completeLayers = completeLayers;
            return moduleOb;
          }

          if (!_workerSelf.dataManager) {
            _workerSelf.dataManager = dataFunctionManager();
          }

          if (!_workerSelf.assetLoader) {
            _workerSelf.assetLoader = function () {
              function formatResponse(xhr) {
                // using typeof doubles the time of execution of this method,
                // so if available, it's better to use the header to validate the type
                var contentTypeHeader = xhr.getResponseHeader('content-type');

                if (contentTypeHeader && xhr.responseType === 'json' && contentTypeHeader.indexOf('json') !== -1) {
                  return xhr.response;
                }

                if (xhr.response && _typeof$5(xhr.response) === 'object') {
                  return xhr.response;
                }

                if (xhr.response && typeof xhr.response === 'string') {
                  return JSON.parse(xhr.response);
                }

                if (xhr.responseText) {
                  return JSON.parse(xhr.responseText);
                }

                return null;
              }

              function loadAsset(path, fullPath, callback, errorCallback) {
                var response;
                var xhr = new XMLHttpRequest(); // set responseType after calling open or IE will break.

                try {
                  // This crashes on Android WebView prior to KitKat
                  xhr.responseType = 'json';
                } catch (err) {} // eslint-disable-line no-empty


                xhr.onreadystatechange = function () {
                  if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                      response = formatResponse(xhr);
                      callback(response);
                    } else {
                      try {
                        response = formatResponse(xhr);
                        callback(response);
                      } catch (err) {
                        if (errorCallback) {
                          errorCallback(err);
                        }
                      }
                    }
                  }
                };

                try {
                  // Hack to workaround banner validation
                  xhr.open(['G', 'E', 'T'].join(''), path, true);
                } catch (error) {
                  // Hack to workaround banner validation
                  xhr.open(['G', 'E', 'T'].join(''), fullPath + '/' + path, true);
                }

                xhr.send();
              }

              return {
                load: loadAsset
              };
            }();
          }

          if (e.data.type === 'loadAnimation') {
            _workerSelf.assetLoader.load(e.data.path, e.data.fullPath, function (data) {
              _workerSelf.dataManager.completeData(data);

              _workerSelf.postMessage({
                id: e.data.id,
                payload: data,
                status: 'success'
              });
            }, function () {
              _workerSelf.postMessage({
                id: e.data.id,
                status: 'error'
              });
            });
          } else if (e.data.type === 'complete') {
            var animation = e.data.animation;

            _workerSelf.dataManager.completeData(animation);

            _workerSelf.postMessage({
              id: e.data.id,
              payload: animation,
              status: 'success'
            });
          } else if (e.data.type === 'loadData') {
            _workerSelf.assetLoader.load(e.data.path, e.data.fullPath, function (data) {
              _workerSelf.postMessage({
                id: e.data.id,
                payload: data,
                status: 'success'
              });
            }, function () {
              _workerSelf.postMessage({
                id: e.data.id,
                status: 'error'
              });
            });
          }
        });

        workerInstance.onmessage = function (event) {
          var data = event.data;
          var id = data.id;
          var process = processes[id];
          processes[id] = null;

          if (data.status === 'success') {
            process.onComplete(data.payload);
          } else if (process.onError) {
            process.onError();
          }
        };
      }
    }

    function createProcess(onComplete, onError) {
      _counterId += 1;
      var id = 'processId_' + _counterId;
      processes[id] = {
        onComplete: onComplete,
        onError: onError
      };
      return id;
    }

    function loadAnimation(path, onComplete, onError) {
      setupWorker();
      var processId = createProcess(onComplete, onError);
      workerInstance.postMessage({
        type: 'loadAnimation',
        path: path,
        fullPath: window.location.origin + window.location.pathname,
        id: processId
      });
    }

    function loadData(path, onComplete, onError) {
      setupWorker();
      var processId = createProcess(onComplete, onError);
      workerInstance.postMessage({
        type: 'loadData',
        path: path,
        fullPath: window.location.origin + window.location.pathname,
        id: processId
      });
    }

    function completeAnimation(anim, onComplete, onError) {
      setupWorker();
      var processId = createProcess(onComplete, onError);
      workerInstance.postMessage({
        type: 'complete',
        animation: anim,
        id: processId
      });
    }

    return {
      loadAnimation: loadAnimation,
      loadData: loadData,
      completeAnimation: completeAnimation
    };
  }();

  var ImagePreloader = function () {
    var proxyImage = function () {
      var canvas = createTag('canvas');
      canvas.width = 1;
      canvas.height = 1;
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgba(0,0,0,0)';
      ctx.fillRect(0, 0, 1, 1);
      return canvas;
    }();

    function imageLoaded() {
      this.loadedAssets += 1;

      if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
        if (this.imagesLoadedCb) {
          this.imagesLoadedCb(null);
        }
      }
    }

    function footageLoaded() {
      this.loadedFootagesCount += 1;

      if (this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages) {
        if (this.imagesLoadedCb) {
          this.imagesLoadedCb(null);
        }
      }
    }

    function getAssetsPath(assetData, assetsPath, originalPath) {
      var path = '';

      if (assetData.e) {
        path = assetData.p;
      } else if (assetsPath) {
        var imagePath = assetData.p;

        if (imagePath.indexOf('images/') !== -1) {
          imagePath = imagePath.split('/')[1];
        }

        path = assetsPath + imagePath;
      } else {
        path = originalPath;
        path += assetData.u ? assetData.u : '';
        path += assetData.p;
      }

      return path;
    }

    function testImageLoaded(img) {
      var _count = 0;
      var intervalId = setInterval(function () {
        var box = img.getBBox();

        if (box.width || _count > 500) {
          this._imageLoaded();

          clearInterval(intervalId);
        }

        _count += 1;
      }.bind(this), 50);
    }

    function createImageData(assetData) {
      var path = getAssetsPath(assetData, this.assetsPath, this.path);
      var img = createNS('image');

      if (isSafari) {
        this.testImageLoaded(img);
      } else {
        img.addEventListener('load', this._imageLoaded, false);
      }

      img.addEventListener('error', function () {
        ob.img = proxyImage;

        this._imageLoaded();
      }.bind(this), false);
      img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);

      if (this._elementHelper.append) {
        this._elementHelper.append(img);
      } else {
        this._elementHelper.appendChild(img);
      }

      var ob = {
        img: img,
        assetData: assetData
      };
      return ob;
    }

    function createImgData(assetData) {
      var path = getAssetsPath(assetData, this.assetsPath, this.path);
      var img = createTag('img');
      img.crossOrigin = 'anonymous';
      img.addEventListener('load', this._imageLoaded, false);
      img.addEventListener('error', function () {
        ob.img = proxyImage;

        this._imageLoaded();
      }.bind(this), false);
      img.src = path;
      var ob = {
        img: img,
        assetData: assetData
      };
      return ob;
    }

    function createFootageData(data) {
      var ob = {
        assetData: data
      };
      var path = getAssetsPath(data, this.assetsPath, this.path);
      dataManager.loadData(path, function (footageData) {
        ob.img = footageData;

        this._footageLoaded();
      }.bind(this), function () {
        ob.img = {};

        this._footageLoaded();
      }.bind(this));
      return ob;
    }

    function loadAssets(assets, cb) {
      this.imagesLoadedCb = cb;
      var i;
      var len = assets.length;

      for (i = 0; i < len; i += 1) {
        if (!assets[i].layers) {
          if (!assets[i].t || assets[i].t === 'seq') {
            this.totalImages += 1;
            this.images.push(this._createImageData(assets[i]));
          } else if (assets[i].t === 3) {
            this.totalFootages += 1;
            this.images.push(this.createFootageData(assets[i]));
          }
        }
      }
    }

    function setPath(path) {
      this.path = path || '';
    }

    function setAssetsPath(path) {
      this.assetsPath = path || '';
    }

    function getAsset(assetData) {
      var i = 0;
      var len = this.images.length;

      while (i < len) {
        if (this.images[i].assetData === assetData) {
          return this.images[i].img;
        }

        i += 1;
      }

      return null;
    }

    function destroy() {
      this.imagesLoadedCb = null;
      this.images.length = 0;
    }

    function loadedImages() {
      return this.totalImages === this.loadedAssets;
    }

    function loadedFootages() {
      return this.totalFootages === this.loadedFootagesCount;
    }

    function setCacheType(type, elementHelper) {
      if (type === 'svg') {
        this._elementHelper = elementHelper;
        this._createImageData = this.createImageData.bind(this);
      } else {
        this._createImageData = this.createImgData.bind(this);
      }
    }

    function ImagePreloaderFactory() {
      this._imageLoaded = imageLoaded.bind(this);
      this._footageLoaded = footageLoaded.bind(this);
      this.testImageLoaded = testImageLoaded.bind(this);
      this.createFootageData = createFootageData.bind(this);
      this.assetsPath = '';
      this.path = '';
      this.totalImages = 0;
      this.totalFootages = 0;
      this.loadedAssets = 0;
      this.loadedFootagesCount = 0;
      this.imagesLoadedCb = null;
      this.images = [];
    }

    ImagePreloaderFactory.prototype = {
      loadAssets: loadAssets,
      setAssetsPath: setAssetsPath,
      setPath: setPath,
      loadedImages: loadedImages,
      loadedFootages: loadedFootages,
      destroy: destroy,
      getAsset: getAsset,
      createImgData: createImgData,
      createImageData: createImageData,
      imageLoaded: imageLoaded,
      footageLoaded: footageLoaded,
      setCacheType: setCacheType
    };
    return ImagePreloaderFactory;
  }();

  function BaseEvent() {}

  BaseEvent.prototype = {
    triggerEvent: function triggerEvent(eventName, args) {
      if (this._cbs[eventName]) {
        var callbacks = this._cbs[eventName];

        for (var i = 0; i < callbacks.length; i += 1) {
          callbacks[i](args);
        }
      }
    },
    addEventListener: function addEventListener(eventName, callback) {
      if (!this._cbs[eventName]) {
        this._cbs[eventName] = [];
      }

      this._cbs[eventName].push(callback);

      return function () {
        this.removeEventListener(eventName, callback);
      }.bind(this);
    },
    removeEventListener: function removeEventListener(eventName, callback) {
      if (!callback) {
        this._cbs[eventName] = null;
      } else if (this._cbs[eventName]) {
        var i = 0;
        var len = this._cbs[eventName].length;

        while (i < len) {
          if (this._cbs[eventName][i] === callback) {
            this._cbs[eventName].splice(i, 1);

            i -= 1;
            len -= 1;
          }

          i += 1;
        }

        if (!this._cbs[eventName].length) {
          this._cbs[eventName] = null;
        }
      }
    }
  };

  var markerParser = function () {
    function parsePayloadLines(payload) {
      var lines = payload.split('\r\n');
      var keys = {};
      var line;
      var keysCount = 0;

      for (var i = 0; i < lines.length; i += 1) {
        line = lines[i].split(':');

        if (line.length === 2) {
          keys[line[0]] = line[1].trim();
          keysCount += 1;
        }
      }

      if (keysCount === 0) {
        throw new Error();
      }

      return keys;
    }

    return function (_markers) {
      var markers = [];

      for (var i = 0; i < _markers.length; i += 1) {
        var _marker = _markers[i];
        var markerData = {
          time: _marker.tm,
          duration: _marker.dr
        };

        try {
          markerData.payload = JSON.parse(_markers[i].cm);
        } catch (_) {
          try {
            markerData.payload = parsePayloadLines(_markers[i].cm);
          } catch (__) {
            markerData.payload = {
              name: _markers[i].cm
            };
          }
        }

        markers.push(markerData);
      }

      return markers;
    };
  }();

  var ProjectInterface = function () {
    function registerComposition(comp) {
      this.compositions.push(comp);
    }

    return function () {
      function _thisProjectFunction(name) {
        var i = 0;
        var len = this.compositions.length;

        while (i < len) {
          if (this.compositions[i].data && this.compositions[i].data.nm === name) {
            if (this.compositions[i].prepareFrame && this.compositions[i].data.xt) {
              this.compositions[i].prepareFrame(this.currentFrame);
            }

            return this.compositions[i].compInterface;
          }

          i += 1;
        }

        return null;
      }

      _thisProjectFunction.compositions = [];
      _thisProjectFunction.currentFrame = 0;
      _thisProjectFunction.registerComposition = registerComposition;
      return _thisProjectFunction;
    };
  }();

  var renderers = {};

  var registerRenderer = function registerRenderer(key, value) {
    renderers[key] = value;
  };

  function getRenderer(key) {
    return renderers[key];
  }

  function getRegisteredRenderer() {
    // Returns canvas by default for compatibility
    if (renderers.canvas) {
      return 'canvas';
    } // Returns any renderer that is registered


    for (var key in renderers) {
      if (renderers[key]) {
        return key;
      }
    }

    return '';
  }

  function _typeof$4(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

  var AnimationItem = function AnimationItem() {
    this._cbs = [];
    this.name = '';
    this.path = '';
    this.isLoaded = false;
    this.currentFrame = 0;
    this.currentRawFrame = 0;
    this.firstFrame = 0;
    this.totalFrames = 0;
    this.frameRate = 0;
    this.frameMult = 0;
    this.playSpeed = 1;
    this.playDirection = 1;
    this.playCount = 0;
    this.animationData = {};
    this.assets = [];
    this.isPaused = true;
    this.autoplay = false;
    this.loop = true;
    this.renderer = null;
    this.animationID = createElementID();
    this.assetsPath = '';
    this.timeCompleted = 0;
    this.segmentPos = 0;
    this.isSubframeEnabled = getSubframeEnabled();
    this.segments = [];
    this._idle = true;
    this._completedLoop = false;
    this.projectInterface = ProjectInterface();
    this.imagePreloader = new ImagePreloader();
    this.audioController = audioControllerFactory();
    this.markers = [];
    this.configAnimation = this.configAnimation.bind(this);
    this.onSetupError = this.onSetupError.bind(this);
    this.onSegmentComplete = this.onSegmentComplete.bind(this);
    this.drawnFrameEvent = new BMEnterFrameEvent('drawnFrame', 0, 0, 0);
  };

  extendPrototype([BaseEvent], AnimationItem);

  AnimationItem.prototype.setParams = function (params) {
    if (params.wrapper || params.container) {
      this.wrapper = params.wrapper || params.container;
    }

    var animType = 'svg';

    if (params.animType) {
      animType = params.animType;
    } else if (params.renderer) {
      animType = params.renderer;
    }

    var RendererClass = getRenderer(animType);
    this.renderer = new RendererClass(this, params.rendererSettings);
    this.imagePreloader.setCacheType(animType, this.renderer.globalData.defs);
    this.renderer.setProjectInterface(this.projectInterface);
    this.animType = animType;

    if (params.loop === '' || params.loop === null || params.loop === undefined || params.loop === true) {
      this.loop = true;
    } else if (params.loop === false) {
      this.loop = false;
    } else {
      this.loop = parseInt(params.loop, 10);
    }

    this.autoplay = 'autoplay' in params ? params.autoplay : true;
    this.name = params.name ? params.name : '';
    this.autoloadSegments = Object.prototype.hasOwnProperty.call(params, 'autoloadSegments') ? params.autoloadSegments : true;
    this.assetsPath = params.assetsPath;
    this.initialSegment = params.initialSegment;

    if (params.audioFactory) {
      this.audioController.setAudioFactory(params.audioFactory);
    }

    if (params.animationData) {
      this.setupAnimation(params.animationData);
    } else if (params.path) {
      if (params.path.lastIndexOf('\\') !== -1) {
        this.path = params.path.substr(0, params.path.lastIndexOf('\\') + 1);
      } else {
        this.path = params.path.substr(0, params.path.lastIndexOf('/') + 1);
      }

      this.fileName = params.path.substr(params.path.lastIndexOf('/') + 1);
      this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf('.json'));
      dataManager.loadAnimation(params.path, this.configAnimation, this.onSetupError);
    }
  };

  AnimationItem.prototype.onSetupError = function () {
    this.trigger('data_failed');
  };

  AnimationItem.prototype.setupAnimation = function (data) {
    dataManager.completeAnimation(data, this.configAnimation);
  };

  AnimationItem.prototype.setData = function (wrapper, animationData) {
    if (animationData) {
      if (_typeof$4(animationData) !== 'object') {
        animationData = JSON.parse(animationData);
      }
    }

    var params = {
      wrapper: wrapper,
      animationData: animationData
    };
    var wrapperAttributes = wrapper.attributes;
    params.path = wrapperAttributes.getNamedItem('data-animation-path') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-animation-path').value : wrapperAttributes.getNamedItem('data-bm-path') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-path').value : wrapperAttributes.getNamedItem('bm-path') ? wrapperAttributes.getNamedItem('bm-path').value : '';
    params.animType = wrapperAttributes.getNamedItem('data-anim-type') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-type').value : wrapperAttributes.getNamedItem('data-bm-type') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-type').value : wrapperAttributes.getNamedItem('bm-type') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('bm-type').value : wrapperAttributes.getNamedItem('data-bm-renderer') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-renderer').value : wrapperAttributes.getNamedItem('bm-renderer') ? wrapperAttributes.getNamedItem('bm-renderer').value : getRegisteredRenderer() || 'canvas';
    var loop = wrapperAttributes.getNamedItem('data-anim-loop') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-loop').value : wrapperAttributes.getNamedItem('data-bm-loop') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-loop').value : wrapperAttributes.getNamedItem('bm-loop') ? wrapperAttributes.getNamedItem('bm-loop').value : '';

    if (loop === 'false') {
      params.loop = false;
    } else if (loop === 'true') {
      params.loop = true;
    } else if (loop !== '') {
      params.loop = parseInt(loop, 10);
    }

    var autoplay = wrapperAttributes.getNamedItem('data-anim-autoplay') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-autoplay').value : wrapperAttributes.getNamedItem('data-bm-autoplay') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-autoplay').value : wrapperAttributes.getNamedItem('bm-autoplay') ? wrapperAttributes.getNamedItem('bm-autoplay').value : true;
    params.autoplay = autoplay !== 'false';
    params.name = wrapperAttributes.getNamedItem('data-name') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-name').value : wrapperAttributes.getNamedItem('data-bm-name') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-name').value : wrapperAttributes.getNamedItem('bm-name') ? wrapperAttributes.getNamedItem('bm-name').value : '';
    var prerender = wrapperAttributes.getNamedItem('data-anim-prerender') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-anim-prerender').value : wrapperAttributes.getNamedItem('data-bm-prerender') // eslint-disable-line no-nested-ternary
    ? wrapperAttributes.getNamedItem('data-bm-prerender').value : wrapperAttributes.getNamedItem('bm-prerender') ? wrapperAttributes.getNamedItem('bm-prerender').value : '';

    if (prerender === 'false') {
      params.prerender = false;
    }

    if (!params.path) {
      this.trigger('destroy');
    } else {
      this.setParams(params);
    }
  };

  AnimationItem.prototype.includeLayers = function (data) {
    if (data.op > this.animationData.op) {
      this.animationData.op = data.op;
      this.totalFrames = Math.floor(data.op - this.animationData.ip);
    }

    var layers = this.animationData.layers;
    var i;
    var len = layers.length;
    var newLayers = data.layers;
    var j;
    var jLen = newLayers.length;

    for (j = 0; j < jLen; j += 1) {
      i = 0;

      while (i < len) {
        if (layers[i].id === newLayers[j].id) {
          layers[i] = newLayers[j];
          break;
        }

        i += 1;
      }
    }

    if (data.chars || data.fonts) {
      this.renderer.globalData.fontManager.addChars(data.chars);
      this.renderer.globalData.fontManager.addFonts(data.fonts, this.renderer.globalData.defs);
    }

    if (data.assets) {
      len = data.assets.length;

      for (i = 0; i < len; i += 1) {
        this.animationData.assets.push(data.assets[i]);
      }
    }

    this.animationData.__complete = false;
    dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
  };

  AnimationItem.prototype.onSegmentComplete = function (data) {
    this.animationData = data;
    var expressionsPlugin = getExpressionsPlugin();

    if (expressionsPlugin) {
      expressionsPlugin.initExpressions(this);
    }

    this.loadNextSegment();
  };

  AnimationItem.prototype.loadNextSegment = function () {
    var segments = this.animationData.segments;

    if (!segments || segments.length === 0 || !this.autoloadSegments) {
      this.trigger('data_ready');
      this.timeCompleted = this.totalFrames;
      return;
    }

    var segment = segments.shift();
    this.timeCompleted = segment.time * this.frameRate;
    var segmentPath = this.path + this.fileName + '_' + this.segmentPos + '.json';
    this.segmentPos += 1;
    dataManager.loadData(segmentPath, this.includeLayers.bind(this), function () {
      this.trigger('data_failed');
    }.bind(this));
  };

  AnimationItem.prototype.loadSegments = function () {
    var segments = this.animationData.segments;

    if (!segments) {
      this.timeCompleted = this.totalFrames;
    }

    this.loadNextSegment();
  };

  AnimationItem.prototype.imagesLoaded = function () {
    this.trigger('loaded_images');
    this.checkLoaded();
  };

  AnimationItem.prototype.preloadImages = function () {
    this.imagePreloader.setAssetsPath(this.assetsPath);
    this.imagePreloader.setPath(this.path);
    this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
  };

  AnimationItem.prototype.configAnimation = function (animData) {
    if (!this.renderer) {
      return;
    }

    try {
      this.animationData = animData;

      if (this.initialSegment) {
        this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]);
        this.firstFrame = Math.round(this.initialSegment[0]);
      } else {
        this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip);
        this.firstFrame = Math.round(this.animationData.ip);
      }

      this.renderer.configAnimation(animData);

      if (!animData.assets) {
        animData.assets = [];
      }

      this.assets = this.animationData.assets;
      this.frameRate = this.animationData.fr;
      this.frameMult = this.animationData.fr / 1000;
      this.renderer.searchExtraCompositions(animData.assets);
      this.markers = markerParser(animData.markers || []);
      this.trigger('config_ready');
      this.preloadImages();
      this.loadSegments();
      this.updaFrameModifier();
      this.waitForFontsLoaded();

      if (this.isPaused) {
        this.audioController.pause();
      }
    } catch (error) {
      this.triggerConfigError(error);
    }
  };

  AnimationItem.prototype.waitForFontsLoaded = function () {
    if (!this.renderer) {
      return;
    }

    if (this.renderer.globalData.fontManager.isLoaded) {
      this.checkLoaded();
    } else {
      setTimeout(this.waitForFontsLoaded.bind(this), 20);
    }
  };

  AnimationItem.prototype.checkLoaded = function () {
    if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== 'canvas') && this.imagePreloader.loadedFootages()) {
      this.isLoaded = true;
      var expressionsPlugin = getExpressionsPlugin();

      if (expressionsPlugin) {
        expressionsPlugin.initExpressions(this);
      }

      this.renderer.initItems();
      setTimeout(function () {
        this.trigger('DOMLoaded');
      }.bind(this), 0);
      this.gotoFrame();

      if (this.autoplay) {
        this.play();
      }
    }
  };

  AnimationItem.prototype.resize = function (width, height) {
    // Adding this validation for backwards compatibility in case an event object was being passed down
    var _width = typeof width === 'number' ? width : undefined;

    var _height = typeof height === 'number' ? height : undefined;

    this.renderer.updateContainerSize(_width, _height);
  };

  AnimationItem.prototype.setSubframe = function (flag) {
    this.isSubframeEnabled = !!flag;
  };

  AnimationItem.prototype.gotoFrame = function () {
    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame; // eslint-disable-line no-bitwise

    if (this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted) {
      this.currentFrame = this.timeCompleted;
    }

    this.trigger('enterFrame');
    this.renderFrame();
    this.trigger('drawnFrame');
  };

  AnimationItem.prototype.renderFrame = function () {
    if (this.isLoaded === false || !this.renderer) {
      return;
    }

    try {
      this.renderer.renderFrame(this.currentFrame + this.firstFrame);
    } catch (error) {
      this.triggerRenderFrameError(error);
    }
  };

  AnimationItem.prototype.play = function (name) {
    if (name && this.name !== name) {
      return;
    }

    if (this.isPaused === true) {
      this.isPaused = false;
      this.trigger('_pause');
      this.audioController.resume();

      if (this._idle) {
        this._idle = false;
        this.trigger('_active');
      }
    }
  };

  AnimationItem.prototype.pause = function (name) {
    if (name && this.name !== name) {
      return;
    }

    if (this.isPaused === false) {
      this.isPaused = true;
      this.trigger('_play');
      this._idle = true;
      this.trigger('_idle');
      this.audioController.pause();
    }
  };

  AnimationItem.prototype.togglePause = function (name) {
    if (name && this.name !== name) {
      return;
    }

    if (this.isPaused === true) {
      this.play();
    } else {
      this.pause();
    }
  };

  AnimationItem.prototype.stop = function (name) {
    if (name && this.name !== name) {
      return;
    }

    this.pause();
    this.playCount = 0;
    this._completedLoop = false;
    this.setCurrentRawFrameValue(0);
  };

  AnimationItem.prototype.getMarkerData = function (markerName) {
    var marker;

    for (var i = 0; i < this.markers.length; i += 1) {
      marker = this.markers[i];

      if (marker.payload && marker.payload.name === markerName) {
        return marker;
      }
    }

    return null;
  };

  AnimationItem.prototype.goToAndStop = function (value, isFrame, name) {
    if (name && this.name !== name) {
      return;
    }

    var numValue = Number(value);

    if (isNaN(numValue)) {
      var marker = this.getMarkerData(value);

      if (marker) {
        this.goToAndStop(marker.time, true);
      }
    } else if (isFrame) {
      this.setCurrentRawFrameValue(value);
    } else {
      this.setCurrentRawFrameValue(value * this.frameModifier);
    }

    this.pause();
  };

  AnimationItem.prototype.goToAndPlay = function (value, isFrame, name) {
    if (name && this.name !== name) {
      return;
    }

    var numValue = Number(value);

    if (isNaN(numValue)) {
      var marker = this.getMarkerData(value);

      if (marker) {
        if (!marker.duration) {
          this.goToAndStop(marker.time, true);
        } else {
          this.playSegments([marker.time, marker.time + marker.duration], true);
        }
      }
    } else {
      this.goToAndStop(numValue, isFrame, name);
    }

    this.play();
  };

  AnimationItem.prototype.advanceTime = function (value) {
    if (this.isPaused === true || this.isLoaded === false) {
      return;
    }

    var nextValue = this.currentRawFrame + value * this.frameModifier;
    var _isComplete = false; // Checking if nextValue > totalFrames - 1 for addressing non looping and looping animations.
    // If animation won't loop, it should stop at totalFrames - 1. If it will loop it should complete the last frame and then loop.

    if (nextValue >= this.totalFrames - 1 && this.frameModifier > 0) {
      if (!this.loop || this.playCount === this.loop) {
        if (!this.checkSegments(nextValue > this.totalFrames ? nextValue % this.totalFrames : 0)) {
          _isComplete = true;
          nextValue = this.totalFrames - 1;
        }
      } else if (nextValue >= this.totalFrames) {
        this.playCount += 1;

        if (!this.checkSegments(nextValue % this.totalFrames)) {
          this.setCurrentRawFrameValue(nextValue % this.totalFrames);
          this._completedLoop = true;
          this.trigger('loopComplete');
        }
      } else {
        this.setCurrentRawFrameValue(nextValue);
      }
    } else if (nextValue < 0) {
      if (!this.checkSegments(nextValue % this.totalFrames)) {
        if (this.loop && !(this.playCount-- <= 0 && this.loop !== true)) {
          // eslint-disable-line no-plusplus
          this.setCurrentRawFrameValue(this.totalFrames + nextValue % this.totalFrames);

          if (!this._completedLoop) {
            this._completedLoop = true;
          } else {
            this.trigger('loopComplete');
          }
        } else {
          _isComplete = true;
          nextValue = 0;
        }
      }
    } else {
      this.setCurrentRawFrameValue(nextValue);
    }

    if (_isComplete) {
      this.setCurrentRawFrameValue(nextValue);
      this.pause();
      this.trigger('complete');
    }
  };

  AnimationItem.prototype.adjustSegment = function (arr, offset) {
    this.playCount = 0;

    if (arr[1] < arr[0]) {
      if (this.frameModifier > 0) {
        if (this.playSpeed < 0) {
          this.setSpeed(-this.playSpeed);
        } else {
          this.setDirection(-1);
        }
      }

      this.totalFrames = arr[0] - arr[1];
      this.timeCompleted = this.totalFrames;
      this.firstFrame = arr[1];
      this.setCurrentRawFrameValue(this.totalFrames - 0.001 - offset);
    } else if (arr[1] > arr[0]) {
      if (this.frameModifier < 0) {
        if (this.playSpeed < 0) {
          this.setSpeed(-this.playSpeed);
        } else {
          this.setDirection(1);
        }
      }

      this.totalFrames = arr[1] - arr[0];
      this.timeCompleted = this.totalFrames;
      this.firstFrame = arr[0];
      this.setCurrentRawFrameValue(0.001 + offset);
    }

    this.trigger('segmentStart');
  };

  AnimationItem.prototype.setSegment = function (init, end) {
    var pendingFrame = -1;

    if (this.isPaused) {
      if (this.currentRawFrame + this.firstFrame < init) {
        pendingFrame = init;
      } else if (this.currentRawFrame + this.firstFrame > end) {
        pendingFrame = end - init;
      }
    }

    this.firstFrame = init;
    this.totalFrames = end - init;
    this.timeCompleted = this.totalFrames;

    if (pendingFrame !== -1) {
      this.goToAndStop(pendingFrame, true);
    }
  };

  AnimationItem.prototype.playSegments = function (arr, forceFlag) {
    if (forceFlag) {
      this.segments.length = 0;
    }

    if (_typeof$4(arr[0]) === 'object') {
      var i;
      var len = arr.length;

      for (i = 0; i < len; i += 1) {
        this.segments.push(arr[i]);
      }
    } else {
      this.segments.push(arr);
    }

    if (this.segments.length && forceFlag) {
      this.adjustSegment(this.segments.shift(), 0);
    }

    if (this.isPaused) {
      this.play();
    }
  };

  AnimationItem.prototype.resetSegments = function (forceFlag) {
    this.segments.length = 0;
    this.segments.push([this.animationData.ip, this.animationData.op]);

    if (forceFlag) {
      this.checkSegments(0);
    }
  };

  AnimationItem.prototype.checkSegments = function (offset) {
    if (this.segments.length) {
      this.adjustSegment(this.segments.shift(), offset);
      return true;
    }

    return false;
  };

  AnimationItem.prototype.destroy = function (name) {
    if (name && this.name !== name || !this.renderer) {
      return;
    }

    this.renderer.destroy();
    this.imagePreloader.destroy();
    this.trigger('destroy');
    this._cbs = null;
    this.onEnterFrame = null;
    this.onLoopComplete = null;
    this.onComplete = null;
    this.onSegmentStart = null;
    this.onDestroy = null;
    this.renderer = null;
    this.renderer = null;
    this.imagePreloader = null;
    this.projectInterface = null;
  };

  AnimationItem.prototype.setCurrentRawFrameValue = function (value) {
    this.currentRawFrame = value;
    this.gotoFrame();
  };

  AnimationItem.prototype.setSpeed = function (val) {
    this.playSpeed = val;
    this.updaFrameModifier();
  };

  AnimationItem.prototype.setDirection = function (val) {
    this.playDirection = val < 0 ? -1 : 1;
    this.updaFrameModifier();
  };

  AnimationItem.prototype.setLoop = function (isLooping) {
    this.loop = isLooping;
  };

  AnimationItem.prototype.setVolume = function (val, name) {
    if (name && this.name !== name) {
      return;
    }

    this.audioController.setVolume(val);
  };

  AnimationItem.prototype.getVolume = function () {
    return this.audioController.getVolume();
  };

  AnimationItem.prototype.mute = function (name) {
    if (name && this.name !== name) {
      return;
    }

    this.audioController.mute();
  };

  AnimationItem.prototype.unmute = function (name) {
    if (name && this.name !== name) {
      return;
    }

    this.audioController.unmute();
  };

  AnimationItem.prototype.updaFrameModifier = function () {
    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection;
    this.audioController.setRate(this.playSpeed * this.playDirection);
  };

  AnimationItem.prototype.getPath = function () {
    return this.path;
  };

  AnimationItem.prototype.getAssetsPath = function (assetData) {
    var path = '';

    if (assetData.e) {
      path = assetData.p;
    } else if (this.assetsPath) {
      var imagePath = assetData.p;

      if (imagePath.indexOf('images/') !== -1) {
        imagePath = imagePath.split('/')[1];
      }

      path = this.assetsPath + imagePath;
    } else {
      path = this.path;
      path += assetData.u ? assetData.u : '';
      path += assetData.p;
    }

    return path;
  };

  AnimationItem.prototype.getAssetData = function (id) {
    var i = 0;
    var len = this.assets.length;

    while (i < len) {
      if (id === this.assets[i].id) {
        return this.assets[i];
      }

      i += 1;
    }

    return null;
  };

  AnimationItem.prototype.hide = function () {
    this.renderer.hide();
  };

  AnimationItem.prototype.show = function () {
    this.renderer.show();
  };

  AnimationItem.prototype.getDuration = function (isFrame) {
    return isFrame ? this.totalFrames : this.totalFrames / this.frameRate;
  };

  AnimationItem.prototype.updateDocumentData = function (path, documentData, index) {
    try {
      var element = this.renderer.getElementByPath(path);
      element.updateDocumentData(documentData, index);
    } catch (error) {// TODO: decide how to handle catch case
    }
  };

  AnimationItem.prototype.trigger = function (name) {
    if (this._cbs && this._cbs[name]) {
      switch (name) {
        case 'enterFrame':
          this.triggerEvent(name, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameModifier));
          break;

        case 'drawnFrame':
          this.drawnFrameEvent.currentTime = this.currentFrame;
          this.drawnFrameEvent.totalTime = this.totalFrames;
          this.drawnFrameEvent.direction = this.frameModifier;
          this.triggerEvent(name, this.drawnFrameEvent);
          break;

        case 'loopComplete':
          this.triggerEvent(name, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
          break;

        case 'complete':
          this.triggerEvent(name, new BMCompleteEvent(name, this.frameMult));
          break;

        case 'segmentStart':
          this.triggerEvent(name, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
          break;

        case 'destroy':
          this.triggerEvent(name, new BMDestroyEvent(name, this));
          break;

        default:
          this.triggerEvent(name);
      }
    }

    if (name === 'enterFrame' && this.onEnterFrame) {
      this.onEnterFrame.call(this, new BMEnterFrameEvent(name, this.currentFrame, this.totalFrames, this.frameMult));
    }

    if (name === 'loopComplete' && this.onLoopComplete) {
      this.onLoopComplete.call(this, new BMCompleteLoopEvent(name, this.loop, this.playCount, this.frameMult));
    }

    if (name === 'complete' && this.onComplete) {
      this.onComplete.call(this, new BMCompleteEvent(name, this.frameMult));
    }

    if (name === 'segmentStart' && this.onSegmentStart) {
      this.onSegmentStart.call(this, new BMSegmentStartEvent(name, this.firstFrame, this.totalFrames));
    }

    if (name === 'destroy' && this.onDestroy) {
      this.onDestroy.call(this, new BMDestroyEvent(name, this));
    }
  };

  AnimationItem.prototype.triggerRenderFrameError = function (nativeError) {
    var error = new BMRenderFrameErrorEvent(nativeError, this.currentFrame);
    this.triggerEvent('error', error);

    if (this.onError) {
      this.onError.call(this, error);
    }
  };

  AnimationItem.prototype.triggerConfigError = function (nativeError) {
    var error = new BMConfigErrorEvent(nativeError, this.currentFrame);
    this.triggerEvent('error', error);

    if (this.onError) {
      this.onError.call(this, error);
    }
  };

  var animationManager = function () {
    var moduleOb = {};
    var registeredAnimations = [];
    var initTime = 0;
    var len = 0;
    var playingAnimationsNum = 0;
    var _stopped = true;
    var _isFrozen = false;

    function removeElement(ev) {
      var i = 0;
      var animItem = ev.target;

      while (i < len) {
        if (registeredAnimations[i].animation === animItem) {
          registeredAnimations.splice(i, 1);
          i -= 1;
          len -= 1;

          if (!animItem.isPaused) {
            subtractPlayingCount();
          }
        }

        i += 1;
      }
    }

    function registerAnimation(element, animationData) {
      if (!element) {
        return null;
      }

      var i = 0;

      while (i < len) {
        if (registeredAnimations[i].elem === element && registeredAnimations[i].elem !== null) {
          return registeredAnimations[i].animation;
        }

        i += 1;
      }

      var animItem = new AnimationItem();
      setupAnimation(animItem, element);
      animItem.setData(element, animationData);
      return animItem;
    }

    function getRegisteredAnimations() {
      var i;
      var lenAnims = registeredAnimations.length;
      var animations = [];

      for (i = 0; i < lenAnims; i += 1) {
        animations.push(registeredAnimations[i].animation);
      }

      return animations;
    }

    function addPlayingCount() {
      playingAnimationsNum += 1;
      activate();
    }

    function subtractPlayingCount() {
      playingAnimationsNum -= 1;
    }

    function setupAnimation(animItem, element) {
      animItem.addEventListener('destroy', removeElement);
      animItem.addEventListener('_active', addPlayingCount);
      animItem.addEventListener('_idle', subtractPlayingCount);
      registeredAnimations.push({
        elem: element,
        animation: animItem
      });
      len += 1;
    }

    function loadAnimation(params) {
      var animItem = new AnimationItem();
      setupAnimation(animItem, null);
      animItem.setParams(params);
      return animItem;
    }

    function setSpeed(val, animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.setSpeed(val, animation);
      }
    }

    function setDirection(val, animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.setDirection(val, animation);
      }
    }

    function play(animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.play(animation);
      }
    }

    function resume(nowTime) {
      var elapsedTime = nowTime - initTime;
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.advanceTime(elapsedTime);
      }

      initTime = nowTime;

      if (playingAnimationsNum && !_isFrozen) {
        window.requestAnimationFrame(resume);
      } else {
        _stopped = true;
      }
    }

    function first(nowTime) {
      initTime = nowTime;
      window.requestAnimationFrame(resume);
    }

    function pause(animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.pause(animation);
      }
    }

    function goToAndStop(value, isFrame, animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.goToAndStop(value, isFrame, animation);
      }
    }

    function stop(animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.stop(animation);
      }
    }

    function togglePause(animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.togglePause(animation);
      }
    }

    function destroy(animation) {
      var i;

      for (i = len - 1; i >= 0; i -= 1) {
        registeredAnimations[i].animation.destroy(animation);
      }
    }

    function searchAnimations(animationData, standalone, renderer) {
      var animElements = [].concat([].slice.call(document.getElementsByClassName('lottie')), [].slice.call(document.getElementsByClassName('bodymovin')));
      var i;
      var lenAnims = animElements.length;

      for (i = 0; i < lenAnims; i += 1) {
        if (renderer) {
          animElements[i].setAttribute('data-bm-type', renderer);
        }

        registerAnimation(animElements[i], animationData);
      }

      if (standalone && lenAnims === 0) {
        if (!renderer) {
          renderer = 'svg';
        }

        var body = document.getElementsByTagName('body')[0];
        body.innerText = '';
        var div = createTag('div');
        div.style.width = '100%';
        div.style.height = '100%';
        div.setAttribute('data-bm-type', renderer);
        body.appendChild(div);
        registerAnimation(div, animationData);
      }
    }

    function resize() {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.resize();
      }
    }

    function activate() {
      if (!_isFrozen && playingAnimationsNum) {
        if (_stopped) {
          window.requestAnimationFrame(first);
          _stopped = false;
        }
      }
    }

    function freeze() {
      _isFrozen = true;
    }

    function unfreeze() {
      _isFrozen = false;
      activate();
    }

    function setVolume(val, animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.setVolume(val, animation);
      }
    }

    function mute(animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.mute(animation);
      }
    }

    function unmute(animation) {
      var i;

      for (i = 0; i < len; i += 1) {
        registeredAnimations[i].animation.unmute(animation);
      }
    }

    moduleOb.registerAnimation = registerAnimation;
    moduleOb.loadAnimation = loadAnimation;
    moduleOb.setSpeed = setSpeed;
    moduleOb.setDirection = setDirection;
    moduleOb.play = play;
    moduleOb.pause = pause;
    moduleOb.stop = stop;
    moduleOb.togglePause = togglePause;
    moduleOb.searchAnimations = searchAnimations;
    moduleOb.resize = resize; // moduleOb.start = start;

    moduleOb.goToAndStop = goToAndStop;
    moduleOb.destroy = destroy;
    moduleOb.freeze = freeze;
    moduleOb.unfreeze = unfreeze;
    moduleOb.setVolume = setVolume;
    moduleOb.mute = mute;
    moduleOb.unmute = unmute;
    moduleOb.getRegisteredAnimations = getRegisteredAnimations;
    return moduleOb;
  }();

  /* eslint-disable */
  var BezierFactory = function () {
    /**
       * BezierEasing - use bezier curve for transition easing function
       * by Gaëtan Renaudeau 2014 - 2015 – MIT License
       *
       * Credits: is based on Firefox's nsSMILKeySpline.cpp
       * Usage:
       * var spline = BezierEasing([ 0.25, 0.1, 0.25, 1.0 ])
       * spline.get(x) => returns the easing value | x must be in [0, 1] range
       *
       */
    var ob = {};
    ob.getBezierEasing = getBezierEasing;
    var beziers = {};

    function getBezierEasing(a, b, c, d, nm) {
      var str = nm || ('bez_' + a + '_' + b + '_' + c + '_' + d).replace(/\./g, 'p');

      if (beziers[str]) {
        return beziers[str];
      }

      var bezEasing = new BezierEasing([a, b, c, d]);
      beziers[str] = bezEasing;
      return bezEasing;
    } // These values are established by empiricism with tests (tradeoff: performance VS precision)


    var NEWTON_ITERATIONS = 4;
    var NEWTON_MIN_SLOPE = 0.001;
    var SUBDIVISION_PRECISION = 0.0000001;
    var SUBDIVISION_MAX_ITERATIONS = 10;
    var kSplineTableSize = 11;
    var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
    var float32ArraySupported = typeof Float32Array === 'function';

    function A(aA1, aA2) {
      return 1.0 - 3.0 * aA2 + 3.0 * aA1;
    }

    function B(aA1, aA2) {
      return 3.0 * aA2 - 6.0 * aA1;
    }

    function C(aA1) {
      return 3.0 * aA1;
    } // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.


    function calcBezier(aT, aA1, aA2) {
      return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    } // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.


    function getSlope(aT, aA1, aA2) {
      return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
    }

    function binarySubdivide(aX, aA, aB, mX1, mX2) {
      var currentX,
          currentT,
          i = 0;

      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;

        if (currentX > 0.0) {
          aB = currentT;
        } else {
          aA = currentT;
        }
      } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

      return currentT;
    }

    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
      for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) return aGuessT;
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }

      return aGuessT;
    }
    /**
       * points is an array of [ mX1, mY1, mX2, mY2 ]
       */


    function BezierEasing(points) {
      this._p = points;
      this._mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
      this._precomputed = false;
      this.get = this.get.bind(this);
    }

    BezierEasing.prototype = {
      get: function get(x) {
        var mX1 = this._p[0],
            mY1 = this._p[1],
            mX2 = this._p[2],
            mY2 = this._p[3];
        if (!this._precomputed) this._precompute();
        if (mX1 === mY1 && mX2 === mY2) return x; // linear
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.

        if (x === 0) return 0;
        if (x === 1) return 1;
        return calcBezier(this._getTForX(x), mY1, mY2);
      },
      // Private part
      _precompute: function _precompute() {
        var mX1 = this._p[0],
            mY1 = this._p[1],
            mX2 = this._p[2],
            mY2 = this._p[3];
        this._precomputed = true;

        if (mX1 !== mY1 || mX2 !== mY2) {
          this._calcSampleValues();
        }
      },
      _calcSampleValues: function _calcSampleValues() {
        var mX1 = this._p[0],
            mX2 = this._p[2];

        for (var i = 0; i < kSplineTableSize; ++i) {
          this._mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
      },

      /**
           * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
           */
      _getTForX: function _getTForX(aX) {
        var mX1 = this._p[0],
            mX2 = this._p[2],
            mSampleValues = this._mSampleValues;
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;

        for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }

        --currentSample; // Interpolate to provide an initial guess for t

        var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);

        if (initialSlope >= NEWTON_MIN_SLOPE) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        }

        if (initialSlope === 0.0) {
          return guessForT;
        }

        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    };
    return ob;
  }();

  var pooling = function () {
    function _double(arr) {
      return arr.concat(createSizedArray(arr.length));
    }

    return {
      "double": _double
    };
  }();

  var poolFactory = function () {
    return function (initialLength, _create, _release) {
      var _length = 0;
      var _maxLength = initialLength;
      var pool = createSizedArray(_maxLength);
      var ob = {
        newElement: newElement,
        release: release
      };

      function newElement() {
        var element;

        if (_length) {
          _length -= 1;
          element = pool[_length];
        } else {
          element = _create();
        }

        return element;
      }

      function release(element) {
        if (_length === _maxLength) {
          pool = pooling["double"](pool);
          _maxLength *= 2;
        }

        if (_release) {
          _release(element);
        }

        pool[_length] = element;
        _length += 1;
      }

      return ob;
    };
  }();

  var bezierLengthPool = function () {
    function create() {
      return {
        addedLength: 0,
        percents: createTypedArray('float32', getDefaultCurveSegments()),
        lengths: createTypedArray('float32', getDefaultCurveSegments())
      };
    }

    return poolFactory(8, create);
  }();

  var segmentsLengthPool = function () {
    function create() {
      return {
        lengths: [],
        totalLength: 0
      };
    }

    function release(element) {
      var i;
      var len = element.lengths.length;

      for (i = 0; i < len; i += 1) {
        bezierLengthPool.release(element.lengths[i]);
      }

      element.lengths.length = 0;
    }

    return poolFactory(8, create, release);
  }();

  function bezFunction() {
    var math = Math;

    function pointOnLine2D(x1, y1, x2, y2, x3, y3) {
      var det1 = x1 * y2 + y1 * x3 + x2 * y3 - x3 * y2 - y3 * x1 - x2 * y1;
      return det1 > -0.001 && det1 < 0.001;
    }

    function pointOnLine3D(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
      if (z1 === 0 && z2 === 0 && z3 === 0) {
        return pointOnLine2D(x1, y1, x2, y2, x3, y3);
      }

      var dist1 = math.sqrt(math.pow(x2 - x1, 2) + math.pow(y2 - y1, 2) + math.pow(z2 - z1, 2));
      var dist2 = math.sqrt(math.pow(x3 - x1, 2) + math.pow(y3 - y1, 2) + math.pow(z3 - z1, 2));
      var dist3 = math.sqrt(math.pow(x3 - x2, 2) + math.pow(y3 - y2, 2) + math.pow(z3 - z2, 2));
      var diffDist;

      if (dist1 > dist2) {
        if (dist1 > dist3) {
          diffDist = dist1 - dist2 - dist3;
        } else {
          diffDist = dist3 - dist2 - dist1;
        }
      } else if (dist3 > dist2) {
        diffDist = dist3 - dist2 - dist1;
      } else {
        diffDist = dist2 - dist1 - dist3;
      }

      return diffDist > -0.0001 && diffDist < 0.0001;
    }

    var getBezierLength = function () {
      return function (pt1, pt2, pt3, pt4) {
        var curveSegments = getDefaultCurveSegments();
        var k;
        var i;
        var len;
        var ptCoord;
        var perc;
        var addedLength = 0;
        var ptDistance;
        var point = [];
        var lastPoint = [];
        var lengthData = bezierLengthPool.newElement();
        len = pt3.length;

        for (k = 0; k < curveSegments; k += 1) {
          perc = k / (curveSegments - 1);
          ptDistance = 0;

          for (i = 0; i < len; i += 1) {
            ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * pt3[i] + 3 * (1 - perc) * bmPow(perc, 2) * pt4[i] + bmPow(perc, 3) * pt2[i];
            point[i] = ptCoord;

            if (lastPoint[i] !== null) {
              ptDistance += bmPow(point[i] - lastPoint[i], 2);
            }

            lastPoint[i] = point[i];
          }

          if (ptDistance) {
            ptDistance = bmSqrt(ptDistance);
            addedLength += ptDistance;
          }

          lengthData.percents[k] = perc;
          lengthData.lengths[k] = addedLength;
        }

        lengthData.addedLength = addedLength;
        return lengthData;
      };
    }();

    function getSegmentsLength(shapeData) {
      var segmentsLength = segmentsLengthPool.newElement();
      var closed = shapeData.c;
      var pathV = shapeData.v;
      var pathO = shapeData.o;
      var pathI = shapeData.i;
      var i;
      var len = shapeData._length;
      var lengths = segmentsLength.lengths;
      var totalLength = 0;

      for (i = 0; i < len - 1; i += 1) {
        lengths[i] = getBezierLength(pathV[i], pathV[i + 1], pathO[i], pathI[i + 1]);
        totalLength += lengths[i].addedLength;
      }

      if (closed && len) {
        lengths[i] = getBezierLength(pathV[i], pathV[0], pathO[i], pathI[0]);
        totalLength += lengths[i].addedLength;
      }

      segmentsLength.totalLength = totalLength;
      return segmentsLength;
    }

    function BezierData(length) {
      this.segmentLength = 0;
      this.points = new Array(length);
    }

    function PointData(partial, point) {
      this.partialLength = partial;
      this.point = point;
    }

    var buildBezierData = function () {
      var storedData = {};
      return function (pt1, pt2, pt3, pt4) {
        var bezierName = (pt1[0] + '_' + pt1[1] + '_' + pt2[0] + '_' + pt2[1] + '_' + pt3[0] + '_' + pt3[1] + '_' + pt4[0] + '_' + pt4[1]).replace(/\./g, 'p');

        if (!storedData[bezierName]) {
          var curveSegments = getDefaultCurveSegments();
          var k;
          var i;
          var len;
          var ptCoord;
          var perc;
          var addedLength = 0;
          var ptDistance;
          var point;
          var lastPoint = null;

          if (pt1.length === 2 && (pt1[0] !== pt2[0] || pt1[1] !== pt2[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt1[0] + pt3[0], pt1[1] + pt3[1]) && pointOnLine2D(pt1[0], pt1[1], pt2[0], pt2[1], pt2[0] + pt4[0], pt2[1] + pt4[1])) {
            curveSegments = 2;
          }

          var bezierData = new BezierData(curveSegments);
          len = pt3.length;

          for (k = 0; k < curveSegments; k += 1) {
            point = createSizedArray(len);
            perc = k / (curveSegments - 1);
            ptDistance = 0;

            for (i = 0; i < len; i += 1) {
              ptCoord = bmPow(1 - perc, 3) * pt1[i] + 3 * bmPow(1 - perc, 2) * perc * (pt1[i] + pt3[i]) + 3 * (1 - perc) * bmPow(perc, 2) * (pt2[i] + pt4[i]) + bmPow(perc, 3) * pt2[i];
              point[i] = ptCoord;

              if (lastPoint !== null) {
                ptDistance += bmPow(point[i] - lastPoint[i], 2);
              }
            }

            ptDistance = bmSqrt(ptDistance);
            addedLength += ptDistance;
            bezierData.points[k] = new PointData(ptDistance, point);
            lastPoint = point;
          }

          bezierData.segmentLength = addedLength;
          storedData[bezierName] = bezierData;
        }

        return storedData[bezierName];
      };
    }();

    function getDistancePerc(perc, bezierData) {
      var percents = bezierData.percents;
      var lengths = bezierData.lengths;
      var len = percents.length;
      var initPos = bmFloor((len - 1) * perc);
      var lengthPos = perc * bezierData.addedLength;
      var lPerc = 0;

      if (initPos === len - 1 || initPos === 0 || lengthPos === lengths[initPos]) {
        return percents[initPos];
      }

      var dir = lengths[initPos] > lengthPos ? -1 : 1;
      var flag = true;

      while (flag) {
        if (lengths[initPos] <= lengthPos && lengths[initPos + 1] > lengthPos) {
          lPerc = (lengthPos - lengths[initPos]) / (lengths[initPos + 1] - lengths[initPos]);
          flag = false;
        } else {
          initPos += dir;
        }

        if (initPos < 0 || initPos >= len - 1) {
          // FIX for TypedArrays that don't store floating point values with enough accuracy
          if (initPos === len - 1) {
            return percents[initPos];
          }

          flag = false;
        }
      }

      return percents[initPos] + (percents[initPos + 1] - percents[initPos]) * lPerc;
    }

    function getPointInSegment(pt1, pt2, pt3, pt4, percent, bezierData) {
      var t1 = getDistancePerc(percent, bezierData);
      var u1 = 1 - t1;
      var ptX = math.round((u1 * u1 * u1 * pt1[0] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[0] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[0] + t1 * t1 * t1 * pt2[0]) * 1000) / 1000;
      var ptY = math.round((u1 * u1 * u1 * pt1[1] + (t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1) * pt3[1] + (t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1) * pt4[1] + t1 * t1 * t1 * pt2[1]) * 1000) / 1000;
      return [ptX, ptY];
    }

    var bezierSegmentPoints = createTypedArray('float32', 8);

    function getNewSegment(pt1, pt2, pt3, pt4, startPerc, endPerc, bezierData) {
      if (startPerc < 0) {
        startPerc = 0;
      } else if (startPerc > 1) {
        startPerc = 1;
      }

      var t0 = getDistancePerc(startPerc, bezierData);
      endPerc = endPerc > 1 ? 1 : endPerc;
      var t1 = getDistancePerc(endPerc, bezierData);
      var i;
      var len = pt1.length;
      var u0 = 1 - t0;
      var u1 = 1 - t1;
      var u0u0u0 = u0 * u0 * u0;
      var t0u0u0_3 = t0 * u0 * u0 * 3; // eslint-disable-line camelcase

      var t0t0u0_3 = t0 * t0 * u0 * 3; // eslint-disable-line camelcase

      var t0t0t0 = t0 * t0 * t0; //

      var u0u0u1 = u0 * u0 * u1;
      var t0u0u1_3 = t0 * u0 * u1 + u0 * t0 * u1 + u0 * u0 * t1; // eslint-disable-line camelcase

      var t0t0u1_3 = t0 * t0 * u1 + u0 * t0 * t1 + t0 * u0 * t1; // eslint-disable-line camelcase

      var t0t0t1 = t0 * t0 * t1; //

      var u0u1u1 = u0 * u1 * u1;
      var t0u1u1_3 = t0 * u1 * u1 + u0 * t1 * u1 + u0 * u1 * t1; // eslint-disable-line camelcase

      var t0t1u1_3 = t0 * t1 * u1 + u0 * t1 * t1 + t0 * u1 * t1; // eslint-disable-line camelcase

      var t0t1t1 = t0 * t1 * t1; //

      var u1u1u1 = u1 * u1 * u1;
      var t1u1u1_3 = t1 * u1 * u1 + u1 * t1 * u1 + u1 * u1 * t1; // eslint-disable-line camelcase

      var t1t1u1_3 = t1 * t1 * u1 + u1 * t1 * t1 + t1 * u1 * t1; // eslint-disable-line camelcase

      var t1t1t1 = t1 * t1 * t1;

      for (i = 0; i < len; i += 1) {
        bezierSegmentPoints[i * 4] = math.round((u0u0u0 * pt1[i] + t0u0u0_3 * pt3[i] + t0t0u0_3 * pt4[i] + t0t0t0 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase

        bezierSegmentPoints[i * 4 + 1] = math.round((u0u0u1 * pt1[i] + t0u0u1_3 * pt3[i] + t0t0u1_3 * pt4[i] + t0t0t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase

        bezierSegmentPoints[i * 4 + 2] = math.round((u0u1u1 * pt1[i] + t0u1u1_3 * pt3[i] + t0t1u1_3 * pt4[i] + t0t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase

        bezierSegmentPoints[i * 4 + 3] = math.round((u1u1u1 * pt1[i] + t1u1u1_3 * pt3[i] + t1t1u1_3 * pt4[i] + t1t1t1 * pt2[i]) * 1000) / 1000; // eslint-disable-line camelcase
      }

      return bezierSegmentPoints;
    }

    return {
      getSegmentsLength: getSegmentsLength,
      getNewSegment: getNewSegment,
      getPointInSegment: getPointInSegment,
      buildBezierData: buildBezierData,
      pointOnLine2D: pointOnLine2D,
      pointOnLine3D: pointOnLine3D
    };
  }

  var bez = bezFunction();

  var initFrame = initialDefaultFrame;
  var mathAbs = Math.abs;

  function interpolateValue(frameNum, caching) {
    var offsetTime = this.offsetTime;
    var newValue;

    if (this.propType === 'multidimensional') {
      newValue = createTypedArray('float32', this.pv.length);
    }

    var iterationIndex = caching.lastIndex;
    var i = iterationIndex;
    var len = this.keyframes.length - 1;
    var flag = true;
    var keyData;
    var nextKeyData;
    var keyframeMetadata;

    while (flag) {
      keyData = this.keyframes[i];
      nextKeyData = this.keyframes[i + 1];

      if (i === len - 1 && frameNum >= nextKeyData.t - offsetTime) {
        if (keyData.h) {
          keyData = nextKeyData;
        }

        iterationIndex = 0;
        break;
      }

      if (nextKeyData.t - offsetTime > frameNum) {
        iterationIndex = i;
        break;
      }

      if (i < len - 1) {
        i += 1;
      } else {
        iterationIndex = 0;
        flag = false;
      }
    }

    keyframeMetadata = this.keyframesMetadata[i] || {};
    var k;
    var kLen;
    var perc;
    var jLen;
    var j;
    var fnc;
    var nextKeyTime = nextKeyData.t - offsetTime;
    var keyTime = keyData.t - offsetTime;
    var endValue;

    if (keyData.to) {
      if (!keyframeMetadata.bezierData) {
        keyframeMetadata.bezierData = bez.buildBezierData(keyData.s, nextKeyData.s || keyData.e, keyData.to, keyData.ti);
      }

      var bezierData = keyframeMetadata.bezierData;

      if (frameNum >= nextKeyTime || frameNum < keyTime) {
        var ind = frameNum >= nextKeyTime ? bezierData.points.length - 1 : 0;
        kLen = bezierData.points[ind].point.length;

        for (k = 0; k < kLen; k += 1) {
          newValue[k] = bezierData.points[ind].point[k];
        } // caching._lastKeyframeIndex = -1;

      } else {
        if (keyframeMetadata.__fnct) {
          fnc = keyframeMetadata.__fnct;
        } else {
          fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y, keyData.n).get;
          keyframeMetadata.__fnct = fnc;
        }

        perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
        var distanceInLine = bezierData.segmentLength * perc;
        var segmentPerc;
        var addedLength = caching.lastFrame < frameNum && caching._lastKeyframeIndex === i ? caching._lastAddedLength : 0;
        j = caching.lastFrame < frameNum && caching._lastKeyframeIndex === i ? caching._lastPoint : 0;
        flag = true;
        jLen = bezierData.points.length;

        while (flag) {
          addedLength += bezierData.points[j].partialLength;

          if (distanceInLine === 0 || perc === 0 || j === bezierData.points.length - 1) {
            kLen = bezierData.points[j].point.length;

            for (k = 0; k < kLen; k += 1) {
              newValue[k] = bezierData.points[j].point[k];
            }

            break;
          } else if (distanceInLine >= addedLength && distanceInLine < addedLength + bezierData.points[j + 1].partialLength) {
            segmentPerc = (distanceInLine - addedLength) / bezierData.points[j + 1].partialLength;
            kLen = bezierData.points[j].point.length;

            for (k = 0; k < kLen; k += 1) {
              newValue[k] = bezierData.points[j].point[k] + (bezierData.points[j + 1].point[k] - bezierData.points[j].point[k]) * segmentPerc;
            }

            break;
          }

          if (j < jLen - 1) {
            j += 1;
          } else {
            flag = false;
          }
        }

        caching._lastPoint = j;
        caching._lastAddedLength = addedLength - bezierData.points[j].partialLength;
        caching._lastKeyframeIndex = i;
      }
    } else {
      var outX;
      var outY;
      var inX;
      var inY;
      var keyValue;
      len = keyData.s.length;
      endValue = nextKeyData.s || keyData.e;

      if (this.sh && keyData.h !== 1) {
        if (frameNum >= nextKeyTime) {
          newValue[0] = endValue[0];
          newValue[1] = endValue[1];
          newValue[2] = endValue[2];
        } else if (frameNum <= keyTime) {
          newValue[0] = keyData.s[0];
          newValue[1] = keyData.s[1];
          newValue[2] = keyData.s[2];
        } else {
          var quatStart = createQuaternion(keyData.s);
          var quatEnd = createQuaternion(endValue);
          var time = (frameNum - keyTime) / (nextKeyTime - keyTime);
          quaternionToEuler(newValue, slerp(quatStart, quatEnd, time));
        }
      } else {
        for (i = 0; i < len; i += 1) {
          if (keyData.h !== 1) {
            if (frameNum >= nextKeyTime) {
              perc = 1;
            } else if (frameNum < keyTime) {
              perc = 0;
            } else {
              if (keyData.o.x.constructor === Array) {
                if (!keyframeMetadata.__fnct) {
                  keyframeMetadata.__fnct = [];
                }

                if (!keyframeMetadata.__fnct[i]) {
                  outX = keyData.o.x[i] === undefined ? keyData.o.x[0] : keyData.o.x[i];
                  outY = keyData.o.y[i] === undefined ? keyData.o.y[0] : keyData.o.y[i];
                  inX = keyData.i.x[i] === undefined ? keyData.i.x[0] : keyData.i.x[i];
                  inY = keyData.i.y[i] === undefined ? keyData.i.y[0] : keyData.i.y[i];
                  fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                  keyframeMetadata.__fnct[i] = fnc;
                } else {
                  fnc = keyframeMetadata.__fnct[i];
                }
              } else if (!keyframeMetadata.__fnct) {
                outX = keyData.o.x;
                outY = keyData.o.y;
                inX = keyData.i.x;
                inY = keyData.i.y;
                fnc = BezierFactory.getBezierEasing(outX, outY, inX, inY).get;
                keyData.keyframeMetadata = fnc;
              } else {
                fnc = keyframeMetadata.__fnct;
              }

              perc = fnc((frameNum - keyTime) / (nextKeyTime - keyTime));
            }
          }

          endValue = nextKeyData.s || keyData.e;
          keyValue = keyData.h === 1 ? keyData.s[i] : keyData.s[i] + (endValue[i] - keyData.s[i]) * perc;

          if (this.propType === 'multidimensional') {
            newValue[i] = keyValue;
          } else {
            newValue = keyValue;
          }
        }
      }
    }

    caching.lastIndex = iterationIndex;
    return newValue;
  } // based on @Toji's https://github.com/toji/gl-matrix/


  function slerp(a, b, t) {
    var out = [];
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var aw = a[3];
    var bx = b[0];
    var by = b[1];
    var bz = b[2];
    var bw = b[3];
    var omega;
    var cosom;
    var sinom;
    var scale0;
    var scale1;
    cosom = ax * bx + ay * by + az * bz + aw * bw;

    if (cosom < 0.0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }

    if (1.0 - cosom > 0.000001) {
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      scale0 = Math.sin((1.0 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      scale0 = 1.0 - t;
      scale1 = t;
    }

    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
  }

  function quaternionToEuler(out, quat) {
    var qx = quat[0];
    var qy = quat[1];
    var qz = quat[2];
    var qw = quat[3];
    var heading = Math.atan2(2 * qy * qw - 2 * qx * qz, 1 - 2 * qy * qy - 2 * qz * qz);
    var attitude = Math.asin(2 * qx * qy + 2 * qz * qw);
    var bank = Math.atan2(2 * qx * qw - 2 * qy * qz, 1 - 2 * qx * qx - 2 * qz * qz);
    out[0] = heading / degToRads;
    out[1] = attitude / degToRads;
    out[2] = bank / degToRads;
  }

  function createQuaternion(values) {
    var heading = values[0] * degToRads;
    var attitude = values[1] * degToRads;
    var bank = values[2] * degToRads;
    var c1 = Math.cos(heading / 2);
    var c2 = Math.cos(attitude / 2);
    var c3 = Math.cos(bank / 2);
    var s1 = Math.sin(heading / 2);
    var s2 = Math.sin(attitude / 2);
    var s3 = Math.sin(bank / 2);
    var w = c1 * c2 * c3 - s1 * s2 * s3;
    var x = s1 * s2 * c3 + c1 * c2 * s3;
    var y = s1 * c2 * c3 + c1 * s2 * s3;
    var z = c1 * s2 * c3 - s1 * c2 * s3;
    return [x, y, z, w];
  }

  function getValueAtCurrentTime() {
    var frameNum = this.comp.renderedFrame - this.offsetTime;
    var initTime = this.keyframes[0].t - this.offsetTime;
    var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;

    if (!(frameNum === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= endTime && frameNum >= endTime || this._caching.lastFrame < initTime && frameNum < initTime))) {
      if (this._caching.lastFrame >= frameNum) {
        this._caching._lastKeyframeIndex = -1;
        this._caching.lastIndex = 0;
      }

      var renderResult = this.interpolateValue(frameNum, this._caching);
      this.pv = renderResult;
    }

    this._caching.lastFrame = frameNum;
    return this.pv;
  }

  function setVValue(val) {
    var multipliedValue;

    if (this.propType === 'unidimensional') {
      multipliedValue = val * this.mult;

      if (mathAbs(this.v - multipliedValue) > 0.00001) {
        this.v = multipliedValue;
        this._mdf = true;
      }
    } else {
      var i = 0;
      var len = this.v.length;

      while (i < len) {
        multipliedValue = val[i] * this.mult;

        if (mathAbs(this.v[i] - multipliedValue) > 0.00001) {
          this.v[i] = multipliedValue;
          this._mdf = true;
        }

        i += 1;
      }
    }
  }

  function processEffectsSequence() {
    if (this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) {
      return;
    }

    if (this.lock) {
      this.setVValue(this.pv);
      return;
    }

    this.lock = true;
    this._mdf = this._isFirstFrame;
    var i;
    var len = this.effectsSequence.length;
    var finalValue = this.kf ? this.pv : this.data.k;

    for (i = 0; i < len; i += 1) {
      finalValue = this.effectsSequence[i](finalValue);
    }

    this.setVValue(finalValue);
    this._isFirstFrame = false;
    this.lock = false;
    this.frameId = this.elem.globalData.frameId;
  }

  function addEffect(effectFunction) {
    this.effectsSequence.push(effectFunction);
    this.container.addDynamicProperty(this);
  }

  function ValueProperty(elem, data, mult, container) {
    this.propType = 'unidimensional';
    this.mult = mult || 1;
    this.data = data;
    this.v = mult ? data.k * mult : data.k;
    this.pv = data.k;
    this._mdf = false;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.k = false;
    this.kf = false;
    this.vel = 0;
    this.effectsSequence = [];
    this._isFirstFrame = true;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.addEffect = addEffect;
  }

  function MultiDimensionalProperty(elem, data, mult, container) {
    this.propType = 'multidimensional';
    this.mult = mult || 1;
    this.data = data;
    this._mdf = false;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.k = false;
    this.kf = false;
    this.frameId = -1;
    var i;
    var len = data.k.length;
    this.v = createTypedArray('float32', len);
    this.pv = createTypedArray('float32', len);
    this.vel = createTypedArray('float32', len);

    for (i = 0; i < len; i += 1) {
      this.v[i] = data.k[i] * this.mult;
      this.pv[i] = data.k[i];
    }

    this._isFirstFrame = true;
    this.effectsSequence = [];
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.addEffect = addEffect;
  }

  function KeyframedValueProperty(elem, data, mult, container) {
    this.propType = 'unidimensional';
    this.keyframes = data.k;
    this.keyframesMetadata = [];
    this.offsetTime = elem.data.st;
    this.frameId = -1;
    this._caching = {
      lastFrame: initFrame,
      lastIndex: 0,
      value: 0,
      _lastKeyframeIndex: -1
    };
    this.k = true;
    this.kf = true;
    this.data = data;
    this.mult = mult || 1;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.v = initFrame;
    this.pv = initFrame;
    this._isFirstFrame = true;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.interpolateValue = interpolateValue;
    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
    this.addEffect = addEffect;
  }

  function KeyframedMultidimensionalProperty(elem, data, mult, container) {
    this.propType = 'multidimensional';
    var i;
    var len = data.k.length;
    var s;
    var e;
    var to;
    var ti;

    for (i = 0; i < len - 1; i += 1) {
      if (data.k[i].to && data.k[i].s && data.k[i + 1] && data.k[i + 1].s) {
        s = data.k[i].s;
        e = data.k[i + 1].s;
        to = data.k[i].to;
        ti = data.k[i].ti;

        if (s.length === 2 && !(s[0] === e[0] && s[1] === e[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], s[0] + to[0], s[1] + to[1]) && bez.pointOnLine2D(s[0], s[1], e[0], e[1], e[0] + ti[0], e[1] + ti[1]) || s.length === 3 && !(s[0] === e[0] && s[1] === e[1] && s[2] === e[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], s[0] + to[0], s[1] + to[1], s[2] + to[2]) && bez.pointOnLine3D(s[0], s[1], s[2], e[0], e[1], e[2], e[0] + ti[0], e[1] + ti[1], e[2] + ti[2])) {
          data.k[i].to = null;
          data.k[i].ti = null;
        }

        if (s[0] === e[0] && s[1] === e[1] && to[0] === 0 && to[1] === 0 && ti[0] === 0 && ti[1] === 0) {
          if (s.length === 2 || s[2] === e[2] && to[2] === 0 && ti[2] === 0) {
            data.k[i].to = null;
            data.k[i].ti = null;
          }
        }
      }
    }

    this.effectsSequence = [getValueAtCurrentTime.bind(this)];
    this.data = data;
    this.keyframes = data.k;
    this.keyframesMetadata = [];
    this.offsetTime = elem.data.st;
    this.k = true;
    this.kf = true;
    this._isFirstFrame = true;
    this.mult = mult || 1;
    this.elem = elem;
    this.container = container;
    this.comp = elem.comp;
    this.getValue = processEffectsSequence;
    this.setVValue = setVValue;
    this.interpolateValue = interpolateValue;
    this.frameId = -1;
    var arrLen = data.k[0].s.length;
    this.v = createTypedArray('float32', arrLen);
    this.pv = createTypedArray('float32', arrLen);

    for (i = 0; i < arrLen; i += 1) {
      this.v[i] = initFrame;
      this.pv[i] = initFrame;
    }

    this._caching = {
      lastFrame: initFrame,
      lastIndex: 0,
      value: createTypedArray('float32', arrLen)
    };
    this.addEffect = addEffect;
  }

  var PropertyFactory = function () {
    function getProp(elem, data, type, mult, container) {
      if (data.sid) {
        data = elem.globalData.slotManager.getProp(data);
      }

      var p;

      if (!data.k.length) {
        p = new ValueProperty(elem, data, mult, container);
      } else if (typeof data.k[0] === 'number') {
        p = new MultiDimensionalProperty(elem, data, mult, container);
      } else {
        switch (type) {
          case 0:
            p = new KeyframedValueProperty(elem, data, mult, container);
            break;

          case 1:
            p = new KeyframedMultidimensionalProperty(elem, data, mult, container);
            break;

          default:
            break;
        }
      }

      if (p.effectsSequence.length) {
        container.addDynamicProperty(p);
      }

      return p;
    }

    var ob = {
      getProp: getProp
    };
    return ob;
  }();

  function DynamicPropertyContainer() {}

  DynamicPropertyContainer.prototype = {
    addDynamicProperty: function addDynamicProperty(prop) {
      if (this.dynamicProperties.indexOf(prop) === -1) {
        this.dynamicProperties.push(prop);
        this.container.addDynamicProperty(this);
        this._isAnimated = true;
      }
    },
    iterateDynamicProperties: function iterateDynamicProperties() {
      this._mdf = false;
      var i;
      var len = this.dynamicProperties.length;

      for (i = 0; i < len; i += 1) {
        this.dynamicProperties[i].getValue();

        if (this.dynamicProperties[i]._mdf) {
          this._mdf = true;
        }
      }
    },
    initDynamicPropertyContainer: function initDynamicPropertyContainer(container) {
      this.container = container;
      this.dynamicProperties = [];
      this._mdf = false;
      this._isAnimated = false;
    }
  };

  var pointPool = function () {
    function create() {
      return createTypedArray('float32', 2);
    }

    return poolFactory(8, create);
  }();

  function ShapePath() {
    this.c = false;
    this._length = 0;
    this._maxLength = 8;
    this.v = createSizedArray(this._maxLength);
    this.o = createSizedArray(this._maxLength);
    this.i = createSizedArray(this._maxLength);
  }

  ShapePath.prototype.setPathData = function (closed, len) {
    this.c = closed;
    this.setLength(len);
    var i = 0;

    while (i < len) {
      this.v[i] = pointPool.newElement();
      this.o[i] = pointPool.newElement();
      this.i[i] = pointPool.newElement();
      i += 1;
    }
  };

  ShapePath.prototype.setLength = function (len) {
    while (this._maxLength < len) {
      this.doubleArrayLength();
    }

    this._length = len;
  };

  ShapePath.prototype.doubleArrayLength = function () {
    this.v = this.v.concat(createSizedArray(this._maxLength));
    this.i = this.i.concat(createSizedArray(this._maxLength));
    this.o = this.o.concat(createSizedArray(this._maxLength));
    this._maxLength *= 2;
  };

  ShapePath.prototype.setXYAt = function (x, y, type, pos, replace) {
    var arr;
    this._length = Math.max(this._length, pos + 1);

    if (this._length >= this._maxLength) {
      this.doubleArrayLength();
    }

    switch (type) {
      case 'v':
        arr = this.v;
        break;

      case 'i':
        arr = this.i;
        break;

      case 'o':
        arr = this.o;
        break;

      default:
        arr = [];
        break;
    }

    if (!arr[pos] || arr[pos] && !replace) {
      arr[pos] = pointPool.newElement();
    }

    arr[pos][0] = x;
    arr[pos][1] = y;
  };

  ShapePath.prototype.setTripleAt = function (vX, vY, oX, oY, iX, iY, pos, replace) {
    this.setXYAt(vX, vY, 'v', pos, replace);
    this.setXYAt(oX, oY, 'o', pos, replace);
    this.setXYAt(iX, iY, 'i', pos, replace);
  };

  ShapePath.prototype.reverse = function () {
    var newPath = new ShapePath();
    newPath.setPathData(this.c, this._length);
    var vertices = this.v;
    var outPoints = this.o;
    var inPoints = this.i;
    var init = 0;

    if (this.c) {
      newPath.setTripleAt(vertices[0][0], vertices[0][1], inPoints[0][0], inPoints[0][1], outPoints[0][0], outPoints[0][1], 0, false);
      init = 1;
    }

    var cnt = this._length - 1;
    var len = this._length;
    var i;

    for (i = init; i < len; i += 1) {
      newPath.setTripleAt(vertices[cnt][0], vertices[cnt][1], inPoints[cnt][0], inPoints[cnt][1], outPoints[cnt][0], outPoints[cnt][1], i, false);
      cnt -= 1;
    }

    return newPath;
  };

  ShapePath.prototype.length = function () {
    return this._length;
  };

  var shapePool = function () {
    function create() {
      return new ShapePath();
    }

    function release(shapePath) {
      var len = shapePath._length;
      var i;

      for (i = 0; i < len; i += 1) {
        pointPool.release(shapePath.v[i]);
        pointPool.release(shapePath.i[i]);
        pointPool.release(shapePath.o[i]);
        shapePath.v[i] = null;
        shapePath.i[i] = null;
        shapePath.o[i] = null;
      }

      shapePath._length = 0;
      shapePath.c = false;
    }

    function clone(shape) {
      var cloned = factory.newElement();
      var i;
      var len = shape._length === undefined ? shape.v.length : shape._length;
      cloned.setLength(len);
      cloned.c = shape.c;

      for (i = 0; i < len; i += 1) {
        cloned.setTripleAt(shape.v[i][0], shape.v[i][1], shape.o[i][0], shape.o[i][1], shape.i[i][0], shape.i[i][1], i);
      }

      return cloned;
    }

    var factory = poolFactory(4, create, release);
    factory.clone = clone;
    return factory;
  }();

  function ShapeCollection() {
    this._length = 0;
    this._maxLength = 4;
    this.shapes = createSizedArray(this._maxLength);
  }

  ShapeCollection.prototype.addShape = function (shapeData) {
    if (this._length === this._maxLength) {
      this.shapes = this.shapes.concat(createSizedArray(this._maxLength));
      this._maxLength *= 2;
    }

    this.shapes[this._length] = shapeData;
    this._length += 1;
  };

  ShapeCollection.prototype.releaseShapes = function () {
    var i;

    for (i = 0; i < this._length; i += 1) {
      shapePool.release(this.shapes[i]);
    }

    this._length = 0;
  };

  var shapeCollectionPool = function () {
    var ob = {
      newShapeCollection: newShapeCollection,
      release: release
    };
    var _length = 0;
    var _maxLength = 4;
    var pool = createSizedArray(_maxLength);

    function newShapeCollection() {
      var shapeCollection;

      if (_length) {
        _length -= 1;
        shapeCollection = pool[_length];
      } else {
        shapeCollection = new ShapeCollection();
      }

      return shapeCollection;
    }

    function release(shapeCollection) {
      var i;
      var len = shapeCollection._length;

      for (i = 0; i < len; i += 1) {
        shapePool.release(shapeCollection.shapes[i]);
      }

      shapeCollection._length = 0;

      if (_length === _maxLength) {
        pool = pooling["double"](pool);
        _maxLength *= 2;
      }

      pool[_length] = shapeCollection;
      _length += 1;
    }

    return ob;
  }();

  var ShapePropertyFactory = function () {
    var initFrame = -999999;

    function interpolateShape(frameNum, previousValue, caching) {
      var iterationIndex = caching.lastIndex;
      var keyPropS;
      var keyPropE;
      var isHold;
      var j;
      var k;
      var jLen;
      var kLen;
      var perc;
      var vertexValue;
      var kf = this.keyframes;

      if (frameNum < kf[0].t - this.offsetTime) {
        keyPropS = kf[0].s[0];
        isHold = true;
        iterationIndex = 0;
      } else if (frameNum >= kf[kf.length - 1].t - this.offsetTime) {
        keyPropS = kf[kf.length - 1].s ? kf[kf.length - 1].s[0] : kf[kf.length - 2].e[0];
        /* if(kf[kf.length - 1].s){
                  keyPropS = kf[kf.length - 1].s[0];
              }else{
                  keyPropS = kf[kf.length - 2].e[0];
              } */

        isHold = true;
      } else {
        var i = iterationIndex;
        var len = kf.length - 1;
        var flag = true;
        var keyData;
        var nextKeyData;
        var keyframeMetadata;

        while (flag) {
          keyData = kf[i];
          nextKeyData = kf[i + 1];

          if (nextKeyData.t - this.offsetTime > frameNum) {
            break;
          }

          if (i < len - 1) {
            i += 1;
          } else {
            flag = false;
          }
        }

        keyframeMetadata = this.keyframesMetadata[i] || {};
        isHold = keyData.h === 1;
        iterationIndex = i;

        if (!isHold) {
          if (frameNum >= nextKeyData.t - this.offsetTime) {
            perc = 1;
          } else if (frameNum < keyData.t - this.offsetTime) {
            perc = 0;
          } else {
            var fnc;

            if (keyframeMetadata.__fnct) {
              fnc = keyframeMetadata.__fnct;
            } else {
              fnc = BezierFactory.getBezierEasing(keyData.o.x, keyData.o.y, keyData.i.x, keyData.i.y).get;
              keyframeMetadata.__fnct = fnc;
            }

            perc = fnc((frameNum - (keyData.t - this.offsetTime)) / (nextKeyData.t - this.offsetTime - (keyData.t - this.offsetTime)));
          }

          keyPropE = nextKeyData.s ? nextKeyData.s[0] : keyData.e[0];
        }

        keyPropS = keyData.s[0];
      }

      jLen = previousValue._length;
      kLen = keyPropS.i[0].length;
      caching.lastIndex = iterationIndex;

      for (j = 0; j < jLen; j += 1) {
        for (k = 0; k < kLen; k += 1) {
          vertexValue = isHold ? keyPropS.i[j][k] : keyPropS.i[j][k] + (keyPropE.i[j][k] - keyPropS.i[j][k]) * perc;
          previousValue.i[j][k] = vertexValue;
          vertexValue = isHold ? keyPropS.o[j][k] : keyPropS.o[j][k] + (keyPropE.o[j][k] - keyPropS.o[j][k]) * perc;
          previousValue.o[j][k] = vertexValue;
          vertexValue = isHold ? keyPropS.v[j][k] : keyPropS.v[j][k] + (keyPropE.v[j][k] - keyPropS.v[j][k]) * perc;
          previousValue.v[j][k] = vertexValue;
        }
      }
    }

    function interpolateShapeCurrentTime() {
      var frameNum = this.comp.renderedFrame - this.offsetTime;
      var initTime = this.keyframes[0].t - this.offsetTime;
      var endTime = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      var lastFrame = this._caching.lastFrame;

      if (!(lastFrame !== initFrame && (lastFrame < initTime && frameNum < initTime || lastFrame > endTime && frameNum > endTime))) {
        /// /
        this._caching.lastIndex = lastFrame < frameNum ? this._caching.lastIndex : 0;
        this.interpolateShape(frameNum, this.pv, this._caching); /// /
      }

      this._caching.lastFrame = frameNum;
      return this.pv;
    }

    function resetShape() {
      this.paths = this.localShapeCollection;
    }

    function shapesEqual(shape1, shape2) {
      if (shape1._length !== shape2._length || shape1.c !== shape2.c) {
        return false;
      }

      var i;
      var len = shape1._length;

      for (i = 0; i < len; i += 1) {
        if (shape1.v[i][0] !== shape2.v[i][0] || shape1.v[i][1] !== shape2.v[i][1] || shape1.o[i][0] !== shape2.o[i][0] || shape1.o[i][1] !== shape2.o[i][1] || shape1.i[i][0] !== shape2.i[i][0] || shape1.i[i][1] !== shape2.i[i][1]) {
          return false;
        }
      }

      return true;
    }

    function setVValue(newPath) {
      if (!shapesEqual(this.v, newPath)) {
        this.v = shapePool.clone(newPath);
        this.localShapeCollection.releaseShapes();
        this.localShapeCollection.addShape(this.v);
        this._mdf = true;
        this.paths = this.localShapeCollection;
      }
    }

    function processEffectsSequence() {
      if (this.elem.globalData.frameId === this.frameId) {
        return;
      }

      if (!this.effectsSequence.length) {
        this._mdf = false;
        return;
      }

      if (this.lock) {
        this.setVValue(this.pv);
        return;
      }

      this.lock = true;
      this._mdf = false;
      var finalValue;

      if (this.kf) {
        finalValue = this.pv;
      } else if (this.data.ks) {
        finalValue = this.data.ks.k;
      } else {
        finalValue = this.data.pt.k;
      }

      var i;
      var len = this.effectsSequence.length;

      for (i = 0; i < len; i += 1) {
        finalValue = this.effectsSequence[i](finalValue);
      }

      this.setVValue(finalValue);
      this.lock = false;
      this.frameId = this.elem.globalData.frameId;
    }

    function ShapeProperty(elem, data, type) {
      this.propType = 'shape';
      this.comp = elem.comp;
      this.container = elem;
      this.elem = elem;
      this.data = data;
      this.k = false;
      this.kf = false;
      this._mdf = false;
      var pathData = type === 3 ? data.pt.k : data.ks.k;
      this.v = shapePool.clone(pathData);
      this.pv = shapePool.clone(this.v);
      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
      this.paths = this.localShapeCollection;
      this.paths.addShape(this.v);
      this.reset = resetShape;
      this.effectsSequence = [];
    }

    function addEffect(effectFunction) {
      this.effectsSequence.push(effectFunction);
      this.container.addDynamicProperty(this);
    }

    ShapeProperty.prototype.interpolateShape = interpolateShape;
    ShapeProperty.prototype.getValue = processEffectsSequence;
    ShapeProperty.prototype.setVValue = setVValue;
    ShapeProperty.prototype.addEffect = addEffect;

    function KeyframedShapeProperty(elem, data, type) {
      this.propType = 'shape';
      this.comp = elem.comp;
      this.elem = elem;
      this.container = elem;
      this.offsetTime = elem.data.st;
      this.keyframes = type === 3 ? data.pt.k : data.ks.k;
      this.keyframesMetadata = [];
      this.k = true;
      this.kf = true;
      var len = this.keyframes[0].s[0].i.length;
      this.v = shapePool.newElement();
      this.v.setPathData(this.keyframes[0].s[0].c, len);
      this.pv = shapePool.clone(this.v);
      this.localShapeCollection = shapeCollectionPool.newShapeCollection();
      this.paths = this.localShapeCollection;
      this.paths.addShape(this.v);
      this.lastFrame = initFrame;
      this.reset = resetShape;
      this._caching = {
        lastFrame: initFrame,
        lastIndex: 0
      };
      this.effectsSequence = [interpolateShapeCurrentTime.bind(this)];
    }

    KeyframedShapeProperty.prototype.getValue = processEffectsSequence;
    KeyframedShapeProperty.prototype.interpolateShape = interpolateShape;
    KeyframedShapeProperty.prototype.setVValue = setVValue;
    KeyframedShapeProperty.prototype.addEffect = addEffect;

    var EllShapeProperty = function () {
      var cPoint = roundCorner;

      function EllShapePropertyFactory(elem, data) {
        this.v = shapePool.newElement();
        this.v.setPathData(true, 4);
        this.localShapeCollection = shapeCollectionPool.newShapeCollection();
        this.paths = this.localShapeCollection;
        this.localShapeCollection.addShape(this.v);
        this.d = data.d;
        this.elem = elem;
        this.comp = elem.comp;
        this.frameId = -1;
        this.initDynamicPropertyContainer(elem);
        this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
        this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);

        if (this.dynamicProperties.length) {
          this.k = true;
        } else {
          this.k = false;
          this.convertEllToPath();
        }
      }

      EllShapePropertyFactory.prototype = {
        reset: resetShape,
        getValue: function getValue() {
          if (this.elem.globalData.frameId === this.frameId) {
            return;
          }

          this.frameId = this.elem.globalData.frameId;
          this.iterateDynamicProperties();

          if (this._mdf) {
            this.convertEllToPath();
          }
        },
        convertEllToPath: function convertEllToPath() {
          var p0 = this.p.v[0];
          var p1 = this.p.v[1];
          var s0 = this.s.v[0] / 2;
          var s1 = this.s.v[1] / 2;

          var _cw = this.d !== 3;

          var _v = this.v;
          _v.v[0][0] = p0;
          _v.v[0][1] = p1 - s1;
          _v.v[1][0] = _cw ? p0 + s0 : p0 - s0;
          _v.v[1][1] = p1;
          _v.v[2][0] = p0;
          _v.v[2][1] = p1 + s1;
          _v.v[3][0] = _cw ? p0 - s0 : p0 + s0;
          _v.v[3][1] = p1;
          _v.i[0][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
          _v.i[0][1] = p1 - s1;
          _v.i[1][0] = _cw ? p0 + s0 : p0 - s0;
          _v.i[1][1] = p1 - s1 * cPoint;
          _v.i[2][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
          _v.i[2][1] = p1 + s1;
          _v.i[3][0] = _cw ? p0 - s0 : p0 + s0;
          _v.i[3][1] = p1 + s1 * cPoint;
          _v.o[0][0] = _cw ? p0 + s0 * cPoint : p0 - s0 * cPoint;
          _v.o[0][1] = p1 - s1;
          _v.o[1][0] = _cw ? p0 + s0 : p0 - s0;
          _v.o[1][1] = p1 + s1 * cPoint;
          _v.o[2][0] = _cw ? p0 - s0 * cPoint : p0 + s0 * cPoint;
          _v.o[2][1] = p1 + s1;
          _v.o[3][0] = _cw ? p0 - s0 : p0 + s0;
          _v.o[3][1] = p1 - s1 * cPoint;
        }
      };
      extendPrototype([DynamicPropertyContainer], EllShapePropertyFactory);
      return EllShapePropertyFactory;
    }();

    var StarShapeProperty = function () {
      function StarShapePropertyFactory(elem, data) {
        this.v = shapePool.newElement();
        this.v.setPathData(true, 0);
        this.elem = elem;
        this.comp = elem.comp;
        this.data = data;
        this.frameId = -1;
        this.d = data.d;
        this.initDynamicPropertyContainer(elem);

        if (data.sy === 1) {
          this.ir = PropertyFactory.getProp(elem, data.ir, 0, 0, this);
          this.is = PropertyFactory.getProp(elem, data.is, 0, 0.01, this);
          this.convertToPath = this.convertStarToPath;
        } else {
          this.convertToPath = this.convertPolygonToPath;
        }

        this.pt = PropertyFactory.getProp(elem, data.pt, 0, 0, this);
        this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
        this.r = PropertyFactory.getProp(elem, data.r, 0, degToRads, this);
        this.or = PropertyFactory.getProp(elem, data.or, 0, 0, this);
        this.os = PropertyFactory.getProp(elem, data.os, 0, 0.01, this);
        this.localShapeCollection = shapeCollectionPool.newShapeCollection();
        this.localShapeCollection.addShape(this.v);
        this.paths = this.localShapeCollection;

        if (this.dynamicProperties.length) {
          this.k = true;
        } else {
          this.k = false;
          this.convertToPath();
        }
      }

      StarShapePropertyFactory.prototype = {
        reset: resetShape,
        getValue: function getValue() {
          if (this.elem.globalData.frameId === this.frameId) {
            return;
          }

          this.frameId = this.elem.globalData.frameId;
          this.iterateDynamicProperties();

          if (this._mdf) {
            this.convertToPath();
          }
        },
        convertStarToPath: function convertStarToPath() {
          var numPts = Math.floor(this.pt.v) * 2;
          var angle = Math.PI * 2 / numPts;
          /* this.v.v.length = numPts;
                  this.v.i.length = numPts;
                  this.v.o.length = numPts; */

          var longFlag = true;
          var longRad = this.or.v;
          var shortRad = this.ir.v;
          var longRound = this.os.v;
          var shortRound = this.is.v;
          var longPerimSegment = 2 * Math.PI * longRad / (numPts * 2);
          var shortPerimSegment = 2 * Math.PI * shortRad / (numPts * 2);
          var i;
          var rad;
          var roundness;
          var perimSegment;
          var currentAng = -Math.PI / 2;
          currentAng += this.r.v;
          var dir = this.data.d === 3 ? -1 : 1;
          this.v._length = 0;

          for (i = 0; i < numPts; i += 1) {
            rad = longFlag ? longRad : shortRad;
            roundness = longFlag ? longRound : shortRound;
            perimSegment = longFlag ? longPerimSegment : shortPerimSegment;
            var x = rad * Math.cos(currentAng);
            var y = rad * Math.sin(currentAng);
            var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
            var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
            x += +this.p.v[0];
            y += +this.p.v[1];
            this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
            /* this.v.v[i] = [x,y];
                      this.v.i[i] = [x+ox*perimSegment*roundness*dir,y+oy*perimSegment*roundness*dir];
                      this.v.o[i] = [x-ox*perimSegment*roundness*dir,y-oy*perimSegment*roundness*dir];
                      this.v._length = numPts; */

            longFlag = !longFlag;
            currentAng += angle * dir;
          }
        },
        convertPolygonToPath: function convertPolygonToPath() {
          var numPts = Math.floor(this.pt.v);
          var angle = Math.PI * 2 / numPts;
          var rad = this.or.v;
          var roundness = this.os.v;
          var perimSegment = 2 * Math.PI * rad / (numPts * 4);
          var i;
          var currentAng = -Math.PI * 0.5;
          var dir = this.data.d === 3 ? -1 : 1;
          currentAng += this.r.v;
          this.v._length = 0;

          for (i = 0; i < numPts; i += 1) {
            var x = rad * Math.cos(currentAng);
            var y = rad * Math.sin(currentAng);
            var ox = x === 0 && y === 0 ? 0 : y / Math.sqrt(x * x + y * y);
            var oy = x === 0 && y === 0 ? 0 : -x / Math.sqrt(x * x + y * y);
            x += +this.p.v[0];
            y += +this.p.v[1];
            this.v.setTripleAt(x, y, x - ox * perimSegment * roundness * dir, y - oy * perimSegment * roundness * dir, x + ox * perimSegment * roundness * dir, y + oy * perimSegment * roundness * dir, i, true);
            currentAng += angle * dir;
          }

          this.paths.length = 0;
          this.paths[0] = this.v;
        }
      };
      extendPrototype([DynamicPropertyContainer], StarShapePropertyFactory);
      return StarShapePropertyFactory;
    }();

    var RectShapeProperty = function () {
      function RectShapePropertyFactory(elem, data) {
        this.v = shapePool.newElement();
        this.v.c = true;
        this.localShapeCollection = shapeCollectionPool.newShapeCollection();
        this.localShapeCollection.addShape(this.v);
        this.paths = this.localShapeCollection;
        this.elem = elem;
        this.comp = elem.comp;
        this.frameId = -1;
        this.d = data.d;
        this.initDynamicPropertyContainer(elem);
        this.p = PropertyFactory.getProp(elem, data.p, 1, 0, this);
        this.s = PropertyFactory.getProp(elem, data.s, 1, 0, this);
        this.r = PropertyFactory.getProp(elem, data.r, 0, 0, this);

        if (this.dynamicProperties.length) {
          this.k = true;
        } else {
          this.k = false;
          this.convertRectToPath();
        }
      }

      RectShapePropertyFactory.prototype = {
        convertRectToPath: function convertRectToPath() {
          var p0 = this.p.v[0];
          var p1 = this.p.v[1];
          var v0 = this.s.v[0] / 2;
          var v1 = this.s.v[1] / 2;
          var round = bmMin(v0, v1, this.r.v);
          var cPoint = round * (1 - roundCorner);
          this.v._length = 0;

          if (this.d === 2 || this.d === 1) {
            this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, 0, true);
            this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, p0 + v0, p1 + v1 - round, 1, true);

            if (round !== 0) {
              this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, 2, true);
              this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0 + round, p1 + v1, 3, true);
              this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, 4, true);
              this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1 + round, 5, true);
              this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, 6, true);
              this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, p0 + v0 - round, p1 - v1, 7, true);
            } else {
              this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0 + cPoint, p1 + v1, p0 - v0, p1 + v1, 2);
              this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0, p1 - v1 + cPoint, p0 - v0, p1 - v1, 3);
            }
          } else {
            this.v.setTripleAt(p0 + v0, p1 - v1 + round, p0 + v0, p1 - v1 + cPoint, p0 + v0, p1 - v1 + round, 0, true);

            if (round !== 0) {
              this.v.setTripleAt(p0 + v0 - round, p1 - v1, p0 + v0 - round, p1 - v1, p0 + v0 - cPoint, p1 - v1, 1, true);
              this.v.setTripleAt(p0 - v0 + round, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0 + round, p1 - v1, 2, true);
              this.v.setTripleAt(p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + round, p0 - v0, p1 - v1 + cPoint, 3, true);
              this.v.setTripleAt(p0 - v0, p1 + v1 - round, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1 - round, 4, true);
              this.v.setTripleAt(p0 - v0 + round, p1 + v1, p0 - v0 + round, p1 + v1, p0 - v0 + cPoint, p1 + v1, 5, true);
              this.v.setTripleAt(p0 + v0 - round, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0 - round, p1 + v1, 6, true);
              this.v.setTripleAt(p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - round, p0 + v0, p1 + v1 - cPoint, 7, true);
            } else {
              this.v.setTripleAt(p0 - v0, p1 - v1, p0 - v0 + cPoint, p1 - v1, p0 - v0, p1 - v1, 1, true);
              this.v.setTripleAt(p0 - v0, p1 + v1, p0 - v0, p1 + v1 - cPoint, p0 - v0, p1 + v1, 2, true);
              this.v.setTripleAt(p0 + v0, p1 + v1, p0 + v0 - cPoint, p1 + v1, p0 + v0, p1 + v1, 3, true);
            }
          }
        },
        getValue: function getValue() {
          if (this.elem.globalData.frameId === this.frameId) {
            return;
          }

          this.frameId = this.elem.globalData.frameId;
          this.iterateDynamicProperties();

          if (this._mdf) {
            this.convertRectToPath();
          }
        },
        reset: resetShape
      };
      extendPrototype([DynamicPropertyContainer], RectShapePropertyFactory);
      return RectShapePropertyFactory;
    }();

    function getShapeProp(elem, data, type) {
      var prop;

      if (type === 3 || type === 4) {
        var dataProp = type === 3 ? data.pt : data.ks;
        var keys = dataProp.k;

        if (keys.length) {
          prop = new KeyframedShapeProperty(elem, data, type);
        } else {
          prop = new ShapeProperty(elem, data, type);
        }
      } else if (type === 5) {
        prop = new RectShapeProperty(elem, data);
      } else if (type === 6) {
        prop = new EllShapeProperty(elem, data);
      } else if (type === 7) {
        prop = new StarShapeProperty(elem, data);
      }

      if (prop.k) {
        elem.addDynamicProperty(prop);
      }

      return prop;
    }

    function getConstructorFunction() {
      return ShapeProperty;
    }

    function getKeyframedConstructorFunction() {
      return KeyframedShapeProperty;
    }

    var ob = {};
    ob.getShapeProp = getShapeProp;
    ob.getConstructorFunction = getConstructorFunction;
    ob.getKeyframedConstructorFunction = getKeyframedConstructorFunction;
    return ob;
  }();

  /*!
   Transformation Matrix v2.0
   (c) Epistemex 2014-2015
   www.epistemex.com
   By Ken Fyrstenberg
   Contributions by leeoniya.
   License: MIT, header required.
   */

  /**
   * 2D transformation matrix object initialized with identity matrix.
   *
   * The matrix can synchronize a canvas context by supplying the context
   * as an argument, or later apply current absolute transform to an
   * existing context.
   *
   * All values are handled as floating point values.
   *
   * @param {CanvasRenderingContext2D} [context] - Optional context to sync with Matrix
   * @prop {number} a - scale x
   * @prop {number} b - shear y
   * @prop {number} c - shear x
   * @prop {number} d - scale y
   * @prop {number} e - translate x
   * @prop {number} f - translate y
   * @prop {CanvasRenderingContext2D|null} [context=null] - set or get current canvas context
   * @constructor
   */

  var Matrix = function () {
    var _cos = Math.cos;
    var _sin = Math.sin;
    var _tan = Math.tan;
    var _rnd = Math.round;

    function reset() {
      this.props[0] = 1;
      this.props[1] = 0;
      this.props[2] = 0;
      this.props[3] = 0;
      this.props[4] = 0;
      this.props[5] = 1;
      this.props[6] = 0;
      this.props[7] = 0;
      this.props[8] = 0;
      this.props[9] = 0;
      this.props[10] = 1;
      this.props[11] = 0;
      this.props[12] = 0;
      this.props[13] = 0;
      this.props[14] = 0;
      this.props[15] = 1;
      return this;
    }

    function rotate(angle) {
      if (angle === 0) {
        return this;
      }

      var mCos = _cos(angle);

      var mSin = _sin(angle);

      return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    function rotateX(angle) {
      if (angle === 0) {
        return this;
      }

      var mCos = _cos(angle);

      var mSin = _sin(angle);

      return this._t(1, 0, 0, 0, 0, mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1);
    }

    function rotateY(angle) {
      if (angle === 0) {
        return this;
      }

      var mCos = _cos(angle);

      var mSin = _sin(angle);

      return this._t(mCos, 0, mSin, 0, 0, 1, 0, 0, -mSin, 0, mCos, 0, 0, 0, 0, 1);
    }

    function rotateZ(angle) {
      if (angle === 0) {
        return this;
      }

      var mCos = _cos(angle);

      var mSin = _sin(angle);

      return this._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    function shear(sx, sy) {
      return this._t(1, sy, sx, 1, 0, 0);
    }

    function skew(ax, ay) {
      return this.shear(_tan(ax), _tan(ay));
    }

    function skewFromAxis(ax, angle) {
      var mCos = _cos(angle);

      var mSin = _sin(angle);

      return this._t(mCos, mSin, 0, 0, -mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, _tan(ax), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(mCos, -mSin, 0, 0, mSin, mCos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); // return this._t(mCos, mSin, -mSin, mCos, 0, 0)._t(1, 0, _tan(ax), 1, 0, 0)._t(mCos, -mSin, mSin, mCos, 0, 0);
    }

    function scale(sx, sy, sz) {
      if (!sz && sz !== 0) {
        sz = 1;
      }

      if (sx === 1 && sy === 1 && sz === 1) {
        return this;
      }

      return this._t(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1);
    }

    function setTransform(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
      this.props[0] = a;
      this.props[1] = b;
      this.props[2] = c;
      this.props[3] = d;
      this.props[4] = e;
      this.props[5] = f;
      this.props[6] = g;
      this.props[7] = h;
      this.props[8] = i;
      this.props[9] = j;
      this.props[10] = k;
      this.props[11] = l;
      this.props[12] = m;
      this.props[13] = n;
      this.props[14] = o;
      this.props[15] = p;
      return this;
    }

    function translate(tx, ty, tz) {
      tz = tz || 0;

      if (tx !== 0 || ty !== 0 || tz !== 0) {
        return this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tx, ty, tz, 1);
      }

      return this;
    }

    function transform(a2, b2, c2, d2, e2, f2, g2, h2, i2, j2, k2, l2, m2, n2, o2, p2) {
      var _p = this.props;

      if (a2 === 1 && b2 === 0 && c2 === 0 && d2 === 0 && e2 === 0 && f2 === 1 && g2 === 0 && h2 === 0 && i2 === 0 && j2 === 0 && k2 === 1 && l2 === 0) {
        // NOTE: commenting this condition because TurboFan deoptimizes code when present
        // if(m2 !== 0 || n2 !== 0 || o2 !== 0){
        _p[12] = _p[12] * a2 + _p[15] * m2;
        _p[13] = _p[13] * f2 + _p[15] * n2;
        _p[14] = _p[14] * k2 + _p[15] * o2;
        _p[15] *= p2; // }

        this._identityCalculated = false;
        return this;
      }

      var a1 = _p[0];
      var b1 = _p[1];
      var c1 = _p[2];
      var d1 = _p[3];
      var e1 = _p[4];
      var f1 = _p[5];
      var g1 = _p[6];
      var h1 = _p[7];
      var i1 = _p[8];
      var j1 = _p[9];
      var k1 = _p[10];
      var l1 = _p[11];
      var m1 = _p[12];
      var n1 = _p[13];
      var o1 = _p[14];
      var p1 = _p[15];
      /* matrix order (canvas compatible):
           * ace
           * bdf
           * 001
           */

      _p[0] = a1 * a2 + b1 * e2 + c1 * i2 + d1 * m2;
      _p[1] = a1 * b2 + b1 * f2 + c1 * j2 + d1 * n2;
      _p[2] = a1 * c2 + b1 * g2 + c1 * k2 + d1 * o2;
      _p[3] = a1 * d2 + b1 * h2 + c1 * l2 + d1 * p2;
      _p[4] = e1 * a2 + f1 * e2 + g1 * i2 + h1 * m2;
      _p[5] = e1 * b2 + f1 * f2 + g1 * j2 + h1 * n2;
      _p[6] = e1 * c2 + f1 * g2 + g1 * k2 + h1 * o2;
      _p[7] = e1 * d2 + f1 * h2 + g1 * l2 + h1 * p2;
      _p[8] = i1 * a2 + j1 * e2 + k1 * i2 + l1 * m2;
      _p[9] = i1 * b2 + j1 * f2 + k1 * j2 + l1 * n2;
      _p[10] = i1 * c2 + j1 * g2 + k1 * k2 + l1 * o2;
      _p[11] = i1 * d2 + j1 * h2 + k1 * l2 + l1 * p2;
      _p[12] = m1 * a2 + n1 * e2 + o1 * i2 + p1 * m2;
      _p[13] = m1 * b2 + n1 * f2 + o1 * j2 + p1 * n2;
      _p[14] = m1 * c2 + n1 * g2 + o1 * k2 + p1 * o2;
      _p[15] = m1 * d2 + n1 * h2 + o1 * l2 + p1 * p2;
      this._identityCalculated = false;
      return this;
    }

    function isIdentity() {
      if (!this._identityCalculated) {
        this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1);
        this._identityCalculated = true;
      }

      return this._identity;
    }

    function equals(matr) {
      var i = 0;

      while (i < 16) {
        if (matr.props[i] !== this.props[i]) {
          return false;
        }

        i += 1;
      }

      return true;
    }

    function clone(matr) {
      var i;

      for (i = 0; i < 16; i += 1) {
        matr.props[i] = this.props[i];
      }

      return matr;
    }

    function cloneFromProps(props) {
      var i;

      for (i = 0; i < 16; i += 1) {
        this.props[i] = props[i];
      }
    }

    function applyToPoint(x, y, z) {
      return {
        x: x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12],
        y: x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13],
        z: x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]
      };
      /* return {
           x: x * me.a + y * me.c + me.e,
           y: x * me.b + y * me.d + me.f
           }; */
    }

    function applyToX(x, y, z) {
      return x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12];
    }

    function applyToY(x, y, z) {
      return x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13];
    }

    function applyToZ(x, y, z) {
      return x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14];
    }

    function getInverseMatrix() {
      var determinant = this.props[0] * this.props[5] - this.props[1] * this.props[4];
      var a = this.props[5] / determinant;
      var b = -this.props[1] / determinant;
      var c = -this.props[4] / determinant;
      var d = this.props[0] / determinant;
      var e = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / determinant;
      var f = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / determinant;
      var inverseMatrix = new Matrix();
      inverseMatrix.props[0] = a;
      inverseMatrix.props[1] = b;
      inverseMatrix.props[4] = c;
      inverseMatrix.props[5] = d;
      inverseMatrix.props[12] = e;
      inverseMatrix.props[13] = f;
      return inverseMatrix;
    }

    function inversePoint(pt) {
      var inverseMatrix = this.getInverseMatrix();
      return inverseMatrix.applyToPointArray(pt[0], pt[1], pt[2] || 0);
    }

    function inversePoints(pts) {
      var i;
      var len = pts.length;
      var retPts = [];

      for (i = 0; i < len; i += 1) {
        retPts[i] = inversePoint(pts[i]);
      }

      return retPts;
    }

    function applyToTriplePoints(pt1, pt2, pt3) {
      var arr = createTypedArray('float32', 6);

      if (this.isIdentity()) {
        arr[0] = pt1[0];
        arr[1] = pt1[1];
        arr[2] = pt2[0];
        arr[3] = pt2[1];
        arr[4] = pt3[0];
        arr[5] = pt3[1];
      } else {
        var p0 = this.props[0];
        var p1 = this.props[1];
        var p4 = this.props[4];
        var p5 = this.props[5];
        var p12 = this.props[12];
        var p13 = this.props[13];
        arr[0] = pt1[0] * p0 + pt1[1] * p4 + p12;
        arr[1] = pt1[0] * p1 + pt1[1] * p5 + p13;
        arr[2] = pt2[0] * p0 + pt2[1] * p4 + p12;
        arr[3] = pt2[0] * p1 + pt2[1] * p5 + p13;
        arr[4] = pt3[0] * p0 + pt3[1] * p4 + p12;
        arr[5] = pt3[0] * p1 + pt3[1] * p5 + p13;
      }

      return arr;
    }

    function applyToPointArray(x, y, z) {
      var arr;

      if (this.isIdentity()) {
        arr = [x, y, z];
      } else {
        arr = [x * this.props[0] + y * this.props[4] + z * this.props[8] + this.props[12], x * this.props[1] + y * this.props[5] + z * this.props[9] + this.props[13], x * this.props[2] + y * this.props[6] + z * this.props[10] + this.props[14]];
      }

      return arr;
    }

    function applyToPointStringified(x, y) {
      if (this.isIdentity()) {
        return x + ',' + y;
      }

      var _p = this.props;
      return Math.round((x * _p[0] + y * _p[4] + _p[12]) * 100) / 100 + ',' + Math.round((x * _p[1] + y * _p[5] + _p[13]) * 100) / 100;
    }

    function toCSS() {
      // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.

      /* if(this.isIdentity()) {
              return '';
          } */
      var i = 0;
      var props = this.props;
      var cssValue = 'matrix3d(';
      var v = 10000;

      while (i < 16) {
        cssValue += _rnd(props[i] * v) / v;
        cssValue += i === 15 ? ')' : ',';
        i += 1;
      }

      return cssValue;
    }

    function roundMatrixProperty(val) {
      var v = 10000;

      if (val < 0.000001 && val > 0 || val > -0.000001 && val < 0) {
        return _rnd(val * v) / v;
      }

      return val;
    }

    function to2dCSS() {
      // Doesn't make much sense to add this optimization. If it is an identity matrix, it's very likely this will get called only once since it won't be keyframed.

      /* if(this.isIdentity()) {
              return '';
          } */
      var props = this.props;

      var _a = roundMatrixProperty(props[0]);

      var _b = roundMatrixProperty(props[1]);

      var _c = roundMatrixProperty(props[4]);

      var _d = roundMatrixProperty(props[5]);

      var _e = roundMatrixProperty(props[12]);

      var _f = roundMatrixProperty(props[13]);

      return 'matrix(' + _a + ',' + _b + ',' + _c + ',' + _d + ',' + _e + ',' + _f + ')';
    }

    return function () {
      this.reset = reset;
      this.rotate = rotate;
      this.rotateX = rotateX;
      this.rotateY = rotateY;
      this.rotateZ = rotateZ;
      this.skew = skew;
      this.skewFromAxis = skewFromAxis;
      this.shear = shear;
      this.scale = scale;
      this.setTransform = setTransform;
      this.translate = translate;
      this.transform = transform;
      this.applyToPoint = applyToPoint;
      this.applyToX = applyToX;
      this.applyToY = applyToY;
      this.applyToZ = applyToZ;
      this.applyToPointArray = applyToPointArray;
      this.applyToTriplePoints = applyToTriplePoints;
      this.applyToPointStringified = applyToPointStringified;
      this.toCSS = toCSS;
      this.to2dCSS = to2dCSS;
      this.clone = clone;
      this.cloneFromProps = cloneFromProps;
      this.equals = equals;
      this.inversePoints = inversePoints;
      this.inversePoint = inversePoint;
      this.getInverseMatrix = getInverseMatrix;
      this._t = this.transform;
      this.isIdentity = isIdentity;
      this._identity = true;
      this._identityCalculated = false;
      this.props = createTypedArray('float32', 16);
      this.reset();
    };
  }();

  function _typeof$3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }
  var lottie = {};
  var standalone = '__[STANDALONE]__';
  var animationData = '__[ANIMATIONDATA]__';
  var renderer = '';

  function setLocation(href) {
    setLocationHref(href);
  }

  function searchAnimations() {
    if (standalone === true) {
      animationManager.searchAnimations(animationData, standalone, renderer);
    } else {
      animationManager.searchAnimations();
    }
  }

  function setSubframeRendering(flag) {
    setSubframeEnabled(flag);
  }

  function setPrefix(prefix) {
    setIdPrefix(prefix);
  }

  function loadAnimation(params) {
    if (standalone === true) {
      params.animationData = JSON.parse(animationData);
    }

    return animationManager.loadAnimation(params);
  }

  function setQuality(value) {
    if (typeof value === 'string') {
      switch (value) {
        case 'high':
          setDefaultCurveSegments(200);
          break;

        default:
        case 'medium':
          setDefaultCurveSegments(50);
          break;

        case 'low':
          setDefaultCurveSegments(10);
          break;
      }
    } else if (!isNaN(value) && value > 1) {
      setDefaultCurveSegments(value);
    }

    if (getDefaultCurveSegments() >= 50) {
      roundValues(false);
    } else {
      roundValues(true);
    }
  }

  function inBrowser() {
    return typeof navigator !== 'undefined';
  }

  function installPlugin(type, plugin) {
    if (type === 'expressions') {
      setExpressionsPlugin(plugin);
    }
  }

  function getFactory(name) {
    switch (name) {
      case 'propertyFactory':
        return PropertyFactory;

      case 'shapePropertyFactory':
        return ShapePropertyFactory;

      case 'matrix':
        return Matrix;

      default:
        return null;
    }
  }

  lottie.play = animationManager.play;
  lottie.pause = animationManager.pause;
  lottie.setLocationHref = setLocation;
  lottie.togglePause = animationManager.togglePause;
  lottie.setSpeed = animationManager.setSpeed;
  lottie.setDirection = animationManager.setDirection;
  lottie.stop = animationManager.stop;
  lottie.searchAnimations = searchAnimations;
  lottie.registerAnimation = animationManager.registerAnimation;
  lottie.loadAnimation = loadAnimation;
  lottie.setSubframeRendering = setSubframeRendering;
  lottie.resize = animationManager.resize; // lottie.start = start;

  lottie.goToAndStop = animationManager.goToAndStop;
  lottie.destroy = animationManager.destroy;
  lottie.setQuality = setQuality;
  lottie.inBrowser = inBrowser;
  lottie.installPlugin = installPlugin;
  lottie.freeze = animationManager.freeze;
  lottie.unfreeze = animationManager.unfreeze;
  lottie.setVolume = animationManager.setVolume;
  lottie.mute = animationManager.mute;
  lottie.unmute = animationManager.unmute;
  lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations;
  lottie.useWebWorker = setWebWorker;
  lottie.setIDPrefix = setPrefix;
  lottie.__getFactory = getFactory;
  lottie.version = '5.11.0';

  function checkReady() {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);
      searchAnimations();
    }
  }

  function getQueryVariable(variable) {
    var vars = queryString.split('&');

    for (var i = 0; i < vars.length; i += 1) {
      var pair = vars[i].split('=');

      if (decodeURIComponent(pair[0]) == variable) {
        // eslint-disable-line eqeqeq
        return decodeURIComponent(pair[1]);
      }
    }

    return null;
  }

  var queryString = '';

  if (standalone) {
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index] || {
      src: ''
    };
    queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, '') : ''; // eslint-disable-line no-useless-escape

    renderer = getQueryVariable('renderer');
  }

  var readyStateCheckInterval = setInterval(checkReady, 100); // this adds bodymovin to the window object for backwards compatibility

  try {
    if (!(( false ? 0 : _typeof$3(exports)) === 'object' && "object" !== 'undefined') && !( true && __webpack_require__.amdO) // eslint-disable-line no-undef
    ) {}
  } catch (err) {//
  }

  var ShapeModifiers = function () {
    var ob = {};
    var modifiers = {};
    ob.registerModifier = registerModifier;
    ob.getModifier = getModifier;

    function registerModifier(nm, factory) {
      if (!modifiers[nm]) {
        modifiers[nm] = factory;
      }
    }

    function getModifier(nm, elem, data) {
      return new modifiers[nm](elem, data);
    }

    return ob;
  }();

  function ShapeModifier() {}

  ShapeModifier.prototype.initModifierProperties = function () {};

  ShapeModifier.prototype.addShapeToModifier = function () {};

  ShapeModifier.prototype.addShape = function (data) {
    if (!this.closed) {
      // Adding shape to dynamic properties. It covers the case where a shape has no effects applied, to reset it's _mdf state on every tick.
      data.sh.container.addDynamicProperty(data.sh);
      var shapeData = {
        shape: data.sh,
        data: data,
        localShapeCollection: shapeCollectionPool.newShapeCollection()
      };
      this.shapes.push(shapeData);
      this.addShapeToModifier(shapeData);

      if (this._isAnimated) {
        data.setAsAnimated();
      }
    }
  };

  ShapeModifier.prototype.init = function (elem, data) {
    this.shapes = [];
    this.elem = elem;
    this.initDynamicPropertyContainer(elem);
    this.initModifierProperties(elem, data);
    this.frameId = initialDefaultFrame;
    this.closed = false;
    this.k = false;

    if (this.dynamicProperties.length) {
      this.k = true;
    } else {
      this.getValue(true);
    }
  };

  ShapeModifier.prototype.processKeys = function () {
    if (this.elem.globalData.frameId === this.frameId) {
      return;
    }

    this.frameId = this.elem.globalData.frameId;
    this.iterateDynamicProperties();
  };

  extendPrototype([DynamicPropertyContainer], ShapeModifier);

  function TrimModifier() {}

  extendPrototype([ShapeModifier], TrimModifier);

  TrimModifier.prototype.initModifierProperties = function (elem, data) {
    this.s = PropertyFactory.getProp(elem, data.s, 0, 0.01, this);
    this.e = PropertyFactory.getProp(elem, data.e, 0, 0.01, this);
    this.o = PropertyFactory.getProp(elem, data.o, 0, 0, this);
    this.sValue = 0;
    this.eValue = 0;
    this.getValue = this.processKeys;
    this.m = data.m;
    this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
  };

  TrimModifier.prototype.addShapeToModifier = function (shapeData) {
    shapeData.pathsData = [];
  };

  TrimModifier.prototype.calculateShapeEdges = function (s, e, shapeLength, addedLength, totalModifierLength) {
    var segments = [];

    if (e <= 1) {
      segments.push({
        s: s,
        e: e
      });
    } else if (s >= 1) {
      segments.push({
        s: s - 1,
        e: e - 1
      });
    } else {
      segments.push({
        s: s,
        e: 1
      });
      segments.push({
        s: 0,
        e: e - 1
      });
    }

    var shapeSegments = [];
    var i;
    var len = segments.length;
    var segmentOb;

    for (i = 0; i < len; i += 1) {
      segmentOb = segments[i];

      if (!(segmentOb.e * totalModifierLength < addedLength || segmentOb.s * totalModifierLength > addedLength + shapeLength)) {
        var shapeS;
        var shapeE;

        if (segmentOb.s * totalModifierLength <= addedLength) {
          shapeS = 0;
        } else {
          shapeS = (segmentOb.s * totalModifierLength - addedLength) / shapeLength;
        }

        if (segmentOb.e * totalModifierLength >= addedLength + shapeLength) {
          shapeE = 1;
        } else {
          shapeE = (segmentOb.e * totalModifierLength - addedLength) / shapeLength;
        }

        shapeSegments.push([shapeS, shapeE]);
      }
    }

    if (!shapeSegments.length) {
      shapeSegments.push([0, 0]);
    }

    return shapeSegments;
  };

  TrimModifier.prototype.releasePathsData = function (pathsData) {
    var i;
    var len = pathsData.length;

    for (i = 0; i < len; i += 1) {
      segmentsLengthPool.release(pathsData[i]);
    }

    pathsData.length = 0;
    return pathsData;
  };

  TrimModifier.prototype.processShapes = function (_isFirstFrame) {
    var s;
    var e;

    if (this._mdf || _isFirstFrame) {
      var o = this.o.v % 360 / 360;

      if (o < 0) {
        o += 1;
      }

      if (this.s.v > 1) {
        s = 1 + o;
      } else if (this.s.v < 0) {
        s = 0 + o;
      } else {
        s = this.s.v + o;
      }

      if (this.e.v > 1) {
        e = 1 + o;
      } else if (this.e.v < 0) {
        e = 0 + o;
      } else {
        e = this.e.v + o;
      }

      if (s > e) {
        var _s = s;
        s = e;
        e = _s;
      }

      s = Math.round(s * 10000) * 0.0001;
      e = Math.round(e * 10000) * 0.0001;
      this.sValue = s;
      this.eValue = e;
    } else {
      s = this.sValue;
      e = this.eValue;
    }

    var shapePaths;
    var i;
    var len = this.shapes.length;
    var j;
    var jLen;
    var pathsData;
    var pathData;
    var totalShapeLength;
    var totalModifierLength = 0;

    if (e === s) {
      for (i = 0; i < len; i += 1) {
        this.shapes[i].localShapeCollection.releaseShapes();
        this.shapes[i].shape._mdf = true;
        this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;

        if (this._mdf) {
          this.shapes[i].pathsData.length = 0;
        }
      }
    } else if (!(e === 1 && s === 0 || e === 0 && s === 1)) {
      var segments = [];
      var shapeData;
      var localShapeCollection;

      for (i = 0; i < len; i += 1) {
        shapeData = this.shapes[i]; // if shape hasn't changed and trim properties haven't changed, cached previous path can be used

        if (!shapeData.shape._mdf && !this._mdf && !_isFirstFrame && this.m !== 2) {
          shapeData.shape.paths = shapeData.localShapeCollection;
        } else {
          shapePaths = shapeData.shape.paths;
          jLen = shapePaths._length;
          totalShapeLength = 0;

          if (!shapeData.shape._mdf && shapeData.pathsData.length) {
            totalShapeLength = shapeData.totalShapeLength;
          } else {
            pathsData = this.releasePathsData(shapeData.pathsData);

            for (j = 0; j < jLen; j += 1) {
              pathData = bez.getSegmentsLength(shapePaths.shapes[j]);
              pathsData.push(pathData);
              totalShapeLength += pathData.totalLength;
            }

            shapeData.totalShapeLength = totalShapeLength;
            shapeData.pathsData = pathsData;
          }

          totalModifierLength += totalShapeLength;
          shapeData.shape._mdf = true;
        }
      }

      var shapeS = s;
      var shapeE = e;
      var addedLength = 0;
      var edges;

      for (i = len - 1; i >= 0; i -= 1) {
        shapeData = this.shapes[i];

        if (shapeData.shape._mdf) {
          localShapeCollection = shapeData.localShapeCollection;
          localShapeCollection.releaseShapes(); // if m === 2 means paths are trimmed individually so edges need to be found for this specific shape relative to whoel group

          if (this.m === 2 && len > 1) {
            edges = this.calculateShapeEdges(s, e, shapeData.totalShapeLength, addedLength, totalModifierLength);
            addedLength += shapeData.totalShapeLength;
          } else {
            edges = [[shapeS, shapeE]];
          }

          jLen = edges.length;

          for (j = 0; j < jLen; j += 1) {
            shapeS = edges[j][0];
            shapeE = edges[j][1];
            segments.length = 0;

            if (shapeE <= 1) {
              segments.push({
                s: shapeData.totalShapeLength * shapeS,
                e: shapeData.totalShapeLength * shapeE
              });
            } else if (shapeS >= 1) {
              segments.push({
                s: shapeData.totalShapeLength * (shapeS - 1),
                e: shapeData.totalShapeLength * (shapeE - 1)
              });
            } else {
              segments.push({
                s: shapeData.totalShapeLength * shapeS,
                e: shapeData.totalShapeLength
              });
              segments.push({
                s: 0,
                e: shapeData.totalShapeLength * (shapeE - 1)
              });
            }

            var newShapesData = this.addShapes(shapeData, segments[0]);

            if (segments[0].s !== segments[0].e) {
              if (segments.length > 1) {
                var lastShapeInCollection = shapeData.shape.paths.shapes[shapeData.shape.paths._length - 1];

                if (lastShapeInCollection.c) {
                  var lastShape = newShapesData.pop();
                  this.addPaths(newShapesData, localShapeCollection);
                  newShapesData = this.addShapes(shapeData, segments[1], lastShape);
                } else {
                  this.addPaths(newShapesData, localShapeCollection);
                  newShapesData = this.addShapes(shapeData, segments[1]);
                }
              }

              this.addPaths(newShapesData, localShapeCollection);
            }
          }

          shapeData.shape.paths = localShapeCollection;
        }
      }
    } else if (this._mdf) {
      for (i = 0; i < len; i += 1) {
        // Releasign Trim Cached paths data when no trim applied in case shapes are modified inbetween.
        // Don't remove this even if it's losing cached info.
        this.shapes[i].pathsData.length = 0;
        this.shapes[i].shape._mdf = true;
      }
    }
  };

  TrimModifier.prototype.addPaths = function (newPaths, localShapeCollection) {
    var i;
    var len = newPaths.length;

    for (i = 0; i < len; i += 1) {
      localShapeCollection.addShape(newPaths[i]);
    }
  };

  TrimModifier.prototype.addSegment = function (pt1, pt2, pt3, pt4, shapePath, pos, newShape) {
    shapePath.setXYAt(pt2[0], pt2[1], 'o', pos);
    shapePath.setXYAt(pt3[0], pt3[1], 'i', pos + 1);

    if (newShape) {
      shapePath.setXYAt(pt1[0], pt1[1], 'v', pos);
    }

    shapePath.setXYAt(pt4[0], pt4[1], 'v', pos + 1);
  };

  TrimModifier.prototype.addSegmentFromArray = function (points, shapePath, pos, newShape) {
    shapePath.setXYAt(points[1], points[5], 'o', pos);
    shapePath.setXYAt(points[2], points[6], 'i', pos + 1);

    if (newShape) {
      shapePath.setXYAt(points[0], points[4], 'v', pos);
    }

    shapePath.setXYAt(points[3], points[7], 'v', pos + 1);
  };

  TrimModifier.prototype.addShapes = function (shapeData, shapeSegment, shapePath) {
    var pathsData = shapeData.pathsData;
    var shapePaths = shapeData.shape.paths.shapes;
    var i;
    var len = shapeData.shape.paths._length;
    var j;
    var jLen;
    var addedLength = 0;
    var currentLengthData;
    var segmentCount;
    var lengths;
    var segment;
    var shapes = [];
    var initPos;
    var newShape = true;

    if (!shapePath) {
      shapePath = shapePool.newElement();
      segmentCount = 0;
      initPos = 0;
    } else {
      segmentCount = shapePath._length;
      initPos = shapePath._length;
    }

    shapes.push(shapePath);

    for (i = 0; i < len; i += 1) {
      lengths = pathsData[i].lengths;
      shapePath.c = shapePaths[i].c;
      jLen = shapePaths[i].c ? lengths.length : lengths.length + 1;

      for (j = 1; j < jLen; j += 1) {
        currentLengthData = lengths[j - 1];

        if (addedLength + currentLengthData.addedLength < shapeSegment.s) {
          addedLength += currentLengthData.addedLength;
          shapePath.c = false;
        } else if (addedLength > shapeSegment.e) {
          shapePath.c = false;
          break;
        } else {
          if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + currentLengthData.addedLength) {
            this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[j], shapePaths[i].v[j], shapePath, segmentCount, newShape);
            newShape = false;
          } else {
            segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[j], shapePaths[i].o[j - 1], shapePaths[i].i[j], (shapeSegment.s - addedLength) / currentLengthData.addedLength, (shapeSegment.e - addedLength) / currentLengthData.addedLength, lengths[j - 1]);
            this.addSegmentFromArray(segment, shapePath, segmentCount, newShape); // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);

            newShape = false;
            shapePath.c = false;
          }

          addedLength += currentLengthData.addedLength;
          segmentCount += 1;
        }
      }

      if (shapePaths[i].c && lengths.length) {
        currentLengthData = lengths[j - 1];

        if (addedLength <= shapeSegment.e) {
          var segmentLength = lengths[j - 1].addedLength;

          if (shapeSegment.s <= addedLength && shapeSegment.e >= addedLength + segmentLength) {
            this.addSegment(shapePaths[i].v[j - 1], shapePaths[i].o[j - 1], shapePaths[i].i[0], shapePaths[i].v[0], shapePath, segmentCount, newShape);
            newShape = false;
          } else {
            segment = bez.getNewSegment(shapePaths[i].v[j - 1], shapePaths[i].v[0], shapePaths[i].o[j - 1], shapePaths[i].i[0], (shapeSegment.s - addedLength) / segmentLength, (shapeSegment.e - addedLength) / segmentLength, lengths[j - 1]);
            this.addSegmentFromArray(segment, shapePath, segmentCount, newShape); // this.addSegment(segment.pt1, segment.pt3, segment.pt4, segment.pt2, shapePath, segmentCount, newShape);

            newShape = false;
            shapePath.c = false;
          }
        } else {
          shapePath.c = false;
        }

        addedLength += currentLengthData.addedLength;
        segmentCount += 1;
      }

      if (shapePath._length) {
        shapePath.setXYAt(shapePath.v[initPos][0], shapePath.v[initPos][1], 'i', initPos);
        shapePath.setXYAt(shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1], 'o', shapePath._length - 1);
      }

      if (addedLength > shapeSegment.e) {
        break;
      }

      if (i < len - 1) {
        shapePath = shapePool.newElement();
        newShape = true;
        shapes.push(shapePath);
        segmentCount = 0;
      }
    }

    return shapes;
  };

  function PuckerAndBloatModifier() {}

  extendPrototype([ShapeModifier], PuckerAndBloatModifier);

  PuckerAndBloatModifier.prototype.initModifierProperties = function (elem, data) {
    this.getValue = this.processKeys;
    this.amount = PropertyFactory.getProp(elem, data.a, 0, null, this);
    this._isAnimated = !!this.amount.effectsSequence.length;
  };

  PuckerAndBloatModifier.prototype.processPath = function (path, amount) {
    var percent = amount / 100;
    var centerPoint = [0, 0];
    var pathLength = path._length;
    var i = 0;

    for (i = 0; i < pathLength; i += 1) {
      centerPoint[0] += path.v[i][0];
      centerPoint[1] += path.v[i][1];
    }

    centerPoint[0] /= pathLength;
    centerPoint[1] /= pathLength;
    var clonedPath = shapePool.newElement();
    clonedPath.c = path.c;
    var vX;
    var vY;
    var oX;
    var oY;
    var iX;
    var iY;

    for (i = 0; i < pathLength; i += 1) {
      vX = path.v[i][0] + (centerPoint[0] - path.v[i][0]) * percent;
      vY = path.v[i][1] + (centerPoint[1] - path.v[i][1]) * percent;
      oX = path.o[i][0] + (centerPoint[0] - path.o[i][0]) * -percent;
      oY = path.o[i][1] + (centerPoint[1] - path.o[i][1]) * -percent;
      iX = path.i[i][0] + (centerPoint[0] - path.i[i][0]) * -percent;
      iY = path.i[i][1] + (centerPoint[1] - path.i[i][1]) * -percent;
      clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, i);
    }

    return clonedPath;
  };

  PuckerAndBloatModifier.prototype.processShapes = function (_isFirstFrame) {
    var shapePaths;
    var i;
    var len = this.shapes.length;
    var j;
    var jLen;
    var amount = this.amount.v;

    if (amount !== 0) {
      var shapeData;
      var localShapeCollection;

      for (i = 0; i < len; i += 1) {
        shapeData = this.shapes[i];
        localShapeCollection = shapeData.localShapeCollection;

        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
          localShapeCollection.releaseShapes();
          shapeData.shape._mdf = true;
          shapePaths = shapeData.shape.paths.shapes;
          jLen = shapeData.shape.paths._length;

          for (j = 0; j < jLen; j += 1) {
            localShapeCollection.addShape(this.processPath(shapePaths[j], amount));
          }
        }

        shapeData.shape.paths = shapeData.localShapeCollection;
      }
    }

    if (!this.dynamicProperties.length) {
      this._mdf = false;
    }
  };

  var TransformPropertyFactory = function () {
    var defaultVector = [0, 0];

    function applyToMatrix(mat) {
      var _mdf = this._mdf;
      this.iterateDynamicProperties();
      this._mdf = this._mdf || _mdf;

      if (this.a) {
        mat.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
      }

      if (this.s) {
        mat.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
      }

      if (this.sk) {
        mat.skewFromAxis(-this.sk.v, this.sa.v);
      }

      if (this.r) {
        mat.rotate(-this.r.v);
      } else {
        mat.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
      }

      if (this.data.p.s) {
        if (this.data.p.z) {
          mat.translate(this.px.v, this.py.v, -this.pz.v);
        } else {
          mat.translate(this.px.v, this.py.v, 0);
        }
      } else {
        mat.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
    }

    function processKeys(forceRender) {
      if (this.elem.globalData.frameId === this.frameId) {
        return;
      }

      if (this._isDirty) {
        this.precalculateMatrix();
        this._isDirty = false;
      }

      this.iterateDynamicProperties();

      if (this._mdf || forceRender) {
        var frameRate;
        this.v.cloneFromProps(this.pre.props);

        if (this.appliedTransformations < 1) {
          this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
        }

        if (this.appliedTransformations < 2) {
          this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
        }

        if (this.sk && this.appliedTransformations < 3) {
          this.v.skewFromAxis(-this.sk.v, this.sa.v);
        }

        if (this.r && this.appliedTransformations < 4) {
          this.v.rotate(-this.r.v);
        } else if (!this.r && this.appliedTransformations < 4) {
          this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
        }

        if (this.autoOriented) {
          var v1;
          var v2;
          frameRate = this.elem.globalData.frameRate;

          if (this.p && this.p.keyframes && this.p.getValueAtTime) {
            if (this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t) {
              v1 = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / frameRate, 0);
              v2 = this.p.getValueAtTime(this.p.keyframes[0].t / frameRate, 0);
            } else if (this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t) {
              v1 = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / frameRate, 0);
              v2 = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / frameRate, 0);
            } else {
              v1 = this.p.pv;
              v2 = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / frameRate, this.p.offsetTime);
            }
          } else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
            v1 = [];
            v2 = [];
            var px = this.px;
            var py = this.py;

            if (px._caching.lastFrame + px.offsetTime <= px.keyframes[0].t) {
              v1[0] = px.getValueAtTime((px.keyframes[0].t + 0.01) / frameRate, 0);
              v1[1] = py.getValueAtTime((py.keyframes[0].t + 0.01) / frameRate, 0);
              v2[0] = px.getValueAtTime(px.keyframes[0].t / frameRate, 0);
              v2[1] = py.getValueAtTime(py.keyframes[0].t / frameRate, 0);
            } else if (px._caching.lastFrame + px.offsetTime >= px.keyframes[px.keyframes.length - 1].t) {
              v1[0] = px.getValueAtTime(px.keyframes[px.keyframes.length - 1].t / frameRate, 0);
              v1[1] = py.getValueAtTime(py.keyframes[py.keyframes.length - 1].t / frameRate, 0);
              v2[0] = px.getValueAtTime((px.keyframes[px.keyframes.length - 1].t - 0.01) / frameRate, 0);
              v2[1] = py.getValueAtTime((py.keyframes[py.keyframes.length - 1].t - 0.01) / frameRate, 0);
            } else {
              v1 = [px.pv, py.pv];
              v2[0] = px.getValueAtTime((px._caching.lastFrame + px.offsetTime - 0.01) / frameRate, px.offsetTime);
              v2[1] = py.getValueAtTime((py._caching.lastFrame + py.offsetTime - 0.01) / frameRate, py.offsetTime);
            }
          } else {
            v2 = defaultVector;
            v1 = v2;
          }

          this.v.rotate(-Math.atan2(v1[1] - v2[1], v1[0] - v2[0]));
        }

        if (this.data.p && this.data.p.s) {
          if (this.data.p.z) {
            this.v.translate(this.px.v, this.py.v, -this.pz.v);
          } else {
            this.v.translate(this.px.v, this.py.v, 0);
          }
        } else {
          this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
        }
      }

      this.frameId = this.elem.globalData.frameId;
    }

    function precalculateMatrix() {
      if (!this.a.k) {
        this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]);
        this.appliedTransformations = 1;
      } else {
        return;
      }

      if (!this.s.effectsSequence.length) {
        this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]);
        this.appliedTransformations = 2;
      } else {
        return;
      }

      if (this.sk) {
        if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) {
          this.pre.skewFromAxis(-this.sk.v, this.sa.v);
          this.appliedTransformations = 3;
        } else {
          return;
        }
      }

      if (this.r) {
        if (!this.r.effectsSequence.length) {
          this.pre.rotate(-this.r.v);
          this.appliedTransformations = 4;
        }
      } else if (!this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length) {
        this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]);
        this.appliedTransformations = 4;
      }
    }

    function autoOrient() {//
      // var prevP = this.getValueAtTime();
    }

    function addDynamicProperty(prop) {
      this._addDynamicProperty(prop);

      this.elem.addDynamicProperty(prop);
      this._isDirty = true;
    }

    function TransformProperty(elem, data, container) {
      this.elem = elem;
      this.frameId = -1;
      this.propType = 'transform';
      this.data = data;
      this.v = new Matrix(); // Precalculated matrix with non animated properties

      this.pre = new Matrix();
      this.appliedTransformations = 0;
      this.initDynamicPropertyContainer(container || elem);

      if (data.p && data.p.s) {
        this.px = PropertyFactory.getProp(elem, data.p.x, 0, 0, this);
        this.py = PropertyFactory.getProp(elem, data.p.y, 0, 0, this);

        if (data.p.z) {
          this.pz = PropertyFactory.getProp(elem, data.p.z, 0, 0, this);
        }
      } else {
        this.p = PropertyFactory.getProp(elem, data.p || {
          k: [0, 0, 0]
        }, 1, 0, this);
      }

      if (data.rx) {
        this.rx = PropertyFactory.getProp(elem, data.rx, 0, degToRads, this);
        this.ry = PropertyFactory.getProp(elem, data.ry, 0, degToRads, this);
        this.rz = PropertyFactory.getProp(elem, data.rz, 0, degToRads, this);

        if (data.or.k[0].ti) {
          var i;
          var len = data.or.k.length;

          for (i = 0; i < len; i += 1) {
            data.or.k[i].to = null;
            data.or.k[i].ti = null;
          }
        }

        this.or = PropertyFactory.getProp(elem, data.or, 1, degToRads, this); // sh Indicates it needs to be capped between -180 and 180

        this.or.sh = true;
      } else {
        this.r = PropertyFactory.getProp(elem, data.r || {
          k: 0
        }, 0, degToRads, this);
      }

      if (data.sk) {
        this.sk = PropertyFactory.getProp(elem, data.sk, 0, degToRads, this);
        this.sa = PropertyFactory.getProp(elem, data.sa, 0, degToRads, this);
      }

      this.a = PropertyFactory.getProp(elem, data.a || {
        k: [0, 0, 0]
      }, 1, 0, this);
      this.s = PropertyFactory.getProp(elem, data.s || {
        k: [100, 100, 100]
      }, 1, 0.01, this); // Opacity is not part of the transform properties, that's why it won't use this.dynamicProperties. That way transforms won't get updated if opacity changes.

      if (data.o) {
        this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, elem);
      } else {
        this.o = {
          _mdf: false,
          v: 1
        };
      }

      this._isDirty = true;

      if (!this.dynamicProperties.length) {
        this.getValue(true);
      }
    }

    TransformProperty.prototype = {
      applyToMatrix: applyToMatrix,
      getValue: processKeys,
      precalculateMatrix: precalculateMatrix,
      autoOrient: autoOrient
    };
    extendPrototype([DynamicPropertyContainer], TransformProperty);
    TransformProperty.prototype.addDynamicProperty = addDynamicProperty;
    TransformProperty.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

    function getTransformProperty(elem, data, container) {
      return new TransformProperty(elem, data, container);
    }

    return {
      getTransformProperty: getTransformProperty
    };
  }();

  function RepeaterModifier() {}

  extendPrototype([ShapeModifier], RepeaterModifier);

  RepeaterModifier.prototype.initModifierProperties = function (elem, data) {
    this.getValue = this.processKeys;
    this.c = PropertyFactory.getProp(elem, data.c, 0, null, this);
    this.o = PropertyFactory.getProp(elem, data.o, 0, null, this);
    this.tr = TransformPropertyFactory.getTransformProperty(elem, data.tr, this);
    this.so = PropertyFactory.getProp(elem, data.tr.so, 0, 0.01, this);
    this.eo = PropertyFactory.getProp(elem, data.tr.eo, 0, 0.01, this);
    this.data = data;

    if (!this.dynamicProperties.length) {
      this.getValue(true);
    }

    this._isAnimated = !!this.dynamicProperties.length;
    this.pMatrix = new Matrix();
    this.rMatrix = new Matrix();
    this.sMatrix = new Matrix();
    this.tMatrix = new Matrix();
    this.matrix = new Matrix();
  };

  RepeaterModifier.prototype.applyTransforms = function (pMatrix, rMatrix, sMatrix, transform, perc, inv) {
    var dir = inv ? -1 : 1;
    var scaleX = transform.s.v[0] + (1 - transform.s.v[0]) * (1 - perc);
    var scaleY = transform.s.v[1] + (1 - transform.s.v[1]) * (1 - perc);
    pMatrix.translate(transform.p.v[0] * dir * perc, transform.p.v[1] * dir * perc, transform.p.v[2]);
    rMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
    rMatrix.rotate(-transform.r.v * dir * perc);
    rMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
    sMatrix.translate(-transform.a.v[0], -transform.a.v[1], transform.a.v[2]);
    sMatrix.scale(inv ? 1 / scaleX : scaleX, inv ? 1 / scaleY : scaleY);
    sMatrix.translate(transform.a.v[0], transform.a.v[1], transform.a.v[2]);
  };

  RepeaterModifier.prototype.init = function (elem, arr, pos, elemsData) {
    this.elem = elem;
    this.arr = arr;
    this.pos = pos;
    this.elemsData = elemsData;
    this._currentCopies = 0;
    this._elements = [];
    this._groups = [];
    this.frameId = -1;
    this.initDynamicPropertyContainer(elem);
    this.initModifierProperties(elem, arr[pos]);

    while (pos > 0) {
      pos -= 1; // this._elements.unshift(arr.splice(pos,1)[0]);

      this._elements.unshift(arr[pos]);
    }

    if (this.dynamicProperties.length) {
      this.k = true;
    } else {
      this.getValue(true);
    }
  };

  RepeaterModifier.prototype.resetElements = function (elements) {
    var i;
    var len = elements.length;

    for (i = 0; i < len; i += 1) {
      elements[i]._processed = false;

      if (elements[i].ty === 'gr') {
        this.resetElements(elements[i].it);
      }
    }
  };

  RepeaterModifier.prototype.cloneElements = function (elements) {
    var newElements = JSON.parse(JSON.stringify(elements));
    this.resetElements(newElements);
    return newElements;
  };

  RepeaterModifier.prototype.changeGroupRender = function (elements, renderFlag) {
    var i;
    var len = elements.length;

    for (i = 0; i < len; i += 1) {
      elements[i]._render = renderFlag;

      if (elements[i].ty === 'gr') {
        this.changeGroupRender(elements[i].it, renderFlag);
      }
    }
  };

  RepeaterModifier.prototype.processShapes = function (_isFirstFrame) {
    var items;
    var itemsTransform;
    var i;
    var dir;
    var cont;
    var hasReloaded = false;

    if (this._mdf || _isFirstFrame) {
      var copies = Math.ceil(this.c.v);

      if (this._groups.length < copies) {
        while (this._groups.length < copies) {
          var group = {
            it: this.cloneElements(this._elements),
            ty: 'gr'
          };
          group.it.push({
            a: {
              a: 0,
              ix: 1,
              k: [0, 0]
            },
            nm: 'Transform',
            o: {
              a: 0,
              ix: 7,
              k: 100
            },
            p: {
              a: 0,
              ix: 2,
              k: [0, 0]
            },
            r: {
              a: 1,
              ix: 6,
              k: [{
                s: 0,
                e: 0,
                t: 0
              }, {
                s: 0,
                e: 0,
                t: 1
              }]
            },
            s: {
              a: 0,
              ix: 3,
              k: [100, 100]
            },
            sa: {
              a: 0,
              ix: 5,
              k: 0
            },
            sk: {
              a: 0,
              ix: 4,
              k: 0
            },
            ty: 'tr'
          });
          this.arr.splice(0, 0, group);

          this._groups.splice(0, 0, group);

          this._currentCopies += 1;
        }

        this.elem.reloadShapes();
        hasReloaded = true;
      }

      cont = 0;
      var renderFlag;

      for (i = 0; i <= this._groups.length - 1; i += 1) {
        renderFlag = cont < copies;
        this._groups[i]._render = renderFlag;
        this.changeGroupRender(this._groups[i].it, renderFlag);

        if (!renderFlag) {
          var elems = this.elemsData[i].it;
          var transformData = elems[elems.length - 1];

          if (transformData.transform.op.v !== 0) {
            transformData.transform.op._mdf = true;
            transformData.transform.op.v = 0;
          } else {
            transformData.transform.op._mdf = false;
          }
        }

        cont += 1;
      }

      this._currentCopies = copies; /// /

      var offset = this.o.v;
      var offsetModulo = offset % 1;
      var roundOffset = offset > 0 ? Math.floor(offset) : Math.ceil(offset);
      var pProps = this.pMatrix.props;
      var rProps = this.rMatrix.props;
      var sProps = this.sMatrix.props;
      this.pMatrix.reset();
      this.rMatrix.reset();
      this.sMatrix.reset();
      this.tMatrix.reset();
      this.matrix.reset();
      var iteration = 0;

      if (offset > 0) {
        while (iteration < roundOffset) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
          iteration += 1;
        }

        if (offsetModulo) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, offsetModulo, false);
          iteration += offsetModulo;
        }
      } else if (offset < 0) {
        while (iteration > roundOffset) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true);
          iteration -= 1;
        }

        if (offsetModulo) {
          this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -offsetModulo, true);
          iteration -= offsetModulo;
        }
      }

      i = this.data.m === 1 ? 0 : this._currentCopies - 1;
      dir = this.data.m === 1 ? 1 : -1;
      cont = this._currentCopies;
      var j;
      var jLen;

      while (cont) {
        items = this.elemsData[i].it;
        itemsTransform = items[items.length - 1].transform.mProps.v.props;
        jLen = itemsTransform.length;
        items[items.length - 1].transform.mProps._mdf = true;
        items[items.length - 1].transform.op._mdf = true;
        items[items.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1));

        if (iteration !== 0) {
          if (i !== 0 && dir === 1 || i !== this._currentCopies - 1 && dir === -1) {
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false);
          }

          this.matrix.transform(rProps[0], rProps[1], rProps[2], rProps[3], rProps[4], rProps[5], rProps[6], rProps[7], rProps[8], rProps[9], rProps[10], rProps[11], rProps[12], rProps[13], rProps[14], rProps[15]);
          this.matrix.transform(sProps[0], sProps[1], sProps[2], sProps[3], sProps[4], sProps[5], sProps[6], sProps[7], sProps[8], sProps[9], sProps[10], sProps[11], sProps[12], sProps[13], sProps[14], sProps[15]);
          this.matrix.transform(pProps[0], pProps[1], pProps[2], pProps[3], pProps[4], pProps[5], pProps[6], pProps[7], pProps[8], pProps[9], pProps[10], pProps[11], pProps[12], pProps[13], pProps[14], pProps[15]);

          for (j = 0; j < jLen; j += 1) {
            itemsTransform[j] = this.matrix.props[j];
          }

          this.matrix.reset();
        } else {
          this.matrix.reset();

          for (j = 0; j < jLen; j += 1) {
            itemsTransform[j] = this.matrix.props[j];
          }
        }

        iteration += 1;
        cont -= 1;
        i += dir;
      }
    } else {
      cont = this._currentCopies;
      i = 0;
      dir = 1;

      while (cont) {
        items = this.elemsData[i].it;
        itemsTransform = items[items.length - 1].transform.mProps.v.props;
        items[items.length - 1].transform.mProps._mdf = false;
        items[items.length - 1].transform.op._mdf = false;
        cont -= 1;
        i += dir;
      }
    }

    return hasReloaded;
  };

  RepeaterModifier.prototype.addShape = function () {};

  function RoundCornersModifier() {}

  extendPrototype([ShapeModifier], RoundCornersModifier);

  RoundCornersModifier.prototype.initModifierProperties = function (elem, data) {
    this.getValue = this.processKeys;
    this.rd = PropertyFactory.getProp(elem, data.r, 0, null, this);
    this._isAnimated = !!this.rd.effectsSequence.length;
  };

  RoundCornersModifier.prototype.processPath = function (path, round) {
    var clonedPath = shapePool.newElement();
    clonedPath.c = path.c;
    var i;
    var len = path._length;
    var currentV;
    var currentI;
    var currentO;
    var closerV;
    var distance;
    var newPosPerc;
    var index = 0;
    var vX;
    var vY;
    var oX;
    var oY;
    var iX;
    var iY;

    for (i = 0; i < len; i += 1) {
      currentV = path.v[i];
      currentO = path.o[i];
      currentI = path.i[i];

      if (currentV[0] === currentO[0] && currentV[1] === currentO[1] && currentV[0] === currentI[0] && currentV[1] === currentI[1]) {
        if ((i === 0 || i === len - 1) && !path.c) {
          clonedPath.setTripleAt(currentV[0], currentV[1], currentO[0], currentO[1], currentI[0], currentI[1], index);
          /* clonedPath.v[index] = currentV;
                  clonedPath.o[index] = currentO;
                  clonedPath.i[index] = currentI; */

          index += 1;
        } else {
          if (i === 0) {
            closerV = path.v[len - 1];
          } else {
            closerV = path.v[i - 1];
          }

          distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
          newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
          iX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
          vX = iX;
          iY = currentV[1] - (currentV[1] - closerV[1]) * newPosPerc;
          vY = iY;
          oX = vX - (vX - currentV[0]) * roundCorner;
          oY = vY - (vY - currentV[1]) * roundCorner;
          clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index);
          index += 1;

          if (i === len - 1) {
            closerV = path.v[0];
          } else {
            closerV = path.v[i + 1];
          }

          distance = Math.sqrt(Math.pow(currentV[0] - closerV[0], 2) + Math.pow(currentV[1] - closerV[1], 2));
          newPosPerc = distance ? Math.min(distance / 2, round) / distance : 0;
          oX = currentV[0] + (closerV[0] - currentV[0]) * newPosPerc;
          vX = oX;
          oY = currentV[1] + (closerV[1] - currentV[1]) * newPosPerc;
          vY = oY;
          iX = vX - (vX - currentV[0]) * roundCorner;
          iY = vY - (vY - currentV[1]) * roundCorner;
          clonedPath.setTripleAt(vX, vY, oX, oY, iX, iY, index);
          index += 1;
        }
      } else {
        clonedPath.setTripleAt(path.v[i][0], path.v[i][1], path.o[i][0], path.o[i][1], path.i[i][0], path.i[i][1], index);
        index += 1;
      }
    }

    return clonedPath;
  };

  RoundCornersModifier.prototype.processShapes = function (_isFirstFrame) {
    var shapePaths;
    var i;
    var len = this.shapes.length;
    var j;
    var jLen;
    var rd = this.rd.v;

    if (rd !== 0) {
      var shapeData;
      var localShapeCollection;

      for (i = 0; i < len; i += 1) {
        shapeData = this.shapes[i];
        localShapeCollection = shapeData.localShapeCollection;

        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
          localShapeCollection.releaseShapes();
          shapeData.shape._mdf = true;
          shapePaths = shapeData.shape.paths.shapes;
          jLen = shapeData.shape.paths._length;

          for (j = 0; j < jLen; j += 1) {
            localShapeCollection.addShape(this.processPath(shapePaths[j], rd));
          }
        }

        shapeData.shape.paths = shapeData.localShapeCollection;
      }
    }

    if (!this.dynamicProperties.length) {
      this._mdf = false;
    }
  };

  function floatEqual(a, b) {
    return Math.abs(a - b) * 100000 <= Math.min(Math.abs(a), Math.abs(b));
  }

  function floatZero(f) {
    return Math.abs(f) <= 0.00001;
  }

  function lerp(p0, p1, amount) {
    return p0 * (1 - amount) + p1 * amount;
  }

  function lerpPoint(p0, p1, amount) {
    return [lerp(p0[0], p1[0], amount), lerp(p0[1], p1[1], amount)];
  }

  function quadRoots(a, b, c) {
    // no root
    if (a === 0) return [];
    var s = b * b - 4 * a * c; // Complex roots

    if (s < 0) return [];
    var singleRoot = -b / (2 * a); // 1 root

    if (s === 0) return [singleRoot];
    var delta = Math.sqrt(s) / (2 * a); // 2 roots

    return [singleRoot - delta, singleRoot + delta];
  }

  function polynomialCoefficients(p0, p1, p2, p3) {
    return [-p0 + 3 * p1 - 3 * p2 + p3, 3 * p0 - 6 * p1 + 3 * p2, -3 * p0 + 3 * p1, p0];
  }

  function singlePoint(p) {
    return new PolynomialBezier(p, p, p, p, false);
  }

  function PolynomialBezier(p0, p1, p2, p3, linearize) {
    if (linearize && pointEqual(p0, p1)) {
      p1 = lerpPoint(p0, p3, 1 / 3);
    }

    if (linearize && pointEqual(p2, p3)) {
      p2 = lerpPoint(p0, p3, 2 / 3);
    }

    var coeffx = polynomialCoefficients(p0[0], p1[0], p2[0], p3[0]);
    var coeffy = polynomialCoefficients(p0[1], p1[1], p2[1], p3[1]);
    this.a = [coeffx[0], coeffy[0]];
    this.b = [coeffx[1], coeffy[1]];
    this.c = [coeffx[2], coeffy[2]];
    this.d = [coeffx[3], coeffy[3]];
    this.points = [p0, p1, p2, p3];
  }

  PolynomialBezier.prototype.point = function (t) {
    return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
  };

  PolynomialBezier.prototype.derivative = function (t) {
    return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
  };

  PolynomialBezier.prototype.tangentAngle = function (t) {
    var p = this.derivative(t);
    return Math.atan2(p[1], p[0]);
  };

  PolynomialBezier.prototype.normalAngle = function (t) {
    var p = this.derivative(t);
    return Math.atan2(p[0], p[1]);
  };

  PolynomialBezier.prototype.inflectionPoints = function () {
    var denom = this.a[1] * this.b[0] - this.a[0] * this.b[1];
    if (floatZero(denom)) return [];
    var tcusp = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / denom;
    var square = tcusp * tcusp - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / denom;
    if (square < 0) return [];
    var root = Math.sqrt(square);

    if (floatZero(root)) {
      if (root > 0 && root < 1) return [tcusp];
      return [];
    }

    return [tcusp - root, tcusp + root].filter(function (r) {
      return r > 0 && r < 1;
    });
  };

  PolynomialBezier.prototype.split = function (t) {
    if (t <= 0) return [singlePoint(this.points[0]), this];
    if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
    var p10 = lerpPoint(this.points[0], this.points[1], t);
    var p11 = lerpPoint(this.points[1], this.points[2], t);
    var p12 = lerpPoint(this.points[2], this.points[3], t);
    var p20 = lerpPoint(p10, p11, t);
    var p21 = lerpPoint(p11, p12, t);
    var p3 = lerpPoint(p20, p21, t);
    return [new PolynomialBezier(this.points[0], p10, p20, p3, true), new PolynomialBezier(p3, p21, p12, this.points[3], true)];
  };

  function extrema(bez, comp) {
    var min = bez.points[0][comp];
    var max = bez.points[bez.points.length - 1][comp];

    if (min > max) {
      var e = max;
      max = min;
      min = e;
    } // Derivative roots to find min/max


    var f = quadRoots(3 * bez.a[comp], 2 * bez.b[comp], bez.c[comp]);

    for (var i = 0; i < f.length; i += 1) {
      if (f[i] > 0 && f[i] < 1) {
        var val = bez.point(f[i])[comp];
        if (val < min) min = val;else if (val > max) max = val;
      }
    }

    return {
      min: min,
      max: max
    };
  }

  PolynomialBezier.prototype.bounds = function () {
    return {
      x: extrema(this, 0),
      y: extrema(this, 1)
    };
  };

  PolynomialBezier.prototype.boundingBox = function () {
    var bounds = this.bounds();
    return {
      left: bounds.x.min,
      right: bounds.x.max,
      top: bounds.y.min,
      bottom: bounds.y.max,
      width: bounds.x.max - bounds.x.min,
      height: bounds.y.max - bounds.y.min,
      cx: (bounds.x.max + bounds.x.min) / 2,
      cy: (bounds.y.max + bounds.y.min) / 2
    };
  };

  function intersectData(bez, t1, t2) {
    var box = bez.boundingBox();
    return {
      cx: box.cx,
      cy: box.cy,
      width: box.width,
      height: box.height,
      bez: bez,
      t: (t1 + t2) / 2,
      t1: t1,
      t2: t2
    };
  }

  function splitData(data) {
    var split = data.bez.split(0.5);
    return [intersectData(split[0], data.t1, data.t), intersectData(split[1], data.t, data.t2)];
  }

  function boxIntersect(b1, b2) {
    return Math.abs(b1.cx - b2.cx) * 2 < b1.width + b2.width && Math.abs(b1.cy - b2.cy) * 2 < b1.height + b2.height;
  }

  function intersectsImpl(d1, d2, depth, tolerance, intersections, maxRecursion) {
    if (!boxIntersect(d1, d2)) return;

    if (depth >= maxRecursion || d1.width <= tolerance && d1.height <= tolerance && d2.width <= tolerance && d2.height <= tolerance) {
      intersections.push([d1.t, d2.t]);
      return;
    }

    var d1s = splitData(d1);
    var d2s = splitData(d2);
    intersectsImpl(d1s[0], d2s[0], depth + 1, tolerance, intersections, maxRecursion);
    intersectsImpl(d1s[0], d2s[1], depth + 1, tolerance, intersections, maxRecursion);
    intersectsImpl(d1s[1], d2s[0], depth + 1, tolerance, intersections, maxRecursion);
    intersectsImpl(d1s[1], d2s[1], depth + 1, tolerance, intersections, maxRecursion);
  }

  PolynomialBezier.prototype.intersections = function (other, tolerance, maxRecursion) {
    if (tolerance === undefined) tolerance = 2;
    if (maxRecursion === undefined) maxRecursion = 7;
    var intersections = [];
    intersectsImpl(intersectData(this, 0, 1), intersectData(other, 0, 1), 0, tolerance, intersections, maxRecursion);
    return intersections;
  };

  PolynomialBezier.shapeSegment = function (shapePath, index) {
    var nextIndex = (index + 1) % shapePath.length();
    return new PolynomialBezier(shapePath.v[index], shapePath.o[index], shapePath.i[nextIndex], shapePath.v[nextIndex], true);
  };

  PolynomialBezier.shapeSegmentInverted = function (shapePath, index) {
    var nextIndex = (index + 1) % shapePath.length();
    return new PolynomialBezier(shapePath.v[nextIndex], shapePath.i[nextIndex], shapePath.o[index], shapePath.v[index], true);
  };

  function crossProduct(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }

  function lineIntersection(start1, end1, start2, end2) {
    var v1 = [start1[0], start1[1], 1];
    var v2 = [end1[0], end1[1], 1];
    var v3 = [start2[0], start2[1], 1];
    var v4 = [end2[0], end2[1], 1];
    var r = crossProduct(crossProduct(v1, v2), crossProduct(v3, v4));
    if (floatZero(r[2])) return null;
    return [r[0] / r[2], r[1] / r[2]];
  }

  function polarOffset(p, angle, length) {
    return [p[0] + Math.cos(angle) * length, p[1] - Math.sin(angle) * length];
  }

  function pointDistance(p1, p2) {
    return Math.hypot(p1[0] - p2[0], p1[1] - p2[1]);
  }

  function pointEqual(p1, p2) {
    return floatEqual(p1[0], p2[0]) && floatEqual(p1[1], p2[1]);
  }

  function ZigZagModifier() {}

  extendPrototype([ShapeModifier], ZigZagModifier);

  ZigZagModifier.prototype.initModifierProperties = function (elem, data) {
    this.getValue = this.processKeys;
    this.amplitude = PropertyFactory.getProp(elem, data.s, 0, null, this);
    this.frequency = PropertyFactory.getProp(elem, data.r, 0, null, this);
    this.pointsType = PropertyFactory.getProp(elem, data.pt, 0, null, this);
    this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
  };

  function setPoint(outputBezier, point, angle, direction, amplitude, outAmplitude, inAmplitude) {
    var angO = angle - Math.PI / 2;
    var angI = angle + Math.PI / 2;
    var px = point[0] + Math.cos(angle) * direction * amplitude;
    var py = point[1] - Math.sin(angle) * direction * amplitude;
    outputBezier.setTripleAt(px, py, px + Math.cos(angO) * outAmplitude, py - Math.sin(angO) * outAmplitude, px + Math.cos(angI) * inAmplitude, py - Math.sin(angI) * inAmplitude, outputBezier.length());
  }

  function getPerpendicularVector(pt1, pt2) {
    var vector = [pt2[0] - pt1[0], pt2[1] - pt1[1]];
    var rot = -Math.PI * 0.5;
    var rotatedVector = [Math.cos(rot) * vector[0] - Math.sin(rot) * vector[1], Math.sin(rot) * vector[0] + Math.cos(rot) * vector[1]];
    return rotatedVector;
  }

  function getProjectingAngle(path, cur) {
    var prevIndex = cur === 0 ? path.length() - 1 : cur - 1;
    var nextIndex = (cur + 1) % path.length();
    var prevPoint = path.v[prevIndex];
    var nextPoint = path.v[nextIndex];
    var pVector = getPerpendicularVector(prevPoint, nextPoint);
    return Math.atan2(0, 1) - Math.atan2(pVector[1], pVector[0]);
  }

  function zigZagCorner(outputBezier, path, cur, amplitude, frequency, pointType, direction) {
    var angle = getProjectingAngle(path, cur);
    var point = path.v[cur % path._length];
    var prevPoint = path.v[cur === 0 ? path._length - 1 : cur - 1];
    var nextPoint = path.v[(cur + 1) % path._length];
    var prevDist = pointType === 2 ? Math.sqrt(Math.pow(point[0] - prevPoint[0], 2) + Math.pow(point[1] - prevPoint[1], 2)) : 0;
    var nextDist = pointType === 2 ? Math.sqrt(Math.pow(point[0] - nextPoint[0], 2) + Math.pow(point[1] - nextPoint[1], 2)) : 0;
    setPoint(outputBezier, path.v[cur % path._length], angle, direction, amplitude, nextDist / ((frequency + 1) * 2), prevDist / ((frequency + 1) * 2), pointType);
  }

  function zigZagSegment(outputBezier, segment, amplitude, frequency, pointType, direction) {
    for (var i = 0; i < frequency; i += 1) {
      var t = (i + 1) / (frequency + 1);
      var dist = pointType === 2 ? Math.sqrt(Math.pow(segment.points[3][0] - segment.points[0][0], 2) + Math.pow(segment.points[3][1] - segment.points[0][1], 2)) : 0;
      var angle = segment.normalAngle(t);
      var point = segment.point(t);
      setPoint(outputBezier, point, angle, direction, amplitude, dist / ((frequency + 1) * 2), dist / ((frequency + 1) * 2), pointType);
      direction = -direction;
    }

    return direction;
  }

  ZigZagModifier.prototype.processPath = function (path, amplitude, frequency, pointType) {
    var count = path._length;
    var clonedPath = shapePool.newElement();
    clonedPath.c = path.c;

    if (!path.c) {
      count -= 1;
    }

    if (count === 0) return clonedPath;
    var direction = -1;
    var segment = PolynomialBezier.shapeSegment(path, 0);
    zigZagCorner(clonedPath, path, 0, amplitude, frequency, pointType, direction);

    for (var i = 0; i < count; i += 1) {
      direction = zigZagSegment(clonedPath, segment, amplitude, frequency, pointType, -direction);

      if (i === count - 1 && !path.c) {
        segment = null;
      } else {
        segment = PolynomialBezier.shapeSegment(path, (i + 1) % count);
      }

      zigZagCorner(clonedPath, path, i + 1, amplitude, frequency, pointType, direction);
    }

    return clonedPath;
  };

  ZigZagModifier.prototype.processShapes = function (_isFirstFrame) {
    var shapePaths;
    var i;
    var len = this.shapes.length;
    var j;
    var jLen;
    var amplitude = this.amplitude.v;
    var frequency = Math.max(0, Math.round(this.frequency.v));
    var pointType = this.pointsType.v;

    if (amplitude !== 0) {
      var shapeData;
      var localShapeCollection;

      for (i = 0; i < len; i += 1) {
        shapeData = this.shapes[i];
        localShapeCollection = shapeData.localShapeCollection;

        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
          localShapeCollection.releaseShapes();
          shapeData.shape._mdf = true;
          shapePaths = shapeData.shape.paths.shapes;
          jLen = shapeData.shape.paths._length;

          for (j = 0; j < jLen; j += 1) {
            localShapeCollection.addShape(this.processPath(shapePaths[j], amplitude, frequency, pointType));
          }
        }

        shapeData.shape.paths = shapeData.localShapeCollection;
      }
    }

    if (!this.dynamicProperties.length) {
      this._mdf = false;
    }
  };

  function linearOffset(p1, p2, amount) {
    var angle = Math.atan2(p2[0] - p1[0], p2[1] - p1[1]);
    return [polarOffset(p1, angle, amount), polarOffset(p2, angle, amount)];
  }

  function offsetSegment(segment, amount) {
    var p0;
    var p1a;
    var p1b;
    var p2b;
    var p2a;
    var p3;
    var e;
    e = linearOffset(segment.points[0], segment.points[1], amount);
    p0 = e[0];
    p1a = e[1];
    e = linearOffset(segment.points[1], segment.points[2], amount);
    p1b = e[0];
    p2b = e[1];
    e = linearOffset(segment.points[2], segment.points[3], amount);
    p2a = e[0];
    p3 = e[1];
    var p1 = lineIntersection(p0, p1a, p1b, p2b);
    if (p1 === null) p1 = p1a;
    var p2 = lineIntersection(p2a, p3, p1b, p2b);
    if (p2 === null) p2 = p2a;
    return new PolynomialBezier(p0, p1, p2, p3);
  }

  function joinLines(outputBezier, seg1, seg2, lineJoin, miterLimit) {
    var p0 = seg1.points[3];
    var p1 = seg2.points[0]; // Bevel

    if (lineJoin === 3) return p0; // Connected, they don't need a joint

    if (pointEqual(p0, p1)) return p0; // Round

    if (lineJoin === 2) {
      var angleOut = -seg1.tangentAngle(1);
      var angleIn = -seg2.tangentAngle(0) + Math.PI;
      var center = lineIntersection(p0, polarOffset(p0, angleOut + Math.PI / 2, 100), p1, polarOffset(p1, angleOut + Math.PI / 2, 100));
      var radius = center ? pointDistance(center, p0) : pointDistance(p0, p1) / 2;
      var tan = polarOffset(p0, angleOut, 2 * radius * roundCorner);
      outputBezier.setXYAt(tan[0], tan[1], 'o', outputBezier.length() - 1);
      tan = polarOffset(p1, angleIn, 2 * radius * roundCorner);
      outputBezier.setTripleAt(p1[0], p1[1], p1[0], p1[1], tan[0], tan[1], outputBezier.length());
      return p1;
    } // Miter


    var t0 = pointEqual(p0, seg1.points[2]) ? seg1.points[0] : seg1.points[2];
    var t1 = pointEqual(p1, seg2.points[1]) ? seg2.points[3] : seg2.points[1];
    var intersection = lineIntersection(t0, p0, p1, t1);

    if (intersection && pointDistance(intersection, p0) < miterLimit) {
      outputBezier.setTripleAt(intersection[0], intersection[1], intersection[0], intersection[1], intersection[0], intersection[1], outputBezier.length());
      return intersection;
    }

    return p0;
  }

  function getIntersection(a, b) {
    var intersect = a.intersections(b);
    if (intersect.length && floatEqual(intersect[0][0], 1)) intersect.shift();
    if (intersect.length) return intersect[0];
    return null;
  }

  function pruneSegmentIntersection(a, b) {
    var outa = a.slice();
    var outb = b.slice();
    var intersect = getIntersection(a[a.length - 1], b[0]);

    if (intersect) {
      outa[a.length - 1] = a[a.length - 1].split(intersect[0])[0];
      outb[0] = b[0].split(intersect[1])[1];
    }

    if (a.length > 1 && b.length > 1) {
      intersect = getIntersection(a[0], b[b.length - 1]);

      if (intersect) {
        return [[a[0].split(intersect[0])[0]], [b[b.length - 1].split(intersect[1])[1]]];
      }
    }

    return [outa, outb];
  }

  function pruneIntersections(segments) {
    var e;

    for (var i = 1; i < segments.length; i += 1) {
      e = pruneSegmentIntersection(segments[i - 1], segments[i]);
      segments[i - 1] = e[0];
      segments[i] = e[1];
    }

    if (segments.length > 1) {
      e = pruneSegmentIntersection(segments[segments.length - 1], segments[0]);
      segments[segments.length - 1] = e[0];
      segments[0] = e[1];
    }

    return segments;
  }

  function offsetSegmentSplit(segment, amount) {
    /*
      We split each bezier segment into smaller pieces based
      on inflection points, this ensures the control point
      polygon is convex.
        (A cubic bezier can have none, one, or two inflection points)
    */
    var flex = segment.inflectionPoints();
    var left;
    var right;
    var split;
    var mid;

    if (flex.length === 0) {
      return [offsetSegment(segment, amount)];
    }

    if (flex.length === 1 || floatEqual(flex[1], 1)) {
      split = segment.split(flex[0]);
      left = split[0];
      right = split[1];
      return [offsetSegment(left, amount), offsetSegment(right, amount)];
    }

    split = segment.split(flex[0]);
    left = split[0];
    var t = (flex[1] - flex[0]) / (1 - flex[0]);
    split = split[1].split(t);
    mid = split[0];
    right = split[1];
    return [offsetSegment(left, amount), offsetSegment(mid, amount), offsetSegment(right, amount)];
  }

  function OffsetPathModifier() {}

  extendPrototype([ShapeModifier], OffsetPathModifier);

  OffsetPathModifier.prototype.initModifierProperties = function (elem, data) {
    this.getValue = this.processKeys;
    this.amount = PropertyFactory.getProp(elem, data.a, 0, null, this);
    this.miterLimit = PropertyFactory.getProp(elem, data.ml, 0, null, this);
    this.lineJoin = data.lj;
    this._isAnimated = this.amount.effectsSequence.length !== 0;
  };

  OffsetPathModifier.prototype.processPath = function (inputBezier, amount, lineJoin, miterLimit) {
    var outputBezier = shapePool.newElement();
    outputBezier.c = inputBezier.c;
    var count = inputBezier.length();

    if (!inputBezier.c) {
      count -= 1;
    }

    var i;
    var j;
    var segment;
    var multiSegments = [];

    for (i = 0; i < count; i += 1) {
      segment = PolynomialBezier.shapeSegment(inputBezier, i);
      multiSegments.push(offsetSegmentSplit(segment, amount));
    }

    if (!inputBezier.c) {
      for (i = count - 1; i >= 0; i -= 1) {
        segment = PolynomialBezier.shapeSegmentInverted(inputBezier, i);
        multiSegments.push(offsetSegmentSplit(segment, amount));
      }
    }

    multiSegments = pruneIntersections(multiSegments); // Add bezier segments to the output and apply line joints

    var lastPoint = null;
    var lastSeg = null;

    for (i = 0; i < multiSegments.length; i += 1) {
      var multiSegment = multiSegments[i];
      if (lastSeg) lastPoint = joinLines(outputBezier, lastSeg, multiSegment[0], lineJoin, miterLimit);
      lastSeg = multiSegment[multiSegment.length - 1];

      for (j = 0; j < multiSegment.length; j += 1) {
        segment = multiSegment[j];

        if (lastPoint && pointEqual(segment.points[0], lastPoint)) {
          outputBezier.setXYAt(segment.points[1][0], segment.points[1][1], 'o', outputBezier.length() - 1);
        } else {
          outputBezier.setTripleAt(segment.points[0][0], segment.points[0][1], segment.points[1][0], segment.points[1][1], segment.points[0][0], segment.points[0][1], outputBezier.length());
        }

        outputBezier.setTripleAt(segment.points[3][0], segment.points[3][1], segment.points[3][0], segment.points[3][1], segment.points[2][0], segment.points[2][1], outputBezier.length());
        lastPoint = segment.points[3];
      }
    }

    if (multiSegments.length) joinLines(outputBezier, lastSeg, multiSegments[0][0], lineJoin, miterLimit);
    return outputBezier;
  };

  OffsetPathModifier.prototype.processShapes = function (_isFirstFrame) {
    var shapePaths;
    var i;
    var len = this.shapes.length;
    var j;
    var jLen;
    var amount = this.amount.v;
    var miterLimit = this.miterLimit.v;
    var lineJoin = this.lineJoin;

    if (amount !== 0) {
      var shapeData;
      var localShapeCollection;

      for (i = 0; i < len; i += 1) {
        shapeData = this.shapes[i];
        localShapeCollection = shapeData.localShapeCollection;

        if (!(!shapeData.shape._mdf && !this._mdf && !_isFirstFrame)) {
          localShapeCollection.releaseShapes();
          shapeData.shape._mdf = true;
          shapePaths = shapeData.shape.paths.shapes;
          jLen = shapeData.shape.paths._length;

          for (j = 0; j < jLen; j += 1) {
            localShapeCollection.addShape(this.processPath(shapePaths[j], amount, lineJoin, miterLimit));
          }
        }

        shapeData.shape.paths = shapeData.localShapeCollection;
      }
    }

    if (!this.dynamicProperties.length) {
      this._mdf = false;
    }
  };

  function getFontProperties(fontData) {
    var styles = fontData.fStyle ? fontData.fStyle.split(' ') : [];
    var fWeight = 'normal';
    var fStyle = 'normal';
    var len = styles.length;
    var styleName;

    for (var i = 0; i < len; i += 1) {
      styleName = styles[i].toLowerCase();

      switch (styleName) {
        case 'italic':
          fStyle = 'italic';
          break;

        case 'bold':
          fWeight = '700';
          break;

        case 'black':
          fWeight = '900';
          break;

        case 'medium':
          fWeight = '500';
          break;

        case 'regular':
        case 'normal':
          fWeight = '400';
          break;

        case 'light':
        case 'thin':
          fWeight = '200';
          break;

        default:
          break;
      }
    }

    return {
      style: fStyle,
      weight: fontData.fWeight || fWeight
    };
  }

  var FontManager = function () {
    var maxWaitingTime = 5000;
    var emptyChar = {
      w: 0,
      size: 0,
      shapes: [],
      data: {
        shapes: []
      }
    };
    var combinedCharacters = []; // Hindi characters

    combinedCharacters = combinedCharacters.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
    var surrogateModifiers = ['d83cdffb', 'd83cdffc', 'd83cdffd', 'd83cdffe', 'd83cdfff'];
    var zeroWidthJoiner = [65039, 8205];

    function trimFontOptions(font) {
      var familyArray = font.split(',');
      var i;
      var len = familyArray.length;
      var enabledFamilies = [];

      for (i = 0; i < len; i += 1) {
        if (familyArray[i] !== 'sans-serif' && familyArray[i] !== 'monospace') {
          enabledFamilies.push(familyArray[i]);
        }
      }

      return enabledFamilies.join(',');
    }

    function setUpNode(font, family) {
      var parentNode = createTag('span'); // Node is invisible to screen readers.

      parentNode.setAttribute('aria-hidden', true);
      parentNode.style.fontFamily = family;
      var node = createTag('span'); // Characters that vary significantly among different fonts

      node.innerText = 'giItT1WQy@!-/#'; // Visible - so we can measure it - but not on the screen

      parentNode.style.position = 'absolute';
      parentNode.style.left = '-10000px';
      parentNode.style.top = '-10000px'; // Large font size makes even subtle changes obvious

      parentNode.style.fontSize = '300px'; // Reset any font properties

      parentNode.style.fontVariant = 'normal';
      parentNode.style.fontStyle = 'normal';
      parentNode.style.fontWeight = 'normal';
      parentNode.style.letterSpacing = '0';
      parentNode.appendChild(node);
      document.body.appendChild(parentNode); // Remember width with no applied web font

      var width = node.offsetWidth;
      node.style.fontFamily = trimFontOptions(font) + ', ' + family;
      return {
        node: node,
        w: width,
        parent: parentNode
      };
    }

    function checkLoadedFonts() {
      var i;
      var len = this.fonts.length;
      var node;
      var w;
      var loadedCount = len;

      for (i = 0; i < len; i += 1) {
        if (this.fonts[i].loaded) {
          loadedCount -= 1;
        } else if (this.fonts[i].fOrigin === 'n' || this.fonts[i].origin === 0) {
          this.fonts[i].loaded = true;
        } else {
          node = this.fonts[i].monoCase.node;
          w = this.fonts[i].monoCase.w;

          if (node.offsetWidth !== w) {
            loadedCount -= 1;
            this.fonts[i].loaded = true;
          } else {
            node = this.fonts[i].sansCase.node;
            w = this.fonts[i].sansCase.w;

            if (node.offsetWidth !== w) {
              loadedCount -= 1;
              this.fonts[i].loaded = true;
            }
          }

          if (this.fonts[i].loaded) {
            this.fonts[i].sansCase.parent.parentNode.removeChild(this.fonts[i].sansCase.parent);
            this.fonts[i].monoCase.parent.parentNode.removeChild(this.fonts[i].monoCase.parent);
          }
        }
      }

      if (loadedCount !== 0 && Date.now() - this.initTime < maxWaitingTime) {
        setTimeout(this.checkLoadedFontsBinded, 20);
      } else {
        setTimeout(this.setIsLoadedBinded, 10);
      }
    }

    function createHelper(fontData, def) {
      var engine = document.body && def ? 'svg' : 'canvas';
      var helper;
      var fontProps = getFontProperties(fontData);

      if (engine === 'svg') {
        var tHelper = createNS('text');
        tHelper.style.fontSize = '100px'; // tHelper.style.fontFamily = fontData.fFamily;

        tHelper.setAttribute('font-family', fontData.fFamily);
        tHelper.setAttribute('font-style', fontProps.style);
        tHelper.setAttribute('font-weight', fontProps.weight);
        tHelper.textContent = '1';

        if (fontData.fClass) {
          tHelper.style.fontFamily = 'inherit';
          tHelper.setAttribute('class', fontData.fClass);
        } else {
          tHelper.style.fontFamily = fontData.fFamily;
        }

        def.appendChild(tHelper);
        helper = tHelper;
      } else {
        var tCanvasHelper = new OffscreenCanvas(500, 500).getContext('2d');
        tCanvasHelper.font = fontProps.style + ' ' + fontProps.weight + ' 100px ' + fontData.fFamily;
        helper = tCanvasHelper;
      }

      function measure(text) {
        if (engine === 'svg') {
          helper.textContent = text;
          return helper.getComputedTextLength();
        }

        return helper.measureText(text).width;
      }

      return {
        measureText: measure
      };
    }

    function addFonts(fontData, defs) {
      if (!fontData) {
        this.isLoaded = true;
        return;
      }

      if (this.chars) {
        this.isLoaded = true;
        this.fonts = fontData.list;
        return;
      }

      if (!document.body) {
        this.isLoaded = true;
        fontData.list.forEach(function (data) {
          data.helper = createHelper(data);
          data.cache = {};
        });
        this.fonts = fontData.list;
        return;
      }

      var fontArr = fontData.list;
      var i;
      var len = fontArr.length;
      var _pendingFonts = len;

      for (i = 0; i < len; i += 1) {
        var shouldLoadFont = true;
        var loadedSelector;
        var j;
        fontArr[i].loaded = false;
        fontArr[i].monoCase = setUpNode(fontArr[i].fFamily, 'monospace');
        fontArr[i].sansCase = setUpNode(fontArr[i].fFamily, 'sans-serif');

        if (!fontArr[i].fPath) {
          fontArr[i].loaded = true;
          _pendingFonts -= 1;
        } else if (fontArr[i].fOrigin === 'p' || fontArr[i].origin === 3) {
          loadedSelector = document.querySelectorAll('style[f-forigin="p"][f-family="' + fontArr[i].fFamily + '"], style[f-origin="3"][f-family="' + fontArr[i].fFamily + '"]');

          if (loadedSelector.length > 0) {
            shouldLoadFont = false;
          }

          if (shouldLoadFont) {
            var s = createTag('style');
            s.setAttribute('f-forigin', fontArr[i].fOrigin);
            s.setAttribute('f-origin', fontArr[i].origin);
            s.setAttribute('f-family', fontArr[i].fFamily);
            s.type = 'text/css';
            s.innerText = '@font-face {font-family: ' + fontArr[i].fFamily + "; font-style: normal; src: url('" + fontArr[i].fPath + "');}";
            defs.appendChild(s);
          }
        } else if (fontArr[i].fOrigin === 'g' || fontArr[i].origin === 1) {
          loadedSelector = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]');

          for (j = 0; j < loadedSelector.length; j += 1) {
            if (loadedSelector[j].href.indexOf(fontArr[i].fPath) !== -1) {
              // Font is already loaded
              shouldLoadFont = false;
            }
          }

          if (shouldLoadFont) {
            var l = createTag('link');
            l.setAttribute('f-forigin', fontArr[i].fOrigin);
            l.setAttribute('f-origin', fontArr[i].origin);
            l.type = 'text/css';
            l.rel = 'stylesheet';
            l.href = fontArr[i].fPath;
            document.body.appendChild(l);
          }
        } else if (fontArr[i].fOrigin === 't' || fontArr[i].origin === 2) {
          loadedSelector = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]');

          for (j = 0; j < loadedSelector.length; j += 1) {
            if (fontArr[i].fPath === loadedSelector[j].src) {
              // Font is already loaded
              shouldLoadFont = false;
            }
          }

          if (shouldLoadFont) {
            var sc = createTag('link');
            sc.setAttribute('f-forigin', fontArr[i].fOrigin);
            sc.setAttribute('f-origin', fontArr[i].origin);
            sc.setAttribute('rel', 'stylesheet');
            sc.setAttribute('href', fontArr[i].fPath);
            defs.appendChild(sc);
          }
        }

        fontArr[i].helper = createHelper(fontArr[i], defs);
        fontArr[i].cache = {};
        this.fonts.push(fontArr[i]);
      }

      if (_pendingFonts === 0) {
        this.isLoaded = true;
      } else {
        // On some cases even if the font is loaded, it won't load correctly when measuring text on canvas.
        // Adding this timeout seems to fix it
        setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
    }

    function addChars(chars) {
      if (!chars) {
        return;
      }

      if (!this.chars) {
        this.chars = [];
      }

      var i;
      var len = chars.length;
      var j;
      var jLen = this.chars.length;
      var found;

      for (i = 0; i < len; i += 1) {
        j = 0;
        found = false;

        while (j < jLen) {
          if (this.chars[j].style === chars[i].style && this.chars[j].fFamily === chars[i].fFamily && this.chars[j].ch === chars[i].ch) {
            found = true;
          }

          j += 1;
        }

        if (!found) {
          this.chars.push(chars[i]);
          jLen += 1;
        }
      }
    }

    function getCharData(_char, style, font) {
      var i = 0;
      var len = this.chars.length;

      while (i < len) {
        if (this.chars[i].ch === _char && this.chars[i].style === style && this.chars[i].fFamily === font) {
          return this.chars[i];
        }

        i += 1;
      }

      if ((typeof _char === 'string' && _char.charCodeAt(0) !== 13 || !_char) && console && console.warn // eslint-disable-line no-console
      && !this._warned) {
        this._warned = true;
        console.warn('Missing character from exported characters list: ', _char, style, font); // eslint-disable-line no-console
      }

      return emptyChar;
    }

    function measureText(_char2, fontName, size) {
      var fontData = this.getFontByName(fontName);

      var index = _char2.charCodeAt(0);

      if (!fontData.cache[index + 1]) {
        var tHelper = fontData.helper;

        if (_char2 === ' ') {
          var doubleSize = tHelper.measureText('|' + _char2 + '|');
          var singleSize = tHelper.measureText('||');
          fontData.cache[index + 1] = (doubleSize - singleSize) / 100;
        } else {
          fontData.cache[index + 1] = tHelper.measureText(_char2) / 100;
        }
      }

      return fontData.cache[index + 1] * size;
    }

    function getFontByName(name) {
      var i = 0;
      var len = this.fonts.length;

      while (i < len) {
        if (this.fonts[i].fName === name) {
          return this.fonts[i];
        }

        i += 1;
      }

      return this.fonts[0];
    }

    function isModifier(firstCharCode, secondCharCode) {
      var sum = firstCharCode.toString(16) + secondCharCode.toString(16);
      return surrogateModifiers.indexOf(sum) !== -1;
    }

    function isZeroWidthJoiner(firstCharCode, secondCharCode) {
      if (!secondCharCode) {
        return firstCharCode === zeroWidthJoiner[1];
      }

      return firstCharCode === zeroWidthJoiner[0] && secondCharCode === zeroWidthJoiner[1];
    }

    function isCombinedCharacter(_char3) {
      return combinedCharacters.indexOf(_char3) !== -1;
    }

    function setIsLoaded() {
      this.isLoaded = true;
    }

    var Font = function Font() {
      this.fonts = [];
      this.chars = null;
      this.typekitLoaded = 0;
      this.isLoaded = false;
      this._warned = false;
      this.initTime = Date.now();
      this.setIsLoadedBinded = this.setIsLoaded.bind(this);
      this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
    };

    Font.isModifier = isModifier;
    Font.isZeroWidthJoiner = isZeroWidthJoiner;
    Font.isCombinedCharacter = isCombinedCharacter;
    var fontPrototype = {
      addChars: addChars,
      addFonts: addFonts,
      getCharData: getCharData,
      getFontByName: getFontByName,
      measureText: measureText,
      checkLoadedFonts: checkLoadedFonts,
      setIsLoaded: setIsLoaded
    };
    Font.prototype = fontPrototype;
    return Font;
  }();

  function SlotManager(animationData) {
    this.animationData = animationData;
  }

  SlotManager.prototype.getProp = function (data) {
    if (this.animationData.slots && this.animationData.slots[data.sid]) {
      return Object.assign(data, this.animationData.slots[data.sid].p);
    }

    return data;
  };

  function slotFactory(animationData) {
    return new SlotManager(animationData);
  }

  function RenderableElement() {}

  RenderableElement.prototype = {
    initRenderable: function initRenderable() {
      // layer's visibility related to inpoint and outpoint. Rename isVisible to isInRange
      this.isInRange = false; // layer's display state

      this.hidden = false; // If layer's transparency equals 0, it can be hidden

      this.isTransparent = false; // list of animated components

      this.renderableComponents = [];
    },
    addRenderableComponent: function addRenderableComponent(component) {
      if (this.renderableComponents.indexOf(component) === -1) {
        this.renderableComponents.push(component);
      }
    },
    removeRenderableComponent: function removeRenderableComponent(component) {
      if (this.renderableComponents.indexOf(component) !== -1) {
        this.renderableComponents.splice(this.renderableComponents.indexOf(component), 1);
      }
    },
    prepareRenderableFrame: function prepareRenderableFrame(num) {
      this.checkLayerLimits(num);
    },
    checkTransparency: function checkTransparency() {
      if (this.finalTransform.mProp.o.v <= 0) {
        if (!this.isTransparent && this.globalData.renderConfig.hideOnTransparent) {
          this.isTransparent = true;
          this.hide();
        }
      } else if (this.isTransparent) {
        this.isTransparent = false;
        this.show();
      }
    },

    /**
       * @function
       * Initializes frame related properties.
       *
       * @param {number} num
       * current frame number in Layer's time
       *
       */
    checkLayerLimits: function checkLayerLimits(num) {
      if (this.data.ip - this.data.st <= num && this.data.op - this.data.st > num) {
        if (this.isInRange !== true) {
          this.globalData._mdf = true;
          this._mdf = true;
          this.isInRange = true;
          this.show();
        }
      } else if (this.isInRange !== false) {
        this.globalData._mdf = true;
        this.isInRange = false;
        this.hide();
      }
    },
    renderRenderable: function renderRenderable() {
      var i;
      var len = this.renderableComponents.length;

      for (i = 0; i < len; i += 1) {
        this.renderableComponents[i].renderFrame(this._isFirstFrame);
      }
      /* this.maskManager.renderFrame(this.finalTransform.mat);
          this.renderableEffectsManager.renderFrame(this._isFirstFrame); */

    },
    sourceRectAtTime: function sourceRectAtTime() {
      return {
        top: 0,
        left: 0,
        width: 100,
        height: 100
      };
    },
    getLayerSize: function getLayerSize() {
      if (this.data.ty === 5) {
        return {
          w: this.data.textData.width,
          h: this.data.textData.height
        };
      }

      return {
        w: this.data.width,
        h: this.data.height
      };
    }
  };

  var getBlendMode = function () {
    var blendModeEnums = {
      0: 'source-over',
      1: 'multiply',
      2: 'screen',
      3: 'overlay',
      4: 'darken',
      5: 'lighten',
      6: 'color-dodge',
      7: 'color-burn',
      8: 'hard-light',
      9: 'soft-light',
      10: 'difference',
      11: 'exclusion',
      12: 'hue',
      13: 'saturation',
      14: 'color',
      15: 'luminosity'
    };
    return function (mode) {
      return blendModeEnums[mode] || '';
    };
  }();

  function SliderEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
  }

  function AngleEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
  }

  function ColorEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
  }

  function PointEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 1, 0, container);
  }

  function LayerIndexEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
  }

  function MaskIndexEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
  }

  function CheckboxEffect(data, elem, container) {
    this.p = PropertyFactory.getProp(elem, data.v, 0, 0, container);
  }

  function NoValueEffect() {
    this.p = {};
  }

  function EffectsManager(data, element) {
    var effects = data.ef || [];
    this.effectElements = [];
    var i;
    var len = effects.length;
    var effectItem;

    for (i = 0; i < len; i += 1) {
      effectItem = new GroupEffect(effects[i], element);
      this.effectElements.push(effectItem);
    }
  }

  function GroupEffect(data, element) {
    this.init(data, element);
  }

  extendPrototype([DynamicPropertyContainer], GroupEffect);
  GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties;

  GroupEffect.prototype.init = function (data, element) {
    this.data = data;
    this.effectElements = [];
    this.initDynamicPropertyContainer(element);
    var i;
    var len = this.data.ef.length;
    var eff;
    var effects = this.data.ef;

    for (i = 0; i < len; i += 1) {
      eff = null;

      switch (effects[i].ty) {
        case 0:
          eff = new SliderEffect(effects[i], element, this);
          break;

        case 1:
          eff = new AngleEffect(effects[i], element, this);
          break;

        case 2:
          eff = new ColorEffect(effects[i], element, this);
          break;

        case 3:
          eff = new PointEffect(effects[i], element, this);
          break;

        case 4:
        case 7:
          eff = new CheckboxEffect(effects[i], element, this);
          break;

        case 10:
          eff = new LayerIndexEffect(effects[i], element, this);
          break;

        case 11:
          eff = new MaskIndexEffect(effects[i], element, this);
          break;

        case 5:
          eff = new EffectsManager(effects[i], element, this);
          break;
        // case 6:

        default:
          eff = new NoValueEffect(effects[i], element, this);
          break;
      }

      if (eff) {
        this.effectElements.push(eff);
      }
    }
  };

  function BaseElement() {}

  BaseElement.prototype = {
    checkMasks: function checkMasks() {
      if (!this.data.hasMask) {
        return false;
      }

      var i = 0;
      var len = this.data.masksProperties.length;

      while (i < len) {
        if (this.data.masksProperties[i].mode !== 'n' && this.data.masksProperties[i].cl !== false) {
          return true;
        }

        i += 1;
      }

      return false;
    },
    initExpressions: function initExpressions() {
      var expressionsInterfaces = getExpressionInterfaces();

      if (!expressionsInterfaces) {
        return;
      }

      var LayerExpressionInterface = expressionsInterfaces('layer');
      var EffectsExpressionInterface = expressionsInterfaces('effects');
      var ShapeExpressionInterface = expressionsInterfaces('shape');
      var TextExpressionInterface = expressionsInterfaces('text');
      var CompExpressionInterface = expressionsInterfaces('comp');
      this.layerInterface = LayerExpressionInterface(this);

      if (this.data.hasMask && this.maskManager) {
        this.layerInterface.registerMaskInterface(this.maskManager);
      }

      var effectsInterface = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
      this.layerInterface.registerEffectsInterface(effectsInterface);

      if (this.data.ty === 0 || this.data.xt) {
        this.compInterface = CompExpressionInterface(this);
      } else if (this.data.ty === 4) {
        this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface);
        this.layerInterface.content = this.layerInterface.shapeInterface;
      } else if (this.data.ty === 5) {
        this.layerInterface.textInterface = TextExpressionInterface(this);
        this.layerInterface.text = this.layerInterface.textInterface;
      }
    },
    setBlendMode: function setBlendMode() {
      var blendModeValue = getBlendMode(this.data.bm);
      var elem = this.baseElement || this.layerElement;
      elem.style['mix-blend-mode'] = blendModeValue;
    },
    initBaseData: function initBaseData(data, globalData, comp) {
      this.globalData = globalData;
      this.comp = comp;
      this.data = data;
      this.layerId = createElementID(); // Stretch factor for old animations missing this property.

      if (!this.data.sr) {
        this.data.sr = 1;
      } // effects manager


      this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
    },
    getType: function getType() {
      return this.type;
    },
    sourceRectAtTime: function sourceRectAtTime() {}
  };

  /**
   * @file
   * Handles element's layer frame update.
   * Checks layer in point and out point
   *
   */
  function FrameElement() {}

  FrameElement.prototype = {
    /**
       * @function
       * Initializes frame related properties.
       *
       */
    initFrame: function initFrame() {
      // set to true when inpoint is rendered
      this._isFirstFrame = false; // list of animated properties

      this.dynamicProperties = []; // If layer has been modified in current tick this will be true

      this._mdf = false;
    },

    /**
       * @function
       * Calculates all dynamic values
       *
       * @param {number} num
       * current frame number in Layer's time
       * @param {boolean} isVisible
       * if layers is currently in range
       *
       */
    prepareProperties: function prepareProperties(num, isVisible) {
      var i;
      var len = this.dynamicProperties.length;

      for (i = 0; i < len; i += 1) {
        if (isVisible || this._isParent && this.dynamicProperties[i].propType === 'transform') {
          this.dynamicProperties[i].getValue();

          if (this.dynamicProperties[i]._mdf) {
            this.globalData._mdf = true;
            this._mdf = true;
          }
        }
      }
    },
    addDynamicProperty: function addDynamicProperty(prop) {
      if (this.dynamicProperties.indexOf(prop) === -1) {
        this.dynamicProperties.push(prop);
      }
    }
  };

  function FootageElement(data, globalData, comp) {
    this.initFrame();
    this.initRenderable();
    this.assetData = globalData.getAssetData(data.refId);
    this.footageData = globalData.imageLoader.getAsset(this.assetData);
    this.initBaseData(data, globalData, comp);
  }

  FootageElement.prototype.prepareFrame = function () {};

  extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement);

  FootageElement.prototype.getBaseElement = function () {
    return null;
  };

  FootageElement.prototype.renderFrame = function () {};

  FootageElement.prototype.destroy = function () {};

  FootageElement.prototype.initExpressions = function () {
    var expressionsInterfaces = getExpressionInterfaces();

    if (!expressionsInterfaces) {
      return;
    }

    var FootageInterface = expressionsInterfaces('footage');
    this.layerInterface = FootageInterface(this);
  };

  FootageElement.prototype.getFootageData = function () {
    return this.footageData;
  };

  function AudioElement(data, globalData, comp) {
    this.initFrame();
    this.initRenderable();
    this.assetData = globalData.getAssetData(data.refId);
    this.initBaseData(data, globalData, comp);
    this._isPlaying = false;
    this._canPlay = false;
    var assetPath = this.globalData.getAssetsPath(this.assetData);
    this.audio = this.globalData.audioController.createAudio(assetPath);
    this._currentTime = 0;
    this.globalData.audioController.addAudio(this);
    this._volumeMultiplier = 1;
    this._volume = 1;
    this._previousVolume = null;
    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
      _placeholder: true
    };
    this.lv = PropertyFactory.getProp(this, data.au && data.au.lv ? data.au.lv : {
      k: [100]
    }, 1, 0.01, this);
  }

  AudioElement.prototype.prepareFrame = function (num) {
    this.prepareRenderableFrame(num, true);
    this.prepareProperties(num, true);

    if (!this.tm._placeholder) {
      var timeRemapped = this.tm.v;
      this._currentTime = timeRemapped;
    } else {
      this._currentTime = num / this.data.sr;
    }

    this._volume = this.lv.v[0];
    var totalVolume = this._volume * this._volumeMultiplier;

    if (this._previousVolume !== totalVolume) {
      this._previousVolume = totalVolume;
      this.audio.volume(totalVolume);
    }
  };

  extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement);

  AudioElement.prototype.renderFrame = function () {
    if (this.isInRange && this._canPlay) {
      if (!this._isPlaying) {
        this.audio.play();
        this.audio.seek(this._currentTime / this.globalData.frameRate);
        this._isPlaying = true;
      } else if (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) {
        this.audio.seek(this._currentTime / this.globalData.frameRate);
      }
    }
  };

  AudioElement.prototype.show = function () {// this.audio.play()
  };

  AudioElement.prototype.hide = function () {
    this.audio.pause();
    this._isPlaying = false;
  };

  AudioElement.prototype.pause = function () {
    this.audio.pause();
    this._isPlaying = false;
    this._canPlay = false;
  };

  AudioElement.prototype.resume = function () {
    this._canPlay = true;
  };

  AudioElement.prototype.setRate = function (rateValue) {
    this.audio.rate(rateValue);
  };

  AudioElement.prototype.volume = function (volumeValue) {
    this._volumeMultiplier = volumeValue;
    this._previousVolume = volumeValue * this._volume;
    this.audio.volume(this._previousVolume);
  };

  AudioElement.prototype.getBaseElement = function () {
    return null;
  };

  AudioElement.prototype.destroy = function () {};

  AudioElement.prototype.sourceRectAtTime = function () {};

  AudioElement.prototype.initExpressions = function () {};

  function BaseRenderer() {}

  BaseRenderer.prototype.checkLayers = function (num) {
    var i;
    var len = this.layers.length;
    var data;
    this.completeLayers = true;

    for (i = len - 1; i >= 0; i -= 1) {
      if (!this.elements[i]) {
        data = this.layers[i];

        if (data.ip - data.st <= num - this.layers[i].st && data.op - data.st > num - this.layers[i].st) {
          this.buildItem(i);
        }
      }

      this.completeLayers = this.elements[i] ? this.completeLayers : false;
    }

    this.checkPendingElements();
  };

  BaseRenderer.prototype.createItem = function (layer) {
    switch (layer.ty) {
      case 2:
        return this.createImage(layer);

      case 0:
        return this.createComp(layer);

      case 1:
        return this.createSolid(layer);

      case 3:
        return this.createNull(layer);

      case 4:
        return this.createShape(layer);

      case 5:
        return this.createText(layer);

      case 6:
        return this.createAudio(layer);

      case 13:
        return this.createCamera(layer);

      case 15:
        return this.createFootage(layer);

      default:
        return this.createNull(layer);
    }
  };

  BaseRenderer.prototype.createCamera = function () {
    throw new Error('You\'re using a 3d camera. Try the html renderer.');
  };

  BaseRenderer.prototype.createAudio = function (data) {
    return new AudioElement(data, this.globalData, this);
  };

  BaseRenderer.prototype.createFootage = function (data) {
    return new FootageElement(data, this.globalData, this);
  };

  BaseRenderer.prototype.buildAllItems = function () {
    var i;
    var len = this.layers.length;

    for (i = 0; i < len; i += 1) {
      this.buildItem(i);
    }

    this.checkPendingElements();
  };

  BaseRenderer.prototype.includeLayers = function (newLayers) {
    this.completeLayers = false;
    var i;
    var len = newLayers.length;
    var j;
    var jLen = this.layers.length;

    for (i = 0; i < len; i += 1) {
      j = 0;

      while (j < jLen) {
        if (this.layers[j].id === newLayers[i].id) {
          this.layers[j] = newLayers[i];
          break;
        }

        j += 1;
      }
    }
  };

  BaseRenderer.prototype.setProjectInterface = function (pInterface) {
    this.globalData.projectInterface = pInterface;
  };

  BaseRenderer.prototype.initItems = function () {
    if (!this.globalData.progressiveLoad) {
      this.buildAllItems();
    }
  };

  BaseRenderer.prototype.buildElementParenting = function (element, parentName, hierarchy) {
    var elements = this.elements;
    var layers = this.layers;
    var i = 0;
    var len = layers.length;

    while (i < len) {
      if (layers[i].ind == parentName) {
        // eslint-disable-line eqeqeq
        if (!elements[i] || elements[i] === true) {
          this.buildItem(i);
          this.addPendingElement(element);
        } else {
          hierarchy.push(elements[i]);
          elements[i].setAsParent();

          if (layers[i].parent !== undefined) {
            this.buildElementParenting(element, layers[i].parent, hierarchy);
          } else {
            element.setHierarchy(hierarchy);
          }
        }
      }

      i += 1;
    }
  };

  BaseRenderer.prototype.addPendingElement = function (element) {
    this.pendingElements.push(element);
  };

  BaseRenderer.prototype.searchExtraCompositions = function (assets) {
    var i;
    var len = assets.length;

    for (i = 0; i < len; i += 1) {
      if (assets[i].xt) {
        var comp = this.createComp(assets[i]);
        comp.initExpressions();
        this.globalData.projectInterface.registerComposition(comp);
      }
    }
  };

  BaseRenderer.prototype.getElementById = function (ind) {
    var i;
    var len = this.elements.length;

    for (i = 0; i < len; i += 1) {
      if (this.elements[i].data.ind === ind) {
        return this.elements[i];
      }
    }

    return null;
  };

  BaseRenderer.prototype.getElementByPath = function (path) {
    var pathValue = path.shift();
    var element;

    if (typeof pathValue === 'number') {
      element = this.elements[pathValue];
    } else {
      var i;
      var len = this.elements.length;

      for (i = 0; i < len; i += 1) {
        if (this.elements[i].data.nm === pathValue) {
          element = this.elements[i];
          break;
        }
      }
    }

    if (path.length === 0) {
      return element;
    }

    return element.getElementByPath(path);
  };

  BaseRenderer.prototype.setupGlobalData = function (animData, fontsContainer) {
    this.globalData.fontManager = new FontManager();
    this.globalData.slotManager = slotFactory(animData);
    this.globalData.fontManager.addChars(animData.chars);
    this.globalData.fontManager.addFonts(animData.fonts, fontsContainer);
    this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem);
    this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem);
    this.globalData.imageLoader = this.animationItem.imagePreloader;
    this.globalData.audioController = this.animationItem.audioController;
    this.globalData.frameId = 0;
    this.globalData.frameRate = animData.fr;
    this.globalData.nm = animData.nm;
    this.globalData.compSize = {
      w: animData.w,
      h: animData.h
    };
  };

  function TransformElement() {}

  TransformElement.prototype = {
    initTransform: function initTransform() {
      this.finalTransform = {
        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
          o: 0
        },
        _matMdf: false,
        _opMdf: false,
        mat: new Matrix()
      };

      if (this.data.ao) {
        this.finalTransform.mProp.autoOriented = true;
      } // TODO: check TYPE 11: Guided elements


      if (this.data.ty !== 11) {// this.createElements();
      }
    },
    renderTransform: function renderTransform() {
      this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame;
      this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame;

      if (this.hierarchy) {
        var mat;
        var finalMat = this.finalTransform.mat;
        var i = 0;
        var len = this.hierarchy.length; // Checking if any of the transformation matrices in the hierarchy chain has changed.

        if (!this.finalTransform._matMdf) {
          while (i < len) {
            if (this.hierarchy[i].finalTransform.mProp._mdf) {
              this.finalTransform._matMdf = true;
              break;
            }

            i += 1;
          }
        }

        if (this.finalTransform._matMdf) {
          mat = this.finalTransform.mProp.v.props;
          finalMat.cloneFromProps(mat);

          for (i = 0; i < len; i += 1) {
            mat = this.hierarchy[i].finalTransform.mProp.v.props;
            finalMat.transform(mat[0], mat[1], mat[2], mat[3], mat[4], mat[5], mat[6], mat[7], mat[8], mat[9], mat[10], mat[11], mat[12], mat[13], mat[14], mat[15]);
          }
        }
      }
    },
    globalToLocal: function globalToLocal(pt) {
      var transforms = [];
      transforms.push(this.finalTransform);
      var flag = true;
      var comp = this.comp;

      while (flag) {
        if (comp.finalTransform) {
          if (comp.data.hasMask) {
            transforms.splice(0, 0, comp.finalTransform);
          }

          comp = comp.comp;
        } else {
          flag = false;
        }
      }

      var i;
      var len = transforms.length;
      var ptNew;

      for (i = 0; i < len; i += 1) {
        ptNew = transforms[i].mat.applyToPointArray(0, 0, 0); // ptNew = transforms[i].mat.applyToPointArray(pt[0],pt[1],pt[2]);

        pt = [pt[0] - ptNew[0], pt[1] - ptNew[1], 0];
      }

      return pt;
    },
    mHelper: new Matrix()
  };

  function MaskElement(data, element, globalData) {
    this.data = data;
    this.element = element;
    this.globalData = globalData;
    this.storedData = [];
    this.masksProperties = this.data.masksProperties || [];
    this.maskElement = null;
    var defs = this.globalData.defs;
    var i;
    var len = this.masksProperties ? this.masksProperties.length : 0;
    this.viewData = createSizedArray(len);
    this.solidPath = '';
    var path;
    var properties = this.masksProperties;
    var count = 0;
    var currentMasks = [];
    var j;
    var jLen;
    var layerId = createElementID();
    var rect;
    var expansor;
    var feMorph;
    var x;
    var maskType = 'clipPath';
    var maskRef = 'clip-path';

    for (i = 0; i < len; i += 1) {
      if (properties[i].mode !== 'a' && properties[i].mode !== 'n' || properties[i].inv || properties[i].o.k !== 100 || properties[i].o.x) {
        maskType = 'mask';
        maskRef = 'mask';
      }

      if ((properties[i].mode === 's' || properties[i].mode === 'i') && count === 0) {
        rect = createNS('rect');
        rect.setAttribute('fill', '#ffffff');
        rect.setAttribute('width', this.element.comp.data.w || 0);
        rect.setAttribute('height', this.element.comp.data.h || 0);
        currentMasks.push(rect);
      } else {
        rect = null;
      }

      path = createNS('path');

      if (properties[i].mode === 'n') {
        // TODO move this to a factory or to a constructor
        this.viewData[i] = {
          op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
          prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
          elem: path,
          lastPath: ''
        };
        defs.appendChild(path);
      } else {
        count += 1;
        path.setAttribute('fill', properties[i].mode === 's' ? '#000000' : '#ffffff');
        path.setAttribute('clip-rule', 'nonzero');
        var filterID;

        if (properties[i].x.k !== 0) {
          maskType = 'mask';
          maskRef = 'mask';
          x = PropertyFactory.getProp(this.element, properties[i].x, 0, null, this.element);
          filterID = createElementID();
          expansor = createNS('filter');
          expansor.setAttribute('id', filterID);
          feMorph = createNS('feMorphology');
          feMorph.setAttribute('operator', 'erode');
          feMorph.setAttribute('in', 'SourceGraphic');
          feMorph.setAttribute('radius', '0');
          expansor.appendChild(feMorph);
          defs.appendChild(expansor);
          path.setAttribute('stroke', properties[i].mode === 's' ? '#000000' : '#ffffff');
        } else {
          feMorph = null;
          x = null;
        } // TODO move this to a factory or to a constructor


        this.storedData[i] = {
          elem: path,
          x: x,
          expan: feMorph,
          lastPath: '',
          lastOperator: '',
          filterId: filterID,
          lastRadius: 0
        };

        if (properties[i].mode === 'i') {
          jLen = currentMasks.length;
          var g = createNS('g');

          for (j = 0; j < jLen; j += 1) {
            g.appendChild(currentMasks[j]);
          }

          var mask = createNS('mask');
          mask.setAttribute('mask-type', 'alpha');
          mask.setAttribute('id', layerId + '_' + count);
          mask.appendChild(path);
          defs.appendChild(mask);
          g.setAttribute('mask', 'url(' + getLocationHref() + '#' + layerId + '_' + count + ')');
          currentMasks.length = 0;
          currentMasks.push(g);
        } else {
          currentMasks.push(path);
        }

        if (properties[i].inv && !this.solidPath) {
          this.solidPath = this.createLayerSolidPath();
        } // TODO move this to a factory or to a constructor


        this.viewData[i] = {
          elem: path,
          lastPath: '',
          op: PropertyFactory.getProp(this.element, properties[i].o, 0, 0.01, this.element),
          prop: ShapePropertyFactory.getShapeProp(this.element, properties[i], 3),
          invRect: rect
        };

        if (!this.viewData[i].prop.k) {
          this.drawPath(properties[i], this.viewData[i].prop.v, this.viewData[i]);
        }
      }
    }

    this.maskElement = createNS(maskType);
    len = currentMasks.length;

    for (i = 0; i < len; i += 1) {
      this.maskElement.appendChild(currentMasks[i]);
    }

    if (count > 0) {
      this.maskElement.setAttribute('id', layerId);
      this.element.maskedElement.setAttribute(maskRef, 'url(' + getLocationHref() + '#' + layerId + ')');
      defs.appendChild(this.maskElement);
    }

    if (this.viewData.length) {
      this.element.addRenderableComponent(this);
    }
  }

  MaskElement.prototype.getMaskProperty = function (pos) {
    return this.viewData[pos].prop;
  };

  MaskElement.prototype.renderFrame = function (isFirstFrame) {
    var finalMat = this.element.finalTransform.mat;
    var i;
    var len = this.masksProperties.length;

    for (i = 0; i < len; i += 1) {
      if (this.viewData[i].prop._mdf || isFirstFrame) {
        this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]);
      }

      if (this.viewData[i].op._mdf || isFirstFrame) {
        this.viewData[i].elem.setAttribute('fill-opacity', this.viewData[i].op.v);
      }

      if (this.masksProperties[i].mode !== 'n') {
        if (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || isFirstFrame)) {
          this.viewData[i].invRect.setAttribute('transform', finalMat.getInverseMatrix().to2dCSS());
        }

        if (this.storedData[i].x && (this.storedData[i].x._mdf || isFirstFrame)) {
          var feMorph = this.storedData[i].expan;

          if (this.storedData[i].x.v < 0) {
            if (this.storedData[i].lastOperator !== 'erode') {
              this.storedData[i].lastOperator = 'erode';
              this.storedData[i].elem.setAttribute('filter', 'url(' + getLocationHref() + '#' + this.storedData[i].filterId + ')');
            }

            feMorph.setAttribute('radius', -this.storedData[i].x.v);
          } else {
            if (this.storedData[i].lastOperator !== 'dilate') {
              this.storedData[i].lastOperator = 'dilate';
              this.storedData[i].elem.setAttribute('filter', null);
            }

            this.storedData[i].elem.setAttribute('stroke-width', this.storedData[i].x.v * 2);
          }
        }
      }
    }
  };

  MaskElement.prototype.getMaskelement = function () {
    return this.maskElement;
  };

  MaskElement.prototype.createLayerSolidPath = function () {
    var path = 'M0,0 ';
    path += ' h' + this.globalData.compSize.w;
    path += ' v' + this.globalData.compSize.h;
    path += ' h-' + this.globalData.compSize.w;
    path += ' v-' + this.globalData.compSize.h + ' ';
    return path;
  };

  MaskElement.prototype.drawPath = function (pathData, pathNodes, viewData) {
    var pathString = ' M' + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
    var i;
    var len;
    len = pathNodes._length;

    for (i = 1; i < len; i += 1) {
      // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[i][0]+','+pathNodes.i[i][1] + " "+pathNodes.v[i][0]+','+pathNodes.v[i][1];
      pathString += ' C' + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + ' ' + pathNodes.i[i][0] + ',' + pathNodes.i[i][1] + ' ' + pathNodes.v[i][0] + ',' + pathNodes.v[i][1];
    } // pathString += " C"+pathNodes.o[i-1][0]+','+pathNodes.o[i-1][1] + " "+pathNodes.i[0][0]+','+pathNodes.i[0][1] + " "+pathNodes.v[0][0]+','+pathNodes.v[0][1];


    if (pathNodes.c && len > 1) {
      pathString += ' C' + pathNodes.o[i - 1][0] + ',' + pathNodes.o[i - 1][1] + ' ' + pathNodes.i[0][0] + ',' + pathNodes.i[0][1] + ' ' + pathNodes.v[0][0] + ',' + pathNodes.v[0][1];
    } // pathNodes.__renderedString = pathString;


    if (viewData.lastPath !== pathString) {
      var pathShapeValue = '';

      if (viewData.elem) {
        if (pathNodes.c) {
          pathShapeValue = pathData.inv ? this.solidPath + pathString : pathString;
        }

        viewData.elem.setAttribute('d', pathShapeValue);
      }

      viewData.lastPath = pathString;
    }
  };

  MaskElement.prototype.destroy = function () {
    this.element = null;
    this.globalData = null;
    this.maskElement = null;
    this.data = null;
    this.masksProperties = null;
  };

  var filtersFactory = function () {
    var ob = {};
    ob.createFilter = createFilter;
    ob.createAlphaToLuminanceFilter = createAlphaToLuminanceFilter;

    function createFilter(filId, skipCoordinates) {
      var fil = createNS('filter');
      fil.setAttribute('id', filId);

      if (skipCoordinates !== true) {
        fil.setAttribute('filterUnits', 'objectBoundingBox');
        fil.setAttribute('x', '0%');
        fil.setAttribute('y', '0%');
        fil.setAttribute('width', '100%');
        fil.setAttribute('height', '100%');
      }

      return fil;
    }

    function createAlphaToLuminanceFilter() {
      var feColorMatrix = createNS('feColorMatrix');
      feColorMatrix.setAttribute('type', 'matrix');
      feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
      feColorMatrix.setAttribute('values', '0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1');
      return feColorMatrix;
    }

    return ob;
  }();

  var featureSupport = function () {
    var ob = {
      maskType: true,
      svgLumaHidden: true,
      offscreenCanvas: typeof OffscreenCanvas !== 'undefined'
    };

    if (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
      ob.maskType = false;
    }

    if (/firefox/i.test(navigator.userAgent)) {
      ob.svgLumaHidden = false;
    }

    return ob;
  }();

  var registeredEffects = {};
  var idPrefix = 'filter_result_';

  function SVGEffects(elem) {
    var i;
    var source = 'SourceGraphic';
    var len = elem.data.ef ? elem.data.ef.length : 0;
    var filId = createElementID();
    var fil = filtersFactory.createFilter(filId, true);
    var count = 0;
    this.filters = [];
    var filterManager;

    for (i = 0; i < len; i += 1) {
      filterManager = null;
      var type = elem.data.ef[i].ty;

      if (registeredEffects[type]) {
        var Effect = registeredEffects[type].effect;
        filterManager = new Effect(fil, elem.effectsManager.effectElements[i], elem, idPrefix + count, source);
        source = idPrefix + count;

        if (registeredEffects[type].countsAsEffect) {
          count += 1;
        }
      }

      if (filterManager) {
        this.filters.push(filterManager);
      }
    }

    if (count) {
      elem.globalData.defs.appendChild(fil);
      elem.layerElement.setAttribute('filter', 'url(' + getLocationHref() + '#' + filId + ')');
    }

    if (this.filters.length) {
      elem.addRenderableComponent(this);
    }
  }

  SVGEffects.prototype.renderFrame = function (_isFirstFrame) {
    var i;
    var len = this.filters.length;

    for (i = 0; i < len; i += 1) {
      this.filters[i].renderFrame(_isFirstFrame);
    }
  };

  function registerEffect(id, effect, countsAsEffect) {
    registeredEffects[id] = {
      effect: effect,
      countsAsEffect: countsAsEffect
    };
  }

  function SVGBaseElement() {}

  SVGBaseElement.prototype = {
    initRendererElement: function initRendererElement() {
      this.layerElement = createNS('g');
    },
    createContainerElements: function createContainerElements() {
      this.matteElement = createNS('g');
      this.transformedElement = this.layerElement;
      this.maskedElement = this.layerElement;
      this._sizeChanged = false;
      var layerElementParent = null; // If this layer acts as a mask for the following layer

      if (this.data.td) {
        this.matteMasks = {};
        var gg = createNS('g');
        gg.setAttribute('id', this.layerId);
        gg.appendChild(this.layerElement);
        layerElementParent = gg;
        this.globalData.defs.appendChild(gg);
      } else if (this.data.tt) {
        this.matteElement.appendChild(this.layerElement);
        layerElementParent = this.matteElement;
        this.baseElement = this.matteElement;
      } else {
        this.baseElement = this.layerElement;
      }

      if (this.data.ln) {
        this.layerElement.setAttribute('id', this.data.ln);
      }

      if (this.data.cl) {
        this.layerElement.setAttribute('class', this.data.cl);
      } // Clipping compositions to hide content that exceeds boundaries. If collapsed transformations is on, component should not be clipped


      if (this.data.ty === 0 && !this.data.hd) {
        var cp = createNS('clipPath');
        var pt = createNS('path');
        pt.setAttribute('d', 'M0,0 L' + this.data.w + ',0 L' + this.data.w + ',' + this.data.h + ' L0,' + this.data.h + 'z');
        var clipId = createElementID();
        cp.setAttribute('id', clipId);
        cp.appendChild(pt);
        this.globalData.defs.appendChild(cp);

        if (this.checkMasks()) {
          var cpGroup = createNS('g');
          cpGroup.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + clipId + ')');
          cpGroup.appendChild(this.layerElement);
          this.transformedElement = cpGroup;

          if (layerElementParent) {
            layerElementParent.appendChild(this.transformedElement);
          } else {
            this.baseElement = this.transformedElement;
          }
        } else {
          this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + clipId + ')');
        }
      }

      if (this.data.bm !== 0) {
        this.setBlendMode();
      }
    },
    renderElement: function renderElement() {
      if (this.finalTransform._matMdf) {
        this.transformedElement.setAttribute('transform', this.finalTransform.mat.to2dCSS());
      }

      if (this.finalTransform._opMdf) {
        this.transformedElement.setAttribute('opacity', this.finalTransform.mProp.o.v);
      }
    },
    destroyBaseElement: function destroyBaseElement() {
      this.layerElement = null;
      this.matteElement = null;
      this.maskManager.destroy();
    },
    getBaseElement: function getBaseElement() {
      if (this.data.hd) {
        return null;
      }

      return this.baseElement;
    },
    createRenderableComponents: function createRenderableComponents() {
      this.maskManager = new MaskElement(this.data, this, this.globalData);
      this.renderableEffectsManager = new SVGEffects(this);
    },
    getMatte: function getMatte(matteType) {
      // This should not be a common case. But for backward compatibility, we'll create the matte object.
      // It solves animations that have two consecutive layers marked as matte masks.
      // Which is an undefined behavior in AE.
      if (!this.matteMasks) {
        this.matteMasks = {};
      }

      if (!this.matteMasks[matteType]) {
        var id = this.layerId + '_' + matteType;
        var filId;
        var fil;
        var useElement;
        var gg;

        if (matteType === 1 || matteType === 3) {
          var masker = createNS('mask');
          masker.setAttribute('id', id);
          masker.setAttribute('mask-type', matteType === 3 ? 'luminance' : 'alpha');
          useElement = createNS('use');
          useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId);
          masker.appendChild(useElement);
          this.globalData.defs.appendChild(masker);

          if (!featureSupport.maskType && matteType === 1) {
            masker.setAttribute('mask-type', 'luminance');
            filId = createElementID();
            fil = filtersFactory.createFilter(filId);
            this.globalData.defs.appendChild(fil);
            fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
            gg = createNS('g');
            gg.appendChild(useElement);
            masker.appendChild(gg);
            gg.setAttribute('filter', 'url(' + getLocationHref() + '#' + filId + ')');
          }
        } else if (matteType === 2) {
          var maskGroup = createNS('mask');
          maskGroup.setAttribute('id', id);
          maskGroup.setAttribute('mask-type', 'alpha');
          var maskGrouper = createNS('g');
          maskGroup.appendChild(maskGrouper);
          filId = createElementID();
          fil = filtersFactory.createFilter(filId); /// /

          var feCTr = createNS('feComponentTransfer');
          feCTr.setAttribute('in', 'SourceGraphic');
          fil.appendChild(feCTr);
          var feFunc = createNS('feFuncA');
          feFunc.setAttribute('type', 'table');
          feFunc.setAttribute('tableValues', '1.0 0.0');
          feCTr.appendChild(feFunc); /// /

          this.globalData.defs.appendChild(fil);
          var alphaRect = createNS('rect');
          alphaRect.setAttribute('width', this.comp.data.w);
          alphaRect.setAttribute('height', this.comp.data.h);
          alphaRect.setAttribute('x', '0');
          alphaRect.setAttribute('y', '0');
          alphaRect.setAttribute('fill', '#ffffff');
          alphaRect.setAttribute('opacity', '0');
          maskGrouper.setAttribute('filter', 'url(' + getLocationHref() + '#' + filId + ')');
          maskGrouper.appendChild(alphaRect);
          useElement = createNS('use');
          useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#' + this.layerId);
          maskGrouper.appendChild(useElement);

          if (!featureSupport.maskType) {
            maskGroup.setAttribute('mask-type', 'luminance');
            fil.appendChild(filtersFactory.createAlphaToLuminanceFilter());
            gg = createNS('g');
            maskGrouper.appendChild(alphaRect);
            gg.appendChild(this.layerElement);
            maskGrouper.appendChild(gg);
          }

          this.globalData.defs.appendChild(maskGroup);
        }

        this.matteMasks[matteType] = id;
      }

      return this.matteMasks[matteType];
    },
    setMatte: function setMatte(id) {
      if (!this.matteElement) {
        return;
      }

      this.matteElement.setAttribute('mask', 'url(' + getLocationHref() + '#' + id + ')');
    }
  };

  /**
   * @file
   * Handles AE's layer parenting property.
   *
   */
  function HierarchyElement() {}

  HierarchyElement.prototype = {
    /**
       * @function
       * Initializes hierarchy properties
       *
       */
    initHierarchy: function initHierarchy() {
      // element's parent list
      this.hierarchy = []; // if element is parent of another layer _isParent will be true

      this._isParent = false;
      this.checkParenting();
    },

    /**
       * @function
       * Sets layer's hierarchy.
       * @param {array} hierarch
       * layer's parent list
       *
       */
    setHierarchy: function setHierarchy(hierarchy) {
      this.hierarchy = hierarchy;
    },

    /**
       * @function
       * Sets layer as parent.
       *
       */
    setAsParent: function setAsParent() {
      this._isParent = true;
    },

    /**
       * @function
       * Searches layer's parenting chain
       *
       */
    checkParenting: function checkParenting() {
      if (this.data.parent !== undefined) {
        this.comp.buildElementParenting(this, this.data.parent, []);
      }
    }
  };

  function RenderableDOMElement() {}

  (function () {
    var _prototype = {
      initElement: function initElement(data, globalData, comp) {
        this.initFrame();
        this.initBaseData(data, globalData, comp);
        this.initTransform(data, globalData, comp);
        this.initHierarchy();
        this.initRenderable();
        this.initRendererElement();
        this.createContainerElements();
        this.createRenderableComponents();
        this.createContent();
        this.hide();
      },
      hide: function hide() {
        // console.log('HIDE', this);
        if (!this.hidden && (!this.isInRange || this.isTransparent)) {
          var elem = this.baseElement || this.layerElement;
          elem.style.display = 'none';
          this.hidden = true;
        }
      },
      show: function show() {
        // console.log('SHOW', this);
        if (this.isInRange && !this.isTransparent) {
          if (!this.data.hd) {
            var elem = this.baseElement || this.layerElement;
            elem.style.display = 'block';
          }

          this.hidden = false;
          this._isFirstFrame = true;
        }
      },
      renderFrame: function renderFrame() {
        // If it is exported as hidden (data.hd === true) no need to render
        // If it is not visible no need to render
        if (this.data.hd || this.hidden) {
          return;
        }

        this.renderTransform();
        this.renderRenderable();
        this.renderElement();
        this.renderInnerContent();

        if (this._isFirstFrame) {
          this._isFirstFrame = false;
        }
      },
      renderInnerContent: function renderInnerContent() {},
      prepareFrame: function prepareFrame(num) {
        this._mdf = false;
        this.prepareRenderableFrame(num);
        this.prepareProperties(num, this.isInRange);
        this.checkTransparency();
      },
      destroy: function destroy() {
        this.innerElem = null;
        this.destroyBaseElement();
      }
    };
    extendPrototype([RenderableElement, createProxyFunction(_prototype)], RenderableDOMElement);
  })();

  function IImageElement(data, globalData, comp) {
    this.assetData = globalData.getAssetData(data.refId);

    if (this.assetData && this.assetData.sid) {
      this.assetData = globalData.slotManager.getProp(this.assetData);
    }

    this.initElement(data, globalData, comp);
    this.sourceRect = {
      top: 0,
      left: 0,
      width: this.assetData.w,
      height: this.assetData.h
    };
  }

  extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement);

  IImageElement.prototype.createContent = function () {
    var assetPath = this.globalData.getAssetsPath(this.assetData);
    this.innerElem = createNS('image');
    this.innerElem.setAttribute('width', this.assetData.w + 'px');
    this.innerElem.setAttribute('height', this.assetData.h + 'px');
    this.innerElem.setAttribute('preserveAspectRatio', this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio);
    this.innerElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', assetPath);
    this.layerElement.appendChild(this.innerElem);
  };

  IImageElement.prototype.sourceRectAtTime = function () {
    return this.sourceRect;
  };

  function ProcessedElement(element, position) {
    this.elem = element;
    this.pos = position;
  }

  function IShapeElement() {}

  IShapeElement.prototype = {
    addShapeToModifiers: function addShapeToModifiers(data) {
      var i;
      var len = this.shapeModifiers.length;

      for (i = 0; i < len; i += 1) {
        this.shapeModifiers[i].addShape(data);
      }
    },
    isShapeInAnimatedModifiers: function isShapeInAnimatedModifiers(data) {
      var i = 0;
      var len = this.shapeModifiers.length;

      while (i < len) {
        if (this.shapeModifiers[i].isAnimatedWithShape(data)) {
          return true;
        }
      }

      return false;
    },
    renderModifiers: function renderModifiers() {
      if (!this.shapeModifiers.length) {
        return;
      }

      var i;
      var len = this.shapes.length;

      for (i = 0; i < len; i += 1) {
        this.shapes[i].sh.reset();
      }

      len = this.shapeModifiers.length;
      var shouldBreakProcess;

      for (i = len - 1; i >= 0; i -= 1) {
        shouldBreakProcess = this.shapeModifiers[i].processShapes(this._isFirstFrame); // workaround to fix cases where a repeater resets the shape so the following processes get called twice
        // TODO: find a better solution for this

        if (shouldBreakProcess) {
          break;
        }
      }
    },
    searchProcessedElement: function searchProcessedElement(elem) {
      var elements = this.processedElements;
      var i = 0;
      var len = elements.length;

      while (i < len) {
        if (elements[i].elem === elem) {
          return elements[i].pos;
        }

        i += 1;
      }

      return 0;
    },
    addProcessedElement: function addProcessedElement(elem, pos) {
      var elements = this.processedElements;
      var i = elements.length;

      while (i) {
        i -= 1;

        if (elements[i].elem === elem) {
          elements[i].pos = pos;
          return;
        }
      }

      elements.push(new ProcessedElement(elem, pos));
    },
    prepareFrame: function prepareFrame(num) {
      this.prepareRenderableFrame(num);
      this.prepareProperties(num, this.isInRange);
    }
  };

  var lineCapEnum = {
    1: 'butt',
    2: 'round',
    3: 'square'
  };
  var lineJoinEnum = {
    1: 'miter',
    2: 'round',
    3: 'bevel'
  };

  function SVGShapeData(transformers, level, shape) {
    this.caches = [];
    this.styles = [];
    this.transformers = transformers;
    this.lStr = '';
    this.sh = shape;
    this.lvl = level; // TODO find if there are some cases where _isAnimated can be false.
    // For now, since shapes add up with other shapes. They have to be calculated every time.
    // One way of finding out is checking if all styles associated to this shape depend only of this shape

    this._isAnimated = !!shape.k; // TODO: commenting this for now since all shapes are animated

    var i = 0;
    var len = transformers.length;

    while (i < len) {
      if (transformers[i].mProps.dynamicProperties.length) {
        this._isAnimated = true;
        break;
      }

      i += 1;
    }
  }

  SVGShapeData.prototype.setAsAnimated = function () {
    this._isAnimated = true;
  };

  function SVGStyleData(data, level) {
    this.data = data;
    this.type = data.ty;
    this.d = '';
    this.lvl = level;
    this._mdf = false;
    this.closed = data.hd === true;
    this.pElem = createNS('path');
    this.msElem = null;
  }

  SVGStyleData.prototype.reset = function () {
    this.d = '';
    this._mdf = false;
  };

  function DashProperty(elem, data, renderer, container) {
    this.elem = elem;
    this.frameId = -1;
    this.dataProps = createSizedArray(data.length);
    this.renderer = renderer;
    this.k = false;
    this.dashStr = '';
    this.dashArray = createTypedArray('float32', data.length ? data.length - 1 : 0);
    this.dashoffset = createTypedArray('float32', 1);
    this.initDynamicPropertyContainer(container);
    var i;
    var len = data.length || 0;
    var prop;

    for (i = 0; i < len; i += 1) {
      prop = PropertyFactory.getProp(elem, data[i].v, 0, 0, this);
      this.k = prop.k || this.k;
      this.dataProps[i] = {
        n: data[i].n,
        p: prop
      };
    }

    if (!this.k) {
      this.getValue(true);
    }

    this._isAnimated = this.k;
  }

  DashProperty.prototype.getValue = function (forceRender) {
    if (this.elem.globalData.frameId === this.frameId && !forceRender) {
      return;
    }

    this.frameId = this.elem.globalData.frameId;
    this.iterateDynamicProperties();
    this._mdf = this._mdf || forceRender;

    if (this._mdf) {
      var i = 0;
      var len = this.dataProps.length;

      if (this.renderer === 'svg') {
        this.dashStr = '';
      }

      for (i = 0; i < len; i += 1) {
        if (this.dataProps[i].n !== 'o') {
          if (this.renderer === 'svg') {
            this.dashStr += ' ' + this.dataProps[i].p.v;
          } else {
            this.dashArray[i] = this.dataProps[i].p.v;
          }
        } else {
          this.dashoffset[0] = this.dataProps[i].p.v;
        }
      }
    }
  };

  extendPrototype([DynamicPropertyContainer], DashProperty);

  function SVGStrokeStyleData(elem, data, styleOb) {
    this.initDynamicPropertyContainer(elem);
    this.getValue = this.iterateDynamicProperties;
    this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
    this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
    this.d = new DashProperty(elem, data.d || {}, 'svg', this);
    this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
    this.style = styleOb;
    this._isAnimated = !!this._isAnimated;
  }

  extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

  function SVGFillStyleData(elem, data, styleOb) {
    this.initDynamicPropertyContainer(elem);
    this.getValue = this.iterateDynamicProperties;
    this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
    this.c = PropertyFactory.getProp(elem, data.c, 1, 255, this);
    this.style = styleOb;
  }

  extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

  function SVGNoStyleData(elem, data, styleOb) {
    this.initDynamicPropertyContainer(elem);
    this.getValue = this.iterateDynamicProperties;
    this.style = styleOb;
  }

  extendPrototype([DynamicPropertyContainer], SVGNoStyleData);

  function GradientProperty(elem, data, container) {
    this.data = data;
    this.c = createTypedArray('uint8c', data.p * 4);
    var cLength = data.k.k[0].s ? data.k.k[0].s.length - data.p * 4 : data.k.k.length - data.p * 4;
    this.o = createTypedArray('float32', cLength);
    this._cmdf = false;
    this._omdf = false;
    this._collapsable = this.checkCollapsable();
    this._hasOpacity = cLength;
    this.initDynamicPropertyContainer(container);
    this.prop = PropertyFactory.getProp(elem, data.k, 1, null, this);
    this.k = this.prop.k;
    this.getValue(true);
  }

  GradientProperty.prototype.comparePoints = function (values, points) {
    var i = 0;
    var len = this.o.length / 2;
    var diff;

    while (i < len) {
      diff = Math.abs(values[i * 4] - values[points * 4 + i * 2]);

      if (diff > 0.01) {
        return false;
      }

      i += 1;
    }

    return true;
  };

  GradientProperty.prototype.checkCollapsable = function () {
    if (this.o.length / 2 !== this.c.length / 4) {
      return false;
    }

    if (this.data.k.k[0].s) {
      var i = 0;
      var len = this.data.k.k.length;

      while (i < len) {
        if (!this.comparePoints(this.data.k.k[i].s, this.data.p)) {
          return false;
        }

        i += 1;
      }
    } else if (!this.comparePoints(this.data.k.k, this.data.p)) {
      return false;
    }

    return true;
  };

  GradientProperty.prototype.getValue = function (forceRender) {
    this.prop.getValue();
    this._mdf = false;
    this._cmdf = false;
    this._omdf = false;

    if (this.prop._mdf || forceRender) {
      var i;
      var len = this.data.p * 4;
      var mult;
      var val;

      for (i = 0; i < len; i += 1) {
        mult = i % 4 === 0 ? 100 : 255;
        val = Math.round(this.prop.v[i] * mult);

        if (this.c[i] !== val) {
          this.c[i] = val;
          this._cmdf = !forceRender;
        }
      }

      if (this.o.length) {
        len = this.prop.v.length;

        for (i = this.data.p * 4; i < len; i += 1) {
          mult = i % 2 === 0 ? 100 : 1;
          val = i % 2 === 0 ? Math.round(this.prop.v[i] * 100) : this.prop.v[i];

          if (this.o[i - this.data.p * 4] !== val) {
            this.o[i - this.data.p * 4] = val;
            this._omdf = !forceRender;
          }
        }
      }

      this._mdf = !forceRender;
    }
  };

  extendPrototype([DynamicPropertyContainer], GradientProperty);

  function SVGGradientFillStyleData(elem, data, styleOb) {
    this.initDynamicPropertyContainer(elem);
    this.getValue = this.iterateDynamicProperties;
    this.initGradientData(elem, data, styleOb);
  }

  SVGGradientFillStyleData.prototype.initGradientData = function (elem, data, styleOb) {
    this.o = PropertyFactory.getProp(elem, data.o, 0, 0.01, this);
    this.s = PropertyFactory.getProp(elem, data.s, 1, null, this);
    this.e = PropertyFactory.getProp(elem, data.e, 1, null, this);
    this.h = PropertyFactory.getProp(elem, data.h || {
      k: 0
    }, 0, 0.01, this);
    this.a = PropertyFactory.getProp(elem, data.a || {
      k: 0
    }, 0, degToRads, this);
    this.g = new GradientProperty(elem, data.g, this);
    this.style = styleOb;
    this.stops = [];
    this.setGradientData(styleOb.pElem, data);
    this.setGradientOpacity(data, styleOb);
    this._isAnimated = !!this._isAnimated;
  };

  SVGGradientFillStyleData.prototype.setGradientData = function (pathElement, data) {
    var gradientId = createElementID();
    var gfill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
    gfill.setAttribute('id', gradientId);
    gfill.setAttribute('spreadMethod', 'pad');
    gfill.setAttribute('gradientUnits', 'userSpaceOnUse');
    var stops = [];
    var stop;
    var j;
    var jLen;
    jLen = data.g.p * 4;

    for (j = 0; j < jLen; j += 4) {
      stop = createNS('stop');
      gfill.appendChild(stop);
      stops.push(stop);
    }

    pathElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + gradientId + ')');
    this.gf = gfill;
    this.cst = stops;
  };

  SVGGradientFillStyleData.prototype.setGradientOpacity = function (data, styleOb) {
    if (this.g._hasOpacity && !this.g._collapsable) {
      var stop;
      var j;
      var jLen;
      var mask = createNS('mask');
      var maskElement = createNS('path');
      mask.appendChild(maskElement);
      var opacityId = createElementID();
      var maskId = createElementID();
      mask.setAttribute('id', maskId);
      var opFill = createNS(data.t === 1 ? 'linearGradient' : 'radialGradient');
      opFill.setAttribute('id', opacityId);
      opFill.setAttribute('spreadMethod', 'pad');
      opFill.setAttribute('gradientUnits', 'userSpaceOnUse');
      jLen = data.g.k.k[0].s ? data.g.k.k[0].s.length : data.g.k.k.length;
      var stops = this.stops;

      for (j = data.g.p * 4; j < jLen; j += 2) {
        stop = createNS('stop');
        stop.setAttribute('stop-color', 'rgb(255,255,255)');
        opFill.appendChild(stop);
        stops.push(stop);
      }

      maskElement.setAttribute(data.ty === 'gf' ? 'fill' : 'stroke', 'url(' + getLocationHref() + '#' + opacityId + ')');

      if (data.ty === 'gs') {
        maskElement.setAttribute('stroke-linecap', lineCapEnum[data.lc || 2]);
        maskElement.setAttribute('stroke-linejoin', lineJoinEnum[data.lj || 2]);

        if (data.lj === 1) {
          maskElement.setAttribute('stroke-miterlimit', data.ml);
        }
      }

      this.of = opFill;
      this.ms = mask;
      this.ost = stops;
      this.maskId = maskId;
      styleOb.msElem = maskElement;
    }
  };

  extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

  function SVGGradientStrokeStyleData(elem, data, styleOb) {
    this.initDynamicPropertyContainer(elem);
    this.getValue = this.iterateDynamicProperties;
    this.w = PropertyFactory.getProp(elem, data.w, 0, null, this);
    this.d = new DashProperty(elem, data.d || {}, 'svg', this);
    this.initGradientData(elem, data, styleOb);
    this._isAnimated = !!this._isAnimated;
  }

  extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

  function ShapeGroupData() {
    this.it = [];
    this.prevViewData = [];
    this.gr = createNS('g');
  }

  function SVGTransformData(mProps, op, container) {
    this.transform = {
      mProps: mProps,
      op: op,
      container: container
    };
    this.elements = [];
    this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
  }

  var buildShapeString = function buildShapeString(pathNodes, length, closed, mat) {
    if (length === 0) {
      return '';
    }

    var _o = pathNodes.o;
    var _i = pathNodes.i;
    var _v = pathNodes.v;
    var i;
    var shapeString = ' M' + mat.applyToPointStringified(_v[0][0], _v[0][1]);

    for (i = 1; i < length; i += 1) {
      shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[i][0], _i[i][1]) + ' ' + mat.applyToPointStringified(_v[i][0], _v[i][1]);
    }

    if (closed && length) {
      shapeString += ' C' + mat.applyToPointStringified(_o[i - 1][0], _o[i - 1][1]) + ' ' + mat.applyToPointStringified(_i[0][0], _i[0][1]) + ' ' + mat.applyToPointStringified(_v[0][0], _v[0][1]);
      shapeString += 'z';
    }

    return shapeString;
  };

  var SVGElementsRenderer = function () {
    var _identityMatrix = new Matrix();

    var _matrixHelper = new Matrix();

    var ob = {
      createRenderFunction: createRenderFunction
    };

    function createRenderFunction(data) {
      switch (data.ty) {
        case 'fl':
          return renderFill;

        case 'gf':
          return renderGradient;

        case 'gs':
          return renderGradientStroke;

        case 'st':
          return renderStroke;

        case 'sh':
        case 'el':
        case 'rc':
        case 'sr':
          return renderPath;

        case 'tr':
          return renderContentTransform;

        case 'no':
          return renderNoop;

        default:
          return null;
      }
    }

    function renderContentTransform(styleData, itemData, isFirstFrame) {
      if (isFirstFrame || itemData.transform.op._mdf) {
        itemData.transform.container.setAttribute('opacity', itemData.transform.op.v);
      }

      if (isFirstFrame || itemData.transform.mProps._mdf) {
        itemData.transform.container.setAttribute('transform', itemData.transform.mProps.v.to2dCSS());
      }
    }

    function renderNoop() {}

    function renderPath(styleData, itemData, isFirstFrame) {
      var j;
      var jLen;
      var pathStringTransformed;
      var redraw;
      var pathNodes;
      var l;
      var lLen = itemData.styles.length;
      var lvl = itemData.lvl;
      var paths;
      var mat;
      var props;
      var iterations;
      var k;

      for (l = 0; l < lLen; l += 1) {
        redraw = itemData.sh._mdf || isFirstFrame;

        if (itemData.styles[l].lvl < lvl) {
          mat = _matrixHelper.reset();
          iterations = lvl - itemData.styles[l].lvl;
          k = itemData.transformers.length - 1;

          while (!redraw && iterations > 0) {
            redraw = itemData.transformers[k].mProps._mdf || redraw;
            iterations -= 1;
            k -= 1;
          }

          if (redraw) {
            iterations = lvl - itemData.styles[l].lvl;
            k = itemData.transformers.length - 1;

            while (iterations > 0) {
              props = itemData.transformers[k].mProps.v.props;
              mat.transform(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8], props[9], props[10], props[11], props[12], props[13], props[14], props[15]);
              iterations -= 1;
              k -= 1;
            }
          }
        } else {
          mat = _identityMatrix;
        }

        paths = itemData.sh.paths;
        jLen = paths._length;

        if (redraw) {
          pathStringTransformed = '';

          for (j = 0; j < jLen; j += 1) {
            pathNodes = paths.shapes[j];

            if (pathNodes && pathNodes._length) {
              pathStringTransformed += buildShapeString(pathNodes, pathNodes._length, pathNodes.c, mat);
            }
          }

          itemData.caches[l] = pathStringTransformed;
        } else {
          pathStringTransformed = itemData.caches[l];
        }

        itemData.styles[l].d += styleData.hd === true ? '' : pathStringTransformed;
        itemData.styles[l]._mdf = redraw || itemData.styles[l]._mdf;
      }
    }

    function renderFill(styleData, itemData, isFirstFrame) {
      var styleElem = itemData.style;

      if (itemData.c._mdf || isFirstFrame) {
        styleElem.pElem.setAttribute('fill', 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')');
      }

      if (itemData.o._mdf || isFirstFrame) {
        styleElem.pElem.setAttribute('fill-opacity', itemData.o.v);
      }
    }

    function renderGradientStroke(styleData, itemData, isFirstFrame) {
      renderGradient(styleData, itemData, isFirstFrame);
      renderStroke(styleData, itemData, isFirstFrame);
    }

    function renderGradient(styleData, itemData, isFirstFrame) {
      var gfill = itemData.gf;
      var hasOpacity = itemData.g._hasOpacity;
      var pt1 = itemData.s.v;
      var pt2 = itemData.e.v;

      if (itemData.o._mdf || isFirstFrame) {
        var attr = styleData.ty === 'gf' ? 'fill-opacity' : 'stroke-opacity';
        itemData.style.pElem.setAttribute(attr, itemData.o.v);
      }

      if (itemData.s._mdf || isFirstFrame) {
        var attr1 = styleData.t === 1 ? 'x1' : 'cx';
        var attr2 = attr1 === 'x1' ? 'y1' : 'cy';
        gfill.setAttribute(attr1, pt1[0]);
        gfill.setAttribute(attr2, pt1[1]);

        if (hasOpacity && !itemData.g._collapsable) {
          itemData.of.setAttribute(attr1, pt1[0]);
          itemData.of.setAttribute(attr2, pt1[1]);
        }
      }

      var stops;
      var i;
      var len;
      var stop;

      if (itemData.g._cmdf || isFirstFrame) {
        stops = itemData.cst;
        var cValues = itemData.g.c;
        len = stops.length;

        for (i = 0; i < len; i += 1) {
          stop = stops[i];
          stop.setAttribute('offset', cValues[i * 4] + '%');
          stop.setAttribute('stop-color', 'rgb(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ')');
        }
      }

      if (hasOpacity && (itemData.g._omdf || isFirstFrame)) {
        var oValues = itemData.g.o;

        if (itemData.g._collapsable) {
          stops = itemData.cst;
        } else {
          stops = itemData.ost;
        }

        len = stops.length;

        for (i = 0; i < len; i += 1) {
          stop = stops[i];

          if (!itemData.g._collapsable) {
            stop.setAttribute('offset', oValues[i * 2] + '%');
          }

          stop.setAttribute('stop-opacity', oValues[i * 2 + 1]);
        }
      }

      if (styleData.t === 1) {
        if (itemData.e._mdf || isFirstFrame) {
          gfill.setAttribute('x2', pt2[0]);
          gfill.setAttribute('y2', pt2[1]);

          if (hasOpacity && !itemData.g._collapsable) {
            itemData.of.setAttribute('x2', pt2[0]);
            itemData.of.setAttribute('y2', pt2[1]);
          }
        }
      } else {
        var rad;

        if (itemData.s._mdf || itemData.e._mdf || isFirstFrame) {
          rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
          gfill.setAttribute('r', rad);

          if (hasOpacity && !itemData.g._collapsable) {
            itemData.of.setAttribute('r', rad);
          }
        }

        if (itemData.e._mdf || itemData.h._mdf || itemData.a._mdf || isFirstFrame) {
          if (!rad) {
            rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
          }

          var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);
          var percent = itemData.h.v;

          if (percent >= 1) {
            percent = 0.99;
          } else if (percent <= -1) {
            percent = -0.99;
          }

          var dist = rad * percent;
          var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
          var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
          gfill.setAttribute('fx', x);
          gfill.setAttribute('fy', y);

          if (hasOpacity && !itemData.g._collapsable) {
            itemData.of.setAttribute('fx', x);
            itemData.of.setAttribute('fy', y);
          }
        } // gfill.setAttribute('fy','200');

      }
    }

    function renderStroke(styleData, itemData, isFirstFrame) {
      var styleElem = itemData.style;
      var d = itemData.d;

      if (d && (d._mdf || isFirstFrame) && d.dashStr) {
        styleElem.pElem.setAttribute('stroke-dasharray', d.dashStr);
        styleElem.pElem.setAttribute('stroke-dashoffset', d.dashoffset[0]);
      }

      if (itemData.c && (itemData.c._mdf || isFirstFrame)) {
        styleElem.pElem.setAttribute('stroke', 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')');
      }

      if (itemData.o._mdf || isFirstFrame) {
        styleElem.pElem.setAttribute('stroke-opacity', itemData.o.v);
      }

      if (itemData.w._mdf || isFirstFrame) {
        styleElem.pElem.setAttribute('stroke-width', itemData.w.v);

        if (styleElem.msElem) {
          styleElem.msElem.setAttribute('stroke-width', itemData.w.v);
        }
      }
    }

    return ob;
  }();

  function SVGShapeElement(data, globalData, comp) {
    // List of drawable elements
    this.shapes = []; // Full shape data

    this.shapesData = data.shapes; // List of styles that will be applied to shapes

    this.stylesList = []; // List of modifiers that will be applied to shapes

    this.shapeModifiers = []; // List of items in shape tree

    this.itemsData = []; // List of items in previous shape tree

    this.processedElements = []; // List of animated components

    this.animatedContents = [];
    this.initElement(data, globalData, comp); // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
    // List of elements that have been created

    this.prevViewData = []; // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
  }

  extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement);

  SVGShapeElement.prototype.initSecondaryElement = function () {};

  SVGShapeElement.prototype.identityMatrix = new Matrix();

  SVGShapeElement.prototype.buildExpressionInterface = function () {};

  SVGShapeElement.prototype.createContent = function () {
    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
    this.filterUniqueShapes();
  };
  /*
  This method searches for multiple shapes that affect a single element and one of them is animated
  */


  SVGShapeElement.prototype.filterUniqueShapes = function () {
    var i;
    var len = this.shapes.length;
    var shape;
    var j;
    var jLen = this.stylesList.length;
    var style;
    var tempShapes = [];
    var areAnimated = false;

    for (j = 0; j < jLen; j += 1) {
      style = this.stylesList[j];
      areAnimated = false;
      tempShapes.length = 0;

      for (i = 0; i < len; i += 1) {
        shape = this.shapes[i];

        if (shape.styles.indexOf(style) !== -1) {
          tempShapes.push(shape);
          areAnimated = shape._isAnimated || areAnimated;
        }
      }

      if (tempShapes.length > 1 && areAnimated) {
        this.setShapesAsAnimated(tempShapes);
      }
    }
  };

  SVGShapeElement.prototype.setShapesAsAnimated = function (shapes) {
    var i;
    var len = shapes.length;

    for (i = 0; i < len; i += 1) {
      shapes[i].setAsAnimated();
    }
  };

  SVGShapeElement.prototype.createStyleElement = function (data, level) {
    // TODO: prevent drawing of hidden styles
    var elementData;
    var styleOb = new SVGStyleData(data, level);
    var pathElement = styleOb.pElem;

    if (data.ty === 'st') {
      elementData = new SVGStrokeStyleData(this, data, styleOb);
    } else if (data.ty === 'fl') {
      elementData = new SVGFillStyleData(this, data, styleOb);
    } else if (data.ty === 'gf' || data.ty === 'gs') {
      var GradientConstructor = data.ty === 'gf' ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
      elementData = new GradientConstructor(this, data, styleOb);
      this.globalData.defs.appendChild(elementData.gf);

      if (elementData.maskId) {
        this.globalData.defs.appendChild(elementData.ms);
        this.globalData.defs.appendChild(elementData.of);
        pathElement.setAttribute('mask', 'url(' + getLocationHref() + '#' + elementData.maskId + ')');
      }
    } else if (data.ty === 'no') {
      elementData = new SVGNoStyleData(this, data, styleOb);
    }

    if (data.ty === 'st' || data.ty === 'gs') {
      pathElement.setAttribute('stroke-linecap', lineCapEnum[data.lc || 2]);
      pathElement.setAttribute('stroke-linejoin', lineJoinEnum[data.lj || 2]);
      pathElement.setAttribute('fill-opacity', '0');

      if (data.lj === 1) {
        pathElement.setAttribute('stroke-miterlimit', data.ml);
      }
    }

    if (data.r === 2) {
      pathElement.setAttribute('fill-rule', 'evenodd');
    }

    if (data.ln) {
      pathElement.setAttribute('id', data.ln);
    }

    if (data.cl) {
      pathElement.setAttribute('class', data.cl);
    }

    if (data.bm) {
      pathElement.style['mix-blend-mode'] = getBlendMode(data.bm);
    }

    this.stylesList.push(styleOb);
    this.addToAnimatedContents(data, elementData);
    return elementData;
  };

  SVGShapeElement.prototype.createGroupElement = function (data) {
    var elementData = new ShapeGroupData();

    if (data.ln) {
      elementData.gr.setAttribute('id', data.ln);
    }

    if (data.cl) {
      elementData.gr.setAttribute('class', data.cl);
    }

    if (data.bm) {
      elementData.gr.style['mix-blend-mode'] = getBlendMode(data.bm);
    }

    return elementData;
  };

  SVGShapeElement.prototype.createTransformElement = function (data, container) {
    var transformProperty = TransformPropertyFactory.getTransformProperty(this, data, this);
    var elementData = new SVGTransformData(transformProperty, transformProperty.o, container);
    this.addToAnimatedContents(data, elementData);
    return elementData;
  };

  SVGShapeElement.prototype.createShapeElement = function (data, ownTransformers, level) {
    var ty = 4;

    if (data.ty === 'rc') {
      ty = 5;
    } else if (data.ty === 'el') {
      ty = 6;
    } else if (data.ty === 'sr') {
      ty = 7;
    }

    var shapeProperty = ShapePropertyFactory.getShapeProp(this, data, ty, this);
    var elementData = new SVGShapeData(ownTransformers, level, shapeProperty);
    this.shapes.push(elementData);
    this.addShapeToModifiers(elementData);
    this.addToAnimatedContents(data, elementData);
    return elementData;
  };

  SVGShapeElement.prototype.addToAnimatedContents = function (data, element) {
    var i = 0;
    var len = this.animatedContents.length;

    while (i < len) {
      if (this.animatedContents[i].element === element) {
        return;
      }

      i += 1;
    }

    this.animatedContents.push({
      fn: SVGElementsRenderer.createRenderFunction(data),
      element: element,
      data: data
    });
  };

  SVGShapeElement.prototype.setElementStyles = function (elementData) {
    var arr = elementData.styles;
    var j;
    var jLen = this.stylesList.length;

    for (j = 0; j < jLen; j += 1) {
      if (!this.stylesList[j].closed) {
        arr.push(this.stylesList[j]);
      }
    }
  };

  SVGShapeElement.prototype.reloadShapes = function () {
    this._isFirstFrame = true;
    var i;
    var len = this.itemsData.length;

    for (i = 0; i < len; i += 1) {
      this.prevViewData[i] = this.itemsData[i];
    }

    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true);
    this.filterUniqueShapes();
    len = this.dynamicProperties.length;

    for (i = 0; i < len; i += 1) {
      this.dynamicProperties[i].getValue();
    }

    this.renderModifiers();
  };

  SVGShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, container, level, transformers, render) {
    var ownTransformers = [].concat(transformers);
    var i;
    var len = arr.length - 1;
    var j;
    var jLen;
    var ownStyles = [];
    var ownModifiers = [];
    var currentTransform;
    var modifier;
    var processedPos;

    for (i = len; i >= 0; i -= 1) {
      processedPos = this.searchProcessedElement(arr[i]);

      if (!processedPos) {
        arr[i]._render = render;
      } else {
        itemsData[i] = prevViewData[processedPos - 1];
      }

      if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs' || arr[i].ty === 'no') {
        if (!processedPos) {
          itemsData[i] = this.createStyleElement(arr[i], level);
        } else {
          itemsData[i].style.closed = false;
        }

        if (arr[i]._render) {
          if (itemsData[i].style.pElem.parentNode !== container) {
            container.appendChild(itemsData[i].style.pElem);
          }
        }

        ownStyles.push(itemsData[i].style);
      } else if (arr[i].ty === 'gr') {
        if (!processedPos) {
          itemsData[i] = this.createGroupElement(arr[i]);
        } else {
          jLen = itemsData[i].it.length;

          for (j = 0; j < jLen; j += 1) {
            itemsData[i].prevViewData[j] = itemsData[i].it[j];
          }
        }

        this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, itemsData[i].gr, level + 1, ownTransformers, render);

        if (arr[i]._render) {
          if (itemsData[i].gr.parentNode !== container) {
            container.appendChild(itemsData[i].gr);
          }
        }
      } else if (arr[i].ty === 'tr') {
        if (!processedPos) {
          itemsData[i] = this.createTransformElement(arr[i], container);
        }

        currentTransform = itemsData[i].transform;
        ownTransformers.push(currentTransform);
      } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
        if (!processedPos) {
          itemsData[i] = this.createShapeElement(arr[i], ownTransformers, level);
        }

        this.setElementStyles(itemsData[i]);
      } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'ms' || arr[i].ty === 'pb' || arr[i].ty === 'zz' || arr[i].ty === 'op') {
        if (!processedPos) {
          modifier = ShapeModifiers.getModifier(arr[i].ty);
          modifier.init(this, arr[i]);
          itemsData[i] = modifier;
          this.shapeModifiers.push(modifier);
        } else {
          modifier = itemsData[i];
          modifier.closed = false;
        }

        ownModifiers.push(modifier);
      } else if (arr[i].ty === 'rp') {
        if (!processedPos) {
          modifier = ShapeModifiers.getModifier(arr[i].ty);
          itemsData[i] = modifier;
          modifier.init(this, arr, i, itemsData);
          this.shapeModifiers.push(modifier);
          render = false;
        } else {
          modifier = itemsData[i];
          modifier.closed = true;
        }

        ownModifiers.push(modifier);
      }

      this.addProcessedElement(arr[i], i + 1);
    }

    len = ownStyles.length;

    for (i = 0; i < len; i += 1) {
      ownStyles[i].closed = true;
    }

    len = ownModifiers.length;

    for (i = 0; i < len; i += 1) {
      ownModifiers[i].closed = true;
    }
  };

  SVGShapeElement.prototype.renderInnerContent = function () {
    this.renderModifiers();
    var i;
    var len = this.stylesList.length;

    for (i = 0; i < len; i += 1) {
      this.stylesList[i].reset();
    }

    this.renderShape();

    for (i = 0; i < len; i += 1) {
      if (this.stylesList[i]._mdf || this._isFirstFrame) {
        if (this.stylesList[i].msElem) {
          this.stylesList[i].msElem.setAttribute('d', this.stylesList[i].d); // Adding M0 0 fixes same mask bug on all browsers

          this.stylesList[i].d = 'M0 0' + this.stylesList[i].d;
        }

        this.stylesList[i].pElem.setAttribute('d', this.stylesList[i].d || 'M0 0');
      }
    }
  };

  SVGShapeElement.prototype.renderShape = function () {
    var i;
    var len = this.animatedContents.length;
    var animatedContent;

    for (i = 0; i < len; i += 1) {
      animatedContent = this.animatedContents[i];

      if ((this._isFirstFrame || animatedContent.element._isAnimated) && animatedContent.data !== true) {
        animatedContent.fn(animatedContent.data, animatedContent.element, this._isFirstFrame);
      }
    }
  };

  SVGShapeElement.prototype.destroy = function () {
    this.destroyBaseElement();
    this.shapesData = null;
    this.itemsData = null;
  };

  function LetterProps(o, sw, sc, fc, m, p) {
    this.o = o;
    this.sw = sw;
    this.sc = sc;
    this.fc = fc;
    this.m = m;
    this.p = p;
    this._mdf = {
      o: true,
      sw: !!sw,
      sc: !!sc,
      fc: !!fc,
      m: true,
      p: true
    };
  }

  LetterProps.prototype.update = function (o, sw, sc, fc, m, p) {
    this._mdf.o = false;
    this._mdf.sw = false;
    this._mdf.sc = false;
    this._mdf.fc = false;
    this._mdf.m = false;
    this._mdf.p = false;
    var updated = false;

    if (this.o !== o) {
      this.o = o;
      this._mdf.o = true;
      updated = true;
    }

    if (this.sw !== sw) {
      this.sw = sw;
      this._mdf.sw = true;
      updated = true;
    }

    if (this.sc !== sc) {
      this.sc = sc;
      this._mdf.sc = true;
      updated = true;
    }

    if (this.fc !== fc) {
      this.fc = fc;
      this._mdf.fc = true;
      updated = true;
    }

    if (this.m !== m) {
      this.m = m;
      this._mdf.m = true;
      updated = true;
    }

    if (p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13])) {
      this.p = p;
      this._mdf.p = true;
      updated = true;
    }

    return updated;
  };

  function TextProperty(elem, data) {
    this._frameId = initialDefaultFrame;
    this.pv = '';
    this.v = '';
    this.kf = false;
    this._isFirstFrame = true;
    this._mdf = false;

    if (data.d && data.d.sid) {
      data.d = elem.globalData.slotManager.getProp(data.d);
    }

    this.data = data;
    this.elem = elem;
    this.comp = this.elem.comp;
    this.keysIndex = 0;
    this.canResize = false;
    this.minimumFontSize = 1;
    this.effectsSequence = [];
    this.currentData = {
      ascent: 0,
      boxWidth: this.defaultBoxWidth,
      f: '',
      fStyle: '',
      fWeight: '',
      fc: '',
      j: '',
      justifyOffset: '',
      l: [],
      lh: 0,
      lineWidths: [],
      ls: '',
      of: '',
      s: '',
      sc: '',
      sw: 0,
      t: 0,
      tr: 0,
      sz: 0,
      ps: null,
      fillColorAnim: false,
      strokeColorAnim: false,
      strokeWidthAnim: false,
      yOffset: 0,
      finalSize: 0,
      finalText: [],
      finalLineHeight: 0,
      __complete: false
    };
    this.copyData(this.currentData, this.data.d.k[0].s);

    if (!this.searchProperty()) {
      this.completeTextData(this.currentData);
    }
  }

  TextProperty.prototype.defaultBoxWidth = [0, 0];

  TextProperty.prototype.copyData = function (obj, data) {
    for (var s in data) {
      if (Object.prototype.hasOwnProperty.call(data, s)) {
        obj[s] = data[s];
      }
    }

    return obj;
  };

  TextProperty.prototype.setCurrentData = function (data) {
    if (!data.__complete) {
      this.completeTextData(data);
    }

    this.currentData = data;
    this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth;
    this._mdf = true;
  };

  TextProperty.prototype.searchProperty = function () {
    return this.searchKeyframes();
  };

  TextProperty.prototype.searchKeyframes = function () {
    this.kf = this.data.d.k.length > 1;

    if (this.kf) {
      this.addEffect(this.getKeyframeValue.bind(this));
    }

    return this.kf;
  };

  TextProperty.prototype.addEffect = function (effectFunction) {
    this.effectsSequence.push(effectFunction);
    this.elem.addDynamicProperty(this);
  };

  TextProperty.prototype.getValue = function (_finalValue) {
    if ((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !_finalValue) {
      return;
    }

    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
    var currentValue = this.currentData;
    var currentIndex = this.keysIndex;

    if (this.lock) {
      this.setCurrentData(this.currentData);
      return;
    }

    this.lock = true;
    this._mdf = false;
    var i;
    var len = this.effectsSequence.length;
    var finalValue = _finalValue || this.data.d.k[this.keysIndex].s;

    for (i = 0; i < len; i += 1) {
      // Checking if index changed to prevent creating a new object every time the expression updates.
      if (currentIndex !== this.keysIndex) {
        finalValue = this.effectsSequence[i](finalValue, finalValue.t);
      } else {
        finalValue = this.effectsSequence[i](this.currentData, finalValue.t);
      }
    }

    if (currentValue !== finalValue) {
      this.setCurrentData(finalValue);
    }

    this.v = this.currentData;
    this.pv = this.v;
    this.lock = false;
    this.frameId = this.elem.globalData.frameId;
  };

  TextProperty.prototype.getKeyframeValue = function () {
    var textKeys = this.data.d.k;
    var frameNum = this.elem.comp.renderedFrame;
    var i = 0;
    var len = textKeys.length;

    while (i <= len - 1) {
      if (i === len - 1 || textKeys[i + 1].t > frameNum) {
        break;
      }

      i += 1;
    }

    if (this.keysIndex !== i) {
      this.keysIndex = i;
    }

    return this.data.d.k[this.keysIndex].s;
  };

  TextProperty.prototype.buildFinalText = function (text) {
    var charactersArray = [];
    var i = 0;
    var len = text.length;
    var charCode;
    var secondCharCode;
    var shouldCombine = false;

    while (i < len) {
      charCode = text.charCodeAt(i);

      if (FontManager.isCombinedCharacter(charCode)) {
        charactersArray[charactersArray.length - 1] += text.charAt(i);
      } else if (charCode >= 0xD800 && charCode <= 0xDBFF) {
        secondCharCode = text.charCodeAt(i + 1);

        if (secondCharCode >= 0xDC00 && secondCharCode <= 0xDFFF) {
          if (shouldCombine || FontManager.isModifier(charCode, secondCharCode)) {
            charactersArray[charactersArray.length - 1] += text.substr(i, 2);
            shouldCombine = false;
          } else {
            charactersArray.push(text.substr(i, 2));
          }

          i += 1;
        } else {
          charactersArray.push(text.charAt(i));
        }
      } else if (charCode > 0xDBFF) {
        secondCharCode = text.charCodeAt(i + 1);

        if (FontManager.isZeroWidthJoiner(charCode, secondCharCode)) {
          shouldCombine = true;
          charactersArray[charactersArray.length - 1] += text.substr(i, 2);
          i += 1;
        } else {
          charactersArray.push(text.charAt(i));
        }
      } else if (FontManager.isZeroWidthJoiner(charCode)) {
        charactersArray[charactersArray.length - 1] += text.charAt(i);
        shouldCombine = true;
      } else {
        charactersArray.push(text.charAt(i));
      }

      i += 1;
    }

    return charactersArray;
  };

  TextProperty.prototype.completeTextData = function (documentData) {
    documentData.__complete = true;
    var fontManager = this.elem.globalData.fontManager;
    var data = this.data;
    var letters = [];
    var i;
    var len;
    var newLineFlag;
    var index = 0;
    var val;
    var anchorGrouping = data.m.g;
    var currentSize = 0;
    var currentPos = 0;
    var currentLine = 0;
    var lineWidths = [];
    var lineWidth = 0;
    var maxLineWidth = 0;
    var j;
    var jLen;
    var fontData = fontManager.getFontByName(documentData.f);
    var charData;
    var cLength = 0;
    var fontProps = getFontProperties(fontData);
    documentData.fWeight = fontProps.weight;
    documentData.fStyle = fontProps.style;
    documentData.finalSize = documentData.s;
    documentData.finalText = this.buildFinalText(documentData.t);
    len = documentData.finalText.length;
    documentData.finalLineHeight = documentData.lh;
    var trackingOffset = documentData.tr / 1000 * documentData.finalSize;
    var charCode;

    if (documentData.sz) {
      var flag = true;
      var boxWidth = documentData.sz[0];
      var boxHeight = documentData.sz[1];
      var currentHeight;
      var finalText;

      while (flag) {
        finalText = this.buildFinalText(documentData.t);
        currentHeight = 0;
        lineWidth = 0;
        len = finalText.length;
        trackingOffset = documentData.tr / 1000 * documentData.finalSize;
        var lastSpaceIndex = -1;

        for (i = 0; i < len; i += 1) {
          charCode = finalText[i].charCodeAt(0);
          newLineFlag = false;

          if (finalText[i] === ' ') {
            lastSpaceIndex = i;
          } else if (charCode === 13 || charCode === 3) {
            lineWidth = 0;
            newLineFlag = true;
            currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
          }

          if (fontManager.chars) {
            charData = fontManager.getCharData(finalText[i], fontData.fStyle, fontData.fFamily);
            cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100;
          } else {
            // tCanvasHelper.font = documentData.s + 'px '+ fontData.fFamily;
            cLength = fontManager.measureText(finalText[i], documentData.f, documentData.finalSize);
          }

          if (lineWidth + cLength > boxWidth && finalText[i] !== ' ') {
            if (lastSpaceIndex === -1) {
              len += 1;
            } else {
              i = lastSpaceIndex;
            }

            currentHeight += documentData.finalLineHeight || documentData.finalSize * 1.2;
            finalText.splice(i, lastSpaceIndex === i ? 1 : 0, '\r'); // finalText = finalText.substr(0,i) + "\r" + finalText.substr(i === lastSpaceIndex ? i + 1 : i);

            lastSpaceIndex = -1;
            lineWidth = 0;
          } else {
            lineWidth += cLength;
            lineWidth += trackingOffset;
          }
        }

        currentHeight += fontData.ascent * documentData.finalSize / 100;

        if (this.canResize && documentData.finalSize > this.minimumFontSize && boxHeight < currentHeight) {
          documentData.finalSize -= 1;
          documentData.finalLineHeight = documentData.finalSize * documentData.lh / documentData.s;
        } else {
          documentData.finalText = finalText;
          len = documentData.finalText.length;
          flag = false;
        }
      }
    }

    lineWidth = -trackingOffset;
    cLength = 0;
    var uncollapsedSpaces = 0;
    var currentChar;

    for (i = 0; i < len; i += 1) {
      newLineFlag = false;
      currentChar = documentData.finalText[i];
      charCode = currentChar.charCodeAt(0);

      if (charCode === 13 || charCode === 3) {
        uncollapsedSpaces = 0;
        lineWidths.push(lineWidth);
        maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
        lineWidth = -2 * trackingOffset;
        val = '';
        newLineFlag = true;
        currentLine += 1;
      } else {
        val = currentChar;
      }

      if (fontManager.chars) {
        charData = fontManager.getCharData(currentChar, fontData.fStyle, fontManager.getFontByName(documentData.f).fFamily);
        cLength = newLineFlag ? 0 : charData.w * documentData.finalSize / 100;
      } else {
        // var charWidth = fontManager.measureText(val, documentData.f, documentData.finalSize);
        // tCanvasHelper.font = documentData.finalSize + 'px '+ fontManager.getFontByName(documentData.f).fFamily;
        cLength = fontManager.measureText(val, documentData.f, documentData.finalSize);
      } //


      if (currentChar === ' ') {
        uncollapsedSpaces += cLength + trackingOffset;
      } else {
        lineWidth += cLength + trackingOffset + uncollapsedSpaces;
        uncollapsedSpaces = 0;
      }

      letters.push({
        l: cLength,
        an: cLength,
        add: currentSize,
        n: newLineFlag,
        anIndexes: [],
        val: val,
        line: currentLine,
        animatorJustifyOffset: 0
      });

      if (anchorGrouping == 2) {
        // eslint-disable-line eqeqeq
        currentSize += cLength;

        if (val === '' || val === ' ' || i === len - 1) {
          if (val === '' || val === ' ') {
            currentSize -= cLength;
          }

          while (currentPos <= i) {
            letters[currentPos].an = currentSize;
            letters[currentPos].ind = index;
            letters[currentPos].extra = cLength;
            currentPos += 1;
          }

          index += 1;
          currentSize = 0;
        }
      } else if (anchorGrouping == 3) {
        // eslint-disable-line eqeqeq
        currentSize += cLength;

        if (val === '' || i === len - 1) {
          if (val === '') {
            currentSize -= cLength;
          }

          while (currentPos <= i) {
            letters[currentPos].an = currentSize;
            letters[currentPos].ind = index;
            letters[currentPos].extra = cLength;
            currentPos += 1;
          }

          currentSize = 0;
          index += 1;
        }
      } else {
        letters[index].ind = index;
        letters[index].extra = 0;
        index += 1;
      }
    }

    documentData.l = letters;
    maxLineWidth = lineWidth > maxLineWidth ? lineWidth : maxLineWidth;
    lineWidths.push(lineWidth);

    if (documentData.sz) {
      documentData.boxWidth = documentData.sz[0];
      documentData.justifyOffset = 0;
    } else {
      documentData.boxWidth = maxLineWidth;

      switch (documentData.j) {
        case 1:
          documentData.justifyOffset = -documentData.boxWidth;
          break;

        case 2:
          documentData.justifyOffset = -documentData.boxWidth / 2;
          break;

        default:
          documentData.justifyOffset = 0;
      }
    }

    documentData.lineWidths = lineWidths;
    var animators = data.a;
    var animatorData;
    var letterData;
    jLen = animators.length;
    var based;
    var ind;
    var indexes = [];

    for (j = 0; j < jLen; j += 1) {
      animatorData = animators[j];

      if (animatorData.a.sc) {
        documentData.strokeColorAnim = true;
      }

      if (animatorData.a.sw) {
        documentData.strokeWidthAnim = true;
      }

      if (animatorData.a.fc || animatorData.a.fh || animatorData.a.fs || animatorData.a.fb) {
        documentData.fillColorAnim = true;
      }

      ind = 0;
      based = animatorData.s.b;

      for (i = 0; i < len; i += 1) {
        letterData = letters[i];
        letterData.anIndexes[j] = ind;

        if (based == 1 && letterData.val !== '' || based == 2 && letterData.val !== '' && letterData.val !== ' ' || based == 3 && (letterData.n || letterData.val == ' ' || i == len - 1) || based == 4 && (letterData.n || i == len - 1)) {
          // eslint-disable-line eqeqeq
          if (animatorData.s.rn === 1) {
            indexes.push(ind);
          }

          ind += 1;
        }
      }

      data.a[j].s.totalChars = ind;
      var currentInd = -1;
      var newInd;

      if (animatorData.s.rn === 1) {
        for (i = 0; i < len; i += 1) {
          letterData = letters[i];

          if (currentInd != letterData.anIndexes[j]) {
            // eslint-disable-line eqeqeq
            currentInd = letterData.anIndexes[j];
            newInd = indexes.splice(Math.floor(Math.random() * indexes.length), 1)[0];
          }

          letterData.anIndexes[j] = newInd;
        }
      }
    }

    documentData.yOffset = documentData.finalLineHeight || documentData.finalSize * 1.2;
    documentData.ls = documentData.ls || 0;
    documentData.ascent = fontData.ascent * documentData.finalSize / 100;
  };

  TextProperty.prototype.updateDocumentData = function (newData, index) {
    index = index === undefined ? this.keysIndex : index;
    var dData = this.copyData({}, this.data.d.k[index].s);
    dData = this.copyData(dData, newData);
    this.data.d.k[index].s = dData;
    this.recalculate(index);
    this.setCurrentData(dData);
    this.elem.addDynamicProperty(this);
  };

  TextProperty.prototype.recalculate = function (index) {
    var dData = this.data.d.k[index].s;
    dData.__complete = false;
    this.keysIndex = 0;
    this._isFirstFrame = true;
    this.getValue(dData);
  };

  TextProperty.prototype.canResizeFont = function (_canResize) {
    this.canResize = _canResize;
    this.recalculate(this.keysIndex);
    this.elem.addDynamicProperty(this);
  };

  TextProperty.prototype.setMinimumFontSize = function (_fontValue) {
    this.minimumFontSize = Math.floor(_fontValue) || 1;
    this.recalculate(this.keysIndex);
    this.elem.addDynamicProperty(this);
  };

  var TextSelectorProp = function () {
    var max = Math.max;
    var min = Math.min;
    var floor = Math.floor;

    function TextSelectorPropFactory(elem, data) {
      this._currentTextLength = -1;
      this.k = false;
      this.data = data;
      this.elem = elem;
      this.comp = elem.comp;
      this.finalS = 0;
      this.finalE = 0;
      this.initDynamicPropertyContainer(elem);
      this.s = PropertyFactory.getProp(elem, data.s || {
        k: 0
      }, 0, 0, this);

      if ('e' in data) {
        this.e = PropertyFactory.getProp(elem, data.e, 0, 0, this);
      } else {
        this.e = {
          v: 100
        };
      }

      this.o = PropertyFactory.getProp(elem, data.o || {
        k: 0
      }, 0, 0, this);
      this.xe = PropertyFactory.getProp(elem, data.xe || {
        k: 0
      }, 0, 0, this);
      this.ne = PropertyFactory.getProp(elem, data.ne || {
        k: 0
      }, 0, 0, this);
      this.sm = PropertyFactory.getProp(elem, data.sm || {
        k: 100
      }, 0, 0, this);
      this.a = PropertyFactory.getProp(elem, data.a, 0, 0.01, this);

      if (!this.dynamicProperties.length) {
        this.getValue();
      }
    }

    TextSelectorPropFactory.prototype = {
      getMult: function getMult(ind) {
        if (this._currentTextLength !== this.elem.textProperty.currentData.l.length) {
          this.getValue();
        }

        var x1 = 0;
        var y1 = 0;
        var x2 = 1;
        var y2 = 1;

        if (this.ne.v > 0) {
          x1 = this.ne.v / 100.0;
        } else {
          y1 = -this.ne.v / 100.0;
        }

        if (this.xe.v > 0) {
          x2 = 1.0 - this.xe.v / 100.0;
        } else {
          y2 = 1.0 + this.xe.v / 100.0;
        }

        var easer = BezierFactory.getBezierEasing(x1, y1, x2, y2).get;
        var mult = 0;
        var s = this.finalS;
        var e = this.finalE;
        var type = this.data.sh;

        if (type === 2) {
          if (e === s) {
            mult = ind >= e ? 1 : 0;
          } else {
            mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
          }

          mult = easer(mult);
        } else if (type === 3) {
          if (e === s) {
            mult = ind >= e ? 0 : 1;
          } else {
            mult = 1 - max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));
          }

          mult = easer(mult);
        } else if (type === 4) {
          if (e === s) {
            mult = 0;
          } else {
            mult = max(0, min(0.5 / (e - s) + (ind - s) / (e - s), 1));

            if (mult < 0.5) {
              mult *= 2;
            } else {
              mult = 1 - 2 * (mult - 0.5);
            }
          }

          mult = easer(mult);
        } else if (type === 5) {
          if (e === s) {
            mult = 0;
          } else {
            var tot = e - s;
            /* ind += 0.5;
                      mult = -4/(tot*tot)*(ind*ind)+(4/tot)*ind; */

            ind = min(max(0, ind + 0.5 - s), e - s);
            var x = -tot / 2 + ind;
            var a = tot / 2;
            mult = Math.sqrt(1 - x * x / (a * a));
          }

          mult = easer(mult);
        } else if (type === 6) {
          if (e === s) {
            mult = 0;
          } else {
            ind = min(max(0, ind + 0.5 - s), e - s);
            mult = (1 + Math.cos(Math.PI + Math.PI * 2 * ind / (e - s))) / 2; // eslint-disable-line
          }

          mult = easer(mult);
        } else {
          if (ind >= floor(s)) {
            if (ind - s < 0) {
              mult = max(0, min(min(e, 1) - (s - ind), 1));
            } else {
              mult = max(0, min(e - ind, 1));
            }
          }

          mult = easer(mult);
        } // Smoothness implementation.
        // The smoothness represents a reduced range of the original [0; 1] range.
        // if smoothness is 25%, the new range will be [0.375; 0.625]
        // Steps are:
        // - find the lower value of the new range (threshold)
        // - if multiplier is smaller than that value, floor it to 0
        // - if it is larger,
        //     - subtract the threshold
        //     - divide it by the smoothness (this will return the range to [0; 1])
        // Note: If it doesn't work on some scenarios, consider applying it before the easer.


        if (this.sm.v !== 100) {
          var smoothness = this.sm.v * 0.01;

          if (smoothness === 0) {
            smoothness = 0.00000001;
          }

          var threshold = 0.5 - smoothness * 0.5;

          if (mult < threshold) {
            mult = 0;
          } else {
            mult = (mult - threshold) / smoothness;

            if (mult > 1) {
              mult = 1;
            }
          }
        }

        return mult * this.a.v;
      },
      getValue: function getValue(newCharsFlag) {
        this.iterateDynamicProperties();
        this._mdf = newCharsFlag || this._mdf;
        this._currentTextLength = this.elem.textProperty.currentData.l.length || 0;

        if (newCharsFlag && this.data.r === 2) {
          this.e.v = this._currentTextLength;
        }

        var divisor = this.data.r === 2 ? 1 : 100 / this.data.totalChars;
        var o = this.o.v / divisor;
        var s = this.s.v / divisor + o;
        var e = this.e.v / divisor + o;

        if (s > e) {
          var _s = s;
          s = e;
          e = _s;
        }

        this.finalS = s;
        this.finalE = e;
      }
    };
    extendPrototype([DynamicPropertyContainer], TextSelectorPropFactory);

    function getTextSelectorProp(elem, data, arr) {
      return new TextSelectorPropFactory(elem, data, arr);
    }

    return {
      getTextSelectorProp: getTextSelectorProp
    };
  }();

  function TextAnimatorDataProperty(elem, animatorProps, container) {
    var defaultData = {
      propType: false
    };
    var getProp = PropertyFactory.getProp;
    var textAnimatorAnimatables = animatorProps.a;
    this.a = {
      r: textAnimatorAnimatables.r ? getProp(elem, textAnimatorAnimatables.r, 0, degToRads, container) : defaultData,
      rx: textAnimatorAnimatables.rx ? getProp(elem, textAnimatorAnimatables.rx, 0, degToRads, container) : defaultData,
      ry: textAnimatorAnimatables.ry ? getProp(elem, textAnimatorAnimatables.ry, 0, degToRads, container) : defaultData,
      sk: textAnimatorAnimatables.sk ? getProp(elem, textAnimatorAnimatables.sk, 0, degToRads, container) : defaultData,
      sa: textAnimatorAnimatables.sa ? getProp(elem, textAnimatorAnimatables.sa, 0, degToRads, container) : defaultData,
      s: textAnimatorAnimatables.s ? getProp(elem, textAnimatorAnimatables.s, 1, 0.01, container) : defaultData,
      a: textAnimatorAnimatables.a ? getProp(elem, textAnimatorAnimatables.a, 1, 0, container) : defaultData,
      o: textAnimatorAnimatables.o ? getProp(elem, textAnimatorAnimatables.o, 0, 0.01, container) : defaultData,
      p: textAnimatorAnimatables.p ? getProp(elem, textAnimatorAnimatables.p, 1, 0, container) : defaultData,
      sw: textAnimatorAnimatables.sw ? getProp(elem, textAnimatorAnimatables.sw, 0, 0, container) : defaultData,
      sc: textAnimatorAnimatables.sc ? getProp(elem, textAnimatorAnimatables.sc, 1, 0, container) : defaultData,
      fc: textAnimatorAnimatables.fc ? getProp(elem, textAnimatorAnimatables.fc, 1, 0, container) : defaultData,
      fh: textAnimatorAnimatables.fh ? getProp(elem, textAnimatorAnimatables.fh, 0, 0, container) : defaultData,
      fs: textAnimatorAnimatables.fs ? getProp(elem, textAnimatorAnimatables.fs, 0, 0.01, container) : defaultData,
      fb: textAnimatorAnimatables.fb ? getProp(elem, textAnimatorAnimatables.fb, 0, 0.01, container) : defaultData,
      t: textAnimatorAnimatables.t ? getProp(elem, textAnimatorAnimatables.t, 0, 0, container) : defaultData
    };
    this.s = TextSelectorProp.getTextSelectorProp(elem, animatorProps.s, container);
    this.s.t = animatorProps.s.t;
  }

  function TextAnimatorProperty(textData, renderType, elem) {
    this._isFirstFrame = true;
    this._hasMaskedPath = false;
    this._frameId = -1;
    this._textData = textData;
    this._renderType = renderType;
    this._elem = elem;
    this._animatorsData = createSizedArray(this._textData.a.length);
    this._pathData = {};
    this._moreOptions = {
      alignment: {}
    };
    this.renderedLetters = [];
    this.lettersChangedFlag = false;
    this.initDynamicPropertyContainer(elem);
  }

  TextAnimatorProperty.prototype.searchProperties = function () {
    var i;
    var len = this._textData.a.length;
    var animatorProps;
    var getProp = PropertyFactory.getProp;

    for (i = 0; i < len; i += 1) {
      animatorProps = this._textData.a[i];
      this._animatorsData[i] = new TextAnimatorDataProperty(this._elem, animatorProps, this);
    }

    if (this._textData.p && 'm' in this._textData.p) {
      this._pathData = {
        a: getProp(this._elem, this._textData.p.a, 0, 0, this),
        f: getProp(this._elem, this._textData.p.f, 0, 0, this),
        l: getProp(this._elem, this._textData.p.l, 0, 0, this),
        r: getProp(this._elem, this._textData.p.r, 0, 0, this),
        p: getProp(this._elem, this._textData.p.p, 0, 0, this),
        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
      };
      this._hasMaskedPath = true;
    } else {
      this._hasMaskedPath = false;
    }

    this._moreOptions.alignment = getProp(this._elem, this._textData.m.a, 1, 0, this);
  };

  TextAnimatorProperty.prototype.getMeasures = function (documentData, lettersChangedFlag) {
    this.lettersChangedFlag = lettersChangedFlag;

    if (!this._mdf && !this._isFirstFrame && !lettersChangedFlag && (!this._hasMaskedPath || !this._pathData.m._mdf)) {
      return;
    }

    this._isFirstFrame = false;
    var alignment = this._moreOptions.alignment.v;
    var animators = this._animatorsData;
    var textData = this._textData;
    var matrixHelper = this.mHelper;
    var renderType = this._renderType;
    var renderedLettersCount = this.renderedLetters.length;
    var xPos;
    var yPos;
    var i;
    var len;
    var letters = documentData.l;
    var pathInfo;
    var currentLength;
    var currentPoint;
    var segmentLength;
    var flag;
    var pointInd;
    var segmentInd;
    var prevPoint;
    var points;
    var segments;
    var partialLength;
    var totalLength;
    var perc;
    var tanAngle;
    var mask;

    if (this._hasMaskedPath) {
      mask = this._pathData.m;

      if (!this._pathData.n || this._pathData._mdf) {
        var paths = mask.v;

        if (this._pathData.r.v) {
          paths = paths.reverse();
        } // TODO: release bezier data cached from previous pathInfo: this._pathData.pi


        pathInfo = {
          tLength: 0,
          segments: []
        };
        len = paths._length - 1;
        var bezierData;
        totalLength = 0;

        for (i = 0; i < len; i += 1) {
          bezierData = bez.buildBezierData(paths.v[i], paths.v[i + 1], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[i + 1][0] - paths.v[i + 1][0], paths.i[i + 1][1] - paths.v[i + 1][1]]);
          pathInfo.tLength += bezierData.segmentLength;
          pathInfo.segments.push(bezierData);
          totalLength += bezierData.segmentLength;
        }

        i = len;

        if (mask.v.c) {
          bezierData = bez.buildBezierData(paths.v[i], paths.v[0], [paths.o[i][0] - paths.v[i][0], paths.o[i][1] - paths.v[i][1]], [paths.i[0][0] - paths.v[0][0], paths.i[0][1] - paths.v[0][1]]);
          pathInfo.tLength += bezierData.segmentLength;
          pathInfo.segments.push(bezierData);
          totalLength += bezierData.segmentLength;
        }

        this._pathData.pi = pathInfo;
      }

      pathInfo = this._pathData.pi;
      currentLength = this._pathData.f.v;
      segmentInd = 0;
      pointInd = 1;
      segmentLength = 0;
      flag = true;
      segments = pathInfo.segments;

      if (currentLength < 0 && mask.v.c) {
        if (pathInfo.tLength < Math.abs(currentLength)) {
          currentLength = -Math.abs(currentLength) % pathInfo.tLength;
        }

        segmentInd = segments.length - 1;
        points = segments[segmentInd].points;
        pointInd = points.length - 1;

        while (currentLength < 0) {
          currentLength += points[pointInd].partialLength;
          pointInd -= 1;

          if (pointInd < 0) {
            segmentInd -= 1;
            points = segments[segmentInd].points;
            pointInd = points.length - 1;
          }
        }
      }

      points = segments[segmentInd].points;
      prevPoint = points[pointInd - 1];
      currentPoint = points[pointInd];
      partialLength = currentPoint.partialLength;
    }

    len = letters.length;
    xPos = 0;
    yPos = 0;
    var yOff = documentData.finalSize * 1.2 * 0.714;
    var firstLine = true;
    var animatorProps;
    var animatorSelector;
    var j;
    var jLen;
    var letterValue;
    jLen = animators.length;
    var mult;
    var ind = -1;
    var offf;
    var xPathPos;
    var yPathPos;
    var initPathPos = currentLength;
    var initSegmentInd = segmentInd;
    var initPointInd = pointInd;
    var currentLine = -1;
    var elemOpacity;
    var sc;
    var sw;
    var fc;
    var k;
    var letterSw;
    var letterSc;
    var letterFc;
    var letterM = '';
    var letterP = this.defaultPropsArray;
    var letterO; //

    if (documentData.j === 2 || documentData.j === 1) {
      var animatorJustifyOffset = 0;
      var animatorFirstCharOffset = 0;
      var justifyOffsetMult = documentData.j === 2 ? -0.5 : -1;
      var lastIndex = 0;
      var isNewLine = true;

      for (i = 0; i < len; i += 1) {
        if (letters[i].n) {
          if (animatorJustifyOffset) {
            animatorJustifyOffset += animatorFirstCharOffset;
          }

          while (lastIndex < i) {
            letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
            lastIndex += 1;
          }

          animatorJustifyOffset = 0;
          isNewLine = true;
        } else {
          for (j = 0; j < jLen; j += 1) {
            animatorProps = animators[j].a;

            if (animatorProps.t.propType) {
              if (isNewLine && documentData.j === 2) {
                animatorFirstCharOffset += animatorProps.t.v * justifyOffsetMult;
              }

              animatorSelector = animators[j].s;
              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

              if (mult.length) {
                animatorJustifyOffset += animatorProps.t.v * mult[0] * justifyOffsetMult;
              } else {
                animatorJustifyOffset += animatorProps.t.v * mult * justifyOffsetMult;
              }
            }
          }

          isNewLine = false;
        }
      }

      if (animatorJustifyOffset) {
        animatorJustifyOffset += animatorFirstCharOffset;
      }

      while (lastIndex < i) {
        letters[lastIndex].animatorJustifyOffset = animatorJustifyOffset;
        lastIndex += 1;
      }
    } //


    for (i = 0; i < len; i += 1) {
      matrixHelper.reset();
      elemOpacity = 1;

      if (letters[i].n) {
        xPos = 0;
        yPos += documentData.yOffset;
        yPos += firstLine ? 1 : 0;
        currentLength = initPathPos;
        firstLine = false;

        if (this._hasMaskedPath) {
          segmentInd = initSegmentInd;
          pointInd = initPointInd;
          points = segments[segmentInd].points;
          prevPoint = points[pointInd - 1];
          currentPoint = points[pointInd];
          partialLength = currentPoint.partialLength;
          segmentLength = 0;
        }

        letterM = '';
        letterFc = '';
        letterSw = '';
        letterO = '';
        letterP = this.defaultPropsArray;
      } else {
        if (this._hasMaskedPath) {
          if (currentLine !== letters[i].line) {
            switch (documentData.j) {
              case 1:
                currentLength += totalLength - documentData.lineWidths[letters[i].line];
                break;

              case 2:
                currentLength += (totalLength - documentData.lineWidths[letters[i].line]) / 2;
                break;

              default:
                break;
            }

            currentLine = letters[i].line;
          }

          if (ind !== letters[i].ind) {
            if (letters[ind]) {
              currentLength += letters[ind].extra;
            }

            currentLength += letters[i].an / 2;
            ind = letters[i].ind;
          }

          currentLength += alignment[0] * letters[i].an * 0.005;
          var animatorOffset = 0;

          for (j = 0; j < jLen; j += 1) {
            animatorProps = animators[j].a;

            if (animatorProps.p.propType) {
              animatorSelector = animators[j].s;
              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

              if (mult.length) {
                animatorOffset += animatorProps.p.v[0] * mult[0];
              } else {
                animatorOffset += animatorProps.p.v[0] * mult;
              }
            }

            if (animatorProps.a.propType) {
              animatorSelector = animators[j].s;
              mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

              if (mult.length) {
                animatorOffset += animatorProps.a.v[0] * mult[0];
              } else {
                animatorOffset += animatorProps.a.v[0] * mult;
              }
            }
          }

          flag = true; // Force alignment only works with a single line for now

          if (this._pathData.a.v) {
            currentLength = letters[0].an * 0.5 + (totalLength - this._pathData.f.v - letters[0].an * 0.5 - letters[letters.length - 1].an * 0.5) * ind / (len - 1);
            currentLength += this._pathData.f.v;
          }

          while (flag) {
            if (segmentLength + partialLength >= currentLength + animatorOffset || !points) {
              perc = (currentLength + animatorOffset - segmentLength) / currentPoint.partialLength;
              xPathPos = prevPoint.point[0] + (currentPoint.point[0] - prevPoint.point[0]) * perc;
              yPathPos = prevPoint.point[1] + (currentPoint.point[1] - prevPoint.point[1]) * perc;
              matrixHelper.translate(-alignment[0] * letters[i].an * 0.005, -(alignment[1] * yOff) * 0.01);
              flag = false;
            } else if (points) {
              segmentLength += currentPoint.partialLength;
              pointInd += 1;

              if (pointInd >= points.length) {
                pointInd = 0;
                segmentInd += 1;

                if (!segments[segmentInd]) {
                  if (mask.v.c) {
                    pointInd = 0;
                    segmentInd = 0;
                    points = segments[segmentInd].points;
                  } else {
                    segmentLength -= currentPoint.partialLength;
                    points = null;
                  }
                } else {
                  points = segments[segmentInd].points;
                }
              }

              if (points) {
                prevPoint = currentPoint;
                currentPoint = points[pointInd];
                partialLength = currentPoint.partialLength;
              }
            }
          }

          offf = letters[i].an / 2 - letters[i].add;
          matrixHelper.translate(-offf, 0, 0);
        } else {
          offf = letters[i].an / 2 - letters[i].add;
          matrixHelper.translate(-offf, 0, 0); // Grouping alignment

          matrixHelper.translate(-alignment[0] * letters[i].an * 0.005, -alignment[1] * yOff * 0.01, 0);
        }

        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;

          if (animatorProps.t.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars); // This condition is to prevent applying tracking to first character in each line. Might be better to use a boolean "isNewLine"

            if (xPos !== 0 || documentData.j !== 0) {
              if (this._hasMaskedPath) {
                if (mult.length) {
                  currentLength += animatorProps.t.v * mult[0];
                } else {
                  currentLength += animatorProps.t.v * mult;
                }
              } else if (mult.length) {
                xPos += animatorProps.t.v * mult[0];
              } else {
                xPos += animatorProps.t.v * mult;
              }
            }
          }
        }

        if (documentData.strokeWidthAnim) {
          sw = documentData.sw || 0;
        }

        if (documentData.strokeColorAnim) {
          if (documentData.sc) {
            sc = [documentData.sc[0], documentData.sc[1], documentData.sc[2]];
          } else {
            sc = [0, 0, 0];
          }
        }

        if (documentData.fillColorAnim && documentData.fc) {
          fc = [documentData.fc[0], documentData.fc[1], documentData.fc[2]];
        }

        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;

          if (animatorProps.a.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

            if (mult.length) {
              matrixHelper.translate(-animatorProps.a.v[0] * mult[0], -animatorProps.a.v[1] * mult[1], animatorProps.a.v[2] * mult[2]);
            } else {
              matrixHelper.translate(-animatorProps.a.v[0] * mult, -animatorProps.a.v[1] * mult, animatorProps.a.v[2] * mult);
            }
          }
        }

        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;

          if (animatorProps.s.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

            if (mult.length) {
              matrixHelper.scale(1 + (animatorProps.s.v[0] - 1) * mult[0], 1 + (animatorProps.s.v[1] - 1) * mult[1], 1);
            } else {
              matrixHelper.scale(1 + (animatorProps.s.v[0] - 1) * mult, 1 + (animatorProps.s.v[1] - 1) * mult, 1);
            }
          }
        }

        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;
          animatorSelector = animators[j].s;
          mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

          if (animatorProps.sk.propType) {
            if (mult.length) {
              matrixHelper.skewFromAxis(-animatorProps.sk.v * mult[0], animatorProps.sa.v * mult[1]);
            } else {
              matrixHelper.skewFromAxis(-animatorProps.sk.v * mult, animatorProps.sa.v * mult);
            }
          }

          if (animatorProps.r.propType) {
            if (mult.length) {
              matrixHelper.rotateZ(-animatorProps.r.v * mult[2]);
            } else {
              matrixHelper.rotateZ(-animatorProps.r.v * mult);
            }
          }

          if (animatorProps.ry.propType) {
            if (mult.length) {
              matrixHelper.rotateY(animatorProps.ry.v * mult[1]);
            } else {
              matrixHelper.rotateY(animatorProps.ry.v * mult);
            }
          }

          if (animatorProps.rx.propType) {
            if (mult.length) {
              matrixHelper.rotateX(animatorProps.rx.v * mult[0]);
            } else {
              matrixHelper.rotateX(animatorProps.rx.v * mult);
            }
          }

          if (animatorProps.o.propType) {
            if (mult.length) {
              elemOpacity += (animatorProps.o.v * mult[0] - elemOpacity) * mult[0];
            } else {
              elemOpacity += (animatorProps.o.v * mult - elemOpacity) * mult;
            }
          }

          if (documentData.strokeWidthAnim && animatorProps.sw.propType) {
            if (mult.length) {
              sw += animatorProps.sw.v * mult[0];
            } else {
              sw += animatorProps.sw.v * mult;
            }
          }

          if (documentData.strokeColorAnim && animatorProps.sc.propType) {
            for (k = 0; k < 3; k += 1) {
              if (mult.length) {
                sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult[0];
              } else {
                sc[k] += (animatorProps.sc.v[k] - sc[k]) * mult;
              }
            }
          }

          if (documentData.fillColorAnim && documentData.fc) {
            if (animatorProps.fc.propType) {
              for (k = 0; k < 3; k += 1) {
                if (mult.length) {
                  fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult[0];
                } else {
                  fc[k] += (animatorProps.fc.v[k] - fc[k]) * mult;
                }
              }
            }

            if (animatorProps.fh.propType) {
              if (mult.length) {
                fc = addHueToRGB(fc, animatorProps.fh.v * mult[0]);
              } else {
                fc = addHueToRGB(fc, animatorProps.fh.v * mult);
              }
            }

            if (animatorProps.fs.propType) {
              if (mult.length) {
                fc = addSaturationToRGB(fc, animatorProps.fs.v * mult[0]);
              } else {
                fc = addSaturationToRGB(fc, animatorProps.fs.v * mult);
              }
            }

            if (animatorProps.fb.propType) {
              if (mult.length) {
                fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult[0]);
              } else {
                fc = addBrightnessToRGB(fc, animatorProps.fb.v * mult);
              }
            }
          }
        }

        for (j = 0; j < jLen; j += 1) {
          animatorProps = animators[j].a;

          if (animatorProps.p.propType) {
            animatorSelector = animators[j].s;
            mult = animatorSelector.getMult(letters[i].anIndexes[j], textData.a[j].s.totalChars);

            if (this._hasMaskedPath) {
              if (mult.length) {
                matrixHelper.translate(0, animatorProps.p.v[1] * mult[0], -animatorProps.p.v[2] * mult[1]);
              } else {
                matrixHelper.translate(0, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
              }
            } else if (mult.length) {
              matrixHelper.translate(animatorProps.p.v[0] * mult[0], animatorProps.p.v[1] * mult[1], -animatorProps.p.v[2] * mult[2]);
            } else {
              matrixHelper.translate(animatorProps.p.v[0] * mult, animatorProps.p.v[1] * mult, -animatorProps.p.v[2] * mult);
            }
          }
        }

        if (documentData.strokeWidthAnim) {
          letterSw = sw < 0 ? 0 : sw;
        }

        if (documentData.strokeColorAnim) {
          letterSc = 'rgb(' + Math.round(sc[0] * 255) + ',' + Math.round(sc[1] * 255) + ',' + Math.round(sc[2] * 255) + ')';
        }

        if (documentData.fillColorAnim && documentData.fc) {
          letterFc = 'rgb(' + Math.round(fc[0] * 255) + ',' + Math.round(fc[1] * 255) + ',' + Math.round(fc[2] * 255) + ')';
        }

        if (this._hasMaskedPath) {
          matrixHelper.translate(0, -documentData.ls);
          matrixHelper.translate(0, alignment[1] * yOff * 0.01 + yPos, 0);

          if (this._pathData.p.v) {
            tanAngle = (currentPoint.point[1] - prevPoint.point[1]) / (currentPoint.point[0] - prevPoint.point[0]);
            var rot = Math.atan(tanAngle) * 180 / Math.PI;

            if (currentPoint.point[0] < prevPoint.point[0]) {
              rot += 180;
            }

            matrixHelper.rotate(-rot * Math.PI / 180);
          }

          matrixHelper.translate(xPathPos, yPathPos, 0);
          currentLength -= alignment[0] * letters[i].an * 0.005;

          if (letters[i + 1] && ind !== letters[i + 1].ind) {
            currentLength += letters[i].an / 2;
            currentLength += documentData.tr * 0.001 * documentData.finalSize;
          }
        } else {
          matrixHelper.translate(xPos, yPos, 0);

          if (documentData.ps) {
            // matrixHelper.translate(documentData.ps[0],documentData.ps[1],0);
            matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
          }

          switch (documentData.j) {
            case 1:
              matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]), 0, 0);
              break;

            case 2:
              matrixHelper.translate(letters[i].animatorJustifyOffset + documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[letters[i].line]) / 2, 0, 0);
              break;

            default:
              break;
          }

          matrixHelper.translate(0, -documentData.ls);
          matrixHelper.translate(offf, 0, 0);
          matrixHelper.translate(alignment[0] * letters[i].an * 0.005, alignment[1] * yOff * 0.01, 0);
          xPos += letters[i].l + documentData.tr * 0.001 * documentData.finalSize;
        }

        if (renderType === 'html') {
          letterM = matrixHelper.toCSS();
        } else if (renderType === 'svg') {
          letterM = matrixHelper.to2dCSS();
        } else {
          letterP = [matrixHelper.props[0], matrixHelper.props[1], matrixHelper.props[2], matrixHelper.props[3], matrixHelper.props[4], matrixHelper.props[5], matrixHelper.props[6], matrixHelper.props[7], matrixHelper.props[8], matrixHelper.props[9], matrixHelper.props[10], matrixHelper.props[11], matrixHelper.props[12], matrixHelper.props[13], matrixHelper.props[14], matrixHelper.props[15]];
        }

        letterO = elemOpacity;
      }

      if (renderedLettersCount <= i) {
        letterValue = new LetterProps(letterO, letterSw, letterSc, letterFc, letterM, letterP);
        this.renderedLetters.push(letterValue);
        renderedLettersCount += 1;
        this.lettersChangedFlag = true;
      } else {
        letterValue = this.renderedLetters[i];
        this.lettersChangedFlag = letterValue.update(letterO, letterSw, letterSc, letterFc, letterM, letterP) || this.lettersChangedFlag;
      }
    }
  };

  TextAnimatorProperty.prototype.getValue = function () {
    if (this._elem.globalData.frameId === this._frameId) {
      return;
    }

    this._frameId = this._elem.globalData.frameId;
    this.iterateDynamicProperties();
  };

  TextAnimatorProperty.prototype.mHelper = new Matrix();
  TextAnimatorProperty.prototype.defaultPropsArray = [];
  extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

  function ITextElement() {}

  ITextElement.prototype.initElement = function (data, globalData, comp) {
    this.lettersChangedFlag = true;
    this.initFrame();
    this.initBaseData(data, globalData, comp);
    this.textProperty = new TextProperty(this, data.t, this.dynamicProperties);
    this.textAnimator = new TextAnimatorProperty(data.t, this.renderType, this);
    this.initTransform(data, globalData, comp);
    this.initHierarchy();
    this.initRenderable();
    this.initRendererElement();
    this.createContainerElements();
    this.createRenderableComponents();
    this.createContent();
    this.hide();
    this.textAnimator.searchProperties(this.dynamicProperties);
  };

  ITextElement.prototype.prepareFrame = function (num) {
    this._mdf = false;
    this.prepareRenderableFrame(num);
    this.prepareProperties(num, this.isInRange);

    if (this.textProperty._mdf || this.textProperty._isFirstFrame) {
      this.buildNewText();
      this.textProperty._isFirstFrame = false;
      this.textProperty._mdf = false;
    }
  };

  ITextElement.prototype.createPathShape = function (matrixHelper, shapes) {
    var j;
    var jLen = shapes.length;
    var pathNodes;
    var shapeStr = '';

    for (j = 0; j < jLen; j += 1) {
      if (shapes[j].ty === 'sh') {
        pathNodes = shapes[j].ks.k;
        shapeStr += buildShapeString(pathNodes, pathNodes.i.length, true, matrixHelper);
      }
    }

    return shapeStr;
  };

  ITextElement.prototype.updateDocumentData = function (newData, index) {
    this.textProperty.updateDocumentData(newData, index);
  };

  ITextElement.prototype.canResizeFont = function (_canResize) {
    this.textProperty.canResizeFont(_canResize);
  };

  ITextElement.prototype.setMinimumFontSize = function (_fontSize) {
    this.textProperty.setMinimumFontSize(_fontSize);
  };

  ITextElement.prototype.applyTextPropertiesToMatrix = function (documentData, matrixHelper, lineNumber, xPos, yPos) {
    if (documentData.ps) {
      matrixHelper.translate(documentData.ps[0], documentData.ps[1] + documentData.ascent, 0);
    }

    matrixHelper.translate(0, -documentData.ls, 0);

    switch (documentData.j) {
      case 1:
        matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]), 0, 0);
        break;

      case 2:
        matrixHelper.translate(documentData.justifyOffset + (documentData.boxWidth - documentData.lineWidths[lineNumber]) / 2, 0, 0);
        break;

      default:
        break;
    }

    matrixHelper.translate(xPos, yPos, 0);
  };

  ITextElement.prototype.buildColor = function (colorData) {
    return 'rgb(' + Math.round(colorData[0] * 255) + ',' + Math.round(colorData[1] * 255) + ',' + Math.round(colorData[2] * 255) + ')';
  };

  ITextElement.prototype.emptyProp = new LetterProps();

  ITextElement.prototype.destroy = function () {};

  var emptyShapeData = {
    shapes: []
  };

  function SVGTextLottieElement(data, globalData, comp) {
    this.textSpans = [];
    this.renderType = 'svg';
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement);

  SVGTextLottieElement.prototype.createContent = function () {
    if (this.data.singleShape && !this.globalData.fontManager.chars) {
      this.textContainer = createNS('text');
    }
  };

  SVGTextLottieElement.prototype.buildTextContents = function (textArray) {
    var i = 0;
    var len = textArray.length;
    var textContents = [];
    var currentTextContent = '';

    while (i < len) {
      if (textArray[i] === String.fromCharCode(13) || textArray[i] === String.fromCharCode(3)) {
        textContents.push(currentTextContent);
        currentTextContent = '';
      } else {
        currentTextContent += textArray[i];
      }

      i += 1;
    }

    textContents.push(currentTextContent);
    return textContents;
  };

  SVGTextLottieElement.prototype.buildShapeData = function (data, scale) {
    // data should probably be cloned to apply scale separately to each instance of a text on different layers
    // but since text internal content gets only rendered once and then it's never rerendered,
    // it's probably safe not to clone data and reuse always the same instance even if the object is mutated.
    // Avoiding cloning is preferred since cloning each character shape data is expensive
    if (data.shapes && data.shapes.length) {
      var shape = data.shapes[0];

      if (shape.it) {
        var shapeItem = shape.it[shape.it.length - 1];

        if (shapeItem.s) {
          shapeItem.s.k[0] = scale;
          shapeItem.s.k[1] = scale;
        }
      }
    }

    return data;
  };

  SVGTextLottieElement.prototype.buildNewText = function () {
    this.addDynamicProperty(this);
    var i;
    var len;
    var documentData = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(documentData ? documentData.l.length : 0);

    if (documentData.fc) {
      this.layerElement.setAttribute('fill', this.buildColor(documentData.fc));
    } else {
      this.layerElement.setAttribute('fill', 'rgba(0,0,0,0)');
    }

    if (documentData.sc) {
      this.layerElement.setAttribute('stroke', this.buildColor(documentData.sc));
      this.layerElement.setAttribute('stroke-width', documentData.sw);
    }

    this.layerElement.setAttribute('font-size', documentData.finalSize);
    var fontData = this.globalData.fontManager.getFontByName(documentData.f);

    if (fontData.fClass) {
      this.layerElement.setAttribute('class', fontData.fClass);
    } else {
      this.layerElement.setAttribute('font-family', fontData.fFamily);
      var fWeight = documentData.fWeight;
      var fStyle = documentData.fStyle;
      this.layerElement.setAttribute('font-style', fStyle);
      this.layerElement.setAttribute('font-weight', fWeight);
    }

    this.layerElement.setAttribute('aria-label', documentData.t);
    var letters = documentData.l || [];
    var usesGlyphs = !!this.globalData.fontManager.chars;
    len = letters.length;
    var tSpan;
    var matrixHelper = this.mHelper;
    var shapeStr = '';
    var singleShape = this.data.singleShape;
    var xPos = 0;
    var yPos = 0;
    var firstLine = true;
    var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;

    if (singleShape && !usesGlyphs && !documentData.sz) {
      var tElement = this.textContainer;
      var justify = 'start';

      switch (documentData.j) {
        case 1:
          justify = 'end';
          break;

        case 2:
          justify = 'middle';
          break;

        default:
          justify = 'start';
          break;
      }

      tElement.setAttribute('text-anchor', justify);
      tElement.setAttribute('letter-spacing', trackingOffset);
      var textContent = this.buildTextContents(documentData.finalText);
      len = textContent.length;
      yPos = documentData.ps ? documentData.ps[1] + documentData.ascent : 0;

      for (i = 0; i < len; i += 1) {
        tSpan = this.textSpans[i].span || createNS('tspan');
        tSpan.textContent = textContent[i];
        tSpan.setAttribute('x', 0);
        tSpan.setAttribute('y', yPos);
        tSpan.style.display = 'inherit';
        tElement.appendChild(tSpan);

        if (!this.textSpans[i]) {
          this.textSpans[i] = {
            span: null,
            glyph: null
          };
        }

        this.textSpans[i].span = tSpan;
        yPos += documentData.finalLineHeight;
      }

      this.layerElement.appendChild(tElement);
    } else {
      var cachedSpansLength = this.textSpans.length;
      var charData;

      for (i = 0; i < len; i += 1) {
        if (!this.textSpans[i]) {
          this.textSpans[i] = {
            span: null,
            childSpan: null,
            glyph: null
          };
        }

        if (!usesGlyphs || !singleShape || i === 0) {
          tSpan = cachedSpansLength > i ? this.textSpans[i].span : createNS(usesGlyphs ? 'g' : 'text');

          if (cachedSpansLength <= i) {
            tSpan.setAttribute('stroke-linecap', 'butt');
            tSpan.setAttribute('stroke-linejoin', 'round');
            tSpan.setAttribute('stroke-miterlimit', '4');
            this.textSpans[i].span = tSpan;

            if (usesGlyphs) {
              var childSpan = createNS('g');
              tSpan.appendChild(childSpan);
              this.textSpans[i].childSpan = childSpan;
            }

            this.textSpans[i].span = tSpan;
            this.layerElement.appendChild(tSpan);
          }

          tSpan.style.display = 'inherit';
        }

        matrixHelper.reset();

        if (singleShape) {
          if (letters[i].n) {
            xPos = -trackingOffset;
            yPos += documentData.yOffset;
            yPos += firstLine ? 1 : 0;
            firstLine = false;
          }

          this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
          xPos += letters[i].l || 0; // xPos += letters[i].val === ' ' ? 0 : trackingOffset;

          xPos += trackingOffset;
        }

        if (usesGlyphs) {
          charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
          var glyphElement; // t === 1 means the character has been replaced with an animated shaped

          if (charData.t === 1) {
            glyphElement = new SVGCompElement(charData.data, this.globalData, this);
          } else {
            var data = emptyShapeData;

            if (charData.data && charData.data.shapes) {
              data = this.buildShapeData(charData.data, documentData.finalSize);
            }

            glyphElement = new SVGShapeElement(data, this.globalData, this);
          }

          if (this.textSpans[i].glyph) {
            var glyph = this.textSpans[i].glyph;
            this.textSpans[i].childSpan.removeChild(glyph.layerElement);
            glyph.destroy();
          }

          this.textSpans[i].glyph = glyphElement;
          glyphElement._debug = true;
          glyphElement.prepareFrame(0);
          glyphElement.renderFrame();
          this.textSpans[i].childSpan.appendChild(glyphElement.layerElement); // when using animated shapes, the layer will be scaled instead of replacing the internal scale
          // this might have issues with strokes and might need a different solution

          if (charData.t === 1) {
            this.textSpans[i].childSpan.setAttribute('transform', 'scale(' + documentData.finalSize / 100 + ',' + documentData.finalSize / 100 + ')');
          }
        } else {
          if (singleShape) {
            tSpan.setAttribute('transform', 'translate(' + matrixHelper.props[12] + ',' + matrixHelper.props[13] + ')');
          }

          tSpan.textContent = letters[i].val;
          tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
        } //

      }

      if (singleShape && tSpan) {
        tSpan.setAttribute('d', shapeStr);
      }
    }

    while (i < this.textSpans.length) {
      this.textSpans[i].span.style.display = 'none';
      i += 1;
    }

    this._sizeChanged = true;
  };

  SVGTextLottieElement.prototype.sourceRectAtTime = function () {
    this.prepareFrame(this.comp.renderedFrame - this.data.st);
    this.renderInnerContent();

    if (this._sizeChanged) {
      this._sizeChanged = false;
      var textBox = this.layerElement.getBBox();
      this.bbox = {
        top: textBox.y,
        left: textBox.x,
        width: textBox.width,
        height: textBox.height
      };
    }

    return this.bbox;
  };

  SVGTextLottieElement.prototype.getValue = function () {
    var i;
    var len = this.textSpans.length;
    var glyphElement;
    this.renderedFrame = this.comp.renderedFrame;

    for (i = 0; i < len; i += 1) {
      glyphElement = this.textSpans[i].glyph;

      if (glyphElement) {
        glyphElement.prepareFrame(this.comp.renderedFrame - this.data.st);

        if (glyphElement._mdf) {
          this._mdf = true;
        }
      }
    }
  };

  SVGTextLottieElement.prototype.renderInnerContent = function () {
    if (!this.data.singleShape || this._mdf) {
      this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);

      if (this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
        this._sizeChanged = true;
        var i;
        var len;
        var renderedLetters = this.textAnimator.renderedLetters;
        var letters = this.textProperty.currentData.l;
        len = letters.length;
        var renderedLetter;
        var textSpan;
        var glyphElement;

        for (i = 0; i < len; i += 1) {
          if (!letters[i].n) {
            renderedLetter = renderedLetters[i];
            textSpan = this.textSpans[i].span;
            glyphElement = this.textSpans[i].glyph;

            if (glyphElement) {
              glyphElement.renderFrame();
            }

            if (renderedLetter._mdf.m) {
              textSpan.setAttribute('transform', renderedLetter.m);
            }

            if (renderedLetter._mdf.o) {
              textSpan.setAttribute('opacity', renderedLetter.o);
            }

            if (renderedLetter._mdf.sw) {
              textSpan.setAttribute('stroke-width', renderedLetter.sw);
            }

            if (renderedLetter._mdf.sc) {
              textSpan.setAttribute('stroke', renderedLetter.sc);
            }

            if (renderedLetter._mdf.fc) {
              textSpan.setAttribute('fill', renderedLetter.fc);
            }
          }
        }
      }
    }
  };

  function ISolidElement(data, globalData, comp) {
    this.initElement(data, globalData, comp);
  }

  extendPrototype([IImageElement], ISolidElement);

  ISolidElement.prototype.createContent = function () {
    var rect = createNS('rect'); /// /rect.style.width = this.data.sw;
    /// /rect.style.height = this.data.sh;
    /// /rect.style.fill = this.data.sc;

    rect.setAttribute('width', this.data.sw);
    rect.setAttribute('height', this.data.sh);
    rect.setAttribute('fill', this.data.sc);
    this.layerElement.appendChild(rect);
  };

  function NullElement(data, globalData, comp) {
    this.initFrame();
    this.initBaseData(data, globalData, comp);
    this.initFrame();
    this.initTransform(data, globalData, comp);
    this.initHierarchy();
  }

  NullElement.prototype.prepareFrame = function (num) {
    this.prepareProperties(num, true);
  };

  NullElement.prototype.renderFrame = function () {};

  NullElement.prototype.getBaseElement = function () {
    return null;
  };

  NullElement.prototype.destroy = function () {};

  NullElement.prototype.sourceRectAtTime = function () {};

  NullElement.prototype.hide = function () {};

  extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

  function SVGRendererBase() {}

  extendPrototype([BaseRenderer], SVGRendererBase);

  SVGRendererBase.prototype.createNull = function (data) {
    return new NullElement(data, this.globalData, this);
  };

  SVGRendererBase.prototype.createShape = function (data) {
    return new SVGShapeElement(data, this.globalData, this);
  };

  SVGRendererBase.prototype.createText = function (data) {
    return new SVGTextLottieElement(data, this.globalData, this);
  };

  SVGRendererBase.prototype.createImage = function (data) {
    return new IImageElement(data, this.globalData, this);
  };

  SVGRendererBase.prototype.createSolid = function (data) {
    return new ISolidElement(data, this.globalData, this);
  };

  SVGRendererBase.prototype.configAnimation = function (animData) {
    this.svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    this.svgElement.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');

    if (this.renderConfig.viewBoxSize) {
      this.svgElement.setAttribute('viewBox', this.renderConfig.viewBoxSize);
    } else {
      this.svgElement.setAttribute('viewBox', '0 0 ' + animData.w + ' ' + animData.h);
    }

    if (!this.renderConfig.viewBoxOnly) {
      this.svgElement.setAttribute('width', animData.w);
      this.svgElement.setAttribute('height', animData.h);
      this.svgElement.style.width = '100%';
      this.svgElement.style.height = '100%';
      this.svgElement.style.transform = 'translate3d(0,0,0)';
      this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility;
    }

    if (this.renderConfig.width) {
      this.svgElement.setAttribute('width', this.renderConfig.width);
    }

    if (this.renderConfig.height) {
      this.svgElement.setAttribute('height', this.renderConfig.height);
    }

    if (this.renderConfig.className) {
      this.svgElement.setAttribute('class', this.renderConfig.className);
    }

    if (this.renderConfig.id) {
      this.svgElement.setAttribute('id', this.renderConfig.id);
    }

    if (this.renderConfig.focusable !== undefined) {
      this.svgElement.setAttribute('focusable', this.renderConfig.focusable);
    }

    this.svgElement.setAttribute('preserveAspectRatio', this.renderConfig.preserveAspectRatio); // this.layerElement.style.transform = 'translate3d(0,0,0)';
    // this.layerElement.style.transformOrigin = this.layerElement.style.mozTransformOrigin = this.layerElement.style.webkitTransformOrigin = this.layerElement.style['-webkit-transform'] = "0px 0px 0px";

    this.animationItem.wrapper.appendChild(this.svgElement); // Mask animation

    var defs = this.globalData.defs;
    this.setupGlobalData(animData, defs);
    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
    this.data = animData;
    var maskElement = createNS('clipPath');
    var rect = createNS('rect');
    rect.setAttribute('width', animData.w);
    rect.setAttribute('height', animData.h);
    rect.setAttribute('x', 0);
    rect.setAttribute('y', 0);
    var maskId = createElementID();
    maskElement.setAttribute('id', maskId);
    maskElement.appendChild(rect);
    this.layerElement.setAttribute('clip-path', 'url(' + getLocationHref() + '#' + maskId + ')');
    defs.appendChild(maskElement);
    this.layers = animData.layers;
    this.elements = createSizedArray(animData.layers.length);
  };

  SVGRendererBase.prototype.destroy = function () {
    if (this.animationItem.wrapper) {
      this.animationItem.wrapper.innerText = '';
    }

    this.layerElement = null;
    this.globalData.defs = null;
    var i;
    var len = this.layers ? this.layers.length : 0;

    for (i = 0; i < len; i += 1) {
      if (this.elements[i] && this.elements[i].destroy) {
        this.elements[i].destroy();
      }
    }

    this.elements.length = 0;
    this.destroyed = true;
    this.animationItem = null;
  };

  SVGRendererBase.prototype.updateContainerSize = function () {};

  SVGRendererBase.prototype.findIndexByInd = function (ind) {
    var i = 0;
    var len = this.layers.length;

    for (i = 0; i < len; i += 1) {
      if (this.layers[i].ind === ind) {
        return i;
      }
    }

    return -1;
  };

  SVGRendererBase.prototype.buildItem = function (pos) {
    var elements = this.elements;

    if (elements[pos] || this.layers[pos].ty === 99) {
      return;
    }

    elements[pos] = true;
    var element = this.createItem(this.layers[pos]);
    elements[pos] = element;

    if (getExpressionsPlugin()) {
      if (this.layers[pos].ty === 0) {
        this.globalData.projectInterface.registerComposition(element);
      }

      element.initExpressions();
    }

    this.appendElementInPos(element, pos);

    if (this.layers[pos].tt) {
      var elementIndex = 'tp' in this.layers[pos] ? this.findIndexByInd(this.layers[pos].tp) : pos - 1;

      if (elementIndex === -1) {
        return;
      }

      if (!this.elements[elementIndex] || this.elements[elementIndex] === true) {
        this.buildItem(elementIndex);
        this.addPendingElement(element);
      } else {
        var matteElement = elements[elementIndex];
        var matteMask = matteElement.getMatte(this.layers[pos].tt);
        element.setMatte(matteMask);
      }
    }
  };

  SVGRendererBase.prototype.checkPendingElements = function () {
    while (this.pendingElements.length) {
      var element = this.pendingElements.pop();
      element.checkParenting();

      if (element.data.tt) {
        var i = 0;
        var len = this.elements.length;

        while (i < len) {
          if (this.elements[i] === element) {
            var elementIndex = 'tp' in element.data ? this.findIndexByInd(element.data.tp) : i - 1;
            var matteElement = this.elements[elementIndex];
            var matteMask = matteElement.getMatte(this.layers[i].tt);
            element.setMatte(matteMask);
            break;
          }

          i += 1;
        }
      }
    }
  };

  SVGRendererBase.prototype.renderFrame = function (num) {
    if (this.renderedFrame === num || this.destroyed) {
      return;
    }

    if (num === null) {
      num = this.renderedFrame;
    } else {
      this.renderedFrame = num;
    } // console.log('-------');
    // console.log('FRAME ',num);


    this.globalData.frameNum = num;
    this.globalData.frameId += 1;
    this.globalData.projectInterface.currentFrame = num;
    this.globalData._mdf = false;
    var i;
    var len = this.layers.length;

    if (!this.completeLayers) {
      this.checkLayers(num);
    }

    for (i = len - 1; i >= 0; i -= 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].prepareFrame(num - this.layers[i].st);
      }
    }

    if (this.globalData._mdf) {
      for (i = 0; i < len; i += 1) {
        if (this.completeLayers || this.elements[i]) {
          this.elements[i].renderFrame();
        }
      }
    }
  };

  SVGRendererBase.prototype.appendElementInPos = function (element, pos) {
    var newElement = element.getBaseElement();

    if (!newElement) {
      return;
    }

    var i = 0;
    var nextElement;

    while (i < pos) {
      if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement()) {
        nextElement = this.elements[i].getBaseElement();
      }

      i += 1;
    }

    if (nextElement) {
      this.layerElement.insertBefore(newElement, nextElement);
    } else {
      this.layerElement.appendChild(newElement);
    }
  };

  SVGRendererBase.prototype.hide = function () {
    this.layerElement.style.display = 'none';
  };

  SVGRendererBase.prototype.show = function () {
    this.layerElement.style.display = 'block';
  };

  function ICompElement() {}

  extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement);

  ICompElement.prototype.initElement = function (data, globalData, comp) {
    this.initFrame();
    this.initBaseData(data, globalData, comp);
    this.initTransform(data, globalData, comp);
    this.initRenderable();
    this.initHierarchy();
    this.initRendererElement();
    this.createContainerElements();
    this.createRenderableComponents();

    if (this.data.xt || !globalData.progressiveLoad) {
      this.buildAllItems();
    }

    this.hide();
  };
  /* ICompElement.prototype.hide = function(){
      if(!this.hidden){
          this.hideElement();
          var i,len = this.elements.length;
          for( i = 0; i < len; i+=1 ){
              if(this.elements[i]){
                  this.elements[i].hide();
              }
          }
      }
  }; */


  ICompElement.prototype.prepareFrame = function (num) {
    this._mdf = false;
    this.prepareRenderableFrame(num);
    this.prepareProperties(num, this.isInRange);

    if (!this.isInRange && !this.data.xt) {
      return;
    }

    if (!this.tm._placeholder) {
      var timeRemapped = this.tm.v;

      if (timeRemapped === this.data.op) {
        timeRemapped = this.data.op - 1;
      }

      this.renderedFrame = timeRemapped;
    } else {
      this.renderedFrame = num / this.data.sr;
    }

    var i;
    var len = this.elements.length;

    if (!this.completeLayers) {
      this.checkLayers(this.renderedFrame);
    } // This iteration needs to be backwards because of how expressions connect between each other


    for (i = len - 1; i >= 0; i -= 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st);

        if (this.elements[i]._mdf) {
          this._mdf = true;
        }
      }
    }
  };

  ICompElement.prototype.renderInnerContent = function () {
    var i;
    var len = this.layers.length;

    for (i = 0; i < len; i += 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].renderFrame();
      }
    }
  };

  ICompElement.prototype.setElements = function (elems) {
    this.elements = elems;
  };

  ICompElement.prototype.getElements = function () {
    return this.elements;
  };

  ICompElement.prototype.destroyElements = function () {
    var i;
    var len = this.layers.length;

    for (i = 0; i < len; i += 1) {
      if (this.elements[i]) {
        this.elements[i].destroy();
      }
    }
  };

  ICompElement.prototype.destroy = function () {
    this.destroyElements();
    this.destroyBaseElement();
  };

  function SVGCompElement(data, globalData, comp) {
    this.layers = data.layers;
    this.supports3d = true;
    this.completeLayers = false;
    this.pendingElements = [];
    this.elements = this.layers ? createSizedArray(this.layers.length) : [];
    this.initElement(data, globalData, comp);
    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
      _placeholder: true
    };
  }

  extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement);

  SVGCompElement.prototype.createComp = function (data) {
    return new SVGCompElement(data, this.globalData, this);
  };

  function SVGRenderer(animationItem, config) {
    this.animationItem = animationItem;
    this.layers = null;
    this.renderedFrame = -1;
    this.svgElement = createNS('svg');
    var ariaLabel = '';

    if (config && config.title) {
      var titleElement = createNS('title');
      var titleId = createElementID();
      titleElement.setAttribute('id', titleId);
      titleElement.textContent = config.title;
      this.svgElement.appendChild(titleElement);
      ariaLabel += titleId;
    }

    if (config && config.description) {
      var descElement = createNS('desc');
      var descId = createElementID();
      descElement.setAttribute('id', descId);
      descElement.textContent = config.description;
      this.svgElement.appendChild(descElement);
      ariaLabel += ' ' + descId;
    }

    if (ariaLabel) {
      this.svgElement.setAttribute('aria-labelledby', ariaLabel);
    }

    var defs = createNS('defs');
    this.svgElement.appendChild(defs);
    var maskElement = createNS('g');
    this.svgElement.appendChild(maskElement);
    this.layerElement = maskElement;
    this.renderConfig = {
      preserveAspectRatio: config && config.preserveAspectRatio || 'xMidYMid meet',
      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
      contentVisibility: config && config.contentVisibility || 'visible',
      progressiveLoad: config && config.progressiveLoad || false,
      hideOnTransparent: !(config && config.hideOnTransparent === false),
      viewBoxOnly: config && config.viewBoxOnly || false,
      viewBoxSize: config && config.viewBoxSize || false,
      className: config && config.className || '',
      id: config && config.id || '',
      focusable: config && config.focusable,
      filterSize: {
        width: config && config.filterSize && config.filterSize.width || '100%',
        height: config && config.filterSize && config.filterSize.height || '100%',
        x: config && config.filterSize && config.filterSize.x || '0%',
        y: config && config.filterSize && config.filterSize.y || '0%'
      },
      width: config && config.width,
      height: config && config.height,
      runExpressions: !config || config.runExpressions === undefined || config.runExpressions
    };
    this.globalData = {
      _mdf: false,
      frameNum: -1,
      defs: defs,
      renderConfig: this.renderConfig
    };
    this.elements = [];
    this.pendingElements = [];
    this.destroyed = false;
    this.rendererType = 'svg';
  }

  extendPrototype([SVGRendererBase], SVGRenderer);

  SVGRenderer.prototype.createComp = function (data) {
    return new SVGCompElement(data, this.globalData, this);
  };

  function CVContextData() {
    this.saved = [];
    this.cArrPos = 0;
    this.cTr = new Matrix();
    this.cO = 1;
    var i;
    var len = 15;
    this.savedOp = createTypedArray('float32', len);

    for (i = 0; i < len; i += 1) {
      this.saved[i] = createTypedArray('float32', 16);
    }

    this._length = len;
  }

  CVContextData.prototype.duplicate = function () {
    var newLength = this._length * 2;
    var currentSavedOp = this.savedOp;
    this.savedOp = createTypedArray('float32', newLength);
    this.savedOp.set(currentSavedOp);
    var i = 0;

    for (i = this._length; i < newLength; i += 1) {
      this.saved[i] = createTypedArray('float32', 16);
    }

    this._length = newLength;
  };

  CVContextData.prototype.reset = function () {
    this.cArrPos = 0;
    this.cTr.reset();
    this.cO = 1;
  };

  CVContextData.prototype.popTransform = function () {
    var popped = this.saved[this.cArrPos];
    var i;
    var arr = this.cTr.props;

    for (i = 0; i < 16; i += 1) {
      arr[i] = popped[i];
    }

    return popped;
  };

  CVContextData.prototype.popOpacity = function () {
    var popped = this.savedOp[this.cArrPos];
    this.cO = popped;
    return popped;
  };

  CVContextData.prototype.pop = function () {
    this.cArrPos -= 1;
    var transform = this.popTransform();
    var opacity = this.popOpacity();
    return {
      transform: transform,
      opacity: opacity
    };
  };

  CVContextData.prototype.push = function () {
    var props = this.cTr.props;

    if (this._length <= this.cArrPos) {
      this.duplicate();
    }

    var i;
    var arr = this.saved[this.cArrPos];

    for (i = 0; i < 16; i += 1) {
      arr[i] = props[i];
    }

    this.savedOp[this.cArrPos] = this.cO;
    this.cArrPos += 1;
  };

  CVContextData.prototype.getTransform = function () {
    return this.cTr;
  };

  CVContextData.prototype.getOpacity = function () {
    return this.cO;
  };

  CVContextData.prototype.setOpacity = function (value) {
    this.cO = value;
  };

  function ShapeTransformManager() {
    this.sequences = {};
    this.sequenceList = [];
    this.transform_key_count = 0;
  }

  ShapeTransformManager.prototype = {
    addTransformSequence: function addTransformSequence(transforms) {
      var i;
      var len = transforms.length;
      var key = '_';

      for (i = 0; i < len; i += 1) {
        key += transforms[i].transform.key + '_';
      }

      var sequence = this.sequences[key];

      if (!sequence) {
        sequence = {
          transforms: [].concat(transforms),
          finalTransform: new Matrix(),
          _mdf: false
        };
        this.sequences[key] = sequence;
        this.sequenceList.push(sequence);
      }

      return sequence;
    },
    processSequence: function processSequence(sequence, isFirstFrame) {
      var i = 0;
      var len = sequence.transforms.length;
      var _mdf = isFirstFrame;

      while (i < len && !isFirstFrame) {
        if (sequence.transforms[i].transform.mProps._mdf) {
          _mdf = true;
          break;
        }

        i += 1;
      }

      if (_mdf) {
        var props;
        sequence.finalTransform.reset();

        for (i = len - 1; i >= 0; i -= 1) {
          props = sequence.transforms[i].transform.mProps.v.props;
          sequence.finalTransform.transform(props[0], props[1], props[2], props[3], props[4], props[5], props[6], props[7], props[8], props[9], props[10], props[11], props[12], props[13], props[14], props[15]);
        }
      }

      sequence._mdf = _mdf;
    },
    processSequences: function processSequences(isFirstFrame) {
      var i;
      var len = this.sequenceList.length;

      for (i = 0; i < len; i += 1) {
        this.processSequence(this.sequenceList[i], isFirstFrame);
      }
    },
    getNewKey: function getNewKey() {
      this.transform_key_count += 1;
      return '_' + this.transform_key_count;
    }
  };

  var lumaLoader = function lumaLoader() {
    var id = '__lottie_element_luma_buffer';
    var lumaBuffer = null;
    var lumaBufferCtx = null;
    var svg = null; // This alternate solution has a slight delay before the filter is applied, resulting in a flicker on the first frame.
    // Keeping this here for reference, and in the future, if offscreen canvas supports url filters, this can be used.
    // For now, neither of them work for offscreen canvas, so canvas workers can't support the luma track matte mask.
    // Naming it solution 2 to mark the extra comment lines.

    /*
    var svgString = [
      '<svg xmlns="http://www.w3.org/2000/svg">',
      '<filter id="' + id + '">',
      '<feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="',
      '0.3, 0.3, 0.3, 0, 0, ',
      '0.3, 0.3, 0.3, 0, 0, ',
      '0.3, 0.3, 0.3, 0, 0, ',
      '0.3, 0.3, 0.3, 0, 0',
      '"/>',
      '</filter>',
      '</svg>',
    ].join('');
    var blob = new Blob([svgString], { type: 'image/svg+xml' });
    var url = URL.createObjectURL(blob);
    */

    function createLumaSvgFilter() {
      var _svg = createNS('svg');

      var fil = createNS('filter');
      var matrix = createNS('feColorMatrix');
      fil.setAttribute('id', id);
      matrix.setAttribute('type', 'matrix');
      matrix.setAttribute('color-interpolation-filters', 'sRGB');
      matrix.setAttribute('values', '0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0');
      fil.appendChild(matrix);

      _svg.appendChild(fil);

      _svg.setAttribute('id', id + '_svg');

      if (featureSupport.svgLumaHidden) {
        _svg.style.display = 'none';
      }

      return _svg;
    }

    function loadLuma() {
      if (!lumaBuffer) {
        svg = createLumaSvgFilter();
        document.body.appendChild(svg);
        lumaBuffer = createTag('canvas');
        lumaBufferCtx = lumaBuffer.getContext('2d'); // lumaBufferCtx.filter = `url('${url}#__lottie_element_luma_buffer')`; // part of solution 2

        lumaBufferCtx.filter = 'url(#' + id + ')';
        lumaBufferCtx.fillStyle = 'rgba(0,0,0,0)';
        lumaBufferCtx.fillRect(0, 0, 1, 1);
      }
    }

    function getLuma(canvas) {
      if (!lumaBuffer) {
        loadLuma();
      }

      lumaBuffer.width = canvas.width;
      lumaBuffer.height = canvas.height; // lumaBufferCtx.filter = `url('${url}#__lottie_element_luma_buffer')`; // part of solution 2

      lumaBufferCtx.filter = 'url(#' + id + ')';
      return lumaBuffer;
    }

    return {
      load: loadLuma,
      get: getLuma
    };
  };

  function createCanvas(width, height) {
    if (featureSupport.offscreenCanvas) {
      return new OffscreenCanvas(width, height);
    }

    var canvas = createTag('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  var assetLoader = function () {
    return {
      loadLumaCanvas: lumaLoader.load,
      getLumaCanvas: lumaLoader.get,
      createCanvas: createCanvas
    };
  }();

  function CVEffects() {}

  CVEffects.prototype.renderFrame = function () {};

  function CVMaskElement(data, element) {
    this.data = data;
    this.element = element;
    this.masksProperties = this.data.masksProperties || [];
    this.viewData = createSizedArray(this.masksProperties.length);
    var i;
    var len = this.masksProperties.length;
    var hasMasks = false;

    for (i = 0; i < len; i += 1) {
      if (this.masksProperties[i].mode !== 'n') {
        hasMasks = true;
      }

      this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
    }

    this.hasMasks = hasMasks;

    if (hasMasks) {
      this.element.addRenderableComponent(this);
    }
  }

  CVMaskElement.prototype.renderFrame = function () {
    if (!this.hasMasks) {
      return;
    }

    var transform = this.element.finalTransform.mat;
    var ctx = this.element.canvasContext;
    var i;
    var len = this.masksProperties.length;
    var pt;
    var pts;
    var data;
    ctx.beginPath();

    for (i = 0; i < len; i += 1) {
      if (this.masksProperties[i].mode !== 'n') {
        if (this.masksProperties[i].inv) {
          ctx.moveTo(0, 0);
          ctx.lineTo(this.element.globalData.compSize.w, 0);
          ctx.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h);
          ctx.lineTo(0, this.element.globalData.compSize.h);
          ctx.lineTo(0, 0);
        }

        data = this.viewData[i].v;
        pt = transform.applyToPointArray(data.v[0][0], data.v[0][1], 0);
        ctx.moveTo(pt[0], pt[1]);
        var j;
        var jLen = data._length;

        for (j = 1; j < jLen; j += 1) {
          pts = transform.applyToTriplePoints(data.o[j - 1], data.i[j], data.v[j]);
          ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
        }

        pts = transform.applyToTriplePoints(data.o[j - 1], data.i[0], data.v[0]);
        ctx.bezierCurveTo(pts[0], pts[1], pts[2], pts[3], pts[4], pts[5]);
      }
    }

    this.element.globalData.renderer.save(true);
    ctx.clip();
  };

  CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty;

  CVMaskElement.prototype.destroy = function () {
    this.element = null;
  };

  function CVBaseElement() {}

  var operationsMap = {
    1: 'source-in',
    2: 'source-out',
    3: 'source-in',
    4: 'source-out'
  };
  CVBaseElement.prototype = {
    createElements: function createElements() {},
    initRendererElement: function initRendererElement() {},
    createContainerElements: function createContainerElements() {
      // If the layer is masked we will use two buffers to store each different states of the drawing
      // This solution is not ideal for several reason. But unfortunately, because of the recursive
      // nature of the render tree, it's the only simple way to make sure one inner mask doesn't override an outer mask.
      // TODO: try to reduce the size of these buffers to the size of the composition contaning the layer
      // It might be challenging because the layer most likely is transformed in some way
      if (this.data.tt >= 1) {
        this.buffers = [];
        var canvasContext = this.globalData.canvasContext;
        var bufferCanvas = assetLoader.createCanvas(canvasContext.canvas.width, canvasContext.canvas.height);
        this.buffers.push(bufferCanvas);
        var bufferCanvas2 = assetLoader.createCanvas(canvasContext.canvas.width, canvasContext.canvas.height);
        this.buffers.push(bufferCanvas2);

        if (this.data.tt >= 3 && !document._isProxy) {
          assetLoader.loadLumaCanvas();
        }
      }

      this.canvasContext = this.globalData.canvasContext;
      this.transformCanvas = this.globalData.transformCanvas;
      this.renderableEffectsManager = new CVEffects(this);
    },
    createContent: function createContent() {},
    setBlendMode: function setBlendMode() {
      var globalData = this.globalData;

      if (globalData.blendMode !== this.data.bm) {
        globalData.blendMode = this.data.bm;
        var blendModeValue = getBlendMode(this.data.bm);
        globalData.canvasContext.globalCompositeOperation = blendModeValue;
      }
    },
    createRenderableComponents: function createRenderableComponents() {
      this.maskManager = new CVMaskElement(this.data, this);
    },
    hideElement: function hideElement() {
      if (!this.hidden && (!this.isInRange || this.isTransparent)) {
        this.hidden = true;
      }
    },
    showElement: function showElement() {
      if (this.isInRange && !this.isTransparent) {
        this.hidden = false;
        this._isFirstFrame = true;
        this.maskManager._isFirstFrame = true;
      }
    },
    clearCanvas: function clearCanvas(canvasContext) {
      canvasContext.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
    },
    prepareLayer: function prepareLayer() {
      if (this.data.tt >= 1) {
        var buffer = this.buffers[0];
        var bufferCtx = buffer.getContext('2d');
        this.clearCanvas(bufferCtx); // on the first buffer we store the current state of the global drawing

        bufferCtx.drawImage(this.canvasContext.canvas, 0, 0); // The next four lines are to clear the canvas
        // TODO: Check if there is a way to clear the canvas without resetting the transform

        this.currentTransform = this.canvasContext.getTransform();
        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
        this.clearCanvas(this.canvasContext);
        this.canvasContext.setTransform(this.currentTransform);
      }
    },
    exitLayer: function exitLayer() {
      if (this.data.tt >= 1) {
        var buffer = this.buffers[1]; // On the second buffer we store the current state of the global drawing
        // that only contains the content of this layer
        // (if it is a composition, it also includes the nested layers)

        var bufferCtx = buffer.getContext('2d');
        this.clearCanvas(bufferCtx);
        bufferCtx.drawImage(this.canvasContext.canvas, 0, 0); // We clear the canvas again

        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
        this.clearCanvas(this.canvasContext);
        this.canvasContext.setTransform(this.currentTransform); // We draw the mask

        var mask = this.comp.getElementById('tp' in this.data ? this.data.tp : this.data.ind - 1);
        mask.renderFrame(true); // We draw the second buffer (that contains the content of this layer)

        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0); // If the mask is a Luma matte, we need to do two extra painting operations
        // the _isProxy check is to avoid drawing a fake canvas in workers that will throw an error

        if (this.data.tt >= 3 && !document._isProxy) {
          // We copy the painted mask to a buffer that has a color matrix filter applied to it
          // that applies the rgb values to the alpha channel
          var lumaBuffer = assetLoader.getLumaCanvas(this.canvasContext.canvas);
          var lumaBufferCtx = lumaBuffer.getContext('2d');
          lumaBufferCtx.drawImage(this.canvasContext.canvas, 0, 0);
          this.clearCanvas(this.canvasContext); // we repaint the context with the mask applied to it

          this.canvasContext.drawImage(lumaBuffer, 0, 0);
        }

        this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt];
        this.canvasContext.drawImage(buffer, 0, 0); // We finally draw the first buffer (that contains the content of the global drawing)
        // We use destination-over to draw the global drawing below the current layer

        this.canvasContext.globalCompositeOperation = 'destination-over';
        this.canvasContext.drawImage(this.buffers[0], 0, 0);
        this.canvasContext.setTransform(this.currentTransform); // We reset the globalCompositeOperation to source-over, the standard type of operation

        this.canvasContext.globalCompositeOperation = 'source-over';
      }
    },
    renderFrame: function renderFrame(forceRender) {
      if (this.hidden || this.data.hd) {
        return;
      }

      if (this.data.td === 1 && !forceRender) {
        return;
      }

      this.renderTransform();
      this.renderRenderable();
      this.setBlendMode();
      var forceRealStack = this.data.ty === 0;
      this.prepareLayer();
      this.globalData.renderer.save(forceRealStack);
      this.globalData.renderer.ctxTransform(this.finalTransform.mat.props);
      this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v);
      this.renderInnerContent();
      this.globalData.renderer.restore(forceRealStack);
      this.exitLayer();

      if (this.maskManager.hasMasks) {
        this.globalData.renderer.restore(true);
      }

      if (this._isFirstFrame) {
        this._isFirstFrame = false;
      }
    },
    destroy: function destroy() {
      this.canvasContext = null;
      this.data = null;
      this.globalData = null;
      this.maskManager.destroy();
    },
    mHelper: new Matrix()
  };
  CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement;
  CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

  function CVShapeData(element, data, styles, transformsManager) {
    this.styledShapes = [];
    this.tr = [0, 0, 0, 0, 0, 0];
    var ty = 4;

    if (data.ty === 'rc') {
      ty = 5;
    } else if (data.ty === 'el') {
      ty = 6;
    } else if (data.ty === 'sr') {
      ty = 7;
    }

    this.sh = ShapePropertyFactory.getShapeProp(element, data, ty, element);
    var i;
    var len = styles.length;
    var styledShape;

    for (i = 0; i < len; i += 1) {
      if (!styles[i].closed) {
        styledShape = {
          transforms: transformsManager.addTransformSequence(styles[i].transforms),
          trNodes: []
        };
        this.styledShapes.push(styledShape);
        styles[i].elements.push(styledShape);
      }
    }
  }

  CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;

  function CVShapeElement(data, globalData, comp) {
    this.shapes = [];
    this.shapesData = data.shapes;
    this.stylesList = [];
    this.itemsData = [];
    this.prevViewData = [];
    this.shapeModifiers = [];
    this.processedElements = [];
    this.transformsManager = new ShapeTransformManager();
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement);
  CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement;
  CVShapeElement.prototype.transformHelper = {
    opacity: 1,
    _opMdf: false
  };
  CVShapeElement.prototype.dashResetter = [];

  CVShapeElement.prototype.createContent = function () {
    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
  };

  CVShapeElement.prototype.createStyleElement = function (data, transforms) {
    var styleElem = {
      data: data,
      type: data.ty,
      preTransforms: this.transformsManager.addTransformSequence(transforms),
      transforms: [],
      elements: [],
      closed: data.hd === true
    };
    var elementData = {};

    if (data.ty === 'fl' || data.ty === 'st') {
      elementData.c = PropertyFactory.getProp(this, data.c, 1, 255, this);

      if (!elementData.c.k) {
        styleElem.co = 'rgb(' + bmFloor(elementData.c.v[0]) + ',' + bmFloor(elementData.c.v[1]) + ',' + bmFloor(elementData.c.v[2]) + ')';
      }
    } else if (data.ty === 'gf' || data.ty === 'gs') {
      elementData.s = PropertyFactory.getProp(this, data.s, 1, null, this);
      elementData.e = PropertyFactory.getProp(this, data.e, 1, null, this);
      elementData.h = PropertyFactory.getProp(this, data.h || {
        k: 0
      }, 0, 0.01, this);
      elementData.a = PropertyFactory.getProp(this, data.a || {
        k: 0
      }, 0, degToRads, this);
      elementData.g = new GradientProperty(this, data.g, this);
    }

    elementData.o = PropertyFactory.getProp(this, data.o, 0, 0.01, this);

    if (data.ty === 'st' || data.ty === 'gs') {
      styleElem.lc = lineCapEnum[data.lc || 2];
      styleElem.lj = lineJoinEnum[data.lj || 2];

      if (data.lj == 1) {
        // eslint-disable-line eqeqeq
        styleElem.ml = data.ml;
      }

      elementData.w = PropertyFactory.getProp(this, data.w, 0, null, this);

      if (!elementData.w.k) {
        styleElem.wi = elementData.w.v;
      }

      if (data.d) {
        var d = new DashProperty(this, data.d, 'canvas', this);
        elementData.d = d;

        if (!elementData.d.k) {
          styleElem.da = elementData.d.dashArray;
          styleElem["do"] = elementData.d.dashoffset[0];
        }
      }
    } else {
      styleElem.r = data.r === 2 ? 'evenodd' : 'nonzero';
    }

    this.stylesList.push(styleElem);
    elementData.style = styleElem;
    return elementData;
  };

  CVShapeElement.prototype.createGroupElement = function () {
    var elementData = {
      it: [],
      prevViewData: []
    };
    return elementData;
  };

  CVShapeElement.prototype.createTransformElement = function (data) {
    var elementData = {
      transform: {
        opacity: 1,
        _opMdf: false,
        key: this.transformsManager.getNewKey(),
        op: PropertyFactory.getProp(this, data.o, 0, 0.01, this),
        mProps: TransformPropertyFactory.getTransformProperty(this, data, this)
      }
    };
    return elementData;
  };

  CVShapeElement.prototype.createShapeElement = function (data) {
    var elementData = new CVShapeData(this, data, this.stylesList, this.transformsManager);
    this.shapes.push(elementData);
    this.addShapeToModifiers(elementData);
    return elementData;
  };

  CVShapeElement.prototype.reloadShapes = function () {
    this._isFirstFrame = true;
    var i;
    var len = this.itemsData.length;

    for (i = 0; i < len; i += 1) {
      this.prevViewData[i] = this.itemsData[i];
    }

    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
    len = this.dynamicProperties.length;

    for (i = 0; i < len; i += 1) {
      this.dynamicProperties[i].getValue();
    }

    this.renderModifiers();
    this.transformsManager.processSequences(this._isFirstFrame);
  };

  CVShapeElement.prototype.addTransformToStyleList = function (transform) {
    var i;
    var len = this.stylesList.length;

    for (i = 0; i < len; i += 1) {
      if (!this.stylesList[i].closed) {
        this.stylesList[i].transforms.push(transform);
      }
    }
  };

  CVShapeElement.prototype.removeTransformFromStyleList = function () {
    var i;
    var len = this.stylesList.length;

    for (i = 0; i < len; i += 1) {
      if (!this.stylesList[i].closed) {
        this.stylesList[i].transforms.pop();
      }
    }
  };

  CVShapeElement.prototype.closeStyles = function (styles) {
    var i;
    var len = styles.length;

    for (i = 0; i < len; i += 1) {
      styles[i].closed = true;
    }
  };

  CVShapeElement.prototype.searchShapes = function (arr, itemsData, prevViewData, shouldRender, transforms) {
    var i;
    var len = arr.length - 1;
    var j;
    var jLen;
    var ownStyles = [];
    var ownModifiers = [];
    var processedPos;
    var modifier;
    var currentTransform;
    var ownTransforms = [].concat(transforms);

    for (i = len; i >= 0; i -= 1) {
      processedPos = this.searchProcessedElement(arr[i]);

      if (!processedPos) {
        arr[i]._shouldRender = shouldRender;
      } else {
        itemsData[i] = prevViewData[processedPos - 1];
      }

      if (arr[i].ty === 'fl' || arr[i].ty === 'st' || arr[i].ty === 'gf' || arr[i].ty === 'gs') {
        if (!processedPos) {
          itemsData[i] = this.createStyleElement(arr[i], ownTransforms);
        } else {
          itemsData[i].style.closed = false;
        }

        ownStyles.push(itemsData[i].style);
      } else if (arr[i].ty === 'gr') {
        if (!processedPos) {
          itemsData[i] = this.createGroupElement(arr[i]);
        } else {
          jLen = itemsData[i].it.length;

          for (j = 0; j < jLen; j += 1) {
            itemsData[i].prevViewData[j] = itemsData[i].it[j];
          }
        }

        this.searchShapes(arr[i].it, itemsData[i].it, itemsData[i].prevViewData, shouldRender, ownTransforms);
      } else if (arr[i].ty === 'tr') {
        if (!processedPos) {
          currentTransform = this.createTransformElement(arr[i]);
          itemsData[i] = currentTransform;
        }

        ownTransforms.push(itemsData[i]);
        this.addTransformToStyleList(itemsData[i]);
      } else if (arr[i].ty === 'sh' || arr[i].ty === 'rc' || arr[i].ty === 'el' || arr[i].ty === 'sr') {
        if (!processedPos) {
          itemsData[i] = this.createShapeElement(arr[i]);
        }
      } else if (arr[i].ty === 'tm' || arr[i].ty === 'rd' || arr[i].ty === 'pb' || arr[i].ty === 'zz' || arr[i].ty === 'op') {
        if (!processedPos) {
          modifier = ShapeModifiers.getModifier(arr[i].ty);
          modifier.init(this, arr[i]);
          itemsData[i] = modifier;
          this.shapeModifiers.push(modifier);
        } else {
          modifier = itemsData[i];
          modifier.closed = false;
        }

        ownModifiers.push(modifier);
      } else if (arr[i].ty === 'rp') {
        if (!processedPos) {
          modifier = ShapeModifiers.getModifier(arr[i].ty);
          itemsData[i] = modifier;
          modifier.init(this, arr, i, itemsData);
          this.shapeModifiers.push(modifier);
          shouldRender = false;
        } else {
          modifier = itemsData[i];
          modifier.closed = true;
        }

        ownModifiers.push(modifier);
      }

      this.addProcessedElement(arr[i], i + 1);
    }

    this.removeTransformFromStyleList();
    this.closeStyles(ownStyles);
    len = ownModifiers.length;

    for (i = 0; i < len; i += 1) {
      ownModifiers[i].closed = true;
    }
  };

  CVShapeElement.prototype.renderInnerContent = function () {
    this.transformHelper.opacity = 1;
    this.transformHelper._opMdf = false;
    this.renderModifiers();
    this.transformsManager.processSequences(this._isFirstFrame);
    this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
  };

  CVShapeElement.prototype.renderShapeTransform = function (parentTransform, groupTransform) {
    if (parentTransform._opMdf || groupTransform.op._mdf || this._isFirstFrame) {
      groupTransform.opacity = parentTransform.opacity;
      groupTransform.opacity *= groupTransform.op.v;
      groupTransform._opMdf = true;
    }
  };

  CVShapeElement.prototype.drawLayer = function () {
    var i;
    var len = this.stylesList.length;
    var j;
    var jLen;
    var k;
    var kLen;
    var elems;
    var nodes;
    var renderer = this.globalData.renderer;
    var ctx = this.globalData.canvasContext;
    var type;
    var currentStyle;

    for (i = 0; i < len; i += 1) {
      currentStyle = this.stylesList[i];
      type = currentStyle.type; // Skipping style when
      // Stroke width equals 0
      // style should not be rendered (extra unused repeaters)
      // current opacity equals 0
      // global opacity equals 0

      if (!((type === 'st' || type === 'gs') && currentStyle.wi === 0 || !currentStyle.data._shouldRender || currentStyle.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
        renderer.save();
        elems = currentStyle.elements;

        if (type === 'st' || type === 'gs') {
          ctx.strokeStyle = type === 'st' ? currentStyle.co : currentStyle.grd;
          ctx.lineWidth = currentStyle.wi;
          ctx.lineCap = currentStyle.lc;
          ctx.lineJoin = currentStyle.lj;
          ctx.miterLimit = currentStyle.ml || 0;
        } else {
          ctx.fillStyle = type === 'fl' ? currentStyle.co : currentStyle.grd;
        }

        renderer.ctxOpacity(currentStyle.coOp);

        if (type !== 'st' && type !== 'gs') {
          ctx.beginPath();
        }

        renderer.ctxTransform(currentStyle.preTransforms.finalTransform.props);
        jLen = elems.length;

        for (j = 0; j < jLen; j += 1) {
          if (type === 'st' || type === 'gs') {
            ctx.beginPath();

            if (currentStyle.da) {
              ctx.setLineDash(currentStyle.da);
              ctx.lineDashOffset = currentStyle["do"];
            }
          }

          nodes = elems[j].trNodes;
          kLen = nodes.length;

          for (k = 0; k < kLen; k += 1) {
            if (nodes[k].t === 'm') {
              ctx.moveTo(nodes[k].p[0], nodes[k].p[1]);
            } else if (nodes[k].t === 'c') {
              ctx.bezierCurveTo(nodes[k].pts[0], nodes[k].pts[1], nodes[k].pts[2], nodes[k].pts[3], nodes[k].pts[4], nodes[k].pts[5]);
            } else {
              ctx.closePath();
            }
          }

          if (type === 'st' || type === 'gs') {
            ctx.stroke();

            if (currentStyle.da) {
              ctx.setLineDash(this.dashResetter);
            }
          }
        }

        if (type !== 'st' && type !== 'gs') {
          ctx.fill(currentStyle.r);
        }

        renderer.restore();
      }
    }
  };

  CVShapeElement.prototype.renderShape = function (parentTransform, items, data, isMain) {
    var i;
    var len = items.length - 1;
    var groupTransform;
    groupTransform = parentTransform;

    for (i = len; i >= 0; i -= 1) {
      if (items[i].ty === 'tr') {
        groupTransform = data[i].transform;
        this.renderShapeTransform(parentTransform, groupTransform);
      } else if (items[i].ty === 'sh' || items[i].ty === 'el' || items[i].ty === 'rc' || items[i].ty === 'sr') {
        this.renderPath(items[i], data[i]);
      } else if (items[i].ty === 'fl') {
        this.renderFill(items[i], data[i], groupTransform);
      } else if (items[i].ty === 'st') {
        this.renderStroke(items[i], data[i], groupTransform);
      } else if (items[i].ty === 'gf' || items[i].ty === 'gs') {
        this.renderGradientFill(items[i], data[i], groupTransform);
      } else if (items[i].ty === 'gr') {
        this.renderShape(groupTransform, items[i].it, data[i].it);
      } else if (items[i].ty === 'tm') {//
      }
    }

    if (isMain) {
      this.drawLayer();
    }
  };

  CVShapeElement.prototype.renderStyledShape = function (styledShape, shape) {
    if (this._isFirstFrame || shape._mdf || styledShape.transforms._mdf) {
      var shapeNodes = styledShape.trNodes;
      var paths = shape.paths;
      var i;
      var len;
      var j;
      var jLen = paths._length;
      shapeNodes.length = 0;
      var groupTransformMat = styledShape.transforms.finalTransform;

      for (j = 0; j < jLen; j += 1) {
        var pathNodes = paths.shapes[j];

        if (pathNodes && pathNodes.v) {
          len = pathNodes._length;

          for (i = 1; i < len; i += 1) {
            if (i === 1) {
              shapeNodes.push({
                t: 'm',
                p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
              });
            }

            shapeNodes.push({
              t: 'c',
              pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[i], pathNodes.v[i])
            });
          }

          if (len === 1) {
            shapeNodes.push({
              t: 'm',
              p: groupTransformMat.applyToPointArray(pathNodes.v[0][0], pathNodes.v[0][1], 0)
            });
          }

          if (pathNodes.c && len) {
            shapeNodes.push({
              t: 'c',
              pts: groupTransformMat.applyToTriplePoints(pathNodes.o[i - 1], pathNodes.i[0], pathNodes.v[0])
            });
            shapeNodes.push({
              t: 'z'
            });
          }
        }
      }

      styledShape.trNodes = shapeNodes;
    }
  };

  CVShapeElement.prototype.renderPath = function (pathData, itemData) {
    if (pathData.hd !== true && pathData._shouldRender) {
      var i;
      var len = itemData.styledShapes.length;

      for (i = 0; i < len; i += 1) {
        this.renderStyledShape(itemData.styledShapes[i], itemData.sh);
      }
    }
  };

  CVShapeElement.prototype.renderFill = function (styleData, itemData, groupTransform) {
    var styleElem = itemData.style;

    if (itemData.c._mdf || this._isFirstFrame) {
      styleElem.co = 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')';
    }

    if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
      styleElem.coOp = itemData.o.v * groupTransform.opacity;
    }
  };

  CVShapeElement.prototype.renderGradientFill = function (styleData, itemData, groupTransform) {
    var styleElem = itemData.style;
    var grd;

    if (!styleElem.grd || itemData.g._mdf || itemData.s._mdf || itemData.e._mdf || styleData.t !== 1 && (itemData.h._mdf || itemData.a._mdf)) {
      var ctx = this.globalData.canvasContext;
      var pt1 = itemData.s.v;
      var pt2 = itemData.e.v;

      if (styleData.t === 1) {
        grd = ctx.createLinearGradient(pt1[0], pt1[1], pt2[0], pt2[1]);
      } else {
        var rad = Math.sqrt(Math.pow(pt1[0] - pt2[0], 2) + Math.pow(pt1[1] - pt2[1], 2));
        var ang = Math.atan2(pt2[1] - pt1[1], pt2[0] - pt1[0]);
        var percent = itemData.h.v;

        if (percent >= 1) {
          percent = 0.99;
        } else if (percent <= -1) {
          percent = -0.99;
        }

        var dist = rad * percent;
        var x = Math.cos(ang + itemData.a.v) * dist + pt1[0];
        var y = Math.sin(ang + itemData.a.v) * dist + pt1[1];
        grd = ctx.createRadialGradient(x, y, 0, pt1[0], pt1[1], rad);
      }

      var i;
      var len = styleData.g.p;
      var cValues = itemData.g.c;
      var opacity = 1;

      for (i = 0; i < len; i += 1) {
        if (itemData.g._hasOpacity && itemData.g._collapsable) {
          opacity = itemData.g.o[i * 2 + 1];
        }

        grd.addColorStop(cValues[i * 4] / 100, 'rgba(' + cValues[i * 4 + 1] + ',' + cValues[i * 4 + 2] + ',' + cValues[i * 4 + 3] + ',' + opacity + ')');
      }

      styleElem.grd = grd;
    }

    styleElem.coOp = itemData.o.v * groupTransform.opacity;
  };

  CVShapeElement.prototype.renderStroke = function (styleData, itemData, groupTransform) {
    var styleElem = itemData.style;
    var d = itemData.d;

    if (d && (d._mdf || this._isFirstFrame)) {
      styleElem.da = d.dashArray;
      styleElem["do"] = d.dashoffset[0];
    }

    if (itemData.c._mdf || this._isFirstFrame) {
      styleElem.co = 'rgb(' + bmFloor(itemData.c.v[0]) + ',' + bmFloor(itemData.c.v[1]) + ',' + bmFloor(itemData.c.v[2]) + ')';
    }

    if (itemData.o._mdf || groupTransform._opMdf || this._isFirstFrame) {
      styleElem.coOp = itemData.o.v * groupTransform.opacity;
    }

    if (itemData.w._mdf || this._isFirstFrame) {
      styleElem.wi = itemData.w.v;
    }
  };

  CVShapeElement.prototype.destroy = function () {
    this.shapesData = null;
    this.globalData = null;
    this.canvasContext = null;
    this.stylesList.length = 0;
    this.itemsData.length = 0;
  };

  function CVTextElement(data, globalData, comp) {
    this.textSpans = [];
    this.yOffset = 0;
    this.fillColorAnim = false;
    this.strokeColorAnim = false;
    this.strokeWidthAnim = false;
    this.stroke = false;
    this.fill = false;
    this.justifyOffset = 0;
    this.currentRender = null;
    this.renderType = 'canvas';
    this.values = {
      fill: 'rgba(0,0,0,0)',
      stroke: 'rgba(0,0,0,0)',
      sWidth: 0,
      fValue: ''
    };
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement);
  CVTextElement.prototype.tHelper = createTag('canvas').getContext('2d');

  CVTextElement.prototype.buildNewText = function () {
    var documentData = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
    var hasFill = false;

    if (documentData.fc) {
      hasFill = true;
      this.values.fill = this.buildColor(documentData.fc);
    } else {
      this.values.fill = 'rgba(0,0,0,0)';
    }

    this.fill = hasFill;
    var hasStroke = false;

    if (documentData.sc) {
      hasStroke = true;
      this.values.stroke = this.buildColor(documentData.sc);
      this.values.sWidth = documentData.sw;
    }

    var fontData = this.globalData.fontManager.getFontByName(documentData.f);
    var i;
    var len;
    var letters = documentData.l;
    var matrixHelper = this.mHelper;
    this.stroke = hasStroke;
    this.values.fValue = documentData.finalSize + 'px ' + this.globalData.fontManager.getFontByName(documentData.f).fFamily;
    len = documentData.finalText.length; // this.tHelper.font = this.values.fValue;

    var charData;
    var shapeData;
    var k;
    var kLen;
    var shapes;
    var j;
    var jLen;
    var pathNodes;
    var commands;
    var pathArr;
    var singleShape = this.data.singleShape;
    var trackingOffset = documentData.tr * 0.001 * documentData.finalSize;
    var xPos = 0;
    var yPos = 0;
    var firstLine = true;
    var cnt = 0;

    for (i = 0; i < len; i += 1) {
      charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
      shapeData = charData && charData.data || {};
      matrixHelper.reset();

      if (singleShape && letters[i].n) {
        xPos = -trackingOffset;
        yPos += documentData.yOffset;
        yPos += firstLine ? 1 : 0;
        firstLine = false;
      }

      shapes = shapeData.shapes ? shapeData.shapes[0].it : [];
      jLen = shapes.length;
      matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);

      if (singleShape) {
        this.applyTextPropertiesToMatrix(documentData, matrixHelper, letters[i].line, xPos, yPos);
      }

      commands = createSizedArray(jLen - 1);
      var commandsCounter = 0;

      for (j = 0; j < jLen; j += 1) {
        if (shapes[j].ty === 'sh') {
          kLen = shapes[j].ks.k.i.length;
          pathNodes = shapes[j].ks.k;
          pathArr = [];

          for (k = 1; k < kLen; k += 1) {
            if (k === 1) {
              pathArr.push(matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
            }

            pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToY(pathNodes.i[k][0], pathNodes.i[k][1], 0), matrixHelper.applyToX(pathNodes.v[k][0], pathNodes.v[k][1], 0), matrixHelper.applyToY(pathNodes.v[k][0], pathNodes.v[k][1], 0));
          }

          pathArr.push(matrixHelper.applyToX(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToY(pathNodes.o[k - 1][0], pathNodes.o[k - 1][1], 0), matrixHelper.applyToX(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToY(pathNodes.i[0][0], pathNodes.i[0][1], 0), matrixHelper.applyToX(pathNodes.v[0][0], pathNodes.v[0][1], 0), matrixHelper.applyToY(pathNodes.v[0][0], pathNodes.v[0][1], 0));
          commands[commandsCounter] = pathArr;
          commandsCounter += 1;
        }
      }

      if (singleShape) {
        xPos += letters[i].l;
        xPos += trackingOffset;
      }

      if (this.textSpans[cnt]) {
        this.textSpans[cnt].elem = commands;
      } else {
        this.textSpans[cnt] = {
          elem: commands
        };
      }

      cnt += 1;
    }
  };

  CVTextElement.prototype.renderInnerContent = function () {
    var ctx = this.canvasContext;
    ctx.font = this.values.fValue;
    ctx.lineCap = 'butt';
    ctx.lineJoin = 'miter';
    ctx.miterLimit = 4;

    if (!this.data.singleShape) {
      this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
    }

    var i;
    var len;
    var j;
    var jLen;
    var k;
    var kLen;
    var renderedLetters = this.textAnimator.renderedLetters;
    var letters = this.textProperty.currentData.l;
    len = letters.length;
    var renderedLetter;
    var lastFill = null;
    var lastStroke = null;
    var lastStrokeW = null;
    var commands;
    var pathArr;

    for (i = 0; i < len; i += 1) {
      if (!letters[i].n) {
        renderedLetter = renderedLetters[i];

        if (renderedLetter) {
          this.globalData.renderer.save();
          this.globalData.renderer.ctxTransform(renderedLetter.p);
          this.globalData.renderer.ctxOpacity(renderedLetter.o);
        }

        if (this.fill) {
          if (renderedLetter && renderedLetter.fc) {
            if (lastFill !== renderedLetter.fc) {
              lastFill = renderedLetter.fc;
              ctx.fillStyle = renderedLetter.fc;
            }
          } else if (lastFill !== this.values.fill) {
            lastFill = this.values.fill;
            ctx.fillStyle = this.values.fill;
          }

          commands = this.textSpans[i].elem;
          jLen = commands.length;
          this.globalData.canvasContext.beginPath();

          for (j = 0; j < jLen; j += 1) {
            pathArr = commands[j];
            kLen = pathArr.length;
            this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);

            for (k = 2; k < kLen; k += 6) {
              this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
            }
          }

          this.globalData.canvasContext.closePath();
          this.globalData.canvasContext.fill(); /// ctx.fillText(this.textSpans[i].val,0,0);
        }

        if (this.stroke) {
          if (renderedLetter && renderedLetter.sw) {
            if (lastStrokeW !== renderedLetter.sw) {
              lastStrokeW = renderedLetter.sw;
              ctx.lineWidth = renderedLetter.sw;
            }
          } else if (lastStrokeW !== this.values.sWidth) {
            lastStrokeW = this.values.sWidth;
            ctx.lineWidth = this.values.sWidth;
          }

          if (renderedLetter && renderedLetter.sc) {
            if (lastStroke !== renderedLetter.sc) {
              lastStroke = renderedLetter.sc;
              ctx.strokeStyle = renderedLetter.sc;
            }
          } else if (lastStroke !== this.values.stroke) {
            lastStroke = this.values.stroke;
            ctx.strokeStyle = this.values.stroke;
          }

          commands = this.textSpans[i].elem;
          jLen = commands.length;
          this.globalData.canvasContext.beginPath();

          for (j = 0; j < jLen; j += 1) {
            pathArr = commands[j];
            kLen = pathArr.length;
            this.globalData.canvasContext.moveTo(pathArr[0], pathArr[1]);

            for (k = 2; k < kLen; k += 6) {
              this.globalData.canvasContext.bezierCurveTo(pathArr[k], pathArr[k + 1], pathArr[k + 2], pathArr[k + 3], pathArr[k + 4], pathArr[k + 5]);
            }
          }

          this.globalData.canvasContext.closePath();
          this.globalData.canvasContext.stroke(); /// ctx.strokeText(letters[i].val,0,0);
        }

        if (renderedLetter) {
          this.globalData.renderer.restore();
        }
      }
    }
  };

  function CVImageElement(data, globalData, comp) {
    this.assetData = globalData.getAssetData(data.refId);
    this.img = globalData.imageLoader.getAsset(this.assetData);
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement);
  CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement;
  CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

  CVImageElement.prototype.createContent = function () {
    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
      var canvas = createTag('canvas');
      canvas.width = this.assetData.w;
      canvas.height = this.assetData.h;
      var ctx = canvas.getContext('2d');
      var imgW = this.img.width;
      var imgH = this.img.height;
      var imgRel = imgW / imgH;
      var canvasRel = this.assetData.w / this.assetData.h;
      var widthCrop;
      var heightCrop;
      var par = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;

      if (imgRel > canvasRel && par === 'xMidYMid slice' || imgRel < canvasRel && par !== 'xMidYMid slice') {
        heightCrop = imgH;
        widthCrop = heightCrop * canvasRel;
      } else {
        widthCrop = imgW;
        heightCrop = widthCrop / canvasRel;
      }

      ctx.drawImage(this.img, (imgW - widthCrop) / 2, (imgH - heightCrop) / 2, widthCrop, heightCrop, 0, 0, this.assetData.w, this.assetData.h);
      this.img = canvas;
    }
  };

  CVImageElement.prototype.renderInnerContent = function () {
    this.canvasContext.drawImage(this.img, 0, 0);
  };

  CVImageElement.prototype.destroy = function () {
    this.img = null;
  };

  function CVSolidElement(data, globalData, comp) {
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement);
  CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement;
  CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame;

  CVSolidElement.prototype.renderInnerContent = function () {
    var ctx = this.canvasContext;
    ctx.fillStyle = this.data.sc;
    ctx.fillRect(0, 0, this.data.sw, this.data.sh); //
  };

  function CanvasRendererBase(animationItem, config) {
    this.animationItem = animationItem;
    this.renderConfig = {
      clearCanvas: config && config.clearCanvas !== undefined ? config.clearCanvas : true,
      context: config && config.context || null,
      progressiveLoad: config && config.progressiveLoad || false,
      preserveAspectRatio: config && config.preserveAspectRatio || 'xMidYMid meet',
      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
      contentVisibility: config && config.contentVisibility || 'visible',
      className: config && config.className || '',
      id: config && config.id || ''
    };
    this.renderConfig.dpr = config && config.dpr || 1;

    if (this.animationItem.wrapper) {
      this.renderConfig.dpr = config && config.dpr || window.devicePixelRatio || 1;
    }

    this.renderedFrame = -1;
    this.globalData = {
      frameNum: -1,
      _mdf: false,
      renderConfig: this.renderConfig,
      currentGlobalAlpha: -1
    };
    this.contextData = new CVContextData();
    this.elements = [];
    this.pendingElements = [];
    this.transformMat = new Matrix();
    this.completeLayers = false;
    this.rendererType = 'canvas';
  }

  extendPrototype([BaseRenderer], CanvasRendererBase);

  CanvasRendererBase.prototype.createShape = function (data) {
    return new CVShapeElement(data, this.globalData, this);
  };

  CanvasRendererBase.prototype.createText = function (data) {
    return new CVTextElement(data, this.globalData, this);
  };

  CanvasRendererBase.prototype.createImage = function (data) {
    return new CVImageElement(data, this.globalData, this);
  };

  CanvasRendererBase.prototype.createSolid = function (data) {
    return new CVSolidElement(data, this.globalData, this);
  };

  CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;

  CanvasRendererBase.prototype.ctxTransform = function (props) {
    if (props[0] === 1 && props[1] === 0 && props[4] === 0 && props[5] === 1 && props[12] === 0 && props[13] === 0) {
      return;
    }

    if (!this.renderConfig.clearCanvas) {
      this.canvasContext.transform(props[0], props[1], props[4], props[5], props[12], props[13]);
      return;
    } // Resetting the canvas transform matrix to the new transform


    this.transformMat.cloneFromProps(props); // Taking the last transform value from the stored stack of transforms

    var currentTransform = this.contextData.getTransform();
    var cProps = currentTransform.props; // Applying the last transform value after the new transform to respect the order of transformations

    this.transformMat.transform(cProps[0], cProps[1], cProps[2], cProps[3], cProps[4], cProps[5], cProps[6], cProps[7], cProps[8], cProps[9], cProps[10], cProps[11], cProps[12], cProps[13], cProps[14], cProps[15]); // Storing the new transformed value in the stored transform

    currentTransform.cloneFromProps(this.transformMat.props);
    var trProps = currentTransform.props; // Applying the new transform to the canvas

    this.canvasContext.setTransform(trProps[0], trProps[1], trProps[4], trProps[5], trProps[12], trProps[13]);
  };

  CanvasRendererBase.prototype.ctxOpacity = function (op) {
    /* if(op === 1){
          return;
      } */
    var currentOpacity = this.contextData.getOpacity();

    if (!this.renderConfig.clearCanvas) {
      this.canvasContext.globalAlpha *= op < 0 ? 0 : op;
      this.globalData.currentGlobalAlpha = currentOpacity;
      return;
    }

    currentOpacity *= op < 0 ? 0 : op;
    this.contextData.setOpacity(currentOpacity);

    if (this.globalData.currentGlobalAlpha !== currentOpacity) {
      this.canvasContext.globalAlpha = currentOpacity;
      this.globalData.currentGlobalAlpha = currentOpacity;
    }
  };

  CanvasRendererBase.prototype.reset = function () {
    if (!this.renderConfig.clearCanvas) {
      this.canvasContext.restore();
      return;
    }

    this.contextData.reset();
  };

  CanvasRendererBase.prototype.save = function (actionFlag) {
    if (!this.renderConfig.clearCanvas) {
      this.canvasContext.save();
      return;
    }

    if (actionFlag) {
      this.canvasContext.save();
    }

    this.contextData.push();
  };

  CanvasRendererBase.prototype.restore = function (actionFlag) {
    if (!this.renderConfig.clearCanvas) {
      this.canvasContext.restore();
      return;
    }

    if (actionFlag) {
      this.canvasContext.restore();
      this.globalData.blendMode = 'source-over';
    }

    var popped = this.contextData.pop();
    var transform = popped.transform;
    var opacity = popped.opacity;
    this.canvasContext.setTransform(transform[0], transform[1], transform[4], transform[5], transform[12], transform[13]);

    if (this.globalData.currentGlobalAlpha !== opacity) {
      this.canvasContext.globalAlpha = opacity;
      this.globalData.currentGlobalAlpha = opacity;
    }
  };

  CanvasRendererBase.prototype.configAnimation = function (animData) {
    if (this.animationItem.wrapper) {
      this.animationItem.container = createTag('canvas');
      var containerStyle = this.animationItem.container.style;
      containerStyle.width = '100%';
      containerStyle.height = '100%';
      var origin = '0px 0px 0px';
      containerStyle.transformOrigin = origin;
      containerStyle.mozTransformOrigin = origin;
      containerStyle.webkitTransformOrigin = origin;
      containerStyle['-webkit-transform'] = origin;
      containerStyle.contentVisibility = this.renderConfig.contentVisibility;
      this.animationItem.wrapper.appendChild(this.animationItem.container);
      this.canvasContext = this.animationItem.container.getContext('2d');

      if (this.renderConfig.className) {
        this.animationItem.container.setAttribute('class', this.renderConfig.className);
      }

      if (this.renderConfig.id) {
        this.animationItem.container.setAttribute('id', this.renderConfig.id);
      }
    } else {
      this.canvasContext = this.renderConfig.context;
    }

    this.data = animData;
    this.layers = animData.layers;
    this.transformCanvas = {
      w: animData.w,
      h: animData.h,
      sx: 0,
      sy: 0,
      tx: 0,
      ty: 0
    };
    this.setupGlobalData(animData, document.body);
    this.globalData.canvasContext = this.canvasContext;
    this.globalData.renderer = this;
    this.globalData.isDashed = false;
    this.globalData.progressiveLoad = this.renderConfig.progressiveLoad;
    this.globalData.transformCanvas = this.transformCanvas;
    this.elements = createSizedArray(animData.layers.length);
    this.updateContainerSize();
  };

  CanvasRendererBase.prototype.updateContainerSize = function (width, height) {
    this.reset();
    var elementWidth;
    var elementHeight;

    if (width) {
      elementWidth = width;
      elementHeight = height;
      this.canvasContext.canvas.width = elementWidth;
      this.canvasContext.canvas.height = elementHeight;
    } else {
      if (this.animationItem.wrapper && this.animationItem.container) {
        elementWidth = this.animationItem.wrapper.offsetWidth;
        elementHeight = this.animationItem.wrapper.offsetHeight;
      } else {
        elementWidth = this.canvasContext.canvas.width;
        elementHeight = this.canvasContext.canvas.height;
      }

      this.canvasContext.canvas.width = elementWidth * this.renderConfig.dpr;
      this.canvasContext.canvas.height = elementHeight * this.renderConfig.dpr;
    }

    var elementRel;
    var animationRel;

    if (this.renderConfig.preserveAspectRatio.indexOf('meet') !== -1 || this.renderConfig.preserveAspectRatio.indexOf('slice') !== -1) {
      var par = this.renderConfig.preserveAspectRatio.split(' ');
      var fillType = par[1] || 'meet';
      var pos = par[0] || 'xMidYMid';
      var xPos = pos.substr(0, 4);
      var yPos = pos.substr(4);
      elementRel = elementWidth / elementHeight;
      animationRel = this.transformCanvas.w / this.transformCanvas.h;

      if (animationRel > elementRel && fillType === 'meet' || animationRel < elementRel && fillType === 'slice') {
        this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
        this.transformCanvas.sy = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
      } else {
        this.transformCanvas.sx = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
        this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
      }

      if (xPos === 'xMid' && (animationRel < elementRel && fillType === 'meet' || animationRel > elementRel && fillType === 'slice')) {
        this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) / 2 * this.renderConfig.dpr;
      } else if (xPos === 'xMax' && (animationRel < elementRel && fillType === 'meet' || animationRel > elementRel && fillType === 'slice')) {
        this.transformCanvas.tx = (elementWidth - this.transformCanvas.w * (elementHeight / this.transformCanvas.h)) * this.renderConfig.dpr;
      } else {
        this.transformCanvas.tx = 0;
      }

      if (yPos === 'YMid' && (animationRel > elementRel && fillType === 'meet' || animationRel < elementRel && fillType === 'slice')) {
        this.transformCanvas.ty = (elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) / 2 * this.renderConfig.dpr;
      } else if (yPos === 'YMax' && (animationRel > elementRel && fillType === 'meet' || animationRel < elementRel && fillType === 'slice')) {
        this.transformCanvas.ty = (elementHeight - this.transformCanvas.h * (elementWidth / this.transformCanvas.w)) * this.renderConfig.dpr;
      } else {
        this.transformCanvas.ty = 0;
      }
    } else if (this.renderConfig.preserveAspectRatio === 'none') {
      this.transformCanvas.sx = elementWidth / (this.transformCanvas.w / this.renderConfig.dpr);
      this.transformCanvas.sy = elementHeight / (this.transformCanvas.h / this.renderConfig.dpr);
      this.transformCanvas.tx = 0;
      this.transformCanvas.ty = 0;
    } else {
      this.transformCanvas.sx = this.renderConfig.dpr;
      this.transformCanvas.sy = this.renderConfig.dpr;
      this.transformCanvas.tx = 0;
      this.transformCanvas.ty = 0;
    }

    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
    /* var i, len = this.elements.length;
      for(i=0;i<len;i+=1){
          if(this.elements[i] && this.elements[i].data.ty === 0){
              this.elements[i].resize(this.globalData.transformCanvas);
          }
      } */

    this.ctxTransform(this.transformCanvas.props);
    this.canvasContext.beginPath();
    this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
    this.canvasContext.closePath();
    this.canvasContext.clip();
    this.renderFrame(this.renderedFrame, true);
  };

  CanvasRendererBase.prototype.destroy = function () {
    if (this.renderConfig.clearCanvas && this.animationItem.wrapper) {
      this.animationItem.wrapper.innerText = '';
    }

    var i;
    var len = this.layers ? this.layers.length : 0;

    for (i = len - 1; i >= 0; i -= 1) {
      if (this.elements[i] && this.elements[i].destroy) {
        this.elements[i].destroy();
      }
    }

    this.elements.length = 0;
    this.globalData.canvasContext = null;
    this.animationItem.container = null;
    this.destroyed = true;
  };

  CanvasRendererBase.prototype.renderFrame = function (num, forceRender) {
    if (this.renderedFrame === num && this.renderConfig.clearCanvas === true && !forceRender || this.destroyed || num === -1) {
      return;
    }

    this.renderedFrame = num;
    this.globalData.frameNum = num - this.animationItem._isFirstFrame;
    this.globalData.frameId += 1;
    this.globalData._mdf = !this.renderConfig.clearCanvas || forceRender;
    this.globalData.projectInterface.currentFrame = num; // console.log('--------');
    // console.log('NEW: ',num);

    var i;
    var len = this.layers.length;

    if (!this.completeLayers) {
      this.checkLayers(num);
    }

    for (i = 0; i < len; i += 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].prepareFrame(num - this.layers[i].st);
      }
    }

    if (this.globalData._mdf) {
      if (this.renderConfig.clearCanvas === true) {
        this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h);
      } else {
        this.save();
      }

      for (i = len - 1; i >= 0; i -= 1) {
        if (this.completeLayers || this.elements[i]) {
          this.elements[i].renderFrame();
        }
      }

      if (this.renderConfig.clearCanvas !== true) {
        this.restore();
      }
    }
  };

  CanvasRendererBase.prototype.buildItem = function (pos) {
    var elements = this.elements;

    if (elements[pos] || this.layers[pos].ty === 99) {
      return;
    }

    var element = this.createItem(this.layers[pos], this, this.globalData);
    elements[pos] = element;
    element.initExpressions();
    /* if(this.layers[pos].ty === 0){
          element.resize(this.globalData.transformCanvas);
      } */
  };

  CanvasRendererBase.prototype.checkPendingElements = function () {
    while (this.pendingElements.length) {
      var element = this.pendingElements.pop();
      element.checkParenting();
    }
  };

  CanvasRendererBase.prototype.hide = function () {
    this.animationItem.container.style.display = 'none';
  };

  CanvasRendererBase.prototype.show = function () {
    this.animationItem.container.style.display = 'block';
  };

  function CVCompElement(data, globalData, comp) {
    this.completeLayers = false;
    this.layers = data.layers;
    this.pendingElements = [];
    this.elements = createSizedArray(this.layers.length);
    this.initElement(data, globalData, comp);
    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
      _placeholder: true
    };
  }

  extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement);

  CVCompElement.prototype.renderInnerContent = function () {
    var ctx = this.canvasContext;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.data.w, 0);
    ctx.lineTo(this.data.w, this.data.h);
    ctx.lineTo(0, this.data.h);
    ctx.lineTo(0, 0);
    ctx.clip();
    var i;
    var len = this.layers.length;

    for (i = len - 1; i >= 0; i -= 1) {
      if (this.completeLayers || this.elements[i]) {
        this.elements[i].renderFrame();
      }
    }
  };

  CVCompElement.prototype.destroy = function () {
    var i;
    var len = this.layers.length;

    for (i = len - 1; i >= 0; i -= 1) {
      if (this.elements[i]) {
        this.elements[i].destroy();
      }
    }

    this.layers = null;
    this.elements = null;
  };

  CVCompElement.prototype.createComp = function (data) {
    return new CVCompElement(data, this.globalData, this);
  };

  function CanvasRenderer(animationItem, config) {
    this.animationItem = animationItem;
    this.renderConfig = {
      clearCanvas: config && config.clearCanvas !== undefined ? config.clearCanvas : true,
      context: config && config.context || null,
      progressiveLoad: config && config.progressiveLoad || false,
      preserveAspectRatio: config && config.preserveAspectRatio || 'xMidYMid meet',
      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
      contentVisibility: config && config.contentVisibility || 'visible',
      className: config && config.className || '',
      id: config && config.id || '',
      runExpressions: !config || config.runExpressions === undefined || config.runExpressions
    };
    this.renderConfig.dpr = config && config.dpr || 1;

    if (this.animationItem.wrapper) {
      this.renderConfig.dpr = config && config.dpr || window.devicePixelRatio || 1;
    }

    this.renderedFrame = -1;
    this.globalData = {
      frameNum: -1,
      _mdf: false,
      renderConfig: this.renderConfig,
      currentGlobalAlpha: -1
    };
    this.contextData = new CVContextData();
    this.elements = [];
    this.pendingElements = [];
    this.transformMat = new Matrix();
    this.completeLayers = false;
    this.rendererType = 'canvas';
  }

  extendPrototype([CanvasRendererBase], CanvasRenderer);

  CanvasRenderer.prototype.createComp = function (data) {
    return new CVCompElement(data, this.globalData, this);
  };

  function HBaseElement() {}

  HBaseElement.prototype = {
    checkBlendMode: function checkBlendMode() {},
    initRendererElement: function initRendererElement() {
      this.baseElement = createTag(this.data.tg || 'div');

      if (this.data.hasMask) {
        this.svgElement = createNS('svg');
        this.layerElement = createNS('g');
        this.maskedElement = this.layerElement;
        this.svgElement.appendChild(this.layerElement);
        this.baseElement.appendChild(this.svgElement);
      } else {
        this.layerElement = this.baseElement;
      }

      styleDiv(this.baseElement);
    },
    createContainerElements: function createContainerElements() {
      this.renderableEffectsManager = new CVEffects(this);
      this.transformedElement = this.baseElement;
      this.maskedElement = this.layerElement;

      if (this.data.ln) {
        this.layerElement.setAttribute('id', this.data.ln);
      }

      if (this.data.cl) {
        this.layerElement.setAttribute('class', this.data.cl);
      }

      if (this.data.bm !== 0) {
        this.setBlendMode();
      }
    },
    renderElement: function renderElement() {
      var transformedElementStyle = this.transformedElement ? this.transformedElement.style : {};

      if (this.finalTransform._matMdf) {
        var matrixValue = this.finalTransform.mat.toCSS();
        transformedElementStyle.transform = matrixValue;
        transformedElementStyle.webkitTransform = matrixValue;
      }

      if (this.finalTransform._opMdf) {
        transformedElementStyle.opacity = this.finalTransform.mProp.o.v;
      }
    },
    renderFrame: function renderFrame() {
      // If it is exported as hidden (data.hd === true) no need to render
      // If it is not visible no need to render
      if (this.data.hd || this.hidden) {
        return;
      }

      this.renderTransform();
      this.renderRenderable();
      this.renderElement();
      this.renderInnerContent();

      if (this._isFirstFrame) {
        this._isFirstFrame = false;
      }
    },
    destroy: function destroy() {
      this.layerElement = null;
      this.transformedElement = null;

      if (this.matteElement) {
        this.matteElement = null;
      }

      if (this.maskManager) {
        this.maskManager.destroy();
        this.maskManager = null;
      }
    },
    createRenderableComponents: function createRenderableComponents() {
      this.maskManager = new MaskElement(this.data, this, this.globalData);
    },
    addEffects: function addEffects() {},
    setMatte: function setMatte() {}
  };
  HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement;
  HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy;
  HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;

  function HSolidElement(data, globalData, comp) {
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement);

  HSolidElement.prototype.createContent = function () {
    var rect;

    if (this.data.hasMask) {
      rect = createNS('rect');
      rect.setAttribute('width', this.data.sw);
      rect.setAttribute('height', this.data.sh);
      rect.setAttribute('fill', this.data.sc);
      this.svgElement.setAttribute('width', this.data.sw);
      this.svgElement.setAttribute('height', this.data.sh);
    } else {
      rect = createTag('div');
      rect.style.width = this.data.sw + 'px';
      rect.style.height = this.data.sh + 'px';
      rect.style.backgroundColor = this.data.sc;
    }

    this.layerElement.appendChild(rect);
  };

  function HShapeElement(data, globalData, comp) {
    // List of drawable elements
    this.shapes = []; // Full shape data

    this.shapesData = data.shapes; // List of styles that will be applied to shapes

    this.stylesList = []; // List of modifiers that will be applied to shapes

    this.shapeModifiers = []; // List of items in shape tree

    this.itemsData = []; // List of items in previous shape tree

    this.processedElements = []; // List of animated components

    this.animatedContents = [];
    this.shapesContainer = createNS('g');
    this.initElement(data, globalData, comp); // Moving any property that doesn't get too much access after initialization because of v8 way of handling more than 10 properties.
    // List of elements that have been created

    this.prevViewData = [];
    this.currentBBox = {
      x: 999999,
      y: -999999,
      h: 0,
      w: 0
    };
  }

  extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement);
  HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent;

  HShapeElement.prototype.createContent = function () {
    var cont;
    this.baseElement.style.fontSize = 0;

    if (this.data.hasMask) {
      this.layerElement.appendChild(this.shapesContainer);
      cont = this.svgElement;
    } else {
      cont = createNS('svg');
      var size = this.comp.data ? this.comp.data : this.globalData.compSize;
      cont.setAttribute('width', size.w);
      cont.setAttribute('height', size.h);
      cont.appendChild(this.shapesContainer);
      this.layerElement.appendChild(cont);
    }

    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true);
    this.filterUniqueShapes();
    this.shapeCont = cont;
  };

  HShapeElement.prototype.getTransformedPoint = function (transformers, point) {
    var i;
    var len = transformers.length;

    for (i = 0; i < len; i += 1) {
      point = transformers[i].mProps.v.applyToPointArray(point[0], point[1], 0);
    }

    return point;
  };

  HShapeElement.prototype.calculateShapeBoundingBox = function (item, boundingBox) {
    var shape = item.sh.v;
    var transformers = item.transformers;
    var i;
    var len = shape._length;
    var vPoint;
    var oPoint;
    var nextIPoint;
    var nextVPoint;

    if (len <= 1) {
      return;
    }

    for (i = 0; i < len - 1; i += 1) {
      vPoint = this.getTransformedPoint(transformers, shape.v[i]);
      oPoint = this.getTransformedPoint(transformers, shape.o[i]);
      nextIPoint = this.getTransformedPoint(transformers, shape.i[i + 1]);
      nextVPoint = this.getTransformedPoint(transformers, shape.v[i + 1]);
      this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
    }

    if (shape.c) {
      vPoint = this.getTransformedPoint(transformers, shape.v[i]);
      oPoint = this.getTransformedPoint(transformers, shape.o[i]);
      nextIPoint = this.getTransformedPoint(transformers, shape.i[0]);
      nextVPoint = this.getTransformedPoint(transformers, shape.v[0]);
      this.checkBounds(vPoint, oPoint, nextIPoint, nextVPoint, boundingBox);
    }
  };

  HShapeElement.prototype.checkBounds = function (vPoint, oPoint, nextIPoint, nextVPoint, boundingBox) {
    this.getBoundsOfCurve(vPoint, oPoint, nextIPoint, nextVPoint);
    var bounds = this.shapeBoundingBox;
    boundingBox.x = bmMin(bounds.left, boundingBox.x);
    boundingBox.xMax = bmMax(bounds.right, boundingBox.xMax);
    boundingBox.y = bmMin(bounds.top, boundingBox.y);
    boundingBox.yMax = bmMax(bounds.bottom, boundingBox.yMax);
  };

  HShapeElement.prototype.shapeBoundingBox = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
  HShapeElement.prototype.tempBoundingBox = {
    x: 0,
    xMax: 0,
    y: 0,
    yMax: 0,
    width: 0,
    height: 0
  };

  HShapeElement.prototype.getBoundsOfCurve = function (p0, p1, p2, p3) {
    var bounds = [[p0[0], p3[0]], [p0[1], p3[1]]];

    for (var a, b, c, t, b2ac, t1, t2, i = 0; i < 2; ++i) {
      // eslint-disable-line no-plusplus
      b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
      a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
      c = 3 * p1[i] - 3 * p0[i];
      b |= 0; // eslint-disable-line no-bitwise

      a |= 0; // eslint-disable-line no-bitwise

      c |= 0; // eslint-disable-line no-bitwise

      if (a === 0 && b === 0) {//
      } else if (a === 0) {
        t = -c / b;

        if (t > 0 && t < 1) {
          bounds[i].push(this.calculateF(t, p0, p1, p2, p3, i));
        }
      } else {
        b2ac = b * b - 4 * c * a;

        if (b2ac >= 0) {
          t1 = (-b + bmSqrt(b2ac)) / (2 * a);
          if (t1 > 0 && t1 < 1) bounds[i].push(this.calculateF(t1, p0, p1, p2, p3, i));
          t2 = (-b - bmSqrt(b2ac)) / (2 * a);
          if (t2 > 0 && t2 < 1) bounds[i].push(this.calculateF(t2, p0, p1, p2, p3, i));
        }
      }
    }

    this.shapeBoundingBox.left = bmMin.apply(null, bounds[0]);
    this.shapeBoundingBox.top = bmMin.apply(null, bounds[1]);
    this.shapeBoundingBox.right = bmMax.apply(null, bounds[0]);
    this.shapeBoundingBox.bottom = bmMax.apply(null, bounds[1]);
  };

  HShapeElement.prototype.calculateF = function (t, p0, p1, p2, p3, i) {
    return bmPow(1 - t, 3) * p0[i] + 3 * bmPow(1 - t, 2) * t * p1[i] + 3 * (1 - t) * bmPow(t, 2) * p2[i] + bmPow(t, 3) * p3[i];
  };

  HShapeElement.prototype.calculateBoundingBox = function (itemsData, boundingBox) {
    var i;
    var len = itemsData.length;

    for (i = 0; i < len; i += 1) {
      if (itemsData[i] && itemsData[i].sh) {
        this.calculateShapeBoundingBox(itemsData[i], boundingBox);
      } else if (itemsData[i] && itemsData[i].it) {
        this.calculateBoundingBox(itemsData[i].it, boundingBox);
      } else if (itemsData[i] && itemsData[i].style && itemsData[i].w) {
        this.expandStrokeBoundingBox(itemsData[i].w, boundingBox);
      }
    }
  };

  HShapeElement.prototype.expandStrokeBoundingBox = function (widthProperty, boundingBox) {
    var width = 0;

    if (widthProperty.keyframes) {
      for (var i = 0; i < widthProperty.keyframes.length; i += 1) {
        var kfw = widthProperty.keyframes[i].s;

        if (kfw > width) {
          width = kfw;
        }
      }

      width *= widthProperty.mult;
    } else {
      width = widthProperty.v * widthProperty.mult;
    }

    boundingBox.x -= width;
    boundingBox.xMax += width;
    boundingBox.y -= width;
    boundingBox.yMax += width;
  };

  HShapeElement.prototype.currentBoxContains = function (box) {
    return this.currentBBox.x <= box.x && this.currentBBox.y <= box.y && this.currentBBox.width + this.currentBBox.x >= box.x + box.width && this.currentBBox.height + this.currentBBox.y >= box.y + box.height;
  };

  HShapeElement.prototype.renderInnerContent = function () {
    this._renderShapeFrame();

    if (!this.hidden && (this._isFirstFrame || this._mdf)) {
      var tempBoundingBox = this.tempBoundingBox;
      var max = 999999;
      tempBoundingBox.x = max;
      tempBoundingBox.xMax = -max;
      tempBoundingBox.y = max;
      tempBoundingBox.yMax = -max;
      this.calculateBoundingBox(this.itemsData, tempBoundingBox);
      tempBoundingBox.width = tempBoundingBox.xMax < tempBoundingBox.x ? 0 : tempBoundingBox.xMax - tempBoundingBox.x;
      tempBoundingBox.height = tempBoundingBox.yMax < tempBoundingBox.y ? 0 : tempBoundingBox.yMax - tempBoundingBox.y; // var tempBoundingBox = this.shapeCont.getBBox();

      if (this.currentBoxContains(tempBoundingBox)) {
        return;
      }

      var changed = false;

      if (this.currentBBox.w !== tempBoundingBox.width) {
        this.currentBBox.w = tempBoundingBox.width;
        this.shapeCont.setAttribute('width', tempBoundingBox.width);
        changed = true;
      }

      if (this.currentBBox.h !== tempBoundingBox.height) {
        this.currentBBox.h = tempBoundingBox.height;
        this.shapeCont.setAttribute('height', tempBoundingBox.height);
        changed = true;
      }

      if (changed || this.currentBBox.x !== tempBoundingBox.x || this.currentBBox.y !== tempBoundingBox.y) {
        this.currentBBox.w = tempBoundingBox.width;
        this.currentBBox.h = tempBoundingBox.height;
        this.currentBBox.x = tempBoundingBox.x;
        this.currentBBox.y = tempBoundingBox.y;
        this.shapeCont.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
        var shapeStyle = this.shapeCont.style;
        var shapeTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
        shapeStyle.transform = shapeTransform;
        shapeStyle.webkitTransform = shapeTransform;
      }
    }
  };

  function HTextElement(data, globalData, comp) {
    this.textSpans = [];
    this.textPaths = [];
    this.currentBBox = {
      x: 999999,
      y: -999999,
      h: 0,
      w: 0
    };
    this.renderType = 'svg';
    this.isMasked = false;
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement);

  HTextElement.prototype.createContent = function () {
    this.isMasked = this.checkMasks();

    if (this.isMasked) {
      this.renderType = 'svg';
      this.compW = this.comp.data.w;
      this.compH = this.comp.data.h;
      this.svgElement.setAttribute('width', this.compW);
      this.svgElement.setAttribute('height', this.compH);
      var g = createNS('g');
      this.maskedElement.appendChild(g);
      this.innerElem = g;
    } else {
      this.renderType = 'html';
      this.innerElem = this.layerElement;
    }

    this.checkParenting();
  };

  HTextElement.prototype.buildNewText = function () {
    var documentData = this.textProperty.currentData;
    this.renderedLetters = createSizedArray(documentData.l ? documentData.l.length : 0);
    var innerElemStyle = this.innerElem.style;
    var textColor = documentData.fc ? this.buildColor(documentData.fc) : 'rgba(0,0,0,0)';
    innerElemStyle.fill = textColor;
    innerElemStyle.color = textColor;

    if (documentData.sc) {
      innerElemStyle.stroke = this.buildColor(documentData.sc);
      innerElemStyle.strokeWidth = documentData.sw + 'px';
    }

    var fontData = this.globalData.fontManager.getFontByName(documentData.f);

    if (!this.globalData.fontManager.chars) {
      innerElemStyle.fontSize = documentData.finalSize + 'px';
      innerElemStyle.lineHeight = documentData.finalSize + 'px';

      if (fontData.fClass) {
        this.innerElem.className = fontData.fClass;
      } else {
        innerElemStyle.fontFamily = fontData.fFamily;
        var fWeight = documentData.fWeight;
        var fStyle = documentData.fStyle;
        innerElemStyle.fontStyle = fStyle;
        innerElemStyle.fontWeight = fWeight;
      }
    }

    var i;
    var len;
    var letters = documentData.l;
    len = letters.length;
    var tSpan;
    var tParent;
    var tCont;
    var matrixHelper = this.mHelper;
    var shapes;
    var shapeStr = '';
    var cnt = 0;

    for (i = 0; i < len; i += 1) {
      if (this.globalData.fontManager.chars) {
        if (!this.textPaths[cnt]) {
          tSpan = createNS('path');
          tSpan.setAttribute('stroke-linecap', lineCapEnum[1]);
          tSpan.setAttribute('stroke-linejoin', lineJoinEnum[2]);
          tSpan.setAttribute('stroke-miterlimit', '4');
        } else {
          tSpan = this.textPaths[cnt];
        }

        if (!this.isMasked) {
          if (this.textSpans[cnt]) {
            tParent = this.textSpans[cnt];
            tCont = tParent.children[0];
          } else {
            tParent = createTag('div');
            tParent.style.lineHeight = 0;
            tCont = createNS('svg');
            tCont.appendChild(tSpan);
            styleDiv(tParent);
          }
        }
      } else if (!this.isMasked) {
        if (this.textSpans[cnt]) {
          tParent = this.textSpans[cnt];
          tSpan = this.textPaths[cnt];
        } else {
          tParent = createTag('span');
          styleDiv(tParent);
          tSpan = createTag('span');
          styleDiv(tSpan);
          tParent.appendChild(tSpan);
        }
      } else {
        tSpan = this.textPaths[cnt] ? this.textPaths[cnt] : createNS('text');
      } // tSpan.setAttribute('visibility', 'hidden');


      if (this.globalData.fontManager.chars) {
        var charData = this.globalData.fontManager.getCharData(documentData.finalText[i], fontData.fStyle, this.globalData.fontManager.getFontByName(documentData.f).fFamily);
        var shapeData;

        if (charData) {
          shapeData = charData.data;
        } else {
          shapeData = null;
        }

        matrixHelper.reset();

        if (shapeData && shapeData.shapes && shapeData.shapes.length) {
          shapes = shapeData.shapes[0].it;
          matrixHelper.scale(documentData.finalSize / 100, documentData.finalSize / 100);
          shapeStr = this.createPathShape(matrixHelper, shapes);
          tSpan.setAttribute('d', shapeStr);
        }

        if (!this.isMasked) {
          this.innerElem.appendChild(tParent);

          if (shapeData && shapeData.shapes) {
            // document.body.appendChild is needed to get exact measure of shape
            document.body.appendChild(tCont);
            var boundingBox = tCont.getBBox();
            tCont.setAttribute('width', boundingBox.width + 2);
            tCont.setAttribute('height', boundingBox.height + 2);
            tCont.setAttribute('viewBox', boundingBox.x - 1 + ' ' + (boundingBox.y - 1) + ' ' + (boundingBox.width + 2) + ' ' + (boundingBox.height + 2));
            var tContStyle = tCont.style;
            var tContTranslation = 'translate(' + (boundingBox.x - 1) + 'px,' + (boundingBox.y - 1) + 'px)';
            tContStyle.transform = tContTranslation;
            tContStyle.webkitTransform = tContTranslation;
            letters[i].yOffset = boundingBox.y - 1;
          } else {
            tCont.setAttribute('width', 1);
            tCont.setAttribute('height', 1);
          }

          tParent.appendChild(tCont);
        } else {
          this.innerElem.appendChild(tSpan);
        }
      } else {
        tSpan.textContent = letters[i].val;
        tSpan.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');

        if (!this.isMasked) {
          this.innerElem.appendChild(tParent); //

          var tStyle = tSpan.style;
          var tSpanTranslation = 'translate3d(0,' + -documentData.finalSize / 1.2 + 'px,0)';
          tStyle.transform = tSpanTranslation;
          tStyle.webkitTransform = tSpanTranslation;
        } else {
          this.innerElem.appendChild(tSpan);
        }
      } //


      if (!this.isMasked) {
        this.textSpans[cnt] = tParent;
      } else {
        this.textSpans[cnt] = tSpan;
      }

      this.textSpans[cnt].style.display = 'block';
      this.textPaths[cnt] = tSpan;
      cnt += 1;
    }

    while (cnt < this.textSpans.length) {
      this.textSpans[cnt].style.display = 'none';
      cnt += 1;
    }
  };

  HTextElement.prototype.renderInnerContent = function () {
    var svgStyle;

    if (this.data.singleShape) {
      if (!this._isFirstFrame && !this.lettersChangedFlag) {
        return;
      }

      if (this.isMasked && this.finalTransform._matMdf) {
        // Todo Benchmark if using this is better than getBBox
        this.svgElement.setAttribute('viewBox', -this.finalTransform.mProp.p.v[0] + ' ' + -this.finalTransform.mProp.p.v[1] + ' ' + this.compW + ' ' + this.compH);
        svgStyle = this.svgElement.style;
        var translation = 'translate(' + -this.finalTransform.mProp.p.v[0] + 'px,' + -this.finalTransform.mProp.p.v[1] + 'px)';
        svgStyle.transform = translation;
        svgStyle.webkitTransform = translation;
      }
    }

    this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);

    if (!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag) {
      return;
    }

    var i;
    var len;
    var count = 0;
    var renderedLetters = this.textAnimator.renderedLetters;
    var letters = this.textProperty.currentData.l;
    len = letters.length;
    var renderedLetter;
    var textSpan;
    var textPath;

    for (i = 0; i < len; i += 1) {
      if (letters[i].n) {
        count += 1;
      } else {
        textSpan = this.textSpans[i];
        textPath = this.textPaths[i];
        renderedLetter = renderedLetters[count];
        count += 1;

        if (renderedLetter._mdf.m) {
          if (!this.isMasked) {
            textSpan.style.webkitTransform = renderedLetter.m;
            textSpan.style.transform = renderedLetter.m;
          } else {
            textSpan.setAttribute('transform', renderedLetter.m);
          }
        } /// /textSpan.setAttribute('opacity',renderedLetter.o);


        textSpan.style.opacity = renderedLetter.o;

        if (renderedLetter.sw && renderedLetter._mdf.sw) {
          textPath.setAttribute('stroke-width', renderedLetter.sw);
        }

        if (renderedLetter.sc && renderedLetter._mdf.sc) {
          textPath.setAttribute('stroke', renderedLetter.sc);
        }

        if (renderedLetter.fc && renderedLetter._mdf.fc) {
          textPath.setAttribute('fill', renderedLetter.fc);
          textPath.style.color = renderedLetter.fc;
        }
      }
    }

    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
      var boundingBox = this.innerElem.getBBox();

      if (this.currentBBox.w !== boundingBox.width) {
        this.currentBBox.w = boundingBox.width;
        this.svgElement.setAttribute('width', boundingBox.width);
      }

      if (this.currentBBox.h !== boundingBox.height) {
        this.currentBBox.h = boundingBox.height;
        this.svgElement.setAttribute('height', boundingBox.height);
      }

      var margin = 1;

      if (this.currentBBox.w !== boundingBox.width + margin * 2 || this.currentBBox.h !== boundingBox.height + margin * 2 || this.currentBBox.x !== boundingBox.x - margin || this.currentBBox.y !== boundingBox.y - margin) {
        this.currentBBox.w = boundingBox.width + margin * 2;
        this.currentBBox.h = boundingBox.height + margin * 2;
        this.currentBBox.x = boundingBox.x - margin;
        this.currentBBox.y = boundingBox.y - margin;
        this.svgElement.setAttribute('viewBox', this.currentBBox.x + ' ' + this.currentBBox.y + ' ' + this.currentBBox.w + ' ' + this.currentBBox.h);
        svgStyle = this.svgElement.style;
        var svgTransform = 'translate(' + this.currentBBox.x + 'px,' + this.currentBBox.y + 'px)';
        svgStyle.transform = svgTransform;
        svgStyle.webkitTransform = svgTransform;
      }
    }
  };

  function HCameraElement(data, globalData, comp) {
    this.initFrame();
    this.initBaseData(data, globalData, comp);
    this.initHierarchy();
    var getProp = PropertyFactory.getProp;
    this.pe = getProp(this, data.pe, 0, 0, this);

    if (data.ks.p.s) {
      this.px = getProp(this, data.ks.p.x, 1, 0, this);
      this.py = getProp(this, data.ks.p.y, 1, 0, this);
      this.pz = getProp(this, data.ks.p.z, 1, 0, this);
    } else {
      this.p = getProp(this, data.ks.p, 1, 0, this);
    }

    if (data.ks.a) {
      this.a = getProp(this, data.ks.a, 1, 0, this);
    }

    if (data.ks.or.k.length && data.ks.or.k[0].to) {
      var i;
      var len = data.ks.or.k.length;

      for (i = 0; i < len; i += 1) {
        data.ks.or.k[i].to = null;
        data.ks.or.k[i].ti = null;
      }
    }

    this.or = getProp(this, data.ks.or, 1, degToRads, this);
    this.or.sh = true;
    this.rx = getProp(this, data.ks.rx, 0, degToRads, this);
    this.ry = getProp(this, data.ks.ry, 0, degToRads, this);
    this.rz = getProp(this, data.ks.rz, 0, degToRads, this);
    this.mat = new Matrix();
    this._prevMat = new Matrix();
    this._isFirstFrame = true; // TODO: find a better way to make the HCamera element to be compatible with the LayerInterface and TransformInterface.

    this.finalTransform = {
      mProp: this
    };
  }

  extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement);

  HCameraElement.prototype.setup = function () {
    var i;
    var len = this.comp.threeDElements.length;
    var comp;
    var perspectiveStyle;
    var containerStyle;

    for (i = 0; i < len; i += 1) {
      // [perspectiveElem,container]
      comp = this.comp.threeDElements[i];

      if (comp.type === '3d') {
        perspectiveStyle = comp.perspectiveElem.style;
        containerStyle = comp.container.style;
        var perspective = this.pe.v + 'px';
        var origin = '0px 0px 0px';
        var matrix = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
        perspectiveStyle.perspective = perspective;
        perspectiveStyle.webkitPerspective = perspective;
        containerStyle.transformOrigin = origin;
        containerStyle.mozTransformOrigin = origin;
        containerStyle.webkitTransformOrigin = origin;
        perspectiveStyle.transform = matrix;
        perspectiveStyle.webkitTransform = matrix;
      }
    }
  };

  HCameraElement.prototype.createElements = function () {};

  HCameraElement.prototype.hide = function () {};

  HCameraElement.prototype.renderFrame = function () {
    var _mdf = this._isFirstFrame;
    var i;
    var len;

    if (this.hierarchy) {
      len = this.hierarchy.length;

      for (i = 0; i < len; i += 1) {
        _mdf = this.hierarchy[i].finalTransform.mProp._mdf || _mdf;
      }
    }

    if (_mdf || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
      this.mat.reset();

      if (this.hierarchy) {
        len = this.hierarchy.length - 1;

        for (i = len; i >= 0; i -= 1) {
          var mTransf = this.hierarchy[i].finalTransform.mProp;
          this.mat.translate(-mTransf.p.v[0], -mTransf.p.v[1], mTransf.p.v[2]);
          this.mat.rotateX(-mTransf.or.v[0]).rotateY(-mTransf.or.v[1]).rotateZ(mTransf.or.v[2]);
          this.mat.rotateX(-mTransf.rx.v).rotateY(-mTransf.ry.v).rotateZ(mTransf.rz.v);
          this.mat.scale(1 / mTransf.s.v[0], 1 / mTransf.s.v[1], 1 / mTransf.s.v[2]);
          this.mat.translate(mTransf.a.v[0], mTransf.a.v[1], mTransf.a.v[2]);
        }
      }

      if (this.p) {
        this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]);
      } else {
        this.mat.translate(-this.px.v, -this.py.v, this.pz.v);
      }

      if (this.a) {
        var diffVector;

        if (this.p) {
          diffVector = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]];
        } else {
          diffVector = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
        }

        var mag = Math.sqrt(Math.pow(diffVector[0], 2) + Math.pow(diffVector[1], 2) + Math.pow(diffVector[2], 2)); // var lookDir = getNormalizedPoint(getDiffVector(this.a.v,this.p.v));

        var lookDir = [diffVector[0] / mag, diffVector[1] / mag, diffVector[2] / mag];
        var lookLengthOnXZ = Math.sqrt(lookDir[2] * lookDir[2] + lookDir[0] * lookDir[0]);
        var mRotationX = Math.atan2(lookDir[1], lookLengthOnXZ);
        var mRotationY = Math.atan2(lookDir[0], -lookDir[2]);
        this.mat.rotateY(mRotationY).rotateX(-mRotationX);
      }

      this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v);
      this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]);
      this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0);
      this.mat.translate(0, 0, this.pe.v);
      var hasMatrixChanged = !this._prevMat.equals(this.mat);

      if ((hasMatrixChanged || this.pe._mdf) && this.comp.threeDElements) {
        len = this.comp.threeDElements.length;
        var comp;
        var perspectiveStyle;
        var containerStyle;

        for (i = 0; i < len; i += 1) {
          comp = this.comp.threeDElements[i];

          if (comp.type === '3d') {
            if (hasMatrixChanged) {
              var matValue = this.mat.toCSS();
              containerStyle = comp.container.style;
              containerStyle.transform = matValue;
              containerStyle.webkitTransform = matValue;
            }

            if (this.pe._mdf) {
              perspectiveStyle = comp.perspectiveElem.style;
              perspectiveStyle.perspective = this.pe.v + 'px';
              perspectiveStyle.webkitPerspective = this.pe.v + 'px';
            }
          }
        }

        this.mat.clone(this._prevMat);
      }
    }

    this._isFirstFrame = false;
  };

  HCameraElement.prototype.prepareFrame = function (num) {
    this.prepareProperties(num, true);
  };

  HCameraElement.prototype.destroy = function () {};

  HCameraElement.prototype.getBaseElement = function () {
    return null;
  };

  function HImageElement(data, globalData, comp) {
    this.assetData = globalData.getAssetData(data.refId);
    this.initElement(data, globalData, comp);
  }

  extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement);

  HImageElement.prototype.createContent = function () {
    var assetPath = this.globalData.getAssetsPath(this.assetData);
    var img = new Image();

    if (this.data.hasMask) {
      this.imageElem = createNS('image');
      this.imageElem.setAttribute('width', this.assetData.w + 'px');
      this.imageElem.setAttribute('height', this.assetData.h + 'px');
      this.imageElem.setAttributeNS('http://www.w3.org/1999/xlink', 'href', assetPath);
      this.layerElement.appendChild(this.imageElem);
      this.baseElement.setAttribute('width', this.assetData.w);
      this.baseElement.setAttribute('height', this.assetData.h);
    } else {
      this.layerElement.appendChild(img);
    }

    img.crossOrigin = 'anonymous';
    img.src = assetPath;

    if (this.data.ln) {
      this.baseElement.setAttribute('id', this.data.ln);
    }
  };

  function HybridRendererBase(animationItem, config) {
    this.animationItem = animationItem;
    this.layers = null;
    this.renderedFrame = -1;
    this.renderConfig = {
      className: config && config.className || '',
      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
      hideOnTransparent: !(config && config.hideOnTransparent === false),
      filterSize: {
        width: config && config.filterSize && config.filterSize.width || '400%',
        height: config && config.filterSize && config.filterSize.height || '400%',
        x: config && config.filterSize && config.filterSize.x || '-100%',
        y: config && config.filterSize && config.filterSize.y || '-100%'
      }
    };
    this.globalData = {
      _mdf: false,
      frameNum: -1,
      renderConfig: this.renderConfig
    };
    this.pendingElements = [];
    this.elements = [];
    this.threeDElements = [];
    this.destroyed = false;
    this.camera = null;
    this.supports3d = true;
    this.rendererType = 'html';
  }

  extendPrototype([BaseRenderer], HybridRendererBase);
  HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem;

  HybridRendererBase.prototype.checkPendingElements = function () {
    while (this.pendingElements.length) {
      var element = this.pendingElements.pop();
      element.checkParenting();
    }
  };

  HybridRendererBase.prototype.appendElementInPos = function (element, pos) {
    var newDOMElement = element.getBaseElement();

    if (!newDOMElement) {
      return;
    }

    var layer = this.layers[pos];

    if (!layer.ddd || !this.supports3d) {
      if (this.threeDElements) {
        this.addTo3dContainer(newDOMElement, pos);
      } else {
        var i = 0;
        var nextDOMElement;
        var nextLayer;
        var tmpDOMElement;

        while (i < pos) {
          if (this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement) {
            nextLayer = this.elements[i];
            tmpDOMElement = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : nextLayer.getBaseElement();
            nextDOMElement = tmpDOMElement || nextDOMElement;
          }

          i += 1;
        }

        if (nextDOMElement) {
          if (!layer.ddd || !this.supports3d) {
            this.layerElement.insertBefore(newDOMElement, nextDOMElement);
          }
        } else if (!layer.ddd || !this.supports3d) {
          this.layerElement.appendChild(newDOMElement);
        }
      }
    } else {
      this.addTo3dContainer(newDOMElement, pos);
    }
  };

  HybridRendererBase.prototype.createShape = function (data) {
    if (!this.supports3d) {
      return new SVGShapeElement(data, this.globalData, this);
    }

    return new HShapeElement(data, this.globalData, this);
  };

  HybridRendererBase.prototype.createText = function (data) {
    if (!this.supports3d) {
      return new SVGTextLottieElement(data, this.globalData, this);
    }

    return new HTextElement(data, this.globalData, this);
  };

  HybridRendererBase.prototype.createCamera = function (data) {
    this.camera = new HCameraElement(data, this.globalData, this);
    return this.camera;
  };

  HybridRendererBase.prototype.createImage = function (data) {
    if (!this.supports3d) {
      return new IImageElement(data, this.globalData, this);
    }

    return new HImageElement(data, this.globalData, this);
  };

  HybridRendererBase.prototype.createSolid = function (data) {
    if (!this.supports3d) {
      return new ISolidElement(data, this.globalData, this);
    }

    return new HSolidElement(data, this.globalData, this);
  };

  HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull;

  HybridRendererBase.prototype.getThreeDContainerByPos = function (pos) {
    var i = 0;
    var len = this.threeDElements.length;

    while (i < len) {
      if (this.threeDElements[i].startPos <= pos && this.threeDElements[i].endPos >= pos) {
        return this.threeDElements[i].perspectiveElem;
      }

      i += 1;
    }

    return null;
  };

  HybridRendererBase.prototype.createThreeDContainer = function (pos, type) {
    var perspectiveElem = createTag('div');
    var style;
    var containerStyle;
    styleDiv(perspectiveElem);
    var container = createTag('div');
    styleDiv(container);

    if (type === '3d') {
      style = perspectiveElem.style;
      style.width = this.globalData.compSize.w + 'px';
      style.height = this.globalData.compSize.h + 'px';
      var center = '50% 50%';
      style.webkitTransformOrigin = center;
      style.mozTransformOrigin = center;
      style.transformOrigin = center;
      containerStyle = container.style;
      var matrix = 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)';
      containerStyle.transform = matrix;
      containerStyle.webkitTransform = matrix;
    }

    perspectiveElem.appendChild(container); // this.resizerElem.appendChild(perspectiveElem);

    var threeDContainerData = {
      container: container,
      perspectiveElem: perspectiveElem,
      startPos: pos,
      endPos: pos,
      type: type
    };
    this.threeDElements.push(threeDContainerData);
    return threeDContainerData;
  };

  HybridRendererBase.prototype.build3dContainers = function () {
    var i;
    var len = this.layers.length;
    var lastThreeDContainerData;
    var currentContainer = '';

    for (i = 0; i < len; i += 1) {
      if (this.layers[i].ddd && this.layers[i].ty !== 3) {
        if (currentContainer !== '3d') {
          currentContainer = '3d';
          lastThreeDContainerData = this.createThreeDContainer(i, '3d');
        }

        lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
      } else {
        if (currentContainer !== '2d') {
          currentContainer = '2d';
          lastThreeDContainerData = this.createThreeDContainer(i, '2d');
        }

        lastThreeDContainerData.endPos = Math.max(lastThreeDContainerData.endPos, i);
      }
    }

    len = this.threeDElements.length;

    for (i = len - 1; i >= 0; i -= 1) {
      this.resizerElem.appendChild(this.threeDElements[i].perspectiveElem);
    }
  };

  HybridRendererBase.prototype.addTo3dContainer = function (elem, pos) {
    var i = 0;
    var len = this.threeDElements.length;

    while (i < len) {
      if (pos <= this.threeDElements[i].endPos) {
        var j = this.threeDElements[i].startPos;
        var nextElement;

        while (j < pos) {
          if (this.elements[j] && this.elements[j].getBaseElement) {
            nextElement = this.elements[j].getBaseElement();
          }

          j += 1;
        }

        if (nextElement) {
          this.threeDElements[i].container.insertBefore(elem, nextElement);
        } else {
          this.threeDElements[i].container.appendChild(elem);
        }

        break;
      }

      i += 1;
    }
  };

  HybridRendererBase.prototype.configAnimation = function (animData) {
    var resizerElem = createTag('div');
    var wrapper = this.animationItem.wrapper;
    var style = resizerElem.style;
    style.width = animData.w + 'px';
    style.height = animData.h + 'px';
    this.resizerElem = resizerElem;
    styleDiv(resizerElem);
    style.transformStyle = 'flat';
    style.mozTransformStyle = 'flat';
    style.webkitTransformStyle = 'flat';

    if (this.renderConfig.className) {
      resizerElem.setAttribute('class', this.renderConfig.className);
    }

    wrapper.appendChild(resizerElem);
    style.overflow = 'hidden';
    var svg = createNS('svg');
    svg.setAttribute('width', '1');
    svg.setAttribute('height', '1');
    styleDiv(svg);
    this.resizerElem.appendChild(svg);
    var defs = createNS('defs');
    svg.appendChild(defs);
    this.data = animData; // Mask animation

    this.setupGlobalData(animData, svg);
    this.globalData.defs = defs;
    this.layers = animData.layers;
    this.layerElement = this.resizerElem;
    this.build3dContainers();
    this.updateContainerSize();
  };

  HybridRendererBase.prototype.destroy = function () {
    if (this.animationItem.wrapper) {
      this.animationItem.wrapper.innerText = '';
    }

    this.animationItem.container = null;
    this.globalData.defs = null;
    var i;
    var len = this.layers ? this.layers.length : 0;

    for (i = 0; i < len; i += 1) {
      if (this.elements[i] && this.elements[i].destroy) {
        this.elements[i].destroy();
      }
    }

    this.elements.length = 0;
    this.destroyed = true;
    this.animationItem = null;
  };

  HybridRendererBase.prototype.updateContainerSize = function () {
    var elementWidth = this.animationItem.wrapper.offsetWidth;
    var elementHeight = this.animationItem.wrapper.offsetHeight;
    var elementRel = elementWidth / elementHeight;
    var animationRel = this.globalData.compSize.w / this.globalData.compSize.h;
    var sx;
    var sy;
    var tx;
    var ty;

    if (animationRel > elementRel) {
      sx = elementWidth / this.globalData.compSize.w;
      sy = elementWidth / this.globalData.compSize.w;
      tx = 0;
      ty = (elementHeight - this.globalData.compSize.h * (elementWidth / this.globalData.compSize.w)) / 2;
    } else {
      sx = elementHeight / this.globalData.compSize.h;
      sy = elementHeight / this.globalData.compSize.h;
      tx = (elementWidth - this.globalData.compSize.w * (elementHeight / this.globalData.compSize.h)) / 2;
      ty = 0;
    }

    var style = this.resizerElem.style;
    style.webkitTransform = 'matrix3d(' + sx + ',0,0,0,0,' + sy + ',0,0,0,0,1,0,' + tx + ',' + ty + ',0,1)';
    style.transform = style.webkitTransform;
  };

  HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame;

  HybridRendererBase.prototype.hide = function () {
    this.resizerElem.style.display = 'none';
  };

  HybridRendererBase.prototype.show = function () {
    this.resizerElem.style.display = 'block';
  };

  HybridRendererBase.prototype.initItems = function () {
    this.buildAllItems();

    if (this.camera) {
      this.camera.setup();
    } else {
      var cWidth = this.globalData.compSize.w;
      var cHeight = this.globalData.compSize.h;
      var i;
      var len = this.threeDElements.length;

      for (i = 0; i < len; i += 1) {
        var style = this.threeDElements[i].perspectiveElem.style;
        style.webkitPerspective = Math.sqrt(Math.pow(cWidth, 2) + Math.pow(cHeight, 2)) + 'px';
        style.perspective = style.webkitPerspective;
      }
    }
  };

  HybridRendererBase.prototype.searchExtraCompositions = function (assets) {
    var i;
    var len = assets.length;
    var floatingContainer = createTag('div');

    for (i = 0; i < len; i += 1) {
      if (assets[i].xt) {
        var comp = this.createComp(assets[i], floatingContainer, this.globalData.comp, null);
        comp.initExpressions();
        this.globalData.projectInterface.registerComposition(comp);
      }
    }
  };

  function HCompElement(data, globalData, comp) {
    this.layers = data.layers;
    this.supports3d = !data.hasMask;
    this.completeLayers = false;
    this.pendingElements = [];
    this.elements = this.layers ? createSizedArray(this.layers.length) : [];
    this.initElement(data, globalData, comp);
    this.tm = data.tm ? PropertyFactory.getProp(this, data.tm, 0, globalData.frameRate, this) : {
      _placeholder: true
    };
  }

  extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement);
  HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements;

  HCompElement.prototype.createContainerElements = function () {
    this._createBaseContainerElements(); // divElement.style.clip = 'rect(0px, '+this.data.w+'px, '+this.data.h+'px, 0px)';


    if (this.data.hasMask) {
      this.svgElement.setAttribute('width', this.data.w);
      this.svgElement.setAttribute('height', this.data.h);
      this.transformedElement = this.baseElement;
    } else {
      this.transformedElement = this.layerElement;
    }
  };

  HCompElement.prototype.addTo3dContainer = function (elem, pos) {
    var j = 0;
    var nextElement;

    while (j < pos) {
      if (this.elements[j] && this.elements[j].getBaseElement) {
        nextElement = this.elements[j].getBaseElement();
      }

      j += 1;
    }

    if (nextElement) {
      this.layerElement.insertBefore(elem, nextElement);
    } else {
      this.layerElement.appendChild(elem);
    }
  };

  HCompElement.prototype.createComp = function (data) {
    if (!this.supports3d) {
      return new SVGCompElement(data, this.globalData, this);
    }

    return new HCompElement(data, this.globalData, this);
  };

  function HybridRenderer(animationItem, config) {
    this.animationItem = animationItem;
    this.layers = null;
    this.renderedFrame = -1;
    this.renderConfig = {
      className: config && config.className || '',
      imagePreserveAspectRatio: config && config.imagePreserveAspectRatio || 'xMidYMid slice',
      hideOnTransparent: !(config && config.hideOnTransparent === false),
      filterSize: {
        width: config && config.filterSize && config.filterSize.width || '400%',
        height: config && config.filterSize && config.filterSize.height || '400%',
        x: config && config.filterSize && config.filterSize.x || '-100%',
        y: config && config.filterSize && config.filterSize.y || '-100%'
      },
      runExpressions: !config || config.runExpressions === undefined || config.runExpressions
    };
    this.globalData = {
      _mdf: false,
      frameNum: -1,
      renderConfig: this.renderConfig
    };
    this.pendingElements = [];
    this.elements = [];
    this.threeDElements = [];
    this.destroyed = false;
    this.camera = null;
    this.supports3d = true;
    this.rendererType = 'html';
  }

  extendPrototype([HybridRendererBase], HybridRenderer);

  HybridRenderer.prototype.createComp = function (data) {
    if (!this.supports3d) {
      return new SVGCompElement(data, this.globalData, this);
    }

    return new HCompElement(data, this.globalData, this);
  };

  var CompExpressionInterface = function () {
    return function (comp) {
      function _thisLayerFunction(name) {
        var i = 0;
        var len = comp.layers.length;

        while (i < len) {
          if (comp.layers[i].nm === name || comp.layers[i].ind === name) {
            return comp.elements[i].layerInterface;
          }

          i += 1;
        }

        return null; // return {active:false};
      }

      Object.defineProperty(_thisLayerFunction, '_name', {
        value: comp.data.nm
      });
      _thisLayerFunction.layer = _thisLayerFunction;
      _thisLayerFunction.pixelAspect = 1;
      _thisLayerFunction.height = comp.data.h || comp.globalData.compSize.h;
      _thisLayerFunction.width = comp.data.w || comp.globalData.compSize.w;
      _thisLayerFunction.pixelAspect = 1;
      _thisLayerFunction.frameDuration = 1 / comp.globalData.frameRate;
      _thisLayerFunction.displayStartTime = 0;
      _thisLayerFunction.numLayers = comp.layers.length;
      return _thisLayerFunction;
    };
  }();

  var Expressions = function () {
    var ob = {};
    ob.initExpressions = initExpressions;

    function initExpressions(animation) {
      var stackCount = 0;
      var registers = [];

      function pushExpression() {
        stackCount += 1;
      }

      function popExpression() {
        stackCount -= 1;

        if (stackCount === 0) {
          releaseInstances();
        }
      }

      function registerExpressionProperty(expression) {
        if (registers.indexOf(expression) === -1) {
          registers.push(expression);
        }
      }

      function releaseInstances() {
        var i;
        var len = registers.length;

        for (i = 0; i < len; i += 1) {
          registers[i].release();
        }

        registers.length = 0;
      }

      animation.renderer.compInterface = CompExpressionInterface(animation.renderer);
      animation.renderer.globalData.projectInterface.registerComposition(animation.renderer);
      animation.renderer.globalData.pushExpression = pushExpression;
      animation.renderer.globalData.popExpression = popExpression;
      animation.renderer.globalData.registerExpressionProperty = registerExpressionProperty;
    }

    return ob;
  }();

  var MaskManagerInterface = function () {
    function MaskInterface(mask, data) {
      this._mask = mask;
      this._data = data;
    }

    Object.defineProperty(MaskInterface.prototype, 'maskPath', {
      get: function get() {
        if (this._mask.prop.k) {
          this._mask.prop.getValue();
        }

        return this._mask.prop;
      }
    });
    Object.defineProperty(MaskInterface.prototype, 'maskOpacity', {
      get: function get() {
        if (this._mask.op.k) {
          this._mask.op.getValue();
        }

        return this._mask.op.v * 100;
      }
    });

    var MaskManager = function MaskManager(maskManager) {
      var _masksInterfaces = createSizedArray(maskManager.viewData.length);

      var i;
      var len = maskManager.viewData.length;

      for (i = 0; i < len; i += 1) {
        _masksInterfaces[i] = new MaskInterface(maskManager.viewData[i], maskManager.masksProperties[i]);
      }

      var maskFunction = function maskFunction(name) {
        i = 0;

        while (i < len) {
          if (maskManager.masksProperties[i].nm === name) {
            return _masksInterfaces[i];
          }

          i += 1;
        }

        return null;
      };

      return maskFunction;
    };

    return MaskManager;
  }();

  var ExpressionPropertyInterface = function () {
    var defaultUnidimensionalValue = {
      pv: 0,
      v: 0,
      mult: 1
    };
    var defaultMultidimensionalValue = {
      pv: [0, 0, 0],
      v: [0, 0, 0],
      mult: 1
    };

    function completeProperty(expressionValue, property, type) {
      Object.defineProperty(expressionValue, 'velocity', {
        get: function get() {
          return property.getVelocityAtTime(property.comp.currentFrame);
        }
      });
      expressionValue.numKeys = property.keyframes ? property.keyframes.length : 0;

      expressionValue.key = function (pos) {
        if (!expressionValue.numKeys) {
          return 0;
        }

        var value = '';

        if ('s' in property.keyframes[pos - 1]) {
          value = property.keyframes[pos - 1].s;
        } else if ('e' in property.keyframes[pos - 2]) {
          value = property.keyframes[pos - 2].e;
        } else {
          value = property.keyframes[pos - 2].s;
        }

        var valueProp = type === 'unidimensional' ? new Number(value) : Object.assign({}, value); // eslint-disable-line no-new-wrappers

        valueProp.time = property.keyframes[pos - 1].t / property.elem.comp.globalData.frameRate;
        valueProp.value = type === 'unidimensional' ? value[0] : value;
        return valueProp;
      };

      expressionValue.valueAtTime = property.getValueAtTime;
      expressionValue.speedAtTime = property.getSpeedAtTime;
      expressionValue.velocityAtTime = property.getVelocityAtTime;
      expressionValue.propertyGroup = property.propertyGroup;
    }

    function UnidimensionalPropertyInterface(property) {
      if (!property || !('pv' in property)) {
        property = defaultUnidimensionalValue;
      }

      var mult = 1 / property.mult;
      var val = property.pv * mult;
      var expressionValue = new Number(val); // eslint-disable-line no-new-wrappers

      expressionValue.value = val;
      completeProperty(expressionValue, property, 'unidimensional');
      return function () {
        if (property.k) {
          property.getValue();
        }

        val = property.v * mult;

        if (expressionValue.value !== val) {
          expressionValue = new Number(val); // eslint-disable-line no-new-wrappers

          expressionValue.value = val;
          completeProperty(expressionValue, property, 'unidimensional');
        }

        return expressionValue;
      };
    }

    function MultidimensionalPropertyInterface(property) {
      if (!property || !('pv' in property)) {
        property = defaultMultidimensionalValue;
      }

      var mult = 1 / property.mult;
      var len = property.data && property.data.l || property.pv.length;
      var expressionValue = createTypedArray('float32', len);
      var arrValue = createTypedArray('float32', len);
      expressionValue.value = arrValue;
      completeProperty(expressionValue, property, 'multidimensional');
      return function () {
        if (property.k) {
          property.getValue();
        }

        for (var i = 0; i < len; i += 1) {
          arrValue[i] = property.v[i] * mult;
          expressionValue[i] = arrValue[i];
        }

        return expressionValue;
      };
    } // TODO: try to avoid using this getter


    function defaultGetter() {
      return defaultUnidimensionalValue;
    }

    return function (property) {
      if (!property) {
        return defaultGetter;
      }

      if (property.propType === 'unidimensional') {
        return UnidimensionalPropertyInterface(property);
      }

      return MultidimensionalPropertyInterface(property);
    };
  }();

  var TransformExpressionInterface = function () {
    return function (transform) {
      function _thisFunction(name) {
        switch (name) {
          case 'scale':
          case 'Scale':
          case 'ADBE Scale':
          case 6:
            return _thisFunction.scale;

          case 'rotation':
          case 'Rotation':
          case 'ADBE Rotation':
          case 'ADBE Rotate Z':
          case 10:
            return _thisFunction.rotation;

          case 'ADBE Rotate X':
            return _thisFunction.xRotation;

          case 'ADBE Rotate Y':
            return _thisFunction.yRotation;

          case 'position':
          case 'Position':
          case 'ADBE Position':
          case 2:
            return _thisFunction.position;

          case 'ADBE Position_0':
            return _thisFunction.xPosition;

          case 'ADBE Position_1':
            return _thisFunction.yPosition;

          case 'ADBE Position_2':
            return _thisFunction.zPosition;

          case 'anchorPoint':
          case 'AnchorPoint':
          case 'Anchor Point':
          case 'ADBE AnchorPoint':
          case 1:
            return _thisFunction.anchorPoint;

          case 'opacity':
          case 'Opacity':
          case 11:
            return _thisFunction.opacity;

          default:
            return null;
        }
      }

      Object.defineProperty(_thisFunction, 'rotation', {
        get: ExpressionPropertyInterface(transform.r || transform.rz)
      });
      Object.defineProperty(_thisFunction, 'zRotation', {
        get: ExpressionPropertyInterface(transform.rz || transform.r)
      });
      Object.defineProperty(_thisFunction, 'xRotation', {
        get: ExpressionPropertyInterface(transform.rx)
      });
      Object.defineProperty(_thisFunction, 'yRotation', {
        get: ExpressionPropertyInterface(transform.ry)
      });
      Object.defineProperty(_thisFunction, 'scale', {
        get: ExpressionPropertyInterface(transform.s)
      });

      var _px;

      var _py;

      var _pz;

      var _transformFactory;

      if (transform.p) {
        _transformFactory = ExpressionPropertyInterface(transform.p);
      } else {
        _px = ExpressionPropertyInterface(transform.px);
        _py = ExpressionPropertyInterface(transform.py);

        if (transform.pz) {
          _pz = ExpressionPropertyInterface(transform.pz);
        }
      }

      Object.defineProperty(_thisFunction, 'position', {
        get: function get() {
          if (transform.p) {
            return _transformFactory();
          }

          return [_px(), _py(), _pz ? _pz() : 0];
        }
      });
      Object.defineProperty(_thisFunction, 'xPosition', {
        get: ExpressionPropertyInterface(transform.px)
      });
      Object.defineProperty(_thisFunction, 'yPosition', {
        get: ExpressionPropertyInterface(transform.py)
      });
      Object.defineProperty(_thisFunction, 'zPosition', {
        get: ExpressionPropertyInterface(transform.pz)
      });
      Object.defineProperty(_thisFunction, 'anchorPoint', {
        get: ExpressionPropertyInterface(transform.a)
      });
      Object.defineProperty(_thisFunction, 'opacity', {
        get: ExpressionPropertyInterface(transform.o)
      });
      Object.defineProperty(_thisFunction, 'skew', {
        get: ExpressionPropertyInterface(transform.sk)
      });
      Object.defineProperty(_thisFunction, 'skewAxis', {
        get: ExpressionPropertyInterface(transform.sa)
      });
      Object.defineProperty(_thisFunction, 'orientation', {
        get: ExpressionPropertyInterface(transform.or)
      });
      return _thisFunction;
    };
  }();

  var LayerExpressionInterface = function () {
    function getMatrix(time) {
      var toWorldMat = new Matrix();

      if (time !== undefined) {
        var propMatrix = this._elem.finalTransform.mProp.getValueAtTime(time);

        propMatrix.clone(toWorldMat);
      } else {
        var transformMat = this._elem.finalTransform.mProp;
        transformMat.applyToMatrix(toWorldMat);
      }

      return toWorldMat;
    }

    function toWorldVec(arr, time) {
      var toWorldMat = this.getMatrix(time);
      toWorldMat.props[12] = 0;
      toWorldMat.props[13] = 0;
      toWorldMat.props[14] = 0;
      return this.applyPoint(toWorldMat, arr);
    }

    function toWorld(arr, time) {
      var toWorldMat = this.getMatrix(time);
      return this.applyPoint(toWorldMat, arr);
    }

    function fromWorldVec(arr, time) {
      var toWorldMat = this.getMatrix(time);
      toWorldMat.props[12] = 0;
      toWorldMat.props[13] = 0;
      toWorldMat.props[14] = 0;
      return this.invertPoint(toWorldMat, arr);
    }

    function fromWorld(arr, time) {
      var toWorldMat = this.getMatrix(time);
      return this.invertPoint(toWorldMat, arr);
    }

    function applyPoint(matrix, arr) {
      if (this._elem.hierarchy && this._elem.hierarchy.length) {
        var i;
        var len = this._elem.hierarchy.length;

        for (i = 0; i < len; i += 1) {
          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
        }
      }

      return matrix.applyToPointArray(arr[0], arr[1], arr[2] || 0);
    }

    function invertPoint(matrix, arr) {
      if (this._elem.hierarchy && this._elem.hierarchy.length) {
        var i;
        var len = this._elem.hierarchy.length;

        for (i = 0; i < len; i += 1) {
          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(matrix);
        }
      }

      return matrix.inversePoint(arr);
    }

    function fromComp(arr) {
      var toWorldMat = new Matrix();
      toWorldMat.reset();

      this._elem.finalTransform.mProp.applyToMatrix(toWorldMat);

      if (this._elem.hierarchy && this._elem.hierarchy.length) {
        var i;
        var len = this._elem.hierarchy.length;

        for (i = 0; i < len; i += 1) {
          this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(toWorldMat);
        }

        return toWorldMat.inversePoint(arr);
      }

      return toWorldMat.inversePoint(arr);
    }

    function sampleImage() {
      return [1, 1, 1, 1];
    }

    return function (elem) {
      var transformInterface;

      function _registerMaskInterface(maskManager) {
        _thisLayerFunction.mask = new MaskManagerInterface(maskManager, elem);
      }

      function _registerEffectsInterface(effects) {
        _thisLayerFunction.effect = effects;
      }

      function _thisLayerFunction(name) {
        switch (name) {
          case 'ADBE Root Vectors Group':
          case 'Contents':
          case 2:
            return _thisLayerFunction.shapeInterface;

          case 1:
          case 6:
          case 'Transform':
          case 'transform':
          case 'ADBE Transform Group':
            return transformInterface;

          case 4:
          case 'ADBE Effect Parade':
          case 'effects':
          case 'Effects':
            return _thisLayerFunction.effect;

          case 'ADBE Text Properties':
            return _thisLayerFunction.textInterface;

          default:
            return null;
        }
      }

      _thisLayerFunction.getMatrix = getMatrix;
      _thisLayerFunction.invertPoint = invertPoint;
      _thisLayerFunction.applyPoint = applyPoint;
      _thisLayerFunction.toWorld = toWorld;
      _thisLayerFunction.toWorldVec = toWorldVec;
      _thisLayerFunction.fromWorld = fromWorld;
      _thisLayerFunction.fromWorldVec = fromWorldVec;
      _thisLayerFunction.toComp = toWorld;
      _thisLayerFunction.fromComp = fromComp;
      _thisLayerFunction.sampleImage = sampleImage;
      _thisLayerFunction.sourceRectAtTime = elem.sourceRectAtTime.bind(elem);
      _thisLayerFunction._elem = elem;
      transformInterface = TransformExpressionInterface(elem.finalTransform.mProp);
      var anchorPointDescriptor = getDescriptor(transformInterface, 'anchorPoint');
      Object.defineProperties(_thisLayerFunction, {
        hasParent: {
          get: function get() {
            return elem.hierarchy.length;
          }
        },
        parent: {
          get: function get() {
            return elem.hierarchy[0].layerInterface;
          }
        },
        rotation: getDescriptor(transformInterface, 'rotation'),
        scale: getDescriptor(transformInterface, 'scale'),
        position: getDescriptor(transformInterface, 'position'),
        opacity: getDescriptor(transformInterface, 'opacity'),
        anchorPoint: anchorPointDescriptor,
        anchor_point: anchorPointDescriptor,
        transform: {
          get: function get() {
            return transformInterface;
          }
        },
        active: {
          get: function get() {
            return elem.isInRange;
          }
        }
      });
      _thisLayerFunction.startTime = elem.data.st;
      _thisLayerFunction.index = elem.data.ind;
      _thisLayerFunction.source = elem.data.refId;
      _thisLayerFunction.height = elem.data.ty === 0 ? elem.data.h : 100;
      _thisLayerFunction.width = elem.data.ty === 0 ? elem.data.w : 100;
      _thisLayerFunction.inPoint = elem.data.ip / elem.comp.globalData.frameRate;
      _thisLayerFunction.outPoint = elem.data.op / elem.comp.globalData.frameRate;
      _thisLayerFunction._name = elem.data.nm;
      _thisLayerFunction.registerMaskInterface = _registerMaskInterface;
      _thisLayerFunction.registerEffectsInterface = _registerEffectsInterface;
      return _thisLayerFunction;
    };
  }();

  var propertyGroupFactory = function () {
    return function (interfaceFunction, parentPropertyGroup) {
      return function (val) {
        val = val === undefined ? 1 : val;

        if (val <= 0) {
          return interfaceFunction;
        }

        return parentPropertyGroup(val - 1);
      };
    };
  }();

  var PropertyInterface = function () {
    return function (propertyName, propertyGroup) {
      var interfaceFunction = {
        _name: propertyName
      };

      function _propertyGroup(val) {
        val = val === undefined ? 1 : val;

        if (val <= 0) {
          return interfaceFunction;
        }

        return propertyGroup(val - 1);
      }

      return _propertyGroup;
    };
  }();

  var EffectsExpressionInterface = function () {
    var ob = {
      createEffectsInterface: createEffectsInterface
    };

    function createEffectsInterface(elem, propertyGroup) {
      if (elem.effectsManager) {
        var effectElements = [];
        var effectsData = elem.data.ef;
        var i;
        var len = elem.effectsManager.effectElements.length;

        for (i = 0; i < len; i += 1) {
          effectElements.push(createGroupInterface(effectsData[i], elem.effectsManager.effectElements[i], propertyGroup, elem));
        }

        var effects = elem.data.ef || [];

        var groupInterface = function groupInterface(name) {
          i = 0;
          len = effects.length;

          while (i < len) {
            if (name === effects[i].nm || name === effects[i].mn || name === effects[i].ix) {
              return effectElements[i];
            }

            i += 1;
          }

          return null;
        };

        Object.defineProperty(groupInterface, 'numProperties', {
          get: function get() {
            return effects.length;
          }
        });
        return groupInterface;
      }

      return null;
    }

    function createGroupInterface(data, elements, propertyGroup, elem) {
      function groupInterface(name) {
        var effects = data.ef;
        var i = 0;
        var len = effects.length;

        while (i < len) {
          if (name === effects[i].nm || name === effects[i].mn || name === effects[i].ix) {
            if (effects[i].ty === 5) {
              return effectElements[i];
            }

            return effectElements[i]();
          }

          i += 1;
        }

        throw new Error();
      }

      var _propertyGroup = propertyGroupFactory(groupInterface, propertyGroup);

      var effectElements = [];
      var i;
      var len = data.ef.length;

      for (i = 0; i < len; i += 1) {
        if (data.ef[i].ty === 5) {
          effectElements.push(createGroupInterface(data.ef[i], elements.effectElements[i], elements.effectElements[i].propertyGroup, elem));
        } else {
          effectElements.push(createValueInterface(elements.effectElements[i], data.ef[i].ty, elem, _propertyGroup));
        }
      }

      if (data.mn === 'ADBE Color Control') {
        Object.defineProperty(groupInterface, 'color', {
          get: function get() {
            return effectElements[0]();
          }
        });
      }

      Object.defineProperties(groupInterface, {
        numProperties: {
          get: function get() {
            return data.np;
          }
        },
        _name: {
          value: data.nm
        },
        propertyGroup: {
          value: _propertyGroup
        }
      });
      groupInterface.enabled = data.en !== 0;
      groupInterface.active = groupInterface.enabled;
      return groupInterface;
    }

    function createValueInterface(element, type, elem, propertyGroup) {
      var expressionProperty = ExpressionPropertyInterface(element.p);

      function interfaceFunction() {
        if (type === 10) {
          return elem.comp.compInterface(element.p.v);
        }

        return expressionProperty();
      }

      if (element.p.setGroupProperty) {
        element.p.setGroupProperty(PropertyInterface('', propertyGroup));
      }

      return interfaceFunction;
    }

    return ob;
  }();

  var ShapePathInterface = function () {
    return function pathInterfaceFactory(shape, view, propertyGroup) {
      var prop = view.sh;

      function interfaceFunction(val) {
        if (val === 'Shape' || val === 'shape' || val === 'Path' || val === 'path' || val === 'ADBE Vector Shape' || val === 2) {
          return interfaceFunction.path;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      prop.setGroupProperty(PropertyInterface('Path', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        path: {
          get: function get() {
            if (prop.k) {
              prop.getValue();
            }

            return prop;
          }
        },
        shape: {
          get: function get() {
            if (prop.k) {
              prop.getValue();
            }

            return prop;
          }
        },
        _name: {
          value: shape.nm
        },
        ix: {
          value: shape.ix
        },
        propertyIndex: {
          value: shape.ix
        },
        mn: {
          value: shape.mn
        },
        propertyGroup: {
          value: propertyGroup
        }
      });
      return interfaceFunction;
    };
  }();

  var ShapeExpressionInterface = function () {
    function iterateElements(shapes, view, propertyGroup) {
      var arr = [];
      var i;
      var len = shapes ? shapes.length : 0;

      for (i = 0; i < len; i += 1) {
        if (shapes[i].ty === 'gr') {
          arr.push(groupInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'fl') {
          arr.push(fillInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'st') {
          arr.push(strokeInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'tm') {
          arr.push(trimInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'tr') {// arr.push(transformInterfaceFactory(shapes[i],view[i],propertyGroup));
        } else if (shapes[i].ty === 'el') {
          arr.push(ellipseInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'sr') {
          arr.push(starInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'sh') {
          arr.push(ShapePathInterface(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'rc') {
          arr.push(rectInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'rd') {
          arr.push(roundedInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'rp') {
          arr.push(repeaterInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else if (shapes[i].ty === 'gf') {
          arr.push(gradientFillInterfaceFactory(shapes[i], view[i], propertyGroup));
        } else {
          arr.push(defaultInterfaceFactory(shapes[i], view[i], propertyGroup));
        }
      }

      return arr;
    }

    function contentsInterfaceFactory(shape, view, propertyGroup) {
      var interfaces;

      var interfaceFunction = function _interfaceFunction(value) {
        var i = 0;
        var len = interfaces.length;

        while (i < len) {
          if (interfaces[i]._name === value || interfaces[i].mn === value || interfaces[i].propertyIndex === value || interfaces[i].ix === value || interfaces[i].ind === value) {
            return interfaces[i];
          }

          i += 1;
        }

        if (typeof value === 'number') {
          return interfaces[value - 1];
        }

        return null;
      };

      interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
      interfaces = iterateElements(shape.it, view.it, interfaceFunction.propertyGroup);
      interfaceFunction.numProperties = interfaces.length;
      var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
      interfaceFunction.transform = transformInterface;
      interfaceFunction.propertyIndex = shape.cix;
      interfaceFunction._name = shape.nm;
      return interfaceFunction;
    }

    function groupInterfaceFactory(shape, view, propertyGroup) {
      var interfaceFunction = function _interfaceFunction(value) {
        switch (value) {
          case 'ADBE Vectors Group':
          case 'Contents':
          case 2:
            return interfaceFunction.content;
          // Not necessary for now. Keeping them here in case a new case appears
          // case 'ADBE Vector Transform Group':
          // case 3:

          default:
            return interfaceFunction.transform;
        }
      };

      interfaceFunction.propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);
      var content = contentsInterfaceFactory(shape, view, interfaceFunction.propertyGroup);
      var transformInterface = transformInterfaceFactory(shape.it[shape.it.length - 1], view.it[view.it.length - 1], interfaceFunction.propertyGroup);
      interfaceFunction.content = content;
      interfaceFunction.transform = transformInterface;
      Object.defineProperty(interfaceFunction, '_name', {
        get: function get() {
          return shape.nm;
        }
      }); // interfaceFunction.content = interfaceFunction;

      interfaceFunction.numProperties = shape.np;
      interfaceFunction.propertyIndex = shape.ix;
      interfaceFunction.nm = shape.nm;
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    function fillInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(val) {
        if (val === 'Color' || val === 'color') {
          return interfaceFunction.color;
        }

        if (val === 'Opacity' || val === 'opacity') {
          return interfaceFunction.opacity;
        }

        return null;
      }

      Object.defineProperties(interfaceFunction, {
        color: {
          get: ExpressionPropertyInterface(view.c)
        },
        opacity: {
          get: ExpressionPropertyInterface(view.o)
        },
        _name: {
          value: shape.nm
        },
        mn: {
          value: shape.mn
        }
      });
      view.c.setGroupProperty(PropertyInterface('Color', propertyGroup));
      view.o.setGroupProperty(PropertyInterface('Opacity', propertyGroup));
      return interfaceFunction;
    }

    function gradientFillInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(val) {
        if (val === 'Start Point' || val === 'start point') {
          return interfaceFunction.startPoint;
        }

        if (val === 'End Point' || val === 'end point') {
          return interfaceFunction.endPoint;
        }

        if (val === 'Opacity' || val === 'opacity') {
          return interfaceFunction.opacity;
        }

        return null;
      }

      Object.defineProperties(interfaceFunction, {
        startPoint: {
          get: ExpressionPropertyInterface(view.s)
        },
        endPoint: {
          get: ExpressionPropertyInterface(view.e)
        },
        opacity: {
          get: ExpressionPropertyInterface(view.o)
        },
        type: {
          get: function get() {
            return 'a';
          }
        },
        _name: {
          value: shape.nm
        },
        mn: {
          value: shape.mn
        }
      });
      view.s.setGroupProperty(PropertyInterface('Start Point', propertyGroup));
      view.e.setGroupProperty(PropertyInterface('End Point', propertyGroup));
      view.o.setGroupProperty(PropertyInterface('Opacity', propertyGroup));
      return interfaceFunction;
    }

    function defaultInterfaceFactory() {
      function interfaceFunction() {
        return null;
      }

      return interfaceFunction;
    }

    function strokeInterfaceFactory(shape, view, propertyGroup) {
      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      var _dashPropertyGroup = propertyGroupFactory(dashOb, _propertyGroup);

      function addPropertyToDashOb(i) {
        Object.defineProperty(dashOb, shape.d[i].nm, {
          get: ExpressionPropertyInterface(view.d.dataProps[i].p)
        });
      }

      var i;
      var len = shape.d ? shape.d.length : 0;
      var dashOb = {};

      for (i = 0; i < len; i += 1) {
        addPropertyToDashOb(i);
        view.d.dataProps[i].p.setGroupProperty(_dashPropertyGroup);
      }

      function interfaceFunction(val) {
        if (val === 'Color' || val === 'color') {
          return interfaceFunction.color;
        }

        if (val === 'Opacity' || val === 'opacity') {
          return interfaceFunction.opacity;
        }

        if (val === 'Stroke Width' || val === 'stroke width') {
          return interfaceFunction.strokeWidth;
        }

        return null;
      }

      Object.defineProperties(interfaceFunction, {
        color: {
          get: ExpressionPropertyInterface(view.c)
        },
        opacity: {
          get: ExpressionPropertyInterface(view.o)
        },
        strokeWidth: {
          get: ExpressionPropertyInterface(view.w)
        },
        dash: {
          get: function get() {
            return dashOb;
          }
        },
        _name: {
          value: shape.nm
        },
        mn: {
          value: shape.mn
        }
      });
      view.c.setGroupProperty(PropertyInterface('Color', _propertyGroup));
      view.o.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
      view.w.setGroupProperty(PropertyInterface('Stroke Width', _propertyGroup));
      return interfaceFunction;
    }

    function trimInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(val) {
        if (val === shape.e.ix || val === 'End' || val === 'end') {
          return interfaceFunction.end;
        }

        if (val === shape.s.ix) {
          return interfaceFunction.start;
        }

        if (val === shape.o.ix) {
          return interfaceFunction.offset;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      interfaceFunction.propertyIndex = shape.ix;
      view.s.setGroupProperty(PropertyInterface('Start', _propertyGroup));
      view.e.setGroupProperty(PropertyInterface('End', _propertyGroup));
      view.o.setGroupProperty(PropertyInterface('Offset', _propertyGroup));
      interfaceFunction.propertyIndex = shape.ix;
      interfaceFunction.propertyGroup = propertyGroup;
      Object.defineProperties(interfaceFunction, {
        start: {
          get: ExpressionPropertyInterface(view.s)
        },
        end: {
          get: ExpressionPropertyInterface(view.e)
        },
        offset: {
          get: ExpressionPropertyInterface(view.o)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    function transformInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(value) {
        if (shape.a.ix === value || value === 'Anchor Point') {
          return interfaceFunction.anchorPoint;
        }

        if (shape.o.ix === value || value === 'Opacity') {
          return interfaceFunction.opacity;
        }

        if (shape.p.ix === value || value === 'Position') {
          return interfaceFunction.position;
        }

        if (shape.r.ix === value || value === 'Rotation' || value === 'ADBE Vector Rotation') {
          return interfaceFunction.rotation;
        }

        if (shape.s.ix === value || value === 'Scale') {
          return interfaceFunction.scale;
        }

        if (shape.sk && shape.sk.ix === value || value === 'Skew') {
          return interfaceFunction.skew;
        }

        if (shape.sa && shape.sa.ix === value || value === 'Skew Axis') {
          return interfaceFunction.skewAxis;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      view.transform.mProps.o.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
      view.transform.mProps.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
      view.transform.mProps.a.setGroupProperty(PropertyInterface('Anchor Point', _propertyGroup));
      view.transform.mProps.s.setGroupProperty(PropertyInterface('Scale', _propertyGroup));
      view.transform.mProps.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));

      if (view.transform.mProps.sk) {
        view.transform.mProps.sk.setGroupProperty(PropertyInterface('Skew', _propertyGroup));
        view.transform.mProps.sa.setGroupProperty(PropertyInterface('Skew Angle', _propertyGroup));
      }

      view.transform.op.setGroupProperty(PropertyInterface('Opacity', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        opacity: {
          get: ExpressionPropertyInterface(view.transform.mProps.o)
        },
        position: {
          get: ExpressionPropertyInterface(view.transform.mProps.p)
        },
        anchorPoint: {
          get: ExpressionPropertyInterface(view.transform.mProps.a)
        },
        scale: {
          get: ExpressionPropertyInterface(view.transform.mProps.s)
        },
        rotation: {
          get: ExpressionPropertyInterface(view.transform.mProps.r)
        },
        skew: {
          get: ExpressionPropertyInterface(view.transform.mProps.sk)
        },
        skewAxis: {
          get: ExpressionPropertyInterface(view.transform.mProps.sa)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.ty = 'tr';
      interfaceFunction.mn = shape.mn;
      interfaceFunction.propertyGroup = propertyGroup;
      return interfaceFunction;
    }

    function ellipseInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(value) {
        if (shape.p.ix === value) {
          return interfaceFunction.position;
        }

        if (shape.s.ix === value) {
          return interfaceFunction.size;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      interfaceFunction.propertyIndex = shape.ix;
      var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
      prop.s.setGroupProperty(PropertyInterface('Size', _propertyGroup));
      prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        size: {
          get: ExpressionPropertyInterface(prop.s)
        },
        position: {
          get: ExpressionPropertyInterface(prop.p)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    function starInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(value) {
        if (shape.p.ix === value) {
          return interfaceFunction.position;
        }

        if (shape.r.ix === value) {
          return interfaceFunction.rotation;
        }

        if (shape.pt.ix === value) {
          return interfaceFunction.points;
        }

        if (shape.or.ix === value || value === 'ADBE Vector Star Outer Radius') {
          return interfaceFunction.outerRadius;
        }

        if (shape.os.ix === value) {
          return interfaceFunction.outerRoundness;
        }

        if (shape.ir && (shape.ir.ix === value || value === 'ADBE Vector Star Inner Radius')) {
          return interfaceFunction.innerRadius;
        }

        if (shape.is && shape.is.ix === value) {
          return interfaceFunction.innerRoundness;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
      interfaceFunction.propertyIndex = shape.ix;
      prop.or.setGroupProperty(PropertyInterface('Outer Radius', _propertyGroup));
      prop.os.setGroupProperty(PropertyInterface('Outer Roundness', _propertyGroup));
      prop.pt.setGroupProperty(PropertyInterface('Points', _propertyGroup));
      prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
      prop.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));

      if (shape.ir) {
        prop.ir.setGroupProperty(PropertyInterface('Inner Radius', _propertyGroup));
        prop.is.setGroupProperty(PropertyInterface('Inner Roundness', _propertyGroup));
      }

      Object.defineProperties(interfaceFunction, {
        position: {
          get: ExpressionPropertyInterface(prop.p)
        },
        rotation: {
          get: ExpressionPropertyInterface(prop.r)
        },
        points: {
          get: ExpressionPropertyInterface(prop.pt)
        },
        outerRadius: {
          get: ExpressionPropertyInterface(prop.or)
        },
        outerRoundness: {
          get: ExpressionPropertyInterface(prop.os)
        },
        innerRadius: {
          get: ExpressionPropertyInterface(prop.ir)
        },
        innerRoundness: {
          get: ExpressionPropertyInterface(prop.is)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    function rectInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(value) {
        if (shape.p.ix === value) {
          return interfaceFunction.position;
        }

        if (shape.r.ix === value) {
          return interfaceFunction.roundness;
        }

        if (shape.s.ix === value || value === 'Size' || value === 'ADBE Vector Rect Size') {
          return interfaceFunction.size;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      var prop = view.sh.ty === 'tm' ? view.sh.prop : view.sh;
      interfaceFunction.propertyIndex = shape.ix;
      prop.p.setGroupProperty(PropertyInterface('Position', _propertyGroup));
      prop.s.setGroupProperty(PropertyInterface('Size', _propertyGroup));
      prop.r.setGroupProperty(PropertyInterface('Rotation', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        position: {
          get: ExpressionPropertyInterface(prop.p)
        },
        roundness: {
          get: ExpressionPropertyInterface(prop.r)
        },
        size: {
          get: ExpressionPropertyInterface(prop.s)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    function roundedInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(value) {
        if (shape.r.ix === value || value === 'Round Corners 1') {
          return interfaceFunction.radius;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      var prop = view;
      interfaceFunction.propertyIndex = shape.ix;
      prop.rd.setGroupProperty(PropertyInterface('Radius', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        radius: {
          get: ExpressionPropertyInterface(prop.rd)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    function repeaterInterfaceFactory(shape, view, propertyGroup) {
      function interfaceFunction(value) {
        if (shape.c.ix === value || value === 'Copies') {
          return interfaceFunction.copies;
        }

        if (shape.o.ix === value || value === 'Offset') {
          return interfaceFunction.offset;
        }

        return null;
      }

      var _propertyGroup = propertyGroupFactory(interfaceFunction, propertyGroup);

      var prop = view;
      interfaceFunction.propertyIndex = shape.ix;
      prop.c.setGroupProperty(PropertyInterface('Copies', _propertyGroup));
      prop.o.setGroupProperty(PropertyInterface('Offset', _propertyGroup));
      Object.defineProperties(interfaceFunction, {
        copies: {
          get: ExpressionPropertyInterface(prop.c)
        },
        offset: {
          get: ExpressionPropertyInterface(prop.o)
        },
        _name: {
          value: shape.nm
        }
      });
      interfaceFunction.mn = shape.mn;
      return interfaceFunction;
    }

    return function (shapes, view, propertyGroup) {
      var interfaces;

      function _interfaceFunction(value) {
        if (typeof value === 'number') {
          value = value === undefined ? 1 : value;

          if (value === 0) {
            return propertyGroup;
          }

          return interfaces[value - 1];
        }

        var i = 0;
        var len = interfaces.length;

        while (i < len) {
          if (interfaces[i]._name === value) {
            return interfaces[i];
          }

          i += 1;
        }

        return null;
      }

      function parentGroupWrapper() {
        return propertyGroup;
      }

      _interfaceFunction.propertyGroup = propertyGroupFactory(_interfaceFunction, parentGroupWrapper);
      interfaces = iterateElements(shapes, view, _interfaceFunction.propertyGroup);
      _interfaceFunction.numProperties = interfaces.length;
      _interfaceFunction._name = 'Contents';
      return _interfaceFunction;
    };
  }();

  var TextExpressionInterface = function () {
    return function (elem) {
      var _sourceText;

      function _thisLayerFunction(name) {
        switch (name) {
          case 'ADBE Text Document':
            return _thisLayerFunction.sourceText;

          default:
            return null;
        }
      }

      Object.defineProperty(_thisLayerFunction, 'sourceText', {
        get: function get() {
          elem.textProperty.getValue();
          var stringValue = elem.textProperty.currentData.t;

          if (!_sourceText || stringValue !== _sourceText.value) {
            _sourceText = new String(stringValue); // eslint-disable-line no-new-wrappers
            // If stringValue is an empty string, eval returns undefined, so it has to be returned as a String primitive

            _sourceText.value = stringValue || new String(stringValue); // eslint-disable-line no-new-wrappers

            Object.defineProperty(_sourceText, 'style', {
              get: function get() {
                return {
                  fillColor: elem.textProperty.currentData.fc
                };
              }
            });
          }

          return _sourceText;
        }
      });
      return _thisLayerFunction;
    };
  }();

  function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

  var FootageInterface = function () {
    var outlineInterfaceFactory = function outlineInterfaceFactory(elem) {
      var currentPropertyName = '';
      var currentProperty = elem.getFootageData();

      function init() {
        currentPropertyName = '';
        currentProperty = elem.getFootageData();
        return searchProperty;
      }

      function searchProperty(value) {
        if (currentProperty[value]) {
          currentPropertyName = value;
          currentProperty = currentProperty[value];

          if (_typeof$2(currentProperty) === 'object') {
            return searchProperty;
          }

          return currentProperty;
        }

        var propertyNameIndex = value.indexOf(currentPropertyName);

        if (propertyNameIndex !== -1) {
          var index = parseInt(value.substr(propertyNameIndex + currentPropertyName.length), 10);
          currentProperty = currentProperty[index];

          if (_typeof$2(currentProperty) === 'object') {
            return searchProperty;
          }

          return currentProperty;
        }

        return '';
      }

      return init;
    };

    var dataInterfaceFactory = function dataInterfaceFactory(elem) {
      function interfaceFunction(value) {
        if (value === 'Outline') {
          return interfaceFunction.outlineInterface();
        }

        return null;
      }

      interfaceFunction._name = 'Outline';
      interfaceFunction.outlineInterface = outlineInterfaceFactory(elem);
      return interfaceFunction;
    };

    return function (elem) {
      function _interfaceFunction(value) {
        if (value === 'Data') {
          return _interfaceFunction.dataInterface;
        }

        return null;
      }

      _interfaceFunction._name = 'Data';
      _interfaceFunction.dataInterface = dataInterfaceFactory(elem);
      return _interfaceFunction;
    };
  }();

  var interfaces = {
    layer: LayerExpressionInterface,
    effects: EffectsExpressionInterface,
    comp: CompExpressionInterface,
    shape: ShapeExpressionInterface,
    text: TextExpressionInterface,
    footage: FootageInterface
  };

  function getInterface(type) {
    return interfaces[type] || null;
  }

  function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

  /* eslint-disable */

  /*
   Copyright 2014 David Bau.

   Permission is hereby granted, free of charge, to any person obtaining
   a copy of this software and associated documentation files (the
   "Software"), to deal in the Software without restriction, including
   without limitation the rights to use, copy, modify, merge, publish,
   distribute, sublicense, and/or sell copies of the Software, and to
   permit persons to whom the Software is furnished to do so, subject to
   the following conditions:

   The above copyright notice and this permission notice shall be
   included in all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
   IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
   CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
   TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

   */
  function seedRandom(pool, math) {
    //
    // The following constants are related to IEEE 754 limits.
    //
    var global = this,
        width = 256,
        // each RC4 output is 0 <= x < 256
    chunks = 6,
        // at least six RC4 outputs for each double
    digits = 52,
        // there are 52 significant digits in a double
    rngname = 'random',
        // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
        significance = math.pow(2, digits),
        overflow = significance * 2,
        mask = width - 1,
        nodecrypto; // node.js crypto module, initialized at the bottom.
    //
    // seedrandom()
    // This is the seedrandom function described above.
    //

    function seedrandom(seed, options, callback) {
      var key = [];
      options = options === true ? {
        entropy: true
      } : options || {}; // Flatten the seed string or build one from local entropy if needed.

      var shortseed = mixkey(flatten(options.entropy ? [seed, tostring(pool)] : seed === null ? autoseed() : seed, 3), key); // Use the seed to initialize an ARC4 generator.

      var arc4 = new ARC4(key); // This function returns a random double in [0, 1) that contains
      // randomness in every bit of the mantissa of the IEEE 754 value.

      var prng = function prng() {
        var n = arc4.g(chunks),
            // Start with a numerator n < 2 ^ 48
        d = startdenom,
            //   and denominator d = 2 ^ 48.
        x = 0; //   and no 'extra last byte'.

        while (n < significance) {
          // Fill up all significant digits by
          n = (n + x) * width; //   shifting numerator and

          d *= width; //   denominator and generating a

          x = arc4.g(1); //   new least-significant-byte.
        }

        while (n >= overflow) {
          // To avoid rounding up, before adding
          n /= 2; //   last byte, shift everything

          d /= 2; //   right using integer math until

          x >>>= 1; //   we have exactly the desired bits.
        }

        return (n + x) / d; // Form the number within [0, 1).
      };

      prng.int32 = function () {
        return arc4.g(4) | 0;
      };

      prng.quick = function () {
        return arc4.g(4) / 0x100000000;
      };

      prng["double"] = prng; // Mix the randomness into accumulated entropy.

      mixkey(tostring(arc4.S), pool); // Calling convention: what to return as a function of prng, seed, is_math.

      return (options.pass || callback || function (prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) {
            copy(state, arc4);
          } // Only provide the .state method if requested via options.state.


          prng.state = function () {
            return copy(arc4, {});
          };
        } // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.


        if (is_math_call) {
          math[rngname] = prng;
          return seed;
        } // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(prng, shortseed, 'global' in options ? options.global : this == math, options.state);
    }

    math['seed' + rngname] = seedrandom; //
    // ARC4
    //
    // An ARC4 implementation.  The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4.  Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //

    function ARC4(key) {
      var t,
          keylen = key.length,
          me = this,
          i = 0,
          j = me.i = me.j = 0,
          s = me.S = []; // The empty key [] is treated as [0].

      if (!keylen) {
        key = [keylen++];
      } // Set up S using the standard key scheduling algorithm.


      while (i < width) {
        s[i] = i++;
      }

      for (i = 0; i < width; i++) {
        s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
        s[j] = t;
      } // The "g" method returns the next (count) outputs as one number.


      me.g = function (count) {
        // Using instance members instead of closure state nearly doubles speed.
        var t,
            r = 0,
            i = me.i,
            j = me.j,
            s = me.S;

        while (count--) {
          t = s[i = mask & i + 1];
          r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
        }

        me.i = i;
        me.j = j;
        return r; // For robust unpredictability, the function call below automatically
        // discards an initial batch of values.  This is called RC4-drop[256].
        // See http://google.com/search?q=rsa+fluhrer+response&btnI
      };
    } //
    // copy()
    // Copies internal state of ARC4 to or from a plain object.
    //


    function copy(f, t) {
      t.i = f.i;
      t.j = f.j;
      t.S = f.S.slice();
      return t;
    } //
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //


    function flatten(obj, depth) {
      var result = [],
          typ = _typeof$1(obj),
          prop;

      if (depth && typ == 'object') {
        for (prop in obj) {
          try {
            result.push(flatten(obj[prop], depth - 1));
          } catch (e) {}
        }
      }

      return result.length ? result : typ == 'string' ? obj : obj + '\0';
    } //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //


    function mixkey(seed, key) {
      var stringseed = seed + '',
          smear,
          j = 0;

      while (j < stringseed.length) {
        key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
      }

      return tostring(key);
    } //
    // autoseed()
    // Returns an object for autoseeding, using window.crypto and Node crypto
    // module if available.
    //


    function autoseed() {
      try {
        if (nodecrypto) {
          return tostring(nodecrypto.randomBytes(width));
        }

        var out = new Uint8Array(width);
        (global.crypto || global.msCrypto).getRandomValues(out);
        return tostring(out);
      } catch (e) {
        var browser = global.navigator,
            plugins = browser && browser.plugins;
        return [+new Date(), global, plugins, global.screen, tostring(pool)];
      }
    } //
    // tostring()
    // Converts an array of charcodes to a string
    //


    function tostring(a) {
      return String.fromCharCode.apply(0, a);
    } //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool.  Because we do
    // not want to interfere with deterministic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //


    mixkey(math.random(), pool); //
    // Nodejs and AMD support: export the implementation as a module using
    // either convention.
    //
    // End anonymous scope, and pass initial values.
  }

  ;

  function initialize$2(BMMath) {
    seedRandom([], BMMath);
  }

  var propTypes = {
    SHAPE: 'shape'
  };

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var ExpressionManager = function () {
    'use strict';

    var ob = {};
    var Math = BMMath;
    var window = null;
    var document = null;
    var XMLHttpRequest = null;
    var fetch = null;
    var frames = null;
    initialize$2(BMMath);

    function $bm_isInstanceOfArray(arr) {
      return arr.constructor === Array || arr.constructor === Float32Array;
    }

    function isNumerable(tOfV, v) {
      return tOfV === 'number' || tOfV === 'boolean' || tOfV === 'string' || v instanceof Number;
    }

    function $bm_neg(a) {
      var tOfA = _typeof(a);

      if (tOfA === 'number' || tOfA === 'boolean' || a instanceof Number) {
        return -a;
      }

      if ($bm_isInstanceOfArray(a)) {
        var i;
        var lenA = a.length;
        var retArr = [];

        for (i = 0; i < lenA; i += 1) {
          retArr[i] = -a[i];
        }

        return retArr;
      }

      if (a.propType) {
        return a.v;
      }

      return -a;
    }

    var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, 'easeIn').get;
    var easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, 'easeOut').get;
    var easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, 'easeInOut').get;

    function sum(a, b) {
      var tOfA = _typeof(a);

      var tOfB = _typeof(b);

      if (tOfA === 'string' || tOfB === 'string') {
        return a + b;
      }

      if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
        return a + b;
      }

      if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
        a = a.slice(0);
        a[0] += b;
        return a;
      }

      if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
        b = b.slice(0);
        b[0] = a + b[0];
        return b;
      }

      if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
        var i = 0;
        var lenA = a.length;
        var lenB = b.length;
        var retArr = [];

        while (i < lenA || i < lenB) {
          if ((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)) {
            retArr[i] = a[i] + b[i];
          } else {
            retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
          }

          i += 1;
        }

        return retArr;
      }

      return 0;
    }

    var add = sum;

    function sub(a, b) {
      var tOfA = _typeof(a);

      var tOfB = _typeof(b);

      if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
        if (tOfA === 'string') {
          a = parseInt(a, 10);
        }

        if (tOfB === 'string') {
          b = parseInt(b, 10);
        }

        return a - b;
      }

      if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
        a = a.slice(0);
        a[0] -= b;
        return a;
      }

      if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
        b = b.slice(0);
        b[0] = a - b[0];
        return b;
      }

      if ($bm_isInstanceOfArray(a) && $bm_isInstanceOfArray(b)) {
        var i = 0;
        var lenA = a.length;
        var lenB = b.length;
        var retArr = [];

        while (i < lenA || i < lenB) {
          if ((typeof a[i] === 'number' || a[i] instanceof Number) && (typeof b[i] === 'number' || b[i] instanceof Number)) {
            retArr[i] = a[i] - b[i];
          } else {
            retArr[i] = b[i] === undefined ? a[i] : a[i] || b[i];
          }

          i += 1;
        }

        return retArr;
      }

      return 0;
    }

    function mul(a, b) {
      var tOfA = _typeof(a);

      var tOfB = _typeof(b);

      var arr;

      if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
        return a * b;
      }

      var i;
      var len;

      if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
        len = a.length;
        arr = createTypedArray('float32', len);

        for (i = 0; i < len; i += 1) {
          arr[i] = a[i] * b;
        }

        return arr;
      }

      if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
        len = b.length;
        arr = createTypedArray('float32', len);

        for (i = 0; i < len; i += 1) {
          arr[i] = a * b[i];
        }

        return arr;
      }

      return 0;
    }

    function div(a, b) {
      var tOfA = _typeof(a);

      var tOfB = _typeof(b);

      var arr;

      if (isNumerable(tOfA, a) && isNumerable(tOfB, b)) {
        return a / b;
      }

      var i;
      var len;

      if ($bm_isInstanceOfArray(a) && isNumerable(tOfB, b)) {
        len = a.length;
        arr = createTypedArray('float32', len);

        for (i = 0; i < len; i += 1) {
          arr[i] = a[i] / b;
        }

        return arr;
      }

      if (isNumerable(tOfA, a) && $bm_isInstanceOfArray(b)) {
        len = b.length;
        arr = createTypedArray('float32', len);

        for (i = 0; i < len; i += 1) {
          arr[i] = a / b[i];
        }

        return arr;
      }

      return 0;
    }

    function mod(a, b) {
      if (typeof a === 'string') {
        a = parseInt(a, 10);
      }

      if (typeof b === 'string') {
        b = parseInt(b, 10);
      }

      return a % b;
    }

    var $bm_sum = sum;
    var $bm_sub = sub;
    var $bm_mul = mul;
    var $bm_div = div;
    var $bm_mod = mod;

    function clamp(num, min, max) {
      if (min > max) {
        var mm = max;
        max = min;
        min = mm;
      }

      return Math.min(Math.max(num, min), max);
    }

    function radiansToDegrees(val) {
      return val / degToRads;
    }

    var radians_to_degrees = radiansToDegrees;

    function degreesToRadians(val) {
      return val * degToRads;
    }

    var degrees_to_radians = radiansToDegrees;
    var helperLengthArray = [0, 0, 0, 0, 0, 0];

    function length(arr1, arr2) {
      if (typeof arr1 === 'number' || arr1 instanceof Number) {
        arr2 = arr2 || 0;
        return Math.abs(arr1 - arr2);
      }

      if (!arr2) {
        arr2 = helperLengthArray;
      }

      var i;
      var len = Math.min(arr1.length, arr2.length);
      var addedLength = 0;

      for (i = 0; i < len; i += 1) {
        addedLength += Math.pow(arr2[i] - arr1[i], 2);
      }

      return Math.sqrt(addedLength);
    }

    function normalize(vec) {
      return div(vec, length(vec));
    }

    function rgbToHsl(val) {
      var r = val[0];
      var g = val[1];
      var b = val[2];
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h;
      var s;
      var l = (max + min) / 2;

      if (max === min) {
        h = 0; // achromatic

        s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;

          case g:
            h = (b - r) / d + 2;
            break;

          case b:
            h = (r - g) / d + 4;
            break;

          default:
            break;
        }

        h /= 6;
      }

      return [h, s, l, val[3]];
    }

    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    function hslToRgb(val) {
      var h = val[0];
      var s = val[1];
      var l = val[2];
      var r;
      var g;
      var b;

      if (s === 0) {
        r = l; // achromatic

        b = l; // achromatic

        g = l; // achromatic
      } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }

      return [r, g, b, val[3]];
    }

    function linear(t, tMin, tMax, value1, value2) {
      if (value1 === undefined || value2 === undefined) {
        value1 = tMin;
        value2 = tMax;
        tMin = 0;
        tMax = 1;
      }

      if (tMax < tMin) {
        var _tMin = tMax;
        tMax = tMin;
        tMin = _tMin;
      }

      if (t <= tMin) {
        return value1;
      }

      if (t >= tMax) {
        return value2;
      }

      var perc = tMax === tMin ? 0 : (t - tMin) / (tMax - tMin);

      if (!value1.length) {
        return value1 + (value2 - value1) * perc;
      }

      var i;
      var len = value1.length;
      var arr = createTypedArray('float32', len);

      for (i = 0; i < len; i += 1) {
        arr[i] = value1[i] + (value2[i] - value1[i]) * perc;
      }

      return arr;
    }

    function random(min, max) {
      if (max === undefined) {
        if (min === undefined) {
          min = 0;
          max = 1;
        } else {
          max = min;
          min = undefined;
        }
      }

      if (max.length) {
        var i;
        var len = max.length;

        if (!min) {
          min = createTypedArray('float32', len);
        }

        var arr = createTypedArray('float32', len);
        var rnd = BMMath.random();

        for (i = 0; i < len; i += 1) {
          arr[i] = min[i] + rnd * (max[i] - min[i]);
        }

        return arr;
      }

      if (min === undefined) {
        min = 0;
      }

      var rndm = BMMath.random();
      return min + rndm * (max - min);
    }

    function createPath(points, inTangents, outTangents, closed) {
      var i;
      var len = points.length;
      var path = shapePool.newElement();
      path.setPathData(!!closed, len);
      var arrPlaceholder = [0, 0];
      var inVertexPoint;
      var outVertexPoint;

      for (i = 0; i < len; i += 1) {
        inVertexPoint = inTangents && inTangents[i] ? inTangents[i] : arrPlaceholder;
        outVertexPoint = outTangents && outTangents[i] ? outTangents[i] : arrPlaceholder;
        path.setTripleAt(points[i][0], points[i][1], outVertexPoint[0] + points[i][0], outVertexPoint[1] + points[i][1], inVertexPoint[0] + points[i][0], inVertexPoint[1] + points[i][1], i, true);
      }

      return path;
    }

    function initiateExpression(elem, data, property) {
      // Bail out if we don't want expressions
      function noOp(_value) {
        return _value;
      }

      if (!elem.globalData.renderConfig.runExpressions) {
        return noOp;
      }

      var val = data.x;
      var needsVelocity = /velocity(?![\w\d])/.test(val);

      var _needsRandom = val.indexOf('random') !== -1;

      var elemType = elem.data.ty;
      var transform;
      var $bm_transform;
      var content;
      var effect;
      var thisProperty = property;
      thisProperty.valueAtTime = thisProperty.getValueAtTime;
      Object.defineProperty(thisProperty, 'value', {
        get: function get() {
          return thisProperty.v;
        }
      });
      elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
      elem.comp.displayStartTime = 0;
      var inPoint = elem.data.ip / elem.comp.globalData.frameRate;
      var outPoint = elem.data.op / elem.comp.globalData.frameRate;
      var width = elem.data.sw ? elem.data.sw : 0;
      var height = elem.data.sh ? elem.data.sh : 0;
      var name = elem.data.nm;
      var loopIn;
      var loop_in;
      var loopOut;
      var loop_out;
      var smooth;
      var toWorld;
      var fromWorld;
      var fromComp;
      var toComp;
      var fromCompToSurface;
      var position;
      var rotation;
      var anchorPoint;
      var scale;
      var thisLayer;
      var thisComp;
      var mask;
      var valueAtTime;
      var velocityAtTime;
      var scoped_bm_rt; // val = val.replace(/(\\?"|')((http)(s)?(:\/))?\/.*?(\\?"|')/g, "\"\""); // deter potential network calls

      var expression_function = eval('[function _expression_function(){' + val + ';scoped_bm_rt=$bm_rt}]')[0]; // eslint-disable-line no-eval

      var numKeys = property.kf ? data.k.length : 0;
      var active = !this.data || this.data.hd !== true;

      var wiggle = function wiggle(freq, amp) {
        var iWiggle;
        var j;
        var lenWiggle = this.pv.length ? this.pv.length : 1;
        var addedAmps = createTypedArray('float32', lenWiggle);
        freq = 5;
        var iterations = Math.floor(time * freq);
        iWiggle = 0;
        j = 0;

        while (iWiggle < iterations) {
          // var rnd = BMMath.random();
          for (j = 0; j < lenWiggle; j += 1) {
            addedAmps[j] += -amp + amp * 2 * BMMath.random(); // addedAmps[j] += -amp + amp*2*rnd;
          }

          iWiggle += 1;
        } // var rnd2 = BMMath.random();


        var periods = time * freq;
        var perc = periods - Math.floor(periods);
        var arr = createTypedArray('float32', lenWiggle);

        if (lenWiggle > 1) {
          for (j = 0; j < lenWiggle; j += 1) {
            arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp * 2 * BMMath.random()) * perc; // arr[j] = this.pv[j] + addedAmps[j] + (-amp + amp*2*rnd)*perc;
            // arr[i] = this.pv[i] + addedAmp + amp1*perc + amp2*(1-perc);
          }

          return arr;
        }

        return this.pv + addedAmps[0] + (-amp + amp * 2 * BMMath.random()) * perc;
      }.bind(this);

      if (thisProperty.loopIn) {
        loopIn = thisProperty.loopIn.bind(thisProperty);
        loop_in = loopIn;
      }

      if (thisProperty.loopOut) {
        loopOut = thisProperty.loopOut.bind(thisProperty);
        loop_out = loopOut;
      }

      if (thisProperty.smooth) {
        smooth = thisProperty.smooth.bind(thisProperty);
      }

      function loopInDuration(type, duration) {
        return loopIn(type, duration, true);
      }

      function loopOutDuration(type, duration) {
        return loopOut(type, duration, true);
      }

      if (this.getValueAtTime) {
        valueAtTime = this.getValueAtTime.bind(this);
      }

      if (this.getVelocityAtTime) {
        velocityAtTime = this.getVelocityAtTime.bind(this);
      }

      var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

      function lookAt(elem1, elem2) {
        var fVec = [elem2[0] - elem1[0], elem2[1] - elem1[1], elem2[2] - elem1[2]];
        var pitch = Math.atan2(fVec[0], Math.sqrt(fVec[1] * fVec[1] + fVec[2] * fVec[2])) / degToRads;
        var yaw = -Math.atan2(fVec[1], fVec[2]) / degToRads;
        return [yaw, pitch, 0];
      }

      function easeOut(t, tMin, tMax, val1, val2) {
        return applyEase(easeOutBez, t, tMin, tMax, val1, val2);
      }

      function easeIn(t, tMin, tMax, val1, val2) {
        return applyEase(easeInBez, t, tMin, tMax, val1, val2);
      }

      function ease(t, tMin, tMax, val1, val2) {
        return applyEase(easeInOutBez, t, tMin, tMax, val1, val2);
      }

      function applyEase(fn, t, tMin, tMax, val1, val2) {
        if (val1 === undefined) {
          val1 = tMin;
          val2 = tMax;
        } else {
          t = (t - tMin) / (tMax - tMin);
        }

        if (t > 1) {
          t = 1;
        } else if (t < 0) {
          t = 0;
        }

        var mult = fn(t);

        if ($bm_isInstanceOfArray(val1)) {
          var iKey;
          var lenKey = val1.length;
          var arr = createTypedArray('float32', lenKey);

          for (iKey = 0; iKey < lenKey; iKey += 1) {
            arr[iKey] = (val2[iKey] - val1[iKey]) * mult + val1[iKey];
          }

          return arr;
        }

        return (val2 - val1) * mult + val1;
      }

      function nearestKey(time) {
        var iKey;
        var lenKey = data.k.length;
        var index;
        var keyTime;

        if (!data.k.length || typeof data.k[0] === 'number') {
          index = 0;
          keyTime = 0;
        } else {
          index = -1;
          time *= elem.comp.globalData.frameRate;

          if (time < data.k[0].t) {
            index = 1;
            keyTime = data.k[0].t;
          } else {
            for (iKey = 0; iKey < lenKey - 1; iKey += 1) {
              if (time === data.k[iKey].t) {
                index = iKey + 1;
                keyTime = data.k[iKey].t;
                break;
              } else if (time > data.k[iKey].t && time < data.k[iKey + 1].t) {
                if (time - data.k[iKey].t > data.k[iKey + 1].t - time) {
                  index = iKey + 2;
                  keyTime = data.k[iKey + 1].t;
                } else {
                  index = iKey + 1;
                  keyTime = data.k[iKey].t;
                }

                break;
              }
            }

            if (index === -1) {
              index = iKey + 1;
              keyTime = data.k[iKey].t;
            }
          }
        }

        var obKey = {};
        obKey.index = index;
        obKey.time = keyTime / elem.comp.globalData.frameRate;
        return obKey;
      }

      function key(ind) {
        var obKey;
        var iKey;
        var lenKey;

        if (!data.k.length || typeof data.k[0] === 'number') {
          throw new Error('The property has no keyframe at index ' + ind);
        }

        ind -= 1;
        obKey = {
          time: data.k[ind].t / elem.comp.globalData.frameRate,
          value: []
        };
        var arr = Object.prototype.hasOwnProperty.call(data.k[ind], 's') ? data.k[ind].s : data.k[ind - 1].e;
        lenKey = arr.length;

        for (iKey = 0; iKey < lenKey; iKey += 1) {
          obKey[iKey] = arr[iKey];
          obKey.value[iKey] = arr[iKey];
        }

        return obKey;
      }

      function framesToTime(fr, fps) {
        if (!fps) {
          fps = elem.comp.globalData.frameRate;
        }

        return fr / fps;
      }

      function timeToFrames(t, fps) {
        if (!t && t !== 0) {
          t = time;
        }

        if (!fps) {
          fps = elem.comp.globalData.frameRate;
        }

        return t * fps;
      }

      function seedRandom(seed) {
        BMMath.seedrandom(randSeed + seed);
      }

      function sourceRectAtTime() {
        return elem.sourceRectAtTime();
      }

      function substring(init, end) {
        if (typeof value === 'string') {
          if (end === undefined) {
            return value.substring(init);
          }

          return value.substring(init, end);
        }

        return '';
      }

      function substr(init, end) {
        if (typeof value === 'string') {
          if (end === undefined) {
            return value.substr(init);
          }

          return value.substr(init, end);
        }

        return '';
      }

      function posterizeTime(framesPerSecond) {
        time = framesPerSecond === 0 ? 0 : Math.floor(time * framesPerSecond) / framesPerSecond;
        value = valueAtTime(time);
      }

      var time;
      var velocity;
      var value;
      var text;
      var textIndex;
      var textTotal;
      var selectorValue;
      var index = elem.data.ind;
      var hasParent = !!(elem.hierarchy && elem.hierarchy.length);
      var parent;
      var randSeed = Math.floor(Math.random() * 1000000);
      var globalData = elem.globalData;

      function executeExpression(_value) {
        // globalData.pushExpression();
        value = _value;

        if (this.frameExpressionId === elem.globalData.frameId && this.propType !== 'textSelector') {
          return value;
        }

        if (this.propType === 'textSelector') {
          textIndex = this.textIndex;
          textTotal = this.textTotal;
          selectorValue = this.selectorValue;
        }

        if (!thisLayer) {
          text = elem.layerInterface.text;
          thisLayer = elem.layerInterface;
          thisComp = elem.comp.compInterface;
          toWorld = thisLayer.toWorld.bind(thisLayer);
          fromWorld = thisLayer.fromWorld.bind(thisLayer);
          fromComp = thisLayer.fromComp.bind(thisLayer);
          toComp = thisLayer.toComp.bind(thisLayer);
          mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null;
          fromCompToSurface = fromComp;
        }

        if (!transform) {
          transform = elem.layerInterface('ADBE Transform Group');
          $bm_transform = transform;

          if (transform) {
            anchorPoint = transform.anchorPoint;
            /* position = transform.position;
                      rotation = transform.rotation;
                      scale = transform.scale; */
          }
        }

        if (elemType === 4 && !content) {
          content = thisLayer('ADBE Root Vectors Group');
        }

        if (!effect) {
          effect = thisLayer(4);
        }

        hasParent = !!(elem.hierarchy && elem.hierarchy.length);

        if (hasParent && !parent) {
          parent = elem.hierarchy[0].layerInterface;
        }

        time = this.comp.renderedFrame / this.comp.globalData.frameRate;

        if (_needsRandom) {
          seedRandom(randSeed + time);
        }

        if (needsVelocity) {
          velocity = velocityAtTime(time);
        }

        expression_function();
        this.frameExpressionId = elem.globalData.frameId; // TODO: Check if it's possible to return on ShapeInterface the .v value
        // Changed this to a ternary operation because Rollup failed compiling it correctly

        scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt;
        return scoped_bm_rt;
      } // Bundlers will see these as dead code and unless we reference them


      executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData];
      return executeExpression;
    }

    ob.initiateExpression = initiateExpression;
    ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath];
    return ob;
  }();

  var expressionHelpers = function () {
    function searchExpressions(elem, data, prop) {
      if (data.x) {
        prop.k = true;
        prop.x = true;
        prop.initiateExpression = ExpressionManager.initiateExpression;
        prop.effectsSequence.push(prop.initiateExpression(elem, data, prop).bind(prop));
      }
    }

    function getValueAtTime(frameNum) {
      frameNum *= this.elem.globalData.frameRate;
      frameNum -= this.offsetTime;

      if (frameNum !== this._cachingAtTime.lastFrame) {
        this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < frameNum ? this._cachingAtTime.lastIndex : 0;
        this._cachingAtTime.value = this.interpolateValue(frameNum, this._cachingAtTime);
        this._cachingAtTime.lastFrame = frameNum;
      }

      return this._cachingAtTime.value;
    }

    function getSpeedAtTime(frameNum) {
      var delta = -0.01;
      var v1 = this.getValueAtTime(frameNum);
      var v2 = this.getValueAtTime(frameNum + delta);
      var speed = 0;

      if (v1.length) {
        var i;

        for (i = 0; i < v1.length; i += 1) {
          speed += Math.pow(v2[i] - v1[i], 2);
        }

        speed = Math.sqrt(speed) * 100;
      } else {
        speed = 0;
      }

      return speed;
    }

    function getVelocityAtTime(frameNum) {
      if (this.vel !== undefined) {
        return this.vel;
      }

      var delta = -0.001; // frameNum += this.elem.data.st;

      var v1 = this.getValueAtTime(frameNum);
      var v2 = this.getValueAtTime(frameNum + delta);
      var velocity;

      if (v1.length) {
        velocity = createTypedArray('float32', v1.length);
        var i;

        for (i = 0; i < v1.length; i += 1) {
          // removing frameRate
          // if needed, don't add it here
          // velocity[i] = this.elem.globalData.frameRate*((v2[i] - v1[i])/delta);
          velocity[i] = (v2[i] - v1[i]) / delta;
        }
      } else {
        velocity = (v2 - v1) / delta;
      }

      return velocity;
    }

    function getStaticValueAtTime() {
      return this.pv;
    }

    function setGroupProperty(propertyGroup) {
      this.propertyGroup = propertyGroup;
    }

    return {
      searchExpressions: searchExpressions,
      getSpeedAtTime: getSpeedAtTime,
      getVelocityAtTime: getVelocityAtTime,
      getValueAtTime: getValueAtTime,
      getStaticValueAtTime: getStaticValueAtTime,
      setGroupProperty: setGroupProperty
    };
  }();

  function addPropertyDecorator() {
    function loopOut(type, duration, durationFlag) {
      if (!this.k || !this.keyframes) {
        return this.pv;
      }

      type = type ? type.toLowerCase() : '';
      var currentFrame = this.comp.renderedFrame;
      var keyframes = this.keyframes;
      var lastKeyFrame = keyframes[keyframes.length - 1].t;

      if (currentFrame <= lastKeyFrame) {
        return this.pv;
      }

      var cycleDuration;
      var firstKeyFrame;

      if (!durationFlag) {
        if (!duration || duration > keyframes.length - 1) {
          duration = keyframes.length - 1;
        }

        firstKeyFrame = keyframes[keyframes.length - 1 - duration].t;
        cycleDuration = lastKeyFrame - firstKeyFrame;
      } else {
        if (!duration) {
          cycleDuration = Math.max(0, lastKeyFrame - this.elem.data.ip);
        } else {
          cycleDuration = Math.abs(lastKeyFrame - this.elem.comp.globalData.frameRate * duration);
        }

        firstKeyFrame = lastKeyFrame - cycleDuration;
      }

      var i;
      var len;
      var ret;

      if (type === 'pingpong') {
        var iterations = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);

        if (iterations % 2 !== 0) {
          return this.getValueAtTime((cycleDuration - (currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line
        }
      } else if (type === 'offset') {
        var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
        var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
        var current = this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line

        var repeats = Math.floor((currentFrame - firstKeyFrame) / cycleDuration);

        if (this.pv.length) {
          ret = new Array(initV.length);
          len = ret.length;

          for (i = 0; i < len; i += 1) {
            ret[i] = (endV[i] - initV[i]) * repeats + current[i];
          }

          return ret;
        }

        return (endV - initV) * repeats + current;
      } else if (type === 'continue') {
        var lastValue = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
        var nextLastValue = this.getValueAtTime((lastKeyFrame - 0.001) / this.comp.globalData.frameRate, 0);

        if (this.pv.length) {
          ret = new Array(lastValue.length);
          len = ret.length;

          for (i = 0; i < len; i += 1) {
            ret[i] = lastValue[i] + (lastValue[i] - nextLastValue[i]) * ((currentFrame - lastKeyFrame) / this.comp.globalData.frameRate) / 0.0005; // eslint-disable-line
          }

          return ret;
        }

        return lastValue + (lastValue - nextLastValue) * ((currentFrame - lastKeyFrame) / 0.001);
      }

      return this.getValueAtTime(((currentFrame - firstKeyFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line
    }

    function loopIn(type, duration, durationFlag) {
      if (!this.k) {
        return this.pv;
      }

      type = type ? type.toLowerCase() : '';
      var currentFrame = this.comp.renderedFrame;
      var keyframes = this.keyframes;
      var firstKeyFrame = keyframes[0].t;

      if (currentFrame >= firstKeyFrame) {
        return this.pv;
      }

      var cycleDuration;
      var lastKeyFrame;

      if (!durationFlag) {
        if (!duration || duration > keyframes.length - 1) {
          duration = keyframes.length - 1;
        }

        lastKeyFrame = keyframes[duration].t;
        cycleDuration = lastKeyFrame - firstKeyFrame;
      } else {
        if (!duration) {
          cycleDuration = Math.max(0, this.elem.data.op - firstKeyFrame);
        } else {
          cycleDuration = Math.abs(this.elem.comp.globalData.frameRate * duration);
        }

        lastKeyFrame = firstKeyFrame + cycleDuration;
      }

      var i;
      var len;
      var ret;

      if (type === 'pingpong') {
        var iterations = Math.floor((firstKeyFrame - currentFrame) / cycleDuration);

        if (iterations % 2 === 0) {
          return this.getValueAtTime(((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0); // eslint-disable-line
        }
      } else if (type === 'offset') {
        var initV = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
        var endV = this.getValueAtTime(lastKeyFrame / this.comp.globalData.frameRate, 0);
        var current = this.getValueAtTime((cycleDuration - (firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame) / this.comp.globalData.frameRate, 0);
        var repeats = Math.floor((firstKeyFrame - currentFrame) / cycleDuration) + 1;

        if (this.pv.length) {
          ret = new Array(initV.length);
          len = ret.length;

          for (i = 0; i < len; i += 1) {
            ret[i] = current[i] - (endV[i] - initV[i]) * repeats;
          }

          return ret;
        }

        return current - (endV - initV) * repeats;
      } else if (type === 'continue') {
        var firstValue = this.getValueAtTime(firstKeyFrame / this.comp.globalData.frameRate, 0);
        var nextFirstValue = this.getValueAtTime((firstKeyFrame + 0.001) / this.comp.globalData.frameRate, 0);

        if (this.pv.length) {
          ret = new Array(firstValue.length);
          len = ret.length;

          for (i = 0; i < len; i += 1) {
            ret[i] = firstValue[i] + (firstValue[i] - nextFirstValue[i]) * (firstKeyFrame - currentFrame) / 0.001;
          }

          return ret;
        }

        return firstValue + (firstValue - nextFirstValue) * (firstKeyFrame - currentFrame) / 0.001;
      }

      return this.getValueAtTime((cycleDuration - ((firstKeyFrame - currentFrame) % cycleDuration + firstKeyFrame)) / this.comp.globalData.frameRate, 0); // eslint-disable-line
    }

    function smooth(width, samples) {
      if (!this.k) {
        return this.pv;
      }

      width = (width || 0.4) * 0.5;
      samples = Math.floor(samples || 5);

      if (samples <= 1) {
        return this.pv;
      }

      var currentTime = this.comp.renderedFrame / this.comp.globalData.frameRate;
      var initFrame = currentTime - width;
      var endFrame = currentTime + width;
      var sampleFrequency = samples > 1 ? (endFrame - initFrame) / (samples - 1) : 1;
      var i = 0;
      var j = 0;
      var value;

      if (this.pv.length) {
        value = createTypedArray('float32', this.pv.length);
      } else {
        value = 0;
      }

      var sampleValue;

      while (i < samples) {
        sampleValue = this.getValueAtTime(initFrame + i * sampleFrequency);

        if (this.pv.length) {
          for (j = 0; j < this.pv.length; j += 1) {
            value[j] += sampleValue[j];
          }
        } else {
          value += sampleValue;
        }

        i += 1;
      }

      if (this.pv.length) {
        for (j = 0; j < this.pv.length; j += 1) {
          value[j] /= samples;
        }
      } else {
        value /= samples;
      }

      return value;
    }

    function getTransformValueAtTime(time) {
      if (!this._transformCachingAtTime) {
        this._transformCachingAtTime = {
          v: new Matrix()
        };
      } /// /


      var matrix = this._transformCachingAtTime.v;
      matrix.cloneFromProps(this.pre.props);

      if (this.appliedTransformations < 1) {
        var anchor = this.a.getValueAtTime(time);
        matrix.translate(-anchor[0] * this.a.mult, -anchor[1] * this.a.mult, anchor[2] * this.a.mult);
      }

      if (this.appliedTransformations < 2) {
        var scale = this.s.getValueAtTime(time);
        matrix.scale(scale[0] * this.s.mult, scale[1] * this.s.mult, scale[2] * this.s.mult);
      }

      if (this.sk && this.appliedTransformations < 3) {
        var skew = this.sk.getValueAtTime(time);
        var skewAxis = this.sa.getValueAtTime(time);
        matrix.skewFromAxis(-skew * this.sk.mult, skewAxis * this.sa.mult);
      }

      if (this.r && this.appliedTransformations < 4) {
        var rotation = this.r.getValueAtTime(time);
        matrix.rotate(-rotation * this.r.mult);
      } else if (!this.r && this.appliedTransformations < 4) {
        var rotationZ = this.rz.getValueAtTime(time);
        var rotationY = this.ry.getValueAtTime(time);
        var rotationX = this.rx.getValueAtTime(time);
        var orientation = this.or.getValueAtTime(time);
        matrix.rotateZ(-rotationZ * this.rz.mult).rotateY(rotationY * this.ry.mult).rotateX(rotationX * this.rx.mult).rotateZ(-orientation[2] * this.or.mult).rotateY(orientation[1] * this.or.mult).rotateX(orientation[0] * this.or.mult);
      }

      if (this.data.p && this.data.p.s) {
        var positionX = this.px.getValueAtTime(time);
        var positionY = this.py.getValueAtTime(time);

        if (this.data.p.z) {
          var positionZ = this.pz.getValueAtTime(time);
          matrix.translate(positionX * this.px.mult, positionY * this.py.mult, -positionZ * this.pz.mult);
        } else {
          matrix.translate(positionX * this.px.mult, positionY * this.py.mult, 0);
        }
      } else {
        var position = this.p.getValueAtTime(time);
        matrix.translate(position[0] * this.p.mult, position[1] * this.p.mult, -position[2] * this.p.mult);
      }

      return matrix; /// /
    }

    function getTransformStaticValueAtTime() {
      return this.v.clone(new Matrix());
    }

    var getTransformProperty = TransformPropertyFactory.getTransformProperty;

    TransformPropertyFactory.getTransformProperty = function (elem, data, container) {
      var prop = getTransformProperty(elem, data, container);

      if (prop.dynamicProperties.length) {
        prop.getValueAtTime = getTransformValueAtTime.bind(prop);
      } else {
        prop.getValueAtTime = getTransformStaticValueAtTime.bind(prop);
      }

      prop.setGroupProperty = expressionHelpers.setGroupProperty;
      return prop;
    };

    var propertyGetProp = PropertyFactory.getProp;

    PropertyFactory.getProp = function (elem, data, type, mult, container) {
      var prop = propertyGetProp(elem, data, type, mult, container); // prop.getVelocityAtTime = getVelocityAtTime;
      // prop.loopOut = loopOut;
      // prop.loopIn = loopIn;

      if (prop.kf) {
        prop.getValueAtTime = expressionHelpers.getValueAtTime.bind(prop);
      } else {
        prop.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(prop);
      }

      prop.setGroupProperty = expressionHelpers.setGroupProperty;
      prop.loopOut = loopOut;
      prop.loopIn = loopIn;
      prop.smooth = smooth;
      prop.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(prop);
      prop.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(prop);
      prop.numKeys = data.a === 1 ? data.k.length : 0;
      prop.propertyIndex = data.ix;
      var value = 0;

      if (type !== 0) {
        value = createTypedArray('float32', data.a === 1 ? data.k[0].s.length : data.k.length);
      }

      prop._cachingAtTime = {
        lastFrame: initialDefaultFrame,
        lastIndex: 0,
        value: value
      };
      expressionHelpers.searchExpressions(elem, data, prop);

      if (prop.k) {
        container.addDynamicProperty(prop);
      }

      return prop;
    };

    function getShapeValueAtTime(frameNum) {
      // For now this caching object is created only when needed instead of creating it when the shape is initialized.
      if (!this._cachingAtTime) {
        this._cachingAtTime = {
          shapeValue: shapePool.clone(this.pv),
          lastIndex: 0,
          lastTime: initialDefaultFrame
        };
      }

      frameNum *= this.elem.globalData.frameRate;
      frameNum -= this.offsetTime;

      if (frameNum !== this._cachingAtTime.lastTime) {
        this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < frameNum ? this._caching.lastIndex : 0;
        this._cachingAtTime.lastTime = frameNum;
        this.interpolateShape(frameNum, this._cachingAtTime.shapeValue, this._cachingAtTime);
      }

      return this._cachingAtTime.shapeValue;
    }

    var ShapePropertyConstructorFunction = ShapePropertyFactory.getConstructorFunction();
    var KeyframedShapePropertyConstructorFunction = ShapePropertyFactory.getKeyframedConstructorFunction();

    function ShapeExpressions() {}

    ShapeExpressions.prototype = {
      vertices: function vertices(prop, time) {
        if (this.k) {
          this.getValue();
        }

        var shapePath = this.v;

        if (time !== undefined) {
          shapePath = this.getValueAtTime(time, 0);
        }

        var i;
        var len = shapePath._length;
        var vertices = shapePath[prop];
        var points = shapePath.v;
        var arr = createSizedArray(len);

        for (i = 0; i < len; i += 1) {
          if (prop === 'i' || prop === 'o') {
            arr[i] = [vertices[i][0] - points[i][0], vertices[i][1] - points[i][1]];
          } else {
            arr[i] = [vertices[i][0], vertices[i][1]];
          }
        }

        return arr;
      },
      points: function points(time) {
        return this.vertices('v', time);
      },
      inTangents: function inTangents(time) {
        return this.vertices('i', time);
      },
      outTangents: function outTangents(time) {
        return this.vertices('o', time);
      },
      isClosed: function isClosed() {
        return this.v.c;
      },
      pointOnPath: function pointOnPath(perc, time) {
        var shapePath = this.v;

        if (time !== undefined) {
          shapePath = this.getValueAtTime(time, 0);
        }

        if (!this._segmentsLength) {
          this._segmentsLength = bez.getSegmentsLength(shapePath);
        }

        var segmentsLength = this._segmentsLength;
        var lengths = segmentsLength.lengths;
        var lengthPos = segmentsLength.totalLength * perc;
        var i = 0;
        var len = lengths.length;
        var accumulatedLength = 0;
        var pt;

        while (i < len) {
          if (accumulatedLength + lengths[i].addedLength > lengthPos) {
            var initIndex = i;
            var endIndex = shapePath.c && i === len - 1 ? 0 : i + 1;
            var segmentPerc = (lengthPos - accumulatedLength) / lengths[i].addedLength;
            pt = bez.getPointInSegment(shapePath.v[initIndex], shapePath.v[endIndex], shapePath.o[initIndex], shapePath.i[endIndex], segmentPerc, lengths[i]);
            break;
          } else {
            accumulatedLength += lengths[i].addedLength;
          }

          i += 1;
        }

        if (!pt) {
          pt = shapePath.c ? [shapePath.v[0][0], shapePath.v[0][1]] : [shapePath.v[shapePath._length - 1][0], shapePath.v[shapePath._length - 1][1]];
        }

        return pt;
      },
      vectorOnPath: function vectorOnPath(perc, time, vectorType) {
        // perc doesn't use triple equality because it can be a Number object as well as a primitive.
        if (perc == 1) {
          // eslint-disable-line eqeqeq
          perc = this.v.c;
        } else if (perc == 0) {
          // eslint-disable-line eqeqeq
          perc = 0.999;
        }

        var pt1 = this.pointOnPath(perc, time);
        var pt2 = this.pointOnPath(perc + 0.001, time);
        var xLength = pt2[0] - pt1[0];
        var yLength = pt2[1] - pt1[1];
        var magnitude = Math.sqrt(Math.pow(xLength, 2) + Math.pow(yLength, 2));

        if (magnitude === 0) {
          return [0, 0];
        }

        var unitVector = vectorType === 'tangent' ? [xLength / magnitude, yLength / magnitude] : [-yLength / magnitude, xLength / magnitude];
        return unitVector;
      },
      tangentOnPath: function tangentOnPath(perc, time) {
        return this.vectorOnPath(perc, time, 'tangent');
      },
      normalOnPath: function normalOnPath(perc, time) {
        return this.vectorOnPath(perc, time, 'normal');
      },
      setGroupProperty: expressionHelpers.setGroupProperty,
      getValueAtTime: expressionHelpers.getStaticValueAtTime
    };
    extendPrototype([ShapeExpressions], ShapePropertyConstructorFunction);
    extendPrototype([ShapeExpressions], KeyframedShapePropertyConstructorFunction);
    KeyframedShapePropertyConstructorFunction.prototype.getValueAtTime = getShapeValueAtTime;
    KeyframedShapePropertyConstructorFunction.prototype.initiateExpression = ExpressionManager.initiateExpression;
    var propertyGetShapeProp = ShapePropertyFactory.getShapeProp;

    ShapePropertyFactory.getShapeProp = function (elem, data, type, arr, trims) {
      var prop = propertyGetShapeProp(elem, data, type, arr, trims);
      prop.propertyIndex = data.ix;
      prop.lock = false;

      if (type === 3) {
        expressionHelpers.searchExpressions(elem, data.pt, prop);
      } else if (type === 4) {
        expressionHelpers.searchExpressions(elem, data.ks, prop);
      }

      if (prop.k) {
        elem.addDynamicProperty(prop);
      }

      return prop;
    };
  }

  function initialize$1() {
    addPropertyDecorator();
  }

  function addDecorator() {
    function searchExpressions() {
      if (this.data.d.x) {
        this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this);
        this.addEffect(this.getExpressionValue.bind(this));
        return true;
      }

      return null;
    }

    TextProperty.prototype.getExpressionValue = function (currentValue, text) {
      var newValue = this.calculateExpression(text);

      if (currentValue.t !== newValue) {
        var newData = {};
        this.copyData(newData, currentValue);
        newData.t = newValue.toString();
        newData.__complete = false;
        return newData;
      }

      return currentValue;
    };

    TextProperty.prototype.searchProperty = function () {
      var isKeyframed = this.searchKeyframes();
      var hasExpressions = this.searchExpressions();
      this.kf = isKeyframed || hasExpressions;
      return this.kf;
    };

    TextProperty.prototype.searchExpressions = searchExpressions;
  }

  function initialize() {
    addDecorator();
  }

  function SVGComposableEffect() {}

  SVGComposableEffect.prototype = {
    createMergeNode: function createMergeNode(resultId, ins) {
      var feMerge = createNS('feMerge');
      feMerge.setAttribute('result', resultId);
      var feMergeNode;
      var i;

      for (i = 0; i < ins.length; i += 1) {
        feMergeNode = createNS('feMergeNode');
        feMergeNode.setAttribute('in', ins[i]);
        feMerge.appendChild(feMergeNode);
        feMerge.appendChild(feMergeNode);
      }

      return feMerge;
    }
  };

  var linearFilterValue = '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0';

  function SVGTintFilter(filter, filterManager, elem, id, source) {
    this.filterManager = filterManager;
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type', 'matrix');
    feColorMatrix.setAttribute('color-interpolation-filters', 'linearRGB');
    feColorMatrix.setAttribute('values', linearFilterValue + ' 1 0');
    this.linearFilter = feColorMatrix;
    feColorMatrix.setAttribute('result', id + '_tint_1');
    filter.appendChild(feColorMatrix);
    feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type', 'matrix');
    feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
    feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result', id + '_tint_2');
    filter.appendChild(feColorMatrix);
    this.matrixFilter = feColorMatrix;
    var feMerge = this.createMergeNode(id, [source, id + '_tint_1', id + '_tint_2']);
    filter.appendChild(feMerge);
  }

  extendPrototype([SVGComposableEffect], SVGTintFilter);

  SVGTintFilter.prototype.renderFrame = function (forceRender) {
    if (forceRender || this.filterManager._mdf) {
      var colorBlack = this.filterManager.effectElements[0].p.v;
      var colorWhite = this.filterManager.effectElements[1].p.v;
      var opacity = this.filterManager.effectElements[2].p.v / 100;
      this.linearFilter.setAttribute('values', linearFilterValue + ' ' + opacity + ' 0');
      this.matrixFilter.setAttribute('values', colorWhite[0] - colorBlack[0] + ' 0 0 0 ' + colorBlack[0] + ' ' + (colorWhite[1] - colorBlack[1]) + ' 0 0 0 ' + colorBlack[1] + ' ' + (colorWhite[2] - colorBlack[2]) + ' 0 0 0 ' + colorBlack[2] + ' 0 0 0 1 0');
    }
  };

  function SVGFillFilter(filter, filterManager, elem, id) {
    this.filterManager = filterManager;
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type', 'matrix');
    feColorMatrix.setAttribute('color-interpolation-filters', 'sRGB');
    feColorMatrix.setAttribute('values', '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0');
    feColorMatrix.setAttribute('result', id);
    filter.appendChild(feColorMatrix);
    this.matrixFilter = feColorMatrix;
  }

  SVGFillFilter.prototype.renderFrame = function (forceRender) {
    if (forceRender || this.filterManager._mdf) {
      var color = this.filterManager.effectElements[2].p.v;
      var opacity = this.filterManager.effectElements[6].p.v;
      this.matrixFilter.setAttribute('values', '0 0 0 0 ' + color[0] + ' 0 0 0 0 ' + color[1] + ' 0 0 0 0 ' + color[2] + ' 0 0 0 ' + opacity + ' 0');
    }
  };

  function SVGStrokeEffect(fil, filterManager, elem) {
    this.initialized = false;
    this.filterManager = filterManager;
    this.elem = elem;
    this.paths = [];
  }

  SVGStrokeEffect.prototype.initialize = function () {
    var elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;
    var path;
    var groupPath;
    var i;
    var len;

    if (this.filterManager.effectElements[1].p.v === 1) {
      len = this.elem.maskManager.masksProperties.length;
      i = 0;
    } else {
      i = this.filterManager.effectElements[0].p.v - 1;
      len = i + 1;
    }

    groupPath = createNS('g');
    groupPath.setAttribute('fill', 'none');
    groupPath.setAttribute('stroke-linecap', 'round');
    groupPath.setAttribute('stroke-dashoffset', 1);

    for (i; i < len; i += 1) {
      path = createNS('path');
      groupPath.appendChild(path);
      this.paths.push({
        p: path,
        m: i
      });
    }

    if (this.filterManager.effectElements[10].p.v === 3) {
      var mask = createNS('mask');
      var id = createElementID();
      mask.setAttribute('id', id);
      mask.setAttribute('mask-type', 'alpha');
      mask.appendChild(groupPath);
      this.elem.globalData.defs.appendChild(mask);
      var g = createNS('g');
      g.setAttribute('mask', 'url(' + getLocationHref() + '#' + id + ')');

      while (elemChildren[0]) {
        g.appendChild(elemChildren[0]);
      }

      this.elem.layerElement.appendChild(g);
      this.masker = mask;
      groupPath.setAttribute('stroke', '#fff');
    } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
      if (this.filterManager.effectElements[10].p.v === 2) {
        elemChildren = this.elem.layerElement.children || this.elem.layerElement.childNodes;

        while (elemChildren.length) {
          this.elem.layerElement.removeChild(elemChildren[0]);
        }
      }

      this.elem.layerElement.appendChild(groupPath);
      this.elem.layerElement.removeAttribute('mask');
      groupPath.setAttribute('stroke', '#fff');
    }

    this.initialized = true;
    this.pathMasker = groupPath;
  };

  SVGStrokeEffect.prototype.renderFrame = function (forceRender) {
    if (!this.initialized) {
      this.initialize();
    }

    var i;
    var len = this.paths.length;
    var mask;
    var path;

    for (i = 0; i < len; i += 1) {
      if (this.paths[i].m !== -1) {
        mask = this.elem.maskManager.viewData[this.paths[i].m];
        path = this.paths[i].p;

        if (forceRender || this.filterManager._mdf || mask.prop._mdf) {
          path.setAttribute('d', mask.lastPath);
        }

        if (forceRender || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || mask.prop._mdf) {
          var dasharrayValue;

          if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
            var s = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
            var e = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01;
            var l = path.getTotalLength();
            dasharrayValue = '0 0 0 ' + l * s + ' ';
            var lineLength = l * (e - s);
            var segment = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
            var units = Math.floor(lineLength / segment);
            var j;

            for (j = 0; j < units; j += 1) {
              dasharrayValue += '1 ' + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + ' ';
            }

            dasharrayValue += '0 ' + l * 10 + ' 0 0';
          } else {
            dasharrayValue = '1 ' + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
          }

          path.setAttribute('stroke-dasharray', dasharrayValue);
        }
      }
    }

    if (forceRender || this.filterManager.effectElements[4].p._mdf) {
      this.pathMasker.setAttribute('stroke-width', this.filterManager.effectElements[4].p.v * 2);
    }

    if (forceRender || this.filterManager.effectElements[6].p._mdf) {
      this.pathMasker.setAttribute('opacity', this.filterManager.effectElements[6].p.v);
    }

    if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
      if (forceRender || this.filterManager.effectElements[3].p._mdf) {
        var color = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute('stroke', 'rgb(' + bmFloor(color[0] * 255) + ',' + bmFloor(color[1] * 255) + ',' + bmFloor(color[2] * 255) + ')');
      }
    }
  };

  function SVGTritoneFilter(filter, filterManager, elem, id) {
    this.filterManager = filterManager;
    var feColorMatrix = createNS('feColorMatrix');
    feColorMatrix.setAttribute('type', 'matrix');
    feColorMatrix.setAttribute('color-interpolation-filters', 'linearRGB');
    feColorMatrix.setAttribute('values', '0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0');
    filter.appendChild(feColorMatrix);
    var feComponentTransfer = createNS('feComponentTransfer');
    feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
    feComponentTransfer.setAttribute('result', id);
    this.matrixFilter = feComponentTransfer;
    var feFuncR = createNS('feFuncR');
    feFuncR.setAttribute('type', 'table');
    feComponentTransfer.appendChild(feFuncR);
    this.feFuncR = feFuncR;
    var feFuncG = createNS('feFuncG');
    feFuncG.setAttribute('type', 'table');
    feComponentTransfer.appendChild(feFuncG);
    this.feFuncG = feFuncG;
    var feFuncB = createNS('feFuncB');
    feFuncB.setAttribute('type', 'table');
    feComponentTransfer.appendChild(feFuncB);
    this.feFuncB = feFuncB;
    filter.appendChild(feComponentTransfer);
  }

  SVGTritoneFilter.prototype.renderFrame = function (forceRender) {
    if (forceRender || this.filterManager._mdf) {
      var color1 = this.filterManager.effectElements[0].p.v;
      var color2 = this.filterManager.effectElements[1].p.v;
      var color3 = this.filterManager.effectElements[2].p.v;
      var tableR = color3[0] + ' ' + color2[0] + ' ' + color1[0];
      var tableG = color3[1] + ' ' + color2[1] + ' ' + color1[1];
      var tableB = color3[2] + ' ' + color2[2] + ' ' + color1[2];
      this.feFuncR.setAttribute('tableValues', tableR);
      this.feFuncG.setAttribute('tableValues', tableG);
      this.feFuncB.setAttribute('tableValues', tableB);
    }
  };

  function SVGProLevelsFilter(filter, filterManager, elem, id) {
    this.filterManager = filterManager;
    var effectElements = this.filterManager.effectElements;
    var feComponentTransfer = createNS('feComponentTransfer'); // Red

    if (effectElements[10].p.k || effectElements[10].p.v !== 0 || effectElements[11].p.k || effectElements[11].p.v !== 1 || effectElements[12].p.k || effectElements[12].p.v !== 1 || effectElements[13].p.k || effectElements[13].p.v !== 0 || effectElements[14].p.k || effectElements[14].p.v !== 1) {
      this.feFuncR = this.createFeFunc('feFuncR', feComponentTransfer);
    } // Green


    if (effectElements[17].p.k || effectElements[17].p.v !== 0 || effectElements[18].p.k || effectElements[18].p.v !== 1 || effectElements[19].p.k || effectElements[19].p.v !== 1 || effectElements[20].p.k || effectElements[20].p.v !== 0 || effectElements[21].p.k || effectElements[21].p.v !== 1) {
      this.feFuncG = this.createFeFunc('feFuncG', feComponentTransfer);
    } // Blue


    if (effectElements[24].p.k || effectElements[24].p.v !== 0 || effectElements[25].p.k || effectElements[25].p.v !== 1 || effectElements[26].p.k || effectElements[26].p.v !== 1 || effectElements[27].p.k || effectElements[27].p.v !== 0 || effectElements[28].p.k || effectElements[28].p.v !== 1) {
      this.feFuncB = this.createFeFunc('feFuncB', feComponentTransfer);
    } // Alpha


    if (effectElements[31].p.k || effectElements[31].p.v !== 0 || effectElements[32].p.k || effectElements[32].p.v !== 1 || effectElements[33].p.k || effectElements[33].p.v !== 1 || effectElements[34].p.k || effectElements[34].p.v !== 0 || effectElements[35].p.k || effectElements[35].p.v !== 1) {
      this.feFuncA = this.createFeFunc('feFuncA', feComponentTransfer);
    } // RGB


    if (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) {
      feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
      filter.appendChild(feComponentTransfer);
    }

    if (effectElements[3].p.k || effectElements[3].p.v !== 0 || effectElements[4].p.k || effectElements[4].p.v !== 1 || effectElements[5].p.k || effectElements[5].p.v !== 1 || effectElements[6].p.k || effectElements[6].p.v !== 0 || effectElements[7].p.k || effectElements[7].p.v !== 1) {
      feComponentTransfer = createNS('feComponentTransfer');
      feComponentTransfer.setAttribute('color-interpolation-filters', 'sRGB');
      feComponentTransfer.setAttribute('result', id);
      filter.appendChild(feComponentTransfer);
      this.feFuncRComposed = this.createFeFunc('feFuncR', feComponentTransfer);
      this.feFuncGComposed = this.createFeFunc('feFuncG', feComponentTransfer);
      this.feFuncBComposed = this.createFeFunc('feFuncB', feComponentTransfer);
    }
  }

  SVGProLevelsFilter.prototype.createFeFunc = function (type, feComponentTransfer) {
    var feFunc = createNS(type);
    feFunc.setAttribute('type', 'table');
    feComponentTransfer.appendChild(feFunc);
    return feFunc;
  };

  SVGProLevelsFilter.prototype.getTableValue = function (inputBlack, inputWhite, gamma, outputBlack, outputWhite) {
    var cnt = 0;
    var segments = 256;
    var perc;
    var min = Math.min(inputBlack, inputWhite);
    var max = Math.max(inputBlack, inputWhite);
    var table = Array.call(null, {
      length: segments
    });
    var colorValue;
    var pos = 0;
    var outputDelta = outputWhite - outputBlack;
    var inputDelta = inputWhite - inputBlack;

    while (cnt <= 256) {
      perc = cnt / 256;

      if (perc <= min) {
        colorValue = inputDelta < 0 ? outputWhite : outputBlack;
      } else if (perc >= max) {
        colorValue = inputDelta < 0 ? outputBlack : outputWhite;
      } else {
        colorValue = outputBlack + outputDelta * Math.pow((perc - inputBlack) / inputDelta, 1 / gamma);
      }

      table[pos] = colorValue;
      pos += 1;
      cnt += 256 / (segments - 1);
    }

    return table.join(' ');
  };

  SVGProLevelsFilter.prototype.renderFrame = function (forceRender) {
    if (forceRender || this.filterManager._mdf) {
      var val;
      var effectElements = this.filterManager.effectElements;

      if (this.feFuncRComposed && (forceRender || effectElements[3].p._mdf || effectElements[4].p._mdf || effectElements[5].p._mdf || effectElements[6].p._mdf || effectElements[7].p._mdf)) {
        val = this.getTableValue(effectElements[3].p.v, effectElements[4].p.v, effectElements[5].p.v, effectElements[6].p.v, effectElements[7].p.v);
        this.feFuncRComposed.setAttribute('tableValues', val);
        this.feFuncGComposed.setAttribute('tableValues', val);
        this.feFuncBComposed.setAttribute('tableValues', val);
      }

      if (this.feFuncR && (forceRender || effectElements[10].p._mdf || effectElements[11].p._mdf || effectElements[12].p._mdf || effectElements[13].p._mdf || effectElements[14].p._mdf)) {
        val = this.getTableValue(effectElements[10].p.v, effectElements[11].p.v, effectElements[12].p.v, effectElements[13].p.v, effectElements[14].p.v);
        this.feFuncR.setAttribute('tableValues', val);
      }

      if (this.feFuncG && (forceRender || effectElements[17].p._mdf || effectElements[18].p._mdf || effectElements[19].p._mdf || effectElements[20].p._mdf || effectElements[21].p._mdf)) {
        val = this.getTableValue(effectElements[17].p.v, effectElements[18].p.v, effectElements[19].p.v, effectElements[20].p.v, effectElements[21].p.v);
        this.feFuncG.setAttribute('tableValues', val);
      }

      if (this.feFuncB && (forceRender || effectElements[24].p._mdf || effectElements[25].p._mdf || effectElements[26].p._mdf || effectElements[27].p._mdf || effectElements[28].p._mdf)) {
        val = this.getTableValue(effectElements[24].p.v, effectElements[25].p.v, effectElements[26].p.v, effectElements[27].p.v, effectElements[28].p.v);
        this.feFuncB.setAttribute('tableValues', val);
      }

      if (this.feFuncA && (forceRender || effectElements[31].p._mdf || effectElements[32].p._mdf || effectElements[33].p._mdf || effectElements[34].p._mdf || effectElements[35].p._mdf)) {
        val = this.getTableValue(effectElements[31].p.v, effectElements[32].p.v, effectElements[33].p.v, effectElements[34].p.v, effectElements[35].p.v);
        this.feFuncA.setAttribute('tableValues', val);
      }
    }
  };

  function SVGDropShadowEffect(filter, filterManager, elem, id, source) {
    var globalFilterSize = filterManager.container.globalData.renderConfig.filterSize;
    var filterSize = filterManager.data.fs || globalFilterSize;
    filter.setAttribute('x', filterSize.x || globalFilterSize.x);
    filter.setAttribute('y', filterSize.y || globalFilterSize.y);
    filter.setAttribute('width', filterSize.width || globalFilterSize.width);
    filter.setAttribute('height', filterSize.height || globalFilterSize.height);
    this.filterManager = filterManager;
    var feGaussianBlur = createNS('feGaussianBlur');
    feGaussianBlur.setAttribute('in', 'SourceAlpha');
    feGaussianBlur.setAttribute('result', id + '_drop_shadow_1');
    feGaussianBlur.setAttribute('stdDeviation', '0');
    this.feGaussianBlur = feGaussianBlur;
    filter.appendChild(feGaussianBlur);
    var feOffset = createNS('feOffset');
    feOffset.setAttribute('dx', '25');
    feOffset.setAttribute('dy', '0');
    feOffset.setAttribute('in', id + '_drop_shadow_1');
    feOffset.setAttribute('result', id + '_drop_shadow_2');
    this.feOffset = feOffset;
    filter.appendChild(feOffset);
    var feFlood = createNS('feFlood');
    feFlood.setAttribute('flood-color', '#00ff00');
    feFlood.setAttribute('flood-opacity', '1');
    feFlood.setAttribute('result', id + '_drop_shadow_3');
    this.feFlood = feFlood;
    filter.appendChild(feFlood);
    var feComposite = createNS('feComposite');
    feComposite.setAttribute('in', id + '_drop_shadow_3');
    feComposite.setAttribute('in2', id + '_drop_shadow_2');
    feComposite.setAttribute('operator', 'in');
    feComposite.setAttribute('result', id + '_drop_shadow_4');
    filter.appendChild(feComposite);
    var feMerge = this.createMergeNode(id, [id + '_drop_shadow_4', source]);
    filter.appendChild(feMerge); //
  }

  extendPrototype([SVGComposableEffect], SVGDropShadowEffect);

  SVGDropShadowEffect.prototype.renderFrame = function (forceRender) {
    if (forceRender || this.filterManager._mdf) {
      if (forceRender || this.filterManager.effectElements[4].p._mdf) {
        this.feGaussianBlur.setAttribute('stdDeviation', this.filterManager.effectElements[4].p.v / 4);
      }

      if (forceRender || this.filterManager.effectElements[0].p._mdf) {
        var col = this.filterManager.effectElements[0].p.v;
        this.feFlood.setAttribute('flood-color', rgbToHex(Math.round(col[0] * 255), Math.round(col[1] * 255), Math.round(col[2] * 255)));
      }

      if (forceRender || this.filterManager.effectElements[1].p._mdf) {
        this.feFlood.setAttribute('flood-opacity', this.filterManager.effectElements[1].p.v / 255);
      }

      if (forceRender || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
        var distance = this.filterManager.effectElements[3].p.v;
        var angle = (this.filterManager.effectElements[2].p.v - 90) * degToRads;
        var x = distance * Math.cos(angle);
        var y = distance * Math.sin(angle);
        this.feOffset.setAttribute('dx', x);
        this.feOffset.setAttribute('dy', y);
      }
    }
  };

  var _svgMatteSymbols = [];

  function SVGMatte3Effect(filterElem, filterManager, elem) {
    this.initialized = false;
    this.filterManager = filterManager;
    this.filterElem = filterElem;
    this.elem = elem;
    elem.matteElement = createNS('g');
    elem.matteElement.appendChild(elem.layerElement);
    elem.matteElement.appendChild(elem.transformedElement);
    elem.baseElement = elem.matteElement;
  }

  SVGMatte3Effect.prototype.findSymbol = function (mask) {
    var i = 0;
    var len = _svgMatteSymbols.length;

    while (i < len) {
      if (_svgMatteSymbols[i] === mask) {
        return _svgMatteSymbols[i];
      }

      i += 1;
    }

    return null;
  };

  SVGMatte3Effect.prototype.replaceInParent = function (mask, symbolId) {
    var parentNode = mask.layerElement.parentNode;

    if (!parentNode) {
      return;
    }

    var children = parentNode.children;
    var i = 0;
    var len = children.length;

    while (i < len) {
      if (children[i] === mask.layerElement) {
        break;
      }

      i += 1;
    }

    var nextChild;

    if (i <= len - 2) {
      nextChild = children[i + 1];
    }

    var useElem = createNS('use');
    useElem.setAttribute('href', '#' + symbolId);

    if (nextChild) {
      parentNode.insertBefore(useElem, nextChild);
    } else {
      parentNode.appendChild(useElem);
    }
  };

  SVGMatte3Effect.prototype.setElementAsMask = function (elem, mask) {
    if (!this.findSymbol(mask)) {
      var symbolId = createElementID();
      var masker = createNS('mask');
      masker.setAttribute('id', mask.layerId);
      masker.setAttribute('mask-type', 'alpha');

      _svgMatteSymbols.push(mask);

      var defs = elem.globalData.defs;
      defs.appendChild(masker);
      var symbol = createNS('symbol');
      symbol.setAttribute('id', symbolId);
      this.replaceInParent(mask, symbolId);
      symbol.appendChild(mask.layerElement);
      defs.appendChild(symbol);
      var useElem = createNS('use');
      useElem.setAttribute('href', '#' + symbolId);
      masker.appendChild(useElem);
      mask.data.hd = false;
      mask.show();
    }

    elem.setMatte(mask.layerId);
  };

  SVGMatte3Effect.prototype.initialize = function () {
    var ind = this.filterManager.effectElements[0].p.v;
    var elements = this.elem.comp.elements;
    var i = 0;
    var len = elements.length;

    while (i < len) {
      if (elements[i] && elements[i].data.ind === ind) {
        this.setElementAsMask(this.elem, elements[i]);
      }

      i += 1;
    }

    this.initialized = true;
  };

  SVGMatte3Effect.prototype.renderFrame = function () {
    if (!this.initialized) {
      this.initialize();
    }
  };

  function SVGGaussianBlurEffect(filter, filterManager, elem, id) {
    // Outset the filter region by 100% on all sides to accommodate blur expansion.
    filter.setAttribute('x', '-100%');
    filter.setAttribute('y', '-100%');
    filter.setAttribute('width', '300%');
    filter.setAttribute('height', '300%');
    this.filterManager = filterManager;
    var feGaussianBlur = createNS('feGaussianBlur');
    feGaussianBlur.setAttribute('result', id);
    filter.appendChild(feGaussianBlur);
    this.feGaussianBlur = feGaussianBlur;
  }

  SVGGaussianBlurEffect.prototype.renderFrame = function (forceRender) {
    if (forceRender || this.filterManager._mdf) {
      // Empirical value, matching AE's blur appearance.
      var kBlurrinessToSigma = 0.3;
      var sigma = this.filterManager.effectElements[0].p.v * kBlurrinessToSigma; // Dimensions mapping:
      //
      //   1 -> horizontal & vertical
      //   2 -> horizontal only
      //   3 -> vertical only
      //

      var dimensions = this.filterManager.effectElements[1].p.v;
      var sigmaX = dimensions == 3 ? 0 : sigma; // eslint-disable-line eqeqeq

      var sigmaY = dimensions == 2 ? 0 : sigma; // eslint-disable-line eqeqeq

      this.feGaussianBlur.setAttribute('stdDeviation', sigmaX + ' ' + sigmaY); // Repeat edges mapping:
      //
      //   0 -> off -> duplicate
      //   1 -> on  -> wrap

      var edgeMode = this.filterManager.effectElements[2].p.v == 1 ? 'wrap' : 'duplicate'; // eslint-disable-line eqeqeq

      this.feGaussianBlur.setAttribute('edgeMode', edgeMode);
    }
  };

  registerRenderer('canvas', CanvasRenderer);
  registerRenderer('html', HybridRenderer);
  registerRenderer('svg', SVGRenderer); // Registering shape modifiers

  ShapeModifiers.registerModifier('tm', TrimModifier);
  ShapeModifiers.registerModifier('pb', PuckerAndBloatModifier);
  ShapeModifiers.registerModifier('rp', RepeaterModifier);
  ShapeModifiers.registerModifier('rd', RoundCornersModifier);
  ShapeModifiers.registerModifier('zz', ZigZagModifier);
  ShapeModifiers.registerModifier('op', OffsetPathModifier); // Registering expression plugin

  setExpressionsPlugin(Expressions);
  setExpressionInterfaces(getInterface);
  initialize$1();
  initialize(); // Registering svg effects

  registerEffect(20, SVGTintFilter, true);
  registerEffect(21, SVGFillFilter, true);
  registerEffect(22, SVGStrokeEffect, false);
  registerEffect(23, SVGTritoneFilter, true);
  registerEffect(24, SVGProLevelsFilter, true);
  registerEffect(25, SVGDropShadowEffect, true);
  registerEffect(28, SVGMatte3Effect, false);
  registerEffect(29, SVGGaussianBlurEffect, true);

  return lottie;

}));


/***/ }),

/***/ 617:
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAChBJREFUeF7tnV9s1WcZx5+3tKwUaAcrSFBkspL90WVz5zSbxpiZbDEucQKVJSDtNiN1F+NOvdYbL8QrMTF2zjhKdDG0wC62RM1YvDBgC4oubGRjg+HGnw0Y5U/L2p7XrMnMMjfe9nee3++cPs+nt+95n/f9fr6/DycH2hKELwhA4BMJBNhAAAKfTABBeDogcA0CCMLjAQEE4RmAQDYCvINk48YuJwQQxEnRxMxGAEGycWOXEwII4qRoYmYjgCDZuLHLCQEEcVI0MbMRQJBs3NjlhACCOCmamNkIIEg2buxyQgBBnBRNzGwEECQbN3Y5IYAgToomZjYCCJKNG7ucEEAQJ0UTMxsBBMnGjV1OCCCIk6KJmY0AgmTjxi4nBBDESdHEzEYAQbJxY5cTAgjipGhiZiOAINm4scsJAQRxUjQxsxFAkGzc2OWEAII4KZqY2QjUXJCh7Wu/EBvinWGyoSNbhHx3RZGXGprCofLGgZfzPYnp9UigJoIM/27NTTKnYWsQ+UoUWVKPYD7mTqejyP4Qw0/LPQP7Z8mduWaVBAoX5MCOdWtjlMEq713T7bEiP+l8ePDHNb0EhxdCoFBBDvR3PRslfqOQZDkfEoLsKm0aXJfzMYyvMYHCBBnesW6LRPlFjfPqHj9Z+Xr5kd1/0h3KtHoiUIggB/rXd8Q4OSRBrq+n8NXeJYi8OXfOROn2jc+crnYW++uTQEGCdP0sSvxhfSKo7lZBwtZS98CPqpvC7nolUJQgZj57fLTIIOG5UvfAA/VaMPeqjkAhggxtX3c2BFlc3VXrdHeUE23to6tXP/Dc1Tq9IdeqgkDugkx9/pDJV6q4Y91vbWgMnXdtGBiu+4tywRkTyF2Qof419wZp2Dvjm7HBO4GXQpD9lUr8lwR5sbN7159rAQRBakGdM2dOIISnypsGHpn5xup2IEh1/NhdLIFLEsN9RX6rD4IUWzCnKRAodw/m/tx+cM3cD+IziMITwYiPEAg/L3cPFPLvagjCwzcrCcQoPZ09g/15Xx5B8ibM/FwIBJGnS92DG3IZ/qGhCJI3YebnReBouXsw9x+yQ5C86mNuEQSWl7sHT+Z50KwQZOGy22Xh0ttk3qKVEsKcPHkwO2cCMU7K6PnjcvHMYbl46t9VnRal8rXO7t0vVDUksbluBWlobJZlt31L2jvuk6YWm9/GlWexs2H2+JVz8s6rf5FTh/dIZWJsxld2K8gNq+6VG7+8ZcbA2DB7CRz72zY5+9rM3gxcCtLecb+svOex2ds0N89M4Pi+X029o0z3y50gjc1tcse3fztdPrzOIIFDOx+VibGRaSVzJ8hnSg/Lp259cFpweJFNAqcP75H/HNw+rXCuBHn/b6fueOgpmdM0b1pweJFNApPjo3Lojz0SYyUZ0JUgiz77JVn11R8kofAC+wRe++tWOf/GvmRQV4Ks6PyeLL3ZxK/MShbLC65N4MyRZ+XE0JNJTG4EabmuUT53d480t61IQuEF9gmMXTghr+/fLleuTlwzrGlB2hbMlcVtzbK4da79xkmYmcC5kffk3LtjcuHye/83w6QgC1uaZPmS+bKgpTEzNDb6I3Dpyri89c4VuXh5/H/hzQmy7IYW+fTSFn/tkliNwFtnLsvJs6NT80wJMn9ek9xyY5saKAb5JXDk2LtyaXTCliCrV7RK6wI+b/h9rPWSj1wel1feuGBHkIUtc/fevNLU763Wa5tJmQgcOXZBLo5etfHt7iuXte5dsqg5Ewg2QeDjCLx9fkyOnxqxIchdtyzZ2xBy/9ETniRHBCoVkYNHzsx+QY4+81DXquXX73TUHVELIvD6yZH1q775dK7PVu5/rL/9/HcfbG9t3FMQM45xRODs+dGu9vv7c/3/LnMXJA499kUJlYOOeiNqcQRKodyX67OFIMWVyUn6BBBEnykTDRFAEENlEkWfAILoM2WiIQIIYqhMougTQBB9pkw0RABBDJVJFH0CCKLPlImGCCCIoTKJok8AQfSZMtEQAQQxVCZR9AkgiD5TJhoigCCGyiSKPgEE0WfKREMEEMRQmUTRJ4Ag+kyZaIgAghgqkyj6BBBEnykTDRFAEENlEkWfAILoM2WiIQIIYqhMougTQBB9pkw0RABBDJVJFH0CCKLPlImGCCCIoTKJok8AQfSZMtEQAQQxVCZR9AkgiD5TJhoigCCGyiSKPgEE0WfKREMEEMRQmUTRJ4Ag+kyZaIgAghgqkyj6BBBEnykTDRFAEENlEkWfAILoM2WiIQIIYqhMougTQBB9pkw0RABBDJVJFH0CCKLPlImGCCCIoTKJok8AQfSZMtEQAQQxVCZR9AkgiD5TJhoigCCGyiSKPgEE0WfKREMEEMRQmUTRJ4Ag+kyZaIgAghgqkyj6BBBEnykTDRFAEENlEkWfAILoM2WiIQIIYqhMougTQBB9pkw0RABBDJVJFH0CCKLPlImGCCCIoTKJok8AQfSZMtEQAQQxVCZR9AkgiD5TJhoigCCGyiSKPgEE0WfKREMEEMRQmUTRJ4Ag+kyZaIgAghgqkyj6BBBEnykTDRFAEENlEkWfAILoM2WiIQIIYqhMougTQBB9pkw0RABBDJVJFH0CCKLPlImGCCCIoTKJok8AQfSZMtEQAQQxVCZR9AkgiD5TJhoigCCGyiSKPgEE0WfKREMEEMRQmUTRJ4Ag+kyZaIgAghgqkyj6BBBEnykTDRFAEENlEkWfAILoM2WiIQIIYqhMougTQBB9pkw0RABBDJVJFH0CCKLPlImGCCCIoTKJok8AQfSZMtEQAQQxVCZR9AkgiD5TJhoiYECQ4d6bRORVQ6UQpX4IdIRy39E8rxPyHP7B7DjcOykiDUWcxRleCMQYyk/k/kwVI8jQ5t9LCBu8VEfOIgjEP4TyExvzPqkYQYZ714jIrrzDMN8VgbWh3Lc778SFCPJ+iDjc+w8RuTPvQMx3QeBQKPcV8iwVJ8jBzV1SCTtd1EfIfAnEyvrQ+ZtCnqXCBJl6FznQ+2uJ0psvPaabJhCkL5T6vl9UxkIFmZJkqPdxCbKtqICcY4hAkC2h1PfLIhMVLsiUJPu+0ypN8x+XKJtE5NYiA3PWrCPwskTZIZPXbQv3bBsp+vY1EeTDIeM/N39exuVukbCi6PCcV88E4gmRyt9D55Mv1vKWNRekluE5GwIpAgiSIsS6awII4rp+wqcIIEiKEOuuCSCI6/oJnyKAIClCrLsmgCCu6yd8igCCpAix7poAgriun/ApAgiSIsS6awII4rp+wqcIIEiKEOuuCSCI6/oJnyKAIClCrLsmgCCu6yd8igCCpAix7poAgriun/ApAgiSIsS6awII4rp+wqcIIEiKEOuuCSCI6/oJnyKAIClCrLsmgCCu6yd8igCCpAix7poAgriun/ApAgiSIsS6awII4rp+wqcIIEiKEOuuCSCI6/oJnyLwX5c+BAU8/uQcAAAAAElFTkSuQmCC";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/hy-contextmenu/lib/hycontextmenu.umd.min.js
var hycontextmenu_umd_min = __webpack_require__(175);
var hycontextmenu_umd_min_default = /*#__PURE__*/__webpack_require__.n(hycontextmenu_umd_min);
;// CONCATENATED MODULE: ./package/h-menu/h-menu.js



/* harmony default export */ var h_menu = ((app) => {
    app.use((hycontextmenu_umd_min_default()))
});
// EXTERNAL MODULE: ./node_modules/lottie-web/build/player/lottie.js
var lottie = __webpack_require__(248);
var lottie_default = /*#__PURE__*/__webpack_require__.n(lottie);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-dialog/h-dialog.vue?vue&type=template&id=def78602&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"h-dialog"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showMask),expression:"showMask"}],staticClass:"h-dialog-mask",style:({
            zIndex: _vm.zIndex,
            ..._vm.maskStyle,
        }),on:{"click":_vm.maskClose}},[_c('div',{staticClass:"h-dialog-container",style:({
                zIndex: _vm.zIndex + 1,
                width: typeof _vm.width === 'number' ? _vm.width + 'px' : _vm.width,
                ..._vm.contentStyle,
            }),on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showHeader),expression:"showHeader"}],staticClass:"h-dialog-header"},[_vm._t("header")],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.title && !_vm.showHeader),expression:"title && !showHeader"}],staticClass:"h-dialog-header"},[_c('div',{staticClass:"h-dialog-title"},[_vm._v(_vm._s(_vm.title))])]),_c('div',{staticClass:"h-dialog-content"},[_vm._t("default")],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showFooter),expression:"showFooter"}],staticClass:"h-dialog-footer"},[_vm._t("footer")],2)])])])
}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-dialog/h-dialog.vue?vue&type=script&lang=js&

/* harmony default export */ var h_dialogvue_type_script_lang_js_ = ({
    name: "h-dialog",
    props: {
        visible: Boolean,
        width: {
            type: String,
            default: '50%'
        },
        zIndex: {
            type: Number,
            default: 9999,
        },
        showMask: {
            type: Boolean,
            default: true,
        },
        clickMaskClose: {
            type: Boolean,
            default: true,
        },
        maskStyle: {
            type: Object,
            default: () => ({})
        },
        contentStyle: {
            type: Object,
            default: () => ({})
        },
        title: {
            type: String,
            default: '' // This prop is used for the title of the dialog and should be of type "字符型" (string).
        }
    },
    computed: {
        showFooter() {
            return !!this.$slots.footer
        },
        showHeader() {
            return !!this.$slots.header
        }
    },
    watch: {
        visible(vs) {
            if (vs) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'auto'
            }
        }
    },
    methods: {
        maskClose() {
            if (this.clickMaskClose) {
                this.$emit("update:visible", false)
                this.$emit("close")
            }
        }
    }

});

;// CONCATENATED MODULE: ./package/h-dialog/h-dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_dialog_h_dialogvue_type_script_lang_js_ = (h_dialogvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-dialog/h-dialog.vue?vue&type=style&index=0&id=def78602&prod&scoped=true&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-dialog/h-dialog.vue?vue&type=style&index=0&id=def78602&prod&scoped=true&lang=scss&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./package/h-dialog/h-dialog.vue



;


/* normalize component */

var component = normalizeComponent(
  h_dialog_h_dialogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "def78602",
  null
  
)

/* harmony default export */ var h_dialog = (component.exports);
;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject);
;// CONCATENATED MODULE: ./package/h-loading/h-loading.js






class LottieAnimation {
 lottieInstance = null;
 appendToBody = false;
 element = null;
 mask = null
 constructor(options) {
  if (options.element) {
   this.appendToBody = false
   this.element = options.element
  } else {
   this.appendToBody = true
   this.element = this.getDefaultElement()
  }
  this.lottieInstance = lottie_default().loadAnimation({
   container: this.element, // the dom element that will contain the animation
   renderer: 'svg',
   loop: true,
   autoplay: true,
   path: this.path, // the path to the animation json
   speed: 1,
   ...options
  })

  // this.play()
 }

 getDefaultElement () {
  const lottieAnimation = document.createElement('div')
  lottieAnimation.style.width = '100%'
  lottieAnimation.style.height = '200px'
  const loadingText = document.createElement('div')
  loadingText.innerText = '处理中...'
  loadingText.style.width = '100%'
  loadingText.style.height = '40px'
  loadingText.style.textAlign = 'center'
  loadingText.style.color = '#333'
  loadingText.style.fontSize = '20px'
  loadingText.style.lineHeight = '40px'
  // lottieContainer.appendChild(lottieAnimation)
  // lottieContainer.appendChild(loadingText)
  const hDialogRef = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)(h_dialog, {}, [lottieAnimation, loadingText])
  // const mask = document.createElement('div')
  // mask.style.position = 'fixed'
  // mask.style.top = '0'
  // mask.style.left = '0'
  // mask.style.width = '100%'
  // mask.style.height = '100%'
  // mask.style['z-index'] = '999999'
  // mask.style.background = 'rgba(0, 0, 0, 0.2)'
  // this.mask = mask
  // const lottieContainer = document.createElement('div')
  // lottieContainer.style.position = 'absolute'
  // lottieContainer.style.top = '50%'
  // lottieContainer.style.left = '50%'
  // lottieContainer.style.width = '200px'
  // lottieContainer.style.height = '240px'
  // lottieContainer.style.transform = 'translate(-50%, -50%)'
  // lottieContainer.style['z-index'] = '9999999'
  // mask.appendChild(lottieContainer)

  return lottieAnimation
 }

 play () {
  if (this.appendToBody) {
   document.body.appendChild(this.mask)
  }
  this.lottieInstance.play()
 }

 pause () {
  this.lottieInstance.pause()
 }

 stop () {
  if (this.appendToBody) {
   document.body.removeChild(this.mask)
  }
  this.lottieInstance.stop()
 }

}



/* harmony default export */ function h_loading(type, option = {}) {
 if (type === 'lottie') {
  const loadingAnimation = new LottieAnimation({
   path: 'https://assets4.lottiefiles.com/packages/lf20_g7dnFTvMeQ.json',
   loop: true,
   ...option
  })

  return loadingAnimation
 } 

 return {
  close: function(){}
 }
}


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-filemanager/h-filemanager.vue?vue&type=template&id=836995e6&scoped=true&
var h_filemanagervue_type_template_id_836995e6_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"border-card primary bigger shadow h-filemanager",on:{"contextmenu":function($event){return _vm.containermenu($event)},"mousedown":_vm.containermousedown}},[_c('div',{staticClass:"border-card-header"},[_c('div',{staticClass:"align-center"},[_c('h-breadcrumb',{attrs:{"separator":"/","list":_vm.pidpaths},on:{"bread-click":_vm.clickPath,"bread-back":_vm.pidback}})],1),_c('div',[_c('h-search',{on:{"search":_vm.searchSubmit},model:{value:(_vm.dataForm.searchText),callback:function ($$v) {_vm.$set(_vm.dataForm, "searchText", $$v)},expression:"dataForm.searchText"}}),_c('h-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.upload}},[_vm._v("上传")]),_c('h-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.addDir}},[_vm._v("新建文件夹")]),(_vm.show_paste && _vm.pasteHereFunc)?_c('h-button',{attrs:{"size":"small","type":"primary"},on:{"click":_vm.pasteHere}},[_vm._v("粘贴到此")]):_vm._e(),_c('h-button',{attrs:{"type":"primary","size":"small"},on:{"click":function($event){return _vm.getImageList()}}},[_vm._v("刷新")])],1)]),_c('div',{ref:"imageContainer",staticClass:"image-container"},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"image-item",class:{
        dir: item[_vm.dirFlagKey],
        selected: _vm.selectList.findIndex((item1) => item1.id === item.id) > -1,
      },attrs:{"id":'image_item_' + item.id},on:{"dblclick":function($event){$event.stopPropagation();return _vm.clickFoldItem(item)},"contextmenu":function($event){return _vm.contextmenu($event, index)},"mousedown":function($event){return _vm.mouseDown($event, index)}}},[_c('div',{staticClass:"image"},[(item[_vm.dirFlagKey])?_c('img',{staticClass:"image-dir",attrs:{"src":__webpack_require__(617),"alt":""}}):_c('img',{staticClass:"image-image",attrs:{"src":item.url,"alt":""}})]),_c('div',{staticClass:"image-name"},[_c('span',[_vm._v(_vm._s(item.name))])])])}),0),_c('div',{staticClass:"border-card-footer"},_vm._l((_vm.pidpaths),function(item,index){return _c('div',{key:index,staticStyle:{"display":"flex","justify-content":"center"}},[(index === _vm.pidpaths.length - 1)?_c('h-pagination',{attrs:{"page":item.page,"pagesize":_vm.dataForm.pagesize,"page-sizes":[10, 20, 30],"total":_vm.listTotal},on:{"change-page":_vm.changePage,"change-pagesize":_vm.handleSizeChange}}):_vm._e()],1)}),0),_c('h-dialog',{attrs:{"title":"新建文件夹","visible":_vm.dirShow,"append-to-body":""},on:{"update:visible":function($event){_vm.dirShow=$event}}},[_c('h-form',{ref:"dirFormRef",attrs:{"model":_vm.dirForm,"rules":_vm.nameRules}},[_c('h-form-item',{attrs:{"prop":_vm.dirNameKey,"label":"文件夹名称"}},[_c('h-input',{attrs:{"placeholder":"请输入文件夹名称"},model:{value:(_vm.dirForm[_vm.dirNameKey]),callback:function ($$v) {_vm.$set(_vm.dirForm, _vm.dirNameKey, $$v)},expression:"dirForm[dirNameKey]"}})],1)],1),_c('template',{slot:"footer"},[_c('div',{staticClass:"flex justify-end"},[_c('h-button',{on:{"click":function($event){_vm.dirShow = false}}},[_vm._v("取消")]),_c('h-button',{attrs:{"type":"primary"},on:{"click":_vm.submitDir}},[_vm._v("提交")])],1)])],2),_c('h-dialog',{attrs:{"title":"重命名","visible":_vm.renameShow,"append-to-body":""},on:{"update:visible":function($event){_vm.renameShow=$event}}},[_c('h-form',{ref:"renameFormRef",attrs:{"model":_vm.renameForm,"rules":_vm.nameRules}},[_c('h-form-item',{attrs:{"prop":_vm.dirNameKey,"label":"名称"}},[_c('h-input',{attrs:{"placeholder":"请输入名称"},model:{value:(_vm.renameForm[_vm.dirNameKey]),callback:function ($$v) {_vm.$set(_vm.renameForm, _vm.dirNameKey, $$v)},expression:"renameForm[dirNameKey]"}})],1)],1),_c('template',{slot:"footer"},[_c('h-button',{on:{"click":function($event){_vm.renameShow = false}}},[_vm._v("取消")]),_c('h-button',{attrs:{"type":"primary"},on:{"click":_vm.submitRename}},[_vm._v("提交")])],1)],2)],1)
}
var h_filemanagervue_type_template_id_836995e6_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./package/h-filemanager/h-filemanager.vue?vue&type=template&id=836995e6&scoped=true&

;// CONCATENATED MODULE: ./utils/index.js


function guid () {
   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
   });
}


function setRootFontSize (fontSize) {
   document.getElementsByTagName('html')[0].style['font-size'] = fontSize + 'px';
}

function concatParams (params) {
   const tempParams = {}
   for (const key in params) {
      if (params[key] !== undefined) {
         tempParams[key] = params[key]
      }
   }
   const keys = Object.keys(tempParams)
   let paramStr = ''
   if (keys && keys.length > 0) {
      keys.forEach((item, index) => {
         if (index === 0) {
            paramStr += `?${item}=${params[item]}`
         } else {
            paramStr += `&${item}=${params[item]}`
         }
      })
   }
   return paramStr
}


function clone (obj) {
   try {
      return JSON.parse(JSON.stringify(obj))
   } catch (err) {
      return {}
   }
}

/**
 * pc端选择文件
 * @param {Object} options {accept, multiple}
 * @param {Function} callback tempFiles, failFiles
 */
function chooseFiles (options, callback) {
   console.log(options)
   const { accept, multiple, size, } = options
   const input = document.createElement("input")
   input.accept = accept
   input.type = "file"
   input.multiple = multiple
   input.onchange = function () {
      const tempFiles = []
      const failFiles = []
      for (let i = 0; i < input.files.length; i++) {
         const item = input.files[i]
         if (size) {
            if (item.size > size) {
               failFiles.push(item)
               continue
            }
         }
         if (accept) {
            const accs = accept.split(",").map(item => item.trim())
            let reg_result = false
            for (let j = 0; j < accs.length; j++) {
               if (/[a-zA-Z]+\/\*/.test(accs[j])) {
                  const m = accs[j].match(/([a-zA-Z]+)\/\*/)
                  console.log(new RegExp(m[1] + "/[a-zA-Z]+"))
                  reg_result = new RegExp(m[1] + "/[a-zA-Z]+").test(item.type)
               } else {
                  console.log(new RegExp(accs[j]))
                  reg_result = new RegExp(accs[j]).test(item.type)
               }
               if(reg_result) {
                  break
               }
            }
            if (!reg_result) {
               failFiles.push(item)
               continue
            }
         }
         tempFiles.push(item)
      }
      if (typeof callback === "function") {
         callback(tempFiles, failFiles)
      }
   }
   input.click()
}

function getQueryString (url, name) {
   if (!url || !name) return null
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
   var r = url.match(reg);
   if (r != null) return unescape(r[2]);
   return null;
}


function findTargetEl (el, options) {
   if (options.id) {
      if (el.id === options.id) {
         return el
      } else {
         return findTargetEl(el.parentElement, options)
      }
   } else if (options.className) {
      if (el.classList.contains(options.className)) {
         return el
      } else {
         return findTargetEl(el.parentElement, options)
      }
   } else {
      return null
   }
}

let options_list = []
function documentClick(ev){
   options_list.forEach(item => {
      const {el, callback} = item
      if(!el || !el.getBoundingClientRect || typeof callback !== 'function') return
      const {clientX, clientY} = ev
      console.log(el)
      const { left, bottom, right, top } = el.getBoundingClientRect()

      console.log({ left, bottom, right, top })
      if(clientX > left && clientX < right && clientY> top && clientY < bottom) {
         return callback(true)
      } else {
         return callback(false)
      }
   })

}

function addDocumentClickListener(options) {
   if(!options_list || options_list.length === 0) {
      document.addEventListener("click", documentClick)
   }
   if(!options_list.includes(options)) options_list.push(options)
}

function removeDocumentClickListener(options) {
   if(options_list.includes(options)) {
      options_list.splice(options_list.indexOf(options), 1)
   }
   if(!options_list || options_list.length === 0) {
      document.removeEventListener("click", documentClick)
   }
}
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(493);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
;// CONCATENATED MODULE: ./utils/keydown.js

/* harmony default export */ var keydown = ({
  data() {
    return {
      dom: document.body,
      downkeys: []
    }
  },
  mounted() {
    this.bindcv()
  },
  destroyed() {
    this.unbindcv()
  },
  methods: {
    /**
      * 绑定ctrl+x
      */
    bindcv() {
      this.dom.addEventListener('keydown', this.cv_func);
    },
    unbindcv() {
      this.dom.removeEventListener('keydown', this.cv_func)
    },
    cv_func: throttle_default()(function (event) {
      if (event.target === document.body) {
        if (!this.downkeys.includes(event.keyCode)) {
          this.downkeys.push(event.keyCode)
        }
        // if (event.keyCode === 17) {
        //  // ctrl
        // }
        // if (event.keyCode === 67) {
        //  // c
        // }
        // if (event.keyCode === 88) {
        //  // x
        // }
        // if (event.keyCode === 86) {
        //  // v
        // }

        // console.log(this.downkeys)
        if (this.downkeys.includes(17)) {
          if (this.downkeys.includes(67) && this.downkeys.includes(88)) {
            const cIndex = this.downkeys.findIndex(item => item === 67)
            const xIndex = this.downkeys.findIndex(item => item === 88)
            if (cIndex > xIndex) {
              // ctrl + c function
            } else {
              if (typeof this.shear === 'function') {
                this.shear()
              }
            }
          } else if (this.downkeys.includes(67)) {
            // ctrl + c function
          } else if (this.downkeys.includes(88)) {
            // ctrl + x function
            if (typeof this.shear === 'function') {
              this.shear()
            }
          }
          if (this.downkeys.includes(86)) {
            // ctrl + v function
            if (typeof this.pasteHere === 'function') {
              this.pasteHere()
            }
          }
        }

        // 如果未触发，那么就初始化按键
        if (this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.downkeys = []
        }, 500)
      }

    }, 200),
  }
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/bind.js


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/utils.js




// utils is a library of generic helper functions non-specific to axios

const {toString: utils_toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = utils_toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  const pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    utils_toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    if (reducer(descriptor, name, obj) !== false) {
      reducedDescriptors[name] = descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

/* harmony default export */ var utils = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: utils_hasOwnProperty,
  hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosError.js




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const AxiosError_prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(AxiosError_prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(AxiosError_prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ var core_AxiosError = (AxiosError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/null.js
// eslint-disable-next-line strict
/* harmony default export */ var helpers_null = (null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toFormData.js




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (helpers_null || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ var helpers_toFormData = (toFormData);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && helpers_toFormData(params, this, options);
}

const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

AxiosURLSearchParams_prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

AxiosURLSearchParams_prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ var helpers_AxiosURLSearchParams = (AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/buildURL.js





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function buildURL_encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || buildURL_encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new helpers_AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/InterceptorManager.js




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ var core_InterceptorManager = (InterceptorManager);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/transitional.js


/* harmony default export */ var defaults_transitional = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js



/* harmony default export */ var classes_URLSearchParams = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/FormData.js


/* harmony default export */ var classes_FormData = (typeof FormData !== 'undefined' ? FormData : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/Blob.js


/* harmony default export */ var classes_Blob = (typeof Blob !== 'undefined' ? Blob : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/index.js




/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


/* harmony default export */ var browser = ({
  isBrowser: true,
  classes: {
    URLSearchParams: classes_URLSearchParams,
    FormData: classes_FormData,
    Blob: classes_Blob
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toURLEncodedForm.js






function toURLEncodedForm(data, options) {
  return helpers_toFormData(data, new browser.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (browser.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToJSON.js




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ var helpers_formDataToJSON = (formDataToJSON);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/index.js










const DEFAULT_CONTENT_TYPE = {
  'Content-Type': undefined
};

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: defaults_transitional,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return helpers_toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: browser.classes.FormData,
    Blob: browser.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

/* harmony default export */ var lib_defaults = (defaults);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseHeaders.js




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ var parseHeaders = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosHeaders.js





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

utils.freezeMethods(AxiosHeaders.prototype);
utils.freezeMethods(AxiosHeaders);

/* harmony default export */ var core_AxiosHeaders = (AxiosHeaders);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/transformData.js






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || lib_defaults;
  const context = response || config;
  const headers = core_AxiosHeaders.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/isCancel.js


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CanceledError.js





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, core_AxiosError, {
  __CANCEL__: true
});

/* harmony default export */ var cancel_CanceledError = (CanceledError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/settle.js




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new core_AxiosError(
      'Request failed with status code ' + response.status,
      [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/cookies.js





/* harmony default export */ var cookies = (browser.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAbsoluteURL.js


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/buildFullPath.js





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isURLSameOrigin.js





/* harmony default export */ var isURLSameOrigin = (browser.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })());

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseProtocol.js


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/speedometer.js


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ var helpers_speedometer = (speedometer);

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/xhr.js
















function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = helpers_speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ var xhr = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = core_AxiosHeaders.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && (browser.isStandardBrowserEnv || browser.isStandardBrowserWebWorkerEnv)) {
      requestHeaders.setContentType(false); // Let the browser set it
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = core_AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || defaults_transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new core_AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (browser.isStandardBrowserEnv) {
      // Add xsrf header
      const xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath))
        && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && browser.protocols.indexOf(protocol) === -1) {
      reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/adapters.js





const knownAdapters = {
  http: helpers_null,
  xhr: xhr
}

utils.forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

/* harmony default export */ var adapters = ({
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      if((adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new core_AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!utils.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }

    return adapter;
  },
  adapters: knownAdapters
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/dispatchRequest.js









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new cancel_CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = core_AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = core_AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/mergeConfig.js





const headersToObject = (thing) => thing instanceof core_AxiosHeaders ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/env/data.js
const VERSION = "1.3.5";
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/validator.js





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new core_AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        core_AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ var validator = ({
  assertOptions,
  validators
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/Axios.js











const Axios_validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new core_InterceptorManager(),
      response: new core_InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: Axios_validators.function,
          serialize: Axios_validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    let contextHeaders;

    // Flatten headers
    contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    contextHeaders && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ var core_Axios = (Axios);

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CancelToken.js




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new cancel_CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ var cancel_CancelToken = (CancelToken);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/spread.js


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAxiosError.js




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/HttpStatusCode.js
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ var helpers_HttpStatusCode = (HttpStatusCode);

;// CONCATENATED MODULE: ./node_modules/axios/lib/axios.js



















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new core_Axios(defaultConfig);
  const instance = bind(core_Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, core_Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(lib_defaults);

// Expose Axios class to allow class inheritance
axios.Axios = core_Axios;

// Expose Cancel & CancelToken
axios.CanceledError = cancel_CanceledError;
axios.CancelToken = cancel_CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = helpers_toFormData;

// Expose AxiosError class
axios.AxiosError = core_AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = core_AxiosHeaders;

axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = helpers_HttpStatusCode;

axios.default = axios;

// this module should only have a default export
/* harmony default export */ var lib_axios = (axios);

;// CONCATENATED MODULE: ./utils/http.js



const axios_instance = lib_axios.create({
  baseUrl: "/",
  timeout: 2000,
})

let loading;

axios_instance.interceptors.request.use(function (config) {
  if (typeof (external_commonjs_vue_commonjs2_vue_root_Vue_default()).prototype.$loading === 'function' && !config.hideloading) {
    let loading_text = '加载中'
    if (['post', 'put'].includes(config.method)) {
      loading_text = '提交中'
    } else if (config.method === 'delete') {
      loading_text = '删除中'
    }
    loading = external_commonjs_vue_commonjs2_vue_root_Vue_default().prototype.$loading({
      lock: true,
      text: loading_text,
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.3)'
    })
  }
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
axios_instance.interceptors.response.use(function (response) {
 console.log(response)
  if (typeof (external_commonjs_vue_commonjs2_vue_root_Vue_default()).prototype.$loading === 'function') {
    loading && loading.close()
  }

  if (response.status === 200) {
    if( response.data) {
      return  response.data
    }
    return response
  } else {
    // 对响应数据做点什么
    return response;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
/* harmony default export */ var http = (axios_instance);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-filemanager/h-filemanager.vue?vue&type=script&lang=js&




/* harmony default export */ var h_filemanagervue_type_script_lang_js_ = ({
  name: "h-filemanager",
  mixins: [keydown],
  data () {
    return {
      dirFormName: "",
      dataForm: {
        page: 0,
        pagesize: 10,
        parentid: "", // 父节点id，如果没有那么就是全部
        searchText: "", // 搜索内容，如果存在那么就是搜索全部，将pid清空
      },
      pidpaths: [
        {
          name: "全部",
          parentid: "",
          page: 0,
          pagesize: 10,
        },
      ],
      list: [],
      listTotal: 0,

      dirForm: {

      },
      dirShow: false,
      renameForm: {
      },
      renameShow: false,

      nameRules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
        ],
      },

      selectList: [],
      shearList: [], // 剪切
      copyList: [], // 复制

      originPath: {
        x: 0,
        y: 0,
        fold_index: 0,
        click_type: "",
      },

      // imageItemHeight: 200,
    };
  },
  props: {
    multiple: { // 是否可多穿
      type: Boolean,
      default: true,
    },
    size: {
      type: Number, // 限制文件大小
    },

    uploadUrl: {
      type: String,
    },
    getListUrl: {
      type: String,
    },
    addDirUrl: {
      type: String,
    },
    putBatchUrl: {
      type: String,
    },
    deleteBatchUrl: {
      type: String,
    },
    putUrl: {
      type: String,
    },

    fileKey: {
      type: String,
      default: 'file'
    },
    parentidKey: {
      type: String,
      default: 'parentid'
    },
    searchKey: {
      type: String,
      default: 'searchText'
    },
    pageKey: {
      type: String,
      default: "page"
    },
    pagesizeKey: {
      type: String,
      default: "pagesize"
    },
    dirNameKey: {
      type: String,
      default: "name"
    },

    // 必传，文件夹关键字段，默认dir
    dirFlagKey: {
      type: String,
      default: "dir"
    },
    uploadFunc: Function, // 上传
    getImageListFunc: Function, // 获取列表
    submitDirFunc: Function, // 新增文件夹
    delItemsFunc: Function, // 批量删除
    moveFunc: Function, // 文件移动

    // 不传则隐藏功能
    submitRenameFunc: Function, // 重命名文件夹
    pasteHereFunc: Function, // 粘贴
    disband_foldFunc: Function, // 解散文件夹
  },
  computed: {
    show_paste () {
      // 是否显示粘贴
      return Array.isArray(this.shearList) && this.shearList.length > 0;
    },
  },
  mounted () {
    this.refreshImageList();
    this.dirForm[this.dirNameKey] = ""
    this.dirForm[this.parentidKey] = ""
    this.renameForm[this.dirNameKey] = ""

    this.nameRules = {
      [this.dirNameKey]: [
        { required: true, message: '请输入名称', trigger: 'blur' },
      ],
    }
  },
  methods: {
    // set_imageItemHeight() {
    //   const imageItem = document.querySelector(".h-filemanager .image-container .image-item")
    //   console.dir(imageItem)
    //   this.imageItemHeight = imageItem.offsetWidth
    // },

    /**
     * 上传文件
     */
    upload () {
      chooseFiles(
        {
          accept: "image/*",
          multiple: this.multiple,
        },
        async (tempFiles) => {

          const loading = this.$loading({
            lock: true,
            text: "上传中",
            spinner: "icon-loading",
            background: "rgba(0, 0, 0, 0.2)",
          });


          const reslist = []
          // todo // 构想 // 上传将图片shift到列表中，一个一个加载上传进度
          for (let i = 0; i < tempFiles.length; i++) {
            const formData = new FormData();
            formData.append(this.fileKey, tempFiles[i]);
            formData.append(
              this.parentidKey,
              this.pidpaths[this.pidpaths.length - 1].parentid
            );
            if (this.uploadFunc) {
              try {
                const res = await this.uploadFunc(formData)
                reslist.push(res)
              } catch (err) {
                console.error(err)
                reslist.push(null)
              }
            } else {
              try {
                const res = await http.post(this.uploadUrl, formData, {
                  hideloading: true,
                });
                reslist.push(res)
              } catch (err) {
                console.error(err)
                reslist.push(null)
              }
            }
          }

          this.$emit("after-upload", reslist)
          this.getImageList();
          loading.close();
        }
      );


    },
    /**
     * 刷新
     */
    async refreshImageList () {
      if (this.dataForm.page === 1 && this.dataForm.pagesize === 10) {
        this.getImageList();
      } else {
        this.pidpaths[this.pidpaths.length - 1].page = 1;
        this.pidpaths[this.pidpaths.length - 1].pagesize = 10
        this.dataForm.page = 1
        this.dataForm.pagesize = 10
        this.getImageList();
      }
    },
    /**
     * 分页页面点击
     * @param {number} p
     */
    changePage (p) {
      this.dataForm.page = p
      this.pidpaths[this.pidpaths.length - 1].page = p
      this.getImageList()
    },
    /**
     * 每页数量改变
     */
    handleSizeChange (ps) {
      this.dataForm.page = 1
      this.pidpaths[this.pidpaths.length - 1].page = 1
      this.dataForm.pagesize = ps
      this.pidpaths[this.pidpaths.length - 1].pagesize = ps
      this.getImageList()
    },
    /**
     * 获取文件/文件夹列表
     */
    async getImageList () {
      if (this.getImageListFunc) {
        const params = {
          [this.pageKey]: this.dataForm.page,
          [this.pagesizeKey]: this.dataForm.pagesize,
          [this.parentidKey]: this.pidpaths[this.pidpaths.length - 1].parentid,
          [this.searchKey]: this.dataForm.searchText
        }
        try {
          const { list, total } = await this.getImageListFunc(params)
          this.list = list;
          this.listTotal = total
          this.selectList = [];
        } catch (err) {
          console.error(err)
        }
      } else {
        try {
          const res = await http.get(
            `${this.getListUrl}?${this.pageKey}=${this.dataForm.page}&${this.pagesizeKey}=${this.dataForm.pagesize
            }&${this.parentidKey}=${this.pidpaths[this.pidpaths.length - 1].parentid}&${this.searchKey}=${this.dataForm.searchText}`
          );
          if (res.code === 0) {
            this.list = res.data.list;
            this.listTotal = res.data.total;
            this.selectList = [];
          }
        } catch (err) {
          console.error(err)
        }
      }

    },
    /**
     * 搜索文件/文件夹
     */
    searchSubmit () {
      this.getImageList()
    },
    /**
     * 弹出新建文件夹
     */
    addDir () {
      this.dirShow = true;
    },
    /**
     * 新建文件夹提交
     */
    async submitDir () {
      if (this.$refs.dirFormRef && this.$refs.dirFormRef.validate()) {
        if (this.submitDirFunc) {
          try {
            const res = await this.submitDirFunc({
              ...this.dirForm,
              [this.parentidKey]: this.pidpaths[this.pidpaths.length - 1].parentid,
            })
            this.$emit("after-add-dir", res)
            this.getImageList();
            this.dirShow = false;
          } catch (err) {
            console.error(err)
          }
        } else {
          try {
            const res = await http.post(this.addDirUrl, {
              ...this.dirForm,
              [this.parentidKey]: this.pidpaths[this.pidpaths.length - 1].parentid,
            });
            if (res.code === 0) {
              this.getImageList();
              this.dirShow = false;
            }
          } catch (err) {
            console.error(err)
          }
        }


      }

    },
    /**
     * rename
     */
    async submitRename () {
      if (this.$refs.dirFormRef && this.$refs.dirFormRef.validate()) {
        const renameList = this.selectList.map(item => ({
          ...item,
          [this.dirNameKey]: this.renameForm[this.dirNameKey]
        }))
        if (this.submitRenameFunc) {
          try {
            const res = await this.submitRenameFunc(renameList)
            this.$emit("after-rename", res)
            this.renameShow = false
            this.getImageList();
          } catch (err) {
            console.error(err)
          }
        } else {
          try {
            const res = await http.put(this.putBatchUrl, renameList)
            if (res.code === 0) {
              this.renameShow = false
              this.getImageList();
            }
          } catch (err) {
            console.error(err)
          }
        }
      }
    },
    /**
     * 修改文件/文件夹数据
     * @param {*} item
     */
    async updateItem (item) {
      const res = await http.put(this.putUrl, item);
      if (res.code === 0) {
        this.getImageList();
      }
    },
    /**
     * 批量粘贴，from剪切
     */
    async pasteHere (ev) {
      if (ev) {
        ev.stopPropagation()
        ev.preventDefault()
      }
      if (!Array.isArray(this.shearList) || this.shearList.length === 0) {
        this.$message.error("请先剪切内容")
        return
      }
      const parentid = this.pidpaths[this.pidpaths.length - 1].parentid || "";

      try {
        if (this.pasteHereFunc) {
          const res = await this.pasteHereFunc(this.shearList && this.shearList.map(item => ({
            ...item,
            [this.parentidKey]: parentid,
          })))
        } else {
          const res = await http.put(this.putBatchUrl, this.shearList && this.shearList.map(item => ({
            ...item,
            [this.parentidKey]: parentid,
          })));
        }
        this.shearList = [];
        this.getImageList();

      } catch (err) {
        console.error(err)
      }


    },
    async disband_fold (id, targetid) {
      try {
        if (this.disband_foldFunc) {
          const res = await this.disband_foldFunc({
            id, targetid,
          })
          this.$message.success("解散成功");
          this.getImageList();
        } else {
          const res = await http["delete"](
            "/api/disband?id=" + id + "&targetid=" + targetid
          );
          if (res.code === 0) {
            this.$message.success("解散成功");
            this.getImageList();
          }
        }
      } catch (err) {
        console.error(err)
      }
    },
    /**
     * 批量删除/删除
     */
    async delItems (id) {
      let ids = "";
      if (id) {
        // 非批量删除
        ids = id;
      } else {
        if (!Array.isArray(this.selectList) || this.selectList.length === 0) {
          this.$message.error("请先选择文件/文件夹");
          return;
        }
        ids = this.selectList.map((item) => item.id).join(",");
      }

      try {
        if (this.delItemsFunc) {
          const flag = await this.delItemsFunc({ ids })
          if (flag) {
            this.$message.success("删除成功");
            this.getImageList();
          }
        } else {
          const res = await http["delete"](`${this.deleteBatchUrl}?ids=${ids}`);
          if (res.code === 0) {
            this.$message.success("删除成功");
            this.getImageList();
          }
        }
      } catch (err) {
        console.error(err)
      }

    },
    /**
     * flatAll
     */
    async flatAll () {
      const res = await http.post(`/api/flatall`);
      if (res.code === 0) {
        this.$message.success("成功");
        this.getImageList();
      }
    },
    /**
     * 双机文件/文件夹
     * @param {*} item
     */
    clickFoldItem (item) {
      if (item[this.dirFlagKey]) {
        this.pidpaths.push({
          name: item.name,
          parentid: item.id,
          page: 1,
          pagesize: 10,
        });
        this.refreshImageList();
      }
    },
    /**
     * 选择文件/文件夹
     * @param {*} item
     */
    selectItem (click_index, clicktype) {
      const item = this.list[click_index]
      const findIndex = this.selectList.findIndex((item1) => item1 === item);

      switch (clicktype) {
        case 'ctrl_click':
          if (findIndex > -1) {
            this.selectList.splice(findIndex, 1);

            return false // 返回失败，阻止拖拽
          } else {
            this.selectList.push(item);
          }
          break
        case 'shift_click':
          // eslint-disable-next-line no-case-declarations
          let selectIndexs = []
          this.selectList.forEach((item,) => {
            const fIndex = this.list.findIndex(item1 => item1 === item)
            if (fIndex > -1) {
              selectIndexs.push(fIndex)
            }
          })
          selectIndexs.sort()

          // eslint-disable-next-line no-case-declarations
          const min = Math.min(...selectIndexs)
          // eslint-disable-next-line no-case-declarations
          const tempSelectList = []
          if (click_index < min) {
            for (let i = click_index; i < min + 1; i++) {
              tempSelectList.push(this.list[i])
            }
            this.selectList = tempSelectList
          } else if (click_index > min) {
            for (let i = min; i < click_index + 1; i++) {
              tempSelectList.push(this.list[i])
            }
            this.selectList = tempSelectList
          }
          return this.selectList
        case 'click':
          if (findIndex > -1) { // 选中了已选中的条目，可能是拖拽，所以要等到回弹再那啥
            return item
          } else {
            this.selectList = [item]
          }
      }


    },
    /**
     * 剪切
     */
    shear (ev) {
      if (ev) {
        ev.stopPropagation()
        ev.preventDefault()
      }
      if (!Array.isArray(this.selectList) || this.selectList.length === 0) {
        this.$message.error("请先选择")
        return
      }
      this.shearList = this.selectList;
      this.$message.success("已剪切到粘贴板");
    },
    /**
     * 点击面包屑
     * @param {*} item
     */
    clickPath (index) {
      console.log(index)
      this.pidpaths = this.pidpaths.slice(0, index + 1);
      this.dataForm.page = this.pidpaths[this.pidpaths.length - 1].page
      this.dataForm.pagesize = this.pidpaths[this.pidpaths.length - 1].pagesize
      this.getImageList();
    },
    /**
     * 返回面包屑上一层
     */
    pidback () {
      this.pidpaths = this.pidpaths.slice(0, this.pidpaths.length - 1);
      this.dataForm.page = this.pidpaths[this.pidpaths.length - 1].page
      this.dataForm.pagesize = this.pidpaths[this.pidpaths.length - 1].pagesize
      this.getImageList();
    },
    /**
     * 开始拖拽项目
     * @param {*} down_ev
     * @param {*} fold_index
     */
    mouseDown (down_ev, fold_index) {
      down_ev.stopPropagation();
      down_ev.preventDefault();

      document.onmousemove = null
      document.onmouseup = null

      this.originPath.x = down_ev.clientX;
      this.originPath.y = down_ev.clientY;

      let up_set_item; // 在鼠标弹起时设置，防止拖拽影响
      if (down_ev.ctrlKey && down_ev.button === 0) {
        // ctrl + 鼠标左键组合键触发
        this.selectItem(fold_index, 'ctrl_click');
      } else if (down_ev.shiftKey && down_ev.button === 0) {
        // shift + 左键组合
        this.selectItem(fold_index, 'shift_click');
      } else if (down_ev.button === 0) {
        up_set_item = this.selectItem(fold_index, 'click');
      }
      if (down_ev.button === 2) {
        if (!this.selectList.includes(this.list[fold_index])) {
          this.selectList = [this.list[fold_index]]
        }
        // this.contextmenu(down_ev, fold_index)
      }



      if (down_ev.button === 0) { // 只有左键才能移动
        let moved = false // 是否有移动
        document.onmousemove = (move_ev) => {
          move_ev.stopPropagation();
          move_ev.preventDefault();


          moved = true
          this.move_deel(move_ev); // 点击方法
        };
        document.onmouseup = (up_ev) => {
          // console.log("onmoues up", fold_index, down_ev);
          up_ev.stopPropagation();
          up_ev.preventDefault();

          if (up_set_item && !moved) {
            this.selectList = [up_set_item]
          }

          document.onmousemove = null;
          this.move_end_deel(up_ev, async (dir_index) => {
            // 移动成功，移动到的目录的下标
            const target_item = this.list[dir_index];

            try {
              let isMoved = false
              if (target_item[this.dirFlagKey]) {
                // 如果是目录，那么就移动进去
                if (!Array.isArray(this.selectList) || this.selectList.length === 0) return

                if (this.moveFunc) {
                  isMoved = await this.moveFunc(this.selectList.map(item => ({
                    ...item,
                    [this.parentidKey]: target_item.id,
                  })))


                } else {
                  isMoved = await http.put(this.putBatchUrl, this.selectList.map(item => ({
                    ...item,
                    [this.parentidKey]: target_item.id,
                  })))
                }

                if (isMoved) {
                  this.getImageList()
                  this.$message.success("移动成功");
                }
              }

            } catch (err) {
              console.error(err)
            }

          });
        };
      } else if (down_ev.button === 2) {
        // console.log(down_ev)
      }

    },
    /**
     * 事件处理
     * @param {*} move_ev 鼠标移动事件
     */
    move_deel (move_ev) {
      const { clientX, clientY } = move_ev;
      for (let index = 0; index < this.list.length; index++) {
        if (this.selectList.includes(this.list[index])) {
          const { x, y } = this.originPath;
          const element = document.getElementById("image_item_" + this.list[index].id);
          element.style.transform = `translate(${clientX - x}px, ${clientY - y
            }px)`;
          element.style.zIndex = 123;
        } else {
          if (this.list[index][this.dirFlagKey]) {
            const element = document.getElementById("image_item_" + this.list[index].id);
            const { top, bottom, left, right } =
              element.getBoundingClientRect();
            if (
              left < clientX &&
              right > clientX &&
              top < clientY &&
              bottom > clientY
            ) {
              element.classList.add("active");
            } else {
              element.classList.remove("active");
            }
          }
        }
      }
    },
    /**
     * 拖拽结束事件
     * @param {*} up_ev
     * @param {*} callback
     */
    move_end_deel (up_ev, callback) {
      const { clientX, clientY } = up_ev;
      let target_index = -1
      for (let index = 0; index < this.list.length; index++) {
        const element = document.getElementById("image_item_" + this.list[index].id);
        if (element) {
          if (this.selectList.includes(this.list[index])) {
            element.style.transform = `translate(0, 0)`;
            element.style.zIndex = 12;
          } else {
            const { top, bottom, left, right } = element.getBoundingClientRect();
            if (
              left < clientX &&
              right > clientX &&
              top < clientY &&
              bottom > clientY
            ) {
              target_index = index
            }

          }
          element.classList.remove("active");
        }

      }

      // 目标文件// 如果是文件夹就进去
      if (typeof callback === "function" && target_index > -1) {
        callback(target_index);
      }
    },
    /**
     * 右键菜单
     * @param {*} ev
     * @param {*} fold_index
     */
    contextmenu (ev, fold_index,) {
      if (ev) { // 默认阻止
        ev.stopPropagation();
        ev.preventDefault();
      }

      // console.log(fold_index);

      const fold_item = this.list[fold_index];

      if (!this.selectList.includes(fold_item)) {
        this.selectList = [fold_item]
      }

      const { clientX, clientY } = ev

      if (fold_item[this.dirFlagKey]) {
        this.$createRightMenu(clientX, clientY, [
          {
            icon_class: "icon-folder-opened",
            text: "打开",
            click: (item) => {
              this.clickFoldItem(fold_item);
              console.log(item)
            },
          },
          {
            icon_class: "icon-scissors",
            text: "剪切",
            custom_style: {
              display: !this.pasteHereFunc ? 'none' : 'block',
            },
            click: (item) => {
              this.shearList = this.selectList
              this.$message.success("已剪切到粘贴板");
              console.log(item)
            },
          },
          {
            icon_class: "",
            text: "重命名",
            custom_style: {
              display: !this.submitRenameFunc ? 'none' : 'block',
            },
            click: (item) => {
              this.renameShow = true
              this.renameForm[this.dirNameKey] = fold_item[this.dirNameKey]
            },
          },
          {
            icon_class: "",
            text: "解散",
            custom_style: {
              display: !this.disband_foldFunc ? 'none' : 'block',
            },
            click: (item) => {
              this.disband_fold(fold_item.id, fold_item[this.parentidKey] || "");
            },
          },
        ]);
      } else {
        this.$createRightMenu(clientX, clientY, [
          {
            icon_class: "icon-download",
            text: "下载",
            click: (item) => {
              console.log(item);
            },
          },
          {
            icon_class: "icon-scissors",
            text: "剪切",
            custom_style: {
              display: !this.pasteHereFunc ? 'none' : 'block',
            },
            click: (item) => {
              this.shearList = this.selectList
              this.$message.success("已剪切到粘贴板");
              console.log(item)
            },
          },
          {
            icon_class: "",
            text: "重命名",
            custom_style: {
              display: !this.submitRenameFunc ? 'none' : 'block',
            },
            click: (item) => {
              this.renameShow = true
              this.renameForm[this.dirNameKey] = fold_item[this.dirNameKey]
              console.log(item)

            },
          },
          {
            icon_class: "icon-delete",
            text: "删除",
            click: (item) => {
              this.delItems()
              console.log(item)
            },
          },
          {
            icon_class: "icon-view",
            text: "预览",
            click: (item) => {
              this.previewSelect()
              console.log(item)
            },
          }
        ]);
      }
    },
    /**
     * 预览选中的图片
     */
    previewSelect () {
      if (Array.isArray(this.selectList)) {
        const imageList = this.selectList.filter(item => !item[this.dirFlagKey])
        if (imageList.length === 1) {
          // # 单图预览
          this.$hevueImgPreview({
            url: imageList[0].url
          })
        } else if (imageList.length > 1) {
          // # 多图预览
          this.$hevueImgPreview({
            multiple: true, // 开启多图预览模式
            nowImgIndex: 0, // 多图预览，默认展示第二张图片
            imgList: imageList.map(item => item.url), // 需要预览的多图数组
          })
        }
      }
    },
    /**
     * 判断是否点击在项目上，如果不是返回false
     * @param {*} ev
     */
    isClickOnItem (ev) {
      const { clientX, clientY } = ev
      let flag = false
      for (let index = 0; index < this.list.length; index++) {
        const element = document.getElementById("image_item_" + this.list[index].id);
        const { top, bottom, left, right } = element.getBoundingClientRect();
        if (
          left < clientX &&
          right > clientX &&
          top < clientY &&
          bottom > clientY
        ) {
          flag = true
        }
      }
      return flag
    },
    /**
     * 父组件右键菜单
     * @param {*} ev
     */
    containermenu (ev) {
      ev.stopPropagation();
      ev.preventDefault();

      this.containermousedown(ev)

      let rightMenuItems = [
        {
          icon_class: "icon-upload2",
          text: "上传",
          click: (item) => {
            this.upload()
            console.log(item)
          },
        },
        {
          icon_class: "icon-folder-add",
          text: "新建文件夹",
          click: (item) => {
            this.addDir()
            console.log(item)
          },
        },
        {
          icon_class: "icon-refresh",
          text: "刷新",
          click: (item) => {
            this.getImageList()
            console.log(item)
          },
        },

      ]
      if (Array.isArray(this.shearList) && this.shearList.length > 0) {
        rightMenuItems.push({
          icon_class: "",
          text: "粘贴",
          click: (item) => {
            this.pasteHere()
            console.log(item)
          },
        },)
      }
      this.$createRightMenu(ev.clientX, ev.clientY, rightMenuItems);
    },

    containermousedown (ev) {
      if (!this.isClickOnItem(ev)) {
        this.selectList = []
        document.onmousemove = null
        document.onmouseup = null
        ev.stopPropagation()
        // ev.preventDefault()
      }
    }
  },
});

;// CONCATENATED MODULE: ./package/h-filemanager/h-filemanager.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_filemanager_h_filemanagervue_type_script_lang_js_ = (h_filemanagervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-filemanager/h-filemanager.vue?vue&type=style&index=0&id=836995e6&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-filemanager/h-filemanager.vue?vue&type=style&index=0&id=836995e6&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./package/h-filemanager/h-filemanager.vue



;


/* normalize component */

var h_filemanager_component = normalizeComponent(
  h_filemanager_h_filemanagervue_type_script_lang_js_,
  h_filemanagervue_type_template_id_836995e6_scoped_true_render,
  h_filemanagervue_type_template_id_836995e6_scoped_true_staticRenderFns,
  false,
  null,
  "836995e6",
  null
  
)

/* harmony default export */ var h_filemanager = (h_filemanager_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-breadcrumb/h-breadcrumb.vue?vue&type=template&id=46f1073c&scoped=true&
var h_breadcrumbvue_type_template_id_46f1073c_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"h-breadcrumb h-btn"},[_c('div',{staticClass:"h-breadcrumb-ct"},_vm._l((_vm.list),function(item,index){return _c('div',{key:index,staticClass:"h-breadcrumb-item"},[_c('a',{on:{"click":function($event){return _vm.clickHandle(index)}}},[_vm._v(_vm._s(item.name))]),(index < _vm.list.length - 1)?_c('span',[_vm._v(_vm._s(_vm.separator))]):_vm._e()])}),0),(_vm.list.length > 1)?_c('div',{staticClass:"backbtn",on:{"click":_vm.crumb_back}},[_vm._v(" 返回 ")]):_vm._e()])
}
var h_breadcrumbvue_type_template_id_46f1073c_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-breadcrumb/h-breadcrumb.vue?vue&type=script&lang=js&

/* harmony default export */ var h_breadcrumbvue_type_script_lang_js_ = ({
 props: {
  separator: {
   type: String,
   default: "/"
  },
  list: {
   type: Array,
   default: () => []
  }
 },
 methods: {
  clickHandle (index) {
   if (index < this.list.length - 1) {
    this.$emit("bread-click", index)
   }
  },
  crumb_back () {
   this.$emit("bread-back")
  }
 }
});

;// CONCATENATED MODULE: ./package/h-breadcrumb/h-breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_breadcrumb_h_breadcrumbvue_type_script_lang_js_ = (h_breadcrumbvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-breadcrumb/h-breadcrumb.vue?vue&type=style&index=0&id=46f1073c&prod&scoped=true&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-breadcrumb/h-breadcrumb.vue?vue&type=style&index=0&id=46f1073c&prod&scoped=true&lang=scss&

;// CONCATENATED MODULE: ./package/h-breadcrumb/h-breadcrumb.vue



;


/* normalize component */

var h_breadcrumb_component = normalizeComponent(
  h_breadcrumb_h_breadcrumbvue_type_script_lang_js_,
  h_breadcrumbvue_type_template_id_46f1073c_scoped_true_render,
  h_breadcrumbvue_type_template_id_46f1073c_scoped_true_staticRenderFns,
  false,
  null,
  "46f1073c",
  null
  
)

/* harmony default export */ var h_breadcrumb = (h_breadcrumb_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-form/h-form.vue?vue&type=template&id=7ac0a395&
var h_formvue_type_template_id_7ac0a395_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"h-form"},[_vm._t("default")],2)
}
var h_formvue_type_template_id_7ac0a395_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-form/h-form.vue?vue&type=script&lang=js&

/* harmony default export */ var h_formvue_type_script_lang_js_ = ({
 name: "h-form",
 props: {
  model: {
   type: Object,
  },
  rules: {
   type: Object,
  }
 },
 methods: {
  bsValidate (childNodes, model, rules) {
   if (!rules) {
    console.info("请传入校验规则")
    return true
   }
   if (!childNodes) {
    console.error("请传入需要验证的表单实例")
    return false
   }
   if (!model) {
    console.error("请传入需要验证的表单数据")
    return false
   }
   if (childNodes.length > 0) {
    if (childNodes && childNodes.length > 0) {
     let validate_flag = true
     childNodes.forEach(el => {
      if (el.$options.propsData.prop) {
       let rule = rules[el.$options.propsData.prop]
       if (Array.isArray(rule) && rule.length > 0) {
        let errorMsg = []
        rule.forEach(item => {
         let value = model[el.$options.propsData.prop]
         if (item.required) {
          if (!value) {
           errorMsg.push(item.message || "数据不能为空")
          }
         }
         if (item.min) {
          try {
           let temp_value = +value
           if (temp_value < item.min) {
            errorMsg.push(item.message || "数据不能小于" + item.min)
           }
          } catch (err) {
           console.warn("不能验证非数字型的最大值最小值")
          }
         }
         if (item.max) {
          try {
           let temp_value = +value
           if (temp_value > item.max) {
            errorMsg.push(item.message || "数据不能大于" + item.max)
           }
          } catch (err) {
           console.warn("不能验证非数字型的最大值最小值")
          }
         }
         if (item.minlength) {
          try {
           let temp_str = value.toString()
           if (temp_str.length < item.minlength) {
            errorMsg.push(item.message || "长度不能小于" + item.minlength)
           }
          } catch (err) {
           console.warn("不能验证非字符型的最大值最小值")
          }
         }
         if (item.maxlength) {
          try {
           let temp_str = value.toString()
           if (temp_str.length > item.maxlength) {
            errorMsg.push(item.message || "长度不能大于" + item.maxlength)
           }
          } catch (err) {
           console.warn("不能验证非字符型的最大值最小值")
          }
         }
         if (item.equalTo) {
          if (value !== model[item.equalTo]) {
           errorMsg.push(item.message || "数据不相等")
          }
         }
         if (item.number) {
          if (!/^[0-9]+.?[0-9]*/.test(value.toString())) {
           errorMsg.push(item.message || "数据必须是数字")
          }
         }
         if (item.digits) {
          if (!/[1−9]+[0−9]∗]∗/.test(value.toString())) {
           errorMsg.push(item.message || "数据必须是整数数字")
          }
         }
         if (typeof item.validator === 'function') {
          if (item.validator(value)) {
           errorMsg.push(item.message || "自定义验证失败")
          }
         }
        })

        el.$data.errmsg = errorMsg.join("，")
        if (el.$data.errmsg && validate_flag) {
         validate_flag = false
        }

       }
      }

     })
     return validate_flag
    } else {
     // console.info("没有需要验证的form-item")
     return true
    }

   } else {
    return true
   }
  },
  validate () {
   // 获取h-form下所有具有prop属性的子节点，
   // 找到prop属性是否在rules里存在
   // 存在的话判断model[prop]是否符合rule规则
   // 全部符合的话返回true
   // 如果有不符合返回false，并且在响应的node下设置errormsg
   const childNodes = (this.$slots.default || []).filter(child => {
    return child.componentOptions.tag === 'h-form-item'
   }).map(item => item.componentInstance)
   return this.bsValidate(childNodes, this.model, this.rules)
  }
 }
});

;// CONCATENATED MODULE: ./package/h-form/h-form.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_form_h_formvue_type_script_lang_js_ = (h_formvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./package/h-form/h-form.vue





/* normalize component */
;
var h_form_component = normalizeComponent(
  h_form_h_formvue_type_script_lang_js_,
  h_formvue_type_template_id_7ac0a395_render,
  h_formvue_type_template_id_7ac0a395_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var h_form = (h_form_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-form/h-form-item.vue?vue&type=template&id=119f3959&scoped=true&
var h_form_itemvue_type_template_id_119f3959_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"h-form-item"},[_c('label',{attrs:{"for":""}},[_vm._v(_vm._s(_vm.label))]),_vm._t("default"),(_vm.errmsg)?_c('div',[_vm._v(_vm._s(_vm.errmsg))]):_vm._e()],2)
}
var h_form_itemvue_type_template_id_119f3959_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-form/h-form-item.vue?vue&type=script&lang=js&

/* harmony default export */ var h_form_itemvue_type_script_lang_js_ = ({
 name: "h-form-item",
 props: {
  prop: {
   type: String,
  },
  label: {
   type: String,
  },
 },
 data() {
  return {
   errmsg: ''
  }
 }
});

;// CONCATENATED MODULE: ./package/h-form/h-form-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_form_h_form_itemvue_type_script_lang_js_ = (h_form_itemvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-form/h-form-item.vue?vue&type=style&index=0&id=119f3959&prod&scoped=true&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-form/h-form-item.vue?vue&type=style&index=0&id=119f3959&prod&scoped=true&lang=scss&

;// CONCATENATED MODULE: ./package/h-form/h-form-item.vue



;


/* normalize component */

var h_form_item_component = normalizeComponent(
  h_form_h_form_itemvue_type_script_lang_js_,
  h_form_itemvue_type_template_id_119f3959_scoped_true_render,
  h_form_itemvue_type_template_id_119f3959_scoped_true_staticRenderFns,
  false,
  null,
  "119f3959",
  null
  
)

/* harmony default export */ var h_form_item = (h_form_item_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-select/h-select.vue?vue&type=template&id=05715daa&scoped=true&
var h_selectvue_type_template_id_05715daa_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"h-select"},[_c('div',{staticClass:"h-select-value",on:{"click":_vm.triggerSelectList}},[(_vm.currentLabel)?_c('span',{staticClass:"h-select-value-text"},[_vm._v(_vm._s(_vm.currentLabel))]):_c('span',{staticClass:"h-select-value-placeholder"},[_vm._v(_vm._s(_vm.placeholder))])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"h-select-container"},[_c('ul',{ref:"hSelectItemsRef",staticClass:"h-select-items"},[_vm._t("default"),(!_vm.$slots.default && _vm.list)?_vm._l((_vm.list),function(item,index){return _c('li',{key:index,staticClass:"h-select-item",on:{"click":function($event){return _vm.chooseItem(item)}}},[_vm._v(" "+_vm._s(item[_vm.labelKey])+" ")])}):_vm._e()],2)])])
}
var h_selectvue_type_template_id_05715daa_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-select/h-select.vue?vue&type=script&lang=js&


/* harmony default export */ var h_selectvue_type_script_lang_js_ = ({
 name: "h-select",
 props: {
  value: {
   type: [String, Number, Boolean]
  },
  placeholder: {
   type: String,
   default: "请选择"
  },
  list: Array,
  labelKey: {
   type: String,
   default: "label"
  },
  valueKey: {
   type: String,
   default: "value"
  },
 },
 computed: {
  selectValue: {
   get () {
    return this.value
   },
   set (val) {
    this.$emit("input", val)
   }
  },
  currentLabel () {
   return (this.selectList.find(item => item[this.valueKey] === this.selectValue) || {})[this.labelKey]
  }
 },
 data () {
  return {
   isActive: false,
   selectList: [],
  }
 },
 mounted () {
  const selectItemsList = (this.$children||[]).filter(item => item.$options._componentTag === "h-select-item")
  if (selectItemsList && selectItemsList.length > 0) {
   this.selectList = selectItemsList.map(item => ({
    label: item.label,
    value: item.value,
   })) || []
  } else if (this.list) {
   this.selectList = this.list
  }


 },
 methods: {
  chooseItem (item) {
   this.setValue(item[this.valueKey])
  },
  setValue (value) {
   this.selectValue = value
   this.triggerSelectList()
  },
  triggerSelectList (ev) {
   if (ev) {
    const el = findTargetEl(ev.target, "h-select-value")
    if (el) {
     const { left, bottom, right, top } = el.getBoundingClientRect()
     const { offsetWidth, offsetHeight } = this.$refs.hSelectItemsRef

    }
   }
   this.isActive = !this.isActive
  }
 }
});

;// CONCATENATED MODULE: ./package/h-select/h-select.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_select_h_selectvue_type_script_lang_js_ = (h_selectvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-select/h-select.vue?vue&type=style&index=0&id=05715daa&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-select/h-select.vue?vue&type=style&index=0&id=05715daa&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./package/h-select/h-select.vue



;


/* normalize component */

var h_select_component = normalizeComponent(
  h_select_h_selectvue_type_script_lang_js_,
  h_selectvue_type_template_id_05715daa_scoped_true_render,
  h_selectvue_type_template_id_05715daa_scoped_true_staticRenderFns,
  false,
  null,
  "05715daa",
  null
  
)

/* harmony default export */ var h_select = (h_select_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-select/h-select-item.vue?vue&type=template&id=c88a1c46&
var h_select_itemvue_type_template_id_c88a1c46_render = function render(){var _vm=this,_c=_vm._self._c;return _c('li',{staticClass:"h-select-item",on:{"click":_vm.chooseItem}},[(_vm.label)?_c('div',[_vm._v(" "+_vm._s(_vm.label)+" ")]):_c('div',[_vm._t("default")],2)])
}
var h_select_itemvue_type_template_id_c88a1c46_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-select/h-select-item.vue?vue&type=script&lang=js&

/* harmony default export */ var h_select_itemvue_type_script_lang_js_ = ({
 name: "h-select-item",
 props: {
  label: String,
  value: [String, Number, Boolean],
 },
 methods: {
  chooseItem() {
   if(this.$parent && this.$parent.$options && this.$parent.$options._componentTag === "h-select") {
    this.$parent.setValue(this.value)
   }
  }
 }
});

;// CONCATENATED MODULE: ./package/h-select/h-select-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_select_h_select_itemvue_type_script_lang_js_ = (h_select_itemvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./package/h-select/h-select-item.vue





/* normalize component */
;
var h_select_item_component = normalizeComponent(
  h_select_h_select_itemvue_type_script_lang_js_,
  h_select_itemvue_type_template_id_c88a1c46_render,
  h_select_itemvue_type_template_id_c88a1c46_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var h_select_item = (h_select_item_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-pagination/h-pagination.vue?vue&type=template&id=1165334c&scoped=true&
var h_paginationvue_type_template_id_1165334c_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"h-pagination"},[_c('div',{staticClass:"h-pagination-total"},[_vm._v("共"+_vm._s(_vm.total)+"条数据")]),_c('ul',[_c('li',[_c('a',{on:{"click":_vm.prevPage}},[_vm._v("<")])]),_vm._l((_vm.pages),function(item,index){return _c('li',{key:index,class:{ active: item.page === _vm.currentPage }},[(item.type === 'page')?_c('a',{on:{"click":function($event){return _vm.changePage(item.page)}}},[_vm._v(_vm._s(item.page))]):_c('span',[_vm._v(_vm._s(item.name))])])}),_c('li',[_c('a',{on:{"click":_vm.nextPage}},[_vm._v(">")])])],2),_c('div',{staticClass:"h-pagesize-selector"},[_c('a',{class:_vm.currentPagesize === 10 ? 'active' : '',on:{"click":function($event){_vm.currentPagesize = 10}}},[_vm._v("10")]),_c('a',{class:_vm.currentPagesize === 20 ? 'active' : '',on:{"click":function($event){_vm.currentPagesize = 20}}},[_vm._v("20")]),_c('a',{class:_vm.currentPagesize === 30 ? 'active' : '',on:{"click":function($event){_vm.currentPagesize = 30}}},[_vm._v("30")])])])
}
var h_paginationvue_type_template_id_1165334c_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-pagination/h-pagination.vue?vue&type=script&lang=js&

/* harmony default export */ var h_paginationvue_type_script_lang_js_ = ({
    props: {
        page: {
            type: Number,
            default: 1,
        },
        pagesize: {
            type: Number,
            default: 10,
        },
        pageSizes: Array,
        total: {
            type: Number,
            default: 0,
        },
        showTotal: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        pages() {
            if (this.total === 0) {
                return [{
                    page: 1,
                    type: 'page',
                }]
            }
            const total = this.total
            const pagesize = this.currentPagesize
            const page = this.currentPage
            const all_pages = Math.ceil(total / pagesize)
            if (all_pages > 5) {
                let temparr = []
                if (page - 1 > 1) {
                    temparr.push({
                        page: 1,
                        type: 'page',
                    })
                    if (page - 2 > 1) {
                        temparr.push({
                            name: "..."
                        })
                    }
                }
                if (page - 1 >= 1) {
                    temparr.push({
                        page: page - 1,
                        type: 'page',
                    })
                }
                temparr.push({
                    page: page,
                    type: 'page',
                })
                if (page + 1 <= all_pages) {
                    temparr.push({
                        page: page + 1,
                        type: 'page',
                    })
                }
                if (page + 1 < all_pages) {
                    if (page + 2 < all_pages) {
                        temparr.push({
                            name: '...'
                        })
                    }
                    temparr.push({
                        page: all_pages,
                        type: 'page',
                    })
                }
                return temparr
            } else {
                let temparr = []
                for (let i = 0; i < all_pages; i++) {
                    temparr.push({
                        page: i + 1,
                        type: 'page',
                    })
                }
                return temparr
            }
        }
    },
    watch: {
        page(page) { this.currentPage = page },
        pagesize(pagesize) { this.currentPagesize = pagesize },
        currentPage(page) {
            this.$emit("change-page", page)
            this.$emit("update:page", page)
        },
        currentPagesize(pagesize) {
            this.$emit("change-pagesize", pagesize)
            this.$emit("update:pagesize", pagesize)
        }
    },
    data() {
        return {
            currentPage: 1,
            currentPagesize: 10,
        }
    },
    mounted() {
        this.currentPage = this.page
        this.currentPagesize = this.pagesize
    },
    methods: {
        changePage(page) {
            if (page === this.currentPage) return
            this.currentPage = page
            this.$emit("change-page", page)
            this.$emit("update:page", page)
        },
        prevPage() {
            let all_pages = Math.ceil(this.total / this.pagesize)
            if (all_pages === 1) return
            if (this.currentPage === 1) {
                this.currentPage = all_pages
            } else {
                this.currentPage = this.currentPage - 1

            }
        },
        nextPage() {
            let all_pages = Math.ceil(this.total / this.pagesize)
            if (all_pages === 1) return
            if (this.currentPage === all_pages) {
                this.currentPage = 1
            } else {
                this.currentPage = this.currentPage + 1
            }
        }
    }
});

;// CONCATENATED MODULE: ./package/h-pagination/h-pagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_pagination_h_paginationvue_type_script_lang_js_ = (h_paginationvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-pagination/h-pagination.vue?vue&type=style&index=0&id=1165334c&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-pagination/h-pagination.vue?vue&type=style&index=0&id=1165334c&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./package/h-pagination/h-pagination.vue



;


/* normalize component */

var h_pagination_component = normalizeComponent(
  h_pagination_h_paginationvue_type_script_lang_js_,
  h_paginationvue_type_template_id_1165334c_scoped_true_render,
  h_paginationvue_type_template_id_1165334c_scoped_true_staticRenderFns,
  false,
  null,
  "1165334c",
  null
  
)

/* harmony default export */ var h_pagination = (h_pagination_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-button/h-button.vue?vue&type=template&id=92001c72&scoped=true&
var h_buttonvue_type_template_id_92001c72_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',{staticClass:"h-button",class:[_vm.type, _vm.size, { block: _vm.block },],on:{"click":_vm.emitClick}},[_vm._t("default")],2)
}
var h_buttonvue_type_template_id_92001c72_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-button/h-button.vue?vue&type=script&lang=js&

/* harmony default export */ var h_buttonvue_type_script_lang_js_ = ({
  props: {
    type: String,
    size: String,
    block: Boolean,
  },
  mounted() {
  },
  methods: {
    emitClick(ev) {
      this.$emit("click", ev)
    }
  }
});

;// CONCATENATED MODULE: ./package/h-button/h-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_button_h_buttonvue_type_script_lang_js_ = (h_buttonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-button/h-button.vue?vue&type=style&index=0&id=92001c72&prod&scoped=true&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-button/h-button.vue?vue&type=style&index=0&id=92001c72&prod&scoped=true&lang=scss&

;// CONCATENATED MODULE: ./package/h-button/h-button.vue



;


/* normalize component */

var h_button_component = normalizeComponent(
  h_button_h_buttonvue_type_script_lang_js_,
  h_buttonvue_type_template_id_92001c72_scoped_true_render,
  h_buttonvue_type_template_id_92001c72_scoped_true_staticRenderFns,
  false,
  null,
  "92001c72",
  null
  
)

/* harmony default export */ var h_button = (h_button_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-input/h-input.vue?vue&type=template&id=24122e56&scoped=true&
var h_inputvue_type_template_id_24122e56_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return ((_vm.type)==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputVal),expression:"inputVal"}],staticClass:"h-input",class:[_vm.size],attrs:{"placeholder":_vm.placeholder,"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.inputVal)?_vm._i(_vm.inputVal,null)>-1:(_vm.inputVal)},on:{"change":function($event){var $$a=_vm.inputVal,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.inputVal=$$a.concat([$$v]))}else{$$i>-1&&(_vm.inputVal=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.inputVal=$$c}}}}):((_vm.type)==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputVal),expression:"inputVal"}],staticClass:"h-input",class:[_vm.size],attrs:{"placeholder":_vm.placeholder,"type":"radio"},domProps:{"checked":_vm._q(_vm.inputVal,null)},on:{"change":function($event){_vm.inputVal=null}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputVal),expression:"inputVal"}],staticClass:"h-input",class:[_vm.size],attrs:{"placeholder":_vm.placeholder,"type":_vm.type},domProps:{"value":(_vm.inputVal)},on:{"input":function($event){if($event.target.composing)return;_vm.inputVal=$event.target.value}}})
}
var h_inputvue_type_template_id_24122e56_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-input/h-input.vue?vue&type=script&lang=js&

/* harmony default export */ var h_inputvue_type_script_lang_js_ = ({
 name: "h-input",
 props: {
  value: {
   type: [String, Number,],
  },
  type: {
   type: String,
   default: 'text'
  },
  placeholder: {
   type: String,
   default: '请输入内容'
  },
  size: String,
 },
 computed: {
  inputVal: {
   get () {
    return this.value
   },
   set (val) {
    this.$emit("input", val)
   }
  }
 },
 data () {
  return {
  }
 },
});

;// CONCATENATED MODULE: ./package/h-input/h-input.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_input_h_inputvue_type_script_lang_js_ = (h_inputvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-input/h-input.vue?vue&type=style&index=0&id=24122e56&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-input/h-input.vue?vue&type=style&index=0&id=24122e56&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./package/h-input/h-input.vue



;


/* normalize component */

var h_input_component = normalizeComponent(
  h_input_h_inputvue_type_script_lang_js_,
  h_inputvue_type_template_id_24122e56_scoped_true_render,
  h_inputvue_type_template_id_24122e56_scoped_true_staticRenderFns,
  false,
  null,
  "24122e56",
  null
  
)

/* harmony default export */ var h_input = (h_input_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-fall/h-fall.vue?vue&type=template&id=17b51ebc&scoped=true&
var h_fallvue_type_template_id_17b51ebc_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('div',{staticClass:"list list-nowrap"},_vm._l((_vm.split_products),function(item0,index0){return _c('div',{key:index0,staticClass:"list-column",attrs:{"id":'listColumn_' + index0}},[(index0 === 0)?[(_vm.swiperData && _vm.swiperData.list && _vm.swiperData.list.length > 0)?_c('div',{staticClass:"h-fall-item",staticStyle:{"background":"transparent","overflow":"hidden"},style:({
      borderRadius: _vm.swiperData.round ? _vm.swiperData.round * 2 + 'rem' : 0,
      height: _vm.swiperData && _vm.swiperData.height ? (_vm.swiperData.height * 2 - 10 + 'rem') : 300 - 10 + 'rem',
     })},[(_vm.swiperData)?_c('h-swiper',[_c('h-swiper-item')],1):_vm._e()],1):_vm._e()]:_vm._e()],2)}),0)])
}
var h_fallvue_type_template_id_17b51ebc_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-fall/h-fall-item.vue?vue&type=template&id=f21acf64&
var h_fall_itemvue_type_template_id_f21acf64_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"h-fall-item"},[_vm._t("default")],2)
}
var h_fall_itemvue_type_template_id_f21acf64_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-fall/h-fall-item.vue?vue&type=script&lang=js&

/* harmony default export */ var h_fall_itemvue_type_script_lang_js_ = ({
 data () {
  return {

  }
 }
});

;// CONCATENATED MODULE: ./package/h-fall/h-fall-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_fall_h_fall_itemvue_type_script_lang_js_ = (h_fall_itemvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./package/h-fall/h-fall-item.vue





/* normalize component */
;
var h_fall_item_component = normalizeComponent(
  h_fall_h_fall_itemvue_type_script_lang_js_,
  h_fall_itemvue_type_template_id_f21acf64_render,
  h_fall_itemvue_type_template_id_f21acf64_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var h_fall_item = (h_fall_item_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-fall/h-fall.vue?vue&type=script&lang=js&



/* harmony default export */ var h_fallvue_type_script_lang_js_ = ({
 props: {
  list: {
   type: Object,
   default: () => ({})
  },
  columnLen: {
   type: Number,
   default: 1,
  }
 },
 data () {
  return {
   split_products: [],
   loadCount: 0,
   isLoading: false,
  }
 },
 watch: {
  list (val) {
   if (!val || val.length === 0) {
    this.initProducts()
   }
  },
 },
 mounted () {
  if (this.columnLen && this.columnLen > 1) {
   this.reset_split_list()
  }
 },
 methods: {
  reset_split_list () {
   this.loadCount = 0
   this.split_products = []
   for (const len in this.columnLen) {
    this.split_products.push([])
   }
   console.log(this.split_products)
  },
  startLoadImage () {
   if (this.productList.length === 0) return;
   this.isLoading = true;
   const listColumn_0_height = this.getDomHeight('listColumn_0');
   const listColumn_1_height = this.getDomHeight('listColumn_1');
   if (listColumn_0_height <= listColumn_1_height) {
    this.split_products[0].push(this.productList.shift());
   } else {
    this.split_products[1].push(this.productList.shift());
   }
  },
  getDomHeight (domId) {
   const dom = document.getElementById(domId);
   return dom.offsetHeight
  },
  // 所有圖片加載完畢之後設置瀑布流
  imageLoad () {
   if (this.productList.length === 0) {
    this.isLoading = false;
    return;
   }
   const listColumn_0_height = this.getDomHeight('listColumn_0');
   const listColumn_1_height = this.getDomHeight('listColumn_1');
   if (listColumn_0_height <= listColumn_1_height) {
    this.split_products[0].push(this.productList.shift());
   } else {
    this.split_products[1].push(this.productList.shift());
   }
  },
  createFallItem(item) {
const fallItem = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.h)(h_fall_item, {...item})
console.log(fallItem)
  }

 }

});

;// CONCATENATED MODULE: ./package/h-fall/h-fall.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_fall_h_fallvue_type_script_lang_js_ = (h_fallvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-fall/h-fall.vue?vue&type=style&index=0&id=17b51ebc&prod&scoped=true&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-fall/h-fall.vue?vue&type=style&index=0&id=17b51ebc&prod&scoped=true&lang=scss&

;// CONCATENATED MODULE: ./package/h-fall/h-fall.vue



;


/* normalize component */

var h_fall_component = normalizeComponent(
  h_fall_h_fallvue_type_script_lang_js_,
  h_fallvue_type_template_id_17b51ebc_scoped_true_render,
  h_fallvue_type_template_id_17b51ebc_scoped_true_staticRenderFns,
  false,
  null,
  "17b51ebc",
  null
  
)

/* harmony default export */ var h_fall = (h_fall_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-notice/h-notice.vue?vue&type=template&id=6c35ef57&scoped=true&
var h_noticevue_type_template_id_6c35ef57_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"flex h-notice"},[_c('div',{staticClass:"i-container"},[_c('i',{staticClass:"el-icon-bell",style:({
    color: _vm.iconColor,
    fontSize: _vm.iconSize + 'px'
  })})]),_c('div',{ref:"scrollRef",staticClass:"scroll-text",style:({
  transform: `translateX(${_vm.tranX}px)`
})},[_c('div',{ref:"textContainerRef",staticClass:"text-container",style:({
     color: _vm.textColor,
    fontSize: _vm.textSize + 'px'
  })},[_vm._v(" "+_vm._s(_vm.text)+" ")])])])
}
var h_noticevue_type_template_id_6c35ef57_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.Math === Math) {
        return __webpack_require__.g;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function ResizeObserver_es_throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = ResizeObserver_es_throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ var ResizeObserver_es = (index);

;// CONCATENATED MODULE: ./node_modules/throttle-debounce/esm/index.js
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function esm_throttle (delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return esm_throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}


//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./utils/resize-event.js



const isServer = typeof window === 'undefined';

/* istanbul ignore next */
const resizeHandler = function(entries) {
    for (let entry of entries) {
        const listeners = entry.target.__resizeListeners__ || [];
        if (listeners.length) {
            listeners.forEach(fn => {
                fn();
            });
        }
    }
};

/* istanbul ignore next */
const addResizeListener = function(element, fn) {
    if (isServer) return;
    if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        element.__ro__ = new ResizeObserver_es(debounce(16, resizeHandler));
        element.__ro__.observe(element);
    }
    element.__resizeListeners__.push(fn);
};

/* istanbul ignore next */
const removeResizeListener = function(element, fn) {
    if (!element || !element.__resizeListeners__) return;
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
        element.__ro__.disconnect();
    }
};

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-notice/h-notice.vue?vue&type=script&lang=js&



/* harmony default export */ var h_noticevue_type_script_lang_js_ = ({
 name: "h-notice",
 props: {
   text: String,
   speed: {
     type: Number,
     default: 0.2
   },
   iconColor: {
     type: String,
     default: "#ff9932"
   },
   iconSize: {
     type: Number,
     default: 16
   },
   textColor: {
     type: String,
     default: "#ff9932"
   },
   textSize: {
     type: Number,
     default: 16
   }
 },
 data() {
   return {
     tranX: 0,
   }
 },
 mounted() {
   this.setScrollInteval()
   addResizeListener(this.$refs.textContainerRef, this.setScrollInteval)
 },
 destroyed() {
   if(this.$refs.textContainerRef) removeResizeListener(this.$refs.textContainerRef, this.setScrollInteval)
 },
 methods: {
   setScrollInteval() {
    if(!this.$refs.scrollRef || !this.$refs.textContainerRef) return
     const scrollWidth = this.$refs.scrollRef.offsetWidth
     const textWidth = this.$refs.textContainerRef.offsetWidth
     this.tranX= 0
     if (this.interval) clearInterval(this.interval)
     if (textWidth <= scrollWidth) return
     this.interval = setInterval(() => {
       if (textWidth > scrollWidth) {
         if (this.tranX < -textWidth- 3) {
           this.tranX = scrollWidth + 3
         } else {
           this.tranX = this.tranX - this.speed
         }
       }
     }, 1)
   }
 }
});

;// CONCATENATED MODULE: ./package/h-notice/h-notice.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_notice_h_noticevue_type_script_lang_js_ = (h_noticevue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-notice/h-notice.vue?vue&type=style&index=0&id=6c35ef57&prod&scoped=true&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-notice/h-notice.vue?vue&type=style&index=0&id=6c35ef57&prod&scoped=true&lang=scss&

;// CONCATENATED MODULE: ./package/h-notice/h-notice.vue



;


/* normalize component */

var h_notice_component = normalizeComponent(
  h_notice_h_noticevue_type_script_lang_js_,
  h_noticevue_type_template_id_6c35ef57_scoped_true_render,
  h_noticevue_type_template_id_6c35ef57_scoped_true_staticRenderFns,
  false,
  null,
  "6c35ef57",
  null
  
)

/* harmony default export */ var h_notice = (h_notice_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-search/h-search.vue?vue&type=template&id=0a786bd2&scoped=true&
var h_searchvue_type_template_id_0a786bd2_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"h-search border-card primary",class:_vm.size},[_c('i',{staticClass:"el-icon-search"}),_c('input',{attrs:{"type":"text","placeholder":_vm.placeholder}}),_vm._m(0)])
}
var h_searchvue_type_template_id_0a786bd2_scoped_true_staticRenderFns = [function (){var _vm=this,_c=_vm._self._c;return _c('a',{staticClass:"btn-search"},[_c('img',{attrs:{"src":"data:image/png;base64,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","alt":""}})])
}]


;// CONCATENATED MODULE: ./package/h-search/h-search.vue?vue&type=template&id=0a786bd2&scoped=true&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-search/h-search.vue?vue&type=script&lang=js&

/* harmony default export */ var h_searchvue_type_script_lang_js_ = ({
 name: "h-search",
 props: {
   placeholder: String,
   size: {
     type: String,
     default: 'default'
   }
 }
});

;// CONCATENATED MODULE: ./package/h-search/h-search.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_search_h_searchvue_type_script_lang_js_ = (h_searchvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-search/h-search.vue?vue&type=style&index=0&id=0a786bd2&prod&scoped=true&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-search/h-search.vue?vue&type=style&index=0&id=0a786bd2&prod&scoped=true&lang=scss&

;// CONCATENATED MODULE: ./package/h-search/h-search.vue



;


/* normalize component */

var h_search_component = normalizeComponent(
  h_search_h_searchvue_type_script_lang_js_,
  h_searchvue_type_template_id_0a786bd2_scoped_true_render,
  h_searchvue_type_template_id_0a786bd2_scoped_true_staticRenderFns,
  false,
  null,
  "0a786bd2",
  null
  
)

/* harmony default export */ var h_search = (h_search_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-router/h-router-item.vue?vue&type=template&id=1604869c&scoped=true&
var h_router_itemvue_type_template_id_1604869c_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('li',{ref:"hRouterChildrenRef",staticClass:"h-router-item",class:[{ active: _vm.active, childrenShow: _vm.childrenShow }],on:{"click":_vm.clickHandle}},[_vm._v(" "+_vm._s(_vm.name)+" "),(_vm.hasChildren)?_c('div',{staticClass:"h-router-children"},[_c('ul',{staticClass:"h-router-children-ul"},_vm._l((_vm.children),function(item,index){return _c('li',{key:index,staticClass:"h-router-children-li"},[_vm._v(_vm._s(item.name))])}),0)]):_vm._e()])
}
var h_router_itemvue_type_template_id_1604869c_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-router/h-router-item.vue?vue&type=script&lang=js&


/* harmony default export */ var h_router_itemvue_type_script_lang_js_ = ({
 props: {
  name: String,
  index: String,
  active: Boolean,
  children: Array,
 },
 computed: {
  hasChildren () {
   return Array.isArray(this.children) && this.children.length > 0
  }
 },
 data () {
  return {
   childrenShow: false,
   click_options: null,
  }
 },
 watch: {
  childrenShow (val) {
   this.click_options = {
    el: this.$refs.hRouterChildrenRef,
    callback: (val) => {
     if (!val) {
      this.childrenShow = false
     }
    }
   }
   if (val) {
    addDocumentClickListener(this.click_options)
   } else {
    removeDocumentClickListener(this.click_options)
   }
  }
 },
 destroyed () {
  if (this.childrenShow && this.click_options) {
   removeDocumentClickListener(this.click_options)
  }
 },
 methods: {
  clickHandle () {
   if (this.hasChildren) {
    this.childrenShow = !this.childrenShow
   } else {
    this.$emit("changeRouter", this.index)
   }
  }
 }
});

;// CONCATENATED MODULE: ./package/h-router/h-router-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_router_h_router_itemvue_type_script_lang_js_ = (h_router_itemvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-router/h-router-item.vue?vue&type=style&index=0&id=1604869c&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-router/h-router-item.vue?vue&type=style&index=0&id=1604869c&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./package/h-router/h-router-item.vue



;


/* normalize component */

var h_router_item_component = normalizeComponent(
  h_router_h_router_itemvue_type_script_lang_js_,
  h_router_itemvue_type_template_id_1604869c_scoped_true_render,
  h_router_itemvue_type_template_id_1604869c_scoped_true_staticRenderFns,
  false,
  null,
  "1604869c",
  null
  
)

/* harmony default export */ var h_router_item = (h_router_item_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-router/h-router.vue?vue&type=script&lang=js&


/* harmony default export */ var h_routervue_type_script_lang_js_ = ({
 render (h) {
  const routerItemList = []
  this.list.forEach((item, index) => {
   let childrens = [];
   const routerItem = h(h_router_item, {
    props: {
     ...item,
     active: this.currentIndex === item.index,
     key: index,
    },
    domProps: {
     key: index,
    },
    style: {
     background: this.background,
    },
    on: {
     changeRouter: this.changeRouter
    },
   }, childrens)
   routerItemList.push(routerItem)
  })

  return h("ul", {
   attrs: {
    class: "h-router"
   },
   data () {
    return {

    }
   }
  }, routerItemList)
 },
 props: {
  list: {
   type: Array,
   default: () => []
  },
  background: String,
 },
 data () {
  return {
   currentIndex: '',
  }
 },
 methods: {
  changeRouter (router) {
   console.log('changeRouter', router)
   this.currentIndex = router
  }
 }
});

;// CONCATENATED MODULE: ./package/h-router/h-router.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_router_h_routervue_type_script_lang_js_ = (h_routervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-router/h-router.vue?vue&type=style&index=0&id=1e133ffd&prod&lang=scss&scoped=true&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-router/h-router.vue?vue&type=style&index=0&id=1e133ffd&prod&lang=scss&scoped=true&

;// CONCATENATED MODULE: ./package/h-router/h-router.vue
var h_router_render, h_router_staticRenderFns
;

;


/* normalize component */

var h_router_component = normalizeComponent(
  h_router_h_routervue_type_script_lang_js_,
  h_router_render,
  h_router_staticRenderFns,
  false,
  null,
  "1e133ffd",
  null
  
)

/* harmony default export */ var h_router = (h_router_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-swiper/h-swiper.vue?vue&type=template&id=e53428a4&scoped=true&
var h_swipervue_type_template_id_e53428a4_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"h-swiper",attrs:{"id":_vm.uid},on:{"mousedown":_vm.ondragStart}},[_c('div',{ref:"swiperContainerRef",staticClass:"h-swiper-container",style:({
        transform: `translateX(${_vm.tranx}px)`,
        transition: !_vm.ondraging ? `transform ${_vm.duration / 1000}s ease-in-out` : '',
    })},[_vm._t("default")],2)])
}
var h_swipervue_type_template_id_e53428a4_scoped_true_staticRenderFns = []


// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var lodash_debounce = __webpack_require__(279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-swiper/h-swiper.vue?vue&type=script&lang=js&





/* harmony default export */ var h_swipervue_type_script_lang_js_ = ({
    name: "h-swiper",
    props: {
        autoplay: Boolean,
        indicatorDots: Boolean, // 点
        indicatorColor: String,
        indicatorActiveColor: String,
        current: {
            type: Number,
            default: 0,
        },
        interval: {
            type: Number,
            default: 3000
        },
        duration: {
            type: Number,
            default: 500,
        },
        // circular: Boolean, // 是否采用衔接滑动，即播放到末尾后重新回到开头
        // vertical: Boolean, // 滑动方向是否为纵向
        // previousMargin: String, // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
        // nextMargin: String, // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
        // @change
        // @transition swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy}，支付宝小程序暂不支持dx, dy
        // @animationfinish 动画结束时会触发 animationfinish 事件，event.detail = {current: current, source: source}
    },
    data () {
        return {
            uid: 'uid_',
            itemWidth: 375,
            public_current: 0,
            tranx: 0,
            ondraging: false,
            p_observer: null,
        }
    },
    watch: {
        current (val) {
            this.public_current = val
            this.setCurrent(val)
        },
        public_current (val) {
            this.$emit("update:current", val)
        },
        autoplay (val, old_val) {
            if (val && !old_val) {
                this.start()
            } else if (!val && old_val) {
                this.stop()
            }
        }
    },
    mounted () {
        this.public_current = this.current
        this.uid = 'uid_' + guid()

        this.setCurrent(this.current)

        addResizeListener(this.$el, this.initSize)

        this.initSize()


        if (window.MutationObserver) {
            const config = {
                childList: true
            }
            this.p_observer = new MutationObserver(this.childrenChange);
            this.p_observer.observe(this.$refs.swiperContainerRef, config);
        }
    },
    destroyed () {
        if (this.$el) removeEventListener(this.$el, this.initSize)

        if (this.p_observer) this.p_observer.disconnect();
    },
    methods: {
        initSize: debounce_default()(function () {
            const { width, height } = this.$el.getBoundingClientRect()
            this.itemWidth = width
            if (this.$refs.swiperContainerRef) {
                if (this.$refs.swiperContainerRef.childNodes && this.$refs.swiperContainerRef.childNodes.length > 0) {
                    this.$refs.swiperContainerRef.childNodes.forEach(item => {
                        item.style.width = this.itemWidth + 'px'
                    })
                    this.start()
                }
            }
        }, 50),
        childrenChange (mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    this.initSize()
                }
            }
        },
        start () {
            if (!this.autoplay) return
            if (!this.$refs.swiperContainerRef || !this.$refs.swiperContainerRef.childNodes || this.$refs.swiperContainerRef.childNodes.length <= 1) return
            const len = this.$refs.swiperContainerRef.childNodes.length
            if (this.private_interval) clearInterval(this.private_interval)
            this.private_interval = setInterval(() => {
                if (this.tranx - this.itemWidth < -(len - 1) * this.itemWidth) {
                    this.tranx = 0
                } else {
                    this.tranx = this.tranx - this.itemWidth
                }

                this.public_current = (-this.tranx / this.itemWidth)
            }, this.interval)
        },
        stop () {
            if (this.private_interval) clearInterval(this.private_interval)
        },
        setCurrent (cur) {
            let target_cur;
            if (cur < this.$refs.swiperContainerRef.childNodes.length) {
                target_cur = cur
            } else {
                target_cur = this.$refs.swiperContainerRef.childNodes.length - 1
            }

            this.tranx = 0 - target_cur * this.itemWidth

        },
        ondragStart (down_ev) {
            const len = this.$refs.swiperContainerRef.childNodes.length
            down_ev.preventDefault()
            down_ev.stopPropagation()
            this.stop()

            this.ondraging = true

            const currentTranX = this.tranx

            document.onmousemove = (move_ev) => {
                if (currentTranX - down_ev.clientX + move_ev.clientX > this.itemWidth / 5) return
                if (currentTranX - down_ev.clientX + move_ev.clientX < (-this.itemWidth) * (len - 1) - this.itemWidth / 5) return
                if (currentTranX - down_ev.clientX + move_ev.clientX <= currentTranX - this.itemWidth) return
                if (currentTranX - down_ev.clientX + move_ev.clientX >= currentTranX + this.itemWidth) return


                this.tranx = currentTranX - (down_ev.clientX - move_ev.clientX) * (1 - (this.itemWidth - Math.abs((down_ev.clientX - move_ev.clientX))) / this.itemWidth)
            }

            document.onmouseup = () => {
                document.onmousemove = null
                const rd = Math.round(-this.tranx / this.itemWidth)
                this.tranx = -rd * this.itemWidth
                this.public_current = (-this.tranx / this.itemWidth)
                this.ondraging = false
                this.start()
            }
        }
    }
});

;// CONCATENATED MODULE: ./package/h-swiper/h-swiper.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_swiper_h_swipervue_type_script_lang_js_ = (h_swipervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-swiper/h-swiper.vue?vue&type=style&index=0&id=e53428a4&prod&scoped=true&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-swiper/h-swiper.vue?vue&type=style&index=0&id=e53428a4&prod&scoped=true&lang=scss&

;// CONCATENATED MODULE: ./package/h-swiper/h-swiper.vue



;


/* normalize component */

var h_swiper_component = normalizeComponent(
  h_swiper_h_swipervue_type_script_lang_js_,
  h_swipervue_type_template_id_e53428a4_scoped_true_render,
  h_swipervue_type_template_id_e53428a4_scoped_true_staticRenderFns,
  false,
  null,
  "e53428a4",
  null
  
)

/* harmony default export */ var h_swiper = (h_swiper_component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-swiper/h-swiper-item.vue?vue&type=template&id=adc6661a&scoped=true&
var h_swiper_itemvue_type_template_id_adc6661a_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"h-swiper-item"},[_vm._t("default")],2)
}
var h_swiper_itemvue_type_template_id_adc6661a_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-swiper/h-swiper-item.vue?vue&type=script&lang=js&

/* harmony default export */ var h_swiper_itemvue_type_script_lang_js_ = ({
  name: "h-swiper-item"
});

;// CONCATENATED MODULE: ./package/h-swiper/h-swiper-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_swiper_h_swiper_itemvue_type_script_lang_js_ = (h_swiper_itemvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./package/h-swiper/h-swiper-item.vue?vue&type=style&index=0&id=adc6661a&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/h-swiper/h-swiper-item.vue?vue&type=style&index=0&id=adc6661a&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./package/h-swiper/h-swiper-item.vue



;


/* normalize component */

var h_swiper_item_component = normalizeComponent(
  h_swiper_h_swiper_itemvue_type_script_lang_js_,
  h_swiper_itemvue_type_template_id_adc6661a_scoped_true_render,
  h_swiper_itemvue_type_template_id_adc6661a_scoped_true_staticRenderFns,
  false,
  null,
  "adc6661a",
  null
  
)

/* harmony default export */ var h_swiper_item = (h_swiper_item_component.exports);
;// CONCATENATED MODULE: ./package/h-message/h-message.js

/* harmony default export */ function h_message(app) {
 const msgtypes = {
  success: "data:image/png;base64,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",
  error: "data:image/png;base64,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",
  info: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAGMRJREFUeF7tXQnMbVV1/r4oWImCIgUqYhRQFCFCoS2jzAgkZUplqii0arTQFKRQoQIFWrFakKZQjdLKUMUnSR9gAiKj+ARtVTBiFZmMTy1Qi4BGC2hW8723L9738w/nrL3OuWfYK7l5N+/fa+29197f3dMaiEJFA0UDC2qARTdFA0UDC2ugAKTMjqKBRTRQAFKmR9FAAUiZA0UDPg2UFcSnt8I1Eg0UgIxkoEs3fRooAPHprXCNRAMFICMZ6NJNnwYKQHx6K1wj0UAByEgGunTTp4ECEJ/eCtdINFAA0uJAm9kLAKybPutNfZ/8n/4VPTnP54nJ/5F8qsVmj7qqApDg4Tez9QG8BsAWU/9OvutvEfQYgPsA3J8+k+/3kdTfCgVpoAAkQ5FmthaA3QC8GcDuCRBRIPC2bAKeLwK4AcCXSD7jFTZ2vgKQmjPAzLYHsCuAvQDsD2DtmiLaLv40gM8DuAXACpJfb7sBfa6vAGSJ0UvnhkMA7JeA8do+DziA7wkoAL4A4Opynll8NAtAFtCPmWmVOBSAwLFZz0GxUPMfFEgALCcp0BSao4ECkCmFmJmAIEAIGALImEgAWZ5WFQGnEIACEABmJkAckcChq9gxk66QtaosIynAjJpGC5B0tngbAH3GtlpUnfRaVS7XZ6xnldEBxMw2SaAQMF5XdaaMvNx3p4DyozHpYjQAMbM3TgFjgzENcmBffzIFlG8Gyu2sqMEDxMxeDOC09OnsQPSwYecBOI/kz3rY9spNHjRAzEwHb4FDq0eheA1oFRFIlsWL7obEQQLEzHS2EDB0zijUvAZ0kBdQdFYZFA0OIGb23gSOcs5od6rqfCKQXNButc3WNhiAmNkuAM4GsHezKsuSvhLAAwB+ushHFbx0kc/mADbNakWzzDcDOIvkl5utph3pgwCImR0P4EMA1mlHbYvW8jiAOxMQBIZnP1FvCekNR0CZ+9kJwEs6oINfADiV5MUdaEtWE3oNEDPTL62A8Y4sLeQxCxC3AZB5+e0kv5EnLo/bzH4XwJuS+f0eMwbMJQkoWjF7Sb0FiJntmcCxwww0fzeAa+RrkfwtZFLeOTIzmeLLX0WfgwFsO4NGfi2B5NYZ1J1dZS8Bkg7iWjmel62B6gIeTjZK15CUf0XvyMzkvyKgyCBz4xY78OsEkt4d4HsHEDPTleIxLQ6uDPe0Wsh3Qtup3pOZ6ZwikEzA0lafriDZq6v3XgHEzK4DcEALoykgXArgMpLaTg2WzEzbrrcDOLal88r1JA/si0J7AxAz07Xhzg0r9vsChcBBUt9HQ2b2qgQSgUXfm6Q7SOpavvPUC4CY2bcAbN2gNrVKTIAxiG2UV1dp+6XVREBp8lB/D8ltvO1si6/zADGzHzT4MPYrAOeQPLcthfepHjM7A8CZAJ7fULtXknxlQ7JDxHYaIGamX3MFWGuCFBLn3KG8+DahIMlMFgoCikIbNUFPkOzC4+a8fessQMzMmhgNADLPFjA+3JD8QYo1s1MACChyHwgnkp2ci51slJk9AmDD8FFYfV2rLdVMX7sb6FcrItMrvbZcuh6OpkdJbhQtNFde5wDS4IH8zHLWyJ0uq/nT2eScGGlrSOncwb1TADGzmxqwxpWPggznPtfAgI5WpJn9YTL1ifbrv5nkPl1RbGcAYmafBfCWYMVcmcDxw2C5RdzqleQVCSRHBSvkKpKHB8t0iesEQBoCh1aNchB3TYt6TOkAL9u4SOoESGYOkIZsqw4neVXkaBVZi2vAzLT6axcQSTO33ZopQJJV7vmRGgVQwBGs0KriGgLJybN0450ZQJI/x43BJuv7kJTLZ6EZacDM5PKsy5Yokqn8viRn4k8yE4AkT0CF3490dnr9EKNqRM2yNuWkqDLfCaxTTlf7kWzdM3FWAPlEsJvsukMPYBY42VoRlQL2KddiFF1C8p1RwqrKaR0gKcDCRVUbWKHcOiR/WaFcKdKyBszshQAUwCGKTmg7EESrAEmGb9paRUUf2YTkj6O0X+TEa8DMXg4gKuC1wKatVmshhdoGSORL+TYk74kf0iIxWgNmJl8e+fREUKsv7a0BJPhKd3eSt0dou8hoRwNmplBECo0UQa1d/bYCkHSroRA5EeFADyEpq9xCPdOAmckKWEEwcklhTndr49ayLYDInTUimkUxH8mdWjPmDzRLUdYruQU3So0DJKUg+ExAL64keXSAnCJixhows08DiDBwPLLp1AuNAiTdhWtrlZufQybrek0dnFWumb0awEHp0VTWsSL1U49j15J8aMbzObz6ZAUsK4pcU3nlJ9FWq7EkPk0D5ANBmZ0OGpo/h5npPPZBAH+6xAz8FwDvI6l992Ao+ZNcG9AhpVw4PUDOvCIaA0jKCRgRdG1wnoDpPUjbjKoRPRTZ5eg27/+bmnDTcgM9E7cl2UjOxCYBIitdJbPJIcXBVYjMwVDy61Y0+LrBD7SN2GNo/vRmplutXB/3C0ie3MQkaQQgKdWyVo+ca92hTggFjNjOOZh3kVR6g8FQxg/GtA60/dQqEvVi/6zspgCi/IA6f+TQ4K50zewvAeR6OZ5C8h9yFNs13qCr39NJKvNuKIUDJGU/0uqRc0NxA0mF6h8UmZlu47bM7NS9JHN0m1l9M+xmppQSOcHppFutIk9FtrAJgMgk+eMZjVQ4UO21WzNIy2hrZdZgH4nB+b6kiwudzXLCnL6LpFwpwqgJgOjdY9eMFg7u1kq6MLNDAfx7hl6mWQ8juTxIVmfEBNxqrSCpbFphFAqQgElwN0nvATZMKU0IMjOZRSjnSAQdS1LmO4MjM7srM6p86I9HNEBkUnJExqidRPLCDP7Osgaa3KiPjZtYzEqRZnYigI9k1L+M5JEZ/GuwhgHEzDYD8F8AXuBsnBLWbDeUNGdzdWBmvwfgP5y6mcv2+yT/M0hWp8Sk/CRaRbxJfHRI34rkgxEdiwSIHgVzQvicTfJvIjrVVRlm9r8A1s9s32MkX5Ypo9PsZqZ5cFZGI8P8RSIBknM4Vx4QrR6DTntmZto6aAuRQxeSPClHQNd5Uzo4rSLevCFhh/UQgJiZbq0EEC8NftClGDP7HQD3OsxMJnqVdcGWJP/bq+i+8AX8mMjKd0Vuf6MAkmt3pdUjwrAxVx+N85vZHwP4N2dFbyX5KSdvr9hS9l2tIl4Ksc/KBkh6OdfhXId0Dyn/uN4IRkNm9mcALq7Z4eNJ/nNNnl4XNzO99XiNVXVI12E962U9AiC61s3xGDyOZNT7QG8mhJnJlEZ2WUtl71XkFtlfyRRjVGRmyrb7yYxOZ1+HRwBEHVBHPPQwAJlNjDb1spkdk34ldQ28aVLiSgC6xtXqeoVHsUPgSVe+CmG6sbM/ynd/nJN3FVsEQLSUyW3UQx8j+R4PY+EZhwbM7KMA3u3s7UMkvVv/fICY2c4AcowKDxjj1sE52KNkS1vR6zM6vwvJO7z8WSuImb1fKZWdlQ/W7sqpj8K2gAYy7bPOIPm3XuXmAkSRKbwJFwf/cu4dlMK3pgYyX9ZvIrmvV6dugJjZ2gB+DmAtZ+X7k7zByVvYRqQBM5MjlfcW7xkALyL5tEdlOQA5AMB1nkoBKG/Ehrl31M66C1vPNJDe2h4FsK6z6QeSdJ1jcgCS83o+SJda5+AVtgoayHTJdb+q5wDkKwD+oELf5isySK9Bpy4KWwUNZHobfpXkjhWqeU6RHIDkmG7vRFIAK1Q0UEkDZqYJfmelws8t5HYRcAHEzOTTIIB46EmS63kYC8+4NWBmT2ScQ15G8rG6GvQCRFsr7wpwPckD6za0lC8aMDNdCulyyEM7kvxqXUYvQHJMti8i+ed1G1rKFw2Y2T8BOMGpCZergBcgcof0uscONjBDnYFLefv+qCLPVSS/XbHsYItlBnRwPUx7ASKHH60iHhpcKoO6SjAz+ZTXTWewAUnvua9uEztZPjNlwqdIvrVux7wAybnifQNJOViNlsxsDwC31lTAniQVeXC0ZGZbAfCupK6rXi9Acq54f2vsL+gFID6Mpxf1//Nxw3XVWxsgmY1cSbJq0hinHrrPVgDiHyMzUzKhiWNZXUG1f5w9APltALKL8dBtJPf0MA6JpwDEP5pmpq2ptqgekv3f/9Rh9ABkcwD316lkquxykoc5eQfDVgDiH0ozUwBwb5CPLUg+UKd2D0CU4ejrdSqZKvuvJJdKWukU3R+2AhD/WJmZkpr+iVPC9nVT2HkA4rmBmfTnfJLKsjRqKgDxD7+ZKbuWNx9h7ZtAD0CU0/saZxffT/LvnLyDYSsA8Q+lmf01AK8L7cEka6We9gBEjy3eUDSjC34231QoAMkCiCfo3qTCY0jWimrpAUhOA5Xr+0q/eobBWQDiH0czOwqAcsx7qPYPtAcg7wPgzSZawvysDmLtOcfV3j97ZlDXeTLDAJ1G8oN1+lgAUkdbQWULQPyK7ANAyhbLP76rOAtA/ArswxarHNL941sAkq+7nB/oVg7p5Zo3f5DLGcSpwz5c83oGd6KO8lBYtlhOaKxm68NDYTE1yRricgbJUV8fTE2KsWLOCJcVJEt7fTBWLObuWUNcVpAc9fXB3P0FALxeXcVhqqwgOfjQGaTbDlPpoFRcbjOGubyD+JSX6c3ajsttAkgJ2uAb4/IOkqe33gRtKGF/8gbac1U+elusPoX9UdA4BY/z0OgDx5UtlmfarLrcOBHAR3zcaDVwXAk96hyltEUtK4hDf30KPVqCVzsGeMJSVhCf8voUvDon/cHjJF/qU9EwuApAfONoZj8F8BIfN9pLfxBw1Vs7uoRTKZ1kKwCpPyxmlmPi5LriVStrO0xNbRNyrnpHfVAvAHEBJOeA7orLmwuQvwdwav2uruK4mqQ3+Jezyu6wFYDUHwszWw7gkPqcqzg+RPKvPLw5K8heAG72VArgcQAbeXNXO+vsDFsBSL2hMLO1ATyScf7Ym+Qt9WpdXToHIGsB+DkANd5D+5D0AsxTX2d4CkDqDYWZ7Q3gpnpcz5Z+GsCLSD7j4XcDRJWZmQLIycPQQ66HG09FXeMpAKk3ImaW8zB9LcmD69X4m9K5APkLABc6K7+b5HZO3l6zFYDUGz4zuwvAtvW4ni19Isl/dPL6t1hpBdkewNe8lStjKcnPZ/D3krUApPqwZYb5UUU7kPQGW88DSALJvQBeW73La5T8GMn3OHl7y1YAUn3ozOyjAN5dnWONkt8juaWTdxVb1hYrASQnHP3DAF5PUrdao6ECkGpDbWZ6Nf8OgI2rcTynVHa6jQiAHAHgM84OiO04kpdm8PeOtQCk2pCZ2bEAPlmt9LyljiS5LIM/ZAWRC66y1m7mbMjoHg0LQKrNlMzHwQcBbJWbMDZ7BUnbrPMBvLdat+cttR3JuzP4e8VaALL0cJmZbq10e+WlC0h6E+08W2cUQHYF8CVvT3RVTPKkDP5esRaALD1cZibHKNlfeWk3kiu8zBO+EICkVUQAEVA8pEO6VpHve5j7xlMAsviImdmr0urhNW1fQXK3iHkRCRBtsbTV8tJoXtYLQJYESM7LuYSfTPIC70Sc5osEiA7pOqzr0O4hrR5aRQZ/5VsAsvD0SFe7OntoFfHQU+lwrkN6NoUBJG2zdN2ra18vjcJPpABkUYDk+H1I8DKSR3on4Fy+aIDIx0OJ3r00CvusApBFAZJjdyXBh5GU70gIhQIkrSI5h3WJOJPkuSG966iQApD5B8bMzgBwTsawhR3OJ21oAiDvBPDxjE7+CsAeJL+cIaPTrAUgzx0eM9sFwG0Anp8xeO8i+YkM/uewNgEQHdL16Pe6jIbeQHL/DP5OsxaAzAsQWXW/OWPgviuT+NyX80bPIBPhZnYagA9kdFasp5L8cKaMTrIXgKw5LGZ2ivzGMwfrdJLe9OQLVh2+gqRzyCZpFdkgo9M/S1utb2TI6CRrAchvhiWF89HW6sUZg/WTtHr8KEPGvKyNACSBJNc+S2KuIemNZBGtqzB5BSBrAORqAG6X2CQpxO5qvgFuEiBvTKtI7sQa3K1WAcjqKRFwazWZWzp7fDN3orUKkKQAnUN0Hsmlg0h+LldIV/jN7A0A7qnZnq1JfrsmT2eLZ6YymO7XeSRPb6qjja0gCSDaV+pdRKtJDumGYl+SP8wR0iXe5Az09optumxITmVm9goAN2bedEp1WjVktavzaiPUKEASSHI9Dicdv5Lk0Y1ooQhtVQNm9mkARwVUmu0xuFQbGgdIAsllAN62VGMq/H2wV78V+j6IIkFXutLF5SSrrsBu3bUFED0aaquVc+076eThJK9y97gwzkwDZvYWAJ8NaICudbW10ta7UWoFIGkVyfUXmVZEAUmj0yJeeCA41Lgwf4+letoaQBJIFF9VcVYjaLSxfSOU16aMzNi6c5t6M8l92mp/2wCRQdoXAKwT1EHF1Gp8mQ1q6yjFmJm214ptFUG/ALBfm4asrQIkrSLHA7goQltJxrpNXvMFtnN0osxM1/xPBnb8BJIXB8pbUlTrAEkgkUnyO5ZsXfUC65D8ZfXipWTTGjCzFwLQL34UXUJSrhSt0qwAoiSe2mrtENjbTUj+OFBeEeXUgJm9HECk4aACpGtrpSSerdJMAJJWkT3Ta+rzAnu8Dcm6JhyB1RdRZrY1gG8FauLXyYri1kCZlUXNDCAJJJFXv5NO707y9soaKAXDNGBmbwLwxTCBqwW1dqU7X7tnCpAEkssBHBOs1ENIKvtVoZY0YGYyWZfpeiRdQTLCAsPdppkDJIHkOiXTcfdifsZilhKs0IXEBZqPTFdxPckDW+rCgtV0AiAJJArSsHOwQq5MrruDsQIO1k+WuGSVK1fZCMPD6bbcQVJvZjOnzgAkgUSHOx3yIkkPiVpNBuNPEqkcr6zkzyFw5ATnmK/6e0hu421XNF+nAJJA8gMAm0Z3dAzxthrQ2bwiAz0B58pfSfKVbfWjSj2dA0gCieLzrlelAzXL6OB+DsnBBYKoqQdX8RRg4cwAH/L56n+CpDeau6s/VZg6CZAEEqvSAUcZeZ+dO9SQQg59VGJJB3FFPsyJPrJgXSQ7ORc72aiJFs3sEQAbVhrB+oVuSEAZbATH+ip5LkeKeChg5AR1W6wpj5LcKKKtTcjoNEDSStLEwX2iS4U51ZZr0LGAvRMnnTW0pcoJB7pY9Z06kM/X0M4DJIEk0o9kPj0oVKrcgi8dQ36SxWZsys+h7LJyZ1WewKaoVb8Obyd6AZAEErlqymWzSVISnwlQRpEObmo7q4Q1E2B4k9dUHZurSB5etfAsy/UGIC2CRFXpFk252xVuZ9DZd1M2Wa0WAkcbt0i9AYcmQq8AkkDShO3WYj9Ssi/S9bDyuQ8iPVzaRimkq+yn2gztOnPbqrqrUe8AkkAiK2C94kaayi+lu4eTMZ7iBStUf+/IzJRSYgKKjVvsgEzWZc0QklizxXb3bwWZ2jPLn0QgiXS6qqp7bbu0qtyppC/ROSmqNmKpcmamXC17ANgpAaPJQ/dCzZGzk8AxE3+OpXS01N97uYJMgUSeiQJJpPvuUjqb+3f5XAsoek+5keRX6gqILG9mO8rBCICM/QSMdSPl15R1SQJH656ANdu5YPFeA2QKKAoEIaBERUvJ0a8AI7A8MPcTtdKklWFzAHM/AsUsATHRm3zRtWq0GmAhZ9AW4h0EQNK5RJPj7MC4W03oe2UCjX5RF/qoXq2MC30EiiaMOaP6ezOAs9oMzRPV8PnkDAYgU6uJDvBKuRAR5rRJ3Q9NtsKBKhVB7w7iiw3E4ACSVhP5KAgkM3XXHBoCFumPrt4FjsEF8RskQKZWE6VeEFBy85OMaK7X6qrycwgYy2px9ajwoAGSVhOZZwskEZmuejS0jTdVGWUFjsaS1zTegwoVDB4gU6uJVhFtufQp55MKk2OeIjpnaDul3ByN5AT0Nas5rtEAZAooSlE9AUq0P3VzIzVbyTpbTIARGTFxtr2qUPvoADIFFL0yT4CyawVdjbHIiilgPDVGBYwWINODbWaHAtCBXoZ7As6YSUCQgeYyksvHrAj1vQBkagaY2WYJJALM2FYVrRYChKyWHxw7MCb9LwBZYCaYmQAioGhVEXCGSAKCVovlJAWQQnM0UACyxJRIdk8CiUzFdwfw6p7PoodSgGmZ7Gu1GOXZouoYFoBU1VQqZ2YKj7pXAosAs1ZNEW0XfyYBQlHXbyF5R9sN6HN9BSAZo2dmayfjSCWVlLHkawCsnyEygvUxAPcli2IFu1BwhKcjBI9RRgFI8KibmQAioGyRPpPvkeCZgOD+BAb9u+o7Sf2tUJAGCkCCFFlFTDrPyF9DH4VWnXyf/lei5FMy9/PE5P/KuaGKtmPKFIDE6LFIGagGCkAGOrClWzEaKACJ0WORMlANFIAMdGBLt2I0UAASo8ciZaAaKAAZ6MCWbsVooAAkRo9FykA1UAAy0IEt3YrRQAFIjB6LlIFqoABkoANbuhWjgQKQGD0WKQPVQAHIQAe2dCtGA/8PwxyIQY+7FFIAAAAASUVORK5CYII=",
  warning: "data:image/png;base64,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"
 }

 function createMessage (text, type) {
  let messageContainer = document.createElement("div")
  const messageContainerIcon = document.createElement("img")
  const messageContainerText = document.createElement("label")
  messageContainer.appendChild(messageContainerIcon)
  messageContainer.appendChild(messageContainerText)
  document.body.appendChild(messageContainer)
  messageContainer.classList.add("h-message-container")
  messageContainer.classList.add(type)
  messageContainerIcon.src = msgtypes[type]
  messageContainerText.innerText = text

  setTimeout(() => {
   if (document.body.contains(messageContainer)) document.body.removeChild(messageContainer)
  }, 3100)
 }
 const showmessage = {
  success: (text) => {
   createMessage(text, "success")
  },
  info: (text) => {
   createMessage(text, "info")
  },
  error: text => {
   createMessage(text, "error")
  },
  warning: text => {
   createMessage(text, "warning")
  }
 }

 if (app.prototype) {
  app.prototype.$message = showmessage
 }
 if (app.config.globalProperties) {
  app.config.globalProperties.$message = showmessage
 }
}
;// CONCATENATED MODULE: ./package/install.js
// css variable



// foriegn


// plugins





// components




















// 注册
const install = function (app) {
 if (app.prototype) {
  app.prototype.$loading = h_loading
 } 
 if (app.config.globalProperties) {
  app.config.globalProperties.$loading = h_loading
 }
 app.use(h_menu)
 app.use(h_message)

 app.component("h-filemanager", h_filemanager)
 app.component("h-breadcrumb", h_breadcrumb)
 app.component("h-form", h_form)
 app.component("h-form-item", h_form_item)
 app.component("h-select", h_select)
 app.component("h-select-item", h_select_item)
 app.component("h-pagination", h_pagination)
 app.component("h-button", h_button)
 app.component("h-input", h_input)
 app.component("h-fall", h_fall)
 app.component("h-notice", h_notice)
 app.component("h-search", h_search)
 app.component("h-router", h_router)
 app.component("h-swiper", h_swiper)
 app.component("h-dialog", h_dialog)
 app.component("h-swiper-item", h_swiper_item)
}


/* harmony default export */ var package_install = (install);

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (package_install);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vue-hyui.common.js.map