<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-card-title class="indigo white--text headline">
            Files
          </v-card-title>
          <v-card-text>
            <ul>
              <li v-for="item in webFiles" :key="item.id">
              {{item.title}}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios';
import {store} from '@/store/'
export default {
   mounted(){
      let url = 'http://localhost:5000/wdv?op=get-files&path=/joplin';
      axios
        .get(url)
        .then(response=>{
          this.$store.dispatch('SET_FILE_DATA', response.data.data)
        })
    },
    computed:{
      webFiles(){
          return this.$store.getters.fileData
      }
    }
};
</script>
