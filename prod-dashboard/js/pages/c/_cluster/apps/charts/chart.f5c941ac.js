(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/apps/charts/chart"],{2467:function(e,t,r){"use strict";r("1d8f"),r("13ec"),r("7e5b"),r("bcff"),r("46d9"),r("a41c"),r("d323"),r("2869"),r("a797"),r("5986");var n=r("1da1"),a=r("ade3"),s=r("a34a"),o=r.n(s),i=(r("96cf"),r("8be0"),r("38aa"),r("b61e"),r("9d9d"),r("cf99"),r("b667"),r("59d0"),r("0b7a"),r("2b77"),r("2f62")),c=r("fa3b"),l=r("7388"),u=r("e528"),h=r("98bd"),p=r("5bbf"),v=r("04e8"),d=r("a788"),f=r("55a3"),m=r("ceac"),g=r.n(m),b=r("5ce5");function _(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=y(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,s=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw s}}}}function y(e,t){if(e){if("string"===typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]={data:function(){return{version:null,versionInfo:null,existing:null,ignoreWarning:!1}},computed:N(N({},Object(i["b"])(["currentCluster","isRancher"])),{},{showPreRelease:Object(u["mapPref"])(u["SHOW_PRE_RELEASE"]),chart:function(){return this.repo&&this.query.chartName?this.$store.getters["catalog/chart"]({repoType:this.query.repoType,repoName:this.query.repoName,chartName:this.query.chartName,includeHidden:!0}):null},repo:function(){return this.$store.getters["catalog/repo"]({repoType:this.query.repoType,repoName:this.query.repoName})},showReadme:function(){var e;return!(null===(e=this.versionInfo)||void 0===e||!e.readme)},hasReadme:function(){var e,t;return!(null===(e=this.versionInfo)||void 0===e||!e.appReadme)||!(null===(t=this.versionInfo)||void 0===t||!t.readme)},mappedVersions:function(){var e,t,r=this,n=(null===(e=this.chart)||void 0===e?void 0:e.versions)||[],a=this.targetVersion,s=null===(t=this.currentCluster)||void 0===t?void 0:t.workerOSs,o=[];n.forEach((function(e){var t,n={label:e.version,version:e.version,originalVersion:e.version,shortLabel:e.version.length>16?"".concat(e.version.slice(0,15),"..."):e.version,id:e.version,created:e.created,disabled:!1,keywords:e.keywords},a=((null===e||void 0===e||null===(t=e.annotations)||void 0===t?void 0:t[l["e"].PERMITTED_OS])||b["LINUX"]).split(",");a.length>0&&g()(s,a).length>0&&(n.disabled=!0),1===a.length&&(n.label=r.t("catalog.install.versions.".concat(a[0]),{ver:e.version})),!r.showPreRelease&&Object(f["d"])(e.version)||o.push(n)}));var i=o.find((function(e){return e.id===a}));i||o.unshift({label:a,originalVersion:a,shortLabel:a.length>16?"".concat(a.slice(0,15),"..."):a,id:a,created:null,disabled:!1,keywords:[]});var c=o.find((function(e){return e.originalVersion===r.currentVersion}));return c&&(c.label=this.t("catalog.install.versions.current",{ver:this.currentVersion})),o},filteredVersions:function(){return this.showPreRelease?this.mappedVersions:this.mappedVersions.filter((function(e){return!e.isPre}))},query:function(){var e=this.$route.query;return{repoType:e[c["z"]],repoName:e[c["y"]],chartName:e[c["d"]],versionName:e[c["G"]],appNamespace:e[c["u"]]||"",appName:e[c["t"]]||"",description:e[c["g"]]}},showDeprecated:function(){return this.$route.query[c["f"]]===c["M"]},showHidden:function(){return this.$route.query[c["o"]]===c["M"]},warnings:function(){var e=[];if(this.existing);else{var t,r,n,a,s,o,i=Object(v["g"])((null===(t=this.version)||void 0===t||null===(r=t.annotations)||void 0===r?void 0:r[l["e"].REQUESTS_CPU])||"0"),c=Object(v["g"])((null===(n=this.version)||void 0===n||null===(a=n.annotations)||void 0===a?void 0:a[l["e"].REQUESTS_MEMORY])||"0"),u=null===(s=this.currentCluster)||void 0===s?void 0:s.availableCpu,h=null===(o=this.currentCluster)||void 0===o?void 0:o.availableMemory;null!==u&&u<i&&e.push(this.t("catalog.install.error.insufficientCpu",{need:Math.round(100*i)/100,have:Math.round(100*u)/100})),null!==h&&h<c&&e.push(this.t("catalog.install.error.insufficientMemory",{need:Object(v["f"])(c,{increment:1024,suffix:"iB",firstSuffix:"B"}),have:Object(v["f"])(h,{increment:1024,suffix:"iB",firstSuffix:"B"})}))}return e},requires:function(){var e,t,r=[],n=((null===(e=this.version)||void 0===e||null===(t=e.annotations)||void 0===t?void 0:t[l["e"].REQUIRES_GVK])||"").split(/\s*,\s*/).filter((function(e){return!!e})).reverse();if(n.length){var a,s=_(n);try{for(s.s();!(a=s.n()).done;){var o=a.value;if(!this.$store.getters["catalog/isInstalled"]({gvr:o})){var i=this.provider(o);if(i){var c=this.$router.resolve(this.chartLocation(!0,i)).href;r.push(this.t("catalog.install.error.requiresFound",{url:c,name:i.name},!0))}else r.push(this.t("catalog.install.error.requiresMissing",{name:o}))}}}catch(u){s.e(u)}finally{s.f()}}return r},currentVersion:function(){var e;return null===(e=this.existing)||void 0===e?void 0:e.spec.chart.metadata.version},targetVersion:function(){return this.version?this.version.version:this.query.versionName},action:function(){return this.existing?this.currentVersion===this.targetVersion?"update":"upgrade":"install"},isChartTargeted:function(){var e,t;return(null===(e=this.chart)||void 0===e?void 0:e.targetNamespace)&&(null===(t=this.chart)||void 0===t?void 0:t.targetName)},hasQuestions:function(){return this.versionInfo&&!!this.versionInfo.questions}}),methods:{fetchChart:function(){var e=this;return Object(n["a"])(o.a.mark((function t(){var r,n,a;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("catalog/load",{force:!0,reset:!0});case 2:if(!e.query.appNamespace||!e.query.appName){t.next=16;break}return t.prev=3,t.next=6,e.$store.dispatch("cluster/find",{type:d["f"].APP,id:"".concat(e.query.appNamespace,"/").concat(e.query.appName)});case 6:e.existing=t.sent,e.mode=c["L"],t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](3),e.mode=c["J"],e.existing=null;case 14:t.next=31;break;case 16:if(null===(r=e.chart)||void 0===r||!r.targetNamespace||null===(n=e.chart)||void 0===n||!n.targetName){t.next=30;break}return t.prev=17,t.next=20,e.$store.dispatch("cluster/find",{type:d["f"].APP,id:"".concat(e.chart.targetNamespace,"/").concat(e.chart.targetName)});case 20:e.existing=t.sent,e.mode=c["L"],t.next=28;break;case 24:t.prev=24,t.t1=t["catch"](17),e.mode=c["J"],e.existing=null;case 28:t.next=31;break;case 30:e.mode=c["J"];case 31:if(e.chart){t.next=33;break}return t.abrupt("return");case 33:if(!e.query.versionName&&null!==(a=e.chart.versions)&&void 0!==a&&a.length&&(e.query.versionName=e.chart.versions[0].version),e.query.versionName){t.next=36;break}return t.abrupt("return");case 36:try{e.version=e.$store.getters["catalog/version"]({repoType:e.query.repoType,repoName:e.query.repoName,chartName:e.query.chartName,versionName:e.query.versionName})}catch(s){console.error("Unable to fetch Version: ",s)}return e.version||console.warn("No version found: ",e.query.repoType,e.query.repoName,e.query.chartName,e.query.versionName),t.prev=38,t.next=41,e.$store.dispatch("catalog/getVersionInfo",{repoType:e.query.repoType,repoName:e.query.repoName,chartName:e.query.chartName,versionName:e.query.versionName});case 41:e.versionInfo=t.sent,t.next=47;break;case 44:t.prev=44,t.t2=t["catch"](38),console.error("Unable to fetch VersionInfo: ",t.t2);case 47:case"end":return t.stop()}}),t,null,[[3,10],[17,24],[38,44]])})))()},selectVersion:function(e){var t=e.id;this.$router.applyQuery(Object(a["a"])({},c["G"],t))},provider:function(e){return this.$store.getters["catalog/versionProviding"]({gvr:e,repoName:this.chart.repoName,repoType:this.chart.repoType})},chartLocation:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=arguments.length>1?arguments[1]:void 0,n=r||{repoType:this.chart.repoType,repoName:this.chart.repoName,name:this.chart.chartName,version:this.chart.versionName};return{name:t?"c-cluster-apps-charts-install":"c-cluster-apps-charts-chart",params:{cluster:this.$route.params.cluster,product:this.$store.getters["productId"]},query:(e={},Object(a["a"])(e,c["z"],n.repoType),Object(a["a"])(e,c["y"],n.repoName),Object(a["a"])(e,c["d"],n.name),Object(a["a"])(e,c["G"],n.version),e)}},appLocation:function(){var e;return(null===(e=this.existing)||void 0===e?void 0:e.detailLocation)||{name:"c-cluster-product-resource",params:{product:this.$store.getters["productId"],cluster:this.$store.getters["clusterId"],resource:d["f"].APP}}},clusterToolsLocation:function(){return{name:"c-cluster-explorer-tools",params:{product:h["NAME"],cluster:this.$store.getters["clusterId"],resource:d["f"].APP}}},clustersLocation:function(){return{name:"c-cluster-product-resource",params:{cluster:this.$route.params.cluster,product:p["NAME"],resource:d["e"].RANCHER_CLUSTER}}}}}},4390:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$fetchState.pending?r("Loading"):r("div",[r("TypeDescription",{attrs:{resource:"chart"}}),e.chart?r("div",{staticClass:"chart-header"},[r("div",{staticClass:"name-logo-install"},[r("div",{staticClass:"name-logo"},[r("div",{staticClass:"logo-bg"},[r("LazyImage",{staticClass:"logo",attrs:{src:e.chart.icon}})],1),r("h1",[r("nuxt-link",{attrs:{to:{name:"c-cluster-apps-charts"}}},[e._v(" "+e._s(e.t("catalog.chart.header.charts"))+": ")]),e._v(" "+e._s(e.chart.chartNameDisplay)+" ("+e._s(e.targetVersion)+") ")],1)]),e.requires.length?e._e():r("button",{staticClass:"btn role-primary",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.install.apply(null,arguments)}}},[e._v(" "+e._s(e.t("asyncButton."+e.action+".action"))+" ")])]),e.chart.windowsIncompatible?r("div",{staticClass:"mt-5"},[r("label",{staticClass:"os-label"},[e._v(e._s(e.t("catalog.charts.windowsIncompatible")))])]):e._e(),e.requires.length||e.warnings.length||e.targetedAppWarning||e.osWarning?r("div",{staticClass:"mt-20"},[e.osWarning?r("Banner",{attrs:{color:"error"}},[r("span",{domProps:{innerHTML:e._s(e.osWarning)}})]):e._e(),e._l(e.requires,(function(t){return r("Banner",{key:t,attrs:{color:"error"}},[r("span",{domProps:{innerHTML:e._s(t)}})])})),e._l(e.warnings,(function(t){return r("Banner",{key:t,attrs:{color:"warning"}},[r("span",{domProps:{innerHTML:e._s(t)}})])})),e.targetedAppWarning?r("Banner",{attrs:{color:"warning"}},[r("span",{domProps:{innerHTML:e._s(e.targetedAppWarning)}})]):e._e()],2):e.version&&e.version.description?r("div",{staticClass:"description mt-10"},[r("p",[e._v(" "+e._s(e.version.description)+" ")])]):e._e()]):e._e(),r("div",{staticClass:"spacer"}),r("div",{staticClass:"chart-content"},[e.hasReadme?r("ChartReadme",{staticClass:"chart-content__tabs",attrs:{"version-info":e.versionInfo}}):r("div",{staticClass:"chart-content__tabs"},[e._v(" "+e._s(e.t("catalog.install.appReadmeMissing",{},!0))+" ")]),e.version?r("div",{staticClass:"chart-content__right-bar ml-20"},[r("div",{staticClass:"chart-content__right-bar__section"},[r("h3",[e._v(" "+e._s(e.t("catalog.chart.info.chartVersions.label"))+" ")]),e._l(e.versions,(function(t){return r("div",{key:t.id,staticClass:"chart-content__right-bar__section--cVersion"},[t.originalVersion===e.version.version?r("b",[e._v(e._s(t.originalVersion===e.currentVersion?e.t("catalog.install.versions.current",{ver:e.currentVersion}):t.shortLabel))]):r("a",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.label.length>16?t.label:null,expression:"vers.label.length > 16 ? vers.label : null"}],on:{click:function(r){return r.preventDefault(),e.selectVersion(t)}}},[e._v(" "+e._s(t.originalVersion===e.currentVersion?e.t("catalog.install.versions.current",{ver:e.currentVersion}):t.shortLabel)+" ")]),r("DateFormatter",{attrs:{value:t.created,"show-time":!1}})],1)})),r("div",{staticClass:"mt-10 chart-content__right-bar__section--showMore"},[e.mappedVersions.length>e.showLastVersions?r("button",{staticClass:"btn btn-sm role-link",attrs:{type:"button"},on:{click:function(t){e.showMoreVersions=!e.showMoreVersions}}},[e._v(" "+e._s(e.t("catalog.chart.info.chartVersions."+(e.showMoreVersions?"showLess":"showMore")))+" ")]):e._e()])],2),r("div",{staticClass:"chart-content__right-bar__section"},[r("h3",{attrs:{t:""}},[e._v(" "+e._s(e.t("catalog.chart.info.appVersion"))+" ")]),e._v(" "+e._s(e.version.appVersion)+" ")]),e.version.home?r("div",{staticClass:"chart-content__right-bar__section"},[r("h3",[e._v(e._s(e.t("catalog.chart.info.home")))]),r("a",{attrs:{href:e.version.home,rel:"nofollow noopener noreferrer",target:"_blank"}},[e._v(e._s(e.version.home))])]):e._e(),e.version.maintainers?r("div",{staticClass:"chart-content__right-bar__section"},[r("h3",[e._v(e._s(e.t("catalog.chart.info.maintainers")))]),e._l(e.maintainers,(function(t){return r("a",{key:t.id,attrs:{href:t.url,rel:"nofollow noopener noreferrer",target:"_blank"}},[e._v(e._s(t.text))])}))],2):e._e(),e.version.sources?r("div",{staticClass:"chart-content__right-bar__section"},[r("h3",[e._v(e._s(e.t("catalog.chart.info.related")))]),e._l(e.version.sources,(function(t){return r("a",{key:t,attrs:{href:t,rel:"nofollow noopener noreferrer",target:"_blank"}},[e._v(e._s(t))])}))],2):e._e(),e.version.urls?r("div",{staticClass:"chart-content__right-bar__section"},[r("h3",[e._v(e._s(e.t("catalog.chart.info.chartUrls")))]),e._l(e.version.urls,(function(t){return r("a",{key:t,attrs:{href:t,rel:"nofollow noopener noreferrer",target:"_blank"}},[e._v(e._s(1===e.version.urls.length?"Download":t))])}))],2):e._e(),e.version.keywords?r("div",{staticClass:"chart-content__right-bar__section chart-content__right-bar__section--keywords"},[r("h3",[e._v(e._s(e.t("catalog.chart.info.keywords")))]),e._v(" "+e._s(e.version.keywords.join(", "))+" ")]):e._e()]):e._e()],1)],1)},a=[],s=(r("1d8f"),r("13ec"),r("cf99"),r("7e5b"),r("38aa"),r("bcff"),r("ade3")),o=r("1da1"),i=(r("b61e"),r("bb4d"),r("0b7a"),r("9d9d"),r("8be0"),r("a34a")),c=r.n(i),l=(r("96cf"),r("c778")),u=r("2467"),h=r("bec1"),p=r("5fc0"),v=r("bc1c"),d=r("0ea4"),f=r("63ea"),m=r.n(f),g=r("fa3b"),b=r("2f62"),_=r("5ce5"),y=r("35f4");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N={components:{Banner:h["a"],ChartReadme:p["a"],DateFormatter:d["default"],LazyImage:v["a"],Loading:l["a"],TypeDescription:y["a"]},mixins:[u["a"]],fetch:function(){var e=this;return Object(o["a"])(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchChart();case 2:case"end":return t.stop()}}),t)})))()},data:function(){return{showLastVersions:10,showMoreVersions:!1}},computed:O(O({},Object(b["b"])(["currentCluster"])),{},{versions:function(){return this.showMoreVersions?this.mappedVersions:this.mappedVersions.slice(0,this.showLastVersions)},targetedAppWarning:function(){if(this.existing){var e=this.$router.resolve(this.appLocation()).href;return this.isChartTargeted?this.t("catalog.chart.errors.clusterToolExists",{url:e},!0):""}},maintainers:function(){return this.version.maintainers.map((function(e){return{id:e.name,text:e.name,url:"mailto:".concat(e.email)}}))},osWarning:function(){var e=this;if(this.chart){var t=Object(_["compatibleVersionsFor"])(this.chart,this.currentCluster.workerOSs,this.showPreRelease),r=!!t.find((function(t){return t.version===e.targetVersion}));return!r&&(t.length>0?this.t("catalog.os.versionIncompatible"):this.t("catalog.os.chartIncompatible"))}return!1}}),watch:{"$route.query":function(e,t){m()(e,t)||this.$fetch()}},methods:{install:function(){var e;this.$router.push({name:"c-cluster-apps-charts-install",params:{cluster:this.$route.params.cluster,product:this.$store.getters["productId"]},query:(e={},Object(s["a"])(e,g["z"],this.query.repoType),Object(s["a"])(e,g["y"],this.query.repoName),Object(s["a"])(e,g["d"],this.query.chartName),Object(s["a"])(e,g["G"],this.query.versionName),e)})}}},j=N,V=(r("af75"),r("0c7c")),q=Object(V["a"])(j,n,a,!1,null,"80f5c556",null);t["default"]=q.exports},af75:function(e,t,r){"use strict";r("f561")},f561:function(e,t,r){}}]);
//# sourceMappingURL=chart.f5c941ac.js.map