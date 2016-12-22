webpackJsonp([2,0],[function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var o=n(7),a=s(o),i=n(72),r=s(i),u=n(71),c=s(u),d=n(57),f=s(d),l=n(14),p=n(18),v=s(p);a.default.use(r.default),a.default.use(c.default),a.default.http.options.root="https://vuejs-stock-trader-69b1d.firebaseio.com/",a.default.filter("currency",function(t){return"$"+t.toLocaleString()});var _=new r.default({mode:"history",routes:l.routes});new a.default({el:"#app",router:_,store:v.default,render:function(t){return t(f.default)}})},,,,,,,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{id:1,name:"BMW",price:110},{id:2,name:"Google",price:220},{id:3,name:"Apple",price:250},{id:4,name:"Twitter",price:8}]},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.routes=void 0;var o=n(59),a=s(o),i=n(61),r=s(i),u=n(63),c=s(u);e.routes=[{path:"/",component:a.default},{path:"/portfolio",component:r.default},{path:"/stocks",component:c.default}]},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.loadData=void 0;var o=n(7),a=s(o);e.loadData=function(t){var e=t.commit;a.default.http.get("data.json").then(function(t){return t.json()}).then(function(t){if(t){var n=t.stocks,s=t.funds,o=t.stockPortfolio,a={stockPortfolio:o,funds:s};e("SET_STOCKS",n),e("SET_PORTFOLIO",a)}})}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={funds:1e3,stocks:[]},s={BUY_STOCKS:function(t,e){var n=e.stockId,s=e.quantity,o=e.stockPrice,a=t.stocks.find(function(t){return t.id===n});a?a.quantity+=1:t.stocks.push({id:n,quantity:s}),t.funds-=o*s},SELL_STOCK:function(t,e){var n=e.stockId,s=e.quantity,o=e.stockPrice,a=t.stocks.find(function(t){return t.id===n});a.quantity>s?a.quantity-=1:t.stocks.splice(t.stocks.indexOf(a),1),t.funds-=o*s},SET_PORTFOLIO:function(t,e){t.funds=e.funds,t.stocks=e.stockPortfolio?e.stockPortfolio:[]}},o={sellStock:function(t,e){var n=t.commit;n("SELL_STOCK",e)}},a={stockPortfolio:function(t,e){return t.stocks.map(function(t){var n=e.stocks.find(function(e){return e.id===t.id});return{id:t.id,quantity:t.quantity,name:n.name,price:n.price}})},funds:function(t){return t.funds}};e.default={state:n,mutations:s,actions:o,getters:a}},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(13),a=s(o),i={stocks:[]},r={SET_STOCKS:function(t,e){t.stocks=e},RND_STOCKS:function(t){t.stocks.forEach(function(t){t.price=Math.round(t.price*(1+Math.random()-.5))})}},u={buyStock:function(t,e){var n=t.commit;n("BUY_STOCKS",e)},initStocks:function(t){var e=t.commit;e("SET_STOCKS",a.default)},randomizeStocks:function(t){var e=t.commit;e("RND_STOCKS")}},c={stocks:function(t){return t.stocks}};e.default={state:i,mutations:r,actions:u,getters:c}},function(t,e,n){"use strict";function s(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(7),i=o(a),r=n(1),u=o(r),c=n(17),d=o(c),f=n(16),l=o(f),p=n(15),v=s(p);i.default.use(u.default),e.default=new u.default.Store({actions:v,modules:{stocks:d.default,portfolio:l.default}})},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(58),a=s(o);e.default={components:{appHeader:a.default},created:function(){this.$store.dispatch("initStocks")}}},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=s(o),i=n(1);e.default={data:function(){return{isDropdownOpen:!1}},computed:{funds:function(){return this.$store.getters.funds}},methods:(0,a.default)({},(0,i.mapActions)({randomizeStocks:"randomizeStocks",fetchData:"loadData"}),{endDay:function(){this.randomizeStocks()},saveData:function(){var t={funds:this.$store.getters.funds,stockPortfolio:this.$store.getters.stockPortfolio,stocks:this.$store.getters.stocks};this.$http.put("data.json",t)},loadData:function(){this.fetchData()}})}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{funds:function(){return this.$store.getters.funds}}}},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=s(o),i=n(1);e.default={props:["stock"],data:function(){return{quantity:0}},computed:{insufficientQuantity:function(){return this.quantity>this.stock.quantity}},methods:(0,a.default)({},(0,i.mapActions)({placeSellOrder:"sellStock"}),{sellStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.placeSellOrder(t),this.quantity=0}})}},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),a=s(o),i=n(1),r=n(60),u=s(r);e.default={computed:(0,a.default)({},(0,i.mapGetters)({stocks:"stockPortfolio"})),components:{appStock:u.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["stock"],data:function(){return{quantity:0}},computed:{funds:function(){return this.$store.getters.funds},insufficientFunds:function(){return this.quantity*this.stock.price>this.funds}},methods:{buyStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.$store.dispatch("buyStock",t),this.quantity=0}}}},function(t,e,n){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(62),a=s(o);e.default={components:{appStock:a.default},computed:{stocks:function(){return this.$store.getters.stocks}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var s,o;n(54),s=n(19);var a=n(65);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e,n){var s,o;s=n(20);var a=n(68);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e,n){var s,o;s=n(21);var a=n(64);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e,n){var s,o;n(56),s=n(22);var a=n(70);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-bf0d7614",t.exports=s},function(t,e,n){var s,o;s=n(23);var a=n(69);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e,n){var s,o;n(55),s=n(24);var a=n(66);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-48f9470d",t.exports=s},function(t,e,n){var s,o;s=n(25);var a=n(67);o=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(o=s=s.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=s},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("h1",[t._v("Trade or View your portfolio")]),t._v(" "),e("h6",[t._v("You may Save & Load yout Data")]),t._v(" "),e("h6",[t._v("Click on 'End Day' to begin a New Day!")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("Your Fund: "+t._s(t._f("currency")(t.funds)))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"container"},[e("app-header"),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("transition",{attrs:{name:"slide",mode:"out-in"}},[e("router-view")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"col-sm-6 col-md-4"},[e("div",{staticClass:"panel panel-success"},[e("div",{staticClass:"panel-heading"},[e("h3",{staticClass:"panel-title"},[t._v("\n        "+t._s(t.stock.name)+"\n        "),e("small",[t._v("(Price: "+t._s(t.stock.price)+")")])])]),t._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"pull-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",class:{danger:t.insufficientFunds},attrs:{placeholder:"Quantity",type:"number"},domProps:{value:t._s(t.quantity)},on:{input:function(e){e.target.composing||(t.quantity=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"pull-right"},[e("button",{staticClass:"btn btn-success",attrs:{disabled:t.insufficientFunds||t.quantity<=0||!Number.isInteger(t.quantity)},on:{click:t.buyStock}},[t._v(t._s(t.insufficientFunds?"Insufficient Fund":"Buy"))])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",t._l(t.stocks,function(t){return e("app-stock",{attrs:{stock:t}})}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("nav",{staticClass:"navbar navbar-default"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"navbar-header"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Stock Trader")])]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse"},[e("ul",{staticClass:"nav navbar-nav"},[e("router-link",{attrs:{to:"/portfolio",activeClass:"active",tag:"li"}},[e("a",[t._v("Portfolio")])]),t._v(" "),e("router-link",{attrs:{to:"/stocks",activeClass:"active",tag:"li"}},[e("a",[t._v("Stocks")])])]),t._v(" "),e("strong",{staticClass:"navbar-text navbar-right"},[t._v("Funds: "+t._s(t._f("currency")(t.funds)))]),t._v(" "),e("ul",{staticClass:"nav navbar-nav navbar-right"},[e("li",[e("a",{attrs:{href:"#"},on:{click:t.endDay}},[t._v("End Day")])]),t._v(" "),e("li",{staticClass:"dropdown",class:{open:t.isDropdownOpen},on:{click:function(e){t.isDropdownOpen=!t.isDropdownOpen}}},[t._m(0),t._v(" "),e("ul",{staticClass:"dropdown-menu"},[e("li",[e("a",{attrs:{href:"#"},on:{click:t.saveData}},[t._v("Save Data")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"},on:{click:t.loadData}},[t._v("Load Data")])])])])])])])])},staticRenderFns:[function(){var t=this,e=(t.$createElement,t._c);return e("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Save & Load "),e("span",{staticClass:"caret"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",t._l(t.stocks,function(t){return e("app-stock",{attrs:{stock:t}})}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{staticClass:"col-sm-6 col-md-4"},[e("div",{staticClass:"panel panel-info "},[e("div",{staticClass:"panel-heading"},[e("h3",{staticClass:"panel-title"},[t._v("\n        "+t._s(t.stock.name)+"\n        "),e("small",[t._v("(Price: "+t._s(t.stock.price)+" | Quantity: "+t._s(t.stock.quantity)+")")])])]),t._v(" "),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"pull-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",class:{danger:t.insufficientQuantity},attrs:{placeholder:"Quantity",type:"number"},domProps:{value:t._s(t.quantity)},on:{input:function(e){e.target.composing||(t.quantity=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"pull-right"},[e("button",{staticClass:"btn btn-success",attrs:{disabled:t.insufficientQuantity||t.quantity<=0||!Number.isInteger(t.quantity)},on:{click:t.sellStock}},[t._v(t._s(t.insufficientQuantity?"Not enough":"Sell"))])])])])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.3acb0b2e661972f49218.js.map