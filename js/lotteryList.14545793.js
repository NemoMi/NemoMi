(window.webpackJsonp=window.webpackJsonp||[]).push([["lotteryList"],{"0bcb":function(t,e,r){"use strict";var n=r("567c"),o=r("950b"),a=r("9f05"),i=r("dc03"),c={props:{refresh:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},autoBack:{type:Boolean,default:!0}},components:{CommonHeader:n.a,CommonEntry:o.a,CommonToolbar:a.a,CommonBtn:i.a},methods:{handleBack:function(){this.$emit("back"),this.autoBack&&this.$router.back()},handleRefresh:function(){this.$emit("refresh")}}},u=(r("17f7"),r("2877")),s=Object(u.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-page"},[e("CommonHeader"),e("CommonEntry"),e("CommonToolbar",{staticClass:"mt-3",on:{goBack:t.handleBack}},[t.refresh?e("CommonBtn",{staticClass:"refresh-btn",attrs:{slot:"right",text:"Refresh",loading:t.loading},on:{btnClick:t.handleRefresh},slot:"right"}):t._e()],1),t._t("default")],2)}),[],!1,null,"7af3249e",null);e.a=s.exports},"17f7":function(t,e,r){"use strict";r("bb80")},"3d48":function(t,e,r){},"539e":function(t,e,r){"use strict";r("3d48")},9194:function(t,e,r){"use strict";r.r(e);var n=r("0bcb"),o=r("dc03"),a=r("ed08"),i=r("03f9");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new E(o||[]);return n(i,"_invoke",{value:O(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function m(){}function d(){}function y(){}var v={};l(v,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(C([])));b&&b!==e&&r.call(b,a)&&(v=b);var w=y.prototype=m.prototype=Object.create(v);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,a,i,u){var s=h(t[n],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==c(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,u)}),(function(t){o("throw",t,i,u)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,u)}))}u(s.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function O(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:d,configurable:!0}),d.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},L(x.prototype),l(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(w),l(w,s,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function s(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){s(a,n,o,i,c,"next",t)}function c(t){s(a,n,o,i,c,"throw",t)}i(void 0)}))}}var f={data:function(){return{lotteriesList:[],sharedTopicList:[],onSaleLoadMoreCount:0,gameListData:[],idFootball:"11201",blLoading:!1,gameNameMap:{11101:"5/90",11001:"Quick 3",11501:"Super 5/90",11201:"Football 14"}}},mounted:function(){this.gameList()},methods:{toShared:function(t){window.open(t)},loadOver:function(){0===this.tab&&(this.onSaleLoading=!1)},gameList:function(t){var e=this;return l(u().mark((function r(){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$api.gameList({data:{terType:4,gameType:0,type:"gameList",pageNum:e.pageNum,pageSize:e.pageSize}});case 2:if(0===(n=r.sent).code){r.next=5;break}return r.abrupt("return");case 5:n.data.list.forEach((function(t){t.transGameName=e.gameNameMap[t.gameCode],t.url=Object(i.a)(t.url||"")})),e.gameListData=n.data.list,e.lotteriesList=n.data.list,t&&n.data.list.forEach((function(r){if(t===r.id){r.url=Object(i.a)(r.url||"");var n=r.url+"?content="+r.content;e.$router.push({name:"iframe",query:{url:n}})}}));case 9:case"end":return r.stop()}}),r)})))()},getGameInfo:function(t){var e=this;return l(u().mark((function r(){var n,o,a;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={},o=[{GameID:"11101"},{GameID:"11001"},{GameID:"11501"},{GameID:"11201"}],r.next=4,e.$api.getGameInfo({data:{Format01:n,Format02:o}});case 4:if("0"===(a=r.sent).RetCode){r.next=7;break}return r.abrupt("return");case 7:e.handleData(a,t);case 8:case"end":return r.stop()}}),r)})))()},handleData:function(t,e){var r=this,n=[];t.Format02.forEach((function(t){e.forEach((function(e){if(e.id===parseInt(t.GameID)){var o=e;o.url=Object(i.a)(o.url||""),o.detail=t,o.random=Math.floor(100*Math.random());var a=r.$moment(r.$common.toMyLocalTime(t.EndSaleTime,!0)).valueOf(),c=parseInt((new Date).getTime()),u=r.$moment(r.$common.toMyLocalTime(t.StartSaleTime)).valueOf();o.time=Math.floor((a-c)/1e3),o.startSale=Math.floor((c-u)/1e3),o.key=t.Issue,o.startSale<0&&(o.key=o.key+"_"+Math.abs(o.startSale)),n.push(o)}}))})),this.lotteriesList=n,this.$forceUpdate()},loadNewData:function(t,e){var r=this;return l(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("lottery"!==t){n.next=15;break}if(!r.blLoading){n.next=4;break}return a.c.once("getGameInfo",(function(){e&&e()})),n.abrupt("return");case 4:return r.blLoading=!0,n.prev=5,n.next=8,r.getGameInfo(r.gameListData);case 8:return n.prev=8,r.blLoading=!1,a.c.emit("getGameInfo"),e&&e(),n.finish(8);case 13:n.next=16;break;case 15:r.gameList(t);case 16:case"end":return n.stop()}}),n,null,[[5,,8,13]])})))()}}},h=r("2f62");function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===p(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v={name:"lottery-list",components:{CommonPage:n.a,CommonBtn:o.a},mixins:[f],computed:d(d({},Object(h.b)(["isLogin","contentData"])),{},{calcLotteriesList:function(){return this.lotteriesList.filter((function(t){return"11201"!==t.id.toString()}))}}),methods:{toBuy:function(t){if(localStorage.removeItem("linkActive"),this.isLogin){var e=t.url+"?content="+t.content;this.$router.push({name:"iframe",query:{url:e}})}else this.$router.push("/login")}}},g=(r("539e"),r("2877")),b=Object(g.a)(v,(function(){var t=this,e=t._self._c;return e("CommonPage",{staticClass:"lottery-list"},[e("div",{staticClass:"lottery-list-container d-flex justify-space-between flex-wrap"},t._l(t.calcLotteriesList,(function(r,n){return e("CommonBtn",{key:n,staticClass:"search-item",on:{btnClick:function(e){return t.toBuy(r)}}},[e("span",{staticClass:"search-item-text"},[t._v(t._s(r&&r.transGameName))]),e("i",{staticClass:"search-item-icon"})])})),1)])}),[],!1,null,"6fb7621d",null);e.default=b.exports},bb80:function(t,e,r){}}]);