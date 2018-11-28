<template>
  <v-app grey lighten-4>   
    <Navbar/>
    <v-content>
     
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components:{
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
