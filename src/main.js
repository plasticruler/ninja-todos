import Vue from 'vue'
import './plugins/vuetify'
const App = () => import('./App')
import router from './router/router'
import {fb} from '@/firebase/init'
import {store} from './store'
const AlertCmp = () => import('./components/Shared/Alert.vue')

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp); //non-standard way
new Vue({
  router,
  store,
  created: ()=>{   
    fb.auth().onAuthStateChanged((user)=>{
      if (user){
        user.next = '/'
        store.dispatch('AUTO_SIGNIN',user)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
