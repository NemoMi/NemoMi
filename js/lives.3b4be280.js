(window.webpackJsonp=window.webpackJsonp||[]).push([["lives"],{"0bcb":function(t,e,r){"use strict";var i=r("567c"),n=r("950b"),o=r("9f05"),s=r("dc03"),a={props:{refresh:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},autoBack:{type:Boolean,default:!0}},components:{CommonHeader:i.a,CommonEntry:n.a,CommonToolbar:o.a,CommonBtn:s.a},methods:{handleBack:function(){this.$emit("back"),this.autoBack&&this.$router.back()},handleRefresh:function(){this.$emit("refresh")}}},c=(r("17f7"),r("2877")),l=Object(c.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-page"},[e("CommonHeader"),e("CommonEntry"),e("CommonToolbar",{staticClass:"mt-3",on:{goBack:t.handleBack}},[t.refresh?e("CommonBtn",{staticClass:"refresh-btn",attrs:{slot:"right",text:"Refresh",loading:t.loading},on:{btnClick:t.handleRefresh},slot:"right"}):t._e()],1),t._t("default")],2)}),[],!1,null,"7af3249e",null);e.a=l.exports},1284:function(t,e,r){},"17f7":function(t,e,r){"use strict";r("bb80")},3795:function(t,e,r){"use strict";r("1284")},"680d":function(t,e,r){"use strict";r.r(e);var i=r("2f62"),n=r("0bcb");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function a(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===o(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={components:{CommonBtn:r("dc03").a},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(i.b)(["livesMenu","livesMarket","livesSearch","livesMarketCurrent"])),methods:{toLivesMenu:function(){this.$router.push("/lives-menu")},toLivesTime:function(){this.$router.push("/lives-time")},toLivesLeague:function(){this.$router.push("/lives-league")},toLivesMarket:function(){this.$router.push("/lives-market")}}},l=(r("3795"),r("2877")),u=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-list"},[e("div",{staticClass:"search-row"},[t.livesMenu.length?e("CommonBtn",{staticClass:"search-item",on:{btnClick:t.toLivesMenu}},[e("span",{staticClass:"search-item-text"},[t._v(t._s(t.livesSearch.sportName))]),e("i",{staticClass:"search-item-icon"})]):t._e(),t.livesMarket.length?e("CommonBtn",{staticClass:"search-item",on:{btnClick:t.toLivesMarket}},[e("span",{staticClass:"search-item-text"},[t._v(t._s(t.livesMarketCurrent.marketNameShow))]),e("i",{staticClass:"search-item-icon"})]):t._e()],1)])}),[],!1,null,"74428609",null).exports,f=r("5a0c"),m=r.n(f);function v(){for(var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e=[],r=0;r<=6;r++){var i=m()().add(r,"day"),n=String(i.month()+1).padStart(2,"0"),o=String(i.date()).padStart(2,"0"),s=0===r?"Today":t[i.day()];e.push({timeName:"".concat(s,"(").concat(o,"/").concat(n,")"),timeRange:[i.startOf("day").format(),i.endOf("day").format()]})}return e}var d=r("7c49"),h=r("fd2d");function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!==p(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===p(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var S={components:{LivesList:d.a,LivesLoading:h.a},data:function(){return{weekList:v()}},computed:y(y({},Object(i.b)(["livesLoading","livesSearch","livesSearchFlag","livesPageNum","livesPageSize","livesHasMore","livesList","livesMarket","livesMarketCurrent"])),{},{calcTimeRange:function(){return this.livesSearch.timeRange?this.livesSearch.timeRange:this.livesSearchFlag.today.done?this.livesSearchFlag.tomorrow.done?[this.weekList[2].timeRange[0]]:this.weekList[1].timeRange:this.weekList[0].timeRange},calcOrderByTime:function(){var t=this.livesSearchFlag,e=t.today,r=t.tomorrow;return e.done&&r.done}}),watch:{livesSearch:{deep:!0,handler:function(t){this.$store.commit("SET_LIVES_SEARCH_FLAG",{today:{done:!1},tomorrow:{done:!1}}),this.$store.dispatch("getLivesList",{data:t,context:this,append:!1})}}},created:function(){this.$store.commit("SET_LIVES_MENU_LOADING",!1),this.$store.commit("SET_LIVES_LOADING",!1),this.$store.dispatch("getLivesMenu",{callback:this.setLivesSearch})},methods:{setLivesSearch:function(t){var e=t.filter((function(t){return t.matchCount}));if(e.length){var r=e.map((function(t){return t.sportId}));if(r.includes(this.livesSearch.sportId))this.$store.commit("SET_LIVES_SEARCH",y({},this.livesSearch));else{var i=r.findIndex((function(t){return"sr:sport:1"===t})),n=e[i>-1?i:0],o=n.sportId,s=n.sportName;this.$store.commit("SET_LIVES_SEARCH",{sportId:o,sportName:s})}}else this.$store.commit("SET_LIVES_LIST",[]),this.$store.commit("SET_LIVES_MARKET",[]),this.$store.commit("SET_LIVES_MARKET_CURRENT",{marketId:0,marketNameShow:""})}}},O=Object(l.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lives-main"},[e("LivesList",{attrs:{matchList:t.livesList,marketRecommends:t.livesMarket,currentMarket:t.livesMarketCurrent}}),!t.livesList.length&&t.livesLoading?e("LivesLoading"):t._e(),t.livesList.length||t.livesLoading?t._e():e("p",{staticClass:"py-5 text-center font-color-3"},[t._v("No match available")])],1)}),[],!1,null,null,null).exports;function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){w(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function w(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==L(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!==L(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===L(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var _={name:"lives",components:{CommonPage:n.a,LivesSearch:u,LivesMain:O},computed:j({},Object(i.b)(["livesMenu","livesMenuLoading","livesSearch","livesLoading"])),methods:{handleRefresh:function(){this.livesMenu.length?this.$store.commit("SET_LIVES_SEARCH",j({},this.livesSearch)):this.$store.dispatch("getLivesMenu",{callback:this.setLivesSearch})}}},k=Object(l.a)(_,(function(){var t=this,e=t._self._c;return e("CommonPage",{staticClass:"lives",attrs:{refresh:!0,loading:t.livesLoading||t.livesMenuLoading},on:{refresh:t.handleRefresh}},[e("LivesSearch"),e("LivesMain")],1)}),[],!1,null,null,null);e.default=k.exports},"7c46":function(t,e,r){},bb80:function(t,e,r){},c56c:function(t,e,r){"use strict";r("7c46")},fd2d:function(t,e,r){"use strict";var i={props:{count:{typeof:Number,default:6}},data:function(){return{loadingList:new Array(this.count).fill(null)}}},n=(r("c56c"),r("2877")),o=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sports-loading"},t._l(t.loadingList,(function(r,i){return e("div",{key:i,staticClass:"group-item"},[e("div",{staticClass:"group-head"}),t._m(0,!0)])})),0)}),[function(){var t=this._self._c;return t("div",{staticClass:"sports-item"},[t("div",{staticClass:"match-info"},[t("p",{staticClass:"time-info"}),t("p",{staticClass:"home-name"}),t("p",{staticClass:"away-name"})]),t("div",{staticClass:"odds-info"},[t("div",{staticClass:"single-odds"}),t("div",{staticClass:"single-odds"}),t("div",{staticClass:"single-odds"}),t("div",{staticClass:"more-odds"})])])}],!1,null,"3be23832",null);e.a=o.exports}}]);