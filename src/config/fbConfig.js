import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
   apiKey: "AIzaSyDUXFfn8SdRDMU3YCcEx_DtOiQTAcPYl1w",
   authDomain: "spikeassignment.firebaseapp.com",
   databaseURL: "https://spikeassignment.firebaseio.com",
   projectId: "spikeassignment",
   storageBucket: "",
   messagingSenderId: "499353019537",
   appId: "1:499353019537:web:e926d78bed979c7a5a8b30",
   measurementId: "G-BTQELQZJBK"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 //firebase.firestore().settings({timestampsInSnapshots: true});


 export default firebase;
