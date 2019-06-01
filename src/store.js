import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,

    loadedBlogPosts: []
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setLoadedPosts(state, payload) {
      state.loadedBlogPosts = payload
    },

    createPost(state, payload) {
      state.loadedBlogPosts.push(payload)
    }



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



  },

  getters: {

    //--------------------USER------------------------------
    user(state) {
      return state.user
    },

    //---------------BLOG----------------------
    // All posts by date
    loadedBlogPosts(state) {
      return state.loadedBlogPosts.sort((postA, postB) => {
        return new Date(postB.date) - new Date(postA.date)
      })
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