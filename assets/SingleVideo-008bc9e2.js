import{_ as d,b as n,l as r,r as l,o as t,d as a,i as s,j as c,t as u,g as v}from"./index-bbec2777.js";const p={key:0,class:"single-video"},f={class:"info"},g=["href"],h={class:"video"},m=["src","type"],y={__name:"SingleVideo",setup(V){const i=n(),_=r(),e=l(_.videos.find(o=>o.id===parseInt(i.params.id)));return(o,k)=>e.value?(t(),a("div",p,[s("div",f,[c(" Videographer: "),s("a",{href:e.value.user.url,target:"_blank"},u(e.value.user.name),9,g)]),s("div",h,[(t(),a("video",{key:e.value.video_files[1].link,controls:""},[s("source",{src:e.value.video_files[1].link,type:e.value.video_files[0].file_type},null,8,m)]))])])):v("",!0)}},S=d(y,[["__scopeId","data-v-55697d54"]]);export{S as default};