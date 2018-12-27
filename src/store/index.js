import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import shared from './shared'
import fileData from './fileData'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user,
    shared,
    fileData
  }
}) 