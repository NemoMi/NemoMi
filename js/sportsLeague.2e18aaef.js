(window.webpackJsonp=window.webpackJsonp||[]).push([["sportsLeague"],{"0bcb":function(t,e,n){"use strict";var r=n("567c"),o=n("950b"),a=n("9f05"),i=n("dc03"),s={props:{refresh:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},autoBack:{type:Boolean,default:!0}},components:{CommonHeader:r.a,CommonEntry:o.a,CommonToolbar:a.a,CommonBtn:i.a},methods:{handleBack:function(){this.$emit("back"),this.autoBack&&this.$router.back()},handleRefresh:function(){this.$emit("refresh")}}},c=(n("17f7"),n("2877")),l=Object(c.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-page"},[e("CommonHeader"),e("CommonEntry"),e("CommonToolbar",{staticClass:"mt-3",on:{goBack:t.handleBack}},[t.refresh?e("CommonBtn",{staticClass:"refresh-btn",attrs:{slot:"right",text:"Refresh",loading:t.loading},on:{btnClick:t.handleRefresh},slot:"right"}):t._e()],1),t._t("default")],2)}),[],!1,null,"7af3249e",null);e.a=l.exports},"17f7":function(t,e,n){"use strict";n("bb80")},"23af":function(t,e,n){"use strict";n.r(e);var r=n("2f62"),o=n("0bcb"),a=n("dc03"),i=n("deb2"),s={components:{CommonBtn:a.a,CommonLoading:i.a},props:{list:{type:Array,default:function(){return[]}},selectedValues:{type:Array,default:function(){return[]}}},methods:{handleClickTreeItem:function(t){this.$emit("click-tree-item",t)},handleSelect:function(t){this.$emit("select",t)}}},c=(n("269a"),n("2877")),l=Object(c.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-tree"},t._l(t.list,(function(n){return e("div",{key:n.value,staticClass:"tree-item"},[e("div",{staticClass:"tree-item-main",on:{click:function(e){return t.handleClickTreeItem(n)}}},[e("div",{staticClass:"list-item list-item-main"},[e("span",{staticClass:"list-item-text"},[t._v(t._s(n.name))]),n.loading?e("CommonLoading",{staticClass:"common-loading"}):e("i",{staticClass:"list-item-icon",class:[n.children.length&&!n.hideChildren?"icon-up":"icon-down"]})],1)]),n.children&&!n.hideChildren?e("div",{staticClass:"tree-item-children"},t._l(n.children,(function(n){return e("CommonBtn",{key:n.value,staticClass:"list-item list-item-sub",class:[t.selectedValues.includes(n.value)&&"active"],on:{btnClick:function(e){return t.handleSelect(n)}}},[e("span",{staticClass:"list-item-text"},[t._v(t._s(n.name))])])})),1):t._e()])})),0)}),[],!1,null,"7f3f174e",null).exports,u={props:{count:{typeof:Number,default:6}},data:function(){return{loadingList:new Array(this.count).fill(null)}}},m=(n("fb209"),Object(c.a)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"common-tree"},t._l(t.loadingList,(function(t,n){return e("div",{key:n,staticClass:"tree-item"},[e("div",{staticClass:"tree-item-main"}),e("div",{staticClass:"tree-item-children"})])})),0)}),[],!1,null,"4beff520",null)).exports;function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===d(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y={components:{CommonPage:o.a,CommonBtn:a.a,CommonTree:l,CommonTreeLoading:m},computed:b(b({},Object(r.b)(["sportsSearch","sportsLeagueLoading","sportsLeague","sportsLeagueSelected"])),{},{calcSportsLeague:function(){return this.sportsLeague.map((function(t){return b(b({},t),{},{value:t.categoryId,name:"".concat(t.categoryName," (").concat(t.matchCount,")"),children:t.tournaments?t.tournaments.map((function(t){return b(b({},t),{},{value:t.tournamentId,name:"".concat(t.name," (").concat(t.matchCount,")")})})):[]})}))},calcSportsLeagueSelected:function(){return this.sportsLeagueSelected.map((function(t){return t.tournamentId}))}}),activated:function(){this.$store.commit("SET_SPORTS_LEAGUE_LOADING",!1),this.$store.dispatch("getSportsLeague",{sportId:this.sportsSearch.sportId,expand:"hot"})},methods:{refreshLeague:function(){this.$store.dispatch("getSportsLeague",{sportId:this.sportsSearch.sportId,expand:"hot"})},refreshSports:function(){this.$store.commit("SET_SPORTS_SEARCH",b({},this.sportsSearch))},handleReset:function(){this.$store.commit("SET_SPORTS_LEAGUE_SELECTED",[])},handleApply:function(){this.refreshSports(),this.$router.back()},handleClickTreeItem:function(t){var e=this;if(t.tournaments&&t.tournaments.length){var n=f(this.sportsLeague);return n.forEach((function(e){e.categoryId===t.categoryId&&(e.hideChildren=!e.hideChildren)})),void this.$store.commit("SET_SPORTS_LEAGUE",n)}var r={sportId:this.sportsSearch.sportId,categoryId:t.categoryId};this.setLoading(t,!0),this.$api.querySportsSubLeague({data:r}).then((function(n){if(0===n.code&&Array.isArray(n.data)){var r=f(e.sportsLeague);r.forEach((function(e){e.categoryId===t.categoryId&&(e.tournaments=n.data,e.loading=!1)})),e.$store.commit("SET_SPORTS_LEAGUE",r)}else e.setLoading(t,!1)})).catch((function(){e.setLoading(t,!1)}))},setLoading:function(t,e){var n=f(this.sportsLeague);n.forEach((function(n){n.categoryId===t.categoryId&&(n.loading=e)})),this.$store.commit("SET_SPORTS_LEAGUE",n)},handleSelect:function(t){var e=t.tournamentId,n=t.name,r=f(this.sportsLeagueSelected);if(this.calcSportsLeagueSelected.includes(e)){var o=this.calcSportsLeagueSelected.findIndex((function(t){return t===e}));r.splice(o,1)}else r.push({tournamentId:e,name:n});this.$store.commit("SET_SPORTS_LEAGUE_SELECTED",r)}}},S=(n("dbb0"),Object(c.a)(y,(function(){var t=this,e=t._self._c;return e("CommonPage",{staticClass:"sports-league",attrs:{refresh:!0,loading:t.sportsLeagueLoading},on:{refresh:t.refreshLeague,back:t.refreshSports}},[e("div",{staticClass:"btn-list"},[e("CommonBtn",{staticClass:"reset-btn",on:{btnClick:t.handleReset}},[t._v("Reset")]),e("CommonBtn",{staticClass:"apply-btn",on:{btnClick:t.handleApply}},[t._v("Apply")])],1),e("CommonTree",{attrs:{list:t.calcSportsLeague,selectedValues:t.calcSportsLeagueSelected},on:{"click-tree-item":t.handleClickTreeItem,select:t.handleSelect}}),!t.calcSportsLeague.length&&t.sportsLeagueLoading?e("CommonTreeLoading"):t._e()],1)}),[],!1,null,"6925b8a1",null));e.default=S.exports},"269a":function(t,e,n){"use strict";n("2974")},2974:function(t,e,n){},bb80:function(t,e,n){},bc72:function(t,e,n){},dbb0:function(t,e,n){"use strict";n("ecea")},ecea:function(t,e,n){},fb209:function(t,e,n){"use strict";n("bc72")}}]);