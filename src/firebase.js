import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAVTBQIv_XyzXEGS6UMlql9CPmbmXrRyHA",
    authDomain: "linkedin-clone-238b5.firebaseapp.com",
    projectId: "linkedin-clone-238b5",
    storageBucket: "linkedin-clone-238b5.appspot.com",
    messagingSenderId: "902748526906",
    appId: "1:902748526906:web:9888eee2537ae28ad49803",
    measurementId: "G-3LN1CNEVKH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };

