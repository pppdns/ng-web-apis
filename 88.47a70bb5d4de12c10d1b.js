"use strict";(self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[]).push([[88],{35575:(Q,E,s)=>{s.d(E,{Ii:()=>N,Mt:()=>G,_j:()=>D});var t=s(74788),_=s(54789),y=s(66640),S=s(39505),P=s(441),g=s(89570),h=s(11927),O=s(12057);function x(p,f){1&p&&t._UZ(0,"tui-svg",2),2&p&&t.Q6J("src",f.polymorpheusOutlet)}function M(p,f){1&p&&t.GkF(0)}const D=(0,h.JN)({iconSmall:"tuiIconChevronDown",iconLarge:"tuiIconChevronDownLarge"}),L=new g.Al((()=>{class p{constructor(v,T,H){this.dropdown=v,this.textfieldSize=T,this.options=H}get rotated(){return this.dropdown.open}get arrowIcon(){return(0,y.R9)(this.textfieldSize.size)?this.options.iconLarge:this.options.iconSmall}}return p.\u0275fac=function(v){return new(v||p)(t.Y36(S.o1),t.Y36(P.kI),t.Y36(D))},p.\u0275cmp=t.Xpm({type:p,selectors:[["tui-arrow"]],hostVars:2,hostBindings:function(v,T){2&v&&t.ekj("_rotated",T.rotated)},decls:3,vars:4,consts:[[3,"src",4,"polymorpheusOutlet"],[4,"ngIf"],[3,"src"]],template:function(v,T){1&v&&(t.YNc(0,x,1,1,"tui-svg",0),t.YNc(1,M,1,0,"ng-container",1),t.ALo(2,"async")),2&v&&(t.Q6J("polymorpheusOutlet",T.arrowIcon),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,T.dropdown.openChange)))},directives:[g.Li,O.O5,_.PN],pipes:[O.Ov],styles:["[_nghost-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}._rotated[_nghost-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),p})());let G=(()=>{class p{}return p.\u0275fac=function(v){return new(v||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[[O.ez,_.EI,g.wq]]}),p})();const N=(0,h.JN)({interactive:L,disabled:L})},62662:(Q,E,s)=>{s.d(E,{eC:()=>Y,zX:()=>k});var t=s(74788),_=s(75111),y=s(40719),S=s(441),P=s(4022),g=s(16282);let h=(()=>{class o{constructor({nativeElement:r}){return new t.SBq(r)}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(t.SBq))},o.\u0275dir=t.lG2({type:o,selectors:[["","tuiElement",""]],exportAs:["elementRef"]}),o})(),O=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({}),o})();var x=s(33770),M=s(57179),I=s(11927),D=s(12057),F=s(89570);function p(o,l){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const r=l.polymorpheusOutlet;t.xp6(1),t.hij(" ",r," ")}}function f(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"button",4,5),t.NdJ("click",function(){const W=t.CHM(r).$implicit;return t.oxw(2).itemClick.emit(W)}),t.TgZ(2,"span",6),t.YNc(3,p,2,1,"ng-container",7),t.qZA(),t.qZA()}if(2&o){const r=l.$implicit,c=t.MAs(1),d=t.oxw(2);t.Q6J("disabled",d.disabledItemHandler(r))("value",r),t.xp6(3),t.Q6J("polymorpheusOutlet",d.itemContent)("polymorpheusOutletContext",d.getContext(r,c))}}function v(o,l){if(1&o&&(t.TgZ(0,"tui-data-list",2),t.YNc(1,f,4,4,"button",3),t.qZA()),2&o){const r=t.oxw();t.Q6J("emptyContent",r.emptyContent)("size",r.size),t.xp6(1),t.Q6J("ngForOf",r.items)}}function T(o,l){1&o&&t._UZ(0,"tui-loader",8)}let B=(()=>{class o{constructor(r,c){this.itemsHandlers=r,this.defaultSize=c,this.optionsQuery=x.Mm,this.disabledItemHandler=this.itemsHandlers.disabledItemHandler,this.size=this.defaultSize,this.itemClick=new t.vpe,this.itemContent=({$implicit:d})=>this.itemsHandlers.stringify(d)}getContext(r,{nativeElement:c}){return{$implicit:r,active:(0,M.V8)(c)}}getOptions(r=!1){return this.optionsQuery.filter(({disabled:c})=>r||!c).map(({value:c})=>c).filter(I.Pc)}}return o.\u0275fac=function(r){t.$Z()},o.\u0275dir=t.lG2({type:o,viewQuery:function(r,c){if(1&r&&t.Gf(_.vK,5),2&r){let d;t.iGM(d=t.CRH())&&(c.optionsQuery=d)}},inputs:{disabledItemHandler:"disabledItemHandler",emptyContent:"emptyContent",size:"size",itemContent:"itemContent"},outputs:{itemClick:"itemClick"}}),o})(),Y=(()=>{class o extends B{constructor(r,c){super(r,(null==c?void 0:c.size)||"m"),this.items=[]}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(g.Ys),t.Y36(S.Cs,8))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-data-list-wrapper",3,"labels",""]],inputs:{items:"items"},features:[t._Bn([(0,P.RB)(o),S.Y0]),t.qOj],decls:3,vars:2,consts:[[3,"emptyContent","size",4,"ngIf","ngIfElse"],["loading",""],[3,"emptyContent","size"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","",3,"disabled","value","click",4,"ngFor","ngForOf"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","",3,"disabled","value","click"],["elementRef","elementRef"],[1,"t-content"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-data-list-wrapper__loader",1,"t-loader"]],template:function(r,c){if(1&r&&(t.YNc(0,v,2,3,"tui-data-list",0),t.YNc(1,T,1,0,"ng-template",null,1,t.W1O)),2&r){const d=t.MAs(2);t.Q6J("ngIf",c.items)("ngIfElse",d)}},directives:[D.O5,_.qi,D.sg,_.vK,h,F.Li,y.kM],styles:["[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}"],changeDetection:0}),o})(),k=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[D.ez,F.wq,O,_.pc,y.dS]]}),o})()},41088:(Q,E,s)=>{s.d(E,{uJ:()=>ft,OI:()=>_t,Jy:()=>gt});var t=s(74788),_=s(39505),y=s(81620),S=s(441),P=s(91489),g=s(75111),h=s(4022),O=s(43631),x=s(76480),M=s(71552),I=s(16282);let D=(()=>{class i{constructor(e,n,u,m,w){this.host=e,this.control=n,this.el=u,this.idService=m,this.itemsHandlers=w,this.disabledItemHandler=null,this.datalist=null}get id(){return this.el.nativeElement.id||this.idService.generate()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h.S0),t.Y36(x.M$),t.Y36(t.SBq),t.Y36(M.ll),t.Y36(I.Ys))},i.\u0275dir=t.lG2({type:i,viewQuery:function(e,n){if(1&e&&t.Gf(g.gX,7,t.Rgc),2&e){let u;t.iGM(u=t.CRH())&&(n.datalist=u.first)}},hostVars:1,hostBindings:function(e,n){2&e&&t.Ikx("id",n.id)},inputs:{disabledItemHandler:"disabledItemHandler"}}),i})();var F=s(62662),C=s(12057);let G=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({}),i})();var b=s(81422),N=s(221),A=s(11927),p=s(57179),f=s(13034),v=s(35575),T=s(2325),H=s(33770),B=s(54789),U=s(18269),Y=s(18946),k=s(13528);let o=(()=>{class i{constructor(e,n){this.el=e,this.destroy$=n}set tuiScrollIntoView(e){!e||(0,Y.H)(0).pipe((0,k.R)(this.destroy$)).subscribe(()=>{this.el.nativeElement.dispatchEvent(new CustomEvent(U.fe,{bubbles:!0,detail:this.el.nativeElement}))})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(M.a3,2))},i.\u0275dir=t.lG2({type:i,selectors:[["","tuiScrollIntoView",""]],inputs:{tuiScrollIntoView:"tuiScrollIntoView"},features:[t._Bn([M.a3])]}),i})(),l=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({}),i})();var r=s(89570),c=s(9359),d=s(21860),W=s(9018),R=s(51927),j=s(27969),K=s(42147);function X(i,a){if(1&i&&t._UZ(0,"tui-svg",3),2&i){const e=t.oxw();t.Q6J("src",e.icons.check)("tuiScrollIntoView",!0)}}function q(i,a){1&i&&t._UZ(0,"span",4)}const et=new r.Al((()=>{class i{constructor(e,n,u,m,w,z,V,J){this.icons=e,this.context=n,this.host=u,this.el=m,this.option=w,this.dataList=z,this.control=V,this.abstractControl=J,this.changeDetection$=new c.x,this.selected$=(0,d.T)(this.changeDetection$,this.control.valueChanges||W.E,(0,T.mL)(this.el.nativeElement,"animationstart")).pipe((0,R.O)(null),(0,j.U)(()=>this.selected),(0,K.x)())}get matcher(){return this.host.identityMatcher||H.bg}ngOnInit(){Promise.resolve().then(()=>{var e,n;(0,A.Pc)(this.option.value)&&!this.option.disabled&&(null===(n=(e=this.host).checkOption)||void 0===n||n.call(e,this.option.value))})}ngDoCheck(){this.changeDetection$.next()}get value(){var e,n;return null!==(n=null===(e=this.abstractControl)||void 0===e?void 0:e.value)&&void 0!==n?n:this.control.value}get selected(){return(0,A.Pc)(this.option.value)&&(0,A.Pc)(this.value)&&this.matcher(this.value,this.option.value)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h.Gs),t.Y36(r.yf),t.Y36(h.N1),t.Y36(t.SBq),t.Y36(g.vK),t.Y36(g.qi,8),t.Y36(b.a5),t.Y36(x.M$,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-select-option"]],decls:5,vars:5,consts:[[3,"ngTemplateOutlet"],["automation-id","tui-select-option__checkmark","class","t-checkmark",3,"src","tuiScrollIntoView",4,"ngIf","ngIfElse"],["dummy",""],["automation-id","tui-select-option__checkmark",1,"t-checkmark",3,"src","tuiScrollIntoView"],[1,"t-dummy"]],template:function(e,n){if(1&e&&(t.GkF(0,0),t.YNc(1,X,1,2,"tui-svg",1),t.ALo(2,"async"),t.YNc(3,q,1,0,"ng-template",null,2,t.W1O)),2&e){const u=t.MAs(4);t.Q6J("ngTemplateOutlet",n.context.$implicit),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,3,n.selected$))("ngIfElse",u)}},directives:[C.tP,C.O5,B.PN,o],pipes:[C.Ov],styles:['@keyframes retrigger{0%{left:1px}to{left:2px}}[_nghost-%COMP%]{display:flex;flex:1;align-items:center;max-width:100%;animation:retrigger 1s}.t-checkmark[_ngcontent-%COMP%]{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-border-start:.25rem solid transparent;border-inline-start:.25rem solid transparent}tui-data-list[data-list-size="s"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-list-size="s"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{-webkit-margin-end:-.375rem;margin-inline-end:-.375rem}tui-data-list[data-list-size="m"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-list-size="m"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{-webkit-margin-end:-.125rem;margin-inline-end:-.125rem}.t-dummy[_ngcontent-%COMP%]{width:1.75rem}'],changeDetection:0}),i})());let it=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[C.ez,B.EI,l]]}),i})();var nt=s(10620);function at(i,a){1&i&&t.Hsn(0,2,["*ngIf","isMobile"])}function rt(i,a){if(1&i&&t.YNc(0,at,1,0,"ng-content",6),2&i){const e=t.oxw();t.Q6J("ngIf",e.isMobile)}}function st(i,a){1&i&&t.GkF(0,7)}function lt(i,a){1&i&&t._UZ(0,"div",10),2&i&&t.Q6J("textContent",a.polymorpheusOutlet)}const ut=function(i,a){return{$implicit:i,active:a}};function ct(i,a){if(1&i&&(t.TgZ(0,"div",8),t.YNc(1,lt,1,1,"div",9),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("polymorpheusOutlet",e.computedContent)("polymorpheusOutletContext",t.WLB(2,ut,e.value,e.computedFocused))}}function pt(i,a){1&i&&t.GkF(0)}function dt(i,a){if(1&i&&(t.TgZ(0,"div",11),t.YNc(1,pt,1,0,"ng-container",12),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("polymorpheusOutlet",e.arrow)}}const mt=["*",[["input"]],[["select"]]],vt=["*","input","select"],Z=(0,A.JN)({valueContent:""});let ft=(()=>{class i extends x.F9{constructor(e,n,u,m,w,z,V,J){super(e,n),this.textfieldCleaner=u,this.textfieldSize=m,this.arrowMode=w,this.itemsHandlers=z,this.options=V,this.isMobile=J,this.stringify=this.itemsHandlers.stringify,this.identityMatcher=this.itemsHandlers.identityMatcher,this.valueContent=this.options.valueContent}get size(){return this.textfieldSize.size}get arrow(){return this.interactive?this.arrowMode.interactive:this.arrowMode.disabled}get nativeFocusableElement(){var e,n;return null!==(n=null===(e=this.textfield)||void 0===e?void 0:e.nativeFocusableElement)&&void 0!==n?n:null}get focused(){return(0,p.V8)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get nativeDropdownMode(){return!!this.nativeSelect&&this.isMobile}get computedValue(){return null===this.value?"":this.stringify(this.value)||" "}get computedContent(){return this.valueContent||this.computedValue}onValueChange(e){this.value=e||null}onActiveZone(e){this.updateFocused(e)}onKeyDownDelete(){this.textfieldCleaner.cleaner&&(this.value=null)}handleOption(e){var n;this.focusInput(),this.value=e,null===(n=this.hostedDropdown)||void 0===n||n.updateOpen(!1)}focusInput(e=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:e})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(b.a5,10),t.Y36(t.sBO),t.Y36(S.Ym),t.Y36(S.kI),t.Y36(v.Ii),t.Y36(I.Ys),t.Y36(Z),t.Y36(f.fL))},i.\u0275cmp=t.Xpm({type:i,selectors:[["tui-select"]],contentQueries:function(e,n,u){if(1&e&&(t.Suo(u,D,7),t.Suo(u,g.gX,5,t.Rgc)),2&e){let m;t.iGM(m=t.CRH())&&(n.nativeSelect=m.first),t.iGM(m=t.CRH())&&(n.datalist=m.first)}},viewQuery:function(e,n){if(1&e&&(t.Gf(y.yc,5),t.Gf(_.o1,5)),2&e){let u;t.iGM(u=t.CRH())&&(n.textfield=u.first),t.iGM(u=t.CRH())&&(n.hostedDropdown=u.first)}},hostVars:1,hostBindings:function(e,n){2&e&&t.uIk("data-size",n.size)},inputs:{stringify:"stringify",identityMatcher:"identityMatcher",valueContent:"valueContent"},features:[t._Bn([(0,f.FT)(i),(0,x.wB)(i),(0,h.oE)(i),(0,h.P7)(et)],[nt.yn]),t.qOj],ngContentSelectors:vt,decls:10,vars:15,consts:[[1,"t-hosted",3,"canOpen","content","tuiActiveZoneChange"],["automation-id","tui-select__textfield",1,"t-textfield",3,"disabled","editable","focusable","invalid","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldIcon","value","keydown.backspace.prevent","keydown.delete.prevent","valueChange"],["select",""],["ngProjectAs","select",5,["select"],4,"ngTemplateOutlet"],["automation-id","tui-select__value","ngProjectAs","tuiContent","class","t-value",5,["tuiContent"],4,"ngIf"],["icon",""],[4,"ngIf"],["ngProjectAs","select",5,["select"]],["automation-id","tui-select__value","ngProjectAs","tuiContent",5,["tuiContent"],1,"t-value"],["class","t-primitive-value",3,"textContent",4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-primitive-value",3,"textContent"],["appearance","icon","tuiWrapper","",1,"t-icon"],[4,"polymorpheusOutlet"]],template:function(e,n){if(1&e&&(t.F$t(mt),t.TgZ(0,"tui-hosted-dropdown",0),t.NdJ("tuiActiveZoneChange",function(m){return n.onActiveZone(m)}),t.TgZ(1,"tui-primitive-textfield",1),t.NdJ("keydown.backspace.prevent",function(){return n.onKeyDownDelete()})("keydown.delete.prevent",function(){return n.onKeyDownDelete()})("valueChange",function(m){return n.onValueChange(m)}),t.Hsn(2),t.Hsn(3,1,["ngProjectAs","input",5,["input"]]),t.YNc(4,rt,1,1,"ng-template",null,2,t.W1O),t.YNc(6,st,1,0,"ng-container",3),t.YNc(7,ct,2,5,"div",4),t.qZA(),t.YNc(8,dt,2,1,"ng-template",null,5,t.W1O),t.qZA()),2&e){const u=t.MAs(5),m=t.MAs(9);t.Q6J("canOpen",n.interactive&&!n.nativeDropdownMode)("content",n.datalist||""),t.xp6(1),t.Q6J("disabled",n.computedDisabled)("editable",!1)("focusable",n.computedFocusable)("invalid",n.computedInvalid)("nativeId",n.nativeId)("pseudoActive",n.pseudoActive)("pseudoFocus",n.computedFocused)("pseudoHover",n.pseudoHover)("readOnly",n.readOnly)("tuiTextfieldIcon",n.arrow?m:"")("value",n.computedValue),t.xp6(5),t.Q6J("ngTemplateOutlet",u),t.xp6(1),t.Q6J("ngIf",null!==n.value)}},directives:[_.o1,N.e,y.yc,y.B1,S.AW,C.tP,C.O5,r.Li,P.o],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}[_nghost-%COMP%]:not(._readonly)     input:not(:disabled){cursor:pointer}._readonly[_nghost-%COMP%]     input{cursor:default}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-value[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center}.t-primitive-value[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"],changeDetection:0}),i})(),_t=(()=>{class i extends O.D1{get readOnly(){return!0}get value(){return this.host.computedValue}get stringify(){return this.host.stringify}onValueChange(e){this.host.onValueChange(e)}}return i.\u0275fac=function(){let a;return function(n){return(a||(a=t.n5z(i)))(n||i)}}(),i.\u0275dir=t.lG2({type:i,selectors:[["tui-select"]],features:[t._Bn([(0,h.cp)(i)]),t.qOj]}),i})(),gt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[C.ez,r.wq,N.A,y.KW,_.jh,it,v.Mt,P.W,S.cn,F.zX,g.pc,G]]}),i})()}}]);