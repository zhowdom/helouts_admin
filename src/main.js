// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './utils/interceptor'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

var dayjs = require('dayjs');
Vue.prototype.$axios = axios
Vue.prototype.dayjs = dayjs
Vue.config.productionTip = false
Vue.use(ElementUI);

/*
Vue.prototype.dialogVisibleAnother = true
Vue.prototype.cclickIndex = null
Vue.prototype.dialogVisibleNearby = false
Vue.prototype.handleSpreadByHome = function (v) {
  v ? blu_event('是否分房间漫游', 'true') : blu_event('是否分房间漫游', 'false')
}
*/
//eslint-disable no-new 
window.ve = new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})

