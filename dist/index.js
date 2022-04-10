var t=require("axios"),r=require("lodash.clonedeep"),e=require("lodash.isequal"),n=require("vue");function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=/*#__PURE__*/i(t),s=/*#__PURE__*/i(r),u=/*#__PURE__*/i(e);function c(){return c=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},c.apply(this,arguments)}function a(t){throw new TypeError('"'+t+'" is read-only')}var h=/*#__PURE__*/function(){function t(){}var r=t.prototype;return r.visit=function(t,r){var e=c({method:"get",data:{},onSuccess:function(){},onError:function(){},onFinish:function(){}},r),n="string"==typeof t?function(t){return new URL(t.toString(),window.location.toString())}(t):t,i=e.onSuccess,s=e.onError,u=e.onFinish;o.default({method:e.method,url:n.href,data:e.data}).then(function(t){return i(t)}).catch(function(t){var r={};if(422===t.response.status){var e=t.response.data.errors;Object.keys(e).forEach(function(t){r[t]=e[t][0]})}return s(r)}).then(function(){return u()})},r.get=function(t,r,e){return void 0===r&&(r={}),void 0===e&&(e={}),this.visit(t,c({},e,{method:Method.GET,data:r}))},r.post=function(t,r,e){return void 0===r&&(r={}),void 0===e&&(e={}),this.visit(t,c({},e,{method:Method.POST,data:r}))},r.put=function(t,r,e){return void 0===r&&(r={}),void 0===e&&(e={}),this.visit(t,c({},e,{method:Method.PUT,data:r}))},r.delete=function(t,r){return void 0===r&&(r={}),this.visit(t,c({},r,{method:Method.DELETE}))},t}(),f=new h;exports.Http=f,exports.useForm=function(){var t=[].slice.call(arguments),r=("string"==typeof t[0]?t[1]:t[0])||{},e=s.default(r),i=function(t){return t},o=new h,f=n.reactive(c({},r,{errors:{},isDirty:!1,processing:!1,transform:function(t){return i=t,this},data:function(){var t=this;return Object.keys(r).reduce(function(r,e){return r[e]=t[e],r},{})},defaults:function(t,r){var n;return void 0===t?(this.data(),a("defaults")):(Object.assign({},s.default(e),r?((n={})[t]=r,n):t),a("defaults")),this},setError:function(t,r){var e;return Object.assign(this.errors,r?((e={})[t]=r,e):t),this.hasErrors=Object.keys(this.errors).length>0,this},reset:function(){var t=[].slice.call(arguments),r=s.default(e);return Object.assign(this,0===t.length?r:Object.keys(r).filter(function(r){return t.includes(r)}).reduce(function(t,e){return t[e]=r[e],t},{})),this},clearErrors:function(){var t=this,r=[].slice.call(arguments);return this.errors=Object.keys(this.errors).reduce(function(e,n){var i;return c({},e,r.length>0&&!r.includes(n)?((i={})[n]=t.errors[n],i):{})},{}),this.hasErrors=Object.keys(this.errors).length>0,this},submit:function(t,r,e){var n=this,s=this;void 0===e&&(e={}),this.processing=!0;var u=i(this.data()),a=c({},e,{onSuccess:function(t){try{var r=function(t){return s.isDirty=!1,t};return s.processing=!1,Promise.resolve(e.onSuccess?Promise.resolve(e.onSuccess(t)).then(r):r(null))}catch(t){return Promise.reject(t)}},onError:function(t){if(n.processing=!1,n.clearErrors().setError(t),e.onError)return e.onError(t)},onFinish:function(){if(n.processing=!1,e.onFinish)return e.onFinish()}});"delete"===t?Inertia.delete(r,c({},a,{data:u})):o[t](r,u,a)},get:function(t,r){this.submit("post",t,r)},post:function(t,r){this.submit("post",t,r)},put:function(t,r){this.submit("put",t,r)},delete:function(t,r){this.submit("delete",t,r)}}));return n.watch(f,function(t){f.isDirty=!u.default(f.data(),e)},{immediate:!0,deep:!0}),f};
//# sourceMappingURL=index.js.map
