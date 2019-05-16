// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false


//把axios添加在组件的构造函数Vue的原型中，所有组件都可以直接访问axios。
import axios from "axios";
Vue.prototype.http = axios;

//导入并注册过滤器
import wan from "./filters/wan.js";
Vue.filter("wan",wan);

import store from "./store/store.js";

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // 使用vuex时，需要把数据仓库对象注册在根组件中，这样任何组件中都可以访问数据对象
  store
})


//根据屏幕宽度计算根元素字体大小。
function calcRem(){
  // console.log(window.innerWidth);
  //将rem(根元素的字体大小)设置为屏幕宽度的1%
  document.documentElement.style.fontSize = window.innerWidth/100+"px";
}

calcRem();


//当浏览器显示区域尺寸发生变化时触发。
window.onresize = function(){
  console.log("屏幕大小变化了");
  calcRem();
}

//当设备手持的方向改变时触发（仅存在于移动端浏览器）
window.onorientationchange = function(){
  console.log("设备方向改变了");
  calcRem();
}