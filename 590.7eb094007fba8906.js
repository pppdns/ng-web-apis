"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[590],{51742:(v,r,i)=>{i.r(r),i.d(r,{GeolocationPageModule:()=>T});var s=i(88692),m=i(22864),g=i(12628),u=i(40719),p=i(16098),d=i(5998),h=i(80897),o=i(64537);function _(t,a){if(1&t){const c=o.EpF();o.TgZ(0,"button",3),o.NdJ("click",function(){o.CHM(c);const e=o.oxw();return o.KtG(e.watch=!0)}),o._uU(1," Get my position!\n"),o.qZA()}}function U(t,a){if(1&t&&o._UZ(0,"iframe",6),2&t){const c=a.ngIf,n=o.oxw(2);o.Q6J("src",n.getUrl(c),o.uOi)}}function A(t,a){1&t&&o._UZ(0,"tui-loader")}function y(t,a){if(1&t&&(o.ynx(0),o.YNc(1,U,1,1,"iframe",4),o.ALo(2,"async"),o.YNc(3,A,1,0,"ng-template",null,5,o.W1O),o.BQk()),2&t){const c=o.MAs(4),n=o.oxw();o.xp6(1),o.Q6J("ngIf",o.lcZ(2,2,n.geolocation$))("ngIfElse",c)}}let b=(()=>{var t;class a{constructor(n,e){this.geolocation$=n,this.sanitizer=e,this.watch=!1,this.sample="import {GeolocationService} from '@ng-web-apis/geolocation';\n\n// ...\n\nconstructor(private readonly geolocation$: GeolocationService) {}\n\ngetPosition() {\n  geolocation$.subscribe((position) => {\n     doSomethingWithPosition(position);\n  });\n}",this.sampleAsync='<app-component-using-position\n  [position]="geolocation$ | async"\n></app-component-using-position>'}getUrl({coords:n}){const{longitude:e,latitude:l}=n;return this.sanitizer.bypassSecurityTrustResourceUrl(`//www.openstreetmap.org/export/embed.html?bbox=${e-.005},${l-.005},${e+.005},${l+.005}&marker=${l},${e}&layer=mapnik`)}}return(t=a).\u0275fac=function(n){return new(n||t)(o.Y36(h._1),o.Y36(d.H7))},t.\u0275cmp=o.Xpm({type:t,selectors:[["geolocation-page"]],decls:42,vars:4,consts:[[3,"highlight"],["appearance","secondary","tuiButton","",3,"click",4,"ngIf"],[4,"ngIf"],["appearance","secondary","tuiButton","",3,"click"],["alt","url","title","geolocation",3,"src",4,"ngIf","ngIfElse"],["loading",""],["alt","url","title","geolocation",3,"src"]],template:function(n,e){1&n&&(o.TgZ(0,"strong"),o._uU(1,"Angular"),o.qZA(),o._uU(2,"\ndoes not have any built-in instruments to use\n"),o.TgZ(3,"strong"),o._uU(4,"Geolocation API"),o.qZA(),o._uU(5,"\n. This is an\n"),o.TgZ(6,"code"),o._uU(7,"Observable"),o.qZA(),o._uU(8,"\nbased abstraction over\n"),o.TgZ(9,"strong"),o._uU(10,"Geolocation API"),o.qZA(),o._uU(11,"\nto use with\n"),o.TgZ(12,"strong"),o._uU(13,"Angular"),o.qZA(),o.TgZ(14,"h2"),o._uU(15,"How to use"),o.qZA(),o.TgZ(16,"p"),o._uU(17," Usage is pretty simple: just import service in your component and subscribe to it. Service extends "),o.TgZ(18,"code"),o._uU(19,"Observable"),o.qZA(),o._uU(20," and will emit the "),o.TgZ(21,"code"),o._uU(22,"Position"),o.qZA(),o._uU(23," object.\n"),o.qZA(),o.TgZ(24,"pre"),o._UZ(25,"code",0),o.qZA(),o.TgZ(26,"p"),o._uU(27,"You also can use async pipe"),o.qZA(),o.TgZ(28,"pre"),o._UZ(29,"code",0),o.qZA(),o.TgZ(30,"h2"),o._uU(31,"Single position"),o.qZA(),o.TgZ(32,"p"),o._uU(33," If you need to get position just once and stop observing user location, you can subscribe to "),o.TgZ(34,"code"),o._uU(35,"geolocation$"),o.qZA(),o._uU(36," and use "),o.TgZ(37,"code"),o._uU(38,"take(1)"),o.qZA(),o._uU(39," RxJS operator. Service is cold, meaning if there are no Subscribers, it doesn't track position\n"),o.qZA(),o.YNc(40,_,2,0,"button",1),o.YNc(41,y,5,4,"ng-container",2)),2&n&&(o.xp6(25),o.Q6J("highlight",e.sample),o.xp6(4),o.Q6J("highlight",e.sampleAsync),o.xp6(11),o.Q6J("ngIf",!e.watch),o.xp6(1),o.Q6J("ngIf",e.watch))},dependencies:[s.O5,p.y$,g.v0,u.kM,s.Ov],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto;line-height:1.5;font-size:1.1em}button[_ngcontent-%COMP%]{margin:0 auto;display:block}iframe[_ngcontent-%COMP%]{width:100%;height:20rem}"],changeDetection:0}),a})(),T=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.ez,p._l,g.fN,u.dS,m.Bz.forChild([{path:"",component:b}])]}),a})()}}]);