(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/legacy/project/_page"],{"5f29":function(e,t,r){"use strict";r.r(t);var c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.src?r("EmberPage",{attrs:{src:e.src}}):e._e()},n=[],i=(r("b667"),r("ddc0"),r("2b77"),r("d513")),o=r("9bc6"),p={istio:"istio/project-istio/metrics",monitoring:"monitoring/project-setting",pipelineConfig:"pipeline",pipelines:"pipeline/pipelines"},s={components:{EmberPage:i["a"]},data:function(){var e=this.$route.params.page,t=p[e]||e;return{page:t}},computed:{project:function(){return Object(o["project"])(this.$store.getters)},src:function(){var e=Object(o["project"])(this.$store.getters);if(e){var t=e.id.replace("/",":");return"/p/".concat(t,"/").concat(this.page)}return null}},watch:{project:function(e,t){!e&&t&&this.$router.replace({name:"c-cluster-legacy-project"})}}},a=s,u=r("0c7c"),l=Object(u["a"])(a,c,n,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=_page.53dbbc48.js.map