(window.webpackJsonp=window.webpackJsonp||[]).push([["sportsDetail"],{"0bcb":function(t,e,r){"use strict";var a=r("567c"),i=r("950b"),s=r("9f05"),n=r("dc03"),o={props:{refresh:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},autoBack:{type:Boolean,default:!0}},components:{CommonHeader:a.a,CommonEntry:i.a,CommonToolbar:s.a,CommonBtn:n.a},methods:{handleBack:function(){this.$emit("back"),this.autoBack&&this.$router.back()},handleRefresh:function(){this.$emit("refresh")}}},c=(r("17f7"),r("2877")),l=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-page"},[e("CommonHeader"),e("CommonEntry"),e("CommonToolbar",{staticClass:"mt-3",on:{goBack:t.handleBack}},[t.refresh?e("CommonBtn",{staticClass:"refresh-btn",attrs:{slot:"right",text:"Refresh",loading:t.loading},on:{btnClick:t.handleRefresh},slot:"right"}):t._e()],1),t._t("default")],2)}),[],!1,null,"7af3249e",null);e.a=l.exports},"17f7":function(t,e,r){"use strict";r("bb80")},"1db8":function(t,e,r){"use strict";r("48ff")},"326c":function(t,e,r){},"48ff":function(t,e,r){},"4b37":function(t,e,r){"use strict";r.r(e);var a=r("2f62"),i=r("0bcb"),s={filters:{ftime:r("4dcc").a,fliveTime:function(t){var e=t||0,r=Math.floor(e/60),a=e%60;return(r=String(r).length>1?r:"0"+r)+"'"+(a=String(a).length>1?a:"0"+a)+'"'}},props:{matchItem:{type:Object,required:!0}}},n=(r("a88e"),r("2877")),o=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"detail-head"},[e("div",{staticClass:"group-head"},[t._v(t._s(t.matchItem.tournamentName))]),e("div",{staticClass:"match-info"},["live"===t.matchItem.eventStatus?e("p",{staticClass:"time-info live-time"},[t.matchItem.takeUpTime?e("span",{staticClass:"mr-1"},[t._v(t._s(t._f("fliveTime")(t.matchItem.takeUpTime)))]):t._e(),t.matchItem.periodDesc?e("span",[t._v(t._s(t.matchItem.periodDesc))]):t._e()]):e("p",{staticClass:"time-info prematch-time"},[t._v(t._s(t._f("ftime")(t.matchItem.scheduledTime)))]),e("p",{staticClass:"home-info"},[e("span",{staticClass:"home-name"},[t._v(t._s(t.matchItem.homeName))]),"live"===t.matchItem.eventStatus?e("span",{staticClass:"home-score"},[t._v(t._s(t.matchItem.homeScore))]):t._e()]),e("p",{staticClass:"away-info"},[e("span",{staticClass:"away-name"},[t._v(t._s(t.matchItem.awayName))]),"live"===t.matchItem.eventStatus?e("span",{staticClass:"away-score"},[t._v(t._s(t.matchItem.awayScore))]):t._e()])])])}),[],!1,null,"60fefdb4",null).exports,c={components:{SingleOdds:r("5dbe").a},props:{matchItem:{type:Object,required:!0},currentMarket:{type:Object,required:!0}},computed:{calcMarkets:function(){var t=this;return this.matchItem.markets.filter((function(e){return e.marketId===t.currentMarket.marketId}))},calcLines:function(){return this.calcMarkets.map((function(t){return t.specifiersAlias})).filter((function(t){return t}))}}},l=(r("1db8"),Object(n.a)(c,(function(){var t=this,e=t._self._c;return t.calcMarkets.length?e("div",{staticClass:"market-item"},[e("h2",{staticClass:"market-name"},[t._v(t._s(t.currentMarket.marketNameShow))]),t._l(t.calcMarkets,(function(r){return e("div",{key:r.id,staticClass:"odds-line"},[r.specifiersAlias&&r.odds.length?e("div",{staticClass:"single-line"},[t._v(t._s(r.specifiersAlias))]):t._e(),t._l(r.odds,(function(a){return e("SingleOdds",{key:a.sid,attrs:{matchItem:t.matchItem,marketItem:r,oddsItem:a}})}))],2)}))],2):t._e()}),[],!1,null,"7368e3c0",null)).exports,m={props:{matchItem:{type:Object,required:!0},sportsDetailMarkets:{type:Array,required:!0}},components:{MarketItem:l}},u=Object(n.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"market-list"},t._l(t.sportsDetailMarkets,(function(r){return e("MarketItem",{key:r.marketNameShow,attrs:{matchItem:t.matchItem,currentMarket:r}})})),1)}),[],!1,null,null,null).exports;function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==f(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===f(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y={components:{CommonPage:i.a,DetailHead:o,MarketList:u},data:function(){return{matchId:this.$route.query.matchId}},computed:h(h({},Object(a.b)(["sportsDetailLoading","sportsDetailList","sportsDetailMarkets"])),{},{calcSportsDetail:function(){var t=this;return this.sportsDetailList.filter((function(e){return e.matchId===t.matchId}))[0]||{markets:[]}},calcEmpty:function(){return!this.sportsDetailMarkets.length||!this.calcSportsDetail.markets.length}}),activated:function(){var t=this.$route.query.matchId;this.matchId=t,this.$store.commit("SET_SPORTS_DETAIL_LOADING",!1),this.$store.dispatch("getSportsDetail",{matchId:t})},methods:{handleRefresh:function(){this.$store.commit("SET_SPORTS_DETAIL_LOADING",!1),this.$store.dispatch("getSportsDetail",{matchId:this.matchId})}}},b=Object(n.a)(y,(function(){var t=this,e=t._self._c;return e("CommonPage",{staticClass:"sports-detail",attrs:{refresh:!0,loading:t.sportsDetailLoading},on:{refresh:t.handleRefresh}},[e("DetailHead",{attrs:{matchItem:t.calcSportsDetail}}),e("MarketList",{attrs:{matchItem:t.calcSportsDetail,sportsDetailMarkets:t.sportsDetailMarkets}}),t.calcEmpty&&!t.sportsDetailLoading?e("p",{staticClass:"py-5 text-center font-color-3"},[t._v("No Data")]):t._e()],1)}),[],!1,null,null,null);e.default=b.exports},"4dcc":function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var a=r("5a0c"),i=r.n(a);function s(t){return i()(function(t){return"string"==typeof t&&(t=t.replace(/(\+\d{2})(\d{2})$/,"$1:$2")),t}(t)).format("DD/MM HH:mm")}},5635:function(t,e,r){},"5dbe":function(t,e,r){"use strict";var a=r("2f62"),i={data:function(){return{flyEle:"",flyTime:800,flyTimer:null}},beforeDestroy:function(){this.distoryCard()},methods:{addCard:function(t,e){var r=this;this.distoryCard();var a=".betslip-main-entry";if(a=document.querySelector(a)){this.createFlyEle(e);var i=t.clientX,s=t.clientY;this.flyEle.style.left=i-25+"px",this.flyEle.style.top=s-25+"px";var n=a.getBoundingClientRect(),o=n.left,c=n.top,l=n.width,m=n.height,u=document.body.offsetHeight;c>u&&(c=u-100);var f=o-i,d=c-s;window.$isPc?(f+=110,d+=45):(f+=.5*l+20,d+=.5*m),this.flyEle.style.transform="translate(".concat(f,"px, ").concat(d,"px) scale(.2)"),this.flyEle.style.transition="all ".concat(this.flyTime/1e3,"s cubic-bezier(0.12,0.78,0.53,0.92)"),this.flyTimer=setTimeout((function(){r.distoryCard()}),this.flyTime)}},createFlyEle:function(t){this.flyEle=document.createElement("div"),this.flyEle.className="card-fly",this.flyEle.innerText=t,document.body.appendChild(this.flyEle)},distoryCard:function(){this.flyEle&&(this.flyTimer&&clearTimeout(this.flyTimer),document.body.removeChild(this.flyEle),this.flyEle="")}}};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==s(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===s(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={home:"1",draw:"X",away:"2"},m={mixins:[i],props:{matchItem:{type:Object,required:!0},marketItem:{type:Object,required:!0},oddsItem:{type:Object,required:!0}},computed:o(o({},Object(a.b)(["betData","betDataSids"])),{},{calcActive:function(){return this.betDataSids.includes(this.oddsItem.sid)},calcDisabled:function(){return!this.oddsItem.odds},calcMarketName:function(){if(this.oddsItem.hname){var t=this.oddsItem.hname;return this.marketItem.odds.length>2&&l[t.toLocaleLowerCase()]||t}var e=this.oddsItem.name||"",r=this.matchItem,a=r.homeName,i=r.awayName;return e.indexOf(a)>-1?"Home":e.indexOf(i)>-1?"Away":""}}),methods:{toggleBetSlip:function(t){if(!this.calcDisabled){var e=this.matchItem,r=e.sportId,a=e.sportName,i=e.matchId,s=e.homeName,n=e.awayName,o=e.eventStatus,c=this.marketItem,l=c.marketId,m=c.name,u=c.id,f=this.oddsItem,d=f.id,h=f.name,p=f.hname,y=f.sid,b=f.odds;if(this.betDataSids.includes(y)){var v=this.betDataSids.findIndex((function(t){return t===y}));this.betData.splice(v,1)}else this.$ET.tracking_v2("ilot_lite_click",{target_from:"sports_item_view",origin_from:this.$route.name,category_from:"live"===o?"Football Live":"Football Highlight",target_item:this.calcMarketName}),this.betData.push({checked:!0,sportId:r,sportName:a,matchId:i,homeName:s,awayName:n,eventStatus:o,marketId:l,marketName:m,marketSeqId:u,outcomeId:d,outcomeName:h,outcomeHName:p,sid:y,odds:b,money:+this.$t("betSlip.defaultAmount")}),this.addCard(t,b);this.$emit("toggle-bet-data"),this.$store.commit("SET_BET_DATA",this.betData)}}}},u=(r("a464"),r("758d"),r("2877")),f=Object(u.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"single-odds",class:[t.calcActive&&"active",t.calcDisabled&&"disabled"],on:{click:function(e){return e.stopPropagation(),t.toggleBetSlip.apply(null,arguments)}}},[e("p",{staticClass:"market-name"},[t._v(t._s(t.calcMarketName))]),e("p",{staticClass:"odds-value"},[t._v(t._s(t.oddsItem.odds))])])}),[],!1,null,"74b0d5ce",null);e.a=f.exports},"758d":function(t,e,r){"use strict";r("326c")},a464:function(t,e,r){"use strict";r("5635")},a88e:function(t,e,r){"use strict";r("d765")},bb80:function(t,e,r){},d765:function(t,e,r){}}]);