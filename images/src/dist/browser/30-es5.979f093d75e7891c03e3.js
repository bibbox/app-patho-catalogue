!function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{CrS0:function(e,t,n){var r={"./custom/app/+collection-page/collection-page.component":["i1B+",0,43]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id="CrS0",e.exports=i},njH3:function(e,t,i){"use strict";i.d(t,"a",(function(){return D}));var a=i("QOHy"),c=i("ye/0"),l=i("KPLb"),u=i("8Y7J"),d=i("TSSN"),p=i("lI3o"),s=i("Vurf"),f=i("mrqg"),m=i("X/78"),v=i("mycY"),x=i("O/5o"),g=i("SVse"),b=i("mXTb"),y=i("4zj/"),h=i("hqmO");function I(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",15),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"](4).deleteLogo()})),u["\u0275\u0275pipe"](1,"translate"),u["\u0275\u0275text"](2,"\n                "),u["\u0275\u0275element"](3,"i",16),u["\u0275\u0275text"](4,"\n              "),u["\u0275\u0275elementEnd"]()}if(2&e){var r=u["\u0275\u0275nextContext"](4);u["\u0275\u0275propertyInterpolate"]("title",u["\u0275\u0275pipeBind1"](1,1,r.type.value+".edit.logo.delete.title"))}}function S(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",17),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"](4).undoDeleteLogo()})),u["\u0275\u0275pipe"](1,"translate"),u["\u0275\u0275text"](2,"\n                "),u["\u0275\u0275element"](3,"i",18),u["\u0275\u0275text"](4,"\n              "),u["\u0275\u0275elementEnd"]()}if(2&e){var r=u["\u0275\u0275nextContext"](4);u["\u0275\u0275propertyInterpolate"]("title",u["\u0275\u0275pipeBind1"](1,1,r.type.value+".edit.logo.delete-undo.title"))}}function C(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",12),u["\u0275\u0275text"](1,"\n              "),u["\u0275\u0275template"](2,I,5,3,"button",13),u["\u0275\u0275text"](3,"\n              "),u["\u0275\u0275template"](4,S,5,3,"button",14),u["\u0275\u0275text"](5,"\n            "),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"](3);u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",!n.markLogoForDeletion),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",n.markLogoForDeletion)}}var j=function(e){return{"alert-danger":e}};function w(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",7),u["\u0275\u0275text"](1,"\n        "),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275text"](3,"\n          "),u["\u0275\u0275elementStart"](4,"div",8),u["\u0275\u0275text"](5,"\n            "),u["\u0275\u0275element"](6,"ds-comcol-page-logo",9),u["\u0275\u0275text"](7,"\n          "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](8,"\n          "),u["\u0275\u0275elementStart"](9,"div",10),u["\u0275\u0275text"](10,"\n            "),u["\u0275\u0275template"](11,C,6,2,"div",11),u["\u0275\u0275text"](12,"\n          "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](13,"\n        "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](14,"\n      "),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]().ngVar,r=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("ngClass",u["\u0275\u0275pureFunction1"](3,j,r.markLogoForDeletion)),u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("logo",n),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("ngIf",n)}}function E(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"ds-uploader",20),u["\u0275\u0275listener"]("onCompleteItem",(function(){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"](3).onCompleteItem()}))("onUploadError",(function(){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"](3).onUploadError()})),u["\u0275\u0275elementEnd"]()}if(2&e){var r=u["\u0275\u0275nextContext"](3);u["\u0275\u0275property"]("dropMsg",r.type.value+".edit.logo.upload")("dropOverDocumentMsg",r.type.value+".edit.logo.upload")("enableDragOverDocument",!0)("uploadFilesOptions",r.uploadFilesOptions)}}function O(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",2),u["\u0275\u0275text"](1,"\n        "),u["\u0275\u0275template"](2,E,1,4,"ds-uploader",19),u["\u0275\u0275pipe"](3,"async"),u["\u0275\u0275text"](4,"\n      "),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"](2);u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",u["\u0275\u0275pipeBind1"](3,1,n.initializedUploaderOptions))}}function k(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275text"](1,"\n      "),u["\u0275\u0275template"](2,w,15,5,"div",5),u["\u0275\u0275text"](3,"\n      "),u["\u0275\u0275template"](4,O,5,3,"div",6),u["\u0275\u0275text"](5,"\n    "),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.ngVar;u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",n),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngIf",!n)}}function V(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"ds-form",21),u["\u0275\u0275listener"]("submitForm",(function(){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().onSubmit()})),u["\u0275\u0275text"](1,"\n  "),u["\u0275\u0275elementStart"](2,"button",22),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().back.emit()})),u["\u0275\u0275text"](3,"\n    "),u["\u0275\u0275element"](4,"i",23),u["\u0275\u0275text"](5),u["\u0275\u0275pipe"](6,"translate"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](7,"\n"),u["\u0275\u0275elementEnd"]()}if(2&e){var r=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("formId","comcol-form-id")("formModel",r.formModel)("displayCancel",!1),u["\u0275\u0275advance"](5),u["\u0275\u0275textInterpolate1"](" ",u["\u0275\u0275pipeBind1"](6,4,r.type.value+".edit.return"),"\n  ")}}var D=function(){var e=function(e){r(i,e);var t=o(i);function i(e,r,o,l,u,d,p){var s;return n(this,i),(s=t.call(this,e,r,o,l,d,p)).formService=e,s.translate=r,s.notificationsService=o,s.authService=l,s.dsoService=u,s.requestService=d,s.objectCache=p,s.dso=new c.a,s.type=c.a.type,s.formModel=[new a.I({id:"title",name:"dc.title",required:!0,validators:{required:null},errorMessages:{required:"Please enter a name for this title"}}),new a.O({id:"description",name:"dc.description"}),new a.O({id:"abstract",name:"dc.description.abstract"}),new a.O({id:"rights",name:"dc.rights"}),new a.O({id:"tableofcontents",name:"dc.description.tableofcontents"}),new a.O({id:"license",name:"dc.rights.license"}),new a.O({id:"provenance",name:"dc.description.provenance"})],s}return i}(l.a);return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](a.F),u["\u0275\u0275directiveInject"](d.f),u["\u0275\u0275directiveInject"](p.a),u["\u0275\u0275directiveInject"](s.a),u["\u0275\u0275directiveInject"](f.a),u["\u0275\u0275directiveInject"](m.a),u["\u0275\u0275directiveInject"](v.a))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["ds-collection-form"]],inputs:{dso:"dso"},features:[u["\u0275\u0275InheritDefinitionFeature"]],decls:18,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","d-inline-block"],[4,"ngVar"],[3,"formId","formModel","displayCancel","submitForm",4,"ngIf"],["class","col-12 d-inline-block alert","id","logo-section",3,"ngClass",4,"ngIf"],["class","col-12 d-inline-block",4,"ngIf"],["id","logo-section",1,"col-12","d-inline-block","alert",3,"ngClass"],[1,"col-8","d-inline-block"],[3,"logo"],[1,"col-4","d-inline-block"],["class","btn-group btn-group-sm float-right","role","group",4,"ngIf"],["role","group",1,"btn-group","btn-group-sm","float-right"],["type","button","class","btn btn-danger",3,"title","click",4,"ngIf"],["type","button","class","btn btn-warning",3,"title","click",4,"ngIf"],["type","button",1,"btn","btn-danger",3,"title","click"],["aria-hidden","true",1,"fas","fa-trash"],["type","button",1,"btn","btn-warning",3,"title","click"],["aria-hidden","true",1,"fas","fa-undo"],[3,"dropMsg","dropOverDocumentMsg","enableDragOverDocument","uploadFilesOptions","onCompleteItem","onUploadError",4,"ngIf"],[3,"dropMsg","dropOverDocumentMsg","enableDragOverDocument","uploadFilesOptions","onCompleteItem","onUploadError"],[3,"formId","formModel","displayCancel","submitForm"],["before","",1,"btn","btn-outline-secondary",3,"click"],[1,"fas","fa-arrow-left"]],template:function(e,t){var n;1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275text"](1,"\n  "),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275text"](3,"\n    "),u["\u0275\u0275elementStart"](4,"div",2),u["\u0275\u0275text"](5,"\n      "),u["\u0275\u0275elementStart"](6,"label"),u["\u0275\u0275text"](7),u["\u0275\u0275pipe"](8,"translate"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](9,"\n    "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](10,"\n    "),u["\u0275\u0275template"](11,k,6,2,"ng-container",3),u["\u0275\u0275pipe"](12,"async"),u["\u0275\u0275text"](13,"\n  "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](14,"\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275text"](15,"\n"),u["\u0275\u0275template"](16,V,8,6,"ds-form",4),u["\u0275\u0275text"](17,"\n")),2&e&&(u["\u0275\u0275advance"](7),u["\u0275\u0275textInterpolate"](u["\u0275\u0275pipeBind1"](8,3,t.type.value+".edit.logo.label")),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngVar",null==(n=u["\u0275\u0275pipeBind1"](12,5,null==t.dso?null:t.dso.logo))?null:n.payload),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("ngIf",t.formModel))},directives:[x.a,g.u,g.r,b.a,y.a,h.a],pipes:[d.e,g.b],styles:[""]}),e}()},yBEL:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("PCNd"),o=r("8Y7J"),a=function(){var e=function e(){n(this,e)};return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.a]]}),e}()},ztM6:function(e,i,a){"use strict";a.r(i),a.d(i,"CollectionPageModule",(function(){return ke}));var c,l,u=a("SVse"),d=a("PCNd"),p=a("iInd"),s=a("Hkor"),f=a("DExz"),m=a("ye/0"),v=a("8Y7J"),x=a("mrqg"),g=a("DNva"),b=a("ppE2"),y=a("lI3o"),h=a("TSSN"),I=a("X/78"),S=a("njH3"),C=function(e){return{parent:e}},j=((c=function(e){r(i,e);var t=o(i);function i(e,r,o,a,c,l,u){var d;return n(this,i),(d=t.call(this,r,e,o,a,c,l,u)).communityDataService=e,d.collectionDataService=r,d.routeService=o,d.router=a,d.notificationsService=c,d.translate=l,d.requestService=u,d.frontendURL="/collections/",d.type=m.a.type,d}return i}(f.a)).\u0275fac=function(e){return new(e||c)(v["\u0275\u0275directiveInject"](x.a),v["\u0275\u0275directiveInject"](g.a),v["\u0275\u0275directiveInject"](b.a),v["\u0275\u0275directiveInject"](p.g),v["\u0275\u0275directiveInject"](y.a),v["\u0275\u0275directiveInject"](h.f),v["\u0275\u0275directiveInject"](I.a))},c.\u0275cmp=v["\u0275\u0275defineComponent"]({type:c,selectors:[["ds-create-collection"]],features:[v["\u0275\u0275InheritDefinitionFeature"]],decls:16,vars:8,consts:[[1,"container"],[1,"row"],[1,"col-12","pb-4"],["id","sub-header",1,"border-bottom","pb-2"],[3,"submitForm","back","finish"]],template:function(e,t){var n;1&e&&(v["\u0275\u0275elementStart"](0,"div",0),v["\u0275\u0275text"](1,"\n    "),v["\u0275\u0275elementStart"](2,"div",1),v["\u0275\u0275text"](3,"\n        "),v["\u0275\u0275elementStart"](4,"div",2),v["\u0275\u0275text"](5,"\n            "),v["\u0275\u0275elementStart"](6,"h2",3),v["\u0275\u0275text"](7),v["\u0275\u0275pipe"](8,"translate"),v["\u0275\u0275pipe"](9,"async"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](10,"\n        "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](11,"\n    "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](12,"\n    "),v["\u0275\u0275elementStart"](13,"ds-collection-form",4),v["\u0275\u0275listener"]("submitForm",(function(e){return t.onSubmit(e)}))("back",(function(){return t.navigateToHome()}))("finish",(function(){return t.navigateToNewPage()})),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](14,"\n"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](15,"\n")),2&e&&(v["\u0275\u0275advance"](7),v["\u0275\u0275textInterpolate"](v["\u0275\u0275pipeBind2"](8,1,"collection.create.sub-head",v["\u0275\u0275pureFunction1"](6,C,null==(n=v["\u0275\u0275pipeBind1"](9,4,t.parentRD$))?null:n.payload.name))))},directives:[S.a],pipes:[h.e,u.b],styles:[""]}),c),w=a("tPZA"),E=a("J3qs"),O=a("lJxs"),k=a("vkgz"),V=a("LRne"),D=a("1QIV"),F=((l=function(){function e(t,r){n(this,e),this.router=t,this.communityService=r}return t(e,[{key:"canActivate",value:function(e,t){var n=this,r=e.queryParams.parent;return Object(E.a)(r)?(this.router.navigate(["/404"]),Object(V.a)(!1)):this.communityService.findById(r).pipe(Object(D.g)(),Object(O.a)((function(e){return Object(E.b)(e)&&e.hasSucceeded&&Object(E.b)(e.payload)})),Object(k.a)((function(e){e||n.router.navigate(["/404"])})))}}]),e}()).\u0275fac=function(e){return new(e||l)(v["\u0275\u0275inject"](p.g),v["\u0275\u0275inject"](x.a))},l.\u0275prov=v["\u0275\u0275defineInjectable"]({token:l,factory:l.\u0275fac}),l),B=a("Bvcw"),M=a("O/5o"),P=function(e){return{dso:e}};function R(e,t){if(1&e){var n=v["\u0275\u0275getCurrentView"]();v["\u0275\u0275elementContainerStart"](0),v["\u0275\u0275text"](1,"\n            "),v["\u0275\u0275elementStart"](2,"div",3),v["\u0275\u0275text"](3,"\n                "),v["\u0275\u0275elementStart"](4,"h2",4),v["\u0275\u0275text"](5),v["\u0275\u0275pipe"](6,"translate"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](7,"\n                "),v["\u0275\u0275elementStart"](8,"p",5),v["\u0275\u0275text"](9),v["\u0275\u0275pipe"](10,"translate"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](11,"\n                "),v["\u0275\u0275elementStart"](12,"div",6),v["\u0275\u0275text"](13,"\n                  "),v["\u0275\u0275elementStart"](14,"div",7),v["\u0275\u0275text"](15,"\n                    "),v["\u0275\u0275elementStart"](16,"button",8),v["\u0275\u0275listener"]("click",(function(){v["\u0275\u0275restoreView"](n);var e=t.ngVar;return v["\u0275\u0275nextContext"]().onCancel(e)})),v["\u0275\u0275text"](17,"\n                      "),v["\u0275\u0275element"](18,"i",9),v["\u0275\u0275text"](19),v["\u0275\u0275pipe"](20,"translate"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](21,"\n                    "),v["\u0275\u0275elementStart"](22,"button",10),v["\u0275\u0275listener"]("click",(function(){v["\u0275\u0275restoreView"](n);var e=t.ngVar;return v["\u0275\u0275nextContext"]().onConfirm(e)})),v["\u0275\u0275text"](23,"\n                      "),v["\u0275\u0275element"](24,"i",11),v["\u0275\u0275text"](25),v["\u0275\u0275pipe"](26,"translate"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](27,"\n                  "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](28,"\n                "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](29,"\n            "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](30,"\n        "),v["\u0275\u0275elementContainerEnd"]()}if(2&e){var r=t.ngVar;v["\u0275\u0275advance"](5),v["\u0275\u0275textInterpolate"](v["\u0275\u0275pipeBind1"](6,4,"community.delete.head")),v["\u0275\u0275advance"](4),v["\u0275\u0275textInterpolate"](v["\u0275\u0275pipeBind2"](10,6,"community.delete.text",v["\u0275\u0275pureFunction1"](13,P,r.name))),v["\u0275\u0275advance"](10),v["\u0275\u0275textInterpolate1"](" ",v["\u0275\u0275pipeBind1"](20,9,"community.delete.cancel"),"\n                    "),v["\u0275\u0275advance"](6),v["\u0275\u0275textInterpolate1"](" ",v["\u0275\u0275pipeBind1"](26,11,"community.delete.confirm"),"\n                    ")}}var T,L=((T=function(e){r(i,e);var t=o(i);function i(e,r,o,a,c,l){var u;return n(this,i),(u=t.call(this,e,r,o,a,c,l)).dsoDataService=e,u.router=r,u.route=o,u.notifications=a,u.translate=c,u.requestService=l,u.frontendURL="/collections/",u}return i}(B.a)).\u0275fac=function(e){return new(e||T)(v["\u0275\u0275directiveInject"](g.a),v["\u0275\u0275directiveInject"](p.g),v["\u0275\u0275directiveInject"](p.a),v["\u0275\u0275directiveInject"](y.a),v["\u0275\u0275directiveInject"](h.f),v["\u0275\u0275directiveInject"](I.a))},T.\u0275cmp=v["\u0275\u0275defineComponent"]({type:T,selectors:[["ds-delete-collection"]],features:[v["\u0275\u0275InheritDefinitionFeature"]],decls:9,vars:3,consts:[[1,"container"],[1,"row"],[4,"ngVar"],[1,"col-12","pb-4"],["id","header",1,"border-bottom","pb-2"],[1,"pb-2"],[1,"form-group","row"],[1,"col","text-right"],[1,"btn","btn-outline-secondary",3,"click"],[1,"fas","fa-times"],[1,"btn","btn-danger","mr-2",3,"click"],[1,"fas","fa-trash"]],template:function(e,t){var n;1&e&&(v["\u0275\u0275elementStart"](0,"div",0),v["\u0275\u0275text"](1,"\n    "),v["\u0275\u0275elementStart"](2,"div",1),v["\u0275\u0275text"](3,"\n        "),v["\u0275\u0275template"](4,R,31,15,"ng-container",2),v["\u0275\u0275pipe"](5,"async"),v["\u0275\u0275text"](6,"\n\n    "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](7,"\n\n"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](8,"\n")),2&e&&(v["\u0275\u0275advance"](4),v["\u0275\u0275property"]("ngVar",null==(n=v["\u0275\u0275pipeBind1"](5,1,t.dsoRD$))?null:n.payload))},directives:[M.a],pipes:[u.b,h.e],styles:[""]}),T),A=a("SxV6"),N=a("eIep"),U=a("HaPv"),q=a("ac5F"),_=a("lP90"),J=a("5FsK"),Y=a("Frqi"),$=a("VYMa"),z=function(e){return{collection:e}};function H(e,t){if(1&e&&(v["\u0275\u0275elementContainerStart"](0),v["\u0275\u0275text"](1,"\n        "),v["\u0275\u0275elementStart"](2,"h2",8),v["\u0275\u0275text"](3),v["\u0275\u0275pipe"](4,"translate"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](5,"\n        "),v["\u0275\u0275element"](6,"ds-item-metadata",9),v["\u0275\u0275text"](7,"\n        "),v["\u0275\u0275elementStart"](8,"button",10),v["\u0275\u0275text"](9),v["\u0275\u0275pipe"](10,"translate"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](11,"\n      "),v["\u0275\u0275elementContainerEnd"]()),2&e){var n=v["\u0275\u0275nextContext"]().ngVar,r=v["\u0275\u0275nextContext"]().ngVar,i=v["\u0275\u0275nextContext"]();v["\u0275\u0275advance"](3),v["\u0275\u0275textInterpolate"](v["\u0275\u0275pipeBind2"](4,5,"collection.edit.template.head",v["\u0275\u0275pureFunction1"](10,z,null==r?null:r.name))),v["\u0275\u0275advance"](3),v["\u0275\u0275property"]("updateService",i.itemTemplateService)("item",null==n?null:n.payload),v["\u0275\u0275advance"](2),v["\u0275\u0275property"]("routerLink",i.getCollectionEditUrl(r)),v["\u0275\u0275advance"](1),v["\u0275\u0275textInterpolate"](v["\u0275\u0275pipeBind1"](10,8,"collection.edit.template.cancel"))}}function K(e,t){1&e&&(v["\u0275\u0275element"](0,"ds-loading",11),v["\u0275\u0275pipe"](1,"translate")),2&e&&v["\u0275\u0275property"]("message",v["\u0275\u0275pipeBind1"](1,1,"collection.edit.template.loading"))}function G(e,t){if(1&e&&(v["\u0275\u0275element"](0,"ds-alert",12),v["\u0275\u0275pipe"](1,"translate")),2&e){var n=v["\u0275\u0275nextContext"](3);v["\u0275\u0275property"]("type",n.AlertTypeEnum.Error)("content",v["\u0275\u0275pipeBind1"](1,2,"collection.edit.template.error"))}}function Q(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"div",4),v["\u0275\u0275text"](1,"\n      "),v["\u0275\u0275template"](2,H,12,12,"ng-container",5),v["\u0275\u0275text"](3,"\n      "),v["\u0275\u0275template"](4,K,2,3,"ds-loading",6),v["\u0275\u0275text"](5,"\n      "),v["\u0275\u0275template"](6,G,2,4,"ds-alert",7),v["\u0275\u0275text"](7,"\n    "),v["\u0275\u0275elementEnd"]()),2&e){var n=t.ngVar;v["\u0275\u0275advance"](2),v["\u0275\u0275property"]("ngIf",null==n?null:n.hasSucceeded),v["\u0275\u0275advance"](2),v["\u0275\u0275property"]("ngIf",null==n?null:n.isLoading),v["\u0275\u0275advance"](2),v["\u0275\u0275property"]("ngIf",null==n?null:n.hasFailed)}}function X(e,t){if(1&e&&(v["\u0275\u0275elementStart"](0,"div",1),v["\u0275\u0275text"](1,"\n  "),v["\u0275\u0275elementStart"](2,"div",2),v["\u0275\u0275text"](3,"\n    "),v["\u0275\u0275template"](4,Q,8,3,"div",3),v["\u0275\u0275pipe"](5,"async"),v["\u0275\u0275text"](6,"\n  "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](7,"\n"),v["\u0275\u0275elementEnd"]()),2&e){var n=v["\u0275\u0275nextContext"]();v["\u0275\u0275advance"](4),v["\u0275\u0275property"]("ngVar",v["\u0275\u0275pipeBind1"](5,1,n.itemRD$))}}var Z,W,ee,te,ne=((Z=function(){function e(t,r){n(this,e),this.route=t,this.itemTemplateService=r,this.AlertTypeEnum=q.a}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.collectionRD$=this.route.parent.data.pipe(Object(A.a)(),Object(O.a)((function(e){return e.dso}))),this.itemRD$=this.collectionRD$.pipe(Object(D.j)(),Object(N.a)((function(t){return e.itemTemplateService.findByCollectionID(t.id)})))}},{key:"getCollectionEditUrl",value:function(e){return e?Object(U.h)(e.uuid):""}}]),e}()).\u0275fac=function(e){return new(e||Z)(v["\u0275\u0275directiveInject"](p.a),v["\u0275\u0275directiveInject"](_.a))},Z.\u0275cmp=v["\u0275\u0275defineComponent"]({type:Z,selectors:[["ds-edit-item-template-page"]],decls:3,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],[1,"row"],["class","col-12",4,"ngVar"],[1,"col-12"],[4,"ngIf"],[3,"message",4,"ngIf"],[3,"type","content",4,"ngIf"],[1,"border-bottom"],[3,"updateService","item"],[1,"btn","btn-outline-secondary",3,"routerLink"],[3,"message"],[3,"type","content"]],template:function(e,t){var n;1&e&&(v["\u0275\u0275template"](0,X,8,3,"div",0),v["\u0275\u0275pipe"](1,"async"),v["\u0275\u0275text"](2,"\n")),2&e&&v["\u0275\u0275property"]("ngVar",null==(n=v["\u0275\u0275pipeBind1"](1,1,t.collectionRD$))?null:n.payload)},directives:[M.a,u.u,J.a,p.h,Y.a,$.a],pipes:[u.b,h.e],encapsulation:2}),Z),re=a("84Zn"),ie=((W=function(){function e(t){n(this,e),this.itemTemplateService=t}return t(e,[{key:"resolve",value:function(e,t){return this.itemTemplateService.findByCollectionID(e.params.id,!0,!1,Object(re.a)("templateItemOf")).pipe(Object(D.g)())}}]),e}()).\u0275fac=function(e){return new(e||W)(v["\u0275\u0275inject"](_.a))},W.\u0275prov=v["\u0275\u0275defineInjectable"]({token:W,factory:W.\u0275fac}),W),oe=a("hucJ"),ae=a("GCaJ"),ce=((ee=function(e){r(a,e);var i=o(a);function a(e,t){var r;return n(this,a),(r=i.call(this,e,t)).breadcrumbService=e,r.dataService=t,r}return t(a,[{key:"followLinks",get:function(){return s.a}}]),a}(oe.a)).\u0275fac=function(e){return new(e||ee)(v["\u0275\u0275inject"](ae.a),v["\u0275\u0275inject"](g.a))},ee.\u0275prov=v["\u0275\u0275defineInjectable"]({token:ee,factory:ee.\u0275fac,providedIn:"root"}),ee),le=a("sfEo"),ue=a("A0IO"),de=a("0TMo"),pe=a("FU+A"),se=a("1mcE"),fe=a("Vurf"),me=((te=function(e){r(a,e);var i=o(a);function a(e,t,r,o){var c;return n(this,a),(c=i.call(this,e,t,r,o)).resolver=e,c.authorizationService=t,c.router=r,c.authService=o,c}return t(a,[{key:"getFeatureID",value:function(e,t){return Object(V.a)(pe.a.AdministratorOf)}}]),a}(de.a)).\u0275fac=function(e){return new(e||te)(v["\u0275\u0275inject"](s.b),v["\u0275\u0275inject"](se.a),v["\u0275\u0275inject"](p.g),v["\u0275\u0275inject"](fe.a))},te.\u0275prov=v["\u0275\u0275defineInjectable"]({token:te,factory:te.\u0275fac,providedIn:"root"}),te),ve=a("ierV"),xe=a("JTKQ");function ge(e,t){}var be,ye,he,Ie=((be=function(e){r(c,e);var i=o(c);function c(){return n(this,c),i.apply(this,arguments)}return t(c,[{key:"getComponentName",value:function(){return"CollectionPageComponent"}},{key:"importThemedComponent",value:function(e){return a("CrS0")("./".concat(e,"/app/+collection-page/collection-page.component"))}},{key:"importUnthemedComponent",value:function(){return a.e(0).then(a.bind(null,"cIai"))}}]),c}(xe.a)).\u0275fac=function(e){return Se(e||be)},be.\u0275cmp=v["\u0275\u0275defineComponent"]({type:be,selectors:[["ds-themed-community-page"]],features:[v["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:0,consts:[["vcr",""]],template:function(e,t){1&e&&(v["\u0275\u0275template"](0,ge,0,0,"ng-template",null,0,v["\u0275\u0275templateRefExtractor"]),v["\u0275\u0275text"](2,"\n"))},encapsulation:2}),be),Se=v["\u0275\u0275getInheritedFactory"](Ie),Ce=((ye=function e(){n(this,e)}).\u0275mod=v["\u0275\u0275defineNgModule"]({type:ye}),ye.\u0275inj=v["\u0275\u0275defineInjector"]({factory:function(e){return new(e||ye)},providers:[s.b,ie,ce,ae.a,le.a,F,me],imports:[[p.k.forChild([{path:U.a,component:j,canActivate:[w.a,F]},{path:":id",resolve:{dso:s.b,breadcrumb:ce},runGuardsAndResolvers:"always",children:[{path:U.b,loadChildren:function(){return a.e(39).then(a.bind(null,"wAxY")).then((function(e){return e.EditCollectionPageModule}))},canActivate:[me]},{path:"delete",pathMatch:"full",component:L,canActivate:[w.a]},{path:U.e,component:ne,canActivate:[w.a],resolve:{item:ie,breadcrumb:ue.a},data:{title:"collection.edit.template.title",breadcrumbKey:"collection.edit.template"}},{path:"",component:Ie,pathMatch:"full"}],data:{menu:{public:[{id:"statistics_collection_:id",active:!0,visible:!0,model:{type:ve.b.LINK,text:"menu.section.statistics",link:"statistics/collections/:id/"}}]}}}])]]}),ye),je=a("bG9Y"),we=a("gWc+"),Ee=a("9i+i"),Oe=a("yBEL"),ke=((he=function e(){n(this,e)}).\u0275mod=v["\u0275\u0275defineNgModule"]({type:he}),he.\u0275inj=v["\u0275\u0275defineInjector"]({factory:function(e){return new(e||he)},providers:[we.a],imports:[[u.c,d.a,Ce,Ee.a.forRoot(),je.EditItemPageModule,Oe.a]]}),he)}}])}();
//# sourceMappingURL=30-es5.979f093d75e7891c03e3.js.map