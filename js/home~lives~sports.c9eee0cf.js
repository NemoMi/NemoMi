(window.webpackJsonp=window.webpackJsonp||[]).push([["home~lives~sports"],{"1cf4":function(t,e,r){"use strict";r("b32b")},"326c":function(t,e,r){},"354e":function(t,e,r){},"37df":function(t,e,r){"use strict";r("4ed8")},"4dcc":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("5a0c"),i=r.n(n);function o(t){return i()(function(t){return"string"==typeof t&&(t=t.replace(/(\+\d{2})(\d{2})$/,"$1:$2")),t}(t)).format("DD/MM HH:mm")}},"4ed8":function(t,e,r){},5635:function(t,e,r){},"5dbe":function(t,e,r){"use strict";var n=r("2f62"),i={data:function(){return{flyEle:"",flyTime:800,flyTimer:null}},beforeDestroy:function(){this.distoryCard()},methods:{addCard:function(t,e){var r=this;this.distoryCard();var n=".betslip-main-entry";if(n=document.querySelector(n)){this.createFlyEle(e);var i=t.clientX,o=t.clientY;this.flyEle.style.left=i-25+"px",this.flyEle.style.top=o-25+"px";var a=n.getBoundingClientRect(),s=a.left,c=a.top,l=a.width,u=a.height,m=document.body.offsetHeight;c>m&&(c=m-100);var f=s-i,d=c-o;window.$isPc?(f+=110,d+=45):(f+=.5*l+20,d+=.5*u),this.flyEle.style.transform="translate(".concat(f,"px, ").concat(d,"px) scale(.2)"),this.flyEle.style.transition="all ".concat(this.flyTime/1e3,"s cubic-bezier(0.12,0.78,0.53,0.92)"),this.flyTimer=setTimeout((function(){r.distoryCard()}),this.flyTime)}},createFlyEle:function(t){this.flyEle=document.createElement("div"),this.flyEle.className="card-fly",this.flyEle.innerText=t,document.body.appendChild(this.flyEle)},distoryCard:function(){this.flyEle&&(this.flyTimer&&clearTimeout(this.flyTimer),document.body.removeChild(this.flyEle),this.flyEle="")}}};function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===o(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={home:"1",draw:"X",away:"2"},u={mixins:[i],props:{matchItem:{type:Object,required:!0},marketItem:{type:Object,required:!0},oddsItem:{type:Object,required:!0}},computed:s(s({},Object(n.b)(["betData","betDataSids"])),{},{calcActive:function(){return this.betDataSids.includes(this.oddsItem.sid)},calcDisabled:function(){return!this.oddsItem.odds},calcMarketName:function(){if(this.oddsItem.hname){var t=this.oddsItem.hname;return this.marketItem.odds.length>2&&l[t.toLocaleLowerCase()]||t}var e=this.oddsItem.name||"",r=this.matchItem,n=r.homeName,i=r.awayName;return e.indexOf(n)>-1?"Home":e.indexOf(i)>-1?"Away":""}}),methods:{toggleBetSlip:function(t){if(!this.calcDisabled){var e=this.matchItem,r=e.sportId,n=e.sportName,i=e.matchId,o=e.homeName,a=e.awayName,s=e.eventStatus,c=this.marketItem,l=c.marketId,u=c.name,m=c.id,f=this.oddsItem,d=f.id,p=f.name,h=f.hname,b=f.sid,y=f.odds;if(this.betDataSids.includes(b)){var v=this.betDataSids.findIndex((function(t){return t===b}));this.betData.splice(v,1)}else this.$ET.tracking_v2("ilot_lite_click",{target_from:"sports_item_view",origin_from:this.$route.name,category_from:"live"===s?"Football Live":"Football Highlight",target_item:this.calcMarketName}),this.betData.push({checked:!0,sportId:r,sportName:n,matchId:i,homeName:o,awayName:a,eventStatus:s,marketId:l,marketName:u,marketSeqId:m,outcomeId:d,outcomeName:p,outcomeHName:h,sid:b,odds:y,money:+this.$t("betSlip.defaultAmount")}),this.addCard(t,y);this.$emit("toggle-bet-data"),this.$store.commit("SET_BET_DATA",this.betData)}}}},m=(r("a464"),r("758d"),r("2877")),f=Object(m.a)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"single-odds",class:[t.calcActive&&"active",t.calcDisabled&&"disabled"],on:{click:function(e){return e.stopPropagation(),t.toggleBetSlip.apply(null,arguments)}}},[e("p",{staticClass:"market-name"},[t._v(t._s(t.calcMarketName))]),e("p",{staticClass:"odds-value"},[t._v(t._s(t.oddsItem.odds))])])}),[],!1,null,"74b0d5ce",null);e.a=f.exports},"60a9":function(t,e,r){"use strict";r("8a72")},"758d":function(t,e,r){"use strict";r("326c")},"7c49":function(t,e,r){"use strict";var n=r("4dcc"),i=r("2f62");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===o(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={props:{lines:{type:Array,default:function(){return[]}},currentLine:{type:String,default:""}},data:function(){return{showLines:!1}},computed:s(s({},Object(i.b)(["showLinesGlobal"])),{},{calcCurrentLine:{get:function(){return this.currentLine},set:function(t){this.$emit("update:currentLine",t)}}}),watch:{showLinesGlobal:{immediate:!0,handler:function(t){!1===t&&(this.showLines=!1)}}},methods:{toggleShowLines:function(){var t=this;this.showLines?this.showLines=!1:(this.$store.commit("SET_SHOW_LINES_GLOBAL",!1),this.$nextTick((function(){t.showLines=!0,t.$store.commit("SET_SHOW_LINES_GLOBAL",!0)})))},selectLine:function(t){this.showLines=!1,this.calcCurrentLine=t}}},u=(r("1cf4"),r("2877")),m=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sports-lines"},[e("div",{staticClass:"current-line",on:{click:function(e){return e.stopPropagation(),t.toggleShowLines.apply(null,arguments)}}},[e("span",[t._v(t._s(t.currentLine))]),e("i",{staticClass:"icon-down"})]),t.showLines?e("div",{staticClass:"lines"},t._l(t.lines,(function(r){return e("div",{key:r,staticClass:"line-item",on:{click:function(e){return e.stopPropagation(),t.selectLine(r)}}},[t._v(t._s(r))])})),0):t._e()])}),[],!1,null,"741b3ec4",null).exports,f=r("5dbe");function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===d(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b={components:{CommonBtn:r("dc03").a},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(i.b)(["betData","bonusInfo"])),methods:{toBetslip:function(){this.$router.push("/betslip")}}},y=(r("37df"),Object(u.a)(b,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"betslip-sub-entry"},[e("span",{staticClass:"odds-text"},[t._v("Odds:"+t._s(t.bonusInfo.totalOdds))]),e("CommonBtn",{staticClass:"betslip-entry-btn",attrs:{text:"Betslip(".concat(this.betData.length,")")},on:{btnClick:t.toBetslip}})],1)}),[],!1,null,"68f219aa",null)).exports,v={components:{SportsLines:m,SingleOdds:f.a,BetSlipEntry:y},filters:{ftime:n.a,fliveTime:function(t){var e=t||0,r=Math.floor(e/60),n=e%60;return(r=String(r).length>1?r:"0"+r)+"'"+(n=String(n).length>1?n:"0"+n)+'"'}},props:{matchItem:{type:Object,required:!0},marketRecommends:{type:Array,default:function(){return[]}},currentMarket:{type:Object,default:function(){return{marketId:1,marketNameShow:"1X2"}}}},data:function(){return{currentLine:"",betSlipEntryVisible:!1}},computed:{calcMarkets:function(){var t=this;return this.matchItem.markets.filter((function(e){return e.marketId===t.currentMarket.marketId}))},calcMarket:function(){var t=this,e=this.calcMarkets.map((function(t){return t.specifiersAlias})).filter((function(t){return t}));if(0===e.length)return{market:this.calcMarkets[0]||{odds:[]},lines:[]};var r=e.findIndex((function(e){return e===t.currentLine}));return r=r>-1?r:0,this.currentLine=e[r],{market:this.calcMarkets[r],lines:e}}},created:function(){var t=this;this.eventBus.$on("hide-betslip-entry",(function(){t.betSlipEntryVisible=!1}))},methods:{onToggleBetData:function(){this.eventBus.$emit("hide-betslip-entry"),this.$nextTick((function(){}))},routeDetail:function(t){var e=this.matchItem,r=e.matchId,n=e.eventStatus;this.$ET.tracking_v2("ilot_lite_click",{target_from:t||"sports-detail",origin_from:this.$route.name,category_from:"live"===n?"Football Live":"Football Highlight"}),this.$store.commit("SET_SPORTS_DETAIL_MARKETS",this.marketRecommends),this.$router.push({name:"sportsDetail",query:{matchId:r}})}}},g={components:{SportsItem:(r("e1b9"),Object(u.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sports-item-wrap"},[e("div",{staticClass:"sports-item",on:{click:function(e){return t.routeDetail()}}},[e("div",{staticClass:"match-info"},["live"===t.matchItem.eventStatus?e("p",{staticClass:"time-info live-time"},[t.matchItem.takeUpTime?e("span",{staticClass:"mr-1"},[t._v(t._s(t._f("fliveTime")(t.matchItem.takeUpTime)))]):t._e(),t.matchItem.periodDesc?e("span",[t._v(t._s(t.matchItem.periodDesc))]):t._e()]):e("p",{staticClass:"time-info prematch-time"},[t._v(t._s(t._f("ftime")(t.matchItem.scheduledTime)))]),e("p",{staticClass:"home-info"},[e("span",{staticClass:"home-name"},[t._v(t._s(t.matchItem.homeName))]),"live"===t.matchItem.eventStatus?e("span",{staticClass:"home-score"},[t._v(t._s(t.matchItem.homeScore))]):t._e()]),e("p",{staticClass:"away-info"},[e("span",{staticClass:"away-name"},[t._v(t._s(t.matchItem.awayName))]),"live"===t.matchItem.eventStatus?e("span",{staticClass:"away-score"},[t._v(t._s(t.matchItem.awayScore))]):t._e()])]),e("div",{staticClass:"odds-info"},[t.calcMarket.lines.length?e("SportsLines",{attrs:{lines:t.calcMarket.lines,currentLine:t.currentLine},on:{"update:currentLine":function(e){t.currentLine=e},"update:current-line":function(e){t.currentLine=e}}}):t._e(),t._l(t.calcMarket.market.odds,(function(r){return e("SingleOdds",{key:r.sid,class:[t.calcMarket.lines.length&&t.calcMarket.market.odds.length>=3&&"small"],attrs:{matchItem:t.matchItem,marketItem:t.calcMarket.market,oddsItem:r},on:{"toggle-bet-data":t.onToggleBetData}})})),t.calcMarket.market.odds.length?t._e():e("div",{staticClass:"odds-unavailable"},[t._v("odds unavailable")]),e("div",{staticClass:"more-odds",on:{click:function(e){return e.stopPropagation(),t.routeDetail("+")}}},[t._v("+"+t._s(t.matchItem.outcomeSize))])],2)]),t.betSlipEntryVisible?e("BetSlipEntry"):t._e()],1)}),[],!1,null,"40ce55ec",null)).exports},props:{matchList:{type:Array,default:function(){return[]}},marketRecommends:{type:Array,default:function(){return[]}},currentMarket:{type:Object,default:function(){return{marketId:1,marketNameShow:"1X2"}}}},computed:{calcMatchGroup:function(){var t=this,e=[],r=[];return this.matchList.forEach((function(n,i){(r.push(n),i<t.matchList.length-1)?t.matchList[i+1].tournamentName!==n.tournamentName&&(e.push(r),r=[]):e.push(r)})),e}}},O=(r("60a9"),Object(u.a)(g,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sports-group"},t._l(t.calcMatchGroup,(function(r){return e("div",{key:r[0].matchId,staticClass:"group-item"},[e("div",{staticClass:"group-head"},[t._v(t._s(r[0].tournamentName))]),t._l(r,(function(r,n){return e("SportsItem",{key:"".concat(n,"-").concat(r.matchId),attrs:{matchItem:r,marketRecommends:t.marketRecommends,currentMarket:t.currentMarket}})}))],2)})),0)}),[],!1,null,"c4c3d756",null));e.a=O.exports},"8a72":function(t,e,r){},a464:function(t,e,r){"use strict";r("5635")},b32b:function(t,e,r){},e1b9:function(t,e,r){"use strict";r("354e")}}]);