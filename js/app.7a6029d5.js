(function(){"use strict";var e={1273:function(e,t,a){var i=a(6848),s=function(){var e=this,t=e._self._c;return t("div",[t("NavBar")],1)},n=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-container"},[t("nav",{staticClass:"sidebar"},[t("router-link",{staticClass:"sidebar-link",attrs:{to:"/abastecimentos"}},[t("i",{staticClass:"fas fa-gas-pump"}),e._v(" Abastecimentos ")]),t("router-link",{staticClass:"sidebar-link",attrs:{to:"/veiculos"}},[t("i",{staticClass:"fas fa-car"}),e._v(" Veículos ")]),t("router-link",{staticClass:"sidebar-link",attrs:{to:"/estoque"}},[t("i",{staticClass:"fas fa-boxes"}),e._v(" Estoque ")])],1),t("div",{staticClass:"content"},[t("router-view")],1)])},l=[],r={name:"NavBarView"},c=r,d=a(1656),m=(0,d.A)(c,o,l,!1,null,"cb605860",null),u=m.exports,b={components:{NavBar:u}},h=b,p=(0,d.A)(h,s,n,!1,null,"0f7509aa",null),f=p.exports,v=a(6178),g=function(){var e=this,t=e._self._c;return t("div",[t("md-table",{attrs:{"md-sort":"name","md-sort-order":"asc","md-card":"","md-fixed-header":""},scopedSlots:e._u([{key:"md-table-row",fn:function({item:a}){return t("md-table-row",{on:{click:function(t){return e.editAbastecimento(a)}}},[t("md-table-cell",{attrs:{"md-label":"ID","md-sort-by":"id","md-numeric":""}},[e._v(e._s(a.id))]),t("md-table-cell",{attrs:{"md-label":"Placa","md-sort-by":"placa"}},[e._v(e._s(a.placa))]),t("md-table-cell",{attrs:{"md-label":"Km","md-sort-by":"km"}},[e._v(e._s(a.km))]),t("md-table-cell",{attrs:{"md-label":"Hr","md-sort-by":"hr"}},[e._v(e._s(a.hr))]),t("md-table-cell",{attrs:{"md-label":"Litros","md-sort-by":"litros"}},[e._v(e._s(a.litros))]),t("md-table-cell",{attrs:{"md-label":"Veículo","md-sort-by":"veiculo"}},[e._v(e._s(a.veiculo))]),t("md-table-cell",[e._v(e._s(a.data))])],1)}}]),model:{value:e.searched,callback:function(t){e.searched=t},expression:"searched"}},[t("md-table-toolbar",[t("div",{staticClass:"md-toolbar-section-start"},[t("h1",{staticClass:"md-title"},[e._v("Abastecimentos")])]),t("md-field",{staticClass:"md-toolbar-section-end",attrs:{"md-clearable":""}},[t("md-input",{attrs:{placeholder:"Search by name..."},on:{input:e.searchOnTable},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t("div",{staticClass:"md-toolbar-section-end"},[t("md-button",{staticClass:"md-fab md-mini md-primary",on:{click:e.openModal}},[t("md-icon",[e._v("add")])],1)],1)],1)],1),t("md-dialog",{staticClass:"custom-modal",attrs:{"md-active":e.isModalOpen},on:{"update:mdActive":function(t){e.isModalOpen=t},"update:md-active":function(t){e.isModalOpen=t}}},[t("md-dialog-title",[e._v("Novo Abastecimento")]),t("md-dialog-content",[t("md-field",[t("label",[e._v("Placa")]),t("md-select",{on:{input:e.updateVeiculo},model:{value:e.newAbastecimento.placa,callback:function(t){e.$set(e.newAbastecimento,"placa",t)},expression:"newAbastecimento.placa"}},e._l(Object.keys(e.placaVeiculoMap),(function(a){return t("md-option",{key:a,attrs:{value:a}},[e._v(e._s(a))])})),1)],1),t("md-field",[t("label",[e._v("Km")]),t("md-input",{attrs:{type:"number"},model:{value:e.newAbastecimento.km,callback:function(t){e.$set(e.newAbastecimento,"km",t)},expression:"newAbastecimento.km"}})],1),t("md-field",[t("label",[e._v("Hr")]),t("md-input",{attrs:{type:"number"},model:{value:e.newAbastecimento.hr,callback:function(t){e.$set(e.newAbastecimento,"hr",t)},expression:"newAbastecimento.hr"}})],1),t("md-field",[t("label",[e._v("Litros")]),t("md-input",{attrs:{type:"number"},model:{value:e.newAbastecimento.litros,callback:function(t){e.$set(e.newAbastecimento,"litros",t)},expression:"newAbastecimento.litros"}})],1),t("md-field",[t("label",[e._v("Veículo")]),t("md-input",{model:{value:e.newAbastecimento.veiculo,callback:function(t){e.$set(e.newAbastecimento,"veiculo",t)},expression:"newAbastecimento.veiculo"}})],1),t("md-field",[t("label",[e._v("Data")]),t("md-input",{attrs:{type:"date",required:""},model:{value:e.newAbastecimento.data,callback:function(t){e.$set(e.newAbastecimento,"data",t)},expression:"newAbastecimento.data"}})],1)],1),t("md-dialog-actions",[t("md-button",{staticClass:"md-primary",on:{click:e.saveAbastecimento}},[e._v(" "+e._s(e.isEditing?"Salvar":"Adicionar")+" ")]),t("md-button",{staticClass:"md-secondary",on:{click:e.closeModal}},[e._v("Cancelar")])],1)],1)],1)},w=[],A=(a(4114),{name:"AbastecimentosView",data:()=>({search:null,searched:[],abastecimentos:[],isModalOpen:!1,isEditing:!1,newAbastecimento:{id:null,placa:"",km:"",hr:"",litros:"",veiculo:"",data:(new Date).toISOString().split("T")[0]},placaVeiculoMap:{"ABC-123":"CAMINHÃO COMPACTADOR","XYZ-789":"CAMINHÃO BETONEIRA","DEF-456":"CARRO UTILITÁRIO"}}),methods:{openModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1,this.resetForm()},addAbastecimento(){const{placa:e,km:t,hr:a,litros:i,veiculo:s,data:n}=this.newAbastecimento;if(!e||!t||!a||!i||!s||!n)return void alert("Por favor, preencha todos os campos.");const o={id:this.abastecimentos.length+1,...this.newAbastecimento};this.abastecimentos.push(o),this.saveToLocalStorage(),this.searchOnTable(),this.closeModal()},editAbastecimento(e){this.newAbastecimento={...e},this.isEditing=!0,this.isModalOpen=!0},saveAbastecimento(){const{placa:e,km:t,hr:a,litros:i,veiculo:s,data:n,id:o}=this.newAbastecimento;if(e&&t&&a&&i&&s&&n){if(this.isEditing){const e=this.abastecimentos.findIndex((e=>e.id===o));-1!==e&&this.abastecimentos.splice(e,1,{...this.newAbastecimento})}else this.newAbastecimento.id=this.abastecimentos.length>0?Math.max(...this.abastecimentos.map((e=>e.id)))+1:1,this.abastecimentos.push({...this.newAbastecimento});this.saveToLocalStorage(),this.searchOnTable(),this.closeModal()}else alert("Por favor, preencha todos os campos.")},saveToLocalStorage(){localStorage.setItem("abastecimentos",JSON.stringify(this.abastecimentos)),console.log("Dados salvos na Local Storage:",this.abastecimentos)},resetForm(){this.newAbastecimento={placa:"",km:"",hr:"",litros:"",veiculo:"",data:(new Date).toISOString().split("T")[0]},this.isEditing=!1},searchOnTable(){this.searched=this.abastecimentos.filter((e=>e.placa.toLowerCase().includes(this.search?this.search.toLowerCase():"")))},updateVeiculo(){const e=this.newAbastecimento.placa;this.newAbastecimento.veiculo=this.placaVeiculoMap[e]||""},loadFromLocalStorage(){const e=localStorage.getItem("abastecimentos");e&&(this.abastecimentos=JSON.parse(e)),this.searchOnTable()},clearLocalStorage(){localStorage.clear()}},created(){this.loadFromLocalStorage()}}),_=A,y=(0,d.A)(_,g,w,!1,null,"67cafd4e",null),k=y.exports,S=function(){var e=this,t=e._self._c;return t("div",[t("md-table",{attrs:{"md-sort":"name","md-sort-order":"asc","md-card":"","md-fixed-header":""},scopedSlots:e._u([{key:"md-table-row",fn:function({item:a}){return t("md-table-row",{},[t("md-table-cell",{attrs:{"md-label":"ID","md-sort-by":"id","md-numeric":""}},[e._v(e._s(a.id))]),t("md-table-cell",{attrs:{"md-label":"Name","md-sort-by":"name"}},[e._v(e._s(a.name))]),t("md-table-cell",{attrs:{"md-label":"Email","md-sort-by":"email"}},[e._v(e._s(a.email))]),t("md-table-cell",{attrs:{"md-label":"Gender","md-sort-by":"gender"}},[e._v(e._s(a.gender))]),t("md-table-cell",{attrs:{"md-label":"Job Title","md-sort-by":"title"}},[e._v(e._s(a.title))])],1)}}]),model:{value:e.searched,callback:function(t){e.searched=t},expression:"searched"}},[t("md-table-toolbar",[t("div",{staticClass:"md-toolbar-section-start"},[t("h1",{staticClass:"md-title"},[e._v("Veiculos")])]),t("md-field",{staticClass:"md-toolbar-section-end",attrs:{"md-clearable":""}},[t("md-input",{attrs:{placeholder:"Search by name..."},on:{input:e.searchOnTable},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t("md",{staticClass:"md-toolbar-section-end"},[t("md-button",{staticClass:"md-fab md-mini md-primary"},[t("md-icon",[e._v("add")])],1)],1)],1)],1)],1)},O=[];const C=e=>e.toString().toLowerCase(),M=(e,t)=>t?e.filter((e=>C(e.name).includes(C(t)))):e;var T={name:"AbastecimentosView",data:()=>({search:null,searched:[],users:[{id:1,name:"Shawna Dubbin",email:"sdubbin0@geocities.com",gender:"Male",title:"Assistant Media Planner"},{id:2,name:"Odette Demageard",email:"odemageard1@spotify.com",gender:"Female",title:"Account Coordinator"},{id:3,name:"Vera Taleworth",email:"vtaleworth2@google.ca",gender:"Male",title:"Community Outreach Specialist"},{id:4,name:"Lonnie Izkovitz",email:"lizkovitz3@youtu.be",gender:"Female",title:"Operator"},{id:5,name:"Thatcher Stave",email:"tstave4@reference.com",gender:"Male",title:"Software Test Engineer III"},{id:6,name:"Karim Chipping",email:"kchipping5@scribd.com",gender:"Female",title:"Safety Technician II"},{id:7,name:"Helge Holyard",email:"hholyard6@howstuffworks.com",gender:"Female",title:"Internal Auditor"},{id:8,name:"Rod Titterton",email:"rtitterton7@nydailynews.com",gender:"Male",title:"Technical Writer"},{id:9,name:"Gawen Applewhite",email:"gapplewhite8@reverbnation.com",gender:"Female",title:"GIS Technical Architect"},{id:10,name:"Nero Mulgrew",email:"nmulgrew9@plala.or.jp",gender:"Female",title:"Staff Scientist"},{id:11,name:"Cybill Rimington",email:"crimingtona@usnews.com",gender:"Female",title:"Assistant Professor"},{id:12,name:"Maureene Eggleson",email:"megglesonb@elpais.com",gender:"Male",title:"Recruiting Manager"},{id:13,name:"Cortney Caulket",email:"ccaulketc@cbsnews.com",gender:"Male",title:"Safety Technician IV"},{id:14,name:"Selig Swynfen",email:"sswynfend@cpanel.net",gender:"Female",title:"Environmental Specialist"},{id:15,name:"Ingar Raggles",email:"iragglese@cbc.ca",gender:"Female",title:"VP Sales"},{id:16,name:"Karmen Mines",email:"kminesf@topsy.com",gender:"Male",title:"Administrative Officer"},{id:17,name:"Salome Judron",email:"sjudrong@jigsy.com",gender:"Male",title:"Staff Scientist"},{id:18,name:"Clarinda Marieton",email:"cmarietonh@theatlantic.com",gender:"Male",title:"Paralegal"},{id:19,name:"Paxon Lotterington",email:"plotteringtoni@netvibes.com",gender:"Female",title:"Marketing Assistant"},{id:20,name:"Maura Thoms",email:"mthomsj@webeden.co.uk",gender:"Male",title:"Actuary"}]}),methods:{newUser(){window.alert("Noop")},searchOnTable(){this.searched=M(this.users,this.search)}},created(){this.searched=this.users}},x=T,I=(0,d.A)(x,S,O,!1,null,"18641c07",null),F=I.exports;i["default"].use(v.Ay);const L=[{path:"/",name:"home",component:k},{path:"/abastecimentos",name:"abastecimentos",component:k},{path:"/veiculos",name:"veiculos",component:F},{path:"*",redirect:"/"}],V=new v.Ay({mode:"history",base:"/",routes:L});var E=V,P=a(3518);i["default"].use(P.Ay);var j=new P.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),N=a(6851),D=a.n(N),R=a(1641),$=a(4486);a(9313);i["default"].use(D()),i["default"].use(R.vGs),i["default"].use($.YS),i["default"].config.productionTip=!1,new i["default"]({router:E,store:j,render:e=>e(f)}).$mount("#app")}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,i,s,n){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],s=e[d][1],n=e[d][2];for(var l=!0,r=0;r<i.length;r++)(!1&n||o>=n)&&Object.keys(a.O).every((function(e){return a.O[e](i[r])}))?i.splice(r--,1):(l=!1,n<o&&(o=n));if(l){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[i,s,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,n,o=i[0],l=i[1],r=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in l)a.o(l,s)&&(a.m[s]=l[s]);if(r)var d=r(a)}for(t&&t(i);c<o.length;c++)n=o[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(d)},i=self["webpackChunkcontrole_de_estoque"]=self["webpackChunkcontrole_de_estoque"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[504],(function(){return a(1273)}));i=a.O(i)})();
//# sourceMappingURL=app.7a6029d5.js.map