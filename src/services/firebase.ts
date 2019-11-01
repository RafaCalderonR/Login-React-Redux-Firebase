import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCB9u4v-mjceDQGk4Grnn7fYi5B4io1-kk",
    authDomain: "instapuppy-69909.firebaseapp.com",
    databaseURL: "https://instapuppy-69909.firebaseio.com",
    projectId: "instapuppy-69909",
    storageBucket: "instapuppy-69909.appspot.com",
    messagingSenderId: "957362531932",
    appId: "1:957362531932:web:89dc3e908740dbe90a8099"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const storage = firebase.storage();