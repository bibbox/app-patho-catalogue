!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,t){return(e=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,t)}function t(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,o=r(n);if(e){var i=r(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return a(this,t)}}function a(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{COhy:function(a,r,o){"use strict";o.r(r),o.d(r,"NavbarComponent",(function(){return C}));var i=o("kWWo"),c=o("+RhQ"),p=o("8Y7J"),s=o("G0yt"),l=o("SVse"),d=o("iInd"),u=o("PApk"),v=o("6CLs"),b=o("Xhx+"),m=o("MkTI"),g=o("TSSN");function f(n,e){1&n&&p["\u0275\u0275elementContainer"](0)}function h(n,e){if(1&n&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275text"](1,"\n          "),p["\u0275\u0275template"](2,f,1,0,"ng-container",8),p["\u0275\u0275pipe"](3,"async"),p["\u0275\u0275pipe"](4,"async"),p["\u0275\u0275text"](5,"\n        "),p["\u0275\u0275elementContainerEnd"]()),2&n){var t=e.$implicit,a=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngComponentOutlet",p["\u0275\u0275pipeBind1"](3,2,a.sectionMap$).get(t.id).component)("ngComponentOutletInjector",p["\u0275\u0275pipeBind1"](4,4,a.sectionMap$).get(t.id).injector)}}var x=function(n){return{open:n}},C=function(){var a=function(a){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&e(n,t)}(o,a);var r=t(o);function o(){return n(this,o),r.apply(this,arguments)}return o}(i.NavbarComponent);return a.\u0275fac=function(n){return O(n||a)},a.\u0275cmp=p["\u0275\u0275defineComponent"]({type:a,selectors:[["ds-navbar"]],features:[p["\u0275\u0275InheritDefinitionFeature"]],decls:32,vars:16,consts:[["role","navigation","role","navigation",1,"navbar","navbar-expand-md","navbar-light","p-0","navbar-container",3,"ngClass"],[1,"container","h-100"],["routerLink","/home",1,"navbar-brand","my-2"],["src","assets/images/dspace-logo.svg","alt","logo"],["id","collapsingNav",1,"w-100","h-100"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0","h-100"],[4,"ngFor","ngForOf"],[1,"navbar-collapsed"],[4,"ngComponentOutlet","ngComponentOutletInjector"]],template:function(n,e){1&n&&(p["\u0275\u0275elementStart"](0,"nav",0),p["\u0275\u0275pipe"](1,"async"),p["\u0275\u0275pipe"](2,"async"),p["\u0275\u0275pipe"](3,"async"),p["\u0275\u0275pipe"](4,"translate"),p["\u0275\u0275text"](5,"\n  "),p["\u0275\u0275elementStart"](6,"div",1),p["\u0275\u0275text"](7,"\n    "),p["\u0275\u0275elementStart"](8,"a",2),p["\u0275\u0275text"](9,"\n      "),p["\u0275\u0275element"](10,"img",3),p["\u0275\u0275text"](11,"\n    "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](12,"\n\n    "),p["\u0275\u0275elementStart"](13,"div",4),p["\u0275\u0275text"](14,"\n      "),p["\u0275\u0275elementStart"](15,"ul",5),p["\u0275\u0275text"](16,"\n        "),p["\u0275\u0275template"](17,h,6,6,"ng-container",6),p["\u0275\u0275pipe"](18,"async"),p["\u0275\u0275text"](19,"\n      "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](20,"\n    "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](21,"\n    "),p["\u0275\u0275element"](22,"ds-search-navbar",7),p["\u0275\u0275text"](23,"\n    "),p["\u0275\u0275element"](24,"ds-lang-switch",7),p["\u0275\u0275text"](25,"\n    "),p["\u0275\u0275element"](26,"ds-auth-nav-menu",7),p["\u0275\u0275text"](27,"\n    "),p["\u0275\u0275element"](28,"ds-impersonate-navbar",7),p["\u0275\u0275text"](29,"\n  "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](30,"\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275text"](31,"\n\n")),2&n&&(p["\u0275\u0275property"]("ngClass",p["\u0275\u0275pureFunction1"](14,x,!p["\u0275\u0275pipeBind1"](1,4,e.menuCollapsed)))("@slideMobileNav",p["\u0275\u0275pipeBind1"](2,6,e.windowService.isXsOrSm())?p["\u0275\u0275pipeBind1"](3,8,e.menuCollapsed)?"collapsed":"expanded":"default"),p["\u0275\u0275attribute"]("aria-label",p["\u0275\u0275pipeBind1"](4,10,"nav.main.description")),p["\u0275\u0275advance"](17),p["\u0275\u0275property"]("ngForOf",p["\u0275\u0275pipeBind1"](18,12,e.sections)))},directives:[s.B,l.r,d.j,l.t,u.a,v.a,b.a,m.a,l.s],pipes:[l.b,g.e],styles:["nav.navbar[_ngcontent-%COMP%]{border-top:1px solid var(--ds-header-navbar-border-top-color);border-bottom:1px solid var(--ds-header-navbar-border-bottom-color);-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;color:var(--ds-header-icon-color)}@media screen and (max-width:768px){.navbar[_ngcontent-%COMP%]{width:100%;background-color:var(--bs-white);position:absolute;overflow:hidden;height:0}.navbar.open[_ngcontent-%COMP%]{height:100vh}}@media screen and (min-width:768px){.reset-padding-md[_ngcontent-%COMP%]{margin-left:calc(var(--bs-spacer) / -2);margin-right:calc(var(--bs-spacer) / -2)}}.navbar-expand-md.navbar-container[_ngcontent-%COMP%]{height:80px}@media screen and (max-width:768px){.navbar-expand-md.navbar-container[_ngcontent-%COMP%]{padding:0}.navbar-expand-md.navbar-container[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{padding:0 var(--bs-spacer)}.navbar-expand-md.navbar-container[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]   .navbar-collapsed[_ngcontent-%COMP%], .navbar-expand-md.navbar-container[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]   a.navbar-brand[_ngcontent-%COMP%]{display:none}}a.navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:var(--ds-header-logo-height)}.navbar-nav[_ngcontent-%COMP%]     a.nav-link{color:var(--ds-navbar-link-color)}.navbar-nav[_ngcontent-%COMP%]     a.nav-link:hover{color:var(--ds-navbar-link-color-hover)}nav.navbar[_ngcontent-%COMP%]{border-bottom:5px solid var(--bs-green)}"],data:{animation:[c.d]}}),a}(),O=p["\u0275\u0275getInheritedFactory"](C)}}])}();
//# sourceMappingURL=78-es5.ef9c686cb8ae2f56e9c1.js.map