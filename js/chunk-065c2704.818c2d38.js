(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-065c2704"],{1105:function(t,e,i){"use strict";i("eb71f")},"7a0e":function(t,e,i){"use strict";i("c755")},bbad:function(t,e,i){"use strict";i.r(e);var n=i("2f62"),o={components:{CommonIcon:i("1951").a},props:{ticketItem:{type:Object,required:!0}}},r=(i("7a0e"),i("2877")),s=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"simu-bet-item"},[e("div",{staticClass:"main-info"},["single"===t.ticketItem.ticketType?e("span",{staticClass:"bet-name"},[t._v(t._s(t.ticketItem.ticketType)+" X"+t._s(t.ticketItem.resultList.length))]):e("span",{staticClass:"bet-name"},[t._v(t._s(t.ticketItem.ticketType)+" "+t._s(t.ticketItem.resultList.length)+" in 1")]),e("span",{staticClass:"bet-time"},[t._v(t._s(t._f("timeFormat")(t.ticketItem.createTime,"DD/MM HH:mm")))]),e("span",{class:["bet-status",t.ticketItem.status]},[t._v(t._s("lose"===t.ticketItem.status?"lost":t.ticketItem.status))]),"win"===t.ticketItem.status?e("CommonIcon",{attrs:{icon:"mdi-crown"}}):t._e()],1),e("div",{staticClass:"team-info"},t._l(t.ticketItem.resultList.slice(0,2),(function(i,n){return e("div",{key:"".concat(n,"-").concat(i.eventId),staticClass:"team-item"},[t._v(t._s(i.homeName)+" VS "+t._s(i.awayName))])})),0),t.ticketItem.resultList.length>2?e("div",{staticClass:"more-info"},[e("span",{staticClass:"left"},[t._v("...")]),e("span",{staticClass:"right"},[t._v(t._s(t.ticketItem.resultList.length-2)+" More")])]):t._e(),e("div",{staticClass:"amount-info"},[e("div",{staticClass:"amount-item"},[e("span",{staticClass:"label"},[t._v("Total Stake:")]),e("span",{staticClass:"amount"},[t._v(t._s(t.$t("common.currency.SYMBOL"))+" "+t._s(t.ticketItem.totalStake))])]),e("div",{staticClass:"amount-item"},[e("span",{staticClass:"label"},[t._v("Return:")]),e("span",{staticClass:"amount"},[t._v(t._s(t.$t("common.currency.SYMBOL"))+" "+t._s(t.ticketItem.factWinAmount))])])])])}),[],!1,null,"7072a7b7",null).exports,a=i("deb2"),c=i("0488");function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function p(t,e,i){return(e=function(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===l(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var y={components:{SimuBetItem:s,CommonLoading:a.a,NoData:c.a},props:{scrollTarget:{type:String,default:".simu-his-dialog"}},data:function(){return{lid:"",loading:!1,noData:!1,hasMore:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(n.b)(["loginInfo","simuBetHistory"])),created:function(){this.getSimuBetHistory()},methods:{getSimuBetHistory:function(){var t=this;this.loading=!0,this.$api.getSimuBetHistory({data:{lid:this.lid,playerCode:this.loginInfo.playerCode}}).then((function(e){if(t.loading=!1,0===e.code&&e.data){var i=e.data.list||[],n=t.lid?t.simuBetHistory.concat(i):u(i);t.$store.commit("SET_SIMU_BET_HISTORY",n),i.length?t.lid=i[i.length-1].ticketId:t.noData=!t.simuBetHistory.length,t.hasMore=i.length}})).catch((function(){t.loading=!1}))},loadMore:function(){this.loading||this.hasMore&&this.getSimuBetHistory()},showDetail:function(t){this.$store.commit("SET_SIMU_DETAIL",t),this.$router.push("/simuDetail")}}},b=(i("1105"),Object(r.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"simu-bet-list"},[t._l(t.simuBetHistory,(function(i,n){return e("div",{key:"".concat(n,"-").concat(i.ticketId),on:{click:function(e){return t.showDetail(i)}}},[e("SimuBetItem",{attrs:{ticketItem:i}})],1)})),t.loading?e("div",{staticClass:"text-center py-4"},[e("CommonLoading")],1):t._e(),t.noData?e("NoData"):t._e()],2)}),[],!1,null,"fc7155b6",null));e.default=b.exports},c755:function(t,e,i){},eb71f:function(t,e,i){}}]);