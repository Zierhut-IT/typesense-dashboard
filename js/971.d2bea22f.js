(self["webpackChunktypesense_dashboard"]=self["webpackChunktypesense_dashboard"]||[]).push([[971],{25816:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var o=a(83673);const l=(0,o.HX)("data-v-46f34a38");(0,o.dD)("data-v-46f34a38");const n={ref:"editorWrapper",class:"col relative-position overflow-hidden editorWrapper"},i={ref:"editorElement",class:"absolute-top-left"};(0,o.Cn)();const s=l(((e,t,a,l,s,r)=>{const d=(0,o.up)("q-resize-observer");return(0,o.wg)(),(0,o.j4)("div",n,[(0,o.Wm)(d,{onResize:e.onResize},null,8,["onResize"]),(0,o.Wm)("div",i,null,512)],512)}));var r=a(55725),d=a(61959);const c=(0,o.aZ)({name:"MonacoEditor",props:{modelValue:{type:String,default:""},options:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:t}){const a=(0,d.iH)(null),l=(0,d.iH)(null);let n;return(0,o.bv)((()=>{n=r.editor.create(a.value,Object.assign({value:e.modelValue,language:"json",theme:"vs-dark",minimap:{enabled:!1}},e.options)),n.onDidChangeModelContent((()=>{t("update:modelValue",null===n||void 0===n?void 0:n.getValue())}))})),(0,o.Ah)((()=>{null===n||void 0===n||n.dispose()})),(0,o.YP)((()=>e.modelValue),(()=>{var t;e.modelValue!==(null===n||void 0===n?void 0:n.getValue())&&(null===(t=null===n||void 0===n?void 0:n.getModel())||void 0===t||t.setValue(e.modelValue),null===n||void 0===n||n.setScrollPosition({scrollTop:0}))})),{editorElement:a,editorWrapper:l,onResize(){null===n||void 0===n||n.layout({height:0,width:0}),window.setTimeout((()=>{null===n||void 0===n||n.layout({height:l.value.offsetHeight,width:l.value.offsetWidth})}))}}}});var u=a(15151),p=a(7518),m=a.n(p);c.render=s,c.__scopeId="data-v-46f34a38";const f=c;m()(c,"components",{QResizeObserver:u.Z})},79971:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>V});var o=a(83673),l=a(62323);const n=(0,o.Uk)("Admin Key Example"),i=(0,o.Uk)("Search Key Example"),s=(0,o.Uk)("Documentation"),r=(0,o.Uk)("Create API Key");function d(e,t,a,d,c,u){const p=(0,o.up)("q-btn"),m=(0,o.up)("q-card-section"),f=(0,o.up)("monaco-editor"),y=(0,o.up)("q-banner"),h=(0,o.up)("q-card-actions"),g=(0,o.up)("q-card"),v=(0,o.up)("q-expansion-item"),b=(0,o.up)("q-icon"),w=(0,o.up)("q-input"),k=(0,o.up)("q-td"),_=(0,o.up)("q-table"),x=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(x,{padding:""},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{"expand-separator":"",icon:"vpn_key",label:"Create Api Key","header-class":"bg-primary text-white",modelValue:e.expanded,"onUpdate:modelValue":t[5]||(t[5]=t=>e.expanded=t)},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{style:{height:"60vh"},class:"bg-grey-3 column"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:"q-gutter-md"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{flat:"",onClick:t[1]||(t[1]=t=>e.loadAdminKey())},{default:(0,o.w5)((()=>[n])),_:1}),(0,o.Wm)(p,{flat:"",onClick:t[2]||(t[2]=t=>e.loadSearchKey())},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(p,{type:"a",icon:"help",color:"info",flat:"",href:"https://typesense.org/docs/0.21.0/api/api-keys.html#sample-actions",target:"_blank"},{default:(0,o.w5)((()=>[s])),_:1})])),_:1}),(0,o.Wm)(f,{modelValue:e.keyJson,"onUpdate:modelValue":t[3]||(t[3]=t=>e.keyJson=t)},null,8,["modelValue"]),e.jsonError?((0,o.wg)(),(0,o.j4)(y,{key:0,"inline-actions":"",class:"text-white bg-red"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Invalid Format: "+(0,l.zw)(e.jsonError),1)])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(h,{align:"right",class:"bg-primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{size:"md",padding:"sm lg",unelevated:"",color:"primary",disable:!!e.jsonError,onClick:t[4]||(t[4]=t=>e.createApiKey())},{default:(0,o.w5)((()=>[r])),_:1},8,["disable"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(_,{class:"q-mt-md",title:"Curations",flat:"",bordered:"",filter:e.filter,rows:e.$store.state.node.data.apiKeys,columns:e.columns,"row-key":"id","visible-columns":["id","value_prefix","description","actions","collections","expires_at","actions_op"]},{"top-right":(0,o.w5)((()=>[(0,o.Wm)(w,{borderless:"",dense:"",debounce:"300",modelValue:e.filter,"onUpdate:modelValue":t[6]||(t[6]=t=>e.filter=t),placeholder:"Search"},{append:(0,o.w5)((()=>[(0,o.Wm)(b,{name:"search"})])),_:1},8,["modelValue"])])),"body-cell-actions_op":(0,o.w5)((t=>[(0,o.Wm)(k,{class:"text-right"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{flat:"",color:"negative",onClick:a=>e.deleteApiKey(t.row.id),icon:"delete_forever",title:"Delete"},null,8,["onClick"])])),_:2},1024)])),_:1},8,["filter","rows","columns"])])),_:1})}var c=a(25816),u=function(e,t,a,o){function l(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,n){function i(e){try{r(o.next(e))}catch(t){n(t)}}function s(e){try{r(o["throw"](e))}catch(t){n(t)}}function r(e){e.done?a(e.value):l(e.value).then(i,s)}r((o=o.apply(e,t||[])).next())}))};const p={description:"Admin key.",actions:["*"],collections:["*"]},m={description:"Search-only companies key.",actions:["documents:search"],collections:["companies"]},f=(0,o.aZ)({name:"ApiKeys",components:{MonacoEditor:c.Z},data(){return{jsonError:null,key:JSON.parse(JSON.stringify(p)),expanded:0===this.$store.state.node.data.apiKeys.length,filter:"",columns:[{label:"ID",name:"id",field:"id",sortable:!0},{label:"Key prefix",name:"value_prefix",field:"value_prefix"},{label:"Description",name:"description",field:"description",sortable:!0,align:"left"},{label:"Key Actions",name:"actions",field:e=>JSON.stringify(e.actions),sortable:!0,align:"left"},{label:"Collections",name:"collections",field:e=>JSON.stringify(e.collections),sortable:!0,align:"left"},{label:"Expires at",name:"expires_at",field:e=>e.expires_at?64723363199===e.expires_at?"never":new Date(1e3*e.expires_at).toLocaleString():""},{label:"Actions",name:"actions_op",align:"right"}]}},computed:{keyJson:{get(){return JSON.stringify(this.key,null,2)},set(e){try{this.key=JSON.parse(e),this.jsonError=null}catch(t){this.jsonError=t.message}}}},methods:{loadAdminKey(){this.key=JSON.parse(JSON.stringify(p))},loadSearchKey(){this.key=JSON.parse(JSON.stringify(m))},createApiKey(){return u(this,void 0,void 0,(function*(){const e=yield this.$store.dispatch("node/createApiKey",JSON.parse(JSON.stringify(this.key)));this.$q.dialog({title:"Your API key",message:`This is your API key copy it! It will not be displayed again!\n\n${e.value||""}`,cancel:!1,persistent:!0})}))},deleteApiKey(e){this.$q.dialog({title:"Confirm",message:`Delete key with id: ${e}?`,cancel:!0,persistent:!0}).onOk((()=>{this.$store.dispatch("node/deleteApiKey",e)}))}}});var y=a(24379),h=a(64615),g=a(10151),v=a(25589),b=a(48240),w=a(15607),k=a(99367),_=a(83243),x=a(34842),S=a(24554),W=a(83884),A=a(7518),K=a.n(A);f.render=d;const V=f;K()(f,"components",{QPage:y.Z,QExpansionItem:h.Z,QCard:g.Z,QCardSection:v.Z,QBtn:b.Z,QBanner:w.Z,QCardActions:k.Z,QTable:_.Z,QInput:x.Z,QIcon:S.Z,QTd:W.Z})}}]);