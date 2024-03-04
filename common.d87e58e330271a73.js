"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[592],{5124:(p,u,e)=>{e.d(u,{v:()=>t});var n=e(4676);function t(r=""){return(o,s)=>{Object.defineProperty(o,s,{configurable:!0,set(c){c="string"==typeof c?Number.parseFloat(c):c;const i=this instanceof AudioWorkletNode?this.parameters.get(s):this[r];i instanceof AudioParam?(0,n.Z)(i,c,this.context.currentTime):Object.defineProperty(o,s,{value:c,configurable:!0})}})}}},6511:(p,u,e)=>{e.d(u,{i:()=>f});var n=e(6889),t=e(4537),r=e(2725),a=e(7969),o=e(8168),s=e(2147),c=e(5184),i=e(3151),v=e(4970),l=e(190),_=e(5155),O=e(4533),m=e(2568);let f=(()=>{var E;class d extends AnalyserNode{constructor(){const I=(0,t.f3M)(l.N),T=(0,t.f3M)(_.K);if(!(0,t.f3M)(O.j)){const S=I.createAnalyser();return Object.setPrototypeOf(S,d.prototype),d.init(S,T),S}super(I),(0,n.Z)(this,"quiet",void 0),d.init(this,T)}static init(I,T){(0,m.$)(T,I),I.fftSize=256,I.connect(I.context.destination),I.quiet=(0,r.F)(100).pipe((0,a.U)(()=>new Float32Array(I.fftSize)),(0,o.b)(h=>I.getFloatTimeDomainData(h)),(0,a.U)(h=>I.isSilent(h)),(0,s.x)(),(0,c.n)(h=>h),(0,i.b)(5e3),(0,v.h)(h=>h))}ngOnDestroy(){this.disconnect()}isSilent(I){return Math.abs(I.reduce((T,h)=>T+h,0))<.001}}return E=d,(0,n.Z)(d,"\u0275fac",function(I){return new(I||E)}),(0,n.Z)(d,"\u0275dir",t.lG2({type:E,selectors:[["","waAudioDestinationNode",""]],outputs:{quiet:"quiet"},exportAs:["AudioNode"],standalone:!0,features:[t.qOj]})),d})()},47:(p,u,e)=>{e.d(u,{g:()=>c});var n=e(6889),t=e(4537),r=e(190),a=e(5155),o=e(4533),s=e(2568);let c=(()=>{var i;class v extends GainNode{set waOutput(l){this.disconnect(),(0,s.$)(this,l)}constructor(){const l=(0,t.f3M)(r.N),_=(0,t.f3M)(a.K);if(!(0,t.f3M)(o.j)){const m=l.createGain();return Object.setPrototypeOf(m,v.prototype),(0,s.$)(_,m),m}super(l),(0,s.$)(_,this)}static init(l,_){(0,s.$)(_,l)}ngOnDestroy(){this.disconnect()}}return i=v,(0,n.Z)(v,"\u0275fac",function(l){return new(l||i)}),(0,n.Z)(v,"\u0275dir",t.lG2({type:i,selectors:[["","waOutput",""]],inputs:{waOutput:"waOutput"},standalone:!0,features:[t.qOj]})),v})()},3672:(p,u,e)=>{e.d(u,{O:()=>r});var n=e(6889),t=e(4537);let r=(()=>{var a;class o{}return a=o,(0,n.Z)(o,"\u0275fac",function(c){return new(c||a)}),(0,n.Z)(o,"\u0275mod",t.oAB({type:a})),(0,n.Z)(o,"\u0275inj",t.cJS({})),o})()},6667:(p,u,e)=>{e.d(u,{g:()=>l});var n=e(6889),t=e(4537),r=e(8023),a=e(1528),o=e(4945),s=e(2936),c=e(190),i=e(5155),v=e(4533),P=e(2568);let l=(()=>{var _;class O extends ConvolverNode{set bufferSetter(f){this.buffer$.next(f)}constructor(){const f=(0,t.f3M)(s.L),E=(0,t.f3M)(c.N),d=(0,t.f3M)(i.K,{skipSelf:!0});if(!(0,t.f3M)(v.j)){const I=E.createConvolver();return Object.setPrototypeOf(I,O.prototype),O.init(I,d,f),I}super(E),(0,n.Z)(this,"buffer$",void 0),O.init(this,d,f)}static init(f,E,d){(0,P.$)(E,f),f.buffer$=new r.x,f.buffer$.pipe((0,a.w)(D=>"string"==typeof D?d.fetch(D):(0,o.of)(D))).subscribe(D=>{f.buffer=D})}ngOnDestroy(){this.buffer$.complete(),this.disconnect()}}return _=O,(0,n.Z)(O,"\u0275fac",function(f){return new(f||_)}),(0,n.Z)(O,"\u0275dir",t.lG2({type:_,selectors:[["","waConvolverNode",""]],inputs:{normalize:"normalize",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",bufferSetter:["buffer","bufferSetter"]},exportAs:["AudioNode"],standalone:!0,features:[t._Bn([(0,i.j)(_)]),t.qOj]})),O})()},3555:(p,u,e)=>{e.d(u,{z:()=>P});var n=e(6889),t=e(4911),r=e(4537),a=e(5124),o=e(190),s=e(5155),c=e(4533),i=e(2568),v=e(7282);let P=(()=>{var l;class _ extends GainNode{constructor(m){const f=(0,r.f3M)(o.N),E=(0,r.f3M)(s.K,{skipSelf:!0}),d=(0,r.f3M)(c.j),D=(0,v.Q)(m,1);if(!d){const I=f.createGain();return Object.setPrototypeOf(I,_.prototype),(0,i.$)(E,I),I.gain.value=D,I}super(f,{gain:D}),(0,n.Z)(this,"gainParam",void 0),(0,i.$)(E,this)}ngOnDestroy(){this.disconnect()}}return l=_,(0,n.Z)(_,"\u0275fac",function(m){return new(m||l)(r.$8M("gain"))}),(0,n.Z)(_,"\u0275dir",r.lG2({type:l,selectors:[["","waGainNode",""]],inputs:{channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",gainParam:["gain","gainParam"]},exportAs:["AudioNode"],standalone:!0,features:[r._Bn([(0,s.j)(l)]),r.qOj]})),(0,t.gn)([(0,a.v)("gain")],_.prototype,"gainParam",void 0),_})()},2936:(p,u,e)=>{e.d(u,{L:()=>o});var n=e(8239),t=e(6889),r=e(4537),a=e(190);let o=(()=>{var s;class c{constructor(){(0,t.Z)(this,"context",(0,r.f3M)(a.N)),(0,t.Z)(this,"cache",new Map)}fetch(v){var P=this;return(0,n.Z)(function*(){return new Promise((l,_)=>{if(P.cache.has(v))return void l(P.cache.get(v));const O=new XMLHttpRequest;O.open("GET",v,!0),O.responseType="arraybuffer",O.onerror=_,O.onabort=_,O.onload=()=>{P.context.decodeAudioData(O.response,m=>{P.cache.set(v,m),l(m)},_)},O.send()})})()}}return s=c,(0,t.Z)(c,"\u0275fac",function(v){return new(v||s)}),(0,t.Z)(c,"\u0275prov",r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})),c})()},5772:(p,u,e)=>{e.d(u,{P:()=>P});var n=e(6889),t=e(4911),r=e(4537),a=e(5124),o=e(190),s=e(5155),c=e(4533),i=e(2568),v=e(7282);let P=(()=>{var l;class _ extends OscillatorNode{set periodicWave(m){this.setPeriodicWave(m)}constructor(m,f,E){const d=(0,r.f3M)(o.N),D=(0,r.f3M)(c.j),I=(0,v.Q)(f,0),T=(0,v.Q)(E,440);if(!D){const h=d.createOscillator();return Object.setPrototypeOf(_.prototype,Object.getPrototypeOf(h)),Object.setPrototypeOf(h,_.prototype),h.detune.value=I,h.frequency.value=T,_.init(h,null,m),h}super(d,{detune:I,frequency:T}),(0,n.Z)(this,"detuneParam",void 0),(0,n.Z)(this,"frequencyParam",void 0),(0,n.Z)(this,"ended",void 0),_.init(this,null,m)}static init(m,f,E){(0,i.$)(f,m),null!==E&&m.start();const d=new r.vpe;m.ended=d,m.onended=()=>d.emit()}ngOnDestroy(){try{this.stop()}catch{}this.disconnect()}}return l=_,(0,n.Z)(_,"\u0275fac",function(m){return new(m||l)(r.$8M("autoplay"),r.$8M("detune"),r.$8M("frequency"))}),(0,n.Z)(_,"\u0275dir",r.lG2({type:l,selectors:[["","waOscillatorNode",""]],inputs:{type:"type",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",periodicWave:"periodicWave",detuneParam:["detune","detuneParam"],frequencyParam:["frequency","frequencyParam"]},outputs:{ended:"ended"},exportAs:["AudioNode"],standalone:!0,features:[r._Bn([(0,s.j)(l)]),r.qOj]})),(0,t.gn)([(0,a.v)("detune")],_.prototype,"detuneParam",void 0),(0,t.gn)([(0,a.v)("frequency")],_.prototype,"frequencyParam",void 0),_})()},190:(p,u,e)=>{e.d(u,{N:()=>t});const t=new(e(4537).OlP)("[AUDIO_CONTEXT]: Web Audio API context",{providedIn:"root",factory:()=>new AudioContext})},5155:(p,u,e)=>{e.d(u,{K:()=>t,j:()=>r});const t=new(e(4537).OlP)("[AUDIO_NODE]: Web Audio API audio node",{factory:()=>null});function r(a){return{provide:t,useExisting:a}}},4533:(p,u,e)=>{e.d(u,{j:()=>r});var n=e(4537),t=e(190);const r=new n.OlP("[CONSTRUCTOR_SUPPORT]: Tests if constructor mode of node creation is supported or a fallback to factory method is needed",{providedIn:"root",factory:()=>{try{return!!new GainNode((0,n.f3M)(t.N))}catch{return!1}}})},2568:(p,u,e)=>{function n(t,r){t&&r&&t.connect(r)}e.d(u,{$:()=>n})},7282:(p,u,e)=>{function n(t,r){const a=parseFloat(t||"");return Number.isNaN(a)?r:a}e.d(u,{Q:()=>n})},4676:(p,u,e)=>{function n(o,s,c=0){o.cancelAndHoldAtTime?o.cancelAndHoldAtTime(c):(o.cancelScheduledValues(c),o.setValueAtTime(a(o.value),c)),"number"!=typeof s?s instanceof Array?function t(o,s,c){s.forEach(i=>{"mode"in i?r(o,i,c):o.setValueCurveAtTime(i.value,c,i.duration),c+=i.duration})}(o,s,c):"mode"in s?(o.setValueAtTime(a(o.value),c),r(o,s,c)):o.setValueCurveAtTime(s.value,c,s.duration):o.setValueAtTime(a(s),c)}function r(o,{value:s,mode:c="instant",duration:i},v){switch(c){case"instant":o.setValueAtTime(a(s),v),o.setValueAtTime(a(s),v+i);break;case"exponential":s<0||s*o.value<0?o.linearRampToValueAtTime(a(s),v+i):o.exponentialRampToValueAtTime(a(s),v+i),o.setValueAtTime(a(s),v+i);break;case"linear":o.linearRampToValueAtTime(a(s),v+i)}}function a(o){return o||1e-8}e.d(u,{Z:()=>n})},9561:(p,u,e)=>{e.d(u,{Z:()=>t});var n=e(6889);const t=typeof IntersectionObserver<"u"?IntersectionObserver:class{constructor(){(0,n.Z)(this,"root",null),(0,n.Z)(this,"rootMargin",""),(0,n.Z)(this,"thresholds",[])}observe(){}unobserve(){}disconnect(){}takeRecords(){return[]}}},8559:(p,u,e)=>{e.d(u,{A:()=>a});var n=e(6889),t=e(4537),r=e(4808);let a=(()=>{var o;class s{constructor(){(0,n.Z)(this,"waIntersectionObservee",(0,t.f3M)(r.v))}}return o=s,(0,n.Z)(s,"\u0275fac",function(i){return new(i||o)}),(0,n.Z)(s,"\u0275dir",t.lG2({type:o,selectors:[["","waIntersectionObservee",""]],outputs:{waIntersectionObservee:"waIntersectionObservee"},standalone:!0,features:[t._Bn([r.v])]})),s})()},153:(p,u,e)=>{e.d(u,{Z:()=>v});var n=e(6889),t=e(4537),r=e(9561),a=e(5659),o=e(9083);function s(P){return P||o.O}var c=e(6955);function i(P){return(null==P?void 0:P.split(",").map(parseFloat))||c.O}let v=(()=>{var P;class l extends r.Z{constructor(O,m){const f=(0,t.f3M)(a.p,{optional:!0});super(E=>{this.callbacks.forEach((d,D)=>{const I=E.filter(({target:T})=>T===D);return I.length&&d(I,this)})},{root:null==f?void 0:f.nativeElement,rootMargin:s(O),threshold:i(m)}),(0,n.Z)(this,"callbacks",new Map)}observe(O,m=(()=>{})){super.observe(O),this.callbacks.set(O,m)}unobserve(O){super.unobserve(O),this.callbacks.delete(O)}ngOnDestroy(){this.disconnect()}}return P=l,(0,n.Z)(l,"\u0275fac",function(O){return new(O||P)(t.$8M("waIntersectionRootMargin"),t.$8M("waIntersectionThreshold"))}),(0,n.Z)(l,"\u0275dir",t.lG2({type:P,selectors:[["","waIntersectionObserver",""]],exportAs:["IntersectionObserver"],standalone:!0,features:[t.qOj]})),l})()},1513:(p,u,e)=>{e.d(u,{Q:()=>a});var n=e(6889),t=e(4537),r=e(5659);let a=(()=>{var o;class s{}return o=s,(0,n.Z)(s,"\u0275fac",function(i){return new(i||o)}),(0,n.Z)(s,"\u0275dir",t.lG2({type:o,selectors:[["","waIntersectionRoot",""]],standalone:!0,features:[t._Bn([{provide:r.p,useExisting:t.SBq}])]})),s})()},4134:(p,u,e)=>{e.d(u,{tc:()=>m,$v:()=>s}),e(8559),e(153),e(1513);var a=e(6889),o=e(4537);let s=(()=>{var f;class E{}return f=E,(0,a.Z)(E,"\u0275fac",function(D){return new(D||f)}),(0,a.Z)(E,"\u0275mod",o.oAB({type:f})),(0,a.Z)(E,"\u0275inj",o.cJS({})),E})();e(4808),e(9561),e(5659),e(9083),e(6955);var O=e(3930);const m=new o.OlP("[INTERSECTION_OBSERVER_SUPPORT]: Intersection Observer API support",{providedIn:"root",factory:()=>!!(0,o.f3M)(O.m9).IntersectionObserver})},4808:(p,u,e)=>{e.d(u,{v:()=>s});var n=e(6889),t=e(4537),r=e(7241),a=e(815),o=e(153);let s=(()=>{var c;class i extends r.y{constructor(){const P=(0,t.f3M)(t.SBq).nativeElement,l=(0,t.f3M)(o.Z);return super(_=>(l.observe(P,O=>{_.next(O)}),()=>{l.unobserve(P)})),this.pipe((0,a.B)())}}return c=i,(0,n.Z)(i,"\u0275fac",function(P){return new(P||c)}),(0,n.Z)(i,"\u0275prov",t.Yz7({token:c,factory:c.\u0275fac})),i})()},9083:(p,u,e)=>{e.d(u,{O:()=>t});var n=e(4537);const t="0px 0px 0px 0px";new n.OlP("[INTERSECTION_ROOT_MARGIN]: rootMargin for IntersectionObserver",{providedIn:"root",factory:()=>t})},5659:(p,u,e)=>{e.d(u,{p:()=>t});const t=new(e(4537).OlP)("[INTERSECTION_ROOT]: Root element for IntersectionObserver")},6955:(p,u,e)=>{e.d(u,{O:()=>t});var n=e(4537);const t=0;new n.OlP("[INTERSECTION_THRESHOLD]: threshold for IntersectionObserver",{providedIn:"root",factory:()=>t})},8550:(p,u,e)=>{e.d(u,{Zh:()=>v,vK:()=>W,wF:()=>b,$c:()=>a,AN:()=>o});var n=e(4970),t=e(7969);function r(y,M,R){return y>=M&&y<=R}function a(){return y=>y.pipe((0,n.h)(({data:M})=>r(M[0],128,159)),(0,t.U)(M=>(r(M.data[0],128,143)&&(M.data[0]+=16,M.data[2]=0),M)))}function o(){return y=>y.pipe((0,t.U)(({data:M})=>M))}var s=e(6889),i=e(4537);let v=(()=>{var y;class M{transform(A,U){return function c(y,M=440){return 2**((y-69)/12)*M}(A,U)}}return y=M,(0,s.Z)(M,"\u0275fac",function(A){return new(A||y)}),(0,s.Z)(M,"\u0275pipe",i.Yjl({name:"frequency",type:y,pure:!0,standalone:!0})),M})();var P=e(8239),l=e(3930);const _=new i.OlP("[SYSEX]: Require sysex MIDI access",{providedIn:"root",factory:()=>!1}),O=new i.OlP("[MIDI_ACCESS]: Promise for MIDIAccess object",{providedIn:"root",factory:(y=(0,P.Z)(function*(){const M=(0,i.f3M)(l.s5),R=(0,i.f3M)(_);return M.requestMIDIAccess?M.requestMIDIAccess({sysex:R}):Promise.reject(new Error("Web MIDI API is not supported"))}),function(){return y.apply(this,arguments)})});new i.OlP("[MIDI_INPUT]: MIDIInput object");var y,f=e(985),E=e(1528),d=e(4581),D=e(1927),I=e(4945),T=e(6466);function h(y){return(0,f.D)((0,i.f3M)(O).catch(()=>null)).pipe((0,E.w)(M=>M?(0,d.R)(M,"statechange").pipe((0,t.U)(()=>[...M[y].values()]),(0,D.O)([...M[y].values()])):(0,I.of)([])),(0,T.d)(1))}new i.OlP("[MIDI_INPUTS]: Array of MIDI inputs",{factory:()=>h("inputs")});var C=e(3787),N=e(1860),B=e(815);const W=new i.OlP("[MIDI_MESSAGES]: All incoming MIDI messages stream",{providedIn:"root",factory:()=>(0,f.D)((0,i.f3M)(O).catch(y=>y)).pipe((0,E.w)(y=>y instanceof Error?(0,C._)(y):(0,d.R)(y,"statechange").pipe((0,D.O)(null),(0,E.w)(()=>(0,N.T)(...Array.from(y.inputs).map(([M,R])=>(0,d.R)(R,"midimessage")))))),(0,B.B)())}),b=(new i.OlP("[MIDI_OUTPUT]: MIDIOutput object"),new i.OlP("[MIDI_OUTPUTS]: Array of MIDI inputs",{factory:()=>h("outputs")}),new i.OlP("[MIDI_SUPPORT]: Web MIDI API support",{factory:()=>!!(0,i.f3M)(l.s5).requestMIDIAccess}));new i.OlP("[MIDI_INPUT_QUERY]: MIDIInput object id or name"),new i.OlP("[MIDI_OUTPUT_QUERY]: MIDIOutput object id or name")},9404:(p,u,e)=>{e.d(u,{_:()=>v,g:()=>l});var n=e(6889),t=e(4537),r=e(3787),a=e(7241),o=e(3072),s=e(4581),c=e(3528),i=e(3930);const v=new t.OlP("[NOTIFICATION_SUPPORT]: Is Notification API supported?",{factory:()=>"Notification"in(0,t.f3M)(i.m9)}),P=(0,r._)(()=>new Error("Notification API is not supported in your browser"));let l=(()=>{var _;class O{constructor(){(0,n.Z)(this,"support",(0,t.f3M)(v))}requestPermission(){return this.support?new a.y(f=>{var E;null==(E=Notification.requestPermission(d=>{f.next(d),f.complete()}))||E.catch(d=>f.error(d))}):P}open(f,E){return this.support?(0,o.P)(()=>{const d=new Notification(f,E),D=(0,s.R)(d,"close");return new a.y(I=>(I.next(d),()=>d.close())).pipe((0,c.R)(D))}):P}}return _=O,(0,n.Z)(O,"\u0275fac",function(f){return new(f||_)}),(0,n.Z)(O,"\u0275prov",t.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})),O})()},6823:(p,u,e)=>{e.d(u,{j:()=>r});var n=e(6889),t=e(4537);let r=(()=>{var a;class o{constructor(){(0,n.Z)(this,"amount",void 0),(0,n.Z)(this,"label",void 0),(0,n.Z)(this,"pending",void 0)}}return a=o,(0,n.Z)(o,"\u0275fac",function(c){return new(c||a)}),(0,n.Z)(o,"\u0275dir",t.lG2({type:a,selectors:[["","waPaymentItem","","paymentAmount","","paymentLabel",""]],inputs:{amount:["paymentAmount","amount"],label:["paymentLabel","label"],pending:["paymentPending","pending"]},standalone:!0})),o})()},3989:(p,u,e)=>{e.d(u,{x:()=>f});var n=e(6889),t=e(4537),r=e(4581),a=e(1528),o=e(985),s=e(3568),c=e(4945),i=e(815),v=e(4970),P=e(3005),l=e(4236),_=e(1602);function O(E){return E instanceof Error||E instanceof DOMException}var m=e(5219);let f=(()=>{var E;class d{constructor(){(0,n.Z)(this,"paymentHost",(0,t.f3M)(m.u)),(0,n.Z)(this,"paymentRequest",(0,t.f3M)(P.g)),(0,n.Z)(this,"nativeElement",(0,t.f3M)(t.SBq).nativeElement),(0,n.Z)(this,"methods",(0,t.f3M)(l.L)),(0,n.Z)(this,"options",(0,t.f3M)(_.d)),(0,n.Z)(this,"waPaymentSubmit",void 0),(0,n.Z)(this,"waPaymentError",void 0);const I=(0,r.R)(this.nativeElement,"click").pipe((0,a.w)(()=>(0,o.D)(this.paymentRequest.request({...this.paymentHost},this.methods,this.options)).pipe((0,s.K)(T=>(0,c.of)(T)))),(0,i.B)());this.waPaymentSubmit=I.pipe((0,v.h)(T=>!O(T))),this.waPaymentError=I.pipe((0,v.h)(O))}}return E=d,(0,n.Z)(d,"\u0275fac",function(I){return new(I||E)}),(0,n.Z)(d,"\u0275dir",t.lG2({type:E,selectors:[["","waPaymentSubmit",""]],outputs:{waPaymentSubmit:"waPaymentSubmit",waPaymentError:"waPaymentError"},standalone:!0})),d})()},5219:(p,u,e)=>{e.d(u,{u:()=>a});var n=e(6889),t=e(6823),r=e(4537);let a=(()=>{var o;class s{constructor(){(0,n.Z)(this,"total",void 0),(0,n.Z)(this,"id",void 0),(0,n.Z)(this,"modifiers",void 0),(0,n.Z)(this,"shippingOptions",void 0),(0,n.Z)(this,"displayItems",void 0)}set paymentItems(i){this.displayItems=i.toArray()}}return o=s,(0,n.Z)(s,"\u0275fac",function(i){return new(i||o)}),(0,n.Z)(s,"\u0275dir",r.lG2({type:o,selectors:[["","waPayment","","paymentTotal",""]],contentQueries:function(i,v,P){if(1&i&&r.Suo(P,t.j,4),2&i){let l;r.iGM(l=r.CRH())&&(v.paymentItems=l)}},inputs:{total:["paymentTotal","total"],id:["paymentId","id"],modifiers:["paymentModifiers","modifiers"],shippingOptions:["paymentShippingOptions","shippingOptions"]},standalone:!0})),s})()},459:(p,u,e)=>{e.d(u,{LM:()=>s.L,aB:()=>i.a,th:()=>a}),e(3989);var t=e(6889),r=e(4537);let a=(()=>{var v;class P{}return v=P,(0,t.Z)(P,"\u0275fac",function(_){return new(_||v)}),(0,t.Z)(P,"\u0275mod",r.oAB({type:v})),(0,t.Z)(P,"\u0275inj",r.cJS({})),P})();e(3005);var s=e(4236),i=(e(1602),e(4075))},3005:(p,u,e)=>{e.d(u,{g:()=>c});var n=e(8239),t=e(6889),r=e(4537),a=e(4236),o=e(1602),s=e(4075);let c=(()=>{var i;class v{constructor(){(0,t.Z)(this,"supported",(0,r.f3M)(s.a)),(0,t.Z)(this,"paymentMethods",(0,r.f3M)(a.L)),(0,t.Z)(this,"paymentOptions",(0,r.f3M)(o.d))}request(l,_=this.paymentMethods,O=this.paymentOptions){var m=this;return(0,n.Z)(function*(){if(!m.supported)return Promise.reject(new Error("Payment Request is not supported in your browser"));const f=new PaymentRequest(_,l,O);return f.canMakePayment().then(function(){var E=(0,n.Z)(function*(d){return d?f.show(l):Promise.reject(new Error("Payment Request cannot make the payment"))});return function(d){return E.apply(this,arguments)}}())})()}}return i=v,(0,t.Z)(v,"\u0275fac",function(l){return new(l||i)}),(0,t.Z)(v,"\u0275prov",r.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})),v})()},4236:(p,u,e)=>{e.d(u,{L:()=>t});const t=new(e(4537).OlP)("[PAYMENT_METHODS]: The methods used by Request Payment API",{factory:()=>[{supportedMethods:"basic-card"}]})},1602:(p,u,e)=>{e.d(u,{d:()=>t});const t=new(e(4537).OlP)("[PAYMENT_OPTIONS]: Additional data requests from payer",{factory:()=>({})})},4075:(p,u,e)=>{e.d(u,{a:()=>r});var n=e(4537),t=e(3930);const r=new n.OlP("[PAYMENT_REQUEST_SUPPORT]: Is Payment Request Api supported?",{factory:()=>!!(0,n.f3M)(t.m9).PaymentRequest})},3237:(p,u,e)=>{e.d(u,{Yc:()=>_,qQ:()=>O,ki:()=>f,_j:()=>m});var n=e(6889),t=e(4537),r=e(7241),a=e(985),o=e(1528),s=e(4581),c=e(1927),i=e(7969),v=e(6466),P=e(3930);const l=new t.OlP("[PERMISSIONS]: An abstraction over window.navigator.permissions object",{factory:()=>(0,t.f3M)(P.s5).permissions}),_=new t.OlP("[PERMISSIONS_SUPPORT]: Is Permissions API supported?",{factory:()=>!!(0,t.f3M)(l)});let O=(()=>{var d;class D{constructor(){(0,n.Z)(this,"permissions",(0,t.f3M)(l)),(0,n.Z)(this,"permissionsSupported",(0,t.f3M)(_))}state(T){const h="string"==typeof T?{name:T}:T;return new r.y(S=>{if(this.permissionsSupported)return(0,a.D)(this.permissions.query(h)).pipe((0,o.w)(C=>(0,s.R)(C,"change").pipe((0,c.O)(null),(0,i.U)(()=>C.state)))).subscribe(S);S.error("Permissions is not supported in your browser")}).pipe((0,v.d)({bufferSize:1,refCount:!0}))}}return d=D,(0,n.Z)(D,"\u0275fac",function(T){return new(T||d)}),(0,n.Z)(D,"\u0275prov",t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})),D})();function m(d){return"granted"===d}function f(d){return"denied"===d}},2725:(p,u,e)=>{e.d(u,{F:()=>r});var n=e(6523),t=e(1995);function r(a=0,o=n.z){return a<0&&(a=0),(0,t.H)(a,a,o)}}}]);