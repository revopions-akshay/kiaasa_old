!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=527)}({0:function(e,r,t){(function(r){var t=function(e){return e&&e.Math==Math&&e};e.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof r&&r)||function(){return this}()||Function("return this")()}).call(this,t(58))},1:function(e,r){e.exports=function(e){try{return!!e()}catch(e){return!0}}},10:function(e,r,t){var n=t(39),a=t(15);e.exports=function(e){return n(a(e))}},12:function(e,r,t){var n=t(20),a=Math.min;e.exports=function(e){return e>0?a(n(e),9007199254740991):0}},15:function(e,r){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},16:function(e,r,t){var n=t(0),a=t(9),o=t(2),c=t(23),l=t(40),i=t(35),u=i.get,s=i.enforce,d=String(String).split("String");(e.exports=function(e,r,t,l){var i,u=!!l&&!!l.unsafe,f=!!l&&!!l.enumerable,p=!!l&&!!l.noTargetGet;"function"==typeof t&&("string"!=typeof r||o(t,"name")||a(t,"name",r),(i=s(t)).source||(i.source=d.join("string"==typeof r?r:""))),e!==n?(u?!p&&e[r]&&(f=!0):delete e[r],f?e[r]=t:a(e,r,t)):f?e[r]=t:c(r,t)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||l(this)}))},17:function(e,r){e.exports={}},183:function(e,r,t){"use strict";t.r(r);t(64);r.default={"mainNavbar.navbar":function(){return"sticky"===this.settings["layout.layout"]?"black":["light","transparent"].includes(this.settings["mainNavbar.navbar"])?void 0:"transparent"},"mainDrawer.theme":function(){return this.settings["theme.darkMode"]?"black":"light-red"},".layout-boxed .sidebar-brand":{removeClass:["sidebar-brand-dark","bg-primary-pickled-bluewood","bg-dark-blue","bg-dark-purple","bg-dark","bg-black"]},".js-update-chart-line":{setAttribute:[{name:"data-chart-line-border-color",value:"accent"},{name:"data-chart-line-border-opacity",value:"1"}]},".js-update-chart-area":{setAttribute:[{name:"data-chart-line-background-color",value:"gradient:accent"},{name:"data-chart-line-background-opacity",value:"0.1"}]},".js-update-chart-bar":{setAttribute:[{name:"data-chart-line-background-color",value:"gradient:accent"},{name:"data-chart-line-background-opacity",value:"1"}]},"#locationDoughnutChart":{setAttribute:[{name:"data-chart-line-background-color",value:"accent;accent;gray"},{name:"data-chart-line-background-opacity",value:"1;0.5;0.24"}]},"#attendanceDoughnutChart":{setAttribute:[{name:"data-chart-line-background-color",value:"accent;accent;gray.700;gray"},{name:"data-chart-line-background-opacity",value:"1;0.5;1;1"}]},"#visitsByDeviceChart":{setAttribute:[{name:"data-chart-line-background-color",value:"accent;gray.300"},{name:"data-chart-line-background-opacity",value:"1"}]},".js-update-chart-progress":{setAttribute:[{name:"data-chart-line-background-color",value:"accent;gray"},{name:"data-chart-line-background-opacity",value:"1"}]},".js-update-chart-progress-accent":{setAttribute:[{name:"data-chart-line-background-color",value:"accent;gray"},{name:"data-chart-line-background-opacity",value:"1"}]},".js-update-chart-line-accent":{setAttribute:[{name:"data-chart-line-border-color",value:"accent"},{name:"data-chart-line-border-opacity",value:"1"}]},".js-update-chart-line-2nd-accent":{setAttribute:[{name:"data-chart-line-border-color",value:"accent,accent"},{name:"data-chart-line-border-opacity",value:"1,0.5"}]},".bg-primary-dodger-blue":{addClass:["bg-primary-red"],removeClass:["bg-primary-dodger-blue"]},".bg-primary-pickled-bluewood":{addClass:["bg-dark"],removeClass:["bg-primary-pickled-bluewood"]},".bg-accent-pickled-bluewood":{addClass:["bg-accent-red"],removeClass:["bg-accent-pickled-bluewood"]},".bg-accent-dodger-blue":{addClass:["bg-accent-red"],removeClass:["bg-accent-dodger-blue"]},".bg-dark-blue":{addClass:["bg-dark"],removeClass:["bg-dark-blue"]},".bg-dark-purple":{addClass:["bg-dark"],removeClass:["bg-dark-purple"]},".bg-primary-purple":{addClass:["bg-primary-red"],removeClass:["bg-primary-purple"]},".bg-primary-yellow":{addClass:["bg-primary-red"],removeClass:["bg-primary-yellow"]},".bg-primary":{addClass:["bg-primary-red"],removeClass:["bg-primary"]},".bg-accent-yellow":{addClass:["bg-accent-red"],removeClass:["bg-accent-yellow"]},".bg-accent":{addClass:["bg-accent-red"],removeClass:["bg-accent"]},".border-left-primary-dodger-blue":{addClass:["border-left-primary-red"],removeClass:["border-left-primary-dodger-blue"]},".border-left-accent-pickled-bluewood":{addClass:["border-left-accent-red"],removeClass:["border-left-accent-pickled-bluewood"]},".border-left-primary-purple":{addClass:["border-left-primary-red"],removeClass:["border-left-primary-purple"]},".border-left-primary-yellow":{addClass:["border-left-primary-red"],removeClass:["border-left-primary-yellow"]},".border-left-primary":{addClass:["border-left-primary-red"],removeClass:["border-left-primary"]},".border-left-accent-yellow":{addClass:["border-left-accent"],removeClass:["border-left-accent-yellow"]},".border-left-accent":{addClass:["border-left-accent-red"],removeClass:["border-left-accent"]},".alert-accent-dodger-blue":{addClass:["alert-accent-red"],removeClass:["alert-accent-dodger-blue"]},".alert-primary-purple":{addClass:["alert-primary-red"],removeClass:["alert-primary-purple"]},".alert-primary-yellow":{addClass:["alert-primary-red"],removeClass:["alert-primary-yellow"]},".alert-primary":{addClass:["alert-primary-red"],removeClass:["alert-primary"]},".alert-accent-yellow":{addClass:["alert-accent-red"],removeClass:["alert-accent-yellow"]},".alert-accent":{addClass:["alert-accent-red"],removeClass:["alert-accent"]},".alert-soft-primary-purple":{addClass:["alert-soft-primary-red"],removeClass:["alert-soft-primary-purple"]},".alert-soft-primary-yellow":{addClass:["alert-soft-primary-red"],removeClass:["alert-soft-primary-yellow"]},".alert-soft-primary":{addClass:["alert-soft-primary-red"],removeClass:["alert-soft-primary"]},".alert-soft-accent-yellow":{addClass:["alert-soft-accent"],removeClass:["alert-soft-accent-yellow"]},".alert-soft-accent":{addClass:["alert-soft-accent-red"],removeClass:["alert-soft-accent"]},".text-primary-dodger-blue":{addClass:["text-primary-red"],removeClass:["text-primary-dodger-blue"]},".text-accent-pickled-bluewood":{addClass:["text-accent-red"],removeClass:["text-accent-pickled-bluewood"]},".text-primary-purple":{addClass:["text-primary-red"],removeClass:["text-primary-purple"]},".text-primary-yellow":{addClass:["text-primary-red"],removeClass:["text-primary-yellow"]},".text-primary":{addClass:["text-primary-red"],removeClass:["text-primary"]},".text-accent-yellow":{addClass:["text-accent-red"],removeClass:["text-accent-yellow"]},".text-accent":{addClass:["text-accent-red"],removeClass:["text-accent"]},".btn-accent-dodger-blue":{addClass:["btn-accent-red"],removeClass:["btn-accent-dodger-blue"]},".btn-accent-yellow":{addClass:["btn-accent"],removeClass:["btn-accent-yellow"]},".btn-accent":{addClass:["btn-accent-red"],removeClass:["btn-accent"]},".btn-primary-purple":{addClass:["btn-primary-red"],removeClass:["btn-primary-purple"]},".btn-primary-yellow":{addClass:["btn-primary-red"],removeClass:["btn-primary-yellow"]},".btn-primary":{addClass:["btn-primary-red"],removeClass:["btn-primary"]},".badge-accent-dodger-blue":{addClass:["badge-accent-red"],removeClass:["badge-accent-dodger-blue"]},".badge-accent-yellow":{addClass:["badge-accent-red"],removeClass:["badge-accent-yellow"]},".badge-accent":{addClass:["badge-accent-red"],removeClass:["badge-accent"]}}},19:function(e,r){e.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}}},2:function(e,r){var t={}.hasOwnProperty;e.exports=function(e,r){return t.call(e,r)}},20:function(e,r){var t=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:t)(e)}},21:function(e,r){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},22:function(e,r,t){var n=t(4);e.exports=function(e,r){if(!n(e))return e;var t,a;if(r&&"function"==typeof(t=e.toString)&&!n(a=t.call(e)))return a;if("function"==typeof(t=e.valueOf)&&!n(a=t.call(e)))return a;if(!r&&"function"==typeof(t=e.toString)&&!n(a=t.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},23:function(e,r,t){var n=t(0),a=t(9);e.exports=function(e,r){try{a(n,e,r)}catch(t){n[e]=r}return r}},24:function(e,r,t){var n=t(0),a=t(23),o=n["__core-js_shared__"]||a("__core-js_shared__",{});e.exports=o},26:function(e,r,t){var n=t(60),a=t(0),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,r){return arguments.length<2?o(n[e])||o(a[e]):n[e]&&n[e][r]||a[e]&&a[e][r]}},27:function(e,r,t){var n=t(3),a=t(55),o=t(19),c=t(10),l=t(22),i=t(2),u=t(42),s=Object.getOwnPropertyDescriptor;r.f=n?s:function(e,r){if(e=c(e),r=l(r,!0),u)try{return s(e,r)}catch(e){}if(i(e,r))return o(!a.f.call(e,r),e[r])}},28:function(e,r,t){var n=t(3),a=t(1),o=t(2),c=Object.defineProperty,l={},i=function(e){throw e};e.exports=function(e,r){if(o(l,e))return l[e];r||(r={});var t=[][e],u=!!o(r,"ACCESSORS")&&r.ACCESSORS,s=o(r,0)?r[0]:i,d=o(r,1)?r[1]:void 0;return l[e]=!!t&&!a((function(){if(u&&!n)return!0;var e={length:-1};u?c(e,1,{enumerable:!0,get:i}):e[1]=1,t.call(e,s,d)}))}},29:function(e,r){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3:function(e,r,t){var n=t(1);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},33:function(e,r,t){var n=t(36),a=t(34),o=n("keys");e.exports=function(e){return o[e]||(o[e]=a(e))}},34:function(e,r){var t=0,n=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+n).toString(36)}},35:function(e,r,t){var n,a,o,c=t(67),l=t(0),i=t(4),u=t(9),s=t(2),d=t(24),f=t(33),p=t(17),b=l.WeakMap;if(c){var y=d.state||(d.state=new b),m=y.get,v=y.has,g=y.set;n=function(e,r){return r.facade=e,g.call(y,e,r),r},a=function(e){return m.call(y,e)||{}},o=function(e){return v.call(y,e)}}else{var C=f("state");p[C]=!0,n=function(e,r){return r.facade=e,u(e,C,r),r},a=function(e){return s(e,C)?e[C]:{}},o=function(e){return s(e,C)}}e.exports={set:n,get:a,has:o,enforce:function(e){return o(e)?a(e):n(e,{})},getterFor:function(e){return function(r){var t;if(!i(r)||(t=a(r)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}}},36:function(e,r,t){var n=t(41),a=t(24);(e.exports=function(e,r){return a[e]||(a[e]=void 0!==r?r:{})})("versions",[]).push({version:"3.8.1",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},37:function(e,r,t){var n=t(1);e.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},39:function(e,r,t){var n=t(1),a=t(21),o="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?o.call(e,""):Object(e)}:Object},4:function(e,r){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},40:function(e,r,t){var n=t(24),a=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return a.call(e)}),e.exports=n.inspectSource},41:function(e,r){e.exports=!1},42:function(e,r,t){var n=t(3),a=t(1),o=t(46);e.exports=!n&&!a((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},44:function(e,r,t){var n=t(48),a=t(29).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(e){return n(e,a)}},46:function(e,r,t){var n=t(0),a=t(4),o=n.document,c=a(o)&&a(o.createElement);e.exports=function(e){return c?o.createElement(e):{}}},48:function(e,r,t){var n=t(2),a=t(10),o=t(51).indexOf,c=t(17);e.exports=function(e,r){var t,l=a(e),i=0,u=[];for(t in l)!n(c,t)&&n(l,t)&&u.push(t);for(;r.length>i;)n(l,t=r[i++])&&(~o(u,t)||u.push(t));return u}},49:function(e,r){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t},5:function(e,r,t){var n=t(0),a=t(36),o=t(2),c=t(34),l=t(37),i=t(61),u=a("wks"),s=n.Symbol,d=i?s:s&&s.withoutSetter||c;e.exports=function(e){return o(u,e)||(l&&o(s,e)?u[e]=s[e]:u[e]=d("Symbol."+e)),u[e]}},50:function(e,r,t){var n=t(20),a=Math.max,o=Math.min;e.exports=function(e,r){var t=n(e);return t<0?a(t+r,0):o(t,r)}},51:function(e,r,t){var n=t(10),a=t(12),o=t(50),c=function(e){return function(r,t,c){var l,i=n(r),u=a(i.length),s=o(c,u);if(e&&t!=t){for(;u>s;)if((l=i[s++])!=l)return!0}else for(;u>s;s++)if((e||s in i)&&i[s]===t)return e||s||0;return!e&&-1}};e.exports={includes:c(!0),indexOf:c(!1)}},527:function(e,r,t){e.exports=t(183)},53:function(e,r,t){var n=t(1),a=/#|\.prototype\./,o=function(e,r){var t=l[c(e)];return t==u||t!=i&&("function"==typeof r?n(r):!!r)},c=o.normalize=function(e){return String(e).replace(a,".").toLowerCase()},l=o.data={},i=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},54:function(e,r,t){var n,a=t(7),o=t(83),c=t(29),l=t(17),i=t(81),u=t(46),s=t(33),d=s("IE_PROTO"),f=function(){},p=function(e){return"<script>"+e+"<\/script>"},b=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,r;b=n?function(e){e.write(p("")),e.close();var r=e.parentWindow.Object;return e=null,r}(n):((r=u("iframe")).style.display="none",i.appendChild(r),r.src=String("javascript:"),(e=r.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F);for(var t=c.length;t--;)delete b.prototype[c[t]];return b()};l[d]=!0,e.exports=Object.create||function(e,r){var t;return null!==e?(f.prototype=a(e),t=new f,f.prototype=null,t[d]=e):t=b(),void 0===r?t:o(t,r)}},55:function(e,r,t){"use strict";var n={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,o=a&&!n.call({1:2},1);r.f=o?function(e){var r=a(this,e);return!!r&&r.enumerable}:n},56:function(e,r){r.f=Object.getOwnPropertySymbols},58:function(e,r,t){var n,a=t(49);n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":a(window))&&(n=window)}e.exports=n},59:function(e,r,t){var n=t(2),a=t(65),o=t(27),c=t(8);e.exports=function(e,r){for(var t=a(r),l=c.f,i=o.f,u=0;u<t.length;u++){var s=t[u];n(e,s)||l(e,s,i(r,s))}}},6:function(e,r,t){var n=t(0),a=t(27).f,o=t(9),c=t(16),l=t(23),i=t(59),u=t(53);e.exports=function(e,r){var t,s,d,f,p,b=e.target,y=e.global,m=e.stat;if(t=y?n:m?n[b]||l(b,{}):(n[b]||{}).prototype)for(s in r){if(f=r[s],d=e.noTargetGet?(p=a(t,s))&&p.value:t[s],!u(y?s:b+(m?".":"#")+s,e.forced)&&void 0!==d){if(typeof f==typeof d)continue;i(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),c(t,s,f,e)}}},60:function(e,r,t){var n=t(0);e.exports=n},61:function(e,r,t){var n=t(37);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},62:function(e,r,t){var n=t(48),a=t(29);e.exports=Object.keys||function(e){return n(e,a)}},64:function(e,r,t){"use strict";var n=t(6),a=t(51).includes,o=t(71);n({target:"Array",proto:!0,forced:!t(28)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},65:function(e,r,t){var n=t(26),a=t(44),o=t(56),c=t(7);e.exports=n("Reflect","ownKeys")||function(e){var r=a.f(c(e)),t=o.f;return t?r.concat(t(e)):r}},67:function(e,r,t){var n=t(0),a=t(40),o=n.WeakMap;e.exports="function"==typeof o&&/native code/.test(a(o))},7:function(e,r,t){var n=t(4);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},71:function(e,r,t){var n=t(5),a=t(54),o=t(8),c=n("unscopables"),l=Array.prototype;null==l[c]&&o.f(l,c,{configurable:!0,value:a(null)}),e.exports=function(e){l[c][e]=!0}},8:function(e,r,t){var n=t(3),a=t(42),o=t(7),c=t(22),l=Object.defineProperty;r.f=n?l:function(e,r,t){if(o(e),r=c(r,!0),o(t),a)try{return l(e,r,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[r]=t.value),e}},81:function(e,r,t){var n=t(26);e.exports=n("document","documentElement")},83:function(e,r,t){var n=t(3),a=t(8),o=t(7),c=t(62);e.exports=n?Object.defineProperties:function(e,r){o(e);for(var t,n=c(r),l=n.length,i=0;l>i;)a.f(e,t=n[i++],r[t]);return e}},9:function(e,r,t){var n=t(3),a=t(8),o=t(19);e.exports=n?function(e,r,t){return a.f(e,r,o(1,t))}:function(e,r,t){return e[r]=t,e}}});