import Vue from 'vue'
import './plugins/vuetify'
const App = () => import('./App')
import router from './router/router'
import {store} from './store'
import {auth} from '@/firebase/init'

const AlertCmp = () => import('./components/Shared/Alert.vue')

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp); //non-standard way
new Vue({
  router,
  store,
  create: ()=>{   
    auth.auth().onAuthStateChanged((user)=>{
      if (user){
        this.$store.dispatch('autoSigIn',user)
      }
    })
  },
  render: h => h(App)
}).$mount('#app')
