// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import '@/common/css/common.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'


import axios from 'axios'
require('./mock.js')
import common from '@/common/js/common.js'
import 'styles/common.css'
import store from '@/store/index.js'

import animated from 'animate.css'

Vue.use(animated)

Vue.use(common)
Vue.prototype.common=common


// require styles
import 'swiper/dist/css/swiper.css'

import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios
Vue.prototype.bus=new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
