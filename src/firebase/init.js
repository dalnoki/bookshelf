import firebase from "firebase";
import firestore from "firebase/firestore";

const config = {
    apiKey: "AIzaSyAdqpvXcXR0khLIrPh_JShvMliJ-NokBx0",
    authDomain: "mybookshelg.firebaseapp.com",
    databaseURL: "https://mybookshelg.firebaseio.com",
    projectId: "mybookshelg",
    storageBucket: "mybookshelg.appspot.com",
    messagingSenderId: "1029022955660"
  };
  const myFireBaseApp = firebase.initializeApp(config);
  
myFireBaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default myFireBaseApp.firestore();