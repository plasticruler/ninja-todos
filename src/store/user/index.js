import * as firebase from 'firebase'

export default {
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, payload) {     
      console.log(payload)
      state.user = payload
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              name: user.displayName,
              email: user.email,
              photoUrl: user.photoURL
            }
            commit('SET_USER', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          result => {
            commit('setLoading', false)
            commit('SET_USER', result.user)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.error(error)
          }
        )
    },
    signUserInGithub ({commit}) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then(
          result => {
            commit('setLoading', false)
            const newUser = {
              id: result.user.uid,
              name: result.user.displayName,
              email: result.user.email,
              photoUrl: result.user.photoURL
            }
            commit('SET_USER', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserInTwitter ({commit}) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              name: user.displayName,
              email: user.email,
              photoUrl: user.photoURL
            }
            commit('SET_USER', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    AUTO_SIGNIN ({commit}, payload) {
      commit('SET_USER', {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      })
    },
    resetPasswordWithEmail ({ commit }, payload) {
      const { email } = payload
      commit('setLoading', true)
      auth.sendPasswordResetEmail(email)
      .then(
        () => {
          commit('setLoading', false)
          console.log('Email Sent')
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        }
      )
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('SET_USER', null)
    }
  }
}