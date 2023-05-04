"use strict";(self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[]).push([[948],{6948:(T,c,s)=>{s.r(c),s.d(c,{MutationObserverPageModule:()=>_});var e=s(4788),l=s(1422);const d=new e.OlP("MutationObserver config");function u(t,n){return null!==t.getAttribute(n)||void 0}function g({nativeElement:t}){const n=t.getAttribute("attributeFilter");return{attributeFilter:n?n.split(",").map(r=>r.trim()):void 0,attributeOldValue:u(t,"attributeOldValue"),attributes:u(t,"attributes"),characterData:u(t,"characterData"),characterDataOldValue:u(t,"characterDataOldValue"),childList:u(t,"childList"),subtree:u(t,"subtree")}}let M=(()=>{class t extends MutationObserver{constructor({nativeElement:i},r,o,a,h,A,P,Z,D){super(C=>{this.waMutationObserver.emit(C)}),this.waMutationObserver=new e.vpe,this.observe(i,r)}ngOnDestroy(){this.disconnect()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(e.SBq),e.Y36(d),e.$8M("attributeFilter"),e.$8M("attributeOldValue"),e.$8M("attributes"),e.$8M("characterData"),e.$8M("characterDataOldValue"),e.$8M("childList"),e.$8M("subtree"))},t.\u0275dir=e.lG2({type:t,selectors:[["","waMutationObserver",""]],outputs:{waMutationObserver:"waMutationObserver"},exportAs:["MutationObserver"],features:[e._Bn([{provide:d,deps:[e.SBq],useFactory:g}]),e.qOj]}),t})();var b=s(2057);function v(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1,"I am dynamically added DOM element"),e.qZA())}function O(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1,"See console for logged mutations"),e.qZA())}let p=(()=>{class t{constructor(){this.toggled=!1,this.disabled=null,this.title="title",this.text="text",this.ignored="Ignored aria-label attribute"}toggleDOM(){this.toggled=!this.toggled}toggleAttr(){this.disabled=!this.disabled||null}log(i){console.info(i)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["mutation-observer-page"]],decls:13,vars:9,consts:[["type","button",3,"click"],["type","text","aria-label","title",3,"ngModel","ngModelChange"],["type","text","aria-label","text",3,"ngModel","ngModelChange"],["type","text","aria-label","ignored",3,"ngModel","ngModelChange"],["subtree","","childList","","characterData","","attributeFilter","title, disabled",1,"observer",3,"title","waMutationObserver"],[4,"ngIf","ngIfElse"],["default",""]],template:function(i,r){if(1&i&&(e.TgZ(0,"p"),e.TgZ(1,"button",0),e.NdJ("click",function(){return r.toggleDOM()}),e._uU(2,"Toggle DOM change"),e.qZA(),e.TgZ(3,"button",0),e.NdJ("click",function(){return r.toggleAttr()}),e._uU(4,"Toggle attribute"),e.qZA(),e.TgZ(5,"input",1),e.NdJ("ngModelChange",function(a){return r.title=a}),e.qZA(),e.TgZ(6,"input",2),e.NdJ("ngModelChange",function(a){return r.text=a}),e.qZA(),e.TgZ(7,"input",3),e.NdJ("ngModelChange",function(a){return r.ignored=a}),e.qZA(),e.qZA(),e.TgZ(8,"div",4),e.NdJ("waMutationObserver",function(a){return r.log(a)}),e._uU(9),e.YNc(10,v,2,0,"div",5),e.YNc(11,O,2,0,"ng-template",null,6,e.W1O),e.qZA()),2&i){const o=e.MAs(12);e.xp6(5),e.Q6J("ngModel",r.title),e.xp6(1),e.Q6J("ngModel",r.text),e.xp6(1),e.Q6J("ngModel",r.ignored),e.xp6(1),e.Q6J("title",r.title),e.uIk("disabled",r.disabled)("aria-label",r.ignored),e.xp6(1),e.hij(' I am being observed for text changes, DOM changes and "title" and "disabled" attributes: ',r.text," "),e.xp6(1),e.Q6J("ngIf",r.toggled)("ngIfElse",o)}},directives:[l.Fj,l.JJ,l.On,M,b.O5],styles:["[_nghost-%COMP%]{perspective:150vw;user-select:none;flex-direction:column;align-items:center}.observer[_ngcontent-%COMP%]{background:skyblue;border-radius:16px;padding:40px}"],changeDetection:0}),t})();var f=s(6618);let m=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})(),_=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[b.ez,l.u5,m,f.Bz.forChild([{path:"",component:p}])]]}),t})()}}]);