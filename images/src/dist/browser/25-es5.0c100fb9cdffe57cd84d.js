!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+w78":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("JTKQ"),s=r("8Y7J");function u(e,t){}var l=function(){var e=function(e){i(a,e);var t=c(a);function a(){return n(this,a),t.apply(this,arguments)}return o(a,[{key:"getComponentName",value:function(){return"HomeNewsComponent"}},{key:"importThemedComponent",value:function(e){return r("TXjl")("./".concat(e,"/app/+home-page/home-news/home-news.component"))}},{key:"importUnthemedComponent",value:function(){return Promise.resolve().then(r.bind(null,"aL57"))}}]),a}(a.a);return e.\u0275fac=function(t){return p(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ds-themed-home-news"]],features:[s["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:0,consts:[["vcr",""]],template:function(e,t){1&e&&(s["\u0275\u0275template"](0,u,0,0,"ng-template",null,0,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275text"](2,"\n"))},encapsulation:2}),e}(),p=s["\u0275\u0275getInheritedFactory"](l)},"5IjC":function(t,r,i){"use strict";i.d(r,"a",(function(){return P}));var a=i("2Vo4"),c=i("itXk"),s=i("qc8P"),u=i("mEo1"),l=i("7DXY"),p=i("J3qs"),f=i("eIep"),m=i("8Y7J"),d=i("mrqg"),h=i("MFUF"),g=i("O/5o"),v=i("SVse"),y=i("jLV+"),b=i("HZwm"),x=i("Frqi"),w=i("TSSN");function S(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275text"](1,"\n  "),m["\u0275\u0275elementStart"](2,"h2"),m["\u0275\u0275text"](3),m["\u0275\u0275pipe"](4,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](5,"\n  "),m["\u0275\u0275elementStart"](6,"p",3),m["\u0275\u0275text"](7),m["\u0275\u0275pipe"](8,"translate"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](9,"\n  "),m["\u0275\u0275elementStart"](10,"ds-viewable-collection",4),m["\u0275\u0275pipe"](11,"async"),m["\u0275\u0275text"](12,"\n  "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](13,"\n"),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"](2);m["\u0275\u0275advance"](3),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](4,6,"home.top-level-communities.head")),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate"](m["\u0275\u0275pipeBind1"](8,8,"home.top-level-communities.help")),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("config",n.config)("sortConfig",n.sortConfig)("objects",m["\u0275\u0275pipeBind1"](11,10,n.communitiesRD$))("hideGear",!0)}}function C(e,t){1&e&&(m["\u0275\u0275element"](0,"ds-error",5),m["\u0275\u0275pipe"](1,"translate")),2&e&&m["\u0275\u0275propertyInterpolate"]("message",m["\u0275\u0275pipeBind1"](1,1,"error.top-level-communites"))}function j(e,t){1&e&&(m["\u0275\u0275element"](0,"ds-loading",5),m["\u0275\u0275pipe"](1,"translate")),2&e&&m["\u0275\u0275propertyInterpolate"]("message",m["\u0275\u0275pipeBind1"](1,1,"loading.top-level-communities"))}function I(e,t){if(1&e&&(m["\u0275\u0275elementContainerStart"](0),m["\u0275\u0275text"](1,"\n  "),m["\u0275\u0275template"](2,S,14,12,"div",1),m["\u0275\u0275text"](3,"\n"),m["\u0275\u0275template"](4,C,2,3,"ds-error",2),m["\u0275\u0275text"](5,"\n"),m["\u0275\u0275template"](6,j,2,3,"ds-loading",2),m["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.ngVar;m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngIf",null==n?null:n.hasSucceeded),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngIf",null==n?null:n.hasFailed),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("ngIf",null==n?null:n.isLoading)}}var P=function(){var t=function(){function t(e,r){n(this,t),this.cds=e,this.paginationService=r,this.communitiesRD$=new a.a({}),this.pageId="tl",this.config=new l.a,this.config.id=this.pageId,this.config.pageSize=5,this.config.currentPage=1,this.sortConfig=new s.b("dc.title",s.a.ASC)}return o(t,[{key:"ngOnInit",value:function(){this.initPage()}},{key:"initPage",value:function(){var t=this,n=this.paginationService.getCurrentPagination(this.config.id,this.config),r=this.paginationService.getCurrentSort(this.config.id,this.sortConfig);this.currentPageSubscription=Object(c.a)([n,r]).pipe(Object(f.a)((function(n){var r=e(n,2),o=r[0],i=r[1];return t.cds.findTop({currentPage:o.currentPage,elementsPerPage:o.pageSize,sort:{field:i.field,direction:i.direction}})}))).subscribe((function(e){t.communitiesRD$.next(e)}))}},{key:"unsubscribe",value:function(){Object(p.b)(this.currentPageSubscription)&&this.currentPageSubscription.unsubscribe()}},{key:"ngOnDestroy",value:function(){this.unsubscribe(),this.paginationService.clearPagination(this.config.id)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(m["\u0275\u0275directiveInject"](d.a),m["\u0275\u0275directiveInject"](h.a))},t.\u0275cmp=m["\u0275\u0275defineComponent"]({type:t,selectors:[["ds-top-level-community-list"]],decls:3,vars:3,consts:[[4,"ngVar"],[4,"ngIf"],[3,"message",4,"ngIf"],[1,"lead"],[3,"config","sortConfig","objects","hideGear"],[3,"message"]],template:function(e,t){1&e&&(m["\u0275\u0275template"](0,I,7,3,"ng-container",0),m["\u0275\u0275pipe"](1,"async"),m["\u0275\u0275text"](2,"\n")),2&e&&m["\u0275\u0275property"]("ngVar",m["\u0275\u0275pipeBind1"](1,1,t.communitiesRD$))},directives:[g.a,v.u,y.a,b.a,x.a],pipes:[v.b,w.e],styles:[""],data:{animation:[u.c]},changeDetection:0}),t}()},EDwI:function(e,t,r){"use strict";r.r(t),r.d(t,"HomePageModule",(function(){return I}));var a,s=r("SVse"),u=r("PCNd"),l=(r("aL57"),r("iInd")),p=r("IzEk"),f=r("8Y7J"),m=r("ibvC"),d=((a=function(){function e(t){n(this,e),this.siteService=t}return o(e,[{key:"resolve",value:function(e,t){return this.siteService.find().pipe(Object(p.a)(1))}}]),e}()).\u0275fac=function(e){return new(e||a)(f["\u0275\u0275inject"](m.a))},a.\u0275prov=f["\u0275\u0275defineInjectable"]({token:a,factory:a.\u0275fac}),a),h=r("ierV"),g=r("JTKQ");function v(e,t){}var y,b,x=((y=function(e){i(a,e);var t=c(a);function a(){return n(this,a),t.apply(this,arguments)}return o(a,[{key:"getComponentName",value:function(){return"HomePageComponent"}},{key:"importThemedComponent",value:function(e){return r("rys1")("./".concat(e,"/app/+home-page/home-page.component"))}},{key:"importUnthemedComponent",value:function(){return Promise.resolve().then(r.bind(null,"u89e"))}}]),a}(g.a)).\u0275fac=function(e){return w(e||y)},y.\u0275cmp=f["\u0275\u0275defineComponent"]({type:y,selectors:[["ds-themed-home-page"]],features:[f["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:0,consts:[["vcr",""]],template:function(e,t){1&e&&(f["\u0275\u0275template"](0,v,0,0,"ng-template",null,0,f["\u0275\u0275templateRefExtractor"]),f["\u0275\u0275text"](2,"\n"))},encapsulation:2}),y),w=f["\u0275\u0275getInheritedFactory"](x),S=((b=function e(){n(this,e)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||b)},providers:[d],imports:[[l.k.forChild([{path:"",component:x,pathMatch:"full",data:{title:"home.title",menu:{public:[{id:"statistics_site",active:!0,visible:!0,model:{type:h.b.LINK,text:"menu.section.statistics",link:"statistics"}}]}},resolve:{site:d}}])]]}),b);r("u89e"),r("5IjC");var C=r("9i+i");r("+w78");var j,I=((j=function e(){n(this,e)}).\u0275mod=f["\u0275\u0275defineNgModule"]({type:j}),j.\u0275inj=f["\u0275\u0275defineInjector"]({factory:function(e){return new(e||j)},imports:[[s.c,u.a,S,C.a.forRoot()]]}),j)},TXjl:function(e,t,n){var r={"./custom/app/+home-page/home-news/home-news.component":["oktA",45],"./dspace/app/+home-page/home-news/home-news.component":["ZOgr",77]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="TXjl",e.exports=o},aL57:function(e,t,r){"use strict";r.r(t),r.d(t,"HomeNewsComponent",(function(){return i}));var o=r("8Y7J"),i=function(){var e=function e(){n(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ds-home-news"]],decls:36,vars:0,consts:[[1,"jumbotron","jumbotron-fluid"],[1,"container"],[1,"d-flex","flex-wrap"],[1,"display-3"],[1,"lead"],["href","https://wiki.lyrasis.org/display/DSPACE/DSpace+Positioning","target","_blank"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275text"](1,"\n  "),o["\u0275\u0275elementStart"](2,"div",1),o["\u0275\u0275text"](3,"\n    "),o["\u0275\u0275elementStart"](4,"div",2),o["\u0275\u0275text"](5,"\n      "),o["\u0275\u0275elementStart"](6,"div"),o["\u0275\u0275text"](7,"\n        "),o["\u0275\u0275elementStart"](8,"h1",3),o["\u0275\u0275text"](9,"DSpace 7"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](10,"\n        "),o["\u0275\u0275elementStart"](11,"p",4),o["\u0275\u0275text"](12,"DSpace is the world leading open source repository platform that enables organisations to:"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](13,"\n      "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](14,"\n    "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](15,"\n    "),o["\u0275\u0275elementStart"](16,"ul"),o["\u0275\u0275text"](17,"\n      "),o["\u0275\u0275elementStart"](18,"li"),o["\u0275\u0275text"](19,"easily ingest documents, audio, video, datasets and their corresponding Dublin Core metadata\n      "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](20,"\n      "),o["\u0275\u0275elementStart"](21,"li"),o["\u0275\u0275text"](22,"open up this content to local and global audiences, thanks to the OAI-PMH interface and Google Scholar optimizations\n      "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](23,"\n      "),o["\u0275\u0275elementStart"](24,"li"),o["\u0275\u0275text"](25,"issue permanent urls and trustworthy identifiers, including optional integrations with handle.net and DataCite DOI"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](26,"\n    "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](27,"\n    "),o["\u0275\u0275elementStart"](28,"p"),o["\u0275\u0275text"](29,"Join an international community of "),o["\u0275\u0275elementStart"](30,"a",5),o["\u0275\u0275text"](31,"leading institutions using DSpace"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](32,".\n    "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](33,"\n  "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](34,"\n"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](35,"\n"))},styles:["[_nghost-%COMP%]{display:block;margin-top:calc(-1 * var(--ds-content-spacing));margin-bottom:calc(-1 * var(--ds-content-spacing))}.display-3[_ngcontent-%COMP%]{word-break:break-word}.jumbotron[_ngcontent-%COMP%]{background-color:var(--ds-home-news-background-color)}a[_ngcontent-%COMP%]{color:var(--ds-home-news-link-color)}a[_ngcontent-%COMP%]:hover{color:var(--ds-home-news-link-hover-color)}"]}),e}()},rys1:function(e,t,n){var r={"./custom/app/+home-page/home-page.component":["FES9",46]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="rys1",e.exports=o},u89e:function(e,t,r){"use strict";r.r(t),r.d(t,"HomePageComponent",(function(){return h}));var i=r("lJxs"),a=r("8Y7J"),c=r("iInd"),s=r("+w78"),u=r("SVse"),l=r("DdXh"),p=r("5IjC"),f=r("mXNY"),m=r("TSSN");function d(e,t){if(1&e&&(a["\u0275\u0275elementContainerStart"](0),a["\u0275\u0275text"](1,"\n    "),a["\u0275\u0275element"](2,"ds-view-tracker",3),a["\u0275\u0275text"](3,"\n  "),a["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.ngIf;a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("object",n)}}var h=function(){var e=function(){function e(t){n(this,e),this.route=t}return o(e,[{key:"ngOnInit",value:function(){this.site$=this.route.data.pipe(Object(i.a)((function(e){return e.site})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["ds-home-page"]],decls:13,vars:7,consts:[[1,"container"],[4,"ngIf"],[3,"inPlaceSearch","searchPlaceholder"],[3,"object"]],template:function(e,t){1&e&&(a["\u0275\u0275element"](0,"ds-themed-home-news"),a["\u0275\u0275text"](1,"\n"),a["\u0275\u0275elementStart"](2,"div",0),a["\u0275\u0275text"](3,"\n  "),a["\u0275\u0275template"](4,d,4,1,"ng-container",1),a["\u0275\u0275pipe"](5,"async"),a["\u0275\u0275text"](6,"\n  "),a["\u0275\u0275element"](7,"ds-search-form",2),a["\u0275\u0275pipe"](8,"translate"),a["\u0275\u0275text"](9,"\n  "),a["\u0275\u0275element"](10,"ds-top-level-community-list"),a["\u0275\u0275text"](11,"\n"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](12,"\n")),2&e&&(a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("ngIf",a["\u0275\u0275pipeBind1"](5,3,t.site$)),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("inPlaceSearch",!1)("searchPlaceholder",a["\u0275\u0275pipeBind1"](8,5,"home.search-form.placeholder")))},directives:[s.a,u.u,l.a,p.a,f.a],pipes:[u.b,m.e],styles:[""]}),e}()}}])}();
//# sourceMappingURL=25-es5.0c100fb9cdffe57cd84d.js.map