(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[991],{7942:function(e,t,n){"use strict";var r=n(5696);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(4957),c=n(9898),l=n(639);var s={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),d=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):c||i}}),[o,e.href,e.as]),f=d.href,p=d.as,h=e.children,v=e.replace,m=e.shallow,x=e.scroll,y=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,j=l.useIntersection({rootMargin:"200px"}),g=r(j,2),S=g[0],w=g[1],_=i.default.useCallback((function(e){S(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,S]);i.default.useEffect((function(){var e=w&&n&&a.isLocalURL(f),t="undefined"!==typeof y?y:o&&o.locale,r=s[f+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,f,p,{locale:t})}),[p,f,w,y,n,o]);var C={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:l,scroll:c}))}(e,o,f,p,v,m,x,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(f)&&u(o,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof y?y:o&&o.locale,L=o&&o.isLocaleDomain&&a.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);C.href=L||a.addBasePath(a.addLocale(p,E,o&&o.defaultLocale))}return i.default.cloneElement(t,C)};t.default=d},639:function(e,t,n){"use strict";var r=n(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!a,s=o.useRef(),u=o.useState(!1),d=r(u,2),f=d[0],p=d[1],h=o.useState(t?t.current:null),v=r(h,2),m=v[0],x=v[1],y=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),l||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:n}))}),[l,m,n,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&x(t.current)}),[t]),[y,f]};var o=n(7294),i=n(6286),a="undefined"!==typeof IntersectionObserver;var c=new Map},8991:function(e,t,n){"use strict";n.r(t);var r=n(9499),o=n(6835),i=n(7294),a=n(1664),c=n(186),l=n(4059),s=n(9583),u=n(5434),d=n(8193),f=n(471),p=n(6547),h=n(753),v=n(4931),m=n(5893);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=c.ZP.div.withConfig({displayName:"Sidebar__StyledSidebar",componentId:"sc-77ih9s-0"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:42px;background:#2f3136;padding:8px;border-right:1px solid ",";"],(function(e){return e.theme.SILVER_DARK})),j=c.ZP.div.withConfig({displayName:"Sidebar__StyledElement",componentId:"sc-77ih9s-1"})(["text-align:center;font-size:28px;font-weight:700;width:100%;color:",";cursor:pointer;pointer-events:",";a{text-align:center;width:100%;}svg{vertical-align:middle;}"],(function(e){var t=e.theme;return e.disabled?t.SILVER_DARK:t.SILVER}),(function(e){return e.disabled&&"none"})),g=c.ZP.span.withConfig({displayName:"Sidebar__StyledText",componentId:"sc-77ih9s-2"})(["color:",";"],(function(e){var t=e.theme;return e.secondary?t.FULL_WHITE:t.ORANGE})),S=c.ZP.nav.withConfig({displayName:"Sidebar__StyledTopWrapper",componentId:"sc-77ih9s-3"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:100%;& > div,a{border-bottom:1px solid ",";}"],(function(e){return e.theme.SILVER_DARK})),w=c.ZP.nav.withConfig({displayName:"Sidebar__StyledBottomWrapper",componentId:"sc-77ih9s-4"})(["display:flex;justify-content:space-between;flex-direction:column;align-items:center;width:100%;& > div,a{border-top:1px solid ",";}"],(function(e){return e.theme.SILVER_DARK})),_=c.ZP.div.withConfig({displayName:"Sidebar__StyledLogo",componentId:"sc-77ih9s-5"})(["color:",";"],(function(e){return e.theme.FULL_WHITE})),C=c.ZP.label.withConfig({displayName:"Sidebar__StyledImportFile",componentId:"sc-77ih9s-6"})(['cursor:pointer;input[type="file"]{display:none;}']);t.default=function(e){var t,n=e.setJson,c=i.useState(null),x=(0,o.Z)(c,2),E=x[0],L=x[1],O=(0,l._)("config",h.u),P=(0,o.Z)(O,2),k=P[0],I=P[1],R=function(e){I((function(t){return y(y({},t),{},(0,r.Z)({},e,!t[e]))}))};return i.useEffect((function(){if(E){var e=new FileReader;e.readAsText(E,"UTF-8"),e.onload=function(e){var t;n(null===(t=e.target)||void 0===t?void 0:t.result)}}}),[E,n]),(0,m.jsxs)(b,{children:[(0,m.jsxs)(S,{children:[(0,m.jsx)(a.default,{passHref:!0,href:"/",children:(0,m.jsx)(j,{as:"a",children:(0,m.jsxs)(_,{children:[(0,m.jsx)(g,{children:"J"}),(0,m.jsx)(g,{secondary:!0,children:"V"})]})})}),(0,m.jsx)(a.default,{passHref:!0,href:"/",children:(0,m.jsx)(j,{as:"a",title:"Home",children:(0,m.jsx)(d.V9Z,{})})}),(0,m.jsx)(j,{as:"a",title:"Auto Format",onClick:function(){R("autoformat"),(0,v.ZP)("Auto format has been ".concat(k.autoformat?"disabled.":"enabled."))},children:k.autoformat?(0,m.jsx)(u.kk0,{}):(0,m.jsx)(u.sGS,{})}),(0,m.jsx)(j,{as:"a",onClick:function(){n("[]"),localStorage.removeItem("json"),v.ZP.success("Cleared JSON and removed from memory.")},title:"Clear JSON",children:(0,m.jsx)(d.XzY,{})}),(0,m.jsx)(j,{as:"a",onClick:function(){return I((function(e){return y(y({},e),{},{layout:(0,p.a)(e.layout)})}))},title:"Change Layout",children:(t=k.layout,"LEFT"===t?(0,m.jsx)(f.mtx,{}):"UP"===t?(0,m.jsx)(f.LkX,{}):"RIGHT"===t?(0,m.jsx)(f.glP,{}):(0,m.jsx)(f.uFB,{}))}),(0,m.jsx)(j,{title:"Toggle Controls",as:"a",onClick:function(){R("controls"),(0,v.ZP)("Controls ".concat(k.controls?"disabled.":"enabled."))},children:k.controls?(0,m.jsx)(d.yLO,{}):(0,m.jsx)(d.QzB,{})}),(0,m.jsx)(j,{as:"a",title:"Toggle Expand/Collapse",onClick:function(){R("expand"),(0,v.ZP)("".concat(k.expand?"Collapsed":"Expanded"," nodes."))},children:k.expand?(0,m.jsx)(u.bPX,{}):(0,m.jsx)(u.SPo,{})}),(0,m.jsx)(j,{as:"a",title:"Import JSON File",children:(0,m.jsxs)(C,{children:[(0,m.jsx)("input",{onChange:function(e){var t;e.target.files&&L(null===(t=e.target.files)||void 0===t?void 0:t.item(0))},type:"file",accept:"application/JSON"},null===E||void 0===E?void 0:E.name),(0,m.jsx)(s.Xur,{})]})})]}),(0,m.jsxs)(w,{children:[(0,m.jsx)(j,{children:(0,m.jsx)(a.default,{href:"https://twitter.com/aykutsarach",children:(0,m.jsx)("a",{rel:"me",target:"_blank",children:(0,m.jsx)(d.h3E,{})})})}),(0,m.jsx)(j,{children:(0,m.jsx)(a.default,{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,m.jsx)("a",{rel:"me",target:"_blank",children:(0,m.jsx)(d.RrF,{})})})})]})]})}},1664:function(e,t,n){e.exports=n(7942)}}]);