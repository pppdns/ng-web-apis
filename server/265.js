"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=265,exports.ids=[265],exports.modules={57265:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CommonPageModule:()=>CommonPageModule});var core=__webpack_require__(74788),ngx_markdown=__webpack_require__(22893),common=__webpack_require__(12057);class CommonPageComponent{constructor(){this.readme=__webpack_require__.e(524).then(__webpack_require__.t.bind(__webpack_require__,53524,17)).then(a=>a.default.replace("![logo](logo.svg) ",""))}}__name(CommonPageComponent,"CommonPageComponent"),CommonPageComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:CommonPageComponent,deps:[],target:core.\u0275\u0275FactoryTarget.Component}),CommonPageComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.17",type:CommonPageComponent,selector:"common-page",ngImport:core,template:"<markdown [data]=\"(readme | async) || ''\"></markdown>\n",components:[{type:ngx_markdown.lF,selector:"markdown, [markdown]",inputs:["data","src","emoji","katex","katexOptions","lineHighlight","line","lineOffset","lineNumbers","start","commandLine","filterOutput","host","prompt","output","user"],outputs:["error","load","ready"]}],pipes:{async:common.Ov},changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:CommonPageComponent,decorators:[{type:core.Component,args:[{selector:"common-page",templateUrl:"./common-page.component.html",changeDetection:core.ChangeDetectionStrategy.OnPush}]}]});var router=__webpack_require__(3984);class CommonPageModule{}__name(CommonPageModule,"CommonPageModule"),CommonPageModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:CommonPageModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),CommonPageModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:CommonPageModule,declarations:[CommonPageComponent],imports:[common.ez,ngx_markdown.JP,router.Bz]}),CommonPageModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:CommonPageModule,imports:[[common.ez,ngx_markdown.JP,router.Bz.forChild([{path:"",component:CommonPageComponent}])]]}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:CommonPageModule,decorators:[{type:core.NgModule,args:[{imports:[common.ez,ngx_markdown.JP,router.Bz.forChild([{path:"",component:CommonPageComponent}])],declarations:[CommonPageComponent]}]}]})}};