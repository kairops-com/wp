import{a as u,u as m}from"./links.BdfvOpfI.js";import{B as _}from"./Editor.BtkW3JD6.js";import{C as h}from"./Caret.iRBf3wcH.js";import{C as f}from"./Card.CacAhFkZ.js";import{C as g}from"./SettingsRow.DQldd-1Z.js";import{x as t,c as y,C as s,m as r,o as a,a as w,l as v,D as C,t as b,d as x}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as S}from"./_plugin-vue_export-helper.BN1snXvA.js";import"./default-i18n.Bd0Z306Z.js";import"./helpers.pkmhnyB1.js";import"./index.BQgiQQKQ.js";import"./Tooltip.Jp05nfCy.js";import"./Slide.CRIn0kdn.js";import"./Row.CzuhYwfs.js";const E={setup(){return{optionsStore:u(),rootStore:m()}},components:{BaseEditor:_,CoreAlert:h,CoreCard:f,CoreSettingsRow:g},data(){return{strings:{htaccessEditor:this.$t.__(".htaccess Editor",this.$td),editHtaccess:this.$t.__("Edit .htaccess",this.$td),description:this.$t.sprintf(this.$t.__("This allows you to edit the .htaccess file for your site. All WordPress sites on an Apache server have a .htaccess file and we have provided you with a convenient way of editing it. Care should always be taken when editing important files from within WordPress as an incorrect change could cause WordPress to become inaccessible. %1$sBe sure to make a backup before making changes and ensure that you have FTP access to your web server and know how to access and edit files via FTP.%2$s",this.$td),"<strong>","</strong>")}}}},k={class:"aioseo-tools-htaccess-editor"},B=["innerHTML"];function V(A,n,H,e,o,P){const i=t("core-alert"),c=t("base-editor"),d=t("core-settings-row"),l=t("core-card");return a(),y("div",k,[s(l,{slug:"htaccessEditor","header-text":o.strings.htaccessEditor},{default:r(()=>[w("div",{class:"aioseo-settings-row aioseo-section-description",innerHTML:o.strings.description},null,8,B),s(d,{name:o.strings.editHtaccess,align:""},{content:r(()=>[e.optionsStore.htaccessError?(a(),v(i,{key:0,type:"red"},{default:r(()=>[C(b(e.optionsStore.htaccessError),1)]),_:1})):x("",!0),s(c,{class:"htaccess-editor",disabled:!e.rootStore.aioseo.user.unfilteredHtml,modelValue:e.rootStore.aioseo.data.htaccess,"onUpdate:modelValue":n[0]||(n[0]=p=>e.rootStore.aioseo.data.htaccess=p),"line-numbers":"",monospace:"","preserve-whitespace":""},null,8,["disabled","modelValue"])]),_:1},8,["name"])]),_:1},8,["header-text"])])}const z=S(E,[["render",V]]);export{z as default};
