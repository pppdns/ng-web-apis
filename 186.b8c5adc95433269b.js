"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[186],{59186:(I,T,e)=>{e.r(T),e.d(T,{default:()=>v});var i=e(86889),u=e(88692),g=e(69900),_=e(243),C=e(12628),E=e(95974),r=e(441),l=e(21673),t=e(64537);function a(p,h){1&p&&(t.TgZ(0,"div"),t._uU(1,"I am dynamically added DOM element"),t.qZA())}function b(p,h){1&p&&(t.TgZ(0,"div"),t._uU(1,"See console for logged mutations"),t.qZA())}let v=(()=>{var p;class h{constructor(){(0,i.Z)(this,"toggled",!1),(0,i.Z)(this,"disabled",null),(0,i.Z)(this,"title","title"),(0,i.Z)(this,"text","text"),(0,i.Z)(this,"ignored","Ignored aria-label attribute")}toggleDOM(){this.toggled=!this.toggled}toggleAttr(){this.disabled=!this.disabled||null}log(m){console.info(m)}}return p=h,(0,i.Z)(h,"\u0275fac",function(m){return new(m||p)}),(0,i.Z)(h,"\u0275cmp",t.Xpm({type:p,selectors:[["mutation-observer-page"]],standalone:!0,features:[t.jDz],decls:14,vars:10,consts:[["tuiGroup",""],["appearance","secondary","size","m","tuiButton","",3,"click"],["tuiGroup","","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["aria-label","title",3,"ngModel","ngModelChange"],["aria-label","text",3,"ngModel","ngModelChange"],["aria-label","ignored",3,"ngModel","ngModelChange"],["attributeFilter","title, disabled","characterData","","childList","","subtree","",1,"observer",3,"title","waMutationObserver"],[4,"ngIf","ngIfElse"],["default",""]],template:function(m,s){if(1&m&&(t.TgZ(0,"p",0)(1,"button",1),t.NdJ("click",function(){return s.toggleDOM()}),t._uU(2," Toggle DOM change "),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return s.toggleAttr()}),t._uU(4," Toggle attribute "),t.qZA()(),t.TgZ(5,"p",2)(6,"tui-input",3),t.NdJ("ngModelChange",function(O){return s.title=O}),t.qZA(),t.TgZ(7,"tui-input",4),t.NdJ("ngModelChange",function(O){return s.text=O}),t.qZA(),t.TgZ(8,"tui-input",5),t.NdJ("ngModelChange",function(O){return s.ignored=O}),t.qZA()(),t.TgZ(9,"div",6),t.NdJ("waMutationObserver",function(O){return s.log(O)}),t._uU(10),t.YNc(11,a,2,0,"div",7),t.YNc(12,b,2,0,"ng-template",null,8,t.W1O),t.qZA()),2&m){const M=t.MAs(13);t.xp6(5),t.Q6J("tuiTextfieldLabelOutside",!0),t.xp6(1),t.Q6J("ngModel",s.title),t.xp6(1),t.Q6J("ngModel",s.text),t.xp6(1),t.Q6J("ngModel",s.ignored),t.xp6(1),t.Q6J("title",s.title),t.uIk("aria-label",s.ignored)("disabled",s.disabled),t.xp6(1),t.hij(' I am being observed for text changes, DOM changes and "title" and "disabled" attributes: ',s.text," "),t.xp6(1),t.Q6J("ngIf",s.toggled)("ngIfElse",M)}},dependencies:[u.ez,u.O5,g.u5,g.JJ,g.On,C.fN,C.v0,E.n6,E.gZ,l.Qf,l.K3,l.wU,_.Vi,r.cn,r.xT,r.sz],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}.observer[_ngcontent-%COMP%]{background:skyblue;border-radius:16px;padding:40px}"],changeDetection:0})),h})()},243:(I,T,e)=>{e.d(T,{k2:()=>g,Vi:()=>E,IM:()=>l});var i=e(86889),u=e(64537);const g=new u.OlP("[MUTATION_OBSERVER_INIT]: MutationObserver config");function _(t,a){return null!==t.getAttribute(a)||void 0}function C({nativeElement:t}){const a=t.getAttribute("attributeFilter");return{attributeFilter:null==a?void 0:a.split(",").map(b=>b.trim()),attributeOldValue:_(t,"attributeOldValue"),attributes:_(t,"attributes"),characterData:_(t,"characterData"),characterDataOldValue:_(t,"characterDataOldValue"),childList:_(t,"childList"),subtree:_(t,"subtree")}}let E=(()=>{var t;class a extends MutationObserver{constructor({nativeElement:v},p,h,P,m,s,M,O,d){super(c=>{this.waMutationObserver.emit(c)}),(0,i.Z)(this,"waMutationObserver",new u.vpe),this.observe(v,p)}ngOnDestroy(){this.disconnect()}}return t=a,(0,i.Z)(a,"\u0275fac",function(v){return new(v||t)(u.Y36(u.SBq),u.Y36(g),u.$8M("attributeFilter"),u.$8M("attributeOldValue"),u.$8M("attributes"),u.$8M("characterData"),u.$8M("characterDataOldValue"),u.$8M("childList"),u.$8M("subtree"))}),(0,i.Z)(a,"\u0275dir",u.lG2({type:t,selectors:[["","waMutationObserver",""]],outputs:{waMutationObserver:"waMutationObserver"},exportAs:["MutationObserver"],standalone:!0,features:[u._Bn([{provide:g,deps:[u.SBq],useFactory:C}]),u.qOj]})),a})();var r=e(87241);let l=(()=>{var t;class a extends r.y{constructor({nativeElement:v},p){super(h=>{const P=new MutationObserver(m=>{h.next(m)});return P.observe(v,p),()=>{P.disconnect()}})}}return t=a,(0,i.Z)(a,"\u0275fac",function(v){return new(v||t)(u.LFG(u.SBq),u.LFG(g))}),(0,i.Z)(a,"\u0275prov",u.Yz7({token:t,factory:t.\u0275fac})),a})()},95974:(I,T,e)=>{e.d(T,{gZ:()=>C,n6:()=>E});var i=e(64537),u=e(87786),g=e(88692);let _=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=i.Xpm({type:r,selectors:[["ng-component"]],hostAttrs:[1,"tui-group-styles"],decls:0,vars:0,template:function(t,a){},styles:[".tui-group{position:relative;display:flex;isolation:isolate}.tui-group>*{flex:1 1 0;min-width:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin-right:-1px}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-height:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-bottom-left-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:last-child{border-top-right-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--tui-radius-m);border-top-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-top-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:last-child{border-bottom-left-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-m)}}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_vertical{width:100%}.tui-group_adaptive.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical>*:not(:last-child){margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_horizontal{flex-direction:column;width:100%}.tui-group_adaptive.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal>*:not(:last-child){margin-right:0;margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}.tui-group__auto-width-item{min-width:auto;flex:0 0 auto}.tui-group .tui-group__inherit-item{border-radius:inherit}\n"],encapsulation:2,changeDetection:0}),r})(),C=(()=>{class r{constructor(t){this.orientation="horizontal",this.adaptive=!1,this.collapsed=!1,this.rounded=!0,this.size="m",t.addComponent(_)}get orientationHorizontal(){return"horizontal"===this.orientation}get orientationVertical(){return"vertical"===this.orientation}get sizeLarge(){return"l"===this.size}}return r.\u0275fac=function(t){return new(t||r)(i.Y36(u.gH))},r.\u0275dir=i.lG2({type:r,selectors:[["","tuiGroup","",5,"ng-container"]],hostAttrs:["role","group",1,"tui-group"],hostVars:12,hostBindings:function(t,a){2&t&&i.ekj("tui-group_adaptive",a.adaptive)("tui-group_collapsed",a.collapsed)("tui-group_rounded",a.rounded)("tui-group_orientation_horizontal",a.orientationHorizontal)("tui-group_orientation_vertical",a.orientationVertical)("tui-group_radius_large",a.sizeLarge)},inputs:{orientation:"orientation",adaptive:"adaptive",collapsed:"collapsed",rounded:"rounded",size:"size"}}),r})(),E=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({imports:[[g.ez]]}),r})()},21673:(I,T,e)=>{e.d(T,{K3:()=>s,Qf:()=>O,wU:()=>M});var i=e(64537),u=e(69900),g=e(221),_=e(76480),C=e(57179),E=e(68033),r=e(85600),l=e(85640),t=e(441),a=e(75111),b=e(76060),v=e(43631),p=e(30026),h=e(88692);const P=["*",[["input"]]],m=["*","input"];let s=(()=>{class d extends _.M${constructor(o,n,f,D){super(o,n,D),this.textfieldSize=f,this.open=!1}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return(0,C.V8)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get canOpen(){return this.interactive&&!!this.datalist}onValueChange(o){this.value=o,this.open=!0}onActiveZone(o){this.updateFocused(o)}handleOption(o){this.setNativeValue(String(o)),this.focusInput(),this.value=String(o),this.open=!1}getFallbackValue(){return""}focusInput(o=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:o})}setNativeValue(o){this.nativeFocusableElement&&(this.nativeFocusableElement.value=o)}}return d.\u0275fac=function(o){return new(o||d)(i.Y36(u.a5,10),i.Y36(i.sBO),i.Y36(t.kI),i.Y36(_.FX,8))},d.\u0275cmp=i.Xpm({type:d,selectors:[["tui-input"]],contentQueries:function(o,n,f){if(1&o&&i.Suo(f,a.gX,5,i.Rgc),2&o){let D;i.iGM(D=i.CRH())&&(n.datalist=D.first)}},viewQuery:function(o,n){if(1&o&&(i.Gf(r.o1,5),i.Gf(l.yc,5)),2&o){let f;i.iGM(f=i.CRH())&&(n.hostedDropdown=f.first),i.iGM(f=i.CRH())&&(n.textfield=f.first)}},hostVars:1,hostBindings:function(o,n){2&o&&i.uIk("data-size",n.size)},features:[i._Bn([p.E2,(0,E.FT)(d),(0,b.oE)(d),(0,_.wB)(d)],[p.yn]),i.qOj],ngContentSelectors:m,decls:4,vars:11,consts:[[1,"t-hosted",3,"canOpen","content","open","openChange","tuiActiveZoneChange"],["automation-id","tui-input__textfield",1,"t-textfield",3,"disabled","focusable","invalid","nativeId","pseudoFocus","pseudoHover","readOnly","value","valueChange"]],template:function(o,n){1&o&&(i.F$t(P),i.TgZ(0,"tui-hosted-dropdown",0),i.NdJ("openChange",function(D){return n.open=D})("tuiActiveZoneChange",function(D){return n.onActiveZone(D)}),i.TgZ(1,"tui-primitive-textfield",1),i.NdJ("valueChange",function(D){return n.onValueChange(D)}),i.Hsn(2),i.Hsn(3,1,["ngProjectAs","input",5,["input"]]),i.qZA()()),2&o&&(i.Q6J("canOpen",n.canOpen)("content",n.datalist||"")("open",n.open),i.xp6(1),i.Q6J("disabled",n.computedDisabled)("focusable",n.computedFocusable)("invalid",n.computedInvalid)("nativeId",n.nativeId)("pseudoFocus",n.computedFocused)("pseudoHover",n.pseudoHover)("readOnly",n.readOnly)("value",n.value))},dependencies:[r.o1,l.yc,g.e,l.B1],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),d})(),M=(()=>{class d extends v.D1{onValueChange(o){this.host.onValueChange(o)}}return d.\u0275fac=function(){let c;return function(n){return(c||(c=i.n5z(d)))(n||d)}}(),d.\u0275dir=i.lG2({type:d,selectors:[["tui-input"]],features:[i._Bn([(0,b.cp)(d)]),i.qOj]}),d})(),O=(()=>{class d{}return d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({imports:[[h.ez,g.A,l.KW,r.jh]]}),d})()}}]);