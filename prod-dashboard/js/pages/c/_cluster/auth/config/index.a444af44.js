(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/auth/config/index"],{cebb4:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{staticClass:"m-0"},[e._v(" "+e._s(e.displayName)+" ")]),e.enabled.length?e._e():n("Banner",{attrs:{label:e.t("authConfig.noneEnabled"),color:"info"}},[n("div",[e._v(" "+e._s(e.t("authConfig.localEnabled"))+" "),n("nuxt-link",{attrs:{to:e.localUsersRoute}},[e._v(" "+e._s(e.t("authConfig.manageLocal"))+" ")]),n("br"),e._v(" "+e._s(e.t("authConfig.noneEnabled"))+" ")],1)]),n("SelectIconGrid",{attrs:{rows:e.rows,"color-for":e.colorFor,"name-field":"provider"},on:{clicked:function(t){return e.goTo(t.id)}}})],1)},o=[],r=n("ade3"),c=n("1da1"),s=n("a34a"),u=n.n(s),l=(n("96cf"),n("a788")),i=n("c4a1"),d=n("b25d"),p=n("fa3b"),h=n("c47f"),f=n("bec1"),m={components:{SelectIconGrid:i["a"],Banner:f["a"]},asyncData:function(e){return Object(c["a"])(u.a.mark((function t(){var n,a,o;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.store,a=e.redirect,t.next=3,Object(h["a"])(n);case 3:return o=t.sent,o.enabledLocation&&a(o.enabledLocation),t.abrupt("return",{nonLocal:o.nonLocal,enabled:o.enabled});case 6:case"end":return t.stop()}}),t)})))()},data:function(){var e=l["x"].AUTH_CONFIG,t=this.$store.getters,n=t["currentStore"](e),a=t["type-map/hasCustomList"](e),o=t["type-map/hasCustomEdit"](e),r=t["".concat(n,"/schemaFor")](e);return{resource:e,schema:r,hasListComponent:a,hasEditComponent:o,nonLocal:null}},computed:{rows:function(){return Object(d["b"])(this.nonLocal,["sideLabel","nameDisplay"])},displayName:function(){return this.$store.getters["type-map/labelFor"](this.schema,2)},localUsersRoute:function(){return{name:"c-cluster-product-resource",params:{cluster:this.$route.params.cluster,product:"auth",resource:l["x"].USER}}}},methods:{colorFor:function(e){var t=["ldap","oauth","saml","oidc"],n=t.indexOf(e.configType);return-1===n?"color8":"color".concat(n+1)},goTo:function(e){this.$router.push({name:"c-cluster-auth-config-id",params:{id:e},query:Object(r["a"])({},p["s"],p["L"])})}}},b=m,g=n("0c7c"),v=Object(g["a"])(b,a,o,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=index.a444af44.js.map