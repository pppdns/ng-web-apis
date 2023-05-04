"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=808,exports.ids=[808],exports.modules={73808:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HomePageModule:()=>HomePageModule});var core=__webpack_require__(74788);const WEB_AUDIO_SUPPORT=new core.InjectionToken("Web Audio API support",{providedIn:"root",factory:()=>!!AudioContext});var src=__webpack_require__(96247),ng_web_apis_intersection_observer=__webpack_require__(11693),ng_web_apis_midi=__webpack_require__(75723),ng_web_apis_payment_request=__webpack_require__(40165),ng_web_apis_permissions=__webpack_require__(96077),resize_observer_src=__webpack_require__(37891),constants=__webpack_require__(79792),router=__webpack_require__(3984);class HomePageComponent{constructor(paymentRequestSupport,geolocationSupport,intersectionSupport,resizeSupport,midiSupport,audioSupport,permissionsSupport){this.paymentRequestSupport=paymentRequestSupport,this.geolocationSupport=geolocationSupport,this.intersectionSupport=intersectionSupport,this.resizeSupport=resizeSupport,this.midiSupport=midiSupport,this.audioSupport=audioSupport,this.permissionsSupport=permissionsSupport,this.link=constants.x}}__name(HomePageComponent,"HomePageComponent"),HomePageComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:HomePageComponent,deps:[{token:ng_web_apis_payment_request.aB},{token:src.RN},{token:ng_web_apis_intersection_observer.tc},{token:resize_observer_src.vU},{token:ng_web_apis_midi.wF},{token:WEB_AUDIO_SUPPORT},{token:ng_web_apis_permissions.Yc}],target:core.\u0275\u0275FactoryTarget.Component}),HomePageComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.15",type:HomePageComponent,selector:"home-page",ngImport:core,template:'<a class="link" [routerLink]="[\'/\', link.CommonPage]">\n    <div>\n        <h2>Common</h2>\n        A set of common utils for consuming\n        <strong>Web APIs</strong>\n        with Angular\n    </div>\n    <img\n        src="assets/images/common.svg"\n        width="64"\n        height="64"\n        alt="Common utils logo"\n        class="icon"\n    />\n</a>\n<a class="link" [routerLink]="[\'/\', link.UniversalPage]">\n    <div>\n        <h2>Universal</h2>\n        A set of fallbacks to seamlessly use\n        <strong>Web APIs</strong>\n        with Angular Universal\n    </div>\n    <img\n        src="assets/images/universal.svg"\n        width="64"\n        height="64"\n        alt="Universal logo"\n        class="icon"\n    />\n</a>\n<a\n    class="link"\n    [routerLink]="[\'/\', link.AudioPage]"\n    [class.not_supported]="!audioSupport"\n>\n    <div>\n        <h2>Audio</h2>\n        A library for declarative use of\n        <strong>Web Audio API</strong>\n        with Angular\n    </div>\n    <img\n        src="assets/images/audio.svg"\n        width="64"\n        height="64"\n        alt="Web Audio API logo"\n        class="icon"\n    />\n</a>\n<a class="link" [routerLink]="[\'/\', link.CanvasPage]">\n    <div>\n        <h2>Canvas</h2>\n        A library for declarative use of\n        <strong>Canvas API</strong>\n        with Angular\n    </div>\n    <img\n        src="assets/images/canvas.svg"\n        width="64"\n        height="64"\n        alt="Canvas API logo"\n        class="icon"\n    />\n</a>\n<a\n    class="link"\n    [routerLink]="[\'/\', link.GeolocationPage]"\n    [class.not-supported]="!geolocationSupport"\n>\n    <div>\n        <h2>Geolocation</h2>\n        An Observable based abstraction to use\n        <strong>Geolocation API</strong>\n        with Angular\n    </div>\n    <img\n        src="assets/images/geolocation.svg"\n        width="64"\n        height="64"\n        alt="Geolocation API logo"\n        class="icon"\n    />\n</a>\n<a\n    href="https://github.com/ng-web-apis/intersection-observer"\n    target="_blank"\n    class="link"\n    [class.not-supported]="!intersectionSupport"\n>\n    <div>\n        <h2>Intersection Observer</h2>\n        A library for declarative use of\n        <strong>Intersection Observer API</strong>\n        with Angular\n    </div>\n    <img\n        src="assets/images/intersection-observer.svg"\n        width="64"\n        height="64"\n        alt="Intersection Observer API logo"\n        class="icon"\n    />\n</a>\n<a\n    href="https://github.com/ng-web-apis/midi"\n    target="_blank"\n    class="link"\n    [class.not-supported]="!midiSupport"\n>\n    <div>\n        <h2>MIDI</h2>\n        An Observable based library for the use of\n        <strong>Web MIDI API</strong>\n        with Angular\n    </div>\n    <img\n        src="assets/images/midi.svg"\n        width="64"\n        height="64"\n        alt="Web MIDI API logo"\n        class="icon"\n    />\n</a>\n<a\n    href="https://github.com/ng-web-apis/mutation-observer"\n    target="_blank"\n    class="link"\n>\n    <div>\n        <h2>Mutation Observer</h2>\n        A library for declarative use of\n        <strong>Mutation Observer API</strong>\n        with Angular\n    </div>\n    <img\n        src="assets/images/mutation-observer.svg"\n        width="64"\n        height="64"\n        alt="Mutation Observer API logo"\n        class="icon"\n    />\n</a>\n<a\n    href="https://github.com/ng-web-apis/payment-request"\n    target="_blank"\n    class="link"\n    [class.not-supported]="!paymentRequestSupport"\n>\n    <div>\n        <h2>Payment Request</h2>\n        A library for declarative use of\n        <strong>Payment Request API</strong>\n        with Angular\n    </div>\n    <img\n        src="assets/images/payment-request.svg"\n        width="64"\n        height="64"\n        alt="Payment Request API logo"\n        class="icon"\n    />\n</a>\n<a\n    href="https://github.com/ng-web-apis/permissions"\n    target="_blank"\n    class="link"\n    [class.not-supported]="!permissionsSupport"\n>\n    <div>\n        <h2>Permissions</h2>\n        A library for Observable-based use of\n        <strong>Permissions API</strong>\n    </div>\n    <img\n        src="assets/images/permissions.svg"\n        width="64"\n        height="64"\n        alt="Permissions API logo"\n        class="icon"\n    />\n</a>\n<a\n    class="link"\n    [routerLink]="[\'/\', link.ResizeObserverPage]"\n    [class.not-supported]="!resizeSupport"\n>\n    <div>\n        <h2>Resize Observer</h2>\n        A library for declarative use of\n        <strong>Resize Observer API</strong>\n        with Angular\n    </div>\n    <img\n        src="assets/images/resize-observer.svg"\n        width="64"\n        height="64"\n        alt="Resize Observer API logo"\n        class="icon"\n    />\n</a>\n<a href="https://github.com/ng-web-apis/speech" target="_blank" class="link">\n    <div>\n        <h2>Speech</h2>\n        A library for comfortable use of\n        <strong>Web Speech API</strong>\n        with Angular\n    </div>\n    <img\n        src="assets/images/speech.svg"\n        width="64"\n        height="64"\n        alt="Web Speech API logo"\n        class="icon"\n    />\n</a>\n<a href="https://github.com/ng-web-apis/storage" target="_blank" class="link">\n    <div>\n        <h2>Storage</h2>\n        A library for comfortable use of\n        <strong>Web Storage API</strong>\n        with Angular\n    </div>\n    <img\n        src="assets/images/storage.svg"\n        width="64"\n        height="64"\n        alt="Web Storage API logo"\n        class="icon"\n    />\n</a>\n<a href="https://github.com/ng-web-apis/workers" target="_blank" class="link">\n    <div>\n        <h2>Workers</h2>\n        A library for use of\n        <strong>Web Workers</strong>\n        as RxJS Observables with Angular\n    </div>\n    <img\n        src="assets/images/workers.svg"\n        width="64"\n        height="64"\n        alt="Worker API logo"\n        class="icon"\n    />\n</a>\n',styles:[":host{display:flex;flex-wrap:wrap;align-content:flex-start;justify-content:center}\n"],directives:[{type:router.yS,selector:"a[routerLink],area[routerLink]",inputs:["routerLink","target","queryParams","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","relativeTo"]}],changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:HomePageComponent,decorators:[{type:core.Component,args:[{selector:"home-page",templateUrl:"./home-page.component.html",styleUrls:["./home-page.component.css"],changeDetection:core.ChangeDetectionStrategy.OnPush}]}],ctorParameters:function(){return[{type:void 0,decorators:[{type:core.Inject,args:[ng_web_apis_payment_request.aB]}]},{type:void 0,decorators:[{type:core.Inject,args:[src.RN]}]},{type:void 0,decorators:[{type:core.Inject,args:[ng_web_apis_intersection_observer.tc]}]},{type:void 0,decorators:[{type:core.Inject,args:[resize_observer_src.vU]}]},{type:void 0,decorators:[{type:core.Inject,args:[ng_web_apis_midi.wF]}]},{type:void 0,decorators:[{type:core.Inject,args:[WEB_AUDIO_SUPPORT]}]},{type:void 0,decorators:[{type:core.Inject,args:[ng_web_apis_permissions.Yc]}]}]}});class HomePageModule{}__name(HomePageModule,"HomePageModule"),HomePageModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:HomePageModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),HomePageModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:HomePageModule,declarations:[HomePageComponent],imports:[router.Bz]}),HomePageModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:HomePageModule,imports:[[router.Bz.forChild([{path:"",component:HomePageComponent}])]]}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:HomePageModule,decorators:[{type:core.NgModule,args:[{declarations:[HomePageComponent],imports:[router.Bz.forChild([{path:"",component:HomePageComponent}])]}]}]})},96247:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RN:()=>GEOLOCATION_SUPPORT,_1:()=>GeolocationService,H:()=>POSITION_OPTIONS});var core=__webpack_require__(74788),cjs=__webpack_require__(72921),operators=__webpack_require__(57192),src=__webpack_require__(92176);const GEOLOCATION=new core.InjectionToken("An abstraction over window.navigator.geolocation object",{factory:()=>(0,core.inject)(src.s5).geolocation}),POSITION_OPTIONS=new core.InjectionToken("Token for an additional position options",{factory:()=>({})}),GEOLOCATION_SUPPORT=new core.InjectionToken("Is Geolocation API supported?",{factory:()=>!!(0,core.inject)(GEOLOCATION)});class GeolocationService extends cjs.Observable{constructor(geolocationRef,geolocationSupported,positionOptions){let watchPositionId=0;return super(subscriber=>{geolocationSupported||subscriber.error("Geolocation is not supported in your browser"),watchPositionId=geolocationRef.watchPosition(position=>subscriber.next(position),positionError=>subscriber.error(positionError),positionOptions)}),this.pipe((0,operators.xS)(()=>geolocationRef.clearWatch(watchPositionId)),(0,operators.d)({bufferSize:1,refCount:!0}))}}__name(GeolocationService,"GeolocationService"),GeolocationService.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:GeolocationService,deps:[{token:GEOLOCATION},{token:GEOLOCATION_SUPPORT},{token:POSITION_OPTIONS}],target:core.\u0275\u0275FactoryTarget.Injectable}),GeolocationService.\u0275prov=core.\u0275\u0275ngDeclareInjectable({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:GeolocationService,providedIn:"root"}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:GeolocationService,decorators:[{type:core.Injectable,args:[{providedIn:"root"}]}],ctorParameters:function(){return[{type:Geolocation,decorators:[{type:core.Inject,args:[GEOLOCATION]}]},{type:void 0,decorators:[{type:core.Inject,args:[GEOLOCATION_SUPPORT]}]},{type:void 0,decorators:[{type:core.Inject,args:[POSITION_OPTIONS]}]}]}})},44953:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>ResizeObserverDirective});var _angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(74788),_services_resize_observer_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(83412),_tokens_resize_option_box__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(89367),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(72921);function boxExtractor({nativeElement}){return boxFactory(nativeElement.getAttribute("waResizeBox"))}function boxFactory(box){return box||_tokens_resize_option_box__WEBPACK_IMPORTED_MODULE_1__.I}__name(boxExtractor,"boxExtractor"),__name(boxFactory,"boxFactory");class ResizeObserverDirective{constructor(entries$,_box){this.waResizeObserver=entries$}}__name(ResizeObserverDirective,"ResizeObserverDirective"),ResizeObserverDirective.\u0275fac=_angular_core__WEBPACK_IMPORTED_MODULE_2__.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_2__,type:ResizeObserverDirective,deps:[{token:_services_resize_observer_service__WEBPACK_IMPORTED_MODULE_0__.a},{token:"waResizeBox",attribute:!0}],target:_angular_core__WEBPACK_IMPORTED_MODULE_2__.\u0275\u0275FactoryTarget.Directive}),ResizeObserverDirective.\u0275dir=_angular_core__WEBPACK_IMPORTED_MODULE_2__.\u0275\u0275ngDeclareDirective({minVersion:"12.0.0",version:"12.2.15",type:ResizeObserverDirective,selector:"[waResizeObserver]",outputs:{waResizeObserver:"waResizeObserver"},providers:[_services_resize_observer_service__WEBPACK_IMPORTED_MODULE_0__.a,{provide:_tokens_resize_option_box__WEBPACK_IMPORTED_MODULE_1__.j,deps:[_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef],useFactory:boxExtractor}],ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_2__}),_angular_core__WEBPACK_IMPORTED_MODULE_2__.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_2__,type:ResizeObserverDirective,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,args:[{selector:"[waResizeObserver]",providers:[_services_resize_observer_service__WEBPACK_IMPORTED_MODULE_0__.a,{provide:_tokens_resize_option_box__WEBPACK_IMPORTED_MODULE_1__.j,deps:[_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef],useFactory:boxExtractor}]}]}],ctorParameters:function(){return[{type:rxjs__WEBPACK_IMPORTED_MODULE_3__.Observable,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,args:[_services_resize_observer_service__WEBPACK_IMPORTED_MODULE_0__.a]}]},{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,args:["waResizeBox"]}]}]},propDecorators:{waResizeObserver:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output}]}})},37891:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{vU:()=>support.v,xi:()=>ResizeObserverModule});var resize_observer_directive=__webpack_require__(44953),core=__webpack_require__(74788);class ResizeObserverModule{}__name(ResizeObserverModule,"ResizeObserverModule"),ResizeObserverModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:ResizeObserverModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),ResizeObserverModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:ResizeObserverModule,declarations:[resize_observer_directive.P],exports:[resize_observer_directive.P]}),ResizeObserverModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:ResizeObserverModule}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:ResizeObserverModule,decorators:[{type:core.NgModule,args:[{declarations:[resize_observer_directive.P],exports:[resize_observer_directive.P]}]}]});__webpack_require__(83412),__webpack_require__(89367);var support=__webpack_require__(3694)},83412:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>ResizeObserverService});var _angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(74788),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(72921),rxjs_operators__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(57192),_tokens_resize_option_box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(89367),_tokens_support__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3694);class ResizeObserverService extends rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable{constructor({nativeElement},ngZone,support,box){let observer;return super(subscriber=>{if(support)return observer=new ResizeObserver(entries=>{ngZone.run(()=>{subscriber.next(entries)})}),observer.observe(nativeElement,{box}),()=>{observer.disconnect()};subscriber.error("ResizeObserver is not supported in your browser")}),this.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.BN)())}}__name(ResizeObserverService,"ResizeObserverService"),ResizeObserverService.\u0275fac=_angular_core__WEBPACK_IMPORTED_MODULE_4__.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_4__,type:ResizeObserverService,deps:[{token:_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef},{token:_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone},{token:_tokens_support__WEBPACK_IMPORTED_MODULE_1__.v},{token:_tokens_resize_option_box__WEBPACK_IMPORTED_MODULE_0__.j}],target:_angular_core__WEBPACK_IMPORTED_MODULE_4__.\u0275\u0275FactoryTarget.Injectable}),ResizeObserverService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_4__.\u0275\u0275ngDeclareInjectable({minVersion:"12.0.0",version:"12.2.15",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_4__,type:ResizeObserverService}),_angular_core__WEBPACK_IMPORTED_MODULE_4__.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_4__,type:ResizeObserverService,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable}],ctorParameters:function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,args:[_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef]}]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,args:[_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone]}]},{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,args:[_tokens_support__WEBPACK_IMPORTED_MODULE_1__.v]}]},{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,args:[_tokens_resize_option_box__WEBPACK_IMPORTED_MODULE_0__.j]}]}]}})},89367:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>RESIZE_OPTION_BOX_DEFAULT,j:()=>RESIZE_OPTION_BOX});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(74788);const RESIZE_OPTION_BOX_DEFAULT="content-box",RESIZE_OPTION_BOX=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("Box model to observe changes",{providedIn:"root",factory:()=>RESIZE_OPTION_BOX_DEFAULT})},3694:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>RESIZE_OBSERVER_SUPPORT});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(74788),_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(92176);const RESIZE_OBSERVER_SUPPORT=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken("Resize Observer API support",{providedIn:"root",factory:()=>!!(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_0__.m9).ResizeObserver})}};