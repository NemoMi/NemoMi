(window.webpackJsonp=window.webpackJsonp||[]).push([["login~paymentPassword~perfectPassword~recharge~register~retrievePassword~withdrawForm"],{"07ff":function(t,e,r){},"1b62":function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return h})),r.d(e,"c",(function(){return g}));var n={props:{value:{default:""}},data:function(){return{}},computed:{calcValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},o=r("852e"),i=r.n(o),a=r("ed08");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new L(o||[]);return n(a,"_invoke",{value:_(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var h={};function d(){}function y(){}function v(){}var m={};s(m,i,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(P([])));g&&g!==e&&r.call(g,i)&&(m=g);var w=v.prototype=d.prototype=Object.create(m);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,u){var l=p(t[n],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==c(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,u)}))}u(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function _(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return y.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(x.prototype),s(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(w),s(w,l,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===c(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var h={methods:{logOut:function(t){var e=this;return function(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){p(i,n,o,a,c,"next",t)}function c(t){p(i,n,o,a,c,"throw",t)}a(void 0)}))}}(u().mark((function r(){var n,o,c;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.blOvertime,o=t.routeName,c={data:{}},n||(c.message="Exit succeeded"),r.next=5,e.$api.logout(s({},c));case 5:if(0===r.sent.code){r.next=8;break}return r.abrupt("return");case 8:e.$store.commit("SET_NEWUSER",!1),window.isApp&&(window.App.isLogin=!1,a.e.logOut()),e.$store.commit("SET_LOGININFO",""),e.$store.commit("SET_ACCOUNTINFO",{}),e.$store.commit("SET_LOGIN",!1),a.f.clear(),i.a.remove("token"),e.$store.commit("SET_ACCOUNT",!1),e.$store.commit("SET_RECHARGE_ACTIVITY_INFO",{}),e.$store.commit("CLEAR_CONTENT",""),n&&e.$store.commit("SET_MSG",{msg:"Log out automatically after not operating for a long time",msgType:"warning",status:!0,num:Math.random()}),e.$router.push({name:o});case 20:case"end":return r.stop()}}),r)})))()}}},d=r("2f62");function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===y(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g={computed:m(m({},Object(d.b)(["blUserBalanceShow"])),{},{blMoneyShow:{get:function(){return this.blUserBalanceShow},set:function(t){this.$store.commit("SET_BL_USER_BALANCE_SHOW",t)}}})}},"1dc5":function(t,e,r){"use strict";var n={props:{type:{default:"text"},label:{default:""},placeholder:{default:""}},mixins:[r("1b62").b]},o=(r("dae2"),r("2877")),i=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-input-box"},[t.label?e("div",{staticClass:"common-input-box-title"},[t._v(t._s(t.label))]):t._e(),e("div",{staticClass:"common-input-box-container"},["checkbox"===t.type?e("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.calcValue,expression:"calcValue"}],staticClass:"common-input",attrs:{placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.calcValue)?t._i(t.calcValue,null)>-1:t.calcValue},on:{change:function(e){var r=t.calcValue,n=e.target,o=!!n.checked;if(Array.isArray(r)){var i=t._i(r,null);n.checked?i<0&&(t.calcValue=r.concat([null])):i>-1&&(t.calcValue=r.slice(0,i).concat(r.slice(i+1)))}else t.calcValue=o}}},"input",t.$attrs,!1)):"radio"===t.type?e("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.calcValue,expression:"calcValue"}],staticClass:"common-input",attrs:{placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.calcValue,null)},on:{change:function(e){t.calcValue=null}}},"input",t.$attrs,!1)):e("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.calcValue,expression:"calcValue"}],staticClass:"common-input",attrs:{placeholder:t.placeholder,type:t.type},domProps:{value:t.calcValue},on:{input:function(e){e.target.composing||(t.calcValue=e.target.value)}}},"input",t.$attrs,!1))])])}),[],!1,null,"7d69b306",null);e.a=i.exports},"24e9":function(t,e,r){},4026:function(t,e,r){},dae2:function(t,e,r){"use strict";r("07ff")},dc03:function(t,e,r){"use strict";var n={components:{CommonLoading:r("deb2").a},props:{type:{type:String,default:""},text:{default:""},loading:{type:Boolean,default:!1},disabled:{default:!1},width:{default:""},height:{default:""},color:{default:""},backgroundColor:{default:""}},methods:{btnClick:function(){this.disabled||this.$emit("btnClick")}}},o=(r("ebc4"),r("2877")),i=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-btn d-flex align-center justify-center",class:[{disabled:t.disabled},t.type],style:{width:t.width,height:t.height,color:t.color,backgroundColor:t.backgroundColor},on:{click:t.btnClick}},[t.loading?e("CommonLoading"):[t._v(t._s(t.text))],t._t("default")],2)}),[],!1,null,"b211dfa0",null);e.a=i.exports},deb2:function(t,e,r){"use strict";var n={props:{width:{type:String,default:"18px"},height:{type:String,default:"18px"}}},o=(r("f81c"),r("2877")),i=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-progress-circular v-progress-circular--visible v-progress-circular--indeterminate",style:{width:t.width,height:t.height}},[e("svg",{staticStyle:{transform:"rotate(0deg)"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"21.904761904761905 21.904761904761905 43.80952380952381 43.80952380952381"}},[e("circle",{staticClass:"v-progress-circular__overlay",attrs:{fill:"transparent",cx:"43.80952380952381",cy:"43.80952380952381",r:"20","stroke-width":"3.8095238095238093","stroke-dasharray":"125.664","stroke-dashoffset":"125.66370614359172px"}})])])}),[],!1,null,"0573f6b3",null);e.a=i.exports},ebc4:function(t,e,r){"use strict";r("24e9")},f81c:function(t,e,r){"use strict";r("4026")}}]);