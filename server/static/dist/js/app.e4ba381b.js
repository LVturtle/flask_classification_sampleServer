(function(t){function e(e){for(var s,r,c=e[0],l=e[1],o=e[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"036e":function(t,e,a){"use strict";a("3f4a")},"04fc":function(t,e,a){},"34e6":function(t,e,a){},"3f4a":function(t,e,a){},"52f6":function(t,e,a){"use strict";a("04fc")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r=(a("5c0b"),a("2877")),c={},l=Object(r["a"])(c,n,i,!1,null,null,null),o=l.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container pt-5 pb-5 mt-5 mb-5 h-100"},[a("div",{staticClass:"row h-100"},[a("div",{staticClass:"col-md-4 mb-3"},[a("div",{staticClass:"card d-flex align-items-center justify-content-center basic",on:{click:function(e){return t.$router.push({path:"inference"})}}},[t._m(0)])]),a("div",{staticClass:"col-md-4 mb-3"},[a("div",{staticClass:"card d-flex align-items-center justify-content-center  custom",on:{click:function(e){return t.$router.push({path:"train"})}}},[t._m(1)])]),a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card d-flex align-items-center justify-content-center  custom",on:{click:function(e){return t.$router.push({path:"models"})}}},[t._m(2)])])])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-left"},[a("strong",[t._v("기본, 커스텀 모델로 분류하고 싶어요.")]),a("br"),t._v(" 이미지를 업로드하면 됩니다. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-left"},[a("strong",[t._v("내가 원하는 모델을 만들고 싶어요.")]),a("br"),t._v(" 클래스당 30장 이상의 사진이 필요합니다. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-left"},[a("strong",[t._v("모델 저장소")]),a("br"),t._v(" 나의 학습 모델들을 확인할 수 있습니다. ")])}],m={name:"Models"},p=m,v=(a("cccb"),Object(r["a"])(p,d,f,!1,null,null,null)),h=v.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"inference"}},[a("div",{staticClass:"container pt-5 pb-5 mt-5 mb-5"},[a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col mb-3"},[a("div",[a("i",{staticClass:"mdi mdi-home-outline",on:{click:function(e){return t.$router.push({path:"/"})}}})]),t._v("홈 ")])]),a("div",{staticClass:"row mb-3 align-items-center"},[a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("strong",[t._v("분류하고 싶은 사진")]),t._v(" "),a("small",[t._v("(Model. InceptionV3)")]),null!=t.file?a("i",{staticClass:"mdi mdi-refresh ml-3",staticStyle:{"font-size":"18px",color:"black"},on:{click:t.deleteImage}}):t._e()]),a("div",{staticClass:"card-body",staticStyle:{"min-height":"400px"}},[a("div",{staticClass:"upload-div",attrs:{type:"fileUpload"},on:{dragenter:t.onDragenter,dragover:t.onDragover,dragleave:t.onDragleave,drop:t.onDrop,click:t.onClick}},[null==t.file?a("div",{staticClass:"h-100 d-flex align-items-center justify-content-center file-upload align-items-center"},[a("strong",[t._v("Drag & Drop Files")])]):a("div",[a("img",{staticClass:"preview",attrs:{src:t.thumbnail,height:"100%",width:"100%"}}),a("div",{staticClass:"mt-3"},[a("strong",[t._v(t._s(t.file.name))])])])])]),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:t.onFileChange}})])]),a("div",{staticClass:"col-md-2"},[t._m(0),a("div",[a("button",{staticClass:"btn btn-outline-primary mb-3",on:{click:t.inference}},[t._v("분류하기")])])]),a("div",{staticClass:"col-md-5"},[a("div",{staticClass:"card"},[t._m(1),a("div",{staticClass:"card-body",staticStyle:{"min-height":"400px"}},[t.isComplate?a("div",[a("img",{staticClass:"preview",attrs:{src:t.thumbnail,height:"100%",width:"100%"}}),a("div",{staticClass:"mt-3"},[a("strong",[t._v(t._s(t.predict))])])]):t._e()])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"input-group mb-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectModel,expression:"selectModel"}],staticClass:"custom-select",attrs:{id:"inputGroupSelect01"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectModel=e.target.multiple?a:a[0]}}},[a("option",[t._v("--- 베이스 모델을 골라주세요. ---")]),a("option",{attrs:{value:"base",selected:""}},[t._v("InceptionV3")]),t._l(t.models,(function(e,s){return a("option",{key:s,domProps:{value:s}},[t._v(t._s(e["name"]))])}))],2)])])])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("i",{staticClass:"mdi mdi-arrow-right-bold-outline",staticStyle:{"font-size":"48px"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("strong",[t._v("분류 결과")])])}],C=a("1da1"),_=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("b0c0"),a("99af"),a("bc3a")),x=a.n(_),w={name:"Inference",data:function(){return{file:null,thumbnail:null,isComplate:!1,predict:null,models:[],selectModel:"base"}},mounted:function(){this.init()},methods:{init:function(){this.loadModels()},onClick:function(){this.$refs.fileInput.click()},onDragenter:function(t){this.isDragged=!0},onDragleave:function(t){this.isDragged=!1},onDragover:function(t){t.preventDefault()},onDrop:function(t){t.preventDefault(),this.isDragged=!1;var e=t.dataTransfer.files[0];this.thumbnail=URL.createObjectURL(e),this.file=e},onFileChange:function(t){var e=t.target.files[0];this.thumbnail=URL.createObjectURL(e),this.file=e},deleteImage:function(){this.file=null,this.thumbnail=null,this.predict=null,this.isComplate=null,this.$refs.fileInput.value=""},inference:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("file",t.file),a.append("model","base"==t.selectModel?"base":t.models[t.selectModel]["name"]),console.log(t.selectModel),e.next=6,x.a.post("/api/inference",a,{header:{"Content-Type":"multipart/form-data"}});case 6:s=e.sent,s["data"]["success"]&&(t.isComplate=!0,n=s["data"]["predict"],n.length?t.predict="객체명: ".concat(n[0][0],"\n정확도: ").concat(n[0][1],"%"):t.predict="이미지에서 분류할 대상이 없습니다.");case 8:case"end":return e.stop()}}),e)})))()},loadModels:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/models");case 2:a=e.sent,t.models=a["data"]["models"];case 4:case"end":return e.stop()}}),e)})))()}}},y=w,k=(a("ef5d"),Object(r["a"])(y,g,b,!1,null,null,null)),D=k.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"train"}},[a("div",{staticClass:"container pt-3 pb-5 mt-5 mb-5 vh-100"},["local"==t.mode?a("local"):a("cam")],1)])},j=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"local"}},[t._m(0),a("div",{ref:"container"},[a("div",[a("div",{staticClass:"row align-items-center mb-2"},[a("div",{staticClass:"col-md-2 text-left"},[a("button",{staticClass:"btn btn-primary mb-2",attrs:{disabled:!t.isDisabled},on:{click:t.uploadImage}},[t._v("사진 업로드")]),a("button",{staticClass:"btn btn-primary",attrs:{disabled:!t.isDisabled},on:{click:t.wooUploadImage}},[t._v("사진 업로드 (우강)")])]),a("div",{staticClass:"col-md-8"},[a("div",[a("i",{staticClass:"mdi mdi-home-outline",on:{click:function(e){return t.$router.push({path:"/"})}}})]),t._m(1)]),a("div",{staticClass:"col-md-2 text-right"},[a("button",{staticClass:"btn btn-danger mb-2",attrs:{disabled:t.isDisabled},on:{click:t.trainImage}},[t._v("학습 시작")]),a("button",{staticClass:"btn btn-danger",attrs:{disabled:t.isDisabled},on:{click:t.wooTrainImage}},[t._v("학습 시작 (우강)")])])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"row h-100"},[a("div",{staticClass:"col-md-10"},[a("div",{ref:"files",staticClass:"card h-100"},[a("div",{staticClass:"card-header pb-2"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-2 text-left",on:{click:t.moveLeftClass}},[a("i",{staticClass:"mdi mdi-arrow-left",staticStyle:{"font-size":"16px"}})]),a("div",{staticClass:"col-8"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.classes[t.currIdx],expression:"classes[currIdx]"}],staticClass:"text-center p-0 m-0 card-title",attrs:{type:"text",disabled:t.isDisabledClass},domProps:{value:t.classes[t.currIdx]},on:{input:function(e){e.target.composing||t.$set(t.classes,t.currIdx,e.target.value)}}}),t.isDisabledClass?a("i",{staticClass:"mdi mdi-clipboard-edit-outline ml-3",staticStyle:{"font-size":"16px"},on:{click:function(e){return t.editClassName()}}}):a("i",{staticClass:"mdi mdi-check ml-3",staticStyle:{"font-size":"16px"},on:{click:function(e){t.isDisabledClass=!0},blur:function(e){t.isDisabledClass=!0}}})]),a("div",{staticClass:"col-2 text-right"},[t.currIdx==t.classes.length-1?a("i",{staticClass:"mdi mdi-folder-multiple-plus-outline",staticStyle:{"font-size":"16px"},on:{click:function(e){return t.addClass()}}}):a("i",{staticClass:"mdi mdi-arrow-right",staticStyle:{"font-size":"16px"},on:{click:function(e){return t.moveRightClass()}}}),a("i",{staticClass:"mdi mdi-delete ml-3",staticStyle:{"font-size":"16px",color:"grey"},on:{click:function(e){return t.deleteClass(t.currIdx)}}})])])]),a("div",{staticClass:"card-body local p-0"},[a("div",{staticClass:"upload-div",attrs:{type:"fileUpload"},on:{dragenter:t.onDragenter,dragover:t.onDragover,dragleave:t.onDragleave,drop:t.onDrop,click:t.onClick}},[t.fileList[t.currIdx].length?t._e():a("div",{staticClass:"d-flex align-items-center justify-content-center file-upload align-items-center",class:t.isDragged?"dragged":"",staticStyle:{height:"500px"}},[a("strong",[t._v("Drag & Drop Files")])])]),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",multiple:""},on:{change:t.onFileChange}}),t._l(t.fileList[t.currIdx],(function(e,s){return a("div",{key:s,on:{change:t.fileList[t.currIdx]}},[a("div",{staticStyle:{float:"left",padding:"5px"}},[a("div",{staticStyle:{position:"relative"}},[a("img",{staticClass:"upload-image",attrs:{src:e.src,width:parseInt(t.cardWidth/5)-30,height:parseInt(t.cardWidth/5*.56)}}),a("div",{staticStyle:{position:"absolute",top:"0",right:"0"},on:{click:function(e){return t.handleRemove(s)}}},[t._m(2,!0)])]),a("div",[t._v(" "+t._s(e.name)+" ")])])])}))],2)])]),a("div",{staticClass:"col-md-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header pb-2 card-title"},[t._v(" 클래스 목록 ")]),a("div",{staticClass:"card-body local"},[a("ul",t._l(t.classes,(function(e,s){return a("li",{key:s,staticClass:"mb-2 text-left",on:{click:function(e){t.currIdx=s}}},[t._v(" "+t._s(e)+" ("+t._s(t.fileList[s].length?t.fileList[s].length:0)+") ")])})),0)])])])])])])])])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Modal title")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[t._v(" ... ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("strong",[t._v("홈")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"mdi mdi-delete"})])}],$=(a("a434"),a("159b"),{name:"Local",data:function(){return{webCam:null,fileList:[[]],cardWidth:0,containerHeight:0,isDragged:!1,classes:["Class 1"],currIdx:0,createNum:1,imagePath:"",isDisabled:!0,isDisabledClass:!0,isProgress:!1}},mounted:function(){this.init()},methods:{init:function(){this.getCardWidth()},getCardWidth:function(){this.cardWidth=this.$refs.files.clientWidth,this.containerHeight=this.$refs.container.clientHeight},onClick:function(){this.$refs.fileInput.click()},onDragenter:function(t){this.isDragged=!0},onDragleave:function(t){this.isDragged=!1},onDragover:function(t){t.preventDefault()},onDrop:function(t){t.preventDefault(),this.isDragged=!1;var e=t.dataTransfer.files;this.addFiles(e)},onFileChange:function(t){var e=t.target.files;this.addFiles(e)},moveLeftClass:function(){this.currIdx>0&&(this.currIdx-=1)},moveRightClass:function(){this.currIdx<this.classes.length-1&&(this.currIdx+=1)},addFiles:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function a(){var s,n,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:s=[],n=0;case 2:if(!(n<t.length)){a.next=11;break}return a.next=5,e.readFiles(t[n]);case 5:i=a.sent,t[n].src=i,s.push(t[n]);case 8:n++,a.next=2;break;case 11:e.$set(e.fileList,e.currIdx,e.fileList[e.currIdx].concat(s));case 12:case"end":return a.stop()}}),a)})))()},readFiles:function(t){return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var s=new FileReader;s.onload=function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e(a.target.result);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s.readAsDataURL(t)})));case 1:case"end":return e.stop()}}),e)})))()},handleRemove:function(t){this.$refs.fileInput.value="",this.fileList[this.currIdx].splice(t,1)},deleteClass:function(t){t&&(this.moveLeftClass(),this.$delete(this.classes,t),this.$delete(this.fileList,t))},addClass:function(){this.classes.push("Class ".concat(this.createNum+1)),1!=this.classes.length&&this.fileList.push([]),this.createNum+=1,this.moveRightClass()},editClassName:function(){this.isDisabledClass=!1},convertFiles:function(){var t=this,e={};return e["classes"]=this.classes,this.fileList.forEach((function(a,s){e[t.classes[s]]=a})),e},uploadImageCheck:function(){var t=0;return this.fileList.forEach((function(e){t+=e.length})),!!t},uploadImage:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.uploadImageCheck()){e.next=2;break}return e.abrupt("return",!1);case 2:return a=t.convertFiles(),t.isProgress=!0,e.next=6,x.a.post("/api/upload",a);case 6:s=e.sent,s["data"]["success"]?(t.imagePath=s["data"]["path"],t.isProgress=!1):t.isProgress=!1,t.isDisabled=!1;case 9:case"end":return e.stop()}}),e)})))()},trainImage:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/train",t.imagePath);case 2:if(a=e.sent,!a["data"]["success"]){e.next=7;break}t.$router.push("/models"),e.next=10;break;case 7:return t.isProgress=!0,t.isDisabled=!0,e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})))()},wooUploadImage:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.uploadImageCheck()){e.next=2;break}return e.abrupt("return",!1);case 2:return a=t.convertFiles(),t.isProgress=!0,e.next=6,x.a.post("/woo/upload",a);case 6:s=e.sent,s["data"]["success"]?(t.imagePath=s["data"]["path"],t.isProgress=!1):t.isProgress=!1,t.isDisabled=!1;case 9:case"end":return e.stop()}}),e)})))()},wooTrainImage:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/woo/train",t.imagePath);case 2:if(a=e.sent,!a["data"]["success"]){e.next=7;break}t.$router.push("/train/modelSummary"),e.next=10;break;case 7:return t.isProgress=!0,t.isDisabled=!0,e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e)})))()}}}),L=$,M=(a("9b8e"),Object(r["a"])(L,R,O,!1,null,null,null)),P=M.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"cam"}},[a("vue-web-cam")],1)},E=[],F=(a("b3cb"),{name:"Cam"}),U=F,T=Object(r["a"])(U,S,E,!1,null,null,null),z=T.exports,N={name:"Train",components:{Local:P,Cam:z},data:function(){return{mode:"local",modelInfo:null}},methods:{}},W=N,H=(a("036e"),Object(r["a"])(W,I,j,!1,null,null,null)),A=H.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"models"}},[a("div",{staticClass:"container pt-3 pb-5 mt-5 mb-5 h-100"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col mb-3"},[a("div",[a("i",{staticClass:"mdi mdi-home-outline",on:{click:function(e){return t.$router.push({path:"/"})}}})]),t._v("홈")])]),a("div",{staticClass:"row d-flex justify-content-center align-items-center"},[a("table",{staticClass:"h-100 w-100",attrs:{border:"1"}},[a("th",[t._v("번호")]),a("th",[t._v("프로젝트 명")]),a("th",[t._v("학습 완료 여부")]),a("th",[t._v("관리")]),t._l(t.models,(function(e,s){return a("tr",{key:s},[a("td",[t._v(" "+t._s(s+1)+" ")]),a("td",[t._v(" "+t._s(e["name"])+" ")]),a("td",[t._v(" "+t._s(e["progress"])+" ")]),"학습 완료"==e["progress"]?a("td",[a("button",{staticClass:"btn btn-primary mr-3",on:{click:function(a){return t.downloadModel(e["name"])}}},[t._v("다운로드")]),a("button",{staticClass:"btn btn-danger",on:{click:function(a){return t.deleteModel(e["name"])}}},[t._v("삭제")])]):a("td",[a("div",[t._v(" "+t._s(e["progress"])+" ")])])])}))],2)])])])},V=[],B={data:function(){return{models:[]}},mounted:function(){this.init()},methods:{init:function(){this.loadModels()},loadModels:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/api/models");case 2:a=e.sent,t.models=a["data"]["models"],console.log(a);case 5:case"end":return e.stop()}}),e)})))()},downloadModel:function(t){return Object(C["a"])(regeneratorRuntime.mark((function e(){var a,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/download/".concat(t),{},{responseType:"arraybuffer"});case 2:a=e.sent,s=URL.createObjectURL(new Blob([a.data],{type:"application/zip"})),n=document.createElement("a"),n.href=s,n.setAttribute("download","output.zip"),n.click(),n.remove(),window.URL.revokeObjectURL(s);case 10:case"end":return e.stop()}}),e)})))()},deleteModel:function(t){return Object(C["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/delete/".concat(t));case 2:a=e.sent,console.log(a);case 4:case"end":return e.stop()}}),e)})))()}}},G=B,q=(a("52f6"),Object(r["a"])(G,J,V,!1,null,null,null)),K=q.exports;s["a"].use(u["a"]);var Q=[{path:"/",name:"Home",component:h},{path:"/train",name:"Train",component:A},{path:"/models",name:"Models",component:K},{path:"/inference",name:"Inference",component:D}],X=new u["a"]({mode:"hash",base:"/",routes:Q}),Y=X;s["a"].config.productionTip=!1,new s["a"]({router:Y,render:function(t){return t(o)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5ced":function(t,e,a){},"9b8e":function(t,e,a){"use strict";a("f29c")},"9c0c":function(t,e,a){},cccb:function(t,e,a){"use strict";a("5ced")},ef5d:function(t,e,a){"use strict";a("34e6")},f29c:function(t,e,a){}});
//# sourceMappingURL=app.e4ba381b.js.map