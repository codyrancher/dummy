(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/c/_cluster/settings/banners"],{5383:function(e,t,n){"use strict";n("f4b8")},"5b6d":function(e,t,n){},"5ed1":function(e,t,n){"use strict";var a=function(){var e,t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"color-input",class:(e={},e[t.mode]=t.mode,e.disabled=t.mode!==t.editMode,e),attrs:{"data-testid":t.componentTestid+"-color-input"}},[a("label",{staticClass:"text-label"},[t.labelKey?a("t",{attrs:{k:t.labelKey,raw:!0}}):t._e(),t._v(t._s(t.label))],1),a("div",{staticClass:"preview-container",on:{click:function(e){return e.stopPropagation(),t.$refs.input.click(e)}}},[a("span",{staticClass:"color-display",style:{"background-color":t.inputValue}},[a("input",{ref:"input",attrs:{type:"color",disabled:t.mode!==t.editMode},domProps:{value:t.inputValue},on:{input:function(e){return t.$emit("input",e.target.value)}}})]),a("span",{staticClass:"text-muted color-value"},[t._v(t._s(t.inputValue))])])])},o=[],r=(n("9ce4"),n("6d55"),n("fa3b")),l={props:{value:{type:String,default:""},defaultValue:{type:String,default:""},label:{type:String,default:null},labelKey:{type:String,default:null},mode:{type:String,validator:function(e){return[r["L"],r["S"]].includes(e)},default:r["L"]},componentTestid:{type:String,default:"color-input"}},data:function(){return{viewMode:r["S"],editMode:r["L"]}},computed:{inputValue:function(){return this.value?this.value:this.defaultValue}},mounted:function(){this.$emit("input",this.inputValue)}},s=l,i=(n("78b7"),n("0c7c")),c=Object(i["a"])(s,a,o,!1,null,"44939daa",null);t["a"]=c.exports},"606f":function(e,t,n){"use strict";n("5b6d")},"78b7":function(e,t,n){"use strict";n("7f8c")},"7f8c":function(e,t,n){},d1d7:function(e,t,n){"use strict";n("da92")},da92:function(e,t,n){},e10c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$fetchState.pending?n("Loading"):n("div",[n("h1",{staticClass:"mb-20"},[e._v(" "+e._s(e.t("banner.label"))+" ")]),n("div",[n("label",{staticClass:"text-label"},[e._v(" "+e._s(e.t("advancedSettings.descriptions.ui-banners",{},!0))+" ")]),[n("h2",{staticClass:"mt-40 mb-40"},[e._v(" "+e._s(e.t("banner.headerBanner"))+" ")]),n("div",{staticClass:"row mb-20"},[n("div",{staticClass:"col span-6"},[n("Checkbox",{attrs:{value:"true"===e.bannerVal.showHeader,label:e.t("banner.showHeader"),mode:e.mode},on:{input:function(t){return e.$set(e.bannerVal,"showHeader",t.toString())}}})],1)]),n("BannerSettings",{attrs:{"banner-type":"bannerHeader",mode:e.headerMode},model:{value:e.bannerVal,callback:function(t){e.bannerVal=t},expression:"bannerVal"}}),n("h2",{staticClass:"mt-40 mb-40"},[e._v(" "+e._s(e.t("banner.footerBanner"))+" ")]),n("div",{staticClass:"row mt-40 mb-20"},[n("div",{staticClass:"col span-6"},[n("Checkbox",{attrs:{value:"true"===e.bannerVal.showFooter,label:e.t("banner.showFooter"),mode:e.mode},on:{input:function(t){return e.$set(e.bannerVal,"showFooter",t.toString())}}})],1)]),n("BannerSettings",{attrs:{"banner-type":"bannerFooter",mode:e.footerMode},model:{value:e.bannerVal,callback:function(t){e.bannerVal=t},expression:"bannerVal"}})],n("h2",{staticClass:"mt-40 mb-40"},[e._v(" "+e._s(e.t("banner.loginScreenBanner"))+" ")]),[n("div",{staticClass:"row mt-40 mb-20"},[n("div",{staticClass:"col span-6"},[n("Checkbox",{attrs:{value:"true"===e.bannerVal.showConsent,label:e.t("banner.showConsent"),mode:e.mode},on:{input:function(t){return e.$set(e.bannerVal,"showConsent",t.toString())}}})],1)]),n("BannerSettings",{attrs:{"banner-type":"bannerConsent",mode:e.consentMode},model:{value:e.bannerVal,callback:function(t){e.bannerVal=t},expression:"bannerVal"}})],n("h2",{staticClass:"mt-40 mb-40"},[e._v(" "+e._s(e.t("notifications.loginError.header"))+" ")]),n("NotificationSettings",{attrs:{mode:e.mode,label:e.t("notifications.loginError.messageLabel")},model:{value:e.bannerVal.loginError,callback:function(t){e.$set(e.bannerVal,"loginError",t)},expression:"bannerVal.loginError"}})],2),e._l(e.errors,(function(e){return[n("Banner",{key:e,attrs:{color:"error",label:e}})]})),"edit"===e.mode?n("div",[n("AsyncButton",{staticClass:"pull-right mt-20",attrs:{mode:"apply"},on:{click:e.save}})],1):e._e()],2)},o=[],r=(n("1d8f"),n("13ec"),n("cf99"),n("7e5b"),n("38aa"),n("bcff"),n("ade3")),l=n("1da1"),s=n("a34a"),i=n.n(s),c=(n("96cf"),n("debf"),n("9ce4"),n("6d55"),n("a797"),n("8be0"),n("e673"),n("a41c"),n("5986"),n("13ea")),u=n.n(c),b=n("4de2"),d=n("c778"),p=n("67c9"),f=n("bec1"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row mb-20"},[n("div",{staticClass:"col span-12"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col span-6"},[n("LabeledInput",{attrs:{disabled:e.isUiDisabled,label:e.t("banner.text"),type:"multiline"},model:{value:e.value[e.bannerType].text,callback:function(t){e.$set(e.value[e.bannerType],"text",t)},expression:"value[bannerType].text"}}),e.isConsentBanner?n("p",{staticClass:"banner-input-footnote mt-5 mb-20"},[e._v(" "+e._s(e.t("banner.consentFootnote"))+" ")]):e._e(),e.isConsentBanner?n("div",{staticClass:"mt-10"},[n("Checkbox",{staticClass:"banner-decoration-checkbox",attrs:{name:"bannerDecoration",mode:e.mode,label:e.t("banner.showAsDialog.label"),tooltip:e.t("banner.showAsDialog.tooltip")},model:{value:e.showAsDialog,callback:function(t){e.showAsDialog=t},expression:"showAsDialog"}}),n("LabeledInput",{attrs:{disabled:!e.showAsDialog||e.isUiDisabled,label:e.t("banner.buttonText")},model:{value:e.buttonText,callback:function(t){e.buttonText=t},expression:"buttonText"}})],1):e._e()],1),n("div",{staticClass:"col span-2"},[n("RadioGroup",{attrs:{name:"bannerAlignment",label:e.t("banner.bannerAlignment.label"),options:e.radioOptions.options,labels:e.radioOptions.labels,mode:e.mode},model:{value:e.value[e.bannerType].textAlignment,callback:function(t){e.$set(e.value[e.bannerType],"textAlignment",t)},expression:"value[bannerType].textAlignment"}})],1),n("div",{staticClass:"col span-2"},[n("h3",[e._v(" "+e._s(e.t("banner.bannerDecoration.label"))+" ")]),e._l(e.textDecorationOptions,(function(t){return n("div",{key:t.style},[n("Checkbox",{staticClass:"banner-decoration-checkbox",attrs:{name:"bannerDecoration",mode:e.mode,label:t.label},model:{value:e.value[e.bannerType][t.style],callback:function(n){e.$set(e.value[e.bannerType],t.style,n)},expression:"value[bannerType][o.style]"}})],1)}))],2),n("div",{staticClass:"col span-2"},[n("LabeledSelect",{attrs:{disabled:e.isUiDisabled,label:e.t("banner.bannerFontSize.label"),options:e.uiBannerFontSizeOptions},model:{value:e.value[e.bannerType].fontSize,callback:function(t){e.$set(e.value[e.bannerType],"fontSize",t)},expression:"value[bannerType].fontSize"}})],1)]),n("div",{staticClass:"row mt-10"},[n("div",{staticClass:"col span-6"},[n("ColorInput",{attrs:{"default-value":e.themeVars.bannerTextColor,label:e.t("banner.textColor"),mode:e.mode},model:{value:e.value[e.bannerType].color,callback:function(t){e.$set(e.value[e.bannerType],"color",t)},expression:"value[bannerType].color"}})],1),n("div",{staticClass:"col span-6"},[n("ColorInput",{attrs:{"default-value":e.themeVars.bannerBgColor,label:e.t("banner.background"),mode:e.mode},model:{value:e.value[e.bannerType].background,callback:function(t){e.$set(e.value[e.bannerType],"background",t)},expression:"value[bannerType].background"}})],1)])])])},m=[],h=n("5ed1"),g=n("84d3"),y=n("a95f"),x=n("fa35"),C=n("fa3b"),w={name:"BannerSettings",props:{value:{type:Object,default:function(){}},mode:{type:String,validator:function(e){return[C["L"],C["S"]].includes(e)},default:C["L"]},bannerType:{type:String,required:!0}},components:{Checkbox:b["a"],ColorInput:h["a"],LabeledInput:g["a"],LabeledSelect:y["a"],RadioGroup:x["b"]},data:function(){var e,t,n=!(null===(e=this.value[this.bannerType])||void 0===e||!e.button)||!1,a=(null===(t=this.value[this.bannerType])||void 0===t?void 0:t.button)||this.t("banner.showAsDialog.defaultButtonText");return{showAsDialog:n,buttonText:a,uiBannerFontSizeOptions:["10px","12px","14px","16px","18px","20px"],themeVars:{bannerBgColor:getComputedStyle(document.body).getPropertyValue("--default"),bannerTextColor:getComputedStyle(document.body).getPropertyValue("--banner-text-color")}}},watch:{showAsDialog:function(e,t){this.value[this.bannerType].button=e===t||e?this.buttonText:""},buttonText:function(e,t){e!==t&&(this.value[this.bannerType].button=e)}},computed:{radioOptions:function(){var e=["left","center","right"],t=[this.t("banner.bannerAlignment.leftOption"),this.t("banner.bannerAlignment.centerOption"),this.t("banner.bannerAlignment.rightOption")];return{options:e,labels:t}},isUiDisabled:function(){return this.mode===C["S"]},textDecorationOptions:function(){var e=[{style:"fontWeight",label:this.t("banner.bannerDecoration.bannerBold")},{style:"fontStyle",label:this.t("banner.bannerDecoration.bannerItalic")},{style:"textDecoration",label:this.t("banner.bannerDecoration.bannerUnderline")}];return e},isConsentBanner:function(){return"bannerConsent"===this.bannerType}}},S=w,k=(n("5383"),n("0c7c")),O=Object(k["a"])(S,v,m,!1,null,"359c970c",null),T=O.exports,V=n("fa98"),_=n("a788"),B=n("58ec"),D=n("c5b9"),L=n("de78"),j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row mb-20"},[n("div",{staticClass:"col span-6"},[n("Checkbox",{attrs:{mode:e.mode,value:"true"===e.value.showMessage,label:e.t("notifications.loginError.showCheckboxLabel")},on:{input:function(t){return e.$set(e.value,"showMessage",t.toString())}}})],1)]),n("div",{staticClass:"row mb-20"},[n("div",{staticClass:"col span-6"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col span-12"},[n("LabeledInput",{attrs:{mode:e.mode,disabled:"false"===e.value.showMessage,label:e.t("notifications.loginError.messageLabel")},model:{value:e.value.message,callback:function(t){e.$set(e.value,"message",t)},expression:"value.message"}})],1)])])])])},A=[],E={name:"NotificationSettings",components:{LabeledInput:g["a"],Checkbox:b["a"]},props:{value:{type:Object,default:function(){}},mode:{type:String,validator:function(e){return[C["L"],C["S"]].includes(e)},default:C["L"]}}},$=E,F=(n("d1d7"),Object(k["a"])($,j,A,!1,null,"62b5f52a",null)),M=F.exports;function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H={loginError:{message:"",showMessage:"false"},bannerHeader:{background:null,color:null,textAlignment:"center",fontWeight:null,fontStyle:null,fontSize:"14px",textDecoration:null,text:null},bannerFooter:{background:null,color:null,textAlignment:"center",fontWeight:null,fontStyle:null,fontSize:"14px",textDecoration:null,text:null},bannerConsent:{background:null,color:null,textAlignment:"center",fontWeight:null,fontStyle:null,fontSize:"14px",textDecoration:null,text:null,button:null},showHeader:"false",showFooter:"false",showConsent:"false"},U={layout:"authenticated",components:{Checkbox:b["a"],Loading:d["a"],AsyncButton:p["b"],Banner:f["a"],BannerSettings:T,NotificationSettings:M},fetch:function(){var e=this;return Object(l["a"])(i.a.mark((function t(){var n;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(V["a"])({uiBannerSetting:e.$store.dispatch("management/find",{type:_["x"].SETTING,id:D["c"].BANNERS})});case 2:n=t.sent,Object.assign(e,n);case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{vendor:Object(B["d"])(),uiBannerSetting:null,bannerVal:{},errors:[]}},computed:{mode:function(){var e,t=this.$store.getters["management/schemaFor"](_["x"].SETTING);return null!==t&&void 0!==t&&null!==(e=t.resourceMethods)&&void 0!==e&&e.includes("PUT")?C["L"]:C["S"]},headerMode:function(){var e;return"true"===(null===(e=this.bannerVal)||void 0===e?void 0:e.showHeader)?C["L"]:C["S"]},footerMode:function(){var e;return"true"===(null===(e=this.bannerVal)||void 0===e?void 0:e.showFooter)?C["L"]:C["S"]},consentMode:function(){var e;return"true"===(null===(e=this.bannerVal)||void 0===e?void 0:e.showConsent)?C["L"]:C["S"]}},watch:{uiBannerSetting:function(e){if(null!==e&&void 0!==e&&e.value&&""!==e.value)try{var t=JSON.parse(e.value);this.bannerVal=this.checkOrUpdateLegacyUIBannerSetting(t)}catch(n){}}},methods:{checkOrUpdateLegacyUIBannerSetting:function(e){var t=e.bannerHeader,n=e.bannerFooter,a=e.bannerConsent,o=e.banner,r=e.loginError;if(u()(t)&&u()(n)&&u()(a)){var l=H;if(!u()(o)){var s=Object(L["clone"])(null!==o&&void 0!==o?o:{});null!==s&&void 0!==s&&s.textColor&&(s["color"]=s.textColor,delete s.textColor),l={bannerHeader:I({},s),bannerFooter:I({},s),loginError:I(I({},H.loginError),{},{loginError:"false"===(null===r||void 0===r?void 0:r.showMessage)?"false":"true"}),bannerConsent:I({},H.bannerConsent),showHeader:"true"===(null===e||void 0===e?void 0:e.showHeader)?"true":"false",showFooter:"true"===(null===e||void 0===e?void 0:e.showFooter)?"true":"false",showConsent:"true"===(null===e||void 0===e?void 0:e.showConsent)?"true":"false"}}return l}return u()(a)&&(e.bannerConsent=I({},H.bannerConsent)),u()(r)&&(e.loginError=I({},H.loginError)),e},save:function(e){var t=this;return Object(l["a"])(i.a.mark((function n(){return i.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.uiBannerSetting.value=JSON.stringify(t.bannerVal),t.errors=[],n.prev=2,n.next=5,Promise.all([t.uiBannerSetting.save()]);case 5:e(!0),n.next=12;break;case 8:n.prev=8,n.t0=n["catch"](2),t.errors.push(n.t0),e(!1);case 12:case"end":return n.stop()}}),n,null,[[2,8]])})))()}}},z=U,N=(n("606f"),Object(k["a"])(z,a,o,!1,null,"59c249e4",null));t["default"]=N.exports},f4b8:function(e,t,n){}}]);
//# sourceMappingURL=banners.f429cb3f.js.map