(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/monitoring/route-receiver/index"],{"2a6e":function(e,t,r){},"35c8":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$fetchState.pending?r("Loading"):r("div",[r("div",{staticClass:"row header mb-10"},[r("h1",[e._v(" "+e._s(e.t("monitoring.routesAndReceivers")))]),r("div",[r("button",{staticClass:"btn btn-lg role-primary float right",on:{click:function(t){return e.$router.push(e.createRoute)}}},[e._v(" "+e._s(e.t("resourceList.head.create"))+" ")])])]),r("div",{staticClass:"row"},[r("Banner",{attrs:{color:"info",label:e.t("monitoring.alertmanagerConfig.deprecationWarning")}})],1),r("Tabbed",{ref:"tabs",attrs:{"default-tab":e.initTab}},[r("Tab",{attrs:{name:e.routeSchema.id,label:e.$store.getters["type-map/labelFor"](e.routeSchema,2)}},[e.secretTo?r("div",[e._v(" We don't support the current route format stored in alertmanager.yaml. Click "),r("nuxt-link",{attrs:{to:e.secretTo}},[e._v(" here ")]),e._v(" to update manually. ")],1):r("ResourceTable",{attrs:{schema:e.routeSchema,rows:e.routes}})],1),r("Tab",{attrs:{name:e.receiverSchema.id,label:e.$store.getters["type-map/labelFor"](e.receiverSchema,2)}},[r("ResourceTable",{attrs:{schema:e.receiverSchema,rows:e.receivers}})],1)],1)],1)},c=[],n=(r("1d8f"),r("13ec"),r("cf99"),r("8be0"),r("7e5b"),r("38aa"),r("bcff"),r("ade3")),s=r("1da1"),o=r("a34a"),i=r.n(o),u=(r("96cf"),r("b178")),l=r("c778"),b=r("a4d2"),p=r("f38f"),f=r("bec1"),d=r("a788"),m=r("5455"),h=r("fa3b");function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={name:"ListRoute",components:{Banner:f["a"],Loading:l["a"],ResourceTable:u["a"],Tab:p["a"],Tabbed:b["a"]},fetch:function(){var e=this;return Object(s["a"])(i.a.mark((function t(){var r,a,c;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.routeSchema=e.$store.getters["cluster/schemaFor"](d["z"].SPOOFED.ROUTE),e.receiverSchema=e.$store.getters["cluster/schemaFor"](d["z"].SPOOFED.RECEIVER),r=e.$store.dispatch("cluster/findAll",{type:d["z"].SPOOFED.ROUTE}),t.next=5,e.$store.dispatch("cluster/findAll",{type:d["z"].SPOOFED.RECEIVER});case 5:return e.receivers=t.sent,t.next=8,Object(m["f"])(e.$store.dispatch);case 8:if(a=t.sent,c=Object(m["a"])(a),!c){t.next=17;break}return e.$store.dispatch("type-map/configureType",{match:d["z"].SPOOFED.ROUTE,isCreatable:!0}),t.next=14,r;case 14:e.routes=t.sent,t.next=20;break;case 17:e.$store.dispatch("type-map/configureType",{match:d["z"].SPOOFED.ROUTE,isCreatable:!1}),e.secretTo=v({},a.detailLocation),e.secretTo.query=Object(n["a"])({},h["s"],h["L"]);case 20:case"end":return t.stop()}}),t)})))()},data:function(){var e=this.$route.query.resource||d["z"].SPOOFED.RECEIVER;return{routes:[],receivers:[],secretTo:null,routeSchema:null,receiverSchema:null,initTab:e}},computed:{createRoute:function(){var e,t,r=(null===(e=this.$refs)||void 0===e||null===(t=e.tabs)||void 0===t?void 0:t.activeTabName)||this.routeSchema.id;return{name:"c-cluster-monitoring-route-receiver-create",params:{cluster:this.$route.params.cluster},query:{resource:r}}}}},y=g,E=(r("a4a3"),r("0c7c")),T=Object(E["a"])(y,a,c,!1,null,"989e1d20",null);t["default"]=T.exports},a4a3:function(e,t,r){"use strict";r("2a6e")}}]);
//# sourceMappingURL=index.7fbaee62.js.map