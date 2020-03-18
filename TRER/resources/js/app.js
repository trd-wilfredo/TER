require('./bootstrap');
import Vue from 'vue'

//support vuex
import Vuex from 'vuex'
import App from './App'

import storeData from "./store/index"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Vuex)
Vue.use(ElementUI)
const store = new Vuex.Store(
  storeData
)

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})