parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"OSOB":[function(require,module,exports) {
module.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:function(){return[]}},viewOptions:{type:Object,default:function(){return{}}},viewQuery:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:function(){return[]}},link:{type:String,default:null}}};
},{}],"CcLW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},t=require("../../../mixins/listing"),i=n(t);function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}exports.default={mixins:[i.default],computed:{fieldOptions:function(){return e({__none__:"("+this.$t("dont_show")+")"},this.$lodash.mapValues(this.fields,function(e){return e.name}))},fileOptions:function(){var t=this.$lodash.filter(this.fields,function(e){return"file"===e.type.toLowerCase()}),i=this.$lodash.keyBy(t,"field"),n=e({__none__:"("+this.$t("dont_show")+")"},this.$lodash.mapValues(i,function(e){return e.name}));if("storage"in this.fields){var s=this.fields.storage;"alias"===s.type.toLowerCase()&&"directus_files"===s.collection&&(n.storage=this.$t("file"))}return n}},methods:{setOption:function(t,i){this.$emit("options",e({},this.viewOptions,s({},t,i)))}}};
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(t){t.preventDefault()}}},[n("label",{attrs:{for:"title"}},[t._v(t._s(t.$t("listings-tile-title")))]),t._v(" "),n("v-select",{attrs:{id:"title",value:t.viewOptions.title,options:t.fieldOptions,placeholder:t.$t("select_field")},on:{input:function(e){t.setOption("title","__none__"===e?null:e)}}}),t._v(" "),n("label",{attrs:{for:"subtitle"}},[t._v(t._s(t.$t("listings-tile-subtitle")))]),t._v(" "),n("v-select",{attrs:{id:"subtitle",value:t.viewOptions.subtitle,options:t.fieldOptions,placeholder:t.$t("select_field")},on:{input:function(e){t.setOption("subtitle","__none__"===e?null:e)}}}),t._v(" "),n("label",{attrs:{for:"src"}},[t._v(t._s(t.$t("listings-tile-src")))]),t._v(" "),n("v-select",{attrs:{id:"src",value:t.viewOptions.src,options:t.fileOptions,placeholder:t.$t("select_field")},on:{input:function(e){t.setOption("src","__none__"===e?null:e)}}}),t._v(" "),n("label",{attrs:{for:"content"}},[t._v(t._s(t.$t("listings-tile-content")))]),t._v(" "),n("v-select",{attrs:{id:"content",value:t.viewOptions.content,options:t.fieldOptions,placeholder:t.$t("select_field")},on:{input:function(e){t.setOption("content","__none__"===e?null:e)}}}),t._v(" "),n("label",{attrs:{for:"icon"}},[t._v("Fallback Icon")]),t._v(" "),n("v-input",{attrs:{value:t.viewOptions.icon||"photo"},on:{input:function(e){t.setOption("icon",e)}}})],1)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-0e1bcb",functional:void 0});})();
},{"../../../mixins/listing":"OSOB"}]},{},["CcLW"], "__DirectusExtension__")