"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=640,exports.ids=[640],exports.modules={26640:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>ResizeObserverPageComponent});var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(93663),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24761),_angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(97315),_ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(28410);class ResizeObserverPageComponent{constructor(support){Object.defineProperty(this,"support",{enumerable:!0,configurable:!0,writable:!0,value:support}),Object.defineProperty(this,"ratio",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"widthPercent",{enumerable:!0,configurable:!0,writable:!0,value:50})}onResize(entry){this.ratio=Math.round(entry[0].contentRect.width/110)}}__name(ResizeObserverPageComponent,"ResizeObserverPageComponent"),Object.defineProperty(ResizeObserverPageComponent,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:_angular_core__WEBPACK_IMPORTED_MODULE_1__.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_1__,type:ResizeObserverPageComponent,deps:[{token:_ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_0__.vU}],target:_angular_core__WEBPACK_IMPORTED_MODULE_1__.\u0275\u0275FactoryTarget.Component})}),Object.defineProperty(ResizeObserverPageComponent,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:_angular_core__WEBPACK_IMPORTED_MODULE_1__.\u0275\u0275ngDeclareComponent({minVersion:"14.0.0",version:"15.2.10",type:ResizeObserverPageComponent,isStandalone:!0,selector:"resize-observer-page",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_1__,template:'<section\n    *ngIf="support; else not"\n    class="wrapper"\n>\n    <h1\n        waResizeBox="content-box"\n        class="element"\n        [attr.data-ratio]="ratio"\n        [style.width.%]="widthPercent"\n        (waResizeObserver)="onResize($event)"\n    >\n        Resizable box\n    </h1>\n    <label class="width-slider">\n        Adjust width:\n        <input\n            max="100"\n            min="5"\n            type="range"\n            value="50"\n            class="slider"\n            [(ngModel)]="widthPercent"\n        />\n    </label>\n</section>\n<ng-template #not>Your browser does not support Resize Observer API</ng-template>\n',styles:[':host{perspective:150vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-direction:column;align-items:center}.width-slider{display:flex;flex-direction:column;align-items:center}.slider{margin:10px}.wrapper{display:flex;flex-direction:column;align-items:center;position:relative;width:100%;overflow:hidden}.element{display:flex;align-items:center;justify-content:center;text-align:center;padding:10px;width:80%;min-width:124px;height:200px;transition:background .1s}.element[data-ratio="1"]{background:#e885eb}.element[data-ratio="2"]{background:#c685eb}.element[data-ratio="3"]{background:#ac85eb}.element[data-ratio="4"]{background:#9885eb}.element[data-ratio="5"]{background:#8591eb}.element[data-ratio="6"]{background:#85a0eb}.element[data-ratio="7"]{background:#84aeeb}.element[data-ratio="8"]{background:#83beeb}.element[data-ratio="9"]{background:#86d2eb}.element[data-ratio="10"]{background:#87ddeb}.element[data-ratio="11"]{background:#8ae5eb}.element[data-ratio="12"]{background:#8bebdf}.element[data-ratio="13"]{background:#83ebc8}.element[data-ratio="14"]{background:#6beb99}.element[data-ratio="15"]{background:#4ceb60}\n'],dependencies:[{kind:"ngmodule",type:_angular_common__WEBPACK_IMPORTED_MODULE_2__.ez},{kind:"directive",type:_angular_common__WEBPACK_IMPORTED_MODULE_2__.O5,selector:"[ngIf]",inputs:["ngIf","ngIfThen","ngIfElse"]},{kind:"ngmodule",type:_angular_forms__WEBPACK_IMPORTED_MODULE_3__.u5},{kind:"directive",type:_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Fj,selector:"input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"},{kind:"directive",type:_angular_forms__WEBPACK_IMPORTED_MODULE_3__.eT,selector:"input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]"},{kind:"directive",type:_angular_forms__WEBPACK_IMPORTED_MODULE_3__.JJ,selector:"[formControlName],[ngModel],[formControl]"},{kind:"directive",type:_angular_forms__WEBPACK_IMPORTED_MODULE_3__.On,selector:"[ngModel]:not([formControlName]):not([formControl])",inputs:["name","disabled","ngModel","ngModelOptions"],outputs:["ngModelChange"],exportAs:["ngModel"]},{kind:"directive",type:_ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_0__.P,selector:"[waResizeObserver]",outputs:["waResizeObserver"]}],changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush})}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_1__,type:ResizeObserverPageComponent,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,args:[{standalone:!0,selector:"resize-observer-page",imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.ez,_angular_forms__WEBPACK_IMPORTED_MODULE_3__.u5,_ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_0__.P],changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,template:'<section\n    *ngIf="support; else not"\n    class="wrapper"\n>\n    <h1\n        waResizeBox="content-box"\n        class="element"\n        [attr.data-ratio]="ratio"\n        [style.width.%]="widthPercent"\n        (waResizeObserver)="onResize($event)"\n    >\n        Resizable box\n    </h1>\n    <label class="width-slider">\n        Adjust width:\n        <input\n            max="100"\n            min="5"\n            type="range"\n            value="50"\n            class="slider"\n            [(ngModel)]="widthPercent"\n        />\n    </label>\n</section>\n<ng-template #not>Your browser does not support Resize Observer API</ng-template>\n',styles:[':host{perspective:150vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-direction:column;align-items:center}.width-slider{display:flex;flex-direction:column;align-items:center}.slider{margin:10px}.wrapper{display:flex;flex-direction:column;align-items:center;position:relative;width:100%;overflow:hidden}.element{display:flex;align-items:center;justify-content:center;text-align:center;padding:10px;width:80%;min-width:124px;height:200px;transition:background .1s}.element[data-ratio="1"]{background:#e885eb}.element[data-ratio="2"]{background:#c685eb}.element[data-ratio="3"]{background:#ac85eb}.element[data-ratio="4"]{background:#9885eb}.element[data-ratio="5"]{background:#8591eb}.element[data-ratio="6"]{background:#85a0eb}.element[data-ratio="7"]{background:#84aeeb}.element[data-ratio="8"]{background:#83beeb}.element[data-ratio="9"]{background:#86d2eb}.element[data-ratio="10"]{background:#87ddeb}.element[data-ratio="11"]{background:#8ae5eb}.element[data-ratio="12"]{background:#8bebdf}.element[data-ratio="13"]{background:#83ebc8}.element[data-ratio="14"]{background:#6beb99}.element[data-ratio="15"]{background:#4ceb60}\n']}]}],ctorParameters:function(){return[{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,args:[_ng_web_apis_resize_observer__WEBPACK_IMPORTED_MODULE_0__.vU]}]}]}})}};