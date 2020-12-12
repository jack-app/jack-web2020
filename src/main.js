import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyAvnxJYdOj5f4G0MJHVBcFngjonGenfg5U",
    authDomain: "gjajoijoajgejgap.firebaseapp.com",
    databaseURL: "https://gjajoijoajgejgap.firebaseio.com",
    projectId: "gjajoijoajgejgap",
    storageBucket: "gjajoijoajgejgap.appspot.com",
    messagingSenderId: "320014582702",
    appId: "1:320014582702:web:8a95b103e978e6b42b3e3f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

createApp(App).mount('#app')
