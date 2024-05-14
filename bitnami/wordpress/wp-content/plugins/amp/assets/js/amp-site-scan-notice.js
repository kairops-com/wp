(()=>{var e={967:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=l(e,a(n)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=l(t,n));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.React,t=ampSiteScanNotice,r=window.wp.domReady;var s=n.n(r);const a=window.wp.element,l=window.wp.i18n,i=(0,a.createContext)();function c({children:t}){const[n,r]=(0,a.useState)(null);return(0,e.createElement)(i.Provider,{value:{error:n,setError:r}},t)}const o=window.wp.apiFetch;var u=n.n(o);const m=window.wp.url;function p(){const[e,t]=(0,a.useState)();return{error:e,setAsyncError:(0,a.useCallback)((e=>{t((()=>{throw e}))}),[])}}const d=(0,a.createContext)();function f({children:t,optionsRestPath:n,populateDefaultValues:r,hasErrorBoundary:s=!1,delaySave:l=!1}){const[c,o]=(0,a.useState)({}),[f,h]=(0,a.useState)(!1),[_,S]=(0,a.useState)(null),[E,y]=(0,a.useState)({}),[g,b]=(0,a.useState)(!1),[A,I]=(0,a.useState)(!1),[v,C]=(0,a.useState)({}),[U,w]=(0,a.useState)({}),{error:P,setError:T}=(0,a.useContext)(i),{setAsyncError:N}=p(),[O,R]=(0,a.useState)(!1),L=(0,a.useRef)(!1);(0,a.useEffect)((()=>()=>{L.current=!0}),[]);const x=(0,a.useCallback)((()=>{P||f||(async()=>{h(!0);try{const e=await u()({path:(0,m.addQueryArgs)(n,{_fields:["suppressed_plugins","suppressible_plugins"]})});if(!0===L.current)return;C({...v,...e})}catch(e){if(!0===L.current)return;return T(e),void(s&&N(e))}h(!1)})()}),[P,f,s,n,v,N,T]);(0,a.useEffect)((()=>{P||Object.keys(v).length||_||(async()=>{S(!0);try{const e=await u()({path:n});if(!0===L.current)return;r||!1!==e.plugin_configured||(e.mobile_redirect=!0,e.reader_theme=null,e.theme_support=null),C(e)}catch(e){if(!0===L.current)return;return T(e),void(s&&N(e))}S(!1)})()}),[P,_,s,v,n,r,N,T]);const M=(0,a.useCallback)((async()=>{b(!0);try{const e={...c};null===e.reader_theme&&delete e.reader_theme,v.plugin_configured||"mobile_redirect"in e||(e.mobile_redirect=v.mobile_redirect),v.plugin_configured||(e.plugin_configured=!0);const[t]=await Promise.all([u()({method:"post",path:n,data:e}),l?new Promise((e=>{setTimeout(e,1e3)})):()=>{}]);if(!0===L.current)return;C(t),T(null)}catch(e){if(!0===L.current)return;return b(!1),T(e),void(s&&N(e))}w({...U,...c}),(0,a.flushSync)((()=>{y(c),o({}),I(!0)})),b(!1)}),[l,s,n,N,v,T,c,U]),k=(0,a.useCallback)((e=>{o({...c,...e}),I(!1)}),[c]),B=(0,a.useCallback)((e=>{const t={...c};delete t[e],o(t)}),[c]);return(0,e.createElement)(d.Provider,{value:{editedOptions:{...v,...c},fetchingOptions:_,hasOptionsChanges:Boolean(Object.keys(c).length),didSaveOptions:A,updates:c,originalOptions:v,saveOptions:M,savedOptions:E,savingOptions:g,unsetOption:B,updateOptions:k,readerModeWasOverridden:O,refetchPluginSuppression:x,setReaderModeWasOverridden:R,modifiedOptions:U}},t)}const h=(0,a.createContext)();function _({children:t}){const[n,r]=(0,a.useState)([]),[s,l]=(0,a.useState)(null),[i,c]=(0,a.useState)(),o=(0,a.useRef)(!1);return(0,a.useEffect)((()=>()=>{o.current=!0}),[]),(0,a.useEffect)((()=>{i||n.length>0||s||(async()=>{l(!0);try{const e=await u()({path:(0,m.addQueryArgs)("/wp/v2/plugins",{_fields:["author","name","plugin","status","version"]})});if(!0===o.current)return;r(e)}catch(e){if(!0===o.current)return;c(e)}l(!1)})()}),[i,s,n]),(0,e.createElement)(h.Provider,{value:{fetchingPlugins:s,plugins:n}},t)}const S="standard";function E(e=""){return e.replace(/\/.*$/,"").replace(/\.php$/,"")}const y=(0,a.createContext)(),g="ACTION_SET_STATUS",b="ACTION_SCANNABLE_URLS_REQUEST",A="ACTION_SCANNABLE_URLS_RECEIVE",I="ACTION_SCAN_INITIALIZE",v="ACTION_SCAN_URL",C="ACTION_SCAN_RECEIVE_RESULTS",U="ACTION_SCAN_COMPLETE",w="ACTION_SCAN_CANCEL",P="STATUS_REQUEST_SCANNABLE_URLS",T="STATUS_FETCHING_SCANNABLE_URLS",N="STATUS_REFETCHING_PLUGIN_SUPPRESSION",O="STATUS_READY",R="STATUS_IDLE",L="STATUS_IN_PROGRESS",x="STATUS_COMPLETED",M="STATUS_FAILED",k="STATUS_CANCELLED",B="STATUS_SKIPPED",D={currentlyScannedUrlIndexes:[],forceStandardMode:!1,scannableUrls:[],scanOnce:!1,status:"",scansCount:0,urlIndexesPendingScan:[]},W=3,$=500;function j(e,t){if(e.status===B)return e;switch(t.type){case g:return{...e,status:t.status};case b:var n;return{...e,status:P,forceStandardMode:null!==(n=t?.forceStandardMode)&&void 0!==n&&n,currentlyScannedUrlIndexes:[],urlIndexesPendingScan:[]};case A:{const n=Array.isArray(t.scannableUrls)&&t.scannableUrls.length>0;return{...e,status:e.scanOnce&&e.scansCount>0||!n?x:O,scannableUrls:n?t.scannableUrls:[]}}case I:return[O,x,M,k].includes(e.status)?e.scanOnce&&e.scansCount>0?{...e,status:x}:{...e,status:R,currentlyScannedUrlIndexes:[],scansCount:e.scansCount+1,urlIndexesPendingScan:e.scannableUrls.map(((e,t)=>t))}:e;case v:return[R,L].includes(e.status)?{...e,status:L,currentlyScannedUrlIndexes:[...e.currentlyScannedUrlIndexes,t.currentlyScannedUrlIndex],urlIndexesPendingScan:e.urlIndexesPendingScan.filter((e=>e!==t.currentlyScannedUrlIndex))}:e;case C:var r;return[R,L].includes(e.status)?{...e,status:R,currentlyScannedUrlIndexes:e.currentlyScannedUrlIndexes.filter((e=>e!==t.currentlyScannedUrlIndex)),scannableUrls:[...e.scannableUrls.slice(0,t.currentlyScannedUrlIndex),{...e.scannableUrls[t.currentlyScannedUrlIndex],stale:!1,error:null!==(r=t.error)&&void 0!==r&&r,validated_url_post:t.error?{}:t.validatedUrlPost,validation_errors:t.error?[]:t.validationErrors},...e.scannableUrls.slice(t.currentlyScannedUrlIndex+1)]}:e;case U:{const t=e.scannableUrls.every((e=>Boolean(e.error)));return{...e,status:t?M:N}}case w:return[R,L].includes(e.status)?{...e,status:k,currentlyScannedUrlIndexes:[],urlIndexesPendingScan:[]}:e;default:throw new Error(`Unhandled action type: ${t.type}`)}}function F({children:t,fetchCachedValidationErrors:n=!1,refetchPluginSuppressionOnScanComplete:r=!1,resetOnOptionsChange:s=!1,scannableUrlsRestPath:l,scanOnce:i=!1,validateNonce:c}){var o;const{originalOptions:{theme_support:f},savedOptions:h,refetchPluginSuppression:_}=(0,a.useContext)(d),{setAsyncError:F}=p(),[V,G]=(0,a.useReducer)(j,{...D,scanOnce:i}),{currentlyScannedUrlIndexes:H,forceStandardMode:Q,scannableUrls:z,urlIndexesPendingScan:K,status:J}=V,Y=Q||f===S?"url":"amp_url",Z=null!==(o=z?.[0]?.[Y])&&void 0!==o?o:"",{hasSiteScanResults:q,pluginsWithAmpIncompatibility:X,stale:ee,themesWithAmpIncompatibility:te}=(0,a.useMemo)((()=>{if(![O,x,B].includes(J))return{hasSiteScanResults:!1,pluginsWithAmpIncompatibility:[],stale:!1,themesWithAmpIncompatibility:[]};const e=function(e=[],{useAmpUrls:t=!1}={}){const n=new Map,r=new Map;for(const s of e){const{amp_url:e,url:a,validation_errors:l}=s;if(l?.length)for(const s of l)if(s?.sources?.length)for(const l of s.sources)if(l?.type)if("plugin"===l.type){const r=E(l.name);if("gutenberg"===r&&s.sources.length>1)continue;n.set(r,new Set([...n.get(r)||[],t?e:a]))}else"theme"===l.type&&r.set(l.name,new Set([...r.get(l.name)||[],t?e:a]))}return n.delete("amp"),{plugins:[...n].map((([e,t])=>({slug:e,urls:[...t]}))),themes:[...r].map((([e,t])=>({slug:e,urls:[...t]})))}}(z,{useAmpUrls:"amp_url"===Y});return{hasSiteScanResults:z.some((e=>Boolean(e?.validation_errors))),pluginsWithAmpIncompatibility:e.plugins,stale:z.some((e=>!0===e?.stale)),themesWithAmpIncompatibility:e.themes}}),[z,J,Y]);(0,a.useEffect)((()=>{c||J===B||G({type:g,status:B})}),[J,c]);const ne=(0,a.useRef)(!1);(0,a.useEffect)((()=>()=>{ne.current=!0}),[]);const re=(0,a.useCallback)(((e={})=>{G({type:b,forceStandardMode:e?.forceStandardMode})}),[]),se=(0,a.useCallback)((()=>{G({type:I})}),[]),ae=(0,a.useCallback)((()=>{G({type:w})}),[]);(0,a.useEffect)((()=>{s&&Object.keys(h).length>0&&G({type:b})}),[s,h]),(0,a.useEffect)((()=>{J===O&&Object.keys(h.suppressed_plugins||{}).length>0&&G({type:I})}),[h?.suppressed_plugins,J]),(0,a.useEffect)((()=>{J===N&&(r&&_(),G({type:g,status:x}))}),[_,r,J]);const[le,ie]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{let e;return le&&(async()=>{await new Promise((t=>{e=setTimeout(t,$)})),!0!==ne.current&&ie(!1)})(),()=>{e&&clearTimeout(e)}}),[le]),(0,a.useEffect)((()=>{(async()=>{if(J===P){G({type:g,status:T});try{const e=["url","amp_url","type","label"],t=await u()({path:(0,m.addQueryArgs)(l,{_fields:n?[...e,"validation_errors","stale"]:e,force_standard_mode:Q?1:void 0})});if(!0===ne.current)return;G({type:A,scannableUrls:t})}catch(e){if(!0===ne.current)return;F(e)}}})()}),[n,Q,l,F,J]),(0,a.useEffect)((()=>{if(![R,L].includes(J))return;if(0===K.length)return void(0===H.length&&G({type:U}));if(le||H.length>=W)return;ie(!0);const e=K[0];G({type:v,currentlyScannedUrlIndex:e}),(async()=>{const t={};try{const n=z[e][Y],r={amp_validate:{cache:!0,cache_bust:Math.random(),force_standard_mode:Q||void 0,nonce:c,omit_stylesheets:!0}},s=await fetch((0,m.addQueryArgs)(n,r)),a=await s.json();if(!0===ne.current)return;s.ok?(t.validatedUrlPost=a.validated_url_post,t.validationErrors=a.results.map((({error:e})=>e))):t.error=a?.code||!0}catch(e){if(!0===ne.current)return;t.error=!0}G({type:C,currentlyScannedUrlIndex:e,...t}),ie(!1)})()}),[H.length,Q,z,le,J,K,Y,c]),(0,e.createElement)(y.Provider,{value:{cancelSiteScan:ae,fetchScannableUrls:re,forceStandardMode:Q,hasSiteScanResults:q,isBusy:[R,L].includes(J),isCancelled:J===k,isCompleted:[N,x].includes(J),isFailed:J===M,isFetchingScannableUrls:[P,T].includes(J),isInitializing:!Boolean(J),isReady:J===O,isSiteScannable:z.length>0,isSkipped:J===B,pluginsWithAmpIncompatibility:X,previewPermalink:Z,scannableUrls:z,scannedUrlsMaxIndex:([L,R].includes(J)?Math.min(z.length,...K):0)-1,stale:ee,startSiteScan:se,themesWithAmpIncompatibility:te}},t)}const V=(0,a.createContext)();function G({children:t}){const[n,r]=(0,a.useState)([]),[s,l]=(0,a.useState)(null),[i,c]=(0,a.useState)(),o=(0,a.useRef)(!1);return(0,a.useEffect)((()=>()=>{o.current=!0}),[]),(0,a.useEffect)((()=>{i||n.length>0||s||(async()=>{l(!0);try{const e=await u()({path:(0,m.addQueryArgs)("/wp/v2/themes",{_fields:["author","name","status","stylesheet","template","version"]})});if(!0===o.current)return;r(e)}catch(e){if(!0===o.current)return;c(e)}l(!1)})()}),[i,s,n]),(0,e.createElement)(V.Provider,{value:{fetchingThemes:s,themes:n}},t)}const H=window.wp.components,Q=window.wp.compose,z=4e3;function K({children:t,onCopy:n,onFinishCopy:r,text:s,...l}){const i=(0,a.useRef)(),c=(0,Q.useCopyToClipboard)(s,(()=>{n&&n(),clearTimeout(i.current),r&&(i.current=setTimeout((()=>r()),z))}));return(0,a.useEffect)((()=>{clearTimeout(i.current)}),[]),(0,e.createElement)(H.Button,{...l,className:"components-clipboard-button",ref:c,onCopy:e=>{e.target.focus()}},t)}function J({error:t,finishLinkLabel:n,finishLinkUrl:r,title:s}){const[i,c]=(0,a.useState)(!1),{message:o,stack:u}=t;return(0,e.createElement)("div",{className:"error-screen-container"},(0,e.createElement)(H.Panel,{className:"error-screen"},(0,e.createElement)("h1",null,s||(0,l.__)("Something went wrong.","amp")),(0,e.createElement)("p",{dangerouslySetInnerHTML:{__html:o||(0,l.__)("There was an error loading the page.","amp")}}),(0,e.createElement)("p",null,(0,a.createInterpolateElement)((0,l.__)("Please submit details to our <a>support forum</a>.","amp"),{a:(0,e.createElement)("a",{href:"https://wordpress.org/support/plugin/amp/",target:"_blank",rel:"noreferrer noopener"})})),u&&(0,e.createElement)("details",null,(0,e.createElement)("summary",null,(0,l.__)("Details","amp")),(0,e.createElement)("pre",null,u),(0,e.createElement)(K,{isSmall:!0,isSecondary:!0,text:JSON.stringify({message:o,stack:u},null,2),onCopy:()=>c(!0),onFinishCopy:()=>c(!1)},i?(0,l.__)("Copied!","amp"):(0,l.__)("Copy Error","amp"))),r&&n&&(0,e.createElement)("p",null,(0,e.createElement)("a",{href:r},n))))}class Y extends a.Component{constructor(e){super(e),this.timeout=null,this.state={error:null}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}componentDidCatch(e){this.setState({error:e})}render(){const{error:t}=this.state,{children:n,exitLinkLabel:r,exitLinkUrl:s,title:a}=this.props;return t?(0,e.createElement)(J,{error:t,finishLinkLabel:r,finishLinkUrl:s,title:a}):n}}var Z=n(967),q=n.n(Z);const X="info",ee="success",te="warning",ne="error";function re({children:t,className:n,isDismissible:r=!1,onDismiss:s,type:i=X}){const[c,o]=(0,a.useState)(!1),u=(0,a.useCallback)((()=>{o(!0),"function"==typeof s&&s()}),[s]);return r&&c?null:(0,e.createElement)("div",{className:q()("amp-admin-notice",n,{"amp-admin-notice--dismissible":r,"amp-admin-notice--info":i===X,"amp-admin-notice--success":i===ee,"amp-admin-notice--warning":i===te,"amp-admin-notice--error":i===ne})},t,r&&(0,e.createElement)("button",{type:"button",onClick:u,className:"amp-admin-notice__dismiss"},(0,e.createElement)(H.VisuallyHidden,{as:"span"},(0,l.__)("Dismiss","amp"))))}function se({inline:t=!1}){const n=t?"span":"div";return(0,e.createElement)(n,{className:q()("amp-spinner-container",{"amp-spinner-container--inline":t})},(0,e.createElement)(H.Spinner,null))}const ae=e=>n.g?.location?.host!==new URL(e).host,le=new URL(t.SETTINGS_LINK);function ie({pluginsWithAmpIncompatibility:n}){const{fetchingPlugins:r,plugins:s}=(0,a.useContext)(h),i=(0,a.useMemo)((()=>s?.reduce(((e,t)=>({...e,[E(t.plugin)]:t.name})),{})),[s]);return r?null:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("p",null,(0,l._n)("AMP compatibility issue(s) discovered with the following plugin:","AMP compatibility issue(s) discovered with the following plugins:",n.length,"amp")),n.map((t=>(0,e.createElement)("details",{key:t.slug,className:"amp-site-scan-notice__source-details"},(0,e.createElement)("summary",{className:"amp-site-scan-notice__source-summary"},(0,a.createInterpolateElement)((0,l.sprintf)(/* translators: 1: plugin name; 2: number of URLs with AMP validation issues. */
(0,l._n)("<b>%1$s</b> on %2$d URL","<b>%1$s</b> on %2$d URLs",t.urls.length,"amp"),i[t.slug],t.urls.length),{b:(0,e.createElement)("b",null)})),(0,e.createElement)("ul",{className:"amp-site-scan-notice__urls-list"},t.urls.map((t=>(0,e.createElement)("li",{key:t},(0,e.createElement)("a",{href:t,target:"_blank",rel:"noopener noreferrer"},t)))))))),(0,e.createElement)("div",{className:"amp-site-scan-notice__cta"},(0,e.createElement)("a",{href:le.href,className:"button"},(0,l.__)("Review Plugin Suppression","amp")),(0,e.createElement)("a",{href:t.AMP_COMPATIBLE_PLUGINS_URL,className:"button",...ae(t.AMP_COMPATIBLE_PLUGINS_URL)?{target:"_blank",rel:"noopener noreferrer"}:{}},(0,l.__)("View AMP-Compatible Plugins","amp"))))}function ce({themesWithAmpIncompatibility:n}){const{fetchingThemes:r,themes:s}=(0,a.useContext)(V),i=(0,a.useMemo)((()=>s?.reduce(((e,t)=>{var n;return{...e,[t.stylesheet]:null!==(n=t.name?.rendered)&&void 0!==n?n:t.name}}),{})),[s]);return r?null:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("p",null,(0,l._n)("AMP compatibility issue(s) discovered with the following theme:","AMP compatibility issue(s) discovered with the following themes:",n.length,"amp")),n.map((t=>(0,e.createElement)("details",{key:t.slug,className:"amp-site-scan-notice__source-details"},(0,e.createElement)("summary",{className:"amp-site-scan-notice__source-summary"},(0,a.createInterpolateElement)((0,l.sprintf)(/* translators: 1: theme name; 2: number of URLs with AMP validation issues. */
(0,l._n)("<b>%1$s</b> on %2$d URL","<b>%1$s</b> on %2$d URLs",t.urls.length,"amp"),i[t.slug],t.urls.length),{b:(0,e.createElement)("b",null)})),(0,e.createElement)("ul",{className:"amp-site-scan-notice__urls-list"},t.urls.map((t=>(0,e.createElement)("li",{key:t},(0,e.createElement)("a",{href:t,target:"_blank",rel:"noopener noreferrer"},t)))))))),(0,e.createElement)("div",{className:"amp-site-scan-notice__cta"},(0,e.createElement)("a",{href:t.AMP_COMPATIBLE_THEMES_URL,className:"button",...ae(t.AMP_COMPATIBLE_THEMES_URL)?{target:"_blank",rel:"noopener noreferrer"}:{}},(0,l.__)("View AMP-Compatible Themes","amp"))))}function oe(){const{cancelSiteScan:t,fetchScannableUrls:n,isCancelled:r,isCompleted:s,isFailed:i,isInitializing:c,isReady:o,pluginsWithAmpIncompatibility:u,themesWithAmpIncompatibility:m,startSiteScan:p}=(0,a.useContext)(y);(0,a.useEffect)((()=>t),[t]),(0,a.useEffect)((()=>{c?n():o&&p()}),[n,c,o,p]);const d={className:"amp-site-scan-notice",isDismissible:!0,onDismiss:t};if(i||r)return(0,e.createElement)(re,{type:ne,...d},(0,e.createElement)("p",null,(0,l.__)("AMP could not check your site for compatibility issues.","amp")));if(s){let t=[u.length>0?(0,e.createElement)(ie,{key:`plugins-${u.length}`,pluginsWithAmpIncompatibility:u}):null,m.length>0?(0,e.createElement)(ce,{key:`themes-${m.length}`,themesWithAmpIncompatibility:m}):null];return document.location.href.includes("themes.php")&&(t=t.reverse()),t=t.filter(Boolean),(0,e.createElement)(re,{type:t.length?te:ee,...d},t.length?t:(0,e.createElement)("p",null,(0,l.__)("No AMP compatibility issues detected.","amp")))}return(0,e.createElement)(re,{type:X,...d},(0,e.createElement)("p",null,(0,l.__)("Checking your site for AMP compatibility issues…","amp"),(0,e.createElement)(se,{inline:!0})))}let ue;function me({children:r}){return n.g.removeEventListener("error",ue),(0,e.createElement)(c,null,(0,e.createElement)(Y,{title:(0,l.__)("The AMP Site Scanner has experienced an error.","amp")},(0,e.createElement)(f,{hasErrorBoundary:!0,optionsRestPath:t.OPTIONS_REST_PATH,populateDefaultValues:!1},(0,e.createElement)(_,null,(0,e.createElement)(G,null,(0,e.createElement)(F,{scannableUrlsRestPath:t.SCANNABLE_URLS_REST_PATH,validateNonce:t.VALIDATE_NONCE},r))))))}le.hash="plugin-suppression",s()((()=>{let r=document.getElementById(t.APP_ROOT_ID);if(!r){const e=document.getElementById(t.APP_ROOT_SIBLING_ID);if(!e)return;r=document.createElement("div"),r.setAttribute("id",t.APP_ROOT_ID),e.after(r)}ue=t=>{t.filename&&/amp-site-scan-notice(\.min)?\.js/.test(t.filename)&&(0,a.createRoot)(r).render((0,e.createElement)(J,{error:t.error}))},n.g.addEventListener("error",ue),(0,a.createRoot)(r).render((0,e.createElement)(me,null,(0,e.createElement)(oe,null)))}))})()})();