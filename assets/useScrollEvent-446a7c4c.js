import{m as i,p as l,q as c}from"./index-bbec2777.js";let o=0;const u=(s,a)=>{const[n,e]=i(a);if(!n)return;const r=()=>{const t=s.value.lastElementChild;t.getBoundingClientRect().top<=window.innerHeight+150&&t.id!==o&&(n({query:e.searchString||e.defaultSearchString||"",per_page:e.perPage,page:e.nextPage}),o=t.id)};l(()=>window.addEventListener("scroll",r)),c(()=>window.removeEventListener("scroll",r))};export{u};
