!function(){function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=i(e);if(t){var a=i(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{A0IO:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("J3qs"),i=n("q5u1"),a=n("8Y7J"),u=n("tv3Y"),s=function(){var e=function(){function e(t){o(this,e),this.breadcrumbService=t}return c(e,[{key:"resolve",value:function(e,t){var n=e.data.breadcrumbKey;if(Object(r.a)(n))throw new Error('You provided an i18nBreadcrumbResolver for url "'+e.url+"\" but no breadcrumbKey in the route's data");var o=Object(i.b)(e);return{provider:this.breadcrumbService,key:n,url:o}}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](u.a))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},bMgj:function(t,r,i){"use strict";i.r(r),i.d(r,"EditCommunityPageModule",(function(){return ce}));var a=i("SVse"),u=i("PCNd"),s=i("J8r5"),l=i("KIxa"),d=i("8Y7J"),p=i("iInd"),m=i("TSSN"),f=function(e){return{active:e}},v=function(e){return[e]};function y(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"li",13),d["\u0275\u0275text"](1,"\n            "),d["\u0275\u0275elementStart"](2,"a",14),d["\u0275\u0275text"](3),d["\u0275\u0275pipe"](4,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](5,"\n          "),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,r=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngClass",d["\u0275\u0275pureFunction1"](5,f,n===r.currentPage))("routerLink",d["\u0275\u0275pureFunction1"](7,v,"./"+n)),d["\u0275\u0275advance"](1),d["\u0275\u0275textInterpolate1"]("\n              ",d["\u0275\u0275pipeBind1"](4,3,r.type+".edit.tabs."+n+".head"),"\n            ")}}function b(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"a",15),d["\u0275\u0275pipe"](1,"async"),d["\u0275\u0275text"](2,"\n              "),d["\u0275\u0275element"](3,"i",16),d["\u0275\u0275text"](4),d["\u0275\u0275pipe"](5,"translate"),d["\u0275\u0275elementEnd"]()),2&e){var n,r=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("routerLink",r.getPageUrl(null==(n=d["\u0275\u0275pipeBind1"](1,2,r.dsoRD$))?null:n.payload)),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"](" ",d["\u0275\u0275pipeBind1"](5,4,r.type+".edit.return"),"\n            ")}}var h,x,j=((h=function(t){e(i,t);var r=n(i);function i(e,t){var n;return o(this,i),(n=r.call(this,e,t)).router=e,n.route=t,n.type="community",n}return c(i,[{key:"getPageUrl",value:function(e){return Object(l.h)(e.id)}}]),i}(s.a)).\u0275fac=function(e){return new(e||h)(d["\u0275\u0275directiveInject"](p.g),d["\u0275\u0275directiveInject"](p.a))},h.\u0275cmp=d["\u0275\u0275defineComponent"]({type:h,selectors:[["ds-edit-community"]],features:[d["\u0275\u0275InheritDefinitionFeature"]],decls:47,vars:11,consts:[[1,"container"],[1,"row"],[1,"col-12"],[1,"d-flex","justify-content-between","border-bottom"],[1,"btn","btn-danger",3,"routerLink"],[1,"fas","fa-trash"],[1,"pt-2"],[1,"nav","nav-tabs","justify-content-start","mb-2"],["class","nav-item",4,"ngFor","ngForOf"],[1,"tab-pane","active"],[1,"mb-4"],[1,"col-12","text-right"],["class","btn btn-outline-secondary",3,"routerLink",4,"ngIf"],[1,"nav-item"],[1,"nav-link",3,"ngClass","routerLink"],[1,"btn","btn-outline-secondary",3,"routerLink"],[1,"fas","fa-arrow-left"]],template:function(e,t){var n;1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275text"](1,"\n  "),d["\u0275\u0275elementStart"](2,"div",1),d["\u0275\u0275text"](3,"\n    "),d["\u0275\u0275elementStart"](4,"div",2),d["\u0275\u0275text"](5,"\n      "),d["\u0275\u0275elementStart"](6,"div",3),d["\u0275\u0275text"](7,"\n        "),d["\u0275\u0275elementStart"](8,"h2"),d["\u0275\u0275text"](9),d["\u0275\u0275pipe"](10,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](11,"\n        "),d["\u0275\u0275elementStart"](12,"div"),d["\u0275\u0275text"](13,"\n          "),d["\u0275\u0275elementStart"](14,"a",4),d["\u0275\u0275pipe"](15,"async"),d["\u0275\u0275text"](16,"\n            "),d["\u0275\u0275element"](17,"i",5),d["\u0275\u0275text"](18),d["\u0275\u0275pipe"](19,"translate"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](20,"\n        "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](21,"\n      "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](22,"\n      "),d["\u0275\u0275elementStart"](23,"div",6),d["\u0275\u0275text"](24,"\n        "),d["\u0275\u0275elementStart"](25,"ul",7),d["\u0275\u0275text"](26,"\n          "),d["\u0275\u0275template"](27,y,6,9,"li",8),d["\u0275\u0275text"](28,"\n        "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](29,"\n        "),d["\u0275\u0275elementStart"](30,"div",9),d["\u0275\u0275text"](31,"\n          "),d["\u0275\u0275elementStart"](32,"div",10),d["\u0275\u0275text"](33,"\n            "),d["\u0275\u0275element"](34,"router-outlet"),d["\u0275\u0275text"](35,"\n          "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](36,"\n          "),d["\u0275\u0275elementStart"](37,"div",11),d["\u0275\u0275text"](38,"\n            "),d["\u0275\u0275template"](39,b,6,6,"a",12),d["\u0275\u0275text"](40,"\n          "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](41,"\n        "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](42,"\n      "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](43,"\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](44,"\n  "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](45,"\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](46,"\n")),2&e&&(d["\u0275\u0275advance"](9),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind1"](10,5,t.type+".edit.head")),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("routerLink",("community"===t.type?"/communities/":"/collections/")+(null==(n=d["\u0275\u0275pipeBind1"](15,7,t.dsoRD$))?null:n.payload.uuid)+"/delete"),d["\u0275\u0275advance"](4),d["\u0275\u0275textInterpolate1"](" ",d["\u0275\u0275pipeBind1"](19,9,t.type+".edit.delete"),""),d["\u0275\u0275advance"](9),d["\u0275\u0275property"]("ngForOf",t.pages),d["\u0275\u0275advance"](12),d["\u0275\u0275property"]("ngIf",!t.hideReturnButton))},directives:[p.j,a.t,p.l,a.u,a.r],pipes:[m.e,a.b],encapsulation:2}),h),g=i("6nfC"),I=i("YLTE"),O=i("mrqg"),S=i("lI3o"),w=i("+smE"),E=((x=function(t){e(i,t);var r=n(i);function i(e,t,n,a,c){var u;return o(this,i),(u=r.call(this,e,t,n,a,c)).communityDataService=e,u.router=t,u.route=n,u.notificationsService=a,u.translate=c,u.frontendURL="/communities/",u.type=I.a.type,u}return i}(g.a)).\u0275fac=function(e){return new(e||x)(d["\u0275\u0275directiveInject"](O.a),d["\u0275\u0275directiveInject"](p.g),d["\u0275\u0275directiveInject"](p.a),d["\u0275\u0275directiveInject"](S.a),d["\u0275\u0275directiveInject"](m.f))},x.\u0275cmp=d["\u0275\u0275defineComponent"]({type:x,selectors:[["ds-community-metadata"]],features:[d["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:3,consts:[[3,"dso","submitForm","back","finish"]],template:function(e,t){var n;1&e&&(d["\u0275\u0275elementStart"](0,"ds-community-form",0),d["\u0275\u0275listener"]("submitForm",(function(e){return t.onSubmit(e)}))("back",(function(){return t.navigateToHomePage()}))("finish",(function(){return t.navigateToHomePage()})),d["\u0275\u0275pipe"](1,"async"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](2,"\n\n")),2&e&&d["\u0275\u0275property"]("dso",null==(n=d["\u0275\u0275pipeBind1"](1,1,t.dsoRD$))?null:n.payload)},directives:[w.a],pipes:[a.b],encapsulation:2}),x),k=i("lJxs"),R=i("SxV6"),B=i("1QIV"),C=i("V17L");function $(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ds-comcol-role",1),d["\u0275\u0275pipe"](1,"async"),d["\u0275\u0275text"](2,"\n"),d["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,r=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("dso",d["\u0275\u0275pipeBind1"](1,2,r.community$))("comcolRole",n)}}var D,P,F,L,T,J,N=((D=function(){function e(t){o(this,e),this.route=t}return c(e,[{key:"getComcolRoles$",value:function(){return this.community$.pipe(Object(k.a)((function(e){return[{name:"community-admin",href:e._links.adminGroup.href}]})))}},{key:"ngOnInit",value:function(){this.dsoRD$=this.route.parent.data.pipe(Object(R.a)(),Object(k.a)((function(e){return e.dso})))}},{key:"community$",get:function(){return this.dsoRD$.pipe(Object(B.i)(),Object(B.o)())}}]),e}()).\u0275fac=function(e){return new(e||D)(d["\u0275\u0275directiveInject"](p.a))},D.\u0275cmp=d["\u0275\u0275defineComponent"]({type:D,selectors:[["ds-community-roles"]],decls:3,vars:3,consts:[[3,"dso","comcolRole",4,"ngFor","ngForOf"],[3,"dso","comcolRole"]],template:function(e,t){1&e&&(d["\u0275\u0275template"](0,$,3,4,"ds-comcol-role",0),d["\u0275\u0275pipe"](1,"async"),d["\u0275\u0275text"](2,"\n")),2&e&&d["\u0275\u0275property"]("ngForOf",d["\u0275\u0275pipeBind1"](1,1,t.getComcolRoles$()))},directives:[a.t,C.a],pipes:[a.b],encapsulation:2}),D),U=i("IzEk"),_=i("pLZG"),z=i("J3qs"),A=i("C765"),Y=i("Rgmz"),M=function(e){return{community:e}},H=((P=function(){function e(t,n){o(this,e),this.route=t,this.dsoNameService=n}return c(e,[{key:"ngOnInit",value:function(){var e=this;this.dsoRD$=this.route.parent.data.pipe(Object(U.a)(1),Object(k.a)((function(e){return e.dso}))),this.communityName$=this.dsoRD$.pipe(Object(_.a)((function(e){return Object(z.b)(e)})),Object(k.a)((function(t){return e.dsoNameService.getName(t.payload)})))}}]),e}()).\u0275fac=function(e){return new(e||P)(d["\u0275\u0275directiveInject"](p.a),d["\u0275\u0275directiveInject"](A.a))},P.\u0275cmp=d["\u0275\u0275defineComponent"]({type:P,selectors:[["ds-community-curate"]],decls:11,vars:11,consts:[[1,"container"],[3,"dsoHandle"]],template:function(e,t){var n;1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275text"](1,"\n    "),d["\u0275\u0275elementStart"](2,"h3"),d["\u0275\u0275text"](3),d["\u0275\u0275pipe"](4,"translate"),d["\u0275\u0275pipe"](5,"async"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](6,"\n    "),d["\u0275\u0275element"](7,"ds-curation-form",1),d["\u0275\u0275pipe"](8,"async"),d["\u0275\u0275text"](9,"\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](10,"\n")),2&e&&(d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate"](d["\u0275\u0275pipeBind2"](4,2,"community.curate.header",d["\u0275\u0275pureFunction1"](9,M,d["\u0275\u0275pipeBind1"](5,5,t.communityName$)))),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("dsoHandle",null==(n=d["\u0275\u0275pipeBind1"](8,7,t.dsoRD$))?null:n.payload.handle))},directives:[Y.a],pipes:[m.e,a.b],encapsulation:2}),P),V=i("A0IO"),q=i("+Bs4"),K=((F=function(){function e(t){o(this,e),this.route=t}return c(e,[{key:"ngOnInit",value:function(){this.dsoRD$=this.route.parent.parent.data.pipe(Object(R.a)(),Object(k.a)((function(e){return e.dso})))}}]),e}()).\u0275fac=function(e){return new(e||F)(d["\u0275\u0275directiveInject"](p.a))},F.\u0275cmp=d["\u0275\u0275defineComponent"]({type:F,selectors:[["ds-community-authorizations"]],decls:6,vars:4,consts:[[1,"container"],[3,"resourceType","resourceUUID"]],template:function(e,t){var n;1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275text"](1,"\n  "),d["\u0275\u0275element"](2,"ds-resource-policies",1),d["\u0275\u0275pipe"](3,"async"),d["\u0275\u0275text"](4,"\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](5,"\n")),2&e&&(d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("resourceType","community")("resourceUUID",null==(n=d["\u0275\u0275pipeBind1"](3,2,t.dsoRD$))||null==n.payload?null:n.payload.id))},directives:[q.a],pipes:[a.b],encapsulation:2}),F),G=i("n1Qy"),Q=i("EEUA"),Z=i("G5zm"),W=i("ALMP"),X=i("rdLr"),ee=i("LRne"),te=i("FU+A"),ne=i("1mcE"),re=i("Vurf"),ie=((T=function(t){e(i,t);var r=n(i);function i(e,t,n){var a;return o(this,i),(a=r.call(this,e,t,n)).authorizationService=e,a.router=t,a.authService=n,a}return c(i,[{key:"getFeatureID",value:function(e,t){return Object(ee.a)(te.a.IsCommunityAdmin)}}]),i}(X.a)).\u0275fac=function(e){return new(e||T)(d["\u0275\u0275inject"](ne.a),d["\u0275\u0275inject"](p.g),d["\u0275\u0275inject"](re.a))},T.\u0275prov=d["\u0275\u0275defineInjectable"]({token:T,factory:T.\u0275fac,providedIn:"root"}),T),oe=((L=function e(){o(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:L}),L.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||L)},providers:[Z.a,G.a],imports:[[p.k.forChild([{path:"",resolve:{breadcrumb:V.a},data:{breadcrumbKey:"community.edit"},component:j,canActivate:[ie],children:[{path:"",redirectTo:"metadata",pathMatch:"full"},{path:"metadata",component:E,data:{title:"community.edit.tabs.metadata.title",hideReturnButton:!0,showBreadcrumbs:!0}},{path:"roles",component:N,data:{title:"community.edit.tabs.roles.title",showBreadcrumbs:!0}},{path:"curate",component:H,data:{title:"community.edit.tabs.curate.title",showBreadcrumbs:!0}},{path:"authorizations",data:{showBreadcrumbs:!0},children:[{path:"create",resolve:{resourcePolicyTarget:G.a},component:Q.a,data:{title:"resource-policies.create.page.title"}},{path:"edit",resolve:{resourcePolicy:Z.a},component:W.a,data:{title:"resource-policies.edit.page.title"}},{path:"",component:K,data:{title:"community.edit.tabs.authorizations.title",showBreadcrumbs:!0,hideReturnButton:!0}}]}]}])]]}),L),ae=i("HtSd"),ce=((J=function e(){o(this,e)}).\u0275mod=d["\u0275\u0275defineNgModule"]({type:J}),J.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||J)},imports:[[a.c,u.a,oe,ae.a]]}),J)},tv3Y:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("zr/d"),i=n("LRne"),a=n("8Y7J"),u=function(){var e=function(){function e(){o(this,e)}return c(e,[{key:"getBreadcrumbs",value:function(e,t){return Object(i.a)([new r.a(e+".breadcrumbs",t)])}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();
//# sourceMappingURL=34-es5.63ab1f64152d5c355a4a.js.map