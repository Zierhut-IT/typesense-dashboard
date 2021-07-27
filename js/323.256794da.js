(self["webpackChunktypesense_dashboard"]=self["webpackChunktypesense_dashboard"]||[]).push([[323],{25816:(e,t,o)=>{"use strict";o.d(t,{Z:()=>h});var n=o(83673);const s=(0,n.HX)("data-v-46f34a38");(0,n.dD)("data-v-46f34a38");const i={ref:"editorWrapper",class:"col relative-position overflow-hidden editorWrapper"},l={ref:"editorElement",class:"absolute-top-left"};(0,n.Cn)();const d=s(((e,t,o,s,d,r)=>{const a=(0,n.up)("q-resize-observer");return(0,n.wg)(),(0,n.j4)("div",i,[(0,n.Wm)(a,{onResize:e.onResize},null,8,["onResize"]),(0,n.Wm)("div",l,null,512)],512)}));var r=o(55725),a=o(61959);const u=(0,n.aZ)({name:"MonacoEditor",props:{modelValue:{type:String,default:""},options:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:t}){const o=(0,a.iH)(null),s=(0,a.iH)(null);let i;return(0,n.bv)((()=>{i=r.editor.create(o.value,Object.assign({value:e.modelValue,language:"json",theme:"vs-dark",minimap:{enabled:!1}},e.options)),i.onDidChangeModelContent((()=>{t("update:modelValue",null===i||void 0===i?void 0:i.getValue())}))})),(0,n.Ah)((()=>{null===i||void 0===i||i.dispose()})),(0,n.YP)((()=>e.modelValue),(()=>{var t;e.modelValue!==(null===i||void 0===i?void 0:i.getValue())&&(null===(t=null===i||void 0===i?void 0:i.getModel())||void 0===t||t.setValue(e.modelValue),null===i||void 0===i||i.setScrollPosition({scrollTop:0}))})),{editorElement:o,editorWrapper:s,onResize(){null===i||void 0===i||i.layout({height:0,width:0}),window.setTimeout((()=>{null===i||void 0===i||i.layout({height:s.value.offsetHeight,width:s.value.offsetWidth})}))}}}});var c=o(15151),m=o(7518),p=o.n(m);u.render=d,u.__scopeId="data-v-46f34a38";const h=u;p()(u,"components",{QResizeObserver:c.Z})},97323:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>W});var n=o(83673),s=o(62323);const i={class:"row justify-between q-mb-md"},l={class:"text-h5"},d=(0,n.Uk)(" Import from file "),r={key:0},a={class:"row q-mb-md bg-primary text-white justify-between"},u=(0,n.Uk)("Add empty Document"),c={class:"row col-auto"},m=(0,n.Uk)("Import"),p={key:0};function h(e,t,o,h,v,f){const w=(0,n.up)("q-btn"),g=(0,n.up)("monaco-editor"),y=(0,n.up)("q-banner"),b=(0,n.up)("q-select"),k=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(k,{padding:"",class:"column"},{default:(0,n.w5)((()=>{var o;return[(0,n.Wm)("div",i,[(0,n.Wm)("div",l," Add Documents to "+(0,s.zw)(null===(o=e.$store.state.node.currentCollection)||void 0===o?void 0:o.name),1),(0,n.Wm)(w,{unelevated:"",onClick:t[1]||(t[1]=t=>e.importFile()),disable:!e.$q.platform.is.electron,icon:"attach_file"},{default:(0,n.w5)((()=>[d,e.$q.platform.is.electron?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)("span",r," (only desktop version)"))])),_:1},8,["disable"])]),(0,n.Wm)(g,{modelValue:e.documentsJson,"onUpdate:modelValue":t[2]||(t[2]=t=>e.documentsJson=t)},null,8,["modelValue"]),e.jsonError?((0,n.wg)(),(0,n.j4)(y,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Invalid Format: "+(0,s.zw)(e.jsonError),1)])),_:1})):(0,n.kq)("",!0),(0,n.Wm)("div",a,[(0,n.Wm)(w,{unelevated:"",size:"md",padding:"sm lg",color:"primary",onClick:t[3]||(t[3]=t=>e.addEmptyDocument())},{default:(0,n.w5)((()=>[u])),_:1}),(0,n.Wm)("div",c,[(0,n.Wm)(b,{dark:"",modelValue:e.action,"onUpdate:modelValue":t[4]||(t[4]=t=>e.action=t),"bottom-slots":"",label:"Action mode",filled:"",style:{width:"300px"},options:e.actionOptions},{hint:(0,n.w5)((()=>[(0,n.Wm)("div",null,(0,s.zw)(e.actionDesciptions[e.action]),1)])),_:1},8,["modelValue","options"]),(0,n.Wm)(w,{unelevated:"",size:"md",padding:"sm xl",color:"primary",onClick:t[5]||(t[5]=t=>e.importDocuments()),disable:!!e.jsonError},{default:(0,n.w5)((()=>[m])),_:1},8,["disable"])])]),(0,n.Wm)("div",null,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.results,((e,t)=>((0,n.wg)(),(0,n.j4)("div",{key:t},[(0,n.Uk)((0,s.zw)(t)+" "+(0,s.zw)(e.success)+" ",1),e.success?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)("span",p,(0,s.zw)(e.error),1))])))),128))])]})),_:1})}var v=o(25816),f=function(e,t,o,n){function s(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function l(e){try{r(n.next(e))}catch(t){i(t)}}function d(e){try{r(n["throw"](e))}catch(t){i(t)}}function r(e){e.done?o(e.value):s(e.value).then(l,d)}r((n=n.apply(e,t||[])).next())}))};const w=(0,n.aZ)({name:"Document",components:{MonacoEditor:v.Z},data(){return{jsonError:null,documents:[],results:[],action:"upsert",actionOptions:["create","upsert","update"],actionDesciptions:{create:"Create a new document. Fails if id exists.",upsert:"Create a new document or update an existing document.",update:"Update an existing document. Partial document allowed."}}},computed:{documentsJson:{get(){return JSON.stringify(this.documents,null,2)},set(e){try{this.documents=JSON.parse(e),this.jsonError=null}catch(t){this.jsonError=t.message}}},currentCollection(){return this.$store.state.node.currentCollection},documentsToEdit(){return this.$store.state.node.documentsToEdit}},methods:{importFile(){var e;return f(this,void 0,void 0,(function*(){this.results=[];try{this.results=yield this.$store.getters["node/api"].importFile(null===(e=this.currentCollection)||void 0===e?void 0:e.name,this.action)}catch(t){this.results=t.importResults}}))},importDocuments(){return f(this,void 0,void 0,(function*(){this.results=[];try{this.results=yield this.$store.dispatch("node/importDocuments",{action:this.action,documents:JSON.parse(JSON.stringify(this.documents))})}catch(e){this.results=e.importResults}}))},addEmptyDocument(){var e;const t=null===(e=this.currentCollection)||void 0===e?void 0:e.fields.reduce(((e,t)=>(e[t.name]=t.type.includes("[]")?[]:t.type.includes("string")?"":0,e)),{});this.documents.push(t)}},watch:{currentCollection:{handler(){this.documents=[],this.addEmptyDocument()},immediate:!0},documentsToEdit:{handler(){this.documentsToEdit&&this.documentsToEdit.length>0&&(this.documents=this.$store.state.node.documentsToEdit||[],this.action="upsert",this.$store.commit("node/setDocumentsToEdit",[]))},immediate:!0}}});var g=o(24379),y=o(48240),b=o(15607),k=o(97637),E=o(7518),j=o.n(E);w.render=h;const W=w;j()(w,"components",{QPage:g.Z,QBtn:y.Z,QBanner:b.Z,QSelect:k.Z})}}]);