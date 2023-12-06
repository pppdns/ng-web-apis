"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[889],{42889:(I,v,o)=>{o.r(v),o.d(v,{MutationObserverPageModule:()=>E});var i=o(88692),l=o(69900),c=o(22864),m=o(14194),f=o(12628),d=o(95974),e=o(441),a=o(21673),t=o(64537),s=o(63132);function C(p,M){1&p&&(t.TgZ(0,"div"),t._uU(1,"I am dynamically added DOM element"),t.qZA())}function y(p,M){1&p&&(t.TgZ(0,"div"),t._uU(1,"See console for logged mutations"),t.qZA())}let T=(()=>{var p;class M{constructor(){this.toggled=!1,this.disabled=null,this.title="title",this.text="text",this.ignored="Ignored aria-label attribute"}toggleDOM(){this.toggled=!this.toggled}toggleAttr(){this.disabled=!this.disabled||null}log(h){console.info(h)}}return(p=M).\u0275fac=function(h){return new(h||p)},p.\u0275cmp=t.Xpm({type:p,selectors:[["mutation-observer-page"]],decls:14,vars:10,consts:[["tuiGroup",""],["appearance","secondary","size","m","tuiButton","",3,"click"],["tuiGroup","","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["aria-label","title",3,"ngModel","ngModelChange"],["aria-label","text",3,"ngModel","ngModelChange"],["aria-label","ignored",3,"ngModel","ngModelChange"],["attributeFilter","title, disabled","characterData","","childList","","subtree","",1,"observer",3,"title","waMutationObserver"],[4,"ngIf","ngIfElse"],["default",""]],template:function(h,g){if(1&h&&(t.TgZ(0,"p",0)(1,"button",1),t.NdJ("click",function(){return g.toggleDOM()}),t._uU(2," Toggle DOM change "),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return g.toggleAttr()}),t._uU(4," Toggle attribute "),t.qZA()(),t.TgZ(5,"p",2)(6,"tui-input",3),t.NdJ("ngModelChange",function(_){return g.title=_}),t.qZA(),t.TgZ(7,"tui-input",4),t.NdJ("ngModelChange",function(_){return g.text=_}),t.qZA(),t.TgZ(8,"tui-input",5),t.NdJ("ngModelChange",function(_){return g.ignored=_}),t.qZA()(),t.TgZ(9,"div",6),t.NdJ("waMutationObserver",function(_){return g.log(_)}),t._uU(10),t.YNc(11,C,2,0,"div",7),t.YNc(12,y,2,0,"ng-template",null,8,t.W1O),t.qZA()),2&h){const r=t.MAs(13);t.xp6(5),t.Q6J("tuiTextfieldLabelOutside",!0),t.xp6(1),t.Q6J("ngModel",g.title),t.xp6(1),t.Q6J("ngModel",g.text),t.xp6(1),t.Q6J("ngModel",g.ignored),t.xp6(1),t.Q6J("title",g.title),t.uIk("aria-label",g.ignored)("disabled",g.disabled),t.xp6(1),t.hij(' I am being observed for text changes, DOM changes and "title" and "disabled" attributes: ',g.text," "),t.xp6(1),t.Q6J("ngIf",g.toggled)("ngIfElse",r)}},dependencies:[i.O5,l.JJ,l.On,s.V,f.v0,d.gZ,a.K3,a.wU,e.xT,e.sz],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}.observer[_ngcontent-%COMP%]{background:skyblue;border-radius:16px;padding:40px}"],changeDetection:0}),M})(),E=(()=>{var p;class M{}return(p=M).\u0275fac=function(h){return new(h||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[i.ez,l.u5,m.NI,f.fN,d.n6,a.Qf,e.cn,c.Bz.forChild([{path:"",component:T}])]}),M})()},63132:(I,v,o)=>{o.d(v,{V:()=>f});var i=o(64537),l=o(6348);function c(d,e){return null!==d.getAttribute(e)||void 0}function m({nativeElement:d}){const e=d.getAttribute("attributeFilter");return{attributeFilter:null==e?void 0:e.split(",").map(a=>a.trim()),attributeOldValue:c(d,"attributeOldValue"),attributes:c(d,"attributes"),characterData:c(d,"characterData"),characterDataOldValue:c(d,"characterDataOldValue"),childList:c(d,"childList"),subtree:c(d,"subtree")}}let f=(()=>{var d;class e extends MutationObserver{constructor({nativeElement:t},s,C,y,T,E,p,M,D){super(h=>{this.waMutationObserver.emit(h)}),this.waMutationObserver=new i.vpe,this.observe(t,s)}ngOnDestroy(){this.disconnect()}}return(d=e).\u0275fac=function(t){return new(t||d)(i.Y36(i.SBq),i.Y36(l.k),i.$8M("attributeFilter"),i.$8M("attributeOldValue"),i.$8M("attributes"),i.$8M("characterData"),i.$8M("characterDataOldValue"),i.$8M("childList"),i.$8M("subtree"))},d.\u0275dir=i.lG2({type:d,selectors:[["","waMutationObserver",""]],outputs:{waMutationObserver:"waMutationObserver"},exportAs:["MutationObserver"],features:[i._Bn([{provide:l.k,deps:[i.SBq],useFactory:m}]),i.qOj]}),e})()},14194:(I,v,o)=>{o.d(v,{k2:()=>f.k,NI:()=>c,IM:()=>d}),o(63132);var l=o(64537);let c=(()=>{var e;class a{}return(e=a).\u0275fac=function(s){return new(s||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({}),a})();var m=o(87241),f=o(6348);let d=(()=>{var e;class a extends m.y{constructor({nativeElement:s},C){super(y=>{const T=new MutationObserver(E=>{y.next(E)});return T.observe(s,C),()=>{T.disconnect()}})}}return(e=a).\u0275fac=function(s){return new(s||e)(l.LFG(l.SBq),l.LFG(f.k))},e.\u0275prov=l.Yz7({token:e,factory:e.\u0275fac}),a})()},6348:(I,v,o)=>{o.d(v,{k:()=>l});const l=new(o(64537).OlP)("[MUTATION_OBSERVER_INIT]: MutationObserver config")},95974:(I,v,o)=>{o.d(v,{gZ:()=>f,n6:()=>d});var i=o(64537),l=o(87786),c=o(88692);let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["ng-component"]],hostAttrs:[1,"tui-group-styles"],decls:0,vars:0,template:function(t,s){},styles:[".tui-group{position:relative;display:flex;isolation:isolate}.tui-group>*{flex:1 1 0;min-width:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin-right:-1px}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-height:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-bottom-left-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:last-child{border-top-right-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--tui-radius-m);border-top-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-top-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:last-child{border-bottom-left-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-m)}}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_vertical{width:100%}.tui-group_adaptive.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical>*:not(:last-child){margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_horizontal{flex-direction:column;width:100%}.tui-group_adaptive.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal>*:not(:last-child){margin-right:0;margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}.tui-group__auto-width-item{min-width:auto;flex:0 0 auto}.tui-group .tui-group__inherit-item{border-radius:inherit}\n"],encapsulation:2,changeDetection:0}),e})(),f=(()=>{class e{constructor(t){this.orientation="horizontal",this.adaptive=!1,this.collapsed=!1,this.rounded=!0,this.size="m",t.addComponent(m)}get orientationHorizontal(){return"horizontal"===this.orientation}get orientationVertical(){return"vertical"===this.orientation}get sizeLarge(){return"l"===this.size}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(l.gH))},e.\u0275dir=i.lG2({type:e,selectors:[["","tuiGroup","",5,"ng-container"]],hostAttrs:["role","group",1,"tui-group"],hostVars:12,hostBindings:function(t,s){2&t&&i.ekj("tui-group_adaptive",s.adaptive)("tui-group_collapsed",s.collapsed)("tui-group_rounded",s.rounded)("tui-group_orientation_horizontal",s.orientationHorizontal)("tui-group_orientation_vertical",s.orientationVertical)("tui-group_radius_large",s.sizeLarge)},inputs:{orientation:"orientation",adaptive:"adaptive",collapsed:"collapsed",rounded:"rounded",size:"size"}}),e})(),d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[c.ez]]}),e})()},21673:(I,v,o)=>{o.d(v,{K3:()=>D,Qf:()=>g,wU:()=>h});var i=o(64537),l=o(69900),c=o(221),m=o(76480),f=o(57179),d=o(68033),e=o(85600),a=o(85640),t=o(441),s=o(75111),C=o(76060),y=o(43631),T=o(30026),E=o(88692);const p=["*",[["input"]]],M=["*","input"];let D=(()=>{class r extends m.M${constructor(u,n,b,O){super(u,n,O),this.textfieldSize=b,this.open=!1}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return(0,f.V8)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get canOpen(){return this.interactive&&!!this.datalist}onValueChange(u){this.value=u,this.open=!0}onActiveZone(u){this.updateFocused(u)}handleOption(u){this.setNativeValue(String(u)),this.focusInput(),this.value=String(u),this.open=!1}getFallbackValue(){return""}focusInput(u=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:u})}setNativeValue(u){this.nativeFocusableElement&&(this.nativeFocusableElement.value=u)}}return r.\u0275fac=function(u){return new(u||r)(i.Y36(l.a5,10),i.Y36(i.sBO),i.Y36(t.kI),i.Y36(m.FX,8))},r.\u0275cmp=i.Xpm({type:r,selectors:[["tui-input"]],contentQueries:function(u,n,b){if(1&u&&i.Suo(b,s.gX,5,i.Rgc),2&u){let O;i.iGM(O=i.CRH())&&(n.datalist=O.first)}},viewQuery:function(u,n){if(1&u&&(i.Gf(e.o1,5),i.Gf(a.yc,5)),2&u){let b;i.iGM(b=i.CRH())&&(n.hostedDropdown=b.first),i.iGM(b=i.CRH())&&(n.textfield=b.first)}},hostVars:1,hostBindings:function(u,n){2&u&&i.uIk("data-size",n.size)},features:[i._Bn([T.E2,(0,d.FT)(r),(0,C.oE)(r),(0,m.wB)(r)],[T.yn]),i.qOj],ngContentSelectors:M,decls:4,vars:11,consts:[[1,"t-hosted",3,"canOpen","content","open","openChange","tuiActiveZoneChange"],["automation-id","tui-input__textfield",1,"t-textfield",3,"disabled","focusable","invalid","nativeId","pseudoFocus","pseudoHover","readOnly","value","valueChange"]],template:function(u,n){1&u&&(i.F$t(p),i.TgZ(0,"tui-hosted-dropdown",0),i.NdJ("openChange",function(O){return n.open=O})("tuiActiveZoneChange",function(O){return n.onActiveZone(O)}),i.TgZ(1,"tui-primitive-textfield",1),i.NdJ("valueChange",function(O){return n.onValueChange(O)}),i.Hsn(2),i.Hsn(3,1,["ngProjectAs","input",5,["input"]]),i.qZA()()),2&u&&(i.Q6J("canOpen",n.canOpen)("content",n.datalist||"")("open",n.open),i.xp6(1),i.Q6J("disabled",n.computedDisabled)("focusable",n.computedFocusable)("invalid",n.computedInvalid)("nativeId",n.nativeId)("pseudoFocus",n.computedFocused)("pseudoHover",n.pseudoHover)("readOnly",n.readOnly)("value",n.value))},dependencies:[e.o1,a.yc,c.e,a.B1],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),r})(),h=(()=>{class r extends y.D1{onValueChange(u){this.host.onValueChange(u)}}return r.\u0275fac=function(){let _;return function(n){return(_||(_=i.n5z(r)))(n||r)}}(),r.\u0275dir=i.lG2({type:r,selectors:[["tui-input"]],features:[i._Bn([(0,C.cp)(r)]),i.qOj]}),r})(),g=(()=>{class r{}return r.\u0275fac=function(u){return new(u||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({imports:[[E.ez,c.A,a.KW,e.jh]]}),r})()}}]);