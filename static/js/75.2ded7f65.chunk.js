"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[75],{5243:function(n,t,e){e.d(t,{yk:function(){return u}});var r,i,a=e(2791),o={"aria-busy":!0,role:"status"},s=function(n){return{display:n?"flex":"none"}},c=function(){return c=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},c.apply(this,arguments)},u=function(n){var t=n.wrapperStyle,e=void 0===t?{}:t,r=n.visible,i=void 0===r||r,u=n.wrapperClass,l=void 0===u?"":u,f=n.height,p=void 0===f?100:f,h=n.width,d=void 0===h?100:h,y=n.color,m=void 0===y?"#4fa94d":y,k=n.outerCircleColor,v=n.innerCircleColor,g=n.barColor,b=n.ariaLabel,w=void 0===b?"circles-with-bar-loading":b;return a.createElement("div",c({style:c(c({},s(i)),e),className:l,"aria-label":w},o,{"data-testid":"circles-with-bar-wrapper"}),a.createElement("svg",{version:"1.1",id:"L1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",height:"".concat(p),width:"".concat(d),viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"circles-with-bar-svg"},a.createElement("circle",{fill:"none",stroke:"".concat(k||m),strokeWidth:"6",strokeMiterlimit:"15",strokeDasharray:"14.2472,14.2472",cx:"50",cy:"50",r:"47"},a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"5s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})),a.createElement("circle",{fill:"none",stroke:"".concat(v||m),strokeWidth:"1",strokeMiterlimit:"10",strokeDasharray:"10,10",cx:"50",cy:"50",r:"39"},a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"5s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})),a.createElement("g",{fill:"".concat(g||m),"data-testid":"circles-with-bar-svg-bar"},a.createElement("rect",{x:"30",y:"35",width:"5",height:"30"},a.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.1"})),a.createElement("rect",{x:"40",y:"35",width:"5",height:"30"},a.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.2"})),a.createElement("rect",{x:"50",y:"35",width:"5",height:"30"},a.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.3"})),a.createElement("rect",{x:"60",y:"35",width:"5",height:"30"},a.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.4"})),a.createElement("rect",{x:"70",y:"35",width:"5",height:"30"},a.createElement("animateTransform",{attributeName:"transform",dur:"1s",type:"translate",values:"0 5 ; 0 -5; 0 5",repeatCount:"indefinite",begin:"0.5"})))))},l=e(6444),f=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},p=242.776657104492,h=(0,l.F4)(r||(r=f(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),.14*p,p,.11*p,.35*p,p,.35*p,.01*p,p,.99*p),d=(l.ZP.path(i||(i=f(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),.01*p,p,h,1.6),function(n,t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof e[n])return e[n];if(n&&n.indexOf(".")>0){for(var r=n.split("."),i=r.length,a=e[r[0]],o=1;null!=a&&o<i;)a=a[r[o]],o+=1;if("undefined"!==typeof a)return a}return t}});var y,m,k,v=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},g=(0,l.F4)(y||(y=v(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"])));l.ZP.svg(m||(m=v(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),g,d("speed","0.75")),l.ZP.polyline(k||(k=v(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(n){return n.width}));var b,w,x,E=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},C=(0,l.F4)(b||(b=E(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));l.ZP.polygon(w||(w=E(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),C),l.ZP.svg(x||(x=E(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"])))},6916:function(n,t,e){e.d(t,{P1:function(){return c}});var r="NOT_FOUND";var i=function(n,t){return n===t};function a(n,t){var e="object"===typeof t?t:{equalityCheck:t},a=e.equalityCheck,o=void 0===a?i:a,s=e.maxSize,c=void 0===s?1:s,u=e.resultEqualityCheck,l=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!n(t[i],e[i]))return!1;return!0}}(o),f=1===c?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:r},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(n,t){var e=[];function i(n){var i=e.findIndex((function(e){return t(n,e.key)}));if(i>-1){var a=e[i];return i>0&&(e.splice(i,1),e.unshift(a)),a.value}return r}return{get:i,put:function(t,a){i(t)===r&&(e.unshift({key:t,value:a}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(c,l);function p(){var t=f.get(arguments);if(t===r){if(t=n.apply(null,arguments),u){var e=f.getEntries(),i=e.find((function(n){return u(n.value,t)}));i&&(t=i.value)}f.put(arguments,t)}return t}return p.clearCache=function(){return f.clear()},p}function o(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function s(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var i=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var a,s=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,f=l.memoizeOptions,p=void 0===f?e:f,h=Array.isArray(p)?p:[p],d=o(r),y=n.apply(void 0,[function(){return s++,u.apply(null,arguments)}].concat(h)),m=n((function(){for(var n=[],t=d.length,e=0;e<t;e++)n.push(d[e].apply(null,arguments));return a=y.apply(null,n)}));return Object.assign(m,{resultFunc:u,memoizedResultFunc:y,dependencies:d,lastResult:function(){return a},recomputations:function(){return s},resetRecomputations:function(){return s=0}}),m};return i}var c=s(a)}}]);
//# sourceMappingURL=75.2ded7f65.chunk.js.map