import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.config.productionTip = false

// Vue.http.options.root = 'https://project314.herokuapp.com/api';
Vue.http.options.root = 'http://localhost:3000/api';
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

// create an after interceptor
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if(request.after) {
      request.after.call(this, response)
    }
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
