import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    submitedForm: []
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    messages (state, payload) {
      state.submitedForm.push(payload)
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
    },
messages ({commit}, payload) {
  const contactForm = {
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    date: payload.date,
    message: payload.message
  }
  firebase.database().ref('messages').push(contactForm)
  .then((data) => {
    const key = data.key
    commit('messages', {
      ...contactForm,
      id: key
    })
  })
  .catch((error) => {console.log(error)
  })
}

  },

  getters: {

    //--------------------USER------------------------------
    user(state) {
      return state.user
    },
  }
})
