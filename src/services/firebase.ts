import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "?????",
    authDomain: "?????",
    databaseURL: "?????",
    projectId: "?????",
    storageBucket: "?????",
    messagingSenderId: "?????",
    appId: "?????"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firestore = firebase.firestore();
  const settings = {timestampsInSnapshots: true}
  firestore.settings(settings)
  export const auth = firebase.auth();
  export const db = firestore
  export const storage = firebase.storage();