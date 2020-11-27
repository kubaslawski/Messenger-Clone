import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzplvET2EMiNnwi5M4OB224ssmGLLwBjA",
    authDomain: "messenger-clone-app-33f05.firebaseapp.com",
    databaseURL: "https://messenger-clone-app-33f05.firebaseio.com",
    projectId: "messenger-clone-app-33f05",
    storageBucket: "messenger-clone-app-33f05.appspot.com",
    messagingSenderId: "151230559753",
    appId: "1:151230559753:web:fe9553093d99d30b4dead8"
})

const db = firebaseApp.firestore();

export default db;
