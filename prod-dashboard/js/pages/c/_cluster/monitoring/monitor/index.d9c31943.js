(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/monitoring/monitor/index"],{"5ded":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$fetchState.pending?r("Loading"):r("div",[r("div",{staticClass:"row header mb-40"},[r("h1",[e._v(" "+e._s(e.t("monitoring.monitors")))]),r("div",[r("button",{staticClass:"btn btn-lg role-primary float right",on:{click:function(t){return e.$router.push(e.createRoute)}}},[e._v(" "+e._s(e.t("resourceList.head.createFromYaml"))+" ")])])]),r("Tabbed",{ref:"tabs",attrs:{"default-tab":e.initTab}},[r("Tab",{attrs:{name:e.podMonitorSchema.id,label:e.$store.getters["type-map/labelFor"](e.podMonitorSchema,2)}},[r("TypeDescription",{attrs:{resource:e.podMonitorSchema.id}}),r("ResourceTable",{attrs:{schema:e.podMonitorSchema,rows:e.podMonitors}})],1),r("Tab",{attrs:{name:e.serviceMonitorSchema.id,label:e.$store.getters["type-map/labelFor"](e.serviceMonitorSchema,2)}},[r("TypeDescription",{attrs:{resource:e.serviceMonitorSchema.id}}),r("ResourceTable",{attrs:{schema:e.serviceMonitorSchema,rows:e.serviceMonitors}})],1)],1)],1)},a=[],s=r("1da1"),i=r("a34a"),c=r.n(i),n=(r("96cf"),r("c778")),u=r("a4d2"),d=r("f38f"),l=r("35f4"),p=r("b178"),m=r("a788"),h=r("fa98"),b={components:{Loading:n["a"],Tabbed:u["a"],Tab:d["a"],ResourceTable:p["a"],TypeDescription:l["a"]},fetch:function(){var e=this;return Object(s["a"])(c.a.mark((function t(){var r;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.podMonitorSchema=e.$store.getters["cluster/schemaFor"](m["z"].PODMONITOR),e.serviceMonitorSchema=e.$store.getters["cluster/schemaFor"](m["z"].SERVICEMONITOR),t.next=4,Object(h["a"])({podMonitors:e.$store.dispatch("cluster/findAll",{type:m["z"].PODMONITOR}),serviceMonitors:e.$store.dispatch("cluster/findAll",{type:m["z"].SERVICEMONITOR})});case 4:r=t.sent,e.podMonitors=r.podMonitors,e.serviceMonitors=r.serviceMonitors;case 7:case"end":return t.stop()}}),t)})))()},data:function(){var e=this.$route.query.resource||m["z"].SPOOFED.PODMONITOR;return{podMonitors:[],serviceMonitors:[],podMonitorSchema:null,serviceMonitorSchema:null,initTab:e}},computed:{createRoute:function(){var e,t,r=(null===(e=this.$refs)||void 0===e||null===(t=e.tabs)||void 0===t?void 0:t.activeTabName)||this.routeSchema.id;return{name:"c-cluster-monitoring-monitor-create",params:{cluster:this.$route.params.cluster},query:{resource:r}}}}},v=b,M=(r("c660"),r("0c7c")),f=Object(M["a"])(v,o,a,!1,null,"ddb6eaec",null);t["default"]=f.exports},c660:function(e,t,r){"use strict";r("cc23")},cc23:function(e,t,r){}}]);
//# sourceMappingURL=index.d9c31943.js.map