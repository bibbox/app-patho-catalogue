!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var l=a(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return o(this,n)}}function o(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"i1B+":function(o,a,r){"use strict";r.r(a),r.d(a,"CollectionPageComponent",(function(){return _}));var l=r("cIai"),i=r("mEo1"),p=r("8Y7J"),c=r("O/5o"),d=r("SVse"),s=r("mXNY"),f=r("SFhV"),m=r("nNzF"),u=r("tLeP"),g=r("YLfV"),x=r("mXTb"),y=r("uVW2"),v=r("jLV+"),h=r("HZwm"),I=r("Frqi"),b=r("TSSN");function S(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ds-comcol-page-logo",19),p["\u0275\u0275pipe"](1,"async"),p["\u0275\u0275text"](2,"\n                  "),p["\u0275\u0275elementEnd"]()),2&e){var n,o=p["\u0275\u0275nextContext"](4);p["\u0275\u0275property"]("logo",null==(n=p["\u0275\u0275pipeBind1"](1,3,o.logoRD$))?null:n.payload)("alternateText","Collection Logo")("alternateText","Collection Logo")}}function E(e,t){if(1&e&&(p["\u0275\u0275element"](0,"ds-dso-page-edit-button",20),p["\u0275\u0275pipe"](1,"async")),2&e){var n=p["\u0275\u0275nextContext"]().ngIf,o=p["\u0275\u0275nextContext"](3);p["\u0275\u0275property"]("pageRoute",p["\u0275\u0275pipeBind1"](1,3,o.collectionPageRoute$))("dso",n)("tooltipMsg","collection.page.edit")}}function w(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",23),p["\u0275\u0275text"](1,"\n                    "),p["\u0275\u0275elementStart"](2,"h3",24),p["\u0275\u0275text"](3),p["\u0275\u0275pipe"](4,"translate"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5,"\n                    "),p["\u0275\u0275elementStart"](6,"ds-viewable-collection",25),p["\u0275\u0275text"](7,"\n                    "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](8,"\n                "),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().ngVar,o=p["\u0275\u0275nextContext"](4);p["\u0275\u0275property"]("@fadeIn",void 0),p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate"](p["\u0275\u0275pipeBind1"](4,6,"collection.page.browse.recent.head")),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("config",o.paginationConfig)("sortConfig",o.sortConfig)("objects",n)("hideGear",!0)}}function C(e,t){1&e&&(p["\u0275\u0275element"](0,"ds-error",26),p["\u0275\u0275pipe"](1,"translate")),2&e&&p["\u0275\u0275propertyInterpolate"]("message",p["\u0275\u0275pipeBind1"](1,1,"error.recent-submissions"))}function R(e,t){1&e&&(p["\u0275\u0275element"](0,"ds-loading",26),p["\u0275\u0275pipe"](1,"translate")),2&e&&p["\u0275\u0275propertyInterpolate"]("message",p["\u0275\u0275pipeBind1"](1,1,"loading.recent-submissions"))}function T(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",27),p["\u0275\u0275text"](1),p["\u0275\u0275pipe"](2,"translate"),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"]("\n                        ",p["\u0275\u0275pipeBind1"](2,1,"collection.page.browse.recent.empty"),"\n                "))}function V(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275text"](1,"\n                "),p["\u0275\u0275template"](2,w,9,8,"div",21),p["\u0275\u0275text"](3,"\n                "),p["\u0275\u0275template"](4,C,2,3,"ds-error",4),p["\u0275\u0275text"](5,"\n                "),p["\u0275\u0275template"](6,R,2,3,"ds-loading",4),p["\u0275\u0275text"](7,"\n                "),p["\u0275\u0275template"](8,T,3,3,"div",22),p["\u0275\u0275text"](9,"\n            "),p["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.ngVar;p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",null==n?null:n.hasSucceeded),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",null==n?null:n.hasFailed),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",!n||n.isLoading),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",!(null!=n&&n.isLoading)&&0===(null==n||null==n.payload?null:n.payload.page.length))}}function B(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"footer",28),p["\u0275\u0275text"](1,"\n          "),p["\u0275\u0275text"](2,"\n          "),p["\u0275\u0275elementStart"](3,"ds-comcol-page-content",11),p["\u0275\u0275text"](4,"\n          "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5,"\n        "),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().ngIf;p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.copyrightText)("hasInnerHtml",!0)}}function j(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1,"\n              "),p["\u0275\u0275element"](2,"ds-view-tracker",5),p["\u0275\u0275text"](3,"\n              "),p["\u0275\u0275elementStart"](4,"div",6),p["\u0275\u0275text"](5,"\n                "),p["\u0275\u0275elementStart"](6,"header",7),p["\u0275\u0275text"](7,"\n                  "),p["\u0275\u0275text"](8,"\n                  "),p["\u0275\u0275elementStart"](9,"ds-comcol-page-header",8),p["\u0275\u0275text"](10,"\n                  "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](11,"\n                  "),p["\u0275\u0275text"](12,"\n                  "),p["\u0275\u0275template"](13,S,3,5,"ds-comcol-page-logo",9),p["\u0275\u0275text"](14,"\n\n                  "),p["\u0275\u0275text"](15,"\n                  "),p["\u0275\u0275elementStart"](16,"ds-comcol-page-handle",10),p["\u0275\u0275text"](17,"\n                  "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](18,"\n                  "),p["\u0275\u0275text"](19,"\n                  "),p["\u0275\u0275elementStart"](20,"ds-comcol-page-content",11),p["\u0275\u0275text"](21,"\n                  "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](22,"\n                  "),p["\u0275\u0275text"](23,"\n                  "),p["\u0275\u0275elementStart"](24,"ds-comcol-page-content",12),p["\u0275\u0275text"](25,"\n                  "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](26,"\n                "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](27,"\n                "),p["\u0275\u0275elementStart"](28,"div",13),p["\u0275\u0275text"](29,"\n                  "),p["\u0275\u0275template"](30,E,2,5,"ds-dso-page-edit-button",14),p["\u0275\u0275pipe"](31,"async"),p["\u0275\u0275text"](32,"\n                "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](33,"\n              "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](34,"\n              "),p["\u0275\u0275elementStart"](35,"section",15),p["\u0275\u0275text"](36,"\n              "),p["\u0275\u0275text"](37,"\n              "),p["\u0275\u0275elementStart"](38,"ds-comcol-page-browse-by",16),p["\u0275\u0275text"](39,"\n              "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](40,"\n\n            "),p["\u0275\u0275template"](41,V,10,4,"ng-container",17),p["\u0275\u0275pipe"](42,"async"),p["\u0275\u0275text"](43,"\n            "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](44,"\n            "),p["\u0275\u0275template"](45,B,6,2,"footer",18),p["\u0275\u0275text"](46,"\n      "),p["\u0275\u0275elementEnd"]()),2&e){var n=t.ngIf,o=p["\u0275\u0275nextContext"](3);p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("object",n),p["\u0275\u0275advance"](7),p["\u0275\u0275property"]("name",n.name),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("ngIf",o.logoRD$),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.handle)("title","collection.page.handle"),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("content",n.introductoryText)("hasInnerHtml",!0),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("content",n.sidebarText)("hasInnerHtml",!0)("title","collection.page.news"),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("ngIf",p["\u0275\u0275pipeBind1"](31,15,o.isCollectionAdmin$)),p["\u0275\u0275advance"](8),p["\u0275\u0275property"]("id",n.id)("contentType",n.type),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngVar",p["\u0275\u0275pipeBind1"](42,17,o.itemRD$)),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("ngIf",n.copyrightText)}}function O(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div"),p["\u0275\u0275text"](1,"\n            "),p["\u0275\u0275template"](2,j,47,19,"div",3),p["\u0275\u0275text"](3,"\n    "),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]().ngVar;p["\u0275\u0275property"]("@fadeInOut",void 0),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",null==n?null:n.payload)}}function P(e,t){1&e&&(p["\u0275\u0275element"](0,"ds-error",26),p["\u0275\u0275pipe"](1,"translate")),2&e&&p["\u0275\u0275propertyInterpolate"]("message",p["\u0275\u0275pipeBind1"](1,1,"error.collection"))}function D(e,t){1&e&&(p["\u0275\u0275element"](0,"ds-loading",26),p["\u0275\u0275pipe"](1,"translate")),2&e&&p["\u0275\u0275propertyInterpolate"]("message",p["\u0275\u0275pipeBind1"](1,1,"loading.collection"))}function L(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"div",2),p["\u0275\u0275text"](1,"\n        "),p["\u0275\u0275template"](2,O,4,2,"div",3),p["\u0275\u0275text"](3,"\n        "),p["\u0275\u0275template"](4,P,2,3,"ds-error",4),p["\u0275\u0275text"](5,"\n        "),p["\u0275\u0275template"](6,D,2,3,"ds-loading",4),p["\u0275\u0275text"](7,"\n  "),p["\u0275\u0275elementEnd"]()),2&e){var n=t.ngVar;p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",null==n?null:n.hasSucceeded),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",null==n?null:n.hasFailed),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngIf",null==n?null:n.isLoading)}}var _=function(){var o=function(o){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(r,o);var a=n(r);function r(){return e(this,r),a.apply(this,arguments)}return r}(l.CollectionPageComponent);return o.\u0275fac=function(e){return F(e||o)},o.\u0275cmp=p["\u0275\u0275defineComponent"]({type:o,selectors:[["ds-collection-page"]],features:[p["\u0275\u0275InheritDefinitionFeature"]],decls:6,vars:3,consts:[[1,"container"],["class","collection-page",4,"ngVar"],[1,"collection-page"],[4,"ngIf"],[3,"message",4,"ngIf"],[3,"object"],[1,"d-flex","flex-row","border-bottom","mb-4","pb-4"],[1,"comcol-header","mr-auto"],[3,"name"],[3,"logo","alternateText",4,"ngIf"],[3,"content","title"],[3,"content","hasInnerHtml"],[3,"content","hasInnerHtml","title"],[1,"pl-2"],[3,"pageRoute","dso","tooltipMsg",4,"ngIf"],[1,"comcol-page-browse-section"],[3,"id","contentType"],[4,"ngVar"],["class","border-top my-5 pt-4",4,"ngIf"],[3,"logo","alternateText"],[3,"pageRoute","dso","tooltipMsg"],["class","mt-4",4,"ngIf"],["class","alert alert-info w-100","role","alert",4,"ngIf"],[1,"mt-4"],[1,"sr-only"],[3,"config","sortConfig","objects","hideGear"],[3,"message"],["role","alert",1,"alert","alert-info","w-100"],[1,"border-top","my-5","pt-4"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"div",0),p["\u0275\u0275text"](1,"\n    "),p["\u0275\u0275template"](2,L,8,3,"div",1),p["\u0275\u0275pipe"](3,"async"),p["\u0275\u0275text"](4,"\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](5,"\n")),2&e&&(p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngVar",p["\u0275\u0275pipeBind1"](3,1,t.collectionRD$)))},directives:[c.a,d.u,s.a,f.a,m.a,u.a,g.a,x.a,y.a,v.a,h.a,I.a],pipes:[d.b,b.e],styles:[""],data:{animation:[i.a,i.c]},changeDetection:0}),o}(),F=p["\u0275\u0275getInheritedFactory"](_)}}])}();
//# sourceMappingURL=43-es5.c3c9023a8e397671db09.js.map