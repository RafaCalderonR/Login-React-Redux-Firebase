import * as firebase from 'firebase'

const firebaseConfig = {
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const storage = firebase.storage();