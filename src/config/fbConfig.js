import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDkDPQ9B1ut8Vpe9ppPa0IhumgN0J5y0_U",
  authDomain: "spikeexercise-432d2.firebaseapp.com",
  databaseURL: "https://spikeexercise-432d2.firebaseio.com",
  projectId: "spikeexercise-432d2",
  storageBucket: "spikeexercise-432d2.appspot.com",
  messagingSenderId: "610931691840",
  appId: "1:610931691840:web:8c545d37850c4c39092aa5",
  measurementId: "G-Q94WQX9W09"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 //firebase.firestore().settings({timestampsInSnapshots: true});


 export default firebase;
