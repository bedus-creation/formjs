import t from"axios";import e from"lodash.clonedeep";import r from"lodash.isequal";import{reactive as s,watch as n}from"vue";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},o.apply(this,arguments)}class i{visit(e,r){const s=o({method:"get",data:{},onSuccess:()=>{},onError:()=>{},onFinish:()=>{}},r);let n="string"==typeof e?function(t){return new URL(t.toString(),window.location.toString())}(e):e;const{onSuccess:i,onError:a,onFinish:c}=s;t({method:s.method,url:n.href,data:s.data}).then(t=>i(t)).catch(t=>{var e;const r={};if(422===(null==(e=t.response)?void 0:e.status)){const e=t.response.data.errors;Object.keys(e).forEach(t=>{r[t]=e[t][0]})}return a(r)}).then(()=>c())}get(t,e={},r={}){return this.visit(t,o({},r,{method:"get",data:e}))}post(t,e={},r={}){return this.visit(t,o({},r,{method:"post",data:e}))}put(t,e={},r={}){return this.visit(t,o({},r,{method:"put",data:e}))}delete(t,e={}){return this.visit(t,o({},e,{method:"delete"}))}}function a(t){return t instanceof File||t instanceof Blob||t instanceof FileList&&t.length>0||t instanceof FormData&&Array.from(t.values()).some(t=>a(t))||"object"==typeof t&&null!==t&&Object.values(t).some(t=>a(t))}function c(t,e=new FormData,r=null){t=t||{};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&u(e,h(r,s),t[s]);return e}function h(t,e){return t?t+"["+e+"]":e}function u(t,e,r){return Array.isArray(r)?Array.from(r.keys()).forEach(s=>u(t,h(e,s.toString()),r[s])):r instanceof Date?t.append(e,r.toISOString()):r instanceof File?t.append(e,r,r.name):r instanceof Blob?t.append(e,r):"boolean"==typeof r?t.append(e,r?"1":"0"):"string"==typeof r?t.append(e,r):"number"==typeof r?t.append(e,`${r}`):null==r?t.append(e,""):void c(r,t,e)}function l(...t){const h=("string"==typeof t[0]?t[1]:t[0])||{};let u=e(h),l=t=>t;const p=new i,d=s(o({},h,{errors:{},isDirty:!1,processing:!1,transform(t){return l=t,this},data(){return Object.keys(h).reduce((t,e)=>(t[e]=this[e],t),{})},defaults(t,r){return u=void 0===t?this.data():Object.assign({},e(u),r?{[t]:r}:t),this},setError(t,e){return Object.assign(this.errors,e?{[t]:e}:t),this.hasErrors=Object.keys(this.errors).length>0,this},reset(...t){const r=e(u);return Object.assign(this,0===t.length?r:Object.keys(r).filter(e=>t.includes(e)).reduce((t,e)=>(t[e]=r[e],t),{})),this},clearErrors(...t){return this.errors=Object.keys(this.errors).reduce((e,r)=>o({},e,t.length>0&&!t.includes(r)?{[r]:this.errors[r]}:{}),{}),this.hasErrors=Object.keys(this.errors).length>0,this},submit(t,e,r={}){this.processing=!0;let s=l(this.data());!a(s)||s instanceof FormData||(s=c(s));const n=o({},r,{onSuccess:async t=>{this.processing=!1;const e=r.onSuccess?await r.onSuccess(t):null;return this.isDirty=!1,e},onError:t=>{if(this.processing=!1,this.clearErrors().setError(t),r.onError)return r.onError(t)},onFinish:()=>{if(this.processing=!1,r.onFinish)return r.onFinish()}});"delete"===t?Inertia.delete(e,o({},n,{data:s})):p[t](e,s,n)},get(t,e){this.submit("post",t,e)},post(t,e){this.submit("post",t,e)},put(t,e){this.submit("put",t,e)},delete(t,e){this.submit("delete",t,e)}}));return n(d,t=>{d.isDirty=!r(d.data(),u)},{immediate:!0,deep:!0}),d}const p=new i;export{p as Http,l as useForm};
//# sourceMappingURL=index.modern.js.map