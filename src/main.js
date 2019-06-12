import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import './registerServiceWorker'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './stylus/main.styl'
import dateFilter from './dateFilter'


Vue.filter('date',dateFilter)

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init(),
    firebase.initializeApp({
      apiKey: "AIzaSyDdTg8G5mQSAwQUIHzgekArSORbFcCRMZs",
      authDomain: "lielzeltiniv2.firebaseapp.com",
      databaseURL: "https://lielzeltiniv2.firebaseio.com",
      projectId: "lielzeltiniv2",
      storageBucket: "lielzeltiniv2.appspot.com",
      messagingSenderId: "917993463692",
      appId: "1:917993463692:web:a146cc662fa5176b"
/*       apiKey: "AIzaSyC6m02qmkf_0zNwBR8LobblU-2yWKY_zMk",
    authDomain: "lielzeltini-80359.firebaseapp.com",
    databaseURL: "https://lielzeltini-80359.firebaseio.com",
    projectId: "lielzeltini-80359",
    storageBucket: "lielzeltini-80359.appspot.com",
    messagingSenderId: "606113283110",
    appId: "1:606113283110:web:b73e9936d6c4464d" */
    })
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadPosts')
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')