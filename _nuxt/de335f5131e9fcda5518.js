/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{181:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("1c93b39a",content,!0,{sourceMap:!1})},182:function(t,e,n){"use strict";var r=n(181);n.n(r).a},183:function(t,e,n){(t.exports=n(42)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},184:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(182),n(41)),c=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports;var l="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function f(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}var d=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},m={namespaced:{configurable:!0}};m.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(t,e){this._children[t]=e},d.prototype.removeChild=function(t){delete this._children[t]},d.prototype.getChild=function(t){return this._children[t]},d.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},d.prototype.forEachChild=function(t){f(this._children,t)},d.prototype.forEachGetter=function(t){this._rawModule.getters&&f(this._rawModule.getters,t)},d.prototype.forEachAction=function(t){this._rawModule.actions&&f(this._rawModule.actions,t)},d.prototype.forEachMutation=function(t){this._rawModule.mutations&&f(this._rawModule.mutations,t)},Object.defineProperties(d.prototype,m);var h=function(t){this.register([],t,!1)};h.prototype.get=function(path){return path.reduce(function(t,e){return t.getChild(e)},this.root)},h.prototype.getNamespace=function(path){var t=this.root;return path.reduce(function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")},"")},h.prototype.update=function(t){!function t(path,e,n){0;e.update(n);if(n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;t(path.concat(r),e.getChild(r),n.modules[r])}}([],this.root,t)},h.prototype.register=function(path,t,e){var n=this;void 0===e&&(e=!0);var r=new d(t,e);0===path.length?this.root=r:this.get(path.slice(0,-1)).addChild(path[path.length-1],r);t.modules&&f(t.modules,function(t,r){n.register(path.concat(r),t,e)})},h.prototype.unregister=function(path){var t=this.get(path.slice(0,-1)),e=path[path.length-1];t.getChild(e).runtime&&t.removeChild(e)};var v;var _=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!=typeof window&&window.Vue&&T(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new h(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v;var o=this,c=this.dispatch,f=this.commit;this.dispatch=function(t,e){return c.call(o,t,e)},this.commit=function(t,e,n){return f.call(o,t,e,n)},this.strict=r;var d=this._modules.root.state;k(this,d,[],this._modules.root),x(this,d),n.forEach(function(t){return t(e)}),(void 0!==t.devtools?t.devtools:v.config.devtools)&&function(t){l&&(t._devtoolHook=l,l.emit("vuex:init",t),l.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){l.emit("vuex:mutation",t,e)}))}(this)},y={state:{configurable:!0}};function w(t,e){return e.indexOf(t)<0&&e.push(t),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function C(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;k(t,n,[],t._modules.root,!0),x(t,n,e)}function x(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,c={};f(o,function(e,n){c[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var l=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:c}),v.config.silent=l,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),v.nextTick(function(){return r.$destroy()}))}function k(t,e,path,n,r){var o=!path.length,c=t._modules.getNamespace(path);if(n.namespaced&&(t._modulesNamespaceMap[c]=n),!o&&!r){var l=O(e,path.slice(0,-1)),f=path[path.length-1];t._withCommit(function(){v.set(l,f,n.state)})}var d=n.context=function(t,e,path){var n=""===e,r={dispatch:n?t.dispatch:function(n,r,o){var c=$(n,r,o),l=c.payload,f=c.options,d=c.type;return f&&f.root||(d=e+d),t.dispatch(d,l)},commit:n?t.commit:function(n,r,o){var c=$(n,r,o),l=c.payload,f=c.options,d=c.type;f&&f.root||(d=e+d),t.commit(d,l,f)}};return Object.defineProperties(r,{getters:{get:n?function(){return t.getters}:function(){return function(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var c=o.slice(r);Object.defineProperty(n,c,{get:function(){return t.getters[o]},enumerable:!0})}}),n}(t,e)}},state:{get:function(){return O(t.state,path)}}}),r}(t,c,path);n.forEachMutation(function(e,n){!function(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,r.state,e)})}(t,c+n,e,d)}),n.forEachAction(function(e,n){var r=e.root?n:c+n,o=e.handler||e;!function(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push(function(e,o){var c,l=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return(c=l)&&"function"==typeof c.then||(l=Promise.resolve(l)),t._devtoolHook?l.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):l})}(t,r,o,d)}),n.forEachGetter(function(e,n){!function(t,e,n,r){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}(t,c+n,e,d)}),n.forEachChild(function(n,o){k(t,e,path.concat(o),n,r)})}function O(t,path){return path.length?path.reduce(function(t,e){return t[e]},t):t}function $(t,e,n){var r;return null!==(r=t)&&"object"==typeof r&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function T(t){v&&t===v||function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}(v=t)}y.state.get=function(){return this._vm._data.$$state},y.state.set=function(t){0},_.prototype.commit=function(t,e,n){var r=this,o=$(t,e,n),c=o.type,l=o.payload,f=(o.options,{type:c,payload:l}),d=this._mutations[c];d&&(this._withCommit(function(){d.forEach(function(t){t(l)})}),this._subscribers.forEach(function(sub){return sub(f,r.state)}))},_.prototype.dispatch=function(t,e){var n=this,r=$(t,e),o=r.type,c=r.payload,l={type:o,payload:c},f=this._actions[o];if(f){try{this._actionSubscribers.filter(function(sub){return sub.before}).forEach(function(sub){return sub.before(l,n.state)})}catch(t){0}return(f.length>1?Promise.all(f.map(function(t){return t(c)})):f[0](c)).then(function(t){try{n._actionSubscribers.filter(function(sub){return sub.after}).forEach(function(sub){return sub.after(l,n.state)})}catch(t){0}return t})}},_.prototype.subscribe=function(t){return w(t,this._subscribers)},_.prototype.subscribeAction=function(t){return w("function"==typeof t?{before:t}:t,this._actionSubscribers)},_.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},_.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},_.prototype.registerModule=function(path,t,e){void 0===e&&(e={}),"string"==typeof path&&(path=[path]),this._modules.register(path,t),k(this,this.state,path,this._modules.get(path),e.preserveState),x(this,this.state)},_.prototype.unregisterModule=function(path){var t=this;"string"==typeof path&&(path=[path]),this._modules.unregister(path),this._withCommit(function(){var e=O(t.state,path.slice(0,-1));v.delete(e,path[path.length-1])}),C(this)},_.prototype.hotUpdate=function(t){this._modules.update(t),C(this,!0)},_.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(_.prototype,y);M(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=S(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n});var E=M(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var c=S(this.$store,"mapMutations",t);if(!c)return;r=c.context.commit}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),I=(M(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||S(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),M(function(t,e){var n={};return j(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var c=S(this.$store,"mapActions",t);if(!c)return;r=c.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}));function j(map){return Array.isArray(map)?map.map(function(t){return{key:t,val:t}}):Object.keys(map).map(function(t){return{key:t,val:map[t]}})}function M(t){return function(e,map){return"string"!=typeof e?(map=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,map)}}function S(t,e,n){return t._modulesNamespaceMap[n]}var A={fetch:function(){var t=JSON.parse(localStorage.getItem("anschreiben - todos")||"[]");return t.forEach(function(t,e){t.id=e}),A.uid=t.length,t},save:function(t){localStorage.setItem("anschreiben - todos",JSON.stringify(t))}},N={data:function(){return{newItem:{},items:A.fetch(),selectedTip:0,confirmClearOrders:!1}},watch:{items:{handler:function(t){A.save(t)},deep:!0}},computed:Object(r.a)({},I([]),E([]),{totalItemCount:function(){var t=0;for(var e in this.items){t+=this.items[e].amount}return t},totalPrice:function(){var t=0;for(var e in this.items){var n=this.items[e];t+=n.price*n.amount}return t},priceWithTip:function(){return Math.round(this.totalPrice*this.selectedTip)},actualTip:function(){return(100*(this.priceWithTip/this.totalPrice-1)).toFixed(2)}}),filters:{currency:function(t,e){return parseFloat(t).toLocaleString("de-DE",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2})}},methods:{addItem:function(){this.newItem.amount=1,this.items.push(this.newItem),this.newItem={}},removeItem:function(t){this.items.splice(this.items.indexOf(t),1)},increaseItemAmount:function(t){var e=this.items.indexOf(t);t.amount++,this.$set(this.items,e,t)},decreaseItemAmount:function(t){var e=this.items.indexOf(t);t.amount>0&&t.amount--,this.$set(this.items,e,t)},setSelectedTip:function(t){this.selectedTip=t},toggleClearConfirmDialoge:function(){this.confirmClearOrders=!this.confirmClearOrders},removeAllItems:function(){this.confirmClearOrders=!1,this.items=[]}},components:{Logo:c}},P=Object(o.a)(N,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row justify-content-center pb-2"},[n("div",{staticClass:"col-12 col-lg-8"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header container"},[n("div",{staticClass:"row align-items-center justify-content-between"},[t._m(1),t._v(" "),t.items.length>0?n("div",{staticClass:"col text-right"},[t.confirmClearOrders?t._e():n("div",[n("button",{staticClass:"btn btn-danger btn-sm",on:{click:t.toggleClearConfirmDialoge}},[n("font-awesome-icon",{attrs:{icon:["fas","trash"]}}),t._v(" Clear Orders\n                ")],1)]),t._v(" "),t.confirmClearOrders?n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-danger btn-sm",on:{click:t.removeAllItems}},[t._v("Clear")]),t._v(" "),n("button",{staticClass:"btn btn-warning btn-sm",on:{click:t.toggleClearConfirmDialoge}},[t._v("Cancel")])]):t._e()]):t._e()])]),t._v(" "),n("div",{staticClass:"card-body"},[n("div",{staticClass:"card-text"},[n("div",{staticClass:"form-inline justify-content-center align-items-center d-flex"},[n("div",{staticClass:"form-group mx-3 mb-2"},[n("label",{staticClass:"mr-2",attrs:{for:"name"}},[t._v("Name")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.name,expression:"newItem.name"}],staticClass:"new-item form-control",attrs:{type:"text",id:"name",placeholder:"Jug of moonshine"},domProps:{value:t.newItem.name},on:{input:function(e){e.target.composing||t.$set(t.newItem,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group mx-3 mb-2"},[n("label",{staticClass:"mr-2",attrs:{for:"price"}},[t._v("Price")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.price,expression:"newItem.price"}],staticClass:"new-item form-control",attrs:{type:"number",id:"price",placeholder:"eg 3.90"},domProps:{value:t.newItem.price},on:{input:function(e){e.target.composing||t.$set(t.newItem,"price",e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-primary mb-2 add-button",attrs:{id:"add",disabled:!t.newItem.price},on:{click:t.addItem}},[n("font-awesome-icon",{attrs:{icon:["fas","plus"]}}),t._v(" Add item")],1)]),t._v(" "),n("hr"),t._v(" "),t._l(t.items.slice().reverse(),function(e,r){return[n("div",{staticClass:"row justify-content-center align-items-center mb-2"},[n("div",{staticClass:"col col-lg-3"},[n("span",{staticClass:"name h5"},[t._v(t._s(e.name))]),n("br"),t._v(" "),n("span",{staticClass:"amount lead"},[t._v(t._s(e.amount)+" x")]),t._v(" "),n("span",{staticClass:"price lead"},[t._v(t._s(t._f("currency")(e.price)))])]),t._v(" "),n("div",{staticClass:"col col-lg-3 text-right"},[n("div",{staticClass:"btn-group btn-group-sm"},[n("button",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"button"},on:{click:function(n){return t.increaseItemAmount(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","plus"]}})],1),t._v(" "),n("button",{staticClass:"btn btn-sm btn-secondary",attrs:{type:"button"},on:{click:function(n){return t.decreaseItemAmount(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","minus"]}})],1),t._v(" "),n("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:function(n){return t.removeItem(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","trash"]}})],1)])])]),t._v(" "),n("hr")]})],2)])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.items.length,expression:"items.length"}],staticClass:"row justify-content-center"},[n("div",{staticClass:"col-xs-12 col-lg-8"},[n("div",{staticClass:"card"},[t._m(2),t._v(" "),n("div",{staticClass:"card-body"},[n("div",{staticClass:"card-text text-center"},[n("div",{staticClass:"row align-items-center justify-content-center"},[n("div",{staticClass:"col"},[n("p",{staticClass:"lead"},[t._v("\n                  You ordered "),n("br"),t._v(" "),n("span",{staticClass:"h5"},[t._v(t._s(t.totalItemCount)+" Items")]),t._v(" "),n("br"),t._v("\n                  for a total of\n                ")])]),t._v(" "),n("div",{staticClass:"col"},[n("p",{staticClass:"h4",attrs:{id:"sum"}},[t._v(t._s(t._f("currency")(t.totalPrice)))])])]),t._v("\n            Please choose a tip below "),n("br"),t._v(" "),n("div",{staticClass:"btn-group btn-group-lg btn-group-toggle pt-2",attrs:{"data-toggle":"buttons"}},[n("label",{staticClass:"btn btn-primary tip-button",on:{click:function(e){return t.setSelectedTip(1.05)}}},[n("input",{attrs:{type:"radio",name:"options",id:"5-percent","data-tip":"1.05",autocomplete:"off"}}),t._v(" 5%\n              ")]),t._v(" "),n("label",{staticClass:"btn btn-lg btn-primary tip-button",on:{click:function(e){return t.setSelectedTip(1.1)}}},[n("input",{attrs:{type:"radio",name:"options",id:"10-percent","data-tip":"1.10",autocomplete:"off"}}),t._v(" 10%\n              ")]),t._v(" "),n("label",{staticClass:"btn btn-lg btn-primary tip-button",on:{click:function(e){return t.setSelectedTip(1.15)}}},[n("input",{attrs:{type:"radio",name:"options",id:"15-percent","data-tip":"1.15",autocomplete:"off"}}),t._v(" 15%\n              ")])]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.selectedTip,expression:"selectedTip"}],staticClass:"pt-2 h3 lead"},[t._v("\n              Paying "),n("br"),t._v(" "),n("span",{staticClass:"h4"},[t._v(t._s(t._f("currency")(t.priceWithTip)))]),t._v(" "),n("br"),t._v("\n              equals a tip of "),n("br"),t._v(" "),n("span",{staticClass:"h4"},[t._v(t._s(t.actualTip))]),t._v("%\n            ")])])])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("h1",[this._v("Welcome to Anschreiben")]),this._v(" "),e("p",{staticClass:"lead"},[this._v("A late-night webapp that keeps track of your orders.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col"},[e("p",{staticClass:"h4"},[this._v("Your orders")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h4",[this._v("What to pay")])])}],!1,null,null,null);e.default=P.exports}}]);