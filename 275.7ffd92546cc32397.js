"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[275],{56599:(C,d,r)=>{r.r(d),r.d(d,{ResizeObserverPageModule:()=>P});var l=r(88692),s=r(69900),m=r(22864),g=r(52468),e=r(64537),u=r(44953);function b(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"section",2)(1,"h1",3),e.NdJ("waResizeObserver",function(i){e.CHM(o);const c=e.oxw();return e.KtG(c.onResize(i))}),e._uU(2," Resizable box "),e.qZA(),e.TgZ(3,"label",4),e._uU(4," Adjust width: "),e.TgZ(5,"input",5),e.NdJ("ngModelChange",function(i){e.CHM(o);const c=e.oxw();return e.KtG(c.widthPercent=i)}),e.qZA()()()}if(2&t){const o=e.oxw();e.xp6(1),e.Udp("width",o.widthPercent,"%"),e.uIk("data-ratio",o.ratio),e.xp6(4),e.Q6J("ngModel",o.widthPercent)}}function p(t,a){1&t&&e._uU(0,"Your browser does not support Resize Observer API")}let O=(()=>{var t;class a{constructor(n){this.support=n,this.ratio=0,this.widthPercent=50}onResize(n){this.ratio=Math.round(n[0].contentRect.width/110)}}return(t=a).\u0275fac=function(n){return new(n||t)(e.Y36(g.vU))},t.\u0275cmp=e.Xpm({type:t,selectors:[["resize-observer-page"]],decls:3,vars:2,consts:[["class","wrapper",4,"ngIf","ngIfElse"],["not",""],[1,"wrapper"],["waResizeBox","content-box",1,"element",3,"waResizeObserver"],[1,"width-slider"],["max","100","min","5","type","range","value","50",1,"slider",3,"ngModel","ngModelChange"]],template:function(n,i){if(1&n&&(e.YNc(0,b,6,4,"section",0),e.YNc(1,p,1,0,"ng-template",null,1,e.W1O)),2&n){const c=e.MAs(2);e.Q6J("ngIf",i.support)("ngIfElse",c)}},dependencies:[l.O5,s.Fj,s.eT,s.JJ,s.On,u.P],styles:['[_nghost-%COMP%]{perspective:150vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-direction:column;align-items:center}.width-slider[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.slider[_ngcontent-%COMP%]{margin:10px}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;position:relative;width:100%;overflow:hidden}.element[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;text-align:center;padding:10px;width:80%;min-width:124px;height:200px;transition:background .1s}.element[data-ratio="1"][_ngcontent-%COMP%]{background:#e885eb}.element[data-ratio="2"][_ngcontent-%COMP%]{background:#c685eb}.element[data-ratio="3"][_ngcontent-%COMP%]{background:#ac85eb}.element[data-ratio="4"][_ngcontent-%COMP%]{background:#9885eb}.element[data-ratio="5"][_ngcontent-%COMP%]{background:#8591eb}.element[data-ratio="6"][_ngcontent-%COMP%]{background:#85a0eb}.element[data-ratio="7"][_ngcontent-%COMP%]{background:#84aeeb}.element[data-ratio="8"][_ngcontent-%COMP%]{background:#83beeb}.element[data-ratio="9"][_ngcontent-%COMP%]{background:#86d2eb}.element[data-ratio="10"][_ngcontent-%COMP%]{background:#87ddeb}.element[data-ratio="11"][_ngcontent-%COMP%]{background:#8ae5eb}.element[data-ratio="12"][_ngcontent-%COMP%]{background:#8bebdf}.element[data-ratio="13"][_ngcontent-%COMP%]{background:#83ebc8}.element[data-ratio="14"][_ngcontent-%COMP%]{background:#6beb99}.element[data-ratio="15"][_ngcontent-%COMP%]{background:#4ceb60}'],changeDetection:0}),a})(),P=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,s.u5,g.xi,m.Bz.forChild([{path:"",component:O}])]}),a})()}}]);