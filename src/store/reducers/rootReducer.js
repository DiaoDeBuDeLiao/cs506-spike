import authReducer from "./authReducer"
import projReducer from "./projReducer"
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({

  auth: authReducer,
  house: projReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer

});

export default rootReducer;
