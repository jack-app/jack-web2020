import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAjA5hRQeFS4P20cXIgzS2goxS9c1Ha--w",
  authDomain: "jack-web2020.firebaseapp.com",
  databaseURL: "https://jack-web2020.firebaseio.com",
  projectId: "jack-web2020",
  storageBucket: "jack-web2020.appspot.com",
  messagingSenderId: "339661154580",
  appId: "1:339661154580:web:15dfdfa98884bd0032fa01"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).mount('#app')
