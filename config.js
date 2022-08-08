import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCcNJSJEabBrL-Za4gCXtN9WH4-i7RN1Tc",
    authDomain: "bike-e9856.firebaseapp.com",
    projectId: "bike-e9856",
    storageBucket: "bike-e9856.appspot.com",
    messagingSenderId: "1024083374654",
    appId: "1:1024083374654:web:c3f801ec7e02ede517176f"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
