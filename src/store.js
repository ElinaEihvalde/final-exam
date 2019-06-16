import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    loading: false,

    loadedBlogPosts: [],
    post:[],
    submitedForm: []
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setLoadedPosts(state, payload) {
      state.loadedBlogPosts = payload
    },
setLoading(state, payload) {
  state.loading = payload
},
    createPost(state, payload) {
      state.loadedBlogPosts.push(payload)
    },
    messages(state, payload) {
      state.submitedForm.push(payload)
    },

    removePost(state, payload) {
      state.post.removeValue(payload)
    },



  },

  actions: {
    //sign in ----------

    signUserIn({
      commit,
    }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.user.uid,
              displayName: payload.displayName,
              savedVideos: [],
              fbKeys: {}

            }
            commit('setUser', newUser)

          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
  autoSignIn ({commit}, payload) {
    commit('setUser', {id: payload.uid})
  },
    //log out--------------
    logout({
      commit
    }) {
      firebase.auth().signOut()
      commit('setUser', null)
    },

    loadPosts({
      commit
    }) {
      commit ('setLoading',true)
      firebase.database().ref('posts').once('value')
        .then((data) => {
          const posts = []
          const obj = data.val()
          for (let key in obj) {
            posts.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              content: obj[key].content,
              coverImg: obj[key].coverImg,
              date: obj[key].date

            })
          }
          commit('setLoadedPosts', posts)
          commit ('setLoading',false)
        })
        .catch((error) => {
          console.log(error)
        })

    },



    createPost({
      commit
    }, payload) {
      const post = {
        title: payload.title,
        description: payload.description,
        coverImg: payload.coverImg,
        content: payload.content,
        date: payload.date.toISOString(),


      }
      //reach out to firebase and store it
      firebase.database().ref('posts').push(post)
        .then((data) => {
          const key = data.key
          commit('createPost', {
            ...post,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })

    },

    removePost({
      commit
    }, payload) {
      const post = {
        title: payload.title,
        description: payload.description,
        coverImg: payload.coverImg,
        content: payload.content,
        date: payload.date,


      }
      //reach out to firebase and store it
      firebase.database().ref('posts').removeValue(post)
        .then((data) => {
          const key = data.key
          commit('removePost', {
            ...post,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })

    },

    messages({
      commit
    }, payload) {
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
        .catch((error) => {
          console.log(error)
        })
    }

  },

  getters: {

    //--------------------USER------------------------------
    user(state) {
      return state.user
    },
loading(state) {
  return state.loading
},
    //---------------BLOG----------------------
    // All posts by date
    loadedBlogPosts(state) {
      return state.loadedBlogPosts.sort((postA, postB) => {
        return new Date(postB.date) - new Date(postA.date)
      })
    },

    latestPosts(state, getters) {
      return getters.loadedBlogPosts.slice(0, 2)

    },
    // single POST
    loadedPost(state) {
      return (postId) => {
        return state.loadedBlogPosts.find((post) => {
          return post.id == postId
        })
      }
    }
  }
})