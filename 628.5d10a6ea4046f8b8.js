"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[628],{41213:(z,C,n)=>{n.d(C,{Ex:()=>m,oK:()=>E,xz:()=>P});const e="edge/";function P(u,r){return parseInt(r.slice(r.toLowerCase().indexOf(e)+e.length),10)<u}function E(u){return u.toLowerCase().includes("firefox")}function m({ownerDocument:u}){var r,c,_,l,M,T,v,O;const f=null==u?void 0:u.defaultView,D=typeof f.safari<"u"&&"[object SafariRemoteNotification]"===(null===(c=null===(r=f.safari)||void 0===r?void 0:r.pushNotification)||void 0===c?void 0:c.toString()),x=!(null===(l=null===(_=f.navigator)||void 0===_?void 0:_.vendor)||void 0===l||!l.includes("Apple")||null!==(T=null===(M=f.navigator)||void 0===M?void 0:M.userAgent)&&void 0!==T&&T.includes("CriOS")||null!==(O=null===(v=f.navigator)||void 0===v?void 0:v.userAgent)&&void 0!==O&&O.includes("FxiOS"));return D||x}},12628:(z,C,n)=>{n.d(C,{fN:()=>k,v0:()=>R});var t=n(64537),e=n(11927),P=n(76480),E=n(57179),m=n(68033),u=n(87786),r=n(75452),c=n(9018),_=n(51927),l=n(27969),M=n(42147),T=n(77320),v=n(54789),O=n(40719),f=n(88692),D=n(91489),x=n(89570);const a=["tuiButton",""];function p(o,h){1&o&&t.GkF(0)}function s(o,h){1&o&&t._UZ(0,"tui-svg",8),2&o&&t.Q6J("src",h.polymorpheusOutlet)}function g(o,h){if(1&o&&(t.TgZ(0,"span",6),t.YNc(1,s,1,1,"tui-svg",7),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("polymorpheusOutlet",i.icon)}}function B(o,h){1&o&&t._UZ(0,"tui-svg",8),2&o&&t.Q6J("src",h.polymorpheusOutlet)}function I(o,h){if(1&o&&(t.TgZ(0,"span",9),t.YNc(1,B,1,1,"tui-svg",7),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("polymorpheusOutlet",i.iconRight)}}function U(o,h){if(1&o&&t._UZ(0,"tui-loader",10),2&o){const i=t.oxw();t.Q6J("inheritColor",!0)("size",i.loaderSize)}}const W=["*"],A=(0,e.JN)({size:"l",shape:null,appearance:T.Nm.Primary});let R=(()=>{class o extends P.Xn{constructor(i,d,y){var L;super(),this.mode=i,this.el=d,this.options=y,this.mode$=(null===(L=this.mode)||void 0===L?void 0:L.change$)||c.E,this.appearance=null,this.disabled=!1,this.shape=this.options.shape,this.showLoader=!1,this.size=this.options.size,this.appearance$=this.mode$.pipe((0,_.O)(null),(0,l.U)(()=>this.computedAppearance),(0,M.x)())}get nativeFocusableElement(){return this.nativeDisabled?null:this.el.nativeElement}get focused(){return!this.showLoader&&(0,E.V8)(this.el.nativeElement)}get loaderSize(){return"l"===this.size||"xl"===this.size?"m":"s"}get computedAppearance(){var i;return null!==(i=this.appearance)&&void 0!==i?i:this.options.appearance||""}get nativeDisabled(){return this.computedDisabled||this.showLoader?"":null}get tabIndex(){return this.focusable?0:-1}onFocused(i){this.updateFocused(i)}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(r.w,8),t.Y36(t.SBq),t.Y36(A))},o.\u0275cmp=t.Xpm({type:o,selectors:[["button","tuiButton",""],["button","tuiIconButton",""],["a","tuiButton",""],["a","tuiIconButton",""]],hostVars:7,hostBindings:function(i,d){1&i&&t.NdJ("focusin",function(){return d.onFocused(!0)})("focusout",function(){return d.onFocused(!1)}),2&i&&(t.Ikx("tabIndex",d.tabIndex),t.uIk("data-shape",d.shape)("data-size",d.size)("data-appearance",d.computedAppearance)("disabled",d.nativeDisabled),t.ekj("_loading",d.showLoader))},inputs:{appearance:"appearance",disabled:"disabled",icon:"icon",iconRight:"iconRight",shape:"shape",showLoader:"showLoader",size:"size"},features:[t._Bn([(0,m.FT)(o),u.a3]),t.qOj],attrs:a,ngContentSelectors:W,decls:8,vars:10,consts:[[4,"ngIf"],["tuiWrapper","",1,"t-wrapper",3,"active","appearance","disabled","hover"],[1,"t-content"],["class","t-left",4,"ngIf"],["class","t-right",4,"ngIf"],["class","t-loader",3,"inheritColor","size",4,"ngIf"],[1,"t-left"],["class","t-icon",3,"src",4,"polymorpheusOutlet"],[1,"t-icon",3,"src"],[1,"t-right"],[1,"t-loader",3,"inheritColor","size"]],template:function(i,d){1&i&&(t.F$t(),t.YNc(0,p,1,0,"ng-container",0),t.ALo(1,"async"),t.TgZ(2,"div",1)(3,"span",2),t.YNc(4,g,2,1,"span",3),t.Hsn(5),t.YNc(6,I,2,1,"span",4),t.qZA(),t.YNc(7,U,1,2,"tui-loader",5),t.qZA()),2&i&&(t.Q6J("ngIf",t.lcZ(1,8,d.appearance$)),t.xp6(2),t.Q6J("active",d.pseudoActive)("appearance",d.computedAppearance)("disabled",d.computedDisabled)("hover",d.pseudoHover),t.xp6(2),t.Q6J("ngIf",d.icon),t.xp6(2),t.Q6J("ngIf",d.iconRight),t.xp6(1),t.Q6J("ngIf",d.showLoader))},dependencies:[v.PN,O.kM,f.O5,D.o,x.Li,f.Ov],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:inline-block;flex-shrink:0;vertical-align:top;border-radius:var(--tui-radius-m);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;color:inherit}[data-shape=rounded][_nghost-%COMP%]{border-radius:6.25rem}[data-size=xs][_nghost-%COMP%]{height:var(--tui-height-xs);font-weight:normal}[data-size=xs][data-shape=square][_nghost-%COMP%], [data-size=xs][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-xs)}[data-size=s][_nghost-%COMP%]{height:var(--tui-height-s);font-weight:normal}[data-size=s][data-shape=square][_nghost-%COMP%], [data-size=s][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-s)}[data-size=m][_nghost-%COMP%]{height:var(--tui-height-m);font:var(--tui-font-text-m);font-weight:bold}[data-size=m][data-shape=square][_nghost-%COMP%], [data-size=m][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-m)}[data-size=l][_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:bold}[data-size=l][data-shape=square][_nghost-%COMP%], [data-size=l][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-l)}[data-size=xl][_nghost-%COMP%]{height:3.75rem;font:var(--tui-font-text-m);font-weight:bold}[data-size=xl][data-shape=square][_nghost-%COMP%], [data-size=xl][tuiIconButton][_nghost-%COMP%]{width:3.75rem}[tuiIconButton][_nghost-%COMP%]{font-size:0!important}[tuiIconButton][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [tuiIconButton][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0!important}.t-loader[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;cursor:default}.t-left[_ngcontent-%COMP%]{margin-right:.5rem}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{margin-right:.375rem}[data-size=xs][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{margin-right:.25rem}.t-right[_ngcontent-%COMP%]{margin:0 -.25rem 0 .25rem}[data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0 -.25rem 0 .375rem}[data-size=xs][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0 -.125rem 0 .25rem}.t-icon[_ngcontent-%COMP%]{display:flex;max-width:100%;max-height:100%;align-items:center;justify-content:center}.t-left[_ngcontent-%COMP%], .t-right[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%], [data-size=xs][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [data-size=xs][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{width:1rem;height:1rem}[tuiIconButton][data-appearance=icon][data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [tuiIconButton][data-appearance=icon][data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.t-wrapper[_ngcontent-%COMP%]{box-sizing:border-box;cursor:pointer;isolation:isolate}[data-size=xs][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, .375rem)}[data-size=xs][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-width:1px}[data-size=s][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, .75rem)}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 1.5rem)}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 2.25rem)}[data-size=xl][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 2.5rem)}[data-shape=square][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], [tuiIconButton][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0}.t-content[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center;text-align:center}._loading[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{opacity:0}"],changeDetection:0}),o})(),k=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.ez,x.wq,D.W,v.EI,O.dS]]}),o})()},40719:(z,C,n)=>{n.d(C,{dS:()=>x,kM:()=>D});var t=n(88692),e=n(64537),P=n(11927),E=n(41213),m=n(57179),u=n(68033),r=n(66640),c=n(89570);function _(a,p){if(1&a&&(e.ynx(0),e._uU(1),e.BQk()),2&a){const s=p.polymorpheusOutlet;e.xp6(1),e.hij(" ",s," ")}}function l(a,p){if(1&a&&(e.O4$(),e.kcU(),e.TgZ(0,"div",6),e.YNc(1,_,2,1,"ng-container",7),e.qZA()),2&a){const s=e.oxw(2);e.ekj("t-text_horizontal",s.isHorizontal),e.xp6(1),e.Q6J("polymorpheusOutlet",s.textContent)}}function M(a,p){if(1&a&&(e.TgZ(0,"div",2),e.O4$(),e.TgZ(1,"svg",3),e._UZ(2,"circle",4),e.qZA(),e.YNc(3,l,2,3,"div",5),e.qZA()),2&a){const s=e.oxw();e.ekj("t-loader_horizontal",s.isHorizontal)("t-loader_inherit-color",s.inheritColor),e.uIk("data-size",s.size),e.xp6(3),e.Q6J("ngIf",s.hasText)}}const T=["*"],O=(0,P.JN)({size:"m",inheritColor:!1,overlay:!1});let D=(()=>{class a{constructor(s,g,B,I){this.doc=s,this.el=g,this.isIos=B,this.options=I,this.size=this.options.size,this.inheritColor=this.options.inheritColor,this.overlay=this.options.overlay,this.loading=!0,this.isApple=(0,E.Ex)(this.el.nativeElement)||this.isIos}set showLoader(s){s&&this.focused&&(0,m.hp)(this.doc),this.loading=s}get hasOverlay(){return this.overlay&&this.loading}get hasText(){return!!this.textContent}get isHorizontal(){return!(0,r.R9)(this.size)}get focused(){return(0,m.zb)(this.el.nativeElement)}}return a.\u0275fac=function(s){return new(s||a)(e.Y36(t.K0),e.Y36(e.SBq),e.Y36(u.FA),e.Y36(O))},a.\u0275cmp=e.Xpm({type:a,selectors:[["tui-loader"]],hostVars:2,hostBindings:function(s,g){2&s&&e.ekj("_loading",g.loading)},inputs:{size:"size",inheritColor:"inheritColor",overlay:"overlay",textContent:"textContent",showLoader:"showLoader"},ngContentSelectors:T,decls:3,vars:7,consts:[[1,"t-content",3,"disabled"],["class","t-loader",3,"t-loader_horizontal","t-loader_inherit-color",4,"ngIf"],[1,"t-loader"],["automation-id","tui-loader__loader","focusable","false","viewBox","0 0 100 100","xmlns","http://www.w3.org/2000/svg",1,"t-icon"],["cx","50","cy","50","r","50","stroke-dasharray","314",1,"t-circle"],["automation-id","tui-loader__text","class","t-text",3,"t-text_horizontal",4,"ngIf"],["automation-id","tui-loader__text",1,"t-text"],[4,"polymorpheusOutlet"]],template:function(s,g){1&s&&(e.F$t(),e.TgZ(0,"fieldset",0),e.Hsn(1),e.qZA(),e.YNc(2,M,4,6,"div",1)),2&s&&(e.ekj("t-content_has-overlay",g.hasOverlay)("t-content_loading",g.loading),e.Q6J("disabled",g.loading&&!g.isApple),e.uIk("inert",g.loading||null),e.xp6(2),e.Q6J("ngIf",g.loading))},dependencies:[t.O5,c.Li],styles:["@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:-66}50%{stroke-dashoffset:-314}to{stroke-dashoffset:-66}}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(0)}50%{transform:rotate(1turn)}to{transform:rotate(3turn)}}[_nghost-%COMP%]{position:relative;display:flex;min-width:1.5rem}._loading[_nghost-%COMP%]{overflow:hidden}.t-content[_ngcontent-%COMP%]{z-index:0;min-width:100%;height:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:100%;flex-shrink:0;align-self:center;color:var(--tui-text-01);stroke:var(--tui-primary);animation:tuiFadeIn var(--tui-duration)}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-loader[data-size=xs][_ngcontent-%COMP%]{font-size:.75rem;stroke-width:38}.t-loader[data-size=s][_ngcontent-%COMP%]{font-size:1rem;stroke-width:25}.t-loader[data-size=m][_ngcontent-%COMP%]{font-size:1.5rem;stroke-width:17}.t-loader[data-size=l][_ngcontent-%COMP%]{font-size:2.5rem;stroke-width:15}.t-loader[data-size=xl][_ngcontent-%COMP%]{font-size:3.5rem;stroke-width:14}.t-loader[data-size=xxl][_ngcontent-%COMP%]{font-size:5rem;stroke-width:10}.t-text[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1rem;color:inherit;max-width:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0 0 0 1rem}.t-icon[_ngcontent-%COMP%]{display:block;min-width:1em;max-width:1em;min-height:1em;max-height:1em;margin:.25rem -.5em;border-radius:100%;overflow:hidden;transform:scaleY(-1);animation:_ngcontent-%COMP%_tuiLoaderRotate 3s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}.t-circle[_ngcontent-%COMP%]{fill:none;stroke:inherit;stroke-width:inherit;animation:_ngcontent-%COMP%_tuiLoaderDashOffset 3s linear infinite}"],changeDetection:0}),a})(),x=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[t.ez,c.wq]]}),a})()},91489:(z,C,n)=>{n.d(C,{W:()=>u,o:()=>m});var t=n(64537),e=n(77320),P=n(12130),E=n(76060);let m=(()=>{class r{constructor(_){this.mode$=_,this.disabled=!1,this.readOnly=!1,this.hover=null,this.active=null,this.focus=!1,this.invalid=!1,this.appearance=""}get computedInvalid(){return!this.disabled&&!this.readOnly&&this.invalid}get computedFocused(){return this.focus&&!this.disabled}get interactiveState(){return this.disabled?e.z3.Disabled:this.readOnly?e.z3.Readonly:this.active?e.z3.Active:this.hover?e.z3.Hover:null}get noHover(){return this.readOnly||!1===this.hover}get noActive(){return this.readOnly||!1===this.active}}return r.\u0275fac=function(_){return new(_||r)(t.Y36(E.Au))},r.\u0275dir=t.lG2({type:r,selectors:[["","tuiWrapper",""]],hostVars:10,hostBindings:function(_,l){1&_&&t.NdJ("$.data-mode.attr",function(){return l.mode$}),2&_&&(t.uIk("data-appearance",l.appearance)("data-state",l.interactiveState),t.ekj("_invalid",l.computedInvalid)("_focused",l.computedFocused)("_no-hover",l.noHover)("_no-active",l.noActive))},inputs:{disabled:"disabled",readOnly:"readOnly",hover:"hover",active:"active",focus:"focus",invalid:"invalid",appearance:"appearance"},features:[t._Bn([P.CV])]}),r})(),u=(()=>{class r{}return r.\u0275fac=function(_){return new(_||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({}),r})()}}]);