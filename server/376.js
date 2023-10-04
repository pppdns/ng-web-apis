"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=376,exports.ids=[376],exports.modules={84376:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SpeechPageModule:()=>SpeechPageModule});var core=__webpack_require__(74788),tslib_es6=__webpack_require__(97582),src=__webpack_require__(92176);class TextToSpeechDirective{constructor(speechSynthesisRef){this.speechSynthesisRef=speechSynthesisRef,this.paused=!1,this.onerror=new core.EventEmitter,this.onend=new core.EventEmitter,this.onmark=new core.EventEmitter,this.onboundary=new core.EventEmitter}set waTextToSpeech(utterance){this.speechSynthesisRef.cancel(),this.speechSynthesisRef.pause(),utterance.onerror=e=>this.onerror.emit(e),utterance.onend=e=>this.onend.emit(e),utterance.onmark=e=>this.onmark.emit(e),utterance.onboundary=e=>this.onboundary.emit(e),this.speechSynthesisRef.speak(utterance)}ngOnChanges(){this.paused?this.speechSynthesisRef.pause():this.speechSynthesisRef.resume()}}__name(TextToSpeechDirective,"TextToSpeechDirective"),TextToSpeechDirective.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:TextToSpeechDirective,deps:[{token:src.MF}],target:core.\u0275\u0275FactoryTarget.Directive}),TextToSpeechDirective.\u0275dir=core.\u0275\u0275ngDeclareDirective({minVersion:"12.0.0",version:"12.2.17",type:TextToSpeechDirective,selector:"[waTextToSpeech]",inputs:{paused:["waTextToSpeechPaused","paused"],waTextToSpeech:"waTextToSpeech"},outputs:{onerror:"waTextToSpeechError",onend:"waTextToSpeechEnd",onmark:"waTextToSpeechMark",onboundary:"waTextToSpeechBoundary"},usesOnChanges:!0,ngImport:core}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:TextToSpeechDirective,decorators:[{type:core.Directive,args:[{selector:"[waTextToSpeech]"}]}],ctorParameters:function(){return[{type:void 0,decorators:[{type:core.Inject,args:[src.MF]}]}]},propDecorators:{paused:[{type:core.Input,args:["waTextToSpeechPaused"]}],waTextToSpeech:[{type:core.Input}],onerror:[{type:core.Output,args:["waTextToSpeechError"]}],onend:[{type:core.Output,args:["waTextToSpeechEnd"]}],onmark:[{type:core.Output,args:["waTextToSpeechMark"]}],onboundary:[{type:core.Output,args:["waTextToSpeechBoundary"]}]}});class UtterancePipe{transform(text,{lang="",pitch=1,rate=1,volume=1,voice=null}={}){const utterance=new SpeechSynthesisUtterance(text);return utterance.lang=lang,utterance.pitch=pitch,utterance.rate=rate,utterance.volume=volume,utterance.voice=voice,utterance}}__name(UtterancePipe,"UtterancePipe"),UtterancePipe.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:UtterancePipe,deps:[],target:core.\u0275\u0275FactoryTarget.Pipe}),UtterancePipe.\u0275pipe=core.\u0275\u0275ngDeclarePipe({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:UtterancePipe,name:"waUtterance"}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:UtterancePipe,decorators:[{type:core.Pipe,args:[{name:"waUtterance"}]}]});class SpeechSynthesisModule{}__name(SpeechSynthesisModule,"SpeechSynthesisModule"),SpeechSynthesisModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechSynthesisModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),SpeechSynthesisModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechSynthesisModule,declarations:[TextToSpeechDirective,UtterancePipe],exports:[TextToSpeechDirective,UtterancePipe]}),SpeechSynthesisModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechSynthesisModule}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechSynthesisModule,decorators:[{type:core.NgModule,args:[{declarations:[TextToSpeechDirective,UtterancePipe],exports:[TextToSpeechDirective,UtterancePipe]}]}]});var operators=__webpack_require__(57192);function continuous(){return(0,operators.Rp)((result,current)=>[...result.filter(({isFinal})=>isFinal),...current],[])}__name(continuous,"continuous");var cjs=__webpack_require__(72921);function isSaid(phrase){const lowercased=phrase.toLowerCase().trim();return results=>!!results.find(result=>{var _a;return result.isFinal&&(null===(_a=result[0])||void 0===_a?void 0:_a.transcript.toLowerCase().trim())===lowercased})}function skipUntilSaid(text){const predicate=isSaid(text);return(0,cjs.pipe)((0,operators.nF)(results=>!predicate(results)),(0,operators.UI)((value,index)=>index?value:[]))}function takeUntilSaid(text){const predicate=isSaid(text);return(0,operators.oE)(results=>!predicate(results))}__name(isSaid,"isSaid"),__name(skipUntilSaid,"skipUntilSaid"),__name(takeUntilSaid,"takeUntilSaid");const SPEECH_RECOGNITION_MAX_ALTERNATIVES=new core.InjectionToken("Max alternatives for speech recognition",{factory:()=>1});class SpeechRecognitionService extends cjs.Observable{constructor(classRef,lang="",maxAlternatives=1,ngZone={run:fn=>fn()}){super(subscriber=>{if(!classRef)return void subscriber.error(new Error("SpeechRecognition is not supported"));const speechRecognition=new classRef;return speechRecognition.maxAlternatives=maxAlternatives,speechRecognition.lang=lang||"",speechRecognition.interimResults=!0,speechRecognition.onerror=error=>subscriber.error(error),speechRecognition.onend=()=>subscriber.complete(),speechRecognition.onresult=({results})=>ngZone.run(()=>subscriber.next(Array.from({length:results.length},(_,i)=>results[i]))),speechRecognition.start(),()=>speechRecognition.abort()})}}__name(SpeechRecognitionService,"SpeechRecognitionService"),SpeechRecognitionService.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechRecognitionService,deps:[{token:src.$R},{token:core.LOCALE_ID,optional:!0},{token:SPEECH_RECOGNITION_MAX_ALTERNATIVES},{token:core.NgZone}],target:core.\u0275\u0275FactoryTarget.Injectable}),SpeechRecognitionService.\u0275prov=core.\u0275\u0275ngDeclareInjectable({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechRecognitionService,providedIn:"root"}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechRecognitionService,decorators:[{type:core.Injectable,args:[{providedIn:"root"}]}],ctorParameters:function(){return[{type:core.Type,decorators:[{type:core.Inject,args:[src.$R]}]},{type:void 0,decorators:[{type:core.Optional},{type:core.Inject,args:[core.LOCALE_ID]}]},{type:void 0,decorators:[{type:core.Inject,args:[SPEECH_RECOGNITION_MAX_ALTERNATIVES]}]},{type:void 0,decorators:[{type:core.Inject,args:[core.NgZone]}]}]}});new core.InjectionToken("Speech recognition is supported on current platform",{factory:()=>!!(0,core.inject)(src.$R)}),new core.InjectionToken("Speech synthesis is supported on current platform",{factory:()=>!!(0,core.inject)(src.MF)});const SPEECH_SYNTHESIS_VOICES=new core.InjectionToken("List of available voices for speech synthesis",{factory:()=>{const speechSynthesisRef=(0,core.inject)(src.MF);return(0,cjs.fromEvent)(speechSynthesisRef,"voiceschanged").pipe((0,operators.O4)(null),(0,operators.UI)(()=>speechSynthesisRef.getVoices()))}});var taiga_ui_cdk_decorators=__webpack_require__(44358),common=__webpack_require__(12057),taiga_ui_core_components_label=__webpack_require__(19506),taiga_ui_core_components_tooltip=__webpack_require__(1515),taiga_ui_core_components_data_list=__webpack_require__(75111),taiga_ui_core_components_button=__webpack_require__(12628),taiga_ui_kit_components_select=__webpack_require__(41088),taiga_ui_kit_components_textarea=__webpack_require__(82296),fesm2015_forms=__webpack_require__(24751),taiga_ui_addon_mobile_directives_sidebar=__webpack_require__(38565);class SpeechPageComponent{constructor(platformId,voices$,recognition$){this.platformId=platformId,this.voices$=voices$,this.recognition$=recognition$,this.isBrowser=(0,common.NF)(this.platformId),this.paused=!0,this.voice=null,this.text="Hit play/pause to speak this text",this.nameExtractor=({$implicit})=>$implicit.name}get record$(){return this.result$.pipe(skipUntilSaid("Okay Angular"),takeUntilSaid("Thank you Angular"),(0,cjs.repeat)(),continuous())}get open$(){return(0,cjs.merge)(this.result$.pipe((0,operators.hX)(isSaid("Show sidebar")),(0,operators.hZ)(!0)),this.result$.pipe((0,operators.hX)(isSaid("Hide sidebar")),(0,operators.hZ)(!1)))}get options(){return this.getOptions(this.voice)}get result$(){return this.recognition$.pipe((0,cjs.retry)(),(0,cjs.repeat)(),(0,operators.BN)())}voiceByName(_,{name}){return name}onClick(){this.paused=!this.paused,this.text=this.paused?`${this.text} `:this.text}onEnd(){console.info("Speech synthesis ended")}getOptions(voice){return{lang:"en-US",voice}}}__name(SpeechPageComponent,"SpeechPageComponent"),SpeechPageComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechPageComponent,deps:[{token:core.PLATFORM_ID},{token:SPEECH_SYNTHESIS_VOICES},{token:SpeechRecognitionService}],target:core.\u0275\u0275FactoryTarget.Component}),SpeechPageComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.17",type:SpeechPageComponent,selector:"speech-page",ngImport:core,template:'<ng-container *ngIf="isBrowser">\n    <label class="recognition" [tuiLabel]="label">\n        <ng-template #label>\n            Speech recognition\n            <tui-tooltip\n                content="Say \xabOk, Angular\xbb to start recording and \xabThank you, Angular\xbb to end"\n            ></tui-tooltip>\n        </ng-template>\n        <ng-container *ngIf="record$ | async as result; else placeholder">\n            <span\n                *ngFor="let result of result"\n                class="transcript"\n                [class.transcript_final]="result.isFinal"\n            >\n                {{ result[0].transcript }}\n            </span>\n            &nbsp;\n        </ng-container>\n        <ng-template #placeholder>Say \xabOk, Angular\xbb...</ng-template>\n    </label>\n    <tui-select [valueContent]="nameExtractor" [(ngModel)]="voice">\n        Voice\n        <tui-data-list *tuiDataList>\n            <button\n                *ngFor="let item of voices$ | async; trackBy: voiceByName"\n                tuiOption\n                [value]="item"\n            >\n                {{ item.name }}\n            </button>\n        </tui-data-list>\n    </tui-select>\n    <tui-text-area\n        class="textarea"\n        [waTextToSpeech]="text | waUtterance: options"\n        [waTextToSpeechPaused]="paused"\n        [(ngModel)]="text"\n        (waTextToSpeechEnd)="onEnd()"\n    >\n        Text\n    </tui-text-area>\n    <div class="buttons">\n        <button tuiButton type="button" (click)="onClick()">\n            {{ paused ? \'Play\' : \'Pause\' }}\n        </button>\n        Tip: say \xabShow sidebar\xbb\n    </div>\n\n    <div *tuiSidebar="(open$ | async) || false">\n        <div class="sidebar">\n            <h2>More from @ng-web-apis</h2>\n\n            <a\n                href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/workers"\n                target="_blank"\n                class="link"\n            >\n                <h3>Workers</h3>\n                <img\n                    src="assets/logos/workers/logo.svg"\n                    width="64"\n                    height="64"\n                    alt="Worker API logo"\n                    class="icon"\n                />\n            </a>\n\n            <a\n                href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/canvas"\n                target="_blank"\n                class="link"\n            >\n                <h3>Canvas</h3>\n                <img\n                    src="assets/logos/canvas/logo.svg"\n                    width="64"\n                    height="64"\n                    alt="Worker API logo"\n                    class="icon"\n                />\n            </a>\n\n            <a\n                href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/audio"\n                target="_blank"\n                class="link"\n            >\n                <h3>Audio</h3>\n                <img\n                    src="assets/logos/audio/logo.svg"\n                    width="64"\n                    height="64"\n                    alt="Worker API logo"\n                    class="icon"\n                />\n            </a>\n\n            <a\n                href="https://ng-web-apis.github.io/"\n                target="_blank"\n                class="link"\n            >\n                See all\n            </a>\n\n            Tip: say \xabHide sidebar\xbb when you\'re done\n        </div>\n    </div>\n</ng-container>\n',styles:[":host{display:block;max-width:600px;margin:0 auto}.transcript{opacity:.5;color:var(--tui-text-01)}.transcript_final{opacity:1}.form{width:320px;margin:0 auto}.textarea{margin:16px 0;overflow:visible}.recognition{margin:16px 0;box-shadow:inset 0 0 0 1px #dcdcdc;border-radius:var(--tui-radius);padding:8px 16px;color:var(--tui-text-02)}.buttons{display:flex;justify-content:space-between;align-items:center}.sidebar{padding:12px 16px}.link{display:flex;justify-content:space-between;align-items:center;color:#444;border-radius:4px;border:1px solid gainsboro;font-size:14px;padding:16px;margin:16px 10px;box-sizing:border-box;transition:box-shadow .3s}.link:hover{box-shadow:0 12px 36px #0003}\n"],components:[{type:taiga_ui_core_components_label.A,selector:"label[tuiLabel]",inputs:["tuiLabel","context"]},{type:taiga_ui_core_components_tooltip.w,selector:"tui-tooltip",inputs:["content","direction","appearance","showDelay","hideDelay","describeId","context"]},{type:taiga_ui_kit_components_select.uJ,selector:"tui-select",inputs:["stringify","identityMatcher","valueContent"]},{type:taiga_ui_core_components_data_list.qi,selector:"tui-data-list",inputs:["role","emptyContent","size"]},{type:taiga_ui_core_components_data_list.vK,selector:"button[tuiOption], a[tuiOption]",inputs:["size","role","disabled","value"]},{type:taiga_ui_kit_components_textarea.Jl,selector:"tui-text-area"},{type:taiga_ui_core_components_button.v0,selector:"button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]",inputs:["appearance","disabled","icon","iconRight","shape","showLoader","size"]}],directives:[{type:common.O5,selector:"[ngIf]",inputs:["ngIf","ngIfThen","ngIfElse"]},{type:common.sg,selector:"[ngFor][ngForOf]",inputs:["ngForOf","ngForTrackBy","ngForTemplate"]},{type:taiga_ui_kit_components_select.OI,selector:"tui-select"},{type:fesm2015_forms.JJ,selector:"[formControlName],[ngModel],[formControl]"},{type:fesm2015_forms.On,selector:"[ngModel]:not([formControlName]):not([formControl])",inputs:["name","disabled","ngModel","ngModelOptions"],outputs:["ngModelChange"],exportAs:["ngModel"]},{type:taiga_ui_core_components_data_list.gX,selector:"ng-template[tuiDataList]"},{type:taiga_ui_kit_components_textarea.eQ,selector:"tui-text-area"},{type:TextToSpeechDirective,selector:"[waTextToSpeech]",inputs:["waTextToSpeechPaused","waTextToSpeech"],outputs:["waTextToSpeechError","waTextToSpeechEnd","waTextToSpeechMark","waTextToSpeechBoundary"]},{type:taiga_ui_addon_mobile_directives_sidebar.B7,selector:"[tuiSidebar]",inputs:["tuiSidebarDirection","tuiSidebarAutoWidth","tuiSidebar"]}],pipes:{async:common.Ov,waUtterance:UtterancePipe},changeDetection:core.ChangeDetectionStrategy.OnPush}),(0,tslib_es6.gn)([taiga_ui_cdk_decorators.UM],SpeechPageComponent.prototype,"record$",null),(0,tslib_es6.gn)([taiga_ui_cdk_decorators.UM],SpeechPageComponent.prototype,"open$",null),(0,tslib_es6.gn)([taiga_ui_cdk_decorators.UM],SpeechPageComponent.prototype,"result$",null),(0,tslib_es6.gn)([taiga_ui_cdk_decorators.UM],SpeechPageComponent.prototype,"getOptions",null),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechPageComponent,decorators:[{type:core.Component,args:[{selector:"speech-page",templateUrl:"./speech-page.component.html",styleUrls:["./speech-page.component.less"],changeDetection:core.ChangeDetectionStrategy.OnPush}]}],ctorParameters:function(){return[{type:void 0,decorators:[{type:core.Inject,args:[core.PLATFORM_ID]}]},{type:cjs.Observable,decorators:[{type:core.Inject,args:[SPEECH_SYNTHESIS_VOICES]}]},{type:cjs.Observable,decorators:[{type:core.Inject,args:[SpeechRecognitionService]}]}]},propDecorators:{record$:[],open$:[],result$:[],getOptions:[]}});var router=__webpack_require__(3984),taiga_ui_cdk_directives_let=__webpack_require__(92668);class SpeechPageModule{}__name(SpeechPageModule,"SpeechPageModule"),SpeechPageModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechPageModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),SpeechPageModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechPageModule,declarations:[SpeechPageComponent],imports:[common.ez,fesm2015_forms.u5,taiga_ui_cdk_directives_let.WD,taiga_ui_kit_components_select.Jy,taiga_ui_core_components_data_list.pc,taiga_ui_kit_components_textarea.U1,taiga_ui_core_components_button.fN,taiga_ui_core_components_label.U,taiga_ui_core_components_tooltip.Q,taiga_ui_addon_mobile_directives_sidebar.T,SpeechSynthesisModule,router.Bz]}),SpeechPageModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechPageModule,imports:[[common.ez,fesm2015_forms.u5,taiga_ui_cdk_directives_let.WD,taiga_ui_kit_components_select.Jy,taiga_ui_core_components_data_list.pc,taiga_ui_kit_components_textarea.U1,taiga_ui_core_components_button.fN,taiga_ui_core_components_label.U,taiga_ui_core_components_tooltip.Q,taiga_ui_addon_mobile_directives_sidebar.T,SpeechSynthesisModule,router.Bz.forChild([{path:"",component:SpeechPageComponent}])]]}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:SpeechPageModule,decorators:[{type:core.NgModule,args:[{imports:[common.ez,fesm2015_forms.u5,taiga_ui_cdk_directives_let.WD,taiga_ui_kit_components_select.Jy,taiga_ui_core_components_data_list.pc,taiga_ui_kit_components_textarea.U1,taiga_ui_core_components_button.fN,taiga_ui_core_components_label.U,taiga_ui_core_components_tooltip.Q,taiga_ui_addon_mobile_directives_sidebar.T,SpeechSynthesisModule,router.Bz.forChild([{path:"",component:SpeechPageComponent}])],declarations:[SpeechPageComponent]}]}]})}};