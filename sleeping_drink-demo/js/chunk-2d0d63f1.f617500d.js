(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d63f1"],{7277:function(t,a,e){"use strict";e.r(a);var n=e("7a23"),c={class:"container-fluid mt-3 position-relative"};function s(t,a,e,s,o,r){var i=Object(n["J"])("Navbar"),u=Object(n["J"])("ToastMessages"),b=Object(n["J"])("router-view");return Object(n["z"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(i),Object(n["h"])("div",c,[Object(n["k"])(u),Object(n["k"])(b)])],64)}e("ac1f"),e("5319");var o=e("cfb9"),r=e("f367"),i={class:"navbar navbar-expand-lg navbar-dark bg-dark"},u={class:"container-fluid"},b=Object(n["h"])("a",{class:"navbar-brand",href:"#"},"範例作品",-1),l=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},v={class:"navbar-nav"},h=Object(n["j"])("產品"),p=Object(n["j"])("訂單"),j=Object(n["j"])("優惠券");function O(t,a,e,c,s,o){var r=Object(n["J"])("router-link");return Object(n["z"])(),Object(n["g"])("nav",i,[Object(n["h"])("div",u,[b,l,Object(n["h"])("div",d,[Object(n["h"])("div",v,[Object(n["k"])(r,{to:"/dashboard/products",class:"nav-link"},{default:Object(n["V"])((function(){return[h]})),_:1}),Object(n["k"])(r,{to:"/dashboard/orders",class:"nav-link"},{default:Object(n["V"])((function(){return[p]})),_:1}),Object(n["k"])(r,{to:"/dashboard/coupons",class:"nav-link"},{default:Object(n["V"])((function(){return[j]})),_:1}),Object(n["h"])("a",{href:"#",onClick:a[0]||(a[0]=Object(n["X"])((function(){return o.logout&&o.logout.apply(o,arguments)}),["prevent"])),class:"nav-link"},"登出")])])])])}var f={methods:{logout:function(){var t=this,a="".concat("https://vue3-course-api.hexschool.io/","logout");this.$http.post(a,this.user).then((function(a){a.data.success&&t.$router.push("/login")}))}}},k=e("6b0d"),g=e.n(k);const $=g()(f,[["render",O]]);var m=$,w={components:{Navbar:m,ToastMessages:r["a"]},provide:function(){return{emitter:o["a"]}},created:function(){var t=this,a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;var e="".concat("https://vue3-course-api.hexschool.io/","api/user/check");this.$http.post(e,this.user).then((function(a){a.data.success||t.$router.push("/login")}))}};const J=g()(w,[["render",s]]);a["default"]=J}}]);
//# sourceMappingURL=chunk-2d0d63f1.f617500d.js.map