(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(t,e,n){var content=n(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(35).default)("25ca550e",content,!0,{sourceMap:!1})},195:function(t,e,n){"use strict";var o=n(181);n.n(o).a},196:function(t,e,n){(e=n(34)(!1)).push([t.i,".container[data-v-18fa17be]{margin:0 auto;min-height:80vh;text-align:center}.skill[data-v-18fa17be]{display:inline-block;padding:15px;margin:15px;font-size:20px;border:1px solid rgba(85,85,85,.33333);border-radius:5px}.skill-move[data-v-18fa17be]{transition:transform 1s}.btn-secondary[data-v-18fa17be]{padding:15px;margin:15px;font-size:20px}.contact[data-v-18fa17be]{padding:10px;font-size:16px}.contact__name[data-v-18fa17be],.contact__value[data-v-18fa17be]{text-align:left}",""]),t.exports=e},224:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{skills:["HTML","CSS","JavaScript","ES 6","Vue.js","React.js","Nuxt.js","Vuex","Redax","JQuery","Bootstrap","Wordpress","Flexbox","Sass/scss","Pug","Gulp","Webpack","Git","PHP","MySQL","Laravel","Phothoshop","Corel Draw","Figma","Adobe XD"],contacts:{phone:"+ 38 050 422 77 23",email:"iq180@ukr.net",linkedin:"linkedin.com/in/vsevolod-drevitsky/",skype:"ymnik180",github:"github.com/drevitsky"},isTrue:!1,timerId:null}},mounted:function(){this.startShuffle()},methods:{shuffle:function(t){for(var e,n,o=t.length;0!==o;)n=Math.floor(Math.random()*o),e=t[o-=1],t[o]=t[n],t[n]=e;return t},stopShuffle:function(){clearInterval(this.timerId)},startShuffle:function(){var t=this;this.timerId=setInterval((function(){t.skills=t.shuffle(t.skills),setTimeout((function(){t.isTrue=!t.isTrue}),0),t.isTrue=!t.isTrue}),5e3),this.isTrue=!this.isTrue}}},r=(n(195),n(26)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("h1",[t._v("Drevitsky Vsevolod")]),t._v(" "),t._l(t.contacts,(function(e,o){return n("div",{staticClass:"row contact__row"},[n("div",{staticClass:"col-md-2 contact contact__name"},[t._v("\n          "+t._s(o)+" :\n        ")]),t._v(" "),n("div",{staticClass:"col-md-10 contact contact__value"},[t._v("\n          "+t._s(e)+"\n        ")])])}))],2),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("transition-group",{attrs:{name:"skill",tag:"div"}},t._l(t.skills,(function(e){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isTrue,expression:"isTrue"}],key:e,staticClass:"skill"},[t._v("\n        "+t._s(e)+"\n      ")])})),0)],1)]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-secondary",on:{click:t.stopShuffle}},[t._v("Stop Shuffle")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("img",{attrs:{src:"/img/my-img.jpeg",alt:"my-img"}})])}],!1,null,"18fa17be",null);e.default=component.exports}}]);