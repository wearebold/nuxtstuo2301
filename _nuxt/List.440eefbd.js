import{d as r,ag as l,I as u,N as e,a6 as p,al as _,l as m}from"./entry.f70434bf.js";import d from"./ContentSlot.7beb32d0.js";const f={primary:"heroicons-outline:check",info:"heroicons-outline:information-circle",success:"heroicons-outline:check-circle",warning:"heroicons-outline:exclamation",danger:"heroicons-outline:exclamation-circle"},y=r({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:n=>["primary","info","success","warning","danger"].includes(n)}},setup(n){const o=l(),{flatUnwrap:s,unwrap:a}=_(),i=u(()=>n.icon||f[n.type]);return()=>{const c=s((o.default&&o.default())??[],["ul"]).map(t=>a(t,["li"]));return e("ul",c.map(t=>e("li",[e("span",{class:`list-icon ${n.type}`},e(p,{name:i.value,class:"icon"})),e("span",e(d,{use:()=>t}))])))}}});const x=m(y,[["__scopeId","data-v-6109395b"]]);export{x as default};
