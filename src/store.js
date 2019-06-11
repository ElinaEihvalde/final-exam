import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },

  actions: {
    //sign in ----------

    signUserIn({
      commit, dispatch
    }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.user.uid,
              displayName: payload.displayName,
              savedVideos: [],
              fbKeys:{}

            }
            commit('setUser', newUser)
            dispatch('getUserName')
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    
    //log out--------------
    logout({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }


  },

  getters: {

    //--------------------USER------------------------------
    user(state) {
      return state.user
    },
  }
})
